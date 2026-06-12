// R1500 — NEW FEATURE: Lebanese Kibbeh Culture (kbb) — 20 words, 8 drills, 4 tips
const KBB_WORDS = [
  {w:'kibbeh',t:'كبّة',tr:'kibbeh',e:"Lebanon's national dish — ground meat & bulgur",c:'kbb'},
  {w:'kibbeh nayyeh',t:'كبّة نيّة',tr:'kibbeh nayyeh',e:'raw kibbeh (eaten fresh with olive oil)',c:'kbb'},
  {w:'kibbeh b-siniyye',t:'كبّة بصينية',tr:'kibbeh b-siniyye',e:'baked kibbeh in tray, cut in diamonds',c:'kbb'},
  {w:'kibbeh b-laban',t:'كبّة بلبن',tr:'kibbeh b-laban',e:'kibbeh balls cooked in yogurt sauce',c:'kbb'},
  {w:'kibbeh mshawwiye',t:'كبّة مشوية',tr:'kibbeh mshawwiye',e:'grilled kibbeh patties on charcoal',c:'kbb'},
  {w:'kibbeh mkliye',t:'كبّة مقلية',tr:'kibbeh mkliye',e:'deep-fried kibbeh balls (oval shaped)',c:'kbb'},
  {w:'borghol',t:'برغل',tr:'borghol',e:'bulgur wheat (ground fine, kibbeh shell base)',c:'kbb'},
  {w:'la7me 7alle',t:'لحمة حلّة',tr:"la7me 7alle",e:'ground meat (lamb preferred for kibbeh)',c:'kbb'},
  {w:'7shwe',t:'حشوة',tr:"7shwe",e:'filling: spiced meat, onion, pine nuts',c:'kbb'},
  {w:'snobr',t:'صنوبر',tr:'snobr',e:'pine nuts (toasted, essential in 7shwe)',c:'kbb'},
  {w:'basal',t:'بصل',tr:'basal',e:'onion (caramelized in the filling)',c:'kbb'},
  {w:'siniyye',t:'صينية',tr:'siniyye',e:'baking tray (for siniyye kibbeh)',c:'kbb'},
  {w:'laban',t:'لبن',tr:'laban',e:'yogurt (sauce base for kibbeh b-laban)',c:'kbb'},
  {w:'zeit wzeitar',t:'زيت وزيتار',tr:'zeit wzeitar',e:"olive oil & thyme (served with kibbeh nayyeh)",c:'kbb'},
  {w:'3araq',t:'عرق',tr:"3araq",e:'anise spirit (traditional drink with kibbeh nayyeh)',c:'kbb'},
  {w:'mfarkeh',t:'مفركة',tr:'mfarkeh',e:'loose-crumbled kibbeh with onions (pan-cooked)',c:'kbb'},
  {w:'kammoun',t:'كمّون',tr:'kammoun',e:'cumin (key spice in kibbeh mixture)',c:'kbb'},
  {w:'la7me ghazal',t:'لحمة غزال',tr:"la7me ghazal",e:'lean lamb (premium cut for kibbeh nayyeh)',c:'kbb'},
  {w:'tshbeek',t:'تشبيك',tr:'tshbeek',e:'diamond cross-cut pattern on siniyye kibbeh',c:'kbb'},
  {w:'waSfet sitti',t:'وصفة ستّي',tr:"waSfet sitti",e:"grandmother's recipe (every family has its own)",c:'kbb'},
];

const KBB_DRILLS = [
  {q:'I want raw kibbeh with olive oil and thyme.',a:'بدي كبّة نيّة بزيت وزيتار.',ar:'biddi kibbeh nayyeh b-zeit wzeitar.',correct:0,
   opts:['بدي كبّة نيّة بزيت وزيتار.','بدي كبّة مقلية.','بدي كبّة بلبن.','بدي كبّة مشوية.']},
  {q:'The filling has pine nuts and onion.',a:'الحشوة فيها صنوبر وبصل.',ar:"l-7shwe fiya snobr w-basal.",correct:0,
   opts:['الحشوة فيها صنوبر وبصل.','الحشوة بس لحمة.','الحشوة بدون صنوبر.','الحشوة حارة كتير.']},
  {q:'Is the meat lamb or beef?',a:'اللحمة ضاني ولّا بقري؟',ar:"l-la7me Daani willa ba2ari?",correct:0,
   opts:['اللحمة ضاني ولّا بقري؟','اللحمة طازجة؟','اللحمة من وين؟','اللحمة غالية؟']},
  {q:'I prefer kibbeh in yogurt sauce.',a:'بفضّل الكبّة بلبن.',ar:"bfaDDel l-kibbeh b-laban.",correct:0,
   opts:['بفضّل الكبّة بلبن.','بفضّل الكبّة المقلية.','بفضّل الكبّة النيّة.','بفضّل الكبّة المشوية.']},
  {q:'Bring anise with the raw kibbeh.',a:'جيب عرق مع الكبّة النيّة.',ar:"jib 3araq ma3 l-kibbeh nayyeh.",correct:0,
   opts:['جيب عرق مع الكبّة النيّة.','جيب مي مع الكبّة.','جيب عصير مع الكبّة.','جيب عرق بس.']},
  {q:'The bulgur must be finely ground.',a:'البرغل لازم يكون ناعم.',ar:"l-borghol laazem ykuun naa3em.",correct:0,
   opts:['البرغل لازم يكون ناعم.','البرغل لازم يكون كبير.','البرغل مش مهم.','البرغل مش موجود.']},
  {q:'This is my grandmother\'s recipe.',a:'هيدي وصفة ستّي.',ar:"haydi waSfet sitti.",correct:0,
   opts:['هيدي وصفة ستّي.','هيدي وصفة جديدة.','هيدي مش كبّة.','هيدي وصفة المطعم.']},
  {q:'How much for a tray of baked kibbeh?',a:'أديش الكبّة بالصينية؟',ar:"2addesh l-kibbeh b-siniyye?",correct:0,
   opts:['أديش الكبّة بالصينية؟','أديش الكبّة المقلية؟','أديش الكبّة بلبن؟','أديش الكبّة النيّة؟']},
];

const KBB_TIPS = [
  {title:"Kibbeh: Lebanon's National Dish",body:"If Lebanon has a national dish, it's kibbeh. Every region, every family, every grandmother has her own version. At its core, kibbeh is a mixture of borghol (fine bulgur wheat) and la7me 7alle (ground meat — ideally lamb), seasoned with kammoun (cumin), cinnamon, and black pepper, and worked by hand until the mixture becomes a smooth, unified paste. The outer shell must be thin and even. The 7shwe (filling) is spiced ground meat, caramelized basal (onion), and toasted snobr (pine nuts). From this base, Lebanese cooks produce at least six distinct dishes: raw, baked, fried, grilled, in yogurt, and crumbled. Kibbeh is not fast food — it's Sunday-afternoon labor, a test of skill, and a vehicle for family pride."},
  {title:'Kibbeh Nayyeh: The Raw Deal',body:"Kibbeh nayyeh (raw kibbeh) is perhaps the most daring of the Lebanese table — and the most beloved. It is raw ground lamb or very lean beef, mixed with fine borghol and spices, worked cold until silky. Served on a flat plate, indented with a thumb print, drizzled with zeit wzeitar (olive oil and dried thyme), it is eaten with fresh raw vegetables: spring onions, mint, lettuce, and radishes. The rule is freshness: kibbeh nayyeh is made the morning it's eaten, from meat butchered that day. The smell of the meat must be sweet and clean. Lebanese diaspora often say that kibbeh nayyeh is what they miss most — and what they fear most to replicate abroad without fresh butcher access. Traditionally served with 3araq (anise spirit) to cut the richness."},
  {title:"Siniyye & Fried Kibbeh: Sunday's Architecture",body:"Kibbeh b-siniyye is baked kibbeh in a tray — siniyye. The tshbeek (diamond cross-cut pattern) is not just decoration: it's a scoring system that controls cooking, allows oil penetration, and creates crispy edges on each diamond. A layer of olive oil is poured over the top before baking. The cuts go all the way through, so the bottom layer can also crisp. Each diamond should be a perfect bite — browned on all edges, moist inside. Kibbeh mkliye (fried kibbeh) are oval footballs stuffed with 7shwe, pinched to a point at both ends, and fried in hot oil until dark brown and crisp. These appear at mezze, school lunch boxes, and roadside takeaway shops across Lebanon."},
  {title:'Kibbeh b-Laban & Mfarkeh: Comfort Variations',body:"Kibbeh b-laban (kibbeh in yogurt) is a winter dish — small oval kibbeh balls, poached or simmered in a stabilized laban (yogurt) sauce often flavored with garlic and dried mint. The sauce thickens around the kibbeh, creating a tangy, creamy bowl. Often served with plain rice. Kibbeh mfarkeh is the weeknight shortcut: instead of shaping kibbeh shells, the same raw mixture is broken apart and pan-fried loose with onions and pine nuts — crumbled, fragrant, and done in fifteen minutes. Every Lebanese cook knows mfarkeh as the solution when you have kibbeh mixture but no time for form. It is also the dish that children request most — served simply with laban on the side and Arabic bread to scoop."},
];
