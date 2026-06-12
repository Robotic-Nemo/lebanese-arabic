// Run #151 AUDIO: Dialect Session Counter (prefix: dsc)
// Every time speak() plays, it already routes through _audioMetricsBump(src)
// with a source tag. We classify each tag into one of three dialect buckets
// so the user sees, at a glance, what they actually heard this session:
//   clip  = YouTube-extracted Lebanese clip (highest trust)
//   web   = Wiktionary / Wikimedia Commons recording (usually Levantine)
//   synth = browser TTS fallback or no-audio-at-all (often MSA-flavored)
//
// Addresses bugs.rtf #2 ("sentence audio is often not Lebanese arabic") and
// #4 ("audio system biggest source of problems") by making the failure mode
// visible, not silent. Users can now tell when a drill is being padded with
// synth speech versus real Lebanese recordings and plan study accordingly.

const DSC_BUCKETS = {
  clip:  { label: 'clip',  flag: '🇱🇧', dialect: 'Lebanese',  sources: ['yt'] },
  web:   { label: 'web',   flag: '🌍', dialect: 'Levantine', sources: ['wikt', 'commons'] },
  synth: { label: 'synth', flag: '📚', dialect: 'Fallback',  sources: ['browser', 'none'] },
};

// Reverse lookup: source-tag → bucket key. Derived once, read at each bump.
const DSC_SRC_TO_BUCKET = (function(){
  var m = {};
  for(var k in DSC_BUCKETS){
    if(!Object.prototype.hasOwnProperty.call(DSC_BUCKETS, k)) continue;
    var srcs = DSC_BUCKETS[k].sources || [];
    for(var i = 0; i < srcs.length; i++) m[srcs[i]] = k;
  }
  return m;
})();

const DSC_TIPS = [
  'The pill after 🔊 shows <b>this session only</b> — it resets when you reload the app.',
  '🇱🇧 <b>clip</b> = a real Lebanese YouTube recording was played. Highest confidence this is the dialect you\'re learning.',
  '🌍 <b>web</b> = a Wiktionary or Commons recording. Usually Levantine, but speakers vary; not guaranteed Lebanese.',
  '📚 <b>synth</b> = browser text-to-speech or "no audio found". Often MSA-flavored — a warning sign for that token.',
  'High synth count? Run the <b>Audio Metrics</b> coach (📊) to see which specific tokens have no recording and fix them.',
  'Aim for a session that is mostly 🇱🇧 + 🌍 — if synth dominates, you\'re drilling the wrong dialect.',
];

const DSC_ABOUT = 'Session counts hook into <code>_audioMetricsBump()</code> — the same counter that feeds Audio Metrics and the Heatmap. Each <code>speak()</code> exit tags itself with a source: <code>yt</code>/<code>wikt</code>/<code>commons</code>/<code>browser</code>/<code>none</code>. R151 maps those five tags into three dialect buckets (<b>clip</b>, <b>web</b>, <b>synth</b>) and shows live totals in a pill next to the audio-source badge. Counts are in-memory only, not saved to localStorage — a reload starts fresh.';
