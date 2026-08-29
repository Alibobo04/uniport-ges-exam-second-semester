/**
 * Service to manage daily WhatsApp Group modal displays & user confirmations.
 * Daily limit: stops appearing for the day once confirmed 3 times; resets next day.
 */

const STORAGE_KEY = 'ges_wa_modal_daily_confirmations';
const MAX_DAILY_CONFIRMATIONS = 3;

export const OFFICIAL_WHATSAPP_GROUP_LINK = 'https://chat.whatsapp.com/JZA3vuXdR1ZBLn0UHop2yJ?s=cl&p=a&ilr=0';
export const OFFICIAL_GROUP_NAME = 'GES QUIZ HUB';

function getLocalDateString(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

interface StoredPromptData {
  date: string;
  confirmedCount: number;
}

function getStoredData(): StoredPromptData {
  const today = getLocalDateString();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed: StoredPromptData = JSON.parse(raw);
      if (parsed && parsed.date === today && typeof parsed.confirmedCount === 'number') {
        return parsed;
      }
    }
  } catch {
    // Ignore storage parse error
  }
  return { date: today, confirmedCount: 0 };
}

/**
 * Check if the WhatsApp modal should be shown to the user on this device.
 * Returns true if the user has confirmed fewer than 3 times today.
 */
export function shouldShowWhatsAppModal(): boolean {
  try {
    const data = getStoredData();
    return data.confirmedCount < MAX_DAILY_CONFIRMATIONS;
  } catch {
    return true;
  }
}

/**
 * Record a user confirmation that they have joined the WhatsApp group.
 * Increments the daily confirmation count for today.
 */
export function recordWhatsAppJoinedConfirmation(): number {
  const today = getLocalDateString();
  const current = getStoredData();
  const newCount = (current.date === today ? current.confirmedCount : 0) + 1;

  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        date: today,
        confirmedCount: newCount,
      })
    );
  } catch {
    // Ignore storage write error
  }

  return newCount;
}

/**
 * Get remaining confirmations left for today before it stops appearing
 */
export function getRemainingDailyConfirmations(): number {
  const current = getStoredData();
  return Math.max(0, MAX_DAILY_CONFIRMATIONS - current.confirmedCount);
}
