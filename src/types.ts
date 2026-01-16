
export interface WordEntry {
  id: string;
  word: string;
  phonetic: string;
  definition: string;
  example: string;
  partOfSpeech: string;
  labels: string[];
  createdAt: string;
  lastReviewed: string | null;
  mastery: number; // 0-100
  chineseDefinition?: string;
}

export type View = 'splash' | 'home' | 'history' | 'learn' | 'new-entry' | 'stats' | 'profile' | 'settings';

export interface ContributionData {
  date: string;
  count: number;
}

// Fixed missing Language type export required by multiple views
export type Language = 'en' | 'zh';
