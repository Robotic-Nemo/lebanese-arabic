// R1647 — Rahbani Brothers (Assi & Mansour) — Lebanese composer-poet duo (rhb)
const RHB_WORDS = [
  { w: "el-Akhwein el-Rahbani",      t: "الأخوان الرحباني",        e: "the Rahbani Brothers — composer/lyricist duo",         ex: "el-Akhwein el-Rahbani asas el-musi2a el-Lubnaniye" },
  { w: "3asi el-Rahbani",            t: "عاصي الرحباني",           e: "Assi (1923-1986), older brother, married Fairouz 1955", ex: "3asi el-Rahbani jawwaz Fairouz sane 1955" },
  { w: "Mansour el-Rahbani",         t: "منصور الرحباني",          e: "Mansour (1925-2009), younger brother, co-composer",     ex: "Mansour el-Rahbani sha3er w mu2allef" },
  { w: "Fairouz",                    t: "فيروز",                   e: "Rahbani's muse, voice of Lebanon (b.1934)",             ex: "Fairouz sawt Lubnan w 3aroos el-Rahbani" },
  { w: "Ziad el-Rahbani",            t: "زياد الرحباني",           e: "Assi+Fairouz's son (b.1956), composer/playwright",      ex: "Ziad el-Rahbani jaddad el-musi2a el-Lubnaniye" },
  { w: "Mais el-Reem",               t: "ميس الريم",                e: "1975 Rahbani musical, mountain-village romance",        ex: "Mais el-Reem masra7iyye Rahbaniye 7elwe" },
  { w: "Sahret 7obb",                t: "سهرة حب",                  e: "Night of Love, classic Rahbani musical",                ex: "Sahret 7obb min ahla masra7iyat el-Rahbani" },
  { w: "Bya3 el-Khawatem",           t: "بياع الخواتم",             e: "The Ring Seller, early Rahbani hit musical",            ex: "Bya3 el-Khawatem masra7iyye 2adime" },
  { w: "Petra",                      t: "بترا",                    e: "1977 Rahbani musical set in Jordan",                    ex: "Petra masra7iyye Rahbaniye Urduniyye" },
  { w: "el-Mahatta",                 t: "المحطة",                  e: "The Station, Rahbani musical",                          ex: "el-Mahatta masra7iyye 7elwe lal-Rahbani" },
  { w: "Nasri Shamseddine",          t: "نصري شمس الدين",          e: "baritone, signature Rahbani featured singer",           ex: "Nasri Shamseddine sawt jbeli Rahbani" },
  { w: "Filemon Wahbe",              t: "فيلمون وهبي",             e: "key Rahbani collaborator, composer/comedian",           ex: "Filemon Wahbe ostaz w sa7eb-el-Rahbani" },
  { w: "Casino du Liban",            t: "كازينو لبنان",             e: "main Rahbani stage 1960s-70s",                          ex: "Casino du Liban masra7 el-Rahbani el-asasi" },
  { w: "Hammana Festival",           t: "مهرجان حمانا",             e: "early Rahbani mountain showcase",                       ex: "Hammana mahrajan jabal Lubnan" },
  { w: "el-muwashah",                t: "الموشح",                  e: "Andalusian classical form Rahbani fused",               ex: "el-muwashah turath Andalusi qadim" },
  { w: "el-tareb el-jabali",         t: "الطرب الجبلي",            e: "mountain-folk genre Rahbani popularized",               ex: "el-tareb el-jabali tureth jbel Lubnan" }
];

const RHB_DRILLS = [
  {
    q: "Who are the Rahbani Brothers?",
    opts: [
      "actors",
      "Assi (1923-1986) and Mansour (1925-2009) — composer/lyricist duo who defined 20th-century Lebanese music; built Rahbani musical theater with Fairouz",
      "athletes",
      "politicians"
    ],
    a: 1
  },
  {
    q: "Which Rahbani brother married Fairouz?",
    opts: [
      "Mansour",
      "Assi (3asi) Rahbani — married Fairouz in 1955; together raised Ziad Rahbani; Assi composed the bulk of Fairouz's catalog with Mansour writing lyrics",
      "Filemon",
      "Ziad"
    ],
    a: 1
  },
  {
    q: "What is Mais el-Reem?",
    opts: [
      "a song",
      "1975 Rahbani musical — mountain-village romance starring Fairouz; one of the most beloved Rahbani-Fairouz musicals; toured Casino du Liban",
      "a film",
      "an album"
    ],
    a: 1
  },
  {
    q: "Petra (1977 Rahbani musical)?",
    opts: [
      "Lebanon-set",
      "set in Petra Jordan — Rahbani brothers' Pan-Arab cultural project, depicting ancient Nabatean civilization through Lebanese musical theater style",
      "modern setting",
      "Egyptian setting"
    ],
    a: 1
  },
  {
    q: "Ziad Rahbani's relation to the brothers?",
    opts: [
      "nephew",
      "Assi + Fairouz's son (b.1956) — modern composer/playwright; rebelled against parents' folk-classical style with jazz-fusion and biting political satire (Bennesbe la-Bukra Shu)",
      "cousin",
      "unrelated"
    ],
    a: 1
  },
  {
    q: "Signature Rahbani featured baritone?",
    opts: [
      "Wadih el-Safi",
      "Nasri Shamseddine — mountain baritone, played the village wise man / father figure in most Rahbani musicals; counterpoint to Fairouz's soprano",
      "Sabah",
      "Marcel Khalife"
    ],
    a: 1
  },
  {
    q: "Sahret 7obb?",
    opts: [
      "modern song",
      "'Night of Love' — classic Rahbani musical, romance theme; emblematic of the Rahbani fusion of folk-Lebanese + Western classical + Andalusian muwashah",
      "religious play",
      "dance show"
    ],
    a: 1
  },
  {
    q: "Casino du Liban's role?",
    opts: [
      "tourist hotel",
      "main Rahbani stage 1960s-70s — Mais el-Reem, Sahret 7obb, Bya3 el-Khawatem all premiered there; defined Lebanese musical theater venue",
      "movie theater",
      "concert hall only"
    ],
    a: 1
  },
  {
    q: "Rahbani signature musical genre?",
    opts: [
      "pure folk",
      "fusion: Lebanese mountain folk + Western classical orchestration + Andalusian muwashah + occasional French chanson influence — created a distinct Lebanese sound",
      "pure pop",
      "rock"
    ],
    a: 1
  },
  {
    q: "Roles of Assi vs Mansour?",
    opts: [
      "identical",
      "Assi led composition / musical direction; Mansour handled poetry/lyrics — though both contributed to both. Their partnership was inseparable; mid-1970s Assi's stroke split the duo",
      "performers only",
      "solo careers"
    ],
    a: 1
  }
];

const RHB_TIPS = [
  "Start with Mais el-Reem soundtrack — captures the Rahbani-Fairouz mountain-romance sound",
  "Ziad Rahbani's jazz-era work (Bennesbe la-Bukra Shu, 1978) shows the generational break from classical Rahbani sound — listen back-to-back to hear the rebellion",
  "Rahbani brothers + Fairouz formed Antrab el-Rahbani — the trio name; Nasri Shamseddine often joined as fourth voice",
  "Petra (1977) was Rahbani's pan-Arab cultural project — controversial at the time for crossing Lebanese-Jordanian borders during civil war",
  "After Assi's 1972 stroke, Mansour continued composing alone — the post-1972 Rahbani sound carries a different signature; recognize the shift listening to late-1970s Fairouz"
];
