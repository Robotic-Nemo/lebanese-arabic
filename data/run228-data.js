// Run #228 — Lebanese Food & Cuisine Coach (lfc)
// Lebanese dishes, ingredients, cooking verbs, street food, restaurant phrases — 40 items, MCQ drill, 5 tips

const LFC_WORDS = [
  // iconic dishes
  { tr: 'hummus',       ar: 'حمص',         en: 'hummus',                   cat: 'dishes' },
  { tr: 'tabbule',      ar: 'تبولة',        en: 'tabbouleh',                cat: 'dishes' },
  { tr: 'kibbe',        ar: 'كبة',          en: 'kibbeh (meat+bulgur)',     cat: 'dishes' },
  { tr: 'fattoush',     ar: 'فتوش',         en: 'fattoush salad',           cat: 'dishes' },
  { tr: 'wara2 3anab',  ar: 'ورق عنب',     en: 'stuffed grape leaves',     cat: 'dishes' },
  { tr: 'muHammara',    ar: 'محمرة',        en: 'red pepper walnut dip',    cat: 'dishes' },
  { tr: 'baba ghannuuj',ar: 'بابا غنوج',   en: 'baba ganoush',             cat: 'dishes' },
  { tr: 'manaqeesh',    ar: 'مناقيش',      en: 'zaatar flatbread',         cat: 'dishes' },
  { tr: 'sha3riyye',    ar: 'شعرية',        en: 'vermicelli rice',          cat: 'dishes' },
  { tr: 'fatteh',       ar: 'فتة',          en: 'fatteh (bread+chickpea)',  cat: 'dishes' },
  // street food & breads
  { tr: 'shawarma',     ar: 'شاورما',       en: 'shawarma',                 cat: 'street' },
  { tr: 'falafel',      ar: 'فلافل',        en: 'falafel',                  cat: 'street' },
  { tr: 'kaak',         ar: 'كعك',          en: 'sesame bread ring',        cat: 'street' },
  { tr: 'ka3ke',        ar: 'كعكة',         en: 'cake / pastry',           cat: 'street' },
  { tr: 'bselle w riz', ar: 'بسلة ورز',    en: 'peas and rice',            cat: 'street' },
  { tr: 'laHme bel-3ajiin', ar: 'لحمة بالعجين', en: 'meat flatbread',    cat: 'street' },
  // ingredients
  { tr: 'za3tar',       ar: 'زعتر',         en: 'thyme / zaatar mix',       cat: 'ingredients' },
  { tr: 'zeit zaytuun', ar: 'زيت زيتون',   en: 'olive oil',                cat: 'ingredients' },
  { tr: 'laymoun',      ar: 'ليمون',        en: 'lemon',                    cat: 'ingredients' },
  { tr: 'toom',         ar: 'توم',          en: 'garlic',                   cat: 'ingredients' },
  { tr: 'na3na3',       ar: 'نعنع',         en: 'mint',                     cat: 'ingredients' },
  { tr: 'banadoura',    ar: 'بندورة',       en: 'tomato',                   cat: 'ingredients' },
  { tr: 'bosal',        ar: 'بصل',          en: 'onion',                    cat: 'ingredients' },
  { tr: 'burghol',      ar: 'برغل',         en: 'bulgur wheat',             cat: 'ingredients' },
  // drinks & sweets
  { tr: '3aSiir',       ar: 'عصير',         en: 'juice',                    cat: 'drinks' },
  { tr: 'labneh',       ar: 'لبنة',         en: 'strained yoghurt',         cat: 'drinks' },
  { tr: 'ayran',        ar: 'عيران',        en: 'yoghurt drink',            cat: 'drinks' },
  { tr: 'jallab',       ar: 'جلاب',         en: 'grape+rose syrup drink',   cat: 'drinks' },
  { tr: '3arak',        ar: 'عرق',          en: 'arak (anise spirit)',      cat: 'drinks' },
  { tr: 'maamoul',      ar: 'معمول',        en: 'date/nut filled cookie',   cat: 'drinks' },
  // restaurant phrases
  { tr: 'shu 3andak hayy?', ar: 'شو عندك هيي؟', en: 'what do you recommend?', cat: 'restaurant' },
  { tr: 'bdi aakol',    ar: 'بدي آكل',      en: 'I want to eat',            cat: 'restaurant' },
  { tr: 'mniH?',        ar: 'منيح؟',        en: 'is it good?',              cat: 'restaurant' },
  { tr: '7saab',        ar: 'حساب',         en: 'bill / the check',        cat: 'restaurant' },
  { tr: 'kull shii mniH', ar: 'كل شي منيح', en: 'everything is good',      cat: 'restaurant' },
  { tr: 'bi-l-3afye',   ar: 'بالعافية',    en: 'bon appétit',              cat: 'restaurant' },
  { tr: 'da2ii2a',      ar: 'دقيقة',        en: 'one minute / wait',       cat: 'restaurant' },
  { tr: 'rakkeb',       ar: 'ركّب',         en: 'assemble it (sandwich)',   cat: 'restaurant' },
  { tr: 'zaaki',        ar: 'زاكي',         en: 'delicious',                cat: 'restaurant' },
  { tr: 'ma3 el-salaame', ar: 'مع السلامة', en: 'goodbye (from restaurant)', cat: 'restaurant' },
];

const LFC_DRILLS = [
  {
    q: 'What is "tabbule" in English?',
    opts: ['hummus', 'baba ganoush', 'tabbouleh', 'fattoush salad'],
    correct: 2,
    note: '"tabbule" = tabbouleh (parsley+tomato+bulgur salad); "hummus" = chickpea dip; "fattoush" = bread salad'
  },
  {
    q: 'How do you say "garlic" in Lebanese Arabic?',
    opts: ['bosal', 'toom', 'na3na3', 'za3tar'],
    correct: 1,
    note: '"toom" = garlic; "bosal" = onion; "na3na3" = mint; "za3tar" = thyme/zaatar'
  },
  {
    q: 'What does "bi-l-3afye" mean?',
    opts: ['the bill please', 'it is delicious', 'bon appétit', 'I want to eat'],
    correct: 2,
    note: '"bi-l-3afye" = bon appétit / enjoy your meal; "7saab" = bill; "zaaki" = delicious; "bdi aakol" = I want to eat'
  },
  {
    q: 'What is "manaqeesh"?',
    opts: ['stuffed grape leaves', 'zaatar flatbread', 'vermicelli rice', 'arak spirit'],
    correct: 1,
    note: '"manaqeesh" = zaatar flatbread; "wara2 3anab" = stuffed grape leaves; "sha3riyye" = vermicelli rice; "3arak" = arak'
  },
  {
    q: 'How do you say "the bill" in Lebanese Arabic?',
    opts: ['zaaki', 'mniH', '7saab', 'bi-l-3afye'],
    correct: 2,
    note: '"7saab" = bill/check; "zaaki" = delicious; "mniH" = good; "bi-l-3afye" = bon appétit'
  },
  {
    q: 'What does "za3tar" mean?',
    opts: ['lemon', 'mint', 'thyme / zaatar mix', 'garlic'],
    correct: 2,
    note: '"za3tar" = thyme/zaatar spice mix; "laymoun" = lemon; "na3na3" = mint; "toom" = garlic'
  },
  {
    q: 'How do you say "delicious" in Lebanese Arabic?',
    opts: ['zaaki', 'mniH', 'kull shii', 'bi-l-3afye'],
    correct: 0,
    note: '"zaaki" = delicious; "mniH" = good; "kull shii" = everything; "bi-l-3afye" = bon appétit'
  },
  {
    q: 'What is "3arak"?',
    opts: ['juice', 'yoghurt drink', 'arak (anise spirit)', 'grape-rose drink'],
    correct: 2,
    note: '"3arak" = arak, the anise-flavoured spirit; "3aSiir" = juice; "ayran" = yoghurt drink; "jallab" = grape+rose drink'
  },
  {
    q: 'How do you say "olive oil" in Lebanese Arabic?',
    opts: ['laymoun', 'zeit zaytuun', 'burghol', 'bosal'],
    correct: 1,
    note: '"zeit zaytuun" = olive oil; "laymoun" = lemon; "burghol" = bulgur wheat; "bosal" = onion'
  },
  {
    q: 'What does "wara2 3anab" mean?',
    opts: ['zaatar flatbread', 'kibbeh', 'stuffed grape leaves', 'baba ganoush'],
    correct: 2,
    note: '"wara2 3anab" = stuffed grape leaves (lit: vine leaves); "manaqeesh" = zaatar flatbread; "kibbe" = kibbeh; "baba ghannuuj" = baba ganoush'
  },
];

const LFC_TIPS = [
  { title: 'Meze culture: "kifak" before food', body: 'Lebanese dining is meze-style — many small dishes shared. Always say "bi-l-3afye" (bon appétit) before eating. It\'s rude to start before everyone is served. Expect the host to insist you eat more: "kul kul" = eat eat! Refusing is also expected once or twice before accepting.' },
  { title: 'Ordering in Lebanese: "bdi" + food', body: '"Bdi" = I want. "Bdi hummus" = I want hummus. "Bdi shawarma bi-khubz" = I want a shawarma in bread. "Ma bdi" = I don\'t want. "Bdi shi taani?" = want something else? Plural order: "bdi tnen shawarma" = I want two shawamas.' },
  { title: 'Zaatar: the Lebanese staple', body: '"Za3tar" in Lebanon means the dried spice mix (thyme + sesame + sumac + salt), not just thyme alone. "Zaatar w zeit" = dip bread in olive oil + zaatar — the classic Lebanese breakfast. "Manaqeesh 3a-za3tar" = flatbread with zaatar, the most popular street breakfast.' },
  { title: '"Labneh" vs "laban" vs "ayran"', body: '"Labneh" = strained yoghurt (thick, eaten with olive oil+bread). "Laban" = plain yoghurt or buttermilk (drinking). "Ayran" = cold yoghurt drink (laban + water + salt). Common confusion for beginners. "Laban" can also mean milk in some contexts — ask "7aliib" for milk to be safe.' },
  { title: 'Paying the bill: a competition', body: 'In Lebanon, the bill ("7saab") fight is real — everyone grabs for it at once. To ask for the bill: "3Tiina l-7saab" (give us the bill) or just "7saab!" The server may say "Tfaddal" handing it to you. Splitting is less common in traditional settings — expect the host or eldest to pay. Offering to split: "nefra2 el-7saab?" = shall we split the bill?' },
];

const LFC_ABOUT = 'Master Lebanese Arabic food and cuisine vocabulary — iconic dishes, street food, key ingredients, drinks, sweets, and essential restaurant phrases. Perfect for navigating Lebanese restaurants, markets, and family dinners with confidence.';
