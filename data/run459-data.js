// R459 — Lebanese Diaspora & Emigration (dia)
const DIA_WORDS = [
  // core emigration vocabulary
  { ar: 'غربة', tr: 'ghurba', en: 'life abroad / exile / homesickness (the pain of being far from home)', cat: 'core' },
  { ar: 'مغترب', tr: 'mughtarib', en: 'emigrant / person living abroad (self-identification)', cat: 'core' },
  { ar: 'هجرة', tr: 'hijre', en: 'emigration / migration', cat: 'core' },
  { ar: 'بلاد الاغتراب', tr: 'bilaad el ightiraab', en: 'the countries of emigration / abroad', cat: 'core' },
  { ar: 'وطن', tr: 'waTan', en: 'homeland / motherland', cat: 'core' },
  { ar: 'الشتات', tr: 'esh-shataat', en: 'the diaspora / the scattered (formal term)', cat: 'core' },
  { ar: 'رجع ع لبنان', tr: 'raja3 3a Lubnaan', en: 'returned to Lebanon (the dream/act of return)', cat: 'core' },
  { ar: 'بعيد عن', tr: 'ba3iid 3an', en: 'far from (describes diaspora distance)', cat: 'core' },
  // diaspora life
  { ar: 'جالية', tr: 'jaaliye', en: 'community / colony (Lebanese community abroad)', cat: 'abroad' },
  { ar: 'تحويل', tr: 'ta7wiil', en: 'remittance / wire transfer (money sent home)', cat: 'abroad' },
  { ar: 'حوالة', tr: '7awaale', en: 'remittance / money order (sent home)', cat: 'abroad' },
  { ar: 'جواز سفر', tr: 'jawwaaz safar', en: 'passport', cat: 'abroad' },
  { ar: 'إقامة', tr: 'i2aame', en: 'residency permit', cat: 'abroad' },
  { ar: 'بطاقة خضراء', tr: 'bTaa2it khadraa', en: 'green card (US permanent residency)', cat: 'abroad' },
  { ar: 'المهجر', tr: 'el mahjar', en: 'the emigrant lands / diaspora countries (classic term)', cat: 'abroad' },
  { ar: 'أدب المهجر', tr: 'adab el mahjar', en: 'Mahjar literature (Lebanese-American literary movement)', cat: 'abroad' },
  // feelings & identity
  { ar: 'اشتياق', tr: 'ishtiyaa2', en: 'longing / intense homesickness', cat: 'feelings' },
  { ar: 'نوستالجيا', tr: 'nustalJia', en: 'nostalgia (borrowed word, deeply felt)', cat: 'feelings' },
  { ar: 'بغترب', tr: 'bghtarb', en: 'I emigrate / I live abroad (verb)', cat: 'feelings' },
  { ar: 'اشتقتلك', tr: 'ishta2tellak', en: 'I missed you (to m) / I longed for you', cat: 'feelings' },
  { ar: 'وحشتني', tr: 'wa7asheetni', en: 'you made me miss you / I miss you', cat: 'feelings' },
  { ar: 'بلادي', tr: 'bilaadi', en: 'my country / my homeland (possessive, emotional)', cat: 'feelings' },
  // return & visiting
  { ar: 'عطلة', tr: '3uTle', en: 'vacation / holiday (when diaspora visits Lebanon)', cat: 'return' },
  { ar: 'زيارة', tr: 'ziyaara', en: 'visit / visiting', cat: 'return' },
  { ar: 'رجع البلد', tr: 'raja3 el balad', en: 'returned home / went back to the village/country', cat: 'return' },
  { ar: 'طياره', tr: 'Tayyaara', en: 'airplane (the vehicle of return and departure)', cat: 'return' },
  { ar: 'مطار', tr: 'maTaar', en: 'airport (Beirut airport = emotional threshold)', cat: 'return' },
  { ar: 'كم وصلت؟', tr: 'kimta wSlat?', en: 'when did you arrive? (greeting for returning diaspora)', cat: 'return' },
  // diaspora countries & communities
  { ar: 'المهجر الأمريكي', tr: 'el mahjar el amriiki', en: 'the American diaspora (São Paulo, Buenos Aires, Detroit, NYC)', cat: 'places' },
  { ar: 'البرازيل', tr: 'el braziil', en: 'Brazil (largest Lebanese diaspora, 6M+ Lebanese-Brazilians)', cat: 'places' },
  { ar: 'كندا', tr: 'kanada', en: 'Canada (major Lebanese diaspora community)', cat: 'places' },
  { ar: 'أستراليا', tr: 'ustraalia', en: 'Australia (large Lebanese community in Sydney)', cat: 'places' },
  { ar: 'الخليج', tr: 'el khaliij', en: 'the Gulf (major Lebanese work-emigration destination)', cat: 'places' },
  { ar: 'أفريقيا', tr: 'afriiqya', en: 'Africa (historical Lebanese trade diaspora in West Africa)', cat: 'places' },
  // common diaspora expressions
  { ar: 'يا غربة', tr: 'yaa ghurba', en: 'oh exile / oh the pain of being away (exclamation)', cat: 'expressions' },
  { ar: 'الغربة علمتني', tr: 'el ghurba 3allametni', en: 'life abroad taught me (a lesson learned from emigration)', cat: 'expressions' },
  { ar: 'بلبنان ما في', tr: 'b-Lubnaan maa fii', en: '"it doesn\'t exist in Lebanon" (diaspora saying about their adopted country\'s advantages)', cat: 'expressions' },
  { ar: 'لبنان بقلبي', tr: 'Lubnaan b-2albi', en: 'Lebanon is in my heart (diaspora emotional statement)', cat: 'expressions' },
  { ar: 'ابن الجالية', tr: 'ibn el jaaliye', en: 'son/member of the community (second-generation diaspora)', cat: 'expressions' },
  { ar: 'أصل لبناني', tr: '2aSl lubnaani', en: 'Lebanese origin / Lebanese roots (diaspora identity)', cat: 'expressions' },
  { ar: 'ما منسى وطنا', tr: 'maa minsaa waTana', en: 'we never forget our homeland (diaspora anthem sentiment)', cat: 'expressions' },
];

const DIA_DRILLS = [
  {
    q: 'What is "ghurba" (غربة) and why is it one of the most emotionally loaded words in Lebanese culture?',
    opts: ['a type of Lebanese food eaten abroad', 'the pain and experience of living far from your homeland — untranslatable homesickness/exile', 'a Lebanese village known for emigrants', 'the Lebanese passport travel document'],
    correct: 1,
    note: '"Ghurba" (غربة) is one of Arabic\'s most profound words. It means being a stranger in a foreign land — but it\'s not just "living abroad." It carries longing, rootlessness, the gap between where you are and where your heart is. Lebanese songs about ghurba ("Wara2et Autumn," "Ya Ghayib") bring diaspora Lebanese to tears. "Yaa ghurba" is a sigh that says everything. The word comes from "gha-ri-ba" (to be strange/foreign). Unlike English "homesickness," ghurba is an identity — "ana mughtarib" (I am an emigrant) defines who you are, not just where you live.'
  },
  {
    q: 'Brazil has more Lebanese-origin people than Lebanon itself. What is this community called and why did they go?',
    opts: ['they were refugees', 'el mahjar el amriiki — 6-10 million Lebanese-Brazilians, most descendants of emigrants from 1880-1920 escaping Ottoman rule', 'Brazilian Lebanese don\'t identify as Lebanese', 'the community is only 500,000 people'],
    correct: 1,
    note: 'Brazil has an estimated 6-12 million people of Lebanese descent — making it the largest Lebanese diaspora community in the world. The first wave emigrated 1880-1920, fleeing Ottoman tax oppression, famine (the Great Famine of 1916-1918), and limited economic opportunity. They settled in São Paulo (nicknamed "the most Lebanese city outside Lebanon"), Rio de Janeiro, and across Brazil. Lebanese-Brazilians have produced two Brazilian presidents (Michel Temer), countless industrialists, and transformed Brazilian cuisine. Their Arabic (Levantine, often Lebanese) fused with Portuguese. "Marhaba" became "marabá" in Brazilian slang.'
  },
  {
    q: 'What is "el mahjar" (المهجر) literature and who are its most famous authors?',
    opts: ['a modern Lebanese social media movement', 'a 1900s literary movement by Lebanese emigrants in the Americas — Kahlil Gibran is its most famous member', 'Lebanese literature written in Arabic newspapers', 'a contemporary Beirut literary scene'],
    correct: 1,
    note: '"Adab el mahjar" (literature of the emigrant lands) is one of the most significant Arabic literary movements. Lebanese and Syrian emigrants in the early 1900s, writing in New York and São Paulo, transformed Arabic poetry by fusing it with Western Romanticism. Kahlil Gibran (Jubran Khalil Jubran) — author of "The Prophet" — is the most famous. Others: Mikhail Naimy, Ameen Rihani, Elia Abu Madi. They wrote in Arabic for Arabic-speaking emigrants while absorbing English and Portuguese influences. "The Pen League" (Al-Rabita Al-Qalamiyya) in New York (1920) was their literary society. Their work shaped modern Arabic literature.'
  },
  {
    q: 'What does "ta7wiil" or "7awaale" (تحويل/حوالة) mean and what role does it play in Lebanon\'s economy?',
    opts: ['a type of Lebanese banking product', 'remittance — money sent home from diaspora, which is 50%+ of Lebanon\'s GDP', 'a government welfare payment', 'a type of diaspora investment fund'],
    correct: 1,
    note: 'Remittances (ta7wiil / 7awaale) are Lebanon\'s economic lifeline. Diaspora Lebanese send approximately $6-7 billion per year to families in Lebanon — representing 35-55% of Lebanon\'s GDP. After the 2019 economic collapse, when Lebanese banks froze accounts and the lira lost 90%+ of its value, remittances in USD kept hundreds of thousands of families alive. "Ta3ala 3a l-khaliij" (come to the Gulf) was a generation\'s economic strategy — work in Gulf countries, send money home, retire in Lebanon. The Gulf diaspora (500,000+ Lebanese in UAE, Saudi Arabia, Kuwait) remains Lebanon\'s largest dollar-transfer source.'
  },
  {
    q: 'What does the Beirut airport mean emotionally for Lebanese people?',
    opts: ['just a transit hub — Lebanese are pragmatic about travel', 'an emotionally charged threshold — arrivals are reunions, departures are grief, the smell/feeling of Lebanon begins here', 'only important for business travelers', 'a symbol of government failure due to constant delays'],
    correct: 1,
    note: 'Beirut Rafic Hariri International Airport is one of the most emotionally charged places in Lebanon. Arrivals: diaspora Lebanese burst into tears when they smell Lebanese air (sea salt, jasmine, diesel — the smell of home). Extended families pack the arrivals hall. Departures: families camp there for hours, saying goodbye through tears. Airport goodbye scenes are intense — grandmothers weeping, siblings embracing. The airport itself has been bombed (1968, 1982, 2006), reopened, bombed again — it\'s a symbol of Lebanese resilience and the cycle of departure and return. "Airport" is practically a synonym for "the journey of Lebanese life."'
  },
  {
    q: 'What is the Lebanese concept of "ibn el jaaliye" (ابن الجالية) and what challenges do they face?',
    opts: ['a Lebanese government official abroad', 'second-generation diaspora Lebanese — born abroad, identified as Lebanese but navigating dual cultural identity', 'a Lebanese illegal immigrant', 'a Lebanese businessman living abroad for tax purposes'],
    correct: 1,
    note: '"Ibn/bint el jaaliye" (son/daughter of the community) refers to second and third-generation Lebanese diaspora. They face the classic hyphenated identity: Lebanese-Australian, Lebanese-Brazilian, Lebanese-American. Often speaking limited Arabic, they feel fully Lebanese when abroad (food, music, hospitality) but feel like "strangers" when they visit Lebanon (language barriers, cultural norms, not knowing driving rules). Lebanese parents famously pressure children to "marry Lebanese" and "remember your roots." "2aSl lubnaani" (Lebanese origin) remains a powerful identity even four generations out — many Lebanese-Brazilians whose great-grandparents emigrated in 1890 still fiercely identify as Lebanese.'
  },
  {
    q: 'What does "el ghurba 3allametni" (الغربة علمتني) mean and what does it signify culturally?',
    opts: ['"exile destroyed me" (a complaint about emigration)', '"life abroad taught me" — a common reflection that emigration builds character and perspective', '"I learned Arabic abroad"', '"the diaspora schools are better"'],
    correct: 1,
    note: '"El ghurba 3allametni" (life abroad taught me) is one of the most common diaspora reflections. It acknowledges that emigration — despite its pain — brings growth: independence, discipline, cross-cultural fluency, financial capability. Lebanese emigrants often return with both material success and a new perspective on Lebanon\'s beauty AND its problems. The saying captures the paradox: "the thing that hurt me most also made me strongest." A Lebanese person who says "el ghurba 3allametni el isti2laaliyye" (exile taught me independence) is processing both the pain and the gift of emigration. It\'s how Lebanese convert tragedy into wisdom.'
  },
  {
    q: 'What is the role of Lebanese diaspora communities in keeping Lebanese identity alive?',
    opts: ['diaspora Lebanese mostly assimilate and lose Lebanese identity within one generation', 'Lebanese communities maintain identity through food, dabke, language schools, church/mosque, and political engagement spanning generations', 'only first-generation Lebanese maintain identity', 'Lebanese identity is maintained only through official government programs'],
    correct: 1,
    note: 'Lebanese diaspora communities are among the most tenacious in the world for identity preservation. Mechanisms: food (Lebanese restaurants everywhere Lebanese settle — the kitchen is the last fortress of identity), church/mosque (Maronite churches and mosques become community centers), dabke dance troupes, Arabic language Saturday schools, political clubs, charity organizations (focused on sending aid to Lebanon). Lebanese community associations exist in 100+ countries. The Lebanese American University and Lebanese cultural centers in São Paulo, Sydney, and Montreal are diaspora institutions. Identity persists across 4-5 generations — Lebanese-Brazilians whose ancestors came in 1890 still call themselves Lebanese.'
  },
  {
    q: 'What does "ishtiyaa2" (اشتياق) mean and how is it different from regular homesickness?',
    opts: ['a type of Lebanese postal service for diaspora packages', 'intense longing / yearning — a profound desire for what is absent, stronger than regular homesickness', 'a formal immigration application process', 'the departure ceremony from Beirut airport'],
    correct: 1,
    note: '"Ishtiyaa2" (from the root sh-w-q, desire/longing) is a more intense, poetic form of yearning than simple homesickness. Lebanese use it for: missing a person ("ishta2ttak ktiir" — I missed you so much), missing Lebanon ("ishtiyaa2ni la Lubnaan 3am yikbar" — my longing for Lebanon is growing), or missing a lost era ("ishtiyaa2 la zaman faat" — longing for a time that passed). In diaspora culture, ishtiyaa2 is nearly an art form — expressed in poetry, music (Fairouz songs ARE ishtiyaa2 in sonic form), and the elaborate storytelling of Lebanese family gatherings where "do you remember when..." is a shared ritual of longing.'
  },
  {
    q: 'Why do Lebanese people say "Lubnaan b-2albi" (لبنان بقلبي) even when they\'ve lived abroad for decades?',
    opts: ['it\'s just a polite phrase without real meaning', 'Lebanon becomes more idealized in diaspora memory — the homeland in the heart is Lebanon at its best, preserved from the moment of departure', 'Lebanese law requires citizens to declare loyalty', 'it refers to Lebanese food preferences, not actual emotional attachment'],
    correct: 1,
    note: '"Lubnaan b-2albi" (Lebanon is in my heart) reflects a diaspora psychological phenomenon: the homeland in the heart is often a frozen, idealized version of Lebanon from the moment of departure. A Lebanese who left in 1975 (civil war) carries a 1975 Lebanon in their heart — beautiful, pre-war, golden. One who left in 2019 carries the Lebanon of the crisis. The Lebanon they return to always surprises them — changed, sometimes worse, sometimes surprising. But "Lubnaan b-2albi" stays constant. It\'s not just nostalgia — it\'s the emotional core of diaspora identity: wherever you go, you carry a Lebanon that exists in memory more perfectly than the real place ever could.'
  },
];

const DIA_TIPS = [
  {
    title: '✈️ Lebanon\'s Diaspora: Numbers and Reach',
    body: 'Lebanon has 4-6 million people inside the country but an estimated 8-20 million people of Lebanese descent worldwide — potentially 4x more Lebanese outside than inside. Major diaspora communities: Brazil (6-12M), USA (1-3M, concentrated in Detroit, NYC, LA), Argentina (1.5M), Australia (400K+ in Sydney), Canada (250K+), West Africa (especially Senegal, Ivory Coast, Nigeria), Gulf states (500K+), France (250K+). Lebanese have been emigrating since the 1880s — Ottoman oppression, civil war (1975-1990), and the 2019 economic collapse each created new waves. Lebanon\'s geographic size (10,452 km²) makes it one of the most emigration-intensive countries on earth per capita.'
  },
  {
    title: '💰 Remittances: The Economic Lifeline',
    body: 'Lebanese diaspora remittances ($6-8B/year) represent 40-55% of Lebanon\'s GDP — making Lebanon one of the world\'s most remittance-dependent countries. For context: the entire Lebanese government budget is ~$10B. After the 2019 banking collapse (when $120B+ in deposits was frozen by banks), diaspora wire transfers (7awaale) and Western Union/MoneyGram became survival tools for Lebanese families. Diaspora Lebanese in the Gulf send the most volume; Lebanese-Americans send the most per person. The cultural implication: families who can afford to stay in Lebanon often have a relative abroad sending money home. "Khayyo bil khaliij" (his brother in the Gulf) is a shorthand for family survival strategy.'
  },
  {
    title: '📚 Kahlil Gibran & Mahjar Literature',
    body: 'Kahlil Gibran (1883-1931), born in Bcharre, Lebanon, emigrated to Boston at age 12. His book "The Prophet" (1923) is one of the best-selling books of all time, translated into 100+ languages. He wrote in both Arabic and English, capturing the dual-world experience of the Lebanese emigrant. The broader Mahjar (emigrant lands) literary movement — Mikhail Naimy, Ameen Rihani, Elia Abu Madi in New York; similar figures in São Paulo — modernized Arabic literature by introducing free verse, personal voice, and Western Romantic themes. When Lebanese diaspora say "Gibran 3araff el ghurba" (Gibran knew exile), they mean his literature gives language to what they feel. His grave in Bcharre is a pilgrimage site.'
  },
  {
    title: '🇧🇷 Brazilian Lebanese: The Largest Diaspora',
    body: 'Brazil\'s Lebanese community is so large it has transformed Brazil. The first wave (1880-1920) traveled by boat from Beirut to Santos or Rio. They started as street vendors ("bayya3in mutajawwilin" — peddlers; Portuguese: mascates), became merchants, then industrialists. Lebanese-Brazilians dominate Brazilian business, politics, and entertainment. Carlos Ghosn (Nissan/Renault CEO) is Lebanese-Brazilian. Michel Temer (Brazilian president 2016-2018) is Lebanese-origin. Haddad, Khaled, and Murad are common Brazilian surnames from Lebanese origin. Brazilian-Lebanese cuisine blended kibe (kibbeh), esfiha (a3jiin), and tabule with Brazilian ingredients. São Paulo\'s Higienópolis neighborhood still has visible Lebanese character. The connection is maintained through commercial ties — Brazilian beef and soya for Lebanese olive oil and consumer goods.'
  },
  {
    title: '🏡 The Dream of Return',
    body: '"Raja3 3a Lubnaan" (returning to Lebanon) is the dream that almost all Lebanese diaspora carry. First-generation emigrants work abroad for "the return" — saving money to build or buy a house in Lebanon, retire there, die on Lebanese soil. Many succeed; the Bekaa Valley and mountain villages are full of diaspora-built houses. But the return is complicated: Lebanon changes while the diaspora member is away, and the idealized Lebanon of memory differs from reality. Second-generation diaspora often feel "too Lebanese for here, too foreign for there" — accepted neither as fully American/Brazilian/Australian nor as fully Lebanese on return. This in-between space, "bein biladeen" (between two countries), is the defining diaspora condition.'
  },
];

const DIA_ABOUT = '"Mughtarib" (emigrant) is one of Lebanon\'s most common identities. Lebanon exports its people — not as a failure, but as a strategy that has persisted for 140 years. The Lebanese diaspora is Lebanon\'s invisible army: it sends money, maintains diplomatic influence, builds universities, creates cultural institutions, and keeps Lebanon\'s name known worldwide. When Kahlil Gibran wrote about "the homeland in the heart," he captured something every Lebanese diaspora member knows — Lebanon travels with you. The food, the music, the obligation to family, the pride, the arguments about politics, the tears when Fairouz plays at 2am — these don\'t disappear with distance. They intensify. Understanding diaspora vocabulary means understanding half of Lebanese identity: not just who Lebanese are in Lebanon, but who they become when they leave — and who they remain.';
