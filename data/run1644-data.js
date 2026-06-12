// R1644 — Wadih el-Safi & Lebanese mountain-folk vocal tradition (wsf)
const WSF_WORDS = [
  { w: "Wadih el-Safi",            t: "وديع الصافي",           e: "iconic Lebanese mountain-folk tenor (1921-2013)",     ex: "Wadih el-Safi sawt Lubnan el-khaled" },
  { w: "el-Shahroura",             t: "الشحرورة",              e: "Sabah's nickname; el-Safi was Sawt Lubnan",           ex: "Sabah el-Shahroura w Wadih sawt Lubnan" },
  { w: "Niha el-Chouf",            t: "نيحا الشوف",            e: "Wadih el-Safi's mountain birthplace",                  ex: "Wadih wled b-Niha el-Chouf" },
  { w: "Mawwal",                   t: "موّال",                  e: "improvised vocal melisma intro",                       ex: "el-mawwal yebda 2able el-2oghniye" },
  { w: "Zajal",                    t: "زجل",                    e: "Lebanese folk poetry sung in mountain dialect",        ex: "el-zajal turath jbeli 2adim" },
  { w: "3oudh",                    t: "عود",                    e: "lute, key folk-music instrument",                      ex: "el-3oudh asas el-musi2a el-3arabiye" },
  { w: "Baalbek Festival",         t: "مهرجان بعلبك",           e: "1956 onwards Roman ruins music festival",              ex: "Baalbek mahrajan asas el-fan el-Lubnani" },
  { w: "Beiteddine Festival",      t: "مهرجان بيت الدين",       e: "Chouf palace summer festival",                         ex: "Beiteddine mahrajan jbel el-Chouf" },
  { w: "Lubnan ya 2it3et sama",    t: "لبنان يا قطعة سما",      e: "el-Safi anthem: Lebanon piece of heaven",              ex: "Lubnan ya 2it3et sama 2oghniye watanieh" },
  { w: "Allah w el-mahabbe",       t: "الله والمحبة والوطن",     e: "el-Safi trilogy: God, love, nation",                   ex: "Allah w el-mahabbe w el-watan thalathieh el-Safi" },
  { w: "Ya 3a-Beirut",             t: "يا ع بيروت",             e: "el-Safi nostalgic Beirut anthem",                      ex: "Ya 3a-Beirut min ahla 2aghani-l-Safi" },
  { w: "Sawt Lubnan",              t: "صوت لبنان",              e: "'Voice of Lebanon' — el-Safi's title",                  ex: "Wadih sawt Lubnan el-khaled" },
  { w: "Marcel Khalife",           t: "مارسيل خليفة",           e: "later folk-resistance singer-composer",                ex: "Marcel Khalife yetla mn turath el-Safi" },
  { w: "Sabah",                    t: "صباح",                   e: "third golden-era pillar singer/actress (1927-2014)",   ex: "Sabah w Fairouz w Wadih thalathieh el-tarab" },
  { w: "el-tarab",                 t: "الطرب",                  e: "deep Arabic emotional musical state",                  ex: "Wadih kan ostaz el-tarab el-Lubnani" },
  { w: "el-fan el-jabali",         t: "الفن الجبلي",            e: "mountain art — folk genre el-Safi pioneered",          ex: "Wadih asas el-fan el-jabali" }
];

const WSF_DRILLS = [
  {
    q: "Who was Wadih el-Safi?",
    opts: [
      "modern pop star",
      "iconic Lebanese tenor (1921-2013), pioneered mountain-folk Arabic song; nicknamed Sawt Lubnan al-Khaled (Lebanon's eternal voice)",
      "instrumentalist only",
      "comedian"
    ],
    a: 1
  },
  {
    q: "What is mawwal?",
    opts: [
      "instrumental piece",
      "improvised, free-rhythm vocal melisma traditionally opening a song — el-Safi mastered the mountain mawwal form",
      "type of dance",
      "drum solo"
    ],
    a: 1
  },
  {
    q: "What is zajal?",
    opts: [
      "modern pop genre",
      "Lebanese improvised folk poetry sung in mountain dialect — competitive verbal duels (mubarat zajal) at village weddings",
      "religious chant",
      "Egyptian style"
    ],
    a: 1
  },
  {
    q: "Wadih el-Safi's birthplace?",
    opts: [
      "Beirut",
      "Niha el-Chouf — small Druze-area mountain village; he carried mountain tradition into urban concert halls",
      "Tripoli",
      "Damascus"
    ],
    a: 1
  },
  {
    q: "Three pillars of golden-era Lebanese song?",
    opts: [
      "el-Safi alone",
      "Fairouz, Sabah (el-Shahroura), and Wadih el-Safi — defined Lebanese identity through music in the 1950s-70s",
      "only modern stars",
      "Egyptian singers"
    ],
    a: 1
  },
  {
    q: "Baalbek International Festival?",
    opts: [
      "modern dance",
      "founded 1956, ancient Roman temple ruins venue — Fairouz, el-Safi, Sabah all built careers there; Lebanon's premier cultural event",
      "movie festival only",
      "agricultural show"
    ],
    a: 1
  },
  {
    q: "el-Safi's trilogy theme 'Allah w el-mahabbe w el-watan'?",
    opts: [
      "war themes",
      "God, love, and nation — captured Lebanese identity values; recurring lyrical theme across his catalogue",
      "modern pop themes",
      "industrial themes"
    ],
    a: 1
  },
  {
    q: "Wadih's vocal style?",
    opts: [
      "rough untrained",
      "powerful tenor with mountain mawwal vocalizations — long held notes, melismatic ornamentation, deep tarab emotional resonance",
      "spoken-word",
      "rap"
    ],
    a: 1
  },
  {
    q: "What's tarab?",
    opts: [
      "speed",
      "deep Arabic musical-emotional ecstasy state — audience and singer reach together; central aesthetic concept in classical Arabic music",
      "tempo",
      "dance"
    ],
    a: 1
  },
  {
    q: "el-Safi's catalog size?",
    opts: [
      "20 songs",
      "3000+ recorded songs across 70+ year career — one of the largest catalogs in Arabic music history",
      "100 songs",
      "500 songs"
    ],
    a: 1
  }
];

const WSF_TIPS = [
  "Wadih el-Safi + Fairouz + Sabah = three voices of mid-20th-c Lebanon — listen in this order to map the era",
  "Start with 'Lubnan ya 2it3et sama' for el-Safi's patriotic anthem; then 'Allah w el-mahabbe w el-watan' for the trilogy",
  "Mawwal-zajal-tarab are three terms native speakers use about el-Safi: mawwal = the opening melisma, zajal = the folk-poetry roots, tarab = the emotional climax",
  "Niha el-Chouf is in the Druze heartland — el-Safi's Maronite voice from a Druze mountain village embodies confessional coexistence",
  "Marcel Khalife's later folk-resistance music draws on el-Safi's mountain tradition — listen back-to-back to hear the lineage"
];
