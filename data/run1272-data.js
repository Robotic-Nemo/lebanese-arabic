const BFT_WORDS = [
  { ar:'فطور', tr:'ftour', en:'breakfast', hint:'Ftour — Lebanese breakfast is a spread, not a quick meal; labneh, za\'atar, eggs, olives, fresh tomatoes, kaak; families eat together on Friday mornings' },
  { ar:'لبنة', tr:'labneh', en:'strained yogurt cheese', hint:'Labneh — the Lebanese breakfast staple; yogurt strained overnight until thick; drizzled with olive oil, sprinkled with za\'atar; never skip the olive oil' },
  { ar:'زعتر', tr:'za2tar', en:'wild thyme / za\'atar spice mix', hint:'Za2tar — the thyme-sesame-sumac blend that goes on everything at breakfast; dipped with bread and olive oil; mezze and breakfast are nothing without it' },
  { ar:'زيت زيتون', tr:'zeyt zeytoun', en:'olive oil', hint:'Zeyt zeytoun — poured over labneh, eggs, fatteh, hummus; Lebanese breakfast bleeds olive oil; from the South (Deir Mimas) and Koura; never refined' },
  { ar:'بيض مقلي', tr:'beid ma2li', en:'fried eggs', hint:'Beid ma2li — fried eggs with olive oil; sometimes with awarma (preserved lamb) or sucuk; a Lebanese breakfast plate always has eggs on the side' },
  { ar:'زيتون', tr:'zeytoun', en:'olives', hint:'Zeytoun — marinated green or black olives on every breakfast table; from the villages; grandmothers pickle their own; the Souri olive from South Lebanon is prized' },
  { ar:'كعك بالسمسم', tr:'kaak bil-semsem', en:'sesame bread rings', hint:'Kaak bil-semsem — the circular street bread of Beirut mornings; sold from carts; eaten with labneh inside or dipped in za\'atar; iconic Beirut breakfast' },
  { ar:'فول مدمس', tr:'fool mdammas', en:'stewed fava beans', hint:'Fool mdammas — slow-cooked fava beans with lemon and olive oil; the working class breakfast; \"fool\" means both fava beans and something silly (slang crossover)' },
  { ar:'حمص', tr:'7ommous', en:'hummus (chickpea dip)', hint:'7ommous — often eaten at breakfast in Lebanon, not just at lunch; topped with olive oil, paprika, sometimes whole chickpeas; from a proper 7ommousiyyeh' },
  { ar:'مناقيش', tr:'mana2eesh', en:'flatbread with toppings', hint:'Mana2eesh — from the furn (communal oven); za\'atar, cheese, kafta, or kishk on bread; eaten hot off the griddle at the furn for breakfast on the way to school' },
  { ar:'جبنة بلدي', tr:'jebne baladi', en:'local white cheese', hint:'Jebne baladi — fresh village white cheese; goes with watermelon in summer, olives always; softer and saltier than Akkawi; breakfast without jebne baladi is missing something' },
  { ar:'طماطم', tr:'banadoura', en:'tomatoes', hint:'Banadoura — sliced fresh tomatoes on the breakfast spread; always with cucumber (khyar); Lebanese tomatoes are summer red and sweet; the dish is incomplete without them' },
  { ar:'خيار', tr:'khyar', en:'cucumber', hint:'Khyar — sliced cucumber alongside banadoura on the breakfast plate; sometimes pickled (mkhalal); cooling and fresh; eaten with labneh especially' },
  { ar:'عجة', tr:'3ejje', en:'Lebanese egg omelette (with herbs)', hint:'3ejje — a Lebanese herb omelette with parsley, scallions, sometimes potatoes; thicker than a French omelette; eaten warm at breakfast or cold at picnics' },
  { ar:'قهوة الصبح', tr:'ahwet el-Sobe7', en:'morning coffee', hint:'Ahwet el-Sobe7 — morning coffee ritual; Lebanese coffee (7alou or mazbouta — no sugar, medium sugar) or Nescafé (still called "Nescafé" even if another brand); must come first' },
  { ar:'مربى', tr:'mrabba', en:'jam / preserves', hint:'Mrabba — homemade jam from figs, apricots, or berries; grandmother\'s mrabba is on the breakfast table in villages; goes with fresh bread and butter' },
  { ar:'ورق عريش', tr:'wara2 3areesh', en:'grape leaves (stuffed)', hint:'Wara2 3areesh — stuffed grape leaves with rice and lemon; sometimes appears at weekend family breakfasts; a sign of a proper Lebanese sofreh spread' },
  { ar:'خبز عربي', tr:'khebez 3arabi', en:'pita bread / Arabic bread', hint:'Khebez 3arabi — the bread of all Lebanese meals; for scooping, dipping, wrapping; fresh from the bakery for breakfast; the phrase "mish bi khebez w meleh" means "not just bread and salt" (spartan living)' },
  { ar:'نعناع', tr:'na3na3', en:'fresh mint', hint:'Na3na3 — fresh mint leaves on the breakfast table; eaten with labneh, torn into salads, brewed into tea; always a bunch of fresh mint in Lebanese kitchens' },
  { ar:'صحتين', tr:'Se77teyn', en:'bon appétit (to your health, twice)', hint:'Se77teyn — said before a meal; literally "two healths"; the response is "3al 2albak" (on your heart); essential Lebanese table etiquette at every breakfast' }
];

const BFT_DRILLS = [
  { q:'What is "ftour"?', opts:['lunch','dinner','breakfast','a snack'], ans:2 },
  { q:'"Labneh" is...?', opts:['fried eggs','strained yogurt cheese','hummus','olive oil'], ans:1 },
  { q:'What does "za2tar" refer to?', opts:['fresh mint','olive oil','thyme-sesame-sumac spice mix','fava beans'], ans:2 },
  { q:'"Kaak bil-semsem" is...?', opts:['a type of hummus','stuffed grape leaves','sesame bread rings','pita bread'], ans:2 },
  { q:'What is "fool mdammas"?', opts:['stewed fava beans','fried eggs','cucumber salad','a type of cheese'], ans:0 },
  { q:'"Mana2eesh" are...?', opts:['grape leaves','flatbreads with toppings','sesame cookies','pickled olives'], ans:1 },
  { q:'What does "Se77teyn" mean?', opts:['good morning','thank you for the meal','bon appétit / to your health','enjoy your coffee'], ans:2 },
  { q:'"3ejje" is...?', opts:['a Lebanese omelette with herbs','strained yogurt','homemade jam','morning coffee'], ans:0 }
];

const BFT_TIPS = [
  { title:'The Lebanese Breakfast Spread — A Sofreh of Everything', body:'Lebanese breakfast (ftour) is never just one thing. The table (sofreh) fills up: labneh in a bowl swimming in olive oil, a plate of olives, sliced banadoura and khyar, boiled or fried eggs, fresh za\'atar for dipping, and always khebez 3arabi to scoop it all. Village families add mrabba (homemade jam) and jebne baladi. In cities, mana2eesh from the furn arrives hot. The meal is communal, unhurried, and anchored in local produce. The first coffee (ahwet el-Sobe7) is non-negotiable — sweet, thick, without milk.' },
  { title:'Friday Breakfast — The Sacred Lebanese Ritual', body:'Friday is the day Lebanese families have time for proper breakfast. On weekdays, breakfast might be a quick mana2eesha from the furn on the way to school or work. On Friday mornings, mothers make fool mdammas, fry eggs with awarma, slice tomatoes and cucumbers, warm bread, and call the whole family to the table. This meal stretches until noon. Even in Beirut apartments, this ritual persists — many families recreate the village sofreh every Friday regardless of how urban their lives have become.' },
  { title:'Kaak Vendors — The Beirut Breakfast Cart', body:'The quintessential Beirut breakfast is a kaak bil-semsem (sesame bread ring) bought from a street vendor in the early morning. The vendor rolls the cart through neighborhoods calling out "Kaaaaak!" The ring is split open and stuffed with labneh and za\'atar, or cheese and thyme. It costs almost nothing, takes less than two minutes, and can be eaten while walking. Foreign visitors overlook this ritual entirely. For Beirutis, seeing a kaak cart in the morning before work is the smell of the city waking up.' },
  { title:'7ommous and Fool — Morning Dishes, Not Just Mezze', body:'In Lebanon (especially in the North and the Bekaa), 7ommous and fool are breakfast dishes, not just mezze. Proper 7ommousiyyehs open at 6am and close before noon once they run out. The best hummus is eaten hot, freshly made, with olive oil pooled in the center and fresh bread for scooping. The same applies to fool mdammas — it\'s a slow-cooked morning dish eaten before heavy work. This breakfast-as-mezze tradition distinguishes Lebanese ftour from both European and Gulf Arab breakfast styles.' }
];
