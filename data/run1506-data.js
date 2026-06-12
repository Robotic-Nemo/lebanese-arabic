// R1506 — NEW FEATURE: Lebanese Hospitality & Diyafa (dfy)
const DFY_WORDS = [
  {w:'tfaddal',              t:'تفضل',            tr:'please come in / help yourself (m)',     cat:'welcome'},
  {w:'tfaddali',             t:'تفضلي',           tr:'please come in / help yourself (f)',     cat:'welcome'},
  {w:'tfaddalu',             t:'تفضلوا',          tr:'please come in / help yourself (pl)',    cat:'welcome'},
  {w:'hayt',                 t:'هيت',             tr:'come in! / step right in!',              cat:'welcome'},
  {w:'marhaba bikun',        t:'مرحبا بكم',       tr:'welcome to you all',                     cat:'welcome'},
  {w:'khod ra7tak',          t:'خد راحتك',        tr:'make yourself at home (m)',              cat:'comfort'},
  {w:'khdi ra7tak',          t:'خدي راحتك',       tr:'make yourself at home (f)',              cat:'comfort'},
  {w:'3ala 3eyni',           t:'على عيني',        tr:'my pleasure / on my eye',                cat:'comfort'},
  {w:'shou biddak teshrab',  t:'شو بدك تشرب',     tr:'what do you want to drink? (m)',         cat:'hosting'},
  {w:'shou biddik teshrabeh',t:'شو بدك تشربي',    tr:'what do you want to drink? (f)',         cat:'hosting'},
  {w:'la2 la2 khod aktar',   t:'لا لا خد أكتر',  tr:'no no, take more (m)',                   cat:'hosting'},
  {w:'7aram trekkha',        t:'حرام تتركها',     tr:"shame to leave it / don't waste it",     cat:'hosting'},
  {w:'sahtein',              t:'صحتين',           tr:'bon appétit (two healths)',               cat:'gratitude'},
  {w:'yislam ideyk',         t:'يسلم إيدك',       tr:'God bless your hands (m, to cook)',      cat:'gratitude'},
  {w:'yislam ideiyek',       t:'يسلم إيديكي',    tr:'God bless your hands (f, to cook)',      cat:'gratitude'},
  {w:'3a 2albak',            t:'على قلبك',        tr:"to your heart (m) / you're welcome",     cat:'gratitude'},
  {w:'bkaffeh',              t:'بكفيني',          tr:"it's enough for me",                     cat:'leaving'},
  {w:'zour2na',              t:'زورونا',          tr:'visit us / come again',                  cat:'leaving'},
  {w:'rou7 w rja3',          t:'روح وارجع',       tr:'go and come back (see you soon)',         cat:'leaving'},
  {w:'ma3 l salame',         t:'مع السلامة',      tr:'go in peace / goodbye',                  cat:'leaving'},
];

const DFY_DRILLS = [
  {q:"You open the door to a male guest. You say:",       a:"tfaddal",               hint:"تفضل — invite in (m)"},
  {q:"To tell a female guest to make herself at home:",   a:"khdi ra7tak",           hint:"خدي راحتك"},
  {q:"After eating, you thank the cook (male):",          a:"yislam ideyk",          hint:"يسلم إيدك"},
  {q:"Offering more food, refusing to let them stop:",    a:"la2 la2 khod aktar",    hint:"لا لا خد أكتر"},
  {q:"Before starting to eat, everyone says:",            a:"sahtein",               hint:"صحتين — two healths"},
  {q:"\"My pleasure\" / \"with pleasure\" in Lebanese:",  a:"3ala 3eyni",            hint:"على عيني — on my eye"},
  {q:"Inviting a whole group of guests inside:",          a:"tfaddalu",              hint:"تفضلوا"},
  {q:"Wishing a departing guest a safe journey:",         a:"ma3 l salame",          hint:"مع السلامة"},
];

const DFY_TIPS = [
  {title:"tfaddal culture", body:"Lebanese hosts repeat 'tfaddal/tfaddali' multiple times — once is not enough. Declining once is considered polite modesty, but the host will insist until you accept. This back-and-forth is a cherished ritual."},
  {title:"yislam ideyk (يسلم إيدك)", body:"Literally 'may God protect your hands.' Used specifically to thank someone who cooked, crafted something, or worked hard for you. Extremely warm. Reply: 'Allah yisalmak/ek' (God keep you safe)."},
  {title:"3ala 3eyni (على عيني)", body:"Literally 'on my eye.' Placing something on your eye means you guard it like your own eyesight — the most precious thing. Used to express deep sincerity, willingness, and affection."},
  {title:"Lebanese insistence culture", body:"When guests try to leave, hosts insist: 'la2 la2, ishteni jawle tanyeh!' (no no, stay for another round!). Leaving immediately after eating is considered rude. Always linger, chat, and accept at least one more coffee."},
];
