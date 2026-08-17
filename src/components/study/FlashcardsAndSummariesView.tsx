import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { CourseInfo, ChapterSummary, Flashcard } from '../../types';
import { FLASHCARDS, COURSE_SUMMARIES } from '../../data/coursesData';
import { 
  RotateCw, ChevronLeft, ChevronRight, CheckCircle2, 
  BookOpen, Layers, Shuffle, Lightbulb, Check, ArrowLeft, Sparkles,
  Search, Filter, Award, ChevronsLeft, ChevronsRight, X,
  Copy, Zap, GraduationCap, Calendar, Target, AlertTriangle,
  ChevronDown, ChevronUp, SlidersHorizontal
} from 'lucide-react';

interface FlashcardsAndSummariesViewProps {
  course: CourseInfo;
  initialSubTab?: 'select' | 'flashcards' | 'summaries' | 'tips';
  onSubTabChange?: (tab: 'select' | 'flashcards' | 'summaries') => void;
  onBackToDashboard?: () => void;
  soundEnabled: boolean;
}

export const FlashcardsAndSummariesView: React.FC<FlashcardsAndSummariesViewProps> = ({
  course,
  initialSubTab,
  onSubTabChange,
  onBackToDashboard,
  soundEnabled,
}) => {
  const [subMode, setSubMode] = useState<'select' | 'flashcards' | 'summaries'>(() => {
    if (initialSubTab === 'flashcards' || initialSubTab === 'summaries') {
      return initialSubTab;
    }
    return 'select';
  });

  // Sync with prop when URL changes
  useEffect(() => {
    if (initialSubTab === 'flashcards' || initialSubTab === 'summaries' || initialSubTab === 'select') {
      setSubMode(initialSubTab);
    }
  }, [initialSubTab]);

  const handleSetSubMode = (mode: 'select' | 'flashcards' | 'summaries') => {
    setSubMode(mode);
    if (onSubTabChange) {
      onSubTabChange(mode);
    }
  };

  // Flashcards state
  const courseCards = useMemo(() => {
    return FLASHCARDS.filter((fc) => fc.courseId === course.id);
  }, [course.id]);

  const [cardIndex, setCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [sourceFilter, setSourceFilter] = useState<'all' | 'Workbook' | 'PastQuestion' | 'Concept'>('all');
  const [topicFilter, setTopicFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [jumpInput, setJumpInput] = useState<string>('');
  const [filterMastered, setFilterMastered] = useState<'all' | 'unmastered' | 'mastered'>('all');

  // Local storage persistence for mastered cards
  const storageKey = `uniport_mastered_cards_${course.id}`;
  const [masteredCards, setMasteredCards] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Save to localStorage when masteredCards changes
  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(masteredCards));
    } catch {
      // ignore
    }
  }, [masteredCards, storageKey]);

  // Extract unique topics for dropdown filter
  const availableTopics = useMemo(() => {
    const set = new Set<string>();
    courseCards.forEach((c) => {
      if (c.topic) set.add(c.topic);
      else if (c.category) set.add(c.category);
    });
    return Array.from(set).sort();
  }, [courseCards]);

  // Counts by source
  const sourceCounts = useMemo(() => {
    let workbook = 0;
    let past = 0;
    let concept = 0;
    courseCards.forEach((c) => {
      if (c.source === 'Workbook') workbook++;
      else if (c.source === 'PastQuestion') past++;
      else concept++;
    });
    return { all: courseCards.length, workbook, past, concept };
  }, [courseCards]);

  // Filtered cards
  const filteredCards = useMemo(() => {
    return courseCards.filter((fc) => {
      // Source filter
      if (sourceFilter !== 'all') {
        if (sourceFilter === 'Concept' && fc.source !== 'Concept') return false;
        if (sourceFilter === 'Workbook' && fc.source !== 'Workbook') return false;
        if (sourceFilter === 'PastQuestion' && fc.source !== 'PastQuestion') return false;
      }

      // Topic filter
      if (topicFilter !== 'all') {
        const matchesTopic = (fc.topic && fc.topic === topicFilter) || (fc.category && fc.category === topicFilter);
        if (!matchesTopic) return false;
      }

      // Mastery filter
      if (filterMastered === 'unmastered' && masteredCards[fc.id]) return false;
      if (filterMastered === 'mastered' && !masteredCards[fc.id]) return false;

      // Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const inTerm = fc.term.toLowerCase().includes(q);
        const inQuestion = (fc.conceptQuestion || '').toLowerCase().includes(q);
        const inDef = fc.definition.toLowerCase().includes(q);
        const inTopic = (fc.topic || '').toLowerCase().includes(q);
        const inCategory = (fc.category || '').toLowerCase().includes(q);
        const inExample = (fc.example || '').toLowerCase().includes(q);
        const inKeyPoints = (fc.keyPoints || []).some(kp => kp.toLowerCase().includes(q));
        if (!inTerm && !inQuestion && !inDef && !inTopic && !inCategory && !inExample && !inKeyPoints) {
          return false;
        }
      }

      return true;
    });
  }, [courseCards, sourceFilter, topicFilter, filterMastered, searchQuery, masteredCards]);

  // Ensure cardIndex stays within bounds when filters change
  useEffect(() => {
    if (cardIndex >= filteredCards.length) {
      setCardIndex(0);
      setIsFlipped(false);
    }
  }, [filteredCards.length, cardIndex]);

  const currentCard: Flashcard | undefined = filteredCards[cardIndex] || filteredCards[0];

  // Summaries state
  const summaries: ChapterSummary[] = COURSE_SUMMARIES[course.id] || [];
  const [openChapters, setOpenChapters] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    summaries.forEach((ch, idx) => {
      initial[ch.id] = idx === 0;
    });
    return initial;
  });

  const toggleChapter = (id: string) => {
    setOpenChapters((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleExpandAll = () => {
    const allOpen: Record<string, boolean> = {};
    summaries.forEach((ch) => {
      allOpen[ch.id] = true;
    });
    setOpenChapters(allOpen);
  };

  const handleCollapseAll = () => {
    setOpenChapters({});
  };

  /**
   * Helper to parse and render markdown bold (**text**), italics (*text*),
   * and clean math tokens into properly styled React elements without raw asterisks.
   */
  const renderFormattedText = (text: string, isDark: boolean = false) => {
    if (!text) return null;

    // Clean up LaTeX formatting tokens into readable unicode text
    const cleanText = text
      .replace(/\\text\{([^}]+)\}/g, '$1')
      .replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '($1 / $2)')
      .replace(/\\times/g, '×')
      .replace(/\$/g, '');

    // Split text by markdown bold (**...**) and italic (*...*)
    const parts = cleanText.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);

    return (
      <>
        {parts.map((part, index) => {
          if (part.startsWith('**') && part.endsWith('**') && part.length >= 4) {
            const inner = part.slice(2, -2);
            return (
              <strong
                key={index}
                className={`font-bold ${isDark ? 'text-white' : 'text-slate-950'}`}
              >
                {inner}
              </strong>
            );
          }
          if (part.startsWith('*') && part.endsWith('*') && part.length >= 2) {
            const inner = part.slice(1, -1);
            return (
              <em
                key={index}
                className={`italic font-medium ${isDark ? 'text-blue-200' : 'text-slate-800'}`}
              >
                {inner}
              </em>
            );
          }
          return <span key={index}>{part}</span>;
        })}
      </>
    );
  };

  const playFlipSound = useCallback(() => {
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
  }, [soundEnabled]);

  const handleFlip = useCallback(() => {
    setIsFlipped((prev) => !prev);
    playFlipSound();
  }, [playFlipSound]);

  const handleNextCard = useCallback(() => {
    if (filteredCards.length === 0) return;
    setIsFlipped(false);
    setCardIndex((prev) => (prev + 1) % filteredCards.length);
  }, [filteredCards.length]);

  const handlePrevCard = useCallback(() => {
    if (filteredCards.length === 0) return;
    setIsFlipped(false);
    setCardIndex((prev) => (prev - 1 + filteredCards.length) % filteredCards.length);
  }, [filteredCards.length]);

  const handleJumpTo = (e: React.FormEvent) => {
    e.preventDefault();
    const target = parseInt(jumpInput, 10);
    if (!isNaN(target) && target >= 1 && target <= filteredCards.length) {
      setIsFlipped(false);
      setCardIndex(target - 1);
      setJumpInput('');
    }
  };

  const handleJumpBy = (delta: number) => {
    if (filteredCards.length === 0) return;
    setIsFlipped(false);
    setCardIndex((prev) => {
      let next = prev + delta;
      if (next < 0) next = 0;
      if (next >= filteredCards.length) next = filteredCards.length - 1;
      return next;
    });
  };

  const toggleMastered = (cardId: string) => {
    setMasteredCards((prev) => ({ ...prev, [cardId]: !prev[cardId] }));
  };

  // Keyboard navigation
  useEffect(() => {
    if (subMode !== 'flashcards') return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in search or jump input
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }

      if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNextCard();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrevCard();
      } else if (e.key === ' ' || e.key === 'Enter' || e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        e.preventDefault();
        handleFlip();
      } else if (e.key.toLowerCase() === 'm' && currentCard) {
        e.preventDefault();
        toggleMastered(currentCard.id);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [subMode, handleNextCard, handlePrevCard, handleFlip, currentCard]);

  const totalCourseMastered = useMemo(() => {
    return courseCards.filter(c => masteredCards[c.id]).length;
  }, [courseCards, masteredCards]);

  const percentMastered = courseCards.length > 0 
    ? Math.round((totalCourseMastered / courseCards.length) * 100) 
    : 0;

  return (
    <div className="space-y-4" id="flashcards-summaries-view">
      {/* =========================================================================
          1. SELECTION SCREEN (2 MODES: FLASHCARDS VS CHAPTER SUMMARIES)
         ========================================================================= */}
      {subMode === 'select' && (
        <div className="space-y-5" id="flashcards-mode-selection">
          {/* Header Banner */}
          <div className="bg-slate-900 text-white rounded-xl p-5 border border-slate-800 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                {onBackToDashboard && (
                  <button
                    onClick={onBackToDashboard}
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors text-xs flex items-center gap-1 border border-slate-700 mr-1"
                    title="Back to course dashboard"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Hub</span>
                  </button>
                )}

                <div className="p-2.5 rounded-lg bg-blue-600 text-white shadow-xs">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold text-blue-400 uppercase tracking-wider font-mono">
                      {course.code}
                    </span>
                    <span className="text-slate-600">•</span>
                    <span className="text-xs text-slate-300 font-medium">Revision & Study Modes</span>
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-white mt-0.5">
                    Flashcards & Chapter Summaries
                  </h2>
                </div>
              </div>

              <div className="bg-slate-950 px-3.5 py-2 rounded-lg border border-slate-800 text-left sm:text-right">
                <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider block">Full Study Bank</span>
                <span className="text-xs font-bold text-blue-400 font-mono">
                  {courseCards.length} Cards • {summaries.length} Chapters
                </span>
              </div>
            </div>

            <p className="text-slate-300 text-xs leading-relaxed mt-3 pt-3 border-t border-slate-800">
              Complete revision bank powered by all questions from workbook practice drills, timed CBT past exams, and key concepts for {course.code}. Choose your revision mode below.
            </p>
          </div>

          {/* 2 Modes Selection Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Mode 1: Flashcards */}
            <div
              onClick={() => handleSetSubMode('flashcards')}
              className="bg-white rounded-xl border border-slate-200 hover:border-blue-500 p-6 shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
              id="revision-card-flashcards"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Layers className="w-5 h-5" />
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-100">
                    Active Recall Drills
                  </span>
                  <span className="text-xs text-slate-400 font-mono font-semibold">
                    Mode 1
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                  Interactive Flashcards ({courseCards.length} Cards)
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Complete bank containing every single question from Workbook Practice Drills and Past CBT Exams converted into flip flashcards with answers, detailed explanations, and key points.
                </p>

                <div className="grid grid-cols-3 gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-center mb-4">
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase">Workbook</span>
                    <span className="text-xs font-bold text-slate-800">{sourceCounts.workbook} Cards</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase">Past CBT</span>
                    <span className="text-xs font-bold text-slate-800">{sourceCounts.past} Cards</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase">Mastered</span>
                    <span className="text-xs font-bold text-blue-600">{totalCourseMastered}/{courseCards.length}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="text-xs text-slate-500 font-mono font-semibold">
                  {courseCards.length} Total Flashcards
                </div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-blue-600">
                  <span>Open Flashcards</span>
                  <span className="p-1.5 rounded-lg bg-blue-50 group-hover:bg-blue-600 text-blue-600 group-hover:text-white transition-colors">
                    <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>

            {/* Mode 2: Chapter Summaries */}
            <div
              onClick={() => handleSetSubMode('summaries')}
              className="bg-white rounded-xl border border-slate-200 hover:border-blue-500 p-6 shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
              id="revision-card-summaries"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <BookOpen className="w-5 h-5" />
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-100">
                    High-Yield Lecture Notes
                  </span>
                  <span className="text-xs text-slate-400 font-mono font-semibold">
                    Mode 2
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                  Chapter Summaries
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  Structured chapter-by-chapter revision notes, core concept breakdowns, key definitions glossary tables, and high-yield exam hotspot takeaways.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="text-xs text-slate-500 font-mono font-semibold">
                  {summaries.length} Chapters Summarized
                </div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-blue-600">
                  <span>Open Chapter Summaries</span>
                  <span className="p-1.5 rounded-lg bg-blue-50 group-hover:bg-blue-600 text-blue-600 group-hover:text-white transition-colors">
                    <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          2. MODE 1: INTERACTIVE FLASHCARDS (FULL QUESTION BANK & TOPICS)
         ========================================================================= */}
      {subMode === 'flashcards' && (
        <div className="space-y-4" id="flashcards-mode-view">
          {/* Top Mode Header with Mode Switcher */}
          <div className="bg-slate-900 text-white rounded-xl p-4 border border-slate-800 shadow-xs">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleSetSubMode('select')}
                  className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors text-xs font-semibold flex items-center gap-1.5 border border-slate-700"
                  title="Back to modes selection"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Revision Modes</span>
                </button>

                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-blue-600 text-white">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-white flex items-center gap-2">
                      <span>{course.code} Flashcard Revision Bank</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
                        {courseCards.length} Total Cards
                      </span>
                    </h2>
                    <p className="text-[11px] text-slate-400">
                      Active recall drills covering all Workbook Drills & Past CBT Questions
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Switch to Chapter Summaries */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleSetSubMode('summaries')}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 text-xs font-semibold transition-colors flex items-center gap-1.5"
                >
                  <BookOpen className="w-3.5 h-3.5 text-blue-400" />
                  <span>Switch to Chapter Summaries</span>
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {/* Control Panel: Filters, Search & Navigation */}
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs space-y-3.5">
              {/* Row 1: Source Filter Tabs */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-3">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="text-xs font-bold text-slate-700 mr-1 flex items-center gap-1">
                    <Filter className="w-3.5 h-3.5 text-blue-600" /> Source:
                  </span>
                  
                  <button
                    onClick={() => { setSourceFilter('all'); setCardIndex(0); setIsFlipped(false); }}
                    className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-colors ${
                      sourceFilter === 'all'
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    All Sources ({sourceCounts.all})
                  </button>

                  <button
                    onClick={() => { setSourceFilter('Workbook'); setCardIndex(0); setIsFlipped(false); }}
                    className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-colors ${
                      sourceFilter === 'Workbook'
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    Workbook Drills ({sourceCounts.workbook})
                  </button>

                  <button
                    onClick={() => { setSourceFilter('PastQuestion'); setCardIndex(0); setIsFlipped(false); }}
                    className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-colors ${
                      sourceFilter === 'PastQuestion'
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    Past CBT Questions ({sourceCounts.past})
                  </button>

                  {sourceCounts.concept > 0 && (
                    <button
                      onClick={() => { setSourceFilter('Concept'); setCardIndex(0); setIsFlipped(false); }}
                      className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-colors ${
                        sourceFilter === 'Concept'
                          ? 'bg-blue-600 text-white shadow-xs'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      Core Concepts ({sourceCounts.concept})
                    </button>
                  )}
                </div>

                {/* Mastery Filter Toggle */}
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => {
                      setFilterMastered((prev) => {
                        if (prev === 'all') return 'unmastered';
                        if (prev === 'unmastered') return 'mastered';
                        return 'all';
                      });
                      setCardIndex(0);
                      setIsFlipped(false);
                    }}
                    className={`px-2.5 py-1 rounded-lg border text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                      filterMastered === 'unmastered'
                        ? 'bg-amber-50 text-amber-900 border-amber-300'
                        : filterMastered === 'mastered'
                        ? 'bg-green-50 text-green-900 border-green-300'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>
                      {filterMastered === 'unmastered' && 'Showing: Unmastered'}
                      {filterMastered === 'mastered' && 'Showing: Mastered Only'}
                      {filterMastered === 'all' && 'Filter: All Statuses'}
                    </span>
                  </button>
                </div>
              </div>

              {/* Row 2: Search, Topic Dropdown & Progress */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
                {/* Search Bar */}
                <div className="sm:col-span-6 relative">
                  <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setCardIndex(0);
                      setIsFlipped(false);
                    }}
                    placeholder="Search question, concept, or term..."
                    className="w-full pl-8 pr-7 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:bg-white transition-all"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                {/* Topic Selector */}
                <div className="sm:col-span-6">
                  <select
                    value={topicFilter}
                    onChange={(e) => {
                      setTopicFilter(e.target.value);
                      setCardIndex(0);
                      setIsFlipped(false);
                    }}
                    className="w-full px-2.5 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  >
                    <option value="all">All Topics & Units ({availableTopics.length} available)</option>
                    {availableTopics.map((topic) => (
                      <option key={topic} value={topic}>
                        {topic}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 3: Progress Bar & Direct Jump */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-100 text-xs">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-blue-600" />
                    <span className="font-semibold text-slate-700">Course Mastery:</span>
                    <span className="font-mono font-bold text-blue-700">
                      {totalCourseMastered} / {courseCards.length} ({percentMastered}%)
                    </span>
                  </div>

                  <div className="w-24 sm:w-32 bg-slate-100 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-blue-600 h-full rounded-full transition-all duration-300"
                      style={{ width: `${percentMastered}%` }}
                    />
                  </div>
                </div>

                {/* Jump to Card */}
                {filteredCards.length > 0 && (
                  <form onSubmit={handleJumpTo} className="flex items-center gap-1.5">
                    <span className="text-slate-500 font-medium">Jump to Card:</span>
                    <input
                      type="number"
                      min={1}
                      max={filteredCards.length}
                      value={jumpInput}
                      onChange={(e) => setJumpInput(e.target.value)}
                      placeholder={`${cardIndex + 1}`}
                      className="w-14 px-2 py-1 text-center bg-slate-50 border border-slate-200 rounded text-xs focus:outline-none focus:ring-1 focus:ring-blue-500 font-mono"
                    />
                    <span className="text-slate-400 font-mono">/ {filteredCards.length}</span>
                    <button
                      type="submit"
                      className="px-2 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-[11px] transition-colors"
                    >
                      Go
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Flashcard Component */}
            {currentCard ? (
              <div className="max-w-3xl mx-auto space-y-3">
                <div
                  onClick={handleFlip}
                  className={`min-h-[340px] w-full rounded-xl p-5 sm:p-6 cursor-pointer shadow-xs transition-all duration-300 flex flex-col justify-between select-none ${
                    isFlipped
                      ? 'bg-slate-900 text-white border border-slate-800'
                      : 'bg-white text-slate-900 border border-slate-200 hover:border-slate-300'
                  }`}
                  id={`flashcard-${currentCard.id}`}
                >
                  {/* Top card bar */}
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs border-b pb-3"
                    style={{ borderColor: isFlipped ? '#1e293b' : '#f1f5f9' }}
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className={`font-semibold px-2 py-0.5 rounded text-[11px] ${
                          isFlipped
                            ? 'bg-slate-800 text-blue-300 border border-slate-700'
                            : 'bg-blue-50 text-blue-700 border border-blue-100'
                        }`}
                      >
                        {currentCard.source === 'PastQuestion' ? 'Past CBT Exam' : currentCard.source === 'Workbook' ? 'Workbook Drill' : 'Core Concept'}
                      </span>

                      {currentCard.topic && (
                        <span
                          className={`text-[11px] font-medium hidden sm:inline ${
                            isFlipped ? 'text-slate-400' : 'text-slate-500'
                          }`}
                        >
                          {currentCard.topic}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      {masteredCards[currentCard.id] && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-green-500/20 text-green-400 border border-green-500/30 flex items-center gap-1">
                          <Check className="w-3 h-3" /> Mastered
                        </span>
                      )}
                      <span
                        className={`text-xs font-mono font-semibold ${
                          isFlipped ? 'text-slate-400' : 'text-slate-500'
                        }`}
                      >
                        Card {cardIndex + 1} of {filteredCards.length}
                      </span>
                    </div>
                  </div>

                  {/* Center Content */}
                  <div className="my-auto py-5">
                    {!isFlipped ? (
                      <div className="space-y-4 text-center">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-800 border border-blue-100 text-xs font-bold uppercase tracking-wider">
                          <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                          <span>Term & Concept</span>
                        </div>

                        {/* Prominent Term / Concept Header */}
                        <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug px-2">
                          {currentCard.term}
                        </h3>

                        {/* Conceptual Question / Active Recall Prompt */}
                        {currentCard.conceptQuestion && (
                          <div className="max-w-xl mx-auto p-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm sm:text-base text-left shadow-2xs">
                            <div className="flex items-center gap-1.5 text-blue-700 text-xs font-bold uppercase tracking-wide mb-1.5">
                              <Sparkles className="w-3.5 h-3.5" />
                              <span>Concept Question & Prompt:</span>
                            </div>
                            <p className="font-semibold text-slate-900 leading-snug">
                              {currentCard.conceptQuestion}
                            </p>
                          </div>
                        )}

                        <p className="text-xs text-slate-400 flex items-center justify-center gap-1.5 pt-2">
                          <RotateCw className="w-3.5 h-3.5 text-blue-500 animate-spin-slow" />
                          <span>Click card or press <kbd className="px-1.5 py-0.5 bg-slate-100 border border-slate-200 rounded font-mono text-[10px] text-slate-700">Space</kbd> to reveal verified explanation</span>
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-4 text-left">
                        {/* Verified Concept Banner */}
                        <div className="p-3.5 rounded-xl bg-blue-950/70 border border-blue-700/50 space-y-1">
                          <div className="flex items-center gap-1.5 text-blue-400 text-xs font-bold uppercase tracking-wider">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                            <span>Core Concept / Takeaway:</span>
                          </div>
                          <div className="text-sm sm:text-base font-bold text-white pl-5">
                            {currentCard.correctAnswerText || currentCard.term}
                          </div>
                        </div>

                        {/* Detailed Explanation */}
                        <div className="space-y-1.5">
                          <strong className="text-xs text-slate-400 uppercase tracking-wider font-semibold block">
                            Comprehensive Explanation:
                          </strong>
                          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed bg-slate-950/60 p-3 rounded-lg border border-slate-800">
                            {renderFormattedText(
                              currentCard.definition.includes('\n\n') 
                                ? currentCard.definition.split('\n\n').slice(1).join('\n\n')
                                : currentCard.definition,
                              true
                            )}
                          </p>
                        </div>

                        {/* Key Points & Metadata */}
                        {currentCard.keyPoints && currentCard.keyPoints.length > 0 && (
                          <div className="space-y-1.5 pt-1">
                            <strong className="text-[11px] text-blue-400 uppercase tracking-wider font-semibold block">
                              Key Hotspot Takeaways:
                            </strong>
                            <ul className="text-xs text-slate-300 space-y-1 pl-4 list-disc leading-relaxed">
                              {currentCard.keyPoints.map((kp, idx) => (
                                <li key={idx}>
                                  <span className="text-slate-200">{renderFormattedText(kp, true)}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Bottom Card Bar */}
                  <div className="flex items-center justify-between pt-3 border-t text-xs"
                    style={{ borderColor: isFlipped ? '#1e293b' : '#f1f5f9' }}
                  >
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleMastered(currentCard.id);
                      }}
                      className={`px-3 py-1.5 rounded-lg font-semibold flex items-center gap-1.5 transition-all ${
                        masteredCards[currentCard.id]
                          ? 'bg-emerald-600 text-white shadow-xs'
                          : isFlipped
                          ? 'bg-slate-800 text-slate-200 hover:bg-slate-700'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>
                        {masteredCards[currentCard.id] ? 'Mastered ✓' : 'Mark as Mastered (M)'}
                      </span>
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleFlip();
                      }}
                      className={`px-3 py-1.5 rounded-lg font-semibold text-xs flex items-center gap-1.5 transition-colors ${
                        isFlipped ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
                      }`}
                    >
                      <RotateCw className="w-3.5 h-3.5" />
                      <span>{isFlipped ? 'Show Question' : 'Reveal Answer'}</span>
                    </button>
                  </div>
                </div>

                {/* Flashcard Navigator controls */}
                <div className="flex flex-wrap items-center justify-between gap-2 pt-2">
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => handleJumpBy(-10)}
                      disabled={cardIndex === 0}
                      className="px-2.5 py-2 rounded-lg bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-semibold text-xs flex items-center gap-1 shadow-xs transition-colors disabled:opacity-40"
                      title="Previous 10 cards"
                    >
                      <ChevronsLeft className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">-10</span>
                    </button>

                    <button
                      onClick={handlePrevCard}
                      className="px-3.5 py-2 rounded-lg bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-semibold text-xs flex items-center gap-1.5 shadow-xs transition-colors"
                      title="Previous card (Left Arrow)"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                      <span>Previous</span>
                    </button>
                  </div>

                  <button
                    onClick={() => {
                      if (filteredCards.length === 0) return;
                      const rand = Math.floor(Math.random() * filteredCards.length);
                      setCardIndex(rand);
                      setIsFlipped(false);
                      playFlipSound();
                    }}
                    className="p-2 rounded-lg bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 shadow-xs transition-colors flex items-center gap-1 text-xs font-semibold"
                    title="Shuffle random card"
                  >
                    <Shuffle className="w-3.5 h-3.5 text-blue-600" />
                    <span className="hidden sm:inline">Shuffle</span>
                  </button>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={handleNextCard}
                      className="px-3.5 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs flex items-center gap-1.5 shadow-xs transition-colors"
                      title="Next card (Right Arrow)"
                    >
                      <span>Next Card</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => handleJumpBy(10)}
                      disabled={cardIndex >= filteredCards.length - 1}
                      className="px-2.5 py-2 rounded-lg bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-semibold text-xs flex items-center gap-1 shadow-xs transition-colors disabled:opacity-40"
                      title="Next 10 cards"
                    >
                      <span className="hidden sm:inline">+10</span>
                      <ChevronsRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white p-8 rounded-xl border border-slate-200 text-center text-slate-600 space-y-3">
                <p className="text-sm font-medium">No flashcards match your current filter or search criteria.</p>
                <div className="flex justify-center gap-2">
                  <button
                    onClick={() => {
                      setSourceFilter('all');
                      setTopicFilter('all');
                      setSearchQuery('');
                      setFilterMastered('all');
                    }}
                    className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs shadow-xs"
                  >
                    Reset All Filters
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* =========================================================================
          3. MODE 2: CHAPTER SUMMARIES & NOTES (STUDENT HANDBOOK FORMAT)
         ========================================================================= */}
      {subMode === 'summaries' && (
        <div className="space-y-4" id="summaries-mode-view">
          {/* Top Mode Header */}
          <div className="bg-slate-900 text-white rounded-xl p-4 border border-slate-800 shadow-xs">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleSetSubMode('select')}
                  className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors text-xs font-semibold flex items-center gap-1.5 border border-slate-700"
                  title="Back to modes selection"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Revision Modes</span>
                </button>

                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-blue-600 text-white">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-white flex items-center gap-2">
                      <span>{course.code} Revision Handbook & Chapter Summaries</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
                        {summaries.length} Chapters
                      </span>
                    </h2>
                    <p className="text-[11px] text-slate-400">
                      Concise revision notes, key concepts, and exam highlights organized with clear information flow
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handleExpandAll}
                  className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 text-xs font-semibold transition-colors flex items-center gap-1"
                  title="Expand all chapter notes"
                >
                  <ChevronDown className="w-3.5 h-3.5" />
                  <span>Expand All</span>
                </button>
                <button
                  onClick={handleCollapseAll}
                  className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 text-xs font-semibold transition-colors flex items-center gap-1"
                  title="Collapse all chapter notes"
                >
                  <ChevronUp className="w-3.5 h-3.5" />
                  <span>Collapse All</span>
                </button>
                <button
                  onClick={() => handleSetSubMode('flashcards')}
                  className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors flex items-center gap-1.5 shadow-xs"
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>Switch to Flashcards ({courseCards.length})</span>
                </button>
              </div>
            </div>
          </div>

          {/* Chapter Handbook Cards List */}
          <div className="space-y-4">
            {summaries.map((chapter) => {
              const isOpen = !!openChapters[chapter.id];

              return (
                <div
                  key={chapter.id}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs transition-all hover:border-slate-300"
                  id={`chapter-summary-${chapter.id}`}
                >
                  {/* Chapter Section Heading (Click to Expand / Collapse) */}
                  <div
                    onClick={() => toggleChapter(chapter.id)}
                    className="p-4 bg-slate-50 hover:bg-slate-100/90 cursor-pointer flex items-center justify-between gap-3 transition-colors select-none"
                  >
                    <div className="flex items-start sm:items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center font-bold text-xs font-mono shrink-0 mt-0.5 sm:mt-0 shadow-2xs">
                        CH{chapter.chapterNumber}
                      </span>
                      <div>
                        <h3 className="text-sm sm:text-base font-bold text-slate-900">
                          Chapter {chapter.chapterNumber}: {renderFormattedText(chapter.title)}
                        </h3>
                        {chapter.topicSubtitle && (
                          <p className="text-xs text-slate-600 mt-0.5">
                            {renderFormattedText(chapter.topicSubtitle)}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-lg flex items-center gap-1">
                        <span>{isOpen ? 'Collapse' : 'Expand'}</span>
                        {isOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                      </span>
                    </div>
                  </div>

                  {/* Chapter Handbook Content */}
                  {isOpen && (
                    <div className="p-5 sm:p-6 space-y-6 border-t border-slate-200 bg-white">
                      {/* Section 1: Core Concepts & Summary Bullets */}
                      <div className="space-y-2.5">
                        <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5 pb-1 border-b border-slate-100">
                          <BookOpen className="w-3.5 h-3.5 text-blue-600" />
                          <span>I. Core Chapter Summary</span>
                        </h4>
                        <ul className="space-y-2 pl-4 list-disc text-xs sm:text-sm text-slate-800 leading-relaxed">
                          {chapter.summaryBullets.map((bullet, bIdx) => (
                            <li key={bIdx} className="pl-1">
                              {renderFormattedText(bullet)}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Section 2: Key Definitions & Terminology */}
                      {chapter.keyDefinitions && chapter.keyDefinitions.length > 0 && (
                        <div className="space-y-2.5">
                          <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5 pb-1 border-b border-slate-100">
                            <Layers className="w-3.5 h-3.5 text-blue-600" />
                            <span>II. Key Terms & Concepts</span>
                          </h4>
                          <ul className="space-y-2 pl-4 list-disc text-xs sm:text-sm text-slate-800 leading-relaxed">
                            {chapter.keyDefinitions.map((def, dIdx) => (
                              <li key={dIdx} className="pl-1">
                                <strong className="font-bold text-slate-950">{renderFormattedText(def.term)}:</strong>{' '}
                                <span className="text-slate-700">{renderFormattedText(def.meaning)}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Section 3: Key Dates, Historical Figures & Formulas */}
                      {chapter.keyDatesAndFormulas && chapter.keyDatesAndFormulas.length > 0 && (
                        <div className="space-y-2.5">
                          <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5 pb-1 border-b border-slate-100">
                            <Calendar className="w-3.5 h-3.5 text-amber-600" />
                            <span>III. Key Dates, Figures & Core Rules</span>
                          </h4>
                          <ul className="space-y-2 pl-4 list-disc text-xs sm:text-sm text-slate-800 leading-relaxed">
                            {chapter.keyDatesAndFormulas.map((item, fIdx) => (
                              <li key={fIdx} className="pl-1">
                                <strong className="font-bold text-amber-950">{renderFormattedText(item.label)}:</strong>{' '}
                                <span className="text-slate-700">{renderFormattedText(item.detail)}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Section 4: Exam & CBT Hotspots */}
                      {chapter.examHotspotTips && chapter.examHotspotTips.length > 0 && (
                        <div className="space-y-2.5">
                          <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5 pb-1 border-b border-slate-100">
                            <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                            <span>IV. Exam Hotspots & Revision Takeaways</span>
                          </h4>
                          <ul className="space-y-2 pl-4 list-disc text-xs sm:text-sm text-slate-800 leading-relaxed">
                            {chapter.examHotspotTips.map((tip, tIdx) => (
                              <li key={tIdx} className="pl-1 text-slate-800">
                                {renderFormattedText(tip)}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Section 5: CBT Questions & Drill Triggers */}
                      {chapter.cbtPastQuestionHotspots && chapter.cbtPastQuestionHotspots.length > 0 && (
                        <div className="space-y-2.5">
                          <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5 pb-1 border-b border-slate-100">
                            <Target className="w-3.5 h-3.5 text-emerald-600" />
                            <span>V. Verified CBT Drill Highlights</span>
                          </h4>
                          <ul className="space-y-2.5 pl-4 list-disc text-xs sm:text-sm text-slate-800 leading-relaxed">
                            {chapter.cbtPastQuestionHotspots.map((hotspot, hIdx) => (
                              <li key={hIdx} className="pl-1">
                                <span className="font-semibold text-slate-900">Question Focus:</span> {renderFormattedText(hotspot.questionFocus)}
                                <div className="mt-0.5 text-xs text-emerald-800 font-medium">
                                  <strong className="font-bold text-emerald-950">Verified Answer:</strong> {renderFormattedText(hotspot.verifiedAnswer)}
                                </div>
                                {hotspot.trapAlert && (
                                  <div className="text-[11px] text-amber-800 mt-0.5">
                                    <em>Note: {renderFormattedText(hotspot.trapAlert)}</em>
                                  </div>
                                )}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

    </div>
  );
};
