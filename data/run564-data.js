// R564 — NEW FEATURE: Lebanese Humour & Wit vocabulary (prefix: hmr)

const HMR_WORDS = [
  // cat: jokes
  { ar: 'النكتة', tr: 'en-nakte', en: 'The joke — Lebanese obsession, told about all topics including politics', cat: 'jokes' },
  { ar: 'حكي نكتة', tr: '7ake nakte', en: 'Tell a joke — social obligation at any gathering', cat: 'jokes' },
  { ar: 'كسّر ضلع', tr: 'kassar Dil3', en: 'Broke a rib — hilariously funny (lit: broke my rib laughing)', cat: 'jokes' },
  { ar: 'شاطر', tr: 'shaaTir', en: 'Clever / witty — compliment for a sharp joke or retort', cat: 'jokes' },
  { ar: 'حلو هالكلام', tr: '7elo hal-kalaam', en: 'Nice words / well said — appreciating a witty remark', cat: 'jokes' },
  { ar: 'بتضحك', tr: 'btaDH7ak', en: 'It makes you laugh — said of something amusing', cat: 'jokes' },

  // cat: sarcasm
  { ar: 'يسلم', tr: 'yislam', en: 'Thank you / bless you — used sarcastically for something useless', cat: 'sarcasm' },
  { ar: 'برافو عليك', tr: 'braavo 3alayk', en: 'Bravo to you — heavy sarcasm, you\'ve really done it now', cat: 'sarcasm' },
  { ar: 'مشكور', tr: 'mashkuur', en: 'Thanks a lot — sarcastic "thanks for nothing"', cat: 'sarcasm' },
  { ar: 'عالخفيف', tr: '3al-khafiif', en: 'Lightly / casually — "oh sure, no problem" (heavy irony)', cat: 'sarcasm' },
  { ar: 'تسلم إيدك', tr: 'tislam iidak', en: 'May your hand be safe — effusive thanks, often used ironically', cat: 'sarcasm' },
  { ar: 'هيدا ما إلو', tr: 'hayda maa ilo', en: 'That\'s priceless / there\'s no equal to this — mock admiration', cat: 'sarcasm' },

  // cat: teasing
  { ar: 'يا عمي', tr: 'yaa 3ammi', en: 'Oh uncle / oh man — affectionate teasing opener', cat: 'teasing' },
  { ar: 'انكسر خاطرك', tr: 'inkisar khaaT̈rak', en: 'Your mood is broken — teasing someone who\'s sulking or upset', cat: 'teasing' },
  { ar: 'مزّيكة', tr: 'mazzike', en: 'Fun/rowdy gathering — compliment for a lively social scene', cat: 'teasing' },
  { ar: 'شو بدك أكتر؟', tr: 'shu baddak aktar?', en: 'What more do you want? — teasing someone who\'s never satisfied', cat: 'teasing' },
  { ar: 'رح تكسّر الدني', tr: 'ra7 tkssar ed-diine', en: 'You\'ll break the world — (sarcastically) you think you\'re something special', cat: 'teasing' },

  // cat: laughter
  { ar: 'ضحك', tr: 'Di7ik', en: 'Laughter', cat: 'laughter' },
  { ar: 'مت من الضحك', tr: 'mitt min eD-Di7ik', en: 'I died of laughter — Lebanese hyperbole for something hilarious', cat: 'laughter' },
  { ar: 'بكيّ وضحك', tr: 'bkiyye w-Di7ik', en: 'Cry and laugh — cry-laughing, overwhelmed by something absurdly funny', cat: 'laughter' },
  { ar: 'حلو كتير', tr: '7elo ktir', en: 'Very funny / very nice — appreciating wit', cat: 'laughter' },
  { ar: 'ضحكتني', tr: 'DaH7aktani', en: 'You made me laugh — said to someone who cracked a good joke', cat: 'laughter' },

  // cat: absurdism
  { ar: 'هالبلد', tr: 'hal-balad', en: 'This country — said with exasperated affection about Lebanon\'s absurdities', cat: 'absurdism' },
  { ar: 'مسخرة', tr: 'maskhara', en: 'Ridiculous / a joke / farcical — something so absurd it\'s almost funny', cat: 'absurdism' },
  { ar: 'شو هالحياة', tr: 'shu hal-7ayaat', en: 'What a life — philosophical/ironic comment on life\'s absurdity', cat: 'absurdism' },
  { ar: 'الله كريم', tr: 'alla kariim', en: 'God is generous — fatalistic optimism, often humorous acceptance of bad news', cat: 'absurdism' },
  { ar: 'بتحلّ', tr: 'bet7ill', en: 'It\'ll work out / it\'ll be solved — absurdist Lebanese optimism', cat: 'absurdism' },
  { ar: 'ما خلّينا', tr: 'maa khalleeena', en: 'He/she didn\'t leave us anything — said of someone who\'s done everything', cat: 'absurdism' },
];

const HMR_DRILLS = [
  {
    q: 'A Lebanese person says "kassar Dil3" after hearing your story. What do they mean?',
    opts: [
      '"That broke my rib" — you were so funny they\'re metaphorically injured from laughing',
      '"That\'s a broken story" — your anecdote had inconsistencies',
      '"That hurt" — your joke was offensive',
      '"You cracked" — you finally admitted something true'
    ],
    ans: 0,
    exp: '"Kassar Dil3" (broke a rib) is Lebanese hyperbole for extreme laughter — so funny it physically hurt. Lebanese emotional expression tends toward the hyperbolic: things aren\'t just funny, they break ribs; you don\'t just laugh, you die ("mitt min eD-Di7ik"). This exaggerated language is not sycophancy — it\'s genuine expression amplified for social warmth. Responding to "kassar Dil3" appropriately: smile, maybe tell another one, or deflect modestly. Lebanese humour rewards the person who can keep the energy going.'
  },
  {
    q: 'Someone says "braavo 3alayk" after you\'ve done something questionable. Are they impressed?',
    opts: [
      'No — it\'s heavy sarcasm: "nice work, you\'ve really done it now"',
      'Yes — braavo is a genuine compliment in Lebanese Arabic',
      'Maybe — the tone is ambiguous without context',
      'No — it means they disapprove but won\'t say why'
    ],
    ans: 0,
    exp: '"Braavo 3alayk" (bravo to you) said flatly or with a specific tone is one of Lebanon\'s most versatile sarcasm tools. It means the opposite of what it says: you\'ve done something stupid, impressive in its stupidity, or socially disastrous. Lebanese sarcasm is sophisticated — it uses praise vocabulary to deliver criticism, so the target understands perfectly while the delivery maintains plausible deniability. "Braavo 3alayk" can range from mild teasing among friends to cutting dismissal. The context, relationship, and facial expression determine the bite.'
  },
  {
    q: 'What does "hal-balad" (this country) communicate when said with a specific sigh in Lebanon?',
    opts: [
      'Exasperated affection — "Lebanon, you impossible beautiful disaster"',
      'Pride — "this country is great"',
      'Complaint — "I hate living here"',
      'Explanation — "this is a Lebanese thing you wouldn\'t understand"'
    ],
    ans: 0,
    exp: '"Hal-balad" (this country) said with the right sigh is one of the most condensed emotional statements in Lebanese culture. It contains: love, frustration, dark humour, pride, exasperation, and fatalism simultaneously. It\'s said when the electricity cuts mid-sentence, when a politician does something absurd, when bureaucracy defeats you, when the road is inexplicably blocked. Lebanese people don\'t say "I hate this country" — they say "hal-balad" with a sigh that communicates the same thing while also laughing at it. It\'s the national ironic shrug.'
  },
  {
    q: 'A Lebanese person says "maskhara" about a situation. Are they laughing?',
    opts: [
      'Sort of — maskhara means something is so absurdly ridiculous it\'s almost funny, even if it\'s also terrible',
      'Yes — it\'s pure laughter, the situation is hilarious',
      'No — it\'s pure anger, nothing funny about it',
      'It depends — maskhara only means funny in South Lebanon'
    ],
    ans: 0,
    exp: '"Maskhara" sits at the intersection of ridiculous, farcical, and darkly funny. Derived from "maskhara" (clown/buffoon), it describes situations of such absurdity that laughter becomes the only response. Lebanese dark humour is built on this: the bank that stole your savings is a "maskhara"; the politician who gave the same speech for 30 years is a "maskhara"; the traffic jam caused by a VIP convoy is a "maskhara." It\'s not resigned acceptance — it\'s defensive laughter as survival strategy. If you can call it a "maskhara," you\'ve kept some power over it.'
  },
  {
    q: 'What is the social function of "en-nakte" (the joke) in Lebanese culture?',
    opts: [
      'Political and social safety valve — Lebanese jokes target politicians, institutions, and social taboos that can\'t be addressed directly',
      'Entertainment only — Lebanese jokes are just for fun, not political',
      'Religious commentary — most Lebanese jokes are theological',
      'Breaking ice with strangers — jokes are only told between people who don\'t know each other'
    ],
    ans: 0,
    exp: '"En-nakte" in Lebanon is not just entertainment — it\'s one of the primary modes of political commentary and social critique in a country where direct opposition carries risks. Lebanese joke culture is sophisticated: jokes about politicians by name, jokes about sectarian stereotypes (with complex in-group/out-group rules), jokes about the crisis that process collective trauma. During the worst moments of the economic collapse and the Beirut blast, Lebanese people generated dark jokes within hours — not as denial but as a way to say "we see what\'s happening and we won\'t be destroyed by it."'
  },
  {
    q: 'Someone says "mitt min eD-Di7ik" (I died of laughter). How literally should you take this?',
    opts: [
      'Not literally at all — Lebanese emotional hyperbole is standard; it means they found it very funny',
      'Somewhat literally — Lebanese people mean they felt faint from laughing',
      'Fully literally — this is a formal Lebanese expression of extreme appreciation',
      'Depends on context — it\'s only hyperbole among close friends'
    ],
    ans: 0,
    exp: 'Lebanese emotional expression is characteristically hyperbolic. Things aren\'t just funny — they kill you. Food isn\'t just good — it kills you ("2atal el-akle"). A baby isn\'t just cute — you want to eat them ("bddi aakla"). This amplification is how warmth and appreciation are expressed authentically — saying something is "just fine" reads as cold or uninterested. Understanding Lebanese hyperbole is essential: when a Lebanese host says the food is going to kill you, they\'re not issuing a health warning — they\'re saying they made it with love and it\'s extraordinary.'
  },
  {
    q: 'What does "bet7ill" (it\'ll work out) communicate in a Lebanese context?',
    opts: [
      'Absurdist fatalistic optimism — things are clearly not going to work out but saying so would be unbearable',
      'Genuine problem-solving — there\'s a specific plan to fix the issue',
      'Dismissal — the speaker doesn\'t care about the problem',
      'Religious trust — God will intervene to fix the situation'
    ],
    ans: 0,
    exp: '"Bet7ill" (it\'ll work out / it\'ll be solved) is Lebanese philosophical optimism in its most compressed form. Used when the electricity is out for the 15th hour, when the bank won\'t release your money, when the government has been without a president for a year — "bet7ill" is the Lebanese refusal to be fully defeated by circumstances. It\'s not naivety: Lebanese people know things often don\'t "7ill." But saying it, laughing while saying it, is choosing to continue functioning. This is the same emotional resource as "ha-balad" and "maskhara": dark humour as survival tool.'
  },
  {
    q: 'When is "yislam" (may you be safe/blessed) used sarcastically?',
    opts: [
      'When someone does something useless or unhelpful — thanking them ironically for contributing nothing',
      'Only when said to departing guests — "yislam" is always sincere at farewells',
      'When appreciating food — it\'s a compliment to the cook',
      'Never — yislam is only ever sincere in Lebanese Arabic'
    ],
    ans: 0,
    exp: '"Yislam" (may you be safe/protected) is primarily a sincere blessing — said after receiving a gift, when meeting someone, or as a farewell. But said flatly after someone has done something useless or unhelpful — brought the wrong thing, given bad advice, failed to solve a problem — "yislam" becomes perfect sarcasm. The genius of Lebanese sarcasm is using the most positive language for negative situations. You\'re not insulting them; you\'re thanking them. The target understands perfectly, the bystanders laugh, and no direct conflict occurs. It\'s diplomatic devastation.'
  },
  {
    q: 'What does "mazzike" describe in Lebanese social life?',
    opts: [
      'A lively, fun gathering — noise, jokes, music, people talking over each other, general joyful chaos',
      'A formal musical performance or concert',
      'Specifically a wedding reception',
      'Any outdoor gathering or picnic'
    ],
    ans: 0,
    exp: '"Mazzike" (from musiqa/music) in Lebanese colloquial means a fun, chaotic, lively gathering where everyone\'s talking, joking, and the energy is high. "Shar el-mazzike" (the gathering got good) means things have reached a certain critical mass of warmth and fun. Lebanese social gatherings are valued precisely for this quality — the point is not just to be together but for the situation to become "mazzike": noisy, overlapping conversations, jokes being told, someone dancing, someone arguing. A quiet polite gathering is socially disappointing; "mazzike" is the goal.'
  },
  {
    q: '"Shaykhak" (your sheikh) and other absurdist phrases are often used in Lebanese humour. What characterizes Lebanese political jokes?',
    opts: [
      'Named and direct — politicians are mocked by name, with specific references to their failures and contradictions',
      'Abstract — Lebanese political jokes avoid naming anyone to prevent trouble',
      'Nostalgic — jokes are about past politicians, not current ones',
      'Sectarian only — political jokes only exist within religious communities about their own leaders'
    ],
    ans: 0,
    exp: 'Lebanese political humour is notably direct and named — Hariri, Aoun, Nasrallah, Berri, Jumblatt are all joke subjects, often simultaneously skewered by the same joke. This directness exists because Lebanon\'s political culture, for all its authoritarian aspects, maintains a certain tolerance for political satire — satirical TV shows, stand-up comedy, and social media political humour operate with relative freedom. The joke tradition allows Lebanese people to maintain dignity and agency in relation to politicians who have objectively failed them for generations. Laughing at power is how you avoid being fully controlled by it.'
  },
];

const HMR_TIPS = [
  '<strong>Lebanese humour as cultural literacy:</strong> Understanding Lebanese jokes requires knowing three things: the sectarian/political landscape (many jokes navigate these waters), the Lebanese preference for hyperbole and exaggeration, and the role of suffering and crisis as comedy material. Lebanese people joke about electricity cuts, about the lira collapsing, about politicians, about bureaucracy — not because they don\'t care but because humour is a primary coping mechanism. If a Lebanese person makes a dark joke about something terrible, laughing with them is an act of solidarity, not callousness.',
  '<strong>Sarcasm is pervasive and sophisticated:</strong> Lebanese sarcasm is not always obvious to outsiders. It uses positive vocabulary ("braavo", "yislam", "mashkuur") in negative contexts, requires reading tone and context, and is delivered with a straight face as often as with a smirk. A key rule: if a Lebanese person says something very nice very flatly after a disaster, they\'re probably being sarcastic. Learning to read Lebanese sarcasm — which comes with a specific vocal flatness or particular timing — is a significant cultural intelligence milestone.',
  '<strong>Self-deprecating national humour:</strong> Lebanese people joke about Lebanon with great freedom — "hal-balad" (this country), "maskhara" (farce), "shu hal-7ayaat" (what a life). But there\'s an important rule: outsiders who don\'t love Lebanon cannot participate in this humour without causing offence. Lebanese self-deprecation is an internal family conversation. A Lebanese person can say "hal-balad" with a loving sigh; if a foreigner says "Lebanon is a disaster," they\'ve committed a social error even if they\'ve said the same thing. Participate gently and always from a place of evident affection.',
  '<strong>Political jokes name names:</strong> Lebanese political satire is unusually direct — politicians are named, their specific failures referenced, their family connections mocked. This is healthy democratic humour. Participating requires knowing the political landscape well enough to appreciate the references. If you don\'t know who\'s being referenced, the honest response is "I don\'t know enough Lebanese politics to understand that joke — explain it to me?" Lebanese people love explaining their political situation to interested foreigners. It usually becomes a much longer and more educational conversation than the joke itself.',
  '<strong>The healing function of crisis humour:</strong> The darkest Lebanese humour emerged during the worst moments: civil war jokes, Beirut blast jokes within days of the explosion, COVID jokes, crisis jokes. This is not psychological denial — it\'s active processing. Lebanese humour about catastrophe says: "we see what happened, we refuse to be destroyed by it, we will find the absurd in the horror and keep moving." Understanding this function prevents the cultural misreading of Lebanese darkness: they\'re not minimizing tragedy, they\'re surviving it in the most Lebanese way available.',
];

const HMR_ABOUT = 'Lebanese humour is one of the culture\'s great survival mechanisms and one of its most distinctive exports. From the political satire of Ziad Rahbani\'s theatre to the viral memes produced within hours of national disasters, Lebanese people have developed a sophisticated comedic tradition that mixes hyperbole, sarcasm, self-deprecation, and dark absurdism. The tradition has roots in the Lebanese experience of being a small country surrounded by larger powers, navigating multiple occupations and civil conflicts, and living with chronic institutional dysfunction. When the state cannot be trusted, when disaster is possible at any moment, when the economic rug can be pulled at any time — humour becomes both resistance and release. The Lebanese joke (en-nakte) addresses everything: politics, religion, sectarianism, class, gender, the crisis, the politicians, the traffic. Nothing is too sacred. And when a Lebanese person laughs at their own situation with the particular exasperated-affectionate sigh of "hal-balad," they\'re not giving up — they\'re choosing to remain human in impossible circumstances.';
