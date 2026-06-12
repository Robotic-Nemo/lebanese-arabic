// R1650 — Sabah (Shahrura) — Lebanese diva, contemporary of Fairouz (sah)
const SAH_WORDS = [
  { w: "Sabah",                   t: "صباح",                  e: "Jeanette Feghali (1927-2014), 'Shahroura', Lebanese megadiva",  ex: "Sabah aSl-a min Wadi Shahrour ddey3a la2-Beirut" },
  { w: "el-Shahroura",            t: "الشحرورة",              e: "'the Songbird/Blackbird' — Sabah's iconic nickname",            ex: "el-Shahroura sammuwa-yya li-jamal sawt-a" },
  { w: "Wadi Shahrour",           t: "وادي شحرور",             e: "village near Beirut, Sabah's birthplace",                       ex: "Wadi Shahrour ddey3a 7elwe foq-a 3al jabal" },
  { w: "Yana yana",               t: "يانا يانا",              e: "1980s mega-hit, Sabah's signature song",                        ex: "Yana yana min ashhar aghani Sabah" },
  { w: "Zay el-3asal",            t: "زيّ العسل",              e: "'Like Honey' — classic Sabah song",                             ex: "Zay el-3asal ughniye 7elwe la-Sabah" },
  { w: "Allo beirut",             t: "ألو بيروت",              e: "Sabah hit, Beirut anthem",                                       ex: "Allo Beirut min eli aghaniha el-watani" },
  { w: "el-mawwal",               t: "الموّال",                e: "vocal genre Sabah mastered — improvised opening",               ex: "el-mawwal yibtidi-l ughniye bi-shukl 7or" },
  { w: "Sa3douni",                t: "ساعدوني",                e: "famous Sabah Egyptian-cinema song",                              ex: "Sa3douni ughniye min film Sabah b-Masr" },
  { w: "el-cinema el-Masriyye",   t: "السينما المصرية",        e: "Egyptian cinema where Sabah starred 1950s-60s (98 films)",      ex: "Sabah masslet bi-aktar min 98 film Masri" },
  { w: "Khaiyye",                 t: "خيي",                    e: "village dialect Sabah revived with rural Lebanese songs",        ex: "Khaiyye laz3et khelef-a fil ughniye" },
  { w: "el-zajal",                t: "الزجل",                  e: "rural improv-poetry style Sabah brought to Arab pop",            ex: "el-zajal sha3er Lubnani jabali" },
  { w: "el-9 zoojaat",            t: "الـ٩ زوجات",            e: "'9 husbands' — Sabah's tabloid-famous marriage record",         ex: "Sabah jawwazet 9 marrat — turath bi-3aalam el-fann" },
  { w: "Joseph Sader",            t: "جوزيف صادر",             e: "Sabah's first husband (1946) — early career manager",            ex: "Joseph Sader awwal joz Sabah" },
  { w: "Roshdy Abaza",            t: "رشدي أباظة",             e: "Egyptian actor, Sabah's brief husband (1981)",                  ex: "Roshdy Abaza mumassil Masri shahir" },
  { w: "Faye2 Lahham",            t: "فايق لحام",              e: "Lebanese actor, Sabah's last husband (2002)",                   ex: "Faye2 Lahham aakher zawj Sabah" },
  { w: "Yawm el-shahroura",       t: "يوم الشحرورة",          e: "'Day of the Songbird' — annual Sabah memorial in Lebanon",      ex: "Yawm el-Shahroura b-yet-zakkar 3id Sabah" }
];

const SAH_DRILLS = [
  {
    q: "Who was Sabah?",
    opts: [
      "actress only",
      "Jeanette Feghali (1927-2014) — Lebanese megadiva 'el-Shahroura'; recorded over 3000 songs and starred in 98 Egyptian films; contemporary of Fairouz with very different style",
      "writer",
      "dancer"
    ],
    a: 1
  },
  {
    q: "What does 'el-Shahroura' mean?",
    opts: [
      "the queen",
      "the Songbird/Blackbird — Sabah's iconic nickname referencing the female blackbird; comes from her birthplace Wadi Shahrour and her vocal range/agility",
      "the lady",
      "the star"
    ],
    a: 1
  },
  {
    q: "Sabah's birthplace?",
    opts: [
      "Beirut",
      "Wadi Shahrour — village in Mount Lebanon south of Beirut; lent her her stage nickname 'el-Shahroura' (the Songbird)",
      "Tripoli",
      "Damascus"
    ],
    a: 1
  },
  {
    q: "'Yana yana' significance?",
    opts: [
      "religious song",
      "Sabah's late-career mega-hit — 1980s playful pop song that became her signature anthem; iconic 'yana yana' refrain instantly recognizable across Arab world",
      "wedding song",
      "lullaby"
    ],
    a: 1
  },
  {
    q: "Sabah vs Fairouz?",
    opts: [
      "same style",
      "contrasting Lebanese divas of same era — Fairouz: solemn Rahbani classical/folk; Sabah: extroverted dialect pop, mawwal, Egyptian-cinema songs, ample tabloid life. Both 20th-century giants",
      "Sabah unknown",
      "Fairouz younger"
    ],
    a: 1
  },
  {
    q: "Sabah's Egyptian cinema career?",
    opts: [
      "few films",
      "98 Egyptian films starring 1950s-60s — major crossover star; brought Lebanese dialect songs to wider Arab audience via Cairo's powerful film industry",
      "directed only",
      "supporting roles"
    ],
    a: 1
  },
  {
    q: "Sabah's 9 husbands?",
    opts: [
      "rumor only",
      "factual — Sabah married 9 times across her life (Joseph Sader 1946, …, Faye2 Lahham 2002); she made it part of her public persona, joking about it openly. Tabloid-famous record",
      "she never married",
      "married once"
    ],
    a: 1
  },
  {
    q: "el-mawwal — Sabah connection?",
    opts: [
      "she avoided it",
      "Sabah was a master of mawwal — improvised vocal opening before main song; her vocal agility and rural Lebanese training made her a top mawwal singer of her generation",
      "she invented it",
      "modern only"
    ],
    a: 1
  },
  {
    q: "el-zajal in Sabah's repertoire?",
    opts: [
      "absent",
      "central — Sabah brought Lebanese mountain zajal (rural improv-poetry) to mainstream Arab pop; her village dialect roots from Wadi Shahrour shaped this",
      "Egyptian style",
      "imported"
    ],
    a: 1
  },
  {
    q: "Yawm el-Shahroura?",
    opts: [
      "festival in Egypt",
      "'Day of the Songbird' — Lebanese annual memorial for Sabah after her 2014 death; commemorates her cultural-icon status alongside Fairouz and the Rahbani brothers",
      "her birthday only",
      "fictional"
    ],
    a: 1
  }
];

const SAH_TIPS = [
  "Start with 'Yana yana' — Sabah's most accessible signature song, instantly recognizable refrain, captures her playful late-career pop persona",
  "Listen to Sabah's mawwal openings to hear pre-Western-pop Arab vocal art — the improvised opening with no instrumental accompaniment, a dying tradition",
  "The Sabah-Fairouz contrast is the key axis of 20th-century Lebanese diva music — Fairouz solemn/Rahbani-bound, Sabah extroverted/independent. Both are required listening",
  "Sabah's 98 Egyptian films are why she's known across the Arab world — Cairo's film industry exported her to non-Lebanese audiences in pre-internet decades",
  "'el-Shahroura' nickname connects her birthplace (Wadi Shahrour, Mount Lebanon) + her songbird voice — a name only working when both layers register"
];
