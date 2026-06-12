// R558 — NEW FEATURE: Lebanese Economic Crisis & Money vocabulary (prefix: eco)

const ECO_WORDS = [
  // cat: currency
  { ar: 'الليرة', tr: 'el-lire', en: 'The Lebanese pound (lira) — collapsed currency', cat: 'currency' },
  { ar: 'الدولار', tr: 'ed-dollar', en: 'The US dollar — the de facto currency since 2019', cat: 'currency' },
  { ar: 'الفريش دولار', tr: 'el-fresh dollar', en: 'Fresh dollar — new USD that entered Lebanon post-2019 (more valuable)', cat: 'currency' },
  { ar: 'الليرة بكم؟', tr: 'el-lire b-kam?', en: 'What\'s the dollar rate? — asked constantly in daily life', cat: 'currency' },
  { ar: 'السعر', tr: 'es-si3r', en: 'The price / exchange rate', cat: 'currency' },
  { ar: 'الصيرفة', tr: 'eS-Siirafe', en: 'Money exchange shop — proliferated during the crisis', cat: 'currency' },

  // cat: banking
  { ar: 'المصرف', tr: 'el-maSraf', en: 'The bank — most accounts frozen since 2019', cat: 'banking' },
  { ar: 'الودائع', tr: 'el-wadaa2i3', en: 'The deposits — billions trapped in Lebanese banks', cat: 'banking' },
  { ar: 'التحويل', tr: 'et-ta7wiil', en: 'The wire transfer — restricted or blocked', cat: 'banking' },
  { ar: 'السحب', tr: 'es-sa7b', en: 'The withdrawal — heavily capped at Lebanese pound rates', cat: 'banking' },
  { ar: 'الكابيتال كونترول', tr: 'el-capital control', en: 'Capital controls — unofficial restrictions on transfers', cat: 'banking' },
  { ar: 'اللولار', tr: 'el-lollar', en: 'Lollar — slang: trapped USD in Lebanese banks, not real dollars', cat: 'banking' },

  // cat: crisis
  { ar: 'الأزمة', tr: 'el-azme', en: 'The crisis — THE crisis (2019-present economic collapse)', cat: 'crisis' },
  { ar: 'الانهيار', tr: 'el-in7iyaar', en: 'The collapse — complete financial system collapse', cat: 'crisis' },
  { ar: 'التضخم', tr: 'et-taDakhkhum', en: 'Inflation — Lebanon hit 200%+ inflation at peak', cat: 'crisis' },
  { ar: 'الغلاء', tr: 'el-ghalaa', en: 'The high prices / cost of living', cat: 'crisis' },
  { ar: 'الفقر', tr: 'el-fa2r', en: 'Poverty — over 80% of Lebanese below poverty line post-2019', cat: 'crisis' },
  { ar: 'الهجرة', tr: 'el-hjire', en: 'Emigration — mass Lebanese brain drain since 2019', cat: 'crisis' },

  // cat: survival
  { ar: 'الكاش', tr: 'el-kaash', en: 'Cash — preferred for all transactions, no trust in banks', cat: 'survival' },
  { ar: 'التحويلات', tr: 'et-ta7wiilaat', en: 'Remittances — money sent by diaspora keeping families alive', cat: 'survival' },
  { ar: 'الغنى بالدولار', tr: 'el-ghina bid-dollar', en: 'Dollar-wealthy — those with foreign income, now the new elite', cat: 'survival' },
  { ar: 'الوقوف بالطابور', tr: 'el-u2uuf bit-Taabuur', en: 'Queuing in line — for fuel, bread, medicine during shortages', cat: 'survival' },
  { ar: 'المولد', tr: 'el-mawlad', en: 'The generator — backup electricity (different from mootor)', cat: 'survival' },
  { ar: 'الاكتفاء الذاتي', tr: 'el-iktifaa2 ez-zaati', en: 'Self-sufficiency — growing food, solar panels, cisterns', cat: 'survival' },

  // cat: transactions
  { ar: 'بالدولار ولا بالليرة؟', tr: 'bid-dollar walla bil-lire?', en: 'In dollars or lira? — asked for every purchase', cat: 'transactions' },
  { ar: 'السعر اليوم', tr: 'es-si3r el-yoom', en: 'Today\'s rate — prices change daily with exchange rate', cat: 'transactions' },
  { ar: 'بكم هالشي؟', tr: 'b-kam haash-shi?', en: 'How much is this? — basic haggling opener', cat: 'transactions' },
  { ar: 'غالي كتير', tr: 'ghaal ktir', en: 'Very expensive — universal complaint since 2019', cat: 'transactions' },
  { ar: 'ما في صرف', tr: 'maa fi Sarf', en: 'No change — shops often can\'t make change in small denominations', cat: 'transactions' },
  { ar: 'عالسعر الرسمي', tr: '3al-si3r er-rasmi', en: 'At the official rate — the (unfavorable) government exchange rate', cat: 'transactions' },
];

const ECO_DRILLS = [
  {
    q: 'A Lebanese friend says their savings are stuck in "lollars." What does this mean?',
    opts: [
      'US dollars trapped in a Lebanese bank — withdrawable only at unfavorable rates or not at all',
      'Lebanese lira savings that have not yet been exchanged to dollars',
      'Dollars held in a foreign bank account for safekeeping',
      'A government bond denominated in US dollars'
    ],
    ans: 0,
    exp: '"Lollar" (لولار) is a Lebanese neologism combining "lira" and "dollar" — dollars that exist on paper in Lebanese bank accounts but cannot actually be withdrawn or transferred at the real market rate. After October 2019, Lebanese banks froze accounts and imposed informal capital controls. Depositors who had saved in dollars could only withdraw in lira at artificial rates far below market value, effectively stealing from them. "My savings are in lollars" means: I had dollars but they\'re now worth a fraction of their value.'
  },
  {
    q: 'Someone in Beirut asks you "bid-dollar walla bil-lire?" before selling you something. What are they asking?',
    opts: [
      'Which currency do you want to pay in? — critical because the price differs dramatically',
      'Whether you prefer a receipt in dollars or lira',
      'Whether you\'re a tourist or a Lebanese resident',
      'Whether you want to negotiate the price'
    ],
    ans: 0,
    exp: 'Since 2019, Lebanon has operated on a multi-currency system with vast gaps between the official rate, the bank rate, and the market rate. "Bid-dollar walla bil-lire?" (in dollars or lira?) is asked constantly because: dollar prices are real prices; lira prices are calculated at the current black market rate and change daily. Answering "bid-dollar" means you have fresh dollars and will pay the stable price; "bil-lire" means you\'ll pay in local currency at the day\'s exchange rate.'
  },
  {
    q: 'What does "el-fresh dollar" mean and why does it matter in Lebanon?',
    opts: [
      'US dollars that physically entered Lebanon after 2019 — not trapped in banks, actually spendable',
      'New dollar bills printed by the US Federal Reserve',
      'Dollars sent via Western Union or MoneyGram',
      'Dollars borrowed from a Lebanese bank post-2019'
    ],
    ans: 0,
    exp: '"Fresh dollars" entered Lebanese vocabulary after the bank crisis. Before 2019, all dollars in Lebanon were equally valid. After the bank freeze, dollars in Lebanese bank accounts became "lollars" — worth less than face value. "Fresh dollars" are physically new to the Lebanese economy: brought in cash from abroad, sent as remittances, or earned from foreign clients. They are worth 100 cents on the dollar. This distinction — fresh vs. trapped — defines who in Lebanon is financially surviving versus struggling.'
  },
  {
    q: 'What is "et-ta7wiilaat" and why is this term so loaded in post-2019 Lebanon?',
    opts: [
      'Remittances from the diaspora — the lifeline keeping millions of Lebanese families afloat',
      'Bank transfer fees that increased dramatically during the crisis',
      'Government pension transfers that were cut during the crisis',
      'International aid transfers to Lebanese NGOs'
    ],
    ans: 0,
    exp: '"Et-ta7wiilaat" (the transfers/remittances) became the single most important financial concept in post-2019 Lebanon. Lebanon has one of the world\'s largest diasporas — 14+ million Lebanese-descended people abroad versus 4 million in Lebanon. When the economy collapsed, diaspora remittances became the primary income source for millions of families. WhatsApp groups coordinate "hawala" (informal transfer) networks. A Lebanese family receiving monthly dollars from a relative in Brazil or Detroit can survive; a family dependent only on local wages cannot. Remittances now equal or exceed Lebanon\'s GDP.'
  },
  {
    q: 'Someone says Lebanon is experiencing "el-in7iyaar." What specifically does this word describe?',
    opts: [
      'The collapse — used specifically for Lebanon\'s total financial and institutional breakdown since 2019',
      'A temporary economic recession that will be fixed with IMF aid',
      'The political deadlock in parliament preventing reforms',
      'The physical collapse of infrastructure like roads and buildings'
    ],
    ans: 0,
    exp: '"El-in7iyaar" (the collapse) is the Lebanese word for what economists call one of the worst financial crises in modern world history. Since 2019: the lira lost 90%+ of its value, bank deposits were effectively confiscated, the Beirut port exploded killing 200+, COVID hit, fuel ran out, hospitals closed. The word captures totality — not just financial but the collapse of the social contract between state and citizen. Lebanese use "el-azme" (the crisis) for everyday problems; "el-in7iyaar" for the full structural collapse.'
  },
  {
    q: 'What has "el-hjire" (emigration) meant specifically since 2019 in Lebanon?',
    opts: [
      'Mass brain drain — doctors, engineers, and educated youth leaving, hollowing out Lebanese society',
      'Palestinian refugees in Lebanon emigrating to Europe',
      'Syrian refugees returning home from Lebanon',
      'Wealthy Lebanese moving money to foreign accounts'
    ],
    ans: 0,
    exp: '"El-hjire" (emigration) is both an old Lebanese tradition and a post-2019 emergency. Lebanon has always exported its people — there\'s a deep diaspora culture. But post-2019 emigration is qualitatively different: it\'s the educated class leaving en masse. Doctors who could earn 10x their salary abroad, engineers, teachers, pharmacists. By 2022, Lebanon had lost an estimated 20-40% of its medical workforce. The phrase "kill el-nas raay7iin" (everyone is leaving) captures the social grief of watching a society hollowing out as everyone who can leave, does.'
  },
  {
    q: 'A Lebanese shopkeeper says "maa fi Sarf" and gives you extra goods instead of change. What happened?',
    opts: [
      'No change available — with multi-denomination currencies and inflation, making exact change is difficult',
      'The shop doesn\'t accept your type of currency',
      'You overpaid and they are keeping the difference',
      'The shop\'s card machine is broken'
    ],
    ans: 0,
    exp: '"Maa fi Sarf" (no change) is a common daily experience in Lebanon. With inflation destroying the value of small bills, with the mix of lira and dollar denominations, and with many bills being worn or unreliable, shopkeepers often simply don\'t have exact change. The informal solution: they give you gum, a small candy, or extra bread instead of coins. This is accepted without question — it\'s part of the informal economy that makes daily transactions work when the formal system is broken.'
  },
  {
    q: 'Why do Lebanese people constantly ask "el-lire b-kam?" (what\'s the dollar rate?)',
    opts: [
      'Prices for almost everything are calculated daily against the dollar exchange rate — it changes every day',
      'Lebanese people are planning to travel and need to know exchange rates',
      'It\'s a cultural greeting like asking about the weather',
      'Banks require you to know the current rate before withdrawing'
    ],
    ans: 0,
    exp: '"El-lire b-kam?" (what\'s the lira worth today?) is the Lebanese morning ritual since 2019. Because the Lebanese lira has no stable value, most prices are mentally denominated in dollars and then converted at that day\'s exchange rate. A landlord who charges $200/month recalculates their lira price every morning. A supermarket reprices items daily. A salary earner checks what their fixed lira salary is "really" worth that day. The Sayrafa app and currency exchange groups became as important as weather apps. Knowing the rate is survival information.'
  },
  {
    q: 'What does "el-iktifaa2 ez-zaati" (self-sufficiency) mean in the Lebanese crisis context?',
    opts: [
      'Growing food, installing solar panels, and collecting rainwater — practical survival in a country with no reliable state services',
      'Lebanese companies buying only Lebanese-made products to support the economy',
      'Government policy to reduce imports by developing local manufacturing',
      'Financial self-sufficiency: Lebanese families cutting spending to zero non-essentials'
    ],
    ans: 0,
    exp: '"El-iktifaa2 ez-zaati" (self-sufficiency) became the Lebanese middle-class project after 2019. When the state stopped providing: electricity (12-20+ hour cuts), water (irregular supply), fuel (queues lasting hours), medicine (hospital shortages) — Lebanese families built parallel systems. Solar panels became ubiquitous in Beirut. Rooftop water tanks. Home vegetable gardens. Generator networks already existed; solar extended this. The Lebanese response to state failure is not to wait for the state — it\'s to engineer around it. This self-reliance is both admirable and a symptom of total institutional collapse.'
  },
  {
    q: 'Someone describes themselves as "ghani bid-dollar" (dollar-wealthy). What does this mean in post-2019 Lebanon?',
    opts: [
      'They receive income in US dollars — the new social stratification that defines who can afford to live in Lebanon',
      'They are a millionaire in Lebanese lira terms',
      'They received a bank loan in dollars before the crisis',
      'They are a Lebanese-American who moved back to Beirut'
    ],
    ans: 0,
    exp: 'Post-2019 Lebanon has a new class system: those with dollar income (diaspora remittances, remote work for foreign companies, foreign clients) versus those with only lira income (government employees, local sector workers). A doctor paid in lira became poor overnight; a journalist writing for a foreign outlet in dollars became relatively wealthy. "Ghani bid-dollar" captures this inversion — dollar access is not about old wealth but about which currency you earn in. This divide has reshaped Beirut\'s social geography: dollar-earners in cafes, lira-earners unable to afford coffee.'
  },
];

const ECO_TIPS = [
  '<strong>The multi-currency reality:</strong> In Lebanon since 2019, you operate in three "currencies": fresh dollars (real purchasing power), lollars (bank-trapped pseudo-dollars), and lira (rapidly inflating local currency). Prices are quoted in dollars but paid in whatever you have, at that day\'s exchange rate. Before any significant transaction, check the rate. The Sayrafa exchange app and currency news channels are Lebanese daily essentials. Never assume yesterday\'s price is today\'s price.',
  '<strong>Cash is king:</strong> Lebanese people carry cash — specifically US dollar bills — for almost all transactions. The bank crisis destroyed trust in electronic transfers. Many landlords require dollar cash. Restaurants and shops often prefer dollars. Older bills may be refused (certain series are associated with forgeries). Having small denominations ($1, $5, $10) matters because "maa fi Sarf" (no change) is constant. Lebanese wallet culture post-2019: multiple currencies, multiple denominations, always cash.',
  '<strong>The diaspora connection:</strong> Understanding Lebanese economic survival means understanding the diaspora. 14+ million Lebanese descendants live outside Lebanon — in Brazil, USA, Ivory Coast, Australia, Gulf states. Monthly remittances keep millions of Lebanese families afloat. When someone says "3andi 3ame b-America" (I have an uncle in America), they may mean financial lifeline, not just family. The diaspora also votes, lobbies, invests, and argues politics from afar — they are not separate from Lebanon but its extension.',
  '<strong>The price conversation:</strong> In Lebanon, discussing prices is not rude — it\'s survival. How much did you pay? Where do you buy bread? Who has fuel? Where is medicine cheaper? This information sharing is community solidarity. If someone asks "kin2arta b-kam?" (how much did your apartment cost?) they\'re not being nosy — they\'re doing market research in a market that changes monthly. Sharing price information is neighbourly behaviour, not violation of privacy.',
  '<strong>Gallows humour about the crisis:</strong> Lebanese people have a dark comedic relationship with the crisis. Jokes about the lira\'s collapse, about banks, about power cuts, about emigration are constant. This is not denial — it\'s processing collective trauma through humour. If a Lebanese person makes a joke about the bank stealing their money, or about needing a wheelbarrow of lira to buy bread, laugh with them — it\'s coping. Responding with sympathy or outrage can feel patronizing to people who have been living the crisis for years.',
];

const ECO_ABOUT = 'The Lebanese economic crisis (el-azme / el-in7iyaar) that began in October 2019 is among the worst financial collapses in modern world history, ranking with post-WWI Germany and post-war Zimbabwe. The Lebanese pound lost 90%+ of its value. Bank deposits of ordinary Lebanese were effectively confiscated through informal capital controls. Unemployment exploded. The Beirut port explosion of August 2020 killed 200+ and destroyed the city\'s commercial heart. COVID followed. More than 80% of the population fell below the poverty line. Understanding Lebanese Arabic today means understanding this context: why prices are in dollars, why banks are feared, why everyone is emigrating, why solar panels cover rooftops, why a monthly wire transfer from a cousin in São Paulo is the difference between eating and not eating. The crisis is not background — it is the foreground of every conversation about money, plans, or the future in Lebanon.';
