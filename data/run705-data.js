// R705 — NEW FEATURE: Lebanese Art & Painting (art)
const ART_CATS = [
  { id:'fine',    label:'🎨 Fine Art' },
  { id:'craft',   label:'🏺 Crafts & Media' },
  { id:'scene',   label:'🖼️ Art Scene' },
  { id:'phrases', label:'💬 Phrases' },
];

const ART_WORDS = [
  // fine art
  { ar:'فن',           tr:'fann',           en:'art',                   cat:'fine' },
  { ar:'رسم',          tr:'rasm',           en:'drawing/painting',      cat:'fine' },
  { ar:'لوحة',         tr:'luu7a',          en:'painting/canvas',       cat:'fine' },
  { ar:'رسام',         tr:'rassaam',        en:'artist/painter',        cat:'fine' },
  { ar:'نحت',          tr:'na7t',           en:'sculpture',             cat:'fine' },
  { ar:'تمثال',        tr:'timthaal',       en:'statue',                cat:'fine' },
  { ar:'ألوان',        tr:'alwaan',         en:'colors/paints',         cat:'fine' },
  { ar:'فرشاة',        tr:'farshaaya',      en:'paintbrush',            cat:'fine' },
  // crafts & media
  { ar:'خزف',          tr:'khazaf',         en:'ceramics/pottery',      cat:'craft' },
  { ar:'زجاج',         tr:'zujaaj',         en:'glass',                 cat:'craft' },
  { ar:'فسيفساء',      tr:'fusayfisaa',     en:'mosaic',                cat:'craft' },
  { ar:'نسيج',         tr:'nasiij',         en:'textile/weaving',       cat:'craft' },
  { ar:'تصوير',        tr:'taSwiir',        en:'photography',           cat:'craft' },
  { ar:'حفر',          tr:'7afr',           en:'engraving',             cat:'craft' },
  { ar:'طباعة',        tr:'Tibaa3a',        en:'printing/printing art', cat:'craft' },
  // art scene
  { ar:'معرض',         tr:'ma3raD',         en:'exhibition/gallery',    cat:'scene' },
  { ar:'متحف',         tr:'mat7af',         en:'museum',                cat:'scene' },
  { ar:'أتيليه',       tr:'atelyeh',        en:'atelier/studio',        cat:'scene' },
  { ar:'مزاد',         tr:'mazaad',         en:'auction',               cat:'scene' },
  { ar:'جمهور',        tr:'jomhoor',        en:'audience/public',       cat:'scene' },
  { ar:'إبداع',        tr:'ibdaa3',         en:'creativity',            cat:'scene' },
  { ar:'معرفة',        tr:'ma3rife',        en:'knowledge/appreciation',cat:'scene' },
  // phrases
  { ar:'هالصورة حلوة كتير', tr:'hal-Suura 7elwe kteer', en:'this painting is very beautiful', cat:'phrases' },
  { ar:'مين الرسام؟',       tr:'miin el-rassaam?',       en:'who is the artist?',              cat:'phrases' },
  { ar:'بحب الفن اللبناني', tr:'b7ebb el-fann el-lubnaani', en:'I love Lebanese art',          cat:'phrases' },
  { ar:'فيه معرض هون؟',     tr:'fii ma3raD hoon?',       en:'is there an exhibition here?',   cat:'phrases' },
  { ar:'قديش هالتمثال؟',    tr:'2addeesh hal-timthaal?', en:'how old is this statue?',         cat:'phrases' },
  { ar:'عالمستوى العالمي',   tr:'3a l-mustawa l-3aalami', en:'at international level',         cat:'phrases' },
];

const ART_DRILLS = [
  { q:'How do you say "painting/canvas"?', opts:['luu7a','rasm','fann','rassaam'], ans:0 },
  { q:'"Rassaam" means:', opts:['artist/painter','museum','gallery','sculptor'], ans:0 },
  { q:'What is "ma3raD"?', opts:['exhibition/gallery','museum','studio','auction'], ans:0 },
  { q:'"Na7t" means:', opts:['sculpture','drawing','painting','engraving'], ans:0 },
  { q:'How do you say "museum"?', opts:['mat7af','ma3raD','atelyeh','mazaad'], ans:0 },
  { q:'"Fusayfisaa" means:', opts:['mosaic','ceramics','textile','glass'], ans:0 },
  { q:'What is "alwaan"?', opts:['colors/paints','brushes','canvas','frame'], ans:0 },
  { q:'"TaSwiir" means:', opts:['photography','drawing','sculpture','printing'], ans:0 },
  { q:'How do you say "creativity"?', opts:['ibdaa3','ma3rife','jomhoor','fann'], ans:0 },
  { q:'"Khazaf" means:', opts:['ceramics/pottery','glass','mosaic','weaving'], ans:0 },
  { q:'What is "atelyeh"?', opts:['atelier/studio','gallery','museum','auction'], ans:0 },
  { q:'"Timthaal" means:', opts:['statue','painting','mosaic','sculpture'], ans:0 },
  { q:'How do you say "paintbrush"?', opts:['farshaaya','alwaan','rasm','7afr'], ans:0 },
  { q:'"Mazaad" means:', opts:['auction','exhibition','museum','gallery'], ans:0 },
  { q:'How do you say "I love Lebanese art"?', opts:['b7ebb el-fann el-lubnaani','miin el-rassaam?','fii ma3raD hoon?','hal-Suura 7elwe kteer'], ans:0 },
];

const ART_TIPS = [
  { title:'Lebanon\'s vibrant art scene', body:'Lebanon has one of the Arab world\'s most active contemporary art scenes. "Ma3raD" (معرض) = exhibition/gallery — Beirut\'s Hamra, Gemmayzeh, and Mar Mikhael neighborhoods are gallery hubs. The Sursock Museum ("mat7af") is Lebanon\'s premier art institution, reopened after the 2020 Beirut blast. "Rassaam" (رسام) = artist/painter — Lebanon produces internationally acclaimed visual artists.' },
  { title:'Lebanese mosaic tradition', body:'"Fusayfisaa" (فسيفساء) = mosaic — a craft tradition in Lebanon dating to the Phoenicians and Romans. The National Museum in Beirut displays spectacular Roman floor mosaics from Lebanese excavations. Contemporary Lebanese artists revive this tradition, mixing ancient techniques with modern themes. "Zujaaj" (glass) and tile work appear throughout Lebanese architecture.' },
  { title:'Famous Lebanese painters', body:'Paul Guiragossian is Lebanon\'s most beloved 20th-century painter — his work depicts displaced people with bold colors and emotion. Saliba Douaihy painted Lebanese landscapes with impressionist warmth. Aref El Rayess brought abstract expressionism to Lebanese "fann" (art). Today, artists like Zena Assi and Tagreed Darghouth exhibit globally, mixing "ibdaa3" (creativity) with political commentary.' },
  { title:'Photography & documentary art', body:'"TaSwiir" (تصوير) = photography — Lebanese photographers are internationally renowned for conflict documentation and humanist portraiture. Gabrielle Geagea, Roger Moukarzel, and Patrick Baz have documented Lebanon\'s turbulent history. Beirut\'s "atelyeh" (studios) produce award-winning photography. Lebanon has a strong tradition of press photography — the civil war era produced iconic images.' },
  { title:'Ceramics & traditional crafts', body:'"Khazaf" (خزف) = ceramics/pottery — traditional Lebanese pottery centers include Beit Chabab and Rashaya el-Wadi. "Nasiij" (نسيج) = textile weaving — Beit ed-Dine and Deir el-Qamar produce silk and cotton weavings. "7afr" (حفر) = engraving — copper and silver engraving in the old souks of Tripoli and Sidon. These crafts are sold at Lebanese "ma3raD" (exhibitions) and tourist markets.' },
  { title:'Art appreciation phrases', body:'"Hal-Suura 7elwe kteer" = this painting is very beautiful. "Miin el-rassaam?" = who is the artist? "B7ebb el-fann el-lubnaani" = I love Lebanese art. "Fii ma3raD hoon?" = is there an exhibition here? "3a l-mustawa l-3aalami" = at international level (used to describe Lebanese artists who have achieved global recognition).' },
];
