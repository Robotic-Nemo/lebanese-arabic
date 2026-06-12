// R1248 — NEW FEATURE: Lebanese Lemon & Citrus Heritage (lmn)

const LMN_WORDS = [
  // fruit & tree
  {ar:'ليمون',         tr:'laymoon',         en:'lemon',                    cat:'fruit'},
  {ar:'برتقال',        tr:'burtu2aal',        en:'orange',                   cat:'fruit'},
  {ar:'يوسفي',         tr:'yuusafi',          en:'mandarin/tangerine',       cat:'fruit'},
  {ar:'كليمنتين',      tr:'klamentiin',       en:'clementine',               cat:'fruit'},
  {ar:'شجرة حمضيات',  tr:'shajrit 7amDiyyaat', en:'citrus tree',             cat:'fruit'},
  // cultivation
  {ar:'بستان',         tr:'bustaan',          en:'orchard/garden',           cat:'cultivation'},
  {ar:'تقليم',         tr:'ta2liim',          en:'pruning',                  cat:'cultivation'},
  {ar:'ري',            tr:'ray',              en:'irrigation',               cat:'cultivation'},
  {ar:'موسم',          tr:'mawsim',           en:'season/harvest time',      cat:'cultivation'},
  {ar:'قطاف',          tr:'2aTaaf',           en:'harvesting/picking',       cat:'cultivation'},
  // products
  {ar:'عصير ليمون',    tr:'3asir laymoon',    en:'lemonade/lemon juice',     cat:'products'},
  {ar:'مربى',          tr:'murabbaa',         en:'jam/marmalade',            cat:'products'},
  {ar:'قشر ليمون',     tr:'2ishr laymoon',    en:'lemon zest/peel',          cat:'products'},
  {ar:'ليمون مكبس',    tr:'laymoon mkabbes',  en:'preserved lemon',          cat:'products'},
  {ar:'زهر الليمون',   tr:'zahra l-laymoon',  en:'lemon blossom',            cat:'products'},
  // South Lebanon
  {ar:'جنوب',          tr:'jnuub',            en:'the South (Lebanon)',      cat:'places'},
  {ar:'صور',           tr:'Suur',             en:'Tyre (city)',              cat:'places'},
  {ar:'النبطية',       tr:'n-nabaTeeyye',     en:'Nabatiyeh',               cat:'places'},
  {ar:'مزارع',         tr:'mazaari3',         en:'farms/orchards',           cat:'places'},
  {ar:'حقل',           tr:'7a2l',             en:'field/grove',              cat:'places'},
];

const LMN_DRILLS = [
  {q:'What does laymoon mean?',               opts:['orange','lemon','mandarin','lime'],              ans:1},
  {q:'Lebanese word for "orchard"?',          opts:['مزارع','بستان','حقل','موسم'],                   ans:1},
  {q:'What does 2aTaaf mean?',               opts:['pruning','irrigation','harvesting','planting'],   ans:2},
  {q:'What is zahra l-laymoon?',             opts:['lemon jam','lemon zest','lemon blossom','lemon juice'], ans:2},
  {q:'Lebanese word for "mandarin"?',         opts:['برتقال','ليمون','يوسفي','كليمنتين'],             ans:2},
  {q:'What does murabbaa mean?',             opts:['preserved lemon','marmalade/jam','lemon zest','blossom'], ans:1},
  {q:'Lebanese city famous for citrus — Tyre?', opts:['جنوب','النبطية','صور','مزارع'],              ans:2},
  {q:'What does mawsim mean?',               opts:['field','pruning','irrigation','season/harvest time'], ans:3},
];

const LMN_TIPS = [
  {title:'Citrus capital of Lebanon',         body:'South Lebanon — particularly the plains around Tyre (Suur) and the Nabatiyeh region — is Lebanon\'s citrus heartland. The laymoon (lemon), burtu2aal (orange), and yuusafi (mandarin) have grown here for centuries. Before the civil war, Lebanese citrus was exported across the Arab world and Europe. The distinctive fragrance of zahra l-laymoon (lemon blossom) in spring perfumes entire villages — so much so that Lebanese emigrants associate the smell with home.'},
  {title:'The picking season — mawsim il-2aTaaf',  body:'Citrus harvest (2aTaaf) runs roughly from November through March, with lemons peaking in winter. Families and hired workers move between the trees, picking by hand and filling large plastic crates. The fruit is sorted on-site: premium fruit goes to export, smaller pieces to juice, and damaged fruit to the murabbaa (jam) pot. In village culture, neighbors share labor across each other\'s 2 bustaan (orchards), building a seasonal solidarity that city life rarely replicates.'},
  {title:'Preserved lemon — laymoon mkabbes',  body:'Lebanese preserved lemon (laymoon mkabbes) is made by packing quartered lemons with coarse salt and leaving them in jars for weeks until the rind softens. Unlike Moroccan preserved lemons, the Lebanese version often adds garlic, bay leaves, or dried chili. It\'s used in stews, salads, and as a condiment for grilled meats — especially in the South. A jar of laymoon mkabbes on the kitchen shelf is as reliable a sign of a Lebanese household as a bottle of olive oil.'},
  {title:'Lemon in Lebanese folk medicine',    body:'Lebanese folk tradition treats laymoon as a near-universal cure: lemon juice mixed with olive oil for constipation, hot water with laymoon and honey for sore throat, lemon zest (2ishr laymoon) boiled in water as a remedy for headache and fatigue. The Arabic expression "ma bi3malha ghayr il-laymoon" (only the lemon can fix it) reflects how deeply the fruit is embedded in domestic healing culture. Grandmothers across the South still swear by a glass of 3asir laymoon every morning before breakfast.'},
];
