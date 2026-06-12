// Run #1686 — NEW FEATURE: Mar Charbel & Annaya Maronite saint pilgrimage (chr)
// Saint Charbel Makhlouf (1828-1898) — hermit monk at Annaya monastery in Jbeil
// district. Beatified 1965, canonized 1977. Most popular saint in Lebanon —
// pictures hang in homes, taxis, shops nationwide. Posthumous miracles, healing
// oil (zeit Mar Charbel), Sunday pilgrimages to Annaya. Distinct from R1605
// (qsh — Wadi Qadisha Maronite heartland) which is geographic + monastic
// patrimony, and R783 (eid — religious holidays calendar).

const CHR_WORDS = [
  { w: 'Mar Charbel', t: 'مار شربل', e: 'Saint Charbel Makhlouf — Maronite hermit, Lebanon\'s most popular saint', ex: 'Mar Charbel ma3roof bi-l-3ajayib.', exEn: 'Saint Charbel is known for miracles.' },
  { w: 'Annaya', t: 'عنّايا', e: 'Annaya — village + monastery in Jbeil district where Charbel lived/buried', ex: 'rou7na 3al Annaya yawm el-a7ad.', exEn: 'We went to Annaya on Sunday.' },
  { w: 'dayr Mar Maron', t: 'دير مار مارون', e: 'Saint Maron monastery (Annaya) — Charbel\'s home monastery', ex: 'dayr Mar Maron bi-Annaya.', exEn: 'Saint Maron monastery is in Annaya.' },
  { w: 'mahbasa', t: 'محبسة', e: 'hermitage — small isolated cell where Charbel lived 23 years', ex: 'el-mahbasa fawq el-dayr.', exEn: 'The hermitage is above the monastery.' },
  { w: 'zeit Mar Charbel', t: 'زيت مار شربل', e: 'Saint Charbel oil — blessed oil for healing', ex: 'akhadt zeit Mar Charbel la-3amti.', exEn: 'I took Saint Charbel oil for my aunt.' },
  { w: '3ajayib', t: 'عجايب', e: 'miracles — countless healings attributed to Charbel', ex: '3ajayib Mar Charbel ktire.', exEn: 'Saint Charbel\'s miracles are many.' },
  { w: 'shafa3a', t: 'شفاعة', e: 'intercession — asking saint to pray for you', ex: 'tlabna shafa3et Mar Charbel.', exEn: 'We asked for Saint Charbel\'s intercession.' },
  { w: 'qiddees', t: 'قدّيس', e: 'saint — recognized holy person', ex: 'Mar Charbel qiddees lebnani.', exEn: 'Saint Charbel is a Lebanese saint.' },
  { w: 'rahbe', t: 'رهبنة', e: 'monasticism / monastic order', ex: 'dakhal el-rahbe sane 1851.', exEn: 'He entered monasticism in 1851.' },
  { w: 'rahban Maroni', t: 'رهبان موارنة', e: 'Maronite monks (Lebanese Maronite Order)', ex: 'el-rahban Maroni bi-Annaya.', exEn: 'The Maronite monks are at Annaya.' },
  { w: 'ihtifal', t: 'احتفال', e: 'feast / celebration (saint\'s feast day)', ex: 'ihtifal Mar Charbel bi-aakhir tammuz.', exEn: 'Saint Charbel\'s feast is at end of July.' },
  { w: '3eid Mar Charbel', t: 'عيد مار شربل', e: 'Saint Charbel feast (3rd Sunday of July)', ex: '3eid Mar Charbel youm a7ad.', exEn: 'Saint Charbel feast is on a Sunday.' },
  { w: 'qabr', t: 'قبر', e: 'tomb (Charbel\'s tomb at Annaya — pilgrimage site)', ex: 'qabr Mar Charbel bi-l-dayr.', exEn: 'Saint Charbel\'s tomb is in the monastery.' },
  { w: 'dam-3', t: 'دمع', e: 'tear (Charbel\'s tomb reportedly weeps oil/blood)', ex: 'el-qabr ndam3 zeit.', exEn: 'The tomb wept oil.' },
  { w: 'shifa', t: 'شفاء', e: 'healing — Charbel\'s primary miracle type', ex: 'tleb el-shifa min Mar Charbel.', exEn: 'He asked Saint Charbel for healing.' },
  { w: 'zwar', t: 'زوار', e: 'pilgrims / visitors', ex: 'el-zwar bi-yejou min kel mata7.', exEn: 'Pilgrims come from everywhere.' },
  { w: 'ziyara', t: 'زيارة', e: 'pilgrimage / visit (to a holy site)', ex: 'rou7na ziyara la-Mar Charbel.', exEn: 'We made a pilgrimage to Saint Charbel.' },
  { w: 'sourat Mar Charbel', t: 'صورة مار شربل', e: 'Saint Charbel icon/picture (in homes, cars)', ex: 'sourat Mar Charbel bi-saalon-na.', exEn: 'Saint Charbel\'s picture is in our living room.' },
  { w: 'la7ye', t: 'لحية', e: 'beard (Charbel iconic feature — long white beard)', ex: 'Mar Charbel bi-la7yeto el-bayda.', exEn: 'Saint Charbel with his white beard.' },
  { w: 'qadas', t: 'قدّاس', e: 'mass / liturgy (offered for intentions)', ex: '3amlu-lo qadas la-roo7 jeddo.', exEn: 'They had a mass for his grandfather.' },
  { w: 'tamjeed', t: 'تمجيد', e: 'glorification / canonization', ex: 'tamjeed Mar Charbel sane 1977.', exEn: 'Saint Charbel\'s canonization was 1977.' },
  { w: 'tatweeb', t: 'تطويب', e: 'beatification (step before canonization)', ex: 'tatweeb Mar Charbel sane 1965.', exEn: 'Saint Charbel\'s beatification was 1965.' }
];

const CHR_DRILLS = [
  { q: 'Where is Saint Charbel\'s monastery?', opts: ['Bsharri', 'Annaya', 'Beirut'], a: 1, exp: 'Saint Charbel lived and is buried at Annaya monastery (Dayr Mar Maron) in Jbeil district. Bsharri is associated with the cedars and Khalil Gibran, not Charbel.' },
  { q: 'When was Saint Charbel canonized?', opts: ['1977', '1865', '2001'], a: 0, exp: 'Charbel was beatified in 1965 and canonized (officially declared a saint) in 1977 by Pope Paul VI. He had died in 1898.' },
  { q: 'What is "zeit Mar Charbel"?', opts: ['his birthplace', 'blessed healing oil', 'the monastery wine'], a: 1, exp: 'Zeit Mar Charbel is blessed oil distributed at the monastery — Lebanese take it home to anoint the sick. Many healing testimonies are tied to it.' },
  { q: 'Charbel lived 23 years in a "mahbasa" — what is that?', opts: ['a hermitage / hermit\'s cell', 'a chapel', 'a vineyard'], a: 0, exp: 'Mahbasa = hermitage. Charbel left the main monastery in 1875 to live in extreme solitude at the upper hermitage (mahbasa) until his death in 1898.' },
  { q: 'When is Saint Charbel\'s feast day?', opts: ['Christmas', '3rd Sunday of July', 'August 15'], a: 1, exp: 'Maronites celebrate Mar Charbel on the 3rd Sunday of July with massive pilgrimage to Annaya. August 15 is the Assumption (Eid el-Sayyde).' },
  { q: 'What does "shafa3a" mean in saint context?', opts: ['blessing', 'intercession (asking saint to pray for you)', 'fasting'], a: 1, exp: 'Shafa3a = intercession. Catholics/Maronites ask saints to intercede before God on their behalf. Charbel is one of the most-asked intercessors in Lebanon.' },
  { q: 'What is Saint Charbel\'s most iconic visual feature?', opts: ['a long white beard', 'a red robe', 'a golden crown'], a: 0, exp: 'Charbel is always depicted with a long white beard, dark monastic habit, and downcast eyes — reflecting his hermit life. His face is on icons in homes, taxis, and shops nationwide.' },
  { q: 'Which Maronite order did Charbel belong to?', opts: ['Jesuits', 'Lebanese Maronite Order (rahban Maroni)', 'Franciscans'], a: 1, exp: 'Charbel was a monk of the Lebanese Maronite Order (al-Rahbaniyya al-Marouniyya al-Lubnaniyya). The Maronite Church is one of Lebanon\'s largest Christian denominations.' }
];

const CHR_TIPS = [
  'Saint Charbel oil ("zeit Mar Charbel") is the most-distributed healing relic in Lebanon. Expat Lebanese carry it in handbags worldwide. Tradition: dab on forehead/affected area while saying his name.',
  'Charbel\'s body was reportedly found incorrupt and exuding a reddish liquid (blood + oil) for decades after his death. This is the basis for both the canonization process and the popular pilgrimage tradition.',
  'Annaya is in the Jbeil/Byblos district, ~45 minutes from Beirut. The mountain road climbs to ~1200m. Sundays in July (especially feast day) see traffic jams stretching for hours.',
  'Charbel iconography is everywhere in Lebanon — taxi dashboards, kitchen walls, even Muslim and Druze homes have his picture as a general protective figure (his cult crosses sectarian lines).',
  'The hermitage cell ("mahbasa") above the main monastery is preserved. Pilgrims often climb to see Charbel\'s actual cell — bare stone, hard pallet, simple cross. The contrast with the busy lower church is the whole point.'
];
