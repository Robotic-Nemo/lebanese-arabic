// R1227 — NEW FEATURE: Lebanese Carob & Mountain Harvest Culture (krb)
const KRB_WORDS = [
  {ar:'خروب',tr:'kharroob',en:'carob / carob tree',cat:'plant'},
  {ar:'دبس الخروب',tr:'dibs l-kharroob',en:'carob molasses',cat:'food'},
  {ar:'دبس العنب',tr:'dibs l-3inab',en:'grape molasses',cat:'food'},
  {ar:'طحينة',tr:'T7eene',en:'tahini / sesame paste',cat:'food'},
  {ar:'دبس وطحينة',tr:'dibs w-T7eene',en:'molasses with tahini (classic dip)',cat:'dish'},
  {ar:'قرن الخروب',tr:'2arn l-kharroob',en:'carob pod',cat:'plant'},
  {ar:'حصاد',tr:'7saad',en:'harvest',cat:'event'},
  {ar:'موسم الحصاد',tr:'mawsim l-7saad',en:'harvest season',cat:'time'},
  {ar:'بستان',tr:'bustaan',en:'orchard / grove',cat:'place'},
  {ar:'شجرة الخروب',tr:'shajaret l-kharroob',en:'carob tree',cat:'plant'},
  {ar:'معصرة',tr:'ma3Sara',en:'press / oil mill',cat:'equipment'},
  {ar:'طحين الخروب',tr:'T7een l-kharroob',en:'carob flour',cat:'ingredient'},
  {ar:'مربى التين',tr:'morabba t-teen',en:'fig jam',cat:'food'},
  {ar:'مونة',tr:'moone',en:'home pantry / preserved foods',cat:'concept'},
  {ar:'الشوف',tr:'l-shouf',en:'the Shouf mountain region',cat:'place'},
  {ar:'كسروان',tr:'Kesrwan',en:'Kesrwan mountain region',cat:'place'},
  {ar:'تصدير',tr:'tasdeer',en:'export',cat:'activity'},
  {ar:'منتج طبيعي',tr:'muntaj Tab3i',en:'natural product',cat:'general'},
  {ar:'حلو مر',tr:'7elo morr',en:'bittersweet (carob flavour)',cat:'taste'},
  {ar:'عصير الخروب',tr:'3aseer l-kharroob',en:'carob juice / extract',cat:'food'},
];

const KRB_DRILLS = [
  {q:'What is "dibs l-kharroob" in Lebanese?',opts:['grape syrup','carob molasses','fig jam','date paste'],ans:1,exp:'دبس الخروب = carob molasses — one of Lebanon\'s oldest sweeteners. Produced by pressing carob pods, then slow-cooking the juice into thick dark syrup. The Shouf and Kesrwan mountains are major producers. Rich, earthy, and naturally sweet — Lebanese families spread it on bread alongside tahini for breakfast for generations.'},
  {q:'What is "T7eene" in Lebanese Arabic?',opts:['flour','honey','tahini / sesame paste','molasses'],ans:2,exp:'طحينة = tahini — ground sesame seed paste, a cornerstone of Lebanese cuisine. Combined with dibs (molasses), it creates "dibs w-T7eene," the classic mountain breakfast dip eaten with bread. Also used in hummus, kibbeh, and dozens of Lebanese dishes. Lebanese tahini is sesame-forward and slightly bitter, balanced perfectly by carob\'s sweetness.'},
  {q:'What is "dibs w-T7eene" in Lebanese culture?',opts:['a grilled meat dish','a breakfast dip of molasses and tahini','a type of mountain cheese','a sweet drink'],ans:1,exp:'دبس وطحينة = molasses and tahini — arguably Lebanon\'s most iconic mountain breakfast. Carob molasses and tahini are swirled together on a plate and scooped up with fresh bread. Every Lebanese village family grew up with this combination. Simple, nutritious, deeply traditional — the taste of Lebanese mountain mornings.'},
  {q:'What is "moone" (مونة) in Lebanese culture?',opts:['a wedding gift tradition','home pantry of preserved foods','a type of bread oven','a mountain spring'],ans:1,exp:'مونة = home pantry / preserved foods — the Lebanese tradition of stocking seasonal preserves: pickles, jams, dried herbs, olive oil, dibs, kishk, and mouneh cheeses. Every mountain family prepared mouneh in autumn to last through winter. The word evokes self-sufficiency, mountain wisdom, and the slow cycles of Lebanese village life.'},
  {q:'The Shouf mountains (l-shouf) are especially famous for which Lebanese product?',opts:['sea salt','carob orchards and dibs','cedar wood crafts','mountain wool weaving'],ans:1,exp:'الشوف = the Shouf — a mountainous district south of Beirut, home to the Chouf Cedar Reserve and Lebanon\'s most productive carob groves. Shouf dibs l-kharroob is prized across the Arab world. The ancient carob trees, some centuries old, line the mountain terraces alongside olive, fig, and pine. The Chouf is also home to the Druze community and the Beiteddine Palace.'},
  {q:'What does "7saad" mean in Lebanese?',opts:['planting season','irrigation','harvest','forest clearing'],ans:2,exp:'حصاد = harvest — the culmination of the farming year. In Lebanese mountain villages, the carob harvest (7saad l-kharroob) happens in September and October, when pods are beaten from trees with long poles, gathered in sacks, and carried to the ma3Sara (press). Entire village families worked together for the 7saad — it was a social event as much as agricultural labor.'},
  {q:'What is "bustaan" in Lebanese Arabic?',opts:['a mountain pass','an orchard or grove','a water spring','a stone wall'],ans:1,exp:'بستان = orchard / grove — Lebanon\'s mountain terraces are filled with bustaanat (orchards): carob, olive, fig, and apple. The bustaan was the family\'s wealth and food security. Lebanese villages are defined by their orchard terraces, and every family knew which trees belonged to whom across generations. The word evokes abundance, shade, and the productive mountain landscape.'},
  {q:'What taste does "7elo morr" describe in Lebanese?',opts:['sour and salty','sweet and bitter','spicy and smoky','cold and refreshing'],ans:1,exp:'حلو مر = bittersweet — the precise flavor of fresh carob. Carob pods are naturally sweet but carry a slight tannic bitterness, making them "7elo morr." Lebanese people use this phrase beyond food — it also describes life situations: bittersweet memories, the feeling of leaving Lebanon, or nostalgia for village summers. A phrase with deep emotional resonance.'},
];

const KRB_TIPS = [
  {title:'Dibs el-Kharroob — Lebanon\'s Liquid Brown Gold',body:'Carob molasses (dibs l-kharroob) is one of Lebanon\'s oldest traditional foods. Made by pressing carob pods and slow-cooking the juice into a thick, dark, intensely sweet syrup, it has nourished Lebanese mountain families for millennia. Before sugar was widely available, carob dibs was the primary sweetener in mountain villages. Today, small producers in the Shouf, Kesrwan, and Beit Mery still make it traditionally — and a jar of authentic Lebanese dibs sells for premium prices in Beirut and Gulf markets, valued as a pure, chemical-free product tied to mountain heritage.'},
  {title:'Dibs w-T7eene — The Mountain Breakfast',body:'The combination of carob molasses and tahini — swirled together on a small plate and scooped up with fresh flatbread — is the defining breakfast of Lebanese mountain culture. Simple ingredients, extraordinary depth of flavor: the earthy sweetness of kharroob balanced by the nutty bitterness of T7eene. Lebanese grandparents still make it every morning. You\'ll find it in village guesthouses, mountain b&bs, and even upscale Beirut restaurants nostalgic for village life. If you visit a Lebanese home in the Shouf or Kesrwan, this is what you\'ll be served with morning coffee.'},
  {title:'Mouneh — The Mountain Pantry',body:'Mouneh (مونة) is the Lebanese art of home preservation: filling the pantry with seasonal products before winter. Every autumn, mountain families would make kibbeh nayye and freeze it, press olive oil, boil grape juice into dibs, dry za3tar (thyme), pickle vegetables, and jar fruit jams. The mouneh stored a family\'s entire food security through winter. Today, the mouneh tradition is having a revival — upscale Beirut food shops sell artisanal mouneh products, and agro-tourism farms offer mouneh-making workshops. It\'s both heritage and a marketing phenomenon.'},
  {title:'The Carob Tree — Lebanon\'s Ancient Survivor',body:'Carob trees (Ceratonia siliqua) have grown on Lebanese mountain slopes since antiquity. Hardy, drought-resistant, and capable of living hundreds of years, they were called the "tree of the poor" — reliable food in lean times. Their pods fed animals and people alike. The seeds were famously used as units of weight in ancient trade — the word "carat" (for measuring gold) is believed to derive from the Arabic "2arat" (carob seed), because the seeds were so uniformly sized they served as standard weights. Lebanon\'s carob trees connect contemporary mountain culture to the ancient Mediterranean world.'},
];
