// R444 — Lebanese Slang & Internet Culture (slc)
const SLC_WORDS = [
  // classic Lebanese slang
  { ar: 'يلا', tr: 'yalla', en: 'come on / let\'s go / ok / goodbye (ultra-versatile)', cat: 'classic' },
  { ar: 'شو بدك', tr: 'shu badak', en: 'what do you want? (impatient)', cat: 'classic' },
  { ar: 'كيفك', tr: 'kifak', en: 'how are you? (m)', cat: 'classic' },
  { ar: 'كيفك انتي', tr: 'kifek', en: 'how are you? (f)', cat: 'classic' },
  { ar: 'منيح', tr: 'mniih', en: 'good / fine', cat: 'classic' },
  { ar: 'هيك هيك', tr: 'heek heek', en: 'so-so / whatever', cat: 'classic' },
  { ar: 'وين رايح', tr: 'wein raaye7', en: 'where are you going? (nosy question)', cat: 'classic' },
  { ar: 'ما عندي خلق', tr: 'ma 3andi khala2', en: 'I have no energy / I can\'t be bothered', cat: 'classic' },
  { ar: 'لحالي', tr: 'la7aali', en: 'alone / by myself', cat: 'classic' },
  { ar: 'ولك', tr: 'wlak', en: 'hey! / dude (male address, mild exclamation)', cat: 'classic' },
  // WhatsApp & texting culture
  { ar: 'خبرني', tr: 'khabberni', en: 'tell me / keep me posted', cat: 'digital' },
  { ar: 'وينك', tr: 'wenak', en: 'where are you? (m) / how are you? (text)', cat: 'digital' },
  { ar: 'شو في', tr: 'shu fi', en: 'what\'s up? / what\'s going on?', cat: 'digital' },
  { ar: 'ماشي', tr: 'maashi', en: 'ok / fine / going (text confirmation)', cat: 'digital' },
  { ar: 'أوكيه', tr: 'okeh', en: 'ok (Lebanese spelling/pronunciation)', cat: 'digital' },
  { ar: 'يسلمو', tr: 'yislamu', en: 'thank you / bless you (short for yislamu idayk)', cat: 'digital' },
  { ar: 'حبيبي', tr: '7abibi', en: 'my dear / babe / honey (m, super casual)', cat: 'digital' },
  { ar: 'حبيبتي', tr: '7abiibti', en: 'my dear / honey (f)', cat: 'digital' },
  { ar: 'يعطيك العافية', tr: 'ya3Tiik el 3aafe', en: 'God give you health (thank you for hard work)', cat: 'digital' },
  { ar: 'بحياتك', tr: 'b7ayaatak', en: 'on your life / please! (emphatic plea)', cat: 'digital' },
  // Lebanese youth slang
  { ar: 'تعتير', tr: 'ta3tiir', en: 'being broke / in a bad situation', cat: 'youth' },
  { ar: 'معتّر', tr: 'mu3attar', en: 'broke / in a tough spot', cat: 'youth' },
  { ar: 'ساهل', tr: 'saahil', en: 'easy / chill / no problem', cat: 'youth' },
  { ar: 'أنا ميت', tr: 'ana mayyit', en: 'I\'m dead (from laughing / bored / tired) — Lebanese "I\'m dying"', cat: 'youth' },
  { ar: 'كتمة', tr: 'katme', en: 'a vibe / atmosphere (lit. pressing down) — great party vibe', cat: 'youth' },
  { ar: 'شو صاير', tr: 'shu Saayir', en: 'what\'s happening? / what\'s going on?', cat: 'youth' },
  { ar: 'رح يتقتل', tr: 'ra7 yit2attal', en: 'going to get roasted / destroyed (playful threat)', cat: 'youth' },
  { ar: 'بعمل معك شي', tr: 'ba3mil ma3ak shi', en: 'I\'ll do something to you (playful threat)', cat: 'youth' },
  { ar: 'ما خدت بالي', tr: 'ma khadt baali', en: 'I didn\'t notice / I wasn\'t paying attention', cat: 'youth' },
  { ar: 'لقطة', tr: 'la2Ta', en: 'a catch / a find / a great deal or person', cat: 'youth' },
  // expressions of frustration
  { ar: 'يخرب بيتو', tr: 'ykhrab bayto', en: 'may his house be ruined (mild curse/frustration)', cat: 'frustration' },
  { ar: 'بدي موت', tr: 'biddi muut', en: 'I want to die (from embarrassment / frustration)', cat: 'frustration' },
  { ar: 'شو هالسيرة', tr: 'shu hal siyra', en: 'what is this situation? (exasperation)', cat: 'frustration' },
  { ar: 'يلعن دينو', tr: 'yil3an diino', en: 'damn it (lit. curse his religion — euphemistic frustration)', cat: 'frustration' },
  { ar: 'ما عادت', tr: 'ma 3aadat', en: 'I can\'t take it anymore / done with it', cat: 'frustration' },
  { ar: 'هيدا الشي', tr: 'hayda el shi', en: 'that thing / you know the thing (vague reference)', cat: 'frustration' },
  // affectionate/social
  { ar: 'روحي', tr: 'ruu7i', en: 'my soul (term of extreme endearment)', cat: 'social' },
  { ar: 'عمري', tr: '3omri', en: 'my life / my age (extreme endearment)', cat: 'social' },
  { ar: 'عيني', tr: '3ayni', en: 'my eye (term of endearment)', cat: 'social' },
  { ar: 'قلبي', tr: '2albi', en: 'my heart (endearment)', cat: 'social' },
  { ar: 'بدها وقت', tr: 'badda wa2it', en: 'it takes time / give it time', cat: 'social' },
];

const SLC_DRILLS = [
  {
    q: 'What does "yalla" (يلا) mean and what makes it unique?',
    opts: ['"come here" only', '"come on / let\'s go / ok / goodbye" — the most versatile Lebanese word', '"hurry up" only', '"see you later" only'],
    correct: 1,
    note: '"Yalla" is the Swiss Army knife of Lebanese Arabic. It means: let\'s go, come on, ok, see you later, hurry up, yes fine, goodbye, get moving. Tone and context determine meaning. "Yalla bye" became Lebanon\'s most iconic phrase — immortalized in songs. "Yalla yalla" (x2) means extra urgency. Even Lebanese who emigrate decades ago use "yalla" constantly — it\'s the most untranslatable yet universally understood Lebanese word.'
  },
  {
    q: 'What does "ma 3andi khala2" (ما عندي خلق) mean?',
    opts: ['I have no idea', 'I have no energy / I can\'t be bothered to do something', 'I have no money', 'I don\'t understand'],
    correct: 1,
    note: '"Ma 3andi khala2" (lit. I have no creation/energy) is the Lebanese expression for being emotionally or physically drained with no desire to do something. "Khala2" literally means "creation" but colloquially means energy, mood, or will. "Ma 3andi khala2 a7ki ma3o" = I can\'t be bothered to talk to him. It\'s stronger than lazy — it\'s a full state of depletion. Very common in crisis Lebanon.'
  },
  {
    q: 'What is "ta3tiir" (تعتير) and when do Lebanese use it?',
    opts: ['being late to an event', 'being broke / in a difficult financial or life situation', 'being stuck in traffic', 'being bored at work'],
    correct: 1,
    note: '"Ta3tiir" (being broke/struggling) came from "mu3attar" (adj: stuck, broken). "Shu ta3tiirak?" = how broke are you? It expanded beyond money to describe any situation of difficulty or misfortune. "Hayda ta3tiiro" = he\'s having bad luck/struggling. During Lebanon\'s economic crisis, "ta3tiir" became almost universal — describing an entire generation\'s situation with dark humor and resignation.'
  },
  {
    q: 'What does "katme" (كتمة) mean in Lebanese youth slang?',
    opts: ['silence / keeping a secret', 'a great vibe / electric atmosphere (especially at a party)', 'feeling suffocated', 'a type of Lebanese dance'],
    correct: 1,
    note: '"Katme" (lit. pressing/smothering) evolved in Lebanese youth culture to describe an intense, electric atmosphere. "El katme kaanet 3aali" = the vibe was insane. At a party: "fi katme" = it\'s packed and pumping. It\'s the physical sensation of a crowd pressing in — repurposed as slang for amazing energy. Lebanese nightclubs (Beirut was famous for its nightlife) gave birth to much of this vocabulary.'
  },
  {
    q: 'What is "7abibi / 7abiibti" (حبيبي/حبيبتي) in casual Lebanese usage?',
    opts: ['a romantic partner only', 'honey/darling — used casually for anyone: friends, strangers, customers', 'only used by parents to children', 'a formal greeting'],
    correct: 1,
    note: '"7abibi" (my beloved, m) / "7abiibti" (f) is one of the most over-used Lebanese terms of address. Lebanese use it casually with friends, family, strangers, shopkeepers, anyone. It signals warmth but not necessarily romance. "7abibi, shu badak?" (my friend, what do you want?) from a shopkeeper. "7abibi, ma tu2khurna!" (dear, don\'t be late!) from a parent. Tourists are often surprised by how affectionate Lebanese speech sounds.'
  },
  {
    q: 'What does "b7ayaatak" (بحياتك) express?',
    opts: ['on your life — an emphatic plea ("please, I beg you")', 'I swear by your life', 'may you live long', 'in your lifetime (time reference)'],
    correct: 0,
    note: '"B7ayaatak" (lit. on your life / by your life) is an emphatic plea: "please, I beg you!" It\'s one step above a normal "please." "B7ayaatak khabberni" = please, please tell me. It can also express desperation: "b7ayaatak mish rou7" = please don\'t go. Lebanese use oaths involving life frequently — "wallah" (by God), "b7ayaatak" (by your life), "b7ayaat immi" (by my mother\'s life). These are intense emotional requests, not threats.'
  },
  {
    q: 'What does "wenak" (وينك) mean in a text message?',
    opts: ['where did you go? (concern)', 'where are you? / how are you? — a check-in combining location and welfare', 'when are you coming?', 'why aren\'t you answering?'],
    correct: 1,
    note: '"Wenak" (lit. where are you? — m.) evolved in Lebanese texting culture to mean both "where are you?" and "how are you?" / "are you ok?" It\'s the first message sent after not hearing from someone. "Wenak? 3am bi7kuu 3anik" = where are you? people are asking about you. In crisis situations, "wenak??" is pure worry. The Lebanese diaspora uses it constantly to check on family in Lebanon: after explosions, blackouts, protests.'
  },
  {
    q: 'What is "la2Ta" (لقطة) in Lebanese slang?',
    opts: ['a screenshot (digital)', 'a catch / a great find / something or someone who is a great deal', 'a fall / stumble', 'a photograph'],
    correct: 1,
    note: '"La2Ta" (lit. a catch / something grabbed) became slang for a great deal or a great person. "Hiyye la2Ta" = she\'s a catch. "Hayda l ma7al la2Ta" = this shop is a gem. In markets: "la2it la2Ta" = I found a bargain. It comes from "la2aT" (to catch/grab). The internet age extended it to content: "hayda post la2Ta" = this post is a gem. Lebanese bargain culture (especially post-collapse) made "la2Ta" a survival vocabulary word.'
  },
  {
    q: 'What does "wlak" (ولك) signal in Lebanese speech?',
    opts: ['anger / about to fight', 'a casual male-to-male address meaning "hey man / dude" — not necessarily rude', 'a formal greeting', 'disrespect always'],
    correct: 1,
    note: '"Wlak" (sometimes "yalak" in South Lebanon) is a male-addressed casual exclamation meaning "hey man" or "dude." Despite sounding rough, it\'s affectionate between friends. "Wlak shu fi?!" = hey man, what\'s going on?! Tone determines meaning completely. Between friends it\'s warm; to a stranger it can be rude. The female equivalent is "ya bint" or nothing — women don\'t typically use "wlak" toward men.'
  },
  {
    q: 'What does "yil3an diino" (يلعن دينو) express and how is it used?',
    opts: ['a serious religious insult (avoid always)', 'mild frustration / damn it — used commonly without deep religious meaning', 'a blessing / prayer', 'extreme anger requiring a response'],
    correct: 1,
    note: '"Yil3an diino" (lit. curse his religion) is used as mild frustration in Lebanese dialect — similar to "damn it" or "son of a..." It\'s directed at objects, situations, or third parties: "yil3an diino hal traffic" = damn this traffic. The literal meaning is much stronger than the actual usage, which is usually casual frustration. Many Lebanese use it without thinking of its literal meaning. Context: between friends, to a broken object, about a difficult situation.'
  },
];

const SLC_TIPS = [
  {
    title: '🗣️ The Art of Lebanese Small Talk',
    body: 'Lebanese small talk is an art form. Every conversation begins with layered greetings: "kifak / kifek" → "mniih, shu fi?" → "3al barakeh" (praise be / things are fine) → "Allah ybaarik fiik" (God bless you). Then family questions: "shu 3am ya3mil l ahl?" (how\'s the family?). Lebanese consider it rude to skip directly to business. Even a quick phone call starts with 3-4 minutes of pleasantries. Understanding this rhythm is essential — rushing a Lebanese to "the point" is considered cold or even offensive.'
  },
  {
    title: '📱 Lebanese WhatsApp Culture',
    body: 'Lebanon runs on WhatsApp. Family groups, building groups, neighborhood groups, work groups — all on WhatsApp. Key behaviors: voice messages are normal (texting takes too long), leaving someone on "read" (seen) without responding is a social crime, group stickers and GIFs are serious communication tools, "yislamu" or "yis3ad alli sha3rak" (may your hair be blessed — joking praise) are common reactions. News spreads via WhatsApp before any media outlet. During crises (explosions, power cuts, fuel shortages), WhatsApp groups are the real-time information network.'
  },
  {
    title: '😄 Lebanese Humor & Dark Comedy',
    body: 'Lebanese humor is legendary — dark, self-deprecating, politically sharp, and often directed at their own misfortune. "Mish 3aarfin kif bas mn3iish" (we don\'t know how but we survive) delivered deadpan. Memes about electricity schedules, generator bills, the lira collapse, and politicians circulate constantly. "Hayda l balad" (this country) said with a sigh contains multitudes. Lebanese comedians became internet famous during the crisis. The ability to laugh at catastrophe is both coping mechanism and cultural identity. If a Lebanese person makes a dark joke about their country, it\'s affection and grief mixed.'
  },
  {
    title: '❤️ Terms of Endearment (Seriously Overused)',
    body: 'Lebanese pile on endearments in conversation to a degree that surprises outsiders: "7abibi" (my love), "ruu7i" (my soul), "3omri" (my life), "2albi" (my heart), "3ayni" (my eye), "nuur 3ayni" (light of my eye). These can be used with strangers. A shopkeeper calling a customer "7abibi" is normal. A grandmother calls everyone "ruu7i." Even a fight can include "7abibi, inta majnuun?!" (my dear, are you crazy?!). This does NOT mean romantic interest. It\'s warmth and social lubricant. Reciprocating with endearments signals comfort and belonging.'
  },
  {
    title: '🌐 Lebanese Internet Slang Evolution',
    body: 'Lebanese youth blended Arabic, French, and English in internet culture. Key patterns: "shu bada3" (what the f*ck, lit. how creative!), "zalameh" (dude / man), "shaklak" (looks like, used constantly: "shaklak maa ruh tiji" = looks like you\'re not coming), "baddi khunik" (I want to strangle you — affectionate), "7araam 3aleik" (shame on you — also affectionate scolding). Influencers mixing Arabizi (Arabic in Latin letters) created new hybrid slang. The Beirut explosion and crisis created new terms: "intifaaDa" (uprising, 2019 protests) and "sha3ab 3ayish" (people are surviving) entered everyday speech.'
  },
];

const SLC_ABOUT = 'Lebanese slang is one of the most vibrant, evolving, and internationally influential Arabic dialects. Shaped by Arabic, French, English, Syriac, and decades of diaspora, it produced expressions that spread across the Arab world — from "yalla" to "7abibi." WhatsApp culture, political satire, crisis humor, and a deeply social people created a language that\'s warm, sharp, and endlessly adaptable. Understanding Lebanese slang unlocks not just communication but the emotional world of Lebanese people: their humor in hardship, their intense affection, their dark irony, and their refusal to stop living fully despite everything.';
