import {
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  query,
  orderBy,
  limit,
} from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from './firebase';
import { StudentProfile } from '../types';

const LOCAL_STORAGE_KEY = 'ges_student_profile';

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
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
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

  const path = `students/${studentId}`;
  try {
    const docRef = doc(db, 'students', studentId);
    await setDoc(docRef, profile, { merge: true });
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(profile));
    return profile;
  } catch (error) {
    // Save to localStorage regardless so student flow isn't blocked if offline
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(profile));
    console.error('Error saving student profile to Firestore:', error);
    return profile;
  }
}

/**
 * Saves a completed quiz attempt to the student's Firestore subcollection
 */
export async function saveQuizAttempt(
  data: Omit<QuizAttemptRecord, 'id' | 'studentId' | 'completedAt'>
): Promise<string | null> {
  const student = getLocalStudentProfile();
  if (!student) return null;

  const attemptId = `attempt_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
  const path = `students/${student.id}/quizAttempts/${attemptId}`;

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

  try {
    const docRef = doc(db, 'students', student.id, 'quizAttempts', attemptId);
    await setDoc(docRef, payload);
    return attemptId;
  } catch (error) {
    console.warn('Could not save attempt to cloud:', error);
    return null;
  }
}

/**
 * Fetches recent quiz attempts for the active student
 */
export async function fetchStudentQuizAttempts(
  studentId: string,
  courseId?: string
): Promise<QuizAttemptRecord[]> {
  if (!studentId) return [];

  const path = `students/${studentId}/quizAttempts`;
  try {
    const collRef = collection(db, 'students', studentId, 'quizAttempts');
    const q = query(collRef, orderBy('completedAt', 'desc'), limit(20));
    const snapshot = await getDocs(q);

    const attempts: QuizAttemptRecord[] = [];
    snapshot.forEach((docSnap) => {
      const item = docSnap.data() as QuizAttemptRecord;
      if (!courseId || item.courseId === courseId) {
        attempts.push(item);
      }
    });

    return attempts;
  } catch (error) {
    console.warn('Could not fetch quiz attempts:', error);
    return [];
  }
}

/**
 * Saves course study progress for a student
 */
export async function saveCourseProgress(
  courseId: string,
  completedWorkbookCount: number
): Promise<void> {
  const student = getLocalStudentProfile();
  if (!student) return;

  const docId = courseId;
  const path = `students/${student.id}/progress/${docId}`;

  const payload: CourseProgressRecord = {
    id: docId,
    studentId: student.id,
    courseId,
    completedWorkbookCount,
    lastStudiedAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  try {
    const docRef = doc(db, 'students', student.id, 'progress', docId);
    await setDoc(docRef, payload, { merge: true });
  } catch (error) {
    console.warn('Could not save course progress to cloud:', error);
  }
}
