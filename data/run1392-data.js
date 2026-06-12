// R1392 — NEW FEATURE: Lebanese Bedouin Heritage & Desert Influence (bdw)
const BDW_WORDS = [
  {ar:'بدوي',tr:'badawi',en:'Bedouin / nomadic'},
  {ar:'خيمة',tr:'kheyme',en:'tent'},
  {ar:'صحراء',tr:'sa7ra',en:'desert'},
  {ar:'قافلة',tr:'2afle',en:'caravan'},
  {ar:'ناقة',tr:'na2a',en:'camel (female)'},
  {ar:'جمل',tr:'jamal',en:'camel'},
  {ar:'كرم',tr:'karam',en:'generosity / hospitality'},
  {ar:'ضيافة',tr:'diyafe',en:'hosting / hospitality rite'},
  {ar:'مضافة',tr:'mudafa',en:'guest tent / reception area'},
  {ar:'قهوة مرة',tr:'2ahwe murra',en:'bitter (unsweetened) coffee'},
  {ar:'شيخ',tr:'sheikh',en:'tribal elder / chief'},
  {ar:'عباءة',tr:'3abaye',en:'cloak / abaya'},
  {ar:'كوفية',tr:'kufiyye',en:'headscarf / keffiyeh'},
  {ar:'رعي',tr:'ra3i',en:'herding / grazing'},
  {ar:'غنم',tr:'ghanam',en:'sheep / flock'},
  {ar:'بئر',tr:'bir',en:'water well'},
  {ar:'نجوم',tr:'njum',en:'stars'},
  {ar:'سمح',tr:'sama7',en:'to forgive / be generous'},
  {ar:'شرف',tr:'sharaf',en:'honor'},
  {ar:'أصيل',tr:'asil',en:'noble / of pure lineage'}
];

const BDW_DRILLS = [
  {q:'A "badawi" (بدوي) person is traditionally...?',opts:['a city merchant','a nomadic desert dweller','a mountain farmer','a fisherman'],a:1},
  {q:'"Karam" (كرم) is the Bedouin virtue of...?',opts:['bravery','silence','generosity','prayer'],a:2},
  {q:'The "mudafa" (مضافة) in a Bedouin camp is...?',opts:['a water well','a guest reception tent','a sleeping area','a cooking fire'],a:1},
  {q:'"2ahwe murra" (قهوة مرة) literally means...?',opts:['strong coffee','morning coffee','bitter coffee','sweet coffee'],a:2},
  {q:'A "sheikh" (شيخ) in tribal culture is...?',opts:['a young warrior','a cook','a tribal elder or chief','a merchant'],a:2},
  {q:'"Sharaf" (شرف) — deeply important in Bedouin culture — means...?',opts:['wealth','honor','water','family'],a:1},
  {q:'"Asil" (أصيل) describes someone or something that is...?',opts:['poor','fast','of noble pure lineage','foreign'],a:2},
  {q:'In Bedouin hospitality the host gives "diyafe" (ضيافة). This means...?',opts:['selling goods to guests','a formal hosting rite','refusing visitors','cooking alone'],a:1}
];

const BDW_TIPS = [
  {title:'Bedouin Roots in Lebanon',body:'Though Lebanon is known for its Mediterranean coast and mountains, Bedouin culture left a deep imprint on the Bekaa Valley and south Lebanon. Many Lebanese family names, proverbs, and customs trace to Bedouin Arab tribes who settled the region centuries ago. "Karam" (generosity) as a core cultural value — serving anyone who arrives at your home without question — is directly Bedouin in origin.'},
  {title:'The Tent & the Guest',body:'In Bedouin tradition, the "kheyme" was divided into two sections: one for women and family, and the "mudafa" — the men\'s guest tent — for receiving travelers. Any stranger could request shelter and food for three days, no questions asked. This law of hospitality (diyafe) was enforced by honor (sharaf). Refusing a guest was a profound social shame. This ethos lives on in Lebanese hosting culture.'},
  {title:'Bitter Coffee Ritual',body:'"2ahwe murra" (bitter coffee) served in tiny cardamom-spiced cups is the Bedouin version of Arabic coffee — unsweetened and poured from a long-spouted dallah pot. The host pours a small amount (never filling the cup); the guest shakes the cup side to side to signal "enough." Accepting the third refill signals deep trust. This exact ritual survives in Lebanese homes today, especially in the Bekaa.'},
  {title:'Bedouin Words in Lebanese Arabic',body:'Many everyday Lebanese words trace to Bedouin Arabic: "ghanam" for sheep, "kufiyye" for the headscarf, "bir" for water well, and even expressions like "sama7 allah" (may God forgive) and "3abaye" (cloak). The phrase "ana asil" (I am of noble stock) is still used with pride. Bedouin star-navigation vocabulary — the "njum" (stars) — gave early Lebanese shepherds their seasonal farming calendar.'}
];
