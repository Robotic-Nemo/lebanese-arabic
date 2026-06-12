// R1482 — NEW FEATURE: Lebanese Dibs & Traditional Molasses Culture (dbs) — 20 words, 8 drills, 4 tips
const DBS_WORDS = [
  {w:'dibs',t:'دبس',tr:'dibs',e:'molasses (grape or carob)',c:'dbs'},
  {w:'dibs kharrub',t:'دبس خرّوب',tr:'dibs kharrub',e:'carob molasses',c:'dbs'},
  {w:'dibs 3enab',t:'دبس عنب',tr:'dibs 3enab',e:'grape molasses',c:'dbs'},
  {w:'kharrub',t:'خرّوب',tr:'kharrub',e:'carob (tree/pod)',c:'dbs'},
  {w:'3enab',t:'عنب',tr:'3enab',e:'grapes',c:'dbs'},
  {w:'tahini',t:'طحينة',tr:'tahini',e:'sesame paste',c:'dbs'},
  {w:'dibs w tahini',t:'دبس وطحينة',tr:'dibs w tahini',e:'molasses with tahini (classic combo)',c:'dbs'},
  {w:'mouneh',t:'مونة',tr:'mouneh',e:'home food preserves',c:'dbs'},
  {w:'mrabbeh',t:'مربى',tr:'mrabbeh',e:'jam / preserve',c:'dbs'},
  {w:'tin',t:'تين',tr:'tin',e:'fig',c:'dbs'},
  {w:'mis7mish',t:'مشمش',tr:'mis7mish',e:'apricot',c:'dbs'},
  {w:'summer',t:'سمر',tr:'summer',e:'to cook down / reduce (a syrup)',c:'dbs'},
  {w:'2al-7ebb',t:'الحب',tr:"2al-7ebb",e:'the grain / seed',c:'dbs'},
  {w:'mat7an',t:'مطحن',tr:'mat7an',e:'grinder / mill',c:'dbs'},
  {w:'ma3sra',t:'معصرة',tr:"ma3sra",e:'press (olive/grape press)',c:'dbs'},
  {w:'zeit zeit',t:'زيت زيت',tr:'ziet ziet',e:'pure olive oil (said twice for emphasis)',c:'dbs'},
  {w:'jarra',t:'جرّة',tr:'jarra',e:'clay jar / storage jug',c:'dbs'},
  {w:'7alaweh',t:'حلاوة',tr:"7alaweh",e:'sweetness / confection',c:'dbs'},
  {w:'3asir',t:'عصير',tr:"3asir",e:'juice / pressed liquid',c:'dbs'},
  {w:'mawsem',t:'موسم',tr:'mawsem',e:'season / harvest time',c:'dbs'},
];

const DBS_DRILLS = [
  {q:'I want bread with molasses and tahini.',a:'بدي خبز بدبس وطحينة.',ar:"biddi khobez b-dibs w-tahini.",correct:0,
   opts:['بدي خبز بدبس وطحينة.','بدي خبز بمربى.','بدي خبز بزيت.','بدي خبز بعسل.']},
  {q:'The carob molasses is from the village.',a:'دبس الخرّوب من الضيعة.',ar:"dibs l-kharrub min l-dayye3.",correct:0,
   opts:['دبس الخرّوب من الضيعة.','دبس العنب من الضيعة.','الطحينة من الضيعة.','المربى من الضيعة.']},
  {q:'Harvest season has arrived.',a:'وصل موسم القطاف.',ar:"wisel mawsem l-qtaf.",correct:0,
   opts:['وصل موسم القطاف.','وصل موسم المطر.','وصل موسم الصيف.','وصل موسم الشتاء.']},
  {q:'My grandmother makes preserves every year.',a:'تيتا تعمل مونة كل سنة.',ar:"teta ta3mel mouneh kell sine.",correct:0,
   opts:['تيتا تعمل مونة كل سنة.','تيتا تعمل مربى كل سنة.','تيتا تعمل دبس كل سنة.','تيتا تطبخ كل سنة.']},
  {q:'The clay jar is full of olive oil.',a:'الجرة مليانة زيت.',ar:"l-jarra melyane ziet.",correct:0,
   opts:['الجرة مليانة زيت.','الجرة مليانة دبس.','الجرة مليانة مربى.','الجرة مليانة عسل.']},
  {q:'Figs are sweet this year.',a:'التين حلو هالسنة.',ar:"l-tin 7elo ha-s-sine.",correct:0,
   opts:['التين حلو هالسنة.','العنب حلو هالسنة.','المشمش حلو هالسنة.','الخرّوب حلو هالسنة.']},
  {q:'They pressed the grapes in the press.',a:'عصروا العنب بالمعصرة.',ar:"3asaro l-3enab bil-ma3sra.",correct:0,
   opts:['عصروا العنب بالمعصرة.','طحنوا الحبوب بالمطحن.','جمعوا التين بالجرة.','حطوا الدبس بالطحينة.']},
  {q:'This sweetness is from my grandmother\'s recipe.',a:'هالحلاوة من وصفة تيتا.',ar:"ha-l-7alaweh min wasfit teta.",correct:0,
   opts:['هالحلاوة من وصفة تيتا.','هالمربى من وصفة تيتا.','هالدبس من وصفة تيتا.','هالطحينة من وصفة تيتا.']},
];

const DBS_TIPS = [
  {title:'Dibs w Tahini',body:"The ultimate Lebanese breakfast or snack: smear a flat bread with tahini (sesame paste), drizzle dark carob molasses (dibs kharrub) over it, fold and eat. Some prefer grape molasses (dibs 3enab), which is sweeter. Every teta has her preferred ratio."},
  {title:'Carob vs. Grape Molasses',body:"Dibs kharrub (carob) is earthy, dark, and slightly bitter — used in savory dishes and said to be healthy. Dibs 3enab (grape) is sweeter, lighter in color, used more in desserts. Both come from village mouneh production in mountain regions, pressed and slow-cooked in copper pots (tanjra nhas)."},
  {title:'Mouneh Season',body:"Late summer and early autumn (mawsem) is when Lebanese families — especially from villages — preserve everything: mrabbeh (jams), dibs, zeit (olive oil), mkhalal (pickles). The ma3sra (press) is the heart of this process. If your teta says 'y2alle3 3aynik' for touching the mouneh before it's ready, obey her."},
  {title:'The Jarra & Storage',body:"Clay jarras (jars) are traditional storage vessels for olive oil, mouneh, and dibs. Modern families use glass jars, but older village houses still have cool stone storage rooms (khazneh or ma7zen) lined with jarras. Buying dibs from a village is a badge of honor — never buy the industrial stuff if you can help it."},
];
