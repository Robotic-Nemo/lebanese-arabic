// R555 — NEW FEATURE: Lebanese Neighbourhood & Community Life coach (prefix: 7ay)

const HAY_WORDS = [
  // cat: places
  { ar: 'الحي', tr: 'el-7ayy', en: 'The neighbourhood / district', cat: 'places' },
  { ar: 'الحارة', tr: 'el-7aara', en: 'The alley / old quarter — intimate residential lane', cat: 'places' },
  { ar: 'البقالة', tr: 'el-ba2aale', en: 'The corner grocery store — neighbourhood institution', cat: 'places' },
  { ar: 'المخبز', tr: 'el-makhbaz', en: 'The bakery (neighbourhood bread oven)', cat: 'places' },
  { ar: 'الساحة', tr: 'el-saa7a', en: 'The square / open space — where community gathers', cat: 'places' },
  { ar: 'الكنيسة / الجامع', tr: 'el-kniise / el-jaami3', en: 'Church / Mosque (the religious anchor of each quarter)', cat: 'places' },
  { ar: 'صالون الحلاقة', tr: 'saaluun el-7alaa2a', en: 'The barbershop — neighbourhood news exchange', cat: 'places' },
  { ar: 'الدكان', tr: 'ed-dakkaan', en: 'The small shop / stall', cat: 'places' },

  // cat: neighbours
  { ar: 'الجار', tr: 'el-jaar', en: 'The neighbour (male) — extremely important social role in Lebanon', cat: 'neighbours' },
  { ar: 'الجارة', tr: 'el-jaare', en: 'The neighbour (female)', cat: 'neighbours' },
  { ar: 'أهل الحي', tr: 'ahl el-7ayy', en: 'The people of the neighbourhood — the community', cat: 'neighbours' },
  { ar: 'صاحب الدكان', tr: 'SaaHib ed-dakkaan', en: 'The shopkeeper — usually knows everyone by name', cat: 'neighbours' },
  { ar: 'ابن الحي', tr: 'ibn el-7ayy', en: 'Son of the neighbourhood — someone who grew up here (respected local)', cat: 'neighbours' },
  { ar: 'الزعيم', tr: 'ez-za3iim', en: 'The local strongman / patron — political community leader', cat: 'neighbours' },

  // cat: interaction
  { ar: 'تفضل / تفضلي', tr: 'tafaDDal / tafaDDali', en: 'Please come in / be my guest (universal Lebanese welcome)', cat: 'interaction' },
  { ar: 'الدار داركم', tr: 'ed-daar daakon', en: 'This house is your house — the ultimate hospitality phrase', cat: 'interaction' },
  { ar: 'اتفضل على القهوة', tr: 'itfaDDal 3al-2ahwe', en: 'Come have coffee — the neighbourhood social invitation', cat: 'interaction' },
  { ar: 'كيف الأهل؟', tr: 'kiif el-ahl?', en: 'How is the family? — standard neighbour greeting', cat: 'interaction' },
  { ar: 'شو أخبار الحي؟', tr: 'shu akhbaar el-7ayy?', en: 'What\'s the neighbourhood news? — local gossip inquiry', cat: 'interaction' },
  { ar: 'الله يعطيك العافية', tr: 'allah ya3Tiik el-3aafye', en: 'God give you health — said to someone working or after a favour', cat: 'interaction' },

  // cat: community
  { ar: 'الطائفة', tr: 'eT-Taa2ife', en: 'The sect / religious community — defines Lebanon\'s social fabric', cat: 'community' },
  { ar: 'العيلة', tr: 'el-3eele', en: 'The extended family / clan — the primary social unit', cat: 'community' },
  { ar: 'الوجيه', tr: 'el-wajiih', en: 'The notable / respected figure in the community', cat: 'community' },
  { ar: 'الصلح', tr: 'eS-Sul7', en: 'The reconciliation / peace-making — community conflict resolution', cat: 'community' },
  { ar: 'النسيب', tr: 'en-nasiib', en: 'In-law / connected-by-marriage (broad sense: socially connected)', cat: 'community' },

  // cat: issues
  { ar: 'الانقطاع', tr: 'el-in2iTaa3', en: 'The power cut — daily neighbourhood reality in Lebanon', cat: 'issues' },
  { ar: 'موتور الجيران', tr: 'mootor el-jiiraan', en: 'The neighbours\' generator — shared infrastructure of Lebanese life', cat: 'issues' },
  { ar: 'الاشتراك', tr: 'el-ishtiraak', en: 'The subscription — paying the generator man monthly', cat: 'issues' },
  { ar: 'الضوضاء', tr: 'eD-Dawwaa2', en: 'The noise — a perennial neighbourhood complaint', cat: 'issues' },
  { ar: 'الحارس', tr: 'el-7aaris', en: 'The building concierge / night watchman (often migrant worker)', cat: 'issues' },
];

const HAY_DRILLS = [
  {
    q: 'You arrive at a Lebanese neighbour\'s door and they immediately say "ed-daar daakon." What are they communicating?',
    opts: [
      '"This house is your house" — the highest hospitality phrase',
      '"You\'re late" — polite reproach about the timing',
      '"The door is open" — literal statement about the door',
      '"Welcome to the neighbourhood" — said to new arrivals only'
    ],
    ans: 0,
    exp: '"Ed-daar daakon" (this house is your house) is one of the most powerful hospitality phrases in Lebanese Arabic. It\'s not literal — no one is giving you their house. It means: you are welcome here completely, use everything as if it were yours, there is no distance between us. Responding appropriately means accepting warmly: "ya3tiikon el-3aafye" (may God give you health) or "kattar kheirak" (may your goodness multiply). Refusing the coffee that follows is a social mistake.'
  },
  {
    q: 'The Lebanese electricity grid cuts power for 12+ hours a day. What community infrastructure has developed in response?',
    opts: [
      'Generator subscriptions — neighbours share a generator and pay monthly (el-ishtiraak)',
      'Solar panels — every home has switched to solar',
      'Candles — traditional Lebanese solution',
      'Battery banks — every family buys their own'
    ],
    ans: 0,
    exp: '"El-ishtiraak" (the subscription) is uniquely Lebanese — neighbourhood generator owners (called generator men) run private electrical networks that fill the gap when state power cuts. You pay monthly for a limited number of amps. "Mootor el-jiiraan" (the neighbours\' generator) is shared neighbourhood infrastructure. This informal system is so embedded that it has its own vocabulary, social obligations, and occasional disputes. Lebanese people know exactly how many amps they have on their subscription.'
  },
  {
    q: 'Who is "ibn el-7ayy" and why does this status matter?',
    opts: [
      'Son of the neighbourhood — a respected local who grew up here, carries social weight',
      'The youngest son in a family',
      'The neighbourhood\'s elected representative',
      'A boy who delivers bread in the morning'
    ],
    ans: 0,
    exp: '"Ibn el-7ayy" (son of the neighbourhood) means someone who grew up in this specific quarter, whose family is known here, who carries the neighbourhood\'s social history. This status provides informal protection, social credit, and community belonging. Lebanon\'s deeply territorial social structure means where you\'re from (which neighbourhood, village, or region) is a primary identity marker. "Ana ibn el-7ayy" (I\'m a son of this neighbourhood) is a statement of belonging with real social consequences.'
  },
  {
    q: 'A Lebanese neighbour knocks on your door mid-morning and says "itfaDDal 3al-2ahwe." What is the appropriate response?',
    opts: [
      'Accept and come in for coffee — refusing is socially awkward',
      'Say you\'re busy and decline — coffee is optional',
      'Ask if there\'s a problem — this phrase signals bad news',
      'Invite them to your place instead — reciprocity is expected immediately'
    ],
    ans: 0,
    exp: '"Come have coffee" is the Lebanese neighbourhood social currency. Refusing without a serious reason (illness, emergency) signals coldness or superiority. Lebanese community life runs on these drop-in coffee visits — news is exchanged, alliances maintained, problems aired. The ba2aale (corner store) and the morning coffee visit are the two main information networks of Lebanese neighbourhood life. Accepting builds the relationship; a gentle "bass ma inta msharrafna" (your visit honours us) while briefly declining is tolerated, but repeated refusals create distance.'
  },
  {
    q: 'What is "ez-za3iim" in the Lebanese neighbourhood context?',
    opts: [
      'The local strongman / political patron who provides services and protection',
      'The oldest man in the neighbourhood',
      'The religious leader of the mosque or church',
      'The elected mayor of the district'
    ],
    ans: 0,
    exp: '"Ez-za3iim" (the leader/strongman) is the Lebanese confessional patronage system made flesh. Every neighbourhood has figures who provide connections: help getting a government job, fixing a bureaucratic problem, resolving a dispute. In exchange, they receive political loyalty. This is Lebanon\'s informal social services system — the state is weak, so the za3iim fills the gap. Understanding the za3iim is understanding why Lebanese politics is personal, not ideological.'
  },
  {
    q: 'Your Lebanese neighbour says "kiif el-ahl?" every time they see you. What are they really asking?',
    opts: [
      'Ritual social check-in — how is the family, a sign of care and connection',
      'Literal inquiry about specific family members they\'ve met',
      'Asking if anyone is sick — it\'s a health concern phrase',
      'Checking if your family needs help with something'
    ],
    ans: 0,
    exp: '"Kiif el-ahl?" (how is the family?) is a ritual Lebanese greeting that signals: I see you as part of a family network, I acknowledge your people, I care about your collective wellbeing. The expected answer is "mniH, kattar kheirak" (fine, may your goodness multiply). Lebanese identity is collective — you don\'t just greet the individual, you greet through their family. Asking about "el-ahl" is also a subtle way to check the family\'s social status and recent news without asking directly.'
  },
  {
    q: 'What role does the corner ba2aale (grocery store) play in Lebanese neighbourhood life?',
    opts: [
      'Social hub — the owner knows everyone, is a news source, extends credit to regulars',
      'Only a commercial transaction point — Beirut is modernizing',
      'Mainly for emergencies — Lebanese buy in supermarkets now',
      'Primarily sells bread and water — limited to basics'
    ],
    ans: 0,
    exp: 'The "ba2aale" is a Lebanese institution. The owner ("SaaHib el-ba2aale") knows every family\'s purchases, extends credit without formal documentation (running tabs are normal), and is one of the neighbourhood\'s main news nodes. Lebanese people describe their neighbourhood by their ba2aale and their baker. Switching to a supermarket means giving up social credit, community knowledge, and informal financial flexibility — many Lebanese families maintain both relationships in parallel.'
  },
  {
    q: 'Two families in the neighbourhood have a dispute. The community elder initiates "eS-Sul7." What does this mean?',
    opts: [
      'Formal community reconciliation — a mediated peace-making ceremony',
      'A legal complaint filed with the municipality',
      'A vote among neighbours on who is right',
      'Religious intervention — the imam or priest arbitrates'
    ],
    ans: 0,
    exp: '"El-Sul7" (the reconciliation/peace) is the Lebanese community justice system — formal mediation between disputing parties by respected community figures. It\'s older than the state and often more effective. Key figures (wujahaa = notables, religious leaders, family elders) bring both sides together, establish what happened, and negotiate a settlement that preserves everyone\'s dignity. "Emal Sul7" (make peace) is an instruction, not a suggestion. Lebanese social pressure to accept Sul7 is enormous — refusing it isolates you from the community.'
  },
  {
    q: 'What does "eT-Taa2ife" mean and why is it central to Lebanese neighbourhood life?',
    opts: [
      'The religious sect — defines which neighbourhood you live in, who you socialize with, and your political identity',
      'The local council — the governing body of the neighbourhood',
      'The extended family — the social unit within a neighbourhood',
      'The community festival — a seasonal gathering of neighbours'
    ],
    ans: 0,
    exp: '"Et-Taa2ife" (the sect) is the invisible architecture of Lebanese society. Lebanon has 18 recognized religious communities — Maronite, Sunni, Shia, Druze, Greek Orthodox, and more. Each has its own neighbourhoods, schools, hospitals, charities, and political parties. Knowing someone\'s Taa2ife tells you their likely neighbourhood, political allegiance, and which social networks they access. This isn\'t prejudice — it\'s the structural reality of how Lebanese society distributes resources and identity.'
  },
  {
    q: 'A Lebanese neighbour does you a significant favour. You say "allah ya3Tiik el-3aafye." What are you expressing?',
    opts: [
      'God give you health — gratitude expressed through a blessing',
      'Thank you for the gift — el-3aafye means gift',
      'God be with you — it\'s a farewell phrase',
      'May you stay healthy — it\'s a wish for their recovery'
    ],
    ans: 0,
    exp: '"Allah ya3Tiik el-3aafye" (God give you health/strength) is the standard Lebanese gratitude expression said when someone has worked hard, done you a favour, or helped you out. It\'s richer than "shukran" — it invokes God\'s blessing as the currency of thanks. The response is "allah ya3Tiik el-3aafye" back, or "wiyyaakon" (and with you). This exchange structure — where thanks are given through blessings not just words — is characteristic of Lebanese warmth. The formula matters; it signals that you know the social grammar.'
  },
];

const HAY_TIPS = [
  '<strong>The neighbour is sacred in Lebanese culture:</strong> The Arabic proverb "el-jaar 2abl el-daar" (the neighbour before the house) is lived in Lebanon — knowing your neighbours, maintaining good relations, and accepting obligations of mutual aid are not optional. A new Lebanese tenant introduces themselves to the whole floor. Disputes with neighbours are handled through mediation, not legal channels. Building a new home without first consulting and informing neighbours is considered rude. Neighbourhood relations precede personal convenience.',
  '<strong>The generator economy:</strong> Lebanon\'s chronic electricity crisis created an entire informal economy around neighbourhood generators. Understanding "el-ishtiraak" (the subscription), "el-mootor" (the generator), and "awdit et-tahreeb" (the power coming back) is essential Lebanese vocabulary. Generator men are small-scale capitalists who sometimes provide better service than the state. During the 2019-present economic crisis, many Lebanese households halved their amps or went without generator power — tracking who had which subscription became social information.',
  '<strong>Coffee as social contract:</strong> In Lebanese neighbourhood culture, the offer of coffee is a social contract. The ba2aale gives you credit (writes it in a notebook), the neighbour offers coffee, the barber knows your news. All of these are relationship maintenance. Accepting coffee is accepting the relationship; repeated refusals signal social withdrawal. Foreign residents in Lebanon who learn to say yes to coffee invitations report immediate and dramatic improvements in neighbourhood integration.',
  '<strong>The sectarian geography of neighbourhoods:</strong> Lebanese cities are informally sectarian — neighbourhoods tend to have religious majorities (mostly Sunni Beirut, mostly Christian East Beirut, mostly Shia South Beirut, mixed Hamra, etc.). This doesn\'t mean exclusion — Lebanese people move and mix extensively — but it shapes the character of each 7ayy: which bakeries are open during which holidays, which political posters line the streets, which community leaders matter. Understanding this geography prevents social missteps.',
  '<strong>Wasta works through neighbourhood networks:</strong> "Wasta" (social connections / pull) is how things get done in Lebanon — government appointments, hospital access, bureaucratic shortcuts. The neighbourhood (7ayy) is where wasta networks are built. The za3iim, the wajiihs, and the connected community members form the web that routes around Lebanon\'s broken state institutions. Making yourself known in a neighbourhood — through coffee, through the ba2aale, through showing up at community events — is how you build the social capital that becomes wasta when you need it.',
];

const HAY_ABOUT = 'Lebanese neighbourhood life (el-7ayy) is where the abstract values of Lebanese culture become concrete daily practice. The hospitality, the community obligation, the sectarian identity, the informal economy — all of these play out most visibly at the neighbourhood level. Lebanon has no strong state to rely on, so communities have built parallel systems: generator networks, credit at the ba2aale, wasta through the za3iim, justice through el-Sul7. The 7ayy is also where Lebanon\'s famous resilience lives — during the civil war, during economic collapse, during power cuts lasting 20+ hours — neighbourhood networks provided what the state could not. Understanding el-7ayy means understanding why Lebanese people are both intensely community-oriented and deeply skeptical of institutions: the community has delivered, the state has not.';
