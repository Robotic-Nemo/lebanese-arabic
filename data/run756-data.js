// R756 — NEW FEATURE: Lebanese Mouneh & Preserved Foods (mnh)

const MNH_CATS = ['pantry','dairy','pickles','phrases'];

const MNH_WORDS = [
  // pantry
  {tr:'mouneh',           en:'pantry / preserved food stores', ar:'مونة',           cat:'pantry'},
  {tr:'za3tar',           en:'za\'atar (thyme herb mix)',       ar:'زعتر',           cat:'pantry'},
  {tr:'zeit zaytoune',    en:'olive oil',                       ar:'زيت زيتون',      cat:'pantry'},
  {tr:'2awwarme',         en:'preserved minced lamb (fat)',     ar:'قوارمة',         cat:'pantry'},
  {tr:'kishk',            en:'kishk (fermented bulgur+yogurt)', ar:'كشك',            cat:'pantry'},
  {tr:'rozz m3ammar',     en:'stuffed rice dish',               ar:'رز معمّر',       cat:'pantry'},
  {tr:'she3riyye',        en:'vermicelli noodles',              ar:'شعيرية',         cat:'pantry'},
  {tr:'3adas',            en:'lentils',                         ar:'عدس',            cat:'pantry'},
  // dairy
  {tr:'labneh',           en:'strained yogurt cheese',          ar:'لبنة',           cat:'dairy'},
  {tr:'jebneh balade',    en:'local white cheese',              ar:'جبنة بلدية',     cat:'dairy'},
  {tr:'keshk l-7alib',    en:'dried yogurt powder',             ar:'كشك الحليب',     cat:'dairy'},
  {tr:'2ashta',           en:'clotted cream / ashta',           ar:'قشطة',           cat:'dairy'},
  {tr:'7alib',            en:'milk',                            ar:'حليب',           cat:'dairy'},
  {tr:'zbed',             en:'butter (local style)',             ar:'زبدة',           cat:'dairy'},
  // pickles
  {tr:'makdous',          en:'stuffed pickled eggplant',        ar:'مكدوس',          cat:'pickles'},
  {tr:'kabees',           en:'pickles / pickled vegetables',    ar:'كبيس',           cat:'pickles'},
  {tr:'zeit w-za3tar',    en:'olive oil & za\'atar dip',         ar:'زيت وزعتر',      cat:'pickles'},
  {tr:'khall',            en:'vinegar',                         ar:'خل',             cat:'pickles'},
  {tr:'limon ma7fous',    en:'preserved lemons',                ar:'ليمون محفوظ',    cat:'pickles'},
  {tr:'toom',             en:'garlic',                          ar:'توم',            cat:'pickles'},
  {tr:'fil-fil',          en:'hot pepper',                      ar:'فلفل',           cat:'pickles'},
  {tr:'zeit 3al kabees',  en:'olive oil on pickles',             ar:'زيت على الكبيس', cat:'pickles'},
  // phrases
  {tr:'msawwit l-mouneh', en:'stocking up the pantry',          ar:'مصوّت المونة',   cat:'phrases'},
  {tr:'jebneh balade 7adir', en:'local cheese on hand',         ar:'جبنة بلدية حاضر', cat:'phrases'},
  {tr:'3anna mouneh lal-shiti', en:'we have stores for winter', ar:'عنا مونة للشتي', cat:'phrases'},
  {tr:'za3tar 3a l-2ej', en:'za\'atar on bread (breakfast)',    ar:'زعتر عالأج',     cat:'phrases'},
  {tr:'ma fi makdous ahla men hayda', en:'no pickled eggplant better than this', ar:'ما في مكدوس أحلى من هيدا', cat:'phrases'},
  {tr:'labneh b-zeit',    en:'labneh drizzled with olive oil',  ar:'لبنة بزيت',      cat:'phrases'},
];

const MNH_DRILLS = [
  {q:'What is "mouneh"?', opts:['pantry / preserved food stores','fresh vegetables','kitchen tools','cooking spices'], ans:0},
  {q:'"makdous" refers to?', opts:['stuffed pickled eggplant','pickled turnips','marinated olives','stuffed grape leaves'], ans:0},
  {q:'How do you say "za\'atar"?', opts:['za3tar','kishk','2awwarme','mouneh'], ans:0},
  {q:'"labneh" is?', opts:['strained yogurt cheese','fresh milk','clotted cream','white butter'], ans:0},
  {q:'What is "kishk"?', opts:['fermented bulgur+yogurt','dried herbs','preserved meat','pickled garlic'], ans:0},
  {q:'How do you say "olive oil"?', opts:['zeit zaytoune','khall','limon ma7fous','zeit w-za3tar'], ans:0},
  {q:'"2awwarme" means?', opts:['preserved minced lamb','pickled vegetables','dried yogurt','fermented cheese'], ans:0},
  {q:'How do you say "pickles"?', opts:['kabees','makdous','kishk','labneh'], ans:0},
  {q:'"2ashta" refers to?', opts:['clotted cream / ashta','strained yogurt','dried milk','fresh butter'], ans:0},
  {q:'How do you say "vinegar"?', opts:['khall','zeit','limon','toom'], ans:0},
  {q:'"jebneh balade" means?', opts:['local white cheese','imported cheese','cream cheese','processed cheese'], ans:0},
  {q:'What is "toom" in mouneh context?', opts:['garlic','pepper','lemon','vinegar'], ans:0},
  {q:'"labneh b-zeit" means?', opts:['labneh drizzled with olive oil','labneh with bread','labneh with herbs','labneh with za\'atar'], ans:0},
  {q:'How do you say "we have stores for winter"?', opts:['3anna mouneh lal-shiti','msawwit l-mouneh','za3tar 3a l-2ej','zeit 3al kabees'], ans:0},
  {q:'"za3tar 3a l-2ej" means?', opts:['za\'atar on bread (breakfast)','za\'atar in oil','za\'atar with cheese','za\'atar tea'], ans:0},
];

const MNH_TIPS = [
  {title:'What is Mouneh? The Lebanese Pantry Tradition', body:'Mouneh (المونة) is the Lebanese tradition of stocking the pantry with preserved, fermented, and cured foods before winter. Every Lebanese household — particularly in the mountains — maintains a mouneh: jars of makdous (pickled stuffed eggplant), kishk, kabees, olive oil, za\'atar, dried legumes, and 2awwarme (preserved lamb). The word comes from Arabic for "provisions" or "stores." A well-stocked mouneh is a source of pride. "3anna mouneh lal-shiti" (we have stores for winter) signals a household that is prepared, self-sufficient, and rooted in the land.'},
  {title:'Makdous: The Crown Jewel of Mouneh', body:'Makdous (مكدوس) — baby eggplants stuffed with walnuts, garlic, and red pepper, then cured in olive oil — is the most celebrated of all Lebanese mouneh. The preparation is a late-summer ritual: boil the tiny eggplants, dry them, stuff them by hand, pack them tight in jars, cover with olive oil. They cure for weeks. The result is intensely savory, slightly sour, and deeply satisfying on morning bread with labneh. Lebanese families compare their makdous recipes across generations. No two taste the same.'},
  {title:'Za\'atar: Lebanon\'s Signature Herb Blend', body:'Za\'atar (زعتر) in Lebanon refers to both the wild thyme plant and a blended condiment: ground dried thyme, sumac, sesame, salt, olive oil. "Za3tar 3a l-2ej" (za\'atar on bread) — flat bread dipped in olive oil then za\'atar — is the quintessential Lebanese breakfast. Za\'atar is believed to sharpen memory (parents give it to children before exams), protect health, and connect people to the Lebanese mountain landscape. Wild za\'atar is harvested in spring; the mix is dried and blended by each family according to their own ratio.'},
  {title:'Kishk: Ancient Fermented Food', body:'Kishk (كشك) is one of Lebanon\'s oldest preserved foods: bulgur wheat and milk fermented together, then dried into a powder. It\'s dissolved in water and cooked into a porridge or used as a sauce base. Kishk soup with garlic, onion, and tomatoes is a winter mountain staple — warming, sour, intensely nutritious. The fermentation process takes days; the drying process takes more. Making kishk is a communal labor — women spread it on flat trays on rooftops, turn it hourly, and guard it from rain. Industrial kishk exists but is considered inferior.'},
  {title:'Labneh: Everyday Luxury', body:'Labneh (لبنة) — yogurt strained through cloth until thickened to spreadable cheese — is the everyday Lebanese staple. Drizzled with olive oil, scattered with za\'atar and olives, it anchors every mouneh breakfast. Labneh preserves well: rolled into balls and stored in olive oil, it lasts months, deepening in tang. "Labneh b-zeit" (labneh with olive oil) is both a dish and a cultural touchstone. The quality of the yogurt — ideally from local goat or cow milk — determines the labneh. Lebanese in the diaspora cite labneh among the things they miss most.'},
  {title:'The Mouneh Season: Summer to Fall', body:'Lebanese mouneh season follows the agricultural calendar. Late summer: makdous and kabees are prepared; tomatoes and peppers are dried or pickled; olive oil is pressed. Fall: za\'atar is dried and blended; kishk is fermented; 2awwarme (preserved lamb fat) is rendered from slaughtered animals. "Msawwit l-mouneh" (stocking up the pantry) is a specific activity — the family gathers, kilos of produce are processed over multiple days. The mouneh ties Lebanese to the land, the seasons, and the mountain village tradition even as most live in cities. It is edible memory.'},
];
