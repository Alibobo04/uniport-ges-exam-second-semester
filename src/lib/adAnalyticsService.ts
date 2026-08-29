import { 
  doc, 
  getDoc, 
  setDoc, 
  onSnapshot, 
  increment 
} from 'firebase/firestore';
import { 
  db, 
  isCloudWriteAvailable, 
  markQuotaExceeded, 
  isQuotaError 
} from './firebase';

const DEVICE_ID_KEY = 'uniport_device_unique_id';

/**
 * Get or generate a persistent anonymous device identifier
 */
export function getOrCreateDeviceId(): string {
  try {
    let deviceId = localStorage.getItem(DEVICE_ID_KEY);
    if (!deviceId) {
      // Create an alphanumeric valid ID (alphanumeric and hyphens only for Firestore rule validity)
      const randomPart = Math.random().toString(36).substring(2, 12);
      const timePart = Date.now().toString(36);
      deviceId = `dev_${timePart}_${randomPart}`;
      localStorage.setItem(DEVICE_ID_KEY, deviceId);
    }
    return deviceId;
  } catch {
    return `dev_fallback_${Date.now()}`;
  }
}

/**
 * Record a unique click/redirect for a specific ad from this device.
 * Guaranteed to only count once per device.
 */
export async function recordAdClickRedirect(adId: string): Promise<number> {
  const deviceId = getOrCreateDeviceId();
  const localClickKey = `uniport_ad_clicked_${adId}`;
  const localCountKey = `ad_count_cache_${adId}`;

  // Get current local count
  let currentCount = 1;
  try {
    const raw = localStorage.getItem(localCountKey);
    if (raw) {
      currentCount = parseInt(raw, 10) || 1;
    }
  } catch {
    // ignore
  }

  // If already clicked on this device, return current count
  const hasClickedLocally = localStorage.getItem(localClickKey);
  if (hasClickedLocally) {
    return currentCount;
  }

  // Mark clicked locally immediately
  try {
    localStorage.setItem(localClickKey, 'true');
    localStorage.setItem(localCountKey, (currentCount + 1).toString());
  } catch {
    // ignore
  }

  if (!isCloudWriteAvailable()) {
    return currentCount + 1;
  }

  try {
    const metricDocRef = doc(db, 'adMetrics', adId);
    const visitorDocRef = doc(db, 'adMetrics', adId, 'visitors', deviceId);

    const visitorSnap = await getDoc(visitorDocRef);

    if (!visitorSnap.exists()) {
      const now = new Date().toISOString();

      // 1. Record this device as visitor
      await setDoc(visitorDocRef, {
        id: deviceId,
        adId: adId,
        deviceId: deviceId,
        firstVisitedAt: now,
      });

      // 2. Increment aggregate unique click count or initialize it
      const metricSnap = await getDoc(metricDocRef);
      if (metricSnap.exists()) {
        await setDoc(
          metricDocRef,
          {
            id: adId,
            adId: adId,
            uniqueClicks: increment(1),
            updatedAt: now,
          },
          { merge: true }
        );
      } else {
        await setDoc(metricDocRef, {
          id: adId,
          adId: adId,
          uniqueClicks: 1,
          updatedAt: now,
        });
      }
    }

    // Get updated count
    const metricSnap = await getDoc(metricDocRef);
    if (metricSnap.exists()) {
      const data = metricSnap.data();
      const count = typeof data.uniqueClicks === 'number' ? data.uniqueClicks : currentCount + 1;
      localStorage.setItem(localCountKey, count.toString());
      return count;
    }
    return currentCount + 1;
  } catch (err) {
    if (isQuotaError(err)) {
      markQuotaExceeded();
    }
    return currentCount + 1;
  }
}

/**
 * Subscribe to real-time unique click count for a given ad
 */
export function subscribeToAdMetrics(
  adId: string,
  callback: (uniqueClicks: number) => void
): () => void {
  const metricDocRef = doc(db, 'adMetrics', adId);
  const localCountKey = `ad_count_cache_${adId}`;

  // Initial local cached seed value
  const cachedVal = localStorage.getItem(localCountKey);
  if (cachedVal) {
    const parsed = parseInt(cachedVal, 10);
    if (!isNaN(parsed) && parsed > 0) {
      callback(parsed);
    }
  }

  if (!isCloudWriteAvailable()) {
    return () => {};
  }

  try {
    const unsubscribe = onSnapshot(
      metricDocRef,
      (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.data();
          const count = typeof data.uniqueClicks === 'number' ? data.uniqueClicks : 0;
          localStorage.setItem(localCountKey, count.toString());
          callback(count);
        }
      },
      (err) => {
        if (isQuotaError(err)) {
          markQuotaExceeded();
        }
      }
    );

    return unsubscribe;
  } catch {
    return () => {};
  }
}
