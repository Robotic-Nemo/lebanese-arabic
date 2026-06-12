// R765 — NEW FEATURE: Lebanese Mechanic & Car Repair (mec)

const MEC_CATS = ['garage','problems','parts','phrases'];

const MEC_WORDS = [
  // garage
  {tr:'karaj',              en:'garage / repair shop',            ar:'كراج',            cat:'garage'},
  {tr:'mikaniki',           en:'mechanic',                        ar:'ميكانيكي',         cat:'garage'},
  {tr:'ta2sir',             en:'repair / fix',                    ar:'تأصير',            cat:'garage'},
  {tr:'service',            en:'service / maintenance',           ar:'سرفيس',            cat:'garage'},
  {tr:'taghyir zet',        en:'oil change',                      ar:'تغيير زيت',        cat:'garage'},
  {tr:'kashf',              en:'inspection / diagnosis',          ar:'كشف',             cat:'garage'},
  {tr:'2addesh l-ta2sir?',  en:'how much for the repair?',        ar:'قديش التأصير؟',    cat:'garage'},
  {tr:'ma3 t2akhir',        en:'sorry for the delay',             ar:'مع تأخير',         cat:'garage'},
  // problems
  {tr:'3atal',              en:'breakdown / malfunction',         ar:'عطل',             cat:'problems'},
  {tr:'wa2af',              en:'stalled / stopped',               ar:'وقف',             cat:'problems'},
  {tr:'mharre2',            en:'overheated (engine)',             ar:'محرّق',            cat:'problems'},
  {tr:'dakhkhan',           en:'smoking (engine)',                ar:'دخّان',            cat:'problems'},
  {tr:'tayer khafeye',      en:'flat tire',                       ar:'طاير خفية',        cat:'problems'},
  {tr:'batariyye mayyite',  en:'dead battery',                    ar:'بطارية ميتة',      cat:'problems'},
  {tr:'framan mish sha8el', en:'brakes not working',              ar:'فرامان مش شغّال', cat:'problems'},
  // parts
  {tr:'muharrik',           en:'engine / motor',                  ar:'محرك',            cat:'parts'},
  {tr:'zet',                en:'engine oil',                      ar:'زيت',             cat:'parts'},
  {tr:'tayer',              en:'tire / wheel',                    ar:'طاير',            cat:'parts'},
  {tr:'framan',             en:'brakes',                          ar:'فرامان',           cat:'parts'},
  {tr:'batariyye',          en:'car battery',                     ar:'بطارية',           cat:'parts'},
  {tr:'klaks',              en:'horn',                            ar:'كلاكس',            cat:'parts'},
  {tr:'vitess',             en:'gear / transmission',             ar:'فيتيس',            cat:'parts'},
  // phrases
  {tr:'shu 3ando l-siyyara?', en:'what\'s wrong with the car?',  ar:'شو عندو السيارة؟', cat:'phrases'},
  {tr:'badda kashf',        en:'it needs a check-up',             ar:'بدّا كشف',         cat:'phrases'},
  {tr:'badda taghyir zet',  en:'it needs an oil change',          ar:'بدّا تغيير زيت',   cat:'phrases'},
  {tr:'2addesh byekhod wa2et?', en:'how long will it take?',     ar:'قديش بياخد وقت؟',  cat:'phrases'},
  {tr:'3a to3ne',           en:'on a tow truck (towing)',         ar:'على طوانة',        cat:'phrases'},
  {tr:'kahraba 3atlet',     en:'electrical fault',                ar:'كهرباء عاطلة',     cat:'phrases'},
];

const MEC_DRILLS = [
  {q:'What is "karaj"?', opts:['garage / repair shop','fuel station','car dealership','parking lot'], ans:0},
  {q:'"mikaniki" means?', opts:['mechanic','driver','valet','electrician'], ans:0},
  {q:'How do you say "flat tire"?', opts:['tayer khafeye','batariyye mayyite','3atal','mharre2'], ans:0},
  {q:'"ta2sir" refers to?', opts:['repair / fix','inspection','oil change','service'], ans:0},
  {q:'How do you say "dead battery"?', opts:['batariyye mayyite','tayer khafeye','framan mish sha8el','dakhkhan'], ans:0},
  {q:'"muharrik" is?', opts:['engine / motor','brakes','gear','horn'], ans:0},
  {q:'How do you say "what\'s wrong with the car?"', opts:['shu 3ando l-siyyara?','badda kashf','2addesh l-ta2sir?','kahraba 3atlet'], ans:0},
  {q:'"zet" in car context means?', opts:['engine oil','fuel','battery fluid','coolant'], ans:0},
  {q:'How do you say "brakes not working"?', opts:['framan mish sha8el','dakhkhan','wa2af','3atal'], ans:0},
  {q:'"service" in Lebanese mechanic talk refers to?', opts:['service / maintenance','repair','inspection only','tire change'], ans:0},
  {q:'How do you say "it needs an oil change"?', opts:['badda taghyir zet','badda kashf','shu 3ando?','3a to3ne'], ans:0},
  {q:'"vitess" means?', opts:['gear / transmission','brakes','clutch','horn'], ans:0},
  {q:'How do you say "overheated (engine)"?', opts:['mharre2','dakhkhan','3atal','wa2af'], ans:0},
  {q:'"klaks" refers to?', opts:['horn','gear','brake pedal','dashboard'], ans:0},
  {q:'How do you say "how much for the repair?"', opts:['2addesh l-ta2sir?','shu 3ando?','2addesh byekhod wa2et?','badda kashf'], ans:0},
];

const MEC_TIPS = [
  {title:'The Lebanese Karaj: More Than a Garage', body:'The "karaj" (garage) in Lebanon is a social institution. Your mikaniki (mechanic) knows your car\'s history better than any database. Lebanese often stick with one mechanic for decades — he knows the car, knows the family, and knows when to tell you the truth about whether the repair is worth it. The karaj is a place of negotiation: prices are rarely fixed. "2addesh l-ta2sir?" (how much for the repair?) opens a conversation. Trust is earned slowly. Switching mechanics is a significant decision.'},
  {title:'Car Troubles: A National Pastime', body:'Lebanese car breakdowns have their own vocabulary because they happen frequently. Aging cars, bad roads, summer heat, and the economic crisis that made new cars unaffordable have created a nation of very experienced amateur mechanics. "Mharre2" (overheated) is common in summer traffic jams; "tayer khafeye" (flat tire) on potholed mountain roads; "batariyye mayyite" (dead battery) from power-cut-related voltage fluctuations at home. Every Lebanese knows someone with a jump cable. "3a to3ne" (on a tow truck) is the last resort — said with resignation.'},
  {title:'The Service Culture', body:'"Service" (سرفيس) in the mechanic sense means a scheduled maintenance visit — oil change, filter check, fluid top-up. Lebanese mechanics often combine French technical vocabulary with Arabic: "vitess" (gear, from French vitesse), "framan" (brake, from French frein), "klaks" (horn, from French claxon). This Arabized French is universal across Lebanon\'s workshops. When your mechanic says "badda taghyir zet" (it needs an oil change) or "badda kashf" (it needs a check-up), he\'s starting a longer conversation about what else he\'s found.'},
  {title:'The Electrical Problem', body:'"Kahraba 3atlet" (electrical fault) is a catch-all phrase for mysterious car problems. Lebanese cars often have electrical issues from water damage, heat, or DIY modifications (extra speakers, lights, security systems). An electrical problem is the most expensive diagnostic — it requires specialized equipment many shops lack. The phrase "mish 3arif shu" (don\'t know what it is) combined with "lazem kasshan" (needs to be opened up) signals you\'re about to spend money without certainty. The mechanic who can diagnose electrical faults correctly is prized and hard to find.'},
  {title:'Negotiating at the Karaj', body:'The exchange at a Lebanese garage follows a script. First, the mechanic examines the car: "khalliha hnik" (leave it here). Then the diagnosis call: "shu 3ando l-siyyara?" — he tells you what he found, starting with the serious things and working down. Then: "2addesh l-ta2sir?" (how much for the repair?). The price includes parts and labor, but both can be negotiated — especially if you supply your own parts. "2addesh byekhod wa2et?" (how long will it take?) always gets an optimistic answer. "Ma3 t2akhir" (sorry for the delay) comes with the keys when it runs over.'},
  {title:'Lebanon\'s Dollar Car Economy', body:'The 2019 financial crisis changed the Lebanese car repair economy completely. Parts must often be imported and paid for in dollars; labor is paid in Lebanese lira but quoted in dollar equivalents. Many Lebanese now drive cars that are technically past their service life because replacement is too expensive. The result: mechanics are busier than ever, and creative repair (finding used parts, remanufacturing components) has become common. A good karaj that can source affordable parts through its network is invaluable. The mechanic who knows "3and meen" (who has) a specific part is as important as the one who can install it.'},
];
