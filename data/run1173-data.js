// R1173 — NEW FEATURE: Lebanese 3Attar & Spice Shop Culture (att)

const ATT_WORDS = [
  { ar: 'عطار', tr: '3attar', en: 'traditional herbalist and spice vendor' },
  { ar: 'بهارات', tr: 'baharat', en: 'mixed spice blend (the essential Lebanese mix)' },
  { ar: 'زعتر', tr: 'za3tar', en: 'wild thyme (the dried Lebanese spice blend)' },
  { ar: 'كمون', tr: 'kamoon', en: 'cumin' },
  { ar: 'هيل', tr: 'hel', en: 'cardamom' },
  { ar: 'دار صيني', tr: 'dar sini', en: 'cinnamon' },
  { ar: 'يانسون', tr: 'yansoon', en: 'anise seed' },
  { ar: 'كزبرة', tr: 'kazbara', en: 'coriander (ground or seed)' },
  { ar: 'كركم', tr: 'kurkum', en: 'turmeric' },
  { ar: 'حلبة', tr: '7albe', en: 'fenugreek (medicinal and cooking)' },
  { ar: 'خلطة', tr: 'khalta', en: 'custom spice blend (mixed to order)' },
  { ar: 'وصفة', tr: 'wasfe', en: 'herbal remedy / recipe from the 3attar' },
  { ar: 'ميرمية', tr: 'meirammiyeh', en: 'sage (dried for tea or cooking)' },
  { ar: 'عرق سوس', tr: '3ar2asoos', en: 'licorice root (dried, sold at 3attar)' },
  { ar: 'رشاد', tr: 'rashad', en: 'garden cress (medicinal seeds)' },
  { ar: 'جرة', tr: 'jarre', en: 'jar / glass container for spices' },
  { ar: 'بالوزن', tr: 'bil-wazzen', en: 'by weight (how you buy spices)' },
  { ar: 'ناشف', tr: 'nashef', en: 'dried (as in dried herbs)' },
  { ar: 'طازج', tr: 'tazij', en: 'fresh (as in fresh herbs)' },
  { ar: 'دكان العطار', tr: 'dkken el-3attar', en: 'the spice shop / herbalist\'s shop' },
];

const ATT_DRILLS = [
  {
    q: 'What is a "3attar" in Lebanese culture?',
    opts: ['a fruit vendor', 'a traditional herbalist and spice vendor', 'a butcher', 'a baker'],
    ans: 1
  },
  {
    q: 'What does "baharat" refer to in Lebanese cooking?',
    opts: ['a single spice like cumin', 'a mixed spice blend (the essential Lebanese mix)', 'fresh herbs only', 'dried rose petals'],
    ans: 1
  },
  {
    q: 'How do you say "cardamom" in Lebanese Arabic?',
    opts: ['kamoon', 'kurkum', 'hel', 'dar sini'],
    ans: 2
  },
  {
    q: '"Khalta" at the 3attar means:',
    opts: ['a type of jar', 'a custom spice blend mixed to order', 'dried herbs for tea', 'a medicinal remedy'],
    ans: 1
  },
  {
    q: 'What is "wasfe" in the context of visiting a 3attar?',
    opts: ['the price list', 'a herbal remedy or recipe the 3attar gives you', 'a glass jar', 'a type of cumin'],
    ans: 1
  },
  {
    q: '"Za3tar" in Lebanese Arabic refers to:',
    opts: ['fresh thyme sprigs', 'the dried wild thyme spice blend', 'cinnamon powder', 'anise seeds'],
    ans: 1
  },
  {
    q: 'How do you buy spices "by weight" in Lebanese Arabic?',
    opts: ['bil-jmele', 'bil-wazzen', 'tazij', 'nashef'],
    ans: 1
  },
  {
    q: 'What is "7albe" used for in Lebanese tradition?',
    opts: ['as a cooking herb only', 'fenugreek — both medicinal and cooking uses', 'a type of cardamom', 'dried rose water'],
    ans: 1
  },
];

const ATT_TIPS = [
  'The Lebanese 3attar (عطار) is one of the oldest trades in the Levant — a neighborhood institution that predates the pharmacy, the supermarket, and the internet by centuries. His shop is a wall of glass jars, stacked floor to ceiling, each filled with a dried herb, a ground spice, or a medicinal root. There is no brand name here. You tell him what you are making — kibbeh, ma3amoul, kaak — and he weighs out the khalta (blend) on a small brass scale, paper-funnel it into a twist of newsprint, and sends you home. The baharat he blends is his own formula, slightly different from every other 3attar in the city.',
  'The 3attar does not just sell spices. He is the neighborhood herbalist, the alternative medicine cabinet, and the repository of folk wisdom that predates germ theory. He knows the wasfe for every ailment: 7albe (fenugreek) for new mothers to boost milk, meirammiyeh (sage) tea for a sore throat, yansoon (anise) for a baby\'s colic, rashad (garden cress) seeds soaked in water for a cough. He will ask about your symptoms before he reaches for the jar. Many Lebanese visit the 3attar before or instead of a doctor for minor complaints — a habit that goes back generations.',
  'In Beirut, the great 3attar districts are in the old souks: Souk el-Attarine in the traditional market, the backstreets of Gemmayze, the shops under the stairs in the older neighborhoods of Achrafieh and Basta. In the mountains, every village has one — often a tiny shop attached to a house, with dried herbs hung from the ceiling and the smell of za3tar, rose water, and cinnamon that hits you before you reach the door. The 3attar\'s shop is also a social space: neighbors stop to chat, ask for advice, taste a pinch of something. You leave with your spices and someone else\'s news.',
  'Buying za3tar from a 3attar is a lesson in the importance of freshness and provenance. Lebanese za3tar is not the same as Turkish or Syrian za3tar — it is wild thyme from the Lebanese mountains, dried in the sun, then blended with sumac, sesame, and salt. Every family has a preferred 3attar whose za3tar blend they have used for decades. The 3attar grinds his baharat fresh, to order, from whole spices. Buying pre-ground baharat in a plastic bag from a supermarket is considered a step down — like buying coffee pre-ground. The 3attar\'s spices are "bil-wazzen" (by weight), not by package, and you buy exactly what you need.',
];

const ATT_ABOUT = 'The Lebanese 3attar (عطار) is the traditional neighborhood spice vendor and herbalist — a cultural institution older than any pharmacy. His shop holds walls of glass jars filled with dried herbs, ground spices, and medicinal roots. He blends custom khalta spice mixes to order, gives out wasfe (herbal remedies), and knows which herb cures what ailment. Za3tar, baharat, hel, kamoon, dar sini — these are the building blocks of Lebanese home cooking, bought bil-wazzen (by weight) and trusted to be fresh.';
