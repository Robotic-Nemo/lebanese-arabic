// R1098 — NEW FEATURE: Lebanese Fresh Juice Bar & Street Drinks Culture (jus)
const JUS_WORDS = [
  { ar: 'عصير', tr: '3aseer', eng: 'juice / drink', cat: 'drinks' },
  { ar: 'عصير ليمون', tr: '3aseer laymoon', eng: 'lemon / lime juice', cat: 'drinks' },
  { ar: 'عصير رمان', tr: '3aseer rummaan', eng: 'pomegranate juice', cat: 'drinks' },
  { ar: 'عصير أفوكادو', tr: '3aseer avocado', eng: 'avocado juice (blended with milk)', cat: 'drinks' },
  { ar: 'عصير مانجو', tr: '3aseer mango', eng: 'mango juice', cat: 'drinks' },
  { ar: 'عصير توت', tr: '3aseer toot', eng: 'mulberry juice', cat: 'drinks' },
  { ar: 'عصير قصب', tr: '3aseer 2aSab', eng: 'sugarcane juice', cat: 'drinks' },
  { ar: 'جلاب', tr: 'jallab', eng: 'rosewater & grape cordial (with pine nuts)', cat: 'drinks' },
  { ar: 'عرق سوس', tr: '3er2 sous', eng: 'licorice root drink', cat: 'drinks' },
  { ar: 'تمر هندي', tr: 'tamar hindi', eng: 'tamarind drink', cat: 'drinks' },
  { ar: 'لبن', tr: 'laban', eng: 'cold yogurt / buttermilk drink', cat: 'drinks' },
  { ar: 'كوكتيل', tr: 'cocktail', eng: 'mixed fruit cocktail', cat: 'drinks' },
  { ar: 'عصير طازج', tr: '3aseer taaze', eng: 'fresh juice', cat: 'quality' },
  { ar: 'معصور', tr: 'ma3Soor', eng: 'freshly squeezed', cat: 'quality' },
  { ar: 'ثلج', tr: 'thalj', eng: 'ice', cat: 'order' },
  { ar: 'بلا تلج', tr: 'bala thalj', eng: 'no ice', cat: 'order' },
  { ar: 'بتلج كتير', tr: 'b-thalj kteer', eng: 'lots of ice', cat: 'order' },
  { ar: 'بلا سكر', tr: 'bala sukkar', eng: 'no sugar', cat: 'order' },
  { ar: 'بسكر زيادة', tr: 'b-sukkar zeyede', eng: 'extra sugar', cat: 'order' },
  { ar: 'كبير', tr: 'kbeer', eng: 'large', cat: 'size' },
  { ar: 'وسط', tr: 'w2ste', eng: 'medium', cat: 'size' },
  { ar: 'صغير', tr: 'zgheere', eng: 'small', cat: 'size' },
  { ar: 'كاس', tr: 'kaas', eng: 'glass / cup', cat: 'items' },
  { ar: 'قشة', tr: 'ashe', eng: 'straw', cat: 'items' },
  { ar: 'عصارة', tr: '3assaare', eng: 'juicer / juice press', cat: 'items' },
  { ar: 'قصابة', tr: '2aSsaabe', eng: 'sugarcane presser / vendor', cat: 'people' },
  { ar: 'جاهز', tr: 'jaahiz', eng: 'ready', cat: 'phrases' },
  { ar: 'كيفك بده', tr: 'keefak bado', eng: 'how do you want it? (order spec)', cat: 'phrases' }
];

const JUS_DRILLS = [
  { q: 'What does "3aseer" mean?', opts: ['juice / drink', 'coffee', 'water', 'milk'], ans: 0 },
  { q: 'Which is pomegranate juice?', opts: ['3aseer rummaan', '3aseer avocado', 'jallab', '3aseer toot'], ans: 0 },
  { q: 'How do you say "no sugar"?', opts: ['bala sukkar', 'b-sukkar zeyede', 'sukkar kteer', 'ma3 sukkar'], ans: 0 },
  { q: '"Jallab" is made from:', opts: ['rosewater, grape & pine nuts', 'just lemon water', 'blended avocado', 'licorice root'], ans: 0 },
  { q: 'What is "ma3Soor"?', opts: ['freshly squeezed', 'bottled', 'frozen', 'very sweet'], ans: 0 },
  { q: 'How do you say "lots of ice"?', opts: ['b-thalj kteer', 'bala thalj', 'thalj w-sste', 'ma3 thalj'], ans: 0 },
  { q: 'What is "3er2 sous"?', opts: ['licorice root drink', 'grape juice', 'mango shake', 'tamarind'], ans: 0 },
  { q: '"Tamar hindi" is:', opts: ['tamarind drink', 'date shake', 'honey water', 'fig juice'], ans: 0 },
  { q: 'How do you say "large" (size)?', opts: ['kbeer', 'zgheere', 'w2ste', 'taaze'], ans: 0 },
  { q: 'What is "laban" in a juice bar context?', opts: ['cold yogurt drink', 'orange juice', 'water', 'coffee'], ans: 0 },
  { q: 'How to order "no ice"?', opts: ['bala thalj', 'b-thalj kteer', 'ma3 thalj', 'thalj bass'], ans: 0 },
  { q: 'What is "3aseer 2aSab"?', opts: ['sugarcane juice', 'mulberry juice', 'avocado shake', 'pomegranate'], ans: 0 },
  { q: 'How do you say "medium" size?', opts: ['w2ste', 'kbeer', 'zgheere', 'taza'], ans: 0 },
  { q: '"Jaahiz" means:', opts: ['ready', 'fresh', 'large', 'sweet'], ans: 0 },
  { q: 'What is "3aseer toot"?', opts: ['mulberry juice', 'lemon juice', 'mango juice', 'pomegranate'], ans: 0 }
];

const JUS_TIPS = [
  { title: 'Avocado Juice is King', body: 'Lebanon has a deep love for avocado juice — thick, blended with milk, honey, and sometimes a scoop of ice cream. You\'ll find it everywhere from Hamra street carts to upscale cafés. Order "3aseer avocado b-7aleeb" for the classic version.' },
  { title: 'Sugarcane Carts', body: '"3aseer 2aSab" — sugarcane juice — is pressed fresh on the street by vendors with large metal machines. It\'s extremely cheap, ice-cold, and deeply refreshing. The vendors (2aSsaabe) are a common sight near busy streets and markets.' },
  { title: 'Specifying Your Order', body: 'Lebanese juice bars expect you to specify sugar and ice: "bala sukkar, bala thalj" (no sugar, no ice) or "b-sukkar zeyede, b-thalj kteer" (extra sweet, lots of ice). They will ask "keefak bado?" (how do you want it?) if you don\'t specify.' },
  { title: 'Traditional Drinks (Jallab & 3er2 Sous)', body: '"Jallab" is a classic Levantine drink — grape molasses, rosewater, pine nuts, and sometimes tamarind over ice. "3er2 sous" (licorice root) is sold from vendors with brass urns in old souks, especially in Tripoli. Both are most popular during Ramadan.' },
  { title: 'Cocktail Culture', body: 'In Lebanese juice bars, "cocktail" means a mixed fruit blend — NOT alcoholic. A typical cocktail might include banana, strawberry, avocado, and milk blended together. Asking for a "cocktail el-bayt" (house cocktail) usually gets you the shop\'s signature mix.' }
];
