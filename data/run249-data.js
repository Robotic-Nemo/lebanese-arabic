// Run #249 — Lebanese Professions & Jobs Coach (prf)
// Jobs, workplaces, work phrases, salary vocab — 40 items, MCQ drill, 5 tips

const PRF_WORDS = [
  // core professions
  { tr: 'Tabiib',        ar: 'طبيب',         en: 'doctor',                         cat: 'professions' },
  { tr: 'mumarriDa',     ar: 'ممرضة',         en: 'nurse',                          cat: 'professions' },
  { tr: 'muhandis',      ar: 'مهندس',         en: 'engineer',                       cat: 'professions' },
  { tr: 'mu3allem',      ar: 'معلم',          en: 'teacher',                        cat: 'professions' },
  { tr: 'mu7aami',       ar: 'محامي',         en: 'lawyer',                         cat: 'professions' },
  { tr: 'muHaasib',      ar: 'محاسب',         en: 'accountant',                     cat: 'professions' },
  { tr: 'Saa7ib shi3le', ar: 'صاحب شغلة',    en: 'business owner / employer',      cat: 'professions' },
  { tr: 'Sarrraf',       ar: 'صرّاف',         en: 'cashier / money changer',        cat: 'professions' },
  // trades & services
  { tr: 'Tabbakh',       ar: 'طباخ',          en: 'cook / chef',                    cat: 'trades' },
  { tr: '7allaaq',       ar: 'حلاق',          en: 'barber / hairdresser',           cat: 'trades' },
  { tr: 'najjaar',       ar: 'نجار',          en: 'carpenter',                      cat: 'trades' },
  { tr: 'kharraaTi',     ar: 'خراطي',         en: 'mechanic (Lebanese slang)',       cat: 'trades' },
  { tr: 'bayyaa3',       ar: 'بيّاع',          en: 'salesman / vendor',              cat: 'trades' },
  { tr: '2aTTaab',       ar: 'قطّاب',          en: 'butcher',                        cat: 'trades' },
  { tr: 'firaane',       ar: 'فراني',          en: 'baker',                          cat: 'trades' },
  { tr: '2unnbaar',      ar: 'قنّابر',         en: 'plumber (Lebanese)',              cat: 'trades' },
  // work & workplace
  { tr: 'shi3le',        ar: 'شغلة',          en: 'job / work',                     cat: 'work' },
  { tr: 'maktab',        ar: 'مكتب',          en: 'office',                         cat: 'work' },
  { tr: 'shirkeh',       ar: 'شركة',          en: 'company',                        cat: 'work' },
  { tr: 'mu3ayyad',      ar: 'موظف',          en: 'employee',                       cat: 'work' },
  { tr: 'mudirr',        ar: 'مدير',          en: 'manager / director',             cat: 'work' },
  { tr: 'za3iim',        ar: 'زعيم',          en: 'boss / leader (informal)',        cat: 'work' },
  { tr: 'maSna3',        ar: 'مصنع',          en: 'factory',                        cat: 'work' },
  { tr: 'ma7all',        ar: 'محل',           en: 'shop / store',                   cat: 'work' },
  // salary & work terms
  { tr: 'raateb',        ar: 'راتب',          en: 'salary',                         cat: 'salary' },
  { tr: 'ujra',          ar: 'أجرة',          en: 'wage / fee',                     cat: 'salary' },
  { tr: 'baTTaale',      ar: 'بطالة',         en: 'unemployment',                   cat: 'salary' },
  { tr: '3am bi-shi3el', ar: 'عم بشتغل',      en: 'I am working',                   cat: 'salary' },
  { tr: 'mbaaTTel',      ar: 'مبطّل',          en: 'unemployed / not working',       cat: 'salary' },
  { tr: 'waDHiife',      ar: 'وظيفة',         en: 'position / job post',            cat: 'salary' },
  // phrases
  { tr: 'shu shi3ltak?', ar: 'شو شغلتك؟',    en: 'what do you do? / your job?',    cat: 'phrases' },
  { tr: 'wein btishtaghel?', ar: 'وين بتشتغل؟', en: 'where do you work?',          cat: 'phrases' },
  { tr: 'mni7 el-ma3aash?', ar: 'منيح المعاش؟', en: 'is the pay good?',            cat: 'phrases' },
  { tr: 'bi-dawwer 3a shi3le', ar: 'بدوّر عشغلة', en: 'looking for a job',         cat: 'phrases' },
  { tr: 'muwaDHDHaf 7ukuumi', ar: 'موظف حكومي', en: 'government employee',         cat: 'phrases' },
  { tr: '3ande interview', ar: 'عندي إنترفيو', en: 'I have an interview',           cat: 'phrases' },
  { tr: 'khaddo men el-shi3le', ar: 'خدّوه من الشغلة', en: 'he was fired',         cat: 'phrases' },
  { tr: 'este2aal',      ar: 'استقال',        en: 'resigned',                       cat: 'phrases' },
  { tr: 'mfakkir terja3',ar: 'مفكر ترجع',    en: 'thinking of going back (to work)', cat: 'phrases' },
  { tr: '3aTle',         ar: 'عطلة',          en: 'vacation / day off',             cat: 'phrases' },
];

const PRF_DRILLS = [
  {
    q: 'How do you say "what do you do for work?" in Lebanese Arabic?',
    opts: ['shu bti7keh?', 'shu shi3ltak?', 'wein raye7?', 'kaddeysh el-raateb?'],
    correct: 1,
    note: '"shu shi3ltak?" = what is your job?; "shu bti7keh?" = what do you say?; "kaddeysh el-raateb?" = how much is the salary?'
  },
  {
    q: 'What does "baTTaale" mean?',
    opts: ['vacation', 'unemployment', 'salary', 'factory'],
    correct: 1,
    note: '"baTTaale" = unemployment — from "baTTal" (to stop/quit). Lebanon has very high unemployment rates. "raateb" = salary; "maSna3" = factory; "3aTle" = vacation'
  },
  {
    q: 'How do you say "I am working" in Lebanese Arabic?',
    opts: ['mbaaTTel', '3am bi-shi3el', 'bi-dawwer 3a shi3le', 'este2aal'],
    correct: 1,
    note: '"3am bi-shi3el" = I am working (present continuous with "3am"); "mbaaTTel" = unemployed; "bi-dawwer 3a shi3le" = looking for a job; "este2aal" = resigned'
  },
  {
    q: 'What does "mudirr" mean?',
    opts: ['employee', 'doctor', 'manager / director', 'lawyer'],
    correct: 2,
    note: '"mudirr" = manager/director; "mu3ayyad/muwaDHDHaf" = employee; "Tabiib" = doctor; "mu7aami" = lawyer'
  },
  {
    q: 'How do you say "he was fired" in Lebanese Arabic?',
    opts: ['este2aal', 'khaddo men el-shi3le', 'mbaaTTel', 'baTTaale'],
    correct: 1,
    note: '"khaddo men el-shi3le" = they took him from the job (= he was fired); "este2aal" = he resigned (his own choice); "mbaaTTel" = unemployed (state); "baTTaale" = unemployment'
  },
  {
    q: 'What does "7allaaq" mean?',
    opts: ['cook', 'carpenter', 'plumber', 'barber / hairdresser'],
    correct: 3,
    note: '"7allaaq" = barber/hairdresser; "Tabbakh" = cook; "najjaar" = carpenter; "2unnbaar" = plumber'
  },
  {
    q: 'How do you say "looking for a job" in Lebanese Arabic?',
    opts: ['waDHiife', '3ande interview', 'bi-dawwer 3a shi3le', '3am bi-shi3el'],
    correct: 2,
    note: '"bi-dawwer 3a shi3le" = looking for a job (dawwer = to search); "waDHiife" = job position; "3ande interview" = I have an interview; "3am bi-shi3el" = I am working'
  },
  {
    q: 'What does "Saa7ib shi3le" mean?',
    opts: ['employee', 'government worker', 'business owner / employer', 'manager'],
    correct: 2,
    note: '"Saa7ib shi3le" = owner of a job/business (lit: owner of a work); "mu3ayyad/muwaDHDHaf" = employee; "mudirr" = manager; "muwaDHDHaf 7ukuumi" = government employee'
  },
  {
    q: 'How do you say "salary" in Lebanese Arabic?',
    opts: ['ujra', 'shi3le', 'raateb', 'waDHiife'],
    correct: 2,
    note: '"raateb" = monthly salary; "ujra" = wage/fee (per task or transport); "shi3le" = work/job (the activity); "waDHiife" = job position'
  },
  {
    q: 'What does "kharraaTi" mean in Lebanese Arabic?',
    opts: ['carpenter', 'mechanic (slang)', 'plumber', 'barber'],
    correct: 1,
    note: '"kharraaTi" = mechanic (Lebanese slang, from French "garagiste" influence via turning/machining); "najjaar" = carpenter; "2unnbaar" = plumber; "7allaaq" = barber'
  },
];

const PRF_TIPS = [
  { title: '"Shi3le" — the Lebanese word for work', body: '"Shi3le" (job/work) is the core Lebanese work word. "Shu shi3ltak?" = What\'s your job? "Ma 3ande shi3le" = I don\'t have a job. Contrast with formal Arabic "3amal" — Lebanese speech prefers "shi3le" in everyday conversation. "Shu shi3lak?" (to a man) / "shu shi3iltek?" (to a woman). "3am bishtaghel" = I\'m working right now (3am = present progressive marker).' },
  { title: 'Lebanon\'s work reality: "baTTaale" culture', body: '"BaTTaale" (unemployment) is painfully common in Lebanese conversation. With 30%+ youth unemployment and a collapsed economy, the topic comes up constantly. Key phrases: "mbaaTTel" (unemployed, masc), "mbaaTTle" (unemployed, fem). "Btishtaghel shu?" (what are you working as?). Many Lebanese work multiple jobs: "3ande shi3lten" = I have two jobs. "Shi3le w noss" = job and a half (slang for overworking).' },
  { title: 'Professions in Lebanese — formal vs informal names', body: 'Lebanese often uses informal versions: "Tabiib" (formal doctor) but also "doktoor" from French. "Muhandis" (engineer) but "injiniir" too. "Mu7aami" (lawyer) but "avoca" (from French avocat). This French layer: "comptable" = accountant alongside "muHaasib". "Serviis" = service sector worker. "Za3iim" = boss/leader (political connotation too — be careful in context). "Mudirr" = safe professional term for manager.' },
  { title: 'Firing, hiring, and resignations in Lebanese', body: '"Khaddo men el-shi3le" (lit: they took him from the job) = he was fired. "TrakkHo" = they let him go. "Este2aal" = he resigned (formal). "Ra7 men 3ande" (went from my place) = he quit/left. Hiring: "7a2aro" (they hired him), "bada shi3le" (starting a job). "3ande interview" (I have an interview) is very commonly used with the English word "interview". "Shihaade" = certificate/degree (often required for jobs).' },
  { title: 'Trades and services — Lebanese specialty vocabulary', body: 'Lebanon\'s skilled trades have colorful names. "7allaaq" = barber (also slang for someone who talks too much — "7allaaq ktir" = big talker). "KharraaTi" = mechanic/machinist (any engine person). "Firaane" = baker (from "furn" = oven). "2aTTaab" = butcher. "Najjaar" = carpenter (also "makes things from scratch"). For household services: "3aamel" = worker/handyman. "Sibkaaji" = electrician (Lebanese slang from "sebco").' },
];

const PRF_ABOUT = 'Master Lebanese Arabic professions and work vocabulary — job titles, workplace terms, salary expressions, and essential phrases for asking about work and discussing employment. Essential for professional networking, small talk, and understanding Lebanon\'s complex work culture.';
