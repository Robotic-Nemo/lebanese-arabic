// R1530 — NEW FEATURE: Lebanese Car Accident & Road Drama (hds)

const HDS_WORDS = [
  { w: "7adse", tr: "حادثة", en: "car accident / crash", ex: "sar fi 7adse 3al autostrad", exEn: "there was an accident on the highway", notes: "7adse = any traffic collision; Lebanon has one of the world's highest accident rates — a daily reality for drivers" },
  { w: "tamin el siyyara", tr: "تأمين السيارة", en: "car insurance", ex: "3andak tamin el siyyara ma3ak?", exEn: "do you have your car insurance on you?", notes: "first question after any accident — many Lebanese drive without valid insurance, which escalates disputes instantly" },
  { w: "sufera", tr: "سيفرة", en: "traffic fine / police ticket", ex: "3atani sufera 3al wuquf el mamnoo3", exEn: "he gave me a ticket for illegal parking", notes: "sufera = traffic violation ticket; in Lebanon many fines go unpaid or get 'wasta'd away through connections" },
  { w: "nzel min el siyyara", tr: "نزل من السيارة", en: "get out of the car (confrontational)", ex: "nzel min el siyyara la n7ell el mawDoo3", exEn: "get out of the car so we can resolve this", notes: "escalation phrase — when someone gets out, the situation has moved from honking to potential confrontation" },
  { w: "3awwad", tr: "عوّض", en: "to compensate / pay for damage", ex: "lazemak t3awwed el 7adame", exEn: "you need to pay for the damage", notes: "3awwad = to make up for or compensate financially; settlements are usually private and cash-based in Lebanon" },
  { w: "mfassil", tr: "مفصّل", en: "dented / damaged body work", ex: "el bab mfassil ktir, ma byinba3 hek", exEn: "the door is badly dented, it can't stay like that", notes: "mfassil = bent out of shape, dented; used specifically for car body damage after a hit" },
  { w: "7allet", tr: "حلّت", en: "it got settled / resolved", ex: "7allet el 2addiyye, ma fi mahkame", exEn: "the matter was settled, no court case", notes: "in Lebanon, most accidents are 'settled' roadside with cash changing hands — courts are the nuclear option" },
  { w: "3akkayt", tr: "عكّيت", en: "you caused this / you messed me up", ex: "3akkaytni w rkaDt — wein raye7?", exEn: "you hit me and ran — where are you going?", notes: "3akkay = to cause a mess or block; shouted when someone hits your car and tries to drive off" },
  { w: "7arake", tr: "حارقة", en: "road rage / aggressive driving", ex: "shu hal 7arake ya zalameh, mesh normal", exEn: "what is this road rage man, it's not normal", notes: "7arake on the road = aggressive, reckless behavior; Lebanese traffic culture is notoriously combative" },
  { w: "shataf", tr: "شطف", en: "sideswiped / grazed", ex: "shatafni bil kanabe el yameen", exEn: "he sideswiped me on the right side", notes: "shataf = to brush/swipe along the side; very common in narrow Beirut streets and roundabouts" },
  { w: "2addan", tr: "قدّان", en: "head-on collision", ex: "sar 2addan 3al troush — teljetein", exEn: "there was a head-on on the mountain road — two cars", notes: "2addan = face-to-face collision; tragically common on narrow mountain roads where overtaking is dangerous" },
  { w: "la2 la2 ana mish ghaalat", tr: "لأ لأ أنا مش غالط", en: "no no I'm not wrong (reflexive denial)", ex: "la2 la2 ana mish ghaalat, inta darrabt iyye", exEn: "no no I'm not wrong, you hit me", notes: "universal first Lebanese response to any accident regardless of fault — admitting fault is culturally almost impossible" },
  { w: "mahkame", tr: "محكمة", en: "court (usually a threat)", ex: "im mish htifattna, bokra 3al mahkame", exEn: "if we don't agree, tomorrow we'll go to court", notes: "mahkame is more often threatened than used — the word itself is meant to pressure the other party into settling privately" },
  { w: "shohhad", tr: "شهود", en: "witnesses (everyone becomes one)", ex: "fi shohhad shaafo su3u?", exEn: "are there witnesses who saw it?", notes: "after an accident in Lebanon, bystanders gather immediately — everyone becomes an eyewitness with strong opinions" },
  { w: "darrab siyyara", tr: "ضرب سيارة", en: "hit a car / car crash", ex: "darrab siyyara w mesh waqqef", exEn: "he hit a car and didn't stop", notes: "darrab siyyara = to hit/crash a car; most common hit-and-run scenario, especially for minor bumps in parking" },
  { w: "khadd el siyyara w rkaDt", tr: "خد السيارة وركض", en: "took the car and fled (hit and run)", ex: "ma3reftesh shu byiswa, khadd el siyyara w rkaDt", exEn: "he didn't know what to do, he took the car and fled", notes: "hit-and-run culture is common for minor incidents — recording license plates via phone camera has become the standard response" },
  { w: "nefes 3amee2", tr: "نفس عميق", en: "deep breath (advice after accident)", ex: "khod nefes 3amee2, ma fi shi bi2sul hal waqt", exEn: "take a deep breath, nothing happens in this situation", notes: "practical advice friends give before you get out of the car — Lebanese accident scenes can escalate rapidly without it" },
  { w: "balade 3an hal shufer", tr: "بلادة عن هالشوفر", en: "this driver's incompetence (resigned sigh)", ex: "yee, balade 3an hal shufer, shu 3amil?", exEn: "oh, this driver's incompetence, what is he doing?", notes: "resigned commentary on bad driving — balade = dullness/stupidity; said with a sigh rather than anger, a Lebanese coping mechanism" }
];

const HDS_DRILLS = [
  { q: "What does '7adse' mean?", a: "car accident / crash", hint: "happens daily on Lebanese roads" },
  { q: "What is 'tamin el siyyara'?", a: "car insurance", hint: "first thing asked after an accident" },
  { q: "What does '3awwad' mean?", a: "to compensate / pay for damage", hint: "usually done in cash roadside" },
  { q: "What does 'mfassil' describe?", a: "dented / damaged body work", hint: "car body bent out of shape" },
  { q: "What does '7allet' mean in accident context?", a: "it got settled / resolved (privately)", hint: "courts are avoided" },
  { q: "What is '2addan'?", a: "head-on collision", hint: "face-to-face crash, common on mountain roads" },
  { q: "What is the universal first response to a Lebanese accident?", a: "la2 la2 ana mish ghaalat (I'm not wrong)", hint: "no one admits fault" },
  { q: "What does 'shataf' mean?", a: "sideswiped / grazed along the side", hint: "common in narrow Beirut streets" },
  { q: "What does 'mahkame' usually mean in accident disputes?", a: "court (used as a threat, rarely followed through)", hint: "pressure tactic before private settlement" },
  { q: "What does '3akkayt' mean?", a: "you caused this / you messed me up", hint: "shouted when someone hits you and tries to leave" }
];

const HDS_TIPS = [
  "Lebanese accident culture runs on private settlement — almost no one calls the police for minor accidents. Instead, both drivers negotiate on the spot: who was at fault, how much damage, who pays cash. A third party (a passerby, a shop owner) is often enlisted as an informal mediator. This 'wasta settlement' system means most accidents never enter any official record.",
  "The 'la2 la2 ana mish ghaalat' (no no I'm not wrong) reflex is so universal it's become a Lebanese meme. The first 30 seconds after a collision are pure denial — both drivers insisting they're blameless. Experienced Lebanese drivers advise: don't try to establish fault immediately. Let the adrenaline drop first, then talk.",
  "Car insurance ('tamin el siyyara') in Lebanon is technically mandatory but enforcement is minimal. The standard local insurance is often only third-party liability. When someone asks 'fi tamin ma3ak?' right after an accident, they're testing whether you're protected or vulnerable — an uninsured driver will typically settle faster for less.",
  "Beirut's narrow streets make sideswiping ('shataf') an everyday occurrence — on the Corniche, around Hamra, in Achrafieh side streets. The unspoken rule for minor sideswipes with no injury: assess the damage together, agree on a number, exchange cash or phone numbers, and move on. Calling it officially prolongs everything by hours.",
  "Lebanese accident witnesses ('shohhad') are not passive — they actively participate. Within minutes, 5-10 bystanders will have formed strong opinions, given testimony, called family members, and filmed everything. The presence of witnesses actually helps calm situations because social pressure discourages extreme behavior. The Lebanese crowd is both judge and jury."
];
