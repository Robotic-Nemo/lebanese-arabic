const TRZ_WORDS = [
  { ar:'فخار', tr:'fakhkhar', en:'pottery / ceramic ware', hint:'Fakhkhar from Rashaya el-Fokhar dates to 4000 years' },
  { ar:'طين', tr:'tin', en:'clay / mud', hint:'Tin from Bekaa valley used in Rashaya pottery' },
  { ar:'فرن الفخار', tr:'forn el-fakhkhar', en:'pottery kiln', hint:'Traditional wood-fired kilns still used in Rashaya' },
  { ar:'جرة', tr:'jarre', en:'clay jar / jug', hint:'Jarret zeit — the classic Lebanese olive oil storage jar' },
  { ar:'زير', tr:'zeer', en:'large clay water jug', hint:'Zeer keeps water cool through evaporation — no fridge needed' },
  { ar:'قلة', tr:'2alle', en:'small clay water pitcher', hint:'2alle water tastes different — clay filters and cools it' },
  { ar:'صانع الفخار', tr:'sane3 el-fakhkhar', en:'potter / ceramicist', hint:'Families in Rashaya el-Fokhar passed craft for generations' },
  { ar:'دولاب الفخار', tr:'dolab el-fakhkhar', en:'pottery wheel', hint:'Traditional kick-wheel still used by village potters' },
  { ar:'خزف', tr:'khazaf', en:'glazed ceramics / porcelain', hint:'Khazaf from Beit Chabab known for blue-and-white glaze' },
  { ar:'رشيا الفخار', tr:'rashaya el-fakhkhar', en:'Rashaya el-Fokhar village', hint:'Lebanon\'s pottery capital — entire village makes fakhkhar' },
  { ar:'بيت شباب', tr:'beit chabab', en:'Beit Chabab village', hint:'Beit Chabab = Lebanese ceramics hub since Ottoman era' },
  { ar:'تصوير', tr:'tasweer', en:'decorating / painting pottery', hint:'Hand-painted Lebanese motifs: cedar, olive, grape' },
  { ar:'طرابيش', tr:'tarabish', en:'clay flower pots', hint:'Tarabish for balcony gardens everywhere in Lebanon' },
  { ar:'إبريق', tr:'ibree2', en:'clay teapot / ewer', hint:'Ibree2 clay keeps herbal tea warm longer' },
  { ar:'صحن فخار', tr:'sa7n fakhkhar', en:'clay plate / earthenware dish', hint:'Sa7n fakhkhar used for traditional maqluba and kibbeh' },
  { ar:'تقليدي', tr:'ta2lidi', en:'traditional / artisanal', hint:'Ta2lidi crafts: UNESCO protects Lebanese artisan heritage' },
  { ar:'حرفة يدوية', tr:'7arfe yadawiyye', en:'handcraft / manual craft', hint:'7arfe yadawiyye fairs in Byblos celebrate artisans' },
  { ar:'معرض حرف', tr:'ma3rad 7araf', en:'crafts fair / artisan market', hint:'Biel Beirut hosts annual ma3rad 7araf every December' },
  { ar:'منتج محلي', tr:'mantej ma7alle', en:'local product / made in Lebanon', hint:'Mantej ma7alle movement boosted after 2020 crisis' },
  { ar:'تراث', tr:'trath', en:'heritage / tradition', hint:'Trath el-fakhkhar — Lebanese clay craft on Intangible Heritage list' }
];

const TRZ_DRILLS = [
  { q:'What is "fakhkhar"?', opts:['kiln','clay','pottery / ceramics','potter'], ans:2 },
  { q:'"Rashaya el-fakhkhar" is...?', opts:['a kiln type','Lebanon\'s pottery village','a glazing technique','a clay type'], ans:1 },
  { q:'What does "zeer" mean?', opts:['pottery wheel','clay plate','large clay water jug','kiln'], ans:2 },
  { q:'"Khazaf" means...?', opts:['raw clay','glazed ceramics','clay jar','pottery wheel'], ans:1 },
  { q:'What is "dolab el-fakhkhar"?', opts:['pottery kiln','clay dish','pottery wheel','clay water jug'], ans:2 },
  { q:'"2alle" is a...?', opts:['large clay jar','small clay water pitcher','decorating technique','crafts fair'], ans:1 },
  { q:'What does "trath" mean?', opts:['handcraft','local product','heritage / tradition','artisan'], ans:2 },
  { q:'"7arfe yadawiyye" means...?', opts:['pottery kiln','handcraft','clay plate','glazed ceramics'], ans:1 }
];

const TRZ_TIPS = [
  { title:'Rashaya el-Fokhar — Lebanon\'s Pottery Village', body:'The village of Rashaya el-Fokhar in the Bekaa has made pottery for over 4,000 years. Families pass the craft from generation to generation — the same gestures, the same clay, the same wood-fired kilns. Visitors watch potters throw on kick-wheels and buy jarres (oil jars), zeers (water jugs), and decorative pieces painted with cedar trees and vines.' },
  { title:'The Zeer — Lebanon\'s Natural Refrigerator', body:'Before electricity, every Lebanese household had a zeer — a large porous clay water jug that kept water cool through evaporation. The clay filters impurities and the water tastes noticeably different: softer, cooler, with an earthy mineral quality. Old-timers still insist water from a 2alle (small clay pitcher) tastes better than any plastic bottle.' },
  { title:'Beit Chabab — Glazed Ceramic Heritage', body:'Beit Chabab, a mountain village north of Beirut, specializes in khazaf — glazed ceramics with distinctive blue, turquoise, and white patterns. Ottoman-era motifs (arabesque, geometric tiles) mix with Lebanese symbols (cedar, olive branch, grape clusters). The craft boomed during the 19th century and artisan families still fire traditional ovens today.' },
  { title:'Made in Lebanon — Reviving Artisan Crafts', body:'The 2019 revolution and 2020 economic collapse made "mantej ma7alle" (local product) a cultural movement, not just a shopping choice. Lebanese consumers turned to local pottery, olive oil, honey, and textiles — partly from necessity, partly from pride. Craft fairs in Byblos and Beirut showcase potters, weavers, and soap-makers to international buyers, keeping 7araf yadawiyye (handcrafts) alive.' }
];
