// R570 — NEW FEATURE: Lebanese School & University Life coach (prefix: skl)

const SKL_WORDS = [
  // school system
  { ar: 'البكالوريا', tr: 'el-bakkaaloorya', en: 'Lebanese baccalaureate (final high school exams)', cat: 'system' },
  { ar: 'الكونكور', tr: 'el-konkuur', en: 'university entrance exam (from French concours)', cat: 'system' },
  { ar: 'الجامعة', tr: 'el-jaamaa', en: 'university', cat: 'system' },
  { ar: 'المعهد', tr: 'el-ma3had', en: 'institute / college', cat: 'system' },
  { ar: 'الدورة', tr: 'ed-dawra', en: 'exam session / semester', cat: 'system' },
  { ar: 'الكريدت', tr: 'el-kreedt', en: 'credit hour', cat: 'system' },
  { ar: 'الترانسكريبت', tr: 'et-traanskreept', en: 'academic transcript', cat: 'system' },
  // people
  { ar: 'البروف', tr: 'el-bruuf', en: 'the professor (from French)', cat: 'people' },
  { ar: 'الأستاذ', tr: 'el-ustaaz', en: 'the teacher / professor', cat: 'people' },
  { ar: 'الربع', tr: 'er-rub3', en: 'the crew / friend group', cat: 'people' },
  { ar: 'رفيق الدراسة', tr: 'rafiiq ed-diraase', en: 'study buddy / classmate', cat: 'people' },
  // exam culture
  { ar: 'غشّ', tr: 'ghash', en: 'cheating on exams', cat: 'exams' },
  { ar: 'عم بتغشّش؟', tr: '3am btghash?', en: 'are you cheating?', cat: 'exams' },
  { ar: 'امتحانات', tr: 'imti7aanaat', en: 'exams', cat: 'exams' },
  { ar: 'دوّر على طورة', tr: 'dawwar 3a Tawre', en: 'found a workaround / figured it out', cat: 'exams' },
  { ar: 'رح يضرب', tr: 'ra7 yiDrub', en: 'going to fail (lit. going to get hit)', cat: 'exams' },
  { ar: 'زاحطة', tr: 'zaa7Ta', en: 'failing / slipping (lit. slipping)', cat: 'exams' },
  // student life
  { ar: 'سهرنا', tr: 'sehirna', en: 'we stayed up all night (studying)', cat: 'life' },
  { ar: 'هوّع', tr: 'hawwa3', en: 'skipped class / wagged off', cat: 'life' },
  { ar: 'ما في وقت', tr: 'maa fi wa2t', en: 'no time (for studying / for anything)', cat: 'life' },
  { ar: 'بدّي تعطيل', tr: 'bedde ta3Tiil', en: 'I need a break / holiday', cat: 'life' },
  { ar: 'أمس كنا بالجامعة', tr: 'ams kinna bil-jaamaa', en: 'yesterday we were at uni', cat: 'life' },
  { ar: 'الكتب غالية', tr: 'el-kutub ghaalye', en: 'books are expensive', cat: 'life' },
  // results & pressure
  { ar: 'نجحت', tr: 'nijaht', en: 'I passed / succeeded', cat: 'results' },
  { ar: 'رسبت', tr: 'rasabt', en: 'I failed', cat: 'results' },
  { ar: 'عم بيموتني البروف', tr: '3am bimawwitni el-bruuf', en: 'the professor is killing me', cat: 'results' },
  { ar: 'وين التوفيق', tr: 'ween et-tawfiiq', en: 'where is success? (despairing cry)', cat: 'results' },
  { ar: 'ربّنا يساعد', tr: 'rabbna ysaa3id', en: 'may God help (exam prayer)', cat: 'results' },
];

const SKL_DRILLS = [
  {
    q: 'What do Lebanese students call the big final high school exams?',
    opts: ['الكونكور (el-konkuur)', 'الدورة (ed-dawra)', 'البكالوريا (el-bakkaaloorya)', 'الترانسكريبت'],
    ans: 2,
    exp: 'البكالوريا (el-bakkaaloorya) are the Lebanese baccalaureate exams — the most stressful academic event in a Lebanese student\'s life.'
  },
  {
    q: 'A student says رح يضرب (ra7 yiDrub) about their exam. What do they mean?',
    opts: ['They\'re going to ace it', 'They\'re going to fight', 'They\'re going to fail', 'They\'re going to cheat'],
    ans: 2,
    exp: 'رح يضرب (ra7 yiDrub) = going to fail, lit. "going to get hit." A classic Lebanese student expression for exam doom.'
  },
  {
    q: 'What does غشّ (ghash) mean in a Lebanese school context?',
    opts: ['Studying hard', 'Cheating on exams', 'Skipping class', 'Failing a subject'],
    ans: 1,
    exp: 'غشّ (ghash) = cheating. عم بتغشش؟ = "are you cheating?" — a question heard in every Lebanese exam hall.'
  },
  {
    q: 'Lebanese students call their professor البروف (el-bruuf). Where does this word come from?',
    opts: ['Arabic "proof"', 'French "professeur"', 'English "professor"', 'Turkish "bürüf"'],
    ans: 1,
    exp: 'البروف (el-bruuf) comes from the French "professeur" — reflecting Lebanon\'s French-influenced education system, especially in private schools and universities.'
  },
  {
    q: 'What does هوّع (hawwa3) mean in student slang?',
    opts: ['To vomit from stress', 'To study all night', 'To skip class', 'To cheat on an exam'],
    ans: 2,
    exp: 'هوّع (hawwa3) in student context = to skip/wag class. Though the word also means "to nauseate" in other contexts.'
  },
  {
    q: 'A student says زاحطة (zaa7Ta) about their grades. What\'s happening?',
    opts: ['They\'re excelling', 'They\'re slipping/failing', 'They\'re studying', 'They\'re transferring'],
    ans: 1,
    exp: 'زاحطة (zaa7Ta) = slipping, failing — from the root meaning to slide. Lebanese students use it when grades are sliding downward.'
  },
  {
    q: 'What is الكونكور (el-konkuur)?',
    opts: ['The school cafeteria', 'A competitive university entrance exam', 'A type of student visa', 'The final transcript'],
    ans: 1,
    exp: 'الكونكور (el-konkuur) is the competitive entrance exam for prestigious Lebanese universities — from the French "concours." The AUB and other top unis use it.'
  },
  {
    q: 'A student says سهرنا (sehirna). What happened last night?',
    opts: ['They went to a party', 'They stayed up all night (studying)', 'They slept early', 'They skipped class'],
    ans: 1,
    exp: 'سهرنا (sehirna) = we stayed up all night. سهر (sahar) means to stay awake — usually for studying before exams, or socializing (context matters).'
  },
  {
    q: 'What does ربّنا يساعد (rabbna ysaa3id) express in an exam context?',
    opts: ['Confidence in preparation', 'A prayer/resigned hope for exam success', 'Anger at the professor', 'Relief after passing'],
    ans: 1,
    exp: 'ربّنا يساعد (rabbna ysaa3id) = may God help us — the universal Lebanese exam prayer, said when you know you didn\'t study enough.'
  },
  {
    q: 'What does وين التوفيق (ween et-tawfiiq) express?',
    opts: ['Where is my textbook?', 'Where is success? (despairing)', 'Where is the exam room?', 'When does class start?'],
    ans: 1,
    exp: 'وين التوفيق (ween et-tawfiiq) = where is success/blessing? — a despairing cry when nothing is going right academically.'
  },
];

const SKL_TIPS = [
  'Lebanese education is famously intense — the Baccalaureate system and competitive university entrance exams create a high-pressure culture. Phrases about stress, failure, and divine intervention are absolutely genuine.',
  'Lebanon has a French-influenced school system (especially in private schools), which is why you hear البروف (from professeur), الكونكور (from concours), and other French-origin terms in daily student vocabulary.',
  'غشّ (cheating) is a controversial but very present part of Lebanese exam culture — discussed openly. The phrase عم بتغشش؟ is a genuine classroom moment.',
  'University friend groups (الربع er-rub3) are central to Lebanese student life — these friendships often last a lifetime and extend into professional networks.',
  'The phrase ربّنا يساعد before exams is said by both Muslim and Christian students — it\'s a shared cultural expression that transcends religion.',
];

const SKL_ABOUT = 'School and university life in Lebanon is shaped by intense academic pressure, French colonial educational legacy, and a strong social culture. Students navigate competitive entrance exams, mix French and Arabic vocabulary naturally, form lifelong friendships, and develop a dark humor about failure and stress. Understanding student vocabulary opens up conversations with a huge slice of Lebanese society — where الجامعة (university) stories are a universal social currency.';
