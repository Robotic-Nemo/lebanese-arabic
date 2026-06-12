// R1242 — NEW FEATURE: Lebanese Mulberry Tree & Toot Summer Traditions (twt)

const TWT_WORDS = [
  // tree & fruit
  {ar:'توت',         tr:'toot',          en:'mulberry',              cat:'tree'},
  {ar:'شجرة',        tr:'shajra',        en:'tree',                  cat:'tree'},
  {ar:'ورق',         tr:'wara2',         en:'leaves',                cat:'tree'},
  {ar:'قطف',         tr:'2ataf',         en:'to pick/pluck',         cat:'tree'},
  {ar:'عنقود',       tr:'3an2oud',       en:'cluster/bunch',         cat:'tree'},
  // food & drink
  {ar:'عصير',        tr:'3asiir',        en:'juice',                 cat:'food'},
  {ar:'دبس التوت',   tr:'dibs l-toot',   en:'mulberry molasses',     cat:'food'},
  {ar:'مربى',        tr:'mrabba',        en:'jam/preserve',          cat:'food'},
  {ar:'خل',          tr:'khall',         en:'vinegar',               cat:'food'},
  {ar:'توت شامي',    tr:'toot shaami',   en:'white mulberry',        cat:'food'},
  // summer memories
  {ar:'صيف',         tr:'sayf',          en:'summer',                cat:'memories'},
  {ar:'حديقة',       tr:'7adii2a',       en:'garden',                cat:'memories'},
  {ar:'ستو',         tr:'sito',          en:'grandma',               cat:'memories'},
  {ar:'أصابع',       tr:'asaabi3',       en:'fingers',               cat:'memories'},
  {ar:'ملطخ',        tr:'multakhi',      en:'stained',               cat:'memories'},
  // silk connection
  {ar:'حرير',        tr:'7ariir',        en:'silk',                  cat:'silk'},
  {ar:'دودة القز',   tr:'doodit l-2azz', en:'silkworm',              cat:'silk'},
  {ar:'أرجواني',     tr:'arjowaani',     en:'purple/violet',         cat:'silk'},
  {ar:'حصاد',        tr:'7assaad',       en:'harvest',               cat:'silk'},
  {ar:'بيت',         tr:'bayt',          en:'house (cocoon)',        cat:'silk'},
];

const TWT_DRILLS = [
  {q:'What does توت mean?',                 opts:['silk','mulberry','harvest','leaves'],             ans:1},
  {q:'Lebanese word for "jam/preserve"?',   opts:['خل','دبس التوت','مربى','عصير'],                   ans:2},
  {q:'What does دبس التوت mean?',           opts:['mulberry jam','mulberry juice','mulberry molasses','silk'], ans:2},
  {q:'Lebanese word for "silkworm"?',       opts:['حرير','ورق','دودة القز','حصاد'],                  ans:2},
  {q:'What does ملطخ mean?',               opts:['garden','summer','grandma','stained'],             ans:3},
  {q:'Lebanese word for "cluster/bunch"?',  opts:['قطف','عنقود','أصابع','شجرة'],                    ans:1},
  {q:'What does 7ariir mean?',              opts:['harvest','purple','silk','vinegar'],               ans:2},
  {q:'Lebanese word for "leaves"?',         opts:['ورق','صيف','حديقة','ستو'],                        ans:0},
];

const TWT_TIPS = [
  {title:'Toot — the taste of Lebanese summer',      body:'The mulberry tree (shajret el-toot) is one of the most nostalgic images in Lebanese village life. Kids would spend summer afternoons climbing trees, emerging with purple-stained fingers (asaabi3 multakhe) and mouths. The white mulberry (toot shaami) is milder; the black/red variety is deeply sweet. In villages like Bsharri, Deir el-Ahmar, and the Bekaa, old mulberry trees still stand in family courtyards, some hundreds of years old.'},
  {title:'Dibs el-toot — mulberry molasses',         body:'Dibs l-toot (mulberry molasses) is made by boiling down fresh mulberry juice until it thickens into a dark, intensely sweet syrup. It\'s spread on bread the way Nutella is used today, mixed into labneh, or drizzled over semolina cake (sfouuf). Unlike grape molasses (dibs el-3inab), mulberry molasses has a sharper, wilder flavor — "ta3mo bi-ysalle3" (its taste makes you jump), as grandmothers say.'},
  {title:'The silk connection — toot and 7ariir',     body:'White mulberry leaves (wara2 et-toot) are the exclusive food of the silkworm (doodit el-2azz or 7ariir). Lebanon\'s silk industry once made the country a luxury textile exporter to Europe — from Bsharri to Deir el-Qamar, silk weaving (7iyyaakit el-7ariir) was central to mountain economy. The collapse of the silk trade in the 20th century left behind thousands of abandoned "2azziye" (silk cocoon houses), many now restored as heritage sites.'},
  {title:'Sito and the mulberry tree',               body:'One of the most common Lebanese childhood memories is "3ind sito bil-blad" (at grandma\'s in the village) — climbing the toot tree and eating directly off the branches. The phrase "toot bi-3inak" (mulberry in your eyes) is teasing slang for someone with dreamy, distracted eyes — from the way kids stare up into trees looking for the ripest fruit. Mulberry season is short (June–July), which gives toot its nostalgic power: you can\'t buy the experience, only remember it.'},
];
