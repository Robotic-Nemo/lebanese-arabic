// Run #129 NEW FEATURE: Listen & Type drill (prefix: lat)
// Play Lebanese audio → user types translit from memory.
// Scored on normalized char-overlap (Levenshtein-based similarity).
// Complements reading-first drills (emp, sml, sa, cnt) by training the
// opposite direction: audio → text. Items curated from existing YOUTUBE_AUDIO
// + high-quality short phrases so playback is real Lebanese (not MSA TTS).

const LAT_CATS = [
  { id:'word',    label:'Single words' },
  { id:'phrase',  label:'Short phrases' },
  { id:'sent',    label:'Sentences' },
];

const LAT_ITEMS = [
  // Single words (10) — all present in YOUTUBE_AUDIO high-priority set
  { id:'lat01', cat:'word',   ar:'شكراً',     tr:'shukran',          en:'thank you',           hint:'thanks' },
  { id:'lat02', cat:'word',   ar:'مرحبا',     tr:'mar7aba',          en:'hello',               hint:'greeting' },
  { id:'lat03', cat:'word',   ar:'كيفك',      tr:'kifak',            en:'how are you (m)',     hint:'asking m' },
  { id:'lat04', cat:'word',   ar:'تمام',      tr:'tamem',            en:'perfect / ok',        hint:'agreement' },
  { id:'lat05', cat:'word',   ar:'حبيبي',     tr:'7abibi',           en:'my dear (m)',         hint:'affection' },
  { id:'lat06', cat:'word',   ar:'يلا',       tr:'yalla',            en:'come on / let\'s go', hint:'urging' },
  { id:'lat07', cat:'word',   ar:'بدي',       tr:'baddi',            en:'I want',              hint:'desire' },
  { id:'lat08', cat:'word',   ar:'كتير',      tr:'ktir',             en:'a lot / very',        hint:'intensifier' },
  { id:'lat09', cat:'word',   ar:'بيت',       tr:'bayt',             en:'house',               hint:'home' },
  { id:'lat10', cat:'word',   ar:'كتاب',      tr:'kteb',             en:'book',                hint:'object' },

  // Short phrases (8)
  { id:'lat11', cat:'phrase', ar:'كيفك اليوم',    tr:'kifak alyoum',       en:'how are you today',     hint:'greeting+time' },
  { id:'lat12', cat:'phrase', ar:'شو اسمك',       tr:'shou ismak',         en:'what\'s your name',     hint:'question' },
  { id:'lat13', cat:'phrase', ar:'من وين انت',    tr:'min wayn inta',      en:'where are you from',    hint:'origin' },
  { id:'lat14', cat:'phrase', ar:'بدي مي',        tr:'baddi mayy',         en:'I want water',          hint:'request' },
  { id:'lat15', cat:'phrase', ar:'كم السعر',      tr:'kam el se3r',        en:'what\'s the price',     hint:'shopping' },
  { id:'lat16', cat:'phrase', ar:'وين الحمام',    tr:'wayn el 7ammem',     en:'where\'s the bathroom', hint:'location' },
  { id:'lat17', cat:'phrase', ar:'كل شي تمام',    tr:'kel shi tamem',      en:'everything is fine',    hint:'reassurance' },
  { id:'lat18', cat:'phrase', ar:'يعطيك العافية', tr:'ya3tik el 3afiye',   en:'god give you health',   hint:'thanks (work)' },

  // Sentences (6)
  { id:'lat19', cat:'sent',   ar:'أنا من لبنان',          tr:'ana min lebnen',         en:'I\'m from Lebanon',        hint:'self intro' },
  { id:'lat20', cat:'sent',   ar:'كيف الطقس اليوم',       tr:'kif el ta2s alyoum',     en:'how\'s the weather today', hint:'small talk' },
  { id:'lat21', cat:'sent',   ar:'بحكي عربي شوي',         tr:'ba7ki 3arabi shway',     en:'I speak a little arabic',  hint:'ability' },
  { id:'lat22', cat:'sent',   ar:'ممكن تساعدني',          tr:'mumkin tsa3idni',        en:'can you help me',          hint:'asking help' },
  { id:'lat23', cat:'sent',   ar:'شكرا كتير على كل شي',   tr:'shukran ktir 3ala kel shi', en:'thanks a lot for everything', hint:'gratitude' },
  { id:'lat24', cat:'sent',   ar:'بحب البيت الجديد',      tr:'b7ib el bayt el jdid',   en:'I love the new house',     hint:'opinion' },
];

const LAT_TIPS = [
  'Type what you <b>hear</b>, not what you expect — Lebanese drops vowels and shortens fast.',
  '7 = ح, 2 = ء/ق, 3 = ع, kh = خ. These are the 4 canon hardest letters to type.',
  'S/T/D/DH (uppercase) = emphatics ص ط ض ظ. Most learners forget these and lose accuracy points.',
  'For scoring, the checker is forgiving: case, punctuation, and spacing don\'t matter.',
  'If your first guess is wrong, replay the audio at slow speed (🐢) before retyping.',
  'Short-word miss? It\'s usually a dropped vowel — Lebanese writes <i>ktir</i>, not <i>kateer</i>.',
  'Listen for gemination (double consonants): <i>7abbibi</i> ≠ <i>7abibi</i> — both valid, just score both.',
  'The emoji feedback: 🎯 = 90%+ (perfect), ✅ = 70%+ (solid), 🟡 = 50%+ (partial), ❌ = <50% (retry).',
];
