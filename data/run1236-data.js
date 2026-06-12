// R1236 — NEW FEATURE: Lebanese Orchard & Mountain Fruit Harvest (orc)

const ORC_WORDS = [
  // fruits
  {ar:'تفاح',      tr:'tuffaa7',    en:'apple',           cat:'fruits'},
  {ar:'إجاص',      tr:'ijaaSS',     en:'pear',            cat:'fruits'},
  {ar:'مشمش',      tr:'mishmish',   en:'apricot',         cat:'fruits'},
  {ar:'خوخ',       tr:'khawkh',     en:'peach',           cat:'fruits'},
  {ar:'كرز',       tr:'karaz',      en:'cherry',          cat:'fruits'},
  {ar:'توت',       tr:'toot',       en:'mulberry',        cat:'fruits'},
  {ar:'عنب',       tr:'3enab',      en:'grapes',          cat:'fruits'},
  {ar:'برقوق',     tr:'bar2oo2',    en:'plum',            cat:'fruits'},
  // orchard vocabulary
  {ar:'بستان',     tr:'bustaan',    en:'orchard/garden',  cat:'orchard'},
  {ar:'قطاف',      tr:'2aTaaf',     en:'harvest/picking', cat:'orchard'},
  {ar:'قطف',       tr:'2aTaf',      en:'to pick (fruit)', cat:'orchard'},
  {ar:'غصن',       tr:'ghaSn',      en:'branch',          cat:'orchard'},
  {ar:'شجرة فاكهة',tr:'shajrit faake', en:'fruit tree',   cat:'orchard'},
  {ar:'سلة',       tr:'salle',      en:'basket',          cat:'orchard'},
  {ar:'نضيج',      tr:'nadiij',     en:'ripe',            cat:'orchard'},
  // mountain / seasonal context
  {ar:'صيفية',     tr:'Sayfiyye',   en:'summer resort/season', cat:'context'},
  {ar:'موسم',      tr:'mawsem',     en:'season',          cat:'context'},
  {ar:'مزارع',     tr:'mzaare3',    en:'farms/farmer',    cat:'context'},
  {ar:'جبل',       tr:'jabal',      en:'mountain',        cat:'context'},
  {ar:'هوا الجبل', tr:'hawa l-jabal', en:'mountain air',  cat:'context'},
];

const ORC_DRILLS = [
  {q:'What does تفاح mean?',              opts:['pear','apple','apricot','peach'],         ans:1},
  {q:'Lebanese word for "apricot"?',      opts:['كرز','توت','مشمش','خوخ'],                ans:2},
  {q:'What does قطاف mean?',              opts:['basket','orchard','harvest/picking','branch'], ans:2},
  {q:'Lebanese word for "ripe"?',         opts:['نضيج','موسم','غصن','سلة'],               ans:0},
  {q:'What does توت mean?',               opts:['cherry','plum','grapes','mulberry'],       ans:3},
  {q:'Lebanese word for "to pick fruit"?',opts:['نضج','قطف','موسم','بستان'],               ans:1},
  {q:'What does بستان mean?',             opts:['branch','basket','season','orchard/garden'], ans:3},
  {q:'Lebanese word for "cherry"?',       opts:['عنب','برقوق','كرز','إجاص'],              ans:2},
];

const ORC_TIPS = [
  {title:'Apple capital: Deir el-Ahmar & Shouf',   body:'Lebanon\'s mountain villages — particularly in the Bekaa\'s Deir el-Ahmar and the Shouf district — produce apples, pears, and cherries sold across the Arab world. Come late summer, the roads fill with trucks stacked high with 2aTaaf (harvest crates). Locals say the tuffaa7 (apple) from 3aytooni or Bsharre tastes different from anywhere on earth.'},
  {title:'Mulberry توت & the silk connection',      body:'The toot (mulberry) tree is inseparable from Lebanese mountain history. Its leaves fed silkworms that powered the 19th-century silk industry. Today, mulberry season (early summer) brings children to hillside trees to stain their hands purple — and toot juice (3aSiir toot) remains a beloved summer drink in mountain villages.'},
  {title:'Sayfiyye صيفية — summer mountain culture', body:'The Lebanese tradition of Sayfiyye (spending summer in the mountains) brings city families to their villages during 2aTaaf season. Apricots (mishmish) are dried on rooftops for winter moone, cherries are made into 7alawiyyaat, and the whole extended family participates in the harvest — mixing work with reunion.'},
  {title:'Hawa l-jabal هوا الجبل',                  body:'Mountain air — hawa l-jabal — is more than just fresh air in Lebanese culture. It\'s the cure for everything, the reason to drive up in summer, and what nostalgic emigrants miss most. The scent of ripe karaz (cherries) or khawkh (peaches) in the mountain breeze is one of the most potent memory triggers for Lebanese diaspora worldwide.'},
];
