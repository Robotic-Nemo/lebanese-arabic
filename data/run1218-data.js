// R1218 — NEW FEATURE: Lebanese Silk & Mulberry Heritage (hrr)
const HRR_WORDS = [
  {ar:'حرير',tr:'7areer',en:'silk',cat:'material'},
  {ar:'توت',tr:'toot',en:'mulberry (silkworm food)',cat:'plant'},
  {ar:'دود القز',tr:'dood l-2azz',en:'silkworm',cat:'creature'},
  {ar:'شرنقة',tr:'sharan2a',en:'cocoon',cat:'production'},
  {ar:'مغزل',tr:'mighzal',en:'spinning spindle',cat:'tool'},
  {ar:'نسّاج',tr:'nassaaj',en:'weaver',cat:'person'},
  {ar:'نول',tr:'nool',en:'loom (weaving frame)',cat:'tool'},
  {ar:'خيط حرير',tr:'khayT 7areer',en:'silk thread',cat:'material'},
  {ar:'المتن',tr:'l-matn',en:'the Metn (historic silk region)',cat:'place'},
  {ar:'دير القمر',tr:'deyr l-2amar',en:'Deir el Qamar (silk capital)',cat:'place'},
  {ar:'بيت الدين',tr:'beet-ddeen',en:'Beiteddine (silk trade center)',cat:'place'},
  {ar:'تاجر',tr:'taajir',en:'merchant / silk trader',cat:'person'},
  {ar:'مصنع',tr:'masna3',en:'factory / mill',cat:'place'},
  {ar:'مرحلة',tr:'mar7ale',en:'stage (of silk production)',cat:'process'},
  {ar:'قماش',tr:'2amaash',en:'fabric / cloth',cat:'material'},
  {ar:'غَزل',tr:'ghazal',en:'spinning (thread from cocoons)',cat:'process'},
  {ar:'قزاز',tr:'2azzaaz',en:'silk merchant (old term)',cat:'person'},
  {ar:'موسم التوت',tr:'mawsim l-toot',en:'mulberry season',cat:'time'},
  {ar:'فرنسيين',tr:'faransiyyeen',en:'the French (silk trade partners)',cat:'history'},
  {ar:'ليون',tr:'lyon',en:'Lyon, France (historic silk market)',cat:'place'},
];

const HRR_DRILLS = [
  {q:'What is "7areer"?',opts:['wool','silk','cotton','linen'],ans:1,exp:'حرير = silk — Lebanon was once the Arab world\'s leading silk producer. The word 7areer still evokes prestige and luxury in Lebanese dialect.'},
  {q:'What animal produces silk thread?',opts:['toot (mulberry)','nool (loom)','dood l-2azz (silkworm)','nassaaj (weaver)'],ans:2,exp:'دود القز = silkworm — the larvae of the Bombyx mori moth, fed exclusively on toot (mulberry) leaves, spin the 7areer thread inside their sharan2a (cocoon).'},
  {q:'What is "toot" in the silk industry?',opts:['loom','silk thread','mulberry (silkworm food)','cocoon'],ans:2,exp:'توت = mulberry — Lebanese mountain villages planted entire hillsides with toot trees. Silkworms eat only mulberry leaves; no toot, no 7areer.'},
  {q:'Which Lebanese region was the historic silk capital?',opts:['l-matn (the Metn)','deyr l-2amar (Deir el Qamar)','beet-ddeen (Beiteddine)','lyon (Lyon)'],ans:1,exp:'دير القمر = Deir el Qamar — a mountain town in the Shouf, it was Lebanon\'s silk capital in the 17th-19th centuries, a hub of trade with France.'},
  {q:'What does "nassaaj" mean?',opts:['silk merchant','weaver','spinner','cocoon collector'],ans:1,exp:'نسّاج = weaver — the craftsman who works the nool (loom) to turn raw 7areer thread into finished 2amaash (fabric). A skilled nassaaj was a respected artisan.'},
  {q:'What is "ghazal" in silk production?',opts:['weaving on a loom','dyeing the thread','spinning thread from cocoons','harvesting mulberry'],ans:2,exp:'غزل = spinning — the process of unwinding the silk filament from the sharan2a (cocoon) and spinning it into usable khayT 7areer (silk thread). Done at home by women in mountain villages.'},
  {q:'What city in France was the key export market for Lebanese silk?',opts:['Paris','Marseille','Lyon','Bordeaux'],ans:2,exp:'ليون = Lyon — the silk capital of France. Lebanese 7areer was shipped to Lyon for weaving into high-end textiles from the 17th century onward. The trade shaped Lebanese mountain prosperity.'},
  {q:'What is "mawsim l-toot"?',opts:['silk market day','mulberry harvest season','loom maintenance time','cocoon festival'],ans:1,exp:'موسم التوت = mulberry season — the spring harvest of toot leaves that kicked off the annual silk production cycle. Village life in the Lebanese mountains revolved around this seasonal rhythm.'},
];

const HRR_TIPS = [
  {title:'Lebanon\'s Silk Empire',body:'From the 17th to early 20th century, Lebanon was the Arab world\'s silk capital. The mountain villages of the Metn, Kesrwan, Shouf, and Koura were carpeted with mulberry trees. At its peak (1890s), silk exports accounted for over 80% of Lebanon\'s total export earnings. The industry employed hundreds of thousands — weavers, cocoon farmers, merchants, dye-workers.'},
  {title:'The French Connection',body:'Lebanese silk flowed directly to Lyon, France — the global center of luxury silk weaving. The Maronite community built deep trade ties with French merchants, and French Jesuit missionaries established schools partly funded by silk profits. The 1860 massacre and subsequent French intervention was partly rooted in protecting this lucrative Franco-Lebanese silk trade network.'},
  {title:'How a Village Made Silk',body:'Each spring, mountain families received dood l-2azz (silkworm eggs), raised them in flat trays on mulberry leaves, then harvested the sharan2a (cocoons) just before the moth emerged. The cocoons were boiled to loosen the filament, then spun on a mighzal (spindle) into silk thread, sent to nassaajeen (weavers) and merchants. The whole village participated.'},
  {title:'Decline and Legacy',body:'The industry collapsed after WWI — synthetic fabrics, the mulberry blight, and economic disruption ended Lebanon\'s silk era by the 1940s. Today the heritage lives in place names (Deir el Qamar, Beiteddine), in stone silk-merchants\' houses (khans), and in the word 7areer itself, still used to mean something smooth, precious, or fine. A few artisan weavers in Zouk and Byblos still produce hand-loomed Lebanese silk.'},
];
