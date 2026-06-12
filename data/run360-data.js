// Run #360 — Lebanese Street Food & Snacks Coach (snk)
// 40 words across 5 categories: breakfast-street / savory-wraps / sweet-street / drinks-fresh / phrases
// 10 MCQ drills, 5 tips, about text

const SNK_WORDS = [
  // breakfast street
  { tr: 'manoushe', ar: 'مناقيش', en: 'za\'atar flatbread — Lebanon\'s national breakfast', cat: 'breakfast-street' },
  { tr: 'ka3ik', ar: 'كعك', en: 'sesame bread rings — sold by street vendors on carts', cat: 'breakfast-street' },
  { tr: 'foul', ar: 'فول', en: 'fava bean stew — traditional Lebanese breakfast dish', cat: 'breakfast-street' },
  { tr: '2ajje', ar: 'عجة', en: 'Lebanese omelette — with onion, parsley, and spices', cat: 'breakfast-street' },
  { tr: 'jibn 3akkaawi', ar: 'جبن عكاوي', en: 'Akkawi cheese — white brined cheese for breakfast', cat: 'breakfast-street' },
  { tr: 'laban', ar: 'لبن', en: 'yogurt — Lebanese breakfast and mezze staple', cat: 'breakfast-street' },
  { tr: 'zeet u za3tar', ar: 'زيت وزعتر', en: 'olive oil and za\'atar dip — the simplest Lebanese breakfast', cat: 'breakfast-street' },
  { tr: 'labneh', ar: 'لبنة', en: 'strained yogurt / cream cheese — on every Lebanese breakfast table', cat: 'breakfast-street' },
  // savory wraps & snacks
  { tr: 'falafel', ar: 'فلافل', en: 'fried chickpea fritters — wrapped in pita with vegetables', cat: 'savory-wraps' },
  { tr: 'shawarma', ar: 'شاورما', en: 'rotisserie meat sandwich — chicken or meat, rolled in bread', cat: 'savory-wraps' },
  { tr: 'lahm bi3ajiin', ar: 'لحم بعجين', en: 'spiced meat on flatbread — Lebanese meat pie', cat: 'savory-wraps' },
  { tr: 'sfiiHa', ar: 'صفيحة', en: 'open meat pie — Baalbeck\'s famous street specialty', cat: 'savory-wraps' },
  { tr: 'sambusek', ar: 'سمبوسك', en: 'fried pastry filled with meat, cheese, or spinach', cat: 'savory-wraps' },
  { tr: 'kabbe miqliiye', ar: 'كبّة مقليّة', en: 'fried kibbe — bulgur shell stuffed with spiced meat', cat: 'savory-wraps' },
  { tr: '3araa2is', ar: 'عرايس', en: 'meat-stuffed flatbread sandwiches — grilled bread snack', cat: 'savory-wraps' },
  { tr: 'manakiish bi-jibn', ar: 'مناقيش بجبنة', en: 'cheese manoushe — melted cheese flatbread (popular variant)', cat: 'savory-wraps' },
  // sweet street
  { tr: 'knefe', ar: 'كنافة', en: 'shredded pastry with cheese or cream in sweet syrup', cat: 'sweet-street' },
  { tr: '7alawet il-jibn', ar: 'حلاوة الجبن', en: 'sweet cheese roll — Tripoli\'s famous dessert', cat: 'sweet-street' },
  { tr: 'baklawa', ar: 'بقلاوة', en: 'baklava — filo pastry with nuts and honey syrup', cat: 'sweet-street' },
  { tr: '3awwaame', ar: 'عوامة', en: 'fried dough balls in rose-water syrup — Ramadan street sweet', cat: 'sweet-street' },
  { tr: 'namoure', ar: 'نمورة', en: 'semolina cake with syrup and almonds', cat: 'sweet-street' },
  { tr: 'qaTaayif', ar: 'قطايف', en: 'stuffed pancakes — a Ramadan and festive season special', cat: 'sweet-street' },
  { tr: 'bouzeh', ar: 'بوظة', en: 'Lebanese-style ice cream — chewy from mastic and sahlab', cat: 'sweet-street' },
  { tr: '7alawuun', ar: 'حلاوون', en: 'sesame halva — sweet tahini confection', cat: 'sweet-street' },
  // drinks & fresh
  { tr: '3aSiir', ar: 'عصير', en: 'fresh juice — squeezed on the spot at street stalls', cat: 'drinks-fresh' },
  { tr: 'sharaab toot', ar: 'شراب توت', en: 'mulberry juice / drink — Lebanese mountain specialty', cat: 'drinks-fresh' },
  { tr: 'tamar hindi', ar: 'تمر هندي', en: 'tamarind drink — sweet-sour street beverage', cat: 'drinks-fresh' },
  { tr: '3aSiir qamar il-diin', ar: 'عصير قمر الدين', en: 'apricot nectar — from dried apricot sheets', cat: 'drinks-fresh' },
  { tr: 'limunaaDe', ar: 'ليموناضة', en: 'fresh lemonade — squeezed with mint at Lebanese cafés', cat: 'drinks-fresh' },
  { tr: 'jallaab', ar: 'جلاب', en: 'grape molasses drink with rose water and pine nuts', cat: 'drinks-fresh' },
  { tr: 'laban ayran', ar: 'لبن عيران', en: 'drinking yogurt / ayran — cold savory yogurt drink', cat: 'drinks-fresh' },
  { tr: 'miyye ghaaziiye', ar: 'مية غازية', en: 'sparkling water', cat: 'drinks-fresh' },
  // phrases
  { tr: 'bi-kam', ar: 'بكم', en: 'how much? — asking price at a street stall', cat: 'phrases' },
  { tr: '3tiini wahad', ar: 'عطيني واحد', en: 'give me one — ordering at street food stall', cat: 'phrases' },
  { tr: 'Taaze', ar: 'طازة', en: 'fresh — "is it fresh?" key question for street food', cat: 'phrases' },
  { tr: 'mzayyaT', ar: 'مزيّط', en: 'dripping with oil/goodness — describing great fried food', cat: 'phrases' },
  { tr: '3tiini kmaen', ar: 'عطيني كمان', en: 'give me another / also give me — ordering more', cat: 'phrases' },
  { tr: 'ma fi 2a7la min', ar: 'ما في أحلى من', en: 'there\'s nothing better than — praising street food', cat: 'phrases' },
  { tr: 'wein il-2a7san', ar: 'وين الأحسن', en: 'where is the best? — asking for the top food spot', cat: 'phrases' },
  { tr: 'shbaa3na', ar: 'شبعنا', en: 'we\'re full / we\'ve had enough — after a street food feast', cat: 'phrases' },
];

const SNK_DRILLS = [
  {
    q: 'What is "manoushe" (مناقيش) and why is it called Lebanon\'s national breakfast?',
    opts: ['A type of Lebanese sweet', 'Flatbread topped with za\'atar and olive oil — eaten by Lebanese across all regions and classes as the morning staple', 'A savory rice dish', 'A cheese bread from Tripoli only'],
    correct: 1,
    note: '"Manoushe" (مناقيش, singular: manoushe) = flatbread topped with za\'atar (thyme + sesame + sumac + olive oil), cheese, or meat and baked in a wood-fired or gas oven. The morning ritual: buy a hot manoushe from the "furn" (bakery) on the way to work or school. Za\'atar version is the default. "3tiini manoushe za3tar" = give me a thyme manoushe. Eaten folded or wrapped with tomato, mint, and olives. Shared across all Lebanese communities, religions, and classes — truly national.'
  },
  {
    q: 'What makes "sfiiHa" (صفيحة) specifically associated with Baalbeck?',
    opts: ['It\'s a cheese pie from Beirut', 'Open-faced spiced meat pies from Baalbeck — the city is famous for this street specialty throughout Lebanon', 'A sweet pastry from the Bekaa', 'A fried dumpling from the north'],
    correct: 1,
    note: '"SfiiHa" (صفيحة) = an open-faced meat pie — spiced ground meat on thin dough, baked flat. Baalbeck (in the Bekaa Valley) is the sfiiHa capital of Lebanon — people make special trips. "Sfiiha Baalbakiiye" = Baalbeck-style sfiiHa. The meat topping has a specific flavor profile: pomegranate molasses, pine nuts, cinnamon. Lebanese street food is often deeply regional — the best version of each dish has a specific origin city. "2aHsan sfiiHa min Baalbek" = the best sfiiHa is from Baalbeck.'
  },
  {
    q: 'What is "knefe" (كنافة) and which city is most famous for it?',
    opts: ['A type of Lebanese ice cream', 'Shredded pastry with soft cheese or cream in orange blossom syrup — Tripoli is Lebanon\'s knefe capital', 'A fried meat pastry', 'A semolina dessert from the Bekaa'],
    correct: 1,
    note: '"Knefe" (كنافة) = shredded wheat pastry (kadaif) layered with soft Arabic cheese or cream, soaked in sugar syrup with orange blossom water, colored orange. Tripoli (Trablus) in northern Lebanon is the undisputed knefe capital. "Knefet Trablus" = Tripoli knefe. The best version has stretchy 3akkawi-style cheese. Eaten hot, fresh from the oven. "3tiini 2iTe3 knefe" = give me a piece of knefe. Also "7alawet il-jibn" (sweet cheese rolls) is Tripoli\'s other famous dessert.'
  },
  {
    q: 'What is "ka3ik" (كعك) in Lebanon\'s street food culture?',
    opts: ['A fried sweet dumpling', 'Sesame-crusted bread rings sold by street cart vendors — the classic Lebanese walking snack', 'A type of pita bread', 'A cookie from a bakery'],
    correct: 1,
    note: '"Ka3ik" (كعك) = sesame bread rings — oval bread coated in sesame seeds, sold by street vendors with small carts, often topped with za\'atar or filled with cheese or eggs. The "ka3ikji" (ka3ik seller) with his cart is a street institution in Beirut, Tripoli, Sidon. "3tiini ka3ik bi-za3tar" = give me a ka3ik with za\'atar. Cheap, portable, filling — the original Lebanese street food. Popular since Ottoman times.'
  },
  {
    q: 'What is "3awwaame" (عوامة) and when is it most commonly eaten?',
    opts: ['A type of Lebanese cheese', 'Fried dough balls soaked in rose water syrup — especially popular during Ramadan street festivities', 'A grilled meat snack', 'A mountain herb used in cooking'],
    correct: 1,
    note: '"3awwaame" (عوامة) = fried dough balls, roughly like doughnuts but smaller and dipped in rose water or orange blossom syrup. During Ramadan, street vendors set up 3awwaame stations throughout Lebanese neighborhoods — the smell of frying dough is part of Ramadan nights. "Byiyji Ramadan w tiiiji l-3awwaame" = Ramadan comes and the 3awwaame comes. Also popular at celebrations, weddings, and street festivals year-round. Eaten piping hot, crispy outside, soft inside.'
  },
  {
    q: 'What is "bouzeh" (بوظة) and what makes Lebanese ice cream different?',
    opts: ['A type of Lebanese yogurt drink', 'Lebanese-style ice cream — chewy and stretchy from mastic and sahlab, with a distinctive texture', 'A frozen juice', 'A cold pudding dessert'],
    correct: 1,
    note: '"Bouzeh" (بوظة) = Lebanese ice cream (from Ottoman "dondurma"). What makes it special: mastic (mastikeh) and sahlab give it a chewy, stretchy texture unlike western ice cream. Vendors stretch and twist it dramatically before serving — a performance. Classic flavors: pistachio (fustuk), rose (ward), clotted cream (2ishta). "Bouzet Furn il-Hara" and "Bouzet Douaihy" in Tripoli are legendary. "3tiini bouzeh fustuk" = give me a pistachio ice cream. The theatrical stretching is part of the experience.'
  },
  {
    q: 'What does "Taaze" (طازة) mean and why is it the key word at Lebanese street food stalls?',
    opts: ['Expensive / high quality', 'Fresh — asking "is it Taaze?" is the essential quality check for Lebanese street food', 'Spicy', 'From the oven'],
    correct: 1,
    note: '"Taaze" (طازة) = fresh. At Lebanese street food stalls, freshness is everything. "Falafel Taaze?" = is the falafel fresh (just fried)? "Khubz Taaze?" = fresh bread? "3aSiir Taaze?" = freshly squeezed juice? Lebanese consumers are very particular about freshness — sitting falafel, old bread, or concentrated juice are considered inferior. The best stalls fry falafel to order and squeeze juice in front of you. "Maana 2illa Taaze" = nothing but fresh (quality promise of good stalls).'
  },
  {
    q: 'What is "jallaab" (جلاب) and what makes it distinctly Lebanese?',
    opts: ['A type of Lebanese beer', 'A grape molasses and rose water drink with pine nuts — a traditional Lebanese street beverage', 'A hot mint tea', 'A carbonated soft drink brand'],
    correct: 1,
    note: '"Jallaab" (جلاب) = a traditional sweet drink made from grape molasses (dibs 3anab), rose water, and served over ice with pine nuts (snawbar) and raisins. A very distinctive Lebanese/Levantine beverage — sweet, floral, and refreshing. Sold by street vendors with large glass jars in the summer. The pine nuts floating on top are non-negotiable. "3tiini jallaab" = give me a jallaab. In competition with fresh 3aSiir (juice) stalls for the summer thirst market.'
  },
  {
    q: 'What is "foul" (فول) in Lebanese street food culture?',
    opts: ['A type of flatbread', 'Fava bean stew — one of Lebanon\'s oldest and most beloved breakfast dishes, eaten by all communities', 'A pickled vegetable', 'A breakfast pastry'],
    correct: 1,
    note: '"Foul" (فول) = stewed fava beans, cooked with garlic, lemon juice, olive oil, and cumin. One of the oldest dishes in the Middle East, eaten in Lebanon since ancient times. The "foul vendor" opens at 5am — eaten before prayers, before work, before school. "Sahn foul" = a plate of foul. Topped with olive oil, chopped tomato, parsley. Eaten with pita bread. "Foul mudammis" = pressure-cooked foul (creamier). "Ma fi 2a7la min foul il-SubuH" = nothing better than morning foul.'
  },
  {
    q: 'What does "mzayyaT" (مزيّط) mean as a food compliment?',
    opts: ['Very expensive', 'Dripping with oil and goodness — high praise for fried or oil-rich Lebanese street food', 'Spicy and hot', 'Overcooked'],
    correct: 1,
    note: '"MzayyaT" (مزيّط) = dripping with zeet (oil), oozing with goodness. High praise for Lebanese fried and oily foods: "hel-falafel mzayyaT!" = this falafel is perfectly dripping with oil! Lebanese street food culture values generous oil — in za\'atar, in fried foods, in foul. "MzayyaT u Taaze" = dripping and fresh = the ultimate street food compliment. The word also extends to any situation that\'s rich and overflowing. A "mzayyaT" manoushe means it was generously soaked in olive oil.'
  },
];

const SNK_TIPS = [
  {
    title: 'The Lebanese Street Food Circuit',
    body: 'Lebanese street food follows a daily circuit: dawn brings the "foul" cart and the "ka3ik" vendor (sesame rings). Morning is "manoushe" from the furn (bakery) — za\'atar, cheese, or both. Midday: "falafel" and "shawarma" from hole-in-the-wall spots. Afternoon: fresh "3aSiir" (juice) or "jallaab" (grape molasses drink). Evening: "sfiiHa" and "lahm bi3ajiin" at sit-down street spots. Night: "knefe" and "3awwaame" dessert vendors. Each city has its own specialties — "sfiiHa Baalbakiiye", "knefet Trablus", "falafel Beirut". Lebanese street food is hyperlocal and fiercely debated.'
  },
  {
    title: 'Manoushe: More Than Just Flatbread',
    body: '"Manoushe" (مناقيش) is sacred. The base is "za\'atar" (thyme-sesame-sumac-olive oil paste) on dough, baked in a circular oven. Variants: "jibn" (cheese — usually 3akkawi or halloumi), "jibn u za\'atar" (both), "lahme" (spiced meat), "kafta" (ground meat). Each furn (bakery) has loyal customers who swear theirs is best. Eating habits: fold the manoushe, wrap it with fresh mint and tomato, eat walking. "Ishtireet manoushe la2 l-SubuH" = I\'m buying manoushe for breakfast. The smell of a morning furn is one of Beirut\'s defining sensory experiences.'
  },
  {
    title: 'Tripoli: Lebanon\'s Sweet Food Capital',
    body: 'Tripoli (Trablus) in northern Lebanon is the undisputed sweet street food capital. Tripoli is famous for: "knefe" (shredded pastry with stretchy cheese), "7alawet il-jibn" (sweet cheese rolls), "baklawa" (made by famous families like Hallab), "qaTaayif" (stuffed pancakes during Ramadan), and "3awwaame" (fried dough balls). The old city souk is lined with sweet shops. "Ruu7 3a Trablus 7a l-7alawiyyaat" = go to Tripoli for the sweets. Lebanese people from all over drive to Tripoli specifically to eat sweets. Abdel Rahman Hallab & Sons is the most famous sweet shop.'
  },
  {
    title: 'Falafel: Lebanese vs. Everywhere Else',
    body: 'Lebanese "falafel" uses chickpeas (7ummuS) rather than fava beans, with generous fresh herbs: parsley, coriander, garlic. Fried in large batches to order. Served in pita with: "taHiine" (sesame paste), "turshi" (pickles), tomato, parsley. The best falafel shops: Falafel Sahyoun and Falafel Arax in Beirut. "3tiini falafel sandwich" = give me a falafel sandwich. The key: "Taaze" (freshly fried) — sitting falafel is an insult. Lebanese people abroad miss Lebanese falafel specifically. "Maa fi falafel mitil il-Lubnaan" = no falafel like Lebanon\'s.'
  },
  {
    title: 'Fresh Juice Culture',
    body: 'Lebanese "3aSiir" (fresh juice) culture is serious. Every neighborhood has a juice shop open early morning until midnight, squeezing fresh: burtu2aan (orange), lemon, pomegranate (rummaan), carrot, avocado, and seasonal fruits. Summer drinks: "tamar hindi" (tamarind), "3aSiir qamar il-diin" (apricot from dried sheets), "sharaab toot" (mulberry). "3tiini 3aSiir rummaan" = give me pomegranate juice. Lebanese juice is never from concentrate — "Taaze bass" (fresh only) is the standard. The limunaaDe (lemonade) in Lebanese cafés — with fresh mint — is iconic. "Limunaada bi-na3naae" = lemonade with mint.'
  },
];

const SNK_ABOUT = 'Lebanese street food is one of the Mediterranean\'s great culinary traditions — immediate, fresh, deeply regional, and fiercely debated. Every neighborhood has its legendary falafel shop, every city its signature dish (sfiiHa in Baalbeck, knefe in Tripoli, ka3ik vendors in Beirut), and every Lebanese has an opinion on who makes it best. The vocabulary of street food ordering — "Taaze?" (fresh?), "bi-kam?" (how much?), "3tiini wahad" (give me one) — is practical daily Arabic for anyone living in or visiting Lebanon. And the moment you bite into a hot manoushe with za\'atar and olive oil from a good furn at 7am, you understand why Lebanese people are so passionate about their street food.';
