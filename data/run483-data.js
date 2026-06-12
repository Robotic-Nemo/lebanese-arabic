// R483 — Lebanese Cuisine & Food Culture coach (prefix: cui)
const CUI_WORDS = [
  // iconic dishes
  {ar:'حمّص', tr:'7ummuS', en:'hummus (chickpea dip)', cat:'dishes'},
  {ar:'كبّة', tr:'kibbe', en:'kibbeh (bulgur & meat dish)', cat:'dishes'},
  {ar:'تبّولة', tr:'tabbuule', en:'tabbouleh (parsley salad)', cat:'dishes'},
  {ar:'فتّوش', tr:'fattush', en:'fattoush (bread salad)', cat:'dishes'},
  {ar:'شاورما', tr:'shaawurma', en:'shawarma (spit-roasted meat)', cat:'dishes'},
  {ar:'فلافل', tr:'falafel', en:'falafel (fried chickpea balls)', cat:'dishes'},
  {ar:'منقوشة', tr:'man2uushe', en:'manoushe (flatbread with za\'atar)', cat:'dishes'},
  {ar:'ورق عريش', tr:'wara2 3aresh', en:'grape leaves (stuffed)', cat:'dishes'},
  // mezze & dips
  {ar:'مزة', tr:'mezze', en:'mezze (assorted small dishes)', cat:'mezze'},
  {ar:'متبّل', tr:'mutabbal', en:'mutabbal (smoky eggplant dip)', cat:'mezze'},
  {ar:'لبنة', tr:'labne', en:'labneh (strained yogurt)', cat:'mezze'},
  {ar:'فتّة', tr:'fatte', en:'fatté (bread, yogurt & chickpeas)', cat:'mezze'},
  {ar:'كبّيس', tr:'kabbiis', en:'pickles / pickled vegetables', cat:'mezze'},
  {ar:'زعتر', tr:'za3tar', en:'za\'atar (thyme herb mix)', cat:'mezze'},
  // breads & staples
  {ar:'خبز عربي', tr:'khubz 3arabi', en:'Arabic flatbread (pita)', cat:'staples'},
  {ar:'رز', tr:'ruzz', en:'rice', cat:'staples'},
  {ar:'عدس', tr:'3adas', en:'lentils', cat:'staples'},
  {ar:'زيت زيتون', tr:'zayt zaytun', en:'olive oil', cat:'staples'},
  // sweets & drinks
  {ar:'بقلاوة', tr:'ba2laawa', en:'baklava (nut & honey pastry)', cat:'sweets'},
  {ar:'كنافة', tr:'knafe', en:'knafeh (cheese pastry)', cat:'sweets'},
  {ar:'مغلي', tr:'mghali', en:'mghli (carob pudding for newborns)', cat:'sweets'},
  {ar:'عرق', tr:'3ara2', en:'arak (anise liquor, national drink)', cat:'sweets'},
  {ar:'قهوة عربية', tr:'2ahwe 3arabiyye', en:'Arabic coffee', cat:'sweets'},
  {ar:'عصير لمون بنعناع', tr:'3aSiir lemon bi-na3na3', en:'lemon mint juice', cat:'sweets'},
  // cooking terms
  {ar:'مشوي', tr:'mashwi', en:'grilled', cat:'cooking'},
  {ar:'مقلي', tr:'ma2li', en:'fried', cat:'cooking'},
  {ar:'بالفرن', tr:'bil-furn', en:'baked (in the oven)', cat:'cooking'},
  {ar:'حار', tr:'7aar', en:'spicy / hot', cat:'cooking'},
  {ar:'لذيذ', tr:'laziiz', en:'delicious / tasty', cat:'cooking'},
  // restaurant & dining
  {ar:'صفيحة', tr:'Sfiha', en:'sfeeha (meat flatbread)', cat:'dining'},
  {ar:'ساج', tr:'saaj', en:'saj (giant thin flatbread pan)', cat:'dining'},
  {ar:'مأكولات بحرية', tr:'ma2kuulaat ba7riyye', en:'seafood', cat:'dining'},
  {ar:'كيلو حمّص', tr:'kiilo 7ummuS', en:'kilo of hummus (common order)', cat:'dining'},
  {ar:'صحتين', tr:'Sa7tayn', en:'bon appétit (lit. two healths)', cat:'dining'},
  // food expressions
  {ar:'أكل كتير', tr:'akal ktiir', en:'ate a lot', cat:'expressions'},
  {ar:'جوعان', tr:'juu3aan', en:'hungry (male)', cat:'expressions'},
  {ar:'عبّيت', tr:'3abbeet', en:'I am full / stuffed', cat:'expressions'},
  {ar:'الأكل اللبناني أحسن أكل بالعالم', tr:'el akl el lubnani a7san akl bil 3aalam', en:'Lebanese food is the best food in the world', cat:'expressions'},
  {ar:'دفعي أنا', tr:'dfa3i ana', en:'I\'ll pay / it\'s on me (male)', cat:'expressions'},
  {ar:'على قلبي', tr:'3a 2albi', en:'with pleasure / on my heart (hospitality phrase)', cat:'expressions'},
];

const CUI_DRILLS = [
  {
    q: 'What is "Sa7tayn" and when do you say it?',
    opts: [
      'Bon appétit — said before/during meals (lit. "two healths")',
      'Thank you — said to the host after a meal',
      'Good morning — traditional Lebanese greeting over breakfast',
      'Cheers — said when clinking glasses of arak'
    ],
    ans: 0,
    note: '"Sa7tayn" = two healths (صحتين). Said as "bon appétit" or in response to thanks for food. Reply: "3a 2albak" (on your heart). Also said sarcastically when someone eats too much. From "Sa77a" (health). "Sahha" (single health) is also used. Lebanese hospitality centers on food.'
  },
  {
    q: 'What is "man2uushe" — Lebanon\'s most beloved breakfast?',
    opts: [
      'Flatbread baked with za\'atar and olive oil',
      'Fried egg sandwich with vegetables',
      'Sweet pastry filled with cheese and honey',
      'Thick yogurt served with bread'
    ],
    ans: 0,
    note: '"Man2uushe" (منقوشة) = flatbread with za\'atar and olive oil, baked on a dome-shaped griddle (saaj). Lebanon\'s national breakfast. Sold at bakeries from 6am. Za\'atar (wild thyme mix) is believed to sharpen the mind. "Man2uushe 3a l-saaj" = fresh off the saaj (best kind).'
  },
  {
    q: 'What is "mezze" in Lebanese dining culture?',
    opts: [
      'Many small shared dishes served before the main meal',
      'A specific Lebanese salad made with bread',
      'The main rice and meat course',
      'Dessert and coffee served at the end'
    ],
    ans: 0,
    note: '"Mezze" (مزة) = assorted small dishes shared by the whole table. Can include 20-30 items: hummus, mutabbal, tabbouleh, labneh, fattoush, kibbeh, grape leaves... A Lebanese mezze table is a social event. "3a l-mezze" = over mezze = a long, leisurely meal.'
  },
  {
    q: 'What is "3ara2" (arak) and how do you drink it?',
    opts: [
      'Anise liquor — Lebanon\'s national drink, mixed with water over ice',
      'Sweet grape juice — served at celebrations',
      'Strong coffee — drunk after meals',
      'Lemon drink — mixed with mint and sugar'
    ],
    ans: 0,
    note: '"3ara2" = arak, a clear anise-flavored spirit. When mixed with water and ice, it turns milky white — hence "lion\'s milk" (7aliib el asad). Never add water before ice (order matters!). Drunk slowly with mezze over hours. Lebanese arak (Château Ksara, Château Musar) is world-famous.'
  },
  {
    q: 'How do you say "delicious" in Lebanese Arabic?',
    opts: ['laziiz', '7aar', 'mashwi', '3abbeet'],
    ans: 0,
    note: '"Laziiz" = delicious (لذيذ). Female form: "laziize". "Haaydaa laziiz ktir" = this is very delicious. Other food adjectives: "7ilo" (sweet/nice), "taazel" (tasteless — insult!), "kaasir" (bland). When Lebanese food is really good: "yislam eedayk!" (may your hands be blessed — compliment to the cook).'
  },
  {
    q: 'What is "kibbeh" (kibbe) — Lebanon\'s national dish?',
    opts: [
      'Bulgur wheat mixed with minced meat, onions and spices',
      'Chickpeas blended with tahini and lemon',
      'Parsley and tomato salad with bulgur',
      'Eggplant dip with sesame paste'
    ],
    ans: 0,
    note: '"Kibbe" (كبّة) = Lebanon\'s national dish — bulgur wheat mixed with meat, onion and spices. Many forms: "kibbe nayyeh" (raw), "kibbe b-siniyye" (baked), "kibbe mkliyye" (fried). Raw kibbeh (kibbe nayyeh) is like Lebanese steak tartare — controversial but beloved. "La kibbe, la 7ummuS, la lebnen" = no kibbeh, no hummus, no Lebanon.'
  },
  {
    q: 'What does "juu3aan" mean and what\'s the female form?',
    opts: [
      'Hungry (male) — female form is "juu3aane"',
      'Full (male) — female form is "3abbaane"',
      'Thirsty (male) — female form is "3aTshaane"',
      'Tired (male) — female form is "ta3baane"'
    ],
    ans: 0,
    note: '"Juu3aan" = hungry (male), "juu3aane" = hungry (female) (جوعان/جوعانة). "Ana juu3aan ktiir" = I\'m very hungry. Lebanese hosting culture means guests are never allowed to stay hungry — "fi akl ktir, tna77a!" (there\'s lots of food, help yourself!). Refusing food is an art in Lebanon.'
  },
  {
    q: 'What is "labneh" and why is it central to Lebanese cuisine?',
    opts: [
      'Strained yogurt — thick, tangy, eaten with olive oil at every breakfast',
      'Fresh white cheese — sliced and served with tomatoes',
      'Chickpea soup — served with pita bread',
      'Clarified butter — used for cooking rice'
    ],
    ans: 0,
    note: '"Labne" (لبنة) = strained yogurt, much thicker than Greek yogurt. A Lebanese table staple. Served with olive oil and za\'atar for breakfast. Rolled into balls preserved in olive oil for months ("labne mkabbe"). "Labne bzeit w za3tar" (labneh with olive oil and za\'atar) = the quintessential Lebanese breakfast.'
  },
  {
    q: 'What does "dfa3i ana" mean in Lebanese?',
    opts: [
      'I\'ll pay / it\'s on me',
      'I\'m full / I can\'t eat more',
      'I like this dish',
      'Can I have the menu?'
    ],
    ans: 0,
    note: '"Dfa3i ana" = I\'ll pay (male saying it). Female: "dfa3et ana". Lebanese bill-fighting culture is intense — grabbing the bill before others is a matter of honor. "Ma khalliik tdfa3" = don\'t you dare pay (I insist on paying). Fights over who pays the bill are a social performance.'
  },
  {
    q: 'What is "ba2laawa" and where is it from?',
    opts: [
      'Baklava — layers of filo pastry with nuts and honey syrup',
      'Knafeh — shredded pastry with cheese and sweet syrup',
      'Mghli — spiced carob pudding for new babies',
      'Kaak — sesame-covered bread rings'
    ],
    ans: 0,
    note: '"Ba2laawa" (بقلاوة) = baklava, layers of filo pastry with chopped nuts and honey/sugar syrup. A Levantine and Ottoman specialty, Lebanese baklava from Tripoli (Wadi Abou Jmil area) is famous. Eaten at Eid, Christmas, weddings. "Bi2addar ma baakul ba2laawa" = I can\'t stop eating baklava.'
  },
];

const CUI_TIPS = [
  {
    title: 'Lebanese food as identity',
    body: '"El akl el lubnani a7san akl bil 3aalam" (Lebanese food is the best food in the world) — every Lebanese believes this. And they\'re not entirely wrong. Lebanese cuisine is the most internationally recognized Arab food, with Lebanese restaurants in 180+ countries. Food is central to Lebanese identity, hospitality, and argument.'
  },
  {
    title: 'The mezze culture',
    body: 'A proper Lebanese mezze is a 3-hour social event. Dishes keep coming — hummus, mutabbal, tabbouleh, fattoush, labneh, olives, bread — before any main course. Conversation happens between bites. "3a l-mezze" means a leisurely meal where time is not the priority. Rushing a mezze is considered rude.'
  },
  {
    title: 'Breakfast: the most important meal',
    body: 'Lebanese breakfast is legendary: man2uushe (za\'atar flatbread), labneh with olive oil, za\'atar, olives, tomatoes, cucumbers, eggs, and strong coffee. Bakeries open at 5-6am for fresh man2uushe. "Man2uushe 3a l-saaj bi sabbaa7" (morning manoushe straight from the saaj) is a Lebanese ritual.'
  },
  {
    title: 'The arak ritual',
    body: '"3ara2" (arak) is Lebanon\'s national spirit, made from grapes and anise. Rules: never drink on empty stomach, always drink with food/mezze, never add water before ice, drink slowly over hours. "3a Si77tak" (to your health) when clinking. Lebanese arak from the Bekaa Valley and Keserwan is world-class.'
  },
  {
    title: 'Bill-fighting and hospitality',
    body: '"Dfa3i ana!" (I\'ll pay!) is a Lebanese competitive sport. Guests are never allowed to pay — fighting over the bill is expected and intense. "Ma khalliik tdfa3 walla!" (don\'t you dare pay, I swear!). The host always pays, always insists guests eat more, and "3a 2albi" (on my heart) is the signature hospitality phrase.'
  },
];

const CUI_ABOUT = `
<p><strong>🍽️ Lebanese Cuisine & Food Culture</strong></p>
<p>Lebanese food isn't just sustenance — it's culture, identity, and the primary language of Lebanese hospitality. Lebanon has exported its cuisine globally: hummus, tabbouleh, shawarma, and falafel are eaten worldwide, and Lebanese restaurants operate in 180+ countries.</p>
<p><strong>The mezze tradition:</strong> A Lebanese table is a social performance. Mezze — dozens of small shared dishes — appears before any main course and can last hours. The goal is abundance: "aktulooo" (eat!) and "fi ktir, akhud aktar" (there's more, take more) are the mantras of Lebanese hosting.</p>
<p><strong>Man2uushe culture:</strong> Lebanon's flatbread with za'atar and olive oil is more than breakfast — it's a symbol of Lebanese morning life. Bakeries across Lebanon are social hubs at 6am, with people picking up fresh man2uushe before work, school, or traffic.</p>
<p><strong>Food fights (the good kind):</strong> Who pays the bill? Always the host. "Dfa3i ana!" (I'll pay!) is said loudly and urgently. Lebanese bill-fighting is competitive hospitality — giving someone the honor of paying is a defeat. Expect battles.</p>
`;
