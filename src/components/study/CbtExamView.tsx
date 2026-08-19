import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { CourseInfo, Question } from '../../types';
import { 
  Clock, CheckCircle2, XCircle, Flag, RotateCcw, Award, ChevronLeft, 
  ChevronRight, AlertTriangle, BookOpen, ArrowLeft
} from 'lucide-react';
import { saveQuizAttempt } from '../../lib/quizService';
import { WhatsAppGroupModal } from '../WhatsAppGroupModal';
import { shouldShowWhatsAppModal } from '../../lib/whatsAppPromptService';

interface CbtExamViewProps {
  course: CourseInfo;
  questions: Question[];
  onBackToDashboard?: () => void;
  onExamStateChange?: (isActive: boolean) => void;
  soundEnabled: boolean;
}

export const CbtExamView: React.FC<CbtExamViewProps> = ({
  course,
  questions,
  onBackToDashboard,
  onExamStateChange,
  soundEnabled,
}) => {
  // Course past questions
  const coursePqQuestions = useMemo(
    () => questions.filter((q) => q.courseId === course.id),
    [questions, course.id]
  );

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
  const [examQuestions, setExamQuestions] = useState<Question[]>(() => {
    const shuffled = shuffleArray(coursePqQuestions);
    return shuffled.slice(0, 50);
  });
  const [examStarted, setExamStarted] = useState(false);
  const [examSubmitted, setExamSubmitted] = useState(false);
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false);
  const [durationMinutes, setDurationMinutes] = useState<number>(15);
  const [timeRemaining, setTimeRemaining] = useState<number>(15 * 60);
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<Record<string, boolean>>({});
  const [reviewFilter, setReviewFilter] = useState<'all' | 'incorrect' | 'correct' | 'flagged'>('all');
  const [showSubmitConfirm, setShowSubmitConfirm] = useState(false);

  // Update questions when course changes
  useEffect(() => {
    const shuffled = shuffleArray(coursePqQuestions);
    setExamQuestions(selectedQuestionCount === 'all' ? shuffled : shuffled.slice(0, typeof selectedQuestionCount === 'number' ? selectedQuestionCount : 50));
    setExamStarted(false);
    setExamSubmitted(false);
    setSelectedAnswers({});
    setFlaggedQuestions({});
  }, [course.id]);

  // Report active exam status (hide secondary course banner when taking the test)
  useEffect(() => {
    const isTestActive = examStarted && !examSubmitted;
    onExamStateChange?.(isTestActive);
    return () => {
      onExamStateChange?.(false);
    };
  }, [examStarted, examSubmitted, onExamStateChange]);

  // Play audio sound effects
  const playSound = useCallback((type: 'select' | 'submit' | 'timeWarning') => {
    if (!soundEnabled || typeof window === 'undefined') return;
    try {
      const ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      if (type === 'select') {
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

  // Timer countdown
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (examStarted && !examSubmitted && durationMinutes > 0) {
      interval = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            handleSubmitExam();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [examStarted, examSubmitted, durationMinutes]);

  const handleStartExam = () => {
    let pool = shuffleArray(coursePqQuestions);
    if (selectedQuestionCount !== 'all') {
      pool = pool.slice(0, selectedQuestionCount);
    }
    setExamQuestions(pool);
    setTimeRemaining(durationMinutes * 60);
    setCurrentIdx(0);
    setSelectedAnswers({});
    setFlaggedQuestions({});
    setExamSubmitted(false);
    setExamStarted(true);
    setShowSubmitConfirm(false);
  };

  const handleSelectOption = (questionId: string, optIdx: number) => {
    if (examSubmitted) return;
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: optIdx }));
    playSound('select');
  };

  const handleToggleFlag = (questionId: string) => {
    setFlaggedQuestions((prev) => ({ ...prev, [questionId]: !prev[questionId] }));
  };

  const handleSubmitExam = () => {
    setExamSubmitted(true);
    setShowSubmitConfirm(false);
    playSound('submit');

    // Calculate metrics for cloud storage
    const activeList = examQuestions.length > 0 ? examQuestions : coursePqQuestions;
    let correct = 0;
    activeList.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctAnswer) {
        correct++;
      }
    });
    const total = activeList.length;
    const pct = total > 0 ? Math.round((correct / total) * 100) : 0;
    const score70 = total > 0 ? Math.round((correct / total) * 70) : 0;
    const grade = pct >= 70 ? 'A' : pct >= 60 ? 'B' : pct >= 50 ? 'C' : pct >= 45 ? 'D' : 'F';
    const timeSpent = durationMinutes * 60 - timeRemaining;

    saveQuizAttempt({
      courseId: course.id,
      mode: 'cbt',
      score: correct,
      totalQuestions: total,
      percentage: pct,
      scoreOver70: score70,
      grade,
      timeSpentSeconds: timeSpent,
    }).catch((err) => {
      console.warn('Could not save CBT attempt to cloud:', err);
    });

    // Trigger WhatsApp official group popup after submitting timed CBT quiz
    if (shouldShowWhatsAppModal()) {
      setTimeout(() => {
        setShowWhatsAppModal(true);
      }, 700);
    }
  };

  // Calculate score based on current randomized exam questions
  const activeQuestionList = examQuestions.length > 0 ? examQuestions : coursePqQuestions;
  const totalQuestions = activeQuestionList.length;
  let correctCount = 0;
  activeQuestionList.forEach((q) => {
    if (selectedAnswers[q.id] === q.correctAnswer) {
      correctCount++;
    }
  });

  const percentage = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;
  const scoreOver70 = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 70) : 0;
  const scoreOver70Formatted = scoreOver70.toString();
  const answeredCount = Object.keys(selectedAnswers).length;
  const flaggedCount = Object.values(flaggedQuestions).filter(Boolean).length;
  const timeSpentSec = durationMinutes * 60 - timeRemaining;

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // Grade calculation
  const getGrade = (pct: number) => {
    if (pct >= 70) return { grade: 'A', label: 'Excellent', color: 'text-blue-600 bg-blue-50 border-blue-200' };
    if (pct >= 60) return { grade: 'B', label: 'Very Good', color: 'text-blue-600 bg-blue-50 border-blue-200' };
    if (pct >= 50) return { grade: 'C', label: 'Pass', color: 'text-slate-700 bg-slate-100 border-slate-300' };
    if (pct >= 45) return { grade: 'D', label: 'Fair', color: 'text-slate-700 bg-slate-100 border-slate-300' };
    return { grade: 'F', label: 'Needs Practice', color: 'text-rose-600 bg-rose-50 border-rose-200' };
  };

  const gradeInfo = getGrade(percentage);

  // START SCREEN (Before quiz begins)
  if (!examStarted) {
    return (
      <div className="max-w-2xl mx-auto space-y-5" id="cbt-start-screen">
        {/* Banner */}
        <div className="bg-slate-900 text-white rounded-xl p-5 border border-slate-800 shadow-xs">
          <div className="flex items-center justify-between gap-3 mb-2">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-600 text-white">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-base sm:text-lg font-bold text-white">
                  {course.code} Past Questions
                </h2>
                <p className="text-xs text-slate-400">
                  {coursePqQuestions.length} Past Questions Available
                </p>
              </div>
            </div>

            {onBackToDashboard && (
              <button
                onClick={onBackToDashboard}
                className="text-xs font-semibold px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors flex items-center gap-1 border border-slate-700"
                title="Back to all modes"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>All Modes</span>
              </button>
            )}
          </div>
          <p className="text-slate-300 text-xs leading-relaxed">
            Simulate realistic exam hall conditions with official past exam questions under a timed countdown. Answer review and detailed performance reports are generated upon submission.
          </p>
        </div>

        {/* Configuration Box */}
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-4">
          <h3 className="font-bold text-slate-900 text-sm border-b border-slate-100 pb-2.5">
            Quiz Settings
          </h3>

          {/* Mode Info (Single Mode: Timed Quiz) */}
          <div className="p-3 rounded-lg border border-blue-600 bg-blue-50/60 text-slate-900 ring-1 ring-blue-600">
            <div className="flex items-center justify-between mb-1">
              <span className="font-bold text-xs flex items-center gap-1.5 text-blue-900">
                <Clock className="w-3.5 h-3.5 text-blue-600" />
                <span>Timed Quiz Mode</span>
              </span>
              <span className="text-[10px] font-bold text-blue-700 bg-white px-2 py-0.5 rounded border border-blue-200">
                Exam Mode
              </span>
            </div>
            <p className="text-xs text-slate-600 leading-snug">
              Complete the questions within the selected duration. Scores and explanations are provided after submission.
            </p>
          </div>

          {/* Question Count Selector */}
          <div className="space-y-2">
            <label className="block text-xs font-semibold text-slate-700">
              Number of Questions
            </label>
            <div className="grid grid-cols-3 gap-2 text-xs font-semibold">
              {[50, 100, 'all'].map((cnt) => {
                const countLabel = cnt === 'all' ? `All (${coursePqQuestions.length})` : `${cnt} Questions`;
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
            <div className="grid grid-cols-4 sm:grid-cols-6 gap-2 text-xs font-semibold">
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
            onClick={handleStartExam}
            className="w-full py-2.5 px-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-xs transition-colors mt-2"
            id="start-cbt-exam-btn"
          >
            <span>Start Past Questions Quiz</span>
            <Clock className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  // RESULT SCREEN (After submission)
  if (examSubmitted) {
    const filteredReviewQuestions = activeQuestionList.filter((q) => {
      const userChoice = selectedAnswers[q.id];
      const isCorrect = userChoice === q.correctAnswer;
      const isFlagged = !!flaggedQuestions[q.id];

      if (reviewFilter === 'correct') return isCorrect;
      if (reviewFilter === 'incorrect') return !isCorrect;
      if (reviewFilter === 'flagged') return isFlagged;
      return true;
    });

    return (
      <div className="max-w-4xl mx-auto space-y-5" id="cbt-results-screen">
        {/* Score Summary Card */}
        <div className="bg-white rounded-xl border border-slate-200 p-5 sm:p-6 shadow-xs">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-100 pb-4">
            <div className="text-center sm:text-left space-y-1">
              <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Quiz Completed
              </div>
              <h2 className="text-lg font-bold text-slate-900">
                {course.code} Quiz Results
              </h2>
            </div>

            {/* Score & Grade Display */}
            <div className="flex items-center gap-3">
              <div className="text-center p-3 rounded-xl bg-slate-900 text-white min-w-[130px] shadow-xs">
                {/* Score over 70 */}
                <div className="text-xl sm:text-2xl font-black text-blue-400 font-mono flex items-baseline justify-center gap-1">
                  <span>{scoreOver70Formatted}</span>
                  <span className="text-xs font-semibold text-slate-400">/ 70</span>
                </div>
                {/* Score over total questions & percentage */}
                <div className="text-[11px] text-slate-300 font-mono mt-1 pt-1 border-t border-slate-800 flex items-center justify-center gap-1">
                  <span className="text-white font-bold">{correctCount}/{totalQuestions} Qs</span>
                  <span className="text-slate-500">•</span>
                  <span className="text-blue-300 font-semibold">{percentage}%</span>
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
              <span className="text-[10px] text-slate-500 font-bold uppercase block">Raw Score</span>
              <span className="text-sm font-bold text-slate-900 font-mono">{correctCount} / {totalQuestions}</span>
            </div>
            <div className="p-2.5 rounded-lg bg-blue-50 border border-blue-200">
              <span className="text-[10px] text-blue-700 font-bold uppercase block">Score (Over 70)</span>
              <span className="text-sm font-bold text-blue-800 font-mono">{scoreOver70Formatted} / 70</span>
            </div>
            <div className="p-2.5 rounded-lg bg-rose-50 border border-rose-200">
              <span className="text-[10px] text-rose-700 font-bold uppercase block">Missed</span>
              <span className="text-sm font-bold text-rose-800 font-mono">{totalQuestions - correctCount}</span>
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
                onClick={handleStartExam}
                className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs flex items-center gap-1.5 shadow-xs transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Retake Quiz</span>
              </button>

              {onBackToDashboard && (
                <button
                  onClick={onBackToDashboard}
                  className="px-3.5 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs flex items-center gap-1.5 transition-colors border border-slate-200"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>All Modes</span>
                </button>
              )}
            </div>

            <span className="text-xs text-slate-500">
              Review answers and explanations below.
            </span>
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
                All ({totalQuestions})
              </button>
              <button
                onClick={() => setReviewFilter('incorrect')}
                className={`px-2.5 py-0.5 rounded font-semibold transition-colors text-xs ${
                  reviewFilter === 'incorrect'
                    ? 'bg-rose-600 text-white'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Missed ({totalQuestions - correctCount})
              </button>
              <button
                onClick={() => setReviewFilter('correct')}
                className={`px-2.5 py-0.5 rounded font-semibold transition-colors text-xs ${
                  reviewFilter === 'correct'
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Correct ({correctCount})
              </button>
              <button
                onClick={() => setReviewFilter('flagged')}
                className={`px-2.5 py-0.5 rounded font-semibold transition-colors text-xs ${
                  reviewFilter === 'flagged'
                    ? 'bg-slate-700 text-white'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Flagged ({flaggedCount})
              </button>
            </div>
          </div>

          {/* Review items */}
          <div className="space-y-3">
            {filteredReviewQuestions.map((q, idx) => {
              const userChoice = selectedAnswers[q.id];
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

  // ACTIVE CBT EXAM SCREEN
  const currentQ = activeQuestionList[currentIdx];
  const userChoice = selectedAnswers[currentQ.id];
  const isFlagged = !!flaggedQuestions[currentQ.id];

  return (
    <div className="space-y-4" id="active-cbt-screen">
      {/* Top Timer Bar */}
      <div className="bg-slate-900 text-white rounded-xl p-3.5 sm:p-4 border border-slate-800 shadow-xs flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 rounded-lg bg-blue-600 text-white">
            <Clock className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-bold text-white">
              {course.code} Past Questions
            </div>
            <p className="text-xs text-slate-400">
              Question {currentIdx + 1} of {totalQuestions}
            </p>
          </div>
        </div>

        {/* Timer Box */}
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
            id="submit-exam-trigger-btn"
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
                  onClick={() => handleSelectOption(currentQ.id, optIdx)}
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

            {currentIdx < totalQuestions - 1 ? (
              <button
                onClick={() => setCurrentIdx((prev) => Math.min(totalQuestions - 1, prev + 1))}
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
              Jump directly to any question.
            </p>
          </div>

          {/* Quick stats legend */}
          <div className="grid grid-cols-3 gap-1.5 text-xs text-center font-semibold">
            <div className="p-1.5 rounded bg-blue-50 text-blue-800 border border-blue-100">
              <span className="block text-xs font-bold">{answeredCount}</span>
              <span className="text-[10px]">Answered</span>
            </div>
            <div className="p-1.5 rounded bg-slate-100 text-slate-800 border border-slate-200">
              <span className="block text-xs font-bold">{flaggedCount}</span>
              <span className="text-[10px]">Flagged</span>
            </div>
            <div className="p-1.5 rounded bg-slate-50 text-slate-600 border border-slate-200">
              <span className="block text-xs font-bold">{totalQuestions - answeredCount}</span>
              <span className="text-[10px]">Left</span>
            </div>
          </div>

          {/* Numbered buttons grid */}
          <div className="grid grid-cols-5 gap-1.5 pt-1">
            {activeQuestionList.map((q, qIndex) => {
              const isAnswered = selectedAnswers[q.id] !== undefined;
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
                    <span className="absolute top-1 right-1 w-1 h-1 rounded-full bg-white" />
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
                Submit Your Quiz?
              </h3>
              <p className="text-xs text-slate-600">
                You have answered <strong>{answeredCount}</strong> of <strong>{totalQuestions}</strong> questions with <strong>{formatTime(timeRemaining)}</strong> remaining.
              </p>
            </div>

            {totalQuestions - answeredCount > 0 && (
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700 flex items-center gap-2">
                <AlertTriangle className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>
                  You have {totalQuestions - answeredCount} unanswered questions.
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
                onClick={handleSubmitExam}
                className="py-2 px-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs transition-colors shadow-xs"
              >
                Confirm Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Official WhatsApp Group Modal Popup */}
      <WhatsAppGroupModal
        isOpen={showWhatsAppModal}
        onClose={() => setShowWhatsAppModal(false)}
        contextMessage="Congratulations on submitting your CBT past questions exam! Join the official GES QUIZ HUB WhatsApp group for more study materials and exam tips."
      />
    </div>
  );
};
