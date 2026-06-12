// Run #1704 — NEW FEATURE: dqr — Deir el-Qamar, the historic capital of the
// Mount Lebanon Emirate (1591-1842). Seat of Fakhreddine II (Maan dynasty)
// and the Shihab emirs before Beiteddine took over. One of the earliest
// model towns of Druze-Christian coexistence in the Levant. Famous for its
// Ottoman-era palaces, silk-era prosperity, the Fakhreddine mosque, and
// Mussa Castle (the eccentric modern stone fortress). Distinct from R1608
// chf (modern Chouf/Jumblatt PSP), R1700 hsb (original Druze Hasbaya), R1605
// qsh (Maronite Qadisha). Prefix: dqr.

const DQR_WORDS = [
  { w: 'deir el-qamar', t: 'دير القمر', e: 'Deir el-Qamar — historic capital of Mount Lebanon Emirate', ex: 'rayhin 3a deir el-qamar.', exEn: 'We are going to Deir el-Qamar.' },
  { w: 'imara', t: 'إمارة', e: 'imara — emirate; Mount Lebanon Imarat ruled here 1591-1842', ex: 'el-imara 7akamet 250 sene.', exEn: 'The emirate ruled for 250 years.' },
  { w: 'fakhreddine', t: 'فخر الدين', e: 'Fakhreddine II — Druze emir, made Deir el-Qamar capital 1620s', ex: 'fakhreddine bana hon.', exEn: 'Fakhreddine built here.' },
  { w: 'maan', t: 'معن', e: 'Maan — first ruling dynasty (Druze) of Mount Lebanon', ex: 'aal maan men el-shouf.', exEn: 'The Maan family is from the Chouf.' },
  { w: 'shihab', t: 'شهاب', e: 'Shihab — second ruling dynasty (mixed sect)', ex: 'aal shihab khalafou maan.', exEn: 'The Shihabs succeeded the Maans.' },
  { w: 'mir', t: 'مير', e: 'mir — emir/prince; the ruling title under both dynasties', ex: 'el-mir bashir.', exEn: 'Emir Bashir.' },
  { w: 'beit hekme', t: 'بيت الحكمة', e: 'Beit el-Hekme — main 17th-c. mansion now museum', ex: 'beit el-hekme mat7af.', exEn: 'Beit el-Hekme is a museum.' },
  { w: 'jami3 fakhreddine', t: 'جامع فخر الدين', e: 'Fakhreddine Mosque — oldest mosque in Mount Lebanon', ex: 'el-jami3 men 1493.', exEn: 'The mosque is from 1493.' },
  { w: 'qaSr', t: 'قصر', e: 'qaSr — palace; Deir el-Qamar has 3 surviving Ottoman palaces', ex: 'el-qaSr 3atiq.', exEn: 'The palace is ancient.' },
  { w: 'mussa', t: 'موسى', e: 'Mussa Castle — built single-handed by Mussa el-Maamari 1962-91', ex: 'qaSr mussa gharib.', exEn: 'Mussa Castle is unusual.' },
  { w: 'silk', t: 'حرير', e: '7arir — silk; Deir el-Qamar was a major silk-era hub', ex: 'el-7arir 3iml el-balad.', exEn: 'Silk built the town.' },
  { w: 'sahet', t: 'ساحة', e: 'sahet — square; the central midane is "Sahet el-Mir"', ex: 'sahet el-mir 7elwe.', exEn: 'The Emir\'s Square is beautiful.' },
  { w: 'durzi', t: 'درزي', e: 'durzi — Druze; Deir el-Qamar is mixed Druze-Maronite', ex: 'el-durzi w-el-masi7i 3aysheen sawa.', exEn: 'Druze and Christian live together.' },
  { w: 'masi7i', t: 'مسيحي', e: 'masi7i — Christian; mostly Maronite + some Greek Cath.', ex: 'el-masi7iye akhbar fi-l-balad.', exEn: 'Christians are most of the town.' },
  { w: 'amiyye', t: 'عاميّة', e: 'Amiyye — 1840 anti-feudal peasant uprising started here', ex: 'el-amiyye 1840.', exEn: 'The peasant revolt was in 1840.' },
  { w: 'mutaSarrifiyya', t: 'متصرفية', e: 'mutaSarrifiyya — Ottoman autonomous Mt. Lebanon (1861-1918)', ex: 'el-mutaSarrifiyya khalafet el-imara.', exEn: 'The mutasarrifiyya replaced the emirate.' },
  { w: 'serail', t: 'سراي', e: 'serail — government house; Deir el-Qamar\'s is now municipality', ex: 'el-serail 3a-l-sahha.', exEn: 'The serail is on the square.' },
  { w: 'mar antoun', t: 'مار أنطون', e: 'Mar Antoun — Maronite cathedral on the square', ex: 'kniset mar antoun 2dime.', exEn: 'Mar Antoun church is old.' },
  { w: 'bashir', t: 'بشير', e: 'Bashir — Bashir II Shihab moved capital to Beiteddine 1810s', ex: 'bashir bana beiteddine.', exEn: 'Bashir built Beiteddine.' },
  { w: 'baydar', t: 'بيدر', e: 'baydar — threshing floor; old Deir el-Qamar grain fields', ex: 'el-baydar yam el-sahha.', exEn: 'The threshing floor is by the square.' },
  { w: '7okm', t: 'حكم', e: '7okm — rule/governance; the imarat was Lebanon\'s first', ex: 'el-7okm men hon kan.', exEn: 'Rule used to come from here.' },
  { w: 'tarikh', t: 'تاريخ', e: 'tarikh — history; Deir el-Qamar is "the heart of history"', ex: 'el-tarikh fi kel 7ajar.', exEn: 'History is in every stone.' }
];

const DQR_DRILLS = [
  { q: 'What is Deir el-Qamar historically?', opts: ['a port city', 'capital of the Mount Lebanon Emirate', 'a refugee camp'], a: 1, exp: 'Deir el-Qamar (دير القمر, "Monastery of the Moon") was the capital of the Mount Lebanon Emirate from ~1620 to 1810 — first under the Druze Maan dynasty (Fakhreddine II) and then the Shihab emirs, before Bashir II moved the seat to nearby Beiteddine palace.' },
  { q: 'Who was Fakhreddine II?', opts: ['a Maronite saint', 'the Druze emir who centralized Mount Lebanon', 'an Ottoman governor'], a: 1, exp: 'Fakhreddine II (1572-1635) was the Druze Maan emir who unified the Druze and Christian populations of Mount Lebanon, made Deir el-Qamar his capital, and pushed Lebanon\'s autonomy under the Ottomans. He was eventually executed in Istanbul, but Lebanese identity often dates its modern roots to him.' },
  { q: 'What is the relationship between Deir el-Qamar and Beiteddine?', opts: ['rival villages', 'Deir el-Qamar was capital first; Beiteddine palace replaced it ~1810', 'they are the same town'], a: 1, exp: 'Deir el-Qamar served as the emirate capital until ~1810, when Bashir II Shihab built the new palace at Beiteddine just up the hill and moved his court there. The two towns are 5 minutes apart and tell the consecutive halves of the same history.' },
  { q: 'What sectarian makeup characterized historic Deir el-Qamar?', opts: ['only Druze', 'only Christian', 'mixed Druze-Maronite — early model of coexistence'], a: 2, exp: 'Deir el-Qamar was one of the earliest Levantine model towns of Druze-Christian coexistence — the Maan emirs were Druze, but the population was about half Maronite. The Fakhreddine mosque (1493), the Mar Antoun cathedral, and the synagogue once stood within walking distance of each other.' },
  { q: 'What is "Mussa Castle"?', opts: ['a 12th-c. crusader fort', 'a 20th-c. fortress built single-handed by Mussa el-Maamari', 'a Roman temple'], a: 1, exp: 'Mussa Castle (قصر موسى) is a quirky modern fortress built by Mussa el-Maamari single-handed between 1962 and 1991 to fulfill a childhood vision after his teachers mocked him. It\'s now a folk museum filled with hand-carved wax tableaux of Lebanese village life — pure eccentric monument.' },
  { q: 'What was the Amiyye of 1840?', opts: ['a wedding tradition', 'an anti-feudal peasant uprising started in Deir el-Qamar', 'a saint\'s feast'], a: 1, exp: 'The Amiyye (عاميّة) of 1840 was an anti-feudal peasant revolt that began in Antelias and gathered force in Deir el-Qamar. Druze and Christian peasants jointly demanded land reform — a rare moment of cross-sectarian peasant solidarity that set the stage for later civil conflicts.' },
  { q: 'How old is the Fakhreddine Mosque in Deir el-Qamar?', opts: ['from 1900', 'from 1493 — oldest mosque in Mount Lebanon', 'from 1700'], a: 1, exp: 'The Fakhreddine Mosque (جامع فخر الدين) was built in 1493 by Fakhreddine I and is the oldest extant mosque in the Mount Lebanon range. Its single Mamluk-style minaret on Sahet el-Mir is the village\'s defining skyline mark.' },
  { q: 'What economic activity made Deir el-Qamar prosperous in the 17th-19th c.?', opts: ['oil', 'silk weaving and trade', 'fishing'], a: 1, exp: 'Silk (حرير 7arir) was the engine of Deir el-Qamar\'s wealth — mulberry orchards on the Chouf hills, silk reels in town, and exports through Sidon and Beirut to Lyon. The grand Beit el-Hekme and other Ottoman palaces were silk fortunes built into stone.' },
  { q: 'What is "Sahet el-Mir"?', opts: ['a graveyard', 'the central town square — Emir\'s Square', 'a hospital'], a: 1, exp: 'Sahet el-Mir (ساحة المير, "Emir\'s Square") is the central plaza of Deir el-Qamar — surrounded by the Fakhreddine mosque, Mar Antoun cathedral, the serail, and Beit el-Hekme. The whole urban heart of the historic emirate compresses into this one stone-paved square.' },
  { q: 'What followed the emirate after 1842?', opts: ['independence', 'the Mutasarrifiyya — Ottoman autonomous Mt. Lebanon', 'French rule directly'], a: 1, exp: 'After the emirate collapsed in civil war in 1842, the Ottomans created the Mutasarrifiyya (متصرفية) of Mount Lebanon in 1861 — a special autonomous province with a Christian governor, lasting until WWI. Deir el-Qamar lost capital status but remained a key town.' }
];

const DQR_TIPS = [
  'Sahet el-Mir is the entire historic town in 200 meters — Fakhreddine mosque (1493), Mar Antoun cathedral, Beit el-Hekme palace-museum, the old silk khan, and the Ottoman serail (now municipality). Walk it counterclockwise in 30 minutes and you\'ve traversed 350 years of Mount Lebanon\'s ruling-class architecture.',
  'Deir el-Qamar vs Beiteddine: same political-historical line, ~5 min apart. Deir el-Qamar = the OLDER Maan-era capital (1591-1810); Beiteddine = the NEWER Shihab-era palace built by Bashir II. Most tourists hit Beiteddine; Deir el-Qamar is the deeper, quieter, more lived-in old town.',
  'The Mussa Castle is a Lebanese curiosity — Mussa el-Maamari\'s teachers told him as a boy he\'d never amount to anything, so he spent 60 years building a literal stone castle by himself. Inside: hundreds of wax dioramas of Lebanese village life. It\'s kitsch, it\'s sincere, it\'s deeply Lebanese — go.',
  'The Druze-Christian coexistence model in Deir el-Qamar is genuinely historic — for ~250 years, Druze emirs ruled a half-Maronite town, the Fakhreddine mosque and Mar Antoun cathedral sat 50m apart, and intermarriage among elite families was common. The model later broke catastrophically in 1860 (Druze-Maronite massacres including a notorious Deir el-Qamar event), but it\'s still studied as the earliest serious Levantine attempt.',
  'When in Deir el-Qamar look for the Marie Baz Wax Museum (in a real Ottoman palace), Beit el-Hekme (the Lebanese revolutions museum), and the synagogue — the only restored one in Mount Lebanon. Combine with lunch at Al-Midane or one of the silk-era stone-vault restaurants for a full half-day.'
];
