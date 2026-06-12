// Run #25 — Audio System Overhaul
// Prefix: al- (Audio Lab)
//
// New audio infrastructure: smart sentence synthesis from existing audio chunks,
// dialect-prioritized voice picker, coverage stats, configurable settings.

// Lebanese Arabic voice priority for browser TTS — first match wins
const TTS_VOICE_PRIORITY = [
  { match: /ar-LB|Lebanese/i, label: '🇱🇧 Lebanese', score: 100 },
  { match: /ar-PS|ar-JO|ar-SY|Levantine|Palestinian|Jordanian|Syrian/i, label: '🌍 Levantine', score: 80 },
  { match: /ar-EG|Egyptian/i, label: '🇪🇬 Egyptian', score: 60 },
  { match: /ar-SA|Saudi/i, label: '🇸🇦 Gulf', score: 50 },
  { match: /ar/i, label: '📚 MSA / Arabic', score: 40 }
];

// Audio source priority — for smart sentence playback
const AUDIO_SOURCE_PRIORITY = [
  { id: 'local',        label: '🎬 Local Lebanese clips',  desc: 'Real Lebanese speakers from YouTube' },
  { id: 'cache',        label: '💾 Cached recordings',     desc: 'Previously fetched Wiktionary audio' },
  { id: 'wiktionary',   label: '📚 Wiktionary',            desc: 'Live Wiktionary lookup w/ dialect detection' },
  { id: 'lingualibre',  label: '🎙 LinguaLibre',           desc: 'Wikimedia Commons crowd-sourced' },
  { id: 'tts_lb',       label: '🤖 Browser TTS (best)',    desc: 'Browser speech with best available Arabic voice' },
  { id: 'gtts',         label: '🌐 Google Translate TTS',  desc: 'Always-available MSA fallback' }
];

// Word normalizations: common Arabic spelling variants and Lebanese contractions
// Maps alt form → canonical form for audio lookup. Only used when exact match fails.
const WORD_NORMALIZATIONS = {
  // Hamza variants
  'إ': 'ا', 'أ': 'ا', 'آ': 'ا', 'ٱ': 'ا',
  // Ya variants
  'ى': 'ي', 'ئ': 'ي',
  // Ta marbuta
  'ة': 'ه',
  // Common Lebanese clitics that are rarely audio-searchable as-is
  'بـ': 'ب', 'لـ': 'ل', 'وـ': 'و', 'فـ': 'ف'
};

// Common Lebanese stopwords + clitics — skip these in word-by-word playback for cleaner flow
const AUDIO_SKIP_WORDS = ['و', 'ف', 'ب', 'ل', 'يا', 'هـ', 'ال'];

// Built-in test sentences for the Audio Lab tester
const AUDIO_TEST_SENTENCES = [
  { ar: 'كيفك اليوم؟', tr: 'kifak el yom?', en: 'how are you today?' },
  { ar: 'بحبك كتير', tr: 'b7ebbak ekteer', en: 'I love you very much' },
  { ar: 'وين عم تروح؟', tr: 'wein 3am trou7?', en: 'where are you going?' },
  { ar: 'بدي أكل شي', tr: 'biddi akel shi', en: 'I want to eat something' },
  { ar: 'الجو حلو اليوم', tr: 'el jaw 7elo el yom', en: 'the weather is nice today' },
  { ar: 'شو الأخبار؟', tr: 'shu el akhbar?', en: 'what is the news?' },
  { ar: 'أهلا وسهلا فيك', tr: 'ahla w sahla feek', en: 'welcome' },
  { ar: 'يلا منروح', tr: 'yalla mnrou7', en: 'come on, let\'s go' }
];
