// Run #99 — Small Talk Coach (STC)
// Two-turn social micro-scripts: opener + canonical reply. Lebanese small talk
// has formulaic back-and-forth that MSA-trained learners miss — "kīfak?" is a
// greeting, not a request for status, and the reply "el7amdelleh, w inta?"
// carries the exchange forward without literal answering. These pairs have to
// be memorized as units indexed by social micro-situation.
//
// Distinct from Run #96 (single idioms), Run #60/DLC (word-level swaps), and
// the CONVERSATIONS multi-turn story dialogs (ordering coffee, taking a taxi):
// this is the *sub-second formulaic pair*. Learner has to pick the right
// reply for the right opener — distractors are other replies within the same
// topic, so the gate isn't topic-matching (easy) but opener-matching (the
// actual learning target).

const STC_TOPICS = [
  { id:'greeting', label:'👋 Greeting / meeting',   desc:'openers, first-contact' },
  { id:'family',   label:'👨‍👩‍👧 Family check-in',       desc:'"how\'s the family?"' },
  { id:'work',     label:'💼 Work / doing',          desc:'"what are you up to?"' },
  { id:'weather',  label:'🌤 Weather / day',          desc:'"nice day today"' },
  { id:'closing',  label:'🚪 Closing / goodbye',      desc:'leave-taking' }
];

// Each exchange: {id, topic, opener:{ar,tr,en}, reply:{ar,tr,en}, note}.
// Reply is the *canonical* response — the one a native would most commonly
// give. Alternatives exist but for drill-correctness we pin one per opener.
const STC_EXCHANGES = [
  // ── greeting ───────────────────────────────────────────────────────────
  { id:'st1', topic:'greeting',
    opener:{ ar:'كيفك؟',          tr:'kīfak?',                    en:'How are you? (to m)' },
    reply: { ar:'الحمد لله، وانتا؟', tr:'el7amdelleh, w inta?',       en:"Thanks to God, and you?" },
    note:"Near-universal greeting. Not a literal status request. Default reply: thanks-to-God + return question. Gender-flip for female: 'kīfek?' → 'el7amdelleh, w inti?'" },
  { id:'st2', topic:'greeting',
    opener:{ ar:'مرحبا',           tr:'mar7aba',                   en:'Hello' },
    reply: { ar:'مرحبتين',          tr:'mar7abtēn',                 en:'(literally: two hellos = hello back)' },
    note:"Literal dual 'mar7abtēn' = 'two hellos'. Lebanese reciprocity trope — match the greeting and go one higher." },
  { id:'st3', topic:'greeting',
    opener:{ ar:'صباح الخير',      tr:'SabāH el-khayr',             en:'Good morning' },
    reply: { ar:'صباح النور',       tr:'SabāH en-nūr',              en:'(morning of light)' },
    note:"Morning-specific. Fixed pair; never 'SabāH el-khayr' back — always 'SabāH en-nūr'. Small talk marker of fluency." },
  { id:'st4', topic:'greeting',
    opener:{ ar:'مسا الخير',        tr:'masā el-khayr',              en:'Good evening' },
    reply: { ar:'مسا النور',        tr:'masā en-nūr',               en:'(evening of light)' },
    note:"Evening counterpart. Same nūr-reply pattern as morning." },
  { id:'st5', topic:'greeting',
    opener:{ ar:'أهلين',           tr:'ahlēn',                      en:'Hi / hey (warm)' },
    reply: { ar:'يا هلا',           tr:'ya hala',                    en:'hey there!' },
    note:"Warmer than 'mar7aba', less formal than 'ahlan wa sahlan'. Everyday casual among friends." },
  // ── family ─────────────────────────────────────────────────────────────
  { id:'st6', topic:'family',
    opener:{ ar:'كيف العيلة؟',     tr:'kīf el-3aylé?',             en:'How is the family?' },
    reply: { ar:'بخير الحمد لله',   tr:'bkhayr, el7amdelleh',        en:"They're well, thanks to God" },
    note:"Obligatory family check-in after a greeting. Pause point: negative answers rare unless something's wrong." },
  { id:'st7', topic:'family',
    opener:{ ar:'كيف الأولاد؟',    tr:'kīf el-awlēd?',             en:'How are the kids?' },
    reply: { ar:'كبروا كتير',       tr:'kberō kteer',                en:"They've grown a lot" },
    note:"Standard answer. The real information conveyed is that the speaker acknowledges the kids are growing — closer to a warm platitude than a status update." },
  { id:'st8', topic:'family',
    opener:{ ar:'كيف الوالد؟',      tr:'kīf el-wēled?',             en:'How is your father?' },
    reply: { ar:'تسلملي',           tr:'teslamli',                   en:"(may he be well for me)" },
    note:"'teslamli' = 'may he be well for my sake'. Warmer than 'bkhayr'. Used when the person asking is close enough to warrant it." },
  { id:'st9', topic:'family',
    opener:{ ar:'سلم لي على أهلك',   tr:'sallem-li 3ala ahlak',       en:'Say hi to your family from me' },
    reply: { ar:'بيوصل',            tr:'byuSal',                     en:"It'll arrive (I'll pass it on)" },
    note:"Closing move before a goodbye. 'byuSal' is the fixed reply — literally 'it arrives', i.e. the greeting will be delivered." },
  // ── work ───────────────────────────────────────────────────────────────
  { id:'st10', topic:'work',
    opener:{ ar:'شو عم تعمل؟',      tr:'shu 3am ta3mol?',           en:'What are you up to?' },
    reply: { ar:'ولا شي، عادي',      tr:'wala shī, 3ādi',             en:"Nothing, just the usual" },
    note:"Standard brush-off. Literal 'wala shī' = 'not a thing'. '3ādi' = 'usual / normal'. Real answer rarely given unless asked twice." },
  { id:'st11', topic:'work',
    opener:{ ar:'كيف الشغل؟',      tr:'kīf esh-sheghel?',          en:'How is work?' },
    reply: { ar:'ماشي الحال',       tr:'mēshi el-7āl',               en:'Things are moving (it\'s going)' },
    note:"Neutral positive. 'mēshi el-7āl' literally 'the state is walking'. Avoids committing to great/bad — safe default." },
  { id:'st12', topic:'work',
    opener:{ ar:'الله يعطيك العافية', tr:'Alla ya3Tīk el-3āfye',      en:'May God give you strength (well done)' },
    reply: { ar:'الله يعافيك',       tr:'Alla y3āfīk',                en:'May God keep you well back' },
    note:"Workplace / service-worker blessing. The reply mirror-echoes back. Native use: said to anyone who just did a task — waiter, shopkeeper, cleaner." },
  { id:'st13', topic:'work',
    opener:{ ar:'شو أخبارك؟',       tr:'shu akhbārak?',              en:'What\'s new? (lit. your news)' },
    reply: { ar:'ما في جديد',       tr:'ma fī jdīd',                 en:'Nothing new' },
    note:"Status check between meetings. The 'jdīd' answer is the expected default — not claiming a dull life, just social modesty." },
  // ── weather ────────────────────────────────────────────────────────────
  { id:'st14', topic:'weather',
    opener:{ ar:'شو هالبرد',         tr:'shu hal-bard',              en:'Wow it\'s cold' },
    reply: { ar:'عنجد، جنن',         tr:'3an jad, jannan',            en:"Seriously, it's crazy" },
    note:"Winter-specific. Lebanese winters cold but short; complaint + emphatic reply = bonding. 'jannan' = 'drove crazy' = intense." },
  { id:'st15', topic:'weather',
    opener:{ ar:'شو هالشوب',         tr:'shu hash-shōb',             en:'Wow it\'s hot' },
    reply: { ar:'ما بقينا نتحمل',     tr:'ma ba2īna net7ammal',       en:"We can't take it anymore" },
    note:"Summer counterpart. 'shōb' = 'heat' (specifically Levantine). Coastal humidity makes this line common July–Sep." },
  { id:'st16', topic:'weather',
    opener:{ ar:'شو حلو الجو',       tr:'shu 7elo el-jaw',            en:'The weather is so nice' },
    reply: { ar:'إي والله، نعمة',    tr:'ē wallah, ne3me',            en:'Yeah truly, a blessing' },
    note:"Spring/autumn default. 'ne3me' = 'blessing'. The pair frames nice weather as a gift to enjoy aloud." },
  { id:'st17', topic:'weather',
    opener:{ ar:'عم بتشتي',          tr:'3am betshatti',              en:"It's raining" },
    reply: { ar:'الأرض كانت عطشانة', tr:'el-2arD kēnet 3aTshēné',     en:'The ground was thirsty' },
    note:"Rain-specific acknowledgement, poetic register. Common among older speakers. Younger: 'ē 3ajjit' = 'yeah it poured'." },
  // ── closing ────────────────────────────────────────────────────────────
  { id:'st18', topic:'closing',
    opener:{ ar:'يلا، بخليك',        tr:'yalla, bkhallīk',             en:"OK, I'll let you go" },
    reply: { ar:'سلام، تا بعدين',     tr:'salām, ta-ba3dēn',           en:'Bye, see you later' },
    note:"Soft closing. 'bkhallīk' = 'I release you' (polite way to end a chat). Response echoes farewell + deferred next meeting." },
  { id:'st19', topic:'closing',
    opener:{ ar:'نشوفك قريب',        tr:'enshūfak 2arīb',             en:'See you soon' },
    reply: { ar:'إن شاء الله',        tr:'inshallah',                  en:'God willing' },
    note:"Polite futurity. Even non-religious speakers use 'inshallah' here as a civility marker — closes the commitment loop without firm promise." },
  { id:'st20', topic:'closing',
    opener:{ ar:'ديرك بالك',          tr:'dīr bēlak',                   en:'Take care (m)' },
    reply: { ar:'وانتا كمان',          tr:'w inta kamēn',                en:'You too' },
    note:"'dīr bēlak' = 'turn your mind' = keep an eye on yourself. Gender: 'dīri bēlek' (f). Reply always mirrors back." },
  { id:'st21', topic:'closing',
    opener:{ ar:'تصبح على خير',       tr:'tuSbaH 3ala 5ayr',            en:'Good night (may you wake to good)' },
    reply: { ar:'وانتا من أهلو',        tr:'w inta men ahlo',             en:'(and you among its people)' },
    note:"Night-specific leave-taking. The reply literally 'you among its people' = 'may you be among those who wake to good'. Formulaic; don't improvise." }
];

// Exercises: English opener → pick the canonical reply. Distractors are 3
// other replies from the SAME topic — so the learner has to match opener-to-
// reply specifically, not just categorize the topic.
const STC_EXERCISES = [
  { id:'sx1',  exchangeId:'st1',  prompt:"Someone greets you with 'How are you?'. What's the classic reply?" },
  { id:'sx2',  exchangeId:'st3',  prompt:"You're opening with 'good morning' — how do they reply?" },
  { id:'sx3',  exchangeId:'st4',  prompt:"It's evening. You say 'masā el-khayr'. The reply?" },
  { id:'sx4',  exchangeId:'st2',  prompt:"Casual 'mar7aba' opener. Lebanese reply?" },
  { id:'sx5',  exchangeId:'st5',  prompt:"Warm 'ahlēn' from a friend. Match it back." },
  { id:'sx6',  exchangeId:'st6',  prompt:"Polite 'how is the family?' — the expected answer?" },
  { id:'sx7',  exchangeId:'st7',  prompt:"'How are the kids?' — what warm platitude fits?" },
  { id:'sx8',  exchangeId:'st8',  prompt:"'How is your father?' from a close friend. The warm reply?" },
  { id:'sx9',  exchangeId:'st9',  prompt:"They ask you to 'say hi to your family' — what's the fixed reply?" },
  { id:'sx10', exchangeId:'st10', prompt:"'What are you up to?' — the standard brush-off?" },
  { id:'sx11', exchangeId:'st11', prompt:"'How is work?' — the neutral-positive default answer?" },
  { id:'sx12', exchangeId:'st12', prompt:"They said 'ya3Tīk el-3āfye' (well done). Reply?" },
  { id:'sx13', exchangeId:'st13', prompt:"'What's new?' — modest default reply?" },
  { id:'sx14', exchangeId:'st14', prompt:"It's cold. They complain. You agree emphatically. The reply?" },
  { id:'sx15', exchangeId:'st15', prompt:"Summer heat complaint. The defeated reply?" },
  { id:'sx16', exchangeId:'st16', prompt:"Lovely weather — they say so. Your grateful agreement?" },
  { id:'sx17', exchangeId:'st18', prompt:"They start closing the chat with 'yalla, bkhallīk'. Reply?" },
  { id:'sx18', exchangeId:'st19', prompt:"'See you soon' as the parting. What's the polite futurity reply?" },
  { id:'sx19', exchangeId:'st20', prompt:"'Take care' from a friend. Mirror back." },
  { id:'sx20', exchangeId:'st21', prompt:"'Good night' (tuSbaH 3ala 5ayr). Fixed reply?" }
];

const STC_TIPS = [
  "Lebanese small talk is reciprocity-first: the reply usually mirrors or out-does the opener ('mar7aba' → 'mar7abtēn'). Never answer literally when a formula exists.",
  "Morning/evening greetings are rigid pairs: SabāH el-khayr → SabāH en-nūr, masā el-khayr → masā en-nūr. Don't swap 5ayr back.",
  "'kīfak?' gender-flips: male-to-male 'kīfak' → 'el7amdelleh w inta'; female-to-female 'kīfek?' → 'el7amdelleh w inti'; mixed picks the addressee's gender.",
  "Family check-ins ('kīf el-3aylé', 'kīf el-awlēd') are obligatory step 2 after greeting. Skipping them feels cold.",
  "'wala shī, 3ādi' is the Lebanese equivalent of 'not much, you?' — formulaic brush-off, not a real status report.",
  "Weather openers bond through complaint. 'shu hal-bard' (cold) or 'shu hash-shōb' (heat) both expect empathetic agreement, not solutions.",
  "Closings are layered: (a) 'yalla bkhallīk' (soft release) → (b) 'tuSbaH 3ala 5ayr' or 'dīr bēlak' (take care) → (c) 'inshallah nshūfak' (next-meeting). Native speakers stack all three."
];
