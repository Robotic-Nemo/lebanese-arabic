// R1041 — NEW FEATURE: Lebanese Apartment Hunting & Rentals coach (rnt)

const RNT_WORDS = [
  // places
  { ar: 'شقة', tr: 'sha22a', eng: 'apartment / flat', cat: 'places' },
  { ar: 'طابق', tr: 'Taabi2', eng: 'floor / storey', cat: 'places' },
  { ar: 'منطقة', tr: 'manTa2a', eng: 'neighbourhood / area', cat: 'places' },
  { ar: 'بناية', tr: 'binaaye', eng: 'building', cat: 'places' },
  { ar: 'سطح', tr: 'saTe7', eng: 'rooftop', cat: 'places' },
  // features
  { ar: 'غرفة نوم', tr: 'ghurfet noom', eng: 'bedroom', cat: 'features' },
  { ar: 'صالون', tr: 'Saaloone', eng: 'living room / salon', cat: 'features' },
  { ar: 'مطبخ', tr: 'maTbakh', eng: 'kitchen', cat: 'features' },
  { ar: 'شرفة', tr: 'sharfe', eng: 'balcony', cat: 'features' },
  { ar: 'كاراج', tr: 'karaaj', eng: 'garage / parking space', cat: 'features' },
  // terms
  { ar: 'إيجار', tr: '2iiyjaar', eng: 'rent (monthly)', cat: 'terms' },
  { ar: 'عربون', tr: '3arbuun', eng: 'deposit / advance payment', cat: 'terms' },
  { ar: 'عقد', tr: '3a2d', eng: 'contract / lease', cat: 'terms' },
  { ar: 'مالك', tr: 'maalik', eng: 'landlord / owner', cat: 'terms' },
  { ar: 'سمسار', tr: 'simSaar', eng: 'real estate agent / broker', cat: 'terms' },
  // costs
  { ar: 'مشترك', tr: 'mushtarak', eng: 'shared utilities (water/electricity)', cat: 'costs' },
  { ar: 'موتور', tr: 'mootur', eng: 'generator subscription', cat: 'costs' },
  { ar: 'خدمة', tr: 'khidme', eng: 'service charge / maintenance fee', cat: 'costs' },
  { ar: 'فريش دولار', tr: 'friish doolaar', eng: 'fresh dollar (rent paid in cash USD)', cat: 'costs' },
  { ar: 'أول وآخر', tr: '2awwal w 2aakhir', eng: 'first and last month (deposit norm)', cat: 'costs' },
  // expressions
  { ar: 'شو الإيجار؟', tr: 'shuu l-2iiyjaar?', eng: 'what\'s the rent?', cat: 'expressions' },
  { ar: 'مرفق الأثاث', tr: 'marfuu2 il-aseeth', eng: 'furnished (with furniture)', cat: 'expressions' },
  { ar: 'فارغة', tr: 'faarghe', eng: 'empty / unfurnished', cat: 'expressions' },
  { ar: 'في مصعد؟', tr: 'fii maS3ad?', eng: 'is there a lift?', cat: 'expressions' },
  { ar: 'قريب من الدكان', tr: '2ariib min id-dukkaan', eng: 'close to shops', cat: 'expressions' },
  // problems
  { ar: 'رطوبة', tr: 'ruTuube', eng: 'damp / humidity problem', cat: 'problems' },
  { ar: 'حشرات', tr: '7asharaat', eng: 'insects / pest problem', cat: 'problems' },
  { ar: 'ضوضاء', tr: 'Dawdaa2', eng: 'noise', cat: 'problems' },
  { ar: 'مجاري', tr: 'majaari', eng: 'sewage / drainage issue', cat: 'problems' },
  { ar: 'ما بيرفع', tr: 'ma birfa3', eng: 'no signal / no internet (common complaint)', cat: 'problems' },
];

const RNT_CATS = ['all', 'places', 'features', 'terms', 'costs', 'expressions', 'problems'];

const RNT_DRILLS = [
  {
    q: '"sha22a" (شقة) means:',
    opts: ['building', 'apartment / flat', 'floor', 'balcony'],
    ans: 1
  },
  {
    q: '"simSaar" (سمسار) is a:',
    opts: ['landlord', 'tenant', 'real estate broker', 'building doorman'],
    ans: 2
  },
  {
    q: '"3arbuun" (عربون) means:',
    opts: ['monthly rent', 'deposit / advance', 'contract', 'service charge'],
    ans: 1
  },
  {
    q: '"mootur" (موتور) in a rental context is:',
    opts: ['a parking fee', 'the water bill', 'generator subscription', 'a maintenance fee'],
    ans: 2
  },
  {
    q: '"friish doolaar" (فريش دولار) rent means:',
    opts: ['rent paid in Lebanese pounds', 'rent paid in cash USD outside the banking system', 'a rent discount', 'an online transfer'],
    ans: 1
  },
  {
    q: '"marfuu2 il-aseeth" (مرفق الأثاث) means:',
    opts: ['empty / unfurnished', 'furnished', 'with a garage', 'with a balcony'],
    ans: 1
  },
  {
    q: '"sharfe" (شرفة) is a:',
    opts: ['bedroom', 'kitchen', 'balcony', 'rooftop'],
    ans: 2
  },
  {
    q: '"2awwal w 2aakhir" (أول وآخر) means:',
    opts: ['first and last month deposit', 'up-front and agent commission', 'old and new price', 'start and end of contract'],
    ans: 0
  },
  {
    q: '"ruTuube" (رطوبة) is a:',
    opts: ['noise problem', 'damp / humidity issue', 'pest problem', 'drainage issue'],
    ans: 1
  },
  {
    q: '"maalik" (مالك) means:',
    opts: ['tenant', 'agent', 'landlord / owner', 'doorman'],
    ans: 2
  },
  {
    q: '"Taabi2" (طابق) means:',
    opts: ['apartment', 'balcony', 'building', 'floor / storey'],
    ans: 3
  },
  {
    q: '"faarghe" (فارغة) apartment is:',
    opts: ['furnished', 'empty / unfurnished', 'with a rooftop', 'with parking'],
    ans: 1
  },
  {
    q: '"mushtarak" (مشترك) in rent ads refers to:',
    opts: ['shared landlord', 'shared utilities', 'shared parking', 'shared contract'],
    ans: 1
  },
  {
    q: '"7asharaat" (حشرات) is a problem with:',
    opts: ['noise', 'damp', 'insects / pests', 'sewage'],
    ans: 2
  },
  {
    q: '"fii maS3ad?" (في مصعد؟) asks:',
    opts: ['is there a balcony?', 'is there a garage?', 'is there a lift?', 'is there a generator?'],
    ans: 2
  },
];

const RNT_TIPS = [
  {
    title: 'Fresh Dollars Only — The New Rental Reality',
    body: 'Since 2019, most Beirut landlords demand "friish doolaar" — cash USD physically handed over, not a bank transfer. The "lollar" (Lebanese bank dollar) is worth less than the real thing. Expect to negotiate which type of dollar the rent is priced in. Some landlords advertise one price in pounds (liire) and another in fresh dollars — these are completely different markets.'
  },
  {
    title: 'The First-and-Last Deposit Norm',
    body: '"2awwal w 2aakhir" (first and last) is the standard Lebanese deposit: you pay the first month\'s rent, last month\'s rent, and sometimes a separate "3arbuun" (damage deposit) on top. The broker "simSaar" will also charge a fee — typically half or one month\'s rent. Budget for 3-4x the monthly rent up front before you get the key.'
  },
  {
    title: 'The Generator Factor',
    body: 'Every rental in Lebanon includes a "mootur" (generator) subscription on top of the official electricity bill. This pays for hours of power when the national grid is down — which is most of the time outside Beirut. Before signing, ask: "2addeish il-mootur?" (how much is the generator?) and how many amps you get. It varies wildly and significantly affects the true cost of rent.'
  },
  {
    title: 'Broker Culture (Simsar)',
    body: 'The "simSaar" (broker) is unavoidable in Lebanese real estate. Unlike some countries, they work for whoever pays them. You can find listings directly on platforms like Airbnb and local Facebook groups, but for monthly rentals the simSaar usually controls access. Negotiate their commission: "2addeish il-3amuule?" (how much is your fee?) — it\'s often negotiable, especially if you\'re signing a long lease.'
  },
  {
    title: 'What "Neighbourhood" Really Means',
    body: 'In Lebanon, the "manTa2a" (neighbourhood) isn\'t just a preference — it\'s a social, sectarian, and practical decision. Proximity to a highway matters for escaping traffic. Access to a generator supplier, a neighbourhood "dukkaan" (corner store), and a nearby pharmacy are non-negotiables. Lebanese renters ask: "2addeish ba3iid 3an il-awtostrad?" (how far from the highway?). The commute calculus is completely different when roads can be cut off by protests or weather.'
  },
];
