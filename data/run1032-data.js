// R1032 — NEW FEATURE: Lebanese Souq & Haggling Culture coach (suk)

const SUK_WORDS = [
  // places
  { ar: 'سوق', tr: 'suu2', eng: 'market / souq', cat: 'places' },
  { ar: 'محل', tr: 'ma7all', eng: 'shop / store', cat: 'places' },
  { ar: 'بسطة', tr: 'basTa', eng: 'street cart / sidewalk stall', cat: 'places' },
  { ar: 'جزارة', tr: 'jazzaara', eng: 'butcher shop', cat: 'places' },
  { ar: 'فرن', tr: 'furn', eng: 'bakery', cat: 'places' },
  // people
  { ar: 'بقال', tr: 'ba22aal', eng: 'corner grocer', cat: 'people' },
  { ar: 'جزاز', tr: 'jazzaaz', eng: 'butcher', cat: 'people' },
  { ar: 'خضار', tr: 'khaDaar', eng: 'vegetable vendor', cat: 'people' },
  { ar: 'سماك', tr: 'sammak', eng: 'fishmonger', cat: 'people' },
  { ar: 'خباز', tr: 'khabbaaz', eng: 'baker', cat: 'people' },
  // prices
  { ar: 'سعر', tr: 's3ir', eng: 'price', cat: 'prices' },
  { ar: 'حساب', tr: '7esaab', eng: 'bill / total', cat: 'prices' },
  { ar: 'خصم', tr: 'khaSem', eng: 'discount', cat: 'prices' },
  { ar: 'غالي', tr: 'ghaali', eng: 'expensive', cat: 'prices' },
  { ar: 'رخيص', tr: 'rkhiiS', eng: 'cheap / inexpensive', cat: 'prices' },
  // haggling
  { ar: 'بقدش هيدا؟', tr: 'bi2addesh hayda?', eng: 'how much is this?', cat: 'haggling' },
  { ar: 'عطيني بـ...', tr: '3aTiini b-...', eng: 'give it to me for...', cat: 'haggling' },
  { ar: 'صالحني', tr: 'Saali7ni', eng: 'hook me up / cut me a deal', cat: 'haggling' },
  { ar: 'في أحسن منو؟', tr: 'fii a7san minno?', eng: 'do you have something better?', cat: 'haggling' },
  { ar: 'تعطيني صوقة؟', tr: 'ta3Tiini Soo2a?', eng: 'can I have a taste?', cat: 'haggling' },
  // quality
  { ar: 'طازج', tr: 'Taaze', eng: 'fresh', cat: 'quality' },
  { ar: 'بايت', tr: 'baayit', eng: 'stale / no longer fresh', cat: 'quality' },
  { ar: 'اليوم جاء؟', tr: 'lyoom jaa?', eng: 'did it come today? (is it fresh?)', cat: 'quality' },
  { ar: 'من وين هيدا؟', tr: 'min wein hayda?', eng: 'where is this from?', cat: 'quality' },
  { ar: 'حلو؟', tr: '7elo?', eng: 'is it good? / is it sweet?', cat: 'quality' },
  // expressions
  { ar: 'حط زياد', tr: '7oT ziyyaad', eng: 'put a little more / add extra', cat: 'expressions' },
  { ar: 'كيلو واحد بس', tr: 'kiilo waa7ad bas', eng: 'just one kilo', cat: 'expressions' },
  { ar: 'الكيلو بقدش؟', tr: 'l-kiilo bi2addesh?', eng: 'how much per kilo?', cat: 'expressions' },
  { ar: 'كتير غالي', tr: 'ktiir ghaali', eng: 'way too expensive', cat: 'expressions' },
  { ar: 'خليني شوف', tr: 'khalliini shuuf', eng: 'let me see / let me look', cat: 'expressions' },
];

const SUK_CATS = ['all', 'places', 'people', 'prices', 'haggling', 'quality', 'expressions'];

const SUK_DRILLS = [
  {
    q: 'You want to ask "how much is this?" What do you say?',
    opts: ['bi2addesh hayda?', 'lyoom jaa?', 'Saali7ni', 'ktiir ghaali'],
    ans: 0
  },
  {
    q: '"Saali7ni" (صالحني) means:',
    opts: ['this is stale', 'where is this from?', 'hook me up / cut me a deal', 'add a little more'],
    ans: 2
  },
  {
    q: '"Taaze" (طازج) describes food that is:',
    opts: ['expensive', 'stale / old', 'fresh', 'from overseas'],
    ans: 2
  },
  {
    q: 'A "jazzaaz" (جزاز) is a:',
    opts: ['baker', 'fishmonger', 'grocer', 'butcher'],
    ans: 3
  },
  {
    q: '"baayit" (بايت) means:',
    opts: ['cheap', 'fresh', 'stale / no longer fresh', 'discounted'],
    ans: 2
  },
  {
    q: '"7oT ziyyaad" (حط زياد) means:',
    opts: ["that's too expensive", 'add a little more / put extra', 'one kilo only', 'where is this from?'],
    ans: 1
  },
  {
    q: 'You want to ask for a taste. What do you say?',
    opts: ['min wein hayda?', 'ta3Tiini Soo2a?', '3aTiini b-...', 'l-kiilo bi2addesh?'],
    ans: 1
  },
  {
    q: '"khabbaaz" (خباز) works in a:',
    opts: ['fish market', 'bakery', 'butcher shop', 'vegetable stall'],
    ans: 1
  },
  {
    q: '"khaSem" (خصم) means:',
    opts: ['bill / total', 'price tag', 'discount', 'expensive'],
    ans: 2
  },
  {
    q: '"lyoom jaa?" literally asks:',
    opts: ['how much per kilo?', 'did it come today? (is it fresh?)', 'is it sweet/good?', 'where is this from?'],
    ans: 1
  },
  {
    q: '"suu2" (سوق) refers to:',
    opts: ['a butcher shop', 'a bakery', 'a market / souq', 'a street cart'],
    ans: 2
  },
  {
    q: '"rkhiiS" (رخيص) means:',
    opts: ['fresh', 'cheap / inexpensive', 'expired', 'discounted'],
    ans: 1
  },
  {
    q: '"khalliini shuuf" means:',
    opts: ['can I have a taste?', 'let me see / let me look', 'how much is this?', 'add a little more'],
    ans: 1
  },
  {
    q: '"fii a7san minno?" means:',
    opts: ['is there a discount?', 'is it cheap?', 'is there something better than this?', 'can I have a taste?'],
    ans: 2
  },
  {
    q: '"basTa" (بسطة) is:',
    opts: ['a supermarket', 'a wholesale warehouse', 'a street cart or sidewalk stall', 'a butcher shop'],
    ans: 2
  },
];

const SUK_TIPS = [
  {
    title: 'The Art of Haggling',
    body: 'Haggling is expected at street markets (suu2 al-balad) and baSta vendors — never accept the first price. Open with "Saali7ni" (hook me up) to signal you\'re a serious buyer. Supermarkets have fixed prices, but small ba22aal owners often flex on bulk orders or for regulars.'
  },
  {
    title: 'The Freshness Question',
    body: '"Lyoom jaa?" (came today?) is the magic phrase at fish and vegetable stalls. Lebanese shoppers are obsessive about freshness — asking this shows you know what you\'re doing. A confident "lyoom SabeT" (came this morning) is the answer you want. Avoid buying fish on Mondays — many suppliers skip Sunday.'
  },
  {
    title: 'Giving Your Order',
    body: 'Lebanese vendors appreciate precise orders: "kiilo waa7ad bass" (just one kilo), "neSS kiilo" (half a kilo), "7oT ziyyaad" (put a little more). Say "tamm" after they weigh to mean "that\'s enough / stop there." Adding "7abeebi" or "3ammo" (uncle — respectful for older vendors) softens any request.'
  },
  {
    title: 'The Neighbourhood Ba22aal',
    body: 'The corner ba22aal is a Lebanese institution — part grocer, part news hub, part credit union. Regulars keep a running tab ("3indi kshif") settled at month end. The ba22aal knows everyone\'s family, remembers your usual items, and will deliver if you call. Your relationship with your ba22aal is a social asset.'
  },
  {
    title: 'Souk Etiquette',
    body: 'Touching produce at vegetable stalls can annoy vendors — ask them to pick for you ("3aTiini inta", you choose for me). Never loudly complain about prices; instead use "ktiir ghaali" softly as a negotiation opener. A small compliment to the vendor (your tomatoes look amazing today) goes a surprisingly long way.'
  },
];
