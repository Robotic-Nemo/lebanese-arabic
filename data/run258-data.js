// Run #258 — Lebanese Time & Daily Routine Coach (tdr)
// Telling time, daily schedule, routine verbs, time expressions — 40 items, MCQ drill, 5 tips

const TDR_WORDS = [
  // telling time
  { tr: 'addeysh el-saa3a?', ar: 'قديش الساعة؟',    en: 'what time is it?',                cat: 'time' },
  { tr: 'el-saa3a tlete',    ar: 'الساعة تلاتة',     en: 'it\'s 3 o\'clock',                cat: 'time' },
  { tr: 'w nuSS',            ar: 'ونص',               en: 'and a half (half past)',           cat: 'time' },
  { tr: 'w rub3',            ar: 'وربع',              en: 'quarter past',                     cat: 'time' },
  { tr: 'illa rub3',         ar: 'إلا ربع',           en: 'quarter to',                       cat: 'time' },
  { tr: 'bi dda77',          ar: 'بالضحى',            en: 'in the morning (mid-morning)',      cat: 'time' },
  { tr: 'bi-layl',           ar: 'بالليل',            en: 'at night',                         cat: 'time' },
  { tr: 'bi-nhar',           ar: 'بالنهار',           en: 'during the day',                   cat: 'time' },
  // parts of the day
  { tr: 'Sabi7',             ar: 'صبيح',              en: 'morning',                          cat: 'dayparts' },
  { tr: 'DeHar',             ar: 'ضهر',               en: 'noon / midday',                    cat: 'dayparts' },
  { tr: '3asriyye',          ar: 'عصرية',             en: 'afternoon',                        cat: 'dayparts' },
  { tr: 'mghayybe',          ar: 'مغيبة',             en: 'dusk / late afternoon',            cat: 'dayparts' },
  { tr: 'layl',              ar: 'ليل',               en: 'night',                            cat: 'dayparts' },
  { tr: 'nSS layl',          ar: 'نص ليل',            en: 'midnight',                         cat: 'dayparts' },
  { tr: 'fajr',              ar: 'فجر',               en: 'dawn',                             cat: 'dayparts' },
  { tr: 'gharb el-shams',    ar: 'غرب الشمس',         en: 'sunset',                           cat: 'dayparts' },
  // daily routine verbs
  { tr: 'S7i',               ar: 'صحي',               en: 'wake up',                          cat: 'routine' },
  { tr: 'nam',               ar: 'نام',               en: 'sleep / go to sleep',              cat: 'routine' },
  { tr: 'kkel',              ar: 'أكل',               en: 'eat',                              cat: 'routine' },
  { tr: 'shrib',             ar: 'شرب',               en: 'drink',                            cat: 'routine' },
  { tr: 'ra7',               ar: 'راح',               en: 'go / went',                        cat: 'routine' },
  { tr: '2ije',              ar: 'إجى',               en: 'come / came',                      cat: 'routine' },
  { tr: 'shteghal',          ar: 'اشتغل',             en: 'work / worked',                    cat: 'routine' },
  { tr: 'sta7amm',           ar: 'استحم',             en: 'shower / bathe',                   cat: 'routine' },
  // time expressions
  { tr: 'halla2',            ar: 'هلق',               en: 'now',                              cat: 'expressions' },
  { tr: 'ba3den',            ar: 'بعدين',             en: 'then / later / after',             cat: 'expressions' },
  { tr: 'kamen',             ar: 'كمان',              en: 'also / still / more',              cat: 'expressions' },
  { tr: 'min shwayy',        ar: 'من شوي',            en: 'a little while ago',               cat: 'expressions' },
  { tr: 'ba3d shwayy',       ar: 'بعد شوي',           en: 'in a little while / soon',         cat: 'expressions' },
  { tr: 'mbaareh',           ar: 'مبارح',             en: 'yesterday',                        cat: 'expressions' },
  { tr: 'bukra',             ar: 'بكرا',              en: 'tomorrow',                         cat: 'expressions' },
  { tr: 'bl-awal',           ar: 'بالأول',            en: 'first / at first',                 cat: 'expressions' },
  // frequency
  { tr: 'deymen',            ar: 'ديمًا',             en: 'always',                           cat: 'frequency' },
  { tr: 'a7yanan',           ar: 'أحيانًا',           en: 'sometimes',                        cat: 'frequency' },
  { tr: 'ktir',              ar: 'كتير',              en: 'a lot / very / many',              cat: 'frequency' },
  { tr: 'shwayy shwayy',     ar: 'شوي شوي',           en: 'little by little / slowly',        cat: 'frequency' },
  { tr: 'kell yom',          ar: 'كل يوم',            en: 'every day',                        cat: 'frequency' },
  { tr: 'hal-ayyem',         ar: 'هالأيام',           en: 'these days / nowadays',            cat: 'frequency' },
  { tr: 'bi-3aade',          ar: 'بالعادة',           en: 'usually / normally',               cat: 'frequency' },
  { tr: 'marteen',           ar: 'مرتين',             en: 'twice',                            cat: 'frequency' },
];

const TDR_DRILLS = [
  {
    q: 'How do you say "what time is it?" in Lebanese Arabic?',
    opts: ['addeysh el-saa3a?', 'el-saa3a kaam?', 'emta el-waqt?', 'shu el-sa3a?'],
    correct: 0,
    note: '"addeysh el-saa3a?" = what time is it? (addeysh = how much, saa3a = hour/time); also heard: "kaam el-saa3a?" but "addeysh" is the standard Lebanese form'
  },
  {
    q: 'What does "halla2" mean?',
    opts: ['later', 'yesterday', 'now', 'tomorrow'],
    correct: 2,
    note: '"halla2" = now (contracted from "hal la2ta" = this moment). Key Lebanese word — "halla2 shu?" = now what? "halla2 w halla2" = right this moment (impatient emphasis)'
  },
  {
    q: 'How do you say "in a little while / soon" in Lebanese Arabic?',
    opts: ['min shwayy', 'ba3d shwayy', 'ba3den', 'halla2'],
    correct: 1,
    note: '"ba3d shwayy" = in a little while/soon (ba3d = after, shwayy = a little). Contrast: "min shwayy" = a little while ago (min = from/since). Critical pair!'
  },
  {
    q: 'What does "3asriyye" mean?',
    opts: ['morning', 'noon', 'afternoon', 'midnight'],
    correct: 2,
    note: '"3asriyye" = afternoon (from عصر = late afternoon prayer time in Islamic tradition). Lebanese day: Sabi7 → DeHar → 3asriyye → mghayybe → layl'
  },
  {
    q: 'How do you say "every day" in Lebanese Arabic?',
    opts: ['deymen', 'a7yanan', 'kell yom', 'hal-ayyem'],
    correct: 2,
    note: '"kell yom" = every day (kell = every/all, yom = day); "deymen" = always; "a7yanan" = sometimes; "hal-ayyem" = these days/nowadays'
  },
  {
    q: 'What does "mbaareh" mean?',
    opts: ['tomorrow', 'today', 'yesterday', 'last night'],
    correct: 2,
    note: '"mbaareh" = yesterday (from البارحة). Lebanese triad: "mbaareh" (yesterday) / "lyom" (today) / "bukra" (tomorrow). "mbaareh bil-layl" = last night'
  },
  {
    q: 'How do you say "usually / normally" in Lebanese Arabic?',
    opts: ['kamen', 'bi-3aade', 'bl-awal', 'deymen'],
    correct: 1,
    note: '"bi-3aade" = usually/normally (lit: in habit/custom); "kamen" = also/still/more; "bl-awal" = first/at first; "deymen" = always'
  },
  {
    q: 'What does "mghayybe" mean?',
    opts: ['midnight', 'dusk / late afternoon', 'dawn', 'noon'],
    correct: 1,
    note: '"mghayybe" = dusk/late afternoon (from غاب الشمس = the sun disappeared/set). Specifically the golden hour before maghrib prayer, very poetic Lebanese term'
  },
  {
    q: 'How do you say "little by little / slowly" in Lebanese Arabic?',
    opts: ['shwayy shwayy', 'ba3den ba3den', 'kamen kamen', 'halla2 halla2'],
    correct: 0,
    note: '"shwayy shwayy" = little by little/slowly (reduplication for gradual action). Lebanese love reduplication: "ktir ktir" (very very much), "ya3ni ya3ni" (kind of/so-so)'
  },
  {
    q: 'What does "kamen" mean?',
    opts: ['also / still / more', 'always', 'never', 'sometimes'],
    correct: 0,
    note: '"kamen" = also/still/more (extremely versatile). "kamen shwayy" = a little more. "halla2 kamen?" = still now? (not done yet?). "ana kamen" = me too!'
  },
];

const TDR_TIPS = [
  { title: 'Lebanese time telling — the basics', body: '"addeysh el-saa3a?" (what time is it?). Telling time: "el-saa3a [number]" (it\'s [number] o\'clock). Half past: "w nuSS" (and a half). Quarter past: "w rub3". Quarter to: "illa rub3". "el-saa3a tis3a w nuSS" = 9:30. "el-saa3a tis3a w rub3" = 9:15. "el-saa3a 3ashara illa rub3" = 9:45. Lebanon uses 12-hour time casually — context clarifies AM/PM: "bi-Sabi7" vs "bil-layl".' },
  { title: '"Halla2" vs "ba3den" — now vs later', body: '"halla2" (now) and "ba3den" (later/after) are the twin pillars of Lebanese time talk. "halla2 shu?" = now what? (impatient). "ba3den ba7ki" = I\'ll talk later. "halla2 w halla2" = right this instant! Critical: "ba3d shwayy" (in a little while) vs "min shwayy" (a little while ago). "ba3d" = after/in X, "min" = from/since X. "ba3d sa3a" = in an hour. "min sa3a" = an hour ago.' },
  { title: 'Lebanese morning greetings by time', body: 'Lebanese greetings shift with time of day: Dawn/morning: "Sabi7 el-kheir" (good morning) → reply "Sabi7 el-nuur". Midday: "nhaarak sa3iid" (happy day). Afternoon: "3asriyye mbaarka" (blessed afternoon). Evening: "masa el-kheir" (good evening). Night: "tes7a 3a kheir" (goodnight). Late: "layla sa3iide" (happy night). Knowing which greeting to use by time signals fluency — Lebanese notice when foreigners use wrong-time greetings.' },
  { title: 'Daily routine verbs — Lebanese patterns', body: '"S7i" (wake up) → "Sta7amm" (shower) → "kkel" (eat) → "shteghal" (work) → "ra7" (went/go) → "2ije" (came/come) → "nam" (sleep). Key: Lebanese verbs in past tense use "ana S7eet" (I woke up), "shteghallt" (I worked), "roo7t" (I went). Present habitual: "kell Saba7 bS7a" (every morning I wake up), "ba3den beshrab ahwe" (then I drink coffee). "ahwe" (coffee) is the fixed point of every Lebanese morning routine.' },
  { title: '"Shwayy" — Lebanon\'s most flexible word', body: '"shwayy" = a little. But combined: "ba3d shwayy" (soon), "min shwayy" (recently), "shwayy shwayy" (gradually), "3a shwayy" (slowly/easily), "shwayy ktir" = just a little too much. In requests: "3Tiini shwayy" (give me a little). As hedge: "mniH shwayy" (sort of good, kinda OK). Lebanese use it to soften everything — "ta3baan shwayy" (a little tired = actually pretty tired). Master "shwayy" and you master Lebanese understatement.' },
];

const TDR_ABOUT = 'Master Lebanese Arabic time vocabulary and daily routine expressions — telling time, parts of the day, schedule verbs, and frequency words. Essential for coordinating plans, describing daily life, and sounding natural in everyday Lebanese conversations.';
