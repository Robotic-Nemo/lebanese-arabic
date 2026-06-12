// Run #132 NEW FEATURE: Pair-Discrimination drill (prefix: pdx)
// User hears one word of a lookalike pair, picks which meaning they heard.
// Targets the exact phoneme boundaries R131 normalize fix preserved:
//   ش ≠ س, خ ≠ ك, غ ≠ ك/غ-variant, ذ ≠ د, emphatic S/T/D/DH ≠ plain s/t/d/dh.
// These are the top distinguishing-pair confusions for Lebanese learners.

const PDX_CATS = [
  { id:'sh',   label:'ش vs س  (sh/s)' },
  { id:'kh',   label:'خ vs ك  (kh/k)' },
  { id:'dh',   label:'ذ vs د  (dh/d)' },
  { id:'emph', label:'Emphatic vs plain (S/T/D)' },
];

const PDX_PAIRS = [
  // sh/s (5)
  { id:'pdx01', cat:'sh',   a:{ar:'شمس', tr:'shams', en:'sun'},       b:{ar:'سم',  tr:'sam',   en:'poison'} },
  { id:'pdx02', cat:'sh',   a:{ar:'شعر', tr:'sha3r', en:'hair'},      b:{ar:'سعر', tr:'se3r',  en:'price'} },
  { id:'pdx03', cat:'sh',   a:{ar:'شو',  tr:'shou',  en:'what'},      b:{ar:'سو',  tr:'sou',   en:'equal (rare)'} },
  { id:'pdx04', cat:'sh',   a:{ar:'شاف', tr:'shef',  en:'saw (v)'},   b:{ar:'ساف', tr:'sef',   en:'traveled (v)'} },
  { id:'pdx05', cat:'sh',   a:{ar:'شكر', tr:'shukr', en:'thanks'},    b:{ar:'سكر', tr:'sukkar',en:'sugar'} },

  // kh/k (5)
  { id:'pdx06', cat:'kh',   a:{ar:'خبز', tr:'khobz', en:'bread'},     b:{ar:'كبز', tr:'kobz',  en:'(nonsense, drill)', isDrill:true} },
  { id:'pdx07', cat:'kh',   a:{ar:'خير', tr:'khayr', en:'goodness'},  b:{ar:'كير', tr:'kir',   en:'bellows'} },
  { id:'pdx08', cat:'kh',   a:{ar:'خال', tr:'khel',  en:'uncle (m)'}, b:{ar:'كل',  tr:'kel',   en:'all / every'} },
  { id:'pdx09', cat:'kh',   a:{ar:'خلص', tr:'khalas',en:'done/enough'},b:{ar:'كلس',tr:'kalas', en:'lime (mineral)'} },
  { id:'pdx10', cat:'kh',   a:{ar:'خبر', tr:'khabar',en:'news'},      b:{ar:'كبر', tr:'kabar',  en:'he grew (v)'} },

  // dh/d (5)
  { id:'pdx11', cat:'dh',   a:{ar:'ذهب', tr:'dhahab',en:'gold'},      b:{ar:'دهب', tr:'dahab',  en:'(nonsense, drill)', isDrill:true} },
  { id:'pdx12', cat:'dh',   a:{ar:'ذئب', tr:'dhib',  en:'wolf'},      b:{ar:'ديب', tr:'dib',    en:'(nonsense, drill)', isDrill:true} },
  { id:'pdx13', cat:'dh',   a:{ar:'ذكي', tr:'dhaki', en:'smart'},     b:{ar:'دكي', tr:'daki',   en:'(nonsense, drill)', isDrill:true} },
  { id:'pdx14', cat:'dh',   a:{ar:'ذوق', tr:'dhawq', en:'taste'},     b:{ar:'دوق', tr:'dawq',   en:'(rare)'} },
  { id:'pdx15', cat:'dh',   a:{ar:'هذا', tr:'hada',  en:'this (m)'},  b:{ar:'هدا', tr:'hada',   en:'this — alt spelling'}, skipDrill:true },

  // Emphatic vs plain (5)
  { id:'pdx16', cat:'emph', a:{ar:'صبر', tr:'Sabr',  en:'patience'},  b:{ar:'سبر', tr:'sabr',   en:'probing (v)'} },
  { id:'pdx17', cat:'emph', a:{ar:'طين', tr:'Tin',   en:'mud'},       b:{ar:'تين', tr:'tin',    en:'figs'} },
  { id:'pdx18', cat:'emph', a:{ar:'ضرب', tr:'Darab', en:'hit (v)'},   b:{ar:'درب', tr:'darab',  en:'path'} },
  { id:'pdx19', cat:'emph', a:{ar:'صار', tr:'Sar',   en:'became'},    b:{ar:'سار', tr:'sar',    en:'walked'} },
  { id:'pdx20', cat:'emph', a:{ar:'طار', tr:'Tar',   en:'flew'},      b:{ar:'تار', tr:'tar',    en:'revenge'} },
];

const PDX_TIPS = [
  'Listen for the <b>tongue position</b>: ش is your tongue pulled back (sh); س is forward and flat.',
  'خ is a throat scrape (like Spanish j / German ach); ك is a simple k at the soft palate.',
  'Emphatic letters (ص ط ض ظ) <b>pharyngealize</b> — your tongue root pulls back and the vowel sounds darker/flatter.',
  'The emphatic trick: emphatic vowels sound like "ah/oh" (dark), plain vowels sound like "ae/eh" (bright).',
  'ذ (dh) is the English <i>th</i> in "this" — tongue between teeth. د (d) is a clean d.',
  'If the pair sounds identical on first play, use 🐢 slow mode — the emphatic tail reveals on slower speech.',
  'Real Lebanese often <b>flattens</b> the ذ → د in casual speech, but the dictionary pair is still distinct.',
  'Scoring: correct first-try = 🎯 gold, correct after retry = ✅, miss both = ❌ (you see the answer + example).',
];
