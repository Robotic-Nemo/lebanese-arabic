// R1491 — NEW FEATURE: Lebanese Mountain Spring & Nab3 Culture (nab) — 20 words, 8 drills, 4 tips
const NAB_WORDS = [
  {w:'nab3',t:'نبع',tr:'nab3',e:'spring / natural water source',c:'nab'},
  {w:'ma3 l-3ayn',t:'ماء العين',tr:"ma3 l-3ayn",e:'spring water / eye water',c:'nab'},
  {w:'shallal',t:'شلال',tr:'shallal',e:'waterfall',c:'nab'},
  {w:'wadi',t:'وادي',tr:'wadi',e:'valley / ravine with stream',c:'nab'},
  {w:'ghader',t:'غدير',tr:'ghader',e:'natural pool / still pond',c:'nab'},
  {w:'jarra',t:'جرّة',tr:'jarra',e:'clay water jug',c:'nab'},
  {w:'sbeel',t:'سبيل',tr:'sbeel',e:'public drinking fountain',c:'nab'},
  {w:'matammeh',t:'مطمّة',tr:'matammeh',e:'stone trough for animals at spring',c:'nab'},
  {w:'7abb l-2amr',t:'حبّ القمر',tr:"7abb l-2amr",e:'watercress (grows near springs)',c:'nab'},
  {w:'tawb',t:'طوب',tr:'tawb',e:'natural swimming hole in a stream',c:'nab'},
  {w:'breek',t:'بريق',tr:'breek',e:'old metal water pitcher / flask',c:'nab'},
  {w:'rawiyye',t:'راوية',tr:'rawiyye',e:'perennial spring that never dries',c:'nab'},
  {w:'3eneh',t:'عينة',tr:'3eneh',e:'village spring (place name origin)',c:'nab'},
  {w:'mshemmish',t:'مشمّش',tr:'mshemmish',e:'apricot tree (grows wild near springs)',c:'nab'},
  {w:'sha6f',t:'شطف',tr:'sha6f',e:'splash / cool spray from waterfall',c:'nab'},
  {w:'7ajar',t:'حجار',tr:'7ajar',e:'rocks / stones by the stream',c:'nab'},
  {w:'darb l-wadi',t:'درب الوادي',tr:'darb l-wadi',e:'valley trail / path along stream',c:'nab'},
  {w:'m7ammiye',t:'محمية',tr:'m7ammiye',e:'nature reserve / protected spring area',c:'nab'},
  {w:'nzlet l-wadi',t:'نزلة الوادي',tr:'nzlet l-wadi',e:'descent into the valley',c:'nab'},
  {w:'s2al mn l-nab3',t:'صأل من النبع',tr:"s2al mn l-nab3",e:'drink from the spring (iconic moment)',c:'nab'},
];

const NAB_DRILLS = [
  {q:'Where is the spring?',a:'وين النبع؟',ar:'ween l-nab3?',correct:0,
   opts:['وين النبع؟','وين الشلال؟','وين الوادي؟','وين البحر؟']},
  {q:'The waterfall is beautiful.',a:'الشلال حلو.',ar:'l-shallal 7elo.',correct:0,
   opts:['الشلال حلو.','الوادي حلو.','النبع حلو.','الغدير حلو.']},
  {q:'The water is cold and fresh.',a:'الما بارد وعذب.',ar:"l-ma3 bared w-3adb.",correct:0,
   opts:['الما بارد وعذب.','الما حار ومالح.','الما دافي وحلو.','الما بارد ومر.']},
  {q:"Let's swim in the natural pool.",a:'يلا نسبح بالغدير.',ar:"yalla nsba7 bil-ghader.",correct:0,
   opts:["يلا نسبح بالغدير.","يلا نحكي بالوادي.","يلا نمشي عالنبع.","يلا نشرب من الجرّة."]},
  {q:'Fill the clay jug from the spring.',a:'مليي الجرّة من النبع.',ar:"malliyi l-jarra mn l-nab3.",correct:0,
   opts:['ملّيي الجرّة من النبع.','خليي الجرّة بالبيت.','كسّري الجرّة بالوادي.','اشتري جرّة جديدة.']},
  {q:'The valley trail takes one hour.',a:'درب الوادي بياخد ساعة.',ar:"darb l-wadi byaakhod se3a.",correct:0,
   opts:['درب الوادي بياخد ساعة.','درب الوادي بياخد يوم.','درب الوادي قريب.','درب الوادي بعيد كتير.']},
  {q:'This spring never dries up.',a:'هالنبع ما بجف أبداً.',ar:"hal-nab3 ma bejeff 2abadan.",correct:0,
   opts:['هالنبع ما بجف أبداً.','هالنبع بجف بالصيف.','هالنبع مليان بالشتا.','هالنبع صغير.']},
  {q:'The nature reserve protects the springs.',a:'المحمية بتحمي الينابيع.',ar:"l-m7ammiye bt7mi l-yanabi3.",correct:0,
   opts:['المحمية بتحمي الينابيع.','المحمية بتمنع السباحة.','المحمية بعيدة عالنبع.','المحمية مسكّرة.']},
];

const NAB_TIPS = [
  {title:'Lebanon\'s Sacred Springs',body:"Lebanon has hundreds of natural springs — naba3 (plural: yanabi3) — flowing from its limestone mountains. The most famous is Afqa Spring in the Adonis Valley (Wadi Ibrahim), where a cave pours a river into a gorge. In spring, snowmelt creates roaring waterfalls. Lebanese villages are almost always built near a spring, and many village names contain '3ayn' or 'nab3' (like Ain Zhalta, Ain el Remmaneh, Nabatieh). Springs are spiritual places — ancient temples were built at them, and today chapels and shrines stand nearby."},
  {title:'Wadi Life & Summer Escapes',body:"Every Lebanese family has a wadi story — the valley where they swim in tawbs (natural pools), grill on rocks, and drink spring water from metal breekat (flasks). The Nahr Ibrahim, Nahr el Kelb, Qadisha Valley, and Wadi Jhannam are classic day-trip destinations. Summer in Lebanon means escaping to a shallal (waterfall) on a Friday or Saturday. Families pack meze, firewood, and argilehs. Kids jump from rocks into ghodeir (pools). The water is cold even in August — fed by snow-capped peaks."},
  {title:'Water Heritage & Traditional Use',body:"Before piped water, every village had a communal sbeel (public fountain) where people drank and filled jarrat (clay jugs). Women would gather at springs — the sbeel was a social space. Matammet (stone troughs) at springs served animals. Clay jugs kept water cold naturally — no fridge needed. Some old families still insist spring water tastes better than tap. 'Ma3 l-3ayn' (spring water) is an expression of purity — you hear it used as a compliment: 'ktir 7elo, mitl ma3 l-3ayn' (so beautiful, like spring water)."},
  {title:'Spring Wildflowers & Watercress',body:"Lebanese mountain springs create micro-ecosystems. 7abb l-2amr (watercress) grows in the cold water — it's eaten raw in salads or picked and sold at village markets. Wild mint (na3na3 barri) and thyme (za3tar) grow near spring banks. Apricot trees (mshemmish) and fig trees often grow wild near water. In spring (March–May), the wadi slopes explode with wildflowers — anemones, cyclamen, and poppies. Lebanese nature enthusiasts hike wadi trails and document these springs on Instagram. The phrase 'mashrou3 nab3' (spring project) often means building a water catchment or conservation effort."},
];
