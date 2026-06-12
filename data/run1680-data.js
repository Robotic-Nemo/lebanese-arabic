// Run #1680 — NEW FEATURE: Lebanese Civil War 1975-1990 (lcw)
// Defining 20th-century event in Lebanon. 15 years, ~100-150K killed, ~17K disappeared,
// ~1M displaced. Vocabulary covers militias, key dates, geographies, peace accords.
// Treated as historical content — neutral attribution, no glorification.

const LCW_WORDS = [
  { w: '7arb ahliyye', t: 'حرب أهلية', en: 'civil war', ex: 'el-7arb el-ahliyye damet 15 sene.', exEn: 'The civil war lasted 15 years.' },
  { w: 'milishyat', t: 'ميليشيات', en: 'militias', ex: 'el-milishyat in7allet ba3d el-Taif.', exEn: 'The militias were dissolved after Taif.' },
  { w: 'khat el-tamas', t: 'خط التماس', en: 'demarcation/Green Line', ex: 'khat el-tamas qassam Beirut.', exEn: 'The Green Line split Beirut.' },
  { w: '13 nisan 1975', t: '١٣ نيسان ١٩٧٥', en: 'April 13, 1975 (war trigger)', ex: '13 nisan 1975 ballashet el-7arb.', exEn: 'On April 13, 1975 the war began.' },
  { w: 'ittifa2 el-Taif', t: 'اتفاق الطائف', en: 'Taif Accord (1989)', ex: 'ittifa2 el-Taif khalla7 el-7arb.', exEn: 'The Taif Accord ended the war.' },
  { w: 'Sabra w Shatila', t: 'صبرا وشاتيلا', en: 'Sabra & Shatila massacre (1982)', ex: 'majzaret Sabra w Shatila bi-1982.', exEn: 'The Sabra & Shatila massacre was in 1982.' },
  { w: 'ijtiya7 1982', t: 'اجتياح ١٩٨٢', en: 'Israeli invasion (1982)', ex: 'el-ijtiya7 wassal la-Beirut bi-1982.', exEn: 'The 1982 invasion reached Beirut.' },
  { w: '7isar Beirut', t: 'حصار بيروت', en: 'Siege of Beirut (1982)', ex: '7isar Beirut tawwal shahrein.', exEn: 'The Siege of Beirut lasted two months.' },
  { w: 'Bachir Gemayel', t: 'بشير الجميل', en: 'Bachir Gemayel (assassinated 1982)', ex: 'Bachir Gemayel ittaghta bi-Aylul 1982.', exEn: 'Bachir Gemayel was assassinated in September 1982.' },
  { w: 'Kata2eb', t: 'الكتائب', en: 'Phalanges/Kataeb party', ex: 'el-Kata2eb hizb maseihi.', exEn: 'The Kataeb is a Christian party.' },
  { w: 'Quwwat Lubnaniyye', t: 'القوات اللبنانية', en: 'Lebanese Forces (LF)', ex: 'el-Quwwat el-Lubnaniyye in7allet w sarat 7izb.', exEn: 'The Lebanese Forces dissolved and became a party.' },
  { w: 'AMAL', t: 'حركة أمل', en: 'Amal Movement', ex: '7arakat AMAL ta2assaset 1974.', exEn: 'The Amal Movement was founded in 1974.' },
  { w: 'munazzamet el-ta7rir', t: 'منظمة التحرير', en: 'PLO', ex: 'munazzamet el-ta7rir kanet bi-Beirut qabel 1982.', exEn: 'The PLO was in Beirut before 1982.' },
  { w: 'mukhayyam', t: 'مخيم', en: 'refugee camp', ex: 'el-mukhayyam fi-no jam3iyyat.', exEn: 'There are associations in the camp.' },
  { w: 'mufqudin', t: 'مفقودين', en: 'the disappeared (~17,000)', ex: 'el-mufqudin lessa3 ma3rifna sirhon.', exEn: 'We still don\'t know the fate of the disappeared.' },
  { w: 'Harb el-Jabal', t: 'حرب الجبل', en: 'Mountain War (1983, Chouf)', ex: 'Harb el-Jabal sarat ba3d insi7ab Israil.', exEn: 'The Mountain War happened after Israel withdrew.' },
  { w: 'Damour', t: 'الدامور', en: 'Damour massacre (1976)', ex: 'majzaret Damour kanet bi-Kanun 1976.', exEn: 'The Damour massacre was in January 1976.' },
  { w: 'es-sabt el-iswad', t: 'السبت الأسود', en: 'Black Saturday (Dec 6, 1975)', ex: 'es-sabt el-iswad qatlu m2at min el-medeniyyin.', exEn: 'On Black Saturday hundreds of civilians were killed.' },
  { w: 'taqsim Beirut', t: 'تقسيم بيروت', en: 'division of Beirut (East/West)', ex: 'taqsim Beirut sar ma3rouf bi-sharqiyye w gharbiyye.', exEn: 'The division of Beirut became known as East and West.' },
  { w: 'laji2in', t: 'لاجئين', en: 'refugees/displaced', ex: 'm2at alf laji2 men el-jnoub.', exEn: 'Hundreds of thousands of refugees from the south.' }
];

const LCW_DRILLS = [
  { q: 'When did the Lebanese Civil War begin?', a: 'April 13, 1975', d1: 'September 1982', d2: 'March 1989', exp: 'The Ain el-Rummaneh bus shooting on Apr 13, 1975 is the conventional start date — though sectarian tensions had been building for years.' },
  { q: 'What officially ended the Civil War?', a: 'The Taif Accord (1989)', d1: 'The Cairo Agreement (1969)', d2: 'UN Resolution 1701 (2006)', exp: 'Saudi-brokered Taif Accord redistributed parliamentary seats 50/50 Christian/Muslim, basis for the current confessional system.' },
  { q: 'What was "Khat el-Tamas"?', a: 'The Green Line dividing East/West Beirut', d1: 'A Syrian border', d2: 'A military uniform color', exp: 'The demarcation line ran roughly along Damascus Road, splitting Christian-majority East from Muslim-majority West Beirut.' },
  { q: 'When did Israel invade Lebanon (the major invasion)?', a: '1982 (Operation Peace for Galilee)', d1: '1978', d2: '2000', exp: 'The 1982 invasion reached Beirut and triggered the siege; the 1978 Litani Operation was a smaller incursion.' },
  { q: 'When was Bachir Gemayel assassinated?', a: 'September 14, 1982 — 9 days after winning the presidency', d1: 'October 1989', d2: 'July 1976', exp: 'A bomb at the Kataeb HQ in Achrafieh killed Bachir before he could take office. His brother Amine succeeded him.' },
  { q: 'Approximately how many people were "disappeared" during the war?', a: 'Around 17,000 — most never accounted for', d1: '~50', d2: '~5 million', exp: 'Families of the disappeared (mufqudin) still campaign for answers; sit-in tents have stood at Riad al-Solh square for years.' },
  { q: 'Where did the Sabra & Shatila massacre occur?', a: 'Palestinian refugee camps in Beirut (1982)', d1: 'Tripoli', d2: 'Beqaa Valley', exp: 'September 1982, days after Bachir Gemayel\'s assassination. Israel\'s Kahan Commission later found PM Sharon "personally responsible" for ignoring foreseeable danger.' },
  { q: 'Where was the "Harb el-Jabal" (Mountain War) fought?', a: 'The Chouf mountains (Druze vs LF, 1983)', d1: 'North Bekaa', d2: 'Akkar', exp: 'After Israel withdrew from the Chouf in 1983, fighting between the Lebanese Forces and Druze PSP devastated mixed Christian-Druze villages.' },
  { q: 'How long did the Civil War last?', a: '15 years (1975–1990)', d1: '5 years', d2: '30 years', exp: 'One of the longest civil wars of the modern Middle East — left ~100,000-150,000 dead and ~1M displaced from a population of ~3M.' },
  { q: 'What was "es-sabt el-iswad" (Black Saturday)?', a: 'Dec 6, 1975 — retaliatory killings of civilians at checkpoints in Beirut', d1: 'A Druze religious holiday', d2: 'A holiday for the army', exp: 'After Phalange members were killed, militiamen set up checkpoints checking IDs for religion — hundreds killed in a single day.' }
];

const LCW_TIPS = [
  'Estimated dead: 100,000–150,000. Disappeared: ~17,000. Internally displaced: ~900,000. Total population was about 3 million.',
  'The 1991 General Amnesty Law absolved most militia leaders for crimes during the war — many became politicians. Critics call it the "law of forgetting."',
  'The Taif Accord redistributed parliamentary seats 50/50 Christian/Muslim (was 6/5 in favor of Christians) and weakened the presidency relative to the prime minister/speaker.',
  'Lebanon has never had a Truth & Reconciliation Commission. School history textbooks famously stop at 1943 (independence) — the civil war is officially un-taught.',
  'Major militias of the war (LF, Kataeb, AMAL, Hezbollah, PSP) all became political parties post-1990 — most still active in parliament today.'
];
