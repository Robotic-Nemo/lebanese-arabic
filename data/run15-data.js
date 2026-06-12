// Run #15 data — Spelling Drill, Story Comprehension, Register
// Prefixes: sp-, sc-, rg-

// ============ ARABIC LETTER SPELLING DRILL ============
// Each letter: forms (isolated/initial/medial/final), name, transliteration, sound
const ARABIC_LETTERS = [
  { ar: 'ا', name: 'alif',  tr: 'a',   sound: 'long a / aa', accept: ['a','aa','ā'] },
  { ar: 'ب', name: 'beh',   tr: 'b',   sound: 'b as in book', accept: ['b'] },
  { ar: 'ت', name: 'teh',   tr: 't',   sound: 't as in top',  accept: ['t'] },
  { ar: 'ث', name: 'theh',  tr: 'th',  sound: 'th (often pronounced t in Lebanese)', accept: ['th','t','s'] },
  { ar: 'ج', name: 'jeem',  tr: 'j',   sound: 'soft j (zh-like in Lebanese)', accept: ['j','zh','g'] },
  { ar: 'ح', name: '7a',    tr: '7',   sound: 'h-pharyngeal (heavy h, from throat)', accept: ['7','H','h'] },
  { ar: 'خ', name: 'kha',   tr: 'kh',  sound: 'kh as in Bach / Spanish j', accept: ['kh','x'] },
  { ar: 'د', name: 'del',   tr: 'd',   sound: 'd as in dog', accept: ['d'] },
  { ar: 'ذ', name: 'dhel',  tr: 'dh',  sound: 'th in this (often d/z in Leb)', accept: ['dh','d','z'] },
  { ar: 'ر', name: 'reh',   tr: 'r',   sound: 'rolled r', accept: ['r'] },
  { ar: 'ز', name: 'zein',  tr: 'z',   sound: 'z as in zoo', accept: ['z'] },
  { ar: 'س', name: 'seen',  tr: 's',   sound: 's as in sun', accept: ['s'] },
  { ar: 'ش', name: 'sheen', tr: 'sh',  sound: 'sh as in shoe', accept: ['sh'] },
  { ar: 'ص', name: 'Sad',   tr: 'S',   sound: 'emphatic s (heavy)', accept: ['S','s'] },
  { ar: 'ض', name: 'Dad',   tr: 'D',   sound: 'emphatic d (heavy)', accept: ['D','d'] },
  { ar: 'ط', name: 'Ta',    tr: 'T',   sound: 'emphatic t (heavy)', accept: ['T','t'] },
  { ar: 'ظ', name: 'DHa',   tr: 'DH',  sound: 'emphatic dh (often Z in Leb)', accept: ['DH','Z','z'] },
  { ar: 'ع', name: '3ein',  tr: '3',   sound: 'pharyngeal voiced (no English equiv)', accept: ['3'] },
  { ar: 'غ', name: 'ghein', tr: 'gh',  sound: 'French r / gargled g', accept: ['gh'] },
  { ar: 'ف', name: 'feh',   tr: 'f',   sound: 'f as in fun', accept: ['f'] },
  { ar: 'ق', name: 'qaf',   tr: '2/q', sound: 'glottal stop (or q in formal)', accept: ['2','q','k'] },
  { ar: 'ك', name: 'kef',   tr: 'k',   sound: 'k as in king', accept: ['k'] },
  { ar: 'ل', name: 'lem',   tr: 'l',   sound: 'l as in light', accept: ['l'] },
  { ar: 'م', name: 'meem',  tr: 'm',   sound: 'm as in moon', accept: ['m'] },
  { ar: 'ن', name: 'noon',  tr: 'n',   sound: 'n as in no', accept: ['n'] },
  { ar: 'ه', name: 'heh',   tr: 'h',   sound: 'h as in hat (light)', accept: ['h'] },
  { ar: 'و', name: 'waw',   tr: 'w/u', sound: 'w / long u', accept: ['w','u','o','oo'] },
  { ar: 'ي', name: 'ye',    tr: 'y/i', sound: 'y / long i', accept: ['y','i','ee'] },
  { ar: 'ء', name: 'hamza', tr: '2',   sound: 'glottal stop', accept: ['2',"'"] }
];

// Whole-word reading drill (Arabic → typed transliteration)
const SPELL_WORDS = [
  { ar: 'بيت', tr: 'bayt',  en: 'house' },
  { ar: 'كتاب', tr: 'kteb', en: 'book' },
  { ar: 'مدرسة', tr: 'madrase', en: 'school' },
  { ar: 'سيارة', tr: 'sayyara', en: 'car' },
  { ar: 'قهوة', tr: '2ahwe', en: 'coffee' },
  { ar: 'حب', tr: '7ob', en: 'love' },
  { ar: 'صديق', tr: 'sadi2', en: 'friend' },
  { ar: 'شمس', tr: 'shams', en: 'sun' },
  { ar: 'بحر', tr: 'ba7r', en: 'sea' },
  { ar: 'عين', tr: '3ayn', en: 'eye' },
  { ar: 'ولد', tr: 'walad', en: 'boy' },
  { ar: 'بنت', tr: 'bint', en: 'girl' },
  { ar: 'ماء', tr: 'may', en: 'water' },
  { ar: 'خبز', tr: 'khebez', en: 'bread' },
  { ar: 'طريق', tr: 'tari2', en: 'road' },
  { ar: 'غني', tr: 'ghani', en: 'rich' },
  { ar: 'ضيف', tr: 'dayf', en: 'guest' },
  { ar: 'ظهر', tr: 'dhohor', en: 'noon' }
];

// ============ STORY COMPREHENSION ============
const READING_STORIES = [
  {
    id: 1,
    title: 'يوم في السوق — A day at the market',
    ar: [
      'صبحية الأحد، رامي فات عالسوق.',
      'إشترى تفاح وبندورة وخبز.',
      'بعدين، شاف رفيقو سامي عقهوة.',
      'إقعدوا سوا وحكوا عن الشغل.',
      'بعد ساعة، رامي رجع عالبيت.'
    ],
    tr: [
      'sob7eyet el a7ad, Rami fet 3al souk.',
      'eshtara teffe7 w bandoura w khebez.',
      'ba3dein, shef rfi2o Sami 3a 2ahwe.',
      'e23adou sawa w 7akou 3an el shoghol.',
      'ba3d se3a, Rami rja3 3al bayt.'
    ],
    en: [
      'Sunday morning, Rami went to the market.',
      'He bought apples, tomatoes, and bread.',
      'Then he saw his friend Sami at a coffee.',
      'They sat together and talked about work.',
      'After an hour, Rami went back home.'
    ],
    questions: [
      { q: 'When did Rami go to the market?', opts: ['Sunday morning','Monday evening','Friday night','Saturday afternoon'], ans: 0 },
      { q: 'What did he NOT buy?', opts: ['apples','tomatoes','cheese','bread'], ans: 2 },
      { q: 'Where did he meet Sami?', opts: ['at the market','at a coffee shop','at home','at work'], ans: 1 },
      { q: 'What did they talk about?', opts: ['family','work','politics','food'], ans: 1 },
      { q: 'How long was Rami out before going home?', opts: ['half an hour','an hour','two hours','all day'], ans: 1 }
    ]
  },
  {
    id: 2,
    title: 'العائلة — The family',
    ar: [
      'عيلتي صغيرة بس حلوة.',
      'عندي إم وبي وأخت وحدة.',
      'أختي إسمها ليلى وعمرها عشر سنين.',
      'كل يوم بنوكل سوا عالعشاء.',
      'بحب عيلتي كتير.'
    ],
    tr: [
      '3ayilti zghire bas 7ilwe.',
      '3indi imm w bay w ekht we7de.',
      'ekhti esma Layla w 3omra 3ashr snin.',
      'kil yawm bnewkol sawa 3al 3asha.',
      'b7ib 3ayilti kteer.'
    ],
    en: [
      'My family is small but lovely.',
      'I have a mother, father, and one sister.',
      "My sister's name is Layla and she is ten years old.",
      'Every day we eat dinner together.',
      'I love my family a lot.'
    ],
    questions: [
      { q: 'How is the family described?', opts: ['big and noisy','small and lovely','rich and famous','small and quiet'], ans: 1 },
      { q: 'How many siblings does the speaker have?', opts: ['none','one','two','three'], ans: 1 },
      { q: "What is the sister's name?", opts: ['Sara','Mariam','Layla','Nour'], ans: 2 },
      { q: 'How old is the sister?', opts: ['five','seven','ten','twelve'], ans: 2 },
      { q: 'What meal does the family share?', opts: ['breakfast','lunch','dinner','all meals'], ans: 2 }
    ]
  },
  {
    id: 3,
    title: 'رحلة عالجبل — A trip to the mountain',
    ar: [
      'الصيف الماضي، رحنا عالجبل.',
      'الجو كان كتير حلو وبارد.',
      'مشينا ساعتين بين الشجر.',
      'أكلنا منقوشة وشربنا شاي.',
      'كانت رحلة ما رح ننساها.'
    ],
    tr: [
      'el sayf el madi, ri7na 3al jabal.',
      'el jaw ken kteer 7ilo w bared.',
      'mshina sa3tein bayn el shajar.',
      'akalna man2oushe w shrebna shay.',
      'kenet re7le ma ra7 nensaha.'
    ],
    en: [
      'Last summer, we went to the mountain.',
      'The weather was very nice and cool.',
      'We walked for two hours among the trees.',
      'We ate manakish and drank tea.',
      "It was a trip we won't forget."
    ],
    questions: [
      { q: 'When did this trip happen?', opts: ['last winter','last summer','last spring','this year'], ans: 1 },
      { q: 'How was the weather?', opts: ['hot and humid','cold and rainy','nice and cool','snowy'], ans: 2 },
      { q: 'How long did they walk?', opts: ['one hour','two hours','three hours','all day'], ans: 1 },
      { q: 'What did they eat?', opts: ['kibbeh','manakish','shawarma','falafel'], ans: 1 },
      { q: 'How does the speaker remember the trip?', opts: ['boring','tiring','unforgettable','disappointing'], ans: 2 }
    ]
  }
];

// ============ SLANG vs FORMAL REGISTER ============
const REGISTER_PAIRS = [
  { en: 'I want', formal: 'oured', slang: 'biddi', ctx: 'Slang biddi is universal in speech; oured is formal/written.' },
  { en: 'how are you?', formal: 'kayfa 7aluk', slang: 'kifak / shu el akhbar', ctx: 'Standard "kifak" used everywhere; full MSA is bookish.' },
  { en: 'now', formal: 'el 2en', slang: 'halla2 / hayda l-wa2t', ctx: 'halla2 is the everyday word.' },
  { en: 'a lot', formal: 'jiddan / katheer', slang: 'kteer / mish 2alil', ctx: 'kteer is the all-purpose intensifier.' },
  { en: 'good', formal: 'jayyid / 7assan', slang: 'mni7 / tamem', ctx: 'mni7 = good; tamem = OK/fine in speech.' },
  { en: 'why', formal: 'limatha', slang: 'lesh / 3ala shu', ctx: 'lesh in everyday Lebanese.' },
  { en: 'what', formal: 'matha', slang: 'shu / eh', ctx: 'shu = standard Levantine spoken.' },
  { en: 'come on / let\'s go', formal: 'taʿal / lin-nantaliq', slang: 'yalla / yalla bina', ctx: 'yalla is the universal imperative.' },
  { en: 'bro / mate', formal: 'akhi', slang: 'akhouy / habibi / khayy', ctx: 'habibi used loosely between friends regardless of gender.' },
  { en: 'no problem', formal: 'la mushkila', slang: 'mafi mishkle / wala yhemmak', ctx: 'wala yhemmak = don\'t worry about it.' },
  { en: 'really? / seriously?', formal: '7a2an?', slang: 'la2? / wa-llah?', ctx: 'wallah used for emphasis or surprise.' },
  { en: 'maybe', formal: 'rubbama', slang: 'yemken / balki', ctx: 'yemken everyday; balki = perhaps (older speakers).' },
  { en: 'can you?', formal: 'hal yumkinuk', slang: 'fik / fiki / fikon', ctx: 'fik = lit. "in you" = you can.' },
  { en: 'I don\'t know', formal: 'la a3rif', slang: 'ma ba3ref / shou bya3ref', ctx: 'shou bya3ref = "what do I know" (idiom).' },
  { en: 'OK / agreed', formal: 'mwafe2', slang: 'tamem / okay / mashi el 7al', ctx: 'mashi el 7al = "things are walking" = ok.' },
  { en: 'speak / talk', formal: 'yatakallam', slang: 'ye7ki / yedardesh', ctx: 'yedardesh = chit-chat.' },
  { en: 'goodbye', formal: 'ma3 al-salama', slang: 'yalla bye / khallina nshoufak', ctx: 'khallina nshoufak = "let us see you (later)".' },
  { en: 'awesome / cool', formal: 'mumtaz', slang: 'fashekh / nyel / 2awi', ctx: 'fashekh = "smashing" — strong slang.' }
];

const RG_DRILL = [
  { word: 'biddi', register: 'slang' },
  { word: 'limatha', register: 'formal' },
  { word: 'kifak', register: 'slang' },
  { word: 'jiddan', register: 'formal' },
  { word: 'shu', register: 'slang' },
  { word: 'rubbama', register: 'formal' },
  { word: 'yalla', register: 'slang' },
  { word: 'matha', register: 'formal' },
  { word: 'mni7', register: 'slang' },
  { word: 'mumtaz', register: 'formal' },
  { word: 'halla2', register: 'slang' },
  { word: 'la a3rif', register: 'formal' }
];
