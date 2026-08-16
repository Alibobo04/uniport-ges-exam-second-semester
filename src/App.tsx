import React, { useState } from 'react';
import { CourseInfo } from './types';
import { Header } from './components/Header';
import { LevelSelector } from './components/LevelSelector';
import { StudyDashboard } from './components/StudyDashboard';
import { Footer } from './components/Footer';

export default function App() {
  const [currentStep, setCurrentStep] = useState<1 | 2>(1);
  const [selectedCourse, setSelectedCourse] = useState<CourseInfo | null>(null);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('ges_sound_pref');
      return saved ? JSON.parse(saved) : true;
    } catch {
      return true;
    }
  });

  const handleToggleSound = () => {
    setSoundEnabled((prev) => {
      const next = !prev;
      try {
        localStorage.setItem('ges_sound_pref', JSON.stringify(next));
      } catch {}
      return next;
    });
  };

  // Step 1: Select Course -> Go directly to Step 2 (Study Dashboard)
  const handleSelectCourse = (course: CourseInfo) => {
    setSelectedCourse(course);
    setCurrentStep(2);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateStep = (step: 1 | 2) => {
    setCurrentStep(step);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      {/* Navigation Header */}
      <Header
        currentStep={currentStep}
        selectedCourse={selectedCourse}
        onNavigateStep={handleNavigateStep}
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* STEP 1: Quiz & Course Selector */}
        {currentStep === 1 && (
          <div>
            <LevelSelector onSelectCourse={handleSelectCourse} />
          </div>
        )}

        {/* STEP 2: Study & Quiz Dashboard */}
        {currentStep === 2 && selectedCourse && (
          <div>
            <StudyDashboard
              course={selectedCourse}
              onBackToLevels={() => handleNavigateStep(1)}
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
