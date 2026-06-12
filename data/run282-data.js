// Run #282 — Lebanese School & Education Coach (scl)
// School subjects, places, people, study verbs, education phrases — 40 items, MCQ drill, 5 tips

const SCL_WORDS = [
  // subjects
  { tr: 'Hisaab',         ar: 'حساب',          en: 'math / arithmetic',               cat: 'subjects' },
  { tr: '3uluun',         ar: 'علوم',           en: 'science',                         cat: 'subjects' },
  { tr: 'taarikh',        ar: 'تاريخ',          en: 'history',                         cat: 'subjects' },
  { tr: 'juughraafiye',   ar: 'جغرافيا',        en: 'geography',                       cat: 'subjects' },
  { tr: 'luugha',         ar: 'لغة',            en: 'language',                        cat: 'subjects' },
  { tr: 'adab',           ar: 'أدب',            en: 'literature',                      cat: 'subjects' },
  { tr: 'rasm',           ar: 'رسم',            en: 'art / drawing',                   cat: 'subjects' },
  { tr: 'tarbiye badaniye', ar: 'تربية بدنية',  en: 'physical education / PE',         cat: 'subjects' },
  // school places
  { tr: 'madrasa',        ar: 'مدرسة',          en: 'school',                          cat: 'places' },
  { tr: 'jaam3a',         ar: 'جامعة',          en: 'university',                      cat: 'places' },
  { tr: 'Saff',           ar: 'صف',             en: 'classroom / grade',               cat: 'places' },
  { tr: 'maktabe',        ar: 'مكتبة',          en: 'library',                         cat: 'places' },
  { tr: 'ملعب',           ar: 'ملعب',           en: 'playground / sports field',       cat: 'places' },
  { tr: 'saaha',          ar: 'ساحة',           en: 'school yard / courtyard',         cat: 'places' },
  // people
  { tr: 'ustaz',          ar: 'أستاذ',          en: 'teacher / professor (m)',         cat: 'people' },
  { tr: 'ustaze',         ar: 'أستاذة',         en: 'teacher / professor (f)',         cat: 'people' },
  { tr: 'Taalib',         ar: 'طالب',           en: 'student (m)',                     cat: 'people' },
  { tr: 'Taalibe',        ar: 'طالبة',          en: 'student (f)',                     cat: 'people' },
  { tr: 'mudiir',         ar: 'مدير',           en: 'principal / director',            cat: 'people' },
  { tr: 'zamiil l-Saff',  ar: 'زميل الصف',      en: 'classmate',                       cat: 'people' },
  // study verbs
  { tr: 'daras',          ar: 'درس',            en: 'to study',                        cat: 'verbs' },
  { tr: '2ara',           ar: 'قرأ',            en: 'to read',                         cat: 'verbs' },
  { tr: 'katab',          ar: 'كتب',            en: 'to write',                        cat: 'verbs' },
  { tr: 'fihim',          ar: 'فهم',            en: 'to understand',                   cat: 'verbs' },
  { tr: 'najaH',          ar: 'نجح',            en: 'to pass / succeed',               cat: 'verbs' },
  { tr: 'rasab',          ar: 'رسب',            en: 'to fail / repeat a year',         cat: 'verbs' },
  { tr: '7ifaZ',          ar: 'حفظ',            en: 'to memorize / know by heart',     cat: 'verbs' },
  { tr: 'raajar3',        ar: 'راجع',           en: 'to revise / review',              cat: 'verbs' },
  // education phrases
  { tr: 'maa3ak wara2?',  ar: 'معاك ورق؟',      en: 'do you have paper?',              cat: 'phrases' },
  { tr: 'maa3ak 2alam?',  ar: 'معاك قلم؟',      en: 'do you have a pen?',              cat: 'phrases' },
  { tr: 'ma fhimt',       ar: 'ما فهمت',        en: 'I didn\'t understand',            cat: 'phrases' },
  { tr: '3id l-Dars',     ar: 'عيد الدرس',      en: 'repeat the lesson',               cat: 'phrases' },
  { tr: 'waajib',         ar: 'واجب',           en: 'homework / duty',                 cat: 'phrases' },
  { tr: 'imtihaan',       ar: 'امتحان',         en: 'exam / test',                     cat: 'phrases' },
  { tr: '3allaame',       ar: 'علامة',          en: 'grade / mark',                    cat: 'phrases' },
  { tr: 'shu 3allaamtak?',ar: 'شو علامتك؟',     en: 'what\'s your grade?',             cat: 'phrases' },
  { tr: '2adeem wara2',   ar: 'قديم ورق',       en: 'old notes / past paper',          cat: 'phrases' },
  { tr: 'ijaze l-Seif',   ar: 'إجازة الصيف',    en: 'summer vacation',                 cat: 'phrases' },
  { tr: 'laff 3a l-ustaz',ar: 'لفّ عا الأستاذ',  en: 'go to the teacher / approach teacher', cat: 'phrases' },
  { tr: 'fi imtihaan bukra', ar: 'في امتحان بكرا', en: 'there\'s an exam tomorrow',    cat: 'phrases' },
];

const SCL_DRILLS = [
  {
    q: 'How do you say "I didn\'t understand" in Lebanese Arabic?',
    opts: ['ma 2arait', 'ma najaHt', 'ma fhimt', 'ma 7ifaZt'],
    correct: 2,
    note: '"ma fhimt" = I didn\'t understand (ما فهمت — fihim = to understand). Essential phrase for language learners! Female form: same "ma fhimt". Asking teacher to repeat: "3id l-Dars" (repeat the lesson) or "ma fhimt, mniH t3id?" (I didn\'t understand, can you repeat?). "Fhimt?" = did you understand? "Ah, fhimt" = yes, I understood.'
  },
  {
    q: 'What does "imtihaan" mean?',
    opts: ['homework', 'grade', 'classroom', 'exam / test'],
    correct: 3,
    note: '"imtihaan" = exam/test (امتحان). Lebanese school culture: exams are high-stakes social events. "Imtihaan rasmi" = official exam (like baccalaureate). "Fi imtihaan bukra" = there\'s an exam tomorrow — classic excuse for everything. "Nasabt fil-imtihaan" = I cheated on the exam (common boast). Lebanese university entrance is competitive — "imtihaan l-jaam3a" determines fate.'
  },
  {
    q: 'How do you say "to memorize / know by heart" in Lebanese Arabic?',
    opts: ['daras', 'fihim', '7ifaZ', 'raajar3'],
    correct: 2,
    note: '"7ifaZ" = to memorize/know by heart (حفظ). Lebanese education heavily emphasizes memorization over comprehension. "7afaZt l-dars" = I memorized the lesson. "7afaZt l-Qur\'an" = memorized the Quran (prestigious achievement). "7ifaZ 3an DHahar kalb" = memorized by heart (idiom — literally "by the back of a dog"). Contrast: "fihim" (understand) vs "7ifaZ" (memorize) — education reformers push for more of the former.'
  },
  {
    q: 'What does "ustaz" mean?',
    opts: ['student', 'principal', 'teacher / professor (m)', 'classmate'],
    correct: 2,
    note: '"ustaz" = teacher/professor/Mr. (أستاذ). One of the most used respectful titles in Lebanon. Used not just for teachers but for any educated man: "ustaz [name]" = Mr./sir. Female: "ustaze". Plural: "asaatze". "Ustaz" also used to politely address strangers: "ustaz, wein l-maHaTTa?" = sir, where\'s the station? An all-purpose respectful form of address.'
  },
  {
    q: 'How do you say "to fail / repeat a year" in Lebanese Arabic?',
    opts: ['najaH', 'rasab', 'daras', 'raajar3'],
    correct: 1,
    note: '"rasab" = to fail/repeat a year (رسب). Antonym: "najaH" = to pass/succeed. Lebanese education pressure: failing (rasab) is a social stigma — "rasab bil-imtihaan" (failed the exam). "rasab bi-senne" = repeated a year. Parents react strongly: "3am tjarrib trusub?" (are you trying to fail?). The flip side: "najaH bi-miyyeh" = passed with 100 — bragging rights.'
  },
  {
    q: 'What is "waajib" in a school context?',
    opts: ['grade', 'exam', 'homework / duty', 'subject'],
    correct: 2,
    note: '"waajib" = homework/duty (واجب — from وجب = to be obligatory). "3andak waajib?" = do you have homework? The word "waajib" means both homework and general duty/obligation — "waajibna" = our duty. Lebanese parents: "khallaS waajibak 2abl ma trou7 tla3ab" (finish your homework before you go play). "waajib 3arabiyye" = Arabic homework (most dreaded).'
  },
  {
    q: 'How do you say "university" in Lebanese Arabic?',
    opts: ['madrasa', 'Saff', 'maktabe', 'jaam3a'],
    correct: 3,
    note: '"jaam3a" = university (جامعة — from جمع = to gather). Lebanon has the highest density of universities per capita in the Arab world. Major ones: AUB (American University of Beirut — 1866), LAU (Lebanese American University), USJ (Université Saint-Joseph, French), LU (Lebanese University, public). "raa7 3al-jaam3a" = went to university. University prestige is central to Lebanese social status.'
  },
  {
    q: 'How do you say "what\'s your grade?" in Lebanese Arabic?',
    opts: ['kiif imtihaanak?', 'shu 3allaamtak?', 'najaHt?', 'shu darasit?'],
    correct: 1,
    note: '"shu 3allaamtak?" = what\'s your grade? (شو علامتك؟ — 3allaame = grade/mark). Lebanese grading: typically out of 20 (not 100). "8esht 3al-3eshriin" = I got 20/20 (perfect). "3allaamit bi-lHisaab ktir mniH" = my math grade is very good. Asking after exams: "shu 3allaamtak bil-imtihaan?" — very common conversation topic in Lebanese schools.'
  },
  {
    q: 'What does "najaH" mean?',
    opts: ['to study', 'to read', 'to fail', 'to pass / succeed'],
    correct: 3,
    note: '"najaH" = to pass/succeed (نجح). Lebanese success expression: "najaHt!" = I passed! Major family event — especially baccalaureate results. "najaH bil-bakalourya" = passed the baccalaureate (Lebanese official school-leaving exam). Celebrations: "mabrook 3an-najaH!" = congratulations on passing! "najaH b-imtiyaaz" = passed with distinction. The pressure around "najaH" is intense — whole family cares.'
  },
  {
    q: 'How do you say "summer vacation" in Lebanese Arabic?',
    opts: ['ijaze l-Seif', 'waajib l-Seif', 'imtihaan l-Seif', 'daras l-Seif'],
    correct: 0,
    note: '"ijaze l-Seif" = summer vacation (إجازة الصيف). Lebanese school year: October-June. Three months off in summer. "ijaze" = vacation/leave. "Yalla, ijaze l-Seif!" = the summer vacation is here, let\'s go! Summer activities: beach, mountains, travel. Many Lebanese families use summer for visits to family villages ("Day3a"). "shwen 3am ta3mal bil-ijaze?" = what are you doing during vacation?'
  },
];

const SCL_TIPS = [
  { title: 'Lebanese education system — schools and pressure', body: 'Lebanon\'s school system is complex: public ("madaaris 3aamme") and private ("madaaris khaasse") — private dominates, especially religious schools (Jesuit, Maronite, Sunni, etc.). Three streams: Arabic, French, English. The Baccalaureate ("bakalourya") exam at grade 12 is a national milestone — results published publicly. Intense family pressure: "Toul 3omrak bta3mil shu ma biddak — bas najaH bil-bakalourya" (do whatever you want in life — but pass the baccalaureate). Pre-university cramming culture: "dawr" = tutoring session, a massive industry.' },
  { title: 'Lebanese school vocabulary in daily conversation', body: '"Maa3ak 2alam?" (do you have a pen?) — the universal opener for borrowing. "3andak waajib?" (do you have homework?) — daily afternoon question. Report card time: "jeeb l-keshef" (bring the report card) — parents\' command. School schedule: "Saff awwal" = first grade, runs to "Saff tne3sh" = 12th grade. "Tanwii3" = diversification (choosing science/literature/economics track in high school). "Bakalourya 2" (sciences) > "Bakalourya 1" (humanities) in perceived prestige.' },
  { title: 'Lebanese universities — the prestige hierarchy', body: 'AUB (American University of Beirut) is the most prestigious — founded 1866, US-accredited, instruction in English. LAU (Lebanese American University) is close second. USJ (Université Saint-Joseph) for French track. "Jaam3it Loubnan" (Lebanese University) = public, more accessible, less resourced post-crisis. Post-2019 crisis: many top students emigrated for university — brain drain accelerated. "Bro7 dros bara" (I\'ll study abroad) is now a common goal. Lebanese university degree traditionally = guaranteed middle-class status, now less reliable.' },
  { title: 'The three-language Lebanese school system', body: 'Lebanese schools operate in three languages simultaneously — a unique system. Arabic: official language, compulsory. French: colonial legacy (1920 French Mandate), required in most private schools. English: global language, growing preference. Result: Lebanese students study math in French, science in English, literature in Arabic — and switch languages mid-thought ("code-switching"). "Shu bi7ki?" "Wa2af 3a l-ta7ta l-2alam" = what is he saying? "Stand up and put down the pen" — mixing languages in class is normal. Lebanese students often think in multiple languages simultaneously.' },
  { title: 'Study culture and academic expressions', body: '"Raaji3 drous" = studying/revising (literally "reviewing lessons"). Pre-exam cramming: "sahrit" = all-nighter, worn as badge of honor. "Shi2it min l-drous" = fed up with studying. Exam cheating ("nasb" or "ghashe") is culturally normalized in some schools — elaborate systems involving notes written on hands, desks, passing papers. "7iSSa" = class period (usually 45 min). "Mra7 7adarlak mwaa3ad" = I\'ll prepare your topics (private tutoring). Lebanon\'s exam obsession: "shu 3allamtak?" is asked of students from age 6 to 22.' },
];

const SCL_ABOUT = 'Master Lebanese Arabic for school and education — subjects, places, people, study verbs, and academic phrases. Essential for understanding Lebanese school culture, helping kids with homework, and navigating academic conversations.';
