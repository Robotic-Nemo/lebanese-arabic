// Run #78 — Response Pair Coach (NEW FEATURE)
// Lebanese conversations run on dozens of ritualized X→Y pairs. Say the wrong
// response and you flag yourself as non-native instantly. Learners default to
// "shukran" for everything, which sounds flat. This coach pairs each prompt
// with its formulaic response, organized by social category (greeting, meal,
// recovery, grooming, occasion, condolence…). Quiz picks a pair at random,
// shows the prompt, and offers 4 response options — the correct formulaic
// response + 3 plausible same-category distractors (so you must know the
// specific pair, not just "what sounds warm").

const RPC_CATEGORIES = [
  { code:'greet',    label:'🌅 Greetings',      short:'Greeting' },
  { code:'farewell', label:'👋 Farewells',      short:'Farewell' },
  { code:'meal',     label:'🍽️ Meals',         short:'Meal' },
  { code:'recover',  label:'🤒 Recovery/Safety',short:'Recovery' },
  { code:'groom',    label:'💇 Grooming/Bath',  short:'Grooming' },
  { code:'occasion', label:'🎉 Occasions',      short:'Occasion' },
  { code:'thanks',   label:'🙏 Thanks',         short:'Thanks' },
  { code:'compli',   label:'✨ Compliments',    short:'Compliment' },
  { code:'condol',   label:'🕊️ Condolences',    short:'Condolence' },
];

const RPC_PAIRS = [
  // --- greetings ---
  { id:'rpc01', cat:'greet', prompt_ar:'صباح الخير', prompt_tr:'SabaaH il-kheir', prompt_lit:'morning of goodness',
    response_ar:'صباح النور', response_tr:'SabaaH in-noor', response_lit:'morning of light',
    notes:'Universal morning greeting. Response elevates from "goodness" to "light" — classic Arabic one-upping politeness.' },
  { id:'rpc02', cat:'greet', prompt_ar:'مسا الخير', prompt_tr:'masa il-kheir', prompt_lit:'evening of goodness',
    response_ar:'مسا النور', response_tr:'masa in-noor', response_lit:'evening of light',
    notes:'Evening counterpart to SabaaH il-kheir. Same escalation pattern.' },
  { id:'rpc03', cat:'greet', prompt_ar:'مرحبا', prompt_tr:'marHaba', prompt_lit:'welcome/hello',
    response_ar:'مرحبتين', response_tr:'marHabteyn', response_lit:'two welcomes',
    notes:'Dual form doubles the greeting as warmth. Can also respond "ahla" or "marHaba" — but marHabteyn is the warmest classically-Lebanese response.' },
  { id:'rpc04', cat:'greet', prompt_ar:'كيفك؟', prompt_tr:'kifak? / kifik?', prompt_lit:'how-you?',
    response_ar:'الحمد لله، وانت؟', response_tr:'il7amdellah, w-inta/w-inti?', response_lit:'praise be to God, and you?',
    notes:'Even secular Lebanese use il7amdellah here. Omitting the "w-inta/inti?" back-ask reads as cold.' },
  { id:'rpc05', cat:'greet', prompt_ar:'شلونك؟', prompt_tr:'shloonak? / shloonik?', prompt_lit:'what-color-you?',
    response_ar:'تمام', response_tr:'tamaam', response_lit:'complete/fine',
    notes:'Informal alternative to kifak. Tamaam or mneeH ("good") both work; il7amdellah is the most traditionally-Lebanese answer.' },
  { id:'rpc06', cat:'greet', prompt_ar:'السلام عليكم', prompt_tr:'as-salaamu 3aleykum', prompt_lit:'peace be upon you',
    response_ar:'وعليكم السلام', response_tr:"wa-3aleykum as-salaam", response_lit:'and upon you peace',
    notes:'Religious/formal register. Also used cross-confessionally. Shortening the response to just "w-3aleykum" is rude.' },
  // --- farewells ---
  { id:'rpc07', cat:'farewell', prompt_ar:'مع السلامة', prompt_tr:'ma3 is-salaame', prompt_lit:'with safety',
    response_ar:'الله معك', response_tr:'allah ma3ak', response_lit:'God be with you',
    notes:'Said by the person STAYING to the person LEAVING. Leaver responds "allah ma3ak" or "allah ysalmak".' },
  { id:'rpc08', cat:'farewell', prompt_ar:'بخاطرك', prompt_tr:'bi-khaaTrak / bi-khaaTrik', prompt_lit:'by your leave',
    response_ar:'مع السلامة', response_tr:'ma3 is-salaame', response_lit:'with safety',
    notes:'Said by the person LEAVING when taking leave. Host/stayer responds with ma3 is-salaame.' },
  { id:'rpc09', cat:'farewell', prompt_ar:'تصبح على خير', prompt_tr:'tiSbaH 3ala kheir', prompt_lit:"may you wake up to goodness",
    response_ar:'وانت من أهله', response_tr:'w-inta/w-inti min ahlo', response_lit:'and you are of its people',
    notes:'"Good night" formal. Response means "may you be worthy of [goodness] too." Only the leaver says it first; stayers respond in kind.' },
  // --- meals ---
  { id:'rpc10', cat:'meal', prompt_ar:'صحتين', prompt_tr:'SaHHteyn', prompt_lit:'two healths',
    response_ar:'على قلبك', response_tr:'3ala 2albak / 3ala 2albik', response_lit:'upon your heart',
    notes:'Said to someone eating/drinking. Eater responds "3ala 2albak" ("[may it bring joy] to your heart"). "Sa77a" alone is a lighter version.' },
  { id:'rpc11', cat:'meal', prompt_ar:'يعطيك العافية', prompt_tr:'ya3Tik el-3aafyé', prompt_lit:'may He give you health',
    response_ar:'الله يعافيك', response_tr:'allah y3aafik', response_lit:'may God give YOU health',
    notes:'The single most common thank-response in Lebanese. Said to servers, workers, anyone who did something for you. Response mirrors the blessing back.' },
  { id:'rpc12', cat:'meal', prompt_ar:'سفرة دايمة', prompt_tr:'sufra daayme', prompt_lit:'may the spread always be laid',
    response_ar:'دامت ايامك', response_tr:'daamat ayyaamak', response_lit:"may your days last",
    notes:'Said after finishing a meal at someone\'s home. Host responds wishing the guest long life in return.' },
  // --- recovery / safety ---
  { id:'rpc13', cat:'recover', prompt_ar:'سلامتك', prompt_tr:'salaamtak / salaamtik', prompt_lit:'your safety',
    response_ar:'الله يسلمك', response_tr:'allah ysalmak', response_lit:'may God keep you safe',
    notes:'Said to someone recovering from illness, injury, or back from a trip. Mirrored response is the standard.' },
  { id:'rpc14', cat:'recover', prompt_ar:'حمد لله عالسلامة', prompt_tr:'il7amdellah 3a-s-salaame', prompt_lit:"praise be to God for safety",
    response_ar:'الله يسلمك', response_tr:'allah ysalmak', response_lit:'may God keep you safe',
    notes:'Specifically said to someone who just returned from a trip (or recovered from illness). Stronger than plain salaamtak.' },
  { id:'rpc15', cat:'recover', prompt_ar:'شو مالك؟', prompt_tr:'shu maalak?', prompt_lit:'what is wrong with you?',
    response_ar:'ولا شي', response_tr:'walla shi', response_lit:'not a thing',
    notes:'NOT really a formulaic pair — concern question. Response range: walla shi (deflecting), ta3baan ("tired/sick"), or explain. Distractor in quiz for the "shu" question-category.' },
  // --- grooming / bath ---
  { id:'rpc16', cat:'groom', prompt_ar:'نعيماً', prompt_tr:"nā3iman", prompt_lit:'blessed',
    response_ar:'الله ينعم عليك', response_tr:'allah yin3em 3aleik / 3aleiki', response_lit:'may God bless you',
    notes:'Said to someone who just had a haircut, shave, or shower. Response mirrors the blessing back onto the well-wisher.' },
  // --- occasions ---
  { id:'rpc17', cat:'occasion', prompt_ar:'مبروك', prompt_tr:'mabrouk', prompt_lit:'blessed (congratulations)',
    response_ar:'الله يبارك فيك', response_tr:'allah ybaarik feek / feeki', response_lit:'may God bless you',
    notes:'Birthday, marriage, baby, new house, promotion. Response reflects the blessing — NOT "shukran."' },
  { id:'rpc18', cat:'occasion', prompt_ar:'كل سنة وانت طيب', prompt_tr:'kil sané w-inta Tayyeb', prompt_lit:"every year and you well",
    response_ar:'وانت بخير', response_tr:'w-inta bi-kheir / w-inti bi-kheir', response_lit:'and you well',
    notes:'Birthday/Eid/Ramadan/New Year. Response wishes wellbeing back. Can also say "wayyaak" ("and with you") more briefly.' },
  { id:'rpc19', cat:'occasion', prompt_ar:'عقبالك', prompt_tr:"3o2baalak / 3o2baalik", prompt_lit:'may your turn follow',
    response_ar:'عقبال عندك', response_tr:'3o2baal 3andak / 3andik', response_lit:"may it (also) come your way",
    notes:'Said at a wedding/graduation/achievement to an unmarried/ungraduated guest wishing them the same soon. Response passes the wish back.' },
  // --- thanks ---
  { id:'rpc20', cat:'thanks', prompt_ar:'شكراً', prompt_tr:'shukran', prompt_lit:'thank you',
    response_ar:'العفو', response_tr:"il-3afwan", response_lit:'pardon/no thanks needed',
    notes:'Classic MSA-tier thanks. Response "il-3afwan" works but sounds formal; Lebanese natives prefer "walla shi" ("it\'s nothing") or "tikram" ("you honor [me]").' },
  { id:'rpc21', cat:'thanks', prompt_ar:'مرسي', prompt_tr:'mersi', prompt_lit:'thanks (French loan)',
    response_ar:'تكرم', response_tr:'tikram / tikrami', response_lit:'you honor [me]',
    notes:'French-loan casual thanks. "Tikram" back is warmer than "il-3afwan." Common in Beirut.' },
  // --- compliments ---
  { id:'rpc22', cat:'compli', prompt_ar:'تسلم ايدك', prompt_tr:'tislam idak / idik', prompt_lit:'may your hand be safe',
    response_ar:'يسلمك', response_tr:'ysalmak / ysalmik', response_lit:'may [God] keep you safe',
    notes:'Said to someone who made/fixed/cooked something well — literally blesses the hand that did it. Deflect-response mirrors the blessing.' },
  { id:'rpc23', cat:'compli', prompt_ar:'الله يعطيك العافية', prompt_tr:"allah ya3Tik el-3aafyé", prompt_lit:'may God give you health',
    response_ar:'الله يعافيك', response_tr:'allah y3aafik', response_lit:'may God give YOU health',
    notes:'Longer form of ya3Tik el-3aafyé with explicit allah. Same mirror response.' },
  // --- condolences ---
  { id:'rpc24', cat:'condol', prompt_ar:'البقية بحياتك', prompt_tr:'il-ba2iyyé bi-7ayaatak / 7ayaatik', prompt_lit:'the remainder in your life',
    response_ar:'حياتك الباقية', response_tr:'7ayaatak il-baa2yé / 7ayaatik il-baa2yé', response_lit:'your life is what remains',
    notes:'Condolence for a death. Response passes the long-life wish back. Do NOT respond "shukran."' },
  { id:'rpc25', cat:'condol', prompt_ar:'الله يرحمه', prompt_tr:'allah yer7amo', prompt_lit:'may God have mercy on him',
    response_ar:'ويرحم امواتك', response_tr:'w-yer7am amwaatak', response_lit:'and have mercy on your dead',
    notes:'Said when hearing of someone\'s death (of a third party). Response extends mercy to the listener\'s own deceased relatives.' },
];

const RPC_TIPS = [
  'Lebanese response pairs are ritualized — "shukran" is almost never the correct answer. The response is almost always a blessing mirrored back onto the speaker.',
  'The pattern "allah y[verb]ak/ik" (may God do X for you) shows up in half of all responses. Internalize it as a template.',
  'Gender-mark the -ak/-ik suffix based on who you\'re talking TO, not about. Male → -ak, female → -ik.',
  'If someone congratulates you with "mabrouk," respond "allah ybaarik feek/feeki" — NEVER shukran. Saying shukran to mabrouk sounds like you\'re dismissing the blessing.',
  'For a condolence, never say shukran. The correct response always passes the long-life or mercy wish back.',
  'SabaaH il-kheir → SabaaH in-noor follows a pattern: responder upgrades the first speaker\'s noun. "kheir" (goodness) → "noor" (light). Same shape in masa il-kheir / masa in-noor.',
  'When leaving someone\'s home after a meal, "sufra daayme" is warmer than just "shukran 3al akel." Hosts notice.',
];
