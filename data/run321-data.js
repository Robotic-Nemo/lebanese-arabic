// Run #321 — Lebanese Cuisine & Cooking Coach (ckn)
// 40 words across 5 categories: dishes / ingredients / cooking / utensils / culture
// 10 MCQ drills, 5 tips, about text

const CKN_WORDS = [
  // dishes
  { tr: 'hummus', ar: 'حمص', en: 'hummus (chickpea dip)', cat: 'dishes' },
  { tr: 'tabbule', ar: 'تبولة', en: 'tabbouleh (parsley salad)', cat: 'dishes' },
  { tr: 'kibbe', ar: 'كبة', en: 'kibbeh (bulgur & meat)', cat: 'dishes' },
  { tr: 'fattoush', ar: 'فتوش', en: 'fattoush (bread salad)', cat: 'dishes' },
  { tr: 'manoushe', ar: 'مناقيش', en: 'manaqish (za\'atar flatbread)', cat: 'dishes' },
  { tr: 'kafta', ar: 'كفتة', en: 'kafta (spiced minced meat)', cat: 'dishes' },
  { tr: 'mjaddara', ar: 'مجدرة', en: 'mujaddara (lentils & rice)', cat: 'dishes' },
  { tr: 'wara2 3inab', ar: 'ورق عنب', en: 'stuffed grape leaves', cat: 'dishes' },
  { tr: 'baklawa', ar: 'بقلاوة', en: 'baklava (pastry with nuts)', cat: 'dishes' },
  // ingredients
  { tr: 'za3tar', ar: 'زعتر', en: 'za\'atar (thyme/herb mix)', cat: 'ingredients' },
  { tr: 'summaa2', ar: 'سماق', en: 'sumac (tangy spice)', cat: 'ingredients' },
  { tr: 'zeit zaytoun', ar: 'زيت زيتون', en: 'olive oil', cat: 'ingredients' },
  { tr: 'toum', ar: 'توم', en: 'garlic sauce / garlic', cat: 'ingredients' },
  { tr: 'na3na3', ar: 'نعنع', en: 'mint', cat: 'ingredients' },
  { tr: 'ba2dunes', ar: 'بقدونس', en: 'parsley', cat: 'ingredients' },
  { tr: '7ammuD', ar: 'حموض', en: 'lemon juice / sour taste', cat: 'ingredients' },
  { tr: 'burgul', ar: 'برغل', en: 'bulgur wheat', cat: 'ingredients' },
  // cooking
  { tr: '7aDDar', ar: 'حضّر', en: 'to prepare (food)', cat: 'cooking' },
  { tr: 'TabaKh', ar: 'طبخ', en: 'to cook', cat: 'cooking' },
  { tr: '7amma2', ar: 'حمّأ', en: 'to heat up', cat: 'cooking' },
  { tr: 'akal', ar: 'أكل', en: 'to eat', cat: 'cooking' },
  { tr: 'Tabikh', ar: 'طابخ', en: 'cook (person)', cat: 'cooking' },
  { tr: 'wajbe', ar: 'وجبة', en: 'meal', cat: 'cooking' },
  { tr: 'akle', ar: 'أكلة', en: 'dish / food item', cat: 'cooking' },
  { tr: 'da22a', ar: 'دقّة', en: 'spice blend', cat: 'cooking' },
  // utensils
  { tr: 'SaHn', ar: 'صحن', en: 'plate', cat: 'utensils' },
  { tr: 'kas', ar: 'كاس', en: 'glass / cup', cat: 'utensils' },
  { tr: 'ma3la2a', ar: 'معلقة', en: 'spoon', cat: 'utensils' },
  { tr: 'shawke', ar: 'شوكة', en: 'fork', cat: 'utensils' },
  { tr: 'siikiin', ar: 'سيكين', en: 'knife', cat: 'utensils' },
  // culture
  { tr: 'meze', ar: 'مزة', en: 'mezze (small dishes spread)', cat: 'culture' },
  { tr: 'taDayyafna', ar: 'تضيّفنا', en: 'we hosted / we fed guests', cat: 'culture' },
  { tr: 'saHtein', ar: 'صحتين', en: 'bon appétit (lit. two healths)', cat: 'culture' },
  { tr: 'bel-3aafye', ar: 'بالعافية', en: 'enjoy your meal / bless you', cat: 'culture' },
  { tr: 'dayman', ar: 'دايمًا', en: 'always (said after compliment)', cat: 'culture' },
  { tr: 'kel shi 7elwe', ar: 'كل شي حلوة', en: 'everything is delicious', cat: 'culture' },
  { tr: 'biddna naakel', ar: 'بدنا ناكل', en: 'we want to eat', cat: 'culture' },
  { tr: 'ma fi aHla min aklit imm', ar: 'ما في أحلى من أكلة إم', en: 'nothing beats mom\'s cooking', cat: 'culture' },
  { tr: 'zaa2ir 3al-ghada', ar: 'زائر عالغدا', en: 'guest for lunch', cat: 'culture' },
  { tr: 'seefra kbiire', ar: 'سيفرة كبيرة', en: 'big spread / table (feast)', cat: 'culture' },
];

const CKN_DRILLS = [
  {
    q: 'What is "manoushe" in Lebanese cuisine?',
    opts: ['Stuffed grape leaves', 'Za\'atar flatbread', 'Chickpea dip', 'Meat pastry'],
    correct: 1,
    note: '"Manoushe" (مناقيش) — Lebanon\'s beloved street breakfast. Flatbread topped with za\'atar oil mix, cheese, or meat. Eaten fresh from the furn (bakery) every morning.'
  },
  {
    q: 'How do you say "bon appétit" in Lebanese Arabic?',
    opts: ['bel-3aafye', 'saHtein', 'dayman', 'marhaba'],
    correct: 1,
    note: '"SaHtein" (صحتين) — literally "two healths"! The most common way to wish someone enjoyment of their meal. The reply is "3al 2albik" (upon your heart).'
  },
  {
    q: 'What does "toum" refer to in Lebanese cooking?',
    opts: ['Olive oil', 'Sumac spice', 'Garlic sauce', 'Mint'],
    correct: 2,
    note: '"Toum" (توم) means garlic but also refers to the fluffy Lebanese garlic sauce — made by emulsifying garlic with lemon and oil. Served with grilled meats and shawarma.'
  },
  {
    q: 'What is "mjaddara"?',
    opts: ['Stuffed grape leaves', 'Lentils and rice dish', 'Spiced minced meat', 'Bread salad'],
    correct: 1,
    note: '"Mjaddara" (مجدرة) — lentils cooked with rice or bulgur, topped with caramelized onions. A Lebanese comfort food and popular vegetarian dish, historically nicknamed "lentils of poverty".'
  },
  {
    q: 'What does "bel-3aafye" mean?',
    opts: ['Two healths', 'Welcome to eat', 'Enjoy your meal / bless you', 'Everything is delicious'],
    correct: 2,
    note: '"Bel-3aafye" (بالعافية) — used when someone finishes eating, also said to someone working hard ("bless your effort"). Versatile blessing used in many contexts beyond just food.'
  },
  {
    q: 'Which spice is "summaa2" in Lebanese cooking?',
    opts: ['Za\'atar', 'Cinnamon', 'Sumac', 'Mint'],
    correct: 2,
    note: '"Summaa2" (سماق) = sumac — the tangy dark-red spice sprinkled on hummus, fattoush, and grilled meats. Gives a lemony tartness without acidity. Key to fattoush dressing.'
  },
  {
    q: 'What is a "meze" (مزة)?',
    opts: ['A type of dessert', 'A spread of small shared dishes', 'A cooking method', 'A morning meal'],
    correct: 1,
    note: '"Meze" is the Lebanese (and broader Levantine) tradition of many small dishes shared at the table. A proper Lebanese meze can have 20-40 dishes — the social heart of Lebanese dining culture.'
  },
  {
    q: 'How do you say "to cook" in Lebanese Arabic?',
    opts: ['akal', 'TabaKh', '7aDDar', '7amma2'],
    correct: 1,
    note: '"TabaKh" (طبخ) = to cook. "Ana btibikh" = I cook. Lebanese cuisine is serious business — many Lebanese women (and increasingly men) pride themselves on their cooking.'
  },
  {
    q: 'What is "kibbe" made from?',
    opts: ['Chickpeas and tahini', 'Bulgur wheat and minced meat', 'Lentils and onions', 'Rice and herbs'],
    correct: 1,
    note: '"Kibbe" (كبة) — Lebanon\'s national dish. Bulgur wheat mixed with minced meat (often lamb), spiced and shaped. Can be fried, baked, or raw (kibbe nayyeh). Every family has their own recipe.'
  },
  {
    q: 'What does "wara2 3inab" literally mean?',
    opts: ['Stuffed eggplant', 'Grape leaves', 'Vine of grapes', 'Stuffed cabbage'],
    correct: 1,
    note: '"Wara2 3inab" (ورق عنب) — literally "grape leaves". Stuffed with rice, meat, herbs, and lemon. A staple of Lebanese cooking, requiring patience to roll — often a family activity.'
  },
];

const CKN_TIPS = [
  {
    title: 'Mezze Is a Way of Life',
    body: 'Lebanese dining culture centers on mezze — sharing dozens of small dishes. It\'s not just about food but about togetherness. A proper mezze starts with cold dishes (hummus, tabbule, fattoush), then warm (kibbe, kafta, wara2 3inab). Meals can last hours. The phrase "yalla naakel" (let\'s eat) kicks off a social ritual, not just a meal.'
  },
  {
    title: 'Za\'atar Is Sacred',
    body: '"Za3tar" (za\'atar) isn\'t just a spice — it\'s a cultural institution. The blend of dried thyme, sumac, sesame, and salt is mixed with olive oil and spread on manoushe for breakfast. Lebanese expats cite za3tar manoushe as one of the foods they miss most. It\'s also said to sharpen the mind — parents give it to kids before exams.'
  },
  {
    title: 'Food Compliments Have a Formula',
    body: 'When someone compliments your cooking in Lebanese, you reply "dayman" (دايمًا — always) meaning "may you always enjoy it". After eating: "saHtein" (host says this) → reply: "3al 2albik" (upon your heart). If you\'re a guest: "bel-3aafye" to the cook. Learning these responses shows respect for Lebanese hospitality culture.'
  },
  {
    title: 'Every Dish Has a Regional Variation',
    body: 'Lebanese food varies by region. Kibbe in the south differs from the north. Mountain villages have their own tabbule ratios (more parsley = more authentic). Tripoli is famous for sweets (baklawa, hallab). Sidon for its "seniora" cookies. When eating Lebanese food, asking "min wein hol il-akle?" (where is this food from?) opens rich conversations.'
  },
  {
    title: 'Cooking Verbs You Need',
    body: 'Key Lebanese cooking verbs: "TabaKh" (cooked), "7aDDar" (prepared), "shawe" (grilled), "2ala" (fried), "furan" (baked/oven). Common phrases: "shu TaabiKh?" (what are you cooking?), "3am TibKhi shu?" (what are you cooking right now?), "il-akle jaahze" (the food is ready). Food conversation is a daily staple in Lebanese homes.'
  },
];

const CKN_ABOUT = 'Lebanese cuisine is considered one of the finest in the Arab world and Mediterranean region — a rich blend of Levantine, Mediterranean, and Ottoman influences. Understanding food vocabulary in Lebanese Arabic unlocks deeper cultural connections: meals are communal events, hospitality is expressed through food, and cooking is a form of love. From the morning manoushe to the elaborate weekend mezze, food is central to Lebanese identity.';
