// Run #1689 — NEW FEATURE: Fairouz (fyr) — Lebanon's "voice" / Rahbani matriarch.
// Nuhad Haddad (b.1934), stage name Fairouz ("turquoise"). Married Asi Rahbani
// (composer); brother-in-law Mansour Rahbani co-wrote lyrics. Their son Ziad
// Rahbani (R1653) modernized her sound from late 1970s. Baalbek + Beit el-Din
// festivals were key venues for Rahbani musical plays. Distinct from R1644
// (wsf — Wadih el-Safi), R1647 (zia — Ziad), R1650 (sah — Sabah). Fairouz is
// arguably the single most iconic Lebanese cultural figure of the 20th century.

const FYR_WORDS = [
  { w: 'Fairouz', t: 'فيروز', e: 'Fairouz — stage name meaning "turquoise"; Lebanon\'s most iconic singer', ex: 'Fairouz saut Lebnan.', exEn: 'Fairouz is the voice of Lebanon.' },
  { w: 'Nuhad Haddad', t: 'نهاد حداد', e: 'Nuhad Haddad — Fairouz\'s birth name (b. 1934, Beirut)', ex: 'Nuhad Haddad esma el-7a2i2i.', exEn: 'Nuhad Haddad is her real name.' },
  { w: 'Asi Rahbani', t: 'عاصي الرحباني', e: 'Asi Rahbani — composer husband, founder of Rahbani brothers ensemble', ex: 'Asi Rahbani jawazha sane 1955.', exEn: 'Asi Rahbani married her in 1955.' },
  { w: 'Mansour Rahbani', t: 'منصور الرحباني', e: 'Mansour Rahbani — Asi\'s brother, co-lyricist and dramatist', ex: 'Mansour Rahbani katab kalimet.', exEn: 'Mansour Rahbani wrote lyrics.' },
  { w: 'Ziad Rahbani', t: 'زياد الرحباني', e: 'Ziad Rahbani — son, jazz/oriental fusion; modernized her late career', ex: 'Ziad Rahbani jaddad sautha.', exEn: 'Ziad Rahbani modernized her sound.' },
  { w: 'saut Lebnan', t: 'صوت لبنان', e: '"voice of Lebanon" — Fairouz\'s most famous epithet', ex: 'b-yqulu 3anha saut Lebnan.', exEn: 'They call her the voice of Lebanon.' },
  { w: 'Li Beirut', t: 'لبيروت', e: '"To Beirut" — 1984 anthem during civil war, written by Joseph Harb', ex: 'Li Beirut min al-2alb.', exEn: '"To Beirut" is from the heart.' },
  { w: 'Habbeytak bel-sayf', t: 'حبيتك بالصيف', e: '"I loved you in summer" — emblematic 1970 song', ex: 'Habbeytak bel-sayf min ahla aghani.', exEn: '"I loved you in summer" is one of the prettiest songs.' },
  { w: 'Sa\'aluni el-nas', t: 'سألوني الناس', e: '"People asked me" — sung after Asi\'s death, mourning', ex: 'Sa\'aluni el-nas ba3d wafat Asi.', exEn: '"People asked me" came after Asi\'s death.' },
  { w: 'musrahiyye', t: 'مسرحية', e: 'musical play — Rahbani plays toured Arab world', ex: 'el-musrahiyye Rahbaniyye mash-houra.', exEn: 'The Rahbani play is famous.' },
  { w: 'Baalbek', t: 'بعلبك', e: 'Baalbek festival — first staged Rahbani plays from 1957 in Roman temples', ex: '3eshet Fairouz bi-Baalbek.', exEn: 'Fairouz performed at Baalbek.' },
  { w: 'mahrajan Beit el-Din', t: 'مهرجان بيت الدين', e: 'Beit el-Din Festival — Chouf venue for late-career concerts', ex: 'b-tghanni bi-mahrajan Beit el-Din.', exEn: 'She sings at the Beit el-Din festival.' },
  { w: 'el-mahjar', t: 'المهجر', e: 'diaspora — Fairouz sang of/for Lebanese abroad', ex: 'aghanni el-mahjar tehki 3an el-7anin.', exEn: 'Diaspora songs speak of longing.' },
  { w: 'ghanniye watanniye', t: 'أغنية وطنية', e: 'patriotic song — Fairouz had many about Lebanon', ex: 'Bektob ismak ghanniye watanniye.', exEn: '"I write your name" is a patriotic song.' },
  { w: 'Sabah el-kheir', t: 'صباح الخير', e: 'morning radio — Fairouz played every morning across Lebanese stations', ex: 'kel sabah Fairouz bi-l-radio.', exEn: 'Every morning Fairouz is on the radio.' },
  { w: 'shams el-7iriyye', t: 'شمس الحرية', e: '"sun of freedom" — recurring lyric image', ex: 'shams el-7iriyye bi-aghaneha.', exEn: 'The sun of freedom is in her songs.' },
  { w: 'tarab', t: 'طرب', e: 'tarab — Arabic musical ecstasy / emotional transport', ex: 'sautha b-yi3mil tarab.', exEn: 'Her voice creates tarab.' },
  { w: '7anin', t: 'حنين', e: 'longing / nostalgia — emotional core of her songs', ex: 'aghaneha kella 7anin.', exEn: 'Her songs are all longing.' },
  { w: 'qiratet shi3r', t: 'قراءة شعر', e: 'poetry recitation — many lyrics adapt classical Arabic poetry', ex: 'b-tghanni shi3r 2adeem.', exEn: 'She sings classical poetry.' },
  { w: 'a7la mn-el-aydi', t: 'أحلى من الأيدي', e: 'lit. "sweeter than hands" — describes her vocal touch', ex: 'sautha a7la mn el-aydi.', exEn: 'Her voice is gentler than hands.' },
  { w: 'aghniye 2adime', t: 'أغنية قديمة', e: 'classic / vintage song — her repertoire is now "old gold"', ex: 'b-7eb el-aghani el-2adime.', exEn: 'I love the old songs.' },
  { w: 'el-Sayyde Fairouz', t: 'السيدة فيروز', e: '"Lady Fairouz" — respectful epithet used in Lebanese press', ex: 'el-Sayyde Fairouz 3am-bi-takhtibir.', exEn: 'Lady Fairouz is being interviewed.' }
];

const FYR_DRILLS = [
  { q: 'What is Fairouz\'s birth name?', opts: ['Fairouz Haddad', 'Nuhad Haddad', 'Sabah Haddad'], a: 1, exp: 'Nuhad Wadi3 Haddad — born 1934 in Beirut. "Fairouz" (turquoise) was the stage name given to her at the Lebanese national radio station.' },
  { q: 'Who composed most of Fairouz\'s early hits?', opts: ['Ziad Rahbani', 'Mansour Rahbani', 'Asi Rahbani'], a: 2, exp: 'Asi Rahbani — her husband (m. 1955) composed the bulk of her catalog with brother Mansour writing lyrics. Their son Ziad later took over from late 1970s.' },
  { q: 'What does the stage name "Fairouz" mean?', opts: ['turquoise', 'morning star', 'silver bell'], a: 0, exp: 'Fairouz = turquoise (the gemstone). The name was chosen at Lebanese radio for its luminous, precious connotations.' },
  { q: '"Li Beirut" became famous during which period?', opts: ['the 1960s golden age', 'the 1975-1990 civil war', 'the post-2005 era'], a: 1, exp: 'Li Beirut was released in 1984 during the civil war as a love letter and lament for the wounded city. It became an unofficial anthem.' },
  { q: 'Which festival first staged the Rahbani musical plays?', opts: ['Beit el-Din', 'Byblos', 'Baalbek'], a: 2, exp: 'Baalbek International Festival — from 1957 the Rahbani brothers staged plays at the Roman temples. Beit el-Din came later (1985+) for Chouf concerts.' },
  { q: 'Who modernized Fairouz\'s sound from the late 1970s?', opts: ['her son Ziad Rahbani', 'her husband Asi Rahbani', 'Wadih el-Safi'], a: 0, exp: 'Ziad Rahbani — Fairouz\'s son brought jazz, funk, and oriental fusion into her catalog (e.g., "Kifak Inta", "Maarifti Feek"). Asi suffered a stroke in 1972 limiting his work.' },
  { q: 'What is Fairouz\'s most famous epithet?', opts: ['the morning lady', 'the voice of Lebanon (saut Lebnan)', 'the desert rose'], a: 1, exp: 'Saut Lebnan = voice of Lebanon. Press also uses "el-Sayyde Fairouz" (Lady Fairouz) and "el-Mu7arrika" (the one who moves [hearts]).' },
  { q: 'Why is "Sabah el-kheir" associated with Fairouz?', opts: ['it\'s her famous song title', 'Lebanese radio plays Fairouz every morning', 'she greets fans this way'], a: 1, exp: 'Tradition: Lebanese radio stations play Fairouz songs every morning — turning on the radio to her voice has been the national alarm clock for decades.' }
];

const FYR_TIPS = [
  'Fairouz never gives interviews. Her silence — broken only by very rare press appearances — is part of the mystique. The voice speaks; the person doesn\'t.',
  'Asi Rahbani (composer) and Mansour Rahbani (lyricist) were brothers, not twins. "Rahbani brothers" usually means them. Ziad (Asi+Fairouz\'s son) is sometimes called Rahbani al-ibn ("son Rahbani") to distinguish.',
  'Baalbek Roman temples as a stage: in 1957–1973 the Rahbani musical plays premiered there annually. The setting (2000-year-old columns, mountain night air) became inseparable from the Lebanese cultural identity.',
  'Fairouz is one of the few Arab artists who refused to perform in any Arab country at war with Lebanon and famously refused to sing for any specific Lebanese political faction during the civil war — preserving universal acceptance.',
  'Three eras of Fairouz: (1) 1950s–early 70s Asi/Mansour folk-classical fusion ("Habbeytak bel-sayf"); (2) mid-70s solo phase with various composers ("Sa\'aluni el-nas"); (3) 1980s+ Ziad jazz/funk/oriental hybrids ("Kifak Inta"). Each era has loyal partisans.'
];
