// R741 — NEW FEATURE: Lebanese Garage & Auto Repair (grg)

const GRG_CATS = ['people','car','repair','phrases'];

const GRG_WORDS = [
  // people
  {tr:'mi3allim',        en:'master mechanic / boss',       ar:'معلّم',          cat:'people'},
  {tr:'mikaniki',        en:'mechanic',                     ar:'ميكانيكي',       cat:'people'},
  {tr:'karaktirist',     en:'electrician (car)',            ar:'كركتيريست',      cat:'people'},
  {tr:'dakkaan',         en:'car parts shop owner',         ar:'دكّان',          cat:'people'},
  {tr:'siyyaa2',         en:'driver (professional)',        ar:'سيّاع',          cat:'people'},
  {tr:'mrawwi7',         en:'car radiator repairman',       ar:'مروّح',          cat:'people'},
  // car
  {tr:'muharrik',        en:'engine / motor',               ar:'محرّك',          cat:'car'},
  {tr:'dawlab',          en:'tire / wheel',                 ar:'دولاب',          cat:'car'},
  {tr:'batriye',         en:'battery',                      ar:'بطرية',          cat:'car'},
  {tr:'banziin',         en:'petrol / gasoline',            ar:'بنزين',          cat:'car'},
  {tr:'zeit',            en:'oil (motor oil)',              ar:'زيت',            cat:'car'},
  {tr:'freen',           en:'brakes',                       ar:'فرين',           cat:'car'},
  {tr:'mor',             en:'steering wheel',               ar:'مور',            cat:'car'},
  {tr:'3adaad',          en:'meter / gauge / odometer',     ar:'عداد',           cat:'car'},
  {tr:'klaxson',         en:'car horn',                     ar:'كلاكسون',        cat:'car'},
  // repair
  {tr:'3atal',           en:'breakdown / malfunction',      ar:'عطل',            cat:'repair'},
  {tr:'2ita3',           en:'spare parts',                  ar:'قطع',            cat:'repair'},
  {tr:'tabdil zeit',     en:'oil change',                   ar:'تبديل زيت',      cat:'repair'},
  {tr:'shatb',           en:'towing (the car)',             ar:'شطب',            cat:'repair'},
  {tr:'2ita3 bedde',     en:'needs a part',                 ar:'قطعة بدها',      cat:'repair'},
  {tr:'naffakh',         en:'inflate (tire)',               ar:'نفّخ',           cat:'repair'},
  {tr:'kashf',           en:'inspection / check-up',        ar:'كشف',            cat:'repair'},
  // phrases
  {tr:'shu 3amlo l-2arabiyye?',   en:'what\'s wrong with the car?',     ar:'شو عملو الأرابية؟',    cat:'phrases'},
  {tr:'2addesh b7awwil?',          en:'how much to fix it?',             ar:'قديش بحوّل؟',          cat:'phrases'},
  {tr:'3atel l-muharrik',          en:'the engine broke down',           ar:'عاطل المحرّك',         cat:'phrases'},
  {tr:'khud 3alayha yawm',         en:'keep it for a day',               ar:'خود عليها يوم',        cat:'phrases'},
  {tr:'ma badda ktir',             en:'doesn\'t need much (quick fix)',  ar:'ما بدها كتير',         cat:'phrases'},
  {tr:'l-mi3allim bya3rif',        en:'the master knows (trust him)',    ar:'المعلّم بيعرف',        cat:'phrases'},
];

const GRG_DRILLS = [
  {q:'What does "mi3allim" mean?', opts:['master mechanic / boss','driver','shop owner','car electrician'], a:0},
  {q:'"muharrik" is?', opts:['engine / motor','tire','brakes','battery'], a:0},
  {q:'How do you say "battery" in Lebanese?', opts:['batriye','banziin','dawlab','freen'], a:0},
  {q:'"3atal" means?', opts:['breakdown / malfunction','spare parts','oil change','towing'], a:0},
  {q:'What is "2ita3"?', opts:['spare parts','inspection','oil change','tire inflation'], a:0},
  {q:'"dawlab" refers to?', opts:['tire / wheel','steering wheel','battery','horn'], a:0},
  {q:'How do you say "brakes"?', opts:['freen','mor','klaxson','3adaad'], a:0},
  {q:'"tabdil zeit" means?', opts:['oil change','fuel fill-up','tire change','battery replacement'], a:0},
  {q:'What is "shatb"?', opts:['towing the car','car inspection','engine repair','oil change'], a:0},
  {q:'"banziin" is?', opts:['petrol / gasoline','motor oil','battery fluid','brake fluid'], a:0},
  {q:'How do you say "steering wheel"?', opts:['mor','dawlab','3adaad','klaxson'], a:0},
  {q:'"kashf" means?', opts:['inspection / check-up','breakdown','spare part','towing'], a:0},
  {q:'What does "ma badda ktir" mean?', opts:["doesn't need much","needs major repair","very expensive","broken completely"], a:0},
  {q:'"mikaniki" is?', opts:['mechanic','master','driver','shop owner'], a:0},
  {q:'How do you say "car horn"?', opts:['klaxson','freen','mor','3adaad'], a:0},
];

const GRG_TIPS = [
  {title:'The Mi3allim: More Than a Mechanic', body:'"Mi3allim" (master) is a term of deep respect for the head mechanic. You don\'t call him by name — you call him "mi3allim." He\'s the one who diagnoses problems, gives the verdict, and decides what your car really needs. His word is final. "L-mi3allim bya3rif" (the master knows) — this is the Lebanese philosophy of trusting skilled craftsmen.'},
  {title:'The Lebanese Garage Culture', body:'Lebanese garages are open-air workshops, often on street corners or in garages-turned-workshops. They\'re social spaces — you bring your car, you sit on a plastic chair, someone brings coffee, and you discuss the car AND life for an hour. The repair is part of it, but the conversation is equally important.'},
  {title:'Dora Spare Parts Market', body:'"Dora" (a Beirut neighborhood) is the legendary spare parts district. Miles of shops selling 2ita3 (spare parts) for every car made since 1970. Lebanese mechanics can rebuild almost any car from parts. The spare parts culture is a symptom of Lebanon\'s broader "make it work" mentality — fix it, don\'t replace it.'},
  {title:'The "Karaktirist" Specialty', body:'"Karaktirist" (from French "caractériste" → character/specialist) is the Lebanese term for the car electrician — specifically the one who deals with electronic systems, computers, fuses. This role is distinct from the regular mechanic. As cars got computerized, the karaktirist became essential. "Rouha 3al karaktirist" = take it to the electrician.'},
  {title:'Cash and Trust', body:'Lebanese garage culture runs on personal relationships and cash. No receipts, no formal invoicing. You pay what the mi3allim says. This requires enormous trust — and Lebanese people develop loyal relationships with their mechanics over years. "Jiblik sayyaartik, ana bta3akak" (bring your car, I\'ll take care of you) is a common promise.'},
  {title:'The Banziin Crisis', body:'"Banziin" (gasoline) has been a perpetual crisis in Lebanon post-2019. Gas station lines stretching for kilometers, fuel rationing, black market prices. "Fiyye 3a 7al" (it\'s empty) became a daily fear. The fuel crisis transformed the Lebanese relationship with cars — suddenly everyone wanted smaller cars, electric alternatives, or simply stopped driving. "2addesh l-banziin?" (how much is gas?) became a political statement.'},
];
