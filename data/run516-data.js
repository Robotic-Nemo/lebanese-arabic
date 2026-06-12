// R516 — Lebanese Nargileh & Argile Culture (prefix: nar)
const NAR_WORDS = [
  // the device & setup
  {ar:'أرجيلة', tr:'arjiile', en:'Nargileh / water pipe (argile) — the hookah, central to Lebanese café life', cat:'device'},
  {ar:'النرجيلة', tr:'el-narjiile', en:'The nargileh — asking for THE nargileh (definite article, common in ordering)', cat:'device'},
  {ar:'رأس النرجيلة', tr:'raas el-narjiile', en:'The head of the nargileh — the clay bowl on top that holds the tobacco', cat:'device'},
  {ar:'حجر', tr:'7ajar', en:'The charcoal (lit. stone) — the coal placed on top of the foil to heat tobacco', cat:'device'},
  {ar:'خرطوم', tr:'khurTuum', en:'The hose — the flexible tube you draw smoke through', cat:'device'},
  {ar:'فحمة', tr:'fa7me', en:'A piece of charcoal — "inti7ni fa7me" means get me a piece of charcoal', cat:'device'},
  // tobacco flavors
  {ar:'تفاح', tr:'tuffaa7', en:'Apple-flavored tobacco — the classic default flavor for nargileh', cat:'flavor'},
  {ar:'توت', tr:'tuut', en:'Mulberry/grape flavor — popular fruity option', cat:'flavor'},
  {ar:'نعنع', tr:'na3na3', en:'Mint flavor — refreshing, popular in summer', cat:'flavor'},
  {ar:'فراولة', tr:'frawle', en:'Strawberry flavor — one of the most popular fruit flavors', cat:'flavor'},
  {ar:'ليمون بنعنع', tr:'lemuun b-na3na3', en:'Lemon with mint — a Lebanese café classic combination', cat:'flavor'},
  {ar:'ميكس', tr:'miix', en:'Mixed flavors — asking for a custom blend of two flavors', cat:'flavor'},
  // ordering & requesting
  {ar:'جيبلنا أرجيلة', tr:'jiibil-na arjiile', en:'"Bring us a nargileh" — standard café order', cat:'ordering'},
  {ar:'بدّي أرجيلة', tr:'biddi arjiile', en:'"I want a nargileh" — individual order at café', cat:'ordering'},
  {ar:'غيّر الحجر', tr:'3ayyir el-7ajar', en:'"Change the charcoal" — when coal is spent and you need fresh coal', cat:'ordering'},
  {ar:'تراب', tr:'traab', en:'Ash / used-up coal (lit. dirt/soil) — "el-7ajar traab" = the coal is ash', cat:'ordering'},
  {ar:'عبّي', tr:'3abbi', en:'"Refill (the bowl)" — asking waiter to repack the tobacco', cat:'ordering'},
  {ar:'بلّط', tr:'ballat', en:'"Add/pack it well" — asking for a well-packed bowl', cat:'ordering'},
  // smoking etiquette
  {ar:'دخّن', tr:'dakhkhan', en:'"To smoke (nargileh)" — dakhkhent? = did you smoke?', cat:'etiquette'},
  {ar:'شيل', tr:'shiil', en:'"Pass it" — asking someone to pass the hose to you', cat:'etiquette'},
  {ar:'دورك', tr:'doorak', en:'"Your turn" — taking turns with the hose in a group', cat:'etiquette'},
  {ar:'مسدود', tr:'mesdood', en:'"Blocked" — the hose or airflow is blocked, not drawing well', cat:'etiquette'},
  {ar:'واطي', tr:'waaTi', en:'"Weak / low (smoke)" — the nargileh isn\'t producing good smoke yet', cat:'etiquette'},
  {ar:'ماشي', tr:'maashi', en:'"It\'s working well" — nargileh is drawing nicely now', cat:'etiquette'},
  // social expressions
  {ar:'على الريحة', tr:'3a r-rii7a', en:'"For the smell/atmosphere" — saying you smoke argile for ambiance not nicotine', cat:'social'},
  {ar:'ارجيلة على طاولة', tr:'arjiile 3a Taawle', en:'"Nargileh at the table" — café seating style where argile comes to you', cat:'social'},
  {ar:'كافيه', tr:'kaafeeh', en:'"Café" — the Lebanese café where nargileh is primary activity, not just coffee', cat:'social'},
  {ar:'سهرة', tr:'sahra', en:'"Evening out" — a nargileh sahra = group evening at a café smoking together', cat:'social'},
  {ar:'جو', tr:'jaww', en:'"Atmosphere / vibe" — "el-jaww 7elo" = the vibe is nice (good café ambiance)', cat:'social'},
  {ar:'أونلي فايبس', tr:'only viibs', en:'"Only vibes" — modern Lebanese slang for a great atmosphere moment', cat:'social'},
  // cultural notes
  {ar:'مدخنة', tr:'midkhane', en:'"Smoker" (fem) — Lebanese women smoking nargileh is culturally accepted', cat:'cultural'},
  {ar:'نوافير', tr:'nawaafir', en:'"Water fountains / Nawaafir" — iconic Beirut café/restaurant famous for nargileh', cat:'cultural'},
  {ar:'الأرز', tr:'el-arz', en:'"The Cedar" — area in Faraya associated with mountain café nargileh culture', cat:'cultural'},
  {ar:'سهرة على البحر', tr:'sahra 3a l-ba7r', en:'"Evening by the sea" — Beirut Corniche nargileh night culture', cat:'cultural'},
  {ar:'نرجيلة وقهوة عربي', tr:'narjiile w-ahwe 3arabi', en:'"Nargileh and Arabic coffee" — the iconic Lebanese café duo', cat:'cultural'},
];

const NAR_DRILLS = [
  {
    q: 'You want to order a nargileh at a Lebanese café. What do you say?',
    opts: ['biddi arjiile', 'biddi tuffaa7', '3abbi ya zalameh', 'jiibil-na fa7me'],
    ans: 0,
    exp: '"biddi arjiile" = "I want a nargileh." Classic direct café order.'
  },
  {
    q: 'The coal on your nargileh is used up. How do you ask the waiter?',
    opts: ['3abbi el-raas', '3ayyir el-7ajar', 'el-7ajar waaTi', 'shiil el-khurTuum'],
    ans: 1,
    exp: '"3ayyir el-7ajar" = "change the charcoal." The coal burns out every ~15-20 mins.'
  },
  {
    q: 'Your friend is hogging the hose. What do you say to get a turn?',
    opts: ['waaTi 7abibi', 'doorak', 'maashi', 'ballat'],
    ans: 1,
    exp: '"doorak" = "your turn." Used when passing around the single hose in a group.'
  },
  {
    q: 'What does "maashi" mean when talking about a nargileh?',
    opts: ['It\'s blocked', 'The coal is ash', 'It\'s drawing well / working nicely', 'The tobacco is gone'],
    ans: 2,
    exp: '"maashi" = "it\'s going/working well." When the nargileh is producing good smoke flow.'
  },
  {
    q: 'Which flavor is considered the classic Lebanese default for nargileh?',
    opts: ['frawle (strawberry)', 'tuut (mulberry)', 'tuffaa7 (apple)', 'lemuun b-na3na3 (lemon-mint)'],
    ans: 2,
    exp: 'Apple (tuffaa7) is the classic standard. If you don\'t specify, many cafés bring apple.'
  },
  {
    q: 'Someone says "el-7ajar traab." What do they mean?',
    opts: ['The nargileh is broken', 'The charcoal is ash / used up', 'The tobacco is wet', 'The hose is blocked'],
    ans: 1,
    exp: '"traab" = dirt/ash. "el-7ajar traab" literally means the coal has turned to ash — time to change it.'
  },
  {
    q: 'What is a "sahra" in Lebanese café culture?',
    opts: ['A type of tobacco flavor', 'An evening out / social gathering', 'The café receipt', 'A type of hose'],
    ans: 1,
    exp: '"sahra" = a social evening. A nargileh sahra is a group get-together at a café, often lasting hours.'
  },
  {
    q: 'How do you ask the waiter to bring a nargileh FOR YOUR TABLE (plural)?',
    opts: ['biddi arjiile', 'jiibil-na arjiile', '3abbi', 'ballat ya zalameh'],
    ans: 1,
    exp: '"jiibil-na" = "bring us" (jiib = bring + il = to + na = us). Plural order for a group.'
  },
  {
    q: 'Someone says "el-khurTuum mesdood." What\'s the problem?',
    opts: ['The coal is too hot', 'The tobacco is the wrong flavor', 'The hose is blocked / not drawing', 'They want a refill'],
    ans: 2,
    exp: '"mesdood" = blocked/clogged. A blocked khurTuum (hose) means no smoke draws through.'
  },
  {
    q: 'What does "3a r-rii7a" mean when someone says they smoke nargileh?',
    opts: ['They only smoke apple flavor', 'They smoke for the smell/atmosphere, not addiction', 'They want the coal changed', 'They prefer outdoor smoking'],
    ans: 1,
    exp: '"3a r-rii7a" = "for the smell." A common (sometimes ironic) way Lebanese say they don\'t smoke for the nicotine hit — just the ambiance.'
  },
];

const NAR_TIPS = [
  {
    title: '🔥 Coal etiquette',
    body: 'Don\'t ask to change coal too often — it\'s the waiter\'s job to monitor. When you see smoke decreasing or coal going grey/white ("traab"), catch his eye or tap the table. Never pick up or adjust coal yourself at a nice café — that\'s the 3amm\'s (waiter\'s) territory.'
  },
  {
    title: '🫧 Passing the hose',
    body: 'In a group, passing the hose follows unspoken rules. "Doorak" (your turn) moves it around. Don\'t hold it for too long — 2-3 draws then pass. If someone puts the hose down near you it\'s an invitation, not obligation. Blowing out leftover smoke before passing is considered polite.'
  },
  {
    title: '🌿 Ordering flavors',
    body: 'The standard is tuffaa7 (apple). To mix, say "miix tuffaa7 w-tuut" (mix apple and mulberry). "Lemuun b-na3na3" (lemon-mint) is refreshing for summer. If you\'re unsure, ask "shu mnii7?" (what\'s good today?) — cafés sometimes have fresh seasonal options.'
  },
  {
    title: '☕ Nargileh + ahwe culture',
    body: '"Narjiile w-ahwe 3arabi" — nargileh with Arabic coffee — is THE Lebanese café formula. Arabic coffee (cardamom-spiced, small cups) is traditionally served free or cheap alongside argile. The whole point is sitting, talking, and taking your time. Don\'t rush a nargileh sahra — it\'s meant to last 1-3 hours.'
  },
  {
    title: '🇱🇧 Social & cultural context',
    body: 'Nargileh is deeply social in Lebanon — it\'s not just smoking, it\'s a ritual of sitting together. Women smoking argile is completely normal in Lebanese cafés (unlike some other Arab countries). The "jaww" (atmosphere/vibe) of a café matters as much as the argile quality. Popular spots: Gemmayzeh, Mar Mikhael, Hamra, Jounieh waterfront.'
  },
];

const NAR_ABOUT = `<p><strong>🌬️ Nargileh / Arjiile in Lebanese Life</strong></p>
<p>The nargileh (water pipe, hookah) is central to Lebanese café culture. Unlike in some countries where it's exotic, in Lebanon it's completely ordinary social activity — you'll see students, families, couples, and business meetings all over a shared nargileh.</p>
<p><strong>The Ritual:</strong> You arrive at a café, order your arjiile (+ ahwe 3arabi), and settle in. The waiter manages the coal. One hose passes around the group. You talk, you smoke, you stay. A session easily lasts 2-3 hours — the sahra mentality (evening-out culture) means there's no rush.</p>
<p><strong>Key vocab to sound natural:</strong> "3ayyir el-7ajar" (change the coal), "maashi" (it's working well), "mesdood" (blocked), "doorak" (your turn). These small phrases show you're not a tourist.</p>
<p><strong>Flavor culture:</strong> Tuffaa7 (apple) is the safe default. Miix (mixed) lets you customize. Ask "shu 3andkon?" (what do you have?) at smaller cafés for daily options. Some high-end spots have fresh fruit heads (actual cut fruit used as the bowl).</p>
<p><strong>Note on health:</strong> Lebanese people know nargileh isn't healthy — "3a r-rii7a" (for the smell/atmosphere) is the cultural defense. Don't lecture; enjoy the social ritual.</p>`;
