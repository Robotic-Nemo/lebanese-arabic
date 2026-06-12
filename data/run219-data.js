// Run #219 — Lebanese Personality & Traits Coach (prs)
// Describing people: positive traits, negative traits, appearance, mood states — 40 items

const PRS_WORDS = [
  // positive traits
  { tr: 'tayyib',      ar: 'طيب',        en: 'kind / good-natured',    cat: 'positive' },
  { tr: 'kariim',      ar: 'كريم',       en: 'generous',               cat: 'positive' },
  { tr: 'shaaTer',     ar: 'شاطر',       en: 'smart / clever',         cat: 'positive' },
  { tr: 'amiin',       ar: 'أمين',       en: 'trustworthy / honest',   cat: 'positive' },
  { tr: 'Sabuur',      ar: 'صبور',       en: 'patient',                cat: 'positive' },
  { tr: 'mda77ik',     ar: 'مضحك',       en: 'funny',                  cat: 'positive' },
  { tr: 'zarif',       ar: 'ظريف',       en: 'charming / witty',       cat: 'positive' },
  { tr: 'mhaddab',     ar: 'مهذب',       en: 'well-mannered / polite', cat: 'positive' },
  { tr: 'shujaa3',     ar: 'شجاع',       en: 'brave / courageous',     cat: 'positive' },
  { tr: 'naShiiT',     ar: 'نشيط',       en: 'energetic / active',     cat: 'positive' },
  // negative traits
  { tr: 'kaslaan',     ar: 'كسلان',      en: 'lazy',                   cat: 'negative' },
  { tr: '3aniid',      ar: 'عنيد',       en: 'stubborn',               cat: 'negative' },
  { tr: 'bakhiil',     ar: 'بخيل',       en: 'stingy / miserly',       cat: 'negative' },
  { tr: 'motakkaber',  ar: 'متكبر',      en: 'arrogant / full of himself', cat: 'negative' },
  { tr: 'ghayuur',     ar: 'غيور',       en: 'jealous / possessive',   cat: 'negative' },
  { tr: 'kaddaab',     ar: 'كداب',       en: 'liar',                   cat: 'negative' },
  { tr: 'muze3',       ar: 'مزعج',       en: 'annoying',               cat: 'negative' },
  { tr: '2aliil adab', ar: 'قليل أدب',  en: 'rude (lit: little manners)', cat: 'negative' },
  { tr: 'mshawwash',   ar: 'مشوش',       en: 'scatterbrained / confused', cat: 'negative' },
  { tr: '7aSuud',      ar: 'حسود',       en: 'envious',                cat: 'negative' },
  // appearance
  { tr: '7elo',        ar: 'حلو',        en: 'handsome / beautiful',   cat: 'appearance' },
  { tr: 'shi3',        ar: 'شيع',        en: 'ugly',                   cat: 'appearance' },
  { tr: 'Tawiil',      ar: 'طويل',       en: 'tall',                   cat: 'appearance' },
  { tr: '2aSiir',      ar: 'قصير',       en: 'short',                  cat: 'appearance' },
  { tr: 'tkhiin',      ar: 'تخين',       en: 'chubby / overweight',    cat: 'appearance' },
  { tr: 'na7iif',      ar: 'نحيف',       en: 'thin / slim',            cat: 'appearance' },
  { tr: 'sha2ra',      ar: 'شقرا',       en: 'blonde / fair-skinned',  cat: 'appearance' },
  { tr: 'asmar',       ar: 'أسمر',       en: 'tan / dark-complexioned', cat: 'appearance' },
  { tr: 'sha3ro kwayyes', ar: 'شعره كويس', en: 'good-looking hair (his)', cat: 'appearance' },
  { tr: 'shebeh 7ada', ar: 'شبه حدا',   en: 'looks like someone',     cat: 'appearance' },
  // mood states
  { tr: 'mabsuuT',     ar: 'مبسوط',      en: 'happy / pleased',        cat: 'mood' },
  { tr: 'za3laan',     ar: 'زعلان',      en: 'sad / upset',            cat: 'mood' },
  { tr: 'ta3baan',     ar: 'تعبان',      en: 'tired / unwell',         cat: 'mood' },
  { tr: 'mfakker',     ar: 'مفكر',       en: 'thoughtful / pensive',   cat: 'mood' },
  { tr: 'khayef',      ar: 'خايف',       en: 'scared / afraid',        cat: 'mood' },
  { tr: 'mrawwi7',     ar: 'مرووح',      en: 'relaxed / chilling',     cat: 'mood' },
  { tr: 'msta3jel',    ar: 'مستعجل',     en: 'in a hurry',             cat: 'mood' },
  { tr: 'wa7shaan',    ar: 'وحشان',      en: 'missing someone',        cat: 'mood' },
  { tr: 'mitdayye2',   ar: 'متضايق',     en: 'bothered / fed up',      cat: 'mood' },
  { tr: 'mfarfash',    ar: 'مفرفش',      en: 'excited / hyper',        cat: 'mood' },
];

const PRS_DRILLS = [
  {
    q: 'How do you say "lazy" in Lebanese Arabic?',
    opts: ['amiin', 'kaslaan', 'naShiiT', 'tayyib'],
    correct: 1,
    note: '"kaslaan" = lazy; "amiin" = trustworthy; "naShiiT" = energetic; "tayyib" = kind'
  },
  {
    q: 'What does "mabsuuT" mean?',
    opts: ['sad / upset', 'tired', 'happy / pleased', 'scared'],
    correct: 2,
    note: '"mabsuuT" = happy/pleased; "za3laan" = sad; "ta3baan" = tired; "khayef" = scared'
  },
  {
    q: 'How do you say "generous" in Lebanese Arabic?',
    opts: ['bakhiil', 'kariim', 'zarif', '3aniid'],
    correct: 1,
    note: '"kariim" = generous; "bakhiil" = stingy (opposite!); "zarif" = charming; "3aniid" = stubborn'
  },
  {
    q: 'What does "3aniid" mean?',
    opts: ['brave', 'arrogant', 'stubborn', 'lazy'],
    correct: 2,
    note: '"3aniid" = stubborn; "shujaa3" = brave; "motakkaber" = arrogant; "kaslaan" = lazy'
  },
  {
    q: 'How do you say "in a hurry" in Lebanese Arabic?',
    opts: ['mrawwi7', 'mfakker', 'msta3jel', 'za3laan'],
    correct: 2,
    note: '"msta3jel" = in a hurry; "mrawwi7" = relaxed; "mfakker" = thoughtful; "za3laan" = upset'
  },
  {
    q: 'What does "7elo" mean?',
    opts: ['ugly', 'tall', 'handsome / beautiful', 'thin'],
    correct: 2,
    note: '"7elo" = handsome/beautiful; "shi3" = ugly; "Tawiil" = tall; "na7iif" = thin'
  },
  {
    q: 'How do you say "trustworthy / honest" in Lebanese Arabic?',
    opts: ['kaddaab', 'kariim', 'amiin', 'mhaddab'],
    correct: 2,
    note: '"amiin" = trustworthy/honest; "kaddaab" = liar (opposite!); "kariim" = generous; "mhaddab" = polite'
  },
  {
    q: 'What does "ta3baan" mean?',
    opts: ['lazy', 'tired / unwell', 'hungry', 'bored'],
    correct: 1,
    note: '"ta3baan" = tired/unwell; "kaslaan" = lazy; note: "ta3baan" can mean sick too in Lebanese'
  },
  {
    q: 'How do you say "arrogant" in Lebanese Arabic?',
    opts: ['ghayuur', '3aniid', 'motakkaber', 'muze3'],
    correct: 2,
    note: '"motakkaber" = arrogant; "ghayuur" = jealous; "3aniid" = stubborn; "muze3" = annoying'
  },
  {
    q: 'What does "mrawwi7" mean?',
    opts: ['in a hurry', 'excited', 'relaxed / chilling', 'scared'],
    correct: 2,
    note: '"mrawwi7" = relaxed/chilling; "msta3jel" = in a hurry; "mfarfash" = excited; "khayef" = scared'
  },
];

const PRS_TIPS = [
  { title: 'Masculine vs feminine adjectives', body: 'Lebanese adjectives add "-e" for feminine: "tayyib" (kind, m) → "tayyibe" (f), "kaslaan" (lazy, m) → "kaslaane" (f), "Tawiil" (tall, m) → "Tawiile" (f). The base form in this list is always masculine.' },
  { title: '"7elo" — the all-purpose compliment', body: '"7elo" (m) / "7elwe" (f) is the most versatile Lebanese compliment. "7elo ktir" = very handsome/pretty. "Shu 7elu" = how beautiful! It can describe people, things, places, food, even music. If something looks/sounds/tastes good — "7elo" works.' },
  { title: 'Saying someone IS in a mood vs ACTS like it', body: '"Howe za3laan" = he IS sad. "3am yit3aSSab" = he IS getting angry right now (ongoing). Lebanese uses "3am" + verb for current action, but adjectives like "za3laan/mabsuuT" directly state the state. No verb needed: "inti mabsuu.Ta?" = you happy?' },
  { title: 'Intensifiers: "ktir", "ta7t el-ard", "ma fi mitlo"', body: '"Ktir" = very. "Ktir kariim" = very generous. "Ta7t el-ard" = extremely (lit: under the ground). "Ma fi mitlo" = there is no one like him (highest praise). "Yislam" also expresses admiration.' },
  { title: 'Negating personality: "mish" + adjective', body: '"Mish kaslaan" = not lazy. "Mish amiin" = not trustworthy. Lebanese uses "mish" before adjective for negation — no verb needed. "Ana mish ta3baan" = I\'m not tired. "Hiye mish bakhiile" = she is not stingy.' },
];

const PRS_ABOUT = 'Master Lebanese Arabic personality and traits vocabulary — positive and negative character traits, physical appearance, and mood states. Essential for describing people, expressing opinions, and understanding how Lebanese speakers talk about character.';
