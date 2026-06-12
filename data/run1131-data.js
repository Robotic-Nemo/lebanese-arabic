// R1131 — NEW FEATURE: Lebanese Neighbors & Community Life (jrn)

const JRN_WORDS = [
  { ar: 'جار', tr: 'jaar',          en: 'male neighbor' },
  { ar: 'جارة', tr: 'jaara',        en: 'female neighbor' },
  { ar: 'جيران', tr: 'jeeraan',     en: 'neighbors (plural)' },
  { ar: 'طابق', tr: 'Taabiq',       en: 'floor / storey' },
  { ar: 'بناية', tr: 'binaaye',     en: 'apartment building' },
  { ar: 'مدخل', tr: 'madkhal',      en: 'building entrance / lobby' },
  { ar: 'مصعد', tr: 'mas3ad',       en: 'elevator' },
  { ar: 'سلم', tr: 'sallam',        en: 'staircase' },
  { ar: 'جرس', tr: 'jaras',         en: 'doorbell' },
  { ar: 'طرق الباب', tr: 'Taraq il-baab', en: 'knocked on the door' },
  { ar: 'ضجة', tr: 'Dajje',         en: 'noise / racket' },
  { ar: 'زعل', tr: 'z3al',          en: 'upset / annoyed' },
  { ar: 'تفضل', tr: 'tfaDDal',      en: 'please come in / go ahead' },
  { ar: 'استعار', tr: 'ista3aar',   en: 'borrowed (something)' },
  { ar: 'مدّ يد', tr: 'madd yad',   en: 'lent a hand / helped out' },
  { ar: 'خبر', tr: 'khabar',        en: 'news / update' },
  { ar: 'غيبة', tr: 'ghibye',       en: 'gossip / backbiting' },
  { ar: 'مجاملة', tr: 'mjaamle',    en: 'courtesy / being polite' },
  { ar: 'هدية', tr: 'hadiyye',      en: 'gift / present' },
  { ar: 'حلاوة', tr: '7alaawa',     en: 'sweets (shared with neighbors)' },
  { ar: 'لحمة', tr: 'la7me',        en: 'meat (shared on Eid/occasions)' },
  { ar: 'عالمشاع', tr: '3al-mshaa3', en: 'shared (common area)' },
  { ar: 'سطح', tr: 'saTa7',         en: 'rooftop' },
  { ar: 'حديقة', tr: '7adeei2a',    en: 'garden / yard' },
  { ar: 'أمان', tr: 'amaan',        en: 'safety / security' },
];

const JRN_DRILLS = [
  {
    q: 'How do you say "neighbor" (male) in Lebanese?',
    opts: ['jaar', 'jaara', 'jeeraan', 'Taabiq'],
    a: 0,
    ex: 'Jaar masculine; jaara feminine; jeeraan plural.',
  },
  {
    q: 'What does "Dajje" mean?',
    opts: ['noise / racket', 'doorbell', 'elevator', 'gift'],
    a: 0,
    ex: '"Kteer Dajje hawn!" = "So much noise here!"',
  },
  {
    q: 'Which word means "elevator"?',
    opts: ['mas3ad', 'sallam', 'madkhal', 'binaaye'],
    a: 0,
    ex: '"Mas3ad m3aTTal taanil" = "The elevator is broken again."',
  },
  {
    q: 'What does "tfaDDal" mean when said at the door?',
    opts: ['please come in', 'please leave', 'be careful', 'go ahead and knock'],
    a: 0,
    ex: 'TfaDDal (m) / tfaDDali (f) invites someone in politely.',
  },
  {
    q: '"Ista3aar" means...',
    opts: ['borrowed something', 'rang the bell', 'gossiped', 'complained'],
    a: 0,
    ex: '"Ista3aar sukkar min il-jaara" = "He borrowed sugar from the neighbor."',
  },
  {
    q: 'What is "ghibye"?',
    opts: ['gossip / backbiting', 'a shared rooftop', 'a courtesy visit', 'a gift of sweets'],
    a: 0,
    ex: 'Ghibye is religiously discouraged — talking about others behind their back.',
  },
  {
    q: 'What does "mjaamle" mean?',
    opts: ['being polite / courtesy', 'noise complaint', 'shared entrance', 'doorbell ring'],
    a: 0,
    ex: '"Bas mjaamle" = "Just being polite (not genuine)."',
  },
  {
    q: '"7alaawa" is shared with neighbors to...',
    opts: ['celebrate good news', 'complain about noise', 'borrow something', 'fix the elevator'],
    a: 0,
    ex: 'Distributing 7alaawa (sweets) to neighbors is a Lebanese tradition on happy occasions.',
  },
  {
    q: 'What is "saTa7"?',
    opts: ['rooftop', 'staircase', 'garden', 'lobby'],
    a: 0,
    ex: '"Roo7 3a saTa7" = "Go up to the roof." Rooftops in Lebanon host hangouts + laundry.',
  },
  {
    q: 'How do you say "apartment building" in Lebanese?',
    opts: ['binaaye', 'madkhal', 'Taabiq', 'sallam'],
    a: 0,
    ex: '"Binaaye" can mean any multi-storey building.',
  },
];

const JRN_TIPS = [
  {
    title: 'The Lebanese Neighbor Bond',
    body: 'In Lebanon, neighbors are almost family. You share electricity cuts together, warn each other about water shortages, and check in after every political crisis. The Arabic proverb "jaar id-daar 2abl id-daar" (neighbor before house) captures this.',
  },
  {
    title: 'Sharing Food & Sweets',
    body: 'Whenever there is a celebration — a baby, an engagement, a son returning from abroad — families send 7alaawa (sweets) or even plates of food to every neighbor in the building. Refusing to share is considered 7araam socially.',
  },
  {
    title: 'Noise & Confrontation',
    body: 'Lebanese apartments have thin walls. Complaining about noise directly is considered aggressive; instead neighbors send indirect hints through a mutual acquaintance, or simply turn up their own TV. "Tayyeb, bshoofak" (OK, I\'ll catch you later) usually ends awkward exchanges.',
  },
  {
    title: 'Building Politics',
    body: 'Every Lebanese building has informal politics: who controls the generator subscriptions, who monitors the entrance, who collects monthly fees for the saTa7 water tanks. Navigating these dynamics requires knowing key phrases like "meen 3am ye2yyes?" (who\'s in charge?) and "byiswa 7all" (it can be sorted out).',
  },
];
