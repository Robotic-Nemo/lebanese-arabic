// R828 — NEW FEATURE: Lebanese Mezze & Communal Dining Culture (mzz)

const MZZ_CATS = ['mezze','ordering','sharing','drinks'];

const MZZ_WORDS = [
  // classic mezze dishes
  { a: 'مزة', tr: 'mazza', en: 'mezze — the Lebanese spread of small shared dishes', cat: 'mezze' },
  { a: 'حمص', tr: '7ummus', en: 'hummus — chickpea dip, cornerstone of any mezze', cat: 'mezze' },
  { a: 'متبل', tr: 'mutabbal', en: 'mutabbal — smoky eggplant dip with tahini', cat: 'mezze' },
  { a: 'كيبة نية', tr: 'kibbe nayye', en: 'raw kibbe — raw spiced lamb, considered a delicacy', cat: 'mezze' },
  { a: 'فتوش', tr: 'fattoush', en: 'fattoush — crunchy salad with toasted pita', cat: 'mezze' },
  { a: 'تبولة', tr: 'tabboule', en: 'tabbouleh — parsley-dominant herb salad', cat: 'mezze' },
  { a: 'ورق عريش', tr: 'wara2 3arish', en: 'stuffed grape leaves — rice & herb filled rolls', cat: 'mezze' },
  { a: 'سجق', tr: 'sujuk', en: 'sujuk — spiced Lebanese sausage, grilled', cat: 'mezze' },
  // ordering culture
  { a: 'تعا نطلب', tr: 'ta3a ntlub', en: '"come let\'s order" — signal to start ordering together', cat: 'ordering' },
  { a: 'منعمر الطاولة', tr: 'mna3mar it-tawle', en: '"we\'ll fill the table" — order generously, Lebanese style', cat: 'ordering' },
  { a: 'شو بتنصحنا', tr: 'shu btinSa7na', en: '"what do you recommend?" — ask the waiter', cat: 'ordering' },
  { a: 'جيبوا الكل', tr: 'jibu il-kull', en: '"bring everything" — Lebanese hospitality excess in ordering', cat: 'ordering' },
  { a: 'خبز عالنار', tr: 'khubz 3al-naar', en: 'bread on the fire — fresh pita from the taboun oven', cat: 'ordering' },
  { a: 'بدنا زيادة', tr: 'bidna ziyaade', en: '"we want more" — refill request, expected freely', cat: 'ordering' },
  { a: 'اتفضلوا', tr: 'tfaDDalu', en: '"please help yourselves" — host invites guests to eat', cat: 'ordering' },
  // sharing etiquette
  { a: 'صحتين', tr: 'Sa7tayn', en: '"double health / bon appétit" — toast before eating', cat: 'sharing' },
  { a: 'على قلبك', tr: '3ala 2albak', en: '"on your heart" — said to person who prepared the food', cat: 'sharing' },
  { a: 'كل كل', tr: 'kull kull', en: '"eat eat" — insistent encouragement to eat more', cat: 'sharing' },
  { a: 'ما بيكفي', tr: 'ma bikffe', en: '"it\'s not enough" — always said even when table is overflowing', cat: 'sharing' },
  { a: 'نكشة', tr: 'nakshe', en: 'picking at food — communal dipping and sharing from same plate', cat: 'sharing' },
  { a: 'دايمة', tr: 'dayme', en: '"may it be lasting / may the table always be full" — response to Sa7tayn', cat: 'sharing' },
  { a: 'ما عندي جوع', tr: 'ma 3inde ju3', en: '"I\'m not hungry" — said despite eating (Lebanese polite denial)', cat: 'sharing' },
  // drinks
  { a: 'عرق', tr: '3ara2', en: 'arak — anise spirit, the national drink of Lebanon', cat: 'drinks' },
  { a: 'بيضا', tr: 'bayDa', en: '"white" — arak turns milky white when mixed with water + ice', cat: 'drinks' },
  { a: 'كاسات', tr: 'kaasaat', en: 'glasses — small arak glasses; saying "kaasaat" = round of drinks', cat: 'drinks' },
  { a: 'كس أمك', tr: 'ksas imm-', en: '"cheers" — Lebanese toast (literal meaning is vulgar, used affectionately)', cat: 'drinks' },
  { a: 'ميّ', tr: 'mayy', en: 'water — always served alongside arak, Lebanese tap water tradition', cat: 'drinks' },
  { a: 'اشرب', tr: 'ishrab', en: '"drink!" — urging someone to drink, Lebanese hospitality command', cat: 'drinks' }
];

const MZZ_DRILLS = [
  { q: 'What is "mazza"?', opts: ['a single dish','the Lebanese spread of small shared dishes','a type of bread','a meat dish'], ans: 1, exp: '"Mazza" (مزة) is the defining Lebanese dining experience — a table covered with many small dishes ordered and shared communally. It\'s less about a single meal and more about the ritual of gathering, ordering generously, and eating together over hours.' },
  { q: '"Sa7tayn" means...', opts: ['"eat everything"','"double health / bon appétit"','"the food is ready"','"I\'m not hungry"'], ans: 1, exp: '"Sa7tayn" (صحتين) literally means "two healths" — it\'s the Lebanese toast before eating, wishing double health to those eating. The response is "3ala 2albak/ek" (on your heart) said to the host.' },
  { q: 'What is "3ara2"?', opts: ['a food dish','grape juice','anise spirit — the national drink','beer'], ans: 2, exp: '"3ara2" (عرق) is arak, Lebanon\'s anise-flavored spirit. It\'s traditionally drunk with mezze, mixed with water and ice, turning milky white ("bayDa"). Drinking arak is a social ritual tied to long meals.' },
  { q: '"Mna3mar it-tawle" means...', opts: ['"we\'ll eat quickly"','"the table is ready"','"we\'ll fill the table" — order generously','"let\'s split the bill"'], ans: 2, exp: '"Mna3mar it-tawle" (منعمر الطاولة) = we\'ll fill the table — a classic Lebanese approach to ordering. Anything less than an overflowing table is considered inadequate hospitality.' },
  { q: 'What does "tfaDDalu" signal?', opts: ['the food is finished','the check is coming','"please help yourselves" — host invites to eat','someone needs to leave'], ans: 2, exp: '"TfaDDalu" (اتفضلوا) is the host\'s invitation to begin eating. It\'s mandatory — you don\'t start eating before the host says this. The plural form is used even for one person as a mark of respect.' },
  { q: '"Kibbe nayye" is...', opts: ['cooked lamb','raw spiced lamb — considered a delicacy','a vegetarian dish','fried dough'], ans: 1, exp: '"Kibbe nayye" (كيبة نية) = raw kibbe — ground lamb mixed with bulgur, onion, and spices, eaten raw. It\'s a delicacy and a mark of quality mezze. Ordering it signals trust in the restaurant\'s freshness.' },
  { q: 'What is "nakshe"?', opts: ['a type of salad','picking/communal dipping from shared plates','a serving spoon','a bread type'], ans: 1, exp: '"Nakshe" (نكشة) is the act of communal dipping and sharing from the same plate — breaking bread and dipping together. It\'s intimate and expected at a Lebanese table. No individual serving, everyone shares.' },
  { q: '"Ma bikffe" is said when...', opts: ['the food is not good','there\'s genuinely not enough food','the table is overflowing — said out of hospitality','someone is full'], ans: 2, exp: '"Ma bikffe" (ما بيكفي) = it\'s not enough — said even when the table is completely overflowing with food. Lebanese hospitality requires expressing that you haven\'t done enough. The more food, the more "ma bikffe."' },
  { q: 'What is "wara2 3arish"?', opts: ['grape juice','stuffed grape leaves','a type of bread','grape-flavored arak'], ans: 1, exp: '"Wara2 3arish" (ورق عريش) = grape leaves — stuffed with rice, herbs, tomato, and sometimes meat. Rolling grape leaves is a family activity; finding them on the mezze table means someone\'s grandmother was involved.' },
  { q: '"Dayme" is the response to...', opts: ['"kull kull"','"sa7tayn"','"ma bikffe"','"shu btinSa7na"'], ans: 1, exp: '"Dayme" (دايمة) = "may it last / may the table always be this full" — the traditional response to "sa7tayn." The exchange sa7tayn / 3ala 2albak / dayme is a ritual as old as Lebanese dining itself.' },
  { q: 'What does "bayDa" refer to in a drinks context?', opts: ['white wine','arak turning milky white when mixed with water','a white bread','milk drink'], ans: 1, exp: '"BayDa" (بيضا) = white — refers to arak becoming milky white when water hits it. This is the iconic visual of a Lebanese table: small glasses filling with cloudy white liquid as arak, water, and ice combine.' },
  { q: '"Jibu il-kull" means...', opts: ['"bring the check"','"bring everyone here"','"bring everything" — generous ordering','"the kitchen is closed"'], ans: 2, exp: '"Jibu il-kull" (جيبوا الكل) = bring everything — said to a waiter by a Lebanese host who wants to demonstrate maximum generosity. The bill will be enormous and that\'s the point.' },
  { q: 'What is "tabboule" famous for?', opts: ['being meat-heavy','being parsley-dominant — more herb than grain','being the most expensive dish','containing raw egg'], ans: 1, exp: '"Tabboule" (تبولة) is famous for being mostly fresh parsley with very little bulgur — the opposite of what non-Lebanese restaurants typically make. Lebanese will correct any "tabboule" that\'s mostly grain.' },
  { q: '"Kull kull" at a Lebanese table means...', opts: ['"everything is ready"','"eat eat" — insistent encouragement to eat more','everyone should pay','the meal is finished'], ans: 1, exp: '"Kull kull" (كل كل) = eat eat — the relentless Lebanese encouragement to keep eating. Refusing food at a Lebanese table requires multiple refusals. The host will interpret the first two as politeness.' },
  { q: 'What does "sujuk" add to a mezze?', opts: ['sweetness','a vegetarian option','spiced sausage — grilled and intensely flavored','a cold dish'], ans: 2, exp: '"Sujuk" (سجق) = spiced Lebanese sausage — grilled and intensely seasoned with cumin, cinnamon, and chili. It\'s a hot mezze item that arrives sizzling. Eating it with bread and a cold arak is a quintessential Lebanese moment.' }
];

const MZZ_TIPS = [
  'The Lebanese mezze table is a social institution, not just a meal. Ordering generously is hospitality — "mna3mar it-tawle" (we\'ll fill the table) is a point of pride. The size of the spread signals how much the host values the guests. Never order sparingly when hosting Lebanese guests.',
  '"Sa7tayn" (صحتين) and its responses form a ritual: someone says "sa7tayn" → host says "3ala 2albak" → guests say "dayme." This exchange happens every time someone takes food or drink. Missing it is a faux pas. If you don\'t know the full chain, at minimum say "sa7tayn."',
  'Arak (عرق) has strict serving rules: always with mezze, always with water and ice added separately (never ice directly into the bottle), and always in small glasses. The correct ratio is approximately 1:2 arak to water. Drinking arak without food or before the food arrives is considered bad form.',
  '"Nakshe" (نكشة) — communal dipping from shared plates — is central to mezze culture. Everyone dips their bread into the same hummus, shares the same plate of kibbe nayye, tears from the same bread basket. Individual serving is a Western import; the Lebanese table is communal by design.',
  'Lebanese hospitality requires the host to always say "ma bikffe" (it\'s not enough) no matter how much food is on the table. Guests are expected to respond with "ktir ktir" (too much too much). This exchange is not about the actual food quantity — it\'s a ritual affirmation of the host\'s generosity.',
  '"Khubz 3al-naar" (خبز عالنار) — fresh pita from the taboun oven — is non-negotiable at a proper mezze. The bread arrives warm and puffed, immediately after ordering. It\'s eaten immediately to experience it hot. Lebanese have very strong opinions about bread freshness and will comment if it\'s cold.'
];
