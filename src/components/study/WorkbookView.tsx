import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { CourseInfo, Question } from '../../types';
import { 
  BookOpen, Clock, CheckCircle2, XCircle, CheckCircle, Flag, RotateCcw, 
  Lightbulb, Search, Filter, AlertCircle, ChevronLeft, ChevronRight, 
  AlertTriangle, Check, ArrowLeft
} from 'lucide-react';

interface WorkbookViewProps {
  course: CourseInfo;
  questions: Question[];
  soundEnabled: boolean;
}

type WorkbookSubMode = 'select' | 'drill' | 'timed';

export const WorkbookView: React.FC<WorkbookViewProps> = ({
  course,
  questions,
  soundEnabled,
}) => {
  // Ensure we strictly use only workbook questions for this course
  const courseWorkbookQuestions = useMemo(
    () => questions.filter((q) => q.courseId === course.id && (q.source === 'Workbook' || !q.source)),
    [questions, course.id]
  );

  const [subMode, setSubMode] = useState<WorkbookSubMode>('select');

  // ==========================================
  // PRACTICE DRILL STATE
  // ==========================================
  const [selectedTopic, setSelectedTopic] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [revealedAnswers, setRevealedAnswers] = useState<Record<string, boolean>>({});
  const [selectedOptions, setSelectedOptions] = useState<Record<string, number>>({});
  const [showHints, setShowHints] = useState<Record<string, boolean>>({});
  const [completedQuestions, setCompletedQuestions] = useState<Record<string, boolean>>({});

  // ==========================================
  // TIMED QUIZ STATE
  // ==========================================
  // Fisher-Yates shuffle helper
  const shuffleArray = <T,>(array: T[]): T[] => {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  const [selectedQuestionCount, setSelectedQuestionCount] = useState<number | 'all'>(50);
  const [quizQuestions, setQuizQuestions] = useState<Question[]>(() => {
    const shuffled = shuffleArray(courseWorkbookQuestions);
    return shuffled.slice(0, 50);
  });
  const [examStarted, setExamStarted] = useState(false);
  const [examSubmitted, setExamSubmitted] = useState(false);
  const [durationMinutes, setDurationMinutes] = useState<number>(15);
  const [timeRemaining, setTimeRemaining] = useState<number>(15 * 60);
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<Record<string, boolean>>({});
  const [reviewFilter, setReviewFilter] = useState<'all' | 'incorrect' | 'correct' | 'flagged'>('all');
  const [showSubmitConfirm, setShowSubmitConfirm] = useState(false);

  // Sync questions if course changes
  useEffect(() => {
    const shuffled = shuffleArray(courseWorkbookQuestions);
    setQuizQuestions(selectedQuestionCount === 'all' ? shuffled : shuffled.slice(0, typeof selectedQuestionCount === 'number' ? selectedQuestionCount : 50));
    setExamStarted(false);
    setExamSubmitted(false);
    setSelectedOptions({});
    setRevealedAnswers({});
    setCompletedQuestions({});
  }, [course.id]);

  // Audio effects
  const playSound = useCallback((type: 'correct' | 'wrong' | 'select' | 'submit') => {
    if (!soundEnabled || typeof window === 'undefined') return;
    try {
      const ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      if (type === 'correct') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(587.33, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.15);
        gain.gain.setValueAtTime(0.08, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
        osc.start();
        osc.stop(ctx.currentTime + 0.25);
      } else if (type === 'wrong') {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(220, ctx.currentTime);
        gain.gain.setValueAtTime(0.08, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
        osc.start();
        osc.stop(ctx.currentTime + 0.25);
      } else if (type === 'select') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(440, ctx.currentTime);
        gain.gain.setValueAtTime(0.04, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
        osc.start();
        osc.stop(ctx.currentTime + 0.1);
      } else if (type === 'submit') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(523.25, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(783.99, ctx.currentTime + 0.2);
        gain.gain.setValueAtTime(0.08, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);
        osc.start();
        osc.stop(ctx.currentTime + 0.35);
      }
    } catch {
      // Audio fallback
    }
  }, [soundEnabled]);

  // Timed Quiz Countdown
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (examStarted && !examSubmitted && durationMinutes > 0) {
      interval = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            handleFinalSubmitQuiz();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [examStarted, examSubmitted, durationMinutes]);

  // Extract unique topics
  const uniqueTopics = Array.from(new Set(courseWorkbookQuestions.map((q) => q.topic)));

  // Drill filtering
  const filteredDrillQuestions = courseWorkbookQuestions.filter((q) => {
    const matchesTopic = selectedTopic === 'all' || q.topic === selectedTopic;
    const matchesSearch =
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.options.some((opt) => opt.toLowerCase().includes(searchQuery.toLowerCase())) ||
      q.topic.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTopic && matchesSearch;
  });

  // Drill option select handler
  const handleSelectDrillOption = (questionId: string, optionIdx: number, correctIdx: number) => {
    setSelectedOptions((prev) => ({ ...prev, [questionId]: optionIdx }));
    setRevealedAnswers((prev) => ({ ...prev, [questionId]: true }));
    setCompletedQuestions((prev) => ({ ...prev, [questionId]: true }));

    if (optionIdx === correctIdx) {
      playSound('correct');
    } else {
      playSound('wrong');
    }
  };

  const handleResetDrillProgress = () => {
    setSelectedOptions({});
    setRevealedAnswers({});
    setShowHints({});
    setCompletedQuestions({});
  };

  // Timed Quiz Handlers
  const handleStartTimedQuiz = () => {
    let pool = shuffleArray(courseWorkbookQuestions);
    if (selectedQuestionCount !== 'all') {
      pool = pool.slice(0, selectedQuestionCount);
    }
    setQuizQuestions(pool);
    setTimeRemaining(durationMinutes * 60);
    setCurrentIdx(0);
    setQuizAnswers({});
    setFlaggedQuestions({});
    setExamSubmitted(false);
    setExamStarted(true);
    setShowSubmitConfirm(false);
  };

  const handleSelectQuizOption = (questionId: string, optIdx: number) => {
    if (examSubmitted) return;
    setQuizAnswers((prev) => ({ ...prev, [questionId]: optIdx }));
    playSound('select');
  };

  const handleToggleFlag = (questionId: string) => {
    setFlaggedQuestions((prev) => ({ ...prev, [questionId]: !prev[questionId] }));
  };

  const handleFinalSubmitQuiz = () => {
    setExamSubmitted(true);
    setShowSubmitConfirm(false);
    playSound('submit');
  };

  const completedDrillCount = Object.keys(completedQuestions).length;

  // Quiz Score calculations
  const totalQuizQuestions = quizQuestions.length;
  let correctQuizCount = 0;
  quizQuestions.forEach((q) => {
    if (quizAnswers[q.id] === q.correctAnswer) {
      correctQuizCount++;
    }
  });
  const quizPercentage = totalQuizQuestions > 0 ? Math.round((correctQuizCount / totalQuizQuestions) * 100) : 0;
  const answeredQuizCount = Object.keys(quizAnswers).length;
  const flaggedQuizCount = Object.values(flaggedQuestions).filter(Boolean).length;
  const timeSpentSec = durationMinutes * 60 - timeRemaining;

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const getGrade = (pct: number) => {
    if (pct >= 70) return { grade: 'A', label: 'Excellent', color: 'text-blue-600 bg-blue-50 border-blue-200' };
    if (pct >= 60) return { grade: 'B', label: 'Very Good', color: 'text-blue-600 bg-blue-50 border-blue-200' };
    if (pct >= 50) return { grade: 'C', label: 'Pass', color: 'text-slate-700 bg-slate-100 border-slate-300' };
    if (pct >= 45) return { grade: 'D', label: 'Fair', color: 'text-slate-700 bg-slate-100 border-slate-300' };
    return { grade: 'F', label: 'Needs Practice', color: 'text-rose-600 bg-rose-50 border-rose-200' };
  };

  const gradeInfo = getGrade(quizPercentage);

  // =========================================================================
  // 1. MODE SELECTION SCREEN (When user enters Workbook section)
  // =========================================================================
  if (subMode === 'select') {
    return (
      <div className="space-y-6" id="workbook-mode-select-screen">
        {/* Banner */}
        <div className="bg-slate-900 text-white rounded-xl p-5 border border-slate-800 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-blue-600 text-white shadow-xs">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-base sm:text-lg font-bold text-white">
                  {course.code} Workbook Questions
                </h2>
                <p className="text-xs text-slate-400">
                  {courseWorkbookQuestions.length} Curriculum Workbook Questions Available
                </p>
              </div>
            </div>

            <div className="bg-slate-950 px-3.5 py-2 rounded-lg border border-slate-800 text-left sm:text-right">
              <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider block">Question Bank</span>
              <span className="text-sm font-bold text-blue-400 font-mono">
                {courseWorkbookQuestions.length} Questions
              </span>
            </div>
          </div>

          <p className="text-slate-300 text-xs leading-relaxed mt-3 pt-3 border-t border-slate-800">
            Choose your preferred study format below. Both modes use 100% official workbook questions for {course.code}.
          </p>
        </div>

        {/* 2 Modes Selection Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Card 1: Practice Drills */}
          <div
            onClick={() => setSubMode('drill')}
            className="bg-white rounded-xl border border-slate-200 hover:border-blue-500 p-6 shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
            id="wb-mode-card-drills"
          >
            <div>
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <BookOpen className="w-5 h-5" />
              </div>

              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-100">
                  Self-Paced Learning
                </span>
                <span className="text-xs text-slate-400 font-mono font-semibold">
                  Mode 1
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                Practice Drills
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed mb-6">
                Browse questions at your own speed with instant answer verification, step-by-step explanations, topic filters, search, and memory hints.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-bold text-blue-600">Open Practice Drills</span>
              <span className="p-1.5 rounded-lg bg-blue-50 group-hover:bg-blue-600 text-blue-600 group-hover:text-white transition-colors">
                <ChevronRight className="w-4 h-4" />
              </span>
            </div>
          </div>

          {/* Card 2: Timed Quiz Mode */}
          <div
            onClick={() => {
              setSubMode('timed');
              setExamStarted(false);
              setExamSubmitted(false);
            }}
            className="bg-white rounded-xl border border-slate-200 hover:border-blue-500 p-6 shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
            id="wb-mode-card-timed"
          >
            <div>
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Clock className="w-5 h-5" />
              </div>

              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-100">
                  Timed CBT Exam
                </span>
                <span className="text-xs text-slate-400 font-mono font-semibold">
                  Mode 2
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                Timed Quiz Mode
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed mb-6">
                Test your knowledge and speed with a customizable countdown timer, interactive question palette, review tagging, and instant grade report.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-bold text-blue-600">Start Timed Quiz</span>
              <span className="p-1.5 rounded-lg bg-blue-50 group-hover:bg-blue-600 text-blue-600 group-hover:text-white transition-colors">
                <ChevronRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // 2. PRACTICE DRILLS MODE
  // =========================================================================
  if (subMode === 'drill') {
    return (
      <div className="space-y-4" id="workbook-drill-view">
        {/* Top Mode Header with Mode Switcher */}
        <div className="bg-slate-900 text-white rounded-xl p-4 border border-slate-800 shadow-xs">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSubMode('select')}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors text-xs flex items-center gap-1 border border-slate-700"
                title="Change Workbook Mode"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Modes</span>
              </button>

              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-blue-600 text-white">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-sm sm:text-base font-bold text-white">
                    {course.code} Practice Drills
                  </h2>
                  <p className="text-xs text-slate-400">
                    Self-paced practice questions with instant answer verification.
                  </p>
                </div>
              </div>
            </div>

            {/* Mode Switcher Tabs */}
            <div className="flex items-center gap-1.5 bg-slate-950 p-1 rounded-lg border border-slate-800 text-xs">
              <button
                onClick={() => setSubMode('drill')}
                className="px-2.5 py-1 rounded-md font-semibold bg-blue-600 text-white shadow-xs flex items-center gap-1"
              >
                <BookOpen className="w-3 h-3" />
                <span>Drills</span>
              </button>
              <button
                onClick={() => {
                  setSubMode('timed');
                  setExamStarted(false);
                  setExamSubmitted(false);
                }}
                className="px-2.5 py-1 rounded-md font-semibold text-slate-400 hover:text-white transition-colors flex items-center gap-1"
              >
                <Clock className="w-3 h-3" />
                <span>Timed Quiz</span>
              </button>
            </div>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs flex flex-col md:flex-row items-center justify-between gap-3">
          {/* Search input */}
          <div className="relative w-full md:w-72">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions or topics..."
              className="w-full pl-8 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white text-slate-900"
            />
          </div>

          {/* Topic filter dropdown, progress & Reset */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto justify-end">
            <div className="flex items-center gap-1.5 text-xs text-slate-600">
              <Filter className="w-3.5 h-3.5 text-slate-500" />
              <select
                value={selectedTopic}
                onChange={(e) => setSelectedTopic(e.target.value)}
                className="bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 max-w-[220px]"
              >
                <option value="all">All Topics ({courseWorkbookQuestions.length})</option>
                {uniqueTopics.map((top) => (
                  <option key={top} value={top}>
                    {top}
                  </option>
                ))}
              </select>
            </div>

            <div className="text-xs font-mono font-bold text-slate-700 bg-slate-100 px-2.5 py-1.5 rounded-lg border border-slate-200">
              {completedDrillCount}/{courseWorkbookQuestions.length} Done
            </div>

            <button
              onClick={handleResetDrillProgress}
              className="px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold flex items-center gap-1 transition-colors"
              title="Reset progress"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset</span>
            </button>
          </div>
        </div>

        {/* Question Cards List */}
        <div className="space-y-3">
          {filteredDrillQuestions.length === 0 ? (
            <div className="bg-white rounded-xl p-8 text-center border border-slate-200">
              <AlertCircle className="w-7 h-7 text-slate-400 mx-auto mb-2" />
              <h3 className="font-bold text-slate-800 text-xs">No questions found</h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Try adjusting your search query or topic filter.
              </p>
            </div>
          ) : (
            filteredDrillQuestions.map((q, qIndex) => {
              const isRevealed = revealedAnswers[q.id];
              const userChoice = selectedOptions[q.id];
              const showHint = showHints[q.id];

              return (
                <div
                  key={q.id}
                  className={`bg-white rounded-xl border transition-all p-4 ${
                    isRevealed
                      ? userChoice === q.correctAnswer
                        ? 'border-blue-400 shadow-xs'
                        : 'border-rose-300 shadow-xs'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                  id={`wb-question-${q.id}`}
                >
                  {/* Card Top Badges */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-1.5">
                      <span className="w-5 h-5 rounded bg-slate-900 text-white flex items-center justify-center font-bold text-[10px] font-mono">
                        Q{qIndex + 1}
                      </span>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                        {q.topic}
                      </span>
                    </div>

                    {q.hint && (
                      <button
                        onClick={() =>
                          setShowHints((prev) => ({ ...prev, [q.id]: !prev[q.id] }))
                        }
                        className="text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 px-2 py-0.5 rounded flex items-center gap-1 transition-colors"
                      >
                        <Lightbulb className="w-3 h-3 text-blue-600" />
                        <span>{showHint ? 'Hide Hint' : 'Hint'}</span>
                      </button>
                    )}
                  </div>

                  {/* Hint box if open */}
                  {showHint && q.hint && (
                    <div className="mb-2.5 p-2.5 rounded-lg bg-blue-50 border border-blue-200 text-xs text-blue-900 flex items-start gap-1.5">
                      <Lightbulb className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="font-semibold">Hint:</strong> {q.hint}
                      </div>
                    </div>
                  )}

                  {/* Question text */}
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-3 leading-snug whitespace-pre-line">
                    {q.question}
                  </h3>

                  {/* Options List */}
                  <div className="space-y-1.5 mb-2.5">
                    {q.options.map((option, optIdx) => {
                      const isSelected = userChoice === optIdx;
                      const isCorrect = optIdx === q.correctAnswer;

                      let optionStyle =
                        'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-800';

                      if (isRevealed) {
                        if (isCorrect) {
                          optionStyle =
                            'bg-blue-50 border-blue-500 text-blue-950 font-semibold ring-1 ring-blue-500';
                        } else if (isSelected && !isCorrect) {
                          optionStyle =
                            'bg-rose-50 border-rose-400 text-rose-950 font-semibold';
                        } else {
                          optionStyle = 'bg-slate-50/60 border-slate-200 text-slate-400';
                        }
                      }

                      const optionLetters = ['A', 'B', 'C', 'D'];

                      return (
                        <div
                          key={optIdx}
                          onClick={() =>
                            handleSelectDrillOption(q.id, optIdx, q.correctAnswer)
                          }
                          className={`p-2.5 rounded-lg border text-xs cursor-pointer flex items-center justify-between gap-2.5 transition-all ${optionStyle}`}
                        >
                          <div className="flex items-center gap-2.5">
                            <span
                              className={`w-5 h-5 rounded flex items-center justify-center font-bold text-[10px] shrink-0 font-mono ${
                                isRevealed && isCorrect
                                  ? 'bg-blue-600 text-white'
                                  : isRevealed && isSelected && !isCorrect
                                  ? 'bg-rose-600 text-white'
                                  : 'bg-slate-200 text-slate-700'
                              }`}
                            >
                              {optionLetters[optIdx]}
                            </span>
                            <span>{option}</span>
                          </div>

                          {isRevealed && isCorrect && (
                            <CheckCircle className="w-4 h-4 text-blue-600 shrink-0" />
                          )}
                          {isRevealed && isSelected && !isCorrect && (
                            <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Explanation Card */}
                  {isRevealed && (
                    <div className="mt-2 p-3 rounded-lg bg-slate-900 text-slate-200 border border-slate-800 text-xs">
                      <strong className="text-blue-400 block mb-0.5 text-xs">Explanation:</strong>
                      <p className="text-slate-300 leading-relaxed text-xs">
                        {q.explanation}
                      </p>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    );
  }

  // =========================================================================
  // 3. TIMED QUIZ MODE (Using 100% Workbook questions)
  // =========================================================================

  // A. START / CONFIGURATION SCREEN
  if (!examStarted) {
    return (
      <div className="max-w-2xl mx-auto space-y-5" id="wb-timed-quiz-setup">
        {/* Banner */}
        <div className="bg-slate-900 text-white rounded-xl p-5 border border-slate-800 shadow-xs">
          <div className="flex items-center justify-between gap-3 mb-2">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-blue-600 text-white">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-base sm:text-lg font-bold text-white">
                  {course.code} Workbook Timed Quiz
                </h2>
                <p className="text-xs text-slate-400">
                  {courseWorkbookQuestions.length} Questions from Workbook Question Bank
                </p>
              </div>
            </div>

            <button
              onClick={() => setSubMode('select')}
              className="text-xs font-semibold px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors flex items-center gap-1 border border-slate-700"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Change Mode</span>
            </button>
          </div>
          <p className="text-slate-300 text-xs leading-relaxed">
            Test your knowledge under timed conditions exclusively with official workbook questions.
          </p>
        </div>

        {/* Configuration Box */}
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-4">
          <h3 className="font-bold text-slate-900 text-sm border-b border-slate-100 pb-2.5">
            Quiz Settings
          </h3>

          {/* Mode Info (Single Mode: Timed Exam) */}
          <div className="p-3 rounded-lg border border-blue-600 bg-blue-50/60 text-slate-900 ring-1 ring-blue-600">
            <div className="flex items-center justify-between mb-1">
              <span className="font-bold text-xs flex items-center gap-1.5 text-blue-900">
                <Clock className="w-3.5 h-3.5 text-blue-600" />
                <span>Timed Exam Mode</span>
              </span>
              <span className="text-[10px] font-bold text-blue-700 bg-white px-2 py-0.5 rounded border border-blue-200">
                CBT Simulation
              </span>
            </div>
            <p className="text-xs text-slate-600 leading-snug">
              Complete the workbook questions within the selected duration. Scores, grade analysis, and step-by-step answer explanations are provided after submission.
            </p>
          </div>

          {/* Question Count */}
          <div className="space-y-2">
            <label className="block text-xs font-semibold text-slate-700">
              Number of Questions
            </label>
            <div className="grid grid-cols-3 gap-2 text-xs font-semibold">
              {[50, 100, 'all'].map((cnt) => {
                const countLabel = cnt === 'all' ? `All (${courseWorkbookQuestions.length})` : `${cnt} Questions`;
                return (
                  <button
                    key={String(cnt)}
                    type="button"
                    onClick={() => setSelectedQuestionCount(cnt as number | 'all')}
                    className={`py-2 px-2 rounded-lg border transition-all ${
                      selectedQuestionCount === cnt
                        ? 'bg-blue-600 border-blue-600 text-white shadow-xs'
                        : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {countLabel}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Duration Selector */}
          <div className="space-y-2">
            <label className="block text-xs font-semibold text-slate-700">
              Timer Duration
            </label>
            <div className="grid grid-cols-4 gap-2 text-xs font-semibold">
              {[5, 10, 15, 20, 30, 45].map((mins) => (
                <button
                  key={mins}
                  type="button"
                  onClick={() => setDurationMinutes(mins)}
                  className={`py-2 px-2 rounded-lg border transition-all ${
                    durationMinutes === mins
                      ? 'bg-blue-600 border-blue-600 text-white shadow-xs'
                      : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {mins} Mins
                </button>
              ))}
            </div>
          </div>

          {/* Launch Button */}
          <button
            onClick={handleStartTimedQuiz}
            className="w-full py-2.5 px-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-xs transition-colors mt-2"
            id="start-wb-timed-quiz-btn"
          >
            <span>Start Workbook Timed Quiz</span>
            <Clock className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  // B. RESULTS SCREEN (After submitting Timed Quiz)
  if (examSubmitted) {
    const filteredReviewQuestions = quizQuestions.filter((q) => {
      const userChoice = quizAnswers[q.id];
      const isCorrect = userChoice === q.correctAnswer;
      const isFlagged = !!flaggedQuestions[q.id];

      if (reviewFilter === 'correct') return isCorrect;
      if (reviewFilter === 'incorrect') return !isCorrect;
      if (reviewFilter === 'flagged') return isFlagged;
      return true;
    });

    return (
      <div className="max-w-4xl mx-auto space-y-5" id="wb-quiz-results-screen">
        {/* Score Summary Card */}
        <div className="bg-white rounded-xl border border-slate-200 p-5 sm:p-6 shadow-xs">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-100 pb-4">
            <div className="text-center sm:text-left space-y-1">
              <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Workbook Quiz Completed
              </div>
              <h2 className="text-lg font-bold text-slate-900">
                {course.code} Workbook Results
              </h2>
            </div>

            {/* Score & Grade Display */}
            <div className="flex items-center gap-3">
              <div className="text-center p-3 rounded-xl bg-slate-900 text-white min-w-[100px] shadow-xs">
                <div className="text-2xl sm:text-3xl font-black text-blue-400 font-mono">
                  {quizPercentage}%
                </div>
                <div className="text-[10px] text-slate-400 font-mono mt-0.5">
                  {correctQuizCount} / {totalQuizQuestions} Correct
                </div>
              </div>

              <div className={`p-3 rounded-xl border text-center min-w-[90px] ${gradeInfo.color}`}>
                <div className="text-2xl sm:text-3xl font-black">
                  {gradeInfo.grade}
                </div>
                <div className="text-[10px] font-bold mt-0.5">
                  {gradeInfo.label}
                </div>
              </div>
            </div>
          </div>

          {/* Quick Metrics row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-4 text-center text-xs">
            <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
              <span className="text-[10px] text-slate-500 font-bold uppercase block">Total</span>
              <span className="text-sm font-bold text-slate-900 font-mono">{totalQuizQuestions}</span>
            </div>
            <div className="p-2.5 rounded-lg bg-blue-50 border border-blue-200">
              <span className="text-[10px] text-blue-700 font-bold uppercase block">Correct</span>
              <span className="text-sm font-bold text-blue-800 font-mono">{correctQuizCount}</span>
            </div>
            <div className="p-2.5 rounded-lg bg-rose-50 border border-rose-200">
              <span className="text-[10px] text-rose-700 font-bold uppercase block">Missed</span>
              <span className="text-sm font-bold text-rose-800 font-mono">{totalQuizQuestions - correctQuizCount}</span>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
              <span className="text-[10px] text-slate-500 font-bold uppercase block">Time Spent</span>
              <span className="text-sm font-bold text-slate-900 font-mono">{formatTime(timeSpentSec)}</span>
            </div>
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap items-center justify-between gap-3 mt-4 pt-3 border-t border-slate-100">
            <div className="flex items-center gap-2">
              <button
                onClick={handleStartTimedQuiz}
                className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs flex items-center gap-1.5 shadow-xs transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Retake Quiz</span>
              </button>

              <button
                onClick={() => setSubMode('drill')}
                className="px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs flex items-center gap-1.5 transition-colors"
              >
                <BookOpen className="w-3.5 h-3.5 text-blue-600" />
                <span>Practice Drills</span>
              </button>
            </div>

            <button
              onClick={() => setSubMode('select')}
              className="text-xs text-slate-600 hover:text-slate-900 font-semibold underline"
            >
              Back to Mode Selection
            </button>
          </div>
        </div>

        {/* Question Solutions Review */}
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2.5 border-b border-slate-100 pb-3">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-blue-600" />
              <span>Answer Review</span>
            </h3>

            {/* Filter Pills */}
            <div className="flex items-center gap-1 text-xs bg-slate-100 p-1 rounded-lg">
              <button
                onClick={() => setReviewFilter('all')}
                className={`px-2.5 py-0.5 rounded font-semibold transition-colors text-xs ${
                  reviewFilter === 'all'
                    ? 'bg-slate-900 text-white'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                All ({quizQuestions.length})
              </button>
              <button
                onClick={() => setReviewFilter('incorrect')}
                className={`px-2.5 py-0.5 rounded font-semibold transition-colors text-xs ${
                  reviewFilter === 'incorrect'
                    ? 'bg-rose-600 text-white'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Missed ({totalQuizQuestions - correctQuizCount})
              </button>
              <button
                onClick={() => setReviewFilter('correct')}
                className={`px-2.5 py-0.5 rounded font-semibold transition-colors text-xs ${
                  reviewFilter === 'correct'
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Correct ({correctQuizCount})
              </button>
              <button
                onClick={() => setReviewFilter('flagged')}
                className={`px-2.5 py-0.5 rounded font-semibold transition-colors text-xs ${
                  reviewFilter === 'flagged'
                    ? 'bg-slate-700 text-white'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Flagged ({flaggedQuizCount})
              </button>
            </div>
          </div>

          {/* Review items */}
          <div className="space-y-3">
            {filteredReviewQuestions.map((q, idx) => {
              const userChoice = quizAnswers[q.id];
              const isCorrect = userChoice === q.correctAnswer;
              const hasAnswered = userChoice !== undefined;

              return (
                <div
                  key={q.id}
                  className={`p-4 rounded-xl border transition-all ${
                    isCorrect
                      ? 'border-blue-200 bg-blue-50/20'
                      : 'border-rose-200 bg-rose-50/20'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-1.5">
                      <span
                        className={`w-5 h-5 rounded flex items-center justify-center font-bold text-[10px] font-mono ${
                          isCorrect ? 'bg-blue-600 text-white' : 'bg-rose-600 text-white'
                        }`}
                      >
                        {idx + 1}
                      </span>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                        {q.topic}
                      </span>
                    </div>

                    <span
                      className={`text-xs font-semibold px-2 py-0.5 rounded flex items-center gap-1 ${
                        isCorrect
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-rose-100 text-rose-800'
                      }`}
                    >
                      {isCorrect ? (
                        <>
                          <CheckCircle2 className="w-3.5 h-3.5" /> Correct
                        </>
                      ) : (
                        <>
                          <XCircle className="w-3.5 h-3.5" /> {hasAnswered ? 'Incorrect' : 'Unanswered'}
                        </>
                      )}
                    </span>
                  </div>

                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 mb-3 whitespace-pre-line">
                    {q.question}
                  </h4>

                  {/* Options */}
                  <div className="space-y-1.5 mb-3 text-xs">
                    {q.options.map((opt, optIdx) => {
                      const isOptionCorrect = optIdx === q.correctAnswer;
                      const isOptionSelected = optIdx === userChoice;
                      const letter = String.fromCharCode(65 + optIdx);
                      const cleanOptText = opt.replace(/^[a-eA-E][.)]\s*/, '');

                      let optStyle = 'bg-white border-slate-200 text-slate-700';
                      if (isOptionCorrect) {
                        optStyle = 'bg-blue-50 border-blue-500 text-blue-950 font-semibold';
                      } else if (isOptionSelected && !isOptionCorrect) {
                        optStyle = 'bg-rose-50 border-rose-400 text-rose-950 font-semibold';
                      }

                      return (
                        <div
                          key={optIdx}
                          className={`p-2.5 rounded-lg border flex items-center justify-between text-xs ${optStyle}`}
                        >
                          <div className="flex items-center gap-2">
                            <span className="font-mono font-bold text-xs">
                              {letter}.
                            </span>
                            <span>{cleanOptText}</span>
                          </div>
                          {isOptionCorrect && (
                            <span className="text-[10px] font-bold text-blue-700 bg-white px-2 py-0.5 rounded border border-blue-200">
                              Correct Answer
                            </span>
                          )}
                          {isOptionSelected && !isOptionCorrect && (
                            <span className="text-[10px] font-bold text-rose-700 bg-white px-2 py-0.5 rounded border border-rose-200">
                              Your Choice
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Detailed explanation */}
                  <div className="p-3 rounded-lg bg-slate-900 text-slate-200 text-xs leading-relaxed">
                    <strong className="text-blue-400 block mb-0.5 text-xs">Explanation:</strong>
                    <p className="text-slate-300 text-xs">{q.explanation}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // C. ACTIVE TIMED QUIZ SCREEN
  const currentQ = quizQuestions[currentIdx];
  const userChoice = quizAnswers[currentQ?.id];
  const isFlagged = !!flaggedQuestions[currentQ?.id];

  return (
    <div className="space-y-4" id="active-wb-timed-quiz-screen">
      {/* Top Timer Bar */}
      <div className="bg-slate-900 text-white rounded-xl p-3.5 sm:p-4 border border-slate-800 shadow-xs flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 rounded-lg bg-blue-600 text-white">
            <Clock className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-bold text-white">
              {course.code} Workbook Quiz
            </div>
            <p className="text-xs text-slate-400">
              Question {currentIdx + 1} of {totalQuizQuestions}
            </p>
          </div>
        </div>

        {/* Timer Box & Action */}
        <div className="flex items-center gap-2.5">
          <div
            className={`px-3 py-1.5 rounded-lg font-mono text-sm font-bold border flex items-center gap-1.5 ${
              timeRemaining < 120
                ? 'bg-rose-950/80 border-rose-500 text-rose-400 animate-pulse'
                : timeRemaining < 300
                ? 'bg-slate-800 border-slate-600 text-blue-300'
                : 'bg-slate-950 border-slate-700 text-blue-400'
            }`}
          >
            <Clock className="w-3.5 h-3.5" />
            <span>{formatTime(timeRemaining)}</span>
          </div>

          <button
            onClick={() => setShowSubmitConfirm(true)}
            className="px-3 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-700 text-white text-xs font-semibold shadow-xs transition-colors"
            id="submit-wb-exam-trigger-btn"
          >
            Submit Quiz
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
        {/* Main Question Area (8 cols on lg) */}
        <div className="lg:col-span-8 bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-4">
          {/* Question Header */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-slate-900 text-white font-mono">
                Q{currentIdx + 1}
              </span>
              <span className="text-xs font-semibold text-slate-600">
                {currentQ.topic}
              </span>
            </div>

            <button
              onClick={() => handleToggleFlag(currentQ.id)}
              className={`text-xs font-semibold px-2.5 py-1 rounded-lg flex items-center gap-1.5 border transition-all ${
                isFlagged
                  ? 'bg-slate-800 border-slate-800 text-white shadow-xs'
                  : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
              }`}
            >
              <Flag className="w-3 h-3" />
              <span>{isFlagged ? 'Flagged' : 'Flag'}</span>
            </button>
          </div>

          {/* Question Prompt */}
          <h3 className="text-sm font-bold text-slate-900 leading-relaxed whitespace-pre-line">
            {currentQ.question}
          </h3>

          {/* Options */}
          <div className="space-y-2">
            {currentQ.options.map((opt, optIdx) => {
              const isSelected = userChoice === optIdx;

              const optClass = isSelected
                ? 'bg-blue-50 border-blue-600 text-blue-950 font-semibold ring-1 ring-blue-600'
                : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-800';

              const letter = String.fromCharCode(65 + optIdx);
              const cleanOptText = opt.replace(/^[a-eA-E][.)]\s*/, '');

              return (
                <div
                  key={optIdx}
                  onClick={() => handleSelectQuizOption(currentQ.id, optIdx)}
                  className={`p-3 rounded-lg border text-xs cursor-pointer flex items-center justify-between gap-2.5 transition-all ${optClass}`}
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`w-5 h-5 rounded flex items-center justify-center font-bold text-xs font-mono shrink-0 ${
                        isSelected
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-200 text-slate-700'
                      }`}
                    >
                      {letter}
                    </span>
                    <span>{cleanOptText}</span>
                  </div>

                  {isSelected && (
                    <span className="text-[10px] font-bold text-blue-700 bg-white px-2 py-0.5 rounded border border-blue-200">
                      Selected
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom Navigation Buttons */}
          <div className="flex items-center justify-between pt-3 border-t border-slate-100">
            <button
              onClick={() => setCurrentIdx((prev) => Math.max(0, prev - 1))}
              disabled={currentIdx === 0}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors ${
                currentIdx === 0
                  ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
              }`}
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Previous</span>
            </button>

            {currentIdx < totalQuizQuestions - 1 ? (
              <button
                onClick={() => setCurrentIdx((prev) => Math.min(totalQuizQuestions - 1, prev + 1))}
                className="px-4 py-1.5 rounded-lg bg-slate-900 hover:bg-blue-600 text-white text-xs font-semibold flex items-center gap-1 transition-colors"
              >
                <span>Next Question</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                onClick={() => setShowSubmitConfirm(true)}
                className="px-4 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold flex items-center gap-1 shadow-xs transition-colors"
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Submit Quiz</span>
              </button>
            )}
          </div>
        </div>

        {/* Question Palette Sidebar (4 cols on lg) */}
        <div className="lg:col-span-4 bg-white rounded-xl border border-slate-200 p-4 shadow-xs space-y-3">
          <div className="border-b border-slate-100 pb-2">
            <h4 className="font-bold text-slate-900 text-xs">Question Palette</h4>
            <p className="text-xs text-slate-500">
              Jump directly to any workbook question.
            </p>
          </div>

          {/* Quick stats legend */}
          <div className="grid grid-cols-3 gap-1.5 text-xs text-center font-semibold">
            <div className="p-1.5 rounded bg-blue-50 text-blue-800 border border-blue-100">
              <span className="block text-xs font-bold">{answeredQuizCount}</span>
              <span className="text-[10px]">Answered</span>
            </div>
            <div className="p-1.5 rounded bg-slate-100 text-slate-800 border border-slate-200">
              <span className="block text-xs font-bold">{flaggedQuizCount}</span>
              <span className="text-[10px]">Flagged</span>
            </div>
            <div className="p-1.5 rounded bg-slate-50 text-slate-600 border border-slate-200">
              <span className="block text-xs font-bold">{totalQuizQuestions - answeredQuizCount}</span>
              <span className="text-[10px]">Left</span>
            </div>
          </div>

          {/* Numbered buttons grid (scrollable container for high question counts) */}
          <div className="grid grid-cols-5 gap-1.5 pt-1 max-h-72 sm:max-h-80 overflow-y-auto pr-1">
            {quizQuestions.map((q, qIndex) => {
              const isAnswered = quizAnswers[q.id] !== undefined;
              const isFlag = !!flaggedQuestions[q.id];
              const isCurrent = currentIdx === qIndex;

              let btnClass = 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200';

              if (isCurrent) {
                btnClass = 'bg-slate-900 text-white border-slate-900 ring-2 ring-blue-500 font-bold';
              } else if (isFlag) {
                btnClass = 'bg-slate-700 text-white border-slate-800 font-bold';
              } else if (isAnswered) {
                btnClass = 'bg-blue-600 text-white border-blue-700 font-bold';
              }

              return (
                <button
                  key={q.id}
                  onClick={() => setCurrentIdx(qIndex)}
                  className={`h-8 rounded-lg border text-xs font-mono font-bold flex items-center justify-center relative transition-all ${btnClass}`}
                >
                  <span>{qIndex + 1}</span>
                  {isFlag && !isCurrent && (
                    <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-amber-400" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Submit action in sidebar */}
          <div className="pt-2.5 border-t border-slate-100">
            <button
              onClick={() => setShowSubmitConfirm(true)}
              className="w-full py-2 rounded-lg bg-rose-600 hover:bg-rose-700 text-white font-semibold text-xs flex items-center justify-center gap-1.5 shadow-xs transition-colors"
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Submit & View Score</span>
            </button>
          </div>
        </div>
      </div>

      {/* Confirmation Modal before submission */}
      {showSubmitConfirm && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-5 shadow-xl border border-slate-200 space-y-3">
            <div className="w-9 h-9 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center mx-auto">
              <AlertTriangle className="w-4 h-4 text-blue-600" />
            </div>

            <div className="text-center space-y-1">
              <h3 className="text-base font-bold text-slate-900">
                Submit Your Workbook Quiz?
              </h3>
              <p className="text-xs text-slate-600">
                You have answered <strong>{answeredQuizCount}</strong> of <strong>{totalQuizQuestions}</strong> questions with <strong>{formatTime(timeRemaining)}</strong> remaining.
              </p>
            </div>

            {totalQuizQuestions - answeredQuizCount > 0 && (
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700 flex items-center gap-2">
                <AlertTriangle className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>
                  You have {totalQuizQuestions - answeredQuizCount} unanswered questions.
                </span>
              </div>
            )}

            <div className="grid grid-cols-2 gap-2.5 pt-1">
              <button
                onClick={() => setShowSubmitConfirm(false)}
                className="py-2 px-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-colors"
              >
                Return to Quiz
              </button>
              <button
                onClick={handleFinalSubmitQuiz}
                className="py-2 px-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs transition-colors shadow-xs"
              >
                Confirm Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
