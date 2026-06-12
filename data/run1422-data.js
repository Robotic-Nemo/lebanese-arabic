// R1422 — NEW FEATURE: Lebanese Winter Snow & Mountain Villages (snw)
const SNW_WORDS = [
  {ar:'ثلج',tr:'talj',en:'snow'},
  {ar:'جبل',tr:'jabal',en:'mountain'},
  {ar:'قرية جبلية',tr:'2arye jbaliyye',en:'mountain village'},
  {ar:'تزلج',tr:'tazalloj',en:'skiing'},
  {ar:'سترة صوف',tr:'stret souf',en:'wool sweater'},
  {ar:'كانون',tr:'kanoun',en:'brazier / wood fire heater'},
  {ar:'نار',tr:'nar',en:'fire'},
  {ar:'كستنا',tr:'kastane',en:'chestnuts'},
  {ar:'طريق مغلق',tr:'tari2 ma2loul',en:'road closed (by snow)'},
  {ar:'يريد بتلج',tr:'3am byitlij',en:"it's snowing"},
  {ar:'ملابس شتوية',tr:'mlabis shitawiyye',en:'winter clothes'},
  {ar:'الشتا',tr:'el-shita',en:'winter'},
  {ar:'صقيع',tr:'Sa2i3',en:'frost / freezing cold'},
  {ar:'دفا',tr:'dafa',en:'warmth'},
  {ar:'مدفأة',tr:'madfiye',en:'fireplace / heater'},
  {ar:'فريكة',tr:'freyke',en:'Faraya / mountain resort area'},
  {ar:'بقاع',tr:'be2aa',en:'Bekaa valley (cold in winter)'},
  {ar:'ثلاجة طبيعية',tr:'tallajet tabi3iyye',en:'natural refrigerator (cool mountain air)'},
  {ar:'عاصفة',tr:'3asfe',en:'storm'},
  {ar:'مولد',tr:'mawled',en:'generator (for power cuts)'}
];

const SNW_DRILLS = [
  {q:'What is "talj" (ثلج)?',opts:['rain','snow','frost','hail'],a:1},
  {q:'A "kanoun" (كانون) in a Lebanese mountain home is...?',opts:['a type of food','a brazier or wood fire heater','a blanket','a snow shovel'],a:1},
  {q:'When Lebanese say "3am byitlij" (عم بيتلج) they mean...?',opts:["it's raining","it's windy","it's snowing","it's foggy"],a:2},
  {q:'"Kastane" (كستنا) roasted on mountain roads in winter are...?',opts:['pine nuts','chickpeas','chestnuts','almonds'],a:2},
  {q:'The "Bekaa" (بقاع) in winter is known for...?',opts:['being warm','heavy snow and extreme cold','mild weather','sea breezes'],a:1},
  {q:'A "madfiye" (مدفأة) is a...?',opts:['winter coat','fireplace or heater','snow boot','mountain trail'],a:0},
  {q:'"Sa2i3" (صقيع) describes...?',opts:['warm sunshine','a snowstorm','frost or freezing cold','light rain'],a:2},
  {q:'Lebanese mountain villages in winter are famous for...?',opts:['beach culture','cozy fires, chestnuts, and snow sports','hot desert weather','seafood'],a:1}
];

const SNW_TIPS = [
  {title:'Snow in Lebanon — A Cultural Celebration',body:'Lebanon is one of the few countries where you can ski in the morning and swim in the afternoon — the snow-capped mountains are just an hour from the coast. "Hayda lebnan" (هيدا لبنان — this is Lebanon) is the proud phrase. The Cedars (Al-Arz), Faraya, Mzaar, and Laqlouq are famous ski resorts. When snow falls, Lebanese flood social media with photos and flock to the mountains for "tazalloj" (تزلج — skiing). Even non-skiers make the trip just to see the snow, roast chestnuts, and sit by a kanoun. Snow days are celebrated almost like holidays.'},
  {title:'The Kanoun & Mountain Warmth',body:'The "kanoun" (كانون) is a traditional charcoal or wood fire brazier central to Lebanese mountain culture. Families gather around it for warmth, roast chestnuts, and share coffee. The smell of wood smoke in a mountain village is iconic. Modern homes use "madfiye" (مدفأة — gas or diesel heaters), but the kanoun remains a symbol of winter togetherness. Mountain families stock up on firewood and heating oil before winter. Power cuts (common in Lebanon) make the kanoun doubly important — it needs no electricity. Chestnuts sold by roadside vendors on snowy mountain roads are a beloved winter ritual.'},
  {title:'Winter Road Culture',body:'Lebanese mountain roads in winter are both beautiful and treacherous. "Tari2 ma2loul" (طريق مقلول — road closed) signs appear after heavy snowfall, causing cities to scramble for alternative routes. 4WD vehicles become status symbols in mountain towns. The Army Corps of Engineers and municipalities work to clear roads, but villages can be cut off for days. WhatsApp groups buzz with road condition updates. Driving in snow without chains is both dangerous and common — Lebanese pride sometimes overrides caution. "Shou l-jaw?" (شو الجو؟ — how\'s the weather?) becomes the essential daily question during winter months.'},
  {title:'Snow & Lebanese Identity',body:'Snow holds a special place in Lebanese national identity. The Lebanese flag features the Cedar tree, which stands against snow-covered mountains in iconic photos. "Jabal lubnan" (جبل لبنان — Mount Lebanon) is not just geography but identity. Village families who moved to Beirut still return to the mountains in winter to reconnect. Mountain village life slows in winter — some residents leave for warmer cities, leaving ghost-village atmospheres. But those who stay maintain traditions: homemade wine and arak (to warm the blood), mouneh (preserved foods from summer), and the communal gathering that makes Lebanese village culture irreplaceable.'}
];
