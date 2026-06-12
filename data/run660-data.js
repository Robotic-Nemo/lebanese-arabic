// R660 — NEW FEATURE: Lebanese School & Education Life (sch)

const SCH_CATS = [
  { id: 'people', label: '👨‍🏫 People & Roles' },
  { id: 'subjects', label: '📚 Subjects & Classes' },
  { id: 'school', label: '🏫 School Life' },
  { id: 'phrases', label: '💬 Student Phrases' }
];

const SCH_WORDS = [
  // People & roles
  { ar: 'ustaaz', tr: 'ustaaz', en: 'male teacher / professor', cat: 'people' },
  { ar: 'ustaaze', tr: 'ustaaze', en: 'female teacher / professor', cat: 'people' },
  { ar: 'tilmiiz', tr: 'tilmiiz', en: 'male student (school age)', cat: 'people' },
  { ar: 'tilmiize', tr: 'tilmiize', en: 'female student (school age)', cat: 'people' },
  { ar: 'Talib', tr: 'Talib', en: 'male university student', cat: 'people' },
  { ar: 'Talibe', tr: 'Talibe', en: 'female university student', cat: 'people' },
  { ar: 'naaZir', tr: 'naaZir', en: 'school principal (male)', cat: 'people' },
  // Subjects & classes
  { ar: '7isaab', tr: '7isaab', en: 'math / arithmetic', cat: 'subjects' },
  { ar: '3arabye', tr: '3arabye', en: 'Arabic language class', cat: 'subjects' },
  { ar: 'fransaawi', tr: 'fransaawi', en: 'French class', cat: 'subjects' },
  { ar: 'injliizi', tr: 'injliizi', en: 'English class', cat: 'subjects' },
  { ar: '3ilm el-7ayawaan', tr: '3ilm el-7ayawaan', en: 'biology / zoology', cat: 'subjects' },
  { ar: 'jiografia', tr: 'jiografia', en: 'geography', cat: 'subjects' },
  { ar: 'taarikh', tr: 'taarikh', en: 'history', cat: 'subjects' },
  // School life
  { ar: 'imti7aan', tr: 'imti7aan', en: 'exam / test', cat: 'school' },
  { ar: 'waajiib', tr: 'waajiib', en: 'homework', cat: 'school' },
  { ar: 'faraagh', tr: 'faraagh', en: 'free period / recess', cat: 'school' },
  { ar: 'jaras', tr: 'jaras', en: 'school bell', cat: 'school' },
  { ar: 'saaff', tr: 'saaff', en: 'classroom / grade year', cat: 'school' },
  { ar: 'madrase', tr: 'madrase', en: 'school', cat: 'school' },
  { ar: 'jaam3a', tr: 'jaam3a', en: 'university', cat: 'school' },
  { ar: 'SaHn', tr: 'SaHn', en: 'school courtyard / playground', cat: 'school' },
  // Student phrases
  { ar: 'riHt tDayyib b-imti7aan', tr: 'riHt tDayyib b-imti7aan', en: 'I bombed the exam', cat: 'phrases' },
  { ar: 'najaHt!', tr: 'najaHt!', en: 'I passed!', cat: 'phrases' },
  { ar: 'raasabt', tr: 'raasabt', en: 'I failed (the grade)', cat: 'phrases' },
  { ar: '3indna imti7aan bukra', tr: '3indna imti7aan bukra', en: 'we have an exam tomorrow', cat: 'phrases' },
  { ar: 'ma 3irift 7all', tr: 'ma 3irift 7all', en: 'I couldn\'t solve it', cat: 'phrases' },
  { ar: 'ustaaz gheDaan', tr: 'ustaaz gheDaan', en: 'the teacher is angry', cat: 'phrases' }
];

const SCH_DRILLS = [
  { q: 'What is "ustaaz"?', opts: ['student','principal','male teacher','janitor'], ans: 2 },
  { q: 'What is "imti7aan"?', opts: ['homework','exam','recess','textbook'], ans: 1 },
  { q: 'What is "waajiib"?', opts: ['exam','bell','homework','subject'], ans: 2 },
  { q: 'What is "jaam3a"?', opts: ['school','university','classroom','library'], ans: 1 },
  { q: 'What is "madrase"?', opts: ['teacher','university','school','exam'], ans: 2 },
  { q: 'What is "7isaab"?', opts: ['history','geography','math','biology'], ans: 2 },
  { q: 'What is "taarikh"?', opts: ['geography','math','French','history'], ans: 3 },
  { q: 'What is "jaras"?', opts: ['recess','school bell','classroom','teacher'], ans: 1 },
  { q: 'What is "saaff"?', opts: ['exam','homework','classroom/grade','recess'], ans: 2 },
  { q: '"najaHt!" means?', opts: ['I failed','I studied','I passed!','I forgot'], ans: 2 },
  { q: '"raasabt" means?', opts: ['I passed','I failed','I studied hard','I was absent'], ans: 1 },
  { q: '"ustaaz gheDaan" means?', opts: ['the teacher is late','the teacher is happy','the teacher is angry','the teacher is sick'], ans: 2 },
  { q: '"faraagh" in school context means?', opts: ['classroom','homework','recess/free period','exam period'], ans: 2 },
  { q: 'What is "Talib"?', opts: ['school-age student','university student','teacher','principal'], ans: 1 },
  { q: '"3indna imti7aan bukra" — when is the exam?', opts: ['today','next week','tomorrow','this morning'], ans: 2 }
];

const SCH_TIPS = [
  { title: 'Three-language schools', body: 'Lebanese private schools teach in Arabic, French, AND English simultaneously. A student might have math in French, Arabic literature in Arabic, and science in English — all in one day. This trilingual system is unique and creates the Lebanese accent in all three languages.' },
  { title: 'Brevet & Baccalaureate', body: 'Lebanese students face two major national exams: the "Brevet" (grade 9, called "shahaadet l-mutawasseTa") and the "Bac" (grade 12, called "shahaadet l-bakaloria"). Both are high-stakes. Failing the Bac is a family event — not just personal.' },
  { title: 'Ustaaz as title of respect', body: '"Ustaaz/Ustaaze" is used beyond teachers — any educated professional may be addressed this way. A lawyer, engineer, or journalist might be called "ustaaz." It signals respect for learning. Never call a teacher by first name in Lebanese culture.' },
  { title: 'Waajiib culture', body: 'Lebanese parents take "waajiib" (homework) extremely seriously. Private tutors ("mu3allem khusousi") are common even in primary school. Afternoon tutoring sessions after school are the norm in many families, especially before exam season.' },
  { title: 'School bell & timetable', body: '"Jaras" triggers instant movement — students don\'t wait for teacher dismissal like in some cultures. "SaHn" (courtyard) becomes chaotic between periods. Lebanese school culture is loud, social, and relationship-focused — teachers often become lifelong mentors.' },
  { title: 'NajaHt vs raasabt', body: '"NajaHt!" (I passed!) is announced with genuine joy — it\'s a major life event. "Raasabt" (I failed) carries deep shame, affecting the whole family. Lebanese academic pressure is intense: university acceptance determines social standing and career prospects.' }
];
