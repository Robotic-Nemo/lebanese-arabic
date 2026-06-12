// Run #414 — Lebanese Weddings & Celebrations Coach (wed)
// Categories: wedding-roles | ceremony | music-dance | blessings | phrases

const WED_WORDS = [
  // wedding-roles
  { ar: 'عريس', tr: '3ariis', en: 'groom', cat: 'wedding-roles' },
  { ar: 'عروس', tr: '3aruus', en: 'bride', cat: 'wedding-roles' },
  { ar: 'عقد القران', tr: '3a2d il-2iraan', en: 'marriage contract (religious ceremony)', cat: 'wedding-roles' },
  { ar: 'وليمة', tr: 'waliime', en: 'wedding feast / reception dinner', cat: 'wedding-roles' },
  { ar: 'خطيب', tr: 'xaTiib', en: 'fiancé / groom-to-be', cat: 'wedding-roles' },
  { ar: 'خطيبة', tr: 'xaTiibe', en: 'fiancée / bride-to-be', cat: 'wedding-roles' },
  { ar: 'شبينة', tr: 'shabiine', en: 'bridesmaid (Lebanese term)', cat: 'wedding-roles' },
  { ar: 'صاحب العريس', tr: 'Saa7ib il-3ariis', en: 'best man (groomsman)', cat: 'wedding-roles' },
  // ceremony
  { ar: 'زفة', tr: 'zaffe', en: 'zaffe (wedding procession with drums, dabke, candles)', cat: 'ceremony' },
  { ar: 'مهر', tr: 'mahr', en: 'mahr (groom\'s gift to bride — Islamic tradition)', cat: 'ceremony' },
  { ar: 'خاتم', tr: 'xaatam', en: 'ring (engagement or wedding ring)', cat: 'ceremony' },
  { ar: 'عقد الزواج', tr: '3a2d iz-zawaaj', en: 'marriage certificate', cat: 'ceremony' },
  { ar: 'شبكة', tr: 'shabake', en: 'engagement gifts / jewelry set from groom', cat: 'ceremony' },
  { ar: 'ليلة العرس', tr: 'leelat il-3irs', en: 'wedding night / the night of the wedding', cat: 'ceremony' },
  { ar: 'كنيسة', tr: 'kniise', en: 'church (Christian weddings)', cat: 'ceremony' },
  { ar: 'جامع', tr: 'jaami3', en: 'mosque (Muslim weddings)', cat: 'ceremony' },
  // music-dance
  { ar: 'دبكة', tr: 'dabke', en: 'dabke (Lebanese line dance — every wedding has it)', cat: 'music-dance' },
  { ar: 'زغاريط', tr: 'zaghaariT', en: 'zagharit (ululation — women\'s high trill of joy)', cat: 'music-dance' },
  { ar: 'طبلة', tr: 'Tabla', en: 'tabla (drum used in zaffe processions)', cat: 'music-dance' },
  { ar: 'مزمار', tr: 'mizmaar', en: 'mizmar (reed instrument in Lebanese weddings)', cat: 'music-dance' },
  { ar: 'دحيج', tr: 'da7iij', en: 'da7eej (wedding chant / call-and-response singing)', cat: 'music-dance' },
  { ar: 'عالدبكة', tr: '3al-dabke', en: 'at the dabke / join the dabke line (invitation)', cat: 'music-dance' },
  { ar: 'قيد العشاق', tr: '2eed il-3ushsha2', en: 'lover\'s hands (common Lebanese wedding song phrase)', cat: 'music-dance' },
  { ar: 'حفلة', tr: '7afle', en: 'party / celebration / wedding reception', cat: 'music-dance' },
  // blessings
  { ar: 'مبروك', tr: 'mabruuk', en: 'congratulations / blessed (most-used wedding word)', cat: 'blessings' },
  { ar: 'يعطيكم العافية', tr: 'ya3Tiikum il-3aafye', en: 'may God give you health (general blessing)', cat: 'blessings' },
  { ar: 'بالرفاء والبنين', tr: 'bir-rafaa w il-baniin', en: 'may you have prosperity and sons (traditional wedding wish)', cat: 'blessings' },
  { ar: 'ربنا يكمل عليكم', tr: 'rabbna ykammal 3alikum', en: 'may God complete the blessing on you (wedding congratulation)', cat: 'blessings' },
  { ar: 'على بعضكم', tr: '3ala ba3Dkon', en: 'may you always be together (said to couple)', cat: 'blessings' },
  { ar: 'دوام السعادة', tr: 'dawaam is-sa3aade', en: 'lasting happiness (formal wedding wish)', cat: 'blessings' },
  { ar: 'الله يبارك', tr: 'alla ybaarik', en: 'God bless (general blessing on happy occasion)', cat: 'blessings' },
  { ar: 'تفرحوا بهم', tr: 'tifra7u biihim', en: 'may you have joy through them (said about newlyweds to parents)', cat: 'blessings' },
  // phrases
  { ar: 'خطبنا', tr: 'xaTbna', en: 'we got engaged (announcement)', cat: 'phrases' },
  { ar: 'وقعنا', tr: 'wa22a3na', en: 'we signed (the contract) — common way to say engaged/married', cat: 'phrases' },
  { ar: 'عرس', tr: '3irs', en: 'wedding (the event itself)', cat: 'phrases' },
  { ar: 'مدعو', tr: 'mad3uu', en: 'invited / guest', cat: 'phrases' },
  { ar: 'كوش العرس', tr: 'koosh il-3irs', en: 'wedding arch / stage decoration', cat: 'phrases' },
  { ar: 'بوفيه', tr: 'buffe', en: 'buffet (Lebanese wedding dinner style)', cat: 'phrases' },
  { ar: 'موكب العرس', tr: 'mawkib il-3irs', en: 'wedding convoy (cars honking in procession)', cat: 'phrases' },
  { ar: 'بعد شر', tr: 'ba3d sharr', en: 'may nothing bad follow (said after someone sneezes/coughs at wedding)', cat: 'phrases' },
];

const WED_DRILLS = [
  {
    q: 'What is a "zaffe" at a Lebanese wedding?',
    opts: ['zaffe (wedding procession)', 'dabke (line dance)', '7afle (party)', 'waliime (feast)'],
    correct: 0,
    note: '"Zaffe" (زفة) — the Lebanese wedding entrance procession. Musicians with tablas (drums) and mizmar (reed instrument), dancers with candles and swords, sometimes fire breathers, lead the bride and groom into the reception hall. The zaffe announces the couple\'s arrival with maximum fanfare. Lebanese weddings are theatrical productions. "Yalla il-zaffe" = the procession is starting. The zaffe company is hired specifically for this — professional groups travel across Lebanon for big weddings. Hearing a zaffe means the party is really beginning.',
  },
  {
    q: 'What does "mabruuk" mean at a Lebanese celebration?',
    opts: ['mabruuk (congratulations/blessed)', 'alla ybaarik (God bless)', 'dawaam is-sa3aade (lasting happiness)', '3ala ba3Dkon (together always)'],
    correct: 0,
    note: '"Mabruuk" (مبروك) — congratulations / blessed. From "baraka" (blessing). Used for weddings, births, new jobs, new cars, passing exams — any good news. The response: "alla ybaarik fiik" = may God bless you (in you). "Alf mabruuk" = a thousand congratulations (extremely happy for you). In Lebanese culture, celebrating others\' good news enthusiastically is a social obligation — dampening someone\'s joy with a weak "mabruuk" is rude. "Mabruuk 3a l-3irs!" = congratulations on the wedding!',
  },
  {
    q: 'What are "zaghaariT" at a Lebanese wedding?',
    opts: ['zaghaariT (ululation/women\'s trill)', 'dabke (line dance)', 'zaghaariT (table settings)', 'mizmaar (instrument)'],
    correct: 0,
    note: '"ZaghaariT" (زغاريط) — the traditional women\'s ululation. A high-pitched trill made by rapidly moving the tongue while making a high sound: "lililililili!" Sound of: weddings, births, returning soldiers, any great joy. Lebanese women are masters of the zaghareet. Older women (grandmothers especially) produce the longest, most impressive trills. "Sawwiti zaghareet!" = make your zaghareet! is shouted when something wonderful happens. The sound carries across a room, across a village. It\'s the sound of Lebanese joy.',
  },
  {
    q: 'What is "dabke" and when is it danced?',
    opts: ['dabke (Lebanese line dance)', 'zaffe (procession)', '7afle (party)', 'da7iij (chant)'],
    correct: 0,
    note: '"Dabke" (دبكة) — Lebanese/Levantine line dance. Dancers hold hands or arms, stomp in unison, led by a "lawweeh" (lead dancer) who performs improvised footwork at the front. Every Lebanese wedding ends in dabke. "3ala dabke" = come join the dabke line. Dabke is also political — it\'s danced at protests, funerals of martyrs, national celebrations. Lebanese diaspora communities preserve dabke globally as cultural identity. "Bti3rif tdabke?" = can you dabke? is a question that reveals if you grew up Lebanese.',
  },
  {
    q: 'What does "bir-rafaa w il-baniin" mean?',
    opts: ['bir-rafaa w il-baniin (prosperity and sons)', 'mabruuk (congratulations)', 'rabbna ykammal 3alikum (God complete blessings)', 'tifra7u biihim (joy through them)'],
    correct: 0,
    note: '"Bir-rafaa w il-baniin" (بالرفاء والبنين) — may you have prosperity and children (lit. sons). The traditional Lebanese/Arab wedding toast. "Rafaa" = flourishing, prosperity. "Baniin" = sons (traditionally). In modern Lebanon, people sometimes add "w banaat" (and daughters) to include all children. Said to the couple by guests, parents, relatives. Often shouted during the zaffe or at the start of the reception. This phrase is centuries old — hearing it at a wedding connects you to generations of Lebanese celebration.',
  },
  {
    q: 'What is a "shabake" in a Lebanese engagement?',
    opts: ['shabake (engagement jewelry set)', 'xaatam (ring)', '3a2d iz-zawaaj (certificate)', 'mahr (Islamic gift)'],
    correct: 0,
    note: '"Shabake" (شبكة) — literally "net/network" — the jewelry set the groom\'s family presents to the bride at engagement. Traditionally includes a ring, bracelet, necklace, and earrings — a complete "set" of gold (the net that binds the engagement). Gold is the standard in Lebanese engagements — the heavier the gold, the more serious the groom\'s family. In modern Lebanon, this tradition persists but adapts — some couples skip traditional gold for diamond rings. "Shaf el-shabake" = he saw/gave the shabake = the engagement is formal.',
  },
  {
    q: 'What does "xaTbna" announce?',
    opts: ['xaTbna (we got engaged)', 'wa22a3na (we signed)', '3irs (wedding event)', 'ma3a ba3Dkon (together)'],
    correct: 0,
    note: '"XaTbna" (خطبنا) — we got engaged. From "xaTab" (to propose/betroth). This is the announcement couples make when officially engaged. "XaTbna bil-ams" = we got engaged yesterday. The engagement party (7aflat xeTuube) follows. In Lebanese culture, the engagement period can be 6 months to 2+ years. During this time, the couple is "xaTiib w xaTiibe" (fiancé/fiancée). The engagement is a serious commitment — Lebanese families invest significantly in the engagement celebration before the wedding.',
  },
  {
    q: 'What is the "mahr" in Lebanese Muslim weddings?',
    opts: ['mahr (groom\'s gift to bride)', 'shabake (jewelry set)', '3a2d il-2iraan (contract)', 'waliime (feast)'],
    correct: 0,
    note: '"Mahr" (مهر) — the mandatory gift from groom to bride in Islamic marriage. Stipulated in the marriage contract. Can be money, gold, property, or any agreed value. The mahr has two parts: "mu2ajjal" (immediate, paid at signing) and "mu2ajjar" (deferred, paid in case of divorce or death). Lebanese Muslim weddings navigate both religious law and social custom. The mahr amount reflects the groom\'s seriousness. Lebanese Christian weddings don\'t have mahr but do have the "shabake" jewelry tradition — parallel customs for different communities.',
  },
  {
    q: 'What does "tifra7u biihim" mean when said to parents at a wedding?',
    opts: ['tifra7u biihim (joy through them)', 'mabruuk (congratulations)', 'alla ybaarik (God bless)', 'dawaam is-sa3aade (lasting happiness)'],
    correct: 0,
    note: '"Tifra7u biihim" (تفرحوا بهم) — may you have joy through them. Said to the parents of the bride or groom: may your children bring you happiness. Lebanese family culture places the parents\' joy as central to weddings — it\'s not just the couple\'s day, it\'s the family\'s celebration. "Yifra77 fiiha halidkum" = may her presence make you happy. Knowing when to say these phrases to parents (not just the couple) marks you as culturally fluent. Lebanese parents may cry when they hear this — it touches the deepest part of the hospitality culture.',
  },
  {
    q: 'What is a "mawkib il-3irs" you\'d hear on Lebanese roads?',
    opts: ['mawkib il-3irs (wedding convoy)', 'zaffe (procession)', 'leelat il-3irs (wedding night)', 'koosh il-3irs (wedding arch)'],
    correct: 0,
    note: '"Mawkib il-3irs" (موكب العرس) — the wedding convoy. Cars decorated with ribbons and flowers, horns blaring, passengers hanging out of sunroofs shooting into the air (traditionally). The convoy travels from the church/mosque to the reception hall, announcing the wedding to the neighborhood. Traffic laws in Lebanon yield to wedding convoys — everyone moves aside. Hearing constant honking + seeing ribboned cars = wedding procession. Lebanese drivers give convoys right of way as a form of cultural respect. In Beirut, you might encounter multiple convoys on a Friday/Saturday.',
  },
];

const WED_TIPS = [
  'Lebanese weddings are among the world\'s most spectacular. A Beirut wedding can host 500-1500 guests, last until 4am, feature multiple live performers, a full zaffe entrance, 12-course dinner, and a dedicated dabke session. The wedding industry in Lebanon (pre-crisis) was a major economy. Planners, zaffe companies, makeup artists, hairdressers, tailors, caterers — a Lebanese wedding supports dozens of vendors. Even during economic crisis, Lebanese families sacrifice to make weddings memorable. "3irso helu" = his/her wedding was beautiful (the highest compliment).',
  'The zaffe is the theatrical heart of the Lebanese wedding. Professional zaffe companies include 10-30 performers: tabla players, mizmar players, sword dancers, fire breathers, candle carriers. The couple enters to their favorite song played on instruments while the zaffe dances around them. Famous zaffe songs include traditional dabke tunes and modern pop. "Bkra 7afltak" = tomorrow is your wedding (said with excitement). A good zaffe is discussed and remembered. "Shayaftu il-zaffe?" = did you see the zaffe? is the first question asked the morning after.',
  'Dabke is obligatory at Lebanese weddings. Usually starts at 10-11pm when the dinner winds down and the music shifts to high-energy Lebanese folk. The "lawweeh" (lead dancer) takes the front of the line and performs virtuosic footwork while leading the group\'s stomps. Everyone joins — young, old, family, guests. "Tifaddal, 3ala dabke" = please join, the dabke is starting. Non-Lebanese spouses are expected to learn at least the basic step before the wedding. "Biddak tdabke ma3na?" = will you dabke with us? is an invitation you don\'t refuse.',
  'Lebanese engagement culture involves multiple stages: "3azm" (proposal visit from groom\'s family), "xeTuube" (formal engagement ceremony), "shebke" (jewelry presentation), and then the wedding itself — each event with its own celebration. The engagement party can be as large as a small wedding. "3azamna 3ala l-xeTuube" = we\'re invited to the engagement party. Lebanese engagements are family negotiations as much as romantic milestones — both families assess each other extensively. The saying: "3irfet il-bayt min 3ariisto" = you know the household from its groom.',
  'Lebanese wedding blessings reflect the culture\'s deep interweaving of religion, family, and celebration. "Mabruuk" (blessed/congratulations) is secular enough for any community. "Alla ybaarik" (God bless) is used by both Christians and Muslims. "Bir-rafaa w il-baniin" is the traditional joint blessing for all. Lebanese weddings often bridge religious communities — a Christian and Muslim guest at the same table use the same blessings without tension. The culture of celebration transcends sectarian lines: wedding joy is one of Lebanon\'s most genuinely shared experiences across its many communities.',
];

const WED_ABOUT = 'Lebanese weddings are a cultural phenomenon — part family theater, part community ritual, part competitive spectacle. The zaffe, the dabke, the zaghareet, the elaborate shabake — these aren\'t decorations, they\'re expressions of Lebanese values: generosity, beauty, family honor, joy in the face of hardship. Lebanon is a country that has learned to celebrate fiercely precisely because tragedy is always nearby. A Lebanese wedding is both a celebration of a couple and a collective statement of resilience. Understanding Lebanese wedding vocabulary means understanding how Lebanon says: we are still here, we still dance, we still sing.';
