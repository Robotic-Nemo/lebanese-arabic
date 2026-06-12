// Run #165 NEW FEATURE: Vocabulary Bracket coach (prefix: ivb)
// Shows the SRS deck bucketed by review interval so the user can see
// at a glance how much vocab is in each maturity stage. Five brackets
// from "New" (never seen) to "Veteran" (21+ day interval).
// Pairs with R159 Review Forecast (upcoming load) and R156 Progress
// Audit (14-day lookback) — this coach shows the structural health of
// the entire deck in a single snapshot.

const IVB_BRACKETS = [
  {
    key: 'new',
    label: 'New',
    emoji: '🌱',
    color: '#6b7280',
    desc: 'Never studied',
    minInterval: null,
    maxInterval: null,
    minReps: 0,
    maxReps: 0,
  },
  {
    key: 'learning',
    label: 'Learning',
    emoji: '📖',
    color: '#3b82f6',
    desc: '1–3 day interval',
    minInterval: 1,
    maxInterval: 3,
    minReps: 1,
    maxReps: null,
  },
  {
    key: 'young',
    label: 'Young',
    emoji: '🌿',
    color: '#f59e0b',
    desc: '4–14 day interval',
    minInterval: 4,
    maxInterval: 14,
    minReps: 1,
    maxReps: null,
  },
  {
    key: 'mature',
    label: 'Mature',
    emoji: '🌳',
    color: '#22c55e',
    desc: '15–30 day interval',
    minInterval: 15,
    maxInterval: 30,
    minReps: 1,
    maxReps: null,
  },
  {
    key: 'veteran',
    label: 'Veteran',
    emoji: '🏆',
    color: '#a855f7',
    desc: '31+ day interval',
    minInterval: 31,
    maxInterval: null,
    minReps: 1,
    maxReps: null,
  },
];

const IVB_TIPS = [
  'A healthy deck has a growing <b>Mature + Veteran</b> segment. If most vocab stays in Learning for weeks, review daily to let intervals expand.',
  '<b>New</b> words only leave this bucket when you rate them for the first time. High New count is normal early on — it shrinks as you work through the deck.',
  'The <b>Young</b> bracket is the busiest: short intervals mean frequent reviews. When Young is large, expect heavier daily loads.',
  '<b>Veteran</b> words (31+ day interval) barely show on the Review Forecast — they\'re past the heavy-review window and only come up once a month or less.',
  'If <b>Mature</b> words disappear and reappear in <b>Learning</b>, that\'s a lapse. Check the Leech Panel for words that lapse repeatedly.',
];

const IVB_ABOUT = 'Vocabulary Bracket reads <code>srsData</code> (key <code>la_srs</code>) and classifies each vocab word by its current SRS interval. <b>New</b>: reps = 0 (never reviewed). <b>Learning</b>: interval 1–3 days. <b>Young</b>: 4–14 days. <b>Mature</b>: 15–30 days. <b>Veteran</b>: 31+ days. Words with reps > 0 but no interval entry are treated as Learning. Pure read — no SRS writes. Complements R159 Review Forecast (upcoming load) and R156 Progress Audit (14-day lookback).';
