// R1497 — NEW FEATURE: Lebanese Falafel & Ful Street Food Culture (fll) — 20 words, 8 drills, 4 tips
const FLL_WORDS = [
  {w:'falafel',t:'فلافل',tr:'falafel',e:'fried chickpea/fava balls (street food icon)',c:'fll'},
  {w:'ful',t:'فول',tr:'ful',e:'fava bean stew (morning breakfast staple)',c:'fll'},
  {w:'ta7ine',t:'طحينة',tr:'ta7ine',e:'tahini sesame sauce (drizzled over everything)',c:'fll'},
  {w:'torshi',t:'طورشي',tr:'torshi',e:'pickled vegetables (turnip, carrot, pepper)',c:'fll'},
  {w:'lift',t:'لفت',tr:'lift',e:'pickled turnip (turns bright pink in brine)',c:'fll'},
  {w:'bandora',t:'بندورة',tr:'bandora',e:'tomato slices (in the sandwich)',c:'fll'},
  {w:'kammoun',t:'كمّون',tr:'kammoun',e:'cumin (key spice in falafel batter)',c:'fll'},
  {w:'ba2dounes',t:'بقدونس',tr:"ba2dounes",e:'parsley (fresh herb in falafel mix)',c:'fll'},
  {w:'kzbara',t:'كزبرة',tr:'kzbara',e:'coriander / cilantro (in falafel batter)',c:'fll'},
  {w:'7adde',t:'حدة',tr:"7adde",e:'spicy chili sauce / level of heat',c:'fll'},
  {w:'3aroos l-falafel',t:'عروس الفلافل',tr:"3aroos l-falafel",e:'falafel sandwich (stuffed flatbread)',c:'fll'},
  {w:'bsalle',t:'بصلة',tr:'bsalle',e:'onion (raw, blended into the batter)',c:'fll'},
  {w:'mnshal',t:'منشل',tr:'mnshal',e:'wire strainer (lifts falafel from hot oil)',c:'fll'},
  {w:'7oms',t:'حمص',tr:'7oms',e:'chickpeas (classic falafel base)',c:'fll'},
  {w:'3aroos ful',t:'عروس فول',tr:"3aroos ful",e:'fava bean sandwich (a morning classic)',c:'fll'},
  {w:'zbdiyye',t:'زبدية',tr:'zbdiyye',e:'serving bowl (for ful stew)',c:'fll'},
  {w:'m7ammar',t:'محمّر',tr:"m7ammar",e:'golden-fried / crispy and reddish',c:'fll'},
  {w:'lmoon',t:'ليمون',tr:'lmoon',e:'lemon (squeezed over fava beans)',c:'fll'},
  {w:'zeit l-2ale',t:'زيت القلي',tr:"zeit l-2ale",e:'deep frying oil (very hot, fast cook)',c:'fll'},
  {w:'khbez mra2ra2',t:'خبز مرقرق',tr:"khbez mra2ra2",e:'thin flatbread (wraps the sandwich)',c:'fll'},
];

const FLL_DRILLS = [
  {q:'I want falafel with tahini and pickles.',a:'بدي فلافل بطحينة وتورشي.',ar:'biddi falafel b-ta7ine w-torshi.',correct:0,
   opts:['بدي فلافل بطحينة وتورشي.','بدي فلافل بدون شي.','بدي فلافل بس.','بدي فول بطحينة.']},
  {q:'Make it spicy!',a:'حدّها!',ar:"7adda!",correct:0,
   opts:['حدّها!','خفّفها!','بدون حدة.','ما بحب الحار.']},
  {q:'Give me a falafel sandwich.',a:'عطيني عروس فلافل.',ar:"3tini 3aroos falafel.",correct:0,
   opts:['عطيني عروس فلافل.','عطيني عروس فول.','عطيني فلافل بس.','عطيني صحن فول.']},
  {q:'The falafel is golden and crispy.',a:'الفلافل محمّر كويس.',ar:"l-falafel m7ammar kwayyes.",correct:0,
   opts:['الفلافل محمّر كويس.','الفلافل ما انقلى.','الفلافل بارد هلق.','الفلافل ناشف.']},
  {q:'Without onion please.',a:'بدون بصلة لو سمحت.',ar:"b-doun bsalle law sama7t.",correct:0,
   opts:['بدون بصلة لو سمحت.','بدون طحينة لو سمحت.','بدون ليمون.','مع بصلة كتير.']},
  {q:'Add pickled turnip to the sandwich.',a:'زيد لفت عالعروس.',ar:"zayyid lift 3al-3aroos.",correct:0,
   opts:['زيد لفت عالعروس.','زيد طماطم بس.','ما بحب اللفت.','شيل التورشي.']},
  {q:'Squeeze lemon over the fava beans.',a:'عصّر ليمون على الفول.',ar:"3assar lmoon 3al-ful.",correct:0,
   opts:['عصّر ليمون على الفول.','حط طحينة على الفول.','زيد ملح على الفلافل.','اكل الفول بدون شي.']},
  {q:'How much is a bowl of fava beans?',a:'أديش الزبدية فول؟',ar:"2addesh l-zbdiyye ful?",correct:0,
   opts:['أديش الزبدية فول؟','أديش الصحن فلافل؟','أديش العروس؟','أديش الطحينة؟']},
];

const FLL_TIPS = [
  {title:'The Falafel Stand: A Lebanese Institution',body:"The falafel stand is as Lebanese as the cedar tree. Every neighborhood has its falafel vendor — usually open from early morning through to late night. The falafel itself is made from soaked chickpeas (7oms) and/or fava beans (ful), blended with ba2dounes (parsley), kzbara (coriander), bsalle (onion), garlic, and kammoun (cumin), then deep-fried in sizzling zeit l-2ale until golden. The vendor lifts them with the mnshal (wire strainer) and taps off the oil. A good falafel is m7ammar (golden-crispy on the outside) with a green herb-flecked interior — never dense or gray. Lebanese falafel is lighter and crunchier than most other regional versions."},
  {title:'The Art of the 3aroos Falafel',body:"The 3aroos l-falafel is the ultimate Lebanese street sandwich. A sheet of khbez mra2ra2 (thin flatbread) is laid open, spread with ta7ine (tahini), then loaded: falafel balls pressed in, slices of bandora (tomato), crisp torshi (pickled vegetables), strips of lift (pink pickled turnip), and if you dare — a hit of 7adde (hot chili sauce). The whole thing is rolled or folded tight and handed over wrapped in paper. Some people add khyar (cucumber), fresh za3tar, or a drizzle of lemon. The balance of hot falafel, cool vegetables, and tangy torshi is what makes it iconic. In Lebanon, you eat it standing at the counter or on the go."},
  {title:'Morning Ful: The Lebanese Breakfast',body:"Long before falafel became a global phenomenon, ful was the fuel of Lebanese mornings. Ful is a slow-cooked fava bean stew served in a zbdiyye (bowl), drizzled with zeit (olive oil), ta7ine (tahini), and a squeeze of lmoon (lemon). Sometimes topped with a sliced hard-boiled egg or diced tomato. The 3aroos ful (fava sandwich) is the working-class breakfast — cheap, filling, protein-rich. Street stalls set up before sunrise to serve construction workers, drivers, and early risers. The smell of ful simmering in its pot is one of the defining scents of a Lebanese morning. 'Ful u falafel' together at the same stall is the classic Lebanese power combo."},
  {title:'Falafel Etiquette & Ordering Culture',body:"Ordering falafel in Lebanon is an art form. The vendor will ask: 'Shu baddak fiya?' (what do you want in it?). Regular options: ta7ine (tahini), torshi (pickles), lift (turnip), bandora (tomato), khyar (cucumber). Specify 7adde (spicy) or la2 (no). Say b-doun bsalle (without onion) if needed — some vendors blend raw onion into the batter. A good falafel customer knows exactly what they want and says it fast, because the line moves. In Beirut, famous stands like Falafel Sahyoun in Downtown and Falafel Barbar have loyal followings. Diaspora Lebanese rank a good 3aroos falafel among the top things they miss from home."},
];
