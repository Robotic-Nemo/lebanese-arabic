// R753 — NEW FEATURE: Lebanese Rooftop & Summer Culture (sat)

const SAT_CATS = ['places','activities','food','phrases'];

const SAT_WORDS = [
  // places
  {tr:'sat7',             en:'rooftop terrace',              ar:'سطح',             cat:'places'},
  {tr:'balkon',           en:'balcony',                      ar:'بلكون',           cat:'places'},
  {tr:'7diqa',            en:'garden / yard',                ar:'حديقة',           cat:'places'},
  {tr:'sha22e',           en:'apartment / flat',             ar:'شقة',             cat:'places'},
  {tr:'mazra3a',          en:'farm / countryside house',     ar:'مزرعة',           cat:'places'},
  {tr:'khayme',           en:'tent / chalet',                ar:'خيمة',            cat:'places'},
  {tr:'sha7et l-ba7r',    en:'beachside area',               ar:'شاحط البحر',      cat:'places'},
  {tr:'bar barre',        en:'outdoor bar / garden bar',     ar:'بار برّي',        cat:'places'},
  // activities
  {tr:'t2alla2',          en:'hang out / chill',             ar:'تقلّع',           cat:'activities'},
  {tr:'msahar',           en:'stay up late (socializing)',   ar:'سهر',             cat:'activities'},
  {tr:'3azzame',          en:'host / throw a gathering',     ar:'عزيمة',           cat:'activities'},
  {tr:'sahra',            en:'evening gathering / night out',ar:'سهرة',            cat:'activities'},
  {tr:'shawye',           en:'BBQ / grill session',          ar:'شوايه',           cat:'activities'},
  {tr:'da7lab',           en:'sunbath / lounge in sun',      ar:'دحلب',            cat:'activities'},
  {tr:'tfarraj',          en:'watch / observe the scene',    ar:'تفرّج',           cat:'activities'},
  {tr:'2a3ad 3al sat7',   en:'sit on the rooftop',           ar:'قعد على السطح',   cat:'activities'},
  // food
  {tr:'argileh',          en:'hookah / nargileh',            ar:'أرجيلة',          cat:'food'},
  {tr:'fa7m',             en:'charcoal (for nargileh)',       ar:'فحم',             cat:'food'},
  {tr:'ma3sal',           en:'hookah tobacco / molasses',    ar:'معسل',            cat:'food'},
  {tr:'3araq',            en:'arak (anise liquor)',           ar:'عرق',             cat:'food'},
  {tr:'mezze',            en:'mezze (small dishes spread)',   ar:'مزة',             cat:'food'},
  {tr:'lahme 3al jazziyye', en:'meat on the grill',          ar:'لحمة على الجزوي', cat:'food'},
  {tr:'beere',            en:'beer',                         ar:'بيرة',            cat:'food'},
  {tr:'ahwe 3arabiyye',   en:'Lebanese/Arabic coffee',       ar:'قهوة عربية',      cat:'food'},
  // phrases
  {tr:'yalla 3a l-sat7',  en:'let\'s go up to the roof',     ar:'يلا عالسطح',      cat:'phrases'},
  {tr:'3azamna hal-lele',  en:'we\'re having people over tonight', ar:'عزمنا هالليلة', cat:'phrases'},
  {tr:'ba3den t2alla2na',  en:'then we hung out',             ar:'بعدين تقلّعنا',   cat:'phrases'},
  {tr:'sahra 3al balkon',  en:'evening on the balcony',       ar:'سهرة على البلكون', cat:'phrases'},
];

const SAT_DRILLS = [
  {q:'What does "sat7" mean?', opts:['rooftop terrace','basement','living room','garden'], ans:0},
  {q:'"sahra" means?', opts:['evening gathering','morning coffee','afternoon nap','quick visit'], ans:0},
  {q:'How do you say "BBQ / grill session"?', opts:['shawye','sahra','3azzame','da7lab'], ans:0},
  {q:'"argileh" refers to?', opts:['hookah / nargileh','charcoal','tobacco','pipe'], ans:0},
  {q:'How do you say "hang out / chill"?', opts:['t2alla2','msahar','tfarraj','da7lab'], ans:0},
  {q:'"mezze" means?', opts:['small dishes spread','main course','dessert spread','bread basket'], ans:0},
  {q:'How do you say "balcony"?', opts:['balkon','sat7','7diqa','khayme'], ans:0},
  {q:'"3araq" is?', opts:['arak (anise liquor)','wine','beer','fruit juice'], ans:0},
  {q:'How do you say "stay up late socializing"?', opts:['msahar','sahra','t2alla2','3azzame'], ans:0},
  {q:'"3azzame" means?', opts:['host / throw a gathering','go out','cook together','drink together'], ans:0},
  {q:'How do you say "charcoal"?', opts:['fa7m','ma3sal','argileh','3araq'], ans:0},
  {q:'"da7lab" means?', opts:['sunbathe / lounge in sun','swim','cook outside','dance outside'], ans:0},
  {q:'How do you say "garden / yard"?', opts:['7diqa','mazra3a','sha22e','khayme'], ans:0},
  {q:'"tfarraj" means?', opts:['watch / observe the scene','look for someone','tour around','relax'], ans:0},
  {q:'How do you say "let\'s go up to the roof"?', opts:['yalla 3a l-sat7','yalla 3a l-balkon','yalla nmsahar','yalla nshawwe'], ans:0},
];

const SAT_TIPS = [
  {title:'The Lebanese Sat7: A Social Universe', body:'The Lebanese sat7 (rooftop) is not just space — it\'s a social institution. In summer, families migrate upward after sundown: plastic chairs appear, argileh is prepared, coffee brewed, and the evening unfolds. Neighbors call across rooftops, music drifts from multiple directions, the city spreads below. "Yalla 3a l-sat7" (let\'s go up to the roof) is an invitation to the truest form of Lebanese socializing. No dress code, no bill — just people and summer air.'},
  {title:'The Argileh Ritual', body:'The argileh (hookah/nargileh) is central to Lebanese outdoor culture. The ritual: place the bowl, pack it with ma3sal (flavored tobacco), cover with foil, add fa7m (charcoal), adjust the mouthpiece, and wait. Apple, grape, mint, double apple — flavor debates are serious. At a Lebanese café or rooftop, the argileh waiter (argilehchi) is as important as the food waiter. A shared argileh on a rooftop as the city lights come on is peak Lebanese summer.'},
  {title:'The Lebanese BBQ Culture', body:'"Shawye" (grilling) is a sacred summer activity. The jazziyye (portable charcoal grill) comes out for weekends and gatherings. Lahme (meat) — usually kafta, shish tawuk, or 3asafir (small birds) — is king. The men typically man the grill while everyone else argues about how it should be done. At a mazra3a (countryside house) or sat7, a proper shawye can stretch from afternoon to midnight. The smell of charcoal and meat is the scent of Lebanese summer.'},
  {title:'Sahra Culture: The Lebanese Night Out', body:'A sahra (evening gathering) is distinguished from a casual visit by its intent: you stay late, drink, eat, talk. "3azamna hal-lele" (we\'re having people over tonight) triggers a chain: people arrive between 9-10pm, mezze appears, drinks flow, conversation ignites. The Lebanese sahra is famous for its chaotic, joyful energy — multiple conversations at once, laughter loud enough for the neighbors to hear. It ends not at a fixed hour but when the energy says so — often 2-3am.'},
  {title:'Balkon vs Sat7: Lebanese Geography', body:'The balkon (balcony) and sat7 (rooftop) serve different social roles. The balkon is semi-private — for a coffee alone, watching the street below, or a quiet conversation. The sat7 is communal — shared by the building or neighborhood. In older Lebanese buildings, the sat7 is genuinely shared: neighbors each claim their corner, children play between them, and the evening gathering is unplanned but inevitable. Modern buildings have private rooftop terraces, but the spirit of the communal sat7 persists.'},
  {title:'Summer Migration: Beirut to the Mountain', body:'Lebanese summer follows an altitude gradient. The heat drives Beirutis to the mountains (jbal) or the mazra3a (country house). Families own or rent summer places in Broummana, Zahle, the Bekaa, Jezzine. The pattern: leave Beirut Thursday evening, return Sunday night. At the mazra3a: morning coffee on the balkon with mountain air, afternoon shawye, evening sahra under the stars. "Ba3den t2alla2na" (then we hung out) is the entire itinerary. Movement, food, company — Lebanese summer in three words.'},
];
