import React, { useState, useEffect } from 'react';
import { CourseInfo, CourseId, StudyMode } from './types';
import { COURSES } from './data/coursesData';
import { Header } from './components/Header';
import { LevelSelector } from './components/LevelSelector';
import { StudyDashboard } from './components/StudyDashboard';
import { Footer } from './components/Footer';
import { AppRoute, parseHash, navigateTo, navigateBack } from './router';

export default function App() {
  const [route, setRoute] = useState<AppRoute>(() => parseHash(window.location.hash));
  const [soundEnabled, setSoundEnabled] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('ges_sound_pref');
      return saved ? JSON.parse(saved) : true;
    } catch {
      return true;
    }
  });

  // Listen to browser history changes (device back/forward buttons, URL changes)
  useEffect(() => {
    const handleHashChange = () => {
      const currentRoute = parseHash(window.location.hash);
      setRoute(currentRoute);
    };

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handleHashChange);

    // Initial check: if hash is empty, sync to #/
    if (!window.location.hash) {
      window.location.hash = '#/';
    }

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
    };
  }, []);

  const handleToggleSound = () => {
    setSoundEnabled((prev) => {
      const next = !prev;
      try {
        localStorage.setItem('ges_sound_pref', JSON.stringify(next));
      } catch {}
      return next;
    });
  };

  // Navigation handlers that create distinct browser history pages
  const handleSelectCourse = (course: CourseInfo) => {
    navigateTo({ page: 'course', courseId: course.id, mode: 'hub' });
  };

  const handleSelectMode = (courseId: CourseId, mode: StudyMode, subMode?: string) => {
    navigateTo({ page: 'course', courseId, mode, subMode });
  };

  const handleNavigateHome = () => {
    navigateTo({ page: 'landing' });
  };

  const selectedCourse = route.courseId ? COURSES[route.courseId] || null : null;
  const isLandingPage = route.page === 'landing' || !selectedCourse;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      {/* Navigation Header */}
      <Header
        currentStep={isLandingPage ? 1 : 2}
        selectedCourse={selectedCourse}
        activeMode={route.mode || 'hub'}
        onNavigateHome={handleNavigateHome}
        onNavigateBack={() => navigateBack({ page: 'landing' })}
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* LANDING PAGE: Course Selector */}
        {isLandingPage ? (
          <div>
            <LevelSelector onSelectCourse={handleSelectCourse} />
          </div>
        ) : (
          /* COURSE STUDY PAGE: Individual pages for each section/mode */
          <div>
            <StudyDashboard
              course={selectedCourse}
              activeMode={route.mode || 'hub'}
              subMode={route.subMode}
              onSelectMode={(mode, subMode) => handleSelectMode(selectedCourse.id, mode, subMode)}
              onBackToLevels={() => navigateBack({ page: 'landing' })}
              soundEnabled={soundEnabled}
            />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer onSelectCourse={handleSelectCourse} />
    </div>
  );
}

