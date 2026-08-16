import { CourseId, StudyMode } from './types';
import { COURSES } from './data/coursesData';

export interface AppRoute {
  page: 'landing' | 'course';
  courseId?: CourseId;
  mode?: StudyMode; // 'hub' | 'workbook' | 'cbt' | 'flashcards'
  subMode?: string; // e.g. 'drill' | 'timed' | 'flashcards' | 'summaries' | 'tips'
}

export function parseHash(hash: string): AppRoute {
  // Strip leading # and /
  const cleaned = hash.replace(/^#\/?/, '').trim();
  if (!cleaned) {
    return { page: 'landing' };
  }

  const parts = cleaned.split('/').filter(Boolean);

  let courseIdStr = '';
  let modeStr = '';
  let subModeStr = '';

  if (parts[0] === 'course' && parts[1]) {
    courseIdStr = parts[1].toLowerCase();
    modeStr = parts[2]?.toLowerCase() || 'hub';
    subModeStr = parts[3]?.toLowerCase() || '';
  } else if (COURSES[parts[0]?.toLowerCase() as CourseId]) {
    courseIdStr = parts[0].toLowerCase();
    modeStr = parts[1]?.toLowerCase() || 'hub';
    subModeStr = parts[2]?.toLowerCase() || '';
  } else {
    return { page: 'landing' };
  }

  if (courseIdStr && COURSES[courseIdStr as CourseId]) {
    const validModes: StudyMode[] = ['hub', 'workbook', 'cbt', 'flashcards'];
    const mode = validModes.includes(modeStr as StudyMode) ? (modeStr as StudyMode) : 'hub';

    return {
      page: 'course',
      courseId: courseIdStr as CourseId,
      mode,
      subMode: subModeStr
    };
  }

  return { page: 'landing' };
}

export function buildHash(route: AppRoute): string {
  if (route.page === 'landing' || !route.courseId) {
    return '#/';
  }

  let hash = `#/course/${route.courseId}`;
  if (route.mode && route.mode !== 'hub') {
    hash += `/${route.mode}`;
    if (route.subMode) {
      hash += `/${route.subMode}`;
    }
  }
  return hash;
}

export function navigateTo(route: AppRoute) {
  const hash = buildHash(route);
  if (window.location.hash !== hash) {
    window.location.hash = hash;
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

export function navigateBack(fallbackRoute?: AppRoute) {
  if (window.history.length > 1) {
    window.history.back();
  } else if (fallbackRoute) {
    navigateTo(fallbackRoute);
  } else {
    navigateTo({ page: 'landing' });
  }
}
