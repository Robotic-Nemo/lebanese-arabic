// R1212 — NEW FEATURE: Lebanese Wild Herb Picking (Za3tar & Mountain Herbs) coach
const ZTR_WORDS = [
  {ar:'زعتر بري',tr:'za3tar barri',en:'wild thyme',cat:'herb'},
  {ar:'عكوب',tr:'3ikkoub',en:'wild gundelia (thorny plant)',cat:'herb'},
  {ar:'خبيزة',tr:'khobbeyze',en:'wild mallow',cat:'herb'},
  {ar:'حميضة',tr:'7ammiDa',en:'wood sorrel / wild oxalis',cat:'herb'},
  {ar:'لوف',tr:'loof',en:'wild arum / dragon lily',cat:'herb'},
  {ar:'نعنع بري',tr:'na3na3 barri',en:'wild mint',cat:'herb'},
  {ar:'مرمية',tr:'marmiyye',en:'sage',cat:'herb'},
  {ar:'ميرمية',tr:'meyramiyye',en:'marjoram',cat:'herb'},
  {ar:'قلقاس',tr:'qal2aas',en:'taro / wild colocasia',cat:'herb'},
  {ar:'سحلب',tr:'sa7lab',en:'wild orchid root (for hot drink)',cat:'herb'},
  {ar:'قطف',tr:'2aTaf',en:'to pick / to harvest (herbs)',cat:'action'},
  {ar:'شبّاك',tr:'shabbaaK',en:'wicker basket (for gathering)',cat:'item'},
  {ar:'منجل',tr:'manjal',en:'sickle / small hand blade',cat:'item'},
  {ar:'مشوار',tr:'mishouwar',en:'trip / outing (to pick herbs)',cat:'action'},
  {ar:'جبل',tr:'jabal',en:'mountain',cat:'place'},
  {ar:'وادي',tr:'waadi',en:'valley',cat:'place'},
  {ar:'صخرة',tr:'Sakhra',en:'rock / boulder',cat:'place'},
  {ar:'طلّ',tr:'Till',en:'morning dew',cat:'nature'},
  {ar:'موسم',tr:'mawsim',en:'season',cat:'time'},
  {ar:'بكير',tr:'bkeer',en:'early (in the morning)',cat:'time'},
];

const ZTR_DRILLS = [
  {q:'What is "3ikkoub" in Lebanese wild foraging?',opts:['wild mint','wild gundelia (thorny edible plant)','wild mallow','wild thyme'],ans:1,exp:'عكوب = a thorny plant whose hearts are eaten — considered a delicacy in Lebanese village cooking.'},
  {q:'What does "2aTaf" mean?',opts:['to plant','to water','to pick / harvest','to dry'],ans:2,exp:'قطف = to pick or harvest — the key verb for gathering wild herbs, fruit, and olives in Lebanese.'},
  {q:'What is "khobbeyze"?',opts:['wild sorrel','wild mallow','wild thyme','sage'],ans:1,exp:'خبيزة = wild mallow — eaten sautéed with onions, a popular village dish from freshly picked leaves.'},
  {q:'Which item is a "shabbaaK" in herb-picking culture?',opts:['sickle blade','wicker basket','cotton bag','wooden bowl'],ans:1,exp:'شبّاك = a wicker basket used to carry gathered herbs — lets air flow to keep plants fresh.'},
  {q:'What does "bkeer" mean?',opts:['late evening','midday','very early (morning)','sunset'],ans:2,exp:'بكير = early — you must go bkeer before the sun dries the dew off the herbs (and before others beat you to the good spots).'},
  {q:'What is "sa7lab"?',opts:['wild orchid root used in hot drink','type of mountain grass','dried sage tea','wild mushroom'],ans:0,exp:'سحلب = ground orchid root — used to make the thick hot drink sa7lab, especially in winter mountain villages.'},
  {q:'What does "marmiyye" mean?',opts:['marjoram','sage','thyme','mint'],ans:1,exp:'مرمية = sage — distinct from meyramiyye (marjoram); both are common in Lebanese mountain herb gathering.'},
  {q:'Which word means "morning dew"?',opts:['mawsim','Sakhra','Till','waadi'],ans:2,exp:'طلّ = morning dew — herb pickers prize the dew-covered early morning when wild herbs are freshest and most aromatic.'},
];

const ZTR_TIPS = [
  {title:'Wild Herb Picking Tradition',body:'Picking wild herbs (2aTef 3ala l-jabal) is a beloved Lebanese village ritual, especially in spring. Families wake bkeer and head to the mountains with shabbaaK baskets and sometimes a manjal. 3ikkoub, khobbeyze, and za3tar barri are the most prized finds.'},
  {title:'Za3tar Barri vs Za3tar Mix',body:'Za3tar barri (wild thyme picked fresh) is different from the za3tar blend (mixed with sumaq, sesame, olive oil) spread on man2oushah. The fresh wild za3tar is used in salads and cooked dishes — picking it yourself is a badge of village pride.'},
  {title:'Edible Wilds in Lebanese Cooking',body:'Khobbeyze (mallow) is sautéed with onions and lemon. 3ikkoub hearts are boiled and eaten with olive oil. Loof is cooked into a stuffed dish. These foraged plants are free, hyper-local, and deeply embedded in Lebanese grandmothers\' seasonal cooking.'},
  {title:'Sa7lab & Winter Warmth',body:'Sa7lab (سحلب) is made from dried and powdered wild orchid root mixed with hot milk, sugar, and cinnamon. You\'ll find it at mountain cafés in winter. The roots are harvested from wild orchids in spring — a sustainable tradition increasingly threatened by over-picking.'},
];
