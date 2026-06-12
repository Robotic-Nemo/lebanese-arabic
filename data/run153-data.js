// Run #153 NEW FEATURE: Near-Due Peek coach (prefix: ndp)
// Surfaces the next N cards coming due in the next 24 hours so the user
// can plan a session instead of reacting to the "Due Now" number. Hooks
// into the existing srsData store — no new persistence, pure read.
//
// Bucketizes upcoming cards by time-to-due: already overdue, next hour,
// next 6 hours, today, later. This turns an opaque "23 due in 24h" into
// actionable "7 right now, 4 in the next hour, rest spread out later".

const NDP_HOURS_AHEAD = 24;
const NDP_PEEK_COUNT = 5;   // dashboard panel shows top-5 soonest
const NDP_LIST_CAP = 50;    // overlay list caps at 50 to stay fast

const NDP_BUCKETS = [
  { key: 'overdue', label: 'Already overdue',     max_min: 0,        color: '#ef4444', icon: '⚠️' },
  { key: 'now',     label: 'Due within the hour', max_min: 60,       color: '#f59e0b', icon: '⏳' },
  { key: 'soon',    label: 'Due in 1–6 hours',    max_min: 60*6,     color: '#3b82f6', icon: '🕐' },
  { key: 'today',   label: 'Due later today',     max_min: 60*24,    color: '#22c55e', icon: '📅' },
];

const NDP_TIPS = [
  'The <b>Peek</b> tab shows only cards due in the next 24 hours — not your whole backlog. If your backlog is huge, use Study for the rest.',
  'Cards in the <b>overdue</b> bucket lose retention fastest. Clear them before starting new material.',
  '<b>Due within the hour</b> cards are at peak recall — review them while the memory is still warm from last time.',
  'A healthy queue has most cards in <b>due later today</b> — that means your SRS intervals are working and you\'re not cramming.',
  'Click any card in the list to jump straight to it in Study view.',
  'This panel updates every time you rate a card. No reload needed.',
];

const NDP_ABOUT = 'Near-Due Peek reads the live <code>srsData.due</code> timestamps and classifies cards by time-to-due against <code>Date.now()</code>. No new state is written — it\'s a pure view over the existing SRS store. The 24-hour horizon ' + NDP_HOURS_AHEAD + 'h is the natural cadence for daily reviewers; cards due tomorrow or later fold into the regular <b>Due Now</b> tally when their time arrives.';
