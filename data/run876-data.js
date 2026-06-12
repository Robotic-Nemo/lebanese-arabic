// R876 — NEW FEATURE: Lebanese Construction & Building Culture (bld)

const BLD_CATS = ['building', 'workers', 'materials', 'expressions'];

const BLD_WORDS = [
  // building
  { a: 'بناية', tr: 'bnaaye', en: 'building / apartment block', cat: 'building' },
  { a: 'طابق', tr: 'Taabi2', en: 'floor / story', cat: 'building' },
  { a: 'شرفة', tr: 'shurfe', en: 'balcony', cat: 'building' },
  { a: 'رخصة', tr: 'rkhse', en: 'permit / license', cat: 'building' },
  { a: 'مشروع', tr: 'mashrou3', en: 'project / construction site', cat: 'building' },
  { a: 'خرطة', tr: 'kherTa', en: 'floor plan / blueprint', cat: 'building' },
  { a: 'مهندس', tr: 'mehandis', en: 'engineer / architect', cat: 'building' },
  { a: 'طابق أرضي', tr: 'Taabi2 arDi', en: 'ground floor', cat: 'building' },
  { a: 'سطح', tr: 'saTe7', en: 'rooftop / roof terrace', cat: 'building' },
  { a: 'بيت قيد الإنشاء', tr: 'beit 2eid il-inshaa', en: 'house under construction', cat: 'building' },
  // workers
  { a: 'بنّاي', tr: 'bannaay', en: 'mason / builder', cat: 'workers' },
  { a: 'معلم', tr: 'ma3allem', en: 'master craftsman', cat: 'workers' },
  { a: 'نجار', tr: 'najjaar', en: 'carpenter', cat: 'workers' },
  { a: 'حداد', tr: 'haddaad', en: 'ironworker / blacksmith', cat: 'workers' },
  { a: 'كهربجي', tr: 'kahrabji', en: 'electrician', cat: 'workers' },
  { a: 'سباك', tr: 'sabbaaK', en: 'plumber', cat: 'workers' },
  // materials
  { a: 'إسمنت', tr: 'eSment', en: 'cement / concrete', cat: 'materials' },
  { a: 'حديد', tr: '7adeed', en: 'iron / steel rebar', cat: 'materials' },
  { a: 'بلاط', tr: 'blaaT', en: 'tiles / flooring', cat: 'materials' },
  { a: 'طوب', tr: 'Toob', en: 'brick', cat: 'materials' },
  { a: 'رمل', tr: 'ramel', en: 'sand', cat: 'materials' },
  { a: 'بياض', tr: 'byaaD', en: 'plaster / whitewash', cat: 'materials' },
  // expressions
  { a: 'عم بيبني', tr: '3am byibni', en: 'he\'s building (ongoing)', cat: 'expressions' },
  { a: 'تحت الإنشاء', tr: 'ta7t il-inshaa', en: 'under construction', cat: 'expressions' },
  { a: 'خلصت البناء', tr: 'khalaSt il-bnaa', en: 'I finished the construction', cat: 'expressions' },
  { a: 'غالي كتير', tr: 'ghaali kteer', en: 'too expensive (contractors say this)', cat: 'expressions' },
  { a: 'ما في رخصة', tr: 'ma fi rkhse', en: 'no permit (very common)', cat: 'expressions' },
  { a: 'عيلتنا بتبني', tr: '3eelatna btibni', en: 'our family is building', cat: 'expressions' },
];

const BLD_DRILLS = [
  { q: 'What is "bnaaye"?', opts: ['rooftop', 'building / apartment block', 'balcony', 'floor plan'], ans: 1 },
  { q: 'What does "shurfe" mean?', opts: ['permit', 'floor', 'balcony', 'rooftop'], ans: 2 },
  { q: 'What is a "bannaay"?', opts: ['electrician', 'plumber', 'engineer', 'mason / builder'], ans: 3 },
  { q: 'What does "rkhse" mean?', opts: ['brick', 'permit / license', 'blueprint', 'rooftop'], ans: 1 },
  { q: 'What is "eSment"?', opts: ['sand', 'tiles', 'cement / concrete', 'iron rebar'], ans: 2 },
  { q: 'What does "ma3allem" mean?', opts: ['engineer', 'master craftsman', 'plumber', 'carpenter'], ans: 1 },
  { q: 'What is "7adeed" in construction?', opts: ['cement', 'brick', 'iron / steel rebar', 'sand'], ans: 2 },
  { q: 'What is "kahrabji"?', opts: ['plumber', 'mason', 'electrician', 'carpenter'], ans: 2 },
  { q: 'What does "blaaT" mean?', opts: ['blueprint', 'tiles / flooring', 'plaster', 'brick'], ans: 1 },
  { q: 'What is "saTe7"?', opts: ['ground floor', 'balcony', 'floor plan', 'rooftop / roof terrace'], ans: 3 },
  { q: '"Ta7t il-inshaa" means?', opts: ['finished construction', 'under construction', 'no permit', 'building project'], ans: 1 },
  { q: 'What does "Toob" mean?', opts: ['sand', 'brick', 'concrete', 'tile'], ans: 1 },
  { q: 'What is "mehandis"?', opts: ['plumber', 'ironworker', 'engineer / architect', 'mason'], ans: 2 },
  { q: '"Ma fi rkhse" literally means?', opts: ['too expensive', 'no permit', 'no workers', 'no materials'], ans: 1 },
  { q: 'What is "najjaar"?', opts: ['ironworker', 'electrician', 'carpenter', 'plumber'], ans: 2 },
  { q: 'What does "ramel" mean?', opts: ['brick', 'concrete', 'iron', 'sand'], ans: 3 },
];

const BLD_TIPS = [
  { title: 'Building is Family Business', body: 'Building a house (byibni beit) is the Lebanese dream. Families save for decades and often build multi-generational homes where children inherit floors. Saying "3eelatna btibni" carries deep pride.' },
  { title: 'Permits Are Optional (Culturally)', body: '"Ma fi rkhse" (no permit) is extremely common. Lebanese build floors without permits, add balconies, close in balconies, and add whole floors. Enforcement is minimal — until it isn\'t.' },
  { title: 'The Ma3allem', body: 'The ma3allem (master craftsman) is the foreman/site manager. He\'s trusted like family, paid in cash, and usually has worked with your uncle too. Building without a good ma3allem is like cooking without a ma3allem chef.' },
  { title: 'Rooftop Culture', body: 'The saTe7 (rooftop) is coveted space. In Lebanon it\'s used for hanging laundry, barbecues, satellite dishes, water tanks, and illegal extra rooms. The best apartments are "3ala s-saTe7."' },
  { title: 'Material Loyalty', body: 'Lebanese builders are fiercely loyal to specific suppliers. The same cement brand, the same tile shop, the same hardware store for decades. Switching suppliers is a conversation starter.' },
  { title: 'Everything Takes Longer', body: '"Khalsat il-bnaa?" (is construction done?) is asked for years. Lebanese construction projects notoriously overrun time and budget — jokes about "10 more months" become decade-long sagas.' },
];
