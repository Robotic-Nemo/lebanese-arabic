// R1659 — Lebanese Maronite Saints & Sacred Sites — Mar Charbel & pilgrimage culture (mrt)
const MRT_WORDS = [
  { w: "Mar Charbel",          t: "مار شربل",           e: "Saint Charbel Makhlouf (1828-1898) — Maronite hermit-monk; canonized 1977; body found incorrupt for decades; Lebanon's most beloved saint; miracle worker", ex: "Mar Charbel akbar wali Lebnen" },
  { w: "Mar Maron",            t: "مار مارون",          e: "Saint Maron (4th-5th c) — Syriac hermit-founder of Maronite Christianity; namesake of the church",                                                          ex: "Mar Maron muassis el-Mawarne" },
  { w: "Mar Rafqa",            t: "مار رفقا",           e: "Saint Rafqa (1832-1914) — Maronite nun; suffered blindness+paralysis 30 yrs in joy; canonized 2001; Jrabta convent",                                       ex: "Mar Rafqa abdat el-Mawarne" },
  { w: "Hardini",              t: "الحرديني",            e: "Saint Nimatullah Kassab al-Hardini (1808-1858) — Maronite monk-teacher; canonized 2004; Kfifan monastery",                                                  ex: "Hardini mou3allem Mar Charbel" },
  { w: "Estephan Nehme",       t: "اسطفان نعمة",        e: "Blessed Estephan Nehme (1889-1938) — Maronite monk; beatified 2010; Kfifan",                                                                                ex: "Estephan Nehme tubaoui Lebnani" },
  { w: "Annaya",               t: "عنّايا",              e: "Mar Charbel's monastery + tomb — Lebanon's #1 pilgrimage site; thousands visit weekly seeking miracles",                                                  ex: "Annaya kel Lebnen rou7 yzouro" },
  { w: "Qadisha",              t: "قاديشا",              e: "Sacred Valley (Wadi Qadisha) — UNESCO site; Maronite hermit caves + monasteries 5th c onward; refuge during persecutions",                                ex: "Qadisha wedi mokaddas" },
  { w: "Bcharre",              t: "بشرّي",               e: "Mar Charbel's birth village in north Lebanon mountains; near Cedars of Lord; pilgrim stop",                                                                ex: "Bcharre baldet Mar Charbel" },
  { w: "Bkerke",               t: "بكركي",               e: "Maronite Patriarchate seat — Mount Lebanon; political+religious epicenter; patriarch addresses nation from here",                                          ex: "Bkerke marja3 el-Mawarne" },
  { w: "Diman",                t: "الديمان",             e: "Patriarch's summer seat — North Lebanon mountain; cooler than Bkerke; June-October residence",                                                              ex: "Diman maqarr el-batriark bil-sayf" },
  { w: "Patriarch al-Rahi",    t: "البطريرك الراعي",    e: "Bechara Boutros al-Rahi (b. 1940) — current Maronite Patriarch since 2011; Cardinal; outspoken on Lebanese politics",                                       ex: "el-batriark al-Rahi byatkallam 3al siyese" },
  { w: "qaddasna",             t: "قدّاسنا",            e: "'we held mass' — Maronite Sunday mass with Syriac-Aramaic chants; Liturgy of St. James; ancient rite",                                                       ex: "qaddasna 3al kniseh" },
  { w: "zaydeh",               t: "زيدة",                e: "pilgrimage visit to a saint's shrine — devotional vow; common after answered prayer",                                                                       ex: "zaydeh 3a Mar Charbel" },
  { w: "baraka",               t: "بركة",                e: "blessing — central concept in Maronite piety; saints transmit baraka via relics, oil, soil",                                                              ex: "baraka min Mar Charbel" },
  { w: "takdis",               t: "تقديس",               e: "canonization — three modern Lebanese saints (Charbel 1977, Hardini 2004, Rafqa 2001) raised church profile globally",                                       ex: "takdis Mar Charbel sanat 1977" },
  { w: "zayt el-Charbel",      t: "زيت الشربل",         e: "St. Charbel oil — blessed olive oil from Annaya; pilgrims rub on ailments hoping for miraculous cure",                                                       ex: "zayt el-Charbel byshaffi" }
];

const MRT_DRILLS = [
  {
    q: "Who is Mar Charbel?",
    opts: [
      "modern politician",
      "Saint Charbel Makhlouf (1828-1898) — Maronite hermit-monk from Bcharre; lived 23 yrs in solitude at Annaya; body found incorrupt + bleeding sweat after death; canonized 1977; Lebanon's most beloved saint",
      "early king",
      "businessman"
    ],
    a: 1
  },
  {
    q: "Why is Mar Charbel uniquely venerated?",
    opts: [
      "wealth",
      "thousands of documented miracle cures attributed to him; body remained incorrupt + exuded sweat-blood mixture seen by countless witnesses; both Christian + Muslim Lebanese venerate him; image hangs in shops, taxis, homes",
      "political role",
      "writings"
    ],
    a: 1
  },
  {
    q: "Mar Maron's significance?",
    opts: [
      "minor monk",
      "Saint Maron (4th-5th c Syriac hermit) — founded the spiritual movement that became the Maronite Church; the 'Mawarne' (Maronites) take his name; Lebanon's largest Christian community is his theological descendants",
      "Roman pope",
      "modern figure"
    ],
    a: 1
  },
  {
    q: "What is Qadisha Valley?",
    opts: [
      "modern town",
      "Wadi Qadisha ('Holy Valley') — UNESCO World Heritage site in north Lebanon; Maronite hermits lived in cliff caves from 5th c onward; refuge during Mamluk + Ottoman persecutions; Christianity preserved here through centuries",
      "ski resort",
      "shopping district"
    ],
    a: 1
  },
  {
    q: "Bkerke's role in Lebanon?",
    opts: [
      "tourist site",
      "Maronite Patriarchate seat in Mount Lebanon — religious headquarters of Maronites + de facto political power center; Patriarch's statements shape Christian political alignment; nation watches Bkerke during crises",
      "monastery only",
      "art museum"
    ],
    a: 1
  },
  {
    q: "Three modern Lebanese saints?",
    opts: [
      "none",
      "Mar Charbel (canonized 1977) + Mar Rafqa (canonized 2001) + Mar Nimatullah Hardini (canonized 2004) — all Maronite monastics; recent canonizations raised global profile of small Lebanese church",
      "only Charbel",
      "all medieval"
    ],
    a: 1
  },
  {
    q: "Annaya pilgrimage tradition?",
    opts: [
      "rare visits",
      "Mar Charbel's monastery + tomb at Annaya draws thousands weekly; pilgrims wait in line to touch the tomb; many leave with zayt el-Charbel (blessed oil); Lebanon's #1 pilgrimage destination",
      "closed to public",
      "winter only"
    ],
    a: 1
  },
  {
    q: "Patriarch al-Rahi?",
    opts: [
      "former patriarch",
      "Bechara Boutros al-Rahi (b. 1940) — current Maronite Patriarch since 2011; created Cardinal 2012; outspoken on political crises; visited Saudi Arabia + held diplomatic role; controversial figure across factions",
      "saint",
      "Vatican only"
    ],
    a: 1
  },
  {
    q: "Maronite liturgy distinguishing feature?",
    opts: [
      "Latin only",
      "Syriac-Aramaic chants (Aramaic = language of Jesus) + ancient Liturgy of St. James; rare preserved Eastern rite; full communion with Rome but distinct ancient practice; sounds nothing like Catholic mass elsewhere",
      "Greek rite",
      "modern English"
    ],
    a: 1
  },
  {
    q: "zayt el-Charbel meaning?",
    opts: [
      "cooking oil",
      "blessed olive oil from Annaya monastery — pilgrims take small bottles + rub on body parts seeking miraculous healing; central to Mar Charbel popular devotion; given as gift to sick relatives abroad",
      "skincare",
      "industrial use"
    ],
    a: 1
  }
];

const MRT_TIPS = [
  "Mar Charbel image is on dashboards of countless taxi drivers — even Muslim drivers; he's seen as universal Lebanese saint, not sectarian",
  "Annaya pilgrimage is central to Lebanese Christian identity; many families visit annually as zaydeh after answered prayers; bring zayt el-Charbel home",
  "Qadisha Valley contains caves where hermits still lived into the 20th c; the valley shows continuous Christian presence across 1500+ years",
  "Maronite mass uses Syriac-Aramaic chants — Aramaic = language Jesus spoke; this preservation is a source of deep Maronite cultural pride",
  "Bkerke statements during political crises are watched carefully — the Patriarch's positions shape Lebanese Christian political alignment more than any single party"
];
