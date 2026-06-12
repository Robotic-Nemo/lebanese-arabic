// R1158 — NEW FEATURE: Lebanese Traditional Desserts & Sweets (hlw)

const HLW_WORDS = [
  { ar: 'حلو', tr: 'la7lou', en: 'sweet (adjective)' },
  { ar: 'حلويات', tr: '7alwiyyat', en: 'sweets / confectionery shop' },
  { ar: 'حلواني', tr: '7alwani', en: 'confectioner / sweet maker' },
  { ar: 'بقلاوة', tr: 'baklawa', en: 'baklawa' },
  { ar: 'معمول', tr: 'ma3moul', en: "ma'amoul (date/nut shortbread)" },
  { ar: 'كعك', tr: 'ka3k', en: 'sesame ring cookies' },
  { ar: 'غريبة', tr: 'ghraybe', en: 'butter cookies' },
  { ar: 'قطايف', tr: 'ktayyef', en: 'stuffed pancakes (Ramadan)' },
  { ar: 'زنود الست', tr: 'znoud l-sit', en: "lady's arms (cream rolls)" },
  { ar: 'مهلبية', tr: 'mouhallabye', en: 'rose-water milk pudding' },
  { ar: 'قشطة', tr: 'ashta', en: 'clotted cream' },
  { ar: 'قطر', tr: '2ater', en: 'sugar syrup' },
  { ar: 'فستق', tr: 'fustuk', en: 'pistachio' },
  { ar: 'رز عالحليب', tr: 'rozz 3a l-7alib', en: 'rice pudding' },
  { ar: 'عصافير', tr: '3asafir', en: 'tiny crispy pastries (birds)' },
  { ar: 'ماي ورد', tr: 'may ward', en: 'rose water' },
  { ar: 'مسكة', tr: 'miske', en: 'mastic flavoring' },
  { ar: 'شربات', tr: 'sharbat', en: 'sweet syrup drink' },
  { ar: 'ناطف', tr: 'natef', en: 'meringue nougat (base of ghraybe)' },
  { ar: 'طحينية', tr: 'ta7iniyye', en: 'tahini sweet / sesame paste sweet' },
];

const HLW_DRILLS = [
  {
    q: 'What is "baklawa"?',
    opts: ['rice pudding', 'baklawa', 'butter cookies', 'cream rolls'],
    ans: 1
  },
  {
    q: 'How do you say "clotted cream"?',
    opts: ['ashta', 'miske', '2ater', 'fustuk'],
    ans: 0
  },
  {
    q: '"Ma3moul" is:',
    opts: ['stuffed pancakes', 'sesame rings', "date/nut shortbread", 'milk pudding'],
    ans: 2
  },
  {
    q: 'How do you say "sugar syrup"?',
    opts: ['sharbat', 'may ward', '2ater', 'natef'],
    ans: 2
  },
  {
    q: '"Ktayyef" are:',
    opts: ['ring cookies', 'stuffed pancakes', "lady's arms", 'tiny pastries'],
    ans: 1
  },
  {
    q: 'How do you say "pistachio"?',
    opts: ['miske', 'ashta', 'fustuk', 'ka3k'],
    ans: 2
  },
  {
    q: '"7alwani" means:',
    opts: ['sweet shop', 'confectioner', 'rose water', 'mastic'],
    ans: 1
  },
  {
    q: 'What is "mouhallabye"?',
    opts: ['baklawa', 'sesame cookies', 'rose-water milk pudding', 'cream rolls'],
    ans: 2
  },
];

const HLW_TIPS = [
  'Lebanese sweets (7alwiyyat — حلويات) are rooted in Ottoman and Levantine pastry traditions. The 7alwani (confectioner) is a respected craft — family shops like Bohsali and Patchi in Beirut have operated for generations. Baklawa (بقلاوة) comes in dozens of regional varieties, distinguished by nut filling, syrup density, and whether ashta (قشطة) is added.',
  'Ma3moul (معمول — date/nut shortbread) is the centerpiece of Lebanese Eid and Easter celebrations. Families gather to make them at home using carved wooden molds (tabi3 — طابع). The fillings vary: walnuts with sugar and orange blossom, pistachios, or dates. Giving and receiving ma3moul is central to holiday hospitality.',
  'Ktayyef (قطايف — stuffed pancakes) are strictly a Ramadan specialty — sold only in the weeks before Iftar, filled with ashta or crushed nuts, fried or baked, then soaked in sugar syrup. The smell of frying ktayyef in Beirut\'s streets is one of the most evocative Ramadan sensory markers.',
  'Lebanese sweets use three key flavor signatures: orange blossom water (may zaher — ماي زهر), rose water (may ward — ماي ورد), and mastic (miske — مسكة). Mastic is a resin from the mastic tree, giving a distinctive pine-like chew to ice cream (booza — بوظة) and some puddings. These flavors define Levantine confectionery.',
];

const HLW_ABOUT = 'Lebanese confectionery blends Ottoman, Persian, and Levantine traditions. From baklawa to ma3moul, the 7alwani\'s craft is central to Lebanese hospitality, celebration, and daily sweetness.';
