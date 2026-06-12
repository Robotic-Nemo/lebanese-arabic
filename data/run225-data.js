// Run #225 — Lebanese Verbs in Context Coach (vbc)
// 40 high-frequency verbs: present/past forms + example sentence — MCQ drill, 5 tips

const VBC_WORDS = [
  // daily actions
  { tr: 'byeekol',    ar: 'بياكل',     en: 'he eats',           ex: 'byeekol ktir' ,        exEn: 'he eats a lot',            cat: 'daily' },
  { tr: 'beshrab',    ar: 'بشرب',      en: 'I drink',           ex: 'beshrab ahwe',          exEn: 'I drink coffee',           cat: 'daily' },
  { tr: 'byenaam',    ar: 'بينام',     en: 'he sleeps',         ex: 'byenaam badri',         exEn: 'he sleeps early',          cat: 'daily' },
  { tr: 'betsaHHa',   ar: 'بتصحى',    en: 'she wakes up',      ex: 'betsaHHa 3a-sseb7',     exEn: 'she wakes up in the morning', cat: 'daily' },
  { tr: 'broo7',      ar: 'بروح',      en: 'I go',              ex: 'broo7 3al-shoghl',      exEn: 'I go to work',             cat: 'daily' },
  { tr: 'biji',       ar: 'بيجي',      en: 'he comes',          ex: 'biji bukra',            exEn: 'he comes tomorrow',        cat: 'daily' },
  { tr: 'betla3',     ar: 'بطلع',      en: 'I go out / go up',  ex: 'betla3 ma3 s7aabi',     exEn: 'I go out with my friends', cat: 'daily' },
  { tr: 'benzel',     ar: 'بنزل',      en: 'I go down / go out',ex: 'benzel la-barra',       exEn: 'I go outside',             cat: 'daily' },
  // communication
  { tr: 'b7ki',       ar: 'بحكي',      en: 'I speak / I say',   ex: 'b7ki 3arabi',           exEn: 'I speak Arabic',           cat: 'communication' },
  { tr: 'bsem3',      ar: 'بسمع',      en: 'I hear / I listen', ex: 'bsem3o bi-daa2ima',     exEn: 'I always hear him',        cat: 'communication' },
  { tr: 'beshoof',    ar: 'بشوف',      en: 'I see / I watch',   ex: 'beshoof film',          exEn: 'I watch a film',           cat: 'communication' },
  { tr: 'bektob',     ar: 'بكتب',      en: 'I write',           ex: 'bektob rsa2el',         exEn: 'I write messages',         cat: 'communication' },
  { tr: 'be2ra',      ar: 'بقرا',      en: 'I read',            ex: 'be2ra ktaab',           exEn: 'I read a book',            cat: 'communication' },
  { tr: 'betHaki',    ar: 'بتحكي',     en: 'you speak (f)',      ex: 'betHaki mniH',          exEn: 'you speak well',           cat: 'communication' },
  // feelings / states
  { tr: 'b7ebb',      ar: 'بحب',       en: 'I love / I like',   ex: 'b7ebb lebnen',          exEn: 'I love Lebanon',           cat: 'feelings' },
  { tr: 'bkrah',      ar: 'بكره',      en: 'I hate',            ex: 'bkrah ez-za7me',        exEn: 'I hate traffic',           cat: 'feelings' },
  { tr: 'bkhaf',      ar: 'بخاف',      en: 'I am scared',       ex: 'bkhaf men el-3etme',    exEn: 'I am scared of the dark',  cat: 'feelings' },
  { tr: 'bD7ak',      ar: 'بضحك',      en: 'I laugh',           ex: 'bD7ak ktir',            exEn: 'I laugh a lot',            cat: 'feelings' },
  { tr: 'beb2a',      ar: 'ببقى',      en: 'I stay / I remain', ex: 'beb2a bel-bayt',        exEn: 'I stay at home',           cat: 'feelings' },
  { tr: 'bfakker',    ar: 'بفكر',      en: 'I think',           ex: 'bfakker ktir',          exEn: 'I think a lot',            cat: 'feelings' },
  // work / actions
  { tr: 'beshtaghel', ar: 'بشتغل',     en: 'I work',            ex: 'beshtaghel bi-Beirut',  exEn: 'I work in Beirut',         cat: 'work' },
  { tr: 'bta3allem',  ar: 'بتعلم',     en: 'I learn',           ex: 'bta3allem 3arabi',      exEn: 'I learn Arabic',           cat: 'work' },
  { tr: 'bedros',     ar: 'بدرس',      en: 'I study',           ex: 'bedros kell yoom',      exEn: 'I study every day',        cat: 'work' },
  { tr: 'bsa33ed',    ar: 'بساعد',     en: 'I help',            ex: 'bsa33ed s7aabi',        exEn: 'I help my friend',         cat: 'work' },
  { tr: 'beshteri',   ar: 'بشتري',     en: 'I buy',             ex: 'beshteri khDra',        exEn: 'I buy vegetables',         cat: 'work' },
  { tr: 'bbi3',       ar: 'ببيع',       en: 'I sell',            ex: 'bbi3 bel-souk',         exEn: 'I sell at the market',     cat: 'work' },
  // movement / location
  { tr: 'berja3',     ar: 'برجع',      en: 'I return / come back', ex: 'berja3 ba3d shway', exEn: 'I come back in a bit',     cat: 'movement' },
  { tr: 'bsaafar',    ar: 'بسافر',     en: 'I travel',          ex: 'bsaafar kell sane',     exEn: 'I travel every year',      cat: 'movement' },
  { tr: 'berkaD',     ar: 'بركض',      en: 'I run',             ex: 'berkaD kell yoom',      exEn: 'I run every day',          cat: 'movement' },
  { tr: 'bsuu2',      ar: 'بسوق',      en: 'I drive',           ex: 'bsuu2 bi-ssor3a',       exEn: 'I drive fast',             cat: 'movement' },
  // past tense samples
  { tr: 'akal',       ar: 'أكل',       en: 'he ate (past)',      ex: 'akal w raa7',           exEn: 'he ate and left',          cat: 'past' },
  { tr: 'sherbet',    ar: 'شربت',      en: 'I drank (past)',     ex: 'sherbet 2ahwe',         exEn: 'I drank coffee',           cat: 'past' },
  { tr: 'rooHet',     ar: 'روحت',      en: 'I went (past)',      ex: 'rooHet 3ala-Beirut',    exEn: 'I went to Beirut',         cat: 'past' },
  { tr: 'jit',        ar: 'جيت',       en: 'I came (past)',      ex: 'jit bi-ssaraa7a',       exEn: 'I came honestly',          cat: 'past' },
  { tr: '7akat',      ar: 'حكت',       en: 'she spoke (past)',   ex: '7akat m3o',             exEn: 'she spoke with him',       cat: 'past' },
  { tr: '7abbet',     ar: 'حبت',       en: 'she loved (past)',   ex: '7abbet el-msalsal',     exEn: 'she loved the series',     cat: 'past' },
  { tr: 'shtaghalt',  ar: 'شتغلت',     en: 'I worked (past)',    ex: 'shtaghalt halla2',      exEn: 'I worked just now',        cat: 'past' },
  { tr: 'tele3',      ar: 'طلع',       en: 'he went out (past)', ex: 'tele3 mbare7',          exEn: 'he went out yesterday',    cat: 'past' },
  { tr: 'ne2zal',     ar: 'نزل',       en: 'he went down (past)',ex: 'ne2zal 3al-balad',      exEn: 'he went to town',          cat: 'past' },
  { tr: '2aret',      ar: 'قرأت',      en: 'I read (past)',      ex: '2aret el-jarayde',      exEn: 'I read the newspaper',     cat: 'past' },
];

const VBC_DRILLS = [
  {
    q: 'What does "b7ki" mean?',
    opts: ['I listen', 'I write', 'I speak / I say', 'I read'],
    correct: 2,
    note: '"b7ki" = I speak/say; "bsem3" = I listen; "bektob" = I write; "be2ra" = I read'
  },
  {
    q: 'How do you say "I go to work" in Lebanese?',
    opts: ['biji 3al-shoghl', 'broo7 3al-shoghl', 'beshtaghel 3al-shoghl', 'berje3 3al-shoghl'],
    correct: 1,
    note: '"broo7 3al-shoghl" = I go to work; "biji" = I come; "berje3" = I return'
  },
  {
    q: 'What does "byenaam" mean?',
    opts: ['he eats', 'he drinks', 'he sleeps', 'he wakes up'],
    correct: 2,
    note: '"byenaam" = he sleeps; "byeekol" = he eats; "beshrab" = I drink; "betsaHHa" = she wakes up'
  },
  {
    q: 'How do you say "I love Lebanon" in Lebanese?',
    opts: ['bkrah lebnen', 'b7ebb lebnen', 'bfakker lebnen', 'beshoof lebnen'],
    correct: 1,
    note: '"b7ebb lebnen" = I love Lebanon; "bkrah" = I hate; "bfakker" = I think; "beshoof" = I watch'
  },
  {
    q: 'What does "rooHet" mean?',
    opts: ['I came', 'I went', 'I returned', 'I traveled'],
    correct: 1,
    note: '"rooHet" = I went (past); "jit" = I came; "berje3t" = I returned; "bsaafart" = I traveled'
  },
  {
    q: 'How do you say "I work in Beirut" in Lebanese?',
    opts: ['bedros bi-Beirut', 'bta3allem bi-Beirut', 'beshtaghel bi-Beirut', 'bsaafar la-Beirut'],
    correct: 2,
    note: '"beshtaghel bi-Beirut" = I work in Beirut; "bedros" = I study; "bta3allem" = I learn'
  },
  {
    q: 'What does "betsaHHa" mean?',
    opts: ['she sleeps', 'she eats', 'she wakes up', 'she goes out'],
    correct: 2,
    note: '"betsaHHa" = she wakes up; "byenaam" = he sleeps; "byeekol" = he eats; "betla3" = she goes out'
  },
  {
    q: 'How do you say "I buy vegetables" in Lebanese?',
    opts: ['bbi3 khDra', 'beshteri khDra', 'bsa33ed khDra', 'bektob khDra'],
    correct: 1,
    note: '"beshteri khDra" = I buy vegetables; "bbi3" = I sell; "bsa33ed" = I help; "bektob" = I write'
  },
  {
    q: 'What does "jit" mean?',
    opts: ['I went', 'I came', 'I traveled', 'I returned'],
    correct: 1,
    note: '"jit" = I came (past); "rooHet" = I went; "bsaafart" = I traveled; "berje3t" = I returned'
  },
  {
    q: 'How do you say "he comes tomorrow" in Lebanese?',
    opts: ['biji bukra', 'broo7 bukra', 'berje3 bukra', 'bsaafar bukra'],
    correct: 0,
    note: '"biji bukra" = he comes tomorrow; "broo7" = I go; "berje3" = I return; "bsaafar" = I travel'
  },
];

const VBC_TIPS = [
  { title: 'Lebanese present tense: "b-" prefix', body: 'Present/habitual verbs use "b-" prefix: "broo7" = I go, "byeekol" = he eats (b+y+verb for 3rd masc). "b7ki" = I speak, "betHaki" = you speak (f). Drop "b-" for imperative: "roo7!" = go! "7ki!" = speak! The "b-" also marks habitual vs. future.' },
  { title: 'Past tense: no prefix, suffix changes', body: 'Past tense drops "b-", adds suffix: "rooHet" = I went, "raa7" = he went, "raa7et" = she went. Pattern: base + -t (I/you m) / -ti (you f) / -na (we) / -tu (you pl). "akal" = he ate, "akalet" = she ate, "akalt" = I ate.' },
  { title: '"3am" for right now', body: '"3am" before verb = action happening right now: "3am baakol" = I am eating (right now). "3am byenaam" = he is sleeping (now). Compare: "byeekol ktir" = he eats a lot (habitual) vs "3am byeekol" = he is eating (now).' },
  { title: 'Key movement verbs: raa7/ije/tele3/ne2zal', body: '"Raa7/broo7" = go/went. "Ije/biji" = come/came. "Tele3/betla3" = go up or go out (out of a place). "Ne2zal/benzel" = go down or step out. Lebanese uses tele3/ne2zal very literally: "tele3 3al-jebel" = he went up the mountain; "ne2zal 3al-balad" = he went down to town.' },
  { title: 'Verb negation: "ma" before b-verbs', body: '"Ma" before verb negates it: "ma broo7" = I don\'t go. "ma byeekol" = he doesn\'t eat. "ma 7abbet" = she didn\'t love. Past: "ma rooHet" = I didn\'t go. Double negation is common: "ma b7ebb maa" = I don\'t like it at all (lit: I don\'t love it, water/nothing).' },
];

const VBC_ABOUT = 'Master the 40 most common Lebanese Arabic verbs in present and past tense, with real usage examples in sentences. Covers daily actions, communication, feelings, work, and movement verbs — essential for building conversational fluency.';
