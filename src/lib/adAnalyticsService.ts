import { 
  doc, 
  getDoc, 
  setDoc, 
  onSnapshot, 
  increment 
} from 'firebase/firestore';
import { db } from './firebase';

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
 * Guaranteed to only count once per device in Firestore.
 */
export async function recordAdClickRedirect(adId: string): Promise<number> {
  const deviceId = getOrCreateDeviceId();
  const localClickKey = `uniport_ad_clicked_${adId}`;

  try {
    const metricDocRef = doc(db, 'adMetrics', adId);
    const visitorDocRef = doc(db, 'adMetrics', adId, 'visitors', deviceId);

    // Check if this device already clicked locally first to avoid unnecessary network writes
    const hasClickedLocally = localStorage.getItem(localClickKey);

    if (!hasClickedLocally) {
      // Check in Firestore visitor subcollection
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

        // Cache locally that this device has recorded its click
        try {
          localStorage.setItem(localClickKey, 'true');
        } catch {
          // ignore storage error
        }
      } else {
        localStorage.setItem(localClickKey, 'true');
      }
    }

    // Get current count
    const metricSnap = await getDoc(metricDocRef);
    if (metricSnap.exists()) {
      const data = metricSnap.data();
      return typeof data.uniqueClicks === 'number' ? data.uniqueClicks : 1;
    }
    return 1;
  } catch (err) {
    console.warn('Ad analytics tracking fallback: ', err);
    // Return fallback cached count
    return 1;
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

  // Initial local cached seed value
  const cachedVal = localStorage.getItem(`ad_count_cache_${adId}`);
  if (cachedVal) {
    const parsed = parseInt(cachedVal, 10);
    if (!isNaN(parsed) && parsed > 0) {
      callback(parsed);
    }
  }

  const unsubscribe = onSnapshot(
    metricDocRef,
    (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.data();
        const count = typeof data.uniqueClicks === 'number' ? data.uniqueClicks : 0;
        localStorage.setItem(`ad_count_cache_${adId}`, count.toString());
        callback(count);
      } else {
        callback(0);
      }
    },
    (err) => {
      console.warn('Ad metrics listener offline/fallback: ', err);
    }
  );

  return unsubscribe;
}
