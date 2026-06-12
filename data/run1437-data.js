// R1437 — NEW FEATURE: Lebanese Mzad & Flea Market Culture (mzd)
const MZD_WORDS = [
  {w:'mzad',        t:'مزاد',        tr:'public auction / flea market',  ex:'re7na 3al-mzad l-7add',          et:'We went to the Sunday flea market'},
  {w:'dal3al',      t:'دلعل',        tr:'auctioneer / market crier',      ex:'l-dal3al 3ambenadi bsawto',       et:'The auctioneer is calling out in his voice'},
  {w:'3ard',        t:'عرض',         tr:'display / offer',                ex:'ma3o 3ard mn l-qadim',            et:'He has an antique display'},
  {w:'tarj',        t:'طرج',         tr:'bidding up the price',           ex:'l-trej wsel 3a miyye',            et:'The bidding reached a hundred'},
  {w:'khsayre',     t:'خسيرة',       tr:'bargain / steal (good deal)',     ex:'hiyye khsayre ma bten7ka',        et:'It\'s a bargain, not to be missed'},
  {w:'rkhis',       t:'رخيص',        tr:'cheap',                          ex:'l-beD3a rkhise ktir',             et:'The item is very cheap'},
  {w:'3atiq',       t:'عتيق',        tr:'antique / old object',           ex:'laqeet khezmeh 3atiqa',           et:'I found an antique chest'},
  {w:'malja',       t:'ملجا',        tr:'junk / old cast-off stuff',       ex:'3indo bet mel malja',             et:'His house is full of junk'},
  {w:'nhas',        t:'نحاس',        tr:'copper / brass',                  ex:'l-ibreeq l-nhas ktir 7elo',       et:'The copper jug is very beautiful'},
  {w:'sham3daan',   t:'شمعدان',      tr:'candelabra',                     ex:'sham3daan qadim bel-mzad',        et:'An old candelabra at the flea market'},
  {w:'ta7fe',       t:'تحفة',        tr:'antique treasure / artifact',     ex:'heyda mish bisit — ta7fe',        et:'This is not just wood — it\'s an artifact'},
  {w:'baye3',       t:'بايع',        tr:'seller',                          ex:'l-baye3 mish naze3',              et:'The seller won\'t budge'},
  {w:'mshtari',     t:'مشتري',       tr:'buyer',                           ex:'l-mshtari 3ambefoker',            et:'The buyer is thinking'},
  {w:'fassal',      t:'فصّل',        tr:'to haggle / negotiate',           ex:'lasim tfassal ma3o 3a-s-se3er',   et:'You have to haggle with him on the price'},
  {w:'khatam',      t:'خاتم',        tr:'ring / seal (also: final bid)',    ex:'la2eit khatem fdde bel-mzad',     et:'I found a silver ring at the market'},
  {w:'sermi',       t:'سرمي',        tr:'old woven rug (antique mat)',      ex:'l-sermi me3mol bel-yad',          et:'The rug is handmade'},
  {w:'mkassar',     t:'مكسر',        tr:'chipped / damaged (negotiation)',  ex:'mkassar shi, bass 2rkhis 3alik',  et:'It\'s a bit chipped but cheaper for you'},
  {w:'7adide',      t:'حديدة',       tr:'iron piece / iron goods',          ex:'3indo 7adadiye min zaman',        et:'He has ironwork from the old days'},
  {w:'ktob 2adime', t:'كتب قديمة',   tr:'old books',                       ex:'byi3 ktob 2adime bel-mzad',       et:'He sells old books at the flea market'},
  {w:'soura qadime',t:'صورة قديمة',  tr:'old photograph / painting',        ex:'laqeet soura qadime la-ahel',     et:'I found an old photo of the family'},
];

const MZD_DRILLS = [
  {q:'What is the Lebanese word for a flea market / public auction?',                 opts:['mzad','3ard','tarj','malja'],           ans:'mzad'},
  {q:'What do you call the person who calls out bids at a Lebanese auction?',         opts:['dal3al','baye3','mshtari','fassal'],     ans:'dal3al'},
  {q:'Which word means "to haggle / negotiate the price"?',                           opts:['fassal','tarj','rkhis','khatam'],        ans:'fassal'},
  {q:'What is the Lebanese word for a great deal / bargain?',                         opts:['khsayre','3ard','mkassar','nhas'],       ans:'khsayre'},
  {q:'What is "nhas" in English?',                                                    opts:['copper/brass','iron','antique','junk'],  ans:'copper/brass'},
  {q:'What do Lebanese call an antique treasure or artifact?',                        opts:['ta7fe','sermi','3atiq','sham3daan'],     ans:'ta7fe'},
  {q:'Which word means the buyer at a market?',                                       opts:['mshtari','baye3','dal3al','fassal'],     ans:'mshtari'},
  {q:'What is the word for an old woven rug at a Lebanese flea market?',              opts:['sermi','nhas','7adide','malja'],         ans:'sermi'},
];

const MZD_TIPS = [
  {title:'The Lebanese Mzad',       body:'The mzad (مزاد) is a beloved Lebanese tradition — a street auction or flea market where antique dealers, families clearing old houses, and collectors gather. Famous mzads happen on Sundays in neighborhoods like Tripoli\'s old souk and parts of Beirut. Expect copper pots, old photos, furniture, and hand-embroidered pieces.'},
  {title:'Haggling is Expected',    body:'At any Lebanese mzad or souk, fassal (فصّل — negotiate) is not rude — it\'s required. If you accept the first price, the seller may lose respect for you. Start at half the asking price and work up. Say "ktir ghali" (too expensive) or "3andak shi a7san?" (do you have something better?) to get the conversation going.'},
  {title:'Spotting Real Antiques',  body:'"3atiq" (عتيق) simply means old. "Ta7fe" (تحفة) implies it\'s genuinely valuable. Sellers often describe cracked or chipped pieces as "mkassar shi bass..." (a bit chipped but...) to justify a lower price. Ask "min 2ayya sne?" (from which year?) to gauge authenticity.'},
  {title:'Flea Market Vocabulary in Action', body:'At the mzad you\'ll hear the dal3al (auctioneer) calling "ween l-baye3?" (where\'s the seller?), price wars with "tarj" (bidding up), and eventual sales announced as "7ello!" (it\'s gone!). Knowing "rkhis / ghali" (cheap / expensive), "2adeesh?" (how much?), and "fassal" (negotiate) will take you far.'},
];
