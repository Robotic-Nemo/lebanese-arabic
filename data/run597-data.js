// R597 — NEW FEATURE: Lebanese National Identity & Diaspora (prefix: lbn)

const LBN_WORDS = [
  // identity & belonging
  { ar: 'لبناني', tr: 'lubnaani', en: 'Lebanese (adj./person)', cat: 'identity' },
  { ar: 'هوية', tr: 'huwiyye', en: 'identity', cat: 'identity' },
  { ar: 'انتماء', tr: 'intimaa2', en: 'belonging / affiliation', cat: 'identity' },
  { ar: 'جذور', tr: 'jzuur', en: 'roots', cat: 'identity' },
  { ar: 'وطن', tr: 'waTan', en: 'homeland / nation', cat: 'identity' },
  { ar: 'غربة', tr: 'ghurbe', en: 'exile / being away from home (homesickness)', cat: 'identity' },
  { ar: 'شوق', tr: 'shou2', en: 'longing / yearning', cat: 'identity' },
  { ar: 'رجعت', tr: 'rje3t', en: 'I returned / I came back', cat: 'identity' },
  // diaspora
  { ar: 'مغترب', tr: 'mughtarib', en: 'émigré / person living abroad', cat: 'diaspora' },
  { ar: 'الاغتراب', tr: 'el-ightiraab', en: 'emigration / living abroad (the experience)', cat: 'diaspora' },
  { ar: 'المهجر', tr: 'el-mahjar', en: 'the diaspora / land of emigration', cat: 'diaspora' },
  { ar: 'جاليه', tr: 'jaaliye', en: 'community abroad / diaspora community', cat: 'diaspora' },
  { ar: 'لبناني المهجر', tr: 'lubnaani el-mahjar', en: 'Lebanese of the diaspora', cat: 'diaspora' },
  { ar: 'صندوق الانتخاب', tr: 'Sunduu2 el-intikhaab', en: 'ballot box / elections (diaspora voting rights)', cat: 'diaspora' },
  // landmarks & symbols
  { ar: 'الأرز', tr: 'el-arz', en: 'the cedar (Lebanon\'s national symbol)', cat: 'symbols' },
  { ar: 'جبل لبنان', tr: 'jabal lubnaan', en: 'Mount Lebanon', cat: 'symbols' },
  { ar: 'بيروت', tr: 'beiruut', en: 'Beirut (the capital)', cat: 'symbols' },
  { ar: 'عروس الشرق', tr: '3aruus el-shar2', en: 'Bride of the East (Beirut\'s historic nickname)', cat: 'symbols' },
  // return & nostalgia
  { ar: 'رح ارجع', tr: 'ra7 irja3', en: 'I will return / I\'ll come back', cat: 'return' },
  { ar: 'بفتقدك', tr: 'bifta2dak', en: 'I miss you', cat: 'return' },
  { ar: 'بفتقد لبنان', tr: 'bifta2id lubnaan', en: 'I miss Lebanon', cat: 'return' },
  { ar: 'بلدي', tr: 'baladi', en: 'my country / my town', cat: 'return' },
  { ar: 'بيتنا', tr: 'beitna', en: 'our home', cat: 'return' },
  // resilience phrases
  { ar: 'رح ننتصر', tr: 'ra7 ninteSer', en: 'we will prevail / we will win', cat: 'resilience' },
  { ar: 'لبنان ما بيموت', tr: 'lubnaan maa bimuut', en: 'Lebanon will not die / Lebanon is immortal', cat: 'resilience' },
  { ar: 'قوم من الرماد', tr: '2uum min el-ramaad', en: 'rise from the ashes (phoenix imagery)', cat: 'resilience' },
  { ar: 'عنيد', tr: '3aniid', en: 'stubborn / resilient (used with pride)', cat: 'resilience' },
  { ar: 'هيدا لبنان', tr: 'heyda lubnaan', en: 'that\'s Lebanon (said with love, irony, or resignation)', cat: 'resilience' },
];

const LBN_DRILLS = [
  {
    q: 'What does غربة (ghurbe) mean, and why is it central to Lebanese experience?',
    opts: ['Pride in one\'s homeland, sung in national anthems', 'The pain of exile / being away from home — a defining emotional experience for a nation of emigrants', 'A celebration of emigration and new opportunities', 'A legal term for Lebanese citizens abroad'],
    ans: 1,
    exp: 'ghurbe = the pain of exile / alienation of being far from home. Lebanon has one of the world\'s largest diasporas relative to its population — an estimated 8-14 million Lebanese-descended people live outside Lebanon, vs ~4 million inside. ghurbe is not just homesickness; it\'s a philosophical condition, sung in Lebanese music, written in poetry.'
  },
  {
    q: 'What is عروس الشرق (3aruus el-shar2)?',
    opts: ['A traditional Lebanese bride\'s dress', 'Beirut\'s historic nickname — "Bride of the East" — reflecting its pre-war cosmopolitan glory', 'A famous Lebanese restaurant in the diaspora', 'The name of a Lebanese national holiday'],
    ans: 1,
    exp: '3aruus el-shar2 = "Bride of the East" — Beirut\'s romantic nickname from its golden era (1950s-70s) when it was the Middle East\'s financial, cultural, and entertainment capital. The phrase carries both pride and nostalgia — Beirut\'s modern reality is far from this image, but the aspiration lives on.'
  },
  {
    q: 'Lebanon has one of the world\'s largest diasporas. Approximately how many Lebanese-descended people live outside Lebanon?',
    opts: ['About 500,000 — similar to those inside Lebanon', 'Estimates range from 8-14 million — roughly double or triple Lebanon\'s domestic population', 'About 2 million, mostly in France and the US', 'About 4 million, mostly in Gulf countries'],
    ans: 1,
    exp: 'Estimates vary, but Lebanese diaspora is often cited at 8-14 million — in Brazil alone there may be 6+ million people of Lebanese descent. Major communities in Brazil, Argentina, USA, Australia, France, West Africa, and the Gulf. This scale means the diaspora has profound influence on Lebanese politics, culture, and economy through remittances.'
  },
  {
    q: 'A Lebanese person sighs هيدا لبنان (heyda lubnaan). What do they likely mean?',
    opts: ['They are proud of Lebanon\'s achievements and traditions', 'A resigned, bittersweet exclamation — "that\'s Lebanon for you" — capturing the country\'s contradictions', 'They are angry and want to leave Lebanon forever', 'They are reciting a line from the national anthem'],
    ans: 1,
    exp: 'heyda lubnaan = "that\'s Lebanon" — one of the most versatile phrases in Lebanese culture. Said with love when something beautiful happens; said with resigned irony when things go wrong; said with dark humor during crises. It captures the Lebanese relationship with their contradictory, chaotic, beloved country.'
  },
  {
    q: 'What is المهجر (el-mahjar) in Lebanese culture?',
    opts: ['A dangerous area of Beirut to avoid', 'The diaspora / land of emigration — also a famous literary tradition of Lebanese émigré writers', 'A mountain village famous for its cuisine', 'The Lebanese parliament building\'s official name'],
    ans: 1,
    exp: 'el-mahjar = the diaspora / "place of emigration." It\'s also the name of a major literary movement — the Mahjar poets (including Kahlil Gibran and Mikhail Naimy) who wrote from the Americas about Lebanon with profound longing. The Mahjar tradition shaped modern Arabic poetry and remains a source of national pride.'
  },
  {
    q: 'What does الأرز (el-arz) symbolize for Lebanon?',
    opts: ['Rice — Lebanon\'s staple food and agricultural export', 'The cedar tree — Lebanon\'s national symbol, featured on the flag, representing resilience and eternity', 'Mountain skiing — Lebanon\'s national winter sport', 'The Mediterranean Sea — Lebanon\'s western border'],
    ans: 1,
    exp: 'el-arz = the cedar tree. The Cedar of Lebanon appears on the Lebanese flag and is one of the most ancient national symbols in the world — mentioned in the Bible, Epic of Gilgamesh, and Egyptian records. Ancient Lebanese cedars at Bcharré are a UNESCO World Heritage Site. The cedar represents Lebanon\'s ancient roots and enduring identity.'
  },
  {
    q: 'When a Lebanese person abroad says لبنان ما بيموت (lubnaan maa bimuut), what are they expressing?',
    opts: ['A factual statement that Lebanon will never end as a country', 'Defiant resilience — a declaration that Lebanon\'s spirit and culture will survive despite all crises', 'Frustration that Lebanon\'s problems never seem to end', 'Pride in Lebanon\'s military strength and defense'],
    ans: 1,
    exp: 'lubnaan maa bimuut = "Lebanon will not die." A rallying cry heard after every Lebanese catastrophe — the civil war, the 2006 war, the 2019 economic collapse, the 2020 Beirut explosion. It expresses the Lebanese belief in national resilience and the eternal survival of the Lebanese spirit even when the state fails.'
  },
  {
    q: 'What does مغترب (mughtarib) specifically mean?',
    opts: ['A Lebanese politician living in Lebanon', 'A Lebanese person living abroad / an émigré — literally "one who is in the west/foreign lands"', 'A person from Western Lebanon', 'Someone who is socially isolated'],
    ans: 1,
    exp: 'mughtarib = émigré / person living abroad. From the root غرب (gharb = west). Historically, emigration was to the "West" — Americas and Europe. Today, mughtaribiin include Lebanese in the Gulf, Africa, and globally. The mughtarib has a special political status — diaspora voting rights, dual loyalties, and the question of return are live political issues.'
  },
  {
    q: 'رح ارجع (ra7 irja3) is a phrase laden with meaning for Lebanese diaspora. What does it convey?',
    opts: ['A casual statement about coming home for dinner', '"I will return" — a promise that carries deep emotional weight for those who left Lebanon and long to come back', 'A flight booking confirmation', 'A tourist\'s plan to revisit Lebanon on vacation'],
    ans: 1,
    exp: 'ra7 irja3 = "I will return." For Lebanese diaspora, these words carry enormous weight — the unspoken promise to return home that many carry for decades. Some return; many don\'t. The 2019 economic crisis and 2020 explosion made return feel more distant for many, yet the desire persists. The phrase echoes across generations of Lebanese emigration.'
  },
  {
    q: 'What is the emotional weight of شوق (shou2) in Lebanese songs and poetry?',
    opts: ['A word for excitement about a new beginning', 'Deep longing / yearning — often for a person, a place, or a homeland left behind', 'Anger about being separated from family', 'Anticipation of a happy reunion'],
    ans: 1,
    exp: 'shou2 = longing / yearning. One of the most emotionally rich words in Lebanese Arabic. In diaspora songs and poetry, shou2 is constant — longing for Lebanon, for family left behind, for a Beirut that may no longer exist. Fairuz\'s iconic songs about longing for Beirut are saturated with shou2. It\'s bittersweet, aching, and beautiful.'
  },
];

const LBN_TIPS = [
  'Lebanon\'s diaspora is among the largest in the world relative to the country\'s size. Lebanese communities in Brazil (especially São Paulo), Argentina, Australia, the United States, France, West Africa, and the Gulf have preserved Lebanese culture, cuisine, and language for generations while adapting to their new homes.',
  'The concept of لبنانية (lubnaaniyye — Lebanism / Lebanese identity) is complex. Lebanon has 18 recognized religious sects, and citizens often identify with their sect, region, and family before their national identity. Yet certain things unify Lebanese across all divides: Fairuz\'s music, ma\'loukheh, football, and the phrase "heyda lubnaan."',
  'Lebanese emigration has occurred in waves: the 1860s sectarian conflicts, the Ottoman famine of WWI, the 1975-1990 civil war, and the post-2019 economic crisis. Each wave created diaspora communities with different relationships to Lebanon. The most recent "brain drain" is particularly painful — educated young Lebanese leaving en masse.',
  'Fairuz (Fayrouz) is perhaps the most powerful embodiment of Lebanese national feeling. Her songs about longing for Beirut, for mountain villages, for a lost Lebanon are played in diaspora communities worldwide and remain the soundtrack of Lebanese identity. "Li Beirut" became an anthem after the 1975 civil war; it was played again after the 2020 explosion.',
  'The Lebanese cedar (el-arz) is endangered in reality but immortal in symbol. Ancient cedar forests once covered Lebanon\'s mountains — the trees were used to build Solomon\'s Temple and Egyptian ships. Today, a small protected grove at Bcharré (The Cedars) survives. Reforestation projects continue. The cedar reminds Lebanese of their ancient civilization and their responsibility to preserve it.',
];

const LBN_ABOUT = 'Lebanon\'s national identity is paradoxical: a country of 4 million people with a diaspora of 8-14 million, a land of extraordinary beauty and extraordinary dysfunction, a culture of deep roots and perpetual emigration. Lebanese identity is shaped by sectarianism, resilience, the experience of crisis, and an almost irrational attachment to a difficult homeland. The words غربة (exile), شوق (longing), مغترب (émigré), and هيدا لبنان encode a national psychology unlike any other. Understanding Lebanese identity means understanding a people who love their country deeply, criticize it passionately, leave it reluctantly, and dream of returning forever.';
