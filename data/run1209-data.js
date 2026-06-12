// R1209 — NEW FEATURE: Lebanese Fig & Summer Harvest Culture (tyn)

const TYN_WORDS = [
  {ar:'تين', tr:'tien', en:'fig'},
  {ar:'شجر التين', tr:'shajer el-tien', en:'fig tree'},
  {ar:'مربى التين', tr:'morabba el-tien', en:'fig jam / preserve'},
  {ar:'تين يابس', tr:'tien yabis', en:'dried figs'},
  {ar:'تين مجلل', tr:'tien mjalil', en:'smoked / sun-dried figs'},
  {ar:'قطاف', tr:'2aTaf', en:'fruit picking / harvest'},
  {ar:'موسم التين', tr:'mawsem el-tien', en:'fig season'},
  {ar:'حصاد', tr:'7aSad', en:'harvest'},
  {ar:'عنب', tr:'3enab', en:'grapes'},
  {ar:'توت', tr:'toot', en:'mulberry / berries'},
  {ar:'مشمش', tr:'mshmish', en:'apricot'},
  {ar:'رب الرمان', tr:'rob el-rummaan', en:'pomegranate molasses'},
  {ar:'صندوق خشب', tr:'Sanoo2 khashab', en:'wooden fruit crate'},
  {ar:'حصرم', tr:'7aSram', en:'unripe sour grapes'},
  {ar:'كرمة', tr:'karmeh', en:'grapevine'},
  {ar:'بلح', tr:'bala7', en:'dates'},
  {ar:'إجاص', tr:'2ijjaS', en:'pear'},
  {ar:'ليمون', tr:'laymoun', en:'lemon'},
  {ar:'تفاح', tr:'teffa7', en:'apple'},
  {ar:'دبس التين', tr:'dibs el-tien', en:'fig molasses / fig syrup'},
];

const TYN_DRILLS = [
  {q:'"Tien" means:', opts:['apple','grape','fig','mulberry'], a:2},
  {q:'"Mawsem el-tien" refers to:', opts:['olive season','fig harvest season','grape picking time','lemon season'], a:1},
  {q:'"Morabba el-tien" is:', opts:['dried figs','smoked figs','fig jam / preserve','fig molasses'], a:2},
  {q:'"7aSram" are:', opts:['ripe figs','dried grapes','unripe sour grapes','mulberries'], a:2},
  {q:'"Karmeh" means:', opts:['fig tree','mulberry bush','apple tree','grapevine'], a:3},
  {q:'"2aTaf" means:', opts:['to sell fruit','to dry fruit','to store food','fruit picking / harvesting'], a:3},
  {q:'"Toot" in Lebanon most often refers to:', opts:['figs','plums','mulberries','apricots'], a:2},
  {q:'"Rob el-rummaan" is:', opts:['grape juice','fig preserve','pomegranate molasses','lemon syrup'], a:2},
];

const TYN_TIPS = [
  {title:'The Lebanese Fig Tree', body:'Figs (tien) grow across Lebanese villages from coast to mountain. Families often have a "shajer el-tien el-kabir" — the big fig tree — in the yard, a gathering spot where elders sit and children play in summer.'},
  {title:'Village Harvest Rituals', body:'"2aTaf el-tien" (fig picking) is communal in Lebanese mountain villages, typically late August. Figs are eaten fresh, dried on straw mats in the sun, smoked for "tien mjalil", or cooked into "morabba" for winter.'},
  {title:'Toot & the Silk Legacy', body:'Lebanon\'s mulberry trees (toot) once fueled a thriving silk industry. The Chouf mountains were famous for silk production — many old stone houses still have ruins of silk workshops (khayyatiye), relics of a pre-war craft.'},
  {title:'7aSram in Daily Speech', body:'"7aSram" (unripe sour grapes) appears in everyday Lebanese: "3enab w 7aSram" describes something with mixed results. Unripe grapes are also pickled as part of mouneh — the Lebanese tradition of home-preserved foods.'},
];
