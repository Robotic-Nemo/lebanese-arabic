// R1245 — NEW FEATURE: Lebanese Bazaar & Old Souk Vocabulary (bzr)

const BZR_WORDS = [
  // souk layout
  {ar:'بازار',        tr:'baazaar',         en:'bazaar/market',        cat:'layout'},
  {ar:'زقاق',         tr:'zu2aa2',           en:'alley/lane',           cat:'layout'},
  {ar:'دكان',         tr:'dukkaan',          en:'shop/stall',           cat:'layout'},
  {ar:'باحة',         tr:'baa7a',            en:'courtyard/square',     cat:'layout'},
  {ar:'سقيفة',        tr:'su2ayfeh',         en:'covered arcade',       cat:'layout'},
  // commerce
  {ar:'تاجر',         tr:'taajir',           en:'merchant/trader',      cat:'commerce'},
  {ar:'بضاعة',        tr:'bdaa3a',           en:'goods/merchandise',    cat:'commerce'},
  {ar:'فصّال',        tr:'fassaal',          en:'haggler',              cat:'commerce'},
  {ar:'كساد',         tr:'kasaad',           en:'slow business',        cat:'commerce'},
  {ar:'رواج',         tr:'rwaaj',            en:'brisk trade',          cat:'commerce'},
  // old Beirut
  {ar:'خان',          tr:'khaan',            en:'caravanserai/inn',     cat:'beirut'},
  {ar:'سراي',         tr:'saraay',           en:'government palace',    cat:'beirut'},
  {ar:'برجين',        tr:'burjayn',          en:'twin towers (Burj)',   cat:'beirut'},
  {ar:'حمّام',        tr:'7ammaam',          en:'hammam/bathhouse',     cat:'beirut'},
  {ar:'قيصرية',       tr:'2aysariyye',       en:'covered market',       cat:'beirut'},
  // expressions
  {ar:'شو بدك',       tr:'shu biddak',       en:'what do you want?',    cat:'phrases'},
  {ar:'ما في غيرو',   tr:'maa fii ghayr',    en:'nothing else like it', cat:'phrases'},
  {ar:'بالبركة',      tr:'bil-barake',       en:'with blessings',       cat:'phrases'},
  {ar:'خد وعطي',      tr:'khud w 3aTi',      en:'give and take',        cat:'phrases'},
  {ar:'عروض',         tr:'3uruuD',           en:'deals/offers',         cat:'phrases'},
];

const BZR_DRILLS = [
  {q:'What does بازار mean?',                opts:['alley','bazaar/market','stall','courtyard'],             ans:1},
  {q:'Lebanese word for "haggler"?',         opts:['تاجر','كساد','فصّال','رواج'],                           ans:2},
  {q:'What does خان mean?',                  opts:['hammam','covered market','caravanserai/inn','palace'],    ans:2},
  {q:'Lebanese word for "goods/merchandise"?', opts:['بضاعة','زقاق','دكان','عروض'],                        ans:0},
  {q:'What does 2aysariyye mean?',           opts:['courtyard','covered market','alley','arcade'],            ans:1},
  {q:'Lebanese phrase "with blessings"?',    opts:['شو بدك','بالبركة','خد وعطي','ما في غيرو'],              ans:1},
  {q:'What does رواج mean?',                 opts:['slow business','goods','brisk trade','deals'],            ans:2},
  {q:'Lebanese word for "covered arcade"?',  opts:['سقيفة','باحة','سراي','برجين'],                          ans:0},
];

const BZR_TIPS = [
  {title:'The soul of Beirut\'s old souk',          body:'Before the civil war, Beirut\'s central souk (el-baazaar) was a labyrinth of specialized lanes — khayyaaTiin (tailors), Sayyaagha (goldsmiths), 7addaadiin (blacksmiths). Each trade had its own zu2aa2 (alley). The great covered arcades (2aysariyyaat) linked district to district, protecting merchants and buyers from sun and rain. The largest was the 2aysariyyit Eid, a cavernous gallery that was the commercial heart of Levantine trade.'},
  {title:'The art of fsaala — haggling',             body:'In the bazaar, fixing a price without fsaala (haggling) is almost rude — it signals you don\'t take the relationship seriously. The fassaal (expert haggler) opens with an absurdly low offer; the merchant counters with something absurd high; then slow convergence begins over coffee. Key phrases: "ma btestahal" (it\'s not worth that), "shu aakhir si3r?" (what\'s your final price?), and the closing "bil-barake" (with blessings) when a deal is struck.'},
  {title:'Khans of the Levant',                     body:'The khaan (caravanserai) was the ancient motor inn and warehouse: a central courtyard for animals and goods, rooms above for merchants. Beirut\'s Khaan Antun Bey and the Khaan el-Franj (Frankish Inn) once served as hubs for European trade in silk, cotton, and spice. The Franks (European merchants) had their own fundu2 (warehouse), lending the word "fondaco" to Italian commercial history. Many are now heritage sites — still standing in Sidon, Tripoli, and old Damascus.'},
  {title:'What the bazaar sounds like',              body:'A functioning Lebanese souk is pure sensory overload: vendors calling "ta3aal, ta3aal" (come, come), the clang of the blacksmith, the fragrance of spices and rose water, the rustle of silk. Street hawkers cry their wares with rhyming slogans: "yaa 3inab yaa 7ilu" (oh grapes how sweet), or "ySuu7 il-yaasmiine" (jasmine, fresh jasmine). These calls — munaadaah — are a vanishing form of urban folk poetry, now only heard at a handful of traditional markets.'},
];
