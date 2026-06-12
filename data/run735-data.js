// R735 — NEW FEATURE: Lebanese Construction & Home Renovation (cns)

const CNS_CATS = ['structure','trades','materials','phrases'];

const CNS_WORDS = [
  // structure
  {tr:'bnaaye',        en:'building / apartment block',  ar:'بناية',         cat:'structure'},
  {tr:'sha22a',        en:'apartment / flat',            ar:'شقة',           cat:'structure'},
  {tr:'Taabi2',        en:'floor / story',               ar:'طابق',          cat:'structure'},
  {tr:'jdar',          en:'wall',                        ar:'جدار',          cat:'structure'},
  {tr:'sa2f',          en:'ceiling / roof',              ar:'سقف',           cat:'structure'},
  {tr:'balkoone',      en:'balcony',                     ar:'بلكونة',        cat:'structure'},
  {tr:'daraje',        en:'stairs / step',               ar:'درجة',          cat:'structure'},
  {tr:'msaa7a',        en:'area / square meters',        ar:'مساحة',         cat:'structure'},
  // trades
  {tr:'mu2awwil',      en:'contractor',                  ar:'مقاوّل',        cat:'trades'},
  {tr:'njajar',        en:'carpenter',                   ar:'نجار',          cat:'trades'},
  {tr:'7addaad',       en:'metalworker / ironsmith',     ar:'حداد',          cat:'trades'},
  {tr:'sbaakeh',       en:'plumber',                     ar:'سباك',          cat:'trades'},
  {tr:'sabbaagh',      en:'painter',                     ar:'صباغ',          cat:'trades'},
  {tr:'kahrabji',      en:'electrician',                 ar:'كهربجي',        cat:'trades'},
  {tr:'mhandis',       en:'engineer / architect',        ar:'مهندس',         cat:'trades'},
  {tr:'bannaa2',       en:'mason / builder',             ar:'بنّاء',         cat:'trades'},
  // materials
  {tr:'isment',        en:'cement',                      ar:'إسمنت',         cat:'materials'},
  {tr:'7jara',         en:'stone / rocks',               ar:'حجارة',         cat:'materials'},
  {tr:'blaaT',         en:'tiles / floor tiles',         ar:'بلاط',          cat:'materials'},
  {tr:'7diid',         en:'iron / steel',                ar:'حديد',          cat:'materials'},
  {tr:'khashabbe',     en:'wood / timber',               ar:'خشبة',          cat:'materials'},
  {tr:'dehn',          en:'paint',                       ar:'دهن',           cat:'materials'},
  // phrases
  {tr:'3am yi3mir',             en:'building / constructing',         ar:'عم يعمّر',          cat:'phrases'},
  {tr:'yi7tij tarmim',          en:'needs renovation',                ar:'يحتاج ترميم',       cat:'phrases'},
  {tr:'sha22a 3al 2ojra',       en:'apartment for rent',             ar:'شقة عالأجرة',       cat:'phrases'},
  {tr:'mu2awwil mbiyan',        en:'trustworthy contractor (rare!)',  ar:'مقاوّل مبيّن',      cat:'phrases'},
  {tr:'meshi l-mashghale',      en:'the work is progressing',        ar:'ماشي المشغلة',      cat:'phrases'},
  {tr:'wein l-rukhsa?',         en:'where is the building permit?',  ar:'وين الرخصة؟',       cat:'phrases'},
];

const CNS_DRILLS = [
  {q:'What does "mu2awwil" mean?', opts:['contractor','engineer','plumber','mason'], a:0},
  {q:'"sha22a" means?', opts:['apartment / flat','building','floor','balcony'], a:0},
  {q:'How do you say "electrician" in Lebanese?', opts:['kahrabji','njajar','sbaakeh','7addaad'], a:0},
  {q:'"blaa6" refers to?', opts:['tiles / floor tiles','cement','iron','wood'], a:0},
  {q:'What is "bannaa2"?', opts:['mason / builder','painter','carpenter','plumber'], a:0},
  {q:'"sa2f" means?', opts:['ceiling / roof','wall','floor','balcony'], a:0},
  {q:'How do you say "carpenter"?', opts:['njajar','7addaad','sabbaagh','sbaakeh'], a:0},
  {q:'"isment" means?', opts:['cement','stone','iron','paint'], a:0},
  {q:'What does "tarmim" mean?', opts:['renovation','construction','painting','tiling'], a:0},
  {q:'"balkoone" is?', opts:['balcony','staircase','roof','window'], a:0},
  {q:'How do you say "painter"?', opts:['sabbaagh','kahrabji','bannaa2','mu2awwil'], a:0},
  {q:'"msaa7a" means?', opts:['area / square meters','floor number','room count','price per meter'], a:0},
  {q:'What is "khashabbe"?', opts:['wood / timber','iron','stone','cement'], a:0},
  {q:'"3am yi3mir" means?', opts:['building / constructing','renovating','painting','tiling'], a:0},
  {q:'How do you say "plumber" in Lebanese?', opts:['sbaakeh','njajar','7addaad','kahrabji'], a:0},
];

const CNS_TIPS = [
  {title:'Lebanon\'s Construction Obsession', body:'Lebanon has one of the highest rates of construction activity per capita in the region. "3am yi3mir" (he\'s building) is a constant conversation topic. Building a house is the Lebanese dream — owning property is both financial security and social status. Even during economic crises, Lebanese keep building.'},
  {title:'The Contractor (Mu2awwil) Problem', body:'"Mu2awwil mbiyan" (a trustworthy contractor) is a Lebanese joke — because finding one is nearly impossible. Stories of contractors taking deposits and disappearing, doing shoddy work, or using substandard materials are legendary. "Wein l-rukhsa?" (where\'s the building permit?) — often the answer is: there isn\'t one.'},
  {title:'Stone Architecture (7jara)', body:'Lebanese traditional architecture uses local limestone ("7jara"). The iconic triple-arched house (bayt 3arabi) with stone walls and red-tiled roofs is the national architectural ideal. There\'s a deep emotional attachment to stone buildings — "bayt l-7ajara" (the stone house) represents roots, permanence, and Lebanon itself.'},
  {title:'Trade Vocabulary', body:'Lebanese trades have distinctive names: "kahrabji" (electrician — from kahraba, electricity), "sbaakeh" (plumber — from "sbaaka"), "sabbaagh" (painter — from "Sibaaagha/Sabagha"), "njajar" (carpenter). These are often Syrian or Lebanese workers. Calling them by their trade title is polite and expected.'},
  {title:'"Meshi l-mashghale" — Construction Time', body:'Lebanese construction runs on its own time. "Meshi l-mashghale" (the work is going) is a non-committal answer when asked for a timeline. Projects routinely take 3x longer than estimated. Delays are blamed on permits, materials, workers, or just fate. Patience and follow-up are essential.'},
  {title:'Apartment Culture', body:'Most Lebanese live in apartments ("sha22a"), not houses. The floor ("6aabi2") matters — ground floors are cheap, top floors premium. "Sha22a 3al 2ojra" (apartment for rent) is a constant discussion as rental prices skyrocketed post-2019. "Msaa7a" (square meters) and view are the two key selling points.'},
];
