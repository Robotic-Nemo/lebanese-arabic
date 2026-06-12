// R465 — Lebanese Restaurant Ordering coach (prefix: ord)
const ORD_WORDS = [
  // getting attention
  {ar:'لو سمحت', tr:'law sama7t', en:'excuse me (to waiter)', cat:'attention'},
  {ar:'يا صاحب', tr:'yaa Saa7ib', en:'hey buddy (to waiter, casual)', cat:'attention'},
  {ar:'حبيبي', tr:'7abiibe', en:'my dear (to waiter, warm)', cat:'attention'},
  {ar:'عندك وقت؟', tr:'3endak wa2t', en:'do you have a moment?', cat:'attention'},
  {ar:'نادى على الكاميرا', tr:'naada 3a el kaamiraa', en:'called the waiter (lit. called on the camera)', cat:'attention'},
  // ordering
  {ar:'بدي آكل', tr:'badde aakol', en:'I want to eat', cat:'ordering'},
  {ar:'بدنا نطلب', tr:'badna nTlob', en:'we want to order', cat:'ordering'},
  {ar:'شو عندك اليوم؟', tr:'shu 3endak el yoom', en:'what do you have today?', cat:'ordering'},
  {ar:'شو اللي بتنصحني فيه؟', tr:'shu lli btanSa7ne fii', en:'what do you recommend?', cat:'ordering'},
  {ar:'عطني', tr:'3Tine', en:'give me (ordering directly)', cat:'ordering'},
  {ar:'حبيت آخد', tr:'7abbet aakhod', en:'I\'d like to take', cat:'ordering'},
  {ar:'بدي زيادة', tr:'badde zyaade', en:'I want more / extra', cat:'ordering'},
  {ar:'بدون', tr:'bidoon', en:'without (e.g. bidoon toom = no garlic)', cat:'ordering'},
  // food preferences
  {ar:'حار كتير', tr:'7aar ktiir', en:'very spicy', cat:'preferences'},
  {ar:'خفيف', tr:'khafiif', en:'light (food)', cat:'preferences'},
  {ar:'ما باكل لحمة', tr:'maa baakol la7me', en:'I don\'t eat meat', cat:'preferences'},
  {ar:'نباتي', tr:'nabaate', en:'vegetarian', cat:'preferences'},
  {ar:'حلال', tr:'7alaal', en:'halal', cat:'preferences'},
  {ar:'بدون غلوتين', tr:'bidoon glootiin', en:'without gluten', cat:'preferences'},
  {ar:'حساسية من', tr:'7asaasiye min', en:'allergy to', cat:'preferences'},
  // drinks
  {ar:'ماي', tr:'maayi', en:'water (Lebanese)', cat:'drinks'},
  {ar:'عصير ليمون بالنعناع', tr:'3aSiir leymoon bil-na3naa3', en:'lemonade with mint', cat:'drinks'},
  {ar:'عرق', tr:'3ara2', en:'arak (anise spirit)', cat:'drinks'},
  {ar:'كاس نبيذ', tr:'kaas nbiid', en:'glass of wine', cat:'drinks'},
  {ar:'قهوة عربية', tr:'2ahwe 3arabiyye', en:'Arabic coffee', cat:'drinks'},
  {ar:'نسكافيه', tr:'nescafé', en:'instant coffee (Nescafé)', cat:'drinks'},
  // compliments
  {ar:'يسلم إيديك', tr:'yislamm ideek', en:'God bless your hands (compliment to cook)', cat:'compliments'},
  {ar:'كيلو عافية', tr:'kilo 3aafye', en:'a kilo of health (bon appétit)', cat:'compliments'},
  {ar:'صحتين', tr:'Sa7teyn', en:'to your health (like bon appétit)', cat:'compliments'},
  {ar:'أكلة من أكلات ربك', tr:'2akle min 2aklaat rabbak', en:'divine food (lit. a meal from God\'s meals)', cat:'compliments'},
  {ar:'اللي طبخ هيدا نجم', tr:'lli Tabakh hayda najm', en:'whoever cooked this is a star', cat:'compliments'},
  // paying the bill
  {ar:'الحساب من فضلك', tr:'el 7saab min faDlak', en:'the bill please', cat:'bill'},
  {ar:'كيف بتحسبوا؟', tr:'kiif btu7sabuu', en:'how do you charge?', cat:'bill'},
  {ar:'كلو علي', tr:'killo 3alee', en:'it\'s all on me (I\'m paying)', cat:'bill'},
  {ar:'نقسمها', tr:'ni2samaa', en:'let\'s split it', cat:'bill'},
  {ar:'بقشيش', tr:'ba2shiish', en:'tip (gratuity)', cat:'bill'},
  {ar:'اقبل الكاش؟', tr:'bi2bal el kaash', en:'do you accept cash?', cat:'bill'},
  {ar:'فيزا', tr:'viiza', en:'credit card', cat:'bill'},
  // local expressions
  {ar:'على الحساب', tr:'3a el 7saab', en:'on the tab / on the house', cat:'expressions'},
  {ar:'أكل مثل الرجال', tr:'akal mitl el rjaal', en:'ate like real men (heartily)', cat:'expressions'},
  {ar:'مزة', tr:'mazze', en:'mezze / appetizers spread', cat:'expressions'},
];

const ORD_DRILLS = [
  {
    q: 'How do you say "the bill please" in Lebanese?',
    opts: [
      'el 7saab min faDlak',
      'badde aakol',
      'yislamm ideek',
      'killo 3alee'
    ],
    ans: 0,
    note: '"El 7saab min faDlak" = the bill/check please. "Min faDlak" (m) or "min faDlik" (f) = please. "7saab" literally means account/calculation.'
  },
  {
    q: 'What does "yislamm ideek" mean and when do you say it?',
    opts: [
      'God bless your hands — said to compliment the cook',
      'Excuse me — to get the waiter\'s attention',
      'Let\'s split the bill — when eating with friends',
      'It\'s on me — when paying for everyone'
    ],
    ans: 0,
    note: '"Yislamm ideek" (lit. may your hands be safe/blessed) is the ultimate Lebanese compliment to a cook. Say it after a great meal to the chef or host. Very warm and culturally appreciated.'
  },
  {
    q: 'What is "mazze" in Lebanese dining culture?',
    opts: [
      'The spread of small appetizer dishes shared at the table',
      'The dessert course',
      'The main meat dish',
      'The bread basket'
    ],
    ans: 0,
    note: '"Mazze" is the Lebanese tradition of many small shared dishes — hummus, kibbeh, tabbouleh, fattoush, olives, cheese, etc. A full mezze can have 20-40 dishes! Eating is a social, communal affair.'
  },
  {
    q: 'How do you say "I\'d like to order" in Lebanese?',
    opts: [
      'badna nTlob',
      'killo 3alee',
      'Sa7teyn',
      'bidoon'
    ],
    ans: 0,
    note: '"Badna nTlob" = we want to order. "Badna" = we want, "nTlob" = to request/order. For singular: "badde aTlob" = I want to order.'
  },
  {
    q: 'What does "Sa7teyn" mean?',
    opts: [
      'To your double health — Lebanese toast / bon appétit',
      'Two dishes — ordering for two people',
      'Very delicious — food compliment',
      'Two bills — splitting the check'
    ],
    ans: 0,
    note: '"Sa7teyn" = two healths. Said before eating, like "bon appétit" or a toast. Response: "3ala 2albak" (to your heart). "Kilo 3aafye" is another variant.'
  },
  {
    q: 'How do you tell the waiter you don\'t want garlic?',
    opts: [
      'bidoon toom',
      '7alaal w ta7',
      'maa badde',
      '7aar ktiir'
    ],
    ans: 0,
    note: '"Bidoon" = without. "Toom" = garlic. "Bidoon toom" = without garlic. This pattern works for anything: "bidoon baSSal" (no onion), "bidoon 7aar" (not spicy).'
  },
  {
    q: 'What does "killo 3alee" mean in a restaurant context?',
    opts: [
      'It\'s all on me — I\'m paying for everyone',
      'Everything is included — it\'s a set menu',
      'Everything is delicious — a compliment',
      'I want everything — ordering all dishes'
    ],
    ans: 0,
    note: '"Killo 3alee" = all on me. Lebanese hospitality culture means there\'s often a fight over who pays. "Maa btidfa3!" (you\'re not paying!) is a common refrain.'
  },
  {
    q: 'Which phrase would you use to ask for the waiter\'s attention casually?',
    opts: [
      'yaa Saa7ib',
      'el 7saab min faDlak',
      '3aSiir leymoon bil-na3naa3',
      'ni2samaa'
    ],
    ans: 0,
    note: '"Yaa Saa7ib" (hey buddy/friend) is casual but friendly. "Law sama7t" is more polite. Waiters in Lebanon are often called "7abiibe" (my dear) or sometimes just by snapping fingers (less polite).'
  },
  {
    q: 'What is "3ara2" and why is it important at a Lebanese mezze?',
    opts: [
      'Arak — anise-flavored spirit, the national drink of Lebanon',
      'Araq — sparkling water served with every meal',
      'A type of bread eaten with hummus',
      'A fermented dairy drink like kefir'
    ],
    ans: 0,
    note: '"3ara2" (arak) is distilled grape spirit flavored with anise. Diluted with water and ice, it turns milky white. Essential at a proper Lebanese mezze. "Arak w mazze" is the classic combination.'
  },
  {
    q: 'What does "shu btanSa7ne fii" mean?',
    opts: [
      'What do you recommend?',
      'What time do you close?',
      'How much does this cost?',
      'Is this dish spicy?'
    ],
    ans: 0,
    note: '"Shu lli btanSa7ne fii" = what do you recommend? "BtanSa7ne" = advise me / recommend to me. Great phrase to use when you want the waiter\'s honest suggestion.'
  },
];

const ORD_TIPS = [
  {
    title: 'Lebanese dining pace',
    body: 'Lebanese meals are long affairs. Mezze comes slowly, conversation is the main event. Don\'t rush the waiter. "Khod wa2tak" (take your time) applies to guests too. Dinner can last 3+ hours and that\'s normal.'
  },
  {
    title: 'The bill fight',
    body: 'Paying the bill in Lebanon is a social performance. Expect a loud friendly fight over who pays. "Maa btidfa3!" (you\'re not paying!). Whoever invited usually pays, but guests should make a convincing effort to pay. Accept defeat gracefully: "ktir kareemi" (too generous).'
  },
  {
    title: '"Yislamm ideek" — the ultimate compliment',
    body: 'Saying "yislamm ideek" (God bless your hands) to the cook is deeply appreciated in Lebanese culture. It acknowledges not just the taste but the effort and care. At a home dinner, say it loudly so the host hears. Follow with "la2 wallah, akle min akle rabbak" for extra warmth.'
  },
  {
    title: 'Tipping culture',
    body: '"Ba2shiish" (tip) is expected in Lebanese restaurants, typically 10-15%. Some restaurants add a service charge automatically. With the economic crisis, tipping generously in fresh USD is greatly appreciated. Always ask "khidme manyuule?" (is service included?) before tipping.'
  },
  {
    title: 'Coffee culture',
    body: 'After a meal, Lebanese coffee (2ahwe 3arabiyye) is served in small cups with cardamom. Refusing is impolite. Shake the cup when done to signal no refill. "Nescafé" (instant coffee) is also widely offered. Lebanese also love their "espresso" but call it "byoot" in some regions.'
  },
];

const ORD_ABOUT = `
<p><strong>🍽️ Lebanese Restaurant Ordering</strong></p>
<p>Eating out in Lebanon is one of life's great pleasures. Whether it's a rooftop restaurant in Beirut, a mountain chalet, or a simple neighborhood <em>maTsam</em>, the Lebanese dining experience is warm, generous, and social.</p>
<p><strong>The mezze culture:</strong> Lebanese meals start with mezze (مزة) — a spread of shared small dishes. A proper mezze can have 20-40 plates. No one orders for themselves alone; everything is shared.</p>
<p><strong>Hospitality:</strong> Lebanese hospitality is legendary. Hosts will insist you eat more ("kol, kol!"), refuse to let you pay, and send food home with you. Knowing how to gracefully receive hospitality (and how to make a convincing show of trying to pay) is a real cultural skill.</p>
<p><strong>Practical tip:</strong> Most waiters in Beirut speak French and English, but trying even basic Lebanese phrases gets you enormous goodwill. Starting with "3endak wa2t?" and ending with "yislamm ideek" will make you a favorite customer.</p>
`;
