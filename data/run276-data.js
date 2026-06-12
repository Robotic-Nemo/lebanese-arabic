// Run #276 — Lebanese Work & Jobs Coach (wrk)
// Professions, workplace, work verbs, salary/HR, work phrases — 40 items, MCQ drill, 5 tips

const WRK_WORDS = [
  // professions
  { tr: 'muhandis',       ar: 'مهندس',        en: 'engineer',                        cat: 'jobs' },
  { tr: 'Tabiib',         ar: 'طبيب',          en: 'doctor',                          cat: 'jobs' },
  { tr: 'mu3allim',       ar: 'معلم',          en: 'teacher',                         cat: 'jobs' },
  { tr: 'mu7aami',        ar: 'محامي',         en: 'lawyer',                          cat: 'jobs' },
  { tr: 'muHaasib',       ar: 'محاسب',         en: 'accountant',                      cat: 'jobs' },
  { tr: 'saa2i2',         ar: 'سائق',          en: 'driver',                          cat: 'jobs' },
  { tr: 'Tabbakh',        ar: 'طباخ',          en: 'cook / chef',                     cat: 'jobs' },
  { tr: 'nazzaar',        ar: 'نجار',          en: 'carpenter',                       cat: 'jobs' },
  // workplace
  { tr: 'maktab',         ar: 'مكتب',          en: 'office / desk',                   cat: 'workplace' },
  { tr: 'sharike',        ar: 'شركة',          en: 'company / firm',                  cat: 'workplace' },
  { tr: 'mas2uul',        ar: 'مسؤول',         en: 'manager / person in charge',      cat: 'workplace' },
  { tr: 'zamiil',         ar: 'زميل',          en: 'colleague',                       cat: 'workplace' },
  { tr: 'mouDHaf',        ar: 'موظف',          en: 'employee',                        cat: 'workplace' },
  { tr: 'Saahib sharike', ar: 'صاحب شركة',     en: 'business owner',                  cat: 'workplace' },
  { tr: 'isti3maal',      ar: 'إستعمال',       en: 'usage / use (of resources)',      cat: 'workplace' },
  { tr: 'ijtimaai3',      ar: 'اجتماع',        en: 'meeting',                         cat: 'workplace' },
  // work verbs
  { tr: 'shtaghal',       ar: 'شتغل',          en: 'to work',                         cat: 'verbs' },
  { tr: 'Sa7i2',          ar: 'صاحي',          en: 'awake / alert (at work)',         cat: 'verbs' },
  { tr: 'twaZZaf',        ar: 'توظّف',          en: 'to get hired / be employed',      cat: 'verbs' },
  { tr: 'ista2al',        ar: 'استقال',        en: 'to resign / quit',                cat: 'verbs' },
  { tr: 'ta3awwad',       ar: 'تعوّد',          en: 'to get used to',                  cat: 'verbs' },
  { tr: 'kammal',         ar: 'كمّل',           en: 'to continue / finish',            cat: 'verbs' },
  { tr: 'ra22a',          ar: 'رقّى',           en: 'to promote',                      cat: 'verbs' },
  { tr: 'insha2al',       ar: 'اشتغل',         en: 'got to work / started working',   cat: 'verbs' },
  // salary & HR
  { tr: 'maashe',         ar: 'معاش',          en: 'salary / wage',                   cat: 'salary' },
  { tr: 'mukaa2ab',       ar: 'مكافأة',        en: 'bonus / reward',                  cat: 'salary' },
  { tr: 'ijaze',          ar: 'إجازة',         en: 'vacation / leave',                cat: 'salary' },
  { tr: 'TaTmiih',        ar: 'طمح',           en: 'ambition / aspiration',           cat: 'salary' },
  { tr: '3a2d',           ar: 'عقد',           en: 'contract',                        cat: 'salary' },
  { tr: 'ta2miin',        ar: 'تأمين',         en: 'insurance',                       cat: 'salary' },
  // work phrases
  { tr: 'ana shaaghil',   ar: 'أنا شاغل',      en: 'I\'m busy / occupied',            cat: 'phrases' },
  { tr: 'fi shughel',     ar: 'في شغل',        en: 'there\'s work / I\'m at work',    cat: 'phrases' },
  { tr: 'khallasna',      ar: 'خلصنا',         en: 'we\'re done / we finished',       cat: 'phrases' },
  { tr: 'miin mas2uul?',  ar: 'مين مسؤول؟',    en: 'who\'s in charge?',               cat: 'phrases' },
  { tr: 'shu shughlak?',  ar: 'شو شغلك؟',      en: 'what\'s your job?',               cat: 'phrases' },
  { tr: 'bshtaghil b...', ar: 'بشتغل بـ...',   en: 'I work in / at...',               cat: 'phrases' },
  { tr: 'ma fi shughel',  ar: 'ما في شغل',     en: 'no work / out of work',           cat: 'phrases' },
  { tr: '3am bshtaghil',  ar: 'عم بشتغل',      en: 'I\'m working (right now)',        cat: 'phrases' },
  { tr: 'waqt l-faraagh', ar: 'وقت الفراغ',    en: 'free time / leisure',             cat: 'phrases' },
  { tr: 'shaghlto mniH',  ar: 'شغلتو منيح',    en: 'he does good work',               cat: 'phrases' },
];

const WRK_DRILLS = [
  {
    q: 'How do you say "I\'m busy / occupied" in Lebanese Arabic?',
    opts: ['fi shughel', 'ana shaaghil', 'ma fi shughel', '3am bshtaghil'],
    correct: 1,
    note: '"ana shaaghil" = I\'m busy/occupied (أنا شاغل — shaaghil = engaged/occupied, from شغل = work). Male form: "shaaghil", female: "shaaghle". "fi shughel" = there\'s work. "3am bshtaghil" = I\'m working right now (action in progress). "ana shaaghil" implies occupied/can\'t talk, "3am bshtaghil" describes current activity.'
  },
  {
    q: 'What does "maashe" mean?',
    opts: ['bonus', 'vacation', 'salary / wage', 'contract'],
    correct: 2,
    note: '"maashe" = salary/wage (معاش — from MSA "ma3aash"). Lebanese monthly salary talk: "shu maashtak?" (what\'s your salary?) is surprisingly direct in Lebanese culture. The economic crisis post-2019 devastated salaries — the lira lost 98% of value, many employers switched to "fresh dollar" payments. "maashe 3ala l-dollar" = dollar-denominated salary (highly desired post-crisis).'
  },
  {
    q: 'How do you say "what\'s your job?" in Lebanese Arabic?',
    opts: ['wein bshtaghil?', 'shu shughlak?', 'kiif shughlak?', 'miin mas2uul?'],
    correct: 1,
    note: '"shu shughlak?" = what\'s your job? (شو شغلك؟). To a woman: "shu shughliki?". Common icebreaker in Lebanon — profession is central to social identity. "wein bshtaghil?" = where do you work? (location question). Answering: "bshtaghil b-sharike" (I work at a company), "bshtaghil bi-madrasa" (I work at a school).'
  },
  {
    q: 'What does "ijaze" mean?',
    opts: ['salary', 'promotion', 'contract', 'vacation / leave'],
    correct: 3,
    note: '"ijaze" = vacation/leave (إجازة). Lebanese work culture: "ijaze madrousiyye" = study leave, "ijaze maraD" = sick leave, "ijaze wilaade" = maternity leave. Asking for time off: "biddi aakhud ijaze" (I want to take leave). "ijaze" also means "permission" — "3aTani ijaze" = he gave me permission.'
  },
  {
    q: 'How do you say "to resign / quit" in Lebanese Arabic?',
    opts: ['twaZZaf', 'ra22a', 'ista2al', 'kammal'],
    correct: 2,
    note: '"ista2al" = to resign/quit (استقال). From MSA root "q-w-l" in Form X — "to declare oneself quit". "2addam isti2alto" = he submitted his resignation. In Lebanon\'s job market, people rarely "quit" formally — more often they stop showing up or negotiate exit. Opposite: "twaZZaf" = got hired. "Tasarruf" (dismissal) is legally difficult in Lebanon.'
  },
  {
    q: 'What does "zamiil" mean in a work context?',
    opts: ['manager', 'client', 'colleague', 'business owner'],
    correct: 2,
    note: '"zamiil" = colleague/coworker (زميل — from زمالة = fellowship). Female: "zamiila". Plural: "zumalaa". Lebanese workplace culture is highly social — "zumalaa" become friends, attend each other\'s weddings. "Saahib sharike" = business owner (literally owner of company). "mas2uul" = the person in charge (not necessarily the owner).'
  },
  {
    q: 'How do you say "I work in / at..." in Lebanese Arabic?',
    opts: ['bshtaghil b...', 'ana bshughel...', 'fi shughel bi...', '3am bshtaghil b...'],
    correct: 0,
    note: '"bshtaghil b..." = I work in/at... (بشتغل بـ). Examples: "bshtaghil b-Beirut" (I work in Beirut), "bshtaghil b-sharike mouTawwire" (I work at a software company), "bshtaghil bi-bank" (I work at a bank). "3am bshtaghil b..." = I\'m currently working at... (present continuous — implies right now). "bshtaghil" alone = habitual/general.'
  },
  {
    q: 'What does "mas2uul" mean?',
    opts: ['employee', 'manager / person in charge', 'colleague', 'accountant'],
    correct: 1,
    note: '"mas2uul" = person in charge/manager (مسؤول — from ساءل = to question/account). Literally "the accountable one". Asking who to speak to: "miin l-mas2uul hon?" = who\'s in charge here? Used broadly — not just work: "inta mas2uul 3an hayda" = you\'re responsible for this. "la mas2uuliyye" = no accountability (Lebanese complaint about institutions).'
  },
  {
    q: 'How do you say "we\'re done / we finished" in Lebanese Arabic?',
    opts: ['kammal', 'khallasna', '3am bshtaghil', 'fi shughel'],
    correct: 1,
    note: '"khallasna" = we\'re done/finished (خلصنا — from خلص = to finish/end). One of Lebanon\'s most useful words. "khallaS" = he finished, "khallasit" = she finished, "khallasna" = we finished. Celebrating end of work day: "khallasna, yalla!" = done, let\'s go! Also used for exhaustion: "ana khallaS" = I\'m done (can\'t take any more).'
  },
  {
    q: 'What does "mouDHaf" mean?',
    opts: ['business owner', 'freelancer', 'employee', 'intern'],
    correct: 2,
    note: '"mouDHaf" = employee (موظف — from وظيفة = job/function). Plural: "mouDHafiin". Lebanon has a large public sector — "mouDHaf dawle" = government employee. Traditionally prestigious: guaranteed income, hard to fire. Post-crisis: government salaries became worthless in USD terms. Private sector "mouDHafiin" now often earn more if paid in fresh dollars.'
  },
];

const WRK_TIPS = [
  { title: 'Lebanese work culture — relationships over systems', body: 'Lebanese work is built on personal relationships ("wasta" = connections/nepotism). Getting hired: knowing someone is more effective than a strong CV. "3indo wasta" = he has connections. Office culture: long lunches, strong coffee, mixing personal and professional. Formality varies — traditional firms are hierarchical, startups are casual. Key rule: never disagree with the "mas2uul" publicly. Disagreement goes through side conversations. "3ala raasi" (on my head = I\'ll do it gladly) is the respectful response to an assignment.' },
  { title: 'Lebanese job market — the brain drain reality', body: 'Lebanon has one of the world\'s highest emigration rates for educated professionals — the "brain drain" ("nawzif al-3ouqoul" = exodus of minds). Standard conversation: "shu 3am ta3mol? — bfakkir bel-sfar" (what are you doing? — thinking about emigrating). Common destinations: Gulf (UAE, KSA, Qatar), Canada, Australia, France, West Africa. "Ghurbe" = expatriation/being away from homeland — loaded word for Lebanese. Those who stay often work multiple jobs ("aaktar min shughel") or rely on remittances from family abroad.' },
  { title: 'Work vocabulary in context — daily Lebanese work phrases', body: '"Shu fi ma fi?" = what\'s up? (casual work greeting, literally "what\'s there, what isn\'t"). "Halla2 3am nehtam" = we\'re taking care of it now. "Bukra 3al awwal" = tomorrow first thing. "Inshallah" in work context can mean: "yes definitely", "maybe", or "don\'t count on it" — read the tone. "Yil3an abu sh-shughel" = curse the work (frustration expression). "Rabbuna yis3idak" = God bless you (after completing a task for someone). Work hours: nominal 9-5 but effectively flexible — showing up by 10am is acceptable in many offices.' },
  { title: 'Professions in Lebanese Arabic — the prestige hierarchy', body: 'Traditionally prestigious: "Tabiib" (doctor) > "mu7aami" (lawyer) > "muhandis" (engineer) — parents push children toward these. "3indo binit?" "aywa — binti btishtaghil Tabiibe" (do you have a daughter? yes, my daughter is a doctor). Emerging prestige: tech sector ("IT"), finance, media. "Mou3allim" (teacher) = respected but poorly paid. Trades ("7irfe"): carpenter ("nazzaar"), plumber ("sabbaaK"), electrician ("kahrabji") — high demand, good income, undervalued socially. After the crisis: anyone with hard currency income is admired.' },
  { title: 'Working in Lebanon — crisis adaptation vocabulary', body: 'Post-2019 economic collapse changed work vocabulary. "Maashine bi-dollar" = dollar-denominated salary (prized). "Maashine bi-lira" = lira salary (became near-worthless). "Shaghl part-time" = part-time work (many took second jobs). "Remote" / "online shughel" = remote work (boomed during/after crisis — allows dollar income without emigrating). "Freelance" = borrowed English term widely used. "Startup" culture grew in Beirut (2010s) — Wamda, Flat6Labs incubators. "Bimshi" = it\'s working/moving along (used for business: "el-shughel bimshi" = business is going).' },
];

const WRK_ABOUT = 'Master Lebanese Arabic for work and professional life — job titles, workplace vocabulary, work verbs, HR terms, and essential phrases. Essential for navigating Lebanese office culture, job hunting, and professional conversations.';
