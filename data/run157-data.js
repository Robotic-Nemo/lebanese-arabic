// Run #157 AUDIO: Cache Doctor coach (prefix: cdc)
// Scans the localStorage audioCache() (CACHE_KEY = la_audio_v2) and
// classifies every entry. Surfaces how much of the cache is "dead weight"
// (negative __none__ sentinels from failed fetches, __commons__: miss
// markers, legacy shapes) and lets the user flush negatives so the audio
// chain re-queries Wiktionary/Commons for words that may have gained a
// recording since the last attempt.
//
// Directly addresses bugs.rtf #3 ("A lot of words are still missing proper
// audio") — the most common reason a word stays audio-less is a stale
// negative cache entry from an earlier fetch. This coach makes that visible
// + reversible without forcing the user to clear all localStorage (which
// would also blow away their SRS progress).

const CDC_NEGATIVE_SENTINEL = '__none__';
const CDC_COMMONS_PREFIX = '__commons__:';
const CDC_DIALECT_PREFIX = '__dialect__:';

const CDC_STATUSES = {
  live:         { label: 'Live URL',              icon: '🎵', color: '#22c55e' },
  negative:     { label: 'Negative (no audio)',   icon: '❓', color: '#f59e0b' },
  commons_miss: { label: 'Commons miss marker',   icon: '🪦', color: '#6b7280' },
  dialect_tag:  { label: 'Dialect side-tag',      icon: '🏷️', color: '#3b82f6' },
  legacy:       { label: 'Legacy / unknown',      icon: '❔', color: '#ef4444' },
};

const CDC_TIPS = [
  'Negative cache entries (<code>__none__</code>) block re-fetch of a word forever — <b>Flush Negatives</b> forces the audio chain to try again on next play.',
  'If Wiktionary or LinguaLibre adds a recording for a word you previously missed, you won\'t get it until the negative cache is cleared for that word.',
  'The cache has a ~5 MB browser quota. Dead weight (negatives + miss markers) competes with real recordings for space — flushing frees room for new live URLs.',
  'Flushing does <b>not</b> delete live cached URLs. Words you\'ve actually heard stay cached and keep playing instantly.',
  '<b>Commons miss markers</b> (prefix <code>__commons__:</code>) are written when a Commons fallback fails. They expire on flush along with plain negatives.',
  'After a flush, trigger a <b>Pre-Warm Audio</b> run (R154) to re-populate the cache with any recordings that have appeared online.',
];

const CDC_ABOUT = 'Cache Doctor reads <code>audioCache()</code> (backed by <code>CACHE_KEY = la_audio_v2</code>) and classifies each entry: <b>live</b> (http/https URL), <b>negative</b> (<code>' + CDC_NEGATIVE_SENTINEL + '</code>), <b>commons_miss</b> (prefix <code>' + CDC_COMMONS_PREFIX + '</code>), <b>dialect_tag</b> (prefix <code>' + CDC_DIALECT_PREFIX + '</code>), <b>legacy</b> (unexpected shape). Flush operations call <code>saveAudioCache()</code> so quota-safe pruning stays intact. No new persistence — pure read + targeted delete.';
