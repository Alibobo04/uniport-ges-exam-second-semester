import {
  collection,
  doc,
  setDoc,
  getDocs,
  query,
  orderBy,
  limit,
} from 'firebase/firestore';
import { 
  db, 
  isCloudWriteAvailable, 
  markQuotaExceeded, 
  isQuotaError 
} from './firebase';
import { StudentProfile } from '../types';

const LOCAL_PROFILE_KEY = 'ges_student_profile';
const LOCAL_ATTEMPTS_KEY = 'ges_local_quiz_attempts';
const LOCAL_PROGRESS_PREFIX = 'ges_progress_';

export interface QuizAttemptRecord {
  id: string;
  studentId: string;
  studentName?: string;
  department?: string;
  courseId: string;
  mode: 'cbt' | 'workbook';
  score: number;
  totalQuestions: number;
  percentage: number;
  scoreOver70?: number;
  grade: string;
  timeSpentSeconds?: number;
  completedAt: string;
}

export interface CourseProgressRecord {
  id: string;
  studentId: string;
  courseId: string;
  completedWorkbookCount: number;
  lastStudiedAt?: string;
  updatedAt: string;
}

/**
 * Gets student profile from localStorage
 */
export function getLocalStudentProfile(): StudentProfile | null {
  try {
    const raw = localStorage.getItem(LOCAL_PROFILE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as StudentProfile;
  } catch {
    return null;
  }
}

/**
 * Saves or updates student profile in Firestore and localStorage
 */
export async function saveStudentProfileToFirestore(
  firstName: string,
  secondName: string,
  department: string
): Promise<StudentProfile> {
  const existing = getLocalStudentProfile();
  const studentId = existing?.id || `std_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`;
  const now = new Date().toISOString();

  const profile: StudentProfile = {
    id: studentId,
    firstName: firstName.trim(),
    secondName: secondName.trim(),
    department: department.trim(),
    createdAt: existing?.createdAt || now,
    updatedAt: now,
  };

  // Always persist locally first so app is fully responsive
  try {
    localStorage.setItem(LOCAL_PROFILE_KEY, JSON.stringify(profile));
  } catch {
    // ignore
  }

  // Attempt Firestore sync if cloud writes are available
  if (isCloudWriteAvailable()) {
    try {
      const docRef = doc(db, 'students', studentId);
      await setDoc(docRef, profile, { merge: true });
    } catch (error) {
      if (isQuotaError(error)) {
        markQuotaExceeded();
      }
      // Silently fall back to localStorage
    }
  }

  return profile;
}

/**
 * Gets local quiz attempts for a student
 */
function getLocalAttempts(): QuizAttemptRecord[] {
  try {
    const raw = localStorage.getItem(LOCAL_ATTEMPTS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

/**
 * Saves a completed quiz attempt locally and syncs to Firestore
 */
export async function saveQuizAttempt(
  data: Omit<QuizAttemptRecord, 'id' | 'studentId' | 'completedAt'>
): Promise<string | null> {
  const student = getLocalStudentProfile();
  if (!student) return null;

  const attemptId = `attempt_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
  const pct = Math.round(data.percentage);
  const scoreOver70Val = data.scoreOver70 !== undefined 
    ? Math.round(data.scoreOver70) 
    : (data.totalQuestions > 0 ? Math.round((data.score / data.totalQuestions) * 70) : 0);

  const payload: QuizAttemptRecord = {
    id: attemptId,
    studentId: student.id,
    studentName: `${student.firstName} ${student.secondName}`.trim(),
    department: student.department,
    courseId: data.courseId,
    mode: data.mode,
    score: data.score,
    totalQuestions: data.totalQuestions,
    percentage: pct,
    scoreOver70: scoreOver70Val,
    grade: data.grade,
    timeSpentSeconds: data.timeSpentSeconds || 0,
    completedAt: new Date().toISOString(),
  };

  // 1. Always save locally immediately
  try {
    const local = getLocalAttempts();
    const updated = [payload, ...local].slice(0, 50);
    localStorage.setItem(LOCAL_ATTEMPTS_KEY, JSON.stringify(updated));
  } catch {
    // ignore local storage error
  }

  // 2. Cloud sync if write quota is available
  if (isCloudWriteAvailable()) {
    try {
      const docRef = doc(db, 'students', student.id, 'quizAttempts', attemptId);
      await setDoc(docRef, payload);
    } catch (error) {
      if (isQuotaError(error)) {
        markQuotaExceeded();
      }
      // Silently proceed with local copy
    }
  }

  return attemptId;
}

/**
 * Fetches recent quiz attempts for the active student
 */
export async function fetchStudentQuizAttempts(
  studentId: string,
  courseId?: string
): Promise<QuizAttemptRecord[]> {
  if (!studentId) return [];

  const localAttempts = getLocalAttempts().filter(
    (a) => a.studentId === studentId && (!courseId || a.courseId === courseId)
  );

  if (!isCloudWriteAvailable()) {
    return localAttempts;
  }

  try {
    const collRef = collection(db, 'students', studentId, 'quizAttempts');
    const q = query(collRef, orderBy('completedAt', 'desc'), limit(20));
    const snapshot = await getDocs(q);

    const remoteAttempts: QuizAttemptRecord[] = [];
    snapshot.forEach((docSnap) => {
      const item = docSnap.data() as QuizAttemptRecord;
      if (!courseId || item.courseId === courseId) {
        remoteAttempts.push(item);
      }
    });

    if (remoteAttempts.length > 0) {
      // Merge remote and local, deduplicating by ID
      const seen = new Set<string>();
      const combined: QuizAttemptRecord[] = [];
      [...remoteAttempts, ...localAttempts].forEach((item) => {
        if (!seen.has(item.id)) {
          seen.add(item.id);
          combined.push(item);
        }
      });
      return combined;
    }

    return localAttempts;
  } catch (error) {
    if (isQuotaError(error)) {
      markQuotaExceeded();
    }
    return localAttempts;
  }
}

// Throttle course progress cloud syncs
const progressSyncTimers: Record<string, NodeJS.Timeout> = {};

/**
 * Saves course study progress for a student
 */
export async function saveCourseProgress(
  courseId: string,
  completedWorkbookCount: number
): Promise<void> {
  const student = getLocalStudentProfile();
  if (!student) return;

  const storageKey = `${LOCAL_PROGRESS_PREFIX}${student.id}_${courseId}`;
  
  // 1. Save to local storage immediately
  try {
    localStorage.setItem(
      storageKey,
      JSON.stringify({
        courseId,
        completedWorkbookCount,
        updatedAt: new Date().toISOString(),
      })
    );
  } catch {
    // ignore
  }

  // 2. Debounce cloud sync to avoid rapid write spam on option clicks
  if (!isCloudWriteAvailable()) return;

  if (progressSyncTimers[courseId]) {
    clearTimeout(progressSyncTimers[courseId]);
  }

  progressSyncTimers[courseId] = setTimeout(async () => {
    try {
      const payload: CourseProgressRecord = {
        id: courseId,
        studentId: student.id,
        courseId,
        completedWorkbookCount,
        lastStudiedAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      const docRef = doc(db, 'students', student.id, 'progress', courseId);
      await setDoc(docRef, payload, { merge: true });
    } catch (error) {
      if (isQuotaError(error)) {
        markQuotaExceeded();
      }
    }
  }, 3000); // 3-second debounce
}
