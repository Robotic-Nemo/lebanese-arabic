// R1521 — NEW FEATURE: Lebanese Najjar & Home Repair Culture (njr)

const NJR_WORDS = [
  { w: "najjar", tr: "نجار", en: "carpenter", ex: "roo7 jib l najjar, l bab mkasar", exEn: "go get the carpenter, the door is broken", notes: "najjar = any woodworker; also fixes doors, windows, built-in furniture" },
  { w: "3adde", tr: "عدة", en: "tools / toolkit", ex: "wein l 3adde taba3ak?", exEn: "where are your tools?", notes: "every craftsman arrives with his 3adde — a bag or box of everything needed" },
  { w: "msmar", tr: "مسمار", en: "nail", ex: "3tini msmar kbir ykaffi", exEn: "give me a big nail that'll hold", notes: "also used metaphorically — 'dakhalo msmar' = they got a foothold/connection" },
  { w: "mkasar", tr: "مكسّر", en: "broken / damaged", ex: "l kursi mkasar min zaman", exEn: "the chair has been broken for a while", notes: "mkasar = physically broken; contrast with kharab which implies more total ruin" },
  { w: "7alle", tr: "حلّ", en: "fix / solution", ex: "shu l 7alle la hal 7aki?", exEn: "what's the fix for this situation?", notes: "said to any repairman — 'shu l 7alle?' opens every repair conversation" },
  { w: "kharab", tr: "خراب", en: "ruin / total damage", ex: "l dar sar fiya kharab", exEn: "the house has fallen into ruin", notes: "kharab = more severe than mkasar — implies neglect or collapse" },
  { w: "sba3", tr: "صبّاغ", en: "wall painter", ex: "3indna sba3 mni7 bil 7ay", exEn: "we have a good painter in the neighborhood", notes: "sba3 paints walls (not canvases) — also does plastering touch-ups" },
  { w: "farro3", tr: "فرّاع", en: "electrician (informal)", ex: "in2ooshak, call l farro3", exEn: "hurry, call the electrician", notes: "farro3 = informal term; formal is kahrabaji — farro3 implies someone quick and local" },
  { w: "barrad", tr: "برّاد", en: "plumber", ex: "l barrad msh rafi3 tlefonno", exEn: "the plumber isn't picking up the phone", notes: "colloquial term for plumber — from barrada (refrigeration/cooling); also called saba7" },
  { w: "la3me", tr: "لعمة", en: "screw (hardware)", ex: "l la3me wl2et, ma fi mazid", exEn: "the screw came loose, it won't hold anymore", notes: "la3me = any screw or bolt; 'wl2et la3mto' is also a phrase for someone losing their grip/sanity" },
  { w: "khashab", tr: "خشب", en: "wood", ex: "khashab 2awiyye lazem ykoon", exEn: "the wood needs to be strong", notes: "khashab quality is always discussed — Lebanese craftsmen prefer solid hardwood" },
  { w: "7arake", tr: "حراكة", en: "hardware & fittings shop", ex: "roo7 3al 7arake, jib waslet", exEn: "go to the hardware store, bring a fitting", notes: "7arake = essential neighborhood shop — sells nails, pipes, fittings, tools, electrical parts" },
  { w: "7addad", tr: "حداد", en: "ironworker / metal craftsman", ex: "l 7addad 3amelo l darabe l 7adid", exEn: "the ironworker made the iron railing", notes: "7addad makes window grilles, stair railings, and iron doors — essential Lebanese trade" },
  { w: "daho", tr: "دهو", en: "paint it / apply a coat", ex: "lazem daho l jdran abel l 3id", exEn: "need to paint the walls before the holiday", notes: "daho = apply paint or plaster; common before Eid, Christmas, or hosting a gathering" },
  { w: "wasle", tr: "وصلة", en: "pipe joint / connector", ex: "l wasle mkasra, mayye 3am tnazzel", exEn: "the joint is broken, water is dripping", notes: "wasle = connector piece; in plumbing or electrical — first thing to fail in old buildings" },
  { w: "3ala msooliyyti", tr: "على مسؤوليتي", en: "on my responsibility / I guarantee it", ex: "3ala msooliyyti, bsallmo tamam", exEn: "I guarantee it, I'll deliver it perfectly", notes: "classic craftsman reassurance — doesn't always translate to timely or perfect work" },
  { w: "byom bkra", tr: "ببيوم بكرا", en: "tomorrow (craftsman's famous delay)", ex: "byom bkra 2iji, mwakked", exEn: "I'll come tomorrow for sure", notes: "Lebanese cultural phrase — craftsmen saying 'byom bkra' rarely means the next actual day" },
  { w: "zakkar", tr: "زكّر", en: "tighten / fasten securely", ex: "zakkar l bab, 3am yft77 la7alo", exEn: "tighten the door, it's opening by itself", notes: "zakkar = make it tight; also used figuratively — 'zakkar 7alo' = he tightened up / got serious" }
];

const NJR_DRILLS = [
  { q: "What is a 'najjar'?", a: "carpenter", hint: "fixes doors, windows, built-in wood furniture" },
  { q: "What does '3adde' mean?", a: "tools / toolkit", hint: "every craftsman arrives with one" },
  { q: "How do you say 'broken/damaged' in Lebanese?", a: "mkasar", hint: "the chair has been this since forever" },
  { q: "What does 'farro3' mean?", a: "electrician (informal)", hint: "call one when the lights go out" },
  { q: "How do you say 'wall painter'?", a: "sba3", hint: "paints before the holidays" },
  { q: "What is a '7arake'?", a: "hardware & fittings shop", hint: "sells nails, pipes, tools, fittings" },
  { q: "What does '3ala msooliyyti' mean?", a: "I guarantee it / on my responsibility", hint: "craftsman's reassurance" },
  { q: "How do you say 'plumber' colloquially?", a: "barrad", hint: "often hard to reach by phone" },
  { q: "What's the cultural meaning of 'byom bkra' from a craftsman?", a: "classic delay — rarely means actual tomorrow", hint: "Lebanese appointment culture" },
  { q: "What does 'zakkar' mean?", a: "tighten / fasten securely", hint: "do this to a loose door or screw" }
];

const NJR_TIPS = [
  "The Lebanese najjar (نجار) is more than a carpenter — he's a neighborhood institution. He builds custom kitchen cabinets, fixes swollen wooden doors in winter humidity, repairs window frames, and installs built-in shelving. Every building has a najjar they call for anything wood-related.",
  "The 'byom bkra' (tomorrow) phenomenon is a real cultural experience in Lebanon. When a craftsman says 'byom bkra,' it means sometime in the near future — could be tomorrow, could be next week. Pressing for a specific time is acceptable and recommended: 'ay 7ada?' (what time?).",
  "The 7arake (حراكة) is the essential neighborhood hardware and fittings shop — a Lebanese institution. You'll find pipes, electrical connectors, nails, screws, tools, and obscure spare parts all crammed into a tiny space. The owner usually knows exactly what you need by description alone.",
  "Lebanon has a strong tradition of specialized craftsmen: the najjar (wood), 7addad (iron/metal), barrad (plumbing), farro3 (electrical), sba3 (painting), and ballat (tile/flooring). Each is called separately for their specialty — Lebanese buildings involve coordinating all of them.",
  "The phrase '3ala msooliyyti' (على مسؤوليتي) — 'on my responsibility / I guarantee it' — is used by craftsmen to reassure clients about quality and timing. It's a commitment but also a social formula. Following up with 'w l teslim aimte?' (when's the delivery?) is always wise."
];
