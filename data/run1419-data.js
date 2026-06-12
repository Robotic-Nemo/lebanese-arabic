// R1419 — NEW FEATURE: Lebanese Tabbouleh & Salad Culture (tbb)
const TBB_WORDS = [
  {ar:'تبولة',tr:'tabbule',en:'tabbouleh (parsley & bulgur salad)'},
  {ar:'فتوش',tr:'fattoush',en:'fattoush (toasted bread salad)'},
  {ar:'بقدونس',tr:'ba2dounis',en:'parsley'},
  {ar:'برغل',tr:'burghol',en:'bulgur wheat'},
  {ar:'نعنع',tr:'na3na3',en:'mint'},
  {ar:'طماطم',tr:'banadoura',en:'tomato'},
  {ar:'خيار',tr:'khyar',en:'cucumber'},
  {ar:'بصل',tr:'basal',en:'onion'},
  {ar:'زيت زيتون',tr:'zeit zaytoun',en:'olive oil'},
  {ar:'ليمون',tr:'laymoun',en:'lemon'},
  {ar:'فريكي',tr:'freekeh',en:'freekeh (roasted green wheat)'},
  {ar:'حمص',tr:'7ommos',en:'chickpeas / hummus'},
  {ar:'رشتة',tr:'rishte',en:'kishk salad (fermented)'},
  {ar:'فاتح للشهية',tr:'fate7 lal-shahiyye',en:'appetite-opener (mezze starter)'},
  {ar:'خل',tr:'khall',en:'vinegar'},
  {ar:'سماق',tr:'suma2',en:'sumac (spice)'},
  {ar:'زيتون',tr:'zaytoun',en:'olives'},
  {ar:'خبز مقلي',tr:'khobz me2li',en:'fried bread (for fattoush)'},
  {ar:'صلصة',tr:'Salsa',en:'dressing / sauce'},
  {ar:'أعشاب',tr:'a3shab',en:'herbs'}
];

const TBB_DRILLS = [
  {q:'What are the two main ingredients in authentic Lebanese tabbouleh?',opts:['rice and chickpeas','parsley and bulgur wheat','spinach and lentils','tomato and onion only'],a:1},
  {q:'The Lebanese saying "tabbule mta3na a7san" (تبولة متعنا أحسن) means...?',opts:['our tabbouleh is the best','tabbouleh is a summer dish','parsley is healthy','we only eat tabbouleh'],a:0},
  {q:'What makes fattoush (فتوش) distinct from other salads?',opts:['it has no vegetables','it contains toasted or fried bread pieces','it is always served hot','it has no dressing'],a:1},
  {q:'"Suma2" (سماق) is added to fattoush for...?',opts:['sweetness','thickening','a tart/sour flavor','crunch'],a:2},
  {q:'In Lebanese tradition, tabbouleh should be heavy on...?',opts:['bulgur wheat','parsley (ba2dounis)','tomatoes','olive oil'],a:1},
  {q:'What does "fate7 lal-shahiyye" (فاتح للشهية) mean in a mezze context?',opts:['the main dish','an appetite stimulator or starter','a dessert','a hot dish'],a:1},
  {q:'"Burghol" (برغل) in tabbouleh is...?',opts:['a type of cheese','cracked/ground wheat','a spice','a type of bread'],a:1},
  {q:'Lebanese families often say tabbouleh must be eaten with...?',opts:['a fork only','your hands and khass (lettuce) leaves','a spoon','a knife'],a:1}
];

const TBB_TIPS = [
  {title:'Tabbouleh — Lebanon\'s National Salad',body:'Tabbouleh (تبولة) is arguably Lebanon\'s most iconic dish — a fresh herb salad of finely chopped parsley, bulgur wheat, tomato, onion, lemon juice, and olive oil. The Lebanese version is parsley-dominant: the herb is the star, with bulgur playing a supporting role. This differs from many diaspora versions that use too much grain. Lebanese families take fierce pride in their tabbouleh, and the recipe is passed through generations. "Hayda mish tabbule" (هيدا مش تبولة — this is not tabbouleh) is a serious insult to a poorly made version. It\'s always served as part of mezze and is Lebanon\'s most-recognized contribution to world cuisine.'},
  {title:'Fattoush — The Bread Salad',body:'Fattoush (فتوش) is a peasant salad born from frugality — stale or leftover bread (khobz) was fried or toasted and tossed with vegetables and tangy sumac dressing. Today it\'s a beloved mezze staple. The crunchy bread pieces soak up the sumac-lemon dressing as you eat. Sumac (سماق) gives fattoush its signature brick-red tint and sour punch. Purists insist the bread must be added at the last moment so it stays crisp. Regional variations exist: some add pomegranate seeds, purslane (ba2le), or radishes. "Fattoush taba3on" (فتوش طبعون — their fattoush) is a phrase meaning "to each their own style."'},
  {title:'Salad as Social Ritual',body:'In Lebanese culture, salads are not an afterthought — they anchor the mezze table. Serving tabbouleh without proper parsley-to-bulgur ratio, or fattoush without sumac, is a social faux pas. Mothers and grandmothers are judged on their tabbouleh. "3amilet tabbule" (عاملة تبولة — she made tabbouleh) signals a full proper gathering is happening. Salads must be fresh — Lebanese reject pre-made or refrigerated versions. The act of chopping parsley by hand (not blending) is a point of pride. Fresh lemon juice — never bottled — is non-negotiable. Olive oil must be Lebanese "zeit bladi" (زيت بلدي — village oil) for the best families.'},
  {title:'Mezze Salad Ritual',body:'Lebanese mezze always opens with a spread of cold salads: tabbouleh, fattoush, cucumber-tomato salata, hummus, moutabal. The salads signal abundance and hospitality. "Kabiyet l-mehbal" (كبية المحبل) — the big serving platter — appears early. Tabbouleh is traditionally scooped with romaine or regular lettuce leaves used as spoons — a hands-on eating style that foreigners find surprisingly intimate. Restaurant tabbouleh in Beirut is judged harshly — locals compare it to home versions constantly. During summer, fresh herbs from the garden are used; in winter, market parsley. Tabbouleh leftovers the next day are eaten with bread — "aklit el-ghada" (أكلة الغدا — next-day lunch).'}
];
