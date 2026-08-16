import React, { useState, useEffect, useMemo } from 'react';
import { CourseInfo, StudyMode } from '../types';
import { WORKBOOK_QUESTIONS, PAST_QUESTIONS } from '../data/coursesData';
import { WorkbookView } from './study/WorkbookView';
import { CbtExamView } from './study/CbtExamView';
import { FlashcardsAndSummariesView } from './study/FlashcardsAndSummariesView';
import { BookOpen, Clock, Sparkles, ArrowLeft, ChevronRight, Layers, Cloud, Trophy, CheckCircle2, User } from 'lucide-react';
import { useStudent } from '../context/StudentContext';
import { fetchStudentQuizAttempts, QuizAttemptRecord } from '../lib/quizService';

interface StudyDashboardProps {
  course: CourseInfo;
  activeMode: StudyMode;
  subMode?: string;
  onSelectMode: (mode: StudyMode, subMode?: string) => void;
  onBackToLevels: () => void;
  soundEnabled: boolean;
}

export const StudyDashboard: React.FC<StudyDashboardProps> = ({
  course,
  activeMode,
  subMode,
  onSelectMode,
  onBackToLevels,
  soundEnabled,
}) => {
  // Track if a timed quiz is actively in progress
  const [isExamActive, setIsExamActive] = useState(false);

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

  const { student } = useStudent();
  const [recentAttempts, setRecentAttempts] = useState<QuizAttemptRecord[]>([]);
  const [loadingAttempts, setLoadingAttempts] = useState(false);

  // Fetch recent attempts for this course when student profile exists and mode is hub
  useEffect(() => {
    if (student && activeMode === 'hub') {
      setLoadingAttempts(true);
      fetchStudentQuizAttempts(student.id, course.id)
        .then((res) => {
          setRecentAttempts(res);
        })
        .catch((err) => {
          console.warn('Failed to load quiz attempts:', err);
        })
        .finally(() => {
          setLoadingAttempts(false);
        });
    }
  }, [student, activeMode, course.id]);

  // Reset exam active when navigating modes or courses
  useEffect(() => {
    setIsExamActive(false);
  }, [activeMode, course.id]);

  return (
    <div className="space-y-6" id="study-dashboard-core">
      {/* Course Banner Header (Hidden ONLY during active timed test in Workbook or Past Questions) */}
      {!isExamActive && (
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
              title="Return to course selection"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Choose Another Course</span>
            </button>
          </div>

          {/* Navigation Tabs (each is its own URL page) */}
          <div className="mt-5 pt-4 border-t border-slate-800 flex items-center gap-2 overflow-x-auto pb-0.5">
            <button
              onClick={() => onSelectMode('hub')}
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
              onClick={() => onSelectMode('workbook')}
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
              onClick={() => onSelectMode('cbt')}
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
              onClick={() => onSelectMode('flashcards')}
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
      )}

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
              onClick={() => onSelectMode('workbook')}
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
              onClick={() => onSelectMode('cbt')}
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
              onClick={() => onSelectMode('flashcards')}
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

          {/* Cloud Quiz History & Sync Card */}
          <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
                  <Cloud className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <span>Cloud Quiz History & Records</span>
                    {student && (
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> Synced to Firestore
                      </span>
                    )}
                  </h3>
                  <p className="text-xs text-slate-500">
                    {student
                      ? `Viewing synchronized test attempts for ${student.firstName} ${student.secondName} (${student.department})`
                      : 'Test results and diagnostic scores are recorded in Firestore under your student profile.'}
                  </p>
                </div>
              </div>
            </div>

            {student ? (
              loadingAttempts ? (
                <div className="py-6 text-center text-xs text-slate-400">Loading your test history from Firestore...</div>
              ) : recentAttempts.length > 0 ? (
                <div className="space-y-2.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {recentAttempts.slice(0, 3).map((att) => (
                      <div
                        key={att.id}
                        className="bg-slate-50 rounded-lg p-3 border border-slate-200 flex items-center justify-between"
                      >
                        <div>
                          <div className="flex items-center gap-1.5 mb-1">
                            <span className="text-[10px] font-bold uppercase px-1.5 py-0.5 rounded bg-blue-100 text-blue-800">
                              {att.mode === 'cbt' ? 'Past Qs' : 'Workbook'}
                            </span>
                            <span className="text-[11px] text-slate-500">
                              {new Date(att.completedAt).toLocaleDateString(undefined, {
                                month: 'short',
                                day: 'numeric',
                              })}
                            </span>
                          </div>
                          <div className="text-xs font-semibold text-slate-800">
                            {att.scoreOver70 !== undefined
                              ? `${att.scoreOver70} / 70 (${att.score}/${att.totalQuestions} Qs)`
                              : `${att.score} / ${att.totalQuestions} (${att.percentage}%)`}
                          </div>
                        </div>
                        <div
                          className={`w-9 h-9 rounded-lg flex items-center justify-center font-bold text-sm border ${
                            att.grade === 'A'
                              ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                              : att.grade === 'B'
                              ? 'bg-blue-50 text-blue-700 border-blue-200'
                              : att.grade === 'C'
                              ? 'bg-amber-50 text-amber-700 border-amber-200'
                              : 'bg-rose-50 text-rose-700 border-rose-200'
                          }`}
                        >
                          {att.grade}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="py-4 text-center text-xs text-slate-400">
                  No completed quizzes recorded yet for {course.code}. Take a timed test to record your score!
                </div>
              )
            ) : (
              <div className="bg-slate-50 border border-dashed border-slate-200 rounded-lg p-3 text-xs text-slate-500 flex items-center gap-2">
                <Trophy className="w-4 h-4 text-blue-500 shrink-0" />
                <span>Scores from CBT assessments and Workbook quizzes are stored directly to your personal Firestore profile.</span>
              </div>
            )}
          </div>
        </div>
      )}

      {activeMode === 'workbook' && (
        <WorkbookView
          course={course}
          questions={courseWorkbookQuestions}
          initialSubMode={subMode === 'drill' || subMode === 'timed' ? subMode : 'select'}
          onSubModeChange={(newSubMode) => onSelectMode('workbook', newSubMode === 'select' ? undefined : newSubMode)}
          onBackToDashboard={() => onSelectMode('hub')}
          onExamStateChange={setIsExamActive}
          soundEnabled={soundEnabled}
        />
      )}

      {activeMode === 'cbt' && (
        <CbtExamView
          course={course}
          questions={cbtQuestions}
          onBackToDashboard={() => onSelectMode('hub')}
          onExamStateChange={setIsExamActive}
          soundEnabled={soundEnabled}
        />
      )}

      {activeMode === 'flashcards' && (
        <FlashcardsAndSummariesView
          course={course}
          initialSubTab={subMode as 'flashcards' | 'summaries' | 'tips'}
          onSubTabChange={(newTab) => onSelectMode('flashcards', newTab)}
          onBackToDashboard={() => onSelectMode('hub')}
          soundEnabled={soundEnabled}
        />
      )}
    </div>
  );
};

