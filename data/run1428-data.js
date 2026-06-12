// R1428 — NEW FEATURE: Lebanese Corniche & Evening Walk Culture (cnc)
const CNC_WORDS = [
  {ar:'كورنيش',tr:'kornish',en:'corniche / seafront promenade'},
  {ar:'غروب الشمس',tr:'ghroub l-shams',en:'sunset'},
  {ar:'موج',tr:'mawj',en:'waves'},
  {ar:'صياد',tr:'sayyad',en:'fisherman'},
  {ar:'سناسل',tr:'sanasel',en:'railings / balustrade (corniche fence)'},
  {ar:'بائع ذرة',tr:'baye3 dara',en:'corn seller (street vendor)'},
  {ar:'كعك',tr:'ka3k',en:'kaak (sesame bread ring sold on corniche)'},
  {ar:'نارجيلة',tr:'narjile',en:'nargileh / hookah (café on corniche)'},
  {ar:'مشي',tr:'mashi',en:'walking / stroll'},
  {ar:'دراجة',tr:'drajé',en:'bicycle'},
  {ar:'بحر',tr:'ba7er',en:'sea'},
  {ar:'صخرة الروشة',tr:'sakhrit l-rawshe',en:'Pigeon Rocks (Beirut landmark)'},
  {ar:'مقهى على البحر',tr:'maqha 3al-ba7er',en:'café by the sea'},
  {ar:'شاطئ',tr:'shaTé',en:'beach'},
  {ar:'هواء البحر',tr:'hawa l-ba7er',en:'sea breeze'},
  {ar:'عشية',tr:'3ashiyye',en:'evening / dusk'},
  {ar:'نورس',tr:'nawras',en:'seagull'},
  {ar:'قارب',tr:'qarib',en:'boat'},
  {ar:'أبو عبده',tr:'abu 3abdo',en:'Abu Abdo (classic Lebanese everyman name — corniche regular)'},
  {ar:'تمشية',tr:'tmashe',en:'evening stroll (social walk)'}
];

const CNC_DRILLS = [
  {q:'The Beirut corniche landmark "Sakhrit l-Rawshe" (صخرة الروشة) is famous for its...?',opts:['ancient ruins','twin pigeon rocks rising from the sea','lighthouse','old fishermen\'s market'],a:1},
  {q:'A "baye3 dara" (بائع ذرة) on the corniche sells...?',opts:['fish','grilled corn on the cob','kaak bread','nargileh'],a:1},
  {q:'"Ka3k" (كعك) is a corniche snack described as...?',opts:['a spicy dip','a sesame-covered bread ring','fried fish','a sweet pastry'],a:1},
  {q:'Lebanese "tmashe" (تمشية) on the corniche refers to...?',opts:['a swimming session','an evening social stroll','a fishing trip','a bicycle race'],a:1},
  {q:'When Lebanese say "hawa l-ba7er" (هواء البحر), they mean...?',opts:['ocean storm','sea breeze (a cherished corniche pleasure)','fish smell','wave sound'],a:1},
  {q:'"3ashiyye" (عشية) — the best time to visit the corniche — means...?',opts:['early morning','midday','evening / dusk','midnight'],a:2},
  {q:'The "nawras" (نورس) gliding over the Beirut corniche is a...?',opts:['pelican','seagull','hawk','bat'],a:1},
  {q:'A "maqha 3al-ba7er" (مقهى على البحر) is...?',opts:['a floating restaurant','a café overlooking the sea','a beach club','a fish market stall'],a:1}
];

const CNC_TIPS = [
  {title:'The Corniche — Beirut\'s Living Room',body:'The Beirut Corniche (كورنيش بيروت) is a 4.8-kilometer seafront promenade stretching from the Manara lighthouse to the Ain el-Mreisseh district. For Beirutis, it\'s not just a walkway — it\'s a social institution. Every evening, families, couples, joggers, fishermen, and street vendors converge here. The iconic "Abu Abdo" figure — the quintessential Lebanese everyman in a plastic chair watching the sea — epitomizes corniche culture. Despite wars, economic crises, and power cuts, the corniche endures. Lebanese will tell you: "Shu baddak aktar?" (What more do you want?) — gesturing at the sunset over the sea.'},
  {title:'Street Vendors & Corniche Snacks',body:'No corniche experience is complete without its street economy. "Baye3 dara" (بائع ذرة — corn sellers) push smoking carts of grilled corn year-round. "Ka3k" (كعك) vendors balance trays of sesame-ring bread on their heads, calling out "Ka3k ya ka3k!" Lebanese street snacking protocol: you point, he wraps it in old newspaper, you eat walking. Then there\'s the "shawarma 3al-cornish" — the controversial act of eating shawarma while watching the sunset. "Narjile" cafés line the corniche road, offering hookah with a sea view. Hawkers sell everything from sunglasses to popcorn to corn.'},
  {title:'The Rawshe Rocks & Beirut Landmarks',body:'"Sakhrit l-Rawshe" (صخرة الروشة — Pigeon Rocks) are Beirut\'s most photographed natural landmarks: twin sea stacks rising 60 meters from the Mediterranean near Rawshe district. Boat tours circle the rocks for a fee, and the café-lined cliff above has the best sunset view in the city. During the July 2006 war and the 2020 Beirut explosion, photos of the undamaged Rawshe rocks became symbols of Lebanese resilience. Lebanese diaspora tattooed the rocks on their arms. "Beirut ma btmout" (بيروت ما بتموت — Beirut never dies) is often illustrated with the twin rocks.'},
  {title:'Evening Walk Culture & Social Fabric',body:'"Tmashe" (تمشية) — the evening stroll — is a deeply Lebanese social ritual. On the corniche, generations mix: grandparents with grandchildren, old friends meeting by coincidence, young couples, athletes. The greeting culture is intense: you cannot walk 100 meters without running into someone you know and stopping to chat — "Kifak? Shu 3am ta3mol?" (How are you? What are you up to?). Fishermen cast lines from the railing at sunset; some have their "permanent spot" for decades. After the 2019 revolution, the corniche became a protest gathering point. The sea, in Lebanese culture, is both escape and anchor — the horizon that emigrants cross, the view that calls them back.'}
];
