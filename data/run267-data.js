// Run #267 — Lebanese Colors & Descriptions Coach (cds)
// Colors, adjective patterns, descriptive phrases, Lebanese color idioms — 40 items, MCQ drill, 5 tips

const CDS_WORDS = [
  // basic colors
  { tr: '2a7mar',       ar: 'أحمر',        en: 'red',                             cat: 'colors' },
  { tr: 'azra2',        ar: 'أزرق',        en: 'blue',                            cat: 'colors' },
  { tr: '2akhDar',      ar: 'أخضر',        en: 'green',                           cat: 'colors' },
  { tr: '2asfar',       ar: 'أصفر',        en: 'yellow',                          cat: 'colors' },
  { tr: '2abyaD',       ar: 'أبيض',        en: 'white',                           cat: 'colors' },
  { tr: '2iswed',       ar: 'أسود',        en: 'black',                           cat: 'colors' },
  { tr: 'benne',        ar: 'بني',         en: 'brown',                           cat: 'colors' },
  { tr: 'banafsaji',    ar: 'بنفسجي',      en: 'purple / violet',                 cat: 'colors' },
  { tr: 'burtI2ali',    ar: 'برتقالي',     en: 'orange',                          cat: 'colors' },
  { tr: 'ramadi',       ar: 'رمادي',       en: 'grey',                            cat: 'colors' },
  { tr: 'zahri',        ar: 'زهري',        en: 'pink',                            cat: 'colors' },
  { tr: 'dahabi',       ar: 'ذهبي',        en: 'golden / gold',                   cat: 'colors' },
  // size & shape adjectives
  { tr: 'kbiir',        ar: 'كبير',        en: 'big / large',                     cat: 'size' },
  { tr: 'zghiir',       ar: 'زغير',        en: 'small / little',                  cat: 'size' },
  { tr: 'Tawiil',       ar: 'طويل',        en: 'tall / long',                     cat: 'size' },
  { tr: '2aSiir',       ar: 'قصير',        en: 'short',                           cat: 'size' },
  { tr: '3ariid',       ar: 'عريض',        en: 'wide / broad',                    cat: 'size' },
  { tr: 'rfeii3',       ar: 'رفيع',        en: 'thin / narrow',                   cat: 'size' },
  // quality adjectives
  { tr: 'mniH',         ar: 'منيح',        en: 'good / nice',                     cat: 'quality' },
  { tr: 'mesh mniH',    ar: 'مش منيح',     en: 'not good / bad',                  cat: 'quality' },
  { tr: 'zaki',         ar: 'زاكي',        en: 'tasty / delicious',               cat: 'quality' },
  { tr: 'jdiid',        ar: 'جديد',        en: 'new',                             cat: 'quality' },
  { tr: '2adiim',       ar: 'قديم',        en: 'old (thing)',                     cat: 'quality' },
  { tr: 'nDiif',        ar: 'نظيف',        en: 'clean',                           cat: 'quality' },
  { tr: 'wasikh',       ar: 'وسخ',         en: 'dirty',                           cat: 'quality' },
  { tr: 'ghali',        ar: 'غالي',        en: 'expensive / dear',                cat: 'quality' },
  { tr: 'rkhiiS',       ar: 'رخيص',        en: 'cheap',                           cat: 'quality' },
  { tr: 'SaHi',         ar: 'صحي',         en: 'healthy / correct',               cat: 'quality' },
  // feeling adjectives
  { tr: 'mabSouT',      ar: 'مبسوط',       en: 'happy / pleased',                 cat: 'feeling' },
  { tr: 'za3laan',      ar: 'زعلان',       en: 'sad / upset',                     cat: 'feeling' },
  { tr: 'ta3baan',      ar: 'تعبان',       en: 'tired / sick',                    cat: 'feeling' },
  { tr: 'jaw3aan',      ar: 'جوعان',       en: 'hungry',                          cat: 'feeling' },
  { tr: '3aTshaan',     ar: 'عطشان',       en: 'thirsty',                         cat: 'feeling' },
  { tr: 'naw3aan',      ar: 'نعسان',       en: 'sleepy',                          cat: 'feeling' },
  // descriptive phrases
  { tr: 'mesh 3aarif',  ar: 'مش عارف',     en: 'I don\'t know (m)',               cat: 'phrases' },
  { tr: 'mesh 3arfe',   ar: 'مش عارفة',    en: 'I don\'t know (f)',               cat: 'phrases' },
  { tr: 'ktiir 7elwe',  ar: 'كتير حلوة',   en: 'very beautiful (f)',              cat: 'phrases' },
  { tr: 'ktiir mniH',   ar: 'كتير منيح',   en: 'very good',                       cat: 'phrases' },
  { tr: 'shouffe shu',  ar: 'شوفه شو',     en: 'look at it! (it\'s something)',   cat: 'phrases' },
  { tr: '7elwe ktir',   ar: 'حلوة كتير',   en: 'really beautiful',                cat: 'phrases' },
];

const CDS_DRILLS = [
  {
    q: 'How do you say "big" in Lebanese Arabic?',
    opts: ['zghiir', 'Tawiil', 'kbiir', 'rfeii3'],
    correct: 2,
    note: '"kbiir" = big/large (كبير). Antonym: "zghiir" = small. Lebanese "zghiir" vs MSA "Saghiir" — a key dialectal shift. "Tawiil" = tall/long; "rfeii3" = thin/narrow. Pair to drill: kbiir/zghiir and Tawiil/2aSiir.'
  },
  {
    q: 'What color is "azra2"?',
    opts: ['red', 'green', 'blue', 'yellow'],
    correct: 2,
    note: '"azra2" = blue (أزرق). Color memory: "2a7mar" (red — think: 7 = ح like "heat"), "azra2" (blue — think: azure), "2akhDar" (green), "2asfar" (yellow). Lebanese sky = "el-sama azra2" (the sky is blue).'
  },
  {
    q: 'How do you say "happy / pleased" in Lebanese Arabic?',
    opts: ['ta3baan', 'za3laan', 'mabSouT', 'jaw3aan'],
    correct: 2,
    note: '"mabSouT" = happy/pleased (مبسوط). Essential feeling words: "mabSouT" (happy), "za3laan" (sad/upset), "ta3baan" (tired/sick), "jaw3aan" (hungry), "3aTshaan" (thirsty). These -aan endings mark state adjectives in Lebanese.'
  },
  {
    q: 'What does "ghali" mean?',
    opts: ['free / cheap', 'expensive / dear', 'old', 'dirty'],
    correct: 1,
    note: '"ghali" = expensive/dear (غالي). Also means "precious" — "ghali 3alayi" = dear to me (term of endearment). Antonym: "rkhiiS" = cheap. Price negotiation: "hada ghali ktir!" = this is very expensive! "fi shi arkhaS?" = is there something cheaper?'
  },
  {
    q: 'How do you say "clean" in Lebanese Arabic?',
    opts: ['wasikh', 'nDiif', '2adiim', 'jdiid'],
    correct: 1,
    note: '"nDiif" = clean (نظيف). Antonym: "wasikh" = dirty. Lebanese cleanliness culture: "beit nDiif" = clean house (high compliment), "il-beit il-nDiif" = the clean house. "nDaafe" (noun) = cleanliness. "wasikh" can describe behavior too: "shi wasikh" = a dirty thing (morally).'
  },
  {
    q: 'What does "ta3baan" mean?',
    opts: ['hungry', 'happy', 'tired / sick', 'thirsty'],
    correct: 2,
    note: '"ta3baan" = tired/sick (تعبان). Dual meaning: "ta3baan min el-shughul" = tired from work, "ta3baan" = I\'m not feeling well (sick). Response: "salamtek!" (get well — m) / "salametkii!" (f). "3aTshaan" = thirsty; "jaw3aan" = hungry; "mabSouT" = happy.'
  },
  {
    q: 'How do you say "new" in Lebanese Arabic?',
    opts: ['2adiim', 'jdiid', 'nDiif', 'kbiir'],
    correct: 1,
    note: '"jdiid" = new (جديد). Antonym: "2adiim" = old (thing). Note: "2adiim" for things/objects (old phone = telefon 2adiim). For old people: "3ajuuz" (old woman/man). "jdiid" extends to new ideas: "fikra jdiide" = a new idea.'
  },
  {
    q: 'What color is "2akhDar"?',
    opts: ['yellow', 'blue', 'red', 'green'],
    correct: 3,
    note: '"2akhDar" = green (أخضر). Lebanese proverb: "el-jiran il-2akhDar" — but mostly known as the color of Lebanon\'s cedar tree. "2akhDar" also means go-ahead/OK (like a green light). "2aDDa 2akhDar" = gave the green light.'
  },
  {
    q: 'How do you say "I don\'t know" in Lebanese Arabic?',
    opts: ['mesh mniH', 'mesh 3aarif', 'mesh kbiir', 'mesh jdiid'],
    correct: 1,
    note: '"mesh 3aarif" = I don\'t know (m) / "mesh 3arfe" (f). "mesh" = not/un- (Lebanese negation). Combined: "mesh + adjective" = the negative form. "mesh mniH" = not good. "ma ba3rif" is another form (more formal). "3aarif" from عرف = to know.'
  },
  {
    q: 'What does "zahri" mean?',
    opts: ['golden', 'grey', 'purple', 'pink'],
    correct: 3,
    note: '"zahri" = pink (زهري — from زهر = flower). Lebanese color names from nature: "zahri" (pink/flowery), "burtI2ali" (orange/from برتقال = orange fruit), "benne" (brown/coffee-colored). "dahabi" = golden (from ذهب = gold). "ramadi" = grey (from رماد = ash).'
  },
];

const CDS_TIPS = [
  { title: 'Lebanese color words — patterns and origins', body: 'Lebanese color adjectives follow the MSA pattern for basic colors (2af3al structure) but are pronounced in dialect: "2a7mar" (red), "azra2" (blue), "2akhDar" (green), "2asfar" (yellow), "2abyaD" (white), "2iswed" (black). Secondary colors often borrow from the thing they resemble: "burtI2ali" (orange = from برتقال, the orange fruit), "benne" (brown = from بن, coffee/beans), "zahri" (pink = from زهر, flowers), "ramadi" (grey = from رماد, ash). Knowing the source word unlocks the color name.' },
  { title: 'Adjective agreement in Lebanese (simplified)', body: 'Lebanese adjectives agree with the noun\'s gender — simpler than MSA because there\'s no case system. Masculine: "kbiir", feminine: "kbiire" (add -e). "beit kbiir" (big house, m) vs "ghurfe kbiire" (big room, f). Color adjectives: "2a7mar" (m) vs "7amra" (f) — the pattern shifts: the masculine form is "2af3al", feminine is "fa3la". "el-sayyara el-7amra" = the red car. Plural: often uninflected in speech — "3alam kbaar" (big people).' },
  { title: 'The -aan adjective pattern for states', body: 'Lebanese uses the "-aan" suffix for temporary states, especially physical/emotional states: "jaw3aan" (hungry), "3aTshaan" (thirsty), "ta3baan" (tired/sick), "za3laan" (sad/upset), "mabSouT" (pleased/happy), "naw3aan" (sleepy), "baardan" (cold), "7arraan" (hot). These are always temporary — you\'re in this state right now, not permanently. Female form adds -e: "jaw3aane", "ta3baane". When you know this pattern, you can guess dozens of state adjectives from root verbs.' },
  { title: 'Describing things — Lebanese intensifiers', body: '"ktir" (a lot / very) is the main intensifier: "ktir mniH" = very good, "ktir kbiir" = very big, "ktir ghali" = very expensive. Placement: "adjective + ktir" OR "ktir + adjective" both work. Stronger: "ktir ktir" = really very/extremely. Other intensifiers: "haydiyye" (what a...! — expressing admiration), "3ajab!" (amazing!), "yiiii!" (wow!), "shouffe shu!" (look at it! = it\'s something else). Colloquial intensifier unique to Lebanon: "walla" used to emphasize: "walla mniH" = honestly it\'s good.' },
  { title: 'Color idioms and expressions in Lebanese', body: 'Colors carry metaphorical weight in Lebanese: "2akhDar" (green) = go-ahead, environment, fresh; "2a7mar" (red) = danger, passion, embarrassment ("wa2af wa wushh-o 2a7mar" = stopped and his face went red); "2abyaD" (white) = clean, pure, blank ("Saf7a byaDa" = clean slate); "2iswed" (black) = bad luck, dark times ("yom 2iswed" = a dark/bad day). "3een 2azra2" (blue eye) = evil eye protection — the blue hamsa/nazar. Blue eyes are considered both beautiful and associated with evil eye power in Levantine culture.' },
];

const CDS_ABOUT = 'Master Lebanese Arabic colors and descriptive vocabulary — basic colors, size and quality adjectives, feeling words, and descriptive phrases. Essential for shopping, describing people and places, and everyday Lebanese conversation.';
