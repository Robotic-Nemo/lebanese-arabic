// Run #387 — Lebanese Compliments & Praise Coach (cpl)
// Categories: appearance | character | skill | social-praise | responses

const CPL_WORDS = [
  // appearance
  { ar: 'حلو/حلوة', tr: '7elo / 7elwe', en: 'handsome / beautiful (m/f)', cat: 'appearance' },
  { ar: 'شيك', tr: 'shiik', en: 'chic / stylish (from French chic)', cat: 'appearance' },
  { ar: 'ناعم/ناعمة', tr: 'naa3em / naa3me', en: 'smooth / elegant / well-groomed (m/f)', cat: 'appearance' },
  { ar: 'متأنق/ة', tr: 'mta2anne2 / mta2anne2a', en: 'dressed up / well-dressed (m/f)', cat: 'appearance' },
  { ar: 'وجهك بيضوي', tr: 'wajhak byiDwe', en: 'your face glows (lit. your face illuminates)', cat: 'appearance' },
  { ar: 'ما شاء الله', tr: 'ma sha2 alla', en: 'God willed it — admiration, wards off evil eye', cat: 'appearance' },
  { ar: 'تقبرني', tr: 'ti2burni', en: 'may you bury me (deepest term of endearment)', cat: 'appearance' },
  { ar: 'عيونك', tr: '3yuunak', en: 'your eyes (admiring someone\'s eyes)', cat: 'appearance' },
  // character
  { ar: 'طيب/طيبة', tr: 'Tayyeb / Tayyeba', en: 'kind-hearted / good person (m/f)', cat: 'character' },
  { ar: 'قلبو/ا ذهب', tr: '2albo / 2alba dhahab', en: 'his/her heart is gold (golden-hearted)', cat: 'character' },
  { ar: 'منيح/ة كتير', tr: 'mniih / mniie7a ktiir', en: 'very good / excellent (m/f)', cat: 'character' },
  { ar: 'أصيل/ة', tr: '2asiil / 2asiila', en: 'of noble character / authentic (m/f)', cat: 'character' },
  { ar: 'ابن/ت الحلال', tr: 'ibn / bint il-7alaal', en: 'son/daughter of the righteous (person of integrity)', cat: 'character' },
  { ar: 'ما بيتغير', tr: 'ma bitghayyar', en: 'you haven\'t changed (compliment on staying true)', cat: 'character' },
  { ar: 'واحد ع الألف', tr: 'waa7ed 3al-2alf', en: 'one in a thousand (rare and exceptional)', cat: 'character' },
  { ar: 'دهبة', tr: 'dahabe', en: 'a golden one (term of endearment for a good person)', cat: 'character' },
  // skill
  { ar: 'شاطر/ة', tr: 'shaaTer / shaaTra', en: 'clever / skilled / capable (m/f)', cat: 'skill' },
  { ar: 'هيدا شغل', tr: 'heyda shghol', en: 'that\'s real work! (praising quality)', cat: 'skill' },
  { ar: 'كفو/ة', tr: 'kafo / kafwe', en: 'efficient / capable (Lebanese slang, m/f)', cat: 'skill' },
  { ar: 'محترف/ة', tr: 'mu7tarif / mu7tarife', en: 'professional / expert (m/f)', cat: 'skill' },
  { ar: 'ما شي', tr: 'maashi', en: 'it\'s going well / excellent (casual approval)', cat: 'skill' },
  { ar: 'بتعرف شو بتعمل', tr: 'bta3ref shu bta3mil', en: 'you know what you\'re doing (skill compliment)', cat: 'skill' },
  { ar: 'على المية', tr: '3al-miyye', en: 'perfect / a hundred percent (praising work)', cat: 'skill' },
  { ar: 'دمك خفيف', tr: 'dammak khafiif', en: 'your blood is light (you\'re fun / easy company)', cat: 'skill' },
  // social-praise
  { ar: 'نوّرتنا', tr: 'nawwartna', en: 'you lit us up (you honored us with your presence)', cat: 'social-praise' },
  { ar: 'ضيّفتنا', tr: 'Dayyaftna', en: 'you hosted us well / you were generous', cat: 'social-praise' },
  { ar: 'الله يخليلك', tr: 'alla ykhallii-lak', en: 'may God keep [them] for you (praise + blessing)', cat: 'social-praise' },
  { ar: 'يعطيك العافية', tr: 'ya3tiik il-3aafye', en: 'may God give you health (praising effort)', cat: 'social-praise' },
  { ar: 'عن جد', tr: '3an jadd', en: 'seriously / for real (intensifier for compliments)', cat: 'social-praise' },
  { ar: 'الله يبارك فيك', tr: 'alla ybaarak fiik', en: 'God bless you (warm praise response)', cat: 'social-praise' },
  { ar: 'بتشرّف', tr: 'btisharraf', en: 'I am honored (response to a compliment)', cat: 'social-praise' },
  { ar: 'طعمة يد', tr: 'Ta3met iid', en: 'the taste of your hand (praising someone\'s cooking)', cat: 'social-praise' },
  // responses
  { ar: 'الله يكرمك', tr: 'alla yikrimak', en: 'may God honor you (response to compliment)', cat: 'responses' },
  { ar: 'بالعكس', tr: 'bil-3aks', en: 'on the contrary! (deflecting a compliment modestly)', cat: 'responses' },
  { ar: 'حاشاك', tr: '7aashak', en: 'God forbid / you\'re too kind (modest deflection)', cat: 'responses' },
  { ar: 'كمان وكمان', tr: 'kamaan w kamaan', en: 'more and more! (accepting praise warmly)', cat: 'responses' },
  { ar: 'من فمّك لربّنا', tr: 'min fammak la-rabbna', en: 'from your mouth to God\'s ears', cat: 'responses' },
  { ar: 'الله يسلمك', tr: 'alla ysallmak', en: 'may God keep you safe (warm response)', cat: 'responses' },
  { ar: 'عيني', tr: '3eeni', en: 'my eye (term of endearment / warm response)', cat: 'responses' },
  { ar: 'روحي', tr: 'ruu7i', en: 'my soul (deepest term of endearment in response)', cat: 'responses' },
];

const CPL_DRILLS = [
  {
    q: 'What does "ma sha2 alla" mean in Lebanese compliment culture?',
    opts: ['ma sha2 alla', 'alla ybaarak fiik', '3an jadd', 'ma bitghayyar'],
    correct: 0,
    note: '"ma sha2 alla" (ما شاء الله) — God willed it. Said when admiring someone or something beautiful to acknowledge that God made it so — and crucially to ward off the evil eye (3ein). In Lebanon, you MUST say "ma sha2 alla" when complimenting a child, a new baby, a new car, or anything precious. Forgetting it implies you\'re casting the evil eye.',
  },
  {
    q: 'What does "ti2burni" mean?',
    opts: ['ti2burni', 'ruu7i', '3eeni', 'dahabe'],
    correct: 0,
    note: '"ti2burni" (تقبرني) — literally "may you bury me," meaning "may I die before you so I never have to live without you." The most intense Lebanese term of endearment. Said to children, loved ones, close friends. To Western ears it sounds morbid; to Lebanese ears it\'s the ultimate expression of love. "Ti2burniiiii!" with a drawn-out ending = overwhelmed with love.',
  },
  {
    q: 'What does "dammak khafiif" mean?',
    opts: ['dammak khafiif', '3al-miyye', 'heyda shghol', 'bta3ref shu bta3mil'],
    correct: 0,
    note: '"dammak khafiif" (دمك خفيف) — literally "your blood is light." Means you\'re fun, easy company, a pleasure to be around. The opposite is "dammo tqiil" (heavy blood) = boring, annoying, exhausting. One of the best compliments in Lebanese social life. "Shu dammak khafiif!" = you\'re such a pleasure! Related: "dammak 3al-2alb" = your presence is on my heart.',
  },
  {
    q: 'What is "Ta3met iid"?',
    opts: ['Ta3met iid', 'Dayyaftna', 'nawwartna', 'ya3tiik il-3aafye'],
    correct: 0,
    note: '"Ta3met iid" (طعمة يد) — the taste of your hand. The highest Lebanese food compliment. After eating someone\'s cooking: "walla ta3met iiidak!" = by God the taste of your hand! Implies the cook has a special touch, a gift. Lebanese home cooks take great pride in their "Ta3met iid." Also said simply as "2iiidaik" (your hands) — referring to the blessed hands that cooked.',
  },
  {
    q: 'What does "nawwartna" mean?',
    opts: ['nawwartna', 'Dayyaftna', 'btisharraf', 'alla ykhallii-lak'],
    correct: 0,
    note: '"nawwartna" (نوّرتنا) — you lit us up / you illuminated us. Said when someone arrives at your home or event — their presence is like light. From "nuur" (نور) = light. "Nuurtak" = your light. "Nuur 3ala nuur" = light upon light (even better). The light metaphor is everywhere in Lebanese praise: presence = light, people = sources of light.',
  },
  {
    q: 'What does "2albo dhahab" mean?',
    opts: ['2albo dhahab', 'ibn il-7alaal', 'waa7ed 3al-2alf', '2asiil'],
    correct: 0,
    note: '"2albo dhahab" (قلبو ذهب) — his heart is gold. The highest character compliment. Lebanese praise focuses heavily on the heart: "2alb Tayyeb" (good heart), "2alb kbiir" (big heart = generous), "2albo maa3o" (his heart is with him = kind). Character praise > appearance praise in deeper Lebanese relationships.',
  },
  {
    q: 'What does "bil-3aks" mean when responding to a compliment?',
    opts: ['bil-3aks', '7aashak', 'kamaan w kamaan', 'min fammak la-rabbna'],
    correct: 0,
    note: '"bil-3aks" (بالعكس) — on the contrary! Used to modestly deflect a compliment: someone says "you\'re so kind!" → you say "bil-3aks!" (no no, YOU are the kind one). Lebanese compliment culture involves layered deflections and counter-compliments. Simply accepting a compliment directly can seem arrogant — deflect first, then accept graciously.',
  },
  {
    q: 'What does "ya3tiik il-3aafye" mean?',
    opts: ['ya3tiik il-3aafye', 'alla ybaarak fiik', 'alla yikrimak', 'alla ysallmak'],
    correct: 0,
    note: '"ya3tiik il-3aafye" (يعطيك العافية) — may God give you health/strength. Said to someone working, after they completed a task, or when you appreciate their effort. "3aafye" = health/vitality. Response: "alla y3aafik" (may God keep you healthy). One of the most commonly heard Lebanese phrases — a warm acknowledgment of any effort or work.',
  },
  {
    q: 'What does "kafo" mean?',
    opts: ['kafo', 'shaaTer', 'mu7tarif', 'mniih ktiir'],
    correct: 0,
    note: '"kafo" (كفو) — capable, efficient, competent. Lebanese slang from fuSHa "kuf\'u" (equal/match). "Kafo bass!" = just great! "Huwe kafo" = he\'s a capable guy. Very common informal compliment for competence. "Kafwe" = feminine form. One of those Lebanese words that carries warm approval beyond just its literal meaning.',
  },
  {
    q: 'What does "min fammak la-rabbna" mean?',
    opts: ['min fammak la-rabbna', 'alla yikrimak', 'kamaan w kamaan', 'btisharraf'],
    correct: 0,
    note: '"min fammak la-rabbna" (من فمّك لربّنا) — from your mouth to God\'s ears. Said when someone says something you hope comes true: "you\'ll be successful!" → "min fammak la-rabbna." Universal expression of hope across all Lebanese religions. "Fammak" = your mouth. "Rabbna" = our Lord.',
  },
];

const CPL_TIPS = [
  'Lebanese compliment culture is elaborate and layered. Giving compliments is a social obligation — not complimenting someone\'s new haircut, baby, or cooking is noticeable. Receiving compliments requires proper deflection ("bil-3aks!") before gracious acceptance. The exchange of praise is a bonding ritual, not just politeness.',
  'Always say "ma sha2 alla" (ما شاء الله) when complimenting children, babies, new possessions, or anything precious. Omitting it implies you\'re casting the evil eye (3ein). Lebanese people, even non-religious ones, observe this. It\'s so automatic that forgetting feels rude. Add "alla yHmiik" (may God protect) for extra protection.',
  '"Ti2burni" (تقبرني) may sound morbid to outsiders but is the deepest Lebanese endearment — "may I die before you so I don\'t have to live without you." Similar expressions: "ta2burni b-3uyuunak" (bury me in your eyes), "ta2burnii" (with drawn vowel = overwhelming love). Used freely with children, lovers, close friends.',
  'The "light" (nuur) metaphor is central to Lebanese praise. "Nawwartna" (you lit us up), "nuurtak" (your light), "wajhak byiDwe" (your face glows). When Lebanese say your presence illuminates a space, they mean it. Light = blessing, grace, honor. This metaphor runs through hospitality vocabulary too: guests bring light.',
  '"Dammak khafiif" vs. "dammo tqiil" — one of the most important Lebanese social assessments. Someone with light blood (khafiif) is fun, warm, easy. Someone with heavy blood (tqiil) is a drag. You want your blood to be light. Lebanese social status is heavily tied to being likeable company — "biHibbuna il-naas" (people love him/her) is high praise.',
];

const CPL_ABOUT = 'Lebanese compliment culture is an art form. In a society built on relationships, hospitality, and warmth, the ability to praise generously and receive graciously is a core social skill. Lebanese compliments are specific, layered, and often invoke God\'s blessing — because true beauty and goodness come from God, and must be acknowledged as such. The evil eye (3ein) is real in Lebanese belief, so every compliment carries the potential responsibility of protection: "ma sha2 alla" guards the praised one. Terms of endearment go to extremes — "ti2burni" (may you bury me), "ruu7i" (my soul), "3eeni" (my eye) — because Lebanese emotional expression tends toward the intense and poetic. Understanding Lebanese praise means understanding the values beneath it: heart over appearance, character over status, warmth over formality.';
