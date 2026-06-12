// R510 — Lebanese Manouche & Morning Food Culture (prefix: mno)
const MNO_WORDS = [
  // breads
  {ar:'مناقيش', tr:'manaa2iish', en:'manouche — Lebanon\'s iconic flatbread with toppings (plural)', cat:'bread'},
  {ar:'منقوشة', tr:'man2uushe', en:'manouche — one flatbread (singular)', cat:'bread'},
  {ar:'خبز', tr:'khubz', en:'bread', cat:'bread'},
  {ar:'مرقوق', tr:'mar2uu2', en:'markouk — very thin mountain flatbread', cat:'bread'},
  {ar:'كعك', tr:'ka3k', en:'ka3k — sesame-crusted bread rings (street food)', cat:'bread'},
  {ar:'صمّون', tr:'Sammoun', en:'baguette-style Lebanese bread roll', cat:'bread'},
  {ar:'رغيف', tr:'rGiif', en:'loaf / round of bread (one piece)', cat:'bread'},
  // toppings
  {ar:'زعتر', tr:'za3tar', en:'thyme mix — olive oil + dried thyme + sumac + sesame', cat:'toppings'},
  {ar:'جبنة', tr:'jibneh', en:'cheese (akkawi or other white cheese on manouche)', cat:'toppings'},
  {ar:'مع الإثنين', tr:'ma3 l-ithniim', en:'"with both" — za3tar + cheese mixed (the classic order)', cat:'toppings'},
  {ar:'لحمة', tr:'la7me', en:'minced meat topping on manouche', cat:'toppings'},
  {ar:'بيضة', tr:'beeDa', en:'egg (manouche bil beeDa — egg manouche)', cat:'toppings'},
  {ar:'قشطة', tr:'2ishTa', en:'clotted cream (with honey on sweet manouche)', cat:'toppings'},
  {ar:'عسل', tr:'3asal', en:'honey (with 2ishTa for a sweet breakfast)', cat:'toppings'},
  {ar:'زيت وزعتر', tr:'zeit w za3tar', en:'olive oil and thyme — the quintessential Lebanese spread', cat:'toppings'},
  // bakery
  {ar:'فرن', tr:'furn', en:'bakery / oven (the neighborhood furn is social infrastructure)', cat:'bakery'},
  {ar:'صاحب الفرن', tr:'Saa7ib el furn', en:'bakery owner — knows everyone in the neighborhood', cat:'bakery'},
  {ar:'صاج', tr:'saaj', en:'convex iron griddle for baking markouk and manouche', cat:'bakery'},
  {ar:'عجين', tr:'3ajiin', en:'dough', cat:'bakery'},
  {ar:'طازج', tr:'Taazij', en:'fresh (just out of the oven)', cat:'bakery'},
  {ar:'سخن', tr:'skhiin', en:'hot / warm (ideal bread state)', cat:'bakery'},
  // ordering phrases
  {ar:'واحدة زعتر', tr:'waa7de za3tar', en:'one za3tar manouche (standard order)', cat:'ordering'},
  {ar:'عملها رفيعة', tr:'3ammiilha rfiiy3a', en:'make it thin (preferred by many)', cat:'ordering'},
  {ar:'عملها مزبوطة', tr:'3ammiilha maDbuuTa', en:'make it just right / medium thickness', cat:'ordering'},
  {ar:'شيلها عن النار', tr:'shiilha 3an n-naar', en:'take it off the fire / don\'t over-bake it', cat:'ordering'},
  {ar:'عملها معي', tr:'3ammiilha ma3i', en:'fold it for me / wrap it to go', cat:'ordering'},
  // morning culture
  {ar:'ترويقة', tr:'truwii2a', en:'breakfast (the morning meal)', cat:'culture'},
  {ar:'على الريق', tr:'3al-rii2', en:'on an empty stomach — first food of the day', cat:'culture'},
  {ar:'فول', tr:'fuul', en:'fava beans — the other Lebanese breakfast staple', cat:'culture'},
  {ar:'حمّص', tr:'7ummuS', en:'hummus (breakfast version, warm with oil)', cat:'culture'},
  {ar:'لبنة', tr:'labneh', en:'strained yogurt — staple breakfast spread', cat:'culture'},
  {ar:'زيت وملح', tr:'zeit w mala7', en:'olive oil and salt — simplest Lebanese breakfast', cat:'culture'},
  {ar:'صحتين', tr:'Sa7tein', en:'double health — said to someone eating (bon appétit)', cat:'culture'},
  {ar:'يسلم إيدك', tr:'yislam iidk', en:'may your hands be blessed — to the person who made the food', cat:'culture'},
];

const MNO_DRILLS = [
  {
    q: 'What is "man2uushe" (منقوشة) — Lebanon\'s most important morning food?',
    opts: [
      'A flatbread baked with toppings like za3tar or cheese — Lebanon\'s national breakfast',
      'A sweet pastry filled with nuts and drenched in syrup',
      'A soup made with lentils and lemon, eaten for breakfast',
      'A yogurt dish topped with olive oil, eaten cold in the morning'
    ],
    ans: 0,
    note: '"Man2uushe" (منقوشة) = manouche — Lebanon\'s iconic breakfast flatbread. Dough is rolled thin, topped (usually za3tar+oil or jibneh), then baked on a hot "saaj" (convex griddle). The plural is "manaa2iish." Every Lebanese neighborhood has a "furn" (bakery) open from dawn. The morning manouche run is a ritual — you walk, you order, you wait 2 minutes, you eat it on the spot or folded to go. "Ktir bidi man2uushe" = I really want a manouche.'
  },
  {
    q: 'What is "za3tar" (زعتر) in Lebanese breakfast culture?',
    opts: [
      'A dried thyme-sumac-sesame-olive oil mixture — the most common manouche topping',
      'A fresh herb used only for garnishing plates and salads',
      'A hot chili paste spread on bread as a spicy condiment',
      'A sweet jam made from mountain berries, eaten with cheese'
    ],
    ans: 0,
    note: '"Za3tar" (زعتر) = thyme mix — dried thyme (3ater or za3tar plant), sumac, sesame seeds, mixed with olive oil to form a paste. The classic manouche topping. "Man2uushe bil za3tar" is breakfast for millions of Lebanese daily. Za3tar is also a standalone breakfast: "zeit w za3tar" = olive oil + za3tar mix for dipping bread. Lebanese za3tar quality varies by region — mountain za3tar is considered finest. "Ktarit za3tar" = the za3tar was a lot (good praise).'
  },
  {
    q: 'What does "ma3 l-ithniim" (مع الإثنين) mean when ordering at a Lebanese furn?',
    opts: [
      '"With both" — za3tar AND cheese together on one manouche (the mixed classic)',
      '"Make two" — ordering a double portion of the same topping',
      '"With two sides" — adding two extra items to the manouche',
      '"Two people" — ordering for two people at once'
    ],
    ans: 0,
    note: '"Ma3 l-ithniim" (مع الإثنين) = with both — za3tar and jibneh (cheese) on the same manouche. This is the classic order for people who can\'t choose. The cheese melts over the za3tar, the flavors combine. Also called "za3tar w jibneh ma3a ba3d." At peak hour, every bakery hears this order dozens of times. The "ithniim" (two) refers to the two main topping families. It\'s not a special item — you just ask for both.'
  },
  {
    q: 'What is "furn" (فرن) — and why is it more than just a bakery?',
    opts: [
      'Bakery / neighborhood oven — a social hub where people start their morning',
      'A restaurant serving traditional Lebanese lunch and dinner dishes',
      'A communal kitchen used by the neighborhood for special occasions',
      'A wood-fired pizza oven imported from Italy for Beirut restaurants'
    ],
    ans: 0,
    note: '"Furn" (فرن) = oven / bakery. The Lebanese "furn" is the neighborhood\'s daily gathering point. Open from 5-6am, it\'s where you learn the news, argue politics, and eat breakfast standing up. "Saa7ib el furn" (bakery owner) knows everyone. The smell of fresh bread ("khubz Taazij") pulls people in. "Roo7 3al furn" = go to the bakery (a simple task and a social ritual combined). In Lebanon, the local "furn" is as essential as the local "ma2ha" (café).'
  },
  {
    q: 'What is "saaj" (صاج) — and what role does it play in Lebanese bread making?',
    opts: [
      'A convex iron griddle — the curved surface for baking manouche and markouk',
      'A clay pot used for slow-cooking traditional Lebanese stews',
      'A stone mortar used for grinding za3tar and spices',
      'A wooden paddle used to slide bread into wood-fired ovens'
    ],
    ans: 0,
    note: '"Saaj" (صاج) = the convex iron griddle — a dome-shaped metal surface heated from below. Dough is stretched and slapped onto the hot "saaj" and cooks in 2-3 minutes. "Markouk" (very thin bread) is the saaj specialty — paper-thin, flexible, used for wrapping and rolling. A skilled "saj baker" can make 50+ pieces per hour. "3al saaj" (on the saaj) = baked on the convex griddle. The saaj method is distinctly Levantine — you can find it in Syrian and Lebanese mountain villages.'
  },
  {
    q: 'What does "truwii2a" (ترويقة) mean — and what does a Lebanese one look like?',
    opts: [
      'Breakfast — typically za3tar/jibneh manouche, labneh, fuul, hummus, olives, tea',
      'A midday snack — light food eaten between lunch and dinner',
      'A late dinner — the main evening meal eaten after 9pm',
      'A dessert course — sweets served after the main meal'
    ],
    ans: 0,
    note: '"Truwii2a" (ترويقة) = breakfast (from "raa2a" — to be clear/refreshed in the morning). A full Lebanese breakfast is a spread: manouche, labneh (strained yogurt), 7ummuS (hummus), fuul (fava beans), jibneh (cheese), zaytoon (olives), zeit w za3tar, tomatoes, cucumbers, tea. "Truwii2a 3a lubnaani" = Lebanese breakfast = a table full of small dishes. This is the weekend ritual — weekday "truwii2a" is often just a manouche on the way to work.'
  },
  {
    q: 'What is "mar2uu2" (مرقوق) — and where in Lebanon is it most at home?',
    opts: [
      'Very thin mountain flatbread — paper-thin, used for wrapping and rolling foods',
      'A thick heavy bread loaf, slow-baked in traditional stone ovens',
      'A sweet bread filled with dates and nuts, popular during Ramadan',
      'A small round bread roll served with mezze at restaurants'
    ],
    ans: 0,
    note: '"Mar2uu2" (مرقوق) = markouk — the extremely thin Lebanese mountain bread. Baked on a "saaj," it comes out translucent-thin and flexible. Used for wrapping "labneh w za3tar" (the Lebanese mountain breakfast roll), rolling with vegetables, or as a base for a large spread. Famous in the Chouf and mountain villages. A single markouk can be 60+ cm across. "Man2uushe 3a mar2uu2" = manouche made on thin markouk (crispier, mountain style). Special skill to make properly.'
  },
  {
    q: 'What does "yislam iidk" (يسلم إيدك) mean at a Lebanese breakfast table?',
    opts: [
      '"May your hands be blessed" — said to whoever cooked or made the food',
      '"Wash your hands" — reminder to wash before eating',
      '"Hand it to me" — asking someone to pass a dish',
      '"Your hands are busy" — noting that someone is serving food'
    ],
    ans: 0,
    note: '"Yislam iidk" (يسلم إيدك) = may your hands be blessed/preserved — said to whoever prepared the food, whether a grandmother, a bakery owner, or a restaurant cook. "Iidk" = your hands (singular address). Plural: "yislam iidkon." It\'s the Lebanese way of complimenting the cook — acknowledging that skilled hands made the meal. "Yislam iidk ya teta" = may your hands be blessed, grandma (classic scene). Always appreciated; never goes unacknowledged.'
  },
  {
    q: 'What is "labneh" (لبنة) — and why is it central to Lebanese breakfast?',
    opts: [
      'Strained yogurt — thick, tangy, eaten with olive oil and za3tar on bread',
      'A type of white cheese made from cow\'s milk, similar to feta',
      'A sweet cream dessert made from milk and rose water',
      'A cold yogurt soup eaten in summer with mint and cucumber'
    ],
    ans: 0,
    note: '"Labneh" (لبنة) = strained yogurt — yogurt hung in cloth overnight until thick and tangy. The Lebanese version is denser and more sour than Greek yogurt. Eaten at breakfast with olive oil, za3tar, and bread. "Labneh bil zeit w za3tar" = labneh with oil and thyme = the quintessential Lebanese breakfast. "Labneh munayyame" = "balls" of labneh stored in olive oil (long-keeping). Every Lebanese home has labneh. "Ma fi labneh?" = no labneh? (said with disbelief).'
  },
  {
    q: 'What does "Sa7tein" (صحتين) mean and when do you say it in Lebanon?',
    opts: [
      '"Double health" — said to someone who is eating, like a blessing on their meal',
      '"Two portions" — asking for a second serving of food',
      '"Be careful" — warning someone about a hot or spicy dish',
      '"Enough" — signaling you are full and don\'t want more food'
    ],
    ans: 0,
    note: '"Sa7tein" (صحتين) = double health — the Lebanese "bon appétit" / blessing said to someone eating. "Sa7a" = health; "tein" = two (dual). So: two healths, said with genuine warmth. Response: "3a albak" (on your heart) or "3a 2albak" — meaning "may this health be on your heart." Said when you see someone eating, when you serve someone, or when you leave the table. "Sa7tein ya 7abiib" = enjoy your meal, friend. A small phrase that signals warmth and care.'
  },
];

const MNO_TIPS = [
  {
    title: 'The morning manouche ritual',
    body: 'For millions of Lebanese, the day starts at the "furn" (bakery). Before 9am, the "saaj" is hot and the queue forms — office workers, students, mothers, taxi drivers. "Waa7de za3tar" (one za3tar) or "waa7de jibneh" (one cheese) or the eternal "ma3 l-ithniim" (both). The baker stretches dough, slaps it on the convex "saaj," spreads the topping, and it\'s ready in 2 minutes. Eaten folded in paper, standing outside, or walking. The manouche IS Lebanese breakfast. No furn open = the neighborhood is not yet awake.'
  },
  {
    title: 'Za3tar: the Lebanese spice blend',
    body: 'Lebanese "za3tar" is not just thyme — it\'s a specific blend: dried wild thyme, sumac (for tartness), sesame seeds (for texture), and enough olive oil to make a paste. Recipes vary by family and region. Mountain "za3tar" (from Chouf, Akkar) is considered superior — more intense, more fragrant. "Zeit w za3tar" = olive oil + za3tar for dipping — the simplest Lebanese breakfast. Za3tar is also said to sharpen the memory (Lebanese children are told to eat za3tar before exams). Whether true or not, Lebanese believe it.'
  },
  {
    title: 'The full Lebanese breakfast spread',
    body: '"Truwii2a 3a lubnaani" is not one dish — it\'s a table. The standard: labneh with oil, 7ummuS (hummus), fuul (fava beans with lemon and oil), jibneh bayde (white cheese), zaytoon (olives), tomatoes and cucumbers, zeit w za3tar, and manouche. Tea (shaay) is essential. Coffee ("2ahwe") often follows. This spread is the weekend version — weekdays compress to a manouche. Mountain families add "keshek" (fermented dried yogurt and wheat). Coastal families add "samak mshawwe7" (smoked fish). The "truwii2a" map of Lebanon is the map of its regions.'
  },
  {
    title: 'The furn as social institution',
    body: 'The Lebanese "furn" (bakery) is open before any other business and closes late. It\'s where neighborhood information circulates: who got married, who is sick, what happened last night. The "saa7ib el furn" (bakery owner) is a community pillar — he extends credit, remembers orders, and serves as unofficial neighborhood mayor. In Beirut\'s older quarters, the furn survived wars, economic collapses, and the 2020 explosion. It\'s often family-run for generations. "Furn Abu Fadi" / "Furn el Sabaa" — names that whole streets know.'
  },
  {
    title: 'Bread culture: varieties by region',
    body: 'Lebanese bread varies by geography. Beirut: "khubz 3arabi" (round pita, standard) and manouche. Mountain: "mar2uu2" (thin markouk) and "saaj" bread wrapped around labneh. North (Tripoli, Akkar): famous for "ka3k" (sesame rings) sold by street vendors. South: "khubz Taaboon" (thicker, stone-baked). Every region claims its bread is best. The "ka3k" seller is a Beirut icon — pushing a cart, calling "ka3k-o!" through the streets with sesame rings hung like necklaces on a pole. Buying one is a small daily pleasure, unchanged for decades.'
  },
];

const MNO_ABOUT = `
<p><strong>🫓 Lebanese Manouche & Morning Food Culture</strong></p>
<p>The Lebanese morning begins at the "furn" (bakery). Before the sun rises high enough to warm the streets, the "saaj" is already hot, the dough is already stretched, and the first "man2uushe" (manouche) of the day is ready. For many Lebanese, breakfast is not a meal eaten at home — it is a trip to the neighborhood bakery, a brief social stop, and a warm flatbread eaten folded in paper while standing on the street.</p>
<p><strong>The manouche:</strong> Dough rolled thin, topped with "za3tar" (thyme-sumac-sesame paste in olive oil) or "jibneh" (white cheese), or "ma3 l-ithniim" (both together), then baked 2-3 minutes on the convex "saaj" griddle. Simple, perfect, irreplaceable. "Ma fi shi mitla man2uushe" = there is nothing like a manouche.</p>
<p><strong>The full spread:</strong> Weekend "truwii2a" (breakfast) is a Lebanese cultural performance — labneh, hummus, fuul, cheese, olives, za3tar, tomatoes, cucumbers, manouche, tea, and argument about politics. It can last two hours. Weekday breakfast is the same ingredients compressed into a single manouche eaten in three minutes while walking.</p>
<p><strong>The vocabulary:</strong> Knowing how to order at a Lebanese furn — "waa7de za3tar rfiiy3a" (one thin za3tar), "3ammiilha ma3 l-ithniim" (make it with both), "yislam iidk" (may your hands be blessed) — is knowing how to be Lebanese in the morning. These phrases are used daily by millions. They are not vocabulary. They are the morning itself.</p>
`;
