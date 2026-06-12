// R702 — NEW FEATURE: Lebanese Seasons & Climate (clmt)
const CLMT_CATS = [
  { id:'seasons',  label:'🍂 Seasons' },
  { id:'weather',  label:'⛅ Weather' },
  { id:'nature',   label:'🌄 Landscape' },
  { id:'phrases',  label:'💬 Phrases' },
];

const CLMT_WORDS = [
  // seasons
  { ar:'ربيع',         tr:'rabii3',          en:'spring',                 cat:'seasons' },
  { ar:'صيف',          tr:'Sayf',            en:'summer',                 cat:'seasons' },
  { ar:'خريف',         tr:'khariif',         en:'autumn/fall',            cat:'seasons' },
  { ar:'شتا',          tr:'shita',           en:'winter',                 cat:'seasons' },
  { ar:'فصل',          tr:'faSl',            en:'season',                 cat:'seasons' },
  { ar:'شهر',          tr:'shahr',           en:'month',                  cat:'seasons' },
  { ar:'سنة',          tr:'sene',            en:'year',                   cat:'seasons' },
  { ar:'يوم',          tr:'yoom',            en:'day',                    cat:'seasons' },
  // weather
  { ar:'جو',           tr:'jaww',            en:'weather/atmosphere',     cat:'weather' },
  { ar:'مطر',          tr:'maTar',           en:'rain',                   cat:'weather' },
  { ar:'ثلج',          tr:'thalj',           en:'snow',                   cat:'weather' },
  { ar:'شمس',          tr:'shams',           en:'sun',                    cat:'weather' },
  { ar:'غيم',          tr:'gheem',           en:'clouds',                 cat:'weather' },
  { ar:'ريح',          tr:'riyy7',           en:'wind',                   cat:'weather' },
  { ar:'ضباب',         tr:'Dabaab',          en:'fog/mist',               cat:'weather' },
  // landscape
  { ar:'جبل',          tr:'jabal',           en:'mountain',               cat:'nature' },
  { ar:'بحر',          tr:'ba7er',           en:'sea',                    cat:'nature' },
  { ar:'وادي',         tr:'waadi',           en:'valley',                 cat:'nature' },
  { ar:'نهر',          tr:'nahar',           en:'river',                  cat:'nature' },
  { ar:'غابة',         tr:'ghaabe',          en:'forest',                 cat:'nature' },
  { ar:'سهل',          tr:'sahl',            en:'plain/flatland',         cat:'nature' },
  { ar:'شلال',         tr:'shalaal',         en:'waterfall',              cat:'nature' },
  // phrases
  { ar:'الجو كيف هو؟',   tr:'el-jaww kiif howe?', en:'what\'s the weather like?', cat:'phrases' },
  { ar:'الجو حلو',       tr:'el-jaww 7elo',       en:'the weather is nice',       cat:'phrases' },
  { ar:'عم بشتي',        tr:'3am bishtii',        en:'it\'s raining',             cat:'phrases' },
  { ar:'في ثلج عالجبل',  tr:'fii thalj 3a l-jabal', en:'there\'s snow on the mountain', cat:'phrases' },
  { ar:'الصيف حار كتير', tr:'el-Sayf 7aar kteer', en:'the summer is very hot',    cat:'phrases' },
  { ar:'بحب الربيع',     tr:'b7ebb el-rabii3',    en:'I love spring',             cat:'phrases' },
];

const CLMT_DRILLS = [
  { q:'How do you say "snow"?', opts:['thalj','maTar','gheem','Dabaab'], ans:0 },
  { q:'"Rabii3" means:', opts:['spring','summer','autumn','winter'], ans:0 },
  { q:'What is "shita"?', opts:['winter','spring','summer','autumn'], ans:0 },
  { q:'"MaTar" means:', opts:['rain','snow','wind','fog'], ans:0 },
  { q:'How do you say "mountain"?', opts:['jabal','waadi','nahar','sahl'], ans:0 },
  { q:'"Jaww" means:', opts:['weather/atmosphere','wind','sky','cloud'], ans:0 },
  { q:'What is "khariif"?', opts:['autumn/fall','spring','summer','winter'], ans:0 },
  { q:'"Ghaabe" means:', opts:['forest','valley','plain','mountain'], ans:0 },
  { q:'How do you say "sea"?', opts:['ba7er','nahar','waadi','shalaal'], ans:0 },
  { q:'"Shams" means:', opts:['sun','moon','star','sky'], ans:0 },
  { q:'What is "3am bishtii"?', opts:["it's raining","it's snowing","it's windy","it's foggy"], ans:0 },
  { q:'"Shalaal" means:', opts:['waterfall','river','valley','lake'], ans:0 },
  { q:'How do you say "fog"?', opts:['Dabaab','gheem','riyy7','maTar'], ans:0 },
  { q:'"Sayf" means:', opts:['summer','spring','autumn','winter'], ans:0 },
  { q:'How do you say "valley"?', opts:['waadi','jabal','sahl','ghaabe'], ans:0 },
];

const CLMT_TIPS = [
  { title:'Lebanon\'s 4 distinct seasons', body:'Lebanon is unusual in the Middle East — it genuinely has 4 seasons ("arba3 fuSool"). "Rabii3" (spring) brings wildflowers on hillsides. "Sayf" (summer) is hot and humid on the coast, cooler in the mountains. "Khariif" (autumn) turns mountain trees gold. "Shita" (winter) brings "thalj" (snow) on peaks — Lebanon is one of the few Arab countries where you can ski.' },
  { title:'Snow in Lebanon — a cultural event', body:'"Thalj" (snow) on "Jabal" (the mountains) is a celebration. When it snows in Faraya or the Chouf, Lebanese families drive up to see it — "fii thalj 3a l-jabal" triggers road trips. The Lebanese ski resorts (Faraya Mzaar, The Cedars, Mzaar) operate December-March. "Yalla 3a l-thalj!" (let\'s go to the snow!) is the winter rallying cry.' },
  { title:'The coast vs the mountains', body:'Lebanon\'s geography creates micro-climates. "El-jaww 3a l-ba7er" (the weather at the coast) is hot and humid in summer. "El-jaww 3a l-jabal" (in the mountains) is cooler, with "gheem" (clouds) and "Dabaab" (fog) in winter. Beirut locals escape to the mountains in summer — "roo7 3a l-jabal" (go to the mountains) = cool off.' },
  { title:'Rain & water culture', body:'"MaTar" (rain) is welcome in Lebanon after dry summers — "alla yji3 el-maTar" (may the rain come) is said in autumn. The Litani River ("nahar") is Lebanon\'s main water source. The Barouk waterfall ("shalaal") and river valleys ("waadi") are hiking destinations. "3am bishtii" (it\'s raining) triggers warnings to cancel outdoor plans.' },
  { title:'Spring — Lebanon\'s most loved season', body:'"El-rabii3 fi Lubnan" (spring in Lebanon) is celebrated. Wildflowers cover the "sahl" (plains) and mountain slopes from March to May. Lebanese villages hold spring festivals. "B7ebb el-rabii3" (I love spring) is the most common seasonal sentiment. The famous "rabii3 Beirut" (Beirut spring) describes the pre-war golden era nostalgia.' },
  { title:'Weather phrases', body:'"El-jaww kiif howe?" = what\'s the weather like? "El-jaww 7elo" = the weather is nice (the most frequent Lebanese weather opinion). "El-Sayf 7aar kteer" = summer is very hot. "El-shita baared" = winter is cold. "El-jaww mish mnii7" = the weather is bad. "Byi7ki 3a maTar" = they\'re talking about rain (a forecast).' },
];
