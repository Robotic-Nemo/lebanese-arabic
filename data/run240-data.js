// Run #240 — Lebanese Education & School Coach (edu)
// School, subjects, classroom, studying, university — 40 items, MCQ drill, 5 tips

const EDU_WORDS = [
  // school settings
  { tr: 'madrasse',      ar: 'مدرسة',       en: 'school',                      cat: 'places' },
  { tr: 'jami3a',        ar: 'جامعة',        en: 'university / college',        cat: 'places' },
  { tr: 'Saff',          ar: 'صف',           en: 'classroom / class / grade',   cat: 'places' },
  { tr: 'maktabe',       ar: 'مكتبة',        en: 'library',                     cat: 'places' },
  { tr: 'mal3ab',        ar: 'ملعب',         en: 'playground / sports field',   cat: 'places' },
  { tr: 'idare',         ar: 'إدارة',        en: 'administration / principal\'s office', cat: 'places' },
  // people
  { tr: 'ustaaz',        ar: 'أستاذ',        en: 'teacher / professor (m)',     cat: 'people' },
  { tr: 'ustaaze',       ar: 'أستاذة',       en: 'teacher / professor (f)',     cat: 'people' },
  { tr: 'Talib',         ar: 'طالب',         en: 'student (m)',                 cat: 'people' },
  { tr: 'Talibe',        ar: 'طالبة',        en: 'student (f)',                 cat: 'people' },
  { tr: 'naZir',         ar: 'ناظر',         en: 'principal / school head',     cat: 'people' },
  // subjects
  { tr: '3arabi',        ar: 'عربي',         en: 'Arabic (subject)',            cat: 'subjects' },
  { tr: 'fransawi',      ar: 'فرنساوي',      en: 'French (subject)',            cat: 'subjects' },
  { tr: '2inglizi',      ar: 'إنجليزي',      en: 'English (subject)',           cat: 'subjects' },
  { tr: '7sab',          ar: 'حساب',         en: 'maths / arithmetic',          cat: 'subjects' },
  { tr: '3uluum',        ar: 'علوم',         en: 'science',                     cat: 'subjects' },
  { tr: 'taariikh',      ar: 'تاريخ',        en: 'history',                     cat: 'subjects' },
  { tr: 'jughraafia',    ar: 'جغرافيا',      en: 'geography',                   cat: 'subjects' },
  { tr: 'rasm',          ar: 'رسم',          en: 'drawing / art',               cat: 'subjects' },
  { tr: 'tarbiye',       ar: 'تربية',        en: 'PE / education class',        cat: 'subjects' },
  // classroom objects & actions
  { tr: 'ktaab',         ar: 'كتاب',         en: 'book',                        cat: 'classroom' },
  { tr: 'daftar',        ar: 'دفتر',         en: 'notebook / exercise book',    cat: 'classroom' },
  { tr: '2alam',         ar: 'قلم',          en: 'pen / pencil',                cat: 'classroom' },
  { tr: 'lau7',          ar: 'لوح',          en: 'blackboard / whiteboard',     cat: 'classroom' },
  { tr: 'wara2a',        ar: 'ورقة',         en: 'paper / sheet',               cat: 'classroom' },
  { tr: 'sabb-ware',     ar: 'سبّورة',       en: 'chalkboard',                  cat: 'classroom' },
  // studying & assessment
  { tr: 'dars',          ar: 'درس',          en: 'lesson / class',              cat: 'studying' },
  { tr: 'waajeb',        ar: 'واجب',         en: 'homework',                    cat: 'studying' },
  { tr: 'imti7aan',      ar: 'امتحان',       en: 'exam / test',                 cat: 'studying' },
  { tr: '3alaame',       ar: 'علامة',        en: 'grade / mark',                cat: 'studying' },
  { tr: 'naaja7',        ar: 'ناجح',         en: 'passing / successful',        cat: 'studying' },
  { tr: 'raasib',        ar: 'راسب',         en: 'failing / repeating year',    cat: 'studying' },
  { tr: 'beshtigli',     ar: 'بشتغلي',      en: 'I study hard (colloquial)',   cat: 'studying' },
  { tr: '7fize',         ar: 'حفظ',          en: 'memorize / learn by heart',   cat: 'studying' },
  // useful phrases
  { tr: 'shu fi bel dars?', ar: 'شو في بالدرس؟', en: 'what\'s in the lesson?', cat: 'phrases' },
  { tr: 'ma fhimet',     ar: 'ما فهمت',      en: 'I didn\'t understand',        cat: 'phrases' },
  { tr: '2i3ad',         ar: 'قعاد',         en: 'sit down (imperative)',        cat: 'phrases' },
  { tr: 'u2af',          ar: 'وقف',          en: 'stand up (imperative)',        cat: 'phrases' },
  { tr: 'fhimet?',       ar: 'فهمت؟',        en: 'did you understand?',         cat: 'phrases' },
  { tr: '3indi su2aal',  ar: 'عندي سؤال',   en: 'I have a question',           cat: 'phrases' },
];

const EDU_DRILLS = [
  {
    q: 'How do you say "homework" in Lebanese Arabic?',
    opts: ['dars', 'imti7aan', 'waajeb', '3alaame'],
    correct: 2,
    note: '"waajeb" = homework; "dars" = lesson; "imti7aan" = exam; "3alaame" = grade/mark'
  },
  {
    q: 'What does "ustaaz" mean?',
    opts: ['student (m)', 'principal', 'teacher / professor (m)', 'student (f)'],
    correct: 2,
    note: '"ustaaz" = teacher/professor (m); "ustaaze" (f); "Talib" = student (m); "naZir" = principal'
  },
  {
    q: 'How do you say "exam / test" in Lebanese Arabic?',
    opts: ['waajeb', 'dars', '3alaame', 'imti7aan'],
    correct: 3,
    note: '"imti7aan" = exam/test; "waajeb" = homework; "dars" = lesson; "3alaame" = grade'
  },
  {
    q: 'What does "ma fhimet" mean?',
    opts: ['I have a question', 'sit down', 'I didn\'t understand', 'did you understand?'],
    correct: 2,
    note: '"ma fhimet" = I didn\'t understand; "3indi su2aal" = I have a question; "2i3ad" = sit down; "fhimet?" = did you understand?'
  },
  {
    q: 'How do you say "notebook / exercise book" in Lebanese Arabic?',
    opts: ['ktaab', 'daftar', 'wara2a', '2alam'],
    correct: 1,
    note: '"daftar" = notebook; "ktaab" = book; "wara2a" = paper/sheet; "2alam" = pen/pencil'
  },
  {
    q: 'What does "naaja7" mean?',
    opts: ['failing', 'memorizing', 'grade', 'passing / successful'],
    correct: 3,
    note: '"naaja7" = passing/successful; "raasib" = failing/repeating; "3alaame" = grade; "7fize" = memorize'
  },
  {
    q: 'How do you say "history" in Lebanese Arabic?',
    opts: ['3uluum', 'jughraafia', 'taariikh', 'tarbiye'],
    correct: 2,
    note: '"taariikh" = history; "3uluum" = science; "jughraafia" = geography; "tarbiye" = PE/education'
  },
  {
    q: 'What does "jami3a" mean?',
    opts: ['school', 'library', 'classroom', 'university / college'],
    correct: 3,
    note: '"jami3a" = university/college; "madrasse" = school; "maktabe" = library; "Saff" = classroom'
  },
  {
    q: 'How do you say "grade / mark" in Lebanese Arabic?',
    opts: ['imti7aan', '3alaame', 'naaja7', 'dars'],
    correct: 1,
    note: '"3alaame" = grade/mark; "imti7aan" = exam; "naaja7" = passing; "dars" = lesson'
  },
  {
    q: 'What does "2alam" mean?',
    opts: ['book', 'notebook', 'paper / sheet', 'pen / pencil'],
    correct: 3,
    note: '"2alam" = pen/pencil; "ktaab" = book; "daftar" = notebook; "wara2a" = paper'
  },
];

const EDU_TIPS = [
  { title: 'Lebanese school system overview', body: 'Lebanon has a trilingual education system — most private schools teach in Arabic + French or Arabic + English, with the third language starting early. "3arabi" (Arabic), "fransawi" (French), "2inglizi" (English) are core subjects. Public schools are Arabic-medium. "Jami3a" (university) often teaches entirely in French or English. Knowing this explains why educated Lebanese freely mix all three languages.' },
  { title: '"Ustaaz" — the all-purpose respectful title', body: '"Ustaaz" (m) / "ustaaze" (f) is used not just for teachers but as a respectful title for any educated or professional person. "Shu ya ustaaz?" = Hey professor/sir. Like saying "Doc" in English for any respected figure. Students use it constantly. Universities: "duktur" (doctor/PhD) or "ustaaz" both work. Don\'t confuse with "mu3allim" (teacher, more formal/MSA) — Lebanese use "ustaaz" in daily speech.' },
  { title: 'Exam culture: "imti7aan" stress', body: 'Lebanese exam culture is intense. "Imti7aanat" (exams) dominate student life. Key phrases: "3am bktib imti7aan" = I\'m taking an exam. "Naja7t bel imti7aan!" = I passed the exam! "Rasibt" = I failed. "3alaamt-i mni7a" = my grades are good. The Lebanese Baccalaureate ("baka") is the national high school exit exam — a huge deal that determines university access.' },
  { title: '"7fize" vs "fhim" — memorize vs understand', body: 'Lebanese education historically emphasized "7fize" (memorizing by heart). "7fiz el-dars" = memorize the lesson. "Ta3 7fiz" = go memorize it! But "fhim" (understand) is the real goal: "laazen tfham, mesh bass t7fiz" = you need to understand, not just memorize. "Fhimt?" = did you get it? "Ma fhimet shi" = I didn\'t get anything. This tension between rote learning and understanding is a cultural conversation point.' },
  { title: 'Classroom commands you\'ll hear', body: '"U2af!" = stand up! "2i3ad!" = sit down! "Uskut!" = be quiet/shut up! "Ktibu!" = write! (pl) "I2ra!" = read! (m sg) "I2ri!" = read! (f sg) "Fat7u el-ktaab!" = open the book! (pl) "Sakru!" = close! (pl) These are the imperative forms teachers bark. Knowing them helps you understand classroom dynamics in Lebanese media, movies, and if you visit schools.' },
];

const EDU_ABOUT = 'Master Lebanese Arabic education vocabulary — school settings, subjects, classroom objects, studying terms, and essential classroom phrases. Trilingual Lebanese schools blend Arabic, French, and English vocabulary, making this a key domain for understanding educated Lebanese speech and culture.';
