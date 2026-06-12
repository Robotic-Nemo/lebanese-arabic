// R1653 — Ziad el-Rahbani — Lebanese jazz-fusion composer/playwright (zia)
const ZIA_WORDS = [
  { w: "Ziad el-Rahbani",         t: "زياد الرحباني",         e: "Ziad Rahbani (1956-2024) — Lebanese jazz-fusion composer, playwright, son of Assi Rahbani+Fairouz",  ex: "Ziad el-Rahbani jaddad el-musi2a el-Lubnaniye" },
  { w: "Bennesbe la-Bukra Shu",   t: "بالنسبة لبكرا شو",       e: "'as for Tomorrow, what?' — landmark 1978 Ziad play+album, jazz fusion era opens",                ex: "Bennesbe la-Bukra Shu masra7iyye Ziadiyye 7elwe" },
  { w: "Nazl el-Sourour",         t: "نزل السرور",             e: "'Happiness Inn' — 1974 Ziad's first hit play, working-class hostage drama",                       ex: "Nazl el-Sourour awwal masra7iyye lal-Ziad" },
  { w: "Film Amerikani Tawil",    t: "فيلم أميركي طويل",       e: "'A Long American Film' — 1980 Ziad play, civil-war asylum allegory",                              ex: "Film Amerikani Tawil masra7iyye 3an el-7arb" },
  { w: "Shi Fashel",              t: "شي فاشل",                e: "'Something's Failed' — 1983 Ziad play, Lebanese civil-war satire peak",                            ex: "Shi Fashel min ahla masra7iyat el-Ziad" },
  { w: "Bekhsoos el-Karame",      t: "بخصوص الكرامة",          e: "'Concerning Dignity' — 1993 post-war Ziad play",                                                  ex: "Bekhsoos el-Karame masra7iyye Ziad ba3d-el-7arb" },
  { w: "Houdou Nisbi",            t: "هدوء نسبي",              e: "'Relative Calm' — 1985 Ziad jazz album, oud+saxophone fusion",                                    ex: "Houdou Nisbi album musi2a Ziad min 1985" },
  { w: "Bema Enno",               t: "بما إنّو",                e: "'Since' — 1995 Ziad jazz album",                                                                  ex: "Bema Enno album Ziad min 1995" },
  { w: "Ana Mush Kafer",          t: "أنا مش كافر",            e: "'I'm Not an Infidel' — Ziad's protest song against Lebanese poverty/war",                          ex: "Ana Mush Kafer ughniye Ziad ma3roufe" },
  { w: "Wahdon",                  t: "وحدن",                   e: "'Alone' — Fairouz hit composed by Ziad, post-Assi era turning point",                              ex: "Wahdon ughniye Fairouz min Ziad" },
  { w: "Kifak Inta",              t: "كيفك إنت",                e: "'How Are You' — 1991 Fairouz song by Ziad, controversial intimate lyric",                          ex: "Kifak Inta ughniye Fairouz Ziadiyye" },
  { w: "Joseph Sa2er",            t: "جوزيف صقر",              e: "Ziad's signature singer-actor, played working-class characters in plays",                          ex: "Joseph Sa2er sa7eb Ziad fil masra7" },
  { w: "Sami Hawwat",             t: "سامي حواط",              e: "Ziad collaborator, oud + jazz",                                                                    ex: "Sami Hawwat 3aazef oud ma3 Ziad" },
  { w: "Piccadilly",              t: "بيكاديللي",              e: "Beirut Hamra theater where Ziad's plays premiered 1970s-80s",                                      ex: "Piccadilly masra7 Ziad fi Hamra" },
  { w: "el-Sherri3",              t: "الشريع",                  e: "fictional Beirut neighborhood in Ziad's plays — working-class, Marxist",                           ex: "el-Sherri3 7ayy fil masra7iyat el-Ziad" },
  { w: "el-tarab el-musha7han",   t: "الطرب المشحن",           e: "'electrified tarab' — Ziad's term for his fusion of classical Arab + jazz/funk",                   ex: "el-tarab el-musha7han nawe3 musi2a Ziad" }
];

const ZIA_DRILLS = [
  {
    q: "Who is Ziad el-Rahbani?",
    opts: [
      "actor only",
      "Ziad Rahbani (1956-2024) — Lebanese composer, playwright, jazz-fusion innovator; son of Assi Rahbani and Fairouz; rebelled against parents' classical sound with biting political satire and Western jazz",
      "businessman",
      "footballer"
    ],
    a: 1
  },
  {
    q: "Significance of 'Bennesbe la-Bukra Shu'?",
    opts: [
      "minor work",
      "1978 landmark play+album by Ziad — 'as for Tomorrow, what?' — opened the Lebanese jazz-fusion era; established Ziad as voice of disillusioned post-civil-war youth",
      "religious play",
      "comedy only"
    ],
    a: 1
  },
  {
    q: "'Nazl el-Sourour' (1974)?",
    opts: [
      "love story",
      "'Happiness Inn' — Ziad's first major play; working-class hostage drama at a Beirut hotel; political allegory of Lebanon on eve of civil war",
      "musical romance",
      "modern setting"
    ],
    a: 1
  },
  {
    q: "Ziad's relationship to the Rahbani Brothers?",
    opts: [
      "unrelated",
      "son of Assi Rahbani (composer) + Fairouz (singer); nephew of Mansour Rahbani; rebelled against parents' folk-classical Rahbani sound with jazz, satire, and political theater",
      "younger brother",
      "cousin"
    ],
    a: 1
  },
  {
    q: "Ziad's Fairouz songs vs Rahbani Brothers' Fairouz songs?",
    opts: [
      "identical sound",
      "Ziad post-1980s Fairouz songs (Wahdon, Kifak Inta) sound radically different — jazz harmonies, intimate-modern lyrics, electric instruments; vs Rahbani Brothers' folk-classical mountain sound",
      "Ziad never wrote for her",
      "minor collaboration"
    ],
    a: 1
  },
  {
    q: "'Shi Fashel' (1983)?",
    opts: [
      "comedy only",
      "'Something's Failed' — Ziad's peak Lebanese civil-war satire play; biting humor about militias, leftist disappointment, dysfunctional Lebanon; quoted endlessly in Lebanese discourse",
      "love drama",
      "musical"
    ],
    a: 1
  },
  {
    q: "'Ana Mush Kafer'?",
    opts: [
      "Ziad religious song",
      "'I'm Not an Infidel' — Ziad protest song; defends the poor person who steals to eat as not blasphemous; classic Marxist-tinged Ziad lyric",
      "love song",
      "comedy"
    ],
    a: 1
  },
  {
    q: "Joseph Sa2er — connection to Ziad?",
    opts: [
      "music critic",
      "Ziad's signature singer-actor; played working-class characters in nearly every Ziad play; their voices became inseparable from Ziad's theatrical world",
      "rival composer",
      "no connection"
    ],
    a: 1
  },
  {
    q: "Piccadilly Theater?",
    opts: [
      "Cairo venue",
      "Beirut Hamra theater where Ziad's most famous plays premiered (Bennesbe la-Bukra Shu, Film Amerikani Tawil); icon of Beirut's 1970s-80s cultural scene amid civil war",
      "movie theater",
      "London venue"
    ],
    a: 1
  },
  {
    q: "Ziad's signature musical style?",
    opts: [
      "pure folk",
      "jazz-fusion + Arabic tarab + funk + bossa nova; he called it 'el-tarab el-musha7han' (electrified tarab); used saxophone, electric guitar alongside oud and qanun",
      "rock only",
      "classical only"
    ],
    a: 1
  }
];

const ZIA_TIPS = [
  "Start with 'Bennesbe la-Bukra Shu' soundtrack to hear Ziad's jazz-fusion sound — saxophone + oud + Arabic vocals together",
  "Listen to 'Wahdon' and 'Kifak Inta' to hear how Ziad transformed Fairouz from folk-mountain icon to intimate-modern singer post-1985",
  "Ziad's plays are quoted constantly by Lebanese — phrases like 'Bennesbe la-Bukra shu?' are everyday shorthand for fatalism. Watching the plays unlocks decades of cultural references",
  "The Ziad-vs-his-parents tension is the key to understanding modern Lebanese culture — Rahbani Brothers built mythologized rural Lebanon; Ziad demolished it with urban Beirut realism",
  "Ziad died July 26, 2024 — Lebanon mourned a generational icon. His funeral and tributes were national events on par with major political figures"
];
