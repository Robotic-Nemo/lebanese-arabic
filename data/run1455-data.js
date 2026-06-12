// R1455 — NEW FEATURE: Lebanese Bouza & Traditional Ice Cream (byz)
const BYZ_WORDS = [
  {w:'bouza',        t:'بوظة',          tr:'ice cream (Lebanese)',              ex:'3teeni bouza bi-l-fistou2 min fadlak',          et:'Give me pistachio ice cream please'},
  {w:'ashta',        t:'عشطة',          tr:'clotted cream / thick cream',       ex:'l-bouza bi-l-ashta mn a7la l-7alawiyyat',      et:'Bouza with clotted cream is one of the best sweets'},
  {w:'fistou2',      t:'فستق',          tr:'pistachio',                         ex:'fistou2 7alabi a7san fistou2 bi-l-3alam',       et:'Aleppo pistachio is the best pistachio in the world'},
  {w:'mastic',       t:'مستكة',         tr:'mastic / gum arabic flavour',       ex:'bouza bi-l-mastic bi-tlazze2 bi-l-mala2a',      et:'Mastic ice cream stretches on the spoon'},
  {w:'booze',        t:'بوز',           tr:'ice cream cone / the scoop',        ex:'7att l-booze bi-l-qamha w nazar',               et:'He put the scoop on the wafer cone and showed off'},
  {w:'qamha',        t:'قمحة',          tr:'wafer cone / bread roll',           ex:'biddak qamha willa kub?',                       et:'Do you want a cone or a cup?'},
  {w:'ward',         t:'ورد',           tr:'rose / rose water flavour',         ex:'bouza bi-l-ward w l-fistou2 2ilbiyye',          et:'Rose and pistachio ice cream is classic'},
  {w:'sahl lab',     t:'سحلب',          tr:'sahlab / orchid root thickener',    ex:'l-bouza bi-t7taje sahl lab la-tzabet',          et:'Ice cream needs sahlab to set properly'},
  {w:'laban',        t:'لبن',           tr:'yoghurt ice cream base',            ex:'bouza bi-l-laban khafiife w lazze',             et:'Yoghurt ice cream is light and delicious'},
  {w:'kaspeh',       t:'كاسبيه',        tr:'ice cream cart / vendor cart',      ex:'l-kaspeh bi-da2a2 bi-l-7ayy kull yom',         et:'The ice cream cart rings its bell in the neighborhood every day'},
  {w:'m3allem',      t:'معلّم',         tr:'master / craftsman (icecream maker)',ex:'l-m3allem bi-liff l-bouza bi-yaddo',           et:'The ice cream master spins the bouza with his hand'},
  {w:'mashloul',     t:'مشلول',         tr:'stretched / elastic (ice cream)',   ex:'l-bouza l-3arabiyye mashloul w lazze',          et:'Arabic ice cream is stretchy and delicious'},
  {w:'kafta',        t:'قافطة',         tr:'ice cream paddle / spatula',        ex:'l-m3allem istakhdam l-kafta l-kbire',           et:'The master used the big paddle'},
  {w:'sharbat',      t:'شربات',         tr:'sorbet / sherbet',                  ex:'sharbat l-laymoun bi-l-seif mumtaz',            et:'Lemon sorbet in summer is excellent'},
  {w:'mazaj',        t:'مزاج',          tr:'mood / flavour mood',               ex:'shu mazajak l-yom? abyad willa bunni?',        et:'What\'s your mood today? White (vanilla) or brown (chocolate)?'},
  {w:'debs l-3inab', t:'دبس العنب',     tr:'grape molasses (topping)',          ex:'ba3d l-bouza, 7attit debs l-3inab 3aleiha',    et:'After the ice cream, she put grape molasses on it'},
  {w:'qeshta',       t:'قشطة',          tr:'whipped cream on top',              ex:'baddi bouza bi-qeshta w fistou2',               et:'I want ice cream with whipped cream and pistachio'},
  {w:'sa7en',        t:'صحن',           tr:'plate / sundae dish',               ex:'sa7en bouza bi-tlate nkohat',                   et:'A sundae dish with three flavours'},
  {w:'nakha',        t:'نكهة',          tr:'flavour',                           ex:'2ash7ab nakha biddak?',                        et:'What flavour do you want?'},
  {w:'bared',        t:'بارد',          tr:'cold / chilled',                    ex:'l-bouza lazim tkoun bared bared',               et:'The ice cream must be very cold'},
];

const BYZ_DRILLS = [
  {q:'What is the Lebanese word for "ice cream"?',                       opts:['bouza','ashta','sharbat','qamha'],              ans:'bouza',    correct:0},
  {q:'What does "ashta" mean in Lebanese ice cream context?',            opts:['clotted cream','pistachio','wafer cone','sorbet'], ans:'clotted cream', correct:0},
  {q:'What is "mastic" flavour in ice cream?',                           opts:['gum arabic / elastic flavour','rose water','grape molasses','yoghurt'], ans:'gum arabic / elastic flavour', correct:0},
  {q:'What does "mashloul" mean as an ice cream quality?',               opts:['stretched / elastic','cold','sweet','layered'], ans:'stretched / elastic', correct:0},
  {q:'What is "sharbat" in Lebanese?',                                   opts:['sorbet / sherbet','ice cream cone','master','flavour'], ans:'sorbet / sherbet', correct:0},
  {q:'What is the word for "flavour" in Lebanese Arabic?',               opts:['nakha','mazaj','bared','qeshta'],               ans:'nakha',    correct:0},
  {q:'What is "fistou2" in English?',                                    opts:['pistachio','sahlab','cream','rose'],            ans:'pistachio', correct:0},
  {q:'What does "m3allem" mean in the context of ice cream?',            opts:['master / craftsman','cart vendor','plate','cone'], ans:'master / craftsman', correct:0},
];

const BYZ_TIPS = [
  {title:'Bouza — Lebanon\'s Elastic Ice Cream',  body:'Lebanese bouza (بوظة) is not ordinary ice cream. The secret is sahl lab (سحلب orchid root powder) and mastic (مستكة gum arabic), which give it an extraordinary elastic, stretchy texture. The m3allem (معلّم master) beats and stretches the mixture with a kafta (paddle) — a performance as much as a process. In old Beirut, Souk el-Tawile and Tripoli\'s bouza makers are legendary. The signature move is lifting the bouza high and letting it stretch without breaking — proof of quality.'},
  {title:'Pistachio — The King of Flavours',  body:'Fistou2 (فستق pistachio) is the undisputed king of Lebanese bouza flavours. Lebanese connoisseurs insist on 7alabi (حلبي Aleppan) pistachios from Syria — green, fragrant, and incomparable. A proper bouza bi-l-fistou2 w ashta (ice cream with pistachio and clotted cream) is a national treasure. The ashta (عشطة clotted cream) is made separately from buffalo milk — thick, slightly salty, and ethereal on top of cold bouza. No Lebanese child forgets their first kaspeh (ice cream cart) experience.'},
  {title:'The Kaspeh — Beirut\'s Rolling Ice Cream Vendor',  body:'Before refrigerated shops, the kaspeh (كاسبيه) — the wheeled ice cream cart — was the heart of the neighborhood. The vendor rang a small bell, and children appeared from every direction. The m3allem would scoop into a qamha (قمحة cone) or sa7en (صحن dish), add qeshta (قشطة cream), and drizzle debs l-3inab (دبس العنب grape molasses) as a final flourish. The kaspeh is still found in older Beirut neighborhoods like Basta and Burj Hammoud. It is a childhood trigger for every Lebanese over 30.'},
  {title:'Flavours & Moods — The Lebanese Bouza Vocabulary',  body:'Lebanese bouza comes in dozens of nakhat (نكهات flavours): ward (ورد rose), mastic (مستكة gum), sharbat laymoun (شربات ليمون lemon sorbet), laban (لبن yoghurt), chocolate (شوكولا). Asking "shu mazajak?" (ما مزاجك what\'s your mood?) is how Lebanese vendors read the customer. White flavours (abyad) — vanilla, rose — are for romantic moods. Brown flavours (bunni) — chocolate, coffee — for serious ones. A sa7en tri-flavour sundae is the full Lebanese bouza experience: fistou2, ashta, and ward — pistachio, cream, and rose.'},
];
