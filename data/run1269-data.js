const KNF_WORDS = [
  { ar:'كنافة', tr:'knefe', en:'knafeh (the pastry)', hint:'Knefe — Lebanon\'s most beloved pastry; hot cheese, syrup-soaked pastry, orange blossom water; Tripoli is the knefe capital of the world' },
  { ar:'جبنة عكاوي', tr:'jebne 3akawiyyeh', en:'Akkawi cheese (for knafeh)', hint:'Jebne 3akawiyyeh — the mild white cheese that melts inside knefe; from 3akka (Acre); soaked in water to remove excess salt before use' },
  { ar:'قطر', tr:'2atar', en:'sugar syrup (for pastry)', hint:'2atar — the sweet rose/orange-blossom syrup poured hot over fresh knefe; poured cold on hot pastry at the critical moment' },
  { ar:'كشتة', tr:'2ishte', en:'clotted cream / ashta', hint:'2ishte — Lebanese clotted cream; some knefe use 2ishte instead of cheese; also on top of kaak and other sweets' },
  { ar:'فستق', tr:'fste2', en:'pistachio', hint:'Fste2 — crushed green pistachios scattered on top of knefe; the green against orange is the signature look' },
  { ar:'ورد الجوري', tr:'ward el-jawri', en:'rose water / rose essence', hint:'Ward el-jawri — rose water in the 2atar; Lebanese sweets smell of roses and orange blossom; never artificial essence' },
  { ar:'ميسم', tr:'maysam', en:'orange blossom water', hint:'Maysam — orange blossom water alongside rose water; both go into knefe syrup and into Lebanese coffee' },
  { ar:'عجينة خشنة', tr:'3ajinet khshine', en:'coarse pastry / kataifi dough', hint:'3ajinet khshine — the shredded wheat-like dough that forms the crispy orange layer of classic knefe; \'khshouneh\' means roughness' },
  { ar:'صينية', tr:'seenier', en:'tray / baking tray', hint:'Seenier — knefe always comes on a big round copper seenier; served by the piece cut from the shared tray' },
  { ar:'حلويات', tr:'7alawiyyat', en:'pastry shop / sweets', hint:'7alawiyyat — the pastry shop; Tripoli has whole streets of 7alawiyyat competing for the best knefe; open from morning for breakfast' },
  { ar:'نص نص', tr:'ness ness', en:'half and half (mixed layers)', hint:'Ness ness — knefe made half coarse dough, half fine semolina; popular variation; also slang for mixed/half-half anything' },
  { ar:'سمولة', tr:'smoli', en:'semolina / fine pastry base', hint:'Smoli — semolina-based knefe (softer base than 3ajinet khshine); Beirut style tends toward smoli; Tripoli insists on coarse' },
  { ar:'نار', tr:'naar', en:'fire / heat', hint:'Naar — knefe must be served hot, straight from the naar; cold knefe is a waste; the phrase "3al naar" means on the fire/cooking right now' },
  { ar:'بسطة', tr:'baste', en:'street stall / cart vendor', hint:'Baste — many knefe are sold from bastes, especially in Tripoli; a baste vendor might sell nothing but knefe all day' },
  { ar:'عيش البيك', tr:'3aysh el-beyk', en:'pasha bread (knafeh sandwich)', hint:'3aysh el-beyk — knefe served inside a round bread ring; the Tripoli way; literally "the bey\'s bread"; a full breakfast for workers' },
  { ar:'طازج', tr:'taazej', en:'fresh / just made', hint:'Taazej — knefe must be taazej; never reheated; the 7alawiyyat makes it in rounds and you wait your turn for the fresh batch' },
  { ar:'حار', tr:'7aar', en:'hot / spicy / warm', hint:'7aar — knefe must be 7aar (hot); the contrast of hot cheese with cold 2atar is the whole point; "aatini wa7de 7arra" = give me one hot' },
  { ar:'رمضان', tr:'ramadan', en:'Ramadan (peak sweets season)', hint:'Ramadan — knefe production triples in Ramadan; whole families come after iftar for fresh knefe at the 7alawiyyat' },
  { ar:'مهبّل', tr:'mahabbel', en:'crazy about (very enthusiastic)', hint:'Mahabbel 3al knefe — "crazy about knefe"; Lebanese slang for intense enthusiasm; same root as "habbel" (to make crazy with love)' },
  { ar:'برمة', tr:'broumet', en:'copper/aluminum tray', hint:'Broumet el-knefe — the thick metal pan that goes directly on the gas ring; the knefe gets its crispy bottom from the broumet on direct heat' }
];

const KNF_DRILLS = [
  { q:'What is "knefe"?', opts:['a cheese soup','a flatbread','the knafeh pastry','a rice dish'], ans:2 },
  { q:'"2atar" means...?', opts:['rose water','the cheese','sugar syrup','pistachio'], ans:2 },
  { q:'What is "jebne 3akawiyyeh"?', opts:['clotted cream','Akkawi cheese','orange blossom water','semolina'], ans:1 },
  { q:'"Fste2" is...?', opts:['the dough','pistachio','sugar','rose water'], ans:1 },
  { q:'What does "taazej" mean?', opts:['hot','sweet','fresh/just made','crispy'], ans:2 },
  { q:'"7alawiyyat" means...?', opts:['the cheese','a copper tray','pastry shop/sweets','semolina dough'], ans:2 },
  { q:'What is "3aysh el-beyk"?', opts:['a type of cheese','knafeh in bread','a copper tray','the syrup'], ans:1 },
  { q:'"2ishte" is...?', opts:['coarse dough','the syrup','clotted cream','pistachio'], ans:2 }
];

const KNF_TIPS = [
  { title:'Tripoli vs. Beirut — The Great Knefe Debate', body:'Lebanon\'s most heated pastry debate: Tripoli (Trablus) insists its knefe is the only authentic version, made with coarse shredded dough (3ajinet khshine), Akkawi cheese, and served in a bread ring (3aysh el-beyk). Beirut leans toward smoli (semolina base) which is softer and less crispy. A Tripolitan will tell you Beirut knefe is an insult to the tradition. Both sides agree on one thing: knefe must be served 7aar (hot) right off the fire, drowned in 2atar poured cold on hot pastry at the exact critical moment. Never reheat it.' },
  { title:'The 2atar Moment — Timing is Everything', body:'The defining moment in knefe craft is the 2atar pour. The pastry comes off the fire at the peak of heat, then is flipped onto the seenier (serving tray), and immediately the cold, aromatic 2atar (sugar syrup scented with rose water and orange blossom) is poured across the surface. The sound is dramatic — a hiss and crackle as cold syrup hits the hot pastry. This contrast — hot cheese, crispy base, cold sweet syrup — is the whole point. The 2atar must be ready before the knefe, not vice versa.' },
  { title:'Knefe for Breakfast — The Tripoli Tradition', body:'In Tripoli, the most traditional way to eat knefe is as breakfast, not dessert. Workers and merchants stop at a baste (street stall) from 6am for a 3aysh el-beyk: a thick round bread ring stuffed with hot knefe, eaten with hands, wrapped in paper. By 9am, the best spots have sold out. Families who want it for a proper sit-down often call ahead the night before. On Fridays and during Ramadan, the queues start before sunrise and the 7alawiyyat (pastry shops) run continuous production shifts.' },
  { title:'The Cheese Secret — Desalting Akkawi', body:'The secret to good knefe is in the cheese preparation. Raw jebne 3akawiyyeh (Akkawi cheese) is too salty to use directly — it must be soaked in cold water for hours, with water changed several times, until the salt is drawn out. The desalted cheese is then shredded or sliced thin. This process is what separates home knefe from a lazy knefe — skip the soaking and the salt overwhelms the sweetness. Some bakers also add 2ishte (clotted cream) alongside the cheese for a richer texture, particularly in the Beirut and Mountain style.' }
];
