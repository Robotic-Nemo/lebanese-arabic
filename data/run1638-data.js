// R1638 — Hamra Street & West Beirut intellectual culture (ham)
const HAM_WORDS = [
  { w: "Hamra",                    t: "الحمرا",                e: "famous Beirut commercial-intellectual street",      ex: "7arket Hamra ma btitwakkaf abadan" },
  { w: "el-AUB",                   t: "الجامعة الأميركية",     e: "American University of Beirut (founded 1866)",      ex: "el-AUB ahla jam3a bel-balad" },
  { w: "Bliss Street",             t: "شارع بليس",             e: "AUB-adjacent student strip",                        ex: "shari3 Bliss daimen mzaher" },
  { w: "Cafe Modca",               t: "كافيه مودكا",           e: "iconic 60s-70s intellectual café (long closed)",    ex: "Modca kenet markaz el-mosakkafin" },
  { w: "Cafe Wimpy",               t: "كافيه ويمبي",           e: "legendary Hamra hangout opened 1965",               ex: "Wimpy ahla 2ahwe bel-Hamra" },
  { w: "Bristol Hotel",            t: "فندق بريستول",          e: "60s political negotiations hub",                    ex: "el-Bristol shahed 3a tarikh siyase" },
  { w: "Commodore Hotel",          t: "فندق كومودور",          e: "civil-war foreign-journalist base",                 ex: "el-Commodore kan markaz el-suhuf" },
  { w: "el-Manara",                t: "المنارة",               e: "lighthouse promontory, west Beirut tip",            ex: "el-Manara teb3od shi 5 daqayek" },
  { w: "Ras Beirut",               t: "رأس بيروت",             e: "Beirut headland, AUB neighborhood",                 ex: "Ras Beirut cosmopolitan w mokhtalat" },
  { w: "Saroulla Cinema",          t: "سينما الصارولا",        e: "iconic Hamra-era cinema",                            ex: "Saroulla 3oroDet 2aflam ktire la-zaman" },
  { w: "Maktabet Antoine",         t: "مكتبة أنطوان",          e: "historic Hamra bookstore chain",                    ex: "Maktabet Antoine meshhoura bel-kotob" },
  { w: "Snack Faisal",             t: "سناك فيصل",             e: "legendary AUB-area sandwich shop",                  ex: "Snack Faisal ahla manaeesh" },
  { w: "Paris el-Sharq",           t: "باريس الشرق",           e: "Paris of the East — golden-era Beirut nickname",    ex: "Beirut kenet Paris el-Sharq abel el-7arb" },
  { w: "Verdun",                   t: "فردان",                 e: "Hamra-parallel upscale commercial street",          ex: "Verdun aktar fakhameh men Hamra" },
  { w: "Cafe Younes",              t: "كافيه يونس",            e: "long-running Hamra coffee roaster",                 ex: "Cafe Younes betjeeb el-bun el-akhdar" },
  { w: "Captain Cabin",             t: "كابتن كابن",            e: "old Hamra pub, journalists hangout",                ex: "Captain Cabin daimen 3am yeshrabu fi" }
];

const HAM_DRILLS = [
  {
    q: "Why was Hamra Street historically important?",
    opts: [
      "typical Beirut residential street",
      "Beirut's main commercial-intellectual artery from the 1950s-70s — cafés, cinemas, bookshops, leftist politics; declined in civil war",
      "ancient Roman road",
      "just an open-air market"
    ],
    a: 1
  },
  {
    q: "When was AUB founded?",
    opts: [
      "1882",
      "1866 by American Protestant missionaries as Syrian Protestant College — oldest American-style university in the Middle East",
      "1900",
      "1950"
    ],
    a: 1
  },
  {
    q: "Cafe Modca was?",
    opts: [
      "a tailor shop",
      "a 60s-70s Hamra café where Lebanese and Arab intellectuals, writers, leftists gathered — closed but legendary",
      "a hotel",
      "a bank"
    ],
    a: 1
  },
  {
    q: "Beirut as 'Paris of the East'?",
    opts: [
      "Damascus held that name",
      "golden-era Beirut (1950s-70s) — cosmopolitan, liberal, banking and intellectual capital of the Arab world",
      "applied only to Tripoli",
      "always Aleppo"
    ],
    a: 1
  },
  {
    q: "Wimpy Cafe in Hamra?",
    opts: [
      "opened 2010",
      "opened 1965 on Hamra Street, became a famous meeting place for journalists, intellectuals, and Palestinian activists",
      "is a fast-food chain only",
      "never existed"
    ],
    a: 1
  },
  {
    q: "Commodore Hotel during the civil war?",
    opts: [
      "abandoned",
      "base for international journalists covering 1975-90 civil war — BBC, AP, NYT bureaus filed dispatches from there",
      "Israeli HQ",
      "militia HQ"
    ],
    a: 1
  },
  {
    q: "Bliss Street?",
    opts: [
      "residential only",
      "AUB-adjacent strip with cafés, snacks, bookshops, students at all hours",
      "industrial zone",
      "doesn't exist"
    ],
    a: 1
  },
  {
    q: "Hamra today vs the 1970s?",
    opts: [
      "unchanged",
      "less elite intellectual hub, more mainstream commercial; Cafe Younes/Captain Cabin remain, but Modca and Wimpy long closed",
      "completely empty",
      "purely residential"
    ],
    a: 1
  },
  {
    q: "Manara name origin?",
    opts: [
      "means flag",
      "means lighthouse (al-manara) — the working lighthouse stood on this western Beirut promontory",
      "means mountain",
      "means river"
    ],
    a: 1
  },
  {
    q: "Snack Faisal near AUB?",
    opts: [
      "recent fast-food chain",
      "decades-old hole-in-the-wall sandwich shop legendary among AUB students for cheap, big sandwiches and manaeesh",
      "closed in the 1960s",
      "upscale restaurant"
    ],
    a: 1
  }
];

const HAM_TIPS = [
  "Walk Bliss → Hamra → Verdun in one afternoon to feel how Beirut commerce evolved over 70 years",
  "Cafe Younes for coffee, Snack Faisal for the student-sandwich vibe, Em Sherif (Verdun) for upscale Lebanese",
  "AUB campus is open to the public — head up for ocean views from the upper terraces, the oldest American university in the Middle East",
  "Hamra has aged: many landmark cafés are gone, but evenings still bring streetlife around Cafe Younes and Captain Cabin",
  "Hamra means 'red' (al-7amra) — said to refer to red sand or red-flowered shrubs in the pre-urban era"
];
