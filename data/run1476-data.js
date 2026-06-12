// R1476 — NEW FEATURE: Lebanese Sweets Shop (swt) — 20 words, 8 drills, 4 tips
const SWT_WORDS = [
  {w:'knafeh',t:'كنافة',tr:'knafeh',e:'shredded pastry with cheese',c:'swt'},
  {w:'baklawa',t:'بقلاوة',tr:'baklawa',e:'layered nut pastry (baklava)',c:'swt'},
  {w:"ma3moul",t:'معمول',tr:"ma3moul",e:'date/nut-filled cookies',c:'swt'},
  {w:"7alawa",t:'حلاوة',tr:"7alawa",e:'tahini sweet block',c:'swt'},
  {w:'mhalbiye',t:'مهلبية',tr:'mhalbiye',e:'rosewater milk pudding',c:'swt'},
  {w:"2atayef",t:'قطايف',tr:"2atayef",e:'stuffed pancakes (Ramadan)',c:'swt'},
  {w:"ka3k",t:'كعك',tr:"ka3k",e:'sesame ring cookies',c:'swt'},
  {w:'ghraybe',t:'غريبة',tr:'ghraybe',e:'melt-in-mouth shortbread',c:'swt'},
  {w:'boza',t:'بوظة',tr:'boza',e:'stretchy Lebanese ice cream',c:'swt'},
  {w:"znoud l-sit",t:'زنود الست',tr:"znoud l-sit",e:'cream-filled filo rolls',c:'swt'},
  {w:'halawiyyat',t:'حلاويات',tr:'halawiyyat',e:'sweets shop / confectionery',c:'swt'},
  {w:"2eshta",t:'قشطة',tr:"2eshta",e:'thick clotted cream',c:'swt'},
  {w:"3asal",t:'عسل',tr:"3asal",e:'honey',c:'swt'},
  {w:'fistuk',t:'فستق',tr:'fistuk',e:'pistachios',c:'swt'},
  {w:'simsim',t:'سمسم',tr:'simsim',e:'sesame seeds',c:'swt'},
  {w:'mazaher',t:'مزهر',tr:'mazaher',e:'orange blossom water',c:'swt'},
  {w:'sharab ward',t:'شراب ورد',tr:'sharab ward',e:'rose water syrup',c:'swt'},
  {w:"dibe2",t:'دبس',tr:"dibe2",e:'pomegranate/grape molasses',c:'swt'},
  {w:'mrabba',t:'مربى',tr:'mrabba',e:'jam / fruit preserve',c:'swt'},
  {w:'nammura',t:'نمورة',tr:'nammura',e:'semolina cake in syrup',c:'swt'},
];

const SWT_DRILLS = [
  {q:'She wants knafeh.',a:'هي بدها كنافة.',ar:'hiye badda knafeh.',correct:0,
   opts:['هي بدها كنافة.','هي بدها بوظة.','هي بدها مهلبية.','هي بدها معمول.']},
  {q:'The sweets shop is open.',a:'الحلاويات مفتوحة.',ar:"l-halawiyyat maft7a.",correct:0,
   opts:['الحلاويات مفتوحة.','الدكان مفتوح.','المحل مفتوح.','المطعم مفتوح.']},
  {q:'Add honey and pistachios.',a:'حط عسل وفستق.',ar:"7oTT 3asal w fistuk.",correct:0,
   opts:['حط عسل وفستق.','حط دبس وسمسم.','حط قشطة وعسل.','حط مزهر وفستق.']},
  {q:'How much is the baklava?',a:'بقديه البقلاوة؟',ar:'2adde2sh l-baklawa?',correct:0,
   opts:['بقديه البقلاوة؟','شو في البقلاوة؟','رح تاكل بقلاوة؟','كيف البقلاوة؟']},
  {q:'The ice cream is stretchy!',a:'البوظة مطاطة!',ar:'l-boza maTaTa!',correct:0,
   opts:['البوظة مطاطة!','البوظة حلوة!','البوظة بارده!','البوظة زاكية!']},
  {q:'Ma3moul is for Eid.',a:'المعمول للعيد.',ar:"l-ma3moul lal-3id.",correct:0,
   opts:['المعمول للعيد.','المعمول لرمضان.','المعمول للصبح.','المعمول للعشا.']},
  {q:'Put cream on the knafeh.',a:'حط قشطة عالكنافة.',ar:"7oTT 2eshta 3al-knafeh.",correct:0,
   opts:['حط قشطة عالكنافة.','حط عسل عالكنافة.','حط مزهر عالكنافة.','حط دبس عالكنافة.']},
  {q:'Qatayef are only in Ramadan.',a:'القطايف بس في رمضان.',ar:"l-2atayef bas fi rmaDan.",correct:0,
   opts:['القطايف بس في رمضان.','القطايف كل يوم.','القطايف للعيد.','القطايف بالصبح.']},
];

const SWT_TIPS = [
  {title:'Knafeh Capital',body:"Nablus is famous for knafeh but Lebanese halawiyyat have their own style — thinner pastry, more mazaher (orange blossom water), often topped with 2eshta."},
  {title:'Qatayef Season',body:"Qatayef only appear during Ramadan. Ask for them any other time and you'll hear: 'bass fi rmaDan!' (only in Ramadan!)"},
  {title:'Ordering Sweets',body:"Use 'a3Tini' (give me): 'a3Tini nimmrit knafeh kbire' = give me a large piece of knafeh. Most sweets are sold by weight (bi-l-kilo) or per piece (bi-l-7abbit)."},
  {title:'3asal vs Dibe2',body:"3asal = bee honey. Dibe2 is pomegranate or grape molasses — a Lebanese pantry staple drizzled over labneh, yogurt, or ice cream."},
];
