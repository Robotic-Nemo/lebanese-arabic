// R522 — Lebanese "Allah" Expressions (prefix: alh)
const ALH_WORDS = [
  // inshalla — the most nuanced
  {ar:'إن شاء الله', tr:'in shaa alla', en:'"God willing" — means YES (enthusiastic), MAYBE (polite), or NO (never) depending on tone & context', cat:'inshalla'},
  {ar:'إن شاء الله خير', tr:'in shaa alla kheer', en:'"God willing it will be fine" — reassuring response when someone worries about a plan', cat:'inshalla'},
  {ar:'إن شاء الله بكرا', tr:'in shaa alla bukra', en:'"God willing, tomorrow" — often means "probably not soon" — famous Lebanese procrastination phrase', cat:'inshalla'},
  {ar:'إن شاء الله عندك', tr:'in shaa alla 3andak', en:'"God willing it\'ll happen for you too" — said at weddings/celebrations to unmarried/childless guests', cat:'inshalla'},
  // hamdilla
  {ar:'الحمد لله', tr:'el-7amdilla', en:'"Praise be to God / Thank God" — response to "how are you?" means things are fine; mandatory after sneezing', cat:'hamdilla'},
  {ar:'الحمد لله على كل حال', tr:'el-7amdilla 3ala kull 7aal', en:'"Thank God in any case" — even in hardship, accepting with faith', cat:'hamdilla'},
  {ar:'الله يعطيك العافية', tr:'alla ya3Tiik el-3aafye', en:'"May God give you health/strength" — after hard work, exercise, finishing a task. Response: "alla y3aafik"', cat:'blessings'},
  {ar:'الله يعافيك', tr:'alla y3aafik', en:'"May God grant you health" — response to ya3Tiik el-3aafye, or said to someone who is sick', cat:'blessings'},
  // mashalla
  {ar:'ما شاء الله', tr:'ma shaa alla', en:'"What God has willed" — said when admiring something beautiful to ward off evil eye. NEVER skip this.', cat:'mashalla'},
  {ar:'ما شاء الله عليك', tr:'ma shaa alla 3aleek', en:'"What God has willed upon you" — complimenting someone\'s achievement or appearance (with evil eye protection)', cat:'mashalla'},
  {ar:'ما شاء الله تبارك الله', tr:'ma shaa alla tabaarak alla', en:'"What God has willed, blessed is God" — double protection phrase for extra admiration', cat:'mashalla'},
  // yalla
  {ar:'يلّا', tr:'yalla', en:'"Come on / Let\'s go / Hurry up" — from "ya allah". The most versatile Lebanese word.', cat:'yalla'},
  {ar:'يلّا بيّا', tr:'yalla biyya', en:'"Come with me / Let\'s go together" — inviting someone along urgently', cat:'yalla'},
  {ar:'يلّا تصبّح على خير', tr:'yalla tiSba7 3a kheer', en:'"OK, good night" — using yalla as a polite conversation-ender before good night', cat:'yalla'},
  {ar:'يلّا بكفي', tr:'yalla bikaffi', en:'"OK that\'s enough" — closing a topic, ending an argument. Firm but not aggressive.', cat:'yalla'},
  // for the deceased
  {ar:'الله يرحمو', tr:'alla yir7amo', en:'"May God have mercy on him" — said when mentioning someone who has passed away (m)', cat:'deceased'},
  {ar:'الله يرحمها', tr:'alla yir7amha', en:'"May God have mercy on her" — feminine form for deceased women', cat:'deceased'},
  {ar:'الله يرحم روحو', tr:'alla yir7am ruu7o', en:'"May God have mercy on his soul" — more emphatic condolence phrase', cat:'deceased'},
  {ar:'روحو بالجنة', tr:'ruu7o bil-janne', en:'"His soul is in heaven" — comforting statement about the deceased', cat:'deceased'},
  // protection & blessings
  {ar:'الله يحميك', tr:'alla y7miik', en:'"May God protect you" — parting phrase with warmth, also when someone faces danger', cat:'blessings'},
  {ar:'الله يخلّيلنا إيّاك', tr:'alla ykhallii-lna iyya', en:'"May God keep you for us" — deep affection phrase, said to someone cherished', cat:'blessings'},
  {ar:'الله يباركلك', tr:'alla ybaarak-lak', en:'"May God bless you (in what you have)" — for possessions, children, relationships', cat:'blessings'},
  {ar:'الله كريم', tr:'alla kariim', en:'"God is generous" — said when things are hard, expressing hope/patience. Lebanese way of saying "it\'ll work out"', cat:'blessings'},
  {ar:'توكّلنا على الله', tr:'tawakkalna 3a-alla', en:'"We place our trust in God" — said before starting something risky or uncertain', cat:'blessings'},
  // frustration & shock
  {ar:'والله', tr:'w-alla', en:'"By God / I swear / honestly" — the most common Lebanese oath, used for emphasis or sincerity', cat:'emphasis'},
  {ar:'والله العظيم', tr:'w-alla el-3aDHiim', en:'"By God the Great" — stronger oath for emphatic truth-telling or serious promises', cat:'emphasis'},
  {ar:'يا الله', tr:'ya alla', en:'"Oh God!" — surprise, frustration, or calling attention. Softer than the English equivalent.', cat:'emphasis'},
  {ar:'سبحان الله', tr:'sub7aan alla', en:'"Glory be to God" — said in wonder or disbelief at something remarkable or troubling', cat:'emphasis'},
  {ar:'استغفر الله', tr:'astaghfir alla', en:'"I seek God\'s forgiveness" — said when someone says/does something inappropriate or shocking', cat:'emphasis'},
  // requests using allah
  {ar:'الله يخلّيك ساعدني', tr:'alla ykhallak saa3idni', en:'"May God keep you, help me" — very polite/imploring request formula using allah\'s name', cat:'requests'},
  {ar:'بالله عليك', tr:'billaa 3aleek', en:'"By God / I beg you" — urgent request formula. More emphatic than please.', cat:'requests'},
  {ar:'من الله ومنك', tr:'min alla w-minnak', en:'"From God and from you" — thanking someone by linking their generosity to God\'s', cat:'requests'},
  // good wishes
  {ar:'الله يوفّقك', tr:'alla ywaffi2ak', en:'"May God grant you success" — said before exams, job interviews, important events', cat:'wishes'},
  {ar:'الله يسهّل', tr:'alla ysahhil', en:'"May God make it easy" — encouragement when someone faces a difficult task', cat:'wishes'},
  {ar:'الله يعوّض', tr:'alla y3awwiD', en:'"May God compensate (you)" — said when someone loses something or misses out on something', cat:'wishes'},
];

const ALH_DRILLS = [
  {
    q: 'Your Lebanese colleague just finished a long, tiring shift. What do you say?',
    opts: ['in shaa alla', 'alla ya3Tiik el-3aafye', 'ma shaa alla', 'sub7aan alla'],
    ans: 1,
    exp: '"alla ya3Tiik el-3aafye" = "May God give you strength." The classic thing to say after someone finishes hard work. They reply "alla y3aafik."'
  },
  {
    q: 'You admire a friend\'s new baby. What MUST you say before complimenting?',
    opts: ['el-7amdilla', 'w-alla', 'ma shaa alla', 'yalla'],
    ans: 2,
    exp: '"ma shaa alla" — ALWAYS say this before complimenting a baby, child, or anything beautiful. It protects against the evil eye (7asad). Skipping it is considered rude or dangerous.'
  },
  {
    q: 'You ask your Lebanese friend if they\'re coming to the party. They say "in shaa alla" with a casual shrug. What does this mean?',
    opts: ['Definitely yes, they\'re excited', 'Polite no — don\'t count on them', 'They need to pray first', 'They\'re 100% committed'],
    ans: 1,
    exp: 'Tone is everything with "in shaa alla." A flat or casual "in shaa alla" = polite no. Enthusiastic with eye contact = probably yes. Lebanese people use it as a social cushion to avoid direct refusal.'
  },
  {
    q: 'Someone mentions their late grandfather in conversation. What do you say?',
    opts: ['yalla', 'ma shaa alla 3aleek', 'alla yir7amo', 'alla y7miik'],
    ans: 2,
    exp: '"alla yir7amo" = "May God have mercy on him." This is automatically said whenever a deceased person is mentioned. Forgetting it is considered disrespectful.'
  },
  {
    q: 'Your friend is about to take a difficult exam. What do you wish them?',
    opts: ['alla yir7amo', 'alla ywaffi2ak', 'el-7amdilla', 'astaghfir alla'],
    ans: 1,
    exp: '"alla ywaffi2ak" = "May God grant you success." Perfect before exams, interviews, important events. "alla ysahhil" (May God make it easy) also works.'
  },
  {
    q: 'Someone sneezes. After you say "ya3Tiik el-3aafye," what do they reply?',
    opts: ['alla yir7amo', 'alla y3aafik', 'w-alla', 'tawakkalna 3a-alla'],
    ans: 1,
    exp: '"alla y3aafik" = "May God grant you health." This is the standard response to "ya3Tiik el-3aafye." It\'s a formula — both sides know their lines.'
  },
  {
    q: 'Your Lebanese host says "billaa 3aleek, khud ktir!" at the dinner table. What are they doing?',
    opts: ['Swearing at you', 'Urgently insisting you take more food', 'Saying goodbye', 'Warning you about the food'],
    ans: 1,
    exp: '"billaa 3aleek" = "by God / I beg you" — a firm, affectionate insistence. At a Lebanese table this means "please, take more, I insist." It\'s hospitality, not pressure.'
  },
  {
    q: 'Something shocking just happened. Your Lebanese friend says "sub7aan alla" quietly. What feeling is this?',
    opts: ['Joy and celebration', 'Wonder/disbelief at what God allows', 'Anger at someone', 'Greeting a friend'],
    ans: 1,
    exp: '"sub7aan alla" expresses wonder, disbelief, or awe at something — good or bad. "Glory be to God" in the face of something remarkable or terrible. Very common quiet reaction.'
  },
  {
    q: 'Things are tough financially. Your friend says "alla kariim." What does this mean?',
    opts: ['God is strict — accept your punishment', 'God is generous — things will improve', 'Pray more and give charity', 'Ask God for a miracle now'],
    ans: 1,
    exp: '"alla kariim" = "God is generous." A uniquely Lebanese/Arab expression of faith-based optimism in hard times. Means "it\'ll work out, God provides." The Lebanese version of "it\'ll be fine."'
  },
  {
    q: 'Your Lebanese aunt sees your report card. You got top marks. She says "ma shaa alla tbaarak alla!" Why both phrases?',
    opts: ['She\'s unsure which one is correct', 'Double protection — extra admiration needs extra evil eye prevention', 'She forgot herself and repeated it', 'One is for you, one is for the teacher'],
    ans: 1,
    exp: '"ma shaa alla tbaarak alla" is the intensified form — when admiration is extra strong, Lebanese people double up the protection phrases. The more you praise, the more protection needed.'
  },
];

const ALH_TIPS = [
  {
    title: '🔮 The Three "inshallas"',
    body: 'Lebanese people joke that "inshalla" has three meanings: (1) Enthusiastic + eye contact = yes, probably; (2) Casual with a shrug = polite maybe/no; (3) Said while walking away = definitely not happening. Learning to read the tone is as important as knowing the word. Non-Lebanese speakers often take every "inshalla" as a yes and get confused.'
  },
  {
    title: '😈 The evil eye (7asad) and mashalla',
    body: 'Lebanese culture (Christian and Muslim alike) takes the evil eye seriously. Admiring something beautiful — a baby, a house, someone\'s looks — without saying "ma shaa alla" is considered potentially harmful. It\'s not just a Muslim thing: Lebanese Christians say it just as often. Always say it before complimenting. If you forget and something bad happens, you\'ll be blamed.'
  },
  {
    title: '🙏 Alla as a social lubricant',
    body: '"Alla ykhallak" (may God keep you) is the Lebanese magic word for requests. Need someone to do you a favor? Start with "alla ykhallak." Need a vendor to lower the price? "Alla ykhallak." It transforms a demand into a gentle, affection-based appeal. It\'s impossible to be rude when invoking God\'s blessing on someone.'
  },
  {
    title: '⚡ Walla — the emphasis particle',
    body: '"W-alla" (by God) is used constantly for emphasis — "walla ma3rifsh" (I really don\'t know), "walla this is delicious," "walla I was shocked." It\'s not a religious oath in daily speech, more like "honestly" or "I swear." "W-alla el-3aDHiim" (by Almighty God) is the serious version — saved for when you really need to be believed.'
  },
  {
    title: '💔 Alla yir7amo — never forget',
    body: 'Whenever a deceased person is mentioned in any context — a story, a name, passing reference — Lebanese people automatically say "alla yir7amo" (m) or "alla yir7amha" (f). Forgetting this shows you\'re not culturally aware. It\'s not about being religious — it\'s social protocol. Even Lebanese atheists say it out of respect. If you don\'t know the gender, "alla yir7am ruu7o" (may God have mercy on his/her soul) is gender-neutral.'
  },
];

const ALH_ABOUT = `<p><strong>🕌 Allah in Lebanese Daily Speech</strong></p>
<p>Lebanese Arabic is saturated with references to God — not necessarily out of piety, but because these phrases are deeply embedded in the culture's social fabric. Both Christian and Muslim Lebanese use them interchangeably.</p>
<p><strong>The inshalla spectrum:</strong> Possibly the most misunderstood Arabic word. Context, tone, and body language determine whether it means "yes (hopefully)," "maybe (probably not)," or "absolutely never." Lebanese humor is built on this ambiguity — there are entire comedy sketches about non-Lebanese taking every "inshalla" literally.</p>
<p><strong>Mashalla as social armor:</strong> Saying "ma shaa alla" before a compliment is not optional — it's the social equivalent of knocking on wood. The evil eye (7asad) concept is deeply embedded across all Lebanese communities regardless of religion. A Lebanese parent who doesn't hear "ma shaa alla" before someone compliments their child will genuinely worry.</p>
<p><strong>Alla as a request tool:</strong> "Alla ykhallak" and "billaa 3aleek" transform requests into blessings. You're not demanding — you're invoking divine protection on the person you're asking. This makes it culturally inappropriate to refuse.</p>
<p><strong>After death — automatic phrases:</strong> "Alla yir7amo/yir7amha" follows any mention of a deceased person automatically. Missing it makes Lebanese people uncomfortable, like saying someone's name without the proper respect.</p>`;
