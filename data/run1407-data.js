// R1407 — NEW FEATURE: Lebanese Shawarma & Street Sandwich Culture (shw)
const SHW_WORDS = [
  {ar:'شاورما',tr:'shawarma',en:'shawarma (spit-roasted meat)'},
  {ar:'خبز مرقوق',tr:'khubez mar2ou2',en:'thin flatbread (markouk)'},
  {ar:'توم',tr:'toum',en:'garlic sauce / garlic paste'},
  {ar:'طحينة',tr:'ta7ini',en:'tahini (sesame paste sauce)'},
  {ar:'تورشي',tr:'tourshi',en:'pickled vegetables'},
  {ar:'فرّيج',tr:'farrej',en:'grilled chicken pieces'},
  {ar:'لحمة',tr:'la7me',en:'meat (beef/lamb)'},
  {ar:'خضار مشوي',tr:'khDar mashwi',en:'grilled vegetables'},
  {ar:'سفيحة',tr:'sfiha',en:'open-faced meat pie'},
  {ar:'منقوشة',tr:'man2oushe',en:'za\'atar flatbread (breakfast staple)'},
  {ar:'صاج',tr:'saj',en:'convex griddle for flatbread'},
  {ar:'بطاطا حلوة',tr:'bTata 7elwe',en:'sweet potato (in sandwiches)'},
  {ar:'شطة',tr:'shaTa',en:'hot chili sauce / spicy condiment'},
  {ar:'ليمون',tr:'laymon',en:'lemon / lemon juice'},
  {ar:'سيخ',tr:'seekh',en:'skewer / spit'},
  {ar:'كفتة',tr:'kafta',en:'spiced minced meat (on skewer)'},
  {ar:'فلافل',tr:'falafel',en:'fried chickpea fritters'},
  {ar:'حمص',tr:'7omes',en:'hummus'},
  {ar:'بقدونس',tr:'ba2dones',en:'parsley'},
  {ar:'ورق عنب',tr:'wara2 3anab',en:'stuffed grape leaves'}
];

const SHW_DRILLS = [
  {q:'What is "toum" (توم)?',opts:['spicy chili sauce','garlic sauce/paste','tahini sauce','pickled turnips'],a:1},
  {q:'"Man2oushe" (منقوشة) is...?',opts:['a grilled chicken wrap','a type of shawarma','a za\'atar flatbread — Lebanese breakfast staple','a pickled vegetable dish'],a:2},
  {q:'The "saj" (صاج) is...?',opts:['a type of skewer','a convex griddle for cooking flatbread','a chili sauce','a meat pie'],a:1},
  {q:'"Sfiha" (سفيحة) is best described as...?',opts:['a closed bread roll','a fried dough ball','an open-faced meat pie','a sesame-coated bread ring'],a:2},
  {q:'"ShaTa" (شطة) adds what to a sandwich?',opts:['sweetness from fruit','garlic flavor','heat / spice from chili','lemon sourness'],a:2},
  {q:'What does "tourshi" (تورشي) refer to?',opts:['grilled meat slices','pickled vegetables','garlic paste','sesame sauce'],a:1},
  {q:'"Kafta" (كفتة) is...?',opts:['a fried chickpea fritter','spiced minced meat on a skewer','a type of pita bread','tahini dip'],a:1},
  {q:'The key bread for Lebanese street food is "khubez mar2ou2" — what is it?',opts:['thick sesame bread','a thin, soft flatbread (markouk)','a hard crusty roll','a fried bread pocket'],a:1}
];

const SHW_TIPS = [
  {title:'Shawarma: The Lebanese Street Icon',body:'No food defines Lebanese street life like the shawarma (شاورما). Stacked on a rotating vertical spit (سيخ — sikh), layers of marinated chicken (farrej) or meat (la7me) are shaved to order and wrapped in thin markouk bread (خبز مرقوق — khubez mar2ou2) with lashings of garlic sauce (توم — toum). Every neighborhood has its legendary shawarma spot; debates about who makes the best in Beirut are passionate and endless. The sandwich is eaten walking, often late at night after a long evening out — it\'s the unofficial meal of Beirut nightlife.'},
  {title:'The Man2oushe Morning',body:'The man2oushe (منقوشة) is the Lebanese breakfast. Dough stretched over a convex saj (صاج) griddle, spread with za\'atar and olive oil, and cooked until blistered and fragrant — this is how millions of Lebanese start the day. Man2oushe bakeries open before dawn; schoolchildren grab them wrapped in paper on the way to class. Variations include cheese (jibneh), za\'atar-and-cheese mixed, or even egg. The saj baker\'s quick, practiced motion — stretching, flipping, folding — is a form of street theater watched daily across Lebanon.'},
  {title:'The Culture of the Sandwich Shop',body:'A Lebanese "sandwich" isn\'t a Western-style sandwich — it\'s a whole culinary tradition. The falafel sandwich (فلافل with 7omes, tourshi, ba2dones, shaTa) is assembled at speed behind glass counters by specialists. The sfiha (سفيحة) — open-faced meat pie — is baked in shared neighborhood ovens. The kafta (كفتة) is grilled tableside at restaurants-turned-takeaways. Ordering is quick, prices are low, and the rule is: you eat standing or walking. Sitting down to enjoy street food is for tourists; locals are already three bites in while heading somewhere else.'},
  {title:'Toum: The Garlic Cult',body:'Lebanese garlic sauce — toum (توم) — is a cult condiment. Whipped to a white, cloud-like paste from raw garlic, lemon, oil and salt, it borders on hallucinogenic in potency and is applied to shawarma, grilled chicken, sandwiches, and practically everything else with zero restraint. Arguments about the right toum-to-meat ratio are a serious Lebanese dining discourse. Restaurants guard their toum recipes closely. Expat Lebanese will list toum among the things they miss most about home — after family, of course. "Bala toum" (without garlic) is said but rarely meant.'}
];
