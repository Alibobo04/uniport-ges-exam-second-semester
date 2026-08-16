export type Level = '100' | '200' | '300';

export type CourseId = 'ges112' | 'ges212' | 'ges300';

export interface CourseInfo {
  id: CourseId;
  level: Level;
  code: string;
  title: string;
  subtitle: string;
  description: string;
  topicsCovered: string[];
}

export type StudyMode = 'hub' | 'workbook' | 'cbt' | 'flashcards';

export interface Question {
  id: string;
  courseId: CourseId;
  question: string;
  options: string[];
  correctAnswer: number; // 0-indexed
  explanation: string;
  topic: string;
  chapter?: string;
  hint?: string;
  source: 'Workbook' | 'PastQuestion';
  year?: string;
}

export interface Flashcard {
  id: string;
  courseId: CourseId;
  term: string;
  definition: string;
  category: string;
  keyPoints?: string[];
  example?: string;
}

export interface ChapterSummary {
  id: string;
  chapterNumber: number;
  title: string;
  summaryBullets: string[];
  keyDefinitions: { term: string; meaning: string }[];
  examHotspotTips: string[];
}

export interface QuizState {
  courseId: CourseId;
  questions: Question[];
  currentQuestionIndex: number;
  selectedAnswers: Record<string, number>;
  flaggedQuestions: Record<string, boolean>;
  timeRemainingSec: number;
  initialTimeSec: number;
  isSubmitted: boolean;
  score: number;
  mode: 'timed' | 'practice';
}

export interface StudentProfile {
  id: string;
  firstName: string;
  secondName: string;
  department: string;
  createdAt: string;
  updatedAt?: string;
}

