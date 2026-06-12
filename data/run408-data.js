// Run #408 — Lebanese Street Food Coach (sfd)
// Categories: bread-pastry | filling | order | sauce | shop-talk | description

const SFD_WORDS = [
  // bread-pastry
  { ar: 'مناقيش', tr: 'manaayish', en: 'manoushe (Lebanese flatbread with toppings — the national breakfast)', cat: 'bread-pastry' },
  { ar: 'كعك', tr: 'ka3ak', en: 'ka3ak (sesame bread ring — street snack)', cat: 'bread-pastry' },
  { ar: 'خبز', tr: 'khubz', en: 'bread / pita (base of every Lebanese meal)', cat: 'bread-pastry' },
  { ar: 'صفيحة', tr: 'Safii7a', en: 'safee7a (meat flatbread — from Tripoli)', cat: 'bread-pastry' },
  { ar: 'عجين', tr: '3ajiin', en: 'dough (base for manoushe and pastries)', cat: 'bread-pastry' },
  { ar: 'فطيرة', tr: 'faTiira', en: 'pastry / pie (sweet or savory)', cat: 'bread-pastry' },
  { ar: 'راغيف', tr: 'raghiif', en: 'loaf of bread (one piece)', cat: 'bread-pastry' },
  { ar: 'لحم بعجين', tr: 'la7m bi-3ajiin', en: 'lahm bi ajeen (meat flatbread pizza — Lebanese style)', cat: 'bread-pastry' },
  // filling
  { ar: 'زعتر', tr: 'za3tar', en: 'za\'atar (thyme-sesame mix — most popular manoushe topping)', cat: 'filling' },
  { ar: 'جبنة', tr: 'jibin', en: 'cheese (white cheese or halloumi on manoushe)', cat: 'filling' },
  { ar: 'حلوم', tr: '7alluum', en: 'halloumi (grilled Lebanese cheese)', cat: 'filling' },
  { ar: 'كبة', tr: 'kibbe', en: 'kibbe (bulgur+meat shell — Lebanon\'s national dish)', cat: 'filling' },
  { ar: 'فلافل', tr: 'falafel', en: 'falafel (fried chickpea balls — Lebanese version uses chickpeas)', cat: 'filling' },
  { ar: 'شاورما', tr: 'shaawarma', en: 'shawarma (rotisserie meat wrap — chicken or meat)', cat: 'filling' },
  { ar: 'حمص', tr: '7ummuS', en: 'hummus (chickpea dip — a religion in Lebanon)', cat: 'filling' },
  { ar: 'عوارم', tr: '3awaarma', en: '3awarma (preserved spiced lamb fat — winter condiment)', cat: 'filling' },
  // order
  { ar: 'واحد', tr: 'waa7ad', en: 'one (ordering: "waa7ad manaayish za3tar")', cat: 'order' },
  { ar: 'بدي', tr: 'baddi', en: 'I want / I\'d like (ordering anything)', cat: 'order' },
  { ar: 'ميت غرام', tr: 'miit graam', en: '100 grams (weight-based ordering at delis)', cat: 'order' },
  { ar: 'نص كيلو', tr: 'nuSS kiilo', en: 'half kilo (common quantity for falafel/kibbe)', cat: 'order' },
  { ar: 'عالسريع', tr: '3as-srii3', en: 'quickly / to go / quick order', cat: 'order' },
  { ar: 'محمر', tr: 'ma7mar', en: 'toasted / well-done (want your bread extra crispy)', cat: 'order' },
  { ar: 'معك', tr: 'ma3ak', en: 'to go / take away (lit. with you)', cat: 'order' },
  { ar: 'عالطاولة', tr: '3aT-Taawle', en: 'for the table / dine in', cat: 'order' },
  // sauce
  { ar: 'توم', tr: 'toom', en: 'toum (garlic sauce — Lebanon\'s white gold, goes on everything)', cat: 'sauce' },
  { ar: 'طحينة', tr: 'Ta7iine', en: 'tahini (sesame paste sauce)', cat: 'sauce' },
  { ar: 'كتشاب', tr: 'ketchap', en: 'ketchup (Lebanese shawarma shops use it liberally)', cat: 'sauce' },
  { ar: 'حار', tr: '7aar', en: 'spicy / hot (level of heat in sauce)', cat: 'sauce' },
  { ar: 'ليمون', tr: 'leemoon', en: 'lemon / lemon juice (freshly squeezed on everything)', cat: 'sauce' },
  { ar: 'زيت', tr: 'zeet', en: 'olive oil (goes on hummus, manoushe, salad)', cat: 'sauce' },
  { ar: 'مكدوس', tr: 'makduus', en: 'makdous (pickled eggplant stuffed with walnut — condiment)', cat: 'sauce' },
  { ar: 'مخللات', tr: 'mkhalllaat', en: 'pickles (turnip pickles — pink, always with falafel)', cat: 'sauce' },
  // shop-talk
  { ar: 'فرن', tr: 'furn', en: 'bakery / oven (the Lebanese corner bakery)', cat: 'shop-talk' },
  { ar: 'على الطازج', tr: '3alT-Taazij', en: 'fresh out of the oven (asking for just-baked)', cat: 'shop-talk' },
  { ar: 'قديش', tr: '2addeesh', en: 'how much (asking the price)', cat: 'shop-talk' },
  { ar: 'بكم', tr: 'b2addeeesh', en: 'for how much / how much does it cost', cat: 'shop-talk' },
  { ar: 'كمان واحد', tr: 'kamaan waa7ad', en: 'one more (add another of the same)', cat: 'shop-talk' },
  // description
  { ar: 'طازج', tr: 'Taazij', en: 'fresh (Taazij ktiir = very fresh)', cat: 'description' },
  { ar: 'لذيذ', tr: 'laziiz', en: 'delicious (highest everyday compliment for food)', cat: 'description' },
  { ar: 'عم بيحرق', tr: '3am bi7ri2', en: 'it\'s burning hot (careful, just out of oven)', cat: 'description' },
];

const SFD_DRILLS = [
  {
    q: 'What is "manaayish" in English?',
    opts: ['manaayish', 'kibbe', 'falafel', 'ka3ak'],
    correct: 0,
    note: '"Manaayish" (مناقيش) — Lebanon\'s signature street breakfast. A thin flatbread baked with toppings in a wood-fired or gas oven. Most popular topping: za\'atar (thyme-sesame-sumac oil mix). Also: cheese (jibin), halloumi, or egg. Every neighborhood has its furn (bakery). The manoushe is folded in newspaper or flatbread paper and eaten walking. "Baddi manaayish za3tar ktiiir" = I want a za\'atar manoushe with a LOT of za\'atar — the Lebanese order.',
  },
  {
    q: 'What is "toom" and why is it famous in Lebanese street food?',
    opts: ['toom', 'Ta7iine', 'mkhalllaat', 'zeet'],
    correct: 0,
    note: '"Toom" (توم) — Lebanese garlic sauce. Made from garlic, lemon, oil, and salt whipped into a fluffy white cream. Served with shawarma, grilled chicken, falafel — and honestly anything. Lebanese toum is an art form: the ratio of garlic to oil determines texture. Too much garlic = sharp and strong; balanced = smooth and sharp. "Ktiir toom" = lots of garlic sauce. The Lebanese claim their toom is the best in the world. They\'re correct.',
  },
  {
    q: 'What does "baddi" mean when ordering at a Lebanese food stand?',
    opts: ['baddi', '2addeesh', '3as-srii3', 'waa7ad'],
    correct: 0,
    note: '"Baddi" (بدي) — I want / I\'d like. The standard Lebanese ordering verb. "Baddi falafel" = I want falafel. "Shu baddi?" = what do I want? "Baddi toom ktiir" = I want a lot of garlic sauce. In Lebanese dialect, "baddi" is first person singular present of the verb "to want." Unlike MSA "uriid," baddi is casual, direct, and the only word you need to order anything in Lebanon. Follow with the food name and quantity.',
  },
  {
    q: 'What is "za3tar" as a manoushe topping?',
    opts: ['za3tar', '7ummuS', 'jibin', 'Ta7iine'],
    correct: 0,
    note: '"Za3tar" (زعتر) — thyme spice mix. For manoushe, za3tar means a specific blend: dried thyme, sesame seeds, sumac, and olive oil. The proportions vary by shop and region — Beirut za3tar tends to be darker with more sumac; mountain za3tar is earthier. "Za3tar w jibin" (za\'atar and cheese) is the classic combo. Za3tar is also believed to "open the mind" — Lebanese students eat it before exams. In Lebanon, za3tar means both the plant and the spice blend.',
  },
  {
    q: 'What does "falafel" mean in Lebanese street food culture?',
    opts: ['falafel', 'kibbe', 'shaawarma', 'la7m bi-3ajiin'],
    correct: 0,
    note: '"Falafel" (فلافل) — Lebanon\'s chickpea street food. Lebanese falafel uses chickpeas (not fava beans like Egypt). Served in pita with tahini, tomatoes, pickled turnips (pink from beetroot brine), and fresh herbs. "Saandawiiish falafel" = falafel sandwich. Every neighborhood falafel shop has its own signature spice mix. Lebanese falafel is smaller and crunchier than Egyptian-style. Ordering tip: "ma3 kull shii" = with everything. You\'ll get the full toppings spread.',
  },
  {
    q: 'What is "kibbe" in Lebanese cuisine?',
    opts: ['kibbe', 'manaayish', 'la7m bi-3ajiin', 'Safii7a'],
    correct: 0,
    note: '"Kibbe" (كبة) — Lebanon\'s most iconic dish. A shell made from bulgur wheat and minced lamb, stuffed with a spiced meat filling with pine nuts and onion. Fried kibbe balls are the street food version. There\'s also kibbe nayyeh (raw kibbe — like Lebanese steak tartare), kibbe bi-siniyye (baked in a tray), and kibbe b-laban (in yogurt). "Akalt kibbe?" = have you eaten kibbe? is a Lebanese way of saying "did you eat?" — kibbe IS food.',
  },
  {
    q: 'What does "2addeesh" mean at a Lebanese food stall?',
    opts: ['2addeesh', 'Taazij', '7aar', 'laziiz'],
    correct: 0,
    note: '"2addeesh" (قديش) — how much? The essential question when buying anything in Lebanon. "2addeesh hal-kibbe?" = how much is this kibbe? "2addeesh l-kull?" = how much for everything? In post-2019 Lebanon, prices change daily with the exchange rate — "2addeesh" is asked more anxiously than ever. Lebanese bargaining tip: after hearing the price, pause, raise an eyebrow, and say "ktiir" (too much). Often the price drops.',
  },
  {
    q: 'What is "furn" in the context of Lebanese street food?',
    opts: ['furn', '3ajiin', 'raghiif', 'ketchap'],
    correct: 0,
    note: '"Furn" (فرن) — oven / bakery. Every Lebanese neighborhood has its furn — the corner bakery that starts at 5am and bakes fresh bread and manoushe until afternoon. "Ra7 3al-furn" = I\'m going to the bakery (a daily or weekly ritual). The furn also often bakes your own dough if you bring it: families bring trays of kafta, kibbe, or potatoes to be baked. "Khubz min il-furn" = fresh bread from the bakery (as opposed to packaged). The smell of a Lebanese furn in the morning is life itself.',
  },
  {
    q: 'What does "mkhalllaat" add to a Lebanese falafel sandwich?',
    opts: ['mkhalllaat', 'toom', '7ummuS', 'leemoon'],
    correct: 0,
    note: '"Mkhalllaat" (مخللات) — pickles. Lebanese pickles include pink turnips (pickled with beetroot brine), cucumbers, hot peppers, and olives. The pink turnips are iconic — they turn bright magenta and add crunch and acid to falafel. "Falafel ma3 kull shii" includes mkhalllaat. Lebanese pickle culture reflects Mediterranean preservation traditions. The pink turnips specifically signal Lebanese/Syrian food versus Israeli-style (which uses different pickles). They\'re acidic, crunchy, and essential.',
  },
  {
    q: 'What does "Taazij" mean when describing Lebanese street food?',
    opts: ['Taazij', 'laziiz', '7aar', 'ma7mar'],
    correct: 0,
    note: '"Taazij" (طازج) — fresh. The most important word in Lebanese food culture. "Taazij min il-furn" = fresh from the oven. "Khubz Taazij" = fresh bread (as opposed to yesterday\'s). Lebanese food culture has a pathological obsession with freshness — even supermarkets display which products arrived today. "Akl Taazij" = fresh food. In Lebanese cooking, freshness > technique. The tomatoes, herbs, olive oil, and bread should all be as fresh as possible. "Taazij ktiir" = very fresh = the best compliment.',
  },
];

const SFD_TIPS = [
  'The Lebanese manoushe is more than breakfast — it\'s a cultural institution. The furn (bakery) opens before dawn and the line forms early. "Za3tar" (thyme-sesame-oil) is the soul of the manoushe; "jibin" (cheese) is the body; "bayd" (egg) is the luxury. In Lebanese university culture, students eat manoushe walking to class. In the mountains, women still make dough at home and bring it to the furn. The manoushe costs almost nothing — it\'s democracy of flavor. "Shu baddi 3ala l-manaayish?" = what do I want on the manoushe? is the most Lebanese question.',
  'Lebanese street food has a specific vocabulary for customization. "Ktiir toom" = lots of garlic sauce. "Bidun baSSal" = no onion. "7aar?" = spicy? "Ma3 kull shii" = with everything (toppings). "Nuss nuss" = half and half (half za3tar, half cheese — the indecisive order). "Maa fi mkhalllaat" = no pickles. Lebanese shop owners expect you to customize — a plain order is almost insulting. The more specific you are, the more Lebanese you sound. If you just say "falafel," you\'ll get asked about six things.',
  'Toum — Lebanese garlic sauce — is the condiment that defines the culture. Every Lebanese family has its recipe; every restaurant thinks theirs is best. The secret is the emulsification: garlic, lemon, and oil blended to a stable white cream. "Toom 7aaD ir" = white garlic sauce (fully emulsified). When Lebanese diaspora go home, they bring back toum jars. When they move abroad, they make it themselves. The smell of toum is the smell of home. "Baddi ktiir toom" = I want a lot of garlic sauce — said by every Lebanese person ordering shawarma.',
  'Lebanese food pricing changed dramatically after the 2019 economic crisis. Pre-crisis, a falafel sandwich cost 1,000 Lebanese lira (about $0.65). By 2023, the same sandwich cost 100,000 LBP and climbing. Ordering now involves understanding the exchange rate — many shops price in "fresh dollars" (USD) or by the current black-market rate. "2addeesh?" is asked nervously. The economic crisis paradoxically made the food vocabulary richer — Lebanese people now joke about "manaayish in dollars" and use dark humor about prices. The food itself remains as delicious as ever.',
  'Lebanese pickled turnips (lift) are the pink icon of Lebanese street food. Cut in wedges, pickled in brine with beetroot, they turn bright magenta. They\'re served in every falafel shop, shawarma stand, and mezze spread. The pink color is the signal: when you see pink turnips, you\'re eating Lebanese. In Lebanese culture, "lift" (turnips) is sometimes used as an insult — "inta lift" = you\'re a turnip = you\'re a fool. But the pickled lift is beloved. "Baddi ktiir mkhalllaat" = I want lots of pickles — especially if you like the acid hit with your falafel.',
];

const SFD_ABOUT = 'Lebanese street food is one of the world\'s great sidewalk cuisines — deeply regional, intensely fresh, and furiously debated. From the za\'atar manoushe eaten with one hand while the other holds a coffee, to the garlic-drenched shawarma consumed at midnight after a long night out, Lebanese street food reflects the country\'s personality: generous, flavorful, opinionated, and built on centuries of agricultural tradition meeting Mediterranean trade. Understanding Lebanese street food vocabulary means understanding the culture that produced it — where freshness is sacred, garlic is medicine, and the right amount of toom is always "more."';
