// R612 — NEW FEATURE: Lebanese Street Food & Snacks (str)

const STR_CATS = [
  { id: 'bread',   label: '🫓 Breads' },
  { id: 'snack',   label: '🥙 Snacks' },
  { id: 'sweet',   label: '🍯 Sweets' },
  { id: 'drink',   label: '☕ Drinks' },
];

const STR_WORDS = [
  // Breads
  { id: 'str01', cat: 'bread', ar: 'المنقوشة', tr: 'l-man2oushe', en: 'Manouche — thyme flatbread', note: 'Lebanon\'s most popular breakfast, topped with za\'atar and olive oil' },
  { id: 'str02', cat: 'bread', ar: 'خبز عربي', tr: 'khubez 3arabi', en: 'Arabic bread / pita', note: 'Staple flatbread used for sandwiches and dipping' },
  { id: 'str03', cat: 'bread', ar: 'الكعك', tr: 'l-ka3k', en: 'Ka\'ak — sesame bread ring', note: 'Ring-shaped bread covered in sesame seeds, sold by street vendors' },
  { id: 'str04', cat: 'bread', ar: 'الفطير', tr: 'l-fatir', en: 'Fatir — thin crispy flatbread', note: 'Unleavened thin bread sometimes stuffed or topped' },
  { id: 'str05', cat: 'bread', ar: 'البوراك', tr: 'l-burak', en: 'Burak — fried cheese pastry', note: 'Fried dough filled with white cheese, popular street snack' },
  // Snacks
  { id: 'str06', cat: 'snack', ar: 'الفلافل', tr: 'l-falafil', en: 'Falafel — fried chickpea fritters', note: 'Deep-fried balls of ground chickpeas with herbs, served in pita' },
  { id: 'str07', cat: 'snack', ar: 'الشاورما', tr: 'l-shawarma', en: 'Shawarma — rotisserie meat wrap', note: 'Marinated meat on vertical spit, wrapped in bread with garlic sauce' },
  { id: 'str08', cat: 'snack', ar: 'الكبة المقلية', tr: 'l-kbbe l-maqliyye', en: 'Fried kibbeh', note: 'Torpedo-shaped fried shells of bulgur wheat stuffed with spiced meat' },
  { id: 'str09', cat: 'snack', ar: 'الحمص', tr: 'l-7ommos', en: 'Hummus — chickpea dip', note: 'Blended chickpeas with tahini, lemon and garlic, eaten with bread' },
  { id: 'str10', cat: 'snack', ar: 'المتبل', tr: 'l-motabbal', en: 'Mutabbal — smoky eggplant dip', note: 'Roasted eggplant dip with tahini, similar to baba ghanoush' },
  { id: 'str11', cat: 'snack', ar: 'الفول', tr: 'l-ful', en: 'Ful — fava bean stew', note: 'Slow-cooked fava beans with olive oil and lemon, popular breakfast' },
  { id: 'str12', cat: 'snack', ar: 'السمبوسك', tr: 'l-sambusak', en: 'Sambusak — fried pastry pockets', note: 'Crispy pastry filled with cheese or meat, Levantine street staple' },
  { id: 'str13', cat: 'snack', ar: 'اللحم بعجين', tr: 'l-la7m bi-3ajin', en: 'Lahm bi ajin — meat flatbread', note: 'Spiced minced meat spread on thin dough and baked, also called "Lebanese pizza"' },
  // Sweets
  { id: 'str14', cat: 'sweet', ar: 'الكنافة', tr: 'l-knafe', en: 'Knafeh — cheese pastry in syrup', note: 'Hot shredded pastry over soft cheese soaked in orange blossom syrup' },
  { id: 'str15', cat: 'sweet', ar: 'اللقيمات', tr: 'l-luqaymat', en: 'Luqaymat — fried dough balls', note: 'Small sweet fried dough balls drizzled with syrup or honey' },
  { id: 'str16', cat: 'sweet', ar: 'البقلاوة', tr: 'l-baqlawa', en: 'Baklava — nut-filled pastry', note: 'Layers of filo pastry with nuts, soaked in honey or sugar syrup' },
  { id: 'str17', cat: 'sweet', ar: 'حلوى السمسم', tr: '7alwit l-simsim', en: 'Sesame sweet / halva', note: 'Dense sweet made from tahini or sesame seeds' },
  { id: 'str18', cat: 'sweet', ar: 'المغلي', tr: 'l-meghli', en: 'Meghli — rice pudding with spices', note: 'Spiced caraway pudding traditionally served to celebrate newborns' },
  // Drinks
  { id: 'str19', cat: 'drink', ar: 'عصير ليمون', tr: '3asir laymun', en: 'Lemon juice / limonada', note: 'Fresh-squeezed lemonade, often with mint, hugely popular in summer' },
  { id: 'str20', cat: 'drink', ar: 'القهوة العربية', tr: 'l-ahwe l-3arabiyye', en: 'Arabic coffee', note: 'Cardamom-spiced coffee served in small cups, often with dates' },
  { id: 'str21', cat: 'drink', ar: 'الجلاب', tr: 'l-jalleb', en: 'Jallab — grape and rose water drink', note: 'Sweet drink from grape molasses, rose water and pine nuts over ice' },
  { id: 'str22', cat: 'drink', ar: 'التمر هندي', tr: 'l-tamr hindi', en: 'Tamarind drink', note: 'Tangy-sweet tamarind water, refreshing summer street drink' },
  { id: 'str23', cat: 'drink', ar: 'اليانسون', tr: 'l-yansun', en: 'Anise tea', note: 'Herbal tea made from aniseed, common in Lebanese households' },
];

const STR_DRILLS = [
  { q: 'What is "l-man2oushe"?', opts: ['A sesame bread ring', 'Za\'atar flatbread — Lebanon\'s most popular breakfast', 'Fried cheese pastry', 'Thin crispy flatbread'], ans: 1, exp: 'l-man2oushe (المنقوشة) is Lebanon\'s iconic za\'atar + olive oil flatbread, eaten especially at breakfast.' },
  { q: 'What is "l-falafil"?', opts: ['Fried chickpea fritters in pita', 'Rotisserie meat wrap', 'Bulgur wheat shell stuffed with meat', 'Fava bean stew'], ans: 0, exp: 'l-falafil (الفلافل) are fried chickpea balls served in pita with vegetables and tahini sauce.' },
  { q: 'What is "l-shawarma"?', opts: ['Fried dough balls', 'Thin flatbread pizza', 'Marinated rotisserie meat wrap', 'Cheese pastry pockets'], ans: 2, exp: 'l-shawarma (الشاورما) is meat grilled on a vertical spit, sliced and wrapped in bread with garlic sauce.' },
  { q: 'What is "l-ka3k"?', opts: ['Ring-shaped sesame bread', 'Hummus flatbread', 'Fried cheese pocket', 'Sweet rice pudding'], ans: 0, exp: 'l-ka3k (الكعك) is a sesame-crusted bread ring sold by street vendors.' },
  { q: 'What is "l-knafe"?', opts: ['Fried dough balls in honey', 'Baklava with pistachios', 'Hot cheese pastry in orange blossom syrup', 'Dense sesame sweet'], ans: 2, exp: 'l-knafe (الكنافة) is shredded pastry over soft cheese soaked in fragrant syrup — a Levantine classic.' },
  { q: 'What is "l-7ommos"?', opts: ['Smoky eggplant dip', 'Chickpea dip with tahini', 'Fava bean stew', 'Fried pastry pockets'], ans: 1, exp: 'l-7ommos (الحمص) is blended chickpeas with tahini, lemon and garlic, eaten with Arabic bread.' },
  { q: 'What is "l-motabbal"?', opts: ['Chickpea dip', 'Smoky roasted eggplant dip', 'Spiced lentil soup', 'Sesame candy'], ans: 1, exp: 'l-motabbal (المتبل) is roasted eggplant puree with tahini — smokier than baba ghanoush.' },
  { q: 'What is "l-baqlawa"?', opts: ['Caraway spiced pudding', 'Fried sesame rings', 'Filo pastry with nuts in honey syrup', 'Meat-stuffed dumplings'], ans: 2, exp: 'l-baqlawa (البقلاوة) is layered filo pastry with nuts soaked in honey or sugar syrup.' },
  { q: 'What is "l-ful"?', opts: ['Slow-cooked fava bean stew', 'Chickpea fritters', 'Crispy pastry pockets', 'Spiced meat flatbread'], ans: 0, exp: 'l-ful (الفول) is a hearty slow-cooked fava bean dish with olive oil and lemon, a popular breakfast.' },
  { q: 'What is "l-ahwe l-3arabiyye"?', opts: ['Tamarind drink', 'Anise herbal tea', 'Cardamom-spiced Arabic coffee', 'Rose water lemonade'], ans: 2, exp: 'l-ahwe l-3arabiyye (القهوة العربية) is cardamom-spiced coffee served in small cups, often with dates.' },
  { q: 'What is "3asir laymun"?', opts: ['Rose water and grape drink', 'Fresh lemon juice / limonada', 'Tamarind water', 'Orange blossom syrup drink'], ans: 1, exp: '3asir laymun (عصير ليمون) is fresh-squeezed lemonade, often with mint, beloved in Lebanese summers.' },
  { q: 'What is "l-la7m bi-3ajin"?', opts: ['Meat flatbread — "Lebanese pizza"', 'Fried meat pastry pockets', 'Minced meat kibbeh', 'Cheese-stuffed bread'], ans: 0, exp: 'l-la7m bi-3ajin (اللحم بعجين) is spiced ground meat baked on thin dough — sometimes called Lebanese pizza.' },
  { q: 'What is "l-kbbe l-maqliyye"?', opts: ['Grilled chicken wrap', 'Bulgur wheat torpedo stuffed with spiced meat', 'Rice-filled grape leaves', 'Cheese fried in dough'], ans: 1, exp: 'l-kbbe l-maqliyye (الكبة المقلية) are torpedo-shaped fried bulgur shells with seasoned ground meat inside.' },
  { q: 'What is "l-meghli"?', opts: ['Sesame candy bar', 'Spiced caraway rice pudding', 'Sweet fried dough balls', 'Filo nut pastry'], ans: 1, exp: 'l-meghli (المغلي) is a fragrant caraway pudding traditionally made to celebrate the birth of a child.' },
  { q: 'What is "l-luqaymat"?', opts: ['Syrup-soaked fried dough balls', 'Cheese-filled flatbread', 'Ground nut candy', 'Rice and milk pudding'], ans: 0, exp: 'l-luqaymat (اللقيمات) are small fried dough balls drizzled with honey or syrup — addictive street sweets.' },
];

const STR_TIPS = [
  { title: 'Man\'oushe is breakfast king', body: 'In Lebanon, "ma 3indak man2oushe?" (don\'t you have manouche?) is basically "what\'s for breakfast?" Za\'atar + olive oil is the classic, but you can also get cheese (jibneh) or meat versions.' },
  { title: 'Falafel debate: chickpea vs fava', body: 'Lebanese falafel (l-falafil) is made mostly from chickpeas, while Egyptian ta\'amiyya uses fava beans. Both are 7elo (delicious)!' },
  { title: 'Shawarma sauce secret', body: 'Lebanese shawarma uses toum (توم) — a powerful garlic cream emulsion. It\'s made from garlic, oil, lemon and salt whipped to a fluffy white paste. Saying "ktir toum" (lots of garlic) is a rite of passage.' },
  { title: 'Ka\'ak vendors and the street cry', body: 'Ka\'ak street vendors in Beirut call out "ka3k, ka3k!" while carrying trays on their heads. It\'s one of Beirut\'s iconic street sounds.' },
  { title: 'Knafeh: sweet debate', body: 'Knafeh is hotly disputed between Lebanon, Palestine, and Jordan. Each claims theirs is authentic. The Lebanese version often uses akkawi cheese (jibneh 3akkawiyye).' },
  { title: 'Coffee culture', body: 'In Lebanon, coffee (l-ahwe) is a social ritual. Refusing coffee from a host is impolite. "Tfaddal 3a l-ahwe" (please have some coffee) is standard hospitality.' },
  { title: 'Ordering street food', body: 'Common phrases: "b-shit?" = how much? "wahed w noss" = one and a half (a common quantity for shawarma). "mazbuT" = just right. "ma fi" = none left. "2abel shi" = in a little while.' },
];
