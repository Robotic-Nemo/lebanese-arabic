// Run #19 — Filler & Hesitation Markers, Adjective Intensity, Compound Sentences
// Prefixes: fl-, ai-, cs-

// ============ FILLERS / HESITATION ============
const FILLERS = [
  { ar: 'يعني',    tr: 'ya3ni',     en: 'I mean / so / like', use: 'Universal filler. Pause + clarify. Used 100x daily.', ex: 'ya3ni... ma 3am yefham = I mean... he doesn\u2019t get it' },
  { ar: 'هيك',     tr: 'hek',       en: 'like that / so / kinda', use: 'Vague descriptor. Like English "kinda" or "you know".', ex: 'hek 3adi = kinda normal' },
  { ar: 'شي',     tr: 'shi',       en: 'something / kinda', use: 'Adds vagueness or approximation.', ex: 'shi 7elo = something nice' },
  { ar: 'مش هيك', tr: 'mish hek',  en: 'not like that / no?', use: 'Tag question seeking agreement. Like "right?".', ex: 'el ahla, mish hek? = the best, no?' },
  { ar: 'بصراحة', tr: 'bsara7a',   en: 'honestly / frankly', use: 'Marks an honest opinion to come.', ex: 'bsara7a, ma 3ajabni = honestly, I didn\u2019t like it' },
  { ar: 'يا أخي',  tr: 'ya akhi',   en: 'man / dude (lit: O my brother)', use: 'Solidarity address even to non-brothers. Casual.', ex: 'ya akhi, eish hayda? = dude, what is this?' },
  { ar: 'والله العظيم', tr: 'wallahi el 3aZim', en: 'I swear by mighty God', use: 'Strong oath when serious. Heavier than plain "wallah".', ex: 'wallahi el 3aZim ma 3refet = I swear I didn\u2019t know' },
  { ar: 'بالله',   tr: 'billah',    en: 'by God / please / really?', use: 'Plea or surprised question. "billah?" = "really?!"', ex: 'billah ta3a = please come' },
  { ar: 'إيه',     tr: 'eih',       en: 'yes / right / uh-huh', use: 'Casual yes/affirmation. Backchannel during listening.', ex: 'eih, sa7 = yeah, true' },
  { ar: 'لأ',      tr: 'la2',       en: 'no', use: 'Default no. Often doubled "la2 la2" for emphasis.', ex: 'la2 la2 ma fi = no no, there isn\u2019t' },
  { ar: 'طيب',     tr: 'Tayyeb',    en: 'ok / fine / well', use: 'Concession or transition. "OK so..." or "alright then..."', ex: 'Tayyeb, kif ra7 na3mel? = ok, how will we do it?' },
  { ar: 'خلص',     tr: 'khalaS',    en: 'enough / done / that\u2019s it', use: 'Closes a topic, ends a discussion, or means "fine!".', ex: 'khalaS, ma badna ne7ki = enough, we don\u2019t want to talk' },
  { ar: 'عفواً',   tr: '3afwan',    en: 'excuse me / you\u2019re welcome', use: 'Polite getter-attention or response to thanks.', ex: '3afwan, wein el 7ammem? = excuse me, where\u2019s the bathroom?' },
  { ar: 'إيه يعني',tr: 'eih ya3ni', en: 'so what / what about it', use: 'Dismissive. "And? What\u2019s your point?".', ex: 'eih ya3ni, mish meshkleh = so what, no problem' },
  { ar: 'شو بعرف', tr: 'shu ba3ref',en: 'how should I know / I don\u2019t know', use: 'Casual shrug. Like "beats me".', ex: 'lesh? shu ba3ref = why? how should I know' },
  { ar: 'الله يعلم',tr: 'allah ya3lem', en: 'God knows', use: 'Genuine "no idea" or "fate-only-knows".', ex: 'emta ra7 yiji? allah ya3lem = when will he come? God knows' },
  { ar: 'ما بعرف',  tr: 'ma ba3ref', en: 'I don\u2019t know', use: 'Plain "I don\u2019t know" — use freely.', ex: 'ma ba3ref shu sar = I don\u2019t know what happened' },
  { ar: 'يا ريت',   tr: 'ya rait',   en: 'I wish / if only', use: 'Wishful. Often follows by past or subjunctive.', ex: 'ya rait kenet hon = I wish I had been here' },
  { ar: 'ع راحتك',  tr: '3a ra7tak', en: 'as you wish / make yourself comfortable', use: 'Permission/comfort phrase.', ex: 'kol 3a ra7tak = eat as much as you like' },
  { ar: 'شو هاد',   tr: 'shu hayda', en: 'what is this / what\u2019s going on', use: 'Surprise/confusion exclamation.', ex: 'shu hayda el balagha! = what eloquence!' }
];

const FL_DRILL = [
  { sit: 'You want to start a sentence with an honest opinion', opts: ['ya3ni','bsara7a','khalaS','ya rait'], correct: 1 },
  { sit: 'Friend asks an unanswerable question', opts: ['eih','shu ba3ref','3afwan','la2'], correct: 1 },
  { sit: 'You\u2019ve heard enough of an argument', opts: ['Tayyeb','khalaS','wallahi','billah'], correct: 1 },
  { sit: 'You want to soften before disagreeing', opts: ['Tayyeb...','la2 la2','khalaS','eih ya3ni'], correct: 0 },
  { sit: 'Casual address to a friend', opts: ['ya akhi','3afwan','ya rait','allah ya3lem'], correct: 0 },
  { sit: 'Wishful regret about the past', opts: ['ya rait','ya3ni','bsara7a','khalaS'], correct: 0 },
  { sit: 'Politely getting attention in public', opts: ['ya akhi','3afwan','khalaS','la2'], correct: 1 },
  { sit: 'Vague approximation: "kinda nice"', opts: ['shi 7elo','la2','khalaS','3afwan'], correct: 0 }
];

// ============ ADJECTIVE INTENSITY SPECTRUM ============
// Each spectrum: 4-5 levels from mild to extreme
const ADJ_SPECTRUMS = [
  {
    en: 'temperature (cold)',
    levels: [
      { tr: 'fater', ar: 'فاتر', en: 'lukewarm/cool' },
      { tr: 'bared', ar: 'بارد', en: 'cold' },
      { tr: 'ktir bared', ar: 'كتير بارد', en: 'very cold' },
      { tr: 'm2ammed', ar: 'مقمّد', en: 'freezing' }
    ]
  },
  {
    en: 'temperature (hot)',
    levels: [
      { tr: 'defi', ar: 'دافي', en: 'warm' },
      { tr: 'shob', ar: 'شوب', en: 'hot' },
      { tr: 'ktir shob', ar: 'كتير شوب', en: 'very hot' },
      { tr: 'mishwi', ar: 'مشوي', en: 'roasting (lit: grilled)' }
    ]
  },
  {
    en: 'goodness',
    levels: [
      { tr: 'mish baTal', ar: 'مش بطّال', en: 'not bad' },
      { tr: 'mni7', ar: 'منيح', en: 'good' },
      { tr: 'ktir mni7', ar: 'كتير منيح', en: 'very good' },
      { tr: 'mumtez', ar: 'ممتاز', en: 'excellent' },
      { tr: 'khaye3', ar: 'خايع', en: 'mind-blowing' }
    ]
  },
  {
    en: 'badness',
    levels: [
      { tr: 'mish hek', ar: 'مش هيك', en: 'meh' },
      { tr: 'mish mni7', ar: 'مش منيح', en: 'not good' },
      { tr: 'baTal', ar: 'بطّال', en: 'bad' },
      { tr: 'shi3a', ar: 'شعع', en: 'awful' },
      { tr: 'fashleh', ar: 'فشلة', en: 'disaster/embarrassment' }
    ]
  },
  {
    en: 'beauty',
    levels: [
      { tr: 'ma2bool', ar: 'مقبول', en: 'acceptable-looking' },
      { tr: '7elo', ar: 'حلو', en: 'nice/pretty' },
      { tr: 'ktir 7elo', ar: 'كتير حلو', en: 'very pretty' },
      { tr: 'jamil', ar: 'جميل', en: 'beautiful' },
      { tr: 'ra2e3', ar: 'رائع', en: 'gorgeous' }
    ]
  },
  {
    en: 'tiredness',
    levels: [
      { tr: 'shway ta3ben', ar: 'شوي تعبان', en: 'a bit tired' },
      { tr: 'ta3ben', ar: 'تعبان', en: 'tired' },
      { tr: 'ktir ta3ben', ar: 'كتير تعبان', en: 'very tired' },
      { tr: 'monhak', ar: 'منهك', en: 'exhausted' },
      { tr: 'mit', ar: 'ميت', en: 'dead-tired' }
    ]
  },
  {
    en: 'happiness',
    levels: [
      { tr: 'merta7', ar: 'مرتاح', en: 'content' },
      { tr: 'mabsout', ar: 'مبسوط', en: 'happy' },
      { tr: 'ktir mabsout', ar: 'كتير مبسوط', en: 'very happy' },
      { tr: 'far7an', ar: 'فرحان', en: 'joyful' },
      { tr: 'Tayer men el fara7', ar: 'طاير من الفرح', en: 'flying with joy' }
    ]
  },
  {
    en: 'hunger',
    levels: [
      { tr: 'ma3i nafs akel', ar: 'معي نفس أكل', en: 'feel like eating' },
      { tr: 'jou3an', ar: 'جوعان', en: 'hungry' },
      { tr: 'ktir jou3an', ar: 'كتير جوعان', en: 'very hungry' },
      { tr: 'mit men el jou3', ar: 'ميت من الجوع', en: 'starving' }
    ]
  }
];

const AI_DRILL = [
  { en: 'starving', opts: ['jou3an','mit men el jou3','3am bedi akol','ma 3andi nafs'], correct: 1 },
  { en: 'freezing', opts: ['bared','fater','m2ammed','defi'], correct: 2 },
  { en: 'mind-blowing', opts: ['mni7','mumtez','khaye3','ktir mni7'], correct: 2 },
  { en: 'lukewarm', opts: ['bared','fater','defi','shob'], correct: 1 },
  { en: 'roasting (hot)', opts: ['shob','mishwi','defi','ktir shob'], correct: 1 },
  { en: 'gorgeous', opts: ['7elo','jamil','ra2e3','ma2bool'], correct: 2 },
  { en: 'dead-tired', opts: ['ta3ben','monhak','mit','shway ta3ben'], correct: 2 },
  { en: 'flying with joy', opts: ['mabsout','far7an','Tayer men el fara7','merta7'], correct: 2 },
  { en: 'disaster (bad)', opts: ['baTal','shi3a','fashleh','mish mni7'], correct: 2 },
  { en: 'meh', opts: ['mni7','mish hek','mumtez','ktir mni7'], correct: 1 }
];

// ============ COMPOUND SENTENCE BUILDER ============
// User picks a connector to join 2 clauses; then types/picks the result
const COMPOUND_CONNECTORS = [
  { tr: 'w',     ar: 'و',    en: 'and' },
  { tr: 'bas',   ar: 'بس',   en: 'but' },
  { tr: 'la2enn',ar: 'لأن',  en: 'because' },
  { tr: 'la7tta',ar: 'لحتى', en: 'so that / in order to' },
  { tr: 'aw',    ar: 'أو',   en: 'or' },
  { tr: 'ba3d ma',ar: 'بعد ما', en: 'after' },
  { tr: 'abel ma',ar: 'قبل ما', en: 'before' },
  { tr: 'iza',   ar: 'إذا',  en: 'if' },
  { tr: 'lamma', ar: 'لمّا', en: 'when' },
  { tr: 'ma3 enno',ar: 'مع إنو', en: 'although' }
];

const COMPOUND_DRILL = [
  { a: 'akalt', b: 'sherbet may', conn: 'w', en: 'I ate and I drank water' },
  { a: 'beddi rou7', b: 'ma fini', conn: 'bas', en: 'I want to go but I can\u2019t' },
  { a: 'ma jit', b: 'kent ta3ben', conn: 'la2enn', en: 'I didn\u2019t come because I was tired' },
  { a: 'dris ktir', b: 'tinjah', conn: 'la7tta', en: 'study a lot so that you pass' },
  { a: 'badak shai', b: 'ahwe', conn: 'aw', en: 'do you want tea or coffee' },
  { a: 'rje3et 3al beit', b: 'khallaSt el shoghol', conn: 'ba3d ma', en: 'I went home after I finished work' },
  { a: 'btoSlu 3al beit', b: 'ttalfen', conn: 'abel ma', en: 'call before you arrive home' },
  { a: 'ma fi 7ada', b: 'fini sekkir', conn: 'iza', en: 'if there\u2019s no one I can close up' },
  { a: 'kanet 3am Tmotor', b: 'wsolet', conn: 'lamma', en: 'it was raining when I arrived' },
  { a: 'ra7 jit', b: 'ktir mashghoul', conn: 'ma3 enno', en: 'I\u2019ll come although I\u2019m very busy' },
  { a: 'fta7 el bab', b: 'fet el dyf', conn: 'w', en: 'he opened the door and the guest entered' },
  { a: 'ma 3am yfham', b: 'ma 3am yedrus', conn: 'la2enn', en: 'he doesn\u2019t understand because he doesn\u2019t study' }
];
