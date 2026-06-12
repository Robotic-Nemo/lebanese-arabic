// Run #159 NEW FEATURE: Review Forecast coach (prefix: rfc)
// Plots the upcoming SRS review load day-by-day for the next 30 days.
// Uses the live srsData.due timestamps (same data renderReviewCalendar
// draws on, now timezone-correct after R158). Bucketizes daily counts into
// four intensity bands so the user can see at a glance which days are
// light vs heavy, and plan study sessions accordingly.
//
// Pairs naturally with R153 Near-Due Peek (< 24h) and R156 Progress Audit
// (last 14d) — this coach closes the loop by showing the next 30 days.

const RFC_DAYS = 30;
const RFC_BUCKET_THRESHOLDS = [
  { key: 'light',    label: 'Light',    max: 10,   color: '#22c55e' },
  { key: 'moderate', label: 'Moderate', max: 25,   color: '#3b82f6' },
  { key: 'heavy',    label: 'Heavy',    max: 50,   color: '#f59e0b' },
  { key: 'intense',  label: 'Intense',  max: Infinity, color: '#ef4444' },
];

const RFC_TIPS = [
  'The forecast shows how your SRS intervals stack up over the next <b>' + RFC_DAYS + '</b> days. A smooth spread is healthier than a single spike.',
  '<b>Intense</b> days (50+ cards) usually mean a backlog from skipped sessions — review daily to keep the load flat.',
  'After a long break, the first few days of the forecast will be packed. Clear them in batches rather than all at once to avoid re-forgetting.',
  'If you see a cluster of heavy days 7–10 days out, that\'s from cards you rated <i>Good</i> this week — their intervals converged.',
  'Mature cards (interval > 21 days) barely show on the forecast — they\'re past the heavy-review window. Focus the bar chart on the first 14 days.',
  'A flat, consistently green forecast means you\'re keeping up with reviews and intervals are spreading out naturally.',
];

const RFC_ABOUT = 'Review Forecast reads the live <code>srsData</code> due timestamps, classifies each card\'s due date by offset from today (using <code>_localDateKey</code> after R158\'s timezone fix), and aggregates into a ' + RFC_DAYS + '-day bar chart. Buckets: light (≤10), moderate (11–25), heavy (26–50), intense (51+). Zero-due days shown as empty bars. Pure read — no writes. Complements R153 Near-Due Peek (24h window) and R156 Progress Audit (14d lookback).';
