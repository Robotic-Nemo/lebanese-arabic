// R1425 — NEW FEATURE: Lebanese Political Satire & Dark Humor (plt)
const PLT_WORDS = [
  {ar:'سياسة',tr:'siyese',en:'politics'},
  {ar:'زعيم',tr:'za3im',en:'political leader / boss'},
  {ar:'طائفية',tr:'ta2ifiyye',en:'sectarianism'},
  {ar:'فساد',tr:'fasad',en:'corruption'},
  {ar:'محسوبية',tr:'ma7subiyye',en:'nepotism / favoritism'},
  {ar:'واسطة',tr:'wasaTa',en:'connections / pulling strings'},
  {ar:'جنرال',tr:'janeral',en:'general (political strongman)'},
  {ar:'انتخابات',tr:'intikhabet',en:'elections'},
  {ar:'مين ما بيصير',tr:'min ma byiSir',en:'nothing ever changes'},
  {ar:'بلد الـ ١٨ طائفة',tr:'balad l-tmine3ashar ta2ife',en:'country of 18 sects'},
  {ar:'كلن يعني كلن',tr:'killon ya3ne killon',en:'all of them (corrupt) — protest slogan'},
  {ar:'شعب عم يجوع',tr:'sha3ab 3am yijou3',en:'people are starving'},
  {ar:'دولة فاشلة',tr:'dawle fashle',en:'failed state'},
  {ar:'نكتة سياسية',tr:'nukta siyasiyye',en:'political joke'},
  {ar:'ميم',tr:'meem',en:'meme'},
  {ar:'ثورة',tr:'sewre',en:'revolution'},
  {ar:'انقطاع الكهرباء',tr:'inqiTa3 l-kahraba',en:'electricity cut (political failure)'},
  {ar:'دولار',tr:'dolar',en:'dollar (obsession since crisis)'},
  {ar:'تدخل خارجي',tr:'tadakhkhol khariji',en:'foreign interference'},
  {ar:'شو في ما في',tr:'shou fi ma fi',en:'what\'s going on (resigned tone)'}
];

const PLT_DRILLS = [
  {q:'What does "wasaTa" (واسطة) mean in Lebanese life?',opts:['hard work','pulling strings / using connections','paying taxes','voting'],a:1},
  {q:'"Killon ya3ne killon" (كلن يعني كلن) was a slogan from...?',opts:['a wedding','a sports event','the 2019 revolution protests','a TV show'],a:2},
  {q:'Lebanese "ta2ifiyye" (طائفية) refers to...?',opts:['a type of food','sectarianism dividing politics','a dance style','a mountain festival'],a:1},
  {q:'"Ma7subiyye" (محسوبية) describes...?',opts:['a Lebanese dish','political nepotism and favoritism','an electoral system','a newspaper'],a:1},
  {q:'When Lebanese say "min ma byiSir" (مين ما بيصير), they express...?',opts:['excitement about change','hopeful optimism','resigned fatalism — nothing ever changes','support for a politician'],a:2},
  {q:'Lebanese political humor often targets "inqiTa3 l-kahraba" which is...?',opts:['internet outages','fuel shortages','electricity cuts','water crisis'],a:2},
  {q:'A "za3im" (زعيم) in Lebanese politics is...?',opts:['a neighborhood baker','a political boss or strongman leader','a religious scholar','an army officer'],a:1},
  {q:'"Balad l-tmine3ashar ta2ife" (بلد الـ ١٨ طائفة) refers to Lebanon as...?',opts:['a rich country','a country of 18 religions/sects','a tourist paradise','a unified nation'],a:1}
];

const PLT_TIPS = [
  {title:'Lebanese Political Humor — A Survival Mechanism',body:'Lebanese dark humor about politics is not just comedy — it\'s a coping mechanism for living through crisis after crisis. Since independence in 1943, Lebanon has operated on a confessional power-sharing system dividing government positions among religious sects ("ta2ifiyye"). This system, originally designed for stability, became notorious for corruption ("fasad") and political paralysis. When the 2019 uprising began, crowds chanted "killon ya3ne killon" (كلن يعني كلن — all of them, meaning all politicians are corrupt). Lebanese memes about politicians, electricity cuts, and dollar rates spread globally as the country collapsed. Humor became resistance.'},
  {title:'The "Wasata" Culture',body:'"WasaTa" (واسطة — connections) and "ma7subiyye" (محسوبية — nepotism) are everyday realities in Lebanon. Getting a job, a hospital bed, even a driver\'s license often requires knowing the right person. The joke goes: "You need wasaTa to get wasaTa." Political "za3im" (زعيم — bosses) build loyalty networks by providing jobs and favors to their sectarian communities — which is exactly why sectarianism persists. Lebanese abroad joke that while they\'ve escaped, they still call uncle for connections. "Shater w ma7zouz" (clever and lucky) describes someone who navigated the system.'},
  {title:'The 2019 Revolution & Political Vocabulary',body:'October 17, 2019 saw Lebanon\'s largest popular uprising ("sewre" — ثورة). Protesters blocked roads, formed human chains, and chanted against the entire political class. New vocabulary entered daily speech: "sha3ab yrid isqaT l-niZam" (الشعب يريد إسقاط النظام — the people want to bring down the system), "dawle fashle" (دولة فاشلة — failed state), "tahrir el-balad" (تحرير البلد — liberation of the country). WhatsApp groups became political battlegrounds. The revolution eventually faded under COVID and the Beirut port explosion, but the vocabulary — and the cynicism — remained.'},
  {title:'Memes, Sarcasm & Digital Resistance',body:'Lebanese social media is legendary for dark political humor. When electricity was cut to 1-2 hours per day after the 2020 economic crash, memes comparing Lebanon to "Stone Age" spread. Politicians\' quotes are constantly remixed. "Shou fi ma fi?" (شو في ما في؟ — what\'s going on?) became an ironic catchphrase for a country where the answer is always "everything is broken." Lebanese diaspora abroad create most viral content — distance gives them freedom. "3anjad" (عنجد — seriously?!) and "mwaffa2" (موفق — good luck, sarcastically) punctuate political commentary online.'}
];
