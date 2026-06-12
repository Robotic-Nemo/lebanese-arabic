// Run #336 — Lebanese Animals & Idioms Coach (zwy)
// 40 words across 5 categories: pets / farm / wild / birds-sea / idioms
// 10 MCQ drills, 5 tips, about text

const ZWY_WORDS = [
  // pets & domestic
  { tr: '2uTTa', ar: 'قطة', en: 'cat', cat: 'pets' },
  { tr: 'kalb', ar: 'كلب', en: 'dog', cat: 'pets' },
  { tr: 'arnab', ar: 'أرنب', en: 'rabbit', cat: 'pets' },
  { tr: 'Teer', ar: 'طير', en: 'bird', cat: 'pets' },
  { tr: 'samak', ar: 'سمك', en: 'fish', cat: 'pets' },
  { tr: 'babbGha', ar: 'ببغاء', en: 'parrot', cat: 'pets' },
  { tr: 'farasha', ar: 'فراشة', en: 'butterfly', cat: 'pets' },
  { tr: 'naHle', ar: 'نحلة', en: 'bee', cat: 'pets' },
  // farm animals
  { tr: 'ba2ara', ar: 'بقرة', en: 'cow', cat: 'farm' },
  { tr: '7aSaan', ar: 'حصان', en: 'horse', cat: 'farm' },
  { tr: '7maar', ar: 'حمار', en: 'donkey', cat: 'farm' },
  { tr: 'deek', ar: 'ديك', en: 'rooster', cat: 'farm' },
  { tr: 'djeje', ar: 'دجاجة', en: 'chicken', cat: 'farm' },
  { tr: 'GHanam', ar: 'غنم', en: 'sheep (collective)', cat: 'farm' },
  { tr: '3anze', ar: 'عنزة', en: 'goat', cat: 'farm' },
  { tr: 'khinziir', ar: 'خنزير', en: 'pig', cat: 'farm' },
  // wild animals
  { tr: 'asad', ar: 'أسد', en: 'lion', cat: 'wild' },
  { tr: 'debb', ar: 'دب', en: 'bear', cat: 'wild' },
  { tr: 'di2b', ar: 'ذئب', en: 'wolf', cat: 'wild' },
  { tr: 'thalab', ar: 'ثعلب', en: 'fox', cat: 'wild' },
  { tr: 'ghazaal', ar: 'غزال', en: 'gazelle (also: beautiful person)', cat: 'wild' },
  { tr: 'nimir', ar: 'نمر', en: 'leopard / tiger', cat: 'wild' },
  { tr: '2afaa', ar: 'أفعى', en: 'viper / snake', cat: 'wild' },
  { tr: 'Dabba3', ar: 'ضبع', en: 'hyena', cat: 'wild' },
  // birds & sea
  { tr: '7ammame', ar: 'حمامة', en: 'dove / pigeon', cat: 'birds-sea' },
  { tr: '3uSfuur', ar: 'عصفور', en: 'sparrow', cat: 'birds-sea' },
  { tr: 'nisr', ar: 'نسر', en: 'eagle / vulture', cat: 'birds-sea' },
  { tr: 'salmoon', ar: 'سلمون', en: 'salmon', cat: 'birds-sea' },
  { tr: 'qirsh', ar: 'قرش', en: 'shark', cat: 'birds-sea' },
  { tr: 'delfiin', ar: 'دلفين', en: 'dolphin', cat: 'birds-sea' },
  { tr: 'sulHafe', ar: 'سلحفاة', en: 'turtle / tortoise', cat: 'birds-sea' },
  { tr: '2akhtabuuT', ar: 'أخطبوط', en: 'octopus', cat: 'birds-sea' },
  // animal idioms
  { tr: '3asfuurein bi 7ajar', ar: 'عصفورين بحجر', en: 'two birds with one stone', cat: 'idioms' },
  { tr: 'kalb il-7aara', ar: 'كلب الحارة', en: 'neighborhood dog — everyone\'s problem = no one\'s', cat: 'idioms' },
  { tr: '7maar (insult)', ar: 'حمار', en: 'donkey — dumb / stubborn person (insult)', cat: 'idioms' },
  { tr: 'zayy il-2uTTa', ar: 'زي القطة', en: 'like a cat — always lands on its feet / crafty', cat: 'idioms' },
  { tr: 'il-2uTTa bibkii 3a l-far', ar: 'القطة تبكي عالفار', en: 'cat cries for the mouse — crocodile tears', cat: 'idioms' },
  { tr: 'mitl il-Teer Ta3', ar: 'مثل الطير طار', en: 'flew like a bird — left/escaped quickly', cat: 'idioms' },
  { tr: 'ghazaali', ar: 'غزالي', en: 'my gazelle — calling someone beautiful (endearment)', cat: 'idioms' },
  { tr: 'di2b bi jild GHanam', ar: 'ذئب بجلد غنم', en: 'wolf in sheep\'s clothing', cat: 'idioms' },
];

const ZWY_DRILLS = [
  {
    q: 'What does "7maar" (حمار) mean when used as an insult in Lebanese?',
    opts: ['A compliment meaning hard-working', 'Dumb or stubborn person (donkey)', 'Someone who is shy', 'A good cook'],
    correct: 1,
    note: '"7maar" (حمار) = donkey, used as an insult meaning stupid or stubbornly dumb. "Shu 7maar!" = what a donkey/idiot! Very common in Lebanese colloquial speech. The donkey is a symbol of stubbornness across Arab culture. Reply if called this: "7maar? ana? tfeh!" (A donkey? Me? Get outta here!)'
  },
  {
    q: 'What does the idiom "3asfuurein bi 7ajar" mean?',
    opts: ['A bird in the hand', 'Two birds with one stone', 'Don\'t count your chickens', 'Birds of a feather'],
    correct: 1,
    note: '"3asfuurein bi 7ajar" (عصفورين بحجر) = two birds with one stone — accomplishing two goals with one action. Identical in meaning to the English idiom. "3amlet 3asfuurein bi 7ajar" = she killed two birds with one stone. Very commonly used in everyday Lebanese conversation.'
  },
  {
    q: 'What is "il-2uTTa bibkii 3a l-far"?',
    opts: ['A children\'s song about cats', 'The cat is afraid of the mouse', 'The cat cries for the mouse — crocodile tears / fake concern', 'A cute cat that found a friend'],
    correct: 2,
    note: '"Il-2uTTa bibkii 3a l-far" (القطة تبكي عالفار) — the cat weeps over the mouse. Said when someone expresses fake sympathy for someone they caused harm to, or pretends to care while benefiting from your misfortune. Lebanese social commentary at its best.'
  },
  {
    q: 'What does "ghazaal" mean beyond just the animal?',
    opts: ['A type of food', 'Beautiful person / term of endearment', 'A type of fabric', 'A neighborhood name'],
    correct: 1,
    note: '"Ghazaal" (غزال) = gazelle, but also a classic term for a beautiful, graceful person. "Ghazaali" = my gazelle (to someone beautiful). Used in classical Arabic poetry and continues in Lebanese endearments. "Yaa ghazaal" = oh you beautiful one. Gazelles symbolize grace and beauty across the Arab world.'
  },
  {
    q: 'What does "di2b bi jild GHanam" describe?',
    opts: ['A shepherd with many sheep', 'Wolf in sheep\'s clothing — deceptive person', 'A brave warrior', 'A generous host'],
    correct: 1,
    note: '"Di2b bi jild GHanam" (ذئب بجلد غنم) = wolf in sheep\'s clothing — someone who appears harmless but is dangerous or deceitful. The wolf (di2b) is the symbol of cunning threat in Lebanese/Arab folklore, while sheep (GHanam) represent innocence. Used as a serious warning about someone\'s character.'
  },
  {
    q: 'What is a "7ammame" (حمامة) and what does it symbolize?',
    opts: ['An eagle — symbol of strength', 'A dove/pigeon — symbol of peace and love', 'A crow — symbol of bad luck', 'A sparrow — symbol of freedom'],
    correct: 1,
    note: '"7ammame" (حمامة) = dove or pigeon. Doves symbolize peace and love in Lebanese culture — "7ammametii" (my little dove) is an endearment. Pigeon towers (bairj il-7amaam) are a traditional Lebanese architectural feature. The dove also appears in Lebanese poetry as a symbol of longing and homeland.'
  },
  {
    q: 'What does "kalb il-7aara" literally mean and what does it imply?',
    opts: ['A guard dog — very protective', 'The neighborhood dog — everyone\'s problem but no one takes responsibility', 'A loyal friend', 'A dangerous stray'],
    correct: 1,
    note: '"Kalb il-7aara" (كلب الحارة) = the neighborhood dog. Everyone acknowledges it exists but no one claims it or feeds it properly. Used for shared problems that everyone ignores: "il-mushkele hayde kalb il-7aara" = this problem is everyone\'s and no one\'s. A sharp observation on collective responsibility.'
  },
  {
    q: 'What does "thalab" (ثعلب) imply about someone\'s character?',
    opts: ['Bravery and strength', 'Cleverness and cunning / slyness', 'Generosity and warmth', 'Sadness and solitude'],
    correct: 1,
    note: '"Thalab" (ثعلب) = fox. In Lebanese culture, calling someone a fox implies cunning, craftiness, and slyness — not necessarily a compliment. "Huwe thalab" = he\'s a fox (he\'s slippery/crafty). Similar to fox symbolism in English. Used in business and politics: "thalab 3ajuuz" = old fox = very cunning veteran.'
  },
  {
    q: 'What does "naHle" (نحلة) represent beyond just "bee"?',
    opts: ['Laziness', 'Hard work and industriousness', 'Speed', 'Beauty'],
    correct: 1,
    note: '"NaHle" (نحلة) = bee. Bees are symbols of hard work in Lebanese culture — "shGHeel il-naHal" (bee\'s work) means very diligent effort. "Zayy il-naHle" = like a bee = always busy working. Honey (3asal) is prized — "3asali" (my honey) is a term of endearment. Beekeeping is a traditional Lebanese mountain practice.'
  },
  {
    q: 'What does "zayy il-2uTTa" say about a person?',
    opts: ['They are clumsy', 'They always land on their feet / they\'re crafty and adaptable', 'They are quiet and shy', 'They are very clean'],
    correct: 1,
    note: '"Zayy il-2uTTa" (زي القطة) = like a cat — always lands on its feet no matter what happens. Said of someone remarkably resilient, adaptable, or who always comes out fine despite trouble. Lebanese cats are notoriously street-smart survivors. "Huwe zayy il-2uTTa, byanjaH bi kull shi" = he\'s like a cat, succeeds in everything.'
  },
];

const ZWY_TIPS = [
  {
    title: 'Animals as Insults and Compliments',
    body: 'Lebanese Arabic uses animals richly for character description. Insults: "7maar" (donkey = dumb), "khanzeer" (pig = dirty/greedy), "2afaa" (viper = treacherous), "Dabba3" (hyena = sly/ugly). Compliments: "ghazaal" (gazelle = beautiful), "nasr" (eagle = noble/proud), "asad" (lion = brave). "Ya asadi" = my lion = you\'re so brave. Learning these doubles your ability to read Lebanese emotional expression.'
  },
  {
    title: 'The Cat in Lebanese Culture',
    body: 'Cats (2uTTa) are beloved in Lebanon — Beirut is famous for its large street cat population. Lebanese people feed neighborhood cats as a social norm. "Kalb willa 2uTTa?" (dog or cat person?) is a real personality question. Cats symbolize independence, adaptability, and street smarts. The idiom "zayy il-2uTTa" (always lands on its feet) reflects admiration for resilience — a quality highly valued in Lebanon\'s chaotic context.'
  },
  {
    title: 'The Dove: Lebanon\'s Bird of Peace',
    body: 'The dove (7ammame) holds special significance in Lebanon. As a Phoenician seafaring nation, Lebanon appears in ancient texts as a land of doves. The phrase "risaalet il-7ammame" (the dove\'s message) means a message of peace. Lebanese weddings often release white doves. The cedar tree and the dove together represent Lebanese national identity: roots and peace. "7ammametii" to a child = my little dove = pure affection.'
  },
  {
    title: 'Wolf & Fox: Cunning in Lebanese Idiom',
    body: 'The wolf (di2b) and fox (thalab) appear constantly in Lebanese warnings about deceptive people. "Di2b bi jild GHanam" (wolf in sheep\'s clothing) is probably Lebanon\'s most-used animal idiom for fake people. "Thalab 3ajuuz" (old fox) = wily veteran who can\'t be fooled. These idioms are especially common in discussing politics and business. When a Lebanese person warns "fi thalab bi hal shi" = there\'s a fox in this matter = watch out.'
  },
  {
    title: 'Animals in Lebanese Endearments',
    body: 'Lebanese endearments borrow from animals more than English: "ghazaali" (my gazelle = beautiful), "3usfoori" (my little sparrow = my darling), "7ammametii" (my little dove = my sweetheart), "naHleti" (my little bee = my busy one). These are used especially for children and romantic partners. "Asadi" or "libnayti" for sons/daughters. Understanding these reveals a poetic layer of Lebanese affection that doesn\'t translate literally.'
  },
];

const ZWY_ABOUT = 'Lebanese Arabic is rich with animal vocabulary that extends far beyond the literal — every creature carries cultural weight, moral meaning, and emotional color. From the resilient street cat of Beirut to the wolf-in-sheep\'s-clothing warning, from the gazelle of classical poetry to the hardworking bee of mountain villages, animals animate Lebanese speech with idiom and imagery. Learning this vocabulary unlocks a layer of Lebanese expression that is both ancient and deeply everyday.';
