// R543 — NEW FEATURE: Lebanese Terms of Address & Titles coach (prefix: ttl)

const TTL_WORDS = [
  // cat: formal
  { ar: 'أستاذ / أستاذة', tr: 'ustaaz / ustaaze', en: 'Teacher / educated person (used for anyone with education or status)', cat: 'formal' },
  { ar: 'دكتور / دكتورة', tr: 'doktoor / duktoore', en: 'Doctor (used for ANY university graduate — not just medical doctors)', cat: 'formal' },
  { ar: 'مهندس / مهندسة', tr: 'muhandis / muhandise', en: 'Engineer (title used in address, not just job description)', cat: 'formal' },
  { ar: 'محامي / محامية', tr: 'mu7aami / mu7aamiye', en: 'Lawyer (used as a title of address)', cat: 'formal' },
  { ar: 'معلم / معلمة', tr: 'ma3allim / ma3allime', en: 'Master / craftsman / boss (respectful for skilled trades)', cat: 'formal' },
  { ar: 'رئيس', tr: 'ra2iis', en: 'President / chief / boss (title for anyone in charge)', cat: 'formal' },

  // cat: religious
  { ar: 'حاج / حاجة', tr: '7aaj / 7aaje', en: 'One who has done the pilgrimage — also used for any older respected person', cat: 'religious' },
  { ar: 'شيخ', tr: 'sheikh', en: 'Sheikh (religious leader or elder of respect)', cat: 'religious' },
  { ar: 'أبونا', tr: 'abuuna', en: 'Father (Catholic/Orthodox priest form of address)', cat: 'religious' },
  { ar: 'قسيس', tr: '2assiis', en: 'Protestant pastor', cat: 'religious' },
  { ar: 'إمام', tr: 'imaam', en: 'Imam (Muslim prayer leader)', cat: 'religious' },

  // cat: family
  { ar: 'أبو ...', tr: 'abu ...', en: 'Father of [name] — used as a respectful adult address', cat: 'family' },
  { ar: 'أم ...', tr: 'umm ...', en: 'Mother of [name] — used as a respectful adult address', cat: 'family' },
  { ar: 'عمو', tr: '3ammo', en: 'Uncle (used for any older man, not just relatives)', cat: 'family' },
  { ar: 'ستو', tr: 'sitto', en: 'Grandmother / old woman (used respectfully for elderly women)', cat: 'family' },
  { ar: 'تيتا', tr: 'tiita', en: 'Grandma (affectionate, used for grandmothers or sweet old ladies)', cat: 'family' },
  { ar: 'جدو', tr: 'jeddo', en: 'Grandpa (affectionate, used for grandfathers or kind old men)', cat: 'family' },

  // cat: casual
  { ar: 'زلمي / يا زلمي', tr: 'zalameh / ya zalameh', en: 'Man / buddy (informal address between men)', cat: 'casual' },
  { ar: 'يا عيني', tr: 'ya 3eini', en: 'Lit. "O my eye" — term of affection for someone dear', cat: 'casual' },
  { ar: 'يا قلبي', tr: 'ya 2albi', en: 'Lit. "O my heart" — deeply affectionate address', cat: 'casual' },
  { ar: 'حبيبي / حبيبتي', tr: '7abibi / 7abiibti', en: 'My dear / darling (used widely, even between strangers in warmth)', cat: 'casual' },
  { ar: 'يا خيي', tr: 'ya khayyi', en: 'My brother (casual address between men, not literal)', cat: 'casual' },
  { ar: 'يا ختي', tr: 'ya ikhti', en: 'My sister (casual address between women)', cat: 'casual' },

  // cat: service
  { ar: 'يا عامل', tr: 'ya 3aamil', en: 'Hey worker (generic call to service staff — can be rude, use carefully)', cat: 'service' },
  { ar: 'يا صاحب', tr: 'ya SaaHib', en: 'Hey friend (neutral casual address)', cat: 'service' },
  { ar: 'ولد / صبي', tr: 'walad / Sabi', en: 'Boy / young lad (for young male staff — use carefully)', cat: 'service' },
  { ar: 'سيدتي', tr: 'sayyidti', en: 'Madam (formal address for women)', cat: 'service' },
  { ar: 'سيدي', tr: 'sayyidi', en: 'Sir (formal address for men)', cat: 'service' },

  // cat: honorific
  { ar: 'غبطتك', tr: 'ghubTtak', en: 'Your Beatitude (for Patriarchs — very formal religious)', cat: 'honorific' },
  { ar: 'سيادة الرئيس', tr: 'siyaadet el-ra2iis', en: 'His Excellency the President', cat: 'honorific' },
  { ar: 'دولة الرئيس', tr: 'dawlet el-ra2iis', en: 'Mr. Prime Minister (Lebanon-specific title for PM)', cat: 'honorific' },
  { ar: 'معالي الوزير', tr: 'ma3aali el-waziir', en: 'His Excellency the Minister', cat: 'honorific' },
];

const TTL_DRILLS = [
  {
    q: 'Your Lebanese friend has just finished a university degree in literature. You introduce them to someone. What title do you use?',
    opts: [
      'Doktoor — Doctor (used for any university graduate in Lebanon)',
      'Ustaaz — Teacher (only for classroom teachers)',
      'Muhandis — Engineer (only for engineering graduates)',
      'No title needed — only medical doctors get titles'
    ],
    ans: 0,
    exp: '"Doktoor" in Lebanon is used for ANY university graduate, not just medical doctors. If someone has a BA, call them Doktoor. A PhD? Definitely Doktoor. This overuse of the title signals Lebanese respect for education — and using it correctly instantly earns social goodwill.'
  },
  {
    q: 'You see an older respected man in the village who has performed the Hajj pilgrimage. How do you address him?',
    opts: [
      '7aaj [name] — using the Hajj title',
      'Sheikh [name] — reserved for religious scholars only',
      'Ustaaz [name] — only for educated people',
      'Abu [name] — using his son\'s name'
    ],
    ans: 0,
    exp: '"7aaj" or "7aaje" for women — used for anyone who completed the pilgrimage to Mecca. But in practice, Lebanese people also use it for any older person they respect, even non-Muslims. It signals "I see you as an elder worthy of respect." A safe compliment for older community members.'
  },
  {
    q: 'You\'re at a restaurant and want to get the waiter\'s attention politely. What do you say?',
    opts: [
      'Ya SaaHib — hey friend (neutral, polite)',
      'Ya 3aamil — hey worker (can sound rude)',
      'Walad — boy (disrespectful for adults)',
      'Sayyidi — sir (too formal for casual restaurant)'
    ],
    ans: 0,
    exp: '"Ya SaaHib" (hey friend) is the safest neutral address for service workers. "Ya 3aamil" (hey worker) is technically correct but sounds dismissive. "Walad" is only for children or very young boys — saying it to an adult waiter is insulting. When in doubt, catch eye contact and nod — Lebanese service culture reads non-verbal cues well.'
  },
  {
    q: 'A Lebanese man in his 40s is introduced to you. His first son is named Kareem. What is a natural, warm way to address him?',
    opts: [
      'Abu Kareem — Father of Kareem',
      'Kareem\'s father — too literal in Arabic',
      'Ustaaz — only if he\'s educated',
      'Ya zalameh — too casual for a first meeting'
    ],
    ans: 0,
    exp: '"Abu [first son\'s name]" is one of the most respected and natural forms of address in Lebanese culture. It honors both the man and his family line. Once a man becomes a father, switching to "Abu [child]" shows you recognize his role and status. Women become "Umm [child]." This kunya system is deeply embedded in Levantine culture.'
  },
  {
    q: 'A plumber comes to fix your apartment. He\'s skilled and experienced, in his 50s. What\'s the respectful address?',
    opts: [
      'Ma3allim — master craftsman (highest respect for skilled trades)',
      'Muhandis — only for engineers',
      '7aaj — only for religious pilgrims',
      'Walad — only for young boys'
    ],
    ans: 0,
    exp: '"Ma3allim" (master) is THE title for skilled tradespeople — plumbers, electricians, mechanics, carpenters. It means "one who teaches/masters." Using it shows you respect their craft. Lebanese tradespeople take enormous pride in their skills; calling them ma3allim acknowledges that pride. Never call a skilled craftsman just "walad" or "ya 3aamil."'
  },
  {
    q: 'Your Lebanese neighbor\'s elderly mother is visiting. You want to greet her warmly and respectfully. What do you call her?',
    opts: [
      '3ammo or Sitto — uncle/respected elderly woman',
      'Sayyidti — too formal and cold',
      'Tiita — only if she\'s YOUR grandmother',
      'Ya 7aaje — only if she\'s done the pilgrimage'
    ],
    ans: 0,
    exp: '"3ammo" (uncle) is used for older men and sometimes women; "Sitto" specifically means grandmother/respected older woman. Both can be used for non-relatives as terms of warm respect. "Tiita" is sweet but more intimate — use it after you know her better. Lebanese culture expects younger people to honor elders with titles, not just first names.'
  },
  {
    q: 'A female lawyer you\'ve just met hands you her business card. How do you address her in conversation?',
    opts: [
      'Mu7aamiye [name] — female lawyer title',
      'Ustaaze [name] — only for teachers',
      'Duktoore [name] — only for medical doctors',
      'Sayyidti [name] — too generic, ignores her profession'
    ],
    ans: 0,
    exp: '"Mu7aamiye" for female lawyers, "mu7aami" for male. Lebanese professionals LOVE being addressed by their title — it validates their years of study and practice. Using the correct professional title opens doors in business contexts. Never just use first names with Lebanese professionals in formal settings — it can read as disrespectful or overly casual.'
  },
  {
    q: 'What does "ya 3eini" literally mean, and when do Lebanese people use it?',
    opts: [
      '"O my eye" — a term of deep affection, used for someone precious to you',
      '"You are blind" — an insult about someone\'s judgment',
      '"Watch out" — a warning phrase',
      '"My sight" — used only for beautiful things'
    ],
    ans: 0,
    exp: '"Ya 3eini" — literally "O my eye" — is one of the most affectionate expressions in Lebanese Arabic. The eye is considered precious (you protect your eyes), so calling someone "my eye" means they are precious to you. Used by grandmothers for grandchildren, by close friends, by parents. You\'ll hear it constantly in Lebanese homes and it signals deep warmth.'
  },
  {
    q: 'In a Lebanese business meeting, you address the Prime Minister\'s representative. What title is specific to Lebanon\'s PM?',
    opts: [
      'Dawlet el-ra2iis — Mr. Prime Minister (Lebanon-specific)',
      'Ma3aali el-waziir — for ministers, not PM',
      'Siyaadet el-ra2iis — for the President of the Republic',
      'Sheikh — for religious titles only'
    ],
    ans: 0,
    exp: '"Dawlet el-ra2iis" is uniquely Lebanese — the PM\'s title literally means "State of the President." The President of the Republic is "Siyaadet el-Ra2iis" (His Excellency). Ministers are "Ma3aali el-Waziir." Lebanon\'s elaborate political title system reflects the country\'s complex sectarian power-sharing — using the wrong title in a formal setting is a significant social error.'
  },
  {
    q: 'A young man in his 20s who you\'ve just met wants to chat casually. What\'s the most natural informal address?',
    opts: [
      'Ya zalameh or ya khayyi — buddy / brother',
      '7aaj — only for older respected people',
      'Ustaaz — too formal for casual young person',
      'Sayyidi — way too formal'
    ],
    ans: 0,
    exp: '"Ya zalameh" (hey man/buddy) or "ya khayyi" (my brother) are the standard casual addresses between Lebanese men. "Zalameh" is warm, street-level, very Beirut. "Khayyi" (brother) signals friendship and solidarity. Both are fine for casual contexts. Moving between formal titles (7aaj, ustaaz) and casual terms (zalameh, khayyi) fluidly is a sign of Lebanese social fluency.'
  },
];

const TTL_TIPS = [
  '<strong>Always use titles in Lebanon:</strong> Lebanese culture is title-heavy. Using someone\'s professional title — Doktoor, Muhandis, Mu7aamiye, Ma3allim — shows respect and cultural awareness. First-name-only is acceptable between friends but can feel presumptuous with strangers. When in doubt, err toward the title.',
  '<strong>"Doktoor" for ALL graduates:</strong> One of the most important things to know: "Doktoor" in Lebanon is used for any university graduate, not just medical doctors. Calling someone who studied literature "Doktoor" is a compliment that honors their education. They may deflect it, but they\'ll appreciate the gesture.',
  '<strong>Abu/Umm system:</strong> Once Lebanese people have children, they\'re often called "Abu [first son]" or "Umm [first son]" (or first child if no son). This kunya system is how adults address each other in formal-yet-warm contexts. If you don\'t know someone\'s professional title, Abu/Umm [child] is almost always appropriate and warmly received.',
  '<strong>3ammo / Sitto for elders:</strong> Any older man can be called "3ammo" (uncle), any older woman "Sitto" or "3amto" (aunt). These aren\'t just for relatives — they\'re how Lebanese society signals respect to elders. A foreigner using these terms correctly makes a powerful impression on Lebanese families.',
  '<strong>Political titles matter enormously:</strong> Lebanon\'s confessional system means political titles carry sectarian weight. Getting the title wrong — calling the PM "Siyaadet" instead of "Dawlet," or confusing a Sheikh with an Imam — can signal ignorance of Lebanon\'s complex religious landscape. In formal contexts, titles are non-negotiable.',
];

const TTL_ABOUT = 'Lebanese address culture reflects the country\'s layered social hierarchy — religious, professional, familial, and political. Unlike Western cultures that trend toward first-name informality, Lebanon rewards those who know the right title for each person and context. A Lebanese person\'s title is tied to their identity and hard-won status. Getting it right signals that you respect their journey; getting it wrong (especially confusing Doktoor with Ustaaz, or misusing religious titles) can create subtle distance. Master the address system and Lebanese doors open considerably wider.';
