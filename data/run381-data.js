// Run #381 — Lebanese Beach & Sea Culture Coach (bch)
// Categories: sea-terms | beach-items | water-activities | coastal-life | expressions

const BCH_WORDS = [
  // sea-terms
  { ar: 'بحر', tr: 'ba7ar', en: 'sea / the Mediterranean', cat: 'sea-terms' },
  { ar: 'موج', tr: 'mawj', en: 'wave(s)', cat: 'sea-terms' },
  { ar: 'رمل', tr: 'ramel', en: 'sand', cat: 'sea-terms' },
  { ar: 'صخر', tr: 'Sakhr', en: 'rock(s) / rocky shore', cat: 'sea-terms' },
  { ar: 'مياه', tr: 'miyaah', en: 'waters / water (plural)', cat: 'sea-terms' },
  { ar: 'شاطئ', tr: 'shaaTe2', en: 'beach / shore', cat: 'sea-terms' },
  { ar: 'كورنيش', tr: 'korniish', en: 'corniche / seafront promenade', cat: 'sea-terms' },
  { ar: 'مرسى', tr: 'marsa', en: 'marina / harbour / port', cat: 'sea-terms' },
  // beach-items
  { ar: 'مايوه', tr: 'maayo', en: 'swimsuit / swimwear (from French maillot)', cat: 'beach-items' },
  { ar: 'نظارات شمس', tr: 'naDDaaraat shams', en: 'sunglasses', cat: 'beach-items' },
  { ar: 'كريم الشمس', tr: 'kriim ish-shams', en: 'sunscreen / sun cream', cat: 'beach-items' },
  { ar: 'مشلح', tr: 'mashlah', en: 'beach towel / wrap', cat: 'beach-items' },
  { ar: 'شمسية', tr: 'shamsiyye', en: 'beach umbrella / parasol', cat: 'beach-items' },
  { ar: 'كراسي بحر', tr: 'kraasi ba7ar', en: 'beach chairs / sun loungers', cat: 'beach-items' },
  { ar: 'قارب', tr: '2aarib', en: 'boat / small vessel', cat: 'beach-items' },
  { ar: 'زعبوط', tr: 'za3buuT', en: 'inflatable rubber ring / float', cat: 'beach-items' },
  // water-activities
  { ar: 'سبح', tr: 'siba7', en: 'to swim / swimming', cat: 'water-activities' },
  { ar: 'غطس', tr: 'ghaTas', en: 'to dive / diving', cat: 'water-activities' },
  { ar: 'ركوب أمواج', tr: 'rkuub amwaaj', en: 'surfing / wave riding', cat: 'water-activities' },
  { ar: 'تشميس', tr: 'tashmis', en: 'sunbathing (from shams = sun)', cat: 'water-activities' },
  { ar: 'ماء طاردة', tr: 'maye Taarde', en: 'jet ski (Lebanese colloquial)', cat: 'water-activities' },
  { ar: 'صيد سمك', tr: 'seed samak', en: 'fishing', cat: 'water-activities' },
  { ar: 'قفز عالمي', tr: '2afaz 3aal-maay', en: 'jumping into the water', cat: 'water-activities' },
  { ar: 'غسيل بالبحر', tr: 'ghasiil bil-ba7ar', en: 'swimming in the sea (lit. washing in the sea)', cat: 'water-activities' },
  // coastal-life
  { ar: 'بيت البحر', tr: 'beet il-ba7ar', en: 'beach house / summer house by the sea', cat: 'coastal-life' },
  { ar: 'مطعم بحري', tr: 'maT3am ba7ri', en: 'seafood restaurant', cat: 'coastal-life' },
  { ar: 'سمك', tr: 'samak', en: 'fish / seafood', cat: 'coastal-life' },
  { ar: 'جمبري', tr: 'jambari', en: 'shrimp / prawns', cat: 'coastal-life' },
  { ar: 'صياد', tr: 'Sayyaad', en: 'fisherman', cat: 'coastal-life' },
  { ar: 'سيزون', tr: 'siizoon', en: 'beach season / summer season (from French saison)', cat: 'coastal-life' },
  { ar: 'بيادر', tr: 'byaadir', en: 'beach club / private beach (Lebanese term)', cat: 'coastal-life' },
  { ar: 'أوتيل بحري', tr: 'uutiil ba7ri', en: 'beachfront hotel', cat: 'coastal-life' },
  // expressions
  { ar: 'روح البحر', tr: 'ruu7 il-ba7ar', en: 'the call of the sea (longing for the beach)', cat: 'expressions' },
  { ar: 'مياه بارده', tr: 'miyaah baarde', en: 'cold water (beach complaint)', cat: 'expressions' },
  { ar: 'شمس حارقة', tr: 'shams 7ar2a', en: 'burning sun / scorching heat', cat: 'expressions' },
  { ar: 'يلا عالبحر', tr: 'yalla 3al-ba7ar', en: 'let\'s go to the beach!', cat: 'expressions' },
  { ar: 'البحر بيداوي', tr: 'il-ba7ar byidaawi', en: 'the sea heals (Lebanese saying)', cat: 'expressions' },
  { ar: 'ريحة البحر', tr: 'rii7et il-ba7ar', en: 'the smell of the sea', cat: 'expressions' },
  { ar: 'مولود ع البحر', tr: 'mawluud 3al-ba7ar', en: 'born on the sea (coastal native)', cat: 'expressions' },
  { ar: 'يوم بحر', tr: 'yoom ba7ar', en: 'a beach day / day at the sea', cat: 'expressions' },
];

const BCH_DRILLS = [
  {
    q: 'What is the "korniish"?',
    opts: ['korniish', 'ba7ar', 'shaaTe2', 'marsa'],
    correct: 0,
    note: '"korniish" (كورنيش) — the seafront promenade. The Corniche in Beirut (Corniche Manara) is the most famous, stretching along the Mediterranean. A beloved evening walking spot for all ages — families, couples, fishermen, joggers, all sharing the same path.',
  },
  {
    q: 'What does "tashmis" mean?',
    opts: ['tashmis', 'siba7', 'ghaTas', '2afaz 3aal-maay'],
    correct: 0,
    note: '"tashmis" (تشميس) — sunbathing, from "shams" (sun). The quintessential Lebanese beach activity. Lebanese beach culture is about being seen as much as swimming — the beach club ("byaadir") culture thrives on this.',
  },
  {
    q: 'What is "byaadir"?',
    opts: ['byaadir', 'marsa', 'beet il-ba7ar', 'maT3am ba7ri'],
    correct: 0,
    note: '"byaadir" (بيادر) — beach clubs / private beaches. Lebanon\'s famous beach clubs (like Sporting Club, Riviera, Lazy B) are social institutions. They charge entry fees for access to pools, sunbeds, restaurants. Going to "3al-byaadir" is a summer ritual for Beirutis.',
  },
  {
    q: 'What does "yalla 3al-ba7ar" mean?',
    opts: ['yalla 3al-ba7ar', 'ruu7 il-ba7ar', 'yoom ba7ar', 'miyaah baarde'],
    correct: 0,
    note: '"yalla 3al-ba7ar" (يلا عالبحر) — let\'s go to the beach! The most-heard phrase on hot summer days. "Yalla" = let\'s go / come on. June through September, the answer to "shu minHtaar?" (what shall we do?) is almost always "yalla 3al-ba7ar!"',
  },
  {
    q: 'What is "siizoon"?',
    opts: ['siizoon', 'siba7', 'shamsiyye', 'kraasi ba7ar'],
    correct: 0,
    note: '"siizoon" (سيزون) — beach season, from French "saison." Roughly June to September when the Mediterranean is warm. "il-siizoon fata7" (the season opened) means beaches and clubs are now open. Entire communities move to coastal towns for the siizoon.',
  },
  {
    q: 'What does "il-ba7ar byidaawi" mean?',
    opts: ['il-ba7ar byidaawi', 'mawluud 3al-ba7ar', 'rii7et il-ba7ar', 'ruu7 il-ba7ar'],
    correct: 0,
    note: '"il-ba7ar byidaawi" (البحر بيداوي) — the sea heals. A beloved Lebanese saying expressing the curative power of the Mediterranean. After a hard week, "ruu7 3al-ba7ar" (go to the sea) is the Lebanese answer to stress, sadness, or any problem.',
  },
  {
    q: 'What is "jambari"?',
    opts: ['jambari', 'samak', 'Sayyaad', 'maT3am ba7ri'],
    correct: 0,
    note: '"jambari" (جمبري) — shrimp/prawns. Seafood restaurants along the Lebanese coast serve fresh grilled jambari, calamari, and fish. Jounieh, Batroun, Tyre, and Saida are famous for their seafood restaurants right on the water.',
  },
  {
    q: 'What does "shaaTe2" mean?',
    opts: ['shaaTe2', 'korniish', 'marsa', 'mawj'],
    correct: 0,
    note: '"shaaTe2" (شاطئ) — beach / shore. Lebanon has about 220km of Mediterranean coastline. Most beaches are rocky (Sakhr) rather than sandy (ramel). "3al-shaaTe2" = at the beach. Rocky beaches are very common from Jounieh northward.',
  },
  {
    q: 'What is "maayo"?',
    opts: ['maayo', 'mashlah', 'naDDaaraat shams', 'kriim ish-shams'],
    correct: 0,
    note: '"maayo" (مايوه) — swimsuit, from French "maillot (de bain)." Lebanon\'s strong French influence shows in beach vocabulary. Lebanese beach fashion is notably stylish — the beach club culture means swimwear is often designer.',
  },
  {
    q: 'What does "ghaTas" mean?',
    opts: ['ghaTas', 'siba7', 'rkuub amwaaj', 'seed samak'],
    correct: 0,
    note: '"ghaTas" (غطس) — diving / to dive. Lebanon\'s rocky Mediterranean shores are great for snorkeling and diving. "ghaTas bil-ba7ar" = dived into the sea. The rocks of Raouché, Pigeon Rocks in Beirut are iconic diving spots.',
  },
];

const BCH_TIPS = [
  'Lebanese beach culture is a full social experience. Private beach clubs ("byaadir") dominate the coastline — entrance fees buy you a sunbed, umbrella, pool or sea access, and restaurant service. The famous ones (Sporting, Lazy B, Edde Sands) are as much about socializing as swimming. Arriving before 11am = tourist. Arriving at noon = Lebanese.',
  'The corniche (korniish) in Beirut is free and democratic — everyone walks it: grandmothers with grandchildren, couples, fishermen with lines dangling off the railing, guys playing backgammon, juice sellers. From Manara to the Pigeon Rocks (Raouché), it\'s the great equalizer of Beirut social life.',
  'Seafood in Lebanon: always ask if it\'s fresh today ("friish hayy?"). Best spots are in coastal towns — Batroun, Jounieh, Byblos, Tyre, Saida. Fish restaurants right on the water serve mezze + fresh-grilled fish. "Jambari meshwi" (grilled shrimp) and "samak makleh" (fried fish) are staples. Eating fish while watching the sea = the Lebanese dream.',
  'Beach season ("siizoon") runs June–September. The Mediterranean off Lebanon reaches 27°C in summer. October is also excellent — warm water, fewer crowds, locals call it "siizoon 3al-7elu" (the sweet season). Summer in Lebanon = mornings at the beach, late lunch, siesta, then nightlife.',
  '"il-ba7ar byidaawi" (the sea heals) is a genuine Lebanese belief. Weekend beach trips are therapeutic — the combination of sun, salt water, seafood, and company is the Lebanese stress cure. Even an hour on the korniish watching waves is considered restorative. The sea is deeply embedded in Lebanese identity — Phoenicia was, after all, a seafaring civilization.',
];

const BCH_ABOUT = 'Lebanon\'s Mediterranean coast is central to its identity. The country has roughly 220km of shoreline, and Lebanese culture is deeply shaped by the sea — from the ancient Phoenician seafarers to today\'s beach club scene. Summer beach life ("siizoon") is a national institution: families relocate to coastal villages, beach clubs fill daily, and the corniche becomes the social heart of Beirut. The sea ("ba7ar") features in Lebanese proverbs ("il-ba7ar byidaawi"), poetry, and daily conversation. Lebanese beach vocabulary blends Arabic with French (maayo from maillot, siizoon from saison) reflecting the country\'s dual cultural heritage. Understanding beach culture means understanding Lebanese summer life — the ritual of sunbathing ("tashmis"), the social hierarchy of beach clubs ("byaadir"), the fresh seafood restaurants, and the simple, healing act of sitting by the sea.';
