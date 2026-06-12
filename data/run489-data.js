// R489 — Lebanese Parenting & Kids coach (prefix: par)
const PAR_WORDS = [
  // family terms for kids
  {ar:'ولد', tr:'walad', en:'boy / son', cat:'family'},
  {ar:'بنت', tr:'bint', en:'girl / daughter', cat:'family'},
  {ar:'طفل', tr:'Tifl', en:'child / baby', cat:'family'},
  {ar:'رضيع', tr:'raaDii3', en:'infant / newborn', cat:'family'},
  {ar:'توأم', tr:'taw2am', en:'twins', cat:'family'},
  {ar:'إبني', tr:'ibni', en:'my son', cat:'family'},
  {ar:'بنتي', tr:'binti', en:'my daughter', cat:'family'},
  {ar:'حفيد', tr:'7afiid', en:'grandson', cat:'family'},
  // child activities
  {ar:'لعب', tr:'la3ab', en:'play / played', cat:'activities'},
  {ar:'رسم', tr:'rasam', en:'drew / drawing', cat:'activities'},
  {ar:'غنّى', tr:'ghanna', en:'sang / singing', cat:'activities'},
  {ar:'قرأ', tr:'2ara2', en:'read / reading', cat:'activities'},
  {ar:'نام', tr:'naam', en:'slept / sleeping', cat:'activities'},
  {ar:'بكى', tr:'baka', en:'cried / crying', cat:'activities'},
  {ar:'ركض', tr:'rakaD', en:'ran / running', cat:'activities'},
  {ar:'أكل', tr:'akal', en:'ate / eating', cat:'activities'},
  // schooling
  {ar:'روضة', tr:'rawDa', en:'kindergarten', cat:'school'},
  {ar:'ابتدائي', tr:'ibtidaa2i', en:'primary school', cat:'school'},
  {ar:'واجب', tr:'waajib', en:'homework', cat:'school'},
  {ar:'امتحان', tr:'imti7aan', en:'exam / test', cat:'school'},
  {ar:'معلمة', tr:'m3allme', en:'female teacher', cat:'school'},
  {ar:'تلميذ', tr:'tilmiiz', en:'student / pupil (male)', cat:'school'},
  {ar:'حقيبة مدرسة', tr:'7a2iibat madrase', en:'school bag', cat:'school'},
  {ar:'علامة', tr:'3alaame', en:'grade / mark', cat:'school'},
  // parenting
  {ar:'تربية', tr:'tarbiyye', en:'upbringing / raising children', cat:'parenting'},
  {ar:'عقّب', tr:'3a22ab', en:'disciplined / punished', cat:'parenting'},
  {ar:'دلّع', tr:'dalla3', en:'spoiled (verb — to spoil a child)', cat:'parenting'},
  {ar:'مدلّع', tr:'mdalla3', en:'spoiled (adj)', cat:'parenting'},
  {ar:'حنّان', tr:'7annaan', en:'affectionate / tender', cat:'parenting'},
  {ar:'حكى مع', tr:'7aka ma3', en:'talked with / had a talk with', cat:'parenting'},
  {ar:'فتّش', tr:'fattash', en:'searched / checked on', cat:'parenting'},
  // Lebanese kid phrases
  {ar:'ولد شاطر', tr:'walad shaaTir', en:'clever/good boy (praise)', cat:'phrases'},
  {ar:'بنت شاطرة', tr:'bint shaaTra', en:'clever/good girl (praise)', cat:'phrases'},
  {ar:'يسلم إيدك', tr:'yislam iidk', en:'may your hands be blessed (to a mother)', cat:'phrases'},
  {ar:'الله يحميه', tr:'alla y7miih', en:'may God protect him (said about a child)', cat:'phrases'},
  {ar:'ما بيحكي لّسا', tr:'ma b7ki lassa', en:'he\'s not talking yet', cat:'phrases'},
  {ar:'شو كبر', tr:'shu kibir', en:'how he\'s grown! (exclamation)', cat:'phrases'},
  {ar:'بيّهم مسؤول', tr:'bayyun mas2uul', en:'their father is responsible', cat:'phrases'},
  {ar:'صاحي', tr:'Saa7i', en:'awake (child is awake)', cat:'phrases'},
];

const PAR_DRILLS = [
  {
    q: 'What does "dalla3" mean in Lebanese parenting?',
    opts: [
      'To spoil a child — give too much without limits',
      'To educate — send to a good school',
      'To praise — compliment the child\'s work',
      'To discipline — set strict rules'
    ],
    ans: 0,
    note: '"Dalla3" (دلّع) = to spoil a child. "Mdalla3" (adj) = spoiled. Lebanese culture debates spoiling intensely — grandparents (sitto, teta) are famous for "mdalla3"-ing grandchildren. "7biib 3omri, khood ma btrid" (my life\'s love, take whatever you want) — classic sitto behavior. Parents: "3am tdalla3o ktir" (you\'re spoiling them too much).'
  },
  {
    q: 'How do you say "my son" and "my daughter" in Lebanese?',
    opts: [
      '"ibni" (my son) and "binti" (my daughter)',
      '"waladi" (my son) and "binti" (my daughter)',
      '"ibni" (my son) and "bintak" (your daughter)',
      '"walad" (boy) and "bint" (girl)'
    ],
    ans: 0,
    note: '"Ibni" = my son (إبني). "Binti" = my daughter (بنتي). In Lebanese, possessives attach directly. "Walad" = boy (general). "Bint" = girl (general). Lebanese parents use "7biib" (beloved) constantly: "7biib ibni" (my beloved son), "7biibti binti" (my beloved daughter). "Shu 7elo/7ile" = how cute he/she is.'
  },
  {
    q: 'What is "tarbiyye" in Lebanese culture?',
    opts: [
      'Upbringing / raising children — a core cultural value',
      'School enrollment — registering for classes',
      'Punishment — physical discipline',
      'Tutoring — private lessons'
    ],
    ans: 0,
    note: '"Tarbiyye" (تربية) = upbringing/raising children. One of the most important concepts in Lebanese culture. "Shu hala tarbiyye!" = what great upbringing! (compliment). "Ma fi tarbiyye" = bad upbringing (serious insult). Lebanese parents are judged by their children\'s manners. "El walad el mrabba" = the well-raised child.'
  },
  {
    q: 'What does "walad shaaTir" mean when said to a child?',
    opts: [
      'Clever/good boy — a common praise',
      'Naughty boy — mild scolding',
      'Tired boy — he needs rest',
      'Hungry boy — feed him'
    ],
    ans: 0,
    note: '"Walad shaaTir" (ولد شاطر) = clever/good boy. "Bint shaaTra" = clever/good girl. "ShaaTir/shaaTra" = clever, capable, good (multi-use). Used constantly as praise. "Shu shaaTir!" = how clever! Lebanese education culture is intense — academic success is critical. "Tiaal 7biib, khood 3alaame" (come darling, got a grade) is a common WhatsApp message from school.'
  },
  {
    q: 'What does "Alla y7miih" mean when someone says it about a child?',
    opts: [
      'May God protect him — blessing said about a child',
      'God willing he will be successful',
      'God bless his parents',
      'May God give him health'
    ],
    ans: 0,
    note: '"Alla y7miih" (الله يحميه) = may God protect him. Female: "Alla t7miiye". A common spontaneous blessing when seeing/talking about a child. Lebanon\'s religious fabric makes such phrases universal across communities. Also: "2inshalla yTla3 zayy bayyo" (God willing he turns out like his father — high compliment).'
  },
  {
    q: 'What is "rawDa" in Lebanon?',
    opts: ['Kindergarten', 'Primary school', 'High school', 'Nursery (under 3)'],
    ans: 0,
    note: '"RawDa" (روضة) = kindergarten (literally "garden"). Lebanese education: rawDa (3-5), ibtidaa2i (primary 6-11), mutawassiT (middle), saanawi (secondary). Lebanese schools are intensely competitive — parents start stressing about rawDa admissions. Private French and English-language schools dominate, creating pressure from age 3.'
  },
  {
    q: 'How do you express "how he\'s grown!" in Lebanese?',
    opts: ['shu kibir!', 'shu Tiwil!', 'shu 7elo!', 'shu shaaTir!'],
    ans: 0,
    note: '"Shu kibir!" (شو كبر) = how he\'s grown! A classic Lebanese exclamation when seeing a child you haven\'t seen in a while. "Kibir" = grew up/got big. Lebanese social protocol requires commenting on how much children have grown. "Kibirt ya 7biib" (you\'ve grown, darling) + a cheek pinch is the standard greeting.'
  },
  {
    q: 'What does "7annaan" mean in the context of parenting?',
    opts: [
      'Affectionate / tender — a warm, loving parent',
      'Strict / firm — a disciplinarian',
      'Generous — always giving gifts',
      'Protective — overprotective parent'
    ],
    ans: 0,
    note: '"7annaan" (حنّان) = affectionate/tender/warm-hearted. From "7anaan" = tenderness/compassion. Lebanese mothers are stereotypically described as extremely "7annaan" — the ultimate compliment. "Immak 7annaan ktir" = your mother is very affectionate. Contrast with "2assi" (harsh/strict). Lebanese parenting culture idealizes warmth ("7anaan") combined with ambition for children\'s success.'
  },
  {
    q: 'What is "imti7aan" and why is it so stressful in Lebanon?',
    opts: [
      'Exam / test — Lebanese school exams are high-stakes',
      'Report card — shown to parents',
      'Teacher evaluation — parent-teacher meeting',
      'School enrollment — registration test'
    ],
    ans: 0,
    note: '"Imti7aan" (امتحان) = exam/test. Lebanon\'s Baccalauréat (bakaluura) is one of the most intense exams in the Arab world. Families mobilize entirely during exam season. "3am b7aDDar 3al imti7aan" = preparing for the exam. Private tutors (teachers khususiyye), late nights, and intense family pressure are the norm. "Shu 3alaametk?" (what grade did you get?) is asked at every family gathering.'
  },
  {
    q: 'What does "yislam iidk" mean when said to a mother?',
    opts: [
      'May your hands be blessed — said to praise cooking/care',
      'May God protect your hands',
      'Thank you for your help',
      'Your hands are beautiful'
    ],
    ans: 0,
    note: '"Yislam iidk" (يسلم إيدك) = may your hands be blessed. Said to someone whose hands made something wonderful — usually a mother\'s cooking or a craftsperson\'s work. Female: "yislam iidk", male cook: "yislam iidk". One of Lebanese hospitality\'s most sincere compliments. "Yislam el iidin" (may the hands be blessed) is the general form.'
  },
];

const PAR_TIPS = [
  {
    title: 'Lebanese parenting culture',
    body: 'Lebanese parenting is intense and communal. "Tarbiyye" (upbringing) is a family and community affair — grandparents, aunts, uncles all contribute. Children are central to family life: "3alam bil walad" (all for the child) describes the family-first mentality. Lebanese parents sacrifice enormously for children\'s education and futures, often funding university abroad.'
  },
  {
    title: 'Education pressure',
    body: 'Lebanon has one of the highest private school attendance rates in the world. Parents sacrifice significantly for private French/English schools. "Baccalauréat" season (June exams) is a national stress event. "Shu 3alaametk bil bakaluura?" (what did you get on the Bac?) determines life trajectory. University in Lebanon (AUB, LAU, USJ) or abroad is the goal.'
  },
  {
    title: 'The spoiling paradox',
    body: '"Dalla3" (spoiling) is both criticized and practiced universally. Sitto (grandmother) spoils, parents discipline, creating the classic three-generation negotiation. "Ma fiik t7ki la sitto la2" (you can\'t say no to grandma) is universally understood. Lebanese children learn early to navigate different household authorities — useful for the complex Lebanese social world they\'ll inhabit.'
  },
  {
    title: 'Child blessings and protection',
    body: 'Blessing children is a constant Lebanese practice. "Alla y7miih" (God protect him), "ma3 el 3ayn" (evil eye protection), wearing blue evil eye beads (7ijaal). When complimenting a child, say "masha\'alla" (as God wills — prevents evil eye jealousy). Omitting "masha\'alla" when praising a child is seen as bad manners and potentially harmful.'
  },
  {
    title: 'Modern Lebanese parenting',
    body: 'Contemporary Lebanese parents balance traditional values with modernity. "WhatsApp parents group" (majmu3et dawle el awlaad) is essential. Helicopter parenting is common in Beirut\'s middle class. Children in Lebanon navigate Arabic, French, and English simultaneously — trilingualism is standard. "Wein ra7 tidrus?" (where will you study?) is asked from age 10.'
  },
];

const PAR_ABOUT = `
<p><strong>👶 Lebanese Parenting & Kids</strong></p>
<p>Children are the center of Lebanese family life. The concept of "tarbiyye" (upbringing/raising) is fundamental — how a child is raised reflects on the entire family, and raising children well is considered one of life's primary purposes.</p>
<p><strong>Education obsession:</strong> Lebanon has one of the highest rates of private school enrollment in the world. Parents work multiple jobs to afford private French or English-medium schools. The Baccalauréat is a life-defining moment. Lebanese universities (AUB, LAU) are among the region's best, but studying abroad (Paris, London, New York) is the ultimate aspiration.</p>
<p><strong>The three-generation household:</strong> Lebanese grandparents (sitto/teta for grandmother, jiddo/seedo for grandfather) are deeply involved in childcare. The dynamic of "parents discipline, grandparents spoil" (dalla3) is a universal Lebanese family comedy. Sitto's cooking and unconditional love are legendary cultural touchstones.</p>
<p><strong>Child blessings:</strong> Never compliment a Lebanese child without saying "masha'alla" — it protects against the evil eye (3ayn). "Alla y7mik" (may God protect you), blue evil-eye beads, and religious amulets are universal. This isn't superstition — it's cultural care.</p>
`;
