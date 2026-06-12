// R645 — NEW FEATURE: Lebanese Sweets & Desserts coach (sws)

const SWS_CATS = [
  {id:'pastries', label:'🥐 Pastries'},
  {id:'puddings', label:'🍮 Puddings'},
  {id:'fried',    label:'🍩 Fried Treats'},
  {id:'phrases',  label:'💬 Sweet Talk'}
];

const SWS_WORDS = [
  // pastries (8)
  {tr:'kna2fe',           en:'knafeh (cheese pastry)',      cat:'pastries'},
  {tr:'baklawa',          en:'baklava',                     cat:'pastries'},
  {tr:'ma3moul',          en:"ma'amoul (Eid cookies)",      cat:'pastries'},
  {tr:'ballouriyye',      en:'shredded wheat pastry',       cat:'pastries'},
  {tr:'ghreibe',          en:'shortbread cookies',          cat:'pastries'},
  {tr:'kaakeh',           en:'sesame ring cookies',         cat:'pastries'},
  {tr:'2aTaa2ef',         en:'stuffed pancakes (Ramadan)',  cat:'pastries'},
  {tr:'ka3k l-3iid',      en:'Eid ring biscuits',           cat:'pastries'},
  // puddings (7)
  {tr:'mhallabiyye',      en:'rose water milk pudding',     cat:'puddings'},
  {tr:'riz b-7aliib',     en:'rice pudding',                cat:'puddings'},
  {tr:'mghle',            en:'spiced rice pudding',         cat:'puddings'},
  {tr:'sfouf',            en:'turmeric semolina cake',      cat:'puddings'},
  {tr:'sneyniiye',        en:'sesame honey candy',          cat:'puddings'},
  {tr:'booza',            en:'ice cream',                   cat:'puddings'},
  {tr:'3aShuuraa',        en:'Ashura wheat sweet',          cat:'puddings'},
  // fried treats (7)
  {tr:'awwaame',          en:'fried honey dough balls',     cat:'fried'},
  {tr:'zalaabe',          en:'funnel cake fritters',        cat:'fried'},
  {tr:'luqmet 2aaDi',     en:"judge's morsels",             cat:'fried'},
  {tr:'mushabback',       en:'fried spiral pastry',         cat:'fried'},
  {tr:'3aSal naHl',       en:'bee honey',                   cat:'fried'},
  {tr:'maa2 l-ward',      en:'rose water',                  cat:'fried'},
  {tr:'2aSir l-lemon',    en:'lemon syrup',                 cat:'fried'},
  // sweet phrases (6)
  {tr:'7lew kteer',       en:'very sweet',                  cat:'phrases'},
  {tr:'bit2allal l-2alb', en:'melts the heart',             cat:'phrases'},
  {tr:'a7la min l-3asal', en:'sweeter than honey',          cat:'phrases'},
  {tr:'haida taHaan',     en:'this is amazing',             cat:'phrases'},
  {tr:'shaafi l-ghalle',  en:'satisfies the craving',       cat:'phrases'},
  {tr:'3mal ma3moul',     en:"made ma'amoul (for Eid)",     cat:'phrases'}
];

const SWS_DRILLS = [
  {q:'What is "kna2fe"?',             opts:['knafeh pastry','rice pudding','shortbread cookies','fried dough balls'],      ans:0},
  {q:'What is "baklawa"?',            opts:['ice cream','baklava','sesame candy','milk pudding'],                           ans:1},
  {q:'What is "ma3moul"?',            opts:['funnel fritters','Eid cookies','rose water pudding','stuffed pancakes'],       ans:1},
  {q:'What does "mhallabiyye" mean?', opts:['shortbread','turmeric cake','rose water milk pudding','Eid biscuits'],         ans:2},
  {q:'What is "awwaame"?',            opts:['fried honey dough balls','spiral pastry','wheat sweet','sesame candy'],        ans:0},
  {q:'What is "sfouf"?',              opts:['knafeh','ice cream','turmeric semolina cake','stuffed pancakes'],              ans:2},
  {q:'What does "7lew kteer" mean?',  opts:['too expensive','very sweet','fried treat','very hot'],                        ans:1},
  {q:'What is "booza"?',              opts:['rice pudding','Ashura sweet','ice cream','rose water'],                       ans:2},
  {q:'What is "mghle"?',              opts:['fried spiral pastry','spiced rice pudding','baklava','sesame honey candy'],   ans:1},
  {q:'What are "2aTaa2ef"?',          opts:['Eid ring biscuits','judge\'s morsels','stuffed Ramadan pancakes','milk pudding'], ans:2},
  {q:'What is "3aShuuraa"?',          opts:['rose water','Ashura wheat sweet','shortbread cookies','knafeh'],              ans:1},
  {q:'What does "a7la min l-3asal" mean?', opts:['sweeter than honey','cold like ice','fried in oil','very crunchy'],      ans:0},
  {q:'What is "mushabback"?',         opts:['ice cream','milk pudding','fried spiral pastry','sesame candy'],              ans:2},
  {q:'What is "sneyniiye"?',          opts:['rice pudding','sesame honey candy','rose water cake','turmeric cake'],        ans:1},
  {q:'What does "shaafi l-ghalle" mean?', opts:['too sweet','satisfies the craving','melts the heart','very crunchy'],    ans:1}
];

const SWS_TIPS = [
  {title:'Knafeh Capital',    body:'Tripoli (Trablus) is Lebanon\'s undisputed knafeh capital. Locals say no knafeh outside Tripoli compares — the slightly salty Akkawi cheese and crispy semolina soaked in orange blossom syrup is an art form.'},
  {title:'Eid Cookies',       body:'Ma3moul are the soul of Lebanese Eid. Families spend days before Eid al-Fitr and Eid al-Adha pressing dough into wooden molds (2awaalib), filling them with dates, walnuts, or pistachios. Gifting a tray = deep respect.'},
  {title:'Awwaame at Weddings', body:'Awwaame (fried dough balls dipped in honey) are a must at Lebanese weddings and celebrations. Street vendors fry them fresh and drown them in orange blossom syrup — the aroma alone draws a crowd.'},
  {title:'Mghle for New Babies', body:'When a baby is born, Lebanese families serve mghle — a warm pudding of ground rice, anise, cinnamon, and caraway — to visitors. Its name comes from "ghalyaan" (boiling). Visitors bring sweets in return.'},
  {title:'Ramadan Sweets',    body:'2aTaa2ef (stuffed pancakes) are strictly a Ramadan sweet, eaten only between iftar and su7oor. Vendors appear the day Ramadan starts and vanish on Eid. Fillings: walnuts+cinnamon, or sweet white cheese+rose water.'},
  {title:'Rose Water & Orange Blossom', body:'Two waters define Lebanese sweets: maa2 l-ward (rose water) and maa2 z-zahr (orange blossom water). Nearly every dessert uses at least one. Lebanese confectioners press fresh flowers each spring to make their own.'}
];
