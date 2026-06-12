// R1452 — NEW FEATURE: Lebanese Flowers & Floristry (flw)
const FLW_WORDS = [
  {w:'ward',          t:'ورد',           tr:'roses / flowers (general)',        ex:'3ateni ward ya 7abibi',                        et:'Give me flowers, my love'},
  {w:'yasmin',        t:'ياسمين',        tr:'jasmine',                          ex:'rihet l-yasmin min l-7arit l-2adime',          et:'The smell of jasmine from the old neighborhood'},
  {w:'khuzame',       t:'خزامى',         tr:'lavender',                         ex:'l-khuzame bi-l-jbel bi2arri7 l-rassi',        et:'The lavender in the mountains refreshes the mind'},
  {w:'7announ',       t:'حنّون',          tr:'anemone / red windflower (wildflower)', ex:'7announ l-barr bi-zahhar bi-nisan',       et:'The wild anemone blooms in April'},
  {w:'zarr2a',        t:'زرّاعة',        tr:'planting / growing (flowers)',     ex:'teta 3andha zarr2a kbire 3al-balkon',         et:'Grandma has a big flower planting on the balcony'},
  {w:'bahje',         t:'بهجة',          tr:'joy / bloom / delight',            ex:'l-ward bi3ti l-bayt bahje',                   et:'Flowers give the house joy'},
  {w:'bake',          t:'باكيه',         tr:'bouquet',                          ex:'3taytik bake ward l-yom',                     et:'I brought you a bouquet of flowers today'},
  {w:'zannaneh',      t:'زنّانة',        tr:'florist (f) / flower seller',      ex:'l-zannaneh bi-souq l-ward 3arfet kull wa7ad', et:'The florist in the flower market knows everyone'},
  {w:'souq l-ward',   t:'سوق الورد',     tr:'flower market',                    ex:'souq l-ward bi-Beirut bi-ftah bakkir',         et:'Beirut\'s flower market opens early'},
  {w:'3eid l-omm',    t:'عيد الأمّ',     tr:'Mother\'s Day',                    ex:'3eid l-omm bi-Lubnan bi-marto 3ashra',        et:'Mother\'s Day in Lebanon is March 21st'},
  {w:'qrunful',       t:'قرنفل',         tr:'carnation / clove flower',         ex:'l-qrunful l-a7mar simbole l-maqawame',        et:'The red carnation is a symbol of resistance'},
  {w:'nasren',        t:'نسرين',         tr:'wild rose / dog rose',             ex:'nasren l-barr rah3o bi-l-3asfur',             et:'The wild rose has a scent like no other'},
  {w:'sha2iq',        t:'شقيق',          tr:'poppy flower (anemone)',           ex:'sha2iq l-nu3man bi-lahma l-2a7mar',           et:'The anemone (sha2iq) has a vivid red color'},
  {w:'nargis',        t:'نرجس',          tr:'narcissus / daffodil',             ex:'nargis l-jbel byitfattah bi-2awwal l-rabi3',  et:'The mountain narcissus opens at the start of spring'},
  {w:'wardiyyi',      t:'ورديّة',        tr:'rose-colored / pink',              ex:'l-fistan l-wardiyyi 3ala l-3aruse 7elo ktir', et:'The pink dress on the bride is very beautiful'},
  {w:'zaher',         t:'زاهر',          tr:'blossoming / flowering',           ex:'l-jbel l-lubnaani zaher bi-nisan',            et:'The Lebanese mountain is blossoming in April'},
  {w:'3attar',        t:'عطّار',         tr:'herb/flower vendor / perfumer',    ex:'l-3attar bi-l-souq ba33 3ashab w ward',       et:'The herb vendor in the market sells herbs and flowers'},
  {w:'bawq',          t:'باقة',          tr:'bunch / posy (smaller than bake)', ex:'3ataye bawq yasmin min jnenet baytna',        et:'I gave you a bunch of jasmine from our garden'},
  {w:'sabber',        t:'صبّار',         tr:'cactus (aloe vera type)',           ex:'l-sabber bi-n2osh 3al-terras bi-l-seif',     et:'Cactus thrives on the terrace in summer'},
  {w:'rabi3',         t:'ربيع',          tr:'spring / springtime',              ex:'bi-l-rabi3 Lubnan bi-yit7awwal ila jenna',    et:'In spring Lebanon transforms into paradise'},
];

const FLW_DRILLS = [
  {q:'What is the general word for "roses / flowers" in Lebanese Arabic?',      opts:['ward','yasmin','bake','rabi3'],              ans:'ward'},
  {q:'What does "yasmin" mean?',                                                opts:['jasmine','lavender','carnation','anemone'],  ans:'jasmine'},
  {q:'What is "bouquet" in Lebanese Arabic?',                                   opts:['bake','bawq','bahje','ward'],                ans:'bake'},
  {q:'What does "3eid l-omm" mean?',                                            opts:['Mother\'s Day','flower market','spring','bouquet'], ans:'Mother\'s Day'},
  {q:'What is "spring / springtime" in Lebanese Arabic?',                       opts:['rabi3','zaher','wardiyyi','bahje'],          ans:'rabi3'},
  {q:'What is a "zannaneh"?',                                                   opts:['florist (f) / flower seller','bouquet','wildflower','cactus'], ans:'florist (f) / flower seller'},
  {q:'What does "zaher" mean?',                                                 opts:['blossoming / flowering','perfumer','anemone','bunch'], ans:'blossoming / flowering'},
  {q:'What is "lavender" in Lebanese Arabic?',                                  opts:['khuzame','nasren','nargis','7announ'],       ans:'khuzame'},
];

const FLW_TIPS = [
  {title:'Lebanon in Bloom — Spring is Sacred',  body:'The Lebanese rabi3 (ربيع spring) transforms the country into a landscape of wildflowers. Nisan (April) is the month of the 7announ (حنّون anemone), sha2iq (شقيق poppy), and nargis (نرجس narcissus). Lebanese people have deep cultural pride in their mountain wildflowers — hiking trails from Faraya to Tannourine are famous for spring blooms. The phrase "Lubnan bi-l-rabi3" (Lebanon in spring) evokes nostalgia among the diaspora and is a defining image of the homeland.'},
  {title:'Jasmine — The Soul of Lebanese Streets',  body:'No flower is more associated with Lebanon than yasmin (ياسمين jasmine). Vendors sell threaded jasmine garlands (3aqd yasmin) at Beirut traffic lights — a uniquely Lebanese institution. The scent of jasmine drifting from old 7arat (neighborhoods) like Gemmayzeh or Achrafieh is embedded in Lebanese memory. Songs, poetry, and nicknames all reference yasmin. If someone calls you "ya yasmineh" (oh jasmine), they\'re paying you a high compliment.'},
  {title:'Mother\'s Day — Lebanon\'s Floral Holiday',  body:'Lebanon celebrates 3eid l-omm (عيد الأمّ Mother\'s Day) on March 21st — the first day of spring. This timing is intentional: spring flowers symbolize the mother\'s life-giving role. Flower markets and zannanin (florists) are overwhelmed from the night before. Roses (ward), carnations (qrunful), and lilies are the classic choices. Lebanese mothers receive bake ward (bouquets), halawiyat (sweets), and family visits. "Kull 3am w immi bi-kheir" (may my mother be well every year) is the greeting.'},
  {title:'Souq l-Ward — Beirut\'s Flower Market',  body:'Beirut\'s flower market (souq l-ward سوق الورد) is a pre-dawn world of scent and color. Zannanin (florists) and 3attarin (herb-flower vendors) arrive before sunrise to stock up. The market supplies all of Beirut\'s flower shops, hotels, and event planners. Lebanese weddings demand massive floral arrangements — no Lebanese 3irs (wedding) is complete without flowers at every table. The phrase "zahhar l-bayt" (the house is in bloom) means the family is celebrating something wonderful.'},
];
