// R492 — Lebanese Folk Beliefs & Superstitions (prefix: fbl)
const FBL_WORDS = [
  // evil eye
  {ar:'عين', tr:'3ayn', en:'evil eye / the eye', cat:'evil_eye'},
  {ar:'حسد', tr:'7asad', en:'envy / evil eye envy', cat:'evil_eye'},
  {ar:'نظرة', tr:'naDra', en:'gaze (that causes evil eye)', cat:'evil_eye'},
  {ar:'خرزة زرقا', tr:'kharzi zar2a', en:'blue bead (evil eye charm)', cat:'evil_eye'},
  {ar:'حجاب', tr:'7ijaab', en:'amulet / protective charm (lit. veil)', cat:'evil_eye'},
  {ar:'مصاب بالعين', tr:'mSaab bil 3ayn', en:'afflicted by evil eye', cat:'evil_eye'},
  // protection
  {ar:'تعويذة', tr:'ta3wiize', en:'amulet / talisman', cat:'protection'},
  {ar:'بخور', tr:'bkhuur', en:'incense (burned for protection)', cat:'protection'},
  {ar:'ملح', tr:'mal7', en:'salt (used in protection rituals)', cat:'protection'},
  {ar:'بركة', tr:'barke', en:'blessing / divine grace', cat:'protection'},
  {ar:'رقية', tr:'ru2ye', en:'incantation / Quranic recitation for healing', cat:'protection'},
  {ar:'ربّنا يستر', tr:'rabbna yistir', en:'may God cover/protect us', cat:'protection'},
  // key phrases
  {ar:'ماشاالله', tr:'masha2alla', en:'as God wills (said to protect from evil eye)', cat:'phrases'},
  {ar:'إنشاالله', tr:'2inshalla', en:"God willing (acceptance of God's plan)", cat:'phrases'},
  {ar:'بعيد الشرّ', tr:'b3iid el sharr', en:'far from evil (warding phrase)', cat:'phrases'},
  {ar:'الله يحميك', tr:'alla y7miik', en:'may God protect you', cat:'phrases'},
  {ar:'تفّ تفّ', tr:'tiff tiff', en:'spit spit (ward off evil eye — said about cute child)', cat:'phrases'},
  {ar:'عيني عليك', tr:'3eeni 3alayk', en:'my eye is on you (protective — NOT malicious)', cat:'phrases'},
  {ar:'الله يبعد', tr:'alla yb3id', en:'may God keep away (evil)', cat:'phrases'},
  // luck & fate
  {ar:'حظّ', tr:'7aZZ', en:'luck / fortune', cat:'luck'},
  {ar:'نصيب', tr:'naSiib', en:"destiny / one's God-given share", cat:'luck'},
  {ar:'زهر', tr:'zahr', en:'luck / dice (chance)', cat:'luck'},
  {ar:'بخت', tr:'bakht', en:'luck / fortune (Persian-origin word)', cat:'luck'},
  {ar:'طالع', tr:'Taali3', en:'fortune / fate (lit. rising star)', cat:'luck'},
  {ar:'مكتوب', tr:'maktuub', en:'written — fate is predetermined by God', cat:'luck'},
  // omens & signs
  {ar:'فأل', tr:'fa2l', en:'omen (usually good)', cat:'omens'},
  {ar:'شؤم', tr:'shu2m', en:'bad luck / ill omen', cat:'omens'},
  {ar:'علامة', tr:'3alaame', en:'sign / omen', cat:'omens'},
  {ar:'ميمون', tr:'maymun', en:'lucky / auspicious', cat:'omens'},
  {ar:'مشؤوم', tr:'mash2uum', en:'unlucky / ill-omened', cat:'omens'},
  // rituals
  {ar:'قرع خشب', tr:'2ar3 khashab', en:'knock on wood', cat:'rituals'},
  {ar:'حرق البخور', tr:'7ar2 el bkhuur', en:'burning incense (protection ritual)', cat:'rituals'},
  {ar:'عزيمة', tr:'3aziime', en:'incantation / ritual recitation', cat:'rituals'},
  {ar:'خيطة زرقا', tr:'khiiTa zar2a', en:'blue thread (tied on wrist for protection)', cat:'rituals'},
  {ar:'رمي الملح', tr:'rami el mal7', en:'throwing salt (to ward off evil)', cat:'rituals'},
];

const FBL_DRILLS = [
  {
    q: 'What is "3ayn" (العين) and why do Lebanese people fear it?',
    opts: [
      'The evil eye — a harmful gaze that brings bad luck or illness',
      'A beautiful compliment — said when admiring someone',
      'A protective blessing — said to ward off danger',
      'An old proverb — meaning to watch out for trouble'
    ],
    ans: 0,
    note: '"3ayn" (عين) = the evil eye, a malevolent gaze that can bring misfortune, illness, or bad luck to the person receiving it. Believed across Lebanese communities — Christian, Muslim, Druze alike. Triggered by excessive praise or admiration without "masha\'alla." "Haada maSaab bil 3ayn" = this person has been hit by the evil eye. Understanding this is cultural literacy for anyone interacting with Lebanese people.'
  },
  {
    q: 'When MUST you say "masha\'alla" (ماشاالله) in Lebanese culture?',
    opts: [
      'Whenever you compliment a person, child, or possession — to protect against evil eye',
      'Only at religious ceremonies — it\'s a specifically Islamic phrase',
      'When something bad happens — to accept God\'s will',
      'When saying goodbye — as a blessing for safe travel'
    ],
    ans: 0,
    note: '"Masha\'alla" (ماشاالله) = "as God wills" — a protective phrase said when complimenting ANYTHING. Admiring a baby? Say it. Praising a house? Say it. Complimenting someone\'s success? Say it. Omitting "masha\'alla" is considered bad manners and potentially sends the evil eye unintentionally. "Shu 7elo masha\'alla!" = how cute, masha\'alla! — the correct form. Lebanese will visibly relax if you remember to say it.'
  },
  {
    q: 'What is the "kharzi zar2a" (خرزة زرقا) and why is it blue?',
    opts: [
      'Blue evil eye bead — the color blue repels the evil eye',
      'A lucky coin — blue for wealth and prosperity',
      'A wedding bead — blue for purity and fidelity',
      'A healing stone — blue for calming anxiety'
    ],
    ans: 0,
    note: '"kharzi zar2a" = blue bead/evil eye charm. Blue eyes are said to be most susceptible to giving the evil eye — so blue repels it. The "nazar" charm is found hanging in Lebanese homes, cars, on babies. Turquoise and cobalt blue are the protective colors. Lebanon is awash in blue evil eye charms at every market. Tourists buy them as souvenirs — Lebanese wear them seriously as real protection.'
  },
  {
    q: 'What does "tiff tiff" (تفّ تفّ) mean when said about a child?',
    opts: [
      'Spit spit — a gesture to ward off evil eye after complimenting a child',
      'How cute! — an enthusiastic compliment to a baby',
      'Poor thing — expressing sympathy for a sick child',
      'Sleep sleep — a lullaby phrase to calm a baby'
    ],
    ans: 0,
    note: '"Tiff tiff" (تفّ تفّ) = "spit spit" — a ritual warding phrase + spitting gesture. After admiring a child (or when evil eye risk is felt), you say this while making a symbolic spitting motion. The spit symbolically breaks the evil eye\'s power. Grandmothers do this constantly. If you compliment a child and forget "masha\'alla", at least do "tiff tiff." Both together is ideal. This is affectionate, not rude.'
  },
  {
    q: 'What is "naSiib" (نصيب) in Lebanese thinking?',
    opts: [
      "One's God-given destiny — what is written for you",
      'A lucky number — chosen at birth for good fortune',
      'A traditional blessing — said at weddings',
      'A superstitious ritual — performed on special days'
    ],
    ans: 0,
    note: '"NaSiib" (نصيب) = one\'s destiny, God\'s portion allocated to each person. Profoundly important in Lebanese culture — explains marriages ("naSiibna"), careers, children, life outcomes. "Ma kaan naSiibna" = it wasn\'t meant to be. "Haydaa naSiib" = this is fate. "2inshalla yiiji naSiibna" = God willing our destiny will come — said about finding a spouse. Frees from blame while maintaining hope.'
  },
  {
    q: 'What is "barke" (بركة) and why do Lebanese seek it?',
    opts: [
      'Divine blessing / grace — a sacred force that brings abundance and protection',
      'Physical strength — the blessing of good health',
      'Financial luck — money that multiplies unexpectedly',
      'Social status — respect earned through good deeds'
    ],
    ans: 0,
    note: '"Barke" (بركة) = divine blessing/grace. A qualitative force that makes things flourish beyond normal. "Fi barke" in food = there\'s enough for everyone (the food multiplies miraculously). People, holy sites, and religious figures are said to have "barke." Touching something or someone with "barke" transfers it. Lebanese food always has "barke" when the host is generous — the pot never empties.'
  },
  {
    q: 'What does "maktuub" (مكتوب) literally mean — and what does it imply?',
    opts: [
      'Written — fate is written/predetermined by God',
      'Broken — something that cannot be fixed',
      'Hidden — a secret that must not be revealed',
      'Blessed — touched by divine grace'
    ],
    ans: 0,
    note: '"Maktuub" (مكتوب) = written. Fate is literally "written" by God before birth. "Maktuub 3alayk" = it was written for you (your destiny). "Ma maktuub" = it wasn\'t written (not meant to be). This fatalistic worldview coexists with intense Lebanese ambition — people work incredibly hard while accepting that ultimate outcomes are "maktuub." Not contradictory: try your best, God decides the rest.'
  },
  {
    q: 'What is "2ar3 khashab" (قرع خشب) and when do you do it?',
    opts: [
      'Knock on wood — done after saying something that might tempt bad luck',
      'A prayer ritual — knocking on a mosque or church door',
      'A greeting — knocking to announce your arrival respectfully',
      'A game — played by children to decide who goes first'
    ],
    ans: 0,
    note: '"2ar3 khashab" (قرع خشب) = knock on wood — literally "strike the wood." Done when you\'ve said something boastful or tempting fate: "ma mraDtu halsene, 2ar3 khashab" = I haven\'t been sick this year, knock on wood. Lebanese use it constantly after any statement about good luck, health, or fortune. Sometimes people knock on their own head if no wood is nearby — the gesture matters more than the material.'
  },
  {
    q: 'What is "bkhuur" (بخور) used for in Lebanese homes?',
    opts: [
      'Incense burned for spiritual protection — warding off evil spirits and bad energy',
      'A cooking spice — used in traditional Lebanese recipes',
      'A medicine — burned to treat respiratory problems',
      'A celebration ritual — burned only at weddings and births'
    ],
    ans: 0,
    note: '"Bkhuur" (بخور) = incense. Burned in Lebanese homes for spiritual protection, purification, and to ward off evil spirits and evil eye. The smoke carries prayers upward. Used after conflicts, illness, or when something feels "off" in the house. Traditional Lebanese homes burn incense regularly — Thursday evenings, before prayers, after a visitor who felt negative. Church incense ("lubbaan") has identical protective symbolism.'
  },
  {
    q: 'What is "7asad" (حسد) and how is it different from "3ayn"?',
    opts: [
      '7asad = envy (the feeling); 3ayn = evil eye gaze (the effect) — envy causes the eye',
      '7asad = good luck; 3ayn = bad luck — opposites',
      '7asad = a prayer; 3ayn = a curse — related rituals',
      '7asad = the amulet; 3ayn = the person — protection vs. threat'
    ],
    ans: 0,
    note: '"7asad" (حسد) = envy/jealousy — the internal feeling of wanting what others have. "3ayn" = the evil eye — the harmful gaze that results from 7asad. Envy generates the evil eye. "7asiid" = envious person (someone who gives evil eye). Lebanese social behavior often involves not showing off wealth publicly — to avoid attracting 7asad. "Bii3raf yi7sid" = he knows how to give the evil eye (warning about a dangerous envious person).'
  },
];

const FBL_TIPS = [
  {
    title: 'Evil eye: universal across religions',
    body: "Lebanese belief in the evil eye (3ayn) cuts across all religious communities — Sunni, Shia, Christian, Druze. Blue eye beads hang in churches, mosques, and secular homes alike. This is not specifically Islamic but a pre-Islamic Middle Eastern tradition absorbed by all communities. When in Lebanon, compliment children with \"masha'alla\" regardless of your or the family's religion — it's courtesy, not theology."
  },
  {
    title: "Masha'alla: the mandatory protection",
    body: '"Masha\'alla" is the single most important protective phrase in Lebanese folk culture. Complimenting anything beautiful, healthy, or successful without it is considered irresponsible — you might accidentally send the evil eye. The phrase acknowledges God as the source of all good things, deflecting envy. Lebanese will visibly relax or add "masha\'alla" themselves if you forget it. Learn it. Use it always.'
  },
  {
    title: 'Fate (naSiib/maktuub) and ambition',
    body: 'Lebanese hold two seemingly contradictory beliefs: fate is written (maktuub) AND you must work intensely hard. This is not cognitive dissonance — it\'s a philosophy. Work as hard as possible; the outcome is in God\'s hands. "2inshalla" isn\'t laziness — it\'s acknowledging that despite your best effort, God decides. This coexists with Lebanese being among the most entrepreneurially driven people in the world.'
  },
  {
    title: 'Protection layers in the home',
    body: "Lebanese homes have layered spiritual protection: blue eye beads at the entrance, Quranic verses (Muslim families) or crosses/icons (Christian families), incense burned regularly. After a visitor leaves who felt negative, many Lebanese burn bkhuur to \"clear the energy.\" Salt thrown toward an envious person. Hand of Fatima (khams) charms are pan-community. These practices overlap with and reinforce formal religious observance."
  },
  {
    title: 'When to take folk beliefs seriously',
    body: 'Even secular educated Lebanese often follow these practices culturally. A Lebanese doctor will explain evil eye is superstition — then make sure to say "masha\'alla" about your children. Modernity and folk belief coexist without embarrassment. When in Lebanon: say "masha\'alla", accept protective phrases graciously, don\'t mock the blue beads. It\'s cultural courtesy, not religious commitment. Participation shows respect and intelligence.'
  },
];

const FBL_ABOUT = `
<p><strong>🧿 Lebanese Folk Beliefs & Superstitions</strong></p>
<p>Lebanese folk beliefs form a rich parallel world alongside formal religion. Ancient pre-Islamic traditions, blended with Islamic and Christian practice, create a unique set of beliefs shared across Lebanon's diverse communities. The evil eye (3ayn), protective amulets, fate (naSiib/maktuub), and blessing (barke) are part of everyday Lebanese life — not fringe practices but mainstream cultural literacy.</p>
<p><strong>The evil eye:</strong> "3ayn" is not just a belief — it's social protocol. Every compliment must be accompanied by "masha'alla." Blue beads hang everywhere. Children are protected from birth. Even Lebanese people who intellectually dismiss it still practice it — because cultural belonging matters more than metaphysical certainty. Knowing this unlocks a huge dimension of Lebanese conversation.</p>
<p><strong>Fate and agency:</strong> "Maktuub" (written/fated) and "2inshalla" (God willing) describe a worldview where God holds the ultimate outcome while humans are expected to try with everything they have. Lebanese entrepreneurialism and fatalism aren't opposites — they're a philosophy: work as if it all depends on you, accept as if it all depends on God.</p>
<p><strong>Cross-community beliefs:</strong> These folk practices unite Lebanese across religious lines. A Maronite Christian grandmother and a Shia Muslim grandmother use identical protective phrases and amulets. Folk belief is Lebanon's truly ecumenical tradition — older and more universal than any sect's theology.</p>
`;
