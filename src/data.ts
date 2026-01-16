import { WordEntry } from './types';

export const MOCK_WORDS: WordEntry[] = [
  {
    id: '1',
    word: 'Serendipity',
    phonetic: '/ˌsɛrənˈdɪpɪti/',
    definition: 'The occurrence and development of events by chance in a happy or beneficial way.',
    example: 'It was serendipity that we met.',
    partOfSpeech: 'noun',
    labels: ['rare'],
    createdAt: new Date().toISOString(),
    lastReviewed: null,
    mastery: 0
  },
  {
    id: '2',
    word: 'Ephemeral',
    phonetic: '/əˈfem(ə)rəl/',
    definition: 'Lasting for a very short time.',
    example: 'Fashions are ephemeral.',
    partOfSpeech: 'adjective',
    labels: ['literary'],
    createdAt: new Date().toISOString(),
    lastReviewed: null,
    mastery: 0
  },
  {
    id: '3',
    word: 'Mellifluous',
    phonetic: '/məˈlɪfluəs/',
    definition: '(of a voice or words) sweet or musical; pleasant to hear.',
    example: 'She had a rich, mellifluous voice.',
    partOfSpeech: 'adjective',
    labels: ['rare'],
    createdAt: new Date().toISOString(),
    lastReviewed: null,
    mastery: 0
  }
];
