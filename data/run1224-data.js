// R1224 — NEW FEATURE: Lebanese Bee & Honey Culture (nhl)
const NHL_WORDS = [
  {ar:'نحل',tr:'na7l',en:'bee / bees',cat:'creature'},
  {ar:'عسل',tr:'3asal',en:'honey',cat:'product'},
  {ar:'نحّال',tr:'na7aal',en:'beekeeper',cat:'person'},
  {ar:'خلية',tr:'khaliyye',en:'beehive',cat:'equipment'},
  {ar:'شمع',tr:'sham3',en:'beeswax',cat:'product'},
  {ar:'ملكة النحل',tr:'malket n-na7l',en:'queen bee',cat:'creature'},
  {ar:'طرود',tr:'Turood',en:'swarm (of bees)',cat:'creature'},
  {ar:'عسل الزعتر',tr:'3asal z-za3tar',en:'thyme honey',cat:'product'},
  {ar:'عسل الخروب',tr:'3asal l-kharroob',en:'carob honey',cat:'product'},
  {ar:'عسل جبلي',tr:'3asal jabali',en:'mountain honey',cat:'product'},
  {ar:'موسم العسل',tr:'mawsim l-3asal',en:'honey season',cat:'time'},
  {ar:'تلقيح',tr:'tal2ee7',en:'pollination',cat:'process'},
  {ar:'رحيق',tr:'ra7ee2',en:'nectar',cat:'ingredient'},
  {ar:'حبق',tr:'7aba2',en:'basil (bee flower)',cat:'plant'},
  {ar:'زعتر بري',tr:'za3tar barri',en:'wild thyme (mountain herb)',cat:'plant'},
  {ar:'صندوق النحل',tr:'sandoo2 n-na7l',en:'beekeeping box / Langstroth hive',cat:'equipment'},
  {ar:'دخان',tr:'dkhaan',en:'smoke (to calm bees)',cat:'tool'},
  {ar:'قناع النحّال',tr:'2inaa3 n-na7aal',en:'beekeeper\'s mask/veil',cat:'equipment'},
  {ar:'عكار',tr:'3akkaar',en:'Akkar (north Lebanon honey region)',cat:'place'},
  {ar:'الشوف',tr:'l-shouf',en:'the Shouf (mountain honey area)',cat:'place'},
];

const NHL_DRILLS = [
  {q:'What is "3asal" in Lebanese Arabic?',opts:['bee','beeswax','honey','nectar'],ans:2,exp:'عسل = honey — Lebanon\'s mountain honey (3asal jabali) is prized across the Arab world. Thyme honey (3asal z-za3tar) from wild mountain thyme is the most famous variety, collected in the Akkar and Shouf highlands.'},
  {q:'What is a "na7aal" in Lebanese?',opts:['swarm of bees','beekeeper','queen bee','nectar flower'],ans:1,exp:'نحّال = beekeeper — Lebanese mountain na7aaleen (beekeepers) have practiced traditional beekeeping for centuries. Families in Akkar, Kesrwan, and the Shouf kept khaliyyaat (hives) in rocky crevices and wooden boxes as a livelihood.'},
  {q:'What does "malket n-na7l" mean?',opts:['honeycomb','beehive','beeswax candle','queen bee'],ans:3,exp:'ملكة النحل = queen bee — the single fertile female who leads the entire khaliyye (hive). Every worker bee is her daughter. Lebanese beekeepers speak of the queen with respect — without her, the swarm disperses.'},
  {q:'Which Lebanese region is most famous for 3asal jabali (mountain honey)?',opts:['Beirut','Tripoli','3akkaar & l-shouf','Sidon'],ans:2,exp:'عكار والشوف = Akkar and the Shouf — the high mountain regions of Lebanon produce the most prized wild honey. Akkar\'s wild za3tar barri (thyme) and mountain flowers create honey so distinctive it can be identified by taste alone.'},
  {q:'What is "za3tar barri" in the context of honey?',opts:['a type of hive','the nectar source for thyme honey','beeswax extracted from combs','the honey season'],ans:1,exp:'زعتر بري = wild thyme — Lebanon\'s mountain thyme (Thymus vulgaris and related species) is the primary source for 3asal z-za3tar. Bees on the Shouf hillsides and Akkar highlands feed almost exclusively on za3tar blossom in spring, producing amber honey with intense herbal flavor.'},
  {q:'What is "Turood" in Lebanese?',opts:['honeycombs','pollination','a swarm of bees','smoke used by beekeepers'],ans:2,exp:'طرود = swarm — when a hive overcrowds, thousands of bees leave together in a massive Turood (swarm), following a new queen to find a new home. Lebanese beekeepers watch for swarms in spring — catching a Turood and placing it in a new sandoo2 (box) was how colonies were expanded.'},
  {q:'What do Lebanese beekeepers use "dkhaan" (smoke) for?',opts:['to harvest beeswax','to attract the queen bee','to calm bees during hive inspection','to mark hive boundaries'],ans:2,exp:'دخان = smoke — a classic beekeeping tool worldwide and in Lebanon. The smoke triggers bees\' instinct to gorge on honey (preparing to flee a "fire"), making them calm and docile for hive inspection. Lebanese na7aaleen traditionally used pine branches or dried dung as fuel.'},
  {q:'What is "tal2ee7" in relation to Lebanese mountain flora?',opts:['honey harvesting','pollination','nectar production','hive swarming'],ans:1,exp:'تلقيح = pollination — Lebanese mountain honey bees are critical pollinators of wild za3tar, 7aba2 (basil), and dozens of medicinal mountain plants. The decline of bee populations threatens not just honey production but the entire mountain ecosystem\'s biodiversity.'},
];

const NHL_TIPS = [
  {title:'Lebanon\'s Liquid Gold',body:'Lebanese mountain honey (3asal jabali) is one of the most prized honeys in the Arab world. The high-altitude flower meadows of Akkar, the Shouf, and Kesrwan — carpeted in wild thyme, sage, and carob blossom — produce honey with extraordinary flavor complexity. A jar of authentic Lebanese za3tar honey from Akkar can command premium prices in Beirut delis and Gulf markets. The taste is unmistakably Lebanon: floral, herbal, slightly medicinal, intensely sweet.'},
  {title:'Ancient Practice, Mountain Villages',body:'Lebanese mountain beekeeping predates recorded history. Ancient clay hives (similar to those found at Tel Rehov in nearby Israel) were used in the Levant for 3,000 years. In Lebanese villages, families kept bees in hollowed logs or rock crevices for generations. The sandoo2 n-na7l (wooden Langstroth box) arrived via French missionaries in the 19th century, modernizing production. Today, organizations like the Lebanese Beekeepers Association support traditional na7aaleen in maintaining their craft.'},
  {title:'Bees & Mountain Ecology',body:'Lebanese mountain bees are critical to the Shouf Biosphere Reserve and the Akkar mountains. They pollinate wild medicinal herbs, forest flowers, and fruit orchards. Without bees, the mountain ecosystem collapses. The global crisis of bee colony collapse disorder has hit Lebanese beekeepers too — pesticide runoff from Bekaa Valley agriculture and illegal insecticide use in apple orchards have devastated colonies. Environmental NGOs like ARCENCIEL now work with na7aaleen on sustainable practices.'},
  {title:'Honey in Lebanese Culture',body:'3asal (honey) appears throughout Lebanese folk medicine and daily life. Mixed with lemon and za3tar, it\'s the classic cold remedy. Stirred into warm water with lemon, it\'s morning medicine. Drizzled over labne (yogurt cheese) with walnuts, it\'s a staple mezze. In folk tradition, eating honey before an important event brought good luck. The Quran mentions honey multiple times as a healing gift — making 3asal both a culinary staple and spiritually significant in Lebanese Muslim households.'},
];
