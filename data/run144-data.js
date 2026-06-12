// Run #144 NEW FEATURE: Audio Heatmap coach (prefix: hmp)
// Tracks per-day speak() call counts in localStorage and surfaces a 30-day
// GitHub-style contribution grid + current/best streak. Zero invention of new
// data — it hooks into the existing _audioMetricsBump call chain.

const HMP_LEVEL_COLORS = [
  { min: 0,   max: 0,   bg: 'var(--card-bg, #1e293b)', label: '0' },
  { min: 1,   max: 4,   bg: '#1e4b2e',                 label: '1–4' },
  { min: 5,   max: 14,  bg: '#2a7d4a',                 label: '5–14' },
  { min: 15,  max: 39,  bg: '#45b066',                 label: '15–39' },
  { min: 40,  max: 9e9, bg: '#6ee193',                 label: '40+' },
];

const HMP_TIPS = [
  'Every time you play a Lebanese word (flashcards, drills, listen stories), this grid lights up for today.',
  'Aim for <b>any green</b> every day — even 1 play keeps the streak alive.',
  'Streaks build <b>ear memory</b>: hearing a word 5 days in a row cements it more than 50 plays in one session.',
  'The grid shows the last 30 days. Darker = more listens. Rows are Mon–Sun, columns are weeks.',
  'If you miss a day, the current streak resets — but the <b>best streak</b> is forever yours.',
  'Your data lives only on this device (localStorage). Clearing browser data clears your heatmap.',
];

const HMP_ABOUT = 'The heatmap increments every time Claude-app plays a Lebanese audio clip through the <code>speak()</code> API. It hooks into the existing audio-metrics counter so every cached word, every Wiktionary fetch, and every fallback TTS counts. It does not distinguish between auto-play and manual-play — a play is a play.';
