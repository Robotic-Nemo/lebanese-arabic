// R1623 — Saida/Sidon (sda) Lebanon's southern coast Sunni capital
// Topics: Sea Castle (Crusader), Khan el-Franj, soap museum, old souks,
// Hariri family (Rafic, Saad), akkawi cheese, sanyoura biscuits, Audi soap,
// Phoenician origins, kebbe sajiyye, fishing port, Sidonian dialect.

const SDA_WORDS = [
  { w: 'Saida', t: 'صيدا', e: 'Saida (Lebanon\'s 3rd largest city, southern Sunni capital, ~120k pop)', ex: 'Saida talet madine bel-Lebnen, mish 2alil shi hekiye.' },
  { w: 'Sidon', t: 'صيدون', e: 'Sidon (English/historical name from Phoenician Sidonia)', ex: 'kelmet Sidon men ayam el-finiqiyyin.' },
  { w: 'qal3et el-ba7r', t: 'قلعة البحر', e: 'Sea Castle (Crusader 13th-c castle on islet, Saida\'s icon)', ex: 'qal3et el-ba7r b-Saida byban men l-corniche el-ba7riye.' },
  { w: 'Khan el-Franj', t: 'خان الفرنج', e: 'Khan el-Franj (17th-c caravanserai, French silk traders)', ex: 'Khan el-Franj kan markaz el-tijara b-zaman el-3othmaniyyin.' },
  { w: 'mat7af eS-Saboun', t: 'متحف الصابون', e: 'Soap Museum (Audi family ancestral home, soap-making history)', ex: 'mat7af eS-Saboun mahal Audi el-2adim, byezhar Saida 3a wijh tlhi.' },
  { w: 'el-souq el-3atiq', t: 'السوق العتيق', e: 'Old Souk (covered Mamluk-era markets, still active)', ex: 'el-souq el-3atiq b-Saida lessa byezhar 7arake yawmiyye, ahla men teswire.' },
  { w: '3aylet el-7ariri', t: 'عيلة الحريري', e: 'Hariri family (Rafic, Saad, dominant Sunni political dynasty)', ex: '3aylet el-7ariri men Saida w 7akmin el-7okoumi marrat 3edde.' },
  { w: 'Rafic Hariri', t: 'رفيق الحريري', e: 'Rafic Hariri (PM 1992-98, 2000-04, assassinated 2005)', ex: 'Rafic Hariri 3amrit Beirut ba3d el-7arb, w aghtilo b-2005.' },
  { w: '3akkawi', t: 'عكاوي', e: 'akkawi (popular white cheese, originally from Akka but Saida-Lebanese specialty)', ex: '3akkawi kel l-furjat byekloha 3aS-Sob7iyye ma3 el-zaytoun.' },
  { w: 'el-sanyoura', t: 'السنيورة', e: 'sanyoura (Saida\'s signature crumbly butter biscuit)', ex: 'el-sanyoura el-Saidawiyye Tay7Toura tlhi, ma fi mtela.' },
  { w: 'kebbe sajiyye', t: 'كبة صاجية', e: 'kebbe sajiyye (Saida-style oven-baked tray kebbe)', ex: 'kebbe sajiyye Saidawiyye 7ashw lah-meddatel-yawkholi.' },
  { w: 'el-S-Sabbagha', t: 'الصباغة', e: 'soap-making (Saida\'s historic craft, Audi + Karkar families)', ex: 'eS-S-Sabbagha kenet 7arfe asasiye b-Saida 2-3 qoroun.' },
  { w: 'el-mina', t: 'الميناء', e: 'fishing harbor (active Sidonian port, daily fishermen)', ex: 'el-mina b-Saida fi yom marsoum la-l-saydaden 3ayni mish la-l-ba7r.' },
  { w: 'Saidawi', t: 'صيداوي', e: 'Saidawi (person from Saida, distinct accent + identity)', ex: 'el-Saidawiyye bye7ko ahla men Beirut, b-tafkhim w mawajjeb.' },
  { w: 'Tomb Murex', t: 'تل المورق', e: 'Murex Hill (mount of crushed Phoenician purple-dye shells)', ex: 'tel el-Murex byezhar zaman el-finiqiyyin lamma kano yiSn3o erg-bnafsej.' },
  { w: 'Eshmoun', t: 'إشمون', e: 'Eshmoun Temple (Phoenician temple ruins, Sidon healer god)', ex: 'ma3bad Eshmoun 7awal Saida fi athar finiqiyye qadime ktir.' }
];

const SDA_DRILLS = [
  { q: 'What is Saida?', a: 'Lebanon\'s 3rd largest city, southern Sunni capital', exp: '~120k pop on Mediterranean coast 40km south of Beirut. Sunni Muslim majority. Important commercial port since Phoenician times. Modern decline relative to Tyre + Tripoli but cultural center for south Sunni community.' },
  { q: 'What is the Sea Castle?', a: 'Crusader fortress on offshore islet', exp: 'Built 1228 AD by Crusaders on small Phoenician temple island, connected to mainland by stone causeway. Survived earthquakes + battles. Most photographed site in Saida — silhouette against Mediterranean sunset.' },
  { q: 'Who was Rafic Hariri?', a: 'Sunni PM, assassinated 2005', exp: 'Sidonian-born billionaire who served as PM 1992-1998 and 2000-2004. Led Beirut\'s post-civil-war reconstruction. Killed by truck bomb on Beirut Corniche Feb 14 2005, sparking Cedar Revolution + Syrian withdrawal. Saudi-Lebanese citizenship, ties to Saudi royal family.' },
  { q: 'What is sanyoura?', a: 'Saida signature shortbread biscuit', exp: 'Crumbly butter cookie originating in Saida bakeries. Often pistachio-topped. Old name from Italian merchant family who introduced recipe. Sold across Lebanon as the iconic Saida sweet, alongside kanafeh.' },
  { q: 'What is Khan el-Franj?', a: '17th-c French traders\' caravanserai', exp: '"Inn of the Foreigners" — Ottoman-era caravanserai built by Fakhreddine II 1610 to accommodate French silk merchants. Two-story arcaded courtyard. Now restored as cultural center. Symbol of Saida\'s Mediterranean trade history.' },
  { q: 'What is the Soap Museum?', a: 'Audi family soap-making heritage site', exp: 'Audi Foundation museum in restored Audi family home. Documents 200+ years of Saida\'s olive-oil soap craft. Original 19th-c soap-making vats + drying rooms preserved. Free entry, beautifully restored Mamluk-era stonework.' },
  { q: 'What is akkawi?', a: 'Lebanese fresh white cheese', exp: 'Mild salty white cheese, originally from Akka in Palestine but adopted as Saida + south Lebanese staple. Used in knafeh + on breakfast tables. Soaked overnight to reduce salt before eating. Sold in slabs at every Saida grocery.' },
  { q: 'What is the Saidawi accent?', a: 'Distinctive coastal southern Lebanese', exp: 'Marked by soft tafkhim (emphasis on heavy consonants), preserved /q/ in some words, slightly slower prosody than Beiruti. Closer to Tyre + Galilee Arabic. Recognizable by long vowels + specific lexical items.' },
  { q: 'What is Tell el-Murex?', a: 'Hill of crushed Phoenician purple shells', exp: 'Artificial mound at Saida edge made entirely of crushed Murex sea snail shells. Phoenicians extracted royal purple dye for centuries — "Tyrian purple" — which gave the Phoenicians their fame. UNESCO-recognized site of ancient industry.' },
  { q: 'What was Saida\'s ancient role?', a: 'Major Phoenician city-state', exp: 'Sidon = one of original Phoenician trading cities (with Tyre, Byblos, Beirut, Arwad). Founded ~6000 BCE. Famous for purple dye, glass-making, Eshmoun healing cult. Predates and rivaled Tyre. Mentioned in Bible, Homer, Egyptian texts.' }
];

const SDA_TIPS = [
  { t: '🏰 Sea Castle visit', b: 'Walk causeway from Corniche just before sunset. $3-5 entry fresh USD. Climb to upper terrace for panoramic view of fishing port + city. Often deserted, very atmospheric. Pair with seafood dinner at port-side restaurants like Rest House Saida.' },
  { t: '🛍️ Old Souk wandering', b: 'Enter from Khan el-Franj side. Covered alleys still hosting ironmongers, cobblers, spice shops. Get lost — that\'s the point. End at sweet shops near Sea Castle for sanyoura + nammoura. Avoid Friday afternoons (prayer time, half-shut).' },
  { t: '🧼 Soap Museum + Audi olive soap', b: 'Free Audi Soap Museum 9am-6pm. Buy original olive-oil soap bars at attached shop ($3-7 each, lasts months). Different scents: laurel, donkey milk, jasmine. Far better quality than Beirut tourist shops.' },
  { t: '🍪 Sanyoura at Karkar', b: 'Sweets Karkar, Hassoun, or Boushibki — three legacy Saida bakeries on the souk edges. Buy boxed sanyoura + maamoul as omiyat (gifts). $8-15 fresh USD per kilo box. Stay fresh weeks. Do NOT buy at Beirut airport shops — fake/stale.' },
  { t: '🐟 Saida fish market dawn', b: 'Fish market by port, 6-8am for fresh catches. Local sayyadin sell direct. Cheaper + better than Beirut. Have nearby restaurant cook your buy ($10 cooking fee). Best in summer, choppy winter days fewer fish.' }
];
