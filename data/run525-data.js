// R525 — Lebanese Teasing, Banter & Insults (prefix: bnt)
const BNT_WORDS = [
  // calling someone stupid/dumb
  {ar:'حمار', tr:'7maar', en:'"Donkey" — the classic Lebanese insult for stupidity. Said to friends constantly, rarely hostile.', cat:'stupid'},
  {ar:'غبي', tr:'ghabi', en:'"Stupid/dumb" — very common, moderate severity. Can be affectionate between close friends.', cat:'stupid'},
  {ar:'أحبل', tr:'2a7bal', en:'"Total idiot" — stronger than ghabi. Heard constantly in Lebanese traffic and comedy.', cat:'stupid'},
  {ar:'بلبص', tr:'balbaS', en:'"Idiot/airhead" — uniquely Lebanese slang, implies clueless/oblivious rather than malicious.', cat:'stupid'},
  {ar:'ما عندو عقل', tr:'ma 3ando 3a2l', en:'"He has no mind/sense" — describing someone who made a dumb decision. Not direct to their face.', cat:'stupid'},
  {ar:'ما بعرف شو بدّو', tr:'ma b3arif shu biddo', en:'"I don\'t know what he wants" — exasperated dismissal, implies the person is confused/unreasonable.', cat:'stupid'},
  // teasing insults (affectionate range)
  {ar:'ما فيك', tr:'ma fiik', en:'"You can\'t / you don\'t have what it takes" — teasing doubt in someone\'s ability. Also a genuine challenge.', cat:'tease'},
  {ar:'عيب عليك', tr:'3ayb 3aleek', en:'"Shame on you" — scolding but often said in mock-outrage. Severity depends heavily on tone.', cat:'tease'},
  {ar:'ما عندك حيا', tr:'ma 3andak 7aya', en:'"You have no shame" — said when someone is being shameless/cheeky. Often playful, sometimes serious.', cat:'tease'},
  {ar:'تقيل', tr:'taqiil', en:'"Heavy/annoying" — calling someone a drag, boring, too much. "Shu taqiil!" = "you\'re so annoying!"', cat:'tease'},
  {ar:'مزعّج', tr:'mza33ij', en:'"Annoying/disturbing" — milder than taqiil. Said when someone is pestering you.', cat:'tease'},
  {ar:'إنت مش طبيعي', tr:'inta mish Tabia3i', en:'"You\'re not normal" — Lebanese way of saying someone is wild/crazy in a usually affectionate tone.', cat:'tease'},
  // dismissals
  {ar:'روح عن وجهي', tr:'ruu7 3an wajhi', en:'"Get away from my face" — strong dismissal. Can be playful or genuinely angry depending on tone.', cat:'dismiss'},
  {ar:'خلّيني', tr:'khallini', en:'"Leave me alone / let me be" — frustrated dismissal, milder than ruu7 3an wajhi.', cat:'dismiss'},
  {ar:'ما بهمني', tr:'ma bihimni', en:'"I don\'t care / it doesn\'t concern me" — dismissal implying the person or their opinion is irrelevant.', cat:'dismiss'},
  {ar:'سكّت', tr:'sakkit', en:'"Shut up" (imperative) — very direct. Used in arguments but also jokingly when someone says something ridiculous.', cat:'dismiss'},
  {ar:'بكفّي', tr:'bikaffi', en:'"That\'s enough / stop it" — telling someone to cut it out. Less harsh than sakkit.', cat:'dismiss'},
  // affectionate mockery
  {ar:'يا كذّاب', tr:'ya kaDDaab', en:'"You liar!" — said in shock/disbelief at good news or a story. NOT accusing them of lying, just surprise.', cat:'affection'},
  {ar:'حبيب عمري', tr:'7abiib 3omri', en:'"Love of my life" — used between close male friends too, Lebanese warmth/sarcasm mixed together.', cat:'affection'},
  {ar:'يا كلب', tr:'ya kalb', en:'"You dog!" — between very close male friends, often said with laughter. Never use with strangers.', cat:'affection'},
  {ar:'يا حيوان', tr:'ya 7ayawaan', en:'"You animal!" — affectionate among male friends, expressing disbelief at something impressive or outrageous.', cat:'affection'},
  {ar:'إنت مجنون', tr:'inta majnuun', en:'"You\'re crazy!" — often a compliment in disguise. Said to someone who did something daring/impressive.', cat:'affection'},
  // reactions/exclamations
  {ar:'تفه', tr:'tfeh', en:'"Ugh/yuck/pfft" — disgust or dismissal. Spitting sound. Said to bad food, bad situations, bad people.', cat:'react'},
  {ar:'يي', tr:'yii', en:'"Eww/oh!" — disgust or surprise. Specifically Lebanese/Levantine. For something gross or shocking.', cat:'react'},
  {ar:'هيدا إشي', tr:'hayda ishi', en:'"This thing!" — exasperated reference to a person or situation being ridiculous.', cat:'react'},
  {ar:'شو هالشغلة', tr:'shu hal-shughle', en:'"What is this thing?!" — Lebanese expression of disbelief/disgust at a situation or person\'s behavior.', cat:'react'},
  {ar:'الله يرضى عليك', tr:'alla yirDa 3aleek', en:'"May God be pleased with you" — used sarcastically to say "come on, give me a break." Tone makes it.', cat:'react'},
  // comeback / competition
  {ar:'مين إنت؟', tr:'miin inta', en:'"Who are you?!" — challenge implying the person is nobody, has no standing to comment.', cat:'comeback'},
  {ar:'شو دخلك', tr:'shu dakhlak', en:'"What\'s it to you? / None of your business" — sharp comeback to someone interfering.', cat:'comeback'},
  {ar:'إنت أحسن منّي؟', tr:'inta a7san minni', en:'"You\'re better than me?" — rhetorical comeback challenging someone who judges you.', cat:'comeback'},
  {ar:'هيدا إنت', tr:'hayda inta', en:'"That\'s YOU" — pointing the finger back, Lebanese version of "look who\'s talking."', cat:'comeback'},
  // appearance/character jabs
  {ar:'وجهك زاكّك', tr:'wajhak zaakkak', en:'"Your face saved you" — you got lucky, implies someone succeeded without deserving it.', cat:'jab'},
  {ar:'ما إله خلقة', tr:'ma 2ilo khil2a', en:'"Has no upbringing/manners" — criticizing someone\'s breeding/behavior. A serious insult in Lebanese culture.', cat:'jab'},
  {ar:'مسكّر عليه', tr:'masakkir 3alee', en:'"He\'s locked/sealed" — said of a stubborn person who won\'t change their mind no matter what.', cat:'jab'},
  {ar:'بيحكي متل الببغا', tr:'bi7ki mitl el-babagha', en:'"He talks like a parrot" — repeats things without understanding, has no original thought.', cat:'jab'},
];

const BNT_DRILLS = [
  {
    q: 'Your Lebanese friend just told an unbelievably good story. You\'re shocked and amused. What do you say?',
    opts: ['sakkit', 'ya kaDDaab!', 'ma 3andak 7aya', 'ruu7 3an wajhi'],
    ans: 1,
    exp: '"ya kaDDaab!" = "You liar!" — but here it means "no way, I can\'t believe it!" It\'s an expression of shocked disbelief/delight, NOT an actual accusation. Lebanese people say this all the time for good news.'
  },
  {
    q: 'Someone cuts you off in Beirut traffic and drives badly. What do Lebanese drivers shout?',
    opts: ['7abiib 3omri', '2a7bal!', 'inta mish Tabia3i', 'ya kaDDaab'],
    ans: 1,
    exp: '"2a7bal!" = "Total idiot!" — THE classic Lebanese traffic insult. More intense than "ghabi." You\'ll hear this constantly on Lebanese roads. Often accompanied by honking.'
  },
  {
    q: 'Your friend is being overly persistent and annoying about something minor. What do you say?',
    opts: ['7maar', 'bikaffi!', 'wajhak zaakkak', 'miin inta'],
    ans: 1,
    exp: '"bikaffi!" = "That\'s enough! Stop it!" — tells someone to cut it out. Less harsh than "sakkit," more gentle than "ruu7 3an wajhi." The right response to persistent but non-serious annoyance.'
  },
  {
    q: 'You see something truly disgusting or gross. What\'s the Lebanese reaction?',
    opts: ['7abiib 3omri', 'yii!', 'inta majnuun', 'ya 7ayawaan'],
    ans: 1,
    exp: '"yii!" — specifically Lebanese/Levantine sound of disgust. Like "eww" but with a longer, more drawn-out vowel. Also used for shock. "tfeh" is the stronger, spitting-sound version for real disgust.'
  },
  {
    q: 'Your Lebanese mate did something daring and impressive. You respond "inta majnuun!" What does this mean?',
    opts: ['You\'re clinically insane and need help', 'That\'s crazy impressive / you\'re wild (compliment)', 'Get away from me', 'You\'re not allowed to do that'],
    ans: 1,
    exp: '"inta majnuun!" = "You\'re crazy!" — often a backhanded compliment in Lebanese. Said to someone who did something bold, impressive, or outrageous. Tone is admiration, not concern.'
  },
  {
    q: 'Someone interferes in something that\'s none of their business. The sharp Lebanese comeback is:',
    opts: ['7maar', 'shu dakhlak', 'balbaS', 'bikaffi'],
    ans: 1,
    exp: '"shu dakhlak" = "What\'s it to you? None of your business." The sharpest way to tell someone they have no standing to comment or interfere. Very direct — use with caution.'
  },
  {
    q: 'Your friend did something really well but they\'re known for being lazy. You want to say they got lucky:',
    opts: ['ya kaDDaab', 'wajhak zaakkak', 'ma fiik', '2a7bal'],
    ans: 1,
    exp: '"wajhak zaakkak" = "your face saved you" — Lebanese expression for when someone succeeds through luck or charm rather than merit. It\'s a backhanded compliment implying they didn\'t deserve it.'
  },
  {
    q: 'You\'re asking someone to stop pestering you, moderately frustrated:',
    opts: ['ruu7 3an wajhi', 'khallini', 'sakkit', 'shu dakhlak'],
    ans: 1,
    exp: '"khallini" = "Leave me alone." The mildest of the dismissals. "ruu7 3an wajhi" is stronger (get away from my face), "sakkit" is harsh (shut up). "khallini" is the polite/mild version.'
  },
  {
    q: 'Someone from Lebanese friend group says something self-righteous that applies to them too. You reply:',
    opts: ['ma 3ando 3a2l', 'hayda inta', 'taqiil', 'ya kalb'],
    ans: 1,
    exp: '"hayda inta" = "That\'s YOU" — the Lebanese version of "look who\'s talking." Points the judgment back at the speaker. Very satisfying comeback in Lebanese verbal sparring.'
  },
  {
    q: 'What\'s the key to using "ya kalb" (you dog) correctly?',
    opts: ['Only use it when you\'re very angry', 'Only use it with very close male friends in a joking context', 'Use it to compliment someone\'s loyalty', 'It\'s polite and can be used with anyone'],
    ans: 1,
    exp: '"ya kalb" is ONLY for very close male friends in a joking/laughing context. Used with strangers or in a serious tone, it\'s deeply offensive. Many Lebanese expressions exist on a context spectrum — tone and relationship determine everything.'
  },
];

const BNT_TIPS = [
  {
    title: '😂 Context is everything — the tone spectrum',
    body: 'The same word can be a playful compliment or a serious insult depending on: (1) your relationship with the person, (2) your tone of voice, (3) the situation. "Inta majnuun!" = crazy/wild (admiration between friends) OR genuinely crazy (concern). "Ya 7ayawaan!" between close male friends = they did something impressive. To a stranger = fight. Lebanese culture is high-context — learn the words AND the situations.'
  },
  {
    title: '🚗 The road rage vocabulary',
    body: '"2a7bal!" and "ghabi!" are the default Lebanese traffic insults. "7maar!" is also popular. Lebanese driving culture involves constant honking and verbal commentary. Locals find it funny and don\'t take it personally. If you drive in Lebanon and someone shouts "2a7bal!" at you, the correct response is to honk back and move on — responding seriously escalates unnecessarily.'
  },
  {
    title: '😱 ya kaDDaab — the false accusation of lying',
    body: '"Ya kaDDaab!" (you liar!) is confusingly used to express shock and disbelief at GOOD news. "I got the job!" → "ya kaDDaab!! Mabruuk!" It does NOT mean you actually think they\'re lying. It\'s closer to "no way! seriously?!" This trips up non-Lebanese speakers constantly who think they\'re being accused of something.'
  },
  {
    title: '🤝 Male friend affectionate insults',
    body: 'Lebanese men call each other "7maar," "ya kalb," "ya 7ayawaan," and "majnuun" constantly as terms of affection. This is a bonding behavior — the ruder the nickname, often the closer the friendship. DO NOT use these expressions with: women (unless very close friends and she initiates), older relatives, bosses, strangers, or anyone you don\'t know well.'
  },
  {
    title: '⚔️ Lebanese verbal sparring (7arb lisaan)',
    body: 'Lebanese people love verbal banter ("7arb lisaan" = word war). Having quick comebacks is respected. "Shu dakhlak" (none of your business), "hayda inta" (that\'s you), and "miin inta?" (who are you?) are classic arsenal. The goal is wit, not genuine hostility. If you can land a good "hayda inta" comeback with a smile, you\'ll get respect. Looking flustered = you lost.'
  },
];

const BNT_ABOUT = `<p><strong>😤 Insults, Teasing & Banter in Lebanese Culture</strong></p>
<p>Lebanese verbal culture is sharp, fast, and competitive. Knowing how to tease, be teased, and come back with a good line is a social skill — and refusing to participate can make you seem cold or uptight.</p>
<p><strong>The affection paradox:</strong> The ruder the nickname, often the closer the friendship. Lebanese men especially use "7maar," "ghabi," "ya kalb" as terms of genuine warmth. This confuses outsiders who hear what sounds like an insult and miss the laughing context around it.</p>
<p><strong>ya kaDDaab — learn this first:</strong> "You liar!" said to someone sharing good news. Every Lebanese person uses it. Every non-Lebanese person is confused by it the first time. It means "no way, seriously?!" not a real accusation.</p>
<p><strong>Context rules above all:</strong> Lebanese insults exist on a spectrum from pure affection to genuinely hostile. The words are the same; the tone, relationship, and setting determine everything. A slow, serious "ghabi" in an argument ≠ a quick laughing "ya ghabi!" to a friend who tripped.</p>
<p><strong>Comebacks are respected:</strong> Lebanese verbal culture rewards quick wit. Having no response is losing. But the goal is always wit, not cruelty — a good comeback lands with a smile, not a threat.</p>`;
