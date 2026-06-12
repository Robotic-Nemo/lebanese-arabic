// Run #237 — Lebanese Adjectives & Descriptors Coach (des)
// Size, quality, state, degree, character — 40 items, MCQ drill, 5 tips

const DES_WORDS = [
  // size & appearance
  { tr: 'kbir',       ar: 'كبير',     en: 'big / large',                cat: 'size' },
  { tr: 'zghir',      ar: 'زغير',     en: 'small / young',              cat: 'size' },
  { tr: 'Tawil',      ar: 'طويل',     en: 'tall / long',                cat: 'size' },
  { tr: '2aSir',      ar: 'قصير',     en: 'short',                      cat: 'size' },
  { tr: 'tkhiin',     ar: 'تخين',     en: 'fat / thick',                cat: 'size' },
  { tr: 'rfi3',       ar: 'رفيع',     en: 'thin / slim',                cat: 'size' },
  { tr: 'wsi3',       ar: 'واسع',     en: 'wide / spacious',            cat: 'size' },
  { tr: 'Day2',       ar: 'ضيق',      en: 'narrow / tight',             cat: 'size' },
  // quality & condition
  { tr: 'mni7',       ar: 'منيح',     en: 'good / nice',                cat: 'quality' },
  { tr: '7elo',       ar: 'حلو',      en: 'sweet / pretty / cool',      cat: 'quality' },
  { tr: 'khi2',       ar: 'خيي',      en: 'bad / ugly',                 cat: 'quality' },
  { tr: 'nDif',       ar: 'نضيف',     en: 'clean',                      cat: 'quality' },
  { tr: 'wasikh',     ar: 'وسخ',      en: 'dirty',                      cat: 'quality' },
  { tr: 'jdid',       ar: 'جديد',     en: 'new',                        cat: 'quality' },
  { tr: '2adim',      ar: 'قديم',     en: 'old (thing)',                cat: 'quality' },
  { tr: 'ghali',      ar: 'غالي',     en: 'expensive / precious / dear', cat: 'quality' },
  { tr: 'rkhiS',      ar: 'رخيص',     en: 'cheap / inexpensive',        cat: 'quality' },
  { tr: 'sa7i7',      ar: 'صحيح',     en: 'correct / true / right',     cat: 'quality' },
  { tr: '2aSli',      ar: 'أصلي',     en: 'original / genuine / real',  cat: 'quality' },
  // state & feeling
  { tr: 'fara7an',    ar: 'فرحان',    en: 'happy / joyful',             cat: 'state' },
  { tr: 'za3lan',     ar: 'زعلان',    en: 'sad / upset / angry',        cat: 'state' },
  { tr: 'ta3ban',     ar: 'تعبان',    en: 'tired / unwell',             cat: 'state' },
  { tr: '3aTshan',    ar: 'عطشان',    en: 'thirsty',                    cat: 'state' },
  { tr: 'jaw3an',     ar: 'جوعان',    en: 'hungry',                     cat: 'state' },
  { tr: 'khayef',     ar: 'خايف',     en: 'scared / afraid',            cat: 'state' },
  { tr: 'mabsouT',    ar: 'مبسوط',    en: 'pleased / content / happy',  cat: 'state' },
  { tr: 'bared',      ar: 'بارد',     en: 'cold',                       cat: 'state' },
  // degree & stance
  { tr: 'ktir',       ar: 'كتير',     en: 'a lot / very / many',        cat: 'degree' },
  { tr: 'shway',      ar: 'شوي',      en: 'a little / a bit / some',    cat: 'degree' },
  { tr: '3adi',       ar: 'عادي',     en: 'normal / ordinary / so what',cat: 'degree' },
  { tr: 'laazem',     ar: 'لازم',     en: 'necessary / must',           cat: 'degree' },
  { tr: 'ta2riban',   ar: 'تقريبا',   en: 'approximately / almost',     cat: 'degree' },
  { tr: 'mish laazem', ar: 'مش لازم', en: 'not necessary / no need',    cat: 'degree' },
  // character & personality
  { tr: 'zaki',       ar: 'ذكي',      en: 'smart / clever',             cat: 'character' },
  { tr: 'ghabi',      ar: 'غبي',      en: 'dumb / foolish',             cat: 'character' },
  { tr: 'sha2i',      ar: 'شقي',      en: 'naughty / mischievous',      cat: 'character' },
  { tr: 'khabiis',    ar: 'خبيث',     en: 'sneaky / cunning / wicked',  cat: 'character' },
  { tr: 'kariim',     ar: 'كريم',     en: 'generous',                   cat: 'character' },
  { tr: 'Tayyeb',     ar: 'طيب',      en: 'kind / good-natured',        cat: 'character' },
  { tr: 'mazbouT',    ar: 'مضبوط',    en: 'precise / proper / exact',   cat: 'character' },
];

const DES_DRILLS = [
  {
    q: 'How do you say "big / large" in Lebanese Arabic?',
    opts: ['zghir', 'kbir', 'Tawil', '2aSir'],
    correct: 1,
    note: '"kbir" = big; "zghir" = small; "Tawil" = tall; "2aSir" = short'
  },
  {
    q: 'What does "fara7an" mean?',
    opts: ['tired', 'scared', 'sad', 'happy / joyful'],
    correct: 3,
    note: '"fara7an" = happy/joyful; "ta3ban" = tired; "khayef" = scared; "za3lan" = sad/upset'
  },
  {
    q: 'How do you say "cheap / inexpensive" in Lebanese Arabic?',
    opts: ['ghali', 'nDif', 'rkhiS', 'jdid'],
    correct: 2,
    note: '"rkhiS" = cheap; "ghali" = expensive; "nDif" = clean; "jdid" = new'
  },
  {
    q: 'What does "ktir" mean?',
    opts: ['a little', 'normal', 'a lot / very', 'necessary'],
    correct: 2,
    note: '"ktir" = a lot/very; "shway" = a little; "3adi" = normal; "laazem" = necessary'
  },
  {
    q: 'How do you say "kind / good-natured" in Lebanese Arabic?',
    opts: ['khabiis', 'ghabi', 'sha2i', 'Tayyeb'],
    correct: 3,
    note: '"Tayyeb" = kind/good-natured; "khabiis" = sneaky; "ghabi" = dumb; "sha2i" = naughty'
  },
  {
    q: 'What does "za3lan" mean?',
    opts: ['happy', 'sad / upset / angry', 'hungry', 'pleased'],
    correct: 1,
    note: '"za3lan" = sad/upset/angry; "fara7an" = happy; "jaw3an" = hungry; "mabsouT" = pleased'
  },
  {
    q: 'How do you say "narrow / tight" in Lebanese Arabic?',
    opts: ['wsi3', 'kbir', 'Day2', 'Tawil'],
    correct: 2,
    note: '"Day2" = narrow/tight; "wsi3" = wide/spacious; "kbir" = big; "Tawil" = tall'
  },
  {
    q: 'What does "mabsouT" mean?',
    opts: ['thirsty', 'cold', 'scared', 'pleased / content'],
    correct: 3,
    note: '"mabsouT" = pleased/content; "3aTshan" = thirsty; "bared" = cold; "khayef" = scared'
  },
  {
    q: 'How do you say "correct / true / right" in Lebanese Arabic?',
    opts: ['mazbouT', 'sa7i7', '2aSli', 'mni7'],
    correct: 1,
    note: '"sa7i7" = correct/true; "mazbouT" = precise/proper; "2aSli" = original/genuine; "mni7" = good'
  },
  {
    q: 'What does "3adi" mean?',
    opts: ['very / a lot', 'normal / ordinary / so what', 'necessary', 'approximately'],
    correct: 1,
    note: '"3adi" = normal/ordinary, also dismissive "so what / whatever"; "ktir" = very; "laazem" = necessary; "ta2riban" = approximately'
  },
];

const DES_TIPS = [
  { title: 'Lebanese adjective agreement: m / f / pl', body: 'Most adjectives change form: masculine base, add "-e" for feminine, "-iin" or "-aat" for plural. "kbir" (big m) → "kbire" (big f) → "kbaar" (big pl). "7elo" (nice m) → "7ele" (nice f) → "7eliin" (nice pl). State adjectives like "fara7an" → "fara7ane" (f) → "fara7aaniin" (pl). Nationality/origin adjectives: "lubnaani" → "lubnaaniyye" → "lubnaaniyyiin".' },
  { title: '"7elo" — the Swiss-army adjective', body: '"7elo" covers an enormous range: a beautiful person, delicious food, a nice gesture, a cool idea. "Hayda 7elo minnbo" = that\'s nice of him. "El-2akle 7ele ktir" = the food is very good. "7elo!" alone = cool!/nice! It even softens requests: "3mol ma3i 7elo" = do me a favor (lit: do something nice with me). Master this word — it\'s everywhere.' },
  { title: 'State adjectives: fara7an / za3lan / ta3ban', body: 'These "-an" ending adjectives describe temporary states. "Ana fara7an" = I\'m happy (right now). "Shu fii? Mnee7 ow za3lan?" = What\'s up? Fine or upset? "Ta3ban" = tired BUT also unwell: "ana ta3ban" can mean both. Lebanese also uses "mabsouT" for happy/content (lit: expanded/relieved). "3aTshan" (thirsty) and "jaw3an" (hungry) follow the same pattern.' },
  { title: '"3adi" — normal but also dismissive', body: '"3adi" has two registers. Descriptive: "hal shi 3adi" = this thing is normal. But as a standalone response, "3adi!" = so what? / whatever / who cares? "Khasso? — 3adi!" = So what? — whatever! It\'s the Lebanese shrug-in-a-word. Compare: "3adi" (dismissive) vs "mish muhimm" (not important) vs "3ala bali" (I don\'t care).' },
  { title: 'Intensifiers: ktir, shway, and doubled adjectives', body: '"Ktir" after adjective = very: "kbir ktir" = very big. "Shway" softens: "zghir shway" = a little small. Lebanese also intensifies by doubling: "kbir kbir" = really really big, "mni7 mni7" = very good indeed. Another pattern: "kbir bil-kbir" = enormous (lit: big in bigness). And "mni7 3al-aakhir" = excellent (good to the end).' },
];

const DES_ABOUT = 'Master Lebanese Arabic adjectives and descriptors — size, quality, emotional state, degree markers, and character traits. Essential for describing people, places, and things in everyday Lebanese conversation, and for understanding how adjectives agree in gender and number.';
