// R1194 — NEW FEATURE: Lebanese Zajal Folk Poetry Culture (zjl)

const ZJL_WORDS = [
  { ar: 'زجل', tr: 'zajal', en: 'Lebanese oral folk poetry / competition' },
  { ar: 'زجّال', tr: 'zajjal', en: 'zajal performer / oral poet' },
  { ar: 'شاعر', tr: 'sha3er', en: 'poet (general term)' },
  { ar: 'عتابا', tr: '3atabin', en: 'mournful/longing poetic form (3atabin)' },
  { ar: 'ميجانا', tr: 'meyjana', en: 'lively call-and-response folk form' },
  { ar: 'دلعونا', tr: 'dal3una', en: 'upbeat festive folk song form' },
  { ar: 'قصيدة', tr: 'asside', en: 'poem / ode' },
  { ar: 'ردة', tr: 'radde', en: 'reply verse (response to opponent)' },
  { ar: 'شطين', tr: 'shatayne', en: 'two competing sides / teams in zajal' },
  { ar: 'معركة شعرية', tr: 'ma3rake sha3riye', en: 'poetry battle / verbal duel' },
  { ar: 'قافية', tr: 'kafiye', en: 'rhyme / rhyme scheme' },
  { ar: 'لحن', tr: 'la7n', en: 'melody / tune used in zajal' },
  { ar: 'تنجيد', tr: 'tanjeed', en: 'improvisation in zajal' },
  { ar: 'مربّع', tr: 'mrabba3', en: 'quatrain / four-line verse' },
  { ar: 'بيت شعر', tr: 'bayt shi3r', en: 'verse / line of poetry (lit. house of poetry)' },
  { ar: 'معلّم', tr: 'mo3allem', en: 'master zajal poet / mentor' },
  { ar: 'جلسة', tr: 'jalse', en: 'gathering / sitting where zajal is performed' },
  { ar: 'جمهور', tr: 'jmhur', en: 'audience / crowd' },
  { ar: 'ارتجال', tr: 'ertejal', en: 'improvisation / off-the-cuff verse' },
  { ar: 'تراث', tr: 'trath', en: 'heritage / oral tradition' },
];

const ZJL_DRILLS = [
  { q: '"Zajal" is:', opts: ['Lebanese oral folk poetry contest', 'Lebanese coffee ritual', 'Lebanese line dance', 'Lebanese soap-making'], ans: 0 },
  { q: '"Meyjana" is a zajal form known for being:', opts: ['lively and call-and-response', 'mournful and longing', 'comic and satirical', 'religious and solemn'], ans: 0 },
  { q: '"3atabin" is known for its:', opts: ['mournful / longing tone', 'upbeat festive energy', 'comic wordplay', 'political satire'], ans: 0 },
  { q: '"Ma3rake sha3riye" means:', opts: ['poetry battle / verbal duel', 'poetry school', 'poetry book', 'poetry festival'], ans: 0 },
  { q: '"Shatayne" in zajal refers to:', opts: ['two competing sides / teams', 'two verse forms', 'two musicians', 'two judges'], ans: 0 },
  { q: '"Tanjeed" in zajal means:', opts: ['improvisation', 'memorization', 'recitation from text', 'translation'], ans: 0 },
  { q: '"Mrabba3" is:', opts: ['a quatrain / four-line verse', 'a couplet', 'a single opening line', 'the chorus'], ans: 0 },
  { q: '"Ertejal" means:', opts: ['improvisation / off-the-cuff verse', 'a formal written poem', 'a traditional melody', 'a rehearsed performance'], ans: 0 },
];

const ZJL_TIPS = [
  {
    title: 'What Is Zajal?',
    body: "Zajal is Lebanon's living oral poetry tradition — competitive, improvisational, entirely in Lebanese dialect. Two teams (shatayne) of poets battle verbally, often for hours, watched by a passionate crowd. Major TV shows like \"Sahret el-Zajal\" broadcast competitions nationally. Celebrated zajjals like Maroun Khoury, Zghayeb, and Assaf Rami are household names — treated like sports stars. UNESCO inscribed it as Intangible Heritage in 2011.",
  },
  {
    title: 'The Three Main Forms',
    body: "Every zajjal masters three forms: 3atabin (عتابا) — slow, mournful, full of longing and loss; Meyjana (ميجانا) — faster, call-and-response, energetic; Dal3una (دلعونا) — the most festive, danced to at weddings. Each has its own melody (la7n) and rhythm. A skilled zajjal can improvise in all three, switch between them mid-duel, and tailor each response to humiliate or flatter the opponent — all in rhyme.",
  },
  {
    title: 'Poetry Battles & Social Life',
    body: "The \"ma3rake sha3riye\" (poetry battle) draws village crowds who cheer loudly for their team. Held at weddings, harvest festivals, political rallies, and village fairs. A poet's \"radde\" (reply verse) must rhyme, respond to the opponent's insult or praise, and land a verbal blow. Wit, wordplay, and speed are prized above all. Judges score on improvisation, rhyme quality, and audience reaction — booing or cheering.",
  },
  {
    title: 'Zajal & Lebanese Identity',
    body: "For Lebanese, zajal is proof that their dialect is a full literary language — not just \"broken Arabic.\" The tradition keeps alive village phrases, proverbs, and poetic idioms disappearing from urban speech. Many Lebanese diaspora communities hold zajal nights in Brazil, Australia, and the Gulf. Phrases from famous zajals (\"ya 7elwe ya Libnen\" — O beautiful Lebanon) are quoted the way others quote song lyrics.",
  },
];
