// R672 — NEW FEATURE: Lebanese Vegetables & Greens (veg)
const VEG_CATS = [
  { id:'root',     label:'🥕 Root & Bulb' },
  { id:'leaf',     label:'🥬 Leafy Greens' },
  { id:'fruit',    label:'🍅 Fruit Veg' },
  { id:'phrases',  label:'💬 Phrases' },
];

const VEG_WORDS = [
  // root & bulb
  { ar:'بطاطا',       tr:'baTaaTa',      en:'potato',           cat:'root' },
  { ar:'جزر',         tr:'jazar',         en:'carrot',           cat:'root' },
  { ar:'بصل',         tr:'baSal',         en:'onion',            cat:'root' },
  { ar:'ثوم',         tr:'toom',          en:'garlic',           cat:'root' },
  { ar:'شمندر',       tr:'shamandar',     en:'beetroot',         cat:'root' },
  { ar:'فجل',         tr:'fjel',          en:'radish',           cat:'root' },
  { ar:'كوسا',        tr:'koosa',         en:'zucchini/courgette', cat:'root' },
  // leafy greens
  { ar:'خس',          tr:'khess',         en:'lettuce',          cat:'leaf' },
  { ar:'سبانخ',       tr:'sbaanikH',      en:'spinach',          cat:'leaf' },
  { ar:'بقدونس',      tr:'ba2dounes',     en:'parsley',          cat:'leaf' },
  { ar:'نعنع',        tr:'na3na3',        en:'mint',             cat:'leaf' },
  { ar:'ملوخية',      tr:'mulukhiyye',    en:'jute leaves',      cat:'leaf' },
  { ar:'كرفس',        tr:'karafs',        en:'celery',           cat:'leaf' },
  { ar:'ورق عريش',    tr:'wara2 3arish',  en:'grape leaves',     cat:'leaf' },
  // fruit veg
  { ar:'طماطم',       tr:'bnaadora',      en:'tomato',           cat:'fruit' },
  { ar:'خيار',        tr:'khiyaar',       en:'cucumber',         cat:'fruit' },
  { ar:'فليفلة',      tr:'flayfl',        en:'pepper/capsicum',  cat:'fruit' },
  { ar:'باذنجان',     tr:'baaDinjaan',    en:'eggplant/aubergine', cat:'fruit' },
  { ar:'قرنبيط',      tr:'rnabeeT',       en:'cauliflower',      cat:'fruit' },
  { ar:'ملفوف',       tr:'malfoof',       en:'cabbage',          cat:'fruit' },
  { ar:'بامية',       tr:'baamye',        en:'okra',             cat:'fruit' },
  { ar:'فاصوليا',     tr:'faasooleya',    en:'green beans',      cat:'fruit' },
  // phrases
  { ar:'روح اشتري خضرا', tr:'roo7 ishtri khadra', en:'go buy vegetables', cat:'phrases' },
  { ar:'الخضرا طازجة',   tr:'el-khadra Taaze',    en:'the vegetables are fresh', cat:'phrases' },
  { ar:'كم الكيلو',      tr:'2addesh el-keelo',   en:'how much per kilo?', cat:'phrases' },
  { ar:'بدي ربطة بقدونس', tr:'baddii rabTit ba2dounes', en:'I want a bunch of parsley', cat:'phrases' },
  { ar:'خضرا محلية',     tr:'khadra ma7alleyyeh', en:'local/seasonal vegetables', cat:'phrases' },
  { ar:'مطبوخ ولا نيي',  tr:'maTboukh walla niyyi', en:'cooked or raw?',    cat:'phrases' },
];

const VEG_DRILLS = [
  { q:'How do you say "garlic" in Lebanese?', opts:['toom','baSal','jazar','ba2dounes'], ans:0 },
  { q:'"BnaaDora" means:', opts:['tomato','eggplant','carrot','onion'], ans:0 },
  { q:'What is "baaDinjaan"?', opts:['eggplant','pepper','cabbage','okra'], ans:0 },
  { q:'"Koosa" means:', opts:['zucchini','potato','beet','radish'], ans:0 },
  { q:'How do you say "mint"?', opts:['na3na3','karafs','ba2dounes','sbaanikH'], ans:0 },
  { q:'"Malfoof" means:', opts:['cabbage','lettuce','spinach','celery'], ans:0 },
  { q:'How do you say "cucumber"?', opts:['khiyaar','flayfl','bnaaDora','baaDinjaan'], ans:0 },
  { q:'"Baamye" means:', opts:['okra','green beans','jute leaves','grape leaves'], ans:0 },
  { q:'"El-khadra Taaze" means:', opts:['fresh vegetables','local veg','cooked veg','buy veg'], ans:0 },
  { q:'What is "mulukhiyye"?', opts:['jute leaves','spinach','lettuce','mint'], ans:0 },
  { q:'"2addesh el-keelo?" means:', opts:['how much per kilo?','what is this?','how many?','is it fresh?'], ans:0 },
  { q:'How do you say "parsley"?', opts:['ba2dounes','na3na3','karafs','toom'], ans:0 },
  { q:'"Wara2 3arish" means:', opts:['grape leaves','celery','mint','lettuce'], ans:0 },
  { q:'"FlayFl" means:', opts:['pepper','tomato','cucumber','eggplant'], ans:0 },
  { q:'How do you say "cauliflower"?', opts:['rnabeeT','baamye','faasooleya','malfoof'], ans:0 },
];

const VEG_TIPS = [
  { title:'Lebanese Tomato', body:'"Bnaadora" (بطاطا is potato, بندورة is tomato). Lebanese use "bnaaDora" colloquially for tomato — not the MSA "Tamaatim" (طماطم). Important distinction at the souk!' },
  { title:'Zucchini Culture', body:'"Koosa" (كوسا) is extremely common in Lebanese cooking — stuffed with rice and meat (koosa mahshi), fried, or in stews. A must-know word for the kitchen.' },
  { title:'Grape Leaves', body:'"Wara2 3arish" (ورق عريش) — literally "vine leaves." The dish "wara2 3arish mahshi" (stuffed grape leaves) is one of Lebanon\'s most beloved mezze.' },
  { title:'Mulukhiyye', body:'"Mulukhiyye" (ملوخية) is a divisive vegetable — you either love or hate the slimy texture. The stew made with rabbit or chicken is a staple in Beirut and the south.' },
  { title:'Souk Bargaining', body:'At the vegetable souk: "2addesh el-keelo?" (how much per kilo?), "ghali kteer" (too expensive), "khalli 3ala rabbi" (let it be on God = give me a deal).' },
  { title:'Local vs Imported', body:'"Khadra ma7alleyyeh" (محلية = local/homemade) is the quality marker. Lebanese pride themselves on fresh, locally grown produce from the Bekaa Valley.' },
];
