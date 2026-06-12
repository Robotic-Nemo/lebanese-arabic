// R759 — NEW FEATURE: Lebanese Taxi & Service Taxi Culture (txi)

const TXI_CATS = ['vehicles','routes','phrases','money'];

const TXI_WORDS = [
  // vehicles
  {tr:'taxi',             en:'taxi (metered)',               ar:'تاكسي',           cat:'vehicles'},
  {tr:'servees',          en:'service taxi (shared)',        ar:'سرفيس',           cat:'vehicles'},
  {tr:'van',              en:'minivan / service van',        ar:'فان',             cat:'vehicles'},
  {tr:'bos',              en:'bus',                          ar:'باص',             cat:'vehicles'},
  {tr:'motor',            en:'motorbike / scooter delivery', ar:'موتور',           cat:'vehicles'},
  {tr:'Uber',             en:'Uber / ride app',              ar:'أوبر',            cat:'vehicles'},
  {tr:'sayara 2ajre',     en:'taxi / for-hire car',                   ar:'سيارة أجرة',      cat:'vehicles'},
  {tr:'taxaji',           en:'taxi driver',                  ar:'تكساجي',          cat:'vehicles'},
  // routes
  {tr:'darb',             en:'route / road / way',           ar:'درب',             cat:'routes'},
  {tr:'laffe',            en:'detour / roundabout route',    ar:'لفة',             cat:'routes'},
  {tr:'waddini la',       en:'take me to',                   ar:'ودّيني لـ',       cat:'routes'},
  {tr:'nazzilni hon',     en:'drop me here',                 ar:'نزلني هون',       cat:'routes'},
  {tr:'2a3ed 3al darb',   en:'on the way (en route)',        ar:'قاعد على الدرب',  cat:'routes'},
  {tr:'zalame',           en:'man / buddy (address)',        ar:'زلمي',            cat:'routes'},
  {tr:'shaare3',           en:'main road / highway',          ar:'شارع',            cat:'routes'},
  {tr:'dawwar',           en:'traffic circle / roundabout',  ar:'دوار',            cat:'routes'},
  // phrases
  {tr:'3al-meter?',       en:'on the meter?',                ar:'على الميتر؟',     cat:'phrases'},
  {tr:'2addesh la Beirut?',en:'how much to Beirut?',         ar:'قديش لبيروت؟',    cat:'phrases'},
  {tr:'ma3ak fraTa?',     en:'do you have change?',          ar:'معك فراطة؟',      cat:'phrases'},
  {tr:'fi sat?',          en:'is there a seat? (servees)',   ar:'في سيت؟',         cat:'phrases'},
  {tr:'2awwa3 3a l-3adad',en:'go by the meter',              ar:'قاوع على العداد', cat:'phrases'},
  {tr:'khallini inzal hon',   en:'let me off here',              ar:'خلّيني نزل هون',  cat:'phrases'},
  {tr:'wein raye7?',     en:'which way are you going?',     ar:'وين رايح؟',       cat:'phrases'},
  {tr:'s2el taxaji',      en:'ask the driver',               ar:'سأل التكساجي',    cat:'phrases'},
  // money
  {tr:'2ojra',            en:'fare / fee',                   ar:'أجرة',            cat:'money'},
  {tr:'3adad',            en:'meter / counter',              ar:'عداد',            cat:'money'},
  {tr:'fraTa',            en:'change (coins)',               ar:'فراطة',           cat:'money'},
  {tr:'ghali ktir',       en:'too expensive',                ar:'غالي كتير',       cat:'money'},
];

const TXI_DRILLS = [
  {q:'What is "servees"?', opts:['service taxi (shared)','metered taxi','rental car','minivan'], ans:0},
  {q:'"darb" means?', opts:['route / road / way','traffic circle','detour','main highway'], ans:0},
  {q:'How do you say "drop me here"?', opts:['nazzilni hon','waddini la','2a3ed 3al darb','shaare3'], ans:0},
  {q:'"taxaji" refers to?', opts:['taxi driver','taxi stand','taxi app','taxi fare'], ans:0},
  {q:'How do you say "on the meter?"', opts:['3al-meter?','fi sat?','ma3ek change?','2addesh?'], ans:0},
  {q:'"laffe" means?', opts:['detour / roundabout route','main road','traffic circle','shortcut'], ans:0},
  {q:'How do you say "is there a seat?" (for servees)?', opts:['fi sat?','3al-meter?','waddini la','ma3ek change?'], ans:0},
  {q:'"2ojra" means?', opts:['fare / fee','meter','change','tip'], ans:0},
  {q:'How do you say "take me to"?', opts:['waddini la','nazzilni hon','fi sat?','zalame'], ans:0},
  {q:'"fraTa" refers to?', opts:['change (coins)','fare','meter','tip'], ans:0},
  {q:'How do you say "too expensive"?', opts:['ghali ktir','ma3ak fraTa?','2ojra','fraTa'], ans:0},
  {q:'"3adad" in taxi context means?', opts:['meter / counter','fare','route','driver'], ans:0},
  {q:'How do you say "which way are you going?"', opts:['wein raye7?','waddini la','nazzilni hon','fi sat?'], ans:0},
  {q:'"dawwar" means?', opts:['traffic circle / roundabout','main road','detour','junction'], ans:0},
  {q:'How do you say "do you have change?"', opts:['ma3ek change?','ghali ktir','2ojra','3al-meter?'], ans:0},
];

const TXI_TIPS = [
  {title:'The Lebanese Sercees: Shared Taxi System', body:'The servees (service taxi) is Lebanon\'s informal mass transit: shared sedans running fixed routes, picking up and dropping passengers anywhere along the way. Before Uber, every Lebanese commuter knew the servees dance: stand at the roadside, wave, the driver honks or opens the window — "fi sat?" (is there a seat?), or "wein raye7?" (where you headed?). Pay a fixed rate per person. No apps, no booking. It\'s fast, cheap, and woven into daily life. Many Lebanese refuse to take regular taxis when a servees is available.'},
  {title:'The Meter Question: 3al-Meter or Fixed?', body:'"3al-meter?" (on the meter?) is the essential question before getting in a Lebanese taxi. Many drivers prefer to negotiate a fixed price before departure — often higher than what the meter would show. Savvy passengers insist on the meter: "2awwa3 3a l-3adad" (go by the meter). In Beirut especially, drivers may claim the meter is broken, quote inflated prices for foreigners, or take a laffe (roundabout route). Knowing the phrases — and a rough idea of the correct fare — is essential survival knowledge.'},
  {title:'Haggling the Fare', body:'Lebanese taxi culture involves negotiation. When a driver quotes "ghali ktir" (too expensive)-worthy prices, the standard move is to counter, cite what you paid last time, and walk away slowly. Drivers often call you back. The phrase "2addesh la [destination]?" (how much to...?) opens every negotiation. Locals almost never pay tourist prices. The economic crisis made fares wildly inconsistent — quoted in Lebanese lira, dollars, or "fresh dollars" (coins) depending on the driver. Knowing "fraTa" (change/coins) matters when exact amounts come up.'},
  {title:'Taxi Driver Culture: Philosophy on Wheels', body:'The Lebanese taxaji (taxi driver) is a social commentator. Expect opinions on politics, religion, Nasrallah, Hariri, the dollar rate, and whoever is ruining the country — often all within a five-minute ride. Some are funny, some angry, some exhausted. The radio is tuned to news or Lebanese pop. The car may smell of cigarettes. The driver will accept your phone calls without complaint. If you share silence, he respects it. If you engage, the conversation is vivid. "Zalame" (buddy, man) opens any interaction with warmth.'},
  {title:'App Taxis vs Street Taxis', body:'Uber and local apps (InDriver, Bolt) changed Lebanese taxi culture significantly — then the economic crisis made dollar fares on apps unaffordable for many. The battle between apps and traditional taxis is ongoing. Traditional taxajis resent app drivers; app drivers argue they\'re safer and price-transparent. For visitors, apps offer price certainty and GPS tracking. For locals, the servees remains unbeatable on value. Practical rule: short hop in familiar area → servees; late night or unfamiliar destination → app; airport → negotiate hard or app.'},
  {title:'Reading the Road: Darb & Laffe', body:'"Darb" (درب) is the route, the way — also carries the meaning of fate ("hal-darb" — this road/path). A taxaji who takes a laffe (detour, roundabout) may be avoiding traffic, construction, or a checkpoint — or may be adding distance to inflate the fare. Locals navigate by landmarks, not street names: "3and l-dawwar" (at the roundabout), "2abil l-shaare3" (before the highway), "ba3d l-jami3" (after the mosque). Street numbers are essentially useless in Lebanon. Knowing the system means knowing your landmarks.'},
];
