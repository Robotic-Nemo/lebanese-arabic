// R822 — NEW FEATURE: Lebanese Neighborhood & Building Life (nbq)

const NBQ_CATS = ['neighborhood','building','neighbors','expressions'];

const NBQ_WORDS = [
  // neighborhood
  { a: 'حارة', tr: '7aara', en: 'neighborhood / quarter (tight-knit urban area)', cat: 'neighborhood' },
  { a: 'شارع', tr: 'shaare3', en: 'street / road', cat: 'neighborhood' },
  { a: 'دكان', tr: 'dukkaan', en: 'small shop / corner store', cat: 'neighborhood' },
  { a: 'مفرق', tr: 'mafra2', en: 'intersection / crossroads', cat: 'neighborhood' },
  { a: 'زقاق', tr: 'zu2a2', en: 'alley / narrow side street', cat: 'neighborhood' },
  { a: 'بلوك', tr: 'blok', en: 'apartment block / city block', cat: 'neighborhood' },
  { a: 'مبنى', tr: 'mabna', en: 'building / structure', cat: 'neighborhood' },
  // building
  { a: 'بواب', tr: 'bawwaab', en: 'doorman / building concierge', cat: 'building' },
  { a: 'موتور', tr: 'moutur', en: 'generator (private electricity generator)', cat: 'building' },
  { a: 'طانك', tr: 'taank', en: 'water tank (rooftop storage tank)', cat: 'building' },
  { a: 'مصعد', tr: 'mas3ad', en: 'elevator / lift', cat: 'building' },
  { a: 'سطح', tr: 'saTi7', en: 'rooftop (communal roof / terrace)', cat: 'building' },
  { a: 'درج', tr: 'daraj', en: 'staircase / stairs', cat: 'building' },
  { a: 'شرفة', tr: 'sharfe', en: 'balcony', cat: 'building' },
  // neighbors
  { a: 'جيران', tr: 'jiraan', en: 'neighbors (collective)', cat: 'neighbors' },
  { a: 'جار', tr: 'jaar', en: 'neighbor (male, single)', cat: 'neighbors' },
  { a: 'جارة', tr: 'jaare', en: 'neighbor (female, single)', cat: 'neighbors' },
  { a: 'صاحب البيت', tr: 'Saa7ib il-bayt', en: 'landlord / house owner', cat: 'neighbors' },
  { a: 'مستأجر', tr: 'musta2jar', en: 'tenant / renter', cat: 'neighbors' },
  { a: 'اشتراك موتور', tr: 'ishtraak moutur', en: 'generator subscription (monthly payment to generator owner)', cat: 'neighbors' },
  // expressions
  { a: 'نازلين تحت', tr: 'naazliin ta7et', en: 'going downstairs (common way to say "stepping out")', cat: 'expressions' },
  { a: 'الموتور وقف', tr: 'il-moutur wa2af', en: 'the generator stopped (power cut starting)', cat: 'expressions' },
  { a: 'الما انقطع', tr: 'il-may in2aTa3', en: 'the water got cut off', cat: 'expressions' },
  { a: 'سكنين قديم', tr: 'sakniin 2adeem', en: 'old-time residents / long-term neighbors', cat: 'expressions' },
  { a: 'بيت الجيران', tr: 'bayt il-jiraan', en: 'the neighbors\' house (often used: going to neighbors)', cat: 'expressions' },
  { a: 'اشتكى علينا', tr: 'ishtaka 3alayna', en: 'complained about us (neighbor filed complaint)', cat: 'expressions' },
  { a: 'مرسل مع الجار', tr: 'mrsal ma3 il-jaar', en: 'sent with the neighbor (common errand relay)', cat: 'expressions' },
  { a: 'نقلوا من الحارة', tr: 'n2alu min il-7aara', en: 'they moved out of the neighborhood', cat: 'expressions' }
];

const NBQ_DRILLS = [
  { q: 'What is "7aara"?', opts: ['apartment block','narrow alley','neighborhood/quarter','building lobby'], ans: 2, exp: '7aara = neighborhood — Lebanese neighborhoods are famously tight-knit; everyone knows each other, watches each other\'s kids, and shares news' },
  { q: '"Bawwaab" means...', opts: ['tenant','rooftop','doorman/concierge','landlord'], ans: 2, exp: 'Bawwaab = doorman — Lebanese apartment buildings traditionally have a bawwaab who manages entry, packages, and neighborhood gossip' },
  { q: 'What is "moutur"?', opts: ['water tank','staircase','elevator','generator'], ans: 3, exp: 'Moutur = generator — every Lebanese building has one; you pay monthly "ishtraak moutur" to have backup power during the daily outages' },
  { q: '"Taank" means...', opts: ['balcony','rooftop water tank','corner store','building block'], ans: 1, exp: 'Taank = water tank — rooftop tanks store water because municipal supply is unreliable; "il-may in2aTa3" (water cut) is a daily reality' },
  { q: 'What is "jiraan"?', opts: ['streets','neighbors (collective)','old residents','building owners'], ans: 1, exp: 'Jiraan = neighbors — Lebanese say "il-jaar 2abl il-daar" (pick the neighbor before the house); neighbor relations are crucial in Lebanese culture' },
  { q: '"SaTi7" means...', opts: ['staircase','elevator','balcony','rooftop/communal terrace'], ans: 3, exp: 'SaTi7 = rooftop — Lebanese rooftops are social spaces; summer evenings on the saTi7 watching the neighborhood is a classic memory' },
  { q: 'What is "zu2a2"?', opts: ['crossroads','apartment block','alley/narrow side street','building entrance'], ans: 2, exp: 'Zu2a2 = alley — Lebanese zu2a2s are neighborhood arteries; children play there, vendors pass through, gossip spreads here first' },
  { q: '"Musta2jar" means...', opts: ['landlord','doorman','generator owner','tenant/renter'], ans: 3, exp: 'Musta2jar = tenant — Lebanon\'s rent laws are complex; old-time "musta2jar 2adeem" (old-law tenants) pay near-zero rent from laws dating to the 1970s' },
  { q: 'What does "il-moutur wa2af" mean?', opts: ['the elevator stopped','the water got cut','the generator stopped','the neighbor left'], ans: 2, exp: '"Il-moutur wa2af" = the generator stopped — this phrase triggers scrambling for candles and phone chargers across Lebanon daily' },
  { q: '"Sharfe" means...', opts: ['rooftop','balcony','alley','staircase'], ans: 1, exp: 'Sharfe = balcony — Lebanese balconies are semi-public social spaces; sitting on the sharfe watching the street is a national pastime' },
  { q: 'What is "Saa7ib il-bayt"?', opts: ['doorman','long-term neighbor','tenant','landlord/house owner'], ans: 3, exp: 'Saa7ib il-bayt = landlord — relations with the Saa7ib il-bayt are delicate; in Lebanon he often lives in the same building' },
  { q: '"Ishtraak moutur" means...', opts: ['building fee','generator subscription','water tank payment','doorman tip'], ans: 1, exp: 'Ishtraak moutur = generator subscription — Lebanese pay monthly fees (often $50-150) to private generator operators for backup power hours' },
  { q: 'What is "blok"?', opts: ['narrow alley','apartment block/city block','corner store','building entrance'], ans: 1, exp: 'Blok = apartment block (from French/English) — Lebanese buildings are identified by blok number; "blok tlaate" (block three) is a common address' },
  { q: '"N2alu min il-7aara" means...', opts: ['they complained about us','they fixed the generator','they moved out of the neighborhood','they blocked the alley'], ans: 2, exp: '"N2alu min il-7aara" = they moved out — departure from the 7aara is noted by everyone; the community tracks who comes and goes' },
  { q: 'What is "mabna"?', opts: ['neighborhood','alley','building/structure','rooftop'], ans: 2, exp: 'Mabna = building — Beirut\'s skyline is defined by its mabaani (buildings); from crumbling Ottoman-era structures to new glass towers, all coexist' }
];

const NBQ_TIPS = [
  'The Lebanese "7aara" (neighborhood) is more than a street — it\'s a social unit. Neighbors know each other\'s business, watch each other\'s children, and form informal mutual aid networks. Moving into a new 7aara requires introducing yourself and brings social obligations that can feel intrusive to outsiders but are the fabric of Lebanese community life.',
  'The "moutur" (private generator) is uniquely Lebanese. Since state electricity comes only 3-12 hours daily, every building subscribes to a private generator operator. You pay monthly "ishtraak" for a set number of amperes. The generator owner (often called "Abu il-moutur") is a powerful neighborhood figure who can cut your power for non-payment.',
  'The "bawwaab" (doorman) is the nerve center of Lebanese apartment life. Often a Syrian or Egyptian migrant worker living in a ground-floor room, he handles packages, lets in repairmen, and serves as the building\'s informal security and information hub. Keeping a good relationship with the bawwaab is considered essential.',
  '"Jiraan" (neighbors) hold special status in Lebanese culture — there\'s a saying "il-jaar 2abl il-daar" (choose the neighbor before the house). Lebanese neighbors share food, watch over each other\'s apartments, lend cups of sugar, and are often closer than distant relatives. Noise complaints and parking disputes are the flip side of this intimacy.',
  'Water in Lebanon is complicated. Municipal water ("may il-balad") arrives irregularly, so rooftop "taank" (tanks) store reserves. When those run out, you call a water delivery truck. The phrase "il-may in2aTa3" (water got cut) is as common as the power equivalent. Managing both is a daily logistics challenge in Lebanese households.',
  'The Lebanese "sharfe" (balcony) is semi-public space. Lebanese sit on their sharfe to greet passersby, watch neighborhood life, and call down conversations with people on the street. Opening your shutters and appearing on the sharfe is a signal you\'re available to chat. Privacy norms differ — what seems intrusive elsewhere is normal neighborly engagement in Lebanon.'
];
