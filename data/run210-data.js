// Run #210 — Lebanese Numbers & Counting Coach (nbr)
// Numbers 0-1000, price vocabulary, quantity words, drill MCQs

const NBR_NUMS = [
  { tr: 'sifr',        ar: 'صفر',      en: '0 (zero)',       cat: 'core' },
  { tr: 'wa7ad',       ar: 'واحد',     en: '1 (one)',        cat: 'core' },
  { tr: 'tnen',        ar: 'تنين',     en: '2 (two)',        cat: 'core' },
  { tr: 'tlate',       ar: 'تلاتة',   en: '3 (three)',      cat: 'core' },
  { tr: 'arba3a',      ar: 'أربعة',   en: '4 (four)',       cat: 'core' },
  { tr: 'khamse',      ar: 'خمسة',    en: '5 (five)',       cat: 'core' },
  { tr: 'sitte',       ar: 'ستة',     en: '6 (six)',        cat: 'core' },
  { tr: 'sab3a',       ar: 'سبعة',    en: '7 (seven)',      cat: 'core' },
  { tr: 'tmene',       ar: 'تمانية',  en: '8 (eight)',      cat: 'core' },
  { tr: 'tis3a',       ar: 'تسعة',    en: '9 (nine)',       cat: 'core' },
  { tr: '3ashara',     ar: 'عشرة',    en: '10 (ten)',       cat: 'core' },
  { tr: '7da3sh',      ar: 'حداعش',   en: '11 (eleven)',    cat: 'teens' },
  { tr: 'tna3sh',      ar: 'تناعش',   en: '12 (twelve)',    cat: 'teens' },
  { tr: 'tlatta3sh',   ar: 'تلتاعش',  en: '13 (thirteen)',  cat: 'teens' },
  { tr: 'arba3ta3sh',  ar: 'أربعطاعش',en: '14 (fourteen)',  cat: 'teens' },
  { tr: 'khamsta3sh',  ar: 'خمسطاعش', en: '15 (fifteen)',   cat: 'teens' },
  { tr: 'sitta3sh',    ar: 'ستاعش',   en: '16 (sixteen)',   cat: 'teens' },
  { tr: 'saba3ta3sh',  ar: 'سبعطاعش', en: '17 (seventeen)', cat: 'teens' },
  { tr: 'tmanta3sh',   ar: 'تمنطاعش', en: '18 (eighteen)',  cat: 'teens' },
  { tr: 'tsa3ta3sh',   ar: 'تسعطاعش', en: '19 (nineteen)',  cat: 'teens' },
  { tr: '3ishrin',     ar: 'عشرين',   en: '20 (twenty)',    cat: 'tens' },
  { tr: 'tletin',      ar: 'تلاتين',  en: '30 (thirty)',    cat: 'tens' },
  { tr: 'arb3in',      ar: 'أربعين',  en: '40 (forty)',     cat: 'tens' },
  { tr: 'khamsin',     ar: 'خمسين',   en: '50 (fifty)',     cat: 'tens' },
  { tr: 'sittin',      ar: 'ستين',    en: '60 (sixty)',     cat: 'tens' },
  { tr: 'sab3in',      ar: 'سبعين',   en: '70 (seventy)',   cat: 'tens' },
  { tr: 'tmanin',      ar: 'تمانين',  en: '80 (eighty)',    cat: 'tens' },
  { tr: 'tis3in',      ar: 'تسعين',   en: '90 (ninety)',    cat: 'tens' },
  { tr: 'miyye',       ar: 'مية',     en: '100 (hundred)',  cat: 'big' },
  { tr: 'mitten',      ar: 'ميتين',   en: '200 (two hundred)', cat: 'big' },
  { tr: 'alf',         ar: 'ألف',     en: '1,000 (thousand)', cat: 'big' },
  { tr: 'malyun',      ar: 'مليون',   en: '1,000,000 (million)', cat: 'big' },
  { tr: 'nos',         ar: 'نص',      en: 'half (½)',       cat: 'qty' },
  { tr: 'rub3',        ar: 'ربع',     en: 'quarter (¼)',    cat: 'qty' },
  { tr: 'tilt',        ar: 'تلت',     en: 'third (⅓)',      cat: 'qty' },
  { tr: 'marra',       ar: 'مرة',     en: 'once / one time', cat: 'qty' },
  { tr: 'marrten',     ar: 'مرتين',   en: 'twice / two times', cat: 'qty' },
  { tr: 'shwayye',     ar: 'شوية',    en: 'a little / few',  cat: 'qty' },
  { tr: 'ktir',        ar: 'كتير',    en: 'a lot / many',    cat: 'qty' },
  { tr: '2addeish?',   ar: 'قديش؟',   en: 'how much?',       cat: 'price' },
  { tr: 'bi kam?',     ar: 'بكام؟',   en: 'how much is it?', cat: 'price' },
  { tr: 'ghali',       ar: 'غالي',    en: 'expensive',       cat: 'price' },
  { tr: 'rkhis',       ar: 'رخيص',    en: 'cheap',           cat: 'price' },
  { tr: 'mshaan',      ar: 'مشّان',   en: 'free / for free', cat: 'price' },
  { tr: 'w nos',       ar: 'ونص',     en: '...and a half (e.g. 2:30)', cat: 'price' },
];

const NBR_DRILLS = [
  {
    q: 'How do you say "2" in Lebanese Arabic?',
    opts: ['tnen', 'tna3sh', 'tnen w nos', 'mitten'],
    correct: 0,
    note: '"tnen" = 2; "tna3sh" = 12; "mitten" = 200'
  },
  {
    q: 'What number is "tlate"?',
    opts: ['13', '3', '30', '300'],
    correct: 1,
    note: '"tlate" = 3; "tlatta3sh" = 13; "tletin" = 30'
  },
  {
    q: 'How do you say "10" in Lebanese Arabic?',
    opts: ['3ishrin', '3ashara', '7da3sh', 'sab3a'],
    correct: 1,
    note: '"3ashara" = 10; "3ishrin" = 20; "7da3sh" = 11'
  },
  {
    q: 'What does "2addeish?" mean?',
    opts: ['Where is it?', 'How much?', 'How many?', 'What time?'],
    correct: 1,
    note: '"2addeish?" is the go-to phrase to ask the price of anything'
  },
  {
    q: 'How do you say "100" in Lebanese Arabic?',
    opts: ['alf', 'khamsin', 'miyye', 'malyun'],
    correct: 2,
    note: '"miyye" = 100; "alf" = 1,000; "malyun" = 1,000,000'
  },
  {
    q: 'What does "nos" mean?',
    opts: ['zero', 'half', 'quarter', 'many'],
    correct: 1,
    note: '"nos" = half; "rub3" = quarter; "tilt" = third'
  },
  {
    q: 'How do you say "20" in Lebanese Arabic?',
    opts: ['3ashara', 'tna3sh', '3ishrin', 'tletin'],
    correct: 2,
    note: '"3ishrin" = 20; "tletin" = 30; "3ashara" = 10'
  },
  {
    q: 'What number is "khamsta3sh"?',
    opts: ['5', '50', '15', '500'],
    correct: 2,
    note: '"khamsta3sh" = 15; "khamse" = 5; "khamsin" = 50'
  },
  {
    q: 'How do you say "1,000" in Lebanese Arabic?',
    opts: ['miyye', 'alf', 'malyun', 'mitten'],
    correct: 1,
    note: '"alf" = 1,000; "miyye" = 100; "malyun" = 1,000,000'
  },
  {
    q: 'What does "ghali" mean?',
    opts: ['cheap', 'free', 'expensive', 'many'],
    correct: 2,
    note: '"ghali" = expensive; "rkhis" = cheap; "mshaan" = free'
  },
];

const NBR_TIPS = [
  { title: 'Lebanese vs. MSA numbers', body: 'Lebanese uses colloquial forms: "tnen" (2) not "ithnan", "tlate" (3) not "thalatha". Teens use "-ta3sh" suffix: "tna3sh" (12), "tlatta3sh" (13).' },
  { title: 'Prices in Lebanon', body: 'Ask prices with "2addeish?" or "bi kam?". Prices used to be in LL (lira); now often USD. You\'ll hear "3ishrin dollar" (20 USD) or "miyye alf lira" (100,000 LL).' },
  { title: 'Counting patterns', body: 'Tens end in "-in": "3ishrin" (20), "tletin" (30), "arb3in" (40). Combine with ones using "w" (and): "3ishrin w wa7ad" = 21, "3ishrin w tnen" = 22.' },
  { title: 'Half & quarter', body: '"Nos" (half) is used constantly: "sa3a w nos" = 1:30, "kilo w nos" = 1.5kg, "3ishrin w nos" = 25. "Rub3" (quarter) works similarly.' },
  { title: 'Bargaining culture', body: 'In Lebanese markets (souk), bargaining is normal. Say "ghali ktir!" (too expensive!), "nazzilni shi" (give me a discount), or "2addeish khamse?" (how much for five?).' },
];

const NBR_ABOUT = 'Master Lebanese numbers from 0 to millions, plus essential price and quantity vocabulary. Learn to ask prices, read menus, and bargain confidently in Lebanese Arabic.';
