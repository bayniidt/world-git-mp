import Taro from '@tarojs/taro';
import { WordEntry } from '../types';

const KEYS = {
  WORDS: 'words',
  USER_INFO: 'user_info',
  LANGUAGE: 'language',
  ACTIVITY: 'activity' // Store as Object { 'YYYY-MM-DD': count }
};

export interface UserInfo {
  avatarUrl: string;
  nickName: string;
}

const DEFAULT_USER: UserInfo = {
  avatarUrl: 'https://picsum.photos/seed/learner/100',
  nickName: 'Learner'
};

const MOCK_WORDS_INIT: WordEntry[] = [
    {
        id: '1',
        word: 'Ephemeral',
        phonetic: '/əˈfem(ə)rəl/',
        definition: 'Lasting for a very short time.',
        example: 'Fashions are ephemeral, changing with every season.',
        partOfSpeech: 'Adjective',
        labels: ['vocabulary', 'essential'],
        createdAt: new Date().toISOString(),
        lastReviewed: null,
        mastery: 0
    },
    {
        id: '2',
        word: 'Serendipity',
        phonetic: '/ˌserənˈdipədē/',
        definition: 'The occurrence and development of events by chance in a happy or beneficial way.',
        example: 'We found the restaurant by pure serendipity.',
        partOfSpeech: 'Noun',
        labels: ['vocabulary', 'positive'],
        createdAt: new Date(Date.now() - 86400000).toISOString(),
        lastReviewed: null,
        mastery: 0
    },
    {
        id: '3',
        word: 'Petrichor',
        phonetic: '/ˈpeˌtrīkôr/',
        definition: 'A pleasant smell that frequently accompanies the first rain after a long period of warm, dry weather.',
        example: 'I love the petrichor of a summer storm.',
        partOfSpeech: 'Noun',
        labels: ['vocabulary', 'nature'],
        createdAt: new Date(Date.now() - 172800000).toISOString(),
        lastReviewed: null,
        mastery: 0
    }
];

export const StorageService = {
  getWords: (): WordEntry[] => {
    const stored = Taro.getStorageSync(KEYS.WORDS);
    if (!stored) {
        // Initialize with mocks if empty
        Taro.setStorageSync(KEYS.WORDS, MOCK_WORDS_INIT);
        return MOCK_WORDS_INIT;
    }
    return stored;
  },

  addWord: async (word: Omit<WordEntry, 'id' | 'createdAt' | 'lastReviewed' | 'mastery'>) => {
    const words = StorageService.getWords();
    const newEntry: WordEntry = {
      ...word,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      lastReviewed: null,
      mastery: 0
    };

    // Cloud Persistence
    try {
        await Taro.cloud.callFunction({
            name: 'addWord',
            data: {
                word: word.word,
                definition: word.definition,
                phonetic: word.phonetic,
                example: word.example,
                partOfSpeech: word.partOfSpeech,
                labels: word.labels
            }
        })
    } catch (err) {
        console.error('Failed to save to cloud:', err)
        // Continue to save locally even if cloud fails
    }
    
    // Unshift to add to top
    const updated = [newEntry, ...words];
    Taro.setStorageSync(KEYS.WORDS, updated);
    
    // Update activity
    StorageService.recordActivity();
    
    return newEntry;
  },

  getUserInfo: (): UserInfo => {
    return Taro.getStorageSync(KEYS.USER_INFO) || DEFAULT_USER;
  },

  updateUserInfo: (info: Partial<UserInfo>) => {
    const current = StorageService.getUserInfo();
    const updated = { ...current, ...info };
    Taro.setStorageSync(KEYS.USER_INFO, updated);
    return updated;
  },

  recordActivity: () => {
    const activity = Taro.getStorageSync(KEYS.ACTIVITY) || {};
    const today = new Date().toISOString().split('T')[0];
    activity[today] = (activity[today] || 0) + 1;
    Taro.setStorageSync(KEYS.ACTIVITY, activity);
  },

  getActivityData: (): number[][] => {
    const activity = Taro.getStorageSync(KEYS.ACTIVITY) || {};
    // Generate 7 columns x 5 rows matrix (last 35 days) or just last 7 weeks
    // For simplicity, let's map last 35 days to matrix
    // Returns columns (weeks)
    const columns = 15;
    const rows = 5;
    const matrix: number[][] = [];
    
    // We want to show history from left (old) to right (today/new)? 
    // Usually GitHub graph is left-to-right, top-to-bottom or bottom-to-top week based.
    // The component expects number[][].
    // Let's assume input to ContributionGraph is Array of Columns, where each Column is Array of Rows (days).
    
    const today = new Date();
    
    // Fill backwards
    for (let c = 0; c < columns; c++) {
        const colData: number[] = [];
         for (let r = 0; r < rows; r++) {
            // Calculate date: (columns - 1 - c) * rows + (rows - 1 - r) days ago? 
            // Standard GitHub: Columns are weeks. Rows are Mon/Tue/Wed...
            // Let's simplify: Just last 35 days.
            // visual layout: 
            // Col 0: Day -34 to -30
            // ...
            // Col 6: Day -4 to Today
            
            // To make it look "flowing", let's just linearly map days back.
            // dayOffset = (columns - 1 - c) * rows + (rows - 1 - r)
            // actually simpler: just map consistently.
            // Let's iterate c from 0 to 6 (weeks/cols). r from 0 to 4 (days).
            // A bit arbitrary.
            
            // Re-reading component:
            // .map works on columns.
            
            const daysAgo = (columns - 1 - c) * rows + (rows - 1 - r);
            const d = new Date(today);
            d.setDate(d.getDate() - daysAgo);
            const dateStr = d.toISOString().split('T')[0];
            const count = activity[dateStr] || 0;
            
            // Normalize level 0-3
            let level = 0;
            if (count > 0) level = 1;
            if (count > 3) level = 2;
            if (count > 6) level = 3;
            
            colData.push(level);
        }
        matrix.push(colData);
    }
    
    return matrix;
  }
};
