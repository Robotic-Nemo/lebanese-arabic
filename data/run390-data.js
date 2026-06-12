// Run #390 — Lebanese Mountains & Outdoors Coach (mtn)
// Categories: mountains | nature-outdoors | mountain-villages | seasons-activities | expressions

const MTN_WORDS = [
  // mountains
  { ar: 'جبل', tr: 'jabal', en: 'mountain', cat: 'mountains' },
  { ar: 'أرز', tr: '2arz', en: 'cedar tree (Lebanon\'s symbol)', cat: 'mountains' },
  { ar: 'غابة', tr: 'ghaabe', en: 'forest / grove', cat: 'mountains' },
  { ar: 'وادي', tr: 'waadi', en: 'valley / gorge', cat: 'mountains' },
  { ar: 'نهر', tr: 'nahr', en: 'river', cat: 'mountains' },
  { ar: 'شلال', tr: 'shallaal', en: 'waterfall', cat: 'mountains' },
  { ar: 'صخرة', tr: 'Sakhre', en: 'rock / boulder', cat: 'mountains' },
  { ar: 'قمة', tr: '2imme', en: 'peak / summit', cat: 'mountains' },
  // nature-outdoors
  { ar: 'هوا نقي', tr: 'hawa naqiyy', en: 'fresh / pure air', cat: 'nature-outdoors' },
  { ar: 'تلج', tr: 'talj', en: 'snow', cat: 'nature-outdoors' },
  { ar: 'ضباب', tr: 'Dabaab', en: 'fog / mist', cat: 'nature-outdoors' },
  { ar: 'ربيع', tr: 'rabiia3', en: 'spring (season)', cat: 'nature-outdoors' },
  { ar: 'خريف', tr: 'khariif', en: 'autumn / fall', cat: 'nature-outdoors' },
  { ar: 'عصافير', tr: '3aSaafir', en: 'birds (plural)', cat: 'nature-outdoors' },
  { ar: 'أزهار', tr: '2azhaar', en: 'flowers (plural)', cat: 'nature-outdoors' },
  { ar: 'طبيعة', tr: 'Tabii3a', en: 'nature', cat: 'nature-outdoors' },
  // mountain-villages
  { ar: 'ضيعة', tr: 'Day3a', en: 'village (Lebanese word for village)', cat: 'mountain-villages' },
  { ar: 'بيت الجبل', tr: 'beet il-jabal', en: 'mountain house (summer home)', cat: 'mountain-villages' },
  { ar: 'مصيف', tr: 'maSiif', en: 'summer retreat / summer village', cat: 'mountain-villages' },
  { ar: 'أهل الضيعة', tr: '2ahl il-Day3a', en: 'village people / home village community', cat: 'mountain-villages' },
  { ar: 'شاليه', tr: 'shaaleh', en: 'chalet (mountain cabin, from French)', cat: 'mountain-villages' },
  { ar: 'تراس', tr: 'traas', en: 'terrace / outdoor porch', cat: 'mountain-villages' },
  { ar: 'كرم', tr: 'karm', en: 'vineyard / orchard', cat: 'mountain-villages' },
  { ar: 'حقل', tr: '7a2l', en: 'field / farmland', cat: 'mountain-villages' },
  // seasons-activities
  { ar: 'تزلج', tr: 'tazallaj', en: 'skiing', cat: 'seasons-activities' },
  { ar: 'مشي طبيعة', tr: 'mashi Tabii3a', en: 'hiking / nature walk', cat: 'seasons-activities' },
  { ar: 'قطاف', tr: '2aTaaf', en: 'fruit picking / harvest', cat: 'seasons-activities' },
  { ar: 'شواء', tr: 'shawaa2', en: 'barbecue / grilling outdoors', cat: 'seasons-activities' },
  { ar: 'تخييم', tr: 'takhyiim', en: 'camping', cat: 'seasons-activities' },
  { ar: 'دراجة', tr: 'darraaje', en: 'bicycle', cat: 'seasons-activities' },
  { ar: 'صيد', tr: 'Seed', en: 'fishing / hunting', cat: 'seasons-activities' },
  { ar: 'عنب', tr: '3anab', en: 'grapes (Lebanon famous for vineyards)', cat: 'seasons-activities' },
  // expressions
  { ar: 'يلا عالجبل', tr: 'yalla 3al-jabal', en: 'let\'s go to the mountains!', cat: 'expressions' },
  { ar: 'هواها ببلاش', tr: 'hawaa-ha biblaaash', en: 'its air is free (the mountain air is priceless)', cat: 'expressions' },
  { ar: 'رجعنا عالضيعة', tr: 'rja3na 3al-Day3a', en: 'we went back to the village (summer return)', cat: 'expressions' },
  { ar: 'مناخ معتدل', tr: 'manaakh mu3tadil', en: 'moderate climate (Lebanon\'s mountain weather)', cat: 'expressions' },
  { ar: 'بلد الأرز', tr: 'balad il-2arz', en: 'land of the cedars (Lebanon\'s poetic name)', cat: 'expressions' },
  { ar: 'تكبرنا عالضيعة', tr: 'tkabbarna 3al-Day3a', en: 'we grew up in the village (fond memory)', cat: 'expressions' },
  { ar: 'ريحة التراب', tr: 'riie7et it-traab', en: 'smell of the earth (after rain on mountain soil)', cat: 'expressions' },
  { ar: 'صيف عالجبل', tr: 'Seef 3al-jabal', en: 'summer in the mountains (Lebanese tradition)', cat: 'expressions' },
];

const MTN_DRILLS = [
  {
    q: 'What is "2arz"?',
    opts: ['2arz', 'jabal', 'waadi', 'talj'],
    correct: 0,
    note: '"2arz" (أرز) — the cedar tree, Lebanon\'s national symbol. The Cedar of Lebanon (Cedrus libani) appears on the Lebanese flag. Ancient cedar forests once covered Mount Lebanon — Phoenicians used the timber to build ships. Today the last cedar groves are protected in the Cedars of God (Arz il-Rabb) near Bsharri. "Balad il-2arz" (land of the cedars) = Lebanon\'s most poetic name.',
  },
  {
    q: 'What is "Day3a"?',
    opts: ['Day3a', 'maSiif', 'beet il-jabal', '2ahl il-Day3a'],
    correct: 0,
    note: '"Day3a" (ضيعة) — village, specifically the mountain village where your family is from. In Lebanese culture, your "Day3a" is a core part of your identity. "Min wein 2antak?" (where are you from?) often means which Day3a your family originates from, even if you grew up in Beirut. The summer return to the Day3a is a beloved ritual for Lebanese families.',
  },
  {
    q: 'What is "maSiif"?',
    opts: ['maSiif', 'shaaleh', 'traas', 'beet il-jabal'],
    correct: 0,
    note: '"maSiif" (مصيف) — a summer retreat village, or the act of summering in the mountains. Lebanese families historically moved to mountain villages in summer to escape Beirut\'s heat. "Ruu7 3al-maSiif" = go to the summer retreat. Famous maSiif villages: Broummana, Beit Mery, Zahlé, Zahle, Deir el Qamar. The maSiif tradition shaped Lebanon\'s mountain culture.',
  },
  {
    q: 'What does "yalla 3al-jabal" mean?',
    opts: ['yalla 3al-jabal', 'rja3na 3al-Day3a', 'Seef 3al-jabal', 'tkabbarna 3al-Day3a'],
    correct: 0,
    note: '"yalla 3al-jabal!" (يلا عالجبل) — let\'s go to the mountains! The classic Friday summer call when Beirutis escape the coastal heat. Lebanese mountains are only 20-45 minutes from the coast, making them uniquely accessible. The contrast between sea and mountain ("min il-ba7ar 3al-jabal") within one hour is one of Lebanon\'s most celebrated geographic features.',
  },
  {
    q: 'What is "tazallaj"?',
    opts: ['tazallaj', 'mashi Tabii3a', '2aTaaf', 'takhyiim'],
    correct: 0,
    note: '"tazallaj" (تزلج) — skiing. Lebanon has six ski resorts including Mzaar Kfardebian (the largest), The Cedars (most scenic), Laqlouq, Zaarour, and Faraya. Uniquely, you can ski in the morning and swim in the Mediterranean by afternoon — "tazallaj w 3oom fi nafs il-yoom" (ski and swim the same day). Lebanese skiing culture is vibrant and social.',
  },
  {
    q: 'What is "shawaa2"?',
    opts: ['shawaa2', 'Seed', '2aTaaf', 'mashi Tabii3a'],
    correct: 0,
    note: '"shawaa2" (شواء) — barbecue, grilling outdoors. One of Lebanon\'s great outdoor traditions. Mountain weekends = "shawaaye 3al-hawa il-Tali2" (grilling in the open air). Lebanese BBQ includes kafta, lahm mishwi (grilled meat), chicken, and vegetables. The smell of shawaa2 in a mountain village on a weekend is quintessentially Lebanese.',
  },
  {
    q: 'What does "balad il-2arz" mean?',
    opts: ['balad il-2arz', 'beet il-jabal', 'hawa naqiyy', 'Tabii3a'],
    correct: 0,
    note: '"balad il-2arz" (بلد الأرز) — land of the cedars. Lebanon\'s most enduring poetic name. The cedar appears on the flag, in the national anthem, in poetry. "Min 2arz Lubnaan" (from the cedars of Lebanon) = from Lebanon itself. The ancient biblical cedar forests gave Lebanon its identity as a land of natural wonder and abundance.',
  },
  {
    q: 'What is "2aTaaf"?',
    opts: ['2aTaaf', '3anab', 'karm', 'shawaa2'],
    correct: 0,
    note: '"2aTaaf" (قطاف) — harvest, fruit picking. In Lebanese mountain culture, autumn "2aTaaf il-3anab" (grape harvest) is a social event — families and friends pick together, eat fresh grapes, and make wine and arak. "2aTaaf il-zaytoon" (olive harvest) happens in November. The Lebanese agricultural calendar shapes mountain village life even today.',
  },
  {
    q: 'What does "hawaa-ha biblaaash" mean?',
    opts: ['hawaa-ha biblaaash', 'hawa naqiyy', 'manaakh mu3tadil', 'riie7et it-traab'],
    correct: 0,
    note: '"hawaa-ha biblaaash" (هواها ببلاش) — its air is free / its air costs nothing. Said of the mountain: the pure mountain air is the greatest luxury, and you get it for free. A Lebanese expression of gratitude for nature\'s gifts. Compare to: "ktir ghaali l-Beirut" (Beirut is too expensive) — but the mountain air? Free.',
  },
  {
    q: 'What is "karm"?',
    opts: ['karm', '7a2l', '2aTaaf', 'ghaabe'],
    correct: 0,
    note: '"karm" (كرم) — vineyard or orchard. Lebanon has one of the oldest wine traditions in the world — Phoenicians spread viticulture across the Mediterranean. Bekaa Valley and mountain kareem produce grapes for Lebanon\'s famous wineries (Ksara, Chateau Musar, Massaya). "3ando karm" (he has a vineyard) = landed, established. Karm also means "generosity" in fuSHa — the overlap is poetic.',
  },
];

const MTN_TIPS = [
  'Lebanon\'s mountains are not just scenery — they\'re identity. Ask any Lebanese "min wein 2antak?" and the answer is almost always a village (Day3a), even if the person was born in Beirut. The Day3a is where family is from, where summers are spent, where you\'re buried. Mountain roots define Lebanese social networks, politics, and family allegiances.',
  'The Lebanese mountain summer tradition (maSiif) is centuries old. Every July and August, Lebanese families historically moved from coastal cities to cooler mountain villages. Today\'s Lebanese diaspora flies back specifically for "sumer 3al-jabal" (mountain summer). Mountain villages fill up July-August with returnees from Beirut, Dubai, Paris, São Paulo. The Day3a becomes cosmopolitan in summer.',
  'Lebanese skiing is surprisingly serious. Six resorts, sophisticated après-ski culture, European-trained instructors. Faraya-Mzaar has hosted world cup competitions. The combination of 3000m peaks with Mediterranean proximity makes Lebanese skiing unique: green valleys, snow peaks, sea view. "Tazallaj w 3oom fi nafs il-yoom" (ski and swim the same day) is a real Lebanese boast — and it\'s true.',
  'Grape culture runs deep in Lebanese mountains. The Bekaa Valley and Mount Lebanon produce over 50 varieties of grapes. Lebanese wine history predates France by thousands of years — Phoenicians brought the vine to Greece and Italy. Modern Lebanese wineries (Chateau Ksara est. 1857, Musar since 1930s) produce internationally award-winning wines. The grape harvest (2aTaaf) is a social occasion: families gather to pick together.',
  '"Riie7et it-traab" (ريحة التراب) — the smell of earth after rain. One of the most evocative Lebanese sensory experiences: the particular smell of dry mountain soil hit by the first autumn rain. Lebanese poets and musicians reference it endlessly. It triggers nostalgia in the diaspora. To smell it after years abroad is to feel Lebanon itself. The Lebanese relationship with the land is emotional and ancient.',
];

const MTN_ABOUT = 'Lebanon\'s mountains are inseparable from Lebanese identity. The country\'s very name — "Lubnaan" — likely derives from the Semitic root "lbn" (white), referring to the snow-capped peaks of Mount Lebanon. These mountains have been a refuge across history: for Phoenicians, Crusaders, Ottoman minorities, modern Lebanese. The mountain village (Day3a) is where Lebanese families come from, summer, return to die. Lebanon offers a geographic miracle: ski slopes and Mediterranean beach within 45 minutes of each other, ancient cedar forests alongside modern ski chalets, Roman temples in river valleys. Understanding mountain culture means understanding Lebanese hospitality (mountain people are known for extreme generosity), family identity (your Day3a defines who you are), and the emotional power of return — coming back to the mountain is coming back to yourself.';
