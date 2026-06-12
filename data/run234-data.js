// Run #234 — Lebanese Prepositions & Particles Coach (prp)
// Core prepositions, directional uses, particle combos — 40 items, MCQ drill, 5 tips

const PRP_WORDS = [
  // core prepositions
  { tr: 'fi',           ar: 'في',          en: 'in / at / there is',     cat: 'core' },
  { tr: '3a',           ar: 'عَ',          en: 'on / to / at (spoken)',  cat: 'core' },
  { tr: 'min',          ar: 'من',          en: 'from / of / some',       cat: 'core' },
  { tr: 'la',           ar: 'لَ',          en: 'to / for / (indirect obj)', cat: 'core' },
  { tr: 'ma3',          ar: 'مع',          en: 'with',                   cat: 'core' },
  { tr: 'bi',           ar: 'بِ',          en: 'with / by / in (spoken)',cat: 'core' },
  { tr: '3an',          ar: 'عن',          en: 'about / away from',      cat: 'core' },
  { tr: '2abel',        ar: 'قبل',         en: 'before',                 cat: 'core' },
  { tr: 'ba3d',         ar: 'بعد',         en: 'after',
                                                                           cat: 'core' },
  { tr: '7awl',         ar: 'حول',         en: 'around / about',         cat: 'core' },
  // location
  { tr: 'faww2',        ar: 'فوق',         en: 'above / on top',         cat: 'location' },
  { tr: 'ta7et',        ar: 'تحت',         en: 'under / below',          cat: 'location' },
  { tr: 'janb',         ar: 'جنب',         en: 'next to / beside',       cat: 'location' },
  { tr: 'wara',         ar: 'ورا',         en: 'behind / after',         cat: 'location' },
  { tr: '2oddaam',      ar: 'قدام',        en: 'in front of',            cat: 'location' },
  { tr: 'juwwa',        ar: 'جوا',         en: 'inside',                 cat: 'location' },
  { tr: 'barra',        ar: 'برا',         en: 'outside',                cat: 'location' },
  { tr: 'bi-nuss',      ar: 'بالنص',       en: 'in the middle',          cat: 'location' },
  // time particles
  { tr: 'halla2',       ar: 'هلأ',         en: 'now',                    cat: 'time' },
  { tr: 'ba3dayn',      ar: 'بعدين',       en: 'then / afterwards',      cat: 'time' },
  { tr: 'la7za',        ar: 'لحظة',        en: 'in a moment / hold on',  cat: 'time' },
  { tr: '2abl shway',   ar: 'قبل شوي',     en: 'a little while ago',     cat: 'time' },
  { tr: 'ba3d shway',   ar: 'بعد شوي',     en: 'in a little while',      cat: 'time' },
  // combined with suffixes
  { tr: 'ma3i',         ar: 'معي',         en: 'with me',                cat: 'suffixed' },
  { tr: 'ma3ak',        ar: 'معك',         en: 'with you (m)',           cat: 'suffixed' },
  { tr: 'ma3o',         ar: 'معو',         en: 'with him',               cat: 'suffixed' },
  { tr: 'fii',          ar: 'فيي',         en: 'in me / I have (it)',    cat: 'suffixed' },
  { tr: 'fiik',         ar: 'فيك',         en: 'you can / in you',       cat: 'suffixed' },
  { tr: 'min-nik',      ar: 'منك',         en: 'from you',               cat: 'suffixed' },
  { tr: 'lak',          ar: 'لك',          en: 'for you / to you',       cat: 'suffixed' },
  // useful fixed phrases
  { tr: '3a-shasho',    ar: 'عشانو',       en: 'because of him / for him', cat: 'phrases' },
  { tr: 'men-neetak',   ar: 'من نيتك',     en: 'on your behalf / for your sake', cat: 'phrases' },
  { tr: 'bi-sabab',     ar: 'بسبب',        en: 'because of',             cat: 'phrases' },
  { tr: 'bi-doun',      ar: 'بدون',        en: 'without',                cat: 'phrases' },
  { tr: 'bi-kull',      ar: 'بكل',         en: 'with all / with every',  cat: 'phrases' },
  { tr: '3a-rasak',     ar: 'عرأسك',       en: 'on your head (you\'re welcome)', cat: 'phrases' },
  { tr: 'bi-raas-ak',   ar: 'براسك',       en: 'with your head = it\'s on you', cat: 'phrases' },
  { tr: 'fi shi',       ar: 'في شي',       en: 'there is something / is there?', cat: 'phrases' },
  { tr: 'ma fi shi',    ar: 'ما في شي',    en: 'there is nothing / nothing',     cat: 'phrases' },
  { tr: 'men-wein',     ar: 'منوين',       en: 'where are you from? (origin)',   cat: 'phrases' },
];

const PRP_DRILLS = [
  {
    q: 'How do you say "with me" in Lebanese Arabic?',
    opts: ['ma3ak', 'ma3i', 'ma3o', 'fii'],
    correct: 1,
    note: '"ma3i" = with me; "ma3ak" = with you (m); "ma3o" = with him; "fii" = in me/I have it'
  },
  {
    q: 'What does "ba3d shway" mean?',
    opts: ['a little while ago', 'now', 'in a little while', 'afterwards'],
    correct: 2,
    note: '"ba3d shway" = in a little while; "2abl shway" = a little while ago; "halla2" = now; "ba3dayn" = afterwards'
  },
  {
    q: 'How do you say "in front of" in Lebanese Arabic?',
    opts: ['wara', 'janb', '2oddaam', 'ta7et'],
    correct: 2,
    note: '"2oddaam" = in front of; "wara" = behind; "janb" = next to; "ta7et" = under'
  },
  {
    q: 'What does "fi shi" mean?',
    opts: ['nothing', 'something / is there?', 'inside', 'with something'],
    correct: 1,
    note: '"fi shi" = there is something / is there?; "ma fi shi" = nothing; "juwwa" = inside'
  },
  {
    q: 'How do you say "without" in Lebanese Arabic?',
    opts: ['bi-sabab', 'bi-kull', 'bi-doun', 'bi-nuss'],
    correct: 2,
    note: '"bi-doun" = without; "bi-sabab" = because of; "bi-kull" = with all; "bi-nuss" = in the middle'
  },
  {
    q: 'What does "fiik" mean?',
    opts: ['from you', 'for you', 'you can / in you', 'with you'],
    correct: 2,
    note: '"fiik" = you can / in you; "min-nik" = from you; "lak" = for you; "ma3ak" = with you'
  },
  {
    q: 'How do you say "behind / after" in Lebanese Arabic?',
    opts: ['2oddaam', 'juwwa', 'wara', 'faww2'],
    correct: 2,
    note: '"wara" = behind/after; "2oddaam" = in front of; "juwwa" = inside; "faww2" = above'
  },
  {
    q: 'What does "halla2" mean?',
    opts: ['then / afterwards', 'now', 'in a moment', 'before'],
    correct: 1,
    note: '"halla2" = now; "ba3dayn" = then/afterwards; "la7za" = in a moment; "2abel" = before'
  },
  {
    q: 'How do you say "because of" in Lebanese Arabic?',
    opts: ['bi-doun', 'bi-kull', 'bi-sabab', 'bi-nuss'],
    correct: 2,
    note: '"bi-sabab" = because of; "bi-doun" = without; "bi-kull" = with all; "bi-nuss" = in the middle'
  },
  {
    q: 'What does "men-wein" mean?',
    opts: ['where to?', 'where are you from?', 'from inside', 'where is it?'],
    correct: 1,
    note: '"men-wein" = where are you from? (origin); "la-wein" = where to?; "wein" = where'
  },
];

const PRP_TIPS = [
  { title: '"Fi" vs "3a" vs "bi" — three ways to say "in/at"', body: '"Fi" = in/at a place ("fi Beirut" = in Beirut, "fi beit-i" = in my house). "3a" = on/to ("3a-tteble" = on the table, "roo7 3a-ssouk" = go to the market). "Bi" = with/by/in ("bi-ssa77a" = with health, "byetkallib bi-3arabi" = he speaks in Arabic). They overlap but each has a primary sense.' },
  { title: '"Fi" as "there is": a key Lebanese pattern', body: '"Fi" alone = "there is": "fi waqet" = there is time. "Ma fi" = there is not: "ma fi khubiz" = there is no bread. "Fi shi?" = is there something? / what\'s up? "Ma fi wala shi" = absolutely nothing. This construction is everywhere — master it early.' },
  { title: '"3a" attached speech: 3al-, 3as-, 3abb-', body: '"3a" contracts with "el" → "3al-": "roo7 3al-maktab" = go to the office. "3a" + "el-s" → "3as-": "3as-souk" = to the market. Lebanese elides the article in spoken form. Listen for "3al-", "3as-", "3ar-" etc. — they\'re all just "3a + el-" contracted.' },
  { title: '"Fiik" — the Lebanese "you can"', body: '"Fiik" (lit: in you) = you can/are able to. "Fiik t-ruu7" = you can go. "Ma fiik" = you can\'t. This is a key structure: "fi" + person suffix + verb = ability. "Fii" (in me) = I can. "Fiyyo" = he can. "Ma fiyyon" = they can\'t. Essential for permission/ability.' },
  { title: 'Suffix order: prep + pronoun suffix', body: 'Lebanese prepositions attach suffixes: "ma3" + "-i" = "ma3i" (with me), "ma3" + "-ak" = "ma3ak" (with you m), "ma3" + "-a" = "ma3a" (with her/it). Same for "min": "minni" (from me), "minnak" (from you m), "minno" (from him). Know the 8 suffixes (-i/-ak/-ek/-o/-a/-na/-kon/-on) with each preposition.' },
];

const PRP_ABOUT = 'Master Lebanese Arabic prepositions and particles — core spatial prepositions, time markers, suffixed forms, and useful fixed phrases. Essential for building sentences, giving directions, expressing time, and understanding everyday Lebanese speech patterns.';
