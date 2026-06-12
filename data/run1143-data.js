// R1143 — NEW FEATURE: Lebanese Communal Oven & Furn Culture (frn)
const FRN_WORDS = [
  {tr:'furn',ar:'فرن',en:'communal oven / bakery'},
  {tr:'faran',ar:'فران',en:'baker (the person who runs the furn)'},
  {tr:'3ajin',ar:'عجين',en:'dough'},
  {tr:'khobz',ar:'خبز',en:'bread'},
  {tr:'man2oushi',ar:'منقوشة',en:'manoushe (flatbread with toppings)'},
  {tr:'zaatar',ar:'زعتر',en:'thyme & oil mix (classic manoushe topping)'},
  {tr:'jibneh',ar:'جبنة',en:'cheese (for jibneh manoushe)'},
  {tr:'kaak',ar:'كعك',en:'ring-shaped bread / sesame bread'},
  {tr:'tannour',ar:'تنور',en:'clay oven / tannour'},
  {tr:'saj',ar:'صاج',en:'convex iron griddle for flatbread'},
  {tr:'raghif',ar:'رغيف',en:'loaf of bread'},
  {tr:'khobz 3arabi',ar:'خبز عربي',en:'Arabic flatbread / pita'},
  {tr:'ma7rouq',ar:'محروق',en:'burnt (bread)'},
  {tr:'ni2i3',ar:'نيئ',en:'undercooked / raw'},
  {tr:'mish3al',ar:'مشعل',en:'wood fire / kindling'},
  {tr:'3ajin mfattar',ar:'عجين مفتّر',en:'leavened dough'},
  {tr:'fkher el-3ajin',ar:'فخر العجين',en:'kneading the dough (phrase)'},
  {tr:'bteS7a',ar:'بتصحى',en:'it rises (dough rises)'},
  {tr:'sabbeh 3al-furn',ar:'صبّح عالفرن',en:'go early to the bakery (morning ritual)'},
  {tr:'bi-s-sahra',ar:'بالسحرة',en:'at dawn (when the furn opens)'},
  {tr:'Tabaq',ar:'طبق',en:'tray (for carrying dough to the furn)'},
  {tr:'wa2et el-ghada',ar:'وقت الغدا',en:'lunchtime (when fresh bread peaks)'},
  {tr:'3abbet el-khobz',ar:'عبّة الخبز',en:'the bread bundle / armful of loaves'},
  {tr:'furn baladi',ar:'فرن بلدي',en:'traditional village oven'},
  {tr:'khobz el-dar',ar:'خبز الدار',en:'home-baked bread (baked at the furn from home dough)'},
];

const FRN_DRILLS = [
  {q:'What is a "furn"?', opts:['Clay pot','Communal oven / bakery','Type of bread','Rolling pin'], ans:1},
  {q:'Who is the "faran"?', opts:['The bread itself','A type of dough','The baker who runs the furn','A cheese topping'], ans:2},
  {q:'What does "3ajin" mean?', opts:['Burnt bread','Dough','Cheese','Clay oven'], ans:1},
  {q:'What is a "man2oushi"?', opts:['A clay pot','A type of cheese','Flatbread with toppings','Ring-shaped bread'], ans:2},
  {q:'What topping makes a classic "zaatar" manoushe?', opts:['Cheese & mint','Thyme & oil mix','Honey & butter','Chilli & garlic'], ans:1},
  {q:'What is a "saj"?', opts:['A loaf of bread','A clay oven','A convex iron griddle','A bread basket'], ans:2},
  {q:'What does "ma7rouq" mean?', opts:['Undercooked','Freshly baked','Burnt','Leavened'], ans:2},
  {q:'What is "kaak"?', opts:['Ring-shaped / sesame bread','Sourdough loaf','Flatbread wrap','Sweet pastry'], ans:0},
  {q:'What does "bteS7a" mean in bread context?', opts:['It burns','It rises','It hardens','It cools'], ans:1},
  {q:'What is "furn baladi"?', opts:['Modern electric bakery','Traditional village oven','Imported bread brand','Industrial bakery'], ans:1},
];

const FRN_TIPS = [
  {
    title: 'The Furn as Community Hub',
    body: 'Before home ovens, every Lebanese neighborhood had a communal furn. Families would prepare their dough at home, then walk to the furn with their trays at dawn. The faran knew each family\'s preferences. You could send a child with the dough and a coin — the bread came back hot. Some villages still do this today.'
  },
  {
    title: 'Manoushe Culture',
    body: 'The manoushe is Lebanon\'s breakfast institution. Zaatar wa zayt (thyme with olive oil) is the classic, but jibneh (white cheese), kishk (dried yogurt), and kafta all exist. A manoushe from the furn, folded in wax paper and eaten on the walk to school — that is a core Lebanese childhood memory.'
  },
  {
    title: '"Sabbeh 3al-Furn" — The Dawn Ritual',
    body: 'Going to the furn at sunrise is almost a spiritual act. The smell of fresh bread in the cold morning air, the queue of neighbors holding their trays or plastic bags, the faran\'s face reddened by the oven\'s heat. Saying "sabbeh 3al-furn" to someone means you went early and did something wholesome.'
  },
  {
    title: 'Home Dough at the Furn',
    body: 'A uniquely Lebanese tradition: you make your own dough at home (your grandmother\'s recipe), put it in a Tabaq (tray) covered with a cloth, and take it to the furn to be baked. The faran charges a small fee per tray. The resulting khobz el-dar tastes different from anything store-bought — it carries the flavor of your own home.'
  },
];
