// R426 — Lebanese Political Slang & Street Discourse (pol)
const POL_WORDS = [
  // parties & factions
  { ar: 'حزب', tr: '7izb', en: 'political party', cat: 'politics' },
  { ar: 'تيار', tr: 'tayyaar', en: 'political movement / current', cat: 'politics' },
  { ar: 'زعيم', tr: 'za3iim', en: 'leader / strongman', cat: 'politics' },
  { ar: 'نائب', tr: 'naayeb', en: 'MP / deputy', cat: 'politics' },
  { ar: 'وزير', tr: 'waziir', en: 'minister', cat: 'politics' },
  { ar: 'رئيس', tr: 'ra2iis', en: 'president / head', cat: 'politics' },
  { ar: 'دولة', tr: 'dawle', en: 'state / government', cat: 'politics' },
  { ar: 'انتخابات', tr: 'intikhaabaate', en: 'elections', cat: 'politics' },
  { ar: 'طائفة', tr: 'Taayfe', en: 'sect / religious community', cat: 'politics' },
  { ar: 'محاصصة', tr: 'mu7aaSSa', en: 'sectarian power-sharing', cat: 'politics' },
  // street/protest vocab
  { ar: 'تظاهرة', tr: 'taZaahura', en: 'demonstration / protest', cat: 'protest' },
  { ar: 'ثورة', tr: 'thawra', en: 'revolution', cat: 'protest' },
  { ar: 'شعب', tr: 'sha3b', en: 'people / nation', cat: 'protest' },
  { ar: 'حقوق', tr: '7u2uu2', en: 'rights', cat: 'protest' },
  { ar: 'فساد', tr: 'fasaad', en: 'corruption', cat: 'protest' },
  { ar: 'سلطة', tr: 'sulTa', en: 'authority / power', cat: 'protest' },
  { ar: 'مطالب', tr: 'maTaalib', en: 'demands', cat: 'protest' },
  { ar: 'إصلاح', tr: 'iSlaa7', en: 'reform', cat: 'protest' },
  { ar: 'استقالة', tr: 'isti2aale', en: 'resignation', cat: 'protest' },
  { ar: 'محاسبة', tr: 'mu7aasabe', en: 'accountability', cat: 'protest' },
  // slang & expressions
  { ar: 'زبالة', tr: 'zbaale', en: 'garbage (lit. & fig. corrupt system)', cat: 'slang' },
  { ar: 'حرامي', tr: '7araami', en: 'thief (used for corrupt politicians)', cat: 'slang' },
  { ar: 'بدنا نحاسب', tr: 'badna n7aasib', en: 'we want accountability', cat: 'slang' },
  { ar: 'كلن يعني كلن', tr: 'killun ya3ni killun', en: 'all of them means all of them', cat: 'slang' },
  { ar: 'شو صار', tr: 'shu Saar', en: 'what happened?', cat: 'slang' },
  { ar: 'ما في دولة', tr: 'ma fi dawle', en: 'there is no state', cat: 'slang' },
  { ar: 'مين حاكم', tr: 'miin 7aakem', en: 'who is in charge?', cat: 'slang' },
  { ar: 'زعران', tr: 'zu3raan', en: 'thugs / troublemakers', cat: 'slang' },
  { ar: 'مخابرات', tr: 'mukhabaraat', en: 'intelligence services', cat: 'slang' },
  { ar: 'واسطة', tr: 'waaSTa', en: 'connections / nepotism', cat: 'slang' },
  // economic/crisis vocab
  { ar: 'أزمة', tr: 'azme', en: 'crisis', cat: 'crisis' },
  { ar: 'دولار', tr: 'dollar', en: 'dollar (dominates daily speech)', cat: 'crisis' },
  { ar: 'ليرة', tr: 'liira', en: 'lira (Lebanese pound)', cat: 'crisis' },
  { ar: 'تضخم', tr: 'taDAkhkhum', en: 'inflation', cat: 'crisis' },
  { ar: 'بنك', tr: 'bank', en: 'bank (often cursed in daily speech)', cat: 'crisis' },
  { ar: 'هجرة', tr: 'hijra', en: 'emigration / brain drain', cat: 'crisis' },
  { ar: 'كهربا', tr: 'kahraba', en: 'electricity (constant shortage topic)', cat: 'crisis' },
  { ar: 'مازوت', tr: 'maazout', en: 'diesel (for generators)', cat: 'crisis' },
  { ar: 'طابور', tr: 'Taabuur', en: 'queue (fuel/ATM lines)', cat: 'crisis' },
  { ar: 'مولد', tr: 'moulad', en: 'generator (household necessity)', cat: 'crisis' },
];

const POL_DRILLS = [
  {
    q: 'What does "waaSTa" (واسطة) mean in Lebanese politics?',
    opts: ['election', 'connections / nepotism', 'parliament', 'constitution'],
    correct: 1,
    note: '"WaaSTa" (connections) is the engine of Lebanese society — getting anything done often requires knowing the right person. It\'s not hidden corruption but an open cultural norm, though many Lebanese criticize it fiercely.'
  },
  {
    q: 'What was the famous slogan from Lebanon\'s 2019 protests — "killun ya3ni killun"?',
    opts: ['everyone is welcome', 'all of them means all of them', 'everything is possible', 'all Lebanese are one'],
    correct: 1,
    note: '"Killun ya3ni killun" (all of them means all of them) was the defining chant of Lebanon\'s October 2019 uprising, rejecting ALL political leaders regardless of sect — a direct challenge to the entire ruling class.'
  },
  {
    q: 'What is "mu7aaSSa" (محاصصة)?',
    opts: ['military service', 'sectarian power-sharing', 'democratic elections', 'economic reform'],
    correct: 1,
    note: '"Mu7aaSSa" is Lebanon\'s system of dividing government positions along sectarian lines — president is Maronite Christian, PM is Sunni, Parliament Speaker is Shia. Critics call it the root of dysfunction.'
  },
  {
    q: 'What is "za3iim" (زعيم) in Lebanese politics?',
    opts: ['minister', 'journalist', 'leader / strongman', 'judge'],
    correct: 2,
    note: '"Za3iim" means a strong political leader, but in Lebanese context implies a feudal lord who controls resources, patronage, and loyalty within his sect. The system of za3aamiir (plural) dominates politics.'
  },
  {
    q: 'What does "fasaad" (فساد) mean?',
    opts: ['freedom', 'corruption', 'election', 'protest'],
    correct: 1,
    note: '"Fasaad" (corruption) is one of the most common words in Lebanese political discourse. Lebanon ranked near the bottom of Transparency International\'s index. "Fasaad el system" (system corruption) is a daily complaint.'
  },
  {
    q: 'In the economic crisis, what is "moulad" (مولد)?',
    opts: ['birthday', 'fuel shortage', 'generator', 'bank'],
    correct: 2,
    note: '"Moulad" (generator) became essential vocabulary after Lebanon\'s electricity system collapsed. Many households subscribe to neighborhood generators for 12-20 hours of power per day, paying monthly fees.'
  },
  {
    q: 'What does "isti2aale" (استقالة) mean?',
    opts: ['appointment', 'resignation', 'revolution', 'election'],
    correct: 1,
    note: '"Isti2aale" (resignation) was screamed at every protest. Lebanese leaders notoriously refuse to resign even amid complete system failure — making this word a symbol of political frustration.'
  },
  {
    q: 'What is "Taayfe" (طائفة)?',
    opts: ['political party', 'protest group', 'sect / religious community', 'trade union'],
    correct: 2,
    note: '"Taayfe" (sect) is central to Lebanese identity. The country has 18 official religious sects, each with its own political representation, courts for personal status (marriage, divorce, inheritance), and community institutions.'
  },
  {
    q: 'What does "kahraba" (كهربا) mean, and why is it politically charged?',
    opts: ['water supply', 'electricity', 'internet', 'fuel'],
    correct: 1,
    note: '"Kahraba" (electricity) became a political flashpoint. Lebanon suffered 20+ hours of daily cuts by 2022. The electricity sector, run by state company EDL, exemplifies corruption — billions spent with no improvement.'
  },
  {
    q: 'What is "hijra" (هجرة) in Lebanon\'s current context?',
    opts: ['tourism', 'emigration / brain drain', 'internal migration', 'pilgrimage'],
    correct: 1,
    note: '"Hijra" (emigration) has accelerated dramatically since 2019. An estimated 150,000+ Lebanese emigrated after the economic collapse, depleting the country of doctors, engineers, and young professionals — a crisis within a crisis.'
  },
];

const POL_TIPS = [
  {
    title: '🏛️ Lebanon\'s Confessional System',
    body: 'Lebanon\'s political system is built on "Taa2ifiyye" (sectarianism). The 1943 National Pact and 1990 Taif Agreement divided power: Maronite president, Sunni PM, Shia parliament speaker. Critics call this "mu7aaSSa" (sectarian carve-up) the source of dysfunction. The 2019 uprising directly challenged this system with "killun ya3ni killun."'
  },
  {
    title: '💸 The Economic Collapse',
    body: 'Since 2019, Lebanon experienced one of the worst economic collapses in modern history. The "liira" (pound) lost 95%+ of its value. "Kahraba" (electricity) runs only 2-4 hours daily from the grid. "Moulad" (generators), "maazout" (diesel), and "Taabuur" (queues) became daily vocabulary. The "dollar" became the de facto currency.'
  },
  {
    title: '📢 Protest Vocabulary',
    body: 'Lebanese people are fierce political commentators. Key protest phrases: "baddna n7aasib" (we want accountability), "yis2uT el niZaam" (down with the system), "thawra thawra" (revolution revolution). The word "2intifaaDa" (uprising) is also used for October 17, 2019 protests.'
  },
  {
    title: '🔗 WaaSTa — How Things Work',
    body: '"WaaSTa" (connections/nepotism) lubricates Lebanese society. Need a hospital bed? Call a politician. Job at a ministry? Need the right za3iim\'s backing. Even traffic tickets can disappear with waaSTa. Many Lebanese simultaneously criticize and use it — it\'s seen as a survival mechanism in a broken state.'
  },
  {
    title: '🕊️ Sectarian Identity Phrases',
    body: 'Religious and political identities intertwine. "Min iya Taayfe?" (from which sect?) is sometimes asked (indirectly). "7arakaan" (two movements) = Amal + Hezbollah. "El 14 Aazaar" vs "El 8 Aazaar" were the main political blocs (March 14 vs March 8). Understanding these alliances is key to following Lebanese news.'
  },
];

const POL_ABOUT = 'Lebanese political vocabulary (mufradaat siyaasiyye) reflects a society that lives and breathes politics. Lebanon\'s 18 sects, history of civil war, regional proxy conflicts, and 2019-present economic collapse have created a rich (and often bitter) political lexicon. Streets, WhatsApp groups, and coffee shops buzz with political debate. Key concepts: "dawle" (state — often said with air quotes), "mu7aaSSa" (sectarian carve-up), "waaSTa" (connections), "fasaad" (corruption), and "thawra" (revolution). The October 17, 2019 protests introduced a new political vocabulary of accountability and reform that remains in daily use even as the movement faded.';
