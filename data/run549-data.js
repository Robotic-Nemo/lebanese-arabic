// R549 — NEW FEATURE: Lebanese Time & Inshallah Culture coach (prefix: tme)

const TME_WORDS = [
  // cat: time
  { ar: 'هلق', tr: 'halla2', en: 'Now / right now (the most common Lebanese "now")', cat: 'time' },
  { ar: 'بكرا', tr: 'bukra', en: 'Tomorrow — also means "some future time, not now"', cat: 'time' },
  { ar: 'بعدين', tr: 'ba3deen', en: 'Later — often means indefinitely later / never', cat: 'time' },
  { ar: 'هلق هلق', tr: 'halla2 halla2', en: 'Right now right now — urgency (doubled for emphasis)', cat: 'time' },
  { ar: 'بعد شوي', tr: 'ba3d shwayy', en: 'After a little while — vague, anywhere from 5min to 2hrs', cat: 'time' },
  { ar: 'من زمان', tr: 'min zamaan', en: 'A long time ago / for a long time', cat: 'time' },
  { ar: 'كمان شوي', tr: 'kamaan shwayy', en: 'A little more / a little longer', cat: 'time' },
  { ar: 'دغري', tr: 'doughri', en: 'Right away / straight / directly (also means honest)', cat: 'time' },
  { ar: 'أول ما', tr: 'awwal ma', en: 'As soon as / the moment that', cat: 'time' },

  // cat: inshallah
  { ar: 'إن شاء الله', tr: 'inshalla', en: 'God willing — can mean yes, maybe, no, or please stop asking', cat: 'inshallah' },
  { ar: 'إن شاء الله خير', tr: 'inshalla kheir', en: 'God willing it\'s good — said when hearing unexpected news', cat: 'inshallah' },
  { ar: 'إن شاء الله بكرا', tr: 'inshalla bukra', en: '"God willing tomorrow" — polite no, not happening today', cat: 'inshallah' },
  { ar: 'إن شاء الله بتشوف', tr: 'inshalla btishuuf', en: '"God willing you\'ll see" — Lebanese parent\'s ultimate deflection', cat: 'inshallah' },
  { ar: 'إن شاء الله يفرجها', tr: 'inshalla yifrujha', en: 'God willing it will work out — Lebanese optimism in hard times', cat: 'inshallah' },

  // cat: pace
  { ar: 'على مهل', tr: '3ala mahl', en: 'Take it easy / slowly — the Lebanese anti-rush instruction', cat: 'pace' },
  { ar: 'يلا يلا', tr: 'yalla yalla', en: 'Come on come on — hurry up (doubled = urgent)', cat: 'pace' },
  { ar: 'يلا بسرعة', tr: 'yalla bisur3a', en: 'Go quickly / hurry up', cat: 'pace' },
  { ar: 'ما في وقت', tr: 'maa fii wa2et', en: 'There\'s no time', cat: 'pace' },
  { ar: 'في وقت', tr: 'fii wa2et', en: 'There\'s time / we have time', cat: 'pace' },
  { ar: 'أجا الوقت', tr: 'ija el-wa2et', en: 'The time has come / it\'s time', cat: 'pace' },

  // cat: nevermind
  { ar: 'معلش', tr: 'ma3lish', en: 'Never mind / it\'s okay / sorry (most flexible Lebanese phrase)', cat: 'nevermind' },
  { ar: 'خليها', tr: 'khalliha', en: 'Leave it / forget about it / let it go', cat: 'nevermind' },
  { ar: 'بالآخر', tr: 'bel-aakhir', en: 'In the end / eventually / after all', cat: 'nevermind' },
  { ar: 'مش مهم', tr: 'mish muhimm', en: 'It doesn\'t matter / not important', cat: 'nevermind' },
  { ar: 'شو رح يصير يصير', tr: 'shu ra7 yeSiir yeSiir', en: 'Whatever will happen will happen (Lebanese fatalism)', cat: 'nevermind' },

  // cat: waiting
  { ar: 'استنى شوي', tr: 'istanna shwayy', en: 'Wait a little / hold on a sec', cat: 'waiting' },
  { ar: 'عم بجي', tr: '3am biji', en: 'I\'m coming (said while making no movement to leave)', cat: 'waiting' },
  { ar: 'قريباً', tr: '2ariiban', en: 'Soon — formal register, used in announcements', cat: 'waiting' },
  { ar: 'لسا', tr: 'lissa', en: 'Not yet / still (lissa mish jaahiz = not ready yet)', cat: 'waiting' },
  { ar: 'وعدني', tr: 'wa3adni', en: 'He/she promised me — often said with skepticism', cat: 'waiting' },
];

const TME_DRILLS = [
  {
    q: 'A Lebanese contractor says "inshalla bukra" when asked when he\'ll finish the job. What should you realistically expect?',
    opts: [
      'Tomorrow is unlikely — "inshalla bukra" is a polite deflection',
      'Definitely tomorrow — he\'s given a specific commitment',
      'In exactly one week — Lebanese contractors work on a 7-day cycle',
      'Today — "bukra" sometimes means today in Beirut slang'
    ],
    ans: 0,
    exp: '"Inshalla bukra" is one of the most famous Lebanese deflections — it literally means "God willing tomorrow" but culturally signals "I acknowledge your request but I\'m not committing." The "inshalla" removes personal accountability (it\'s in God\'s hands) and "bukra" pushes it to a vague future. Understanding Lebanese time culture means knowing that "inshalla" before any time word = manage your expectations.'
  },
  {
    q: 'Your Lebanese friend says "3am biji" (I\'m coming) on the phone. You\'re already at the restaurant. What do you do?',
    opts: [
      'Order drinks and wait — "3am biji" means they\'re still at home getting ready',
      'Leave — they\'ve cancelled',
      'Go pick them up — they have no transportation',
      'Order food now — they\'ll arrive exactly when they said'
    ],
    ans: 0,
    exp: '"3am biji" literally means "I\'m in the process of coming" — but Lebanese social time runs 20-40 minutes late by default. When someone says "3am biji," they\'ve usually just thought about starting to get ready. This isn\'t rudeness — Lebanese social culture treats strict punctuality as slightly cold. Order drinks, enjoy the mood, and they\'ll arrive warmer and apologetic.'
  },
  {
    q: 'Someone asks a favor and you hear "ba3deen" with a wave of the hand. What\'s the real message?',
    opts: [
      '"Later" — which could mean never, depending on context and tone',
      '"In exactly 30 minutes" — ba3deen is a precise time unit',
      '"Tomorrow morning" — ba3deen implies the next day',
      '"Ask me again" — a polite request for a reminder'
    ],
    ans: 0,
    exp: '"Ba3deen" means "later" but in Lebanese usage it\'s deeply elastic — it can mean in an hour, this week, or never. Combined with a hand wave (dismissive), "ba3deen" is almost certainly a soft no or indefinite postponement. Lebanese indirect communication prefers "ba3deen" to outright refusal — it saves face for both parties. If you need a real commitment, pin down a specific time rather than accepting "ba3deen."'
  },
  {
    q: 'A Lebanese parent says "inshalla btishuuf" to their child asking for a new phone. What does this really mean?',
    opts: [
      '"God willing you\'ll see" — the ultimate parental non-answer',
      '"You\'ll definitely get it" — a firm promise',
      '"Look for it yourself" — telling them to go shopping',
      '"I\'ll see" — meaning the parent will check the budget'
    ],
    ans: 0,
    exp: '"Inshalla btishuuf" (God willing you\'ll see) is the legendary Lebanese parent response to any request — it commits to nothing while leaving theoretical hope alive. The child learns early that "inshalla" before any verb = unclear. "Inshalla btishuuf" is almost always a no, but delivered with enough ambiguity that the conversation ends without conflict. It\'s genius indirect communication.'
  },
  {
    q: 'You need someone to slow down or take their time with something. What do you say?',
    opts: [
      '3ala mahl — take it easy / no rush',
      'Yalla yalla — hurry up hurry up',
      'Halla2 halla2 — right now right now',
      'Doughri — straight away / immediately'
    ],
    ans: 0,
    exp: '"3ala mahl" (literally "on ease") is the Lebanese instruction to slow down, take your time, don\'t rush. It\'s said to a nervous guest, an impatient driver, or anyone who needs to relax. Contrast with "yalla yalla" (doubled for urgency) which means hurry up. Lebanese pace can switch between these two extremes — relaxed "3ala mahl" social mode and urgent "yalla yalla" practical mode — sometimes within the same conversation.'
  },
  {
    q: 'What\'s the difference between "halla2" and "halla2 halla2"?',
    opts: [
      'Halla2 = now; halla2 halla2 = right NOW (doubled for urgency)',
      'They mean the same thing — doubling is just emphasis with no change',
      'Halla2 = today; halla2 halla2 = this hour',
      'Halla2 = maybe now; halla2 halla2 = definitely now'
    ],
    ans: 0,
    exp: 'In Lebanese Arabic, doubling a time word intensifies it significantly. "Halla2" = now. "Halla2 halla2" = RIGHT NOW, with urgency and sometimes irritation. The same pattern applies to "yalla yalla" (hurry hurry). The doubling is a prosodic emphasis marker — it signals that the speaker is serious and the situation is time-sensitive. If someone says "halla2 halla2" to you, they mean it.'
  },
  {
    q: 'A deal falls through and your Lebanese friend says "shu ra7 yeSiir yeSiir" — what attitude is he expressing?',
    opts: [
      'Fatalistic acceptance — what will be will be',
      'Angry frustration demanding action',
      'Optimism that things will improve',
      'Confusion about what happened'
    ],
    ans: 0,
    exp: '"Shu ra7 yeSiir yeSiir" (whatever will happen will happen) expresses Lebanese fatalism — a philosophical acceptance of circumstances beyond one\'s control. It\'s related to "maktub" (it was written/fated) and the broader cultural tradition of inshallah. This attitude helped Lebanese people survive decades of civil war and instability — not paralysis, but a cultural resilience that prevents despair over the uncontrollable.'
  },
  {
    q: 'Someone says "min zamaan" about when they last saw you. What are they communicating?',
    opts: [
      'It\'s been a long time since they saw you',
      'They saw you very recently',
      'They don\'t remember when they last saw you',
      'They want to see you soon'
    ],
    ans: 0,
    exp: '"Min zamaan" literally means "from time" — it means a long time ago or for a long time. "Ma shiftik min zamaan!" = "I haven\'t seen you in ages!" It can also be used as a compliment in context: "min zamaan baddna nishrab 2ahwe" = "we\'ve been wanting to get coffee forever." The phrase signals that time has passed and reconnection is overdue — which in Lebanese culture, is an invitation.'
  },
  {
    q: 'What does "ma3lish" cover in Lebanese Arabic?',
    opts: [
      'Never mind, it\'s okay, sorry, don\'t worry — all of the above',
      'Only apologies — like "sorry"',
      'Only reassurance — like "it\'s okay"',
      'Only dismissal — like "forget it"'
    ],
    ans: 0,
    exp: '"Ma3lish" is one of the most flexible words in Lebanese Arabic. It means: "never mind," "it\'s okay," "sorry," "don\'t worry about it," "let it go," and "I forgive you" — context determines which. A waiter spills coffee: "ma3lish" (it\'s okay). You bump into someone: "ma3lish" (sorry). A plan falls through: "ma3lish" (never mind). Mastering ma3lish\'s flexibility is a sign of real Lebanese fluency.'
  },
  {
    q: 'Your Lebanese colleague promises to send files "doughri" — how fast should you expect them?',
    opts: [
      'Immediately / right away — doughri means straight/directly',
      'Tomorrow — doughri implies next day delivery',
      'Eventually — it\'s another way of saying ba3deen',
      'Whenever — it\'s the same as inshalla'
    ],
    ans: 0,
    exp: '"Doughri" means straight, directly, right away — it\'s one of the few Lebanese time words that genuinely implies immediacy without ambiguity. Unlike "halla2" which can be slightly elastic, "doughri" means now without detours. The word also means honest/direct in personality ("hu doughri" = he\'s a straight-talker). When someone says "ba3atlak doughri" (I\'ll send it to you directly/immediately), take them at their word — it\'s one of the clearer commitments in Lebanese communication.'
  },
];

const TME_TIPS = [
  '<strong>Inshallah has three meanings:</strong> Lebanese people use "inshallah" to mean (1) genuine hope that God enables something ("inshalla tnaje7" = I truly hope you succeed), (2) polite maybe/uncertainty, and (3) soft no. The tone, context, and accompanying body language tell you which one. Raised eyebrows + inshallah = genuine. Flat tone + hand wave + inshallah = soft no. Learning to read inshallah is crucial for navigating Lebanese commitments.',
  '<strong>Lebanese time is elastic:</strong> "Ba3deen," "bukra," and "ba3d shwayy" are all genuinely vague time expressions in Lebanese culture. This isn\'t dishonesty — it\'s a cultural relationship with time where social warmth matters more than precision. If you need something by a specific time, state the time explicitly: "laazim yiSal yom el-khamis" (it must arrive Thursday). Vague time words without external deadlines float indefinitely.',
  '<strong>"3am biji" is not a GPS update:</strong> When a Lebanese person says "3am biji" (I\'m coming), it means "I\'ve acknowledged your message and I intend to come." It is NOT a status update on their actual location. They may still be in the shower. Add 20-40 minutes to any expected arrival when you hear this phrase, and you\'ll arrive at Lebanese social reality.',
  '<strong>Ma3lish is social glue:</strong> "Ma3lish" smooths over countless daily friction points in Lebanese life — bumps, spills, mistakes, disappointments. The Lebanese willingness to say "ma3lish" quickly (rather than assigning blame or dwelling on errors) creates a social atmosphere that foreigners often find remarkably warm and forgiving. Overusing it for serious matters is possible, but as a default response to small problems, it\'s essential.',
  '<strong>Doubling words for intensity:</strong> Lebanese Arabic doubles words for intensity and urgency: "yalla yalla" (hurry hurry), "halla2 halla2" (right now right now), "shwayy shwayy" (slowly slowly). This is a real grammatical pattern — doubling signals elevation of the base meaning. Learn to recognize and use doubled forms and you\'ll sound genuinely fluent in Lebanese cadence.',
];

const TME_ABOUT = 'Lebanese time culture is often described by outsiders as "late" or "flexible," but this misses the real structure. Lebanese society has two time modes: habibi time (social time — elastic, warm, presence-oriented) and deadline time (professional/crisis time — strict when stakes are high). The confusion arises when outsiders apply deadline-time expectations to habibi-time situations. "Inshallah," "ba3deen," and "bukra" are not evasions — they\'re a vocabulary for managing uncertainty, preserving relationships, and acknowledging that the future is genuinely unknown. The phrase "inshallah yifrujha" (God willing it will work out) has carried Lebanese families through civil war, economic collapse, and exile. Understanding Lebanese time means understanding resilience — and the wisdom of not over-promising what you can\'t guarantee.';
