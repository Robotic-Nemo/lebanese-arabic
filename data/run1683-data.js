// Run #1683 — NEW FEATURE: Lebanese Jezzine (jez)
// Small Christian mountain town in south Lebanon, famous for its 90m waterfall (Shallalat),
// traditional handmade cutlery (sakaakin Jezzine), and summer-resort identity.
// Maronite-majority enclave in mostly-Shia south. Cooler climate, pine forests.

const JEZ_WORDS = [
  { w: 'Jezzine', t: 'جزّين', en: 'Jezzine — south Lebanon mountain town', ex: 'Jezzine baldeh jabaliyye bil-jnoub.', exEn: 'Jezzine is a mountain town in the south.' },
  { w: 'shallalat Jezzine', t: 'شلالات جزّين', en: 'Jezzine waterfalls (~90m)', ex: 'shallalat Jezzine 3aliyye taqriban 90 metr.', exEn: 'Jezzine waterfalls are about 90m high.' },
  { w: 'sakaakin Jezzine', t: 'سكاكين جزّين', en: 'Jezzine knives/cutlery (handmade)', ex: 'sakaakin Jezzine ma3roufin bi-shaghlon el-yadawi.', exEn: 'Jezzine knives are known for handmade work.' },
  { w: 'sayfiye', t: 'صيفية', en: 'summer resort/season', ex: 'Jezzine sayfiyet el-jnoub.', exEn: 'Jezzine is the summer resort of the south.' },
  { w: 'sno3 abu el-tayr', t: 'صنع أبو الطير', en: 'bird-handle knives (signature)', ex: 'sakkina abu el-tayr ma2dis Jezzine.', exEn: 'The bird-handle knife is a Jezzine icon.' },
  { w: 'jneine', t: 'جنينة', en: 'pine forest', ex: 'el-jneine 7awalein Jezzine sno3bar.', exEn: 'The forest around Jezzine is pine.' },
  { w: 'ihtilal Jezzine', t: 'احتلال جزّين', en: 'Israeli occupation of Jezzine (1985–1999)', ex: 'ihtilal Jezzine khalla7 sanet 1999.', exEn: 'The Jezzine occupation ended in 1999.' },
  { w: 'jaysh lubnan el-janoubi', t: 'جيش لبنان الجنوبي', en: 'South Lebanon Army (SLA, defunct)', ex: 'jaysh lubnan el-janoubi tafkkak ma3 el-insi7ab.', exEn: 'The SLA disintegrated with the withdrawal.' },
  { w: 'kanise el-mukhalles', t: 'كنيسة المخلّص', en: 'Saviour Church (Greek Catholic landmark)', ex: 'kanise el-mukhalles 2adimeh.', exEn: 'The Saviour Church is old.' },
  { w: 'qa7we Jezzine', t: 'قهوة جزّين', en: 'Jezzine cafés (overlooking waterfall)', ex: 'qa3adna bi-qa7we 3al-shallal.', exEn: 'We sat at a café over the waterfall.' },
  { w: 'sno3bar', t: 'صنوبر', en: 'pine (tree/nut)', ex: 'jbel Jezzine maliyen sno3bar.', exEn: 'The Jezzine mountain is full of pines.' },
  { w: 'farashe', t: 'فراشة', en: 'butterfly (Jezzine knife motif)', ex: 'farashet Jezzine 3al sakkin.', exEn: 'The Jezzine butterfly is on the knife.' },
  { w: 'baladiyet Jezzine', t: 'بلديّة جزّين', en: 'Jezzine municipality', ex: 'baladiyet Jezzine na7yet jadideh.', exEn: 'The Jezzine municipality is a new district.' },
  { w: 'qaza Jezzine', t: 'قضاء جزّين', en: 'Jezzine district (caza)', ex: 'qaza Jezzine bi-mu7afazet el-jnoub.', exEn: 'The Jezzine district is in South governorate.' },
  { w: 'maronet Jezzine', t: 'موارنة جزّين', en: 'Jezzine Maronites (majority)', ex: 'maronet Jezzine bi-akthar el-qura.', exEn: 'Jezzine Maronites are in most villages.' },
  { w: 'sa7a el-bayadir', t: 'ساحة البيادر', en: 'Bayadir square (town center)', ex: 'sa7a el-bayadir mafraq Jezzine.', exEn: 'Bayadir square is the Jezzine crossroads.' },
  { w: 'darb el-Tannour', t: 'درب التنّور', en: 'path to Jezzine waterfall lookout', ex: 'darb el-Tannour bi-wassel 3al shallal.', exEn: 'The Tannour path leads to the waterfall.' },
  { w: 'mahjar Jezzine', t: 'مهجر جزّين', en: 'Jezzine diaspora (heavy emigration)', ex: 'mahjar Jezzine kbir bil-Brazil.', exEn: 'The Jezzine diaspora is large in Brazil.' },
  { w: '3eid el-saleeb', t: 'عيد الصليب', en: 'Feast of the Cross (Sept 14)', ex: '3eid el-saleeb 3and-na bi-Jezzine.', exEn: 'We celebrate the Feast of the Cross in Jezzine.' },
  { w: 'mansaf el-3akkawi', t: 'منسف العكّاوي', en: 'mountain feast/communal meal', ex: 'akhadna mansaf 3al jbel.', exEn: 'We had a feast on the mountain.' }
];

const JEZ_DRILLS = [
  { q: 'How tall are the Jezzine waterfalls?', a: 'About 90 meters', d1: 'About 30 meters', d2: 'Over 200 meters', exp: 'Shallalat Jezzine drop ~90m off the edge of the town plateau — visible from the main square and the main reason it became a summer resort.' },
  { q: 'What is Jezzine famous for besides the waterfall?', a: 'Handmade cutlery with bird/butterfly handles', d1: 'Wine production', d2: 'Glass-blowing', exp: 'Jezzine knife-making (sakaakin) is a centuries-old craft. Handles shaped like phoenixes/butterflies are the iconic design — a few workshops still operate.' },
  { q: 'Jezzine\'s religious majority is...', a: 'Maronite Christian', d1: 'Shia Muslim', d2: 'Druze', exp: 'Jezzine is a Maronite-majority district, an enclave in the otherwise Shia-majority south Lebanon governorate.' },
  { q: 'When did the Israeli occupation of Jezzine end?', a: '1999 (one year before full withdrawal)', d1: '1989', d2: '2006', exp: 'Israel withdrew from Jezzine in 1999, a year before the larger May-2000 withdrawal from south Lebanon. The SLA largely collapsed afterward.' },
  { q: 'Jezzine sits at roughly what elevation?', a: 'Around 950m', d1: 'Around 100m (sea level)', d2: 'Around 2400m (above snowline)', exp: 'Jezzine is at ~950m — high enough for cool summer breezes (hence "sayfiye"), but well below the snow line of the higher Lebanon range.' },
  { q: 'What does "qaza Jezzine" mean?', a: 'Jezzine District (administrative caza)', d1: 'A type of bread', d2: 'A festival', exp: 'Qaza/qadaa is the Lebanese administrative district unit. Qaza Jezzine sits inside the South governorate (mu7afazet el-jnoub).' },
  { q: 'Which Lebanon civil-war-era militia was tied to Jezzine area?', a: 'South Lebanon Army (SLA / Jaysh Lubnan el-Janoubi)', d1: 'Lebanese Forces only', d2: 'Hezbollah', exp: 'The SLA (1978–2000) was Israel\'s proxy militia in the south; Jezzine was inside its zone until Israel\'s 1999 pullout.' },
  { q: 'What kind of trees dominate the Jezzine landscape?', a: 'Stone pine (sno3bar)', d1: 'Cedar', d2: 'Olive', exp: 'Pine forests blanket Jezzine — pine nuts (sno3bar) are a regional product. Cedars are further north (Bsharri / Tannourine).' }
];

const JEZ_TIPS = [
  'Jezzine cutlery: the bird/butterfly-handle knife (sakkin abu el-tayr / sakkin el-farashe) is the signature. A handful of workshops still hand-forge them — most "Jezzine knives" sold to tourists are mass-produced.',
  'Jezzine has one of Lebanon\'s heaviest emigration rates per capita. Large Jezzini diasporas exist in Brazil, Argentina, Mexico, and West Africa — many returnees built the modern town.',
  'Geographically Jezzine connects the Chouf to the south coast — the road from Beit ed-Dine through Niha down to Jezzine is one of the most scenic mountain crossings in Lebanon.',
  'The Saviour Church (Kanise el-Mukhalles) and the nearby monastery are Greek Catholic (Melkite) — a reminder that Jezzine has multiple Eastern Catholic communities, not only Maronite.',
  'During the 1985–1999 occupation, Jezzine was the SLA\'s northernmost outpost; the SLA collapse in 1999 prefigured Israel\'s full withdrawal a year later.'
];
