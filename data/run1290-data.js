// R1290 — NEW FEATURE: Lebanese Diaspora & Emigration (sfr) — 20 phrases, 8 drills, 4 tips

const SFR_WORDS = [
  {ar:'سافر',      tr:'safar',          en:'to travel / emigrate',          note:'Root of safar; used for both travel and permanent emigration'},
  {ar:'الغربة',    tr:'il-ghurbe',       en:'being away from homeland',       note:'Deep emotional word — homesickness, exile, longing combined'},
  {ar:'المهجر',    tr:'il-mahjar',       en:'the diaspora / place of emigration', note:'Literary word; al-Mahjar = Lebanese poet movement abroad'},
  {ar:'رح يسافر', tr:'ra7 yisafir',     en:'he\'s going to leave (emigrate)', note:'Used for emigration not just trips — context makes it heavy'},
  {ar:'بالخارج',  tr:'bil-kharij',      en:'abroad / overseas',              note:'Lit. "in the outside" — anyone not in Lebanon'},
  {ar:'راح ع أمريكا', tr:'ra7 3a amrika', en:'went to America',              note:'America = generic term for any Western country in older speech'},
  {ar:'بدو يكمّل', tr:'biddo yikammel', en:'he wants to complete himself',   note:'Euphemism for emigrating to build a better life'},
  {ar:'ما في مستقبل هون', tr:'ma fi mustaqbal houn', en:'no future here',    note:'Classic Lebanese phrase justifying emigration'},
  {ar:'الفساد',   tr:'il-fasad',        en:'corruption',                     note:'Top cited reason for leaving Lebanon'},
  {ar:'هجرة',     tr:'hijre',           en:'migration / emigration',         note:'Formal word; hijre shares root with Hijra'},
  {ar:'بلد الغير', tr:'balad il-ghair', en:'another\'s country / foreign land', note:'Expression for feeling like a stranger abroad'},
  {ar:'شوق',      tr:'shoq',            en:'longing / yearning',             note:'Deep longing for home, family, Lebanon'},
  {ar:'رجع ع لبنان', tr:'riji3 3a lebnan', en:'came back to Lebanon',       note:'Return visits are emotionally significant events'},
  {ar:'بيت الأهل', tr:'beit il-ahl',    en:'family home / parents\' house', note:'The anchor — what emigrants return to'},
  {ar:'حوّلات',   tr:'7awwalat',        en:'money transfers / remittances',  note:'Remittances are ~20% of Lebanon\'s GDP'},
  {ar:'جواز سفر', tr:'jawwaz safar',    en:'passport',                       note:'Lebanese passport — intense negotiations and queues'},
  {ar:'تأشيرة',   tr:'ta2shira',        en:'visa',                           note:'Getting a visa out is a saga for many Lebanese'},
  {ar:'ابن الغربة', tr:'ibn il-ghurbe', en:'child of the diaspora',          note:'Someone born or raised abroad to Lebanese parents'},
  {ar:'الضيعة',   tr:'id-diy3a',        en:'the village / hometown',         note:'Lebanese identity is often tied to the ancestral village'},
  {ar:'يا غريب',  tr:'ya gharib',       en:'oh stranger / oh exile',         note:'Lament used in songs and poetry about being far from home'}
];

const SFR_DRILLS = [
  {q:'What does "il-ghurbe" mean?',                opts:['a trip abroad','being away from homeland','a Lebanese village','a type of visa'],            a:1},
  {q:'Which word means "the diaspora / place of emigration"?', opts:['il-fasad','id-diy3a','il-mahjar','7awwalat'],                                      a:2},
  {q:'"Ma fi mustaqbal houn" — what does this express?',       opts:['I love it here','no future here','the village is beautiful','come back home'],     a:1},
  {q:'What are "7awwalat"?',                                   opts:['passports','money transfers / remittances','villages','visas'],                      a:1},
  {q:'What does "biddo yikammel" literally mean in emigration context?', opts:['he wants to finish eating','he wants to complete himself (build a life)','he wants to travel for fun','he wants to buy a house'], a:1},
  {q:'"Ibn il-ghurbe" refers to?',                             opts:['a village elder','a corrupt official','child of the diaspora','a returning expat'], a:2},
  {q:'What is "id-diy3a"?',                                    opts:['the passport','the village / hometown','a money transfer','corruption'],             a:1},
  {q:'Which phrase expresses deep longing for home?',          opts:['ra7 3a amrika','shoq','jawwaz safar','ta2shira'],                                    a:1}
];

const SFR_TIPS = [
  {title:'Why Lebanon Emigrates',           body:'Lebanon has one of world\'s highest emigration rates — ~14 million in diaspora vs ~5 million at home. Wars, economic collapse, and political dysfunction push waves of Lebanese abroad. Every family has someone in Brazil, Australia, Ivory Coast, or Detroit.'},
  {title:'The Weight of "Il-Ghurbe"',       body:'"Il-ghurbe" is not just "abroad" — it carries grief, longing, and displacement. Lebanese songs and poets obsess over it. The Mahjar literary movement (Gibran Khalil Gibran, Mikhail Naimy) was born from Lebanese diaspora poets in the early 1900s writing about this ache.'},
  {title:'Remittances Keep Lebanon Alive',  body:'Lebanese abroad send billions home every year — "7awwalat" (remittances) represent ~20% of GDP. After the 2019 economic collapse, families abroad became lifelines for relatives stuck inside a bankrupt country where banks froze accounts.'},
  {title:'The Village Identity',            body:'Ask a Lebanese where they\'re from and they name their "diy3a" (village) — not Beirut. Even third-generation diaspora Lebanese know their ancestral village. The village is identity, elections, marriage connections, and the reason to return every summer.'}
];
