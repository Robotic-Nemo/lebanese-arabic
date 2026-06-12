// Run #156 NEW FEATURE: Progress Audit coach (prefix: pra)
// Rolling 14-day view of how progress actually accrued — per-day activity
// count, XP earned, frozen flag, and whether the day fed the current streak.
// Directly leverages R155's fix (sentence/phrase ratings now feed activity +
// XP), making the audit meaningful for all three rating surfaces.
//
// No new persistence. Pure read over la_activity + la_xp_today + la_frozen_days.
// Health flags surface red states: gap today, XP drought, streak-at-risk,
// low-XP-per-review (grinding without retention), heavy-freeze reliance.

const PRA_DAYS = 14;                  // window size
const PRA_XP_WEEKLY_TARGET = 150;     // healthy weekly XP
const PRA_XP_DAILY_MIN = 10;          // minimum to count day as "productive"
const PRA_FREEZE_HEAVY_RATIO = 0.25;  // >25% of days frozen = heavy reliance

const PRA_HEALTH_FLAGS = [
  { key: 'gap_today',      icon: '⚠️', label: 'No activity today yet',        severity: 'warn'   },
  { key: 'xp_drought',     icon: '📉', label: 'Weekly XP below target',        severity: 'warn'   },
  { key: 'low_efficiency', icon: '🐢', label: 'Low XP per review (many <i>Again</i>?)', severity: 'info'   },
  { key: 'heavy_freeze',   icon: '🧊', label: 'Relying on freeze tokens a lot', severity: 'warn'   },
  { key: 'streak_risk',    icon: '🔥', label: 'Streak at risk — review today',  severity: 'alert'  },
  { key: 'healthy',        icon: '✅', label: 'Progress flowing cleanly',       severity: 'ok'     },
];

const PRA_TIPS = [
  'The <b>Audit</b> tab shows your last <b>' + PRA_DAYS + '</b> days. Empty cells are gap days — use a freeze token before the streak breaks.',
  'XP per review is a silent quality signal — if you\'re grinding 50 reviews for 200 XP (4 XP/review avg), a lot of ratings are landing as <i>Again</i>.',
  'Frozen days (🧊) keep your streak alive but don\'t count as learning days in your totals.',
  'The <b>Health</b> tab surfaces the <i>why</i> behind slipping progress — XP drought, efficiency drop, or freeze dependency.',
  'Sentence and phrase ratings now feed this audit after R155\'s fix — if you only see word-study days lighting up, something else is off.',
  'A healthy week: activity every day, XP above weekly target, efficiency steady near 8 XP/review.',
];

const PRA_ABOUT = 'Progress Audit walks back <code>' + PRA_DAYS + '</code> days, reading <code>la_activity[key]</code>, <code>la_xp_today[key]</code>, and <code>la_frozen_days</code>. Each day is one of four states: <b>active</b> (reviews + XP), <b>frozen</b> (no reviews but streak preserved), <b>gap</b> (nothing), or <b>today-pending</b> (today with no activity yet). Health flags derive from the window: weekly-XP target (<code>' + PRA_XP_WEEKLY_TARGET + '</code>), daily minimum (<code>' + PRA_XP_DAILY_MIN + '</code>), and freeze-heavy ratio (<code>' + PRA_FREEZE_HEAVY_RATIO + '</code>). No writes.';
