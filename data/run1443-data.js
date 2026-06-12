// R1443 — NEW FEATURE: Lebanese Musalsalat & TV Drama (msl)
const MSL_WORDS = [
  {w:'msalsal',      t:'مسلسل',       tr:'TV drama series',                  ex:'l-msalsal l-jdid 3a-l-mbc ktir 7elo',         et:'The new drama on MBC is very good'},
  {w:'7al2a',        t:'حلقة',        tr:'episode',                          ex:'shuft l-7al2a l-2akhire mba3d?',               et:'Did you watch the last episode yet?'},
  {w:'4akhsiyi',     t:'شخصيّة',      tr:'character / role',                 ex:'l-4akhsiyi l-raisiye 3ajbetni ktir',           et:'I really liked the main character'},
  {w:'musharri3',    t:'مشرّع',       tr:'screenwriter / script',            ex:'l-musharri3 ktab qissa 7eliwe',               et:'The screenwriter wrote a beautiful story'},
  {w:'batale',       t:'بطلة',        tr:'leading actress / heroine',        ex:'l-batale l-lubnaniye mashhure bel-3alam',      et:'The Lebanese leading actress is famous worldwide'},
  {w:'batal',        t:'بطل',         tr:'leading actor / hero',             ex:'l-batal l-jdid 3indo karisma',                et:'The new lead actor has charisma'},
  {w:'2akhraji',     t:'إخراجي',      tr:'directing (adj) / production',     ex:'l-3amal l-2akhraji ktir mda3bel',             et:'The directing work is very polished'},
  {w:'tasjil',       t:'تسجيل',       tr:'recording / filming',              ex:'l-tasjil intaha l-isbu3 l-madi',              et:'Filming ended last week'},
  {w:'di3aye',       t:'دعاية',       tr:'advertisement / promo',            ex:'l-di3aye l-jdide la-l-msalsal 3a-l-youtube',  et:'The new drama promo is on YouTube'},
  {w:'mawsim',       t:'موسم',        tr:'season (TV)',                      ex:'l-mawsim l-teni sar akthar min l-awwal',      et:'The second season is better than the first'},
  {w:'khiyane',      t:'خيانة',       tr:'betrayal (drama plot)',            ex:'l-msalsal killo 3an l-khiyane w l-hob',       et:'The whole drama is about betrayal and love'},
  {w:'musalsal ramadani', t:'مسلسل رمضاني', tr:'Ramadan special series',    ex:'l-musalsalat l-ramdaniye l-mashruki l-kell',   et:'Ramadan dramas captivate everyone'},
  {w:'nujum',        t:'نجوم',        tr:'stars / celebrities',              ex:'l-nujum l-lubnaniye ma7bubin bel-khalij',      et:'Lebanese stars are beloved in the Gulf'},
  {w:'qanawa',       t:'قناة',        tr:'TV channel',                       ex:'2ay qanawa bti4il l-msalsal?',                et:'Which channel airs the drama?'},
  {w:'talfaze',      t:'تلفزة',       tr:'television / TV',                  ex:'l-talfaze l-lubnaniye 2awwal talfaze bil-3alam arabi', et:'Lebanese TV was the first in the Arab world'},
  {w:'ta2thir',      t:'تأثير',       tr:'influence / impact',               ex:'l-musalsalat fiya ta2thir kbir 3a-l-mujtama3', et:'TV dramas have big influence on society'},
  {w:'noss',         t:'نصّ',         tr:'script / text',                    ex:'l-noss l-masrahi maktub mnee7',               et:'The dramatic script is well written'},
  {w:'mdi4iyye',     t:'مذيعة',       tr:'female TV presenter / anchor',    ex:'l-mdi4iyye 7keyet l-2akhbar b-su3a',          et:'The anchor delivered the news quickly'},
  {w:'laqta',        t:'لقطة',        tr:'scene / shot',                     ex:'l-laqta l-2akhira khalliyet kill wa7ad yibki', et:'The last scene made everyone cry'},
  {w:'3ard awwal',   t:'عرض أوّل',   tr:'premiere / first showing',         ex:'l-3ard l-awwal kan masi2 ams',                et:'The premiere was last night'},
];

const MSL_DRILLS = [
  {q:'What is the Lebanese word for a TV drama series?',                           opts:['msalsal','mawsim','qanawa','talfaze'],       ans:'msalsal'},
  {q:'What do you call a TV season in Lebanese Arabic?',                           opts:['mawsim','7al2a','di3aye','noss'],           ans:'mawsim'},
  {q:'What word means "leading actress" or "heroine"?',                            opts:['batale','mdi4iyye','4akhsiyi','batal'],      ans:'batale'},
  {q:'What is "TV channel" in Lebanese Arabic?',                                   opts:['qanawa','talfaze','mawsim','tasjil'],        ans:'qanawa'},
  {q:'What does "laqta" mean?',                                                    opts:['scene / shot','episode','script','promo'],   ans:'scene / shot'},
  {q:'What is the special type of series aired during Ramadan called?',            opts:['musalsal ramadani','mawsim','3ard awwal','nujum'], ans:'musalsal ramadani'},
  {q:'What word means "betrayal" — a classic TV drama theme?',                     opts:['khiyane','ta2thir','noss','2akhraji'],       ans:'khiyane'},
  {q:'What is the Lebanese word for "premiere" or first showing?',                 opts:['3ard awwal','7al2a','di3aye','tasjil'],     ans:'3ard awwal'},
];

const MSL_TIPS = [
  {title:'Lebanese TV — The Arab World\'s Hollywood',  body:'Lebanon has been producing Arabic TV dramas (musalsalat مسلسلات) since the 1950s. Channels like LBC, MTV Lebanon, and Al Jadeed export shows watched from Morocco to Oman. Lebanese dialect (lahje lubnaniye) became beloved across the Arab world partly because of these shows — it\'s perceived as romantic and sophisticated. Saying "shuft l-msalsal?" (Did you watch the drama?) is a universal Lebanese conversation opener.'},
  {title:'Ramadan Dramas — the Super Bowl of Lebanese TV',  body:'Every Ramadan, Lebanese and pan-Arab channels compete with their biggest productions — called musalsalat ramdaniye (مسلسلات رمضانية). Families gather after iftar to watch together. Lebanese producers and actors dominate the regional market. Stars like Nadine Nassib Njeim, Maguy Bou Ghosn, and George Khabbaz are household names. The phrase "l-msalsal l-ramdani" signals prestige and budget.'},
  {title:'The Lebanese Soap Opera Formula',  body:'Lebanese dramas follow recognizable formulas: khiyane (خيانة betrayal), hob mamnou3 (حب ممنوع forbidden love), wealth vs. poverty, and family feuds. Viewers love following shakhsiyyat (شخصيات characters) across 30–60 episodes. Cliffhangers are essential — ending each 7al2a (حلقة episode) on a dramatic laqta (لقطة scene) keeps audiences hooked. "Shu sar?" (What happened?) is what viewers text each other after each episode.'},
  {title:'Lebanese TV Firsts',  body:'CLT — which later merged into Télé Liban (1977) — launched in 1959 as one of the first TV channels in the Arab world (men 2awwal el-talfazet bil-3alam el-3arabi). Lebanese presenters — muzi3in (مذيعين anchors) — set the standard for classical Arabic pronunciation on screen. Today, Lebanon\'s entertainment industry survives wars, power cuts, and crises, producing dramas even during the 2019–2020 revolution and economic collapse — proof of the Lebanese saying: "l-fann ma bimut" (art doesn\'t die).'},
];
