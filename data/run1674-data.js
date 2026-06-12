// Run #1674 — NEW FEATURE: Lebanese Cedar Revolution & March 14, 2005 (cvr)
// thawret el-arz, Hariri assassination aftermath, Syrian withdrawal, mass protests at Martyrs' Square

const CVR_WORDS = [
  { w: 'thawret el-arz', t: 'ثورة الأرز', en: 'Cedar Revolution', ex: 'thawret el-arz seret bi 2005.', exEn: 'The Cedar Revolution happened in 2005.' },
  { w: 'thawra', t: 'ثورة', en: 'revolution / uprising', ex: 'el-thawra ballasht ba3d 2yet Hariri.', exEn: "The revolution started after Hariri's assassination." },
  { w: '14 azar', t: '14 آذار', en: 'March 14', ex: '14 azar yawm el-ihtigaj el-kbir.', exEn: 'March 14 was the day of the great protest.' },
  { w: '8 azar', t: '8 آذار', en: 'March 8', ex: '8 azar mu2ayyid surya, 14 mu3ared.', exEn: 'March 8 supports Syria, March 14 opposes.' },
  { w: 'sa7et el-shuhada', t: 'ساحة الشهداء', en: "Martyrs' Square", ex: 'million bi sa7et el-shuhada.', exEn: "A million in Martyrs' Square." },
  { w: 'rafiq el-Hariri', t: 'رفيق الحريري', en: 'Rafic Hariri', ex: 'rafiq el-Hariri ra2is el-7ukume.', exEn: 'Rafic Hariri was prime minister.' },
  { w: 'ightyal', t: 'اغتيال', en: 'assassination', ex: 'ightyal el-Hariri bi 14 shbat 2005.', exEn: "Hariri's assassination was on Feb 14, 2005." },
  { w: '14 shbat', t: '14 شباط', en: 'February 14', ex: '14 shbat yawm el-tafjir.', exEn: 'Feb 14 was the day of the bombing.' },
  { w: 'tafjir', t: 'تفجير', en: 'bombing / explosion', ex: 'el-tafjir saar 3a corniche el-Manara.', exEn: 'The bombing happened on Manara corniche.' },
  { w: '7uriyye', t: 'حرّيّة', en: 'freedom', ex: '7urriyye, siyade, istiqlal — sh3ar el-thawra.', exEn: "Freedom, sovereignty, independence — the revolution's slogan." },
  { w: 'siyade', t: 'سيادة', en: 'sovereignty', ex: 'siyadet lubnan baddna ya.', exEn: 'We want sovereignty for Lebanon.' },
  { w: 'istiqlal', t: 'استقلال', en: 'independence', ex: 'istiqlal kemil min surya.', exEn: 'Full independence from Syria.' },
  { w: 'in7ab el-jaysh el-suri', t: 'انسحاب الجيش السوري', en: 'Syrian army withdrawal', ex: 'in7ab el-jaysh el-suri bi nisan 2005.', exEn: 'The Syrian army withdrew in April 2005.' },
  { w: 'wisaye', t: 'وصاية', en: 'Syrian tutelage / mandate', ex: 'el-wisaye el-suriyye 7akamet 29 sene.', exEn: 'Syrian tutelage ruled for 29 years.' },
  { w: '2arar 1559', t: 'قرار 1559', en: 'UN Resolution 1559', ex: '2arar 1559 Talab in7ab el-jaysh el-ajnabi.', exEn: 'Resolution 1559 demanded foreign army withdrawal.' },
  { w: 'mu2ayyid', t: 'مؤيّد', en: 'supporter / loyalist', ex: 'mu2ayyid 14 azar wa2af bi-kil makan.', exEn: 'March 14 supporters stood everywhere.' },
  { w: 'mu3arada', t: 'معارضة', en: 'opposition', ex: 'el-mu3arada Talabet rahil el-7ukume.', exEn: "The opposition demanded the government's departure." },
  { w: 'ihtigaj', t: 'احتجاج', en: 'protest', ex: 'ihtigaj milyoni bi sa7et el-shuhada.', exEn: "Million-strong protest in Martyrs' Square." },
  { w: 'i3tisam', t: 'اعتصام', en: 'sit-in', ex: 'i3tisam Tawil bi west Beirut.', exEn: 'A long sit-in in downtown Beirut.' },
  { w: 'sh3ar', t: 'شعار', en: 'slogan', ex: 'sh3ar el-thawra "el-ha2 a-shaab".', exEn: 'The revolution slogan: "the truth, the people".' }
];

const CVR_DRILLS = [
  { q: 'When did the Cedar Revolution happen?', a: '2005', d1: '1990', d2: '2019', exp: 'It began in February-March 2005 after Hariri was assassinated.' },
  { q: "What event sparked the Cedar Revolution?", a: "Rafic Hariri's assassination", d1: 'July 2006 War', d2: 'October 17 protests', exp: 'Hariri was killed by a truck bomb on Feb 14, 2005.' },
  { q: "Where was the main March 14, 2005 protest held?", a: "Martyrs' Square (Sa7et el-Shuhada)", d1: 'Riad el-Solh Square', d2: 'Sassine Square', exp: "Sa7et el-Shuhada in downtown Beirut held the million-strong protest." },
  { q: 'What was the Cedar Revolution slogan?', a: 'Freedom, Sovereignty, Independence', d1: 'Bread, Freedom, Justice', d2: 'Lebanon First', exp: '7urriyye, siyade, istiqlal — three core demands.' },
  { q: 'Which UN resolution backed Syrian withdrawal?', a: '1559', d1: '425', d2: '1701', exp: 'Resolution 1559 (Sept 2004) demanded all foreign forces withdraw.' },
  { q: 'When did Syrian troops withdraw from Lebanon?', a: 'April 2005', d1: '1990', d2: '2011', exp: 'After 29 years of presence, Syria withdrew its 14,000 troops in April 2005.' },
  { q: 'What does "8 azar" represent?', a: 'pro-Syria political bloc', d1: 'a Christmas date', d2: 'army veterans', exp: 'March 8 (2005) was a pro-Syrian counter-rally; the camp kept that name.' },
  { q: 'How long did Syrian "wisaye" last in Lebanon?', a: '29 years (1976-2005)', d1: '5 years', d2: '50 years', exp: 'Syrian forces entered in 1976 during the civil war and stayed until 2005.' },
  { q: 'How many people protested on March 14, 2005?', a: 'about 1 million', d1: '10,000', d2: '5 million', exp: "Roughly a quarter of Lebanon's population — the largest protest in its history." },
  { q: "Why is it called the 'Cedar' Revolution?", a: 'cedar is the national symbol on the flag', d1: 'it started in Bsharri', d2: 'protesters carried cedar branches', exp: 'Western media coined it after the cedar on the Lebanese flag.' }
];

const CVR_TIPS = [
  'Rafic Hariri was killed by 1,800 kg of explosives near the St. George Hotel — the biggest political assassination in modern Lebanese history.',
  'The Cedar Revolution coincided with the Orange Revolution (Ukraine) and Rose Revolution (Georgia) — Western media grouped them as "color revolutions".',
  "March 14, 2005 was the largest demonstration in Lebanon's history — roughly 25% of the country gathered downtown.",
  'The UN-backed Special Tribunal for Lebanon (STL) later indicted Hezbollah members for the Hariri assassination — a verdict in 2020 convicted one in absentia.',
  "March 14 and March 8 became permanent political coalition labels — Lebanon's politics still organize around the 2005 dividing line."
];
