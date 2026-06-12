// Run #303 — Lebanese Daily Verbs Coach (dvb)
// High-frequency action verbs for everyday Lebanese life — 40 items, MCQ drill, 5 tips

const DVB_WORDS = [
  // communication verbs
  { tr: '7aka',            ar: 'حكى',             en: 'to speak / say / tell',           cat: 'comms' },
  { tr: 'khabar',          ar: 'خبّر',             en: 'to tell / inform',                cat: 'comms' },
  { tr: 'sa2al',           ar: 'سأل',             en: 'to ask',                          cat: 'comms' },
  { tr: 'jaawab',          ar: 'جاوب',            en: 'to answer / reply',               cat: 'comms' },
  { tr: 'naade',           ar: 'نادى',            en: 'to call out / to name',           cat: 'comms' },
  { tr: 'dhikar',          ar: 'ذكر',             en: 'to mention',                      cat: 'comms' },
  { tr: '7ake',            ar: 'حاكى',            en: 'to imitate / mimic',              cat: 'comms' },
  { tr: 'shakar',          ar: 'شكر',             en: 'to thank',                        cat: 'comms' },
  // movement & location
  { tr: 'raaH',            ar: 'راح',             en: 'to go',                           cat: 'movement' },
  { tr: 'ija',             ar: 'إجا',             en: 'to come',                         cat: 'movement' },
  { tr: 'rija3',           ar: 'رجع',             en: 'to return / come back',           cat: 'movement' },
  { tr: 'nzal',            ar: 'نزل',             en: 'to go down / get off',            cat: 'movement' },
  { tr: '2ilib',           ar: 'قلب',             en: 'to turn / flip / go around',      cat: 'movement' },
  { tr: 'laHa2',           ar: 'لحق',             en: 'to catch up / make it in time',   cat: 'movement' },
  { tr: 'talab',           ar: 'طلب',             en: 'to order / request',              cat: 'movement' },
  { tr: 'wSil',            ar: 'وصل',             en: 'to arrive / reach',               cat: 'movement' },
  // daily actions
  { tr: 'Talab l-akil',    ar: 'طلب الأكل',        en: 'to order food',                   cat: 'daily' },
  { tr: 'fata7',           ar: 'فتح',             en: 'to open',                         cat: 'daily' },
  { tr: 'sakkar',          ar: 'سكّر',             en: 'to close / lock',                 cat: 'daily' },
  { tr: 'shaghal',         ar: 'شغّل',             en: 'to turn on / operate',            cat: 'daily' },
  { tr: '2afal',           ar: 'أفل',             en: 'to turn off',                     cat: 'daily' },
  { tr: 'HaTT',            ar: 'حطّ',              en: 'to put / place',                  cat: 'daily' },
  { tr: 'shibak',          ar: 'شبك',             en: 'to connect / plug in',            cat: 'daily' },
  { tr: 'shaaf',           ar: 'شاف',             en: 'to see / watch',                  cat: 'daily' },
  // feelings & states
  { tr: 'ba7ab',           ar: 'بحب',             en: 'I love / I like (present)',        cat: 'feelings' },
  { tr: 'khaaF',           ar: 'خاف',             en: 'to fear / be afraid',             cat: 'feelings' },
  { tr: 'fara7',           ar: 'فرح',             en: 'to be happy / rejoice',           cat: 'feelings' },
  { tr: 'zi3il',           ar: 'زعل',             en: 'to be upset / offended',          cat: 'feelings' },
  { tr: 'nisi',            ar: 'نسي',             en: 'to forget',                       cat: 'feelings' },
  { tr: 'tdhakkar',        ar: 'تذكّر',            en: 'to remember',                     cat: 'feelings' },
  // problem / fixing
  { tr: 'Sala7',           ar: 'صلح',             en: 'to fix / repair',                 cat: 'fixing' },
  { tr: 'msak',            ar: 'مسك',             en: 'to hold / grab',                  cat: 'fixing' },
  { tr: 'la2a',            ar: 'لقى',             en: 'to find',                         cat: 'fixing' },
  { tr: 'DHiya3',          ar: 'ضيّع',             en: 'to lose / misplace',              cat: 'fixing' },
  { tr: 'baddal',          ar: 'بدّل',             en: 'to change / swap',                cat: 'fixing' },
  // social verbs
  { tr: 'zaar',            ar: 'زار',             en: 'to visit',                        cat: 'social' },
  { tr: '3azam',           ar: 'عزم',             en: 'to invite',                       cat: 'social' },
  { tr: 'saa3ad',          ar: 'ساعد',            en: 'to help',                         cat: 'social' },
  { tr: 'staghna',         ar: 'استغنى',          en: 'to do without / not need',        cat: 'social' },
  { tr: 'HaTT bbaalo',     ar: 'حطّ ببالو',        en: 'to keep in mind / remember to',  cat: 'social' },
];

const DVB_DRILLS = [
  {
    q: 'How do you say "to go" in Lebanese Arabic?',
    opts: ['ija', 'rija3', 'raaH', 'nzal'],
    correct: 2,
    note: '"raaH" = to go (راح — past tense/base form). Present: "byiruu7" (he goes), "ana raayi7" (I\'m going). "Ween raayi7?" = where are you going? One of the most-used verbs. "Raayi7 ja3ee" = going to come back (Lebanese filler = they\'ll show up). "Raayi7 3ala" = going toward. Future with "raa7": "raa7 tiruu7" = you\'ll go. Lebanese phrase: "ruu7 w ija" = go and come (round trip). "raaH 3aleik" = it\'s gone for you (you missed it).'
  },
  {
    q: 'What does "laHa2" mean?',
    opts: ['to be late', 'to catch up / make it in time', 'to follow someone', 'to arrive late'],
    correct: 1,
    note: '"laHa2" = to catch up / make it in time (لحق). "laHa2t" = I made it / I caught up. "Ma laHa2t" = I didn\'t make it in time. "laHa2 3al-baas" = caught the bus. Lebanese time culture: being exactly on time is unusual — "laHa2 3ala shi" = managed to make it to something. "blaHHi2" = I\'ll catch up / I\'ll make it. One of the most emotionally loaded verbs — missing something important = "ma laHa2t." Lebanon\'s social pace: things start late, laHa2 = success.'
  },
  {
    q: 'How do you say "to close / lock" in Lebanese Arabic?',
    opts: ['fata7', 'shaghal', 'sakkar', '2afal'],
    correct: 2,
    note: '"sakkar" = to close/lock (سكّر — from أسكر = to make drunk/shut tight). "Sakkir l-baab" = close the door. "Sakkir l-dukkaane" = close the shop. Lebanese expression: "sakkarna" = we closed up (finished for the night). Lebanese shops: "ma ba3id sakkiru" = they haven\'t closed yet. "Sakkar 3aleik" = closed on you (locked you out). "2afal" = to turn off (electricity, machine). "sakkar" vs "2afal": door/shop = sakkar; device/light = 2afal. Common Lebanese mix-up for learners.'
  },
  {
    q: 'What does "zi3il" mean?',
    opts: ['to be angry / violent', 'to be upset / offended', 'to argue', 'to be jealous'],
    correct: 1,
    note: '"zi3il" = to be upset/offended (زعل — from زعل = sadness/hurt). Softer than anger — hurt feelings, disappointment. "Zi3iltu minni?" = did I upset you? "Ma tiz3al minni" = don\'t be upset with me. Female form: "zi3liit". "Za3laan" = upset (state). Lebanese emotional culture: "zi3il" is taken seriously — causing "za3al" to someone requires making up ("itsaala7"). "Za3al w maal" (upset and left) = passive sulking. "3ala shu za3iltu?" = why are you upset? Lebanese use "za3al" more than "ghadab" (anger).'
  },
  {
    q: 'How do you say "to find" in Lebanese Arabic?',
    opts: ['DHiya3', 'msak', 'la2a', 'baddal'],
    correct: 2,
    note: '"la2a" = to find (لقى — Lebanese; MSA: وجد "wajada"). "La2eeto" = I found it. "Ma la2eeto" = I couldn\'t find it. "Ween la2eeto?" = where did you find it? Lebanese search culture: "la2a maTra7" = found a spot (parking). "la2a shi" = found something (bargain/solution). "la2a Halo" = found himself = ended up. "la2eeli" = find me one. "Ma fi shi la2eto" = I couldn\'t find anything. Very common in daily Lebanese — "la2eit?" (did you find it?) is a frequent check-in.'
  },
  {
    q: 'What does "HaTT" mean?',
    opts: ['to take away', 'to put / place', 'to drop / fall', 'to throw'],
    correct: 1,
    note: '"HaTT" = to put/place (حطّ — Lebanese; MSA: وضع "waDa3a"). "HuTT hoon" = put it here. "HaTT b-baalo" = put in his mind = kept it in mind. "HaTT 3al-meeD" = put on the table. One of Lebanese Arabic\'s most-used verbs — replaces MSA وضع entirely in Lebanese speech. "HaTTeit" = I put. "BiHuTT" = he puts (present). Compound uses: "HaTT shariT" = put a condition. "HaTT biid" = put his hand in = got involved. "HaTT nafs" = put himself (in a situation).'
  },
  {
    q: 'How do you say "to return / come back" in Lebanese Arabic?',
    opts: ['raaH', 'ija', 'rija3', 'nzal'],
    correct: 2,
    note: '"rija3" = to return/come back (رجع). "Imta birja3?" = when are you coming back? "Rija3na" = we came back. "Rja3 li-Lubnaaan" = returned to Lebanon. Lebanese diaspora: "rija3" is emotionally loaded — coming home is significant. "Rja3 3an kalaamo" = went back on his word. "Rija3 li-rasho" = returned to his senses. "Ma rji3" = hasn\'t returned yet (waiting). Lebanese farewell: "truu7 w tirja3 bi-salim" = go and return safely (the full blessing uses rija3). "Rja3 bi-ddo l-faadhi" = came back empty-handed.'
  },
  {
    q: 'What does "3azam" mean?',
    opts: ['to respect', 'to invite', 'to congratulate', 'to visit'],
    correct: 1,
    note: '"3azam" = to invite (عزم — from عزم = determination/invitation). "3azamtak 3al-ghada" = I\'m inviting you to lunch. "Miin 3azamak?" = who invited you? "3azuume" = invitation. Lebanese invitation culture: "3azamtak" = I\'m paying (when at restaurant with guest). "Ana 3aazimak" = I\'m your host, you\'re my guest. Never refuse first invitation outright — Lebanese hospitality protocol: first "la2" (no), second insistence, then accept. "3azim ktiir" = very inviting/generous host. "3aazimiin" = we\'re invited (somewhere). Central to Lebanese social culture.'
  },
  {
    q: 'How do you say "to turn on / operate" in Lebanese Arabic?',
    opts: ['sakkar', '2afal', 'shaghal', 'shibak'],
    correct: 2,
    note: '"shaghal" = to turn on / operate (شغّل — from شغل = work). "Shagghil l-kahraba" = turn on the electricity. "Shagghil t-tilfizyon" = turn on the TV. In Lebanon\'s electricity shortage context: "shaghal l-muwallad" = turned on the generator. "Shughl" = work (noun). "3am bishtaghil" = it\'s working / running. "Ma bishtaghil" = not working. Lebanese life: "shaghal" is critical vocab — power cuts mean constantly toggling between grid and generator. "Shaghal" also = to employ: "3azam wa shaghal" = invited then employed.'
  },
  {
    q: 'What does "staghna" mean?',
    opts: ['to become rich', 'to do without / not need', 'to refuse help', 'to be independent'],
    correct: 1,
    note: '"staghna" = to do without / not need (استغنى — from غنى = richness → استغنى = became rich/independent from). "staghna 3anno" = he did without it / doesn\'t need it anymore. "Btistaghni 3anno?" = can you do without it? Lebanese usage: "staghna 3an l-mosaade" = didn\'t need the help. "Ma fiyyi staghni 3anno" = I can\'t do without it. Lebanese social: refusing too quickly signals you don\'t value something. "staghniit" = she did without. Also figuratively: "staghna 3an l-nnas" = became independent from people (self-sufficient, possibly arrogant). A word about pride and independence.'
  },
];

const DVB_TIPS = [
  { title: 'Lebanese verb forms — past, present, future', body: 'Lebanese Arabic verbs have simpler conjugation than MSA. Past tense: "raaH" (he went), "rHit" (I went), "rHit" (you went — same!), "ra7na" (we went). Present: "biruuH" (he goes), "2ana raayi7" (I\'m going, using active participle). Future: "raa7 yiruu7" (he\'ll go) or "laa7a7" (about to go). Essential verb trio: "raaH" (went), "ija" (came), "rija3" (returned). These three verbs + a destination cover most Lebanese movement conversations. "Ween raayi7?" + "3am biji" + "lissa ma rji3" = where are you going? + I\'m coming + not back yet.' },
  { title: 'Lebanese communication verbs in daily use', body: '"7aka" (to speak/say) is the cornerstone verb for communication — used for telling stories, giving news, casual chat. "7ake ma7aki" = told stories to each other. "khabar" (to inform/tell): "khabbarna shu Sar" = tell us what happened. "naade" (to call out): "naadi 3al walad" = call the boy. "sa2al" (to ask) is essential: Lebanese culture values asking questions directly. "Shakar" (to thank) = cultural necessity. Lebanese communication style: expressive, detailed, often repeated. "7akiili" (talk to me) = strong social invitation.' },
  { title: 'Movement verbs and Lebanese geography', body: '"nzal" (to go down) is essential in Lebanon — the country is vertical, from mountain to coast. "Nzalna 3al-ba7ar" = we went down to the sea. "Til3 3al-jabal" (to go up to the mountain). "wSil" (arrived): "wSilna l-Beirut" = we arrived in Beirut. "laHa2" (to make it in time) matters because Lebanese timing is flexible. "2ilib" (to turn): critical for giving directions. Key phrase: "ilib 3al-yamiin 3ind l-dawwaare" = turn right at the roundabout. Lebanese navigation is landmark-based, so movement verbs + location names = getting around.' },
  { title: 'Emotional verbs in Lebanese social interaction', body: 'Lebanese emotional vocabulary is rich and expressive. "fara7" (to rejoice/be happy): "fara7 ktiir" = very happy. "zi3il" (to be upset): softer than angry — hurt feelings. "khaaF" (to fear): "khiftu minno" = I\'m scared of him. "ba7ab" (I love/like — present): "ba7abak" = I love you. Key emotional pattern: Lebanese express emotions openly and expect acknowledgment. "Ktiir nisi" = very forgetful. "Tdhakkar" (to remember): "tdhakkar l-zamaaan" = remember the old times (nostalgia). Lebanese conversational loop: ask about feelings, share feelings, validate feelings.' },
  { title: 'Problem-solving verbs — Lebanese resilience', body: '"Sala7" (to fix): ubiquitous in Lebanon — fixing things is a survival skill. "Sala7 l-kahraba" = fixed the electricity. "la2a" (to find): "la2a Hal" = found a solution. "DHiya3" (to lose): "DHiya3 l-miftaah" = lost the key. "baddal" (to swap/change): "baddal l-battariyye" = changed the battery. Lebanese problem-solving philosophy: "nHill" (we\'ll solve it) — optimistic approach. "HaTT b-baalo" (kept it in mind) = Lebanese mental note-taking. "zbaTha" (fixed it/sorted it) = the ultimate problem-solving verb. "la2a Halo" = he figured it out. Verbs of resourcefulness mirror Lebanese resilience culture.' },
];

const DVB_ABOUT = 'Master the high-frequency action verbs of Lebanese daily life — communication, movement, daily actions, emotions, and problem-solving. These 40 core verbs will unlock natural Lebanese conversation and help you express yourself in everyday situations.';
