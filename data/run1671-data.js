// Run #1671 — NEW FEATURE: Lebanese Palaces & Emiri Residences (qsr)
// Beiteddine, Sursock, Mukhtara, Moussa Castle, Fakhreddine heritage

const QSR_WORDS = [
  { w: 'qaSr', t: 'قصر', en: 'palace', ex: 'qaSr Beiteddine ahla qaSr bi lubnan.', exEn: 'Beiteddine is the most beautiful palace in Lebanon.' },
  { w: 'qSeyr', t: 'قصير', en: 'small palace / manor house', ex: 'fi qSeyr 3atiq bi 7ammana.', exEn: 'There is an old manor in Hammana.' },
  { w: 'al-amir', t: 'الأمير', en: 'the prince / emir', ex: 'al-amir Bashir bana qaSr Beiteddine.', exEn: 'Emir Bashir built Beiteddine Palace.' },
  { w: 'diwan', t: 'ديوان', en: 'reception hall / council', ex: 'al-diwan la-stqbal el-Duyuf.', exEn: 'The diwan is for receiving guests.' },
  { w: 'liwan', t: 'إيوان', en: 'vaulted hall opening on courtyard', ex: 'el-liwan maftu7 3al-saHa.', exEn: 'The liwan opens onto the courtyard.' },
  { w: '7ammam el-amir', t: 'حمّام الأمير', en: "prince's bath", ex: '7ammam el-amir 3uthmani el-Tiraz.', exEn: "The prince's bath is Ottoman style." },
  { w: 'qubbeh', t: 'قبّة', en: 'dome', ex: 'el-qubbeh fawq el-7ammam.', exEn: 'The dome is above the bath.' },
  { w: 'fusayfisa2', t: 'فسيفساء', en: 'mosaics', ex: 'fusayfisa2 Beiteddine min el-2athar el-byzantiyye.', exEn: "Beiteddine's mosaics are Byzantine antiquities." },
  { w: 'beit-eddine', t: 'بيت الدين', en: 'Beiteddine (House of Faith)', ex: 'beit-eddine bi-l-shouf.', exEn: 'Beiteddine is in the Chouf.' },
  { w: 'sursok', t: 'سرسق', en: 'Sursock palace / family', ex: 'mat7af sursok bi-l-2ashrafiyye.', exEn: 'Sursock Museum is in Achrafieh.' },
  { w: 'el-mukhtara', t: 'المختارة', en: 'Mukhtara (Joumblatt seat)', ex: 'qaSr el-mukhtara da3iret jonblat.', exEn: 'Mukhtara Palace is the Joumblatt residence.' },
  { w: 'qaSr musa', t: 'قصر موسى', en: 'Moussa Castle', ex: 'qaSr musa 3amalo bi-2idayno.', exEn: 'Moussa built his castle with his own hands.' },
  { w: 'fakhreddine', t: 'فخر الدين', en: 'Fakhreddine (Maan emir)', ex: 'fakhreddine min akbar umara2 lubnan.', exEn: 'Fakhreddine was one of the great emirs of Lebanon.' },
  { w: 'beit kbir', t: 'بيت كبير', en: 'great house / manor', ex: 'el-beit el-kbir la-l-3ayle el-2ariqa.', exEn: 'The great house belongs to the prominent family.' },
  { w: 'mat7af', t: 'متحف', en: 'museum', ex: 'el-qaSr Sar mat7af.', exEn: 'The palace became a museum.' },
  { w: '2athar', t: 'آثار', en: 'antiquities / heritage', ex: 'el-2athar bi-l-qaSr min ayyam zaman.', exEn: 'The antiquities in the palace are from old times.' }
];

const QSR_DRILLS = [
  { q: 'Where is Beiteddine Palace located?', a: 'in the Chouf mountains', d1: 'in Beirut', d2: 'in Tripoli', exp: 'Beiteddine sits high in the Chouf above Deir al-Qamar.' },
  { q: 'Who built Beiteddine Palace?', a: 'Emir Bashir Shihab II', d1: 'Fakhreddine', d2: 'the Sursock family', exp: 'Bashir II built it across 30 years in the early 19th century.' },
  { q: 'Where is the Sursock Museum?', a: 'Achrafieh, Beirut', d1: 'Tripoli', d2: 'Tyre', exp: 'Sursock Palace is the Italianate villa-museum in Achrafieh.' },
  { q: 'Mukhtara Palace is the seat of which family?', a: 'Joumblatt', d1: 'Sursock', d2: 'Shihab', exp: 'The Joumblatts have led the Druze from Mukhtara for centuries.' },
  { q: 'Who built Moussa Castle?', a: 'Moussa al-Maamari himself', d1: 'an Italian architect', d2: 'a Druze emir', exp: 'Moussa built it stone by stone fulfilling a childhood promise.' },
  { q: 'Where is Moussa Castle?', a: 'near Deir al-Qamar', d1: 'Baalbek', d2: 'Tripoli', exp: 'It overlooks the Chouf valleys near Beiteddine.' },
  { q: 'What does liwan mean?', a: 'a vaulted reception hall', d1: 'a dome', d2: 'a fountain', exp: 'A liwan opens three-sided onto the courtyard for receiving guests.' },
  { q: 'Fakhreddine was emir of which dynasty?', a: 'the Maan dynasty', d1: 'the Shihab dynasty', d2: 'the Sursock family', exp: 'Fakhreddine II ruled Mount Lebanon and tried to unify the region.' },
  { q: 'What decorates the baths at Beiteddine?', a: 'Byzantine mosaics', d1: 'frescoes', d2: 'glazed tiles', exp: 'Mosaics from Jiyeh were brought to decorate the hammam halls.' },
  { q: 'Diwan refers to what room in a palace?', a: 'a reception / council hall', d1: 'a kitchen', d2: 'a bedroom', exp: 'The diwan is where guests were received and councils held.' }
];

const QSR_TIPS = [
  'Beiteddine Festival hosts Lebanese music + theater every summer since 1985 — Bashir\'s palace courtyard becomes a stage.',
  'Sursock Museum reopened in 2023 after Beirut blast restoration — its rosette stained-glass facade is iconic Achrafieh.',
  'Mukhtara is still a working political seat — visit its open-court diwan tradition where villagers historically brought concerns.',
  'Moussa Castle features mechanical dioramas of Lebanese village life Moussa Maamari sculpted himself — closer to outsider art than fortress.',
  'Beiteddine combines Damascene tile, cedar woodwork, and Aleppine stone — Levantine craft from across the region in one palace.'
];
