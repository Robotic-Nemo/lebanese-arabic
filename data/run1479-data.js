// R1479 — NEW FEATURE: Lebanese Falafel & Ful Culture (ffl) — 20 words, 8 drills, 4 tips
const FFL_WORDS = [
  {w:'falafel',t:'فلافل',tr:'falafel',e:'falafel (fried chickpea balls)',c:'ffl'},
  {w:'ful',t:'فول',tr:'ful',e:'fava bean stew / breakfast staple',c:'ffl'},
  {w:'7ummus',t:'حمص',tr:'7ummus',e:'chickpea (also hummus dip)',c:'ffl'},
  {w:'ta7ine',t:'طحينة',tr:'ta7ine',e:'tahini (sesame paste)',c:'ffl'},
  {w:'baqdounis',t:'بقدونس',tr:'baqdounis',e:'parsley',c:'ffl'},
  {w:'kamun',t:'كمون',tr:'kamun',e:'cumin',c:'ffl'},
  {w:'limon',t:'ليمون',tr:'limon',e:'lemon',c:'ffl'},
  {w:'2afran',t:'زعفران',tr:"2afran",e:'saffron (or turmeric)',c:'ffl'},
  {w:'khobez',t:'خبز',tr:'khobez',e:'bread (pita)',c:'ffl'},
  {w:'sandwich',t:'ساندويش',tr:'sandwich',e:'wrap / sandwich',c:'ffl'},
  {w:'msakhan',t:'مسخن',tr:'msakhan',e:'pickled turnips (pink ones)',c:'ffl'},
  {w:'lift',t:'لفت',tr:'lift',e:'turnip pickles',c:'ffl'},
  {w:'banadoura',t:'بندورة',tr:'banadoura',e:'tomato',c:'ffl'},
  {w:'khyar',t:'خيار',tr:'khyar',e:'cucumber',c:'ffl'},
  {w:'na3na3',t:'نعنع',tr:"na3na3",e:'mint',c:'ffl'},
  {w:'zeit',t:'زيت',tr:'zeit',e:'olive oil',c:'ffl'},
  {w:'7arra',t:'حارة',tr:"7arra",e:'spicy (also: hot)',c:'ffl'},
  {w:'sa7en',t:'صاحن',tr:"sa7en",e:'plate / dish',c:'ffl'},
  {w:'2al-wajbe',t:'الوجبة',tr:"2al-wajbe",e:'the meal',c:'ffl'},
  {w:'fran',t:'فران',tr:'fran',e:'bakery / communal oven',c:'ffl'},
];

const FFL_DRILLS = [
  {q:'I want a falafel sandwich.',a:'بدي ساندويش فلافل.',ar:'biddi sandwich falafel.',correct:0,
   opts:['بدي ساندويش فلافل.','بدي ساندويش شاورما.','بدي ساندويش فول.','بدي ساندويش كبة.']},
  {q:'Add tahini please.',a:'حط طحينة لو سمحت.',ar:"7oTT ta7ine law sama7t.",correct:0,
   opts:['حط طحينة لو سمحت.','حط حمص لو سمحت.','حط ليمون لو سمحت.','حط نعنع لو سمحت.']},
  {q:'Is it spicy?',a:'في حارة؟',ar:"fi 7arra?",correct:0,
   opts:['في حارة؟','في ليمون؟','في طحينة؟','في بقدونس؟']},
  {q:'Ful for breakfast is the best.',a:'الفول للصبح أحسن شي.',ar:"l-ful lal-sob7 a7san shi.",correct:0,
   opts:['الفول للصبح أحسن شي.','الفلافل للصبح أحسن شي.','الحمص للصبح أحسن شي.','الساندويش للصبح أحسن شي.']},
  {q:'Give me a plate of hummus.',a:'عطيني صاحن حمص.',ar:"3Tini sa7en 7ummus.",correct:0,
   opts:['عطيني صاحن حمص.','عطيني صاحن فول.','عطيني صاحن فلافل.','عطيني صاحن طحينة.']},
  {q:'No parsley in mine.',a:'بدون بقدونس عندي.',ar:"bidoun baqdounis 3indi.",correct:0,
   opts:['بدون بقدونس عندي.','بدون ليمون عندي.','بدون نعنع عندي.','بدون خيار عندي.']},
  {q:'The bread is from the oven.',a:'الخبز من الفران.',ar:"l-khobez min l-fran.",correct:0,
   opts:['الخبز من الفران.','الخبز من المحل.','الخبز من الدكان.','الخبز من الفلافل.']},
  {q:'Extra lemon, please.',a:'زيادة ليمون لو سمحت.',ar:"ziade limon law sama7t.",correct:0,
   opts:['زيادة ليمون لو سمحت.','زيادة زيت لو سمحت.','زيادة كمون لو سمحت.','زيادة طحينة لو سمحت.']},
];

const FFL_TIPS = [
  {title:'Falafel vs Ful',body:"Both are breakfast staples. Falafel = fried chickpea/fava balls in a pita sandwich. Ful = warm fava bean stew served in a bowl with olive oil, cumin, and lemon — or also in a sandwich. Arguments about which is better are ongoing."},
  {title:'The Falafel Order',body:"A typical order at a falafel stand: 'a3Tini sandwich falafel mna77i!' (give me a good falafel sandwich!). The vendor adds ta7ine, banadoura, khyar, na3na3, lift (pink pickled turnips), and sometimes 7arra sauce."},
  {title:'Ful Etiquette',body:"Ful is served in a deep bowl (sa7en). Drizzle olive oil (zeit), add lemon (limon), cumin (kamun), and fresh parsley (baqdounis). Eat with pita bread. Often eaten at 6–7am before work — the Lebanese breakfast of champions."},
  {title:'Ordering Tips',body:"Say 'bidoun' (without) to customize: 'bidoun 7arra' = no spice, 'bidoun baqdounis' = no parsley. 'ziade' means extra: 'ziade ta7ine' = extra tahini. Most falafel shops are open from early morning to midday only."},
];
