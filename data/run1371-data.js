// R1371 — NEW FEATURE: Lebanese Haret & Old Quarter Life (hrt)
const HRT_WORDS = [
  { ar: 'haret', tr: 'old quarter / alley neighborhood', en: 'the traditional Lebanese neighborhood unit — a cluster of houses around a shared alley or dead-end lane' },
  { ar: 'zkak', tr: 'narrow alley', en: 'the tight alleyway between old stone houses — children play, neighbors gossip, cats patrol' },
  { ar: 'dar', tr: 'family house / old courtyard home', en: 'the traditional Lebanese house with a central courtyard — multiple generations may share it' },
  { ar: 'bayt 3atik', tr: 'old heritage house', en: 'a pre-war limestone house, often with arched windows and red-tile roof — heritage treasure' },
  { ar: 'jiran', tr: 'neighbors', en: 'the neighbors in your haret — they know your business, feed your cat, and call your mother' },
  { ar: 'mukhtar', tr: 'village/quarter headman', en: 'the elected local representative who stamps documents and mediates disputes in the haret' },
  { ar: 'khodra 3ala l-bayt', tr: 'greenery on the house', en: 'jasmine, grapevines, or bougainvillea climbing the old stone walls — a haret hallmark' },
  { ar: 'bir', tr: 'well / cistern', en: 'the old water well or cistern that anchor many traditional Lebanese courtyards' },
  { ar: 'liwan', tr: 'arched veranda / loggia', en: 'the covered outdoor living space fronting traditional Lebanese houses — triple-arch style is iconic' },
  { ar: 'tnet mishmish', tr: 'apricot tree', en: 'the apricot tree in the courtyard — "bneten tnet mishmish" means it\'ll never happen, like "when pigs fly"' },
  { ar: 'tawle 3ala l-beb', tr: 'table at the door', en: 'sitting outside your house door to chat — the haret\'s living room is the alley itself' },
  { ar: 'wled l-7ara', tr: 'kids of the quarter', en: 'children of the neighborhood — they roam freely, play in the zkak, and eat at each other\'s homes' },
  { ar: '7aret l-7arb', tr: 'war quarter / wartime memories', en: 'Lebanese harets carry wartime scars — bullet holes in walls, blocked streets, sectarian divides' },
  { ar: '7osh', tr: 'shared inner courtyard', en: 'the open courtyard shared by multiple families in a traditional Lebanese residential cluster' },
  { ar: 'bent l-7ara', tr: 'girl of the quarter', en: 'a girl from the same neighborhood — implies familiarity, shared history, and social accountability' },
  { ar: 'bawwab l-7ara', tr: 'gate of the quarter', en: 'the entrance gate to the haret — once locked at night for security in historic Beirut and mountain towns' },
  { ar: 'zankha', tr: 'stench / dead-end lane', en: 'a narrow dead-end alley — also slang for a smelly place; urban harets have both senses' },
  { ar: 'nawbet l-miyye', tr: 'water turn / rationing shift', en: 'the scheduled time your building or haret gets municipal water — still a reality in many areas' },
  { ar: '3alam l-7ara', tr: 'flag of the quarter', en: 'political or sectarian flags hung in the haret — marking territory and allegiance in Lebanese neighborhoods' },
  { ar: 'jennet l-7ara', tr: 'garden of the quarter', en: 'the small communal green space or planted corner maintained by haret residents together' }
];
const HRT_DRILLS = [
  { q: 'What is "haret"?', opts: ['a narrow alley', 'old quarter / neighborhood unit', 'a courtyard well', 'a heritage house'], a: 1 },
  { q: '"Zkak" refers to?', opts: ['a communal courtyard', 'narrow alley between houses', 'the quarter headman', 'an arched veranda'], a: 1 },
  { q: 'What is "liwan"?', opts: ['a water cistern', 'apricot tree', 'arched veranda / loggia', 'shared inner courtyard'], a: 2 },
  { q: '"Mukhtar" is?', opts: ['a heritage house', 'the local quarter headman', 'gate of the quarter', 'kids of the neighborhood'], a: 1 },
  { q: 'What is "7osh"?', opts: ['a dead-end lane stench', 'shared inner courtyard', 'water rationing shift', 'flag of the quarter'], a: 1 },
  { q: '"Nawbet l-miyye" means?', opts: ['sitting at the door', 'apricot tree in the yard', 'water turn / rationing shift', 'war quarter memories'], a: 2 },
  { q: 'What is "bayt 3atik"?', opts: ['the quarter gate', 'old heritage house', 'greenery on the house', 'communal garden'], a: 1 },
  { q: '"Wled l-7ara" are?', opts: ['keys to the quarter gate', 'kids of the neighborhood', 'water cistern workers', 'political flags'], a: 1 }
];
const HRT_TIPS = [
  'The Lebanese "haret" is more than a street — it\'s a social unit. In Beirut\'s old districts (Gemmayzeh, Geitawi, Ashrafieh, Basta) and in mountain villages, the haret shapes identity. People say "wled l-7ara" the way others say "my people" — it carries deep loyalty and lifelong bonds.',
  'Traditional Lebanese houses (dar/bayt 3atik) feature the iconic triple-arched liwan facing the courtyard. Many date to the 19th century Ottoman period and were built in honey-colored limestone. Post-civil-war Beirut lost hundreds of these to neglect and real-estate speculation — preservation battles are ongoing.',
  'The mukhtar is a uniquely Lebanese institution. Every village and urban quarter has one — elected locally, they stamp residency papers, witness legal documents, and mediate between families. Saying "ro7 3enta l-mukhtar" (go sort it with the mukhtar) is the Lebanese equivalent of "take it to city hall."',
  'Water scarcity turned the "nawbet l-miyye" into a community ritual. Families know exactly when their building\'s water comes, fill every tank and bucket, and gossip while doing so. The haret water schedule is serious business — missing your nawbet means a dry week.'
];
