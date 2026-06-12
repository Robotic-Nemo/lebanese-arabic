// R795 — NEW FEATURE: Lebanese Humor & Comedy Expressions (hum)

const HUM_CATS = ['comebacks','teasing','absurdity','expressions'];

const HUM_WORDS = [
  // comebacks
  { a: 'روح شوف حالك', tr: 'ruu7 shuuf 7aalak', en: 'go look at yourself (dismissive comeback)', cat: 'comebacks' },
  { a: 'مش شغلتك', tr: 'mish shughltak', en: "none of your business", cat: 'comebacks' },
  { a: 'يسلم تمك', tr: 'yislam tammak', en: 'bless your mouth (said when told good news or a compliment)', cat: 'comebacks' },
  { a: 'والله ما بعرف', tr: 'walla ma b3ref', en: 'honestly I have no idea', cat: 'comebacks' },
  { a: 'خليك بحالك', tr: 'khalliik b7aalak', en: 'mind your own business / leave yourself alone', cat: 'comebacks' },
  { a: 'مش لازم تزعل', tr: 'mish laazem tiz3al', en: "no need to get upset (said teasingly)", cat: 'comebacks' },
  { a: 'تمّ', tr: 'tamm', en: 'zip it / shut up (blunt but comic)', cat: 'comebacks' },
  // teasing
  { a: 'شاطر', tr: 'shaaTer', en: "clever you! (sarcastic)", cat: 'teasing' },
  { a: 'ذكي', tr: 'zakii', en: 'so smart (heavy sarcasm)', cat: 'teasing' },
  { a: 'انت قديش كبير؟', tr: '2inta 2addeesh kibiir?', en: 'how old are you exactly? (said to someone acting childish)', cat: 'teasing' },
  { a: 'يي انت هون؟', tr: 'yii inta hon?', en: 'oh you\'re here? (surprised mock greeting)', cat: 'teasing' },
  { a: 'حبيبي الغالي', tr: '7abiibii l-ghaalii', en: 'my dearest darling (dripping with sarcasm)', cat: 'teasing' },
  { a: 'الله يعطيك العافية', tr: 'alla y3Tiik l-3aafye', en: 'God give you strength (said sarcastically when someone complains)', cat: 'teasing' },
  // absurdity
  { a: 'هيدا إنت', tr: 'hayda 2into', en: 'this is you (pointing out someone\'s ridiculousness)', cat: 'absurdity' },
  { a: 'ما في داعي', tr: 'ma fii daa3ii', en: 'there\'s no need (said when something is obviously unnecessary)', cat: 'absurdity' },
  { a: 'شو هالحكي؟', tr: 'shu hal7akii?', en: 'what is this talk? (incredulous disbelief)', cat: 'absurdity' },
  { a: 'عم تحكي جد؟', tr: '3am ti7kii jadd?', en: 'are you seriously talking? / are you kidding?', cat: 'absurdity' },
  { a: 'بدك تقلعني', tr: 'baddak 2t2al3nii', en: 'you want to drive me crazy', cat: 'absurdity' },
  { a: 'هاد شو بيصير', tr: 'haad shu biysiir', en: 'this is what happens / this is life (resigned humor)', cat: 'absurdity' },
  { a: 'مش معقول', tr: 'mish ma32uul', en: 'unbelievable / impossible (exasperated)', cat: 'absurdity' },
  // expressions
  { a: 'يخرب بيتك', tr: 'ykhrab beetak', en: 'may your house be ruined (affectionate curse — used like "you rascal!")', cat: 'expressions' },
  { a: 'يلعن دينك', tr: 'yil3an diinak', en: 'damn your religion (strong curse used casually between friends)', cat: 'expressions' },
  { a: 'الله يلعن أبوك', tr: 'alla yil3an 2abuuk', en: 'God curse your father (playful insult between close friends)', cat: 'expressions' },
  { a: 'بدك تاكل قلبي', tr: 'baddak taakul 2albii', en: 'you want to eat my heart (you\'re worrying me to death)', cat: 'expressions' },
  { a: 'حلو الحكي', tr: '7elo l-7akii', en: 'nice talk (it\'s easy to say but hard to do)', cat: 'expressions' },
  { a: 'يا حرام عليك', tr: 'ya 7araam 3leek', en: 'shame on you / how could you (sometimes playfully)', cat: 'expressions' },
  { a: 'طلعت الروح', tr: 'Tl3at l-ruu7', en: 'the soul left (I nearly died laughing / from effort)', cat: 'expressions' },
  { a: 'من الآخر', tr: 'mn l-aakher', en: 'from the end / cut to the chase', cat: 'expressions' }
];

const HUM_DRILLS = [
  { q: 'What does "ruu7 shuuf 7aalak" mean?', a: 'go look at yourself (dismissive)', hint: 'literal: go see your situation' },
  { q: '"ShaaTeR" said sarcastically means...', a: 'clever you (sarcasm)', hint: 'literally "clever/skilled"' },
  { q: 'How do you say "none of your business"?', a: 'mish shughltak', hint: 'shughel = work/business' },
  { q: '"Ykhrab beetak" is an affectionate...', a: 'playful curse between friends', hint: 'literally "may your house be ruined"' },
  { q: '"3am ti7kii jadd?" means...', a: 'are you serious / are you kidding?', hint: 'jadd = serious' },
  { q: 'What is "mish ma32uul"?', a: 'unbelievable / impossible', hint: 'ma32uul = rational/possible' },
  { q: '"Yislam tammak" is said when...', a: 'told good news (bless your mouth)', hint: 'tamm = mouth' },
  { q: '"Shu hal7akii?" expresses...', a: 'incredulous disbelief', hint: '7akii = talk/speech' },
  { q: 'What does "7elo l-7akii" imply?', a: "it's easy to say but hard to do", hint: 'talk is cheap' },
  { q: '"Tl3at l-ruu7" means...', a: 'soul left (nearly died laughing/from effort)', hint: 'ruu7 = soul' },
  { q: '"Mn l-aakher" means...', a: 'cut to the chase / from the end', hint: 'aakher = end/last' },
  { q: 'How do you tease someone acting childish?', a: '2inta 2addeesh kibiir?', hint: 'how old are you exactly?' },
  { q: '"Khalliik b7aalak" means...', a: 'mind your own business', hint: 'literally: stay in your state' },
  { q: '"Ya 7araam 3leek" expresses...', a: 'shame on you (sometimes playful)', hint: '7araam = forbidden/shame' },
  { q: '"Baddak 2t2al3nii" means...', a: 'you want to drive me crazy', hint: '2t2al3 = to uproot/drive mad' }
];

const HUM_TIPS = [
  '"Ykhrab beetak" sounds vicious but between close friends it\'s pure affection — context is everything in Lebanese cursing.',
  'Sarcasm is a Lebanese art form. "ShaaTeR" and "zakii" with flat intonation mean the exact opposite of their literal meaning.',
  '"Mn l-aakher" (from the end/cut to the chase) is used constantly when someone is being long-winded — very Lebanese.',
  'Lebanese humor often uses exaggeration: "Tl3at l-ruu7" (the soul left) for anything even slightly intense.',
  '"7abiibii l-ghaalii" dripping with sarcasm is a classic Lebanese put-down — extra sweetness = extra shade.',
  'Strong curses like "yil3an diinak" are used casually between friends in Lebanon — outsiders should use with caution!'
];
