// R468 — Lebanese Greetings & Farewells coach (prefix: grts)
const GRTS_WORDS = [
  // morning/evening
  {ar:'صباح الخير', tr:'Saba7 el kheir', en:'good morning', cat:'greetings'},
  {ar:'صباح النور', tr:'Saba7 el nuur', en:'good morning (response: light)', cat:'greetings'},
  {ar:'مساء الخير', tr:'masa el kheir', en:'good evening', cat:'greetings'},
  {ar:'مساء النور', tr:'masa el nuur', en:'good evening (response)', cat:'greetings'},
  {ar:'تصبح على خير', tr:'tSba7 3a kheir', en:'good night (to someone staying)', cat:'greetings'},
  {ar:'وانت بخير', tr:'w inta bikheir', en:'and you in goodness (response)', cat:'greetings'},
  // hellos
  {ar:'مرحبا', tr:'mar7aba', en:'hello', cat:'greetings'},
  {ar:'مرحبتين', tr:'mar7abteen', en:'hello back (double hello)', cat:'greetings'},
  {ar:'أهلا', tr:'ahlan', en:'welcome / hello', cat:'greetings'},
  {ar:'أهلا وسهلا', tr:'ahlan w sahlan', en:'welcome warmly', cat:'greetings'},
  {ar:'أهلا فيك', tr:'ahlan fiik', en:'welcome to you (response)', cat:'greetings'},
  {ar:'كيفك؟', tr:'kiifak', en:'how are you? (m)', cat:'greetings'},
  {ar:'كيفك؟', tr:'kiifek', en:'how are you? (f)', cat:'greetings'},
  {ar:'منيح الحمد لله', tr:'mniH el 7amdillah', en:'good, praise God (reply to kiifak)', cat:'greetings'},
  {ar:'تمام', tr:'tamaam', en:'fine / all good', cat:'greetings'},
  {ar:'عالي عالي', tr:'3aale 3aale', en:'great / top-notch', cat:'greetings'},
  // how are you variants
  {ar:'شو في ما في؟', tr:'shu fii maa fii', en:'what\'s up? (lit. what\'s there, what isn\'t)', cat:'greetings'},
  {ar:'كل شي تمام؟', tr:'kell shi tamaam', en:'everything OK?', cat:'greetings'},
  {ar:'شو أخبارك؟', tr:'shu akhbaarak', en:'what\'s your news? / how are you?', cat:'greetings'},
  {ar:'معك مين؟', tr:'ma3ak miin', en:'who are you with? (phone opening)', cat:'greetings'},
  // farewells
  {ar:'مع السلامة', tr:'ma3 es-salaameh', en:'goodbye (go with safety)', cat:'farewells'},
  {ar:'الله معك', tr:'allah ma3ak', en:'God be with you (warm farewell)', cat:'farewells'},
  {ar:'شوفلك', tr:'shoofall', en:'see you (lit. I\'ll see you)', cat:'farewells'},
  {ar:'شوفنا', tr:'shoofna', en:'see you (lit. see us)', cat:'farewells'},
  {ar:'يلا باي', tr:'yalla bye', en:'ok bye (very common casual farewell)', cat:'farewells'},
  {ar:'بكرا إن شاء الله', tr:'bukra inshallah', en:'tomorrow God willing (non-committal farewell)', cat:'farewells'},
  {ar:'روح وارجع بالسلامة', tr:'ruu7 w irja3 bissalameh', en:'go and return safely', cat:'farewells'},
  {ar:'دير بالك على حالك', tr:'diir baalak 3a 7aalak', en:'take care of yourself', cat:'farewells'},
  // special / occasion greetings
  {ar:'مبروك', tr:'mabruuk', en:'congratulations', cat:'occasions'},
  {ar:'الله يبارك فيك', tr:'allah ybaarak fiik', en:'God bless you (response to mabruuk)', cat:'occasions'},
  {ar:'يعطيك العافية', tr:'ya3Tiik el 3aafye', en:'God give you health (to someone working)', cat:'occasions'},
  {ar:'الله يعافيك', tr:'allah y3aafiik', en:'God give you health (response)', cat:'occasions'},
  {ar:'كل عام وأنت بخير', tr:'kell 3aam w inta bikheir', en:'happy new year / holiday (lit. every year you\'re well)', cat:'occasions'},
  {ar:'عيد مبارك', tr:'3iid mubarak', en:'blessed holiday (Eid greeting)', cat:'occasions'},
  {ar:'صحتين', tr:'Sa7teyn', en:'to your health (before eating / toast)', cat:'occasions'},
  // phone / leaving home
  {ar:'الله ياخد بإيدك', tr:'allah yaakhod bi-iidak', en:'God hold your hand (protective farewell)', cat:'farewells'},
  {ar:'حياك الله', tr:'7ayyaak allah', en:'God give you life (warm welcome)', cat:'greetings'},
  {ar:'الله حيك', tr:'allah 7ayyak', en:'God give you life (response)', cat:'greetings'},
  {ar:'تفضل', tr:'tfaDDal', en:'please come in / help yourself', cat:'greetings'},
  {ar:'نورتنا', tr:'nawwartna', en:'you\'ve lit up our home (welcoming guest)', cat:'greetings'},
  {ar:'الله ينور عليك', tr:'allah ynawwer 3aleek', en:'God light you up (response)', cat:'greetings'},
];

const GRTS_DRILLS = [
  {
    q: 'Someone says "Saba7 el kheir" to you. What\'s the correct response?',
    opts: [
      'Saba7 el nuur',
      'masa el kheir',
      'ma3 es-salaameh',
      'mniH el 7amdillah'
    ],
    ans: 0,
    note: '"Saba7 el kheir" (good morning) → respond "Saba7 el nuur" (morning of light). Lebanese greetings come in pairs: kheer → nuur, salaameh → salaameh.'
  },
  {
    q: 'What does "shu fii maa fii?" literally mean and how is it used?',
    opts: [
      'What\'s there, what isn\'t — casual "what\'s up?"',
      'What do you have and don\'t have — asking for inventory',
      'What happened what didn\'t — asking about news',
      'Where are you, where aren\'t you — asking location'
    ],
    ans: 0,
    note: '"Shu fii maa fii?" = lit. "what\'s there, what isn\'t?" — casual greeting equivalent to "what\'s up?" or "what\'s going on?". Very Lebanese in its playful construction.'
  },
  {
    q: 'How do you properly welcome a guest into your home in Lebanese?',
    opts: [
      'nawwartna (you\'ve lit up our home)',
      'yalla bye',
      'ma3 es-salaameh',
      'kell 3aam w inta bikheir'
    ],
    ans: 0,
    note: '"Nawwartna" (you\'ve lit up/honored our home) is the warm Lebanese way to welcome a guest. Guest responds: "allah ynawwer 3aleek" (God light you up).'
  },
  {
    q: 'What is the most common casual goodbye in Lebanese?',
    opts: [
      'yalla bye',
      'tSba7 3a kheir',
      'ma3 es-salaameh',
      'allah ma3ak'
    ],
    ans: 0,
    note: '"Yalla bye" — the quintessential Lebanese farewell, mixing Arabic "yalla" (let\'s go / ok) with English "bye". Heard constantly in Beirut. Don\'t overthink it!'
  },
  {
    q: 'You see someone working hard at their job. What do you say to acknowledge them?',
    opts: [
      'ya3Tiik el 3aafye (God give you health/strength)',
      'mabruuk (congratulations)',
      'Sa7teyn (to your health)',
      'ahlan fiik (welcome to you)'
    ],
    ans: 0,
    note: '"Ya3Tiik el 3aafye" is said to acknowledge someone\'s hard work — a waiter, a construction worker, a colleague. Response: "allah y3aafiik". Very common and appreciated.'
  },
  {
    q: 'What does "mar7abteen" mean and why do Lebanese say it?',
    opts: [
      'Double hello — a warm way to return a greeting',
      'Two welcomes — greeting two people at once',
      'Welcome again — used when someone returns',
      'Big hello — a very enthusiastic greeting'
    ],
    ans: 0,
    note: '"Mar7abteen" = two mar7abas. When someone says "mar7aba", responding with "mar7abteen" doubles the warmth. You can even say "mar7aba mitl el asmar" (hello dark like the night — poetic).'
  },
  {
    q: 'What is "kell 3aam w inta bikheir" used for?',
    opts: [
      'Universal holiday/anniversary greeting — every year may you be well',
      'Good morning — said every day',
      'Happy birthday specifically',
      'Welcome back after a trip'
    ],
    ans: 0,
    note: '"Kell 3aam w inta bikheir" = every year and may you be well. Used for birthdays, Eid, Christmas, New Year, Independence Day — any annual occasion. Very versatile and warm.'
  },
  {
    q: 'How do you say goodbye to someone who is traveling?',
    opts: [
      'ruu7 w irja3 bissalameh',
      'tSba7 3a kheir',
      'bukra inshallah',
      'diir baalak 3a 7aalak'
    ],
    ans: 0,
    note: '"Ruu7 w irja3 bissalameh" = go and return safely. Said when someone is leaving for a trip. "Bissalameh" (in safety) appears in many Lebanese farewell phrases.'
  },
  {
    q: 'What does "tfaDDal" mean?',
    opts: [
      'Please / go ahead / help yourself / come in',
      'Thank you very much',
      'You\'re welcome (response to thanks)',
      'Excuse me (to pass)'
    ],
    ans: 0,
    note: '"TfaDDal" (m) / "tfaDDali" (f) = please do / go ahead / come in / help yourself. Extremely versatile: gesture someone through a door, offer food, invite someone to sit. Lebanese use it constantly.'
  },
  {
    q: 'What is the correct response when someone says "mabruuk" to you?',
    opts: [
      'allah ybaarak fiik',
      'mniH el 7amdillah',
      'ahlan fiik',
      'Sa7teyn'
    ],
    ans: 0,
    note: '"Mabruuk" (congratulations) → respond "allah ybaarak fiik" (God bless you). Both words share the root "b-r-k" (blessing). Always respond — leaving it hanging is awkward.'
  },
];

const GRTS_TIPS = [
  {
    title: 'Greetings come in pairs',
    body: 'Lebanese greetings are call-and-response. "Saba7 el kheir" → "Saba7 el nuur". "Mar7aba" → "mar7abteen". "Ahlan" → "ahlan fiik". "Ya3Tiik el 3aafye" → "allah y3aafiik". Not responding is considered rude — always have your response ready.'
  },
  {
    title: '"Inshallah" as a farewell tool',
    body: '"Bukra inshallah" (tomorrow God willing) is the classic Lebanese non-committal farewell. It can mean genuine hope to see you tomorrow, or polite deflection. Context is everything. As a learner, use "yalla bye" when you need a clean exit!'
  },
  {
    title: 'God-phrases are sincere, not religious',
    body: '"Allah ma3ak", "ya3Tiik el 3aafye", "allah ybaarak fiik" — these are sincere social expressions used by Muslims and Christians alike. Lebanon\'s multi-faith society shares these phrases across religions. Don\'t avoid them thinking they\'re exclusively Islamic.'
  },
  {
    title: 'Warmth escalation',
    body: 'Lebanese greetings escalate in warmth: "mar7aba" → "mar7abteen" → "nawwartna" → "7ayyaak allah" → "allah yahfazak" (God protect you). The more you escalate, the more welcome the guest feels. Lebanese hosts will pile on the welcomes.'
  },
  {
    title: 'Phone greeting protocol',
    body: 'On the phone, Lebanese typically open with "allo? — miin ma3i?" (hello? who\'s with me?) or "allo — ma3ak [name]" (hello, [name] here). Closing: "yalla bye" or "ma3 es-salaameh, tSba7 3a kheir" (if evening). Multiple "yalla bye"s are normal before actually hanging up.'
  },
];

const GRTS_ABOUT = `
<p><strong>👋 Lebanese Greetings & Farewells</strong></p>
<p>Mastering Lebanese greetings is the fastest way to win hearts. Lebanese people are intensely social, and greeting rituals are taken seriously — they signal respect, warmth, and belonging.</p>
<p><strong>The greeting cascade:</strong> When entering a room or joining a group, you greet <em>everyone</em> individually — handshakes, kisses on the cheek (usually 3 alternating), and a personal word with each person. Skipping someone is noticed and can cause offense.</p>
<p><strong>Kissing protocol:</strong> Men and women kiss cheeks 2-3 times alternating sides. Men kiss men if they're close friends or family. Business contexts may stick to handshakes. The cheek-kiss starts right cheek first.</p>
<p><strong>Response culture:</strong> Never leave a greeting unanswered. "Mabruuk" must get "allah ybaarak fiik". "Kiifak" must get at least "mniH". Silence is socially awkward and reads as coldness or upset.</p>
`;
