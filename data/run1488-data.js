// R1488 — NEW FEATURE: Lebanese Autumn & Kharif Season (khr) — 20 words, 8 drills, 4 tips
const KHR_WORDS = [
  {w:'kharif',t:'خريف',tr:'kharif',e:'autumn / fall season',c:'khr'},
  {w:'wara2 sha4ar',t:'ورق شجر',tr:'wara2 sha4ar',e:'falling leaves',c:'khr'},
  {w:'2annabi',t:'عنّابي',tr:'2annabi',e:'burgundy / dark red (leaf color)',c:'khr'},
  {w:'ward l-kharif',t:'ورد الخريف',tr:'ward l-kharif',e:'autumn roses',c:'khr'},
  {w:'7areki',t:'حاريكي',tr:'7areki',e:'crisp cool air / autumn chill',c:'khr'},
  {w:'zitun',t:'زيتون',tr:'zitun',e:'olives / olive harvest',c:'khr'},
  {w:'3inab',t:'عنب',tr:'3inab',e:'grapes (autumn harvest)',c:'khr'},
  {w:'teffeh',t:'تفّاح',tr:'teffeh',e:'apples (mountain harvest)',c:'khr'},
  {w:'kestane',t:'كستناء',tr:'kestane',e:'chestnuts (roasted)',c:'khr'},
  {w:'sabrit l-kharif',t:'صبرة الخريف',tr:'sabrit l-kharif',e:'autumn abundance / harvest pile',c:'khr'},
  {w:'mawsem',t:'موسم',tr:'mawsem',e:'season / harvest time',c:'khr'},
  {w:'daffe',t:'دفّة',tr:'daffe',e:'warmth (of a blanket/fireplace in autumn)',c:'khr'},
  {w:'mtar',t:'مطر',tr:'mtar',e:'rain (first autumn rains)',c:'khr'},
  {w:'dbebir',t:'ضبيبير',tr:'dbebir',e:'fog / morning mist (mountain autumn)',c:'khr'},
  {w:'3ajroom',t:'عجروم',tr:'3ajroom',e:'unripe fig (left after harvest)',c:'khr'},
  {w:'7atab',t:'حطب',tr:'7atab',e:'firewood (stacked for winter)',c:'khr'},
  {w:'sane7',t:'صانح',tr:'sane7',e:'crisp/clear (autumn weather)',c:'khr'},
  {w:'3asroun',t:'عصرون',tr:'3asroun',e:'late afternoon light (golden hour)',c:'khr'},
  {w:'jam3 z-zitun',t:'جمع الزيتون',tr:'jam3 z-zitun',e:'olive picking (family tradition)',c:'khr'},
  {w:'refi2 l-kharif',t:'رفيق الخريف',tr:'refi2 l-kharif',e:'autumn companion (blanket/tea/friend)',c:'khr'},
];

const KHR_DRILLS = [
  {q:'Autumn has arrived.',a:'الخريف وصل.',ar:'l-kharif wsel.',correct:0,
   opts:['الخريف وصل.','الربيع وصل.','الصيف وصل.','الشتا وصل.']},
  {q:'The leaves are falling from the trees.',a:'الورق عم يطيح من الشجر.',ar:"l-wara2 3am ytiH min sh-shajar.",correct:0,
   opts:['الورق عم يطيح من الشجر.','الورق عم ينبت.','الورق أخضر.','الورق كبير.']},
  {q:"It's the olive harvest season.",a:'هالموسم موسم جمع الزيتون.',ar:"hal-mawsem mawsem jam3 z-zitun.",correct:0,
   opts:['هالموسم موسم جمع الزيتون.','هالموسم موسم العنب.','هالموسم موسم التفاح.','هالموسم موسم الكستناء.']},
  {q:'The autumn air is crisp and fresh.',a:'هوا الخريف صانح وناشف.',ar:"hawa l-kharif sane7 w-nashef.",correct:0,
   opts:['هوا الخريف صانح وناشف.','هوا الخريف بارد وثلجي.','هوا الخريف حار ورطب.','هوا الخريف دافئ ولطيف.']},
  {q:'We need to stack the firewood.',a:'لازم نرتب الحطب.',ar:"lazem nrattib l-7atab.",correct:0,
   opts:['لازم نرتب الحطب.','لازم نشتري الحطب.','لازم نحرق الحطب.','لازم نقطع الحطب.']},
  {q:'The first rain of autumn fell.',a:'الأول مطر الخريف نزل.',ar:"l-awwal matar l-kharif nezil.",correct:0,
   opts:['الأول مطر الخريف نزل.','المطر انقطع.','المطر كتير هالسنة.','الجو صحو.']},
  {q:'Let\'s roast chestnuts on the fire.',a:'يلا نشوي كستناء على النار.',ar:"yalla nshawe kestane 3a n-nar.",correct:0,
   opts:["يلا نشوي كستناء على النار.","يلا نأكل التفاح.","يلا نجمع الزيتون.","يلا نشرب شاي."]},
  {q:'The mountains are covered in fog this morning.',a:'الجبل مغطى بالضبيبير الصبح.',ar:"l-jabal mghaT-Ta bil-dbebir s-sob7.",correct:0,
   opts:['الجبل مغطى بالضبيبير الصبح.','الجبل مغطى بالثلج.','الجبل واضح اليوم.','الجبل بعيد الصبح.']},
];

const KHR_TIPS = [
  {title:'Autumn in the Lebanese Mountains',body:"Kharif (autumn) in Lebanon is arguably the most beautiful season. The mountain villages — Ehden, Deir el Ahmar, Bcharre — turn gold and burgundy as trees change. Temperatures drop to a perfect 15-20°C. Lebanese families make weekend trips to pick apples (teffeh), walnuts, and chestnuts. The first autumn rain (awwal matar l-kharif) is a big deal — people often film it or post about it. The air gets that crisp quality (sane7) that makes everyone nostalgic."},
  {title:'Olive Picking Season',body:"Olive harvest (jam3 z-zitun) runs October–November and is a major family and community event. Villages in the Chouf, Akkar, and south Lebanon come together to pick. Families spread tarps under trees and hand-pick or use rakes. The olives go to the village press (ma3sara) within days to make oil. Helping with the olive harvest is a cultural obligation — you don't refuse a neighbor's invitation. It's hard work but always followed by food and singing."},
  {title:'Autumn Foods & Drinks',body:"Autumn means roasted chestnuts (kestane) sold by street vendors in Beirut, and apple season from the Bekaa and mountains. Villages sell fresh-pressed apple juice (3asir teffeh) and grape molasses (dibs 3enab) from the summer harvest. Families start making mouneh (preserves) — jams, pickles, grape syrup. The first cold nights mean the return of the saj heater and drinking mate or hot carob juice (7arrub). Autumn is mouneh season — a race against winter."},
  {title:'Autumn Atmosphere & Sayings',body:"Autumn has its own Lebanese mood — melancholic, cozy, and social. 'L-kharif b-yjarreb l-mashae3ir' (autumn tests your feelings) is a common saying. Golden afternoon light (3asroun) in the mountains is considered Lebanon's most beautiful light. People say 'refi2 l-kharif' (autumn companion) to describe close friends you spend cold evenings with. Morning mist (dbebir) on mountain roads is a daily reality — drivers slow down. Autumn also marks the return from summer mountain retreats (sayfiye) to Beirut."},
];
