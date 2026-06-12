// Run #108 — Oath & Emphasis Coach (OTH)
// Culturally-specific Lebanese phrases that reinforce, soften, or
// emotionally color speech. These are heard constantly in daily
// Lebanese but are almost never drilled systematically in learner
// materials — they get listed as vocab and forgotten.
// Distinct from SA (social acknowledgments like sa77tein / tislam)
// because these are speech-act *intensifiers* rather than conventional
// responses. Distinct from IDM (idioms) because these are single
// fixed phrases with a grammatical function, not proverbial sayings.

const OTH_CATS = [
  { id:'oath',     label:'🤝 Oath' },
  { id:'emph',     label:'💥 Emphasis' },
  { id:'soft',     label:'🙏 Softener' },
  { id:'filler',   label:'🗣️ Emphatic filler' }
];

const OTH_ITEMS = [
  // ─── Oath / truth assertion ───────────────────────────────────
  { id:'o1', ar:'والله', tr:'wallah', en:'I swear (to God)', cat:'oath',
    note:'The default truth-asserter. Spoken constantly, often just as a conversation opener ("wallah, kenet...").',
    example:'والله ما شفتو', example_tr:'wallah ma shefto', example_en:"I swear I didn't see him" },
  { id:'o2', ar:'والله العظيم', tr:'wallah el-3aDHim', en:'I swear by God the Almighty', cat:'oath',
    note:'Strong binding oath. Reserved for serious assertions; overuse weakens it.',
    example:'والله العظيم ما كنت عارف', example_tr:"wallah el-3aDHim ma kent 3aref", example_en:"I swear to God I didn't know" },
  { id:'o3', ar:'بشرفي', tr:'bi-sharafi', en:'on my honor', cat:'oath',
    note:'Personal-honor oath. Can also be bi-sharafak (on your honor — addressing someone) to press them for truth.',
    example:'بشرفي ما كان قصدي', example_tr:"bi-sharafi ma kan 2aSdi", example_en:"On my honor, I didn't mean it" },
  { id:'o4', ar:'بحياتي', tr:'bi-7ayati', en:'by my life', cat:'oath',
    note:'Life-staked oath — "I swear on my life". bi-7ayat emmak = by your mother\'s life (heavier).',
    example:'بحياتي ما بكذب عليك', example_tr:'bi-7ayati ma bkaddeb 3aleik', example_en:"I swear on my life I'm not lying to you" },
  { id:'o5', ar:'عن جد', tr:'3an jad', en:'seriously / for real', cat:'oath',
    note:'Not a full oath — more "for real?" or "I mean it". Often paired as a question: 3an jad? (really?).',
    example:'عن جد، ما عندي خبر', example_tr:'3an jad, ma 3endi khabar', example_en:"Seriously, I have no news" },
  { id:'o6', ar:'يمين', tr:'yamin', en:'oath', cat:'oath',
    note:'The noun "oath" itself, used in "ba7lifak yamin" (I make you swear) for pressing someone.',
    example:'بحلفك يمين', example_tr:'ba7lifak yamin', example_en:"I swear you to an oath" },

  // ─── Emphasis / strong affirmation or dismissal ───────────────
  { id:'e1', ar:'على راسي', tr:'3ala rasi', en:'on my head (gladly)', cat:'emph',
    note:'"Of course, with pleasure." Literally "on my head" — expression of willing service. 3ala rasi w-3eini = on my head and eye (even stronger).',
    example:'هيدا الشغل على راسي', example_tr:'hayda el-shoghl 3ala rasi', example_en:'This task — gladly, on my head' },
  { id:'e2', ar:'على عيني', tr:'3ala 3aini', en:'on my eye (gladly)', cat:'emph',
    note:'Pair of 3ala rasi. Used after accepting a request to emphasize willingness.',
    example:'على عيني يا حبيبي', example_tr:'3ala 3aini ya 7abibi', example_en:'Of course, my dear' },
  { id:'e3', ar:'أكيد', tr:'akid', en:'definitely / sure', cat:'emph',
    note:'Basic certainty marker. Stronger: akid akid (definitely definitely).',
    example:'أكيد جاي', example_tr:"akid jeyy", example_en:"I'm definitely coming" },
  { id:'e4', ar:'طبعاً', tr:'Tab3an', en:'of course / naturally', cat:'emph',
    note:'Formal-sounding "of course". Slightly more assertive than akid.',
    example:'طبعاً بعرفو', example_tr:"Tab3an ba3rifo", example_en:'Of course I know him' },
  { id:'e5', ar:'مش معقول', tr:'mish ma32ul', en:"not reasonable / unbelievable", cat:'emph',
    note:'Disbelief or outrage marker — "no way", "unbelievable". Often sarcastic.',
    example:'مش معقول شو عملت!', example_tr:'mish ma32ul shu 3melet!', example_en:"I can't believe what you did!" },
  { id:'e6', ar:'فشر', tr:'fashar', en:"no way / not a chance", cat:'emph',
    note:'Strong dismissal — "yeah right", "never gonna happen". Colloquial, slightly rough.',
    example:'يعزمنا؟ فشر', example_tr:'ya3zemna? fashar', example_en:"He\'ll invite us? Yeah right" },
  { id:'e7', ar:'بكل تأكيد', tr:'bi-kell ta2kid', en:'with all certainty', cat:'emph',
    note:'Formal register. Used in speeches, news, or to add weight.',
    example:'بكل تأكيد منقدر', example_tr:'bi-kell ta2kid men2dar', example_en:'With complete certainty we can' },

  // ─── Softener / polite opener ─────────────────────────────────
  { id:'s1', ar:'لو سمحت', tr:'law sama7et', en:'please (m.)', cat:'soft',
    note:'"If you allow me" — default polite request opener. Fem: law sama7ti. Plural: law sama7to.',
    example:'لو سمحت، وين المطعم؟', example_tr:'law sama7et, wein el-maT3am?', example_en:"Excuse me, where\'s the restaurant?" },
  { id:'s2', ar:'عن إذنك', tr:'3an iznak', en:"with your permission (m.)", cat:'soft',
    note:'"By your leave" — used when excusing yourself, interrupting, or asking to pass. Fem: 3an iznek.',
    example:'عن إذنك لازم روح', example_tr:"3an iznak lazem ruu7", example_en:'Excuse me, I have to go' },
  { id:'s3', ar:'بخاطرك', tr:"bi-khaTrak", en:"with your permission / goodbye (m.)", cat:'soft',
    note:'"By your heart" — a courteous parting formula when leaving. Fem: bi-khaTrek. Response: ma3 es-salameh.',
    example:'بخاطركون، لحقي موعد', example_tr:'bi-khaTerkon, la7i2 maw3ed', example_en:'By your leave, I have to catch an appointment' },
  { id:'s4', ar:'بعد إذنك', tr:"ba3d iznak", en:"after your permission", cat:'soft',
    note:'"After your permission" — ask before doing something, e.g. taking a seat or food.',
    example:"بعد إذنك بقعد هون", example_tr:"ba3d iznak be23od hon", example_en:"With your permission, I'll sit here" },
  { id:'s5', ar:'إذا بتريد', tr:"iza bitrid", en:"if you want (m.)", cat:'soft',
    note:'"If you wish" — softens a request or suggestion. Fem: iza bitridi.',
    example:'إذا بتريد نروح سوا', example_tr:"iza bitrid nru7 sawa", example_en:"If you want, we can go together" },
  { id:'s6', ar:'ما تواخذني', tr:"ma tweakhezni", en:"don't mind me (m.)", cat:'soft',
    note:'"Don\'t hold it against me" — apologetic softener before an imposition or criticism. Fem: ma tweakhzini.',
    example:'ما تواخذني بس لازم روح', example_tr:'ma tweakhezni bas lazem ruu7', example_en:'Forgive me, but I have to go' },

  // ─── Emphatic filler (discourse marker / hedge intensifier) ──
  { id:'f1', ar:'يلا', tr:'yalla', en:"let's go / come on", cat:'filler',
    note:'Multi-purpose: urging action, accepting a plan, or closing a conversation. "yalla bye" is common.',
    example:'يلا منروح', example_tr:'yalla mnru7', example_en:"Come on, let's go" },
  { id:'f2', ar:'إن شاء الله', tr:'inshallah', en:'God willing', cat:'filler',
    note:'Used after future plans — not a pledge, just a cultural hedge. Can also mean "hopefully" or, cynically, "not likely".',
    example:'منشوفك بكرا إن شاء الله', example_tr:'mnshufak bukra inshallah', example_en:"We'll see you tomorrow, God willing" },
  { id:'f3', ar:'ما عليك', tr:'ma 3aleik', en:"don't worry about it (m.)", cat:'filler',
    note:'Dismissive comfort — "it\'s fine, no big deal". Fem: ma 3aleiki.',
    example:'ما عليك، هيدا شي عادي', example_tr:'ma 3aleik, hayda shi 3adi', example_en:"Don\'t worry, it's normal" },
  { id:'f4', ar:'ما عليش', tr:'ma 3alesh', en:"never mind", cat:'filler',
    note:'Shorter, Egyptian-flavored cousin of ma 3aleik. Used interchangeably in Beirut.',
    example:'ما عليش، منحل الموضوع', example_tr:'ma 3alesh, mn7ell el-mawDu3', example_en:"Never mind, we'll sort it out" },
  { id:'f5', ar:'خلص', tr:'khalaS', en:'done / enough / fine', cat:'filler',
    note:'Closure marker — "that\'s it", "enough", "fine". Signals acceptance or stopping a discussion.',
    example:'خلص، منروح بكرا', example_tr:'khalaS, mnru7 bukra', example_en:"Fine, we'll go tomorrow" },
  { id:'f6', ar:'طيب', tr:'Tayyeb', en:"OK / well / alright", cat:'filler',
    note:'Acknowledgment or topic-shift — "OK then", "well, so…". Ubiquitous in conversation.',
    example:'طيب، شو رأيك؟', example_tr:'Tayyeb, shu ra2yak?', example_en:"OK, what's your opinion?" },
  { id:'f7', ar:'ولله', tr:'walloo', en:"come on / really?", cat:'filler',
    note:'Contracted wallah used as a reactive interjection. Expresses surprise or mild disbelief — not a literal oath here.',
    example:'ولله، هيك صار؟', example_tr:"walloo, hek Sar?", example_en:"Really? That's what happened?" }
];

const OTH_EXERCISES = [
  { id:'x1',  prompt:'Someone asks you for a favor — how do you say "gladly"?',  itemId:'e1' },
  { id:'x2',  prompt:'You want to say "I swear I didn\'t see him" — which phrase opens it?', itemId:'o1' },
  { id:'x3',  prompt:'Polite way to ask "excuse me, where\'s…?"',                  itemId:'s1' },
  { id:'x4',  prompt:'You want to leave — what\'s the courteous parting formula?', itemId:'s3' },
  { id:'x5',  prompt:'React "unbelievable!" to someone\'s wild news',               itemId:'e5' },
  { id:'x6',  prompt:'Confirm a plan with a cultural "God willing"',                itemId:'f2' },
  { id:'x7',  prompt:'Dismiss a minor inconvenience — "don\'t worry about it"',    itemId:'f3' },
  { id:'x8',  prompt:'Urge friends to get moving — "let\'s go, come on!"',         itemId:'f1' },
  { id:'x9',  prompt:'Strong binding oath: "I swear to God the Almighty"',         itemId:'o2' },
  { id:'x10', prompt:'Accept an invitation emphatically: "on my head and eye"',    itemId:'e1' },
  { id:'x11', prompt:'Ask "are you serious?" informally — "for real?"',            itemId:'o5' },
  { id:'x12', prompt:'Dismiss an unlikely claim — "yeah right, no chance"',        itemId:'e6' },
  { id:'x13', prompt:'Excuse yourself to interrupt someone politely',              itemId:'s2' },
  { id:'x14', prompt:'Ask permission before sitting down — "after your permission"', itemId:'s4' },
  { id:'x15', prompt:'Soften a criticism — "don\'t hold it against me, but…"',    itemId:'s6' },
  { id:'x16', prompt:'Close a discussion decisively — "done, that\'s it"',         itemId:'f5' },
  { id:'x17', prompt:'Acknowledge and pivot topics — "OK then…"',                  itemId:'f6' },
  { id:'x18', prompt:'Mild reactive "really?" — softer than a full oath',          itemId:'f7' },
  { id:'x19', prompt:'Formal emphatic "with complete certainty"',                   itemId:'e7' },
  { id:'x20', prompt:'Soften a request: "if you want, we can…"',                   itemId:'s5' }
];

const OTH_TIPS = [
  'Oaths vs emphasis: oaths stake something (God, honor, life) on a truth claim. Emphasis (akid, Tab3an, 3ala rasi) just asserts without the staking — no binding weight.',
  "wallah is so frequent it works as a filler (\"walloo, hek Sar?\") without literal religious force. Listeners read the register from tone and context.",
  'Softener phrases (law sama7et / 3an iznak / bi-khaTrak) vary by gender and plurality. Memorize the M / F / PL set together to avoid mismatch.',
  "3ala rasi w-3eini (\"on my head and eye\") is the maximum-willingness accept. Using just 3ala rasi is already gracious; adding w-3eini makes it poetic.",
  "fashar is sharp and slightly rough — use with peers, not in formal or cross-generational speech. In formal contexts, mish ma32ul carries similar disbelief without the bite.",
  'inshallah is NOT a commitment marker. Pairing "yes, I\'ll come inshallah" with someone expecting a firm yes often reads as hedging or polite no. Native speakers parse intent from context.',
  "ma 3aleik vs ma 3alesh: Lebanese-native speakers use both interchangeably, though ma 3alesh has Egyptian flavor. Neither is \"more correct\" in Beirut.",
  'khalaS and Tayyeb are the two most-abused discourse fillers in beginner Lebanese. Learning when *not* to use them (e.g. in genuine disagreement or clarification) is half the battle.'
];
