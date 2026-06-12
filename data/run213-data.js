// Run #213 — Lebanese Daily Routines Coach (drt)
// Morning / daytime / evening / weekend routines, 40 phrases, drill MCQs

const DRT_PHRASES = [
  // morning
  { tr: 'fi2it',          ar: 'فقيت',          en: 'I woke up',               cat: 'morning' },
  { tr: 'nhi2t',          ar: 'نهيت',          en: 'I got out of bed',         cat: 'morning' },
  { tr: 'sta7amit',       ar: 'استحميت',        en: 'I showered',              cat: 'morning' },
  { tr: 'labast',         ar: 'لبست',          en: 'I got dressed',            cat: 'morning' },
  { tr: 'ftar',           ar: 'فطر',           en: 'ate breakfast (he)',        cat: 'morning' },
  { tr: 'shribt ahwe',    ar: 'شربت قهوة',     en: 'I drank coffee',           cat: 'morning' },
  { tr: 'shribt shai',    ar: 'شربت شاي',      en: 'I drank tea',              cat: 'morning' },
  { tr: 'mshit 3a shghl', ar: 'مشيت ع شغل',   en: 'I went to work',           cat: 'morning' },
  // daytime
  { tr: 'bi-shghel',      ar: 'بشغل',          en: 'I work (habitual)',         cat: 'daytime' },
  { tr: 'ta3addit',       ar: 'تعددت',         en: 'I had lunch',              cat: 'daytime' },
  { tr: 'rje3t 3al bet',  ar: 'رجعت عالبيت',  en: 'I came back home',          cat: 'daytime' },
  { tr: '3mel 2eda',      ar: 'عمل قيلة',      en: 'took a nap (he)',           cat: 'daytime' },
  { tr: 'raddeit',        ar: 'ردديت',         en: 'I called back',             cat: 'daytime' },
  { tr: 'la7a2t maw3id',  ar: 'لحقت موعد',    en: 'I made it to my appointment', cat: 'daytime' },
  { tr: 'shtiret shi',    ar: 'اشتريت شي',     en: 'I bought something',        cat: 'daytime' },
  { tr: 'w2afet 3a servis', ar: 'وقفت ع سرفيس', en: 'I waited for a servis',   cat: 'daytime' },
  // evening
  { tr: '3ashit',         ar: 'عشيت',          en: 'I had dinner',             cat: 'evening' },
  { tr: 'stra7it',        ar: 'سترحت',         en: 'I rested',                 cat: 'evening' },
  { tr: 'tfarrajit 3a TV', ar: 'تفرجيت عالتيفي', en: 'I watched TV',           cat: 'evening' },
  { tr: 'iza3 ma3 aswede', ar: 'إزعج مع أصحابه', en: 'hung out with friends (he)', cat: 'evening' },
  { tr: 'nimmet badri',   ar: 'نمت بدري',      en: 'I slept early',            cat: 'evening' },
  { tr: 'nimmet mta2akhir', ar: 'نمت متأخر',  en: 'I slept late',              cat: 'evening' },
  { tr: 'kawaset shi',    ar: 'قاوست شي',      en: 'I argued about something',  cat: 'evening' },
  { tr: 'farrasht snani', ar: 'فرشت سناني',    en: 'I brushed my teeth',        cat: 'evening' },
  // weekend
  { tr: 'bet n7na',       ar: 'بيت نحنا',      en: 'our home / our house',      cat: 'weekend' },
  { tr: 'mshina 3al ba7er', ar: 'مشينا عالبحر', en: 'we went to the sea',      cat: 'weekend' },
  { tr: 'zert 2ahel',     ar: 'زرت أهل',       en: 'I visited family',          cat: 'weekend' },
  { tr: 'tghade 3and ahlo', ar: 'تغدّى عند أهلو', en: 'he lunched at his family', cat: 'weekend' },
  { tr: 'mshina 3a souk', ar: 'مشينا عالسوق',  en: 'we went to the market',     cat: 'weekend' },
  { tr: 'etla3na barra',  ar: 'طلعنا برا',     en: 'we went out',               cat: 'weekend' },
  { tr: 'le3et bil bet',  ar: 'لعبت بالبيت',  en: 'I played at home',          cat: 'weekend' },
  { tr: 'naddafit',       ar: 'نددفت',         en: 'I cleaned / tidied',        cat: 'weekend' },
  // common time markers
  { tr: 'bekra',          ar: 'بكرا',          en: 'tomorrow',                  cat: 'time' },
  { tr: 'mbari7',         ar: 'مبارح',         en: 'yesterday',                 cat: 'time' },
  { tr: 'halla2',         ar: 'هلأ',           en: 'now',                       cat: 'time' },
  { tr: 'ba3dein',        ar: 'بعدين',         en: 'later / afterwards',         cat: 'time' },
  { tr: '2abel shwayye',  ar: 'قبل شوية',      en: 'a little while ago',         cat: 'time' },
  { tr: 'kil yom',        ar: 'كل يوم',        en: 'every day',                 cat: 'time' },
  { tr: 'bi-3ade',        ar: 'بعادة',         en: 'usually / normally',         cat: 'time' },
  { tr: 'bi-sura3',       ar: 'بسرعة',         en: 'quickly / hurry up',         cat: 'time' },
];

const DRT_DRILLS = [
  {
    q: 'How do you say "I woke up" in Lebanese Arabic?',
    opts: ['fi2it', 'nimmet', 'sta7amit', 'labast'],
    correct: 0,
    note: '"fi2it" = I woke up; "nimmet" = I slept; "sta7amit" = I showered'
  },
  {
    q: 'What does "shribt ahwe" mean?',
    opts: ['I ate breakfast', 'I drank coffee', 'I went to work', 'I got dressed'],
    correct: 1,
    note: '"shribt ahwe" = I drank coffee; "ftar" = ate breakfast; "mshit 3a shghl" = went to work'
  },
  {
    q: 'How do you say "I came back home" in Lebanese Arabic?',
    opts: ['mshit 3a shghl', 'rje3t 3al bet', 'zert 2ahel', 'etla3na barra'],
    correct: 1,
    note: '"rje3t 3al bet" = I came back home; "mshit 3a shghl" = went to work'
  },
  {
    q: 'What does "ba3dein" mean?',
    opts: ['yesterday', 'now', 'later / afterwards', 'every day'],
    correct: 2,
    note: '"ba3dein" = later; "halla2" = now; "mbari7" = yesterday; "kil yom" = every day'
  },
  {
    q: 'How do you say "we went out" in Lebanese Arabic?',
    opts: ['etla3na barra', 'mshina 3al ba7er', 'rje3t 3al bet', 'nimmet badri'],
    correct: 0,
    note: '"etla3na barra" = we went out; "mshina 3al ba7er" = we went to the sea'
  },
  {
    q: 'What does "halla2" mean?',
    opts: ['yesterday', 'tomorrow', 'now', 'usually'],
    correct: 2,
    note: '"halla2" = now; "mbari7" = yesterday; "bekra" = tomorrow; "bi-3ade" = usually'
  },
  {
    q: 'How do you say "I brushed my teeth" in Lebanese Arabic?',
    opts: ['sta7amit', 'farrasht snani', 'naddafit', 'nimmet badri'],
    correct: 1,
    note: '"farrasht snani" = I brushed my teeth; "sta7amit" = I showered; "naddafit" = I cleaned'
  },
  {
    q: 'What does "bi-3ade" mean?',
    opts: ['quickly', 'every day', 'later', 'usually / normally'],
    correct: 3,
    note: '"bi-3ade" = usually; "bi-sura3" = quickly; "kil yom" = every day; "ba3dein" = later'
  },
  {
    q: 'How do you say "I visited family" in Lebanese Arabic?',
    opts: ['zert 2ahel', 'tghade 3and ahlo', 'mshina 3a souk', 'etla3na barra'],
    correct: 0,
    note: '"zert 2ahel" = I visited family; "tghade 3and ahlo" = he lunched at his family'
  },
  {
    q: 'What does "mbari7" mean?',
    opts: ['tomorrow', 'now', 'yesterday', 'later'],
    correct: 2,
    note: '"mbari7" = yesterday; "bekra" = tomorrow; "halla2" = now; "ba3dein" = later'
  },
];

const DRT_TIPS = [
  { title: 'Lebanese past tense suffix', body: 'Most I-did verbs end in "-it" or "-t": "fi2it" (woke up), "sta7amit" (showered), "labast" (dressed), "ta3addit" (had lunch). It\'s the Lebanese colloquial past of the first person.' },
  { title: '"Mshi" vs "Rje3"', body: '"Mshi" (go/went) and "rje3" (come back/return) are the two core movement verbs in routines. "Mshit 3a shghl" = went to work; "rje3t 3al bet" = came back home. Always followed by direction.' },
  { title: 'Time markers in Lebanese', body: '"Halla2" (now) → "ba3dein" (later) → "bekra" (tomorrow). Past: "mbari7" (yesterday), "2abel shwayye" (a little while ago). Frequency: "kil yom" (every day), "bi-3ade" (usually).' },
  { title: '"3a" shortening', body: 'Lebanese constantly shortens "3ala" (on/to) to just "3a": "mshit 3a shghl" (went to work), "rje3t 3al bet" (came back home — 3a + el = 3al). This is natural spoken Lebanese, not a typo.' },
  { title: 'Masculine vs feminine past verbs', body: 'Past tense verbs change for gender: "nimm" → male: "nimmet" (I slept), female: "nimmet" (same! 1st person is the same). But 3rd person: "naam" (he slept) vs "naamet" (she slept). Context tells you the gender in daily speech.' },
];

const DRT_ABOUT = 'Master Lebanese Arabic daily routine vocabulary — from waking up to bedtime. Covers morning rituals, work day phrases, evening wind-down, weekend outings, and essential time markers used in everyday Lebanese conversation.';
