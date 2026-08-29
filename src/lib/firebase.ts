import { initializeApp, getApps, getApp } from 'firebase/app';
import {
  initializeFirestore,
  getFirestore,
  doc,
  getDoc,
  disableNetwork,
  enableNetwork,
  Firestore,
} from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';

// Initialize Firebase App
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// CRITICAL: Initialize Firestore with database ID and auto-detect long polling for iframe & network resilience
function createFirestoreInstance(): Firestore {
  try {
    return initializeFirestore(
      app,
      {
        experimentalAutoDetectLongPolling: true,
      },
      firebaseConfig.firestoreDatabaseId
    );
  } catch {
    return getFirestore(app, firebaseConfig.firestoreDatabaseId);
  }
}

export const db = createFirestoreInstance();

export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

export interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  studentId?: string | null;
}

export function handleFirestoreError(
  error: unknown,
  operationType: OperationType,
  path: string | null,
  studentId?: string | null
): never {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    operationType,
    path,
    studentId: studentId || null,
  };
  console.warn('Firestore Operation Status: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

const QUOTA_STORAGE_KEY = 'ges_firestore_quota_exceeded_until';

export function isQuotaError(error: unknown): boolean {
  if (!error) return false;
  const msg = error instanceof Error ? error.message : String(error);
  return (
    msg.includes('resource-exhausted') ||
    msg.includes('Quota limit exceeded') ||
    msg.includes('Free daily write units') ||
    msg.includes('quota')
  );
}

// Check initial persisted quota status on boot
function getInitialQuotaExceededState(): boolean {
  try {
    const raw = localStorage.getItem(QUOTA_STORAGE_KEY);
    if (!raw) return false;
    const expiry = parseInt(raw, 10);
    if (Date.now() < expiry) {
      return true;
    }
    localStorage.removeItem(QUOTA_STORAGE_KEY);
    return false;
  } catch {
    return false;
  }
}

let isQuotaExceeded = getInitialQuotaExceededState();

// If quota is already marked as exceeded from a previous run, disable network immediately
if (isQuotaExceeded) {
  try {
    disableNetwork(db).catch(() => {});
  } catch {
    // ignore
  }
}

export function markQuotaExceeded(): void {
  isQuotaExceeded = true;
  // Mark quota as exceeded for 6 hours (until Google Cloud daily quota resets)
  const resetTime = Date.now() + 6 * 60 * 60 * 1000;
  try {
    localStorage.setItem(QUOTA_STORAGE_KEY, resetTime.toString());
  } catch {
    // ignore
  }
  // Disable Firestore network requests to prevent continuous retry backoffs
  try {
    disableNetwork(db).catch(() => {});
  } catch {
    // ignore
  }
  console.info('Cloud Firestore daily free quota reached. Operating in resilient offline mode.');
}

export function isCloudWriteAvailable(): boolean {
  if (!isQuotaExceeded) return true;
  try {
    const raw = localStorage.getItem(QUOTA_STORAGE_KEY);
    if (!raw) {
      isQuotaExceeded = false;
      try {
        enableNetwork(db).catch(() => {});
      } catch {
        // ignore
      }
      return true;
    }
    const expiry = parseInt(raw, 10);
    if (Date.now() > expiry) {
      localStorage.removeItem(QUOTA_STORAGE_KEY);
      isQuotaExceeded = false;
      try {
        enableNetwork(db).catch(() => {});
      } catch {
        // ignore
      }
      return true;
    }
  } catch {
    // ignore
  }
  return false;
}

// Test initial connection to Firestore with graceful fallback
export async function testConnection(): Promise<boolean> {
  if (!isCloudWriteAvailable()) {
    return false;
  }
  try {
    await getDoc(doc(db, 'test', 'connection'));
    return true;
  } catch (error) {
    if (isQuotaError(error)) {
      markQuotaExceeded();
    }
    // If offline, quota-exhausted or network unreachable, silently proceed with offline persistence
    return false;
  }
}
