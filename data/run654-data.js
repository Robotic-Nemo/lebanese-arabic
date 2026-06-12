// R654 — NEW FEATURE: Lebanese Herbs & Spices coach (hrb)

const HRB_CATS = [
  { id: 'fresh', label: '🌿 Fresh Herbs' },
  { id: 'dried', label: '🫙 Dried Spices' },
  { id: 'blends', label: '🥣 Spice Blends' },
  { id: 'phrases', label: '💬 Market Phrases' }
];

const HRB_WORDS = [
  // Fresh herbs
  { ar: 'na3na3', tr: 'na3na3', en: 'mint', cat: 'fresh' },
  { ar: 'ba2dounes', tr: 'ba2dounes', en: 'parsley', cat: 'fresh' },
  { ar: 'kizbra', tr: 'kizbra', en: 'cilantro / coriander', cat: 'fresh' },
  { ar: 'za3tar akhDar', tr: 'za3tar akhDar', en: 'fresh thyme', cat: 'fresh' },
  { ar: 'reehaan', tr: 'reehaan', en: 'basil', cat: 'fresh' },
  { ar: 'shamra', tr: 'shamra', en: 'fennel', cat: 'fresh' },
  { ar: 'jarjeer', tr: 'jarjeer', en: 'arugula / rocket', cat: 'fresh' },
  // Dried spices
  { ar: 'za3tar', tr: 'za3tar', en: 'dried thyme-herb blend', cat: 'dried' },
  { ar: '7alaba', tr: '7alaba', en: 'fenugreek', cat: 'dried' },
  { ar: 'kamoun', tr: 'kamoun', en: 'cumin', cat: 'dried' },
  { ar: 'kizbra naashfe', tr: 'kizbra naashfe', en: 'dried coriander', cat: 'dried' },
  { ar: 'kirfe', tr: 'kirfe', en: 'cinnamon', cat: 'dried' },
  { ar: '2anise', tr: '2anise', en: 'anise', cat: 'dried' },
  { ar: 'haal', tr: 'haal', en: 'cardamom', cat: 'dried' },
  { ar: 'bhar', tr: 'bhar', en: 'allspice / black pepper', cat: 'dried' },
  { ar: 'za3faran', tr: 'za3faran', en: 'saffron', cat: 'dried' },
  { ar: 'summa2', tr: 'summa2', en: 'sumac', cat: 'dried' },
  // Blends
  { ar: 'bharat 7lew', tr: 'bharat 7lew', en: 'sweet spice mix', cat: 'blends' },
  { ar: 'bharat laHme', tr: 'bharat laHme', en: 'meat spice mix', cat: 'blends' },
  { ar: 'tabil', tr: 'tabil', en: 'spice blend (Tunisian-Lebanese)', cat: 'blends' },
  { ar: 'za3tar w zeit', tr: 'za3tar w zeit', en: 'thyme mix with olive oil', cat: 'blends' },
  { ar: 'ma7lab', tr: 'ma7lab', en: 'mahlab (cherry pit spice)', cat: 'blends' },
  // Market phrases
  { ar: 'addeish hal-kiis?', tr: 'addeish hal-kiis?', en: 'how much is this bag?', cat: 'phrases' },
  { ar: 'baddak Taaze walla naashfe?', tr: 'baddak Taaze walla naashfe?', en: 'do you want fresh or dried?', cat: 'phrases' },
  { ar: '2a3Tiini noss kiis na3na3', tr: '2a3Tiini noss kiis na3na3', en: 'give me half a bag of mint', cat: 'phrases' },
  { ar: 'haida kteer zaakit', tr: 'haida kteer zaakit', en: 'this smells amazing', cat: 'phrases' },
  { ar: 'min wein haal?', tr: 'min wein haal?', en: 'where is the cardamom from?', cat: 'phrases' },
  { ar: 'bharat l-beit a7la', tr: 'bharat l-beit a7la', en: 'homemade spice mix is best', cat: 'phrases' }
];

const HRB_DRILLS = [
  { q: 'What is "na3na3"?', opts: ['mint','basil','parsley','thyme'], ans: 0 },
  { q: 'What is "ba2dounes"?', opts: ['cilantro','arugula','parsley','fennel'], ans: 2 },
  { q: 'What is "kizbra"?', opts: ['basil','cilantro','mint','thyme'], ans: 1 },
  { q: 'What is "kirfe"?', opts: ['cumin','cardamom','cinnamon','allspice'], ans: 2 },
  { q: 'What is "summa2"?', opts: ['saffron','sumac','anise','fenugreek'], ans: 1 },
  { q: 'What is "haal"?', opts: ['cumin','cinnamon','cardamom','fennel'], ans: 2 },
  { q: 'What is "za3faran"?', opts: ['saffron','turmeric','paprika','sumac'], ans: 0 },
  { q: 'What is "kamoun"?', opts: ['anise','coriander','cumin','allspice'], ans: 2 },
  { q: '"bhar" means what?', opts: ['mint','allspice','thyme','basil'], ans: 1 },
  { q: 'What does "za3tar" refer to in Lebanese cooking?', opts: ['dried herb blend','fresh mint','basil paste','chili powder'], ans: 0 },
  { q: '"ma7lab" comes from what source?', opts: ['dried rose petals','cherry pits','grape seeds','olive pits'], ans: 1 },
  { q: '"haida kteer zaakit" means?', opts: ['this is too spicy','this smells amazing','this is very fresh','this is expensive'], ans: 1 },
  { q: '"2a3Tiini noss kiis na3na3" — what are you asking for?', opts: ['a full bag of thyme','half a bag of mint','some fresh basil','a kilo of coriander'], ans: 1 },
  { q: '"reehaan" is which herb?', opts: ['fennel','arugula','basil','parsley'], ans: 2 },
  { q: '"jarjeer" means?', opts: ['arugula','mint','coriander','watercress'], ans: 0 }
];

const HRB_TIPS = [
  { title: 'Za3tar — more than thyme', body: 'Lebanese "za3tar" refers to a dried blend: wild thyme, sumac, sesame, salt. Eaten daily with olive oil and bread. Every family has its own recipe. "Za3tar akhDar" means actual fresh thyme.' },
  { title: 'Bharat — the spice backbone', body: '"Bharat" literally means "spices." Lebanese "bharat laHme" (meat spice) includes allspice, black pepper, cinnamon, and nutmeg. "Bharat 7lew" (sweet spice) adds cloves and cardamom for desserts.' },
  { title: 'Na3na3 everywhere', body: 'Mint is Lebanon\'s most-used fresh herb. In fattoush, tabbouleh, kibbe nayye, and Lebanese iced tea (shai b-na3na3). Dried mint (na3na3 naashif) goes into soups and laban.' },
  { title: 'Sumac — the souring agent', body: '"Summa2" (sumac) is Lebanon\'s go-to souring spice — tangy, ruby-red. Sprinkled over hummus, chicken, onions. Replaces lemon in many recipes. Essential in za3tar blend.' },
  { title: 'Kizbra — the divided herb', body: 'Cilantro ("kizbra") is used in Lebanese kibbe bi-saniyye and some stews. Not universal — many Lebanese dislike it intensely. "3indo ta3met kizbra" = it tastes like cilantro (said negatively).' },
  { title: 'Ma7lab — the secret ingredient', body: '"Ma7lab" is ground cherry pits — subtly sweet, slightly bitter. Used in ka3ek (bread rings), ma3moul (cookies), and some holiday breads. Hard to find outside the Middle East.' }
];
