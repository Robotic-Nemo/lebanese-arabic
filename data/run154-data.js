// Run #154 AUDIO: Pre-Warm Audio coach (prefix: pwa)
// Hooks into R153's ndpGetUpcoming() to pull the next N near-due words,
// then runs each through the existing fetchWiktionaryAudio → fetchCommonsAudio
// chain. On success the audio cache gets populated; on miss the entry is
// negative-cached ('__none__') so the main speak() path skips that network
// round-trip on first play.
//
// Addresses bugs.rtf #3 ("A lot of words are still missing proper audio") by
// surfacing the gap BEFORE the user hits it in a drill: after a warm run,
// the Results tab lists which upcoming cards have no recording so the user
// can mark them bad / record their own / skip ahead.

const PWA_WARM_COUNT = 8;     // default batch size per warm
const PWA_RESULTS_CAP = 50;   // ring-buffer cap for _pwaResults
const PWA_STATUSES = {
  cached:  { label: 'Already cached',       icon: '✅', color: '#22c55e' },
  found:   { label: 'Fetched OK',           icon: '⬇️', color: '#3b82f6' },
  missing: { label: 'No recording online',  icon: '❓', color: '#f59e0b' },
  error:   { label: 'Fetch error',          icon: '⚠️', color: '#ef4444' },
};

const PWA_TIPS = [
  'Pre-warming runs the next <b>' + PWA_WARM_COUNT + '</b> near-due words through the Wiktionary/Commons fetch chain in the background.',
  '<b>Already cached</b> means the audio is in localStorage — no network needed when you play it.',
  '<b>Fetched OK</b> means a recording was just downloaded into cache. Next play is instant.',
  '<b>No recording online</b> means Wiktionary and Commons both came back empty — plan for a fallback TTS when that card appears.',
  'Warm before a session over spotty Wi-Fi / airplane data — cached audio plays offline.',
  'Pre-warming uses the same query budget as normal fetches; the per-session limit still applies.',
];

const PWA_ABOUT = 'Pre-Warm iterates <code>ndpGetUpcoming()</code> (R153) and, for each Arabic text not already in <code>audioCache()</code>, awaits <code>fetchWiktionaryAudio()</code> → <code>fetchCommonsAudio()</code> in series. Result classification: <b>cached</b> (skip, already there), <b>found</b> (a URL was fetched and written), <b>missing</b> (both sources returned null — negative-cached as <code>__none__</code>), <b>error</b> (exception thrown). Results accumulate into a ring buffer of up to ' + PWA_RESULTS_CAP + ' entries for the session; a reload clears them.';
