import React from 'react';
import { CourseInfo, StudyMode } from '../types';
import { BookOpen, ArrowLeft, Volume2, VolumeX, Layers, ChevronRight, User, Cloud, GraduationCap } from 'lucide-react';
import { useStudent } from '../context/StudentContext';

interface HeaderProps {
  currentStep: 1 | 2;
  selectedCourse: CourseInfo | null;
  activeMode?: StudyMode | string;
  onNavigateHome: () => void;
  onNavigateBack: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentStep,
  selectedCourse,
  activeMode = 'hub',
  onNavigateHome,
  onNavigateBack,
  soundEnabled,
  onToggleSound,
}) => {
  const { student } = useStudent();

  const getModeLabel = (mode: string) => {
    switch (mode) {
      case 'workbook':
        return 'Workbook questions';
      case 'cbt':
        return 'Past Questions';
      case 'flashcards':
        return 'Flashcards & Notes';
      default:
        return 'Overview';
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-slate-900 text-white border-b border-slate-800 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        {/* Brand identity */}
        <div
          onClick={onNavigateHome}
          className="flex items-center gap-2.5 cursor-pointer select-none group"
          id="portal-brand-logo"
        >
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white text-xs tracking-wider shrink-0 shadow-sm group-hover:bg-blue-500 transition-colors">
            <BookOpen className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-base font-bold tracking-tight text-white group-hover:text-blue-300 transition-colors">
                GES <span className="text-blue-400">Quiz</span> Hub
              </h1>
              <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                Practice & Revision
              </span>
            </div>
          </div>
        </div>

        {/* Right side controls */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Sound toggle button */}
          <button
            onClick={onToggleSound}
            title={soundEnabled ? 'Mute audio' : 'Enable audio'}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-slate-700 text-xs"
            id="sound-toggle-btn"
          >
            {soundEnabled ? (
              <Volume2 className="w-4 h-4 text-blue-400" />
            ) : (
              <VolumeX className="w-4 h-4 text-slate-500" />
            )}
          </button>

          {/* Student Profile Pill */}
          {student && (
            <div
              className="flex items-center gap-1.5 bg-slate-800/90 border border-slate-700 rounded-lg px-2.5 py-1 text-xs"
              title={`Student: ${student.firstName} ${student.secondName} (${student.department})`}
            >
              <div className="w-5 h-5 rounded-full bg-blue-600/30 text-blue-400 flex items-center justify-center text-[10px] font-bold">
                {student.firstName.charAt(0).toUpperCase()}
              </div>
              <div className="flex flex-col text-left">
                <span className="font-semibold text-slate-200 text-[11px] leading-none">
                  {student.firstName} {student.secondName}
                </span>
                <span className="text-[9px] text-slate-400 leading-none truncate max-w-[90px] sm:max-w-[120px]">
                  {student.department}
                </span>
              </div>
              <span title="Firestore Sync Active" className="ml-1 text-emerald-400 shrink-0">
                <Cloud className="w-3 h-3" />
              </span>
            </div>
          )}

          {/* Quick course switch */}
          {selectedCourse && (
            <button
              onClick={onNavigateBack}
              className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors shadow-sm"
              id="switch-course-btn"
              title="Return to courses list (or use device back button)"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">All Courses</span>
              <span className="sm:hidden">Back</span>
            </button>
          )}
        </div>
      </div>

      {/* Active Course & Mode Breadcrumbs Banner */}
      {selectedCourse && (
        <div className="bg-slate-950 border-t border-slate-800 px-4 py-1.5 text-xs">
          <div className="max-w-6xl mx-auto flex items-center justify-between gap-2 overflow-x-auto">
            <div className="flex items-center gap-1.5 text-slate-400 text-xs">
              <button
                onClick={onNavigateBack}
                className="hover:text-slate-200 transition-colors flex items-center gap-1"
              >
                <span>Courses</span>
              </button>
              <ChevronRight className="w-3 h-3 text-slate-600" />
              <span className="text-blue-400 font-semibold">{selectedCourse.code}</span>
              <ChevronRight className="w-3 h-3 text-slate-600" />
              <span className="text-white font-medium capitalize">
                {getModeLabel(activeMode)}
              </span>
            </div>

            <div className="text-[11px] text-slate-400 hidden sm:flex items-center gap-2">
              <span className="bg-slate-800 px-2 py-0.5 rounded text-slate-300 font-mono">
                {selectedCourse.level} Level
              </span>
              <span>•</span>
              <span className="truncate max-w-[200px]">{selectedCourse.title}</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
