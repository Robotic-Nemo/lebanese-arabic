// R1584 — NEW FEATURE: Tyre (Sour) & Phoenician Heritage (tyr)
const TYR_WORDS = [
  { w: "Sour", t: "صور", en: "Tyre (Lebanese name)", ex: "Sour madine 2adeeme bel-jnoub.", exEn: "Tyre is an ancient city in the south.", notes: "Sour (Tyre) is 80 km south of Beirut. UNESCO World Heritage 1984. One of the oldest continuously inhabited cities in the world (~4,750 years)." },
  { w: "fenee2i", t: "فينيقي", en: "Phoenician", ex: "El-fenee2iyye iktashafu el-ab7or.", exEn: "The Phoenicians discovered the seas.", notes: "Phoenician city-state, peaked 1200-800 BCE. Founded Carthage (814 BCE), invented purple dye, spread alphabet across Mediterranean. Hiram I rebuilt the Temple of Jerusalem with cedar." },
  { w: "arjawan", t: "أرجوان", en: "Tyrian purple dye", ex: "Sebagh el-arjawan kanit ghalye kteer.", exEn: "Tyrian purple dye was very expensive.", notes: "Royal purple from murex sea snails — 12,000 snails for 1.4g of dye. Worth more than gold by weight. Reserved for emperors. Tyre's biggest export for centuries." },
  { w: "haykal el-bahr", t: "هيكل البحر", en: "sea temple (Melqart)", ex: "Haykal el-bahr ka2ed Sour.", exEn: "The sea temple founded Tyre.", notes: "Temple of Melqart was Tyre's chief god, Phoenician Hercules. Two pillars (one of gold, one of emerald) described by Herodotus. Hellenized as Heracles." },
  { w: "marfa2", t: "مرفأ", en: "harbor / port", ex: "Marfa2 Sour kbeer w 2adeem.", exEn: "Tyre's harbor is large and ancient.", notes: "Two ancient harbors — Egyptian (south, sandy) + Sidonian (north, rocky). Modern Sour port still used for fishing. Iskandar Akbar built causeway 332 BCE during 7-month siege." },
  { w: "jazira", t: "جزيرة", en: "island", ex: "Sour kanit jazira.", exEn: "Tyre was an island.", notes: "Original Tyre was on island 800m offshore. Alexander built mole/causeway during siege — turned island into peninsula permanently. Today Sour sits on that landform." },
  { w: "hippodrome", t: "هيبودروم", en: "Roman hippodrome", ex: "El-hippodrome el-akbar bel-3alam.", exEn: "The largest hippodrome in the world.", notes: "Tyre's Roman hippodrome (2nd c CE) seated 20,000+. 480m long — longest preserved Roman hippodrome. Hosted chariot races. Visible monumental obelisk in middle." },
  { w: "athaar Sour", t: "آثار صور", en: "Tyre ruins / antiquities", ex: "Athaar Sour 3a2 lay7et el-yunesco.", exEn: "Tyre's ruins are on UNESCO list.", notes: "Three sites: Al-Bass (necropolis + hippodrome), Al-Mina (city ruins on peninsula), and the underwater Egyptian harbor. Marble Roman road, columns, sarcophagi visible." },
  { w: "Saiyad", t: "صياد", en: "fisherman", ex: "El-Saiyadeen yetla3u 3al-fajr.", exEn: "Fishermen go out at dawn.", notes: "Tyre's fishing community is famous — boats called 'felouka' or 'shakhtoura'. Catch sardines, sea bream, octopus. Old port still active despite tourism." },
  { w: "samak Sour", t: "سمك صور", en: "Tyre fish (cuisine)", ex: "Samak Sour mashhour bel-shaweye.", exEn: "Tyre fish is famous grilled.", notes: "Sayadiyye (rice with fish + caramelized onions), grilled bizri (whitebait), samke harra (spicy fish) are Tyre signature dishes. Fresh-off-boat at port restaurants." },
  { w: "naqsh", t: "نقش", en: "inscription / engraving", ex: "Naqsh fenee2i 3al-7ajar.", exEn: "Phoenician inscription on the stone.", notes: "Phoenician inscriptions found on sarcophagi, tombs, walls. Phoenician alphabet (~22 consonants, no vowels) became basis for Greek, then Latin alphabets we use today." },
  { w: "sarkofaj", t: "سركوفاج", en: "sarcophagus", ex: "El-sarkofaj el-rkhami men Sour.", exEn: "The marble sarcophagus is from Tyre.", notes: "Tyre's necropolis at Al-Bass has hundreds of Roman + Phoenician sarcophagi. Most famous: Ahiram sarcophagus (~1000 BCE) bears earliest known Phoenician alphabet inscription." },
  { w: "iskandar", t: "إسكندر", en: "Alexander (the Great)", ex: "Iskandar 7aSar Sour 7 ashhor.", exEn: "Alexander besieged Tyre for 7 months.", notes: "Alexander the Great's 332 BCE siege of Tyre is legendary military feat — Tyrians thought island invincible, he built 800m mole from mainland. Tyre fell, 8,000 killed, 30,000 enslaved." },
  { w: "Saiyad el-2arjawan", t: "صياد الأرجوان", en: "purple snail diver", ex: "Saiyad el-2arjawan 3enno 3el2it el-fenee2.", exEn: "The purple diver is linked to Phoenicia.", notes: "Purple-dye guild was hereditary, secretive. Divers gathered murex from sea floor. Crushed shells discovered in massive piles 8m high near Tyre — proof of industrial scale." },
  { w: "souk Sour", t: "سوق صور", en: "Tyre old souk", ex: "Souk Sour 7elo w 7ay.", exEn: "Tyre's old souk is beautiful and lively.", notes: "Old souk in Tyre's Christian quarter — narrow stone alleys, shops selling spices, dates, fish. Less touristy than Tripoli/Byblos souks. Coffee shops along sea wall." },
  { w: "rihla la-Sour", t: "رحلة لصور", en: "trip to Tyre", ex: "Rihla la-Sour bi-yom kameel.", exEn: "A trip to Tyre takes a full day.", notes: "Beirut→Sour by car ~80 min via coastal highway. Drive through Saida (Sidon), Sarafand (ancient Sarepta), Qana. Beach south of Tyre is one of Lebanon's longest sandy stretches." }
];

const TYR_DRILLS = [
  { q: "How say 'Tyre' (Lebanese name)?", a: "Sour", hint: "Same name in modern Arabic — meaning 'rock'." },
  { q: "Phoenician (people)?", a: "fenee2i", hint: "Ancient seafaring civilization based in Tyre/Sidon/Byblos." },
  { q: "Tyrian purple dye?", a: "arjawan", hint: "Royal purple from murex sea snails." },
  { q: "Harbor / port?", a: "marfa2", hint: "Tyre had two — Egyptian + Sidonian." },
  { q: "Island?", a: "jazira", hint: "Tyre was one before Alexander." },
  { q: "Tyre ruins / antiquities?", a: "athaar Sour", hint: "UNESCO World Heritage." },
  { q: "Fisherman?", a: "Saiyad", hint: "Tyre still has active fishing port." },
  { q: "Inscription / engraving?", a: "naqsh", hint: "Phoenician alphabet on stones." },
  { q: "Sarcophagus?", a: "sarkofaj", hint: "Hundreds at Al-Bass necropolis." },
  { q: "Alexander (the Great)?", a: "iskandar", hint: "Besieged Tyre 7 months in 332 BCE." }
];

const TYR_TIPS = [
  "🏛️ Tyre (Sour) is 80 km south of Beirut, UNESCO World Heritage since 1984. Three archaeological sites: Al-Bass (necropolis + Roman hippodrome), Al-Mina (Phoenician city ruins), and underwater harbor. Founded ~2750 BCE — among the world's oldest continuously inhabited cities.",
  "🐚 Tyrian purple dye was Tyre's biggest export. Made from murex sea snails — 12,000 snails for 1.4 grams of dye. Worth more than gold by weight, used only by emperors. Massive piles of crushed shells (8m high) discovered near Tyre prove industrial-scale production.",
  "🏇 Roman hippodrome at Al-Bass (2nd c CE) is the largest preserved hippodrome in the world — 480m long, seated 20,000+. Hosted chariot races. Marble obelisk in middle, monumental triumphal arch at entrance.",
  "⚔️ Alexander the Great's 7-month siege of Tyre (332 BCE) is military legend. Tyrians thought their island fortress invincible. Alexander built an 800m causeway from the mainland to assault the walls — that mole became permanent, turning the island into today's peninsula.",
  "🐟 Tyre's fishing port still operates — boats are called 'felouka' or 'shakhtoura'. Try sayadiyye (rice with fish), grilled bizri (whitebait), samke harra (spicy fish) at port restaurants. Tyre beach south of city is one of Lebanon's longest sandy stretches."
];
