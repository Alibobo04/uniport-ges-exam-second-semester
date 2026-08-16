import React, { useState } from 'react';
import { CourseInfo, ChapterSummary } from '../../types';
import { FLASHCARDS, COURSE_SUMMARIES } from '../../data/coursesData';
import { 
  RotateCw, ChevronLeft, ChevronRight, CheckCircle2, 
  BookOpen, Layers, Shuffle, Lightbulb, Check, ArrowLeft
} from 'lucide-react';

interface FlashcardsAndSummariesViewProps {
  course: CourseInfo;
  initialSubTab?: 'flashcards' | 'summaries' | 'tips';
  onSubTabChange?: (tab: 'flashcards' | 'summaries' | 'tips') => void;
  onBackToDashboard?: () => void;
  soundEnabled: boolean;
}

export const FlashcardsAndSummariesView: React.FC<FlashcardsAndSummariesViewProps> = ({
  course,
  initialSubTab = 'flashcards',
  onSubTabChange,
  onBackToDashboard,
  soundEnabled,
}) => {
  const [activeSubTab, setActiveSubTab] = useState<'flashcards' | 'summaries' | 'tips'>(
    initialSubTab === 'summaries' || initialSubTab === 'tips' ? initialSubTab : 'flashcards'
  );

  // Sync with prop when URL changes
  React.useEffect(() => {
    if (initialSubTab && (initialSubTab === 'flashcards' || initialSubTab === 'summaries' || initialSubTab === 'tips')) {
      setActiveSubTab(initialSubTab);
    }
  }, [initialSubTab]);

  const handleSetSubTab = (tab: 'flashcards' | 'summaries' | 'tips') => {
    setActiveSubTab(tab);
    if (onSubTabChange) {
      onSubTabChange(tab);
    }
  };

  // Flashcards state
  const courseCards = FLASHCARDS.filter((fc) => fc.courseId === course.id);
  const [cardIndex, setCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [masteredCards, setMasteredCards] = useState<Record<string, boolean>>({});
  const [filterMastered, setFilterMastered] = useState<'all' | 'unmastered'>('all');

  const currentCards = filterMastered === 'unmastered'
    ? courseCards.filter((fc) => !masteredCards[fc.id])
    : courseCards;

  const currentCard = currentCards[cardIndex] || courseCards[0];

  // Summaries
  const summaries: ChapterSummary[] = COURSE_SUMMARIES[course.id] || [];
  const [openChapter, setOpenChapter] = useState<string>(summaries[0]?.id || '');

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    if (soundEnabled && typeof window !== 'undefined') {
      try {
        const ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.type = 'sine';
        osc.frequency.setValueAtTime(600, ctx.currentTime);
        gain.gain.setValueAtTime(0.03, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
        osc.start();
        osc.stop(ctx.currentTime + 0.1);
      } catch {
        // Fallback
      }
    }
  };

  const handleNextCard = () => {
    setIsFlipped(false);
    setCardIndex((prev) => (prev + 1) % currentCards.length);
  };

  const handlePrevCard = () => {
    setIsFlipped(false);
    setCardIndex((prev) => (prev - 1 + currentCards.length) % currentCards.length);
  };

  const toggleMastered = (cardId: string) => {
    setMasteredCards((prev) => ({ ...prev, [cardId]: !prev[cardId] }));
  };

  const masteredCount = Object.values(masteredCards).filter(Boolean).length;

  return (
    <div className="space-y-4" id="flashcards-summaries-view">
      {/* Header Banner */}
      <div className="bg-slate-900 text-white rounded-xl p-4 border border-slate-800 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            {onBackToDashboard && (
              <button
                onClick={onBackToDashboard}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors text-xs flex items-center gap-1 border border-slate-700 mr-1"
                title="Back to all modes"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">All Modes</span>
              </button>
            )}

            <div className="p-2 rounded-lg bg-blue-600 text-white">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white">
                {course.code} Revision & Study Tools
              </h2>
              <p className="text-xs text-slate-400">
                Interactive flashcards, chapter summaries, and high-yield study tips.
              </p>
            </div>
          </div>

          {/* Sub-tabs */}
          <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800 text-xs">
            <button
              onClick={() => handleSetSubTab('flashcards')}
              className={`px-3 py-1.5 rounded-md font-semibold transition-all flex items-center gap-1.5 text-xs ${
                activeSubTab === 'flashcards'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Flashcards ({courseCards.length})</span>
            </button>

            <button
              onClick={() => handleSetSubTab('summaries')}
              className={`px-3 py-1.5 rounded-md font-semibold transition-all flex items-center gap-1.5 text-xs ${
                activeSubTab === 'summaries'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Chapter Summaries</span>
            </button>

            <button
              onClick={() => handleSetSubTab('tips')}
              className={`px-3 py-1.5 rounded-md font-semibold transition-all flex items-center gap-1.5 text-xs ${
                activeSubTab === 'tips'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Lightbulb className="w-3.5 h-3.5" />
              <span>Quiz Tips</span>
            </button>
          </div>
        </div>
      </div>

      {/* 1. FLASHCARDS TAB */}
      {activeSubTab === 'flashcards' && (
        <div className="max-w-2xl mx-auto space-y-4">
          {/* Card stats and filter bar */}
          <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-xs flex items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-slate-700">Mastered:</span>
              <span className="font-mono font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                {masteredCount} / {courseCards.length}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() =>
                  setFilterMastered(filterMastered === 'all' ? 'unmastered' : 'all')
                }
                className={`px-2.5 py-1 rounded-lg border font-semibold transition-colors text-xs ${
                  filterMastered === 'unmastered'
                    ? 'bg-blue-50 text-blue-900 border-blue-300'
                    : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                }`}
              >
                {filterMastered === 'unmastered' ? 'Showing Unmastered' : 'Show All Cards'}
              </button>
            </div>
          </div>

          {/* Flashcard Component */}
          {currentCard ? (
            <div>
              <div
                onClick={handleFlip}
                className={`min-h-[260px] w-full rounded-xl p-5 cursor-pointer shadow-xs transition-all duration-300 flex flex-col justify-between select-none ${
                  isFlipped
                    ? 'bg-slate-900 text-white border border-slate-800'
                    : 'bg-white text-slate-900 border border-slate-200 hover:border-slate-300'
                }`}
                id={`flashcard-${currentCard.id}`}
              >
                {/* Top card bar */}
                <div className="flex items-center justify-between text-xs">
                  <span
                    className={`font-semibold px-2 py-0.5 rounded text-[10px] ${
                      isFlipped
                        ? 'bg-slate-800 text-blue-300 border border-slate-700'
                        : 'bg-slate-100 text-slate-700 border border-slate-200'
                    }`}
                  >
                    {currentCard.category}
                  </span>

                  <span
                    className={`text-xs font-mono font-semibold ${
                      isFlipped ? 'text-slate-400' : 'text-slate-500'
                    }`}
                  >
                    Card {cardIndex + 1} of {currentCards.length}
                  </span>
                </div>

                {/* Center Content */}
                <div className="my-auto py-4 text-center">
                  {!isFlipped ? (
                    <div className="space-y-2">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-blue-600">
                        Term / Concept
                      </span>
                      <h3 className="text-xl font-bold text-slate-900">
                        {currentCard.term}
                      </h3>
                      <p className="text-xs text-slate-400 flex items-center justify-center gap-1 mt-3">
                        <RotateCw className="w-3 h-3 text-slate-400" /> Click to flip
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-3 text-left">
                      <div className="border-b border-slate-800 pb-1.5 flex items-center justify-between">
                        <span className="text-xs font-bold text-blue-400">
                          {currentCard.term}
                        </span>
                        <span className="text-[10px] text-slate-400">Definition & Summary</span>
                      </div>

                      <p className="text-xs text-slate-200 font-normal leading-relaxed">
                        {currentCard.definition}
                      </p>

                      {currentCard.keyPoints && currentCard.keyPoints.length > 0 && (
                        <div className="space-y-1 pt-1">
                          <strong className="text-[11px] text-slate-300 block font-semibold">
                            Key Points:
                          </strong>
                          <ul className="text-xs text-slate-300 space-y-0.5 pl-4 list-disc">
                            {currentCard.keyPoints.map((kp, idx) => (
                              <li key={idx}>{kp}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {currentCard.example && (
                        <div className="p-2 rounded bg-slate-950 border border-slate-800 text-xs text-slate-300">
                          <strong>Example:</strong> {currentCard.example}
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Bottom Card Bar */}
                <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleMastered(currentCard.id);
                    }}
                    className={`px-2.5 py-1 rounded-lg font-semibold flex items-center gap-1 transition-all ${
                      masteredCards[currentCard.id]
                        ? 'bg-blue-600 text-white shadow-xs'
                        : isFlipped
                        ? 'bg-slate-800 text-slate-200 hover:bg-slate-700'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>
                      {masteredCards[currentCard.id] ? 'Mastered ✓' : 'Mark as Mastered'}
                    </span>
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleFlip();
                    }}
                    className="px-2.5 py-1 rounded-lg font-semibold text-xs flex items-center gap-1 text-slate-500 hover:text-slate-800"
                  >
                    <RotateCw className="w-3 h-3" />
                    <span>Flip Card</span>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white p-6 rounded-xl border border-slate-200 text-center text-slate-600">
              <p className="text-xs">All cards in this set have been marked as mastered.</p>
              <button
                onClick={() => setFilterMastered('all')}
                className="mt-2.5 px-3 py-1.5 rounded-lg bg-blue-600 text-white font-semibold text-xs"
              >
                Reset Filter
              </button>
            </div>
          )}

          {/* Flashcard Navigator controls */}
          <div className="flex items-center justify-between gap-3">
            <button
              onClick={handlePrevCard}
              className="px-4 py-2 rounded-lg bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-semibold text-xs flex items-center gap-1.5 shadow-xs transition-colors"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Previous</span>
            </button>

            <button
              onClick={() => {
                const rand = Math.floor(Math.random() * currentCards.length);
                setCardIndex(rand);
                setIsFlipped(false);
              }}
              className="p-2 rounded-lg bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 shadow-xs transition-colors"
              title="Shuffle cards"
            >
              <Shuffle className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={handleNextCard}
              className="px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs flex items-center gap-1.5 shadow-xs transition-colors"
            >
              <span>Next Card</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* 2. CHAPTER SUMMARIES TAB */}
      {activeSubTab === 'summaries' && (
        <div className="space-y-3">
          {summaries.map((chapter) => {
            const isOpen = openChapter === chapter.id;

            return (
              <div
                key={chapter.id}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs transition-all"
              >
                {/* Header Toggle */}
                <div
                  onClick={() => setOpenChapter(isOpen ? '' : chapter.id)}
                  className="p-4 bg-slate-50 hover:bg-slate-100 cursor-pointer flex items-center justify-between gap-3 transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-7 h-7 rounded-lg bg-slate-900 text-white flex items-center justify-center font-bold text-xs font-mono shrink-0">
                      CH{chapter.chapterNumber}
                    </span>
                    <div>
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                        {chapter.title}
                      </h3>
                      <p className="text-[11px] text-slate-500">
                        {chapter.summaryBullets.length} core points • {chapter.keyDefinitions.length} definitions
                      </p>
                    </div>
                  </div>

                  <button className="text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-lg">
                    {isOpen ? 'Collapse' : 'Expand'}
                  </button>
                </div>

                {/* Body Content */}
                {isOpen && (
                  <div className="p-4 sm:p-5 space-y-4 border-t border-slate-100">
                    {/* Summary Bullets */}
                    <div className="space-y-1.5">
                      <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5 text-blue-600" />
                        Key Concepts
                      </h4>
                      <ul className="space-y-1 text-xs text-slate-700 pl-4 list-disc leading-relaxed">
                        {chapter.summaryBullets.map((bullet, bIdx) => (
                          <li key={bIdx}>{bullet}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Key Definitions Table */}
                    <div className="space-y-1.5">
                      <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5 text-blue-600" />
                        Key Definitions
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {chapter.keyDefinitions.map((def, dIdx) => (
                          <div
                            key={dIdx}
                            className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs"
                          >
                            <span className="font-bold text-slate-900 block mb-0.5">
                              {def.term}
                            </span>
                            <span className="text-slate-600 leading-snug text-[11px]">
                              {def.meaning}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Exam Hotspots */}
                    <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-800 space-y-1">
                      <h4 className="font-bold text-slate-900 flex items-center gap-1.5">
                        <Lightbulb className="w-3.5 h-3.5 text-blue-600" />
                        Important Revision Highlights
                      </h4>
                      <ul className="space-y-0.5 pl-4 list-disc text-xs text-slate-600">
                        {chapter.examHotspotTips.map((tip, tIdx) => (
                          <li key={tIdx}>{tip}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* 3. TIPS TAB */}
      {activeSubTab === 'tips' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5 shadow-xs space-y-3">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-sm border-b border-slate-100 pb-2.5">
              <Lightbulb className="w-4 h-4 text-blue-600" />
              <span>Timing & Quiz Strategy</span>
            </div>
            <div className="space-y-2 text-xs text-slate-700 leading-relaxed">
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                <strong className="text-slate-900 block font-semibold mb-0.5">
                  1. Question Pacing:
                </strong>
                Aim to spend around 30 to 45 seconds per question. If a question is tricky, flag it and proceed to simpler items first.
              </div>
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                <strong className="text-slate-900 block font-semibold mb-0.5">
                  2. Review Flagged Questions:
                </strong>
                Use the question palette to jump back to unanswered or flagged questions before final submission.
              </div>
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                <strong className="text-slate-900 block font-semibold mb-0.5">
                  3. Process of Elimination:
                </strong>
                Rule out obviously incorrect distractors first to boost odds on challenging multiple-choice questions.
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5 shadow-xs space-y-3">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-sm border-b border-slate-100 pb-2.5">
              <BookOpen className="w-4 h-4 text-blue-600" />
              <span>Course Key Topics</span>
            </div>
            <div className="space-y-2 text-xs text-slate-700 leading-relaxed">
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                <strong className="text-slate-900 block font-semibold mb-0.5">
                  GES 100 / GES 102 (Communication & Study Skills)
                </strong>
                Focus on reading techniques (skimming vs. scanning), note-taking methods, and reference formats.
              </div>
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                <strong className="text-slate-900 block font-semibold mb-0.5">
                  GES 101 / GES 103 (Computer & Digital Skills)
                </strong>
                Key hardware/software taxonomy, input vs. output devices, networking fundamentals, and security concepts.
              </div>
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                <strong className="text-slate-900 block font-semibold mb-0.5">
                  General Revision
                </strong>
                Practice with flashcards to reinforce retention and test yourself with timed quizzes regularly.
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
