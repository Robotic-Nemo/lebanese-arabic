// R1662 — Lebanese Mahrajanat / International Summer Festivals (fst)
const FST_WORDS = [
  { w: "Mahrajan",              t: "مهرجان",              e: "festival — Lebanese summer 'mahrajanat' season; June-August international concerts in iconic ruins; cultural pillar since 1950s",                                ex: "el-mahrajan bil-sayfiye" },
  { w: "Baalbeck Festival",     t: "مهرجان بعلبك",         e: "Baalbeck International Festival — founded 1956; world's most spectacular ruins venue (Roman Bacchus/Jupiter temples); hosted Fairouz/Pavarotti/Sting/Caracalla",       ex: "Baalbeck Festival 1956" },
  { w: "Beiteddine Festival",   t: "مهرجان بيت الدين",      e: "Beiteddine Art Festival — Chouf palace courtyard since 1985; 19th-c Emir Bashir Shihab II palace; July-August opera/jazz/Lebanese stars; founded by Nora Joumblatt",  ex: "Beiteddine Festival bil-Chouf" },
  { w: "Byblos Festival",       t: "مهرجان جبيل",          e: "Byblos International Festival — ancient Phoenician seaport venue since 2003; rock/pop international acts; Gorillaz/Sia/30 Seconds to Mars/Massive Attack performed",  ex: "Byblos Festival 2003" },
  { w: "Tyre Festival",         t: "مهرجان صور",           e: "Tyre / Sour International Festival — Roman Hippodrome UNESCO site; ancient ruins by sea; classical Arabic music + theater; pre-civil-war prestigious",                ex: "mahrajan Sour bil-athar" },
  { w: "Ehdeniyat",             t: "مهرجانات إهدنيات",     e: "Ehdeniyat International Festival — Ehden mountain town festival since 2001 (north Lebanon); summer cool-mountain venue alternative to coast heat",                    ex: "Ehdeniyat bil-jabal" },
  { w: "Zouk Mikael",           t: "مهرجان ذوق مكايل",      e: "Zouk Mikael International Festival — coastal town near Jounieh since 1999; Roman amphitheater venue; Latin/jazz/world music focus",                                  ex: "Zouk Mikael 3a el-saif" },
  { w: "mahrajan el-balad",     t: "مهرجان البلد",         e: "town festival — small village/town summer mahrajan (not international); folkloric/zajal/dabke focus; community-funded; nostalgic Lebanon",                            ex: "mahrajan baldetna kel sane" },
  { w: "Caracalla",             t: "كاراكلا",              e: "Caracalla Dance Theatre — Abdel-Halim Caracalla founder 1968; Lebanese ballet+modern dance fusion; signature Baalbeck performances; iconic 'Andalusiat'",            ex: "Caracalla raq2 lebnani" },
  { w: "tabkhet siyaha",        t: "طبخة سياحة",           e: "'tourism cooking' — locals' cynical term for festival season; influx of expats/tourists July-Aug; price hikes; full restaurants/clubs; brief economic boom",         ex: "tabkhet siyaha kel sif" },
  { w: "ma3raD el-fann",        t: "معرض الفن",            e: "art exhibition / fair — Beirut Art Fair, Sursock Museum exhibitions; Saifi Village galleries; Hamra Street art; year-round complement to summer mahrajanat",         ex: "ma3raD fann bil-Sursock" },
  { w: "fartit el-tazaker",     t: "فرتت التذاكر",         e: "tickets sold out — common festival headline; popular acts sell within hours; Antoine Library + Virgin Megastore historical ticket vendors; now Ihjoz online",        ex: "fartit el-tazaker la-Fairouz" },
  { w: "concert mufti7",        t: "كونسير مفتوح",          e: "open-air concert — sayfiye/summer outdoor venues; Casino du Liban, Forum de Beyrouth, Music Hall, BIEL; festival overflow",                                          ex: "concert mufti7 taht el-najmeh" },
  { w: "Diaspora performers",   t: "فنانين المهجر",         e: "diaspora returnees — Lebanese-French/American artists who fly back for festival season; Mika, Yasmine Hamdan, Bachar Mar-Khalifé; transnational identity",       ex: "fnan mahjar 3am yghanni" },
  { w: "summer migration",      t: "هجرة الصيف",            e: "annual phenomenon — diaspora floods Lebanon June-Sept for festivals/family/sayfiye; airport bursts; restaurants triple bookings; brief economic boom",                ex: "hijret el-sif lal-mahrajanat" },
  { w: "wlee2 el-fann",         t: "وليّ الفن",            e: "'patron of arts' — wealthy families/banks sponsoring festivals (Khoury, Audi Bank, Byblos Bank); maintaining cultural elite identity post-civil-war",                ex: "el-bank wlee2 el-mahrajan" }
];

const FST_DRILLS = [
  {
    q: "Baalbeck Festival's significance?",
    opts: [
      "minor local event",
      "Baalbeck International Festival — founded 1956 in Roman Bacchus + Jupiter temple ruins (UNESCO); world's most spectacular ancient venue; hosted Fairouz debut 1957, Caracalla, Pavarotti, Sting, Charles Aznavour; cultural symbol of Lebanon",
      "modern stadium",
      "single concert"
    ],
    a: 1
  },
  {
    q: "Beiteddine Festival venue?",
    opts: [
      "indoor theater",
      "Beiteddine Palace courtyard in Chouf mountains — 19th-century Emir Bashir Shihab II palace; founded 1985 by Nora Joumblatt; intimate elegant courtyard setting; July-August opera/jazz/Lebanese stars",
      "Beirut downtown",
      "modern arena"
    ],
    a: 1
  },
  {
    q: "Byblos Festival vs Baalbeck?",
    opts: [
      "same festival",
      "Byblos International Festival (2003+) — coastal Phoenician port focus on rock/pop international acts (Gorillaz, Sia, 30 Seconds to Mars, Massive Attack); contrasts with Baalbeck's classical/operatic mountain prestige",
      "older than Baalbeck",
      "no music"
    ],
    a: 1
  },
  {
    q: "Caracalla Dance Theatre?",
    opts: [
      "Roman emperor",
      "Caracalla Dance Theatre — Abdel-Halim Caracalla founded 1968; signature Lebanese-Arab ballet/modern dance fusion; iconic 'Andalusiat' productions; flagship Baalbeck Festival performances; Lebanon's premier dance ensemble",
      "single dancer",
      "music band"
    ],
    a: 1
  },
  {
    q: "'tabkhet siyaha' meaning?",
    opts: [
      "tourist meal",
      "literally 'tourism cooking' — locals' cynical Lebanese phrase for festival/summer season influx of expats + tourists; July-Aug price hikes, full restaurants/clubs/airbnbs, brief artificial economic boom that fizzles by autumn",
      "festival food",
      "menu item"
    ],
    a: 1
  },
  {
    q: "Ehdeniyat distinguishing feature?",
    opts: [
      "Beirut location",
      "Ehdeniyat International Festival — Ehden north Lebanon mountain town venue since 2001; cool-mountain summer alternative to coast heat; pine-forest backdrop; smaller intimate scale than Baalbeck/Byblos",
      "winter only",
      "indoor venue"
    ],
    a: 1
  },
  {
    q: "Tyre Festival historical context?",
    opts: [
      "modern site",
      "Tyre/Sour International Festival — uses Roman Hippodrome UNESCO archaeological site; ancient ruins overlooking Mediterranean; pre-civil-war prestigious slot; classical Arabic music + theater; revived sporadically post-1990",
      "indoor stadium",
      "private estate"
    ],
    a: 1
  },
  {
    q: "Zouk Mikael Festival venue?",
    opts: [
      "modern theater",
      "Zouk Mikael International Festival — coastal town near Jounieh; uses restored Roman amphitheater since 1999; Latin/jazz/world music programming focus; July-August intimate seaside setting",
      "Beirut",
      "mountain village"
    ],
    a: 1
  },
  {
    q: "Diaspora artists at festivals?",
    opts: [
      "rare guests",
      "Lebanese-diaspora performers — Mika (UK/Lebanese pop), Yasmine Hamdan (Paris-based), Bachar Mar-Khalifé (French-Lebanese composer); annual summer return becomes ritual; festivals leverage diaspora identity for ticket sales",
      "no return",
      "competitors"
    ],
    a: 1
  },
  {
    q: "Festival sponsorship pattern?",
    opts: [
      "government only",
      "wealthy families + banks — 'wlee2 el-fann' (patrons) include Audi Bank, Byblos Bank, Khoury family, Solidere; maintains cultural elite identity post-civil-war; civic prestige; festivals depend on private sponsorship not public funds",
      "ticket sales only",
      "international donors"
    ],
    a: 1
  }
];

const FST_TIPS = [
  "Baalbeck Festival is THE Lebanese cultural icon — Fairouz's 1957 debut there cemented her as national diva; performing 'on the steps of Bacchus' is bucket-list for Arab artists",
  "'Tabkhet siyaha' captures bittersweet locals' view — diaspora floods home July-Aug, nightlife/restaurants triple prices, then everyone leaves Sept and economy crashes back",
  "Beiteddine vs Baalbeck class distinction — Beiteddine Mountain palace courtyard = elegant/intimate; Baalbeck Roman ruins = epic/prestigious; both June-Aug season",
  "Byblos Festival proved Lebanon could attract Western rock acts post-2003 — Gorillaz/Massive Attack/Sia put Lebanon on international touring map again",
  "Caracalla = Lebanese ballet brand since 1968 — Andalusiat Arab/Spanish fusion productions are Baalbeck Festival flagships; family troupe spans 3 generations of Caracallas"
];
