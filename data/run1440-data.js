// R1440 — NEW FEATURE: Lebanese Archaeology & Ruins Tourism (arc)
const ARC_WORDS = [
  {w:'asar',         t:'آثار',        tr:'antiquities / ruins',             ex:'l-asar l-romaniyi bel-ba3labak',       et:'The Roman ruins are in Baalbek'},
  {w:'qal3a',        t:'قلعة',        tr:'citadel / fortress',              ex:'zerti l-qal3a l-jadide bel-jbeil',     et:'Visit the old citadel in Byblos'},
  {w:'ma3bad',       t:'معبد',        tr:'temple',                          ex:'l-ma3bad l-kabir bel-ba3labak',        et:'The great temple in Baalbek'},
  {w:'3amood',       t:'عامود',       tr:'column / pillar',                 ex:'l-a3mde l-romaniyi 3aliye ktir',       et:'The Roman columns are very tall'},
  {w:'ta7fe',        t:'تحفة',        tr:'artifact / relic',                ex:'l-ta7af maw3od bel-mat7af',            et:'The artifacts are in the museum'},
  {w:'mat7af',       t:'متحف',        tr:'museum',                          ex:'re7na 3a-l-mat7af l-watani',           et:'We went to the national museum'},
  {w:'masra7',       t:'مسرح',        tr:'theater / amphitheater',          ex:'l-masra7 l-romawi bseer fio fest',     et:'The Roman theater hosts a festival'},
  {w:'7afriyi',      t:'حفرية',       tr:'archaeological excavation',       ex:'l-7afriyi 3am tkashshef ktiir',        et:'The excavation is uncovering a lot'},
  {w:'fniqiyyi',     t:'فينيقيّة',    tr:'Phoenician (adjective)',          ex:'l-madine l-fniqiyi l-qadime',          et:'The ancient Phoenician city'},
  {w:'romawi',       t:'روماوي',      tr:'Roman (adjective)',                ex:'l-3imara l-romawiye bay3a',            et:'The Roman architecture is beautiful'},
  {w:'mar2ab',       t:'مرقب',        tr:'watchtower / lookout point',      ex:'t3alla 3a-l-mar2ab tshouf l-ba7r',     et:'Climb to the watchtower to see the sea'},
  {w:'sidon',        t:'صيدون',       tr:'Sidon / Saida (ancient city)',    ex:'sidon mdine ta7t l-ba7r wi fawqo',     et:'Sidon has a city under the sea and above it'},
  {w:'jbeil',        t:'جبيل',        tr:'Byblos (ancient city)',           ex:'jbeil min 2adam l-mudun bel-3alam',    et:'Byblos is one of the oldest cities in the world'},
  {w:'sur',          t:'صور',         tr:'Tyre (ancient city)',             ex:'sur 3amilt ta7t l-may',               et:'Tyre was built under the water'},
  {w:'ba3labak',     t:'بعلبك',       tr:'Baalbek (Roman temple complex)',  ex:'l-mabani bel-ba3labak bi3ajbo l-kell', et:'The buildings in Baalbek amaze everyone'},
  {w:'fest',         t:'فيست',        tr:'festival (Baalbek Festival)',     ex:'l-fest l-duwali sar 60 sne',           et:'The international festival has been running 60 years'},
  {w:'tarikh',       t:'تاريخ',       tr:'history',                         ex:'tarikh lubnan ktiir 3arik',            et:'Lebanon\'s history is very ancient'},
  {w:'2athar',       t:'أثر',         tr:'trace / historical mark',         ex:'l-2athar l-qadim ma7fooz ktir',        et:'The ancient traces are well preserved'},
  {w:'2arkeoloji',   t:'أركيولوجي',   tr:'archaeological',                  ex:'l-bah2 l-2arkeoloji msthil',          et:'Archaeological research takes time'},
  {w:'mazaar',       t:'مزار',        tr:'heritage site / place to visit',  ex:'ba3labak min a7la l-mazarat',          et:'Baalbek is one of the most beautiful heritage sites'},
];

const ARC_DRILLS = [
  {q:'What is the Lebanese word for antiquities or ruins?',                           opts:['asar','mat7af','fest','mazaar'],          ans:'asar'},
  {q:'What do you call a Roman column in Lebanese Arabic?',                           opts:['3amood','ma3bad','7afriyi','qal3a'],      ans:'3amood'},
  {q:'What word means "temple" in Lebanese?',                                         opts:['ma3bad','masra7','mat7af','mar2ab'],       ans:'ma3bad'},
  {q:'Which ancient Phoenician city is one of the oldest in the world?',             opts:['jbeil','sidon','sur','ba3labak'],         ans:'jbeil'},
  {q:'What is the famous Roman temple complex in Lebanon called?',                    opts:['ba3labak','jbeil','sidon','sur'],          ans:'ba3labak'},
  {q:'What do you call an archaeological excavation in Lebanese?',                    opts:['7afriyi','asar','2athar','romawi'],        ans:'7afriyi'},
  {q:'What word means "museum" in Lebanese Arabic?',                                  opts:['mat7af','masra7','qal3a','mazaar'],        ans:'mat7af'},
  {q:'What is the amphitheater/theater called in Lebanese?',                          opts:['masra7','ma3bad','fest','3amood'],         ans:'masra7'},
];

const ARC_TIPS = [
  {title:'Baalbek — Lebanon\'s Crown Jewel',  body:'Baalbek (بعلبك) houses the best-preserved Roman temples in the world — the Temple of Jupiter, Temple of Bacchus, and Temple of Venus. Each summer it hosts the Baalbek International Festival (since 1956) where world-class artists perform among ancient 2000-year-old columns. Saying "l-ba3labak" in Lebanese means the whole experience — temples, festival, and legendary ruins.'},
  {title:'Byblos — World\'s Oldest Inhabited City',  body:'Jbeil (جبيل), known internationally as Byblos, has been continuously inhabited for over 7,000 years. The Phoenicians (Fniqiyyin فينيقيّين) invented the first alphabet here. Walk its cobbled old souk, visit the Crusader castle (qal3a), and see the ancient harbor. It\'s a UNESCO World Heritage Site and one of Lebanon\'s most beloved tourist destinations.'},
  {title:'Sidon & Tyre — Phoenician Sea Powers',  body:'Sidon (sidon/saida صيدا) and Tyre (sur صور) were the great Phoenician maritime cities. Sur is built on a peninsula that Alexander the Great had to build a causeway to capture. Sidon has an underwater archaeological site — the ancient Phoenician port rests beneath the sea. Saying "min sidon" (from Sidon) carries deep historical pride.'},
  {title:'Lebanon\'s National Museum',  body:'Beirut\'s National Museum (l-mat7af l-watani المتحف الوطني) houses over 100,000 artifacts (ta7af تحف) spanning 5,000 years. It holds Phoenician sarcophagi, Roman mosaics, and Bronze Age jewelry. During the civil war, curators encased statues in concrete to protect them. Many were preserved and the museum reopened in 1999 — a symbol of Lebanese cultural resilience.'},
];
