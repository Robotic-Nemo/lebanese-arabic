// R1035 — NEW FEATURE: Lebanese Cooking & Kitchen Culture coach (cok)

const COK_WORDS = [
  // utensils
  { ar: 'قدرة', tr: '2idra', eng: 'cooking pot', cat: 'utensils' },
  { ar: 'مقلاة', tr: 'ma2leh', eng: 'frying pan', cat: 'utensils' },
  { ar: 'معلقة', tr: 'ma3la2a', eng: 'spoon / ladle', cat: 'utensils' },
  { ar: 'سكين', tr: 'sakkin', eng: 'knife', cat: 'utensils' },
  { ar: 'طنجرة', tr: 'Tanjara', eng: 'saucepan', cat: 'utensils' },
  // ingredients
  { ar: 'زيت', tr: 'zayt', eng: 'oil', cat: 'ingredients' },
  { ar: 'ملح', tr: 'mall7', eng: 'salt', cat: 'ingredients' },
  { ar: 'ثوم', tr: 'toom', eng: 'garlic', cat: 'ingredients' },
  { ar: 'بصل', tr: 'baSSal', eng: 'onion', cat: 'ingredients' },
  { ar: 'فلفل', tr: 'filfil', eng: 'pepper', cat: 'ingredients' },
  // verbs
  { ar: 'طبخ', tr: 'Tabakh', eng: 'cooked / to cook', cat: 'verbs' },
  { ar: 'قلى', tr: '2ala', eng: 'fried', cat: 'verbs' },
  { ar: 'سلق', tr: 'sala2', eng: 'boiled', cat: 'verbs' },
  { ar: 'حمّص', tr: '7ammaS', eng: 'toasted / roasted', cat: 'verbs' },
  { ar: 'حرّك', tr: '7arrik', eng: 'stir / mix', cat: 'verbs' },
  // technique
  { ar: 'نار حمرا', tr: 'naar 7amra', eng: 'low / slow heat (lit. red fire)', cat: 'technique' },
  { ar: 'نار عالية', tr: 'naar 3aalye', eng: 'high heat', cat: 'technique' },
  { ar: 'خليه ينضج', tr: 'khalliih yinDaj', eng: 'let it cook through', cat: 'technique' },
  { ar: 'حط غطاه', tr: '7oT ghaTaa', eng: 'put the lid on', cat: 'technique' },
  { ar: 'قلّب', tr: '2allab', eng: 'flip / turn over (while cooking)', cat: 'technique' },
  // dishes
  { ar: 'كبة', tr: 'kibbe', eng: 'kibbeh (bulgur & ground meat)', cat: 'dishes' },
  { ar: 'محشي', tr: 'ma7shi', eng: 'stuffed vegetables', cat: 'dishes' },
  { ar: 'فتة', tr: 'fatteh', eng: 'fatté (bread, chickpeas, yoghurt)', cat: 'dishes' },
  { ar: 'صفيحة', tr: 'Sfii7a', eng: 'sfeeha (open meat pie)', cat: 'dishes' },
  { ar: 'رز ع دجاج', tr: 'rizz 3a djej', eng: 'rice with chicken (Sunday staple)', cat: 'dishes' },
  // expressions
  { ar: 'والله طعيم!', tr: 'walla Ta3iim!', eng: 'oh wow, it tastes amazing!', cat: 'expressions' },
  { ar: 'طلع منيح', tr: 'Tala3 mnii7', eng: 'it came out good', cat: 'expressions' },
  { ar: 'ناقصو شي؟', tr: 'naa2so shi?', eng: 'is it missing something?', cat: 'expressions' },
  { ar: 'حطيلنا أكتر', tr: '7aTTiilna 2aktar', eng: 'put more for us / serve more', cat: 'expressions' },
  { ar: 'عمرو بيصير', tr: '3amro biSiir', eng: "it'll be ready soon / it takes time", cat: 'expressions' },
];

const COK_CATS = ['all', 'utensils', 'ingredients', 'verbs', 'technique', 'dishes', 'expressions'];

const COK_DRILLS = [
  {
    q: '"2idra" (قدرة) is a:',
    opts: ['ladle', 'frying pan', 'cooking pot', 'knife'],
    ans: 2
  },
  {
    q: '"ma3la2a" (معلقة) is a:',
    opts: ['knife', 'spoon / ladle', 'frying pan', 'saucepan'],
    ans: 1
  },
  {
    q: '"Tabakh" (طبخ) means:',
    opts: ['fried', 'boiled', 'cooked', 'roasted'],
    ans: 2
  },
  {
    q: '"2ala" (قلى) means:',
    opts: ['boiled', 'baked', 'fried', 'stirred'],
    ans: 2
  },
  {
    q: '"sala2" (سلق) means:',
    opts: ['roasted', 'fried', 'boiled', 'grilled'],
    ans: 2
  },
  {
    q: '"naar 7amra" (نار حمرا) means:',
    opts: ['high heat', 'medium heat', 'low / slow heat', 'direct flame'],
    ans: 2
  },
  {
    q: '"7arrik" (حرّك) means:',
    opts: ['let it rest', 'flip / turn', 'stir / mix', 'put the lid on'],
    ans: 2
  },
  {
    q: '"walla Ta3iim!" means:',
    opts: ['let me taste it', 'is it missing salt?', 'oh wow, it tastes amazing!', 'it needs more time'],
    ans: 2
  },
  {
    q: '"khalliih yinDaj" (خليه ينضج) means:',
    opts: ['put the lid on', 'stir it', 'let it cook through', 'add water'],
    ans: 2
  },
  {
    q: 'kibbe (كبة) is made with:',
    opts: ['rice and chicken', 'bulgur and ground meat', 'bread and yoghurt', 'chickpeas and tahini'],
    ans: 1
  },
  {
    q: 'fatteh (فتة) contains:',
    opts: ['rice, chicken, almonds', 'bulgur, meat, onion', 'bread, chickpeas, yoghurt', 'eggplant, sesame, lemon'],
    ans: 2
  },
  {
    q: '"Tala3 mnii7" (طلع منيح) means:',
    opts: ['put more of it', 'it came out good', 'is it missing something?', 'let it cook through'],
    ans: 1
  },
  {
    q: '"naar 3aalye" (نار عالية) means:',
    opts: ['turn off the heat', 'low heat', 'add water', 'high heat'],
    ans: 3
  },
  {
    q: '"naa2so shi?" (ناقصو شي؟) means:',
    opts: ['did it burn?', 'is it ready?', 'is it missing something?', 'how long until done?'],
    ans: 2
  },
  {
    q: '"2allab" (قلّب) means:',
    opts: ['stir', 'boil', 'flip / turn over', 'season'],
    ans: 2
  },
];

const COK_TIPS = [
  {
    title: 'The 2idra: Heart of the Lebanese Kitchen',
    body: 'The 2idra (pot) is the workhorse of the Lebanese kitchen — used for everything from slow-cooked stews to rice with chicken (rizz 3a djej). Lebanese cooking runs on patience: naar 7amra (low/slow heat) is the secret to deep flavour. "3amro biSiir" (it\'ll be done) is what every cook says to hungry family hovering over the stove.'
  },
  {
    title: 'Toom — Garlic is Sacred',
    body: 'No Lebanese dish starts without garlic (toom) and onion (baSSal) sizzling in zayt (olive oil). The sound of them hitting the hot pan signals a meal is coming. "7ammaS el-toom" (toast the garlic golden) is a foundational step — burn it and the whole dish is ruined. Toum, the garlic sauce served with grilled meats, starts the same way.'
  },
  {
    title: 'naar 7amra — The Slow-Cook Philosophy',
    body: 'Lebanese grandmothers insist on naar 7amra (low heat, lit. red fire — as opposed to naar waaZZa, blazing fire) for everything from stuffed vegetables (ma7shi) to lentil soup. The idea: gentle heat preserves flavour and nutrients. "Khalliih yinDaj la7alo" (let it cook through by itself) — patience is the secret ingredient.'
  },
  {
    title: 'Ma7shi — The Labour of Love',
    body: 'Stuffed vegetables (ma7shi) — courgettes, peppers, vine leaves, cabbage — are a weekend project requiring the whole family. The rice-and-meat filling is seasoned with cinnamon, allspice, and salt. "Naa2so shi?" (is it missing something?) is asked after the first taste, triggering the ritual adjustment of mall7 (salt) and 7awaayiT (spices). Done right, the verdict is always "walla Ta3iim!"'
  },
  {
    title: 'The Kitchen as Social Space',
    body: 'In Lebanon, the kitchen is where news is shared, gossip exchanged, and advice given. Women (and increasingly men) cook together, with the matriarch directing traffic. "7aTTiilna 2aktar" (put more for us) is the highest compliment — it means the food is so good people want seconds before the plate is even empty. Lebanese hospitality starts at the stove.'
  },
];
