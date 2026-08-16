import React, { useState, useMemo } from 'react';
import { CourseInfo, StudyMode } from '../types';
import { WORKBOOK_QUESTIONS, PAST_QUESTIONS } from '../data/coursesData';
import { WorkbookView } from './study/WorkbookView';
import { CbtExamView } from './study/CbtExamView';
import { FlashcardsAndSummariesView } from './study/FlashcardsAndSummariesView';
import { BookOpen, Clock, Sparkles, ArrowLeft, ChevronRight, Layers } from 'lucide-react';

interface StudyDashboardProps {
  course: CourseInfo;
  onBackToLevels: () => void;
  soundEnabled: boolean;
}

export const StudyDashboard: React.FC<StudyDashboardProps> = ({
  course,
  onBackToLevels,
  soundEnabled,
}) => {
  const [activeMode, setActiveMode] = useState<StudyMode>('hub');

  // Questions for current course
  const courseWorkbookQuestions = useMemo(
    () => WORKBOOK_QUESTIONS.filter((q) => q.courseId === course.id),
    [course.id]
  );
  const coursePastQuestions = useMemo(
    () => PAST_QUESTIONS.filter((q) => q.courseId === course.id),
    [course.id]
  );
  const cbtQuestions = useMemo(
    () => (coursePastQuestions.length > 0 ? coursePastQuestions : courseWorkbookQuestions),
    [coursePastQuestions, courseWorkbookQuestions]
  );

  const courseWbCount = courseWorkbookQuestions.length;
  const coursePqCount = cbtQuestions.length;

  return (
    <div className="space-y-6" id="study-dashboard-core">
      {/* Course Banner Header */}
      <div className="bg-slate-900 text-white rounded-xl p-5 shadow-xs border border-slate-800">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-blue-500/20 text-blue-300 border border-blue-500/30">
                {course.level} Level
              </span>
              <span className="text-xs font-mono font-bold text-blue-400">
                {course.code}
              </span>
            </div>

            <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {course.code}: {course.title}
            </h1>
            <p className="text-xs text-slate-300 max-w-2xl leading-relaxed">
              {course.description}
            </p>
          </div>

          <button
            onClick={onBackToLevels}
            className="self-start md:self-auto text-xs font-semibold px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors flex items-center gap-1.5 border border-slate-700 shrink-0"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Choose Another Course</span>
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="mt-5 pt-4 border-t border-slate-800 flex items-center gap-2 overflow-x-auto pb-0.5">
          <button
            onClick={() => setActiveMode('hub')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeMode === 'hub'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'bg-slate-800 text-slate-300 hover:text-white'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>All Modes</span>
          </button>

          <button
            onClick={() => setActiveMode('workbook')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeMode === 'workbook'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-slate-800 text-slate-300 hover:text-white'
            }`}
            id="tab-workbook-btn"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Workbook questions ({courseWbCount})</span>
          </button>

          <button
            onClick={() => setActiveMode('cbt')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeMode === 'cbt'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-slate-800 text-slate-300 hover:text-white'
            }`}
            id="tab-cbt-btn"
          >
            <Clock className="w-3.5 h-3.5" />
            <span>Past Questions</span>
          </button>

          <button
            onClick={() => setActiveMode('flashcards')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeMode === 'flashcards'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-slate-800 text-slate-300 hover:text-white'
            }`}
            id="tab-flashcards-btn"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Flashcards & Notes</span>
          </button>
        </div>
      </div>

      {/* ACTIVE MODE RENDER */}
      {activeMode === 'hub' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between border-l-4 border-blue-600 pl-3 py-0.5">
            <div>
              <h2 className="text-base font-bold text-slate-900">
                Choose Study Mode
              </h2>
              <p className="text-xs text-slate-500">
                Select how you would like to study and test your knowledge for {course.code}.
              </p>
            </div>
          </div>

          {/* 3 Main Study Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Option 1: Practice Questions */}
            <div
              onClick={() => setActiveMode('workbook')}
              className="bg-white rounded-xl border border-slate-200 hover:border-blue-500 p-5 shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
              id="study-card-workbook"
            >
              <div>
                <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-xs font-semibold text-blue-600">
                    2 Modes Available
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    {courseWbCount} Qs
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-1.5">
                  Workbook questions
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">
                  Practice drills with instant explanations or full timed quiz mode using {courseWbCount} workbook questions.
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-600">
                <span>Choose Mode & Start</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Option 2: Past Questions */}
            <div
              onClick={() => setActiveMode('cbt')}
              className="bg-white rounded-xl border border-slate-200 hover:border-blue-500 p-5 shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
              id="study-card-cbt"
            >
              <div>
                <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                  <Clock className="w-4 h-4" />
                </div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-xs font-semibold text-blue-600">
                    Timed Assessment
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    Past Qs
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-1.5">
                  Past Questions
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">
                  Customizable timed quiz with past exam questions, answer review, instant scoring, and performance feedback.
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-600">
                <span>Start Past Questions</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Option 3: Flashcards & Summaries */}
            <div
              onClick={() => setActiveMode('flashcards')}
              className="bg-white rounded-xl border border-slate-200 hover:border-blue-500 p-5 shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
              id="study-card-flashcards"
            >
              <div>
                <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-xs font-semibold text-blue-600">
                    Quick Revision
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    Concepts
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-1.5">
                  Flashcards & Notes
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">
                  Interactive flashcards, key definition summaries, and fast revision memory aids.
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-600">
                <span>Open Flashcards</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      )}

      {activeMode === 'workbook' && (
        <WorkbookView
          course={course}
          questions={courseWorkbookQuestions}
          soundEnabled={soundEnabled}
        />
      )}

      {activeMode === 'cbt' && (
        <CbtExamView
          course={course}
          questions={cbtQuestions}
          soundEnabled={soundEnabled}
        />
      )}

      {activeMode === 'flashcards' && (
        <FlashcardsAndSummariesView
          course={course}
          soundEnabled={soundEnabled}
        />
      )}
    </div>
  );
};

