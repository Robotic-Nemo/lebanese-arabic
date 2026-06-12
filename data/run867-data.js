// R867 — NEW FEATURE: Lebanese Neighborhood Gossip & Social Dynamics (gsp)

const GSP_CATS = ['gossip','neighbors','phrases','dynamics'];

const GSP_WORDS = [
  // gossip
  { a: 'حكي الحارة', tr: '7aki il-7aara', en: 'neighborhood talk — the constant flow of information about who did what to whom', cat: 'gossip' },
  { a: 'قالت فلانة', tr: '2aalit fulaane', en: '"So-and-so said" — opener for every gossip report, the source always conveniently vague', cat: 'gossip' },
  { a: 'بين أهلنا', tr: 'been 2ahlna', en: '"Between our people" — means "this is secret" but guarantees it spreads faster', cat: 'gossip' },
  { a: 'ما فيك تسكت', tr: 'ma fiik tsakkot', en: '"You can\'t keep quiet" — accusation hurled at a gossip who couldn\'t resist telling', cat: 'gossip' },
  { a: 'شو سمعت؟', tr: 'shu smi3t?', en: '"What did you hear?" — the question that opens every neighborhood information exchange', cat: 'gossip' },
  { a: 'بيقولو الناس', tr: 'byi2ulu n-naas', en: '"People say" — the standard hedge; no one takes responsibility for the rumor', cat: 'gossip' },
  { a: 'ما بيخبوا شي', tr: 'ma byikhbu shii', en: '"Nothing stays hidden" — Lebanese axiom: secrets have a very short lifespan', cat: 'gossip' },
  // neighbors
  { a: 'الجارة', tr: 'il-jaara', en: 'the neighbor (f) — Lebanese neighborhoods run on women neighbors as social network hubs', cat: 'neighbors' },
  { a: 'الجار', tr: 'il-jaar', en: 'the neighbor (m) — he loans you tools, parks in your spot, and knows your schedule', cat: 'neighbors' },
  { a: 'فتحت الشباك', tr: 'fata7it ish-shabbak', en: '"She opened the window" — code for a nosy neighbor monitoring comings and goings', cat: 'neighbors' },
  { a: 'راح يحكي', tr: 'raa7 yi7ki', en: '"He\'ll talk" — warning that a neighbor will spread the information you just shared', cat: 'neighbors' },
  { a: 'بتعرف كل شي', tr: 'bta3rif kull shii', en: '"She knows everything" — said of the neighborhood authority figure who tracks all events', cat: 'neighbors' },
  { a: 'دايم بالمدخل', tr: 'daayim bil-madkhal', en: '"Always at the entrance" — the neighbor who permanently posts by the building door', cat: 'neighbors' },
  // phrases
  { a: 'ما كان لازم', tr: 'ma kaan laazim', en: '"It shouldn\'t have been" — tut-tut response to gossip while secretly enjoying every word', cat: 'phrases' },
  { a: 'يا حرام', tr: 'yaa 7araam', en: '"What a shame" — the empathetic response to gossip; doesn\'t stop you from repeating it', cat: 'phrases' },
  { a: 'شو بدنا نعمل؟', tr: 'shu badna na3mul?', en: '"What can we do?" — helpless shrug ending all gossip sessions without resolution', cat: 'phrases' },
  { a: 'الله يستر', tr: 'alla yistir', en: '"May God conceal" — protective phrase said about someone whose secret just got out', cat: 'phrases' },
  { a: 'عيب عليه', tr: '3eeb 3leeh', en: '"Shame on him" — moral judgment rendered after hearing gossip; social censure by proxy', cat: 'phrases' },
  { a: 'من جد؟', tr: 'min jadd?', en: '"Really?" — the fueling response that encourages the gossip to continue in detail', cat: 'phrases' },
  { a: 'ما تحكي لحدا', tr: 'ma t7ki la7ada', en: '"Don\'t tell anyone" — instruction reliably ignored by both parties within the hour', cat: 'phrases' },
  // dynamics
  { a: 'الفضول', tr: 'il-fuDuul', en: 'nosiness — considered a social virtue in Lebanese neighborhoods; keeps community informed', cat: 'dynamics' },
  { a: 'الكلام الفاضي', tr: 'il-kalaam il-faaaDi', en: '"empty talk" — gossip disguised as meaningless chat; the primary social lubricant', cat: 'dynamics' },
  { a: 'بالحارة كلها', tr: 'bil-7aara kullha', en: '"The whole neighborhood" — once something is "in the neighborhood" privacy is over', cat: 'dynamics' },
  { a: 'يعني بتعرفو', tr: 'ya3ni bta3rifoo', en: '"You know how he is" — code acknowledging shared knowledge without stating it directly', cat: 'dynamics' },
  { a: 'حكي الستات', tr: '7aki is-sittaat', en: '"women\'s talk" — gossip networks run by women; dismissive label but the actual news engine', cat: 'dynamics' },
  { a: 'ما عندو مشاغل', tr: 'ma 3ando msha3ghel', en: '"He has nothing to do" — explanation for why someone has time to observe and gossip', cat: 'dynamics' },
  { a: 'راح تسمع', tr: 'raa7 tisma3', en: '"You will hear" — warning that rumors will reach you before you reach home', cat: 'dynamics' },
  { a: 'هيدا شغل الحارة', tr: 'heyda shughl il-7aara', en: '"That\'s neighborhood business" — resignation that personal affairs are public property here', cat: 'dynamics' }
];

const GSP_DRILLS = [
  { q: 'What is "neighborhood talk" in Lebanese?', opts: ['7aki is-sittaat', '7aki il-7aara', 'il-kalaam il-faaaDi', 'il-fuDuul'], ans: 1 },
  { q: '"Nothing stays hidden" — Lebanese gossip axiom?', opts: ['ma fiik tsakkot', 'ma byikhbu shii', 'byi2ulu n-naas', 'shu smi3t?'], ans: 1 },
  { q: 'What does "She opened the window" signal?', opts: ['fresh air', 'invitation to visit', 'nosy neighbor monitoring', 'good weather'], ans: 2 },
  { q: '"Don\'t tell anyone" — what actually happens?', opts: ['secret kept permanently', 'spreads within the hour', 'only family told', 'written down'], ans: 1 },
  { q: 'How is "nosiness" (fuDuul) viewed in Lebanese neighborhoods?', opts: ['shameful behavior', 'a social virtue', 'mental illness', 'foreign custom'], ans: 1 },
  { q: '"What a shame" — used when hearing gossip?', opts: ['shu smi3t?', 'min jadd?', 'yaa 7araam', 'shu badna na3mul?'], ans: 2 },
  { q: '"People say" — why is this phrase used?', opts: ['to confirm facts', 'no one takes responsibility', 'to start arguments', 'polite greeting'], ans: 1 },
  { q: 'What is "women\'s talk" (7aki is-sittaat) actually?', opts: ['cooking recipes', 'children\'s stories', 'actual news engine', 'religious discussion'], ans: 2 },
  { q: '"Between our people" — what does it guarantee?', opts: ['secret kept forever', 'spreads faster', 'only family hears', 'written record'], ans: 1 },
  { q: '"Really?" (min jadd?) — what effect does it have?', opts: ['stops the gossip', 'encourages more detail', 'changes subject', 'expresses disbelief'], ans: 1 },
  { q: 'Who are the neighborhood social network hubs?', opts: ['older men', 'children', 'women neighbors', 'shop owners'], ans: 2 },
  { q: '"What can we do?" — what does it signal?', opts: ['call for action', 'helpless ending to gossip', 'anger at situation', 'request for help'], ans: 1 },
  { q: 'What is "empty talk" (kalaam faaaDi)?', opts: ['silence', 'gossip as social lubricant', 'religious speech', 'formal announcement'], ans: 1 },
  { q: '"May God conceal" — when is it said?', opts: ['wedding blessing', 'when a secret got out', 'morning greeting', 'travel prayer'], ans: 1 },
  { q: '"He has nothing to do" — explains what behavior?', opts: ['laziness at work', 'time to gossip', 'staying home sick', 'helping neighbors'], ans: 1 },
  { q: 'Once something is "in the neighborhood" what happens?', opts: ['it stays quiet', 'privacy is over', 'police are called', 'family meeting held'], ans: 1 }
];

const GSP_TIPS = [
  '<strong>The window rule</strong>: In Lebanese neighborhoods, an open window is a data collection station. The neighbor who sits by the window knows arrival times, visitor frequency, grocery volumes, and family mood. This is not considered rude — it\'s considered civic participation. Privacy in this context is a foreign concept.',
  '<strong>"Don\'t tell anyone" mechanics</strong>: When a Lebanese person says "ma t7ki la7ada," both parties understand this is a formality. The phrase is the gossip equivalent of "enjoy your meal" — polite, expected, and not meant literally. The information will be shared before either party reaches home.',
  '<strong>Responsibility-free gossip</strong>: "Byi2ulu n-naas" (people say) is the masterpiece of the Lebanese gossip format. No source, no accountability, and plausible deniability. The rumor travels at full speed while the spreader remains technically innocent. The passive voice carries the whole country\'s social news.',
  '<strong>The funeral-gossip paradox</strong>: Lebanese condolence visits (3aza) are simultaneously a solemn expression of grief and one of the richest information exchanges in the social calendar. Everyone learns who came, who didn\'t, what was said, and what the financial situation of the family is. This is done without shame — community monitoring is care.',
  '<strong>Neighborly knowledge</strong>: Lebanese neighbors track schedules not to control but because knowing your neighbor\'s rhythm is how you notice when something is wrong. The same woman who knows when you come home at 2am will also be the first to knock when you haven\'t come out in three days. Surveillance and care are the same thing.',
  '<strong>7aki is-sittaat: the real news</strong>: Before social media, Lebanese neighborhoods ran on the women\'s gossip network. Marriage deals, job opportunities, health crises, feuds, and reconciliations all moved through this channel faster and more accurately than any other medium. "Kalaam is-sittaat" was the original WhatsApp group, running for centuries.'
];
