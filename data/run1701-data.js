// Run #1701 — NEW FEATURE: hsb — Hasbaya (حاصبيا) & Wadi el-Taym, the
// historic Druze heartland in south Lebanon at the foot of Mount Hermon
// (jabal el-shaykh). Predates the Chouf as the original Druze political
// center under the Shihab emirs. Famous for its Citadel of the Shihabs
// (qal3et el-shihab), seven hammam-fed springs, traditional rug weaving
// (sajjadet hasbaya), and high-quality tobacco. Distinct from R1608 chf
// (Chouf — the post-1700 Druze political center), R1611 nbt (Nabatieh shia
// south), R1623 sda (Sidon coast), R1605 qsh (Qadisha Maronite north).
// Prefix: hsb.

const HSB_WORDS = [
  { w: 'hasbaya', t: 'حاصبيا', e: 'Hasbaya — south Lebanon Druze town, foot of Mount Hermon', ex: 'hasbaya jnoub lebnan.', exEn: 'Hasbaya is in south Lebanon.' },
  { w: 'wadi el-taym', t: 'وادي التيم', e: 'Wadi el-Taym — the valley around Hasbaya, historic Druze region', ex: 'wadi el-taym ma3qel el-druze el-2adim.', exEn: 'Wadi el-Taym is the old Druze stronghold.' },
  { w: 'jabal el-shaykh', t: 'جبل الشيخ', e: 'Mount Hermon — 2814m peak above Hasbaya, cross-border Lebanon/Syria/Israel', ex: 'jabal el-shaykh fawa2 hasbaya.', exEn: 'Mount Hermon is above Hasbaya.' },
  { w: 'druze', t: 'دروز', e: 'Druze — esoteric monotheist sect, Hasbaya was the original political center', ex: 'el-druze men hasbaya wel-shouf.', exEn: 'The Druze are from Hasbaya and Chouf.' },
  { w: 'shihab', t: 'شهاب', e: 'Shihab — emir family that ruled Hasbaya, later Mount Lebanon', ex: 'aal el-shihab 7akamu hasbaya.', exEn: 'The Shihab family ruled Hasbaya.' },
  { w: 'qal3et el-shihab', t: 'قلعة الشهاب', e: 'Citadel of the Shihabs — fortress in Hasbaya, family seat', ex: 'qal3et el-shihab fi-l-balad.', exEn: 'The Shihab citadel is in town.' },
  { w: 'sajjadet hasbaya', t: 'سجادة حاصبيا', e: 'Hasbaya rug — handwoven kilim, distinctive south-Lebanese craft', ex: 'sajjadet hasbaya yadawiye.', exEn: 'Hasbaya rugs are handwoven.' },
  { w: 'tabgh', t: 'تبغ', e: 'tabgh — tobacco; Hasbaya/Wadi el-Taym is a major growing area', ex: 'tabgh hasbaya 7elo.', exEn: 'Hasbaya tobacco is good.' },
  { w: 'regie', t: 'ريجي', e: 'Régie — state tobacco monopoly, buys Hasbaya leaf', ex: 'el-regie bteshtri el-tabgh.', exEn: 'The Regie buys the tobacco.' },
  { w: 'zaytoun', t: 'زيتون', e: 'zaytoun — olives, the second main crop of Wadi el-Taym', ex: 'zaytoun wadi el-taym mashhour.', exEn: 'Wadi el-Taym olives are famous.' },
  { w: '3ayn jdide', t: 'عين جديدة', e: '3ayn Jdide — one of the seven famous Hasbaya springs', ex: '3ayn jdide bared.', exEn: '3ayn Jdide is cold.' },
  { w: 'nabaa', t: 'نبع', e: 'nabaa — spring; Hasbaya has 7 springs feeding the Hasbani river', ex: 'fi 7 yanabee3 b-hasbaya.', exEn: 'Hasbaya has 7 springs.' },
  { w: 'hasbani', t: 'الحاصباني', e: 'el-Hasbani — the river rising at Hasbaya, headwater of Jordan river', ex: 'el-hasbani men jabal el-shaykh.', exEn: 'The Hasbani comes from Mount Hermon.' },
  { w: 'majlisi', t: 'مجلسي', e: 'majlisi — initiated Druze (knows the religion); vs juhhal (uninitiated)', ex: 'el-majlisi byqra el-hikme.', exEn: 'The initiated reads the Wisdom.' },
  { w: 'juhhal', t: 'جهال', e: 'juhhal — uninitiated Druze (most of the community)', ex: 'el-juhhal akthar.', exEn: 'The uninitiated are the majority.' },
  { w: 'khalwet', t: 'خلوة', e: 'khalwet — Druze prayer hall, white domed building', ex: 'el-khalwet fawa2 el-jabal.', exEn: 'The khalwet is up the mountain.' },
  { w: 'eljash3am', t: 'الجشعم', e: 'el-Jaash3am — old Hasbaya neighborhood with Druze heritage houses', ex: 'el-jaash3am fi byout 3atiqa.', exEn: 'Eljaash3am has old houses.' },
  { w: 'al-marjayoun', t: 'مرجعيون', e: 'Marjayoun — neighboring Christian-Greek-Orthodox town', ex: 'marjayoun janb hasbaya.', exEn: 'Marjayoun is next to Hasbaya.' },
  { w: 'mahrajan el-zaytoun', t: 'مهرجان الزيتون', e: 'Mahrajan el-Zaytoun — Olive Festival, autumn celebration', ex: 'mahrajan el-zaytoun b-tishrin.', exEn: 'The Olive Festival is in October.' },
  { w: 'jaysh el-jnoub', t: 'جيش الجنوب', e: 'South Lebanon Army (SLA) — Israeli-allied militia, controlled Hasbaya 1985-2000', ex: 'jaysh el-jnoub kan b-hasbaya.', exEn: 'The SLA was in Hasbaya.' },
  { w: 'isti3mar', t: 'استعمار', e: 'isti3mar — occupation; Hasbaya was under Israeli occupation 1985-2000', ex: 'el-isti3mar khelis sant 2000.', exEn: 'The occupation ended in 2000.' },
  { w: 'tahreer', t: 'تحرير', e: 'tahreer — liberation; May 25 2000 commemorates Israeli withdrawal', ex: '3eid el-tahreer 25 ayyar.', exEn: 'Liberation Day is May 25.' }
];

const HSB_DRILLS = [
  { q: 'Where is Hasbaya located?', opts: ['north Lebanon coast', 'south Lebanon, foot of Mount Hermon', 'Bekaa center'], a: 1, exp: 'Hasbaya (حاصبيا) sits in south Lebanon at the foot of Mount Hermon (jabal el-shaykh, 2814m), in Wadi el-Taym valley near the Syrian and Israeli borders. It\'s the historic Druze political center, predating the Chouf.' },
  { q: 'Why is Hasbaya important to Druze history?', opts: ['it\'s a recent settlement', 'it was the original Druze political/spiritual center under the Shihabs', 'it\'s only Christian'], a: 1, exp: 'Hasbaya and Wadi el-Taym were the original heartland of the Druze under the Shihab emirs from the 1100s through the 1700s. The Druze political center later shifted to the Chouf under emir Fakhreddine, but Hasbaya remained the spiritual elder of the community.' },
  { q: 'What is the Citadel of the Shihabs?', opts: ['a hotel', 'the historic fortress and family seat of the Shihab emirs in Hasbaya', 'a market'], a: 1, exp: 'Qal3et el-Shihab (قلعة الشهاب) is the medieval citadel in central Hasbaya — the seat of the Shihab emirs who ruled this region for centuries. The Crusaders built parts; the Shihabs expanded it. Still privately owned by descendant Shihab family members.' },
  { q: 'What is the Hasbaya rug (sajjadet hasbaya)?', opts: ['a type of food', 'a handwoven kilim, distinctive south-Lebanese craft', 'a dance'], a: 1, exp: 'Sajjadet Hasbaya (سجادة حاصبيا) is a flat-woven kilim/rug tradition unique to Hasbaya — geometric patterns, natural dyes, made by women on horizontal looms. Most production has shrunk to a handful of remaining weavers; collectors hunt the older pieces.' },
  { q: 'What major crop is Hasbaya famous for?', opts: ['rice', 'tobacco (tabgh) and olives (zaytoun)', 'cocoa'], a: 1, exp: 'Tobacco and olives are Hasbaya\'s economic backbone. Tobacco is sold to the state Régie monopoly — Wadi el-Taym leaf is among Lebanon\'s highest quality. Olives produce the famous Wadi el-Taym oil. Both are family farming traditions over generations.' },
  { q: 'What river rises at Hasbaya?', opts: ['Litani', 'Hasbani — headwater of the Jordan', 'Orontes'], a: 1, exp: 'The Hasbani river (نهر الحاصباني) rises from Mount Hermon snowmelt at Hasbaya\'s seven springs. It flows south, joins the Banias and Dan, and forms the Jordan river. This makes Hasbaya geographically/politically important — water rights are a regional issue with Israel.' },
  { q: 'What is the Druze "khalwet"?', opts: ['a wedding feast', 'a Druze prayer hall, typically white-domed', 'a dance'], a: 1, exp: 'Khalwet (خلوة) is the Druze house of prayer — usually a simple whitewashed building with a small dome, on a hillside outside town. Only the initiated (majlisi) attend. The Hasbaya area has dozens of khalwets, including several historic ones near the citadel.' },
  { q: 'What is the difference between majlisi and juhhal Druze?', opts: ['regions', 'majlisi = initiated, knows the religion; juhhal = uninitiated, the majority', 'languages'], a: 1, exp: 'Druze religion is esoteric — only the majlisi (مجلسي, initiated) read the Wisdom (Hikme) and attend khalwet prayers. The juhhal (جهال, "ignorant" — but here means uninitiated, not insulting) are the majority of the community. Initiation is voluntary, usually adult, both men and women.' },
  { q: 'What was the Israeli occupation impact on Hasbaya?', opts: ['none', 'Hasbaya was under Israeli/SLA control 1985-2000', 'it became part of Israel'], a: 1, exp: 'Hasbaya was inside the Israeli "security zone" from 1985 to 2000, controlled by the South Lebanon Army (SLA, jaysh el-jnoub). Many residents fled; some collaborated. May 25, 2000 (3eid el-tahreer, Liberation Day) marks the Israeli withdrawal and is commemorated annually.' },
  { q: 'What is Marjayoun in relation to Hasbaya?', opts: ['far away', 'the neighboring mostly-Christian (Greek Orthodox) town in Wadi el-Taym', 'a different country'], a: 1, exp: 'Marjayoun (مرجعيون) is just east of Hasbaya, the main Christian town of Wadi el-Taym (Greek Orthodox majority). The two towns historically lived side-by-side, with the Druze Hasbaya and Christian Marjayoun forming the cultural pair of the valley. Both were inside the Israeli occupation zone 1985-2000.' }
];

const HSB_TIPS = [
  'Hasbaya vs Chouf: both are Druze heartlands, but Hasbaya is the older political center. Under the medieval Shihab emirs, Hasbaya was the seat of Druze power. After emir Fakhreddine II expanded into the Chouf in the 1600s and the political weight shifted north, Hasbaya kept its religious/symbolic prominence. Today the Chouf has the Jumblatt family and the political party (PSP); Hasbaya has the heritage and the springs.',
  'The seven springs of Hasbaya are a geographic curiosity — Mount Hermon snowmelt percolates through limestone and emerges as cold, clear pools right next to town. Locals swim in them in summer (water stays around 12°C even in August). The springs feed the Hasbani river that becomes the Jordan — making Hasbaya politically sensitive in regional water rights.',
  'Druze culture has strict marriage rules: Druze marry only Druze, no conversion in or out. The community has been demographically stable for ~1000 years. In Hasbaya, family names like Shihab, Abou Diab, and Abou Mansour are deeply rooted. The community keeps to itself religiously but is fully integrated socially with Lebanese Christians.',
  'The Israeli occupation 1985-2000 left a complicated legacy in Hasbaya. SLA (jaysh el-jnoub, جيش الجنوب) members were tried after withdrawal; some fled to Israel where they remain. The "May 25" liberation date is celebrated by all of south Lebanon. In Hasbaya specifically, the occupation period also saw outmigration to Beirut, the Bekaa, and the diaspora.',
  'Mount Hermon (jabal el-shaykh, "the mountain of the shaykh") is sacred to the Druze — they consider it a place where prophets walked. The peak straddles Lebanon, Syria, and Israeli-occupied Golan. From Hasbaya you see only the Lebanese face of the mountain; the snow line stays year-round on the upper slopes. In winter, occasional snow reaches Hasbaya itself (~750m elevation).'
];
