// R495 — Lebanese Coffee & Café Culture (prefix: cof)
const COF_WORDS = [
  // coffee types
  {ar:'قهوة عربية', tr:'2ahwe 3arabiyye', en:'Arabic coffee (cardamom-spiced)', cat:'types'},
  {ar:'قهوة فرنساوية', tr:'2ahwe fransawiyye', en:'French coffee / espresso', cat:'types'},
  {ar:'نسكافيه', tr:'nescafe', en:'instant coffee (generic term)', cat:'types'},
  {ar:'مظبوط', tr:'maDbuuT', en:'medium sweet (coffee order)', cat:'types'},
  {ar:'حلو', tr:'7ilo', en:'sweet (coffee with sugar)', cat:'types'},
  {ar:'سادة', tr:'saade', en:'plain / no sugar (coffee)', cat:'types'},
  {ar:'قهوة بحليب', tr:'2ahwe bi-7aliib', en:'coffee with milk', cat:'types'},
  {ar:'قهوة على التلج', tr:'2ahwe 3a l-talj', en:'iced coffee', cat:'types'},
  // café vocabulary
  {ar:'مقهى', tr:'ma2ha', en:'café / coffeehouse', cat:'cafe'},
  {ar:'فنجان', tr:'finjan', en:'small coffee cup (for Arabic/Turkish coffee)', cat:'cafe'},
  {ar:'قهوجي', tr:'2ahwaji', en:'café owner / barista (informal)', cat:'cafe'},
  {ar:'استريحة', tr:'istraa7a', en:'rest / break (coffee break)', cat:'cafe'},
  {ar:'حساب', tr:'7saab', en:'bill / check (at café)', cat:'cafe'},
  {ar:'طاولة', tr:'Taawle', en:'table', cat:'cafe'},
  {ar:'ترويقة', tr:'truwii2a', en:'breakfast (often taken at café)', cat:'cafe'},
  {ar:'نرجيلة', tr:'nargiile', en:'hookah / waterpipe (café staple)', cat:'cafe'},
  // phrases
  {ar:'تشرب شي', tr:'tishra sshi', en:'will you drink something? (hosting offer)', cat:'phrases'},
  {ar:'بكيفك', tr:'bi kifak', en:'as you like / however you prefer', cat:'phrases'},
  {ar:'على الريق', tr:'3al-rii2', en:'on an empty stomach (first coffee of morning)', cat:'phrases'},
  {ar:'قهوة وحكي', tr:'2ahwe w 7aki', en:'coffee and chat (the Lebanese ritual)', cat:'phrases'},
  {ar:'تكرم', tr:'tukram', en:'you honor me (accepting an offer graciously)', cat:'phrases'},
  {ar:'يعطيك العافية', tr:'ya3Tiik el 3aafye', en:'may God give you health (to someone working)', cat:'phrases'},
  {ar:'دفعة', tr:'daf3a', en:'round (I\'ll get this round of drinks)', cat:'phrases'},
  {ar:'على حساباتي', tr:'3a 7sabnaati', en:'it\'s on me / my treat', cat:'phrases'},
  // coffee culture
  {ar:'قراءة الفنجان', tr:'2ira2et el finjan', en:'coffee cup reading (fortune telling)', cat:'culture'},
  {ar:'تقيل', tr:'ta2iil', en:'thick / strong (coffee)', cat:'culture'},
  {ar:'ثقيل', tr:'ta2iil', en:'heavy / strong (coffee also)', cat:'culture'},
  {ar:'حبة هيل', tr:'7abbet haal', en:'cardamom pod (in Arabic coffee)', cat:'culture'},
  {ar:'قهوة الصبح', tr:'2ahwet el SubuH', en:'morning coffee (the sacred ritual)', cat:'culture'},
  {ar:'دور', tr:'door', en:'turn / round (whose turn to pay)', cat:'culture'},
  // compliments & responses
  {ar:'يسلم إيدك', tr:'yislam iidk', en:'may your hands be blessed (to coffee maker)', cat:'compliments'},
  {ar:'الله يعطيك العافية', tr:'alla ya3Tiik el 3aafye', en:'may God give you health (full form)', cat:'compliments'},
  {ar:'وصل الخير', tr:'wiSil el kheyr', en:'the good has arrived (when coffee/food arrives)', cat:'compliments'},
  {ar:'بتشرف', tr:'bitsharraf', en:'you do me honor (when guest accepts coffee)', cat:'compliments'},
  {ar:'ما منطيك', tr:'ma mniTiik', en:'we won\'t let you pay (refusing to let guest pay)', cat:'compliments'},
];

const COF_DRILLS = [
  {
    q: 'What does "maDbuuT" (مظبوط) mean when ordering Lebanese coffee?',
    opts: [
      'Medium sweet — the standard coffee sweetness level',
      'Very sweet — double sugar added',
      'No sugar — plain black coffee',
      'Iced — cold coffee with ice'
    ],
    ans: 0,
    note: '"MaDbuuT" (مظبوط) = medium sweet, literally "correct/just right." The three Lebanese coffee sweetness levels: "saade" (plain/no sugar), "maDbuuT" (medium sweet), "7ilo" (sweet). "MaDbuuT" is the most common order. If you don\'t specify, Lebanese hosts assume "maDbuuT." Over-sweetening is "7ilo ktir" — acceptable but slightly indulgent. The sweetness order happens at preparation, not after.'
  },
  {
    q: 'What is "2ira2et el finjan" (قراءة الفنجان) — a uniquely Lebanese practice?',
    opts: [
      'Coffee cup reading — telling fortunes from Turkish coffee grounds',
      'Counting cups — how many coffees were served at a gathering',
      'Ordering coffee — specifying how you want your coffee made',
      'Finishing coffee — a ritual of drinking the last drop'
    ],
    ans: 0,
    note: '"2ira2et el finjan" (قراءة الفنجان) = reading the coffee cup — fortune telling from Turkish coffee grounds. After drinking, the cup is turned upside down on the saucer, the grounds form patterns, and a skilled "reader" interprets them. A beloved Lebanese social ritual, practiced at family gatherings and in some cafés. "Shu shaayif bil finjan?" = what do you see in the cup? Even skeptics enjoy it as entertainment.'
  },
  {
    q: 'What does "2ahwe w 7aki" (قهوة وحكي) capture about Lebanese culture?',
    opts: [
      'Coffee and chat — the Lebanese ritual of socializing over coffee',
      'Coffee and work — drinking coffee while being productive',
      'Coffee and food — the breakfast combination',
      'Coffee and music — listening to music at a café'
    ],
    ans: 0,
    note: '"2ahwe w 7aki" (قهوة وحكي) = coffee and chat — probably the most Lebanese phrase in existence. An invitation to "2ahwe w 7aki" means: sit with me, take time, let\'s connect. It\'s never just about the coffee. Lebanese social life revolves around these sessions — at home, in cafés, on balconies. "T3aal n7ki" (come let\'s chat) over coffee is how relationships are built and maintained.'
  },
  {
    q: 'What is "saade" (سادة) in Lebanese coffee culture?',
    opts: [
      'Plain / no sugar — black coffee without sweetener',
      'Simple / basic — a cheap coffee option',
      'Alone — drinking coffee by yourself',
      'Traditional — old-style coffee preparation'
    ],
    ans: 0,
    note: '"Saade" (سادة) = plain/unsweetened. The three levels: "saade" (no sugar), "maDbuuT" (medium sweet), "7ilo" (sweet). Lebanese men in particular often drink "2ahwe 3arabiyye saade" (plain Arabic coffee) — no sugar, just cardamom. This is the coffee of Bedouin tradition, symbolizing austerity and dignity. Offering unsweetened coffee is also traditional at funerals and times of mourning.'
  },
  {
    q: 'What does "tishra sshi" (تشرب شي) mean and when do you hear it?',
    opts: [
      '"Will you drink something?" — the Lebanese hospitality opening phrase',
      '"Did you drink?" — checking if a guest has been served',
      '"Drink more!" — insisting a guest have another cup',
      '"What do you drink?" — asking for a specific preference'
    ],
    ans: 0,
    note: '"Tishra sshi" = will you drink something? (lit. "you drink something"). THE opening phrase of Lebanese hospitality. When a Lebanese person asks this, saying "la2" (no) is considered rude — you\'re rejecting their hospitality. Standard answer: "2ahwe, shu 3andak" (coffee, whatever you have). Female form: "tishrab sshi" → addressed to females. This phrase is so automatic it\'s almost a greeting.'
  },
  {
    q: 'What is "2ahwe 3arabiyye" and how is it different from "2ahwe fransawiyye"?',
    opts: [
      '3arabiyye = spiced cardamom coffee; fransawiyye = espresso-style French coffee',
      '3arabiyye = sweet thick coffee; fransawiyye = unsweetened black coffee',
      '3arabiyye = hot coffee; fransawiyye = cold coffee',
      '3arabiyye = homemade; fransawiyye = café coffee'
    ],
    ans: 0,
    note: '"2ahwe 3arabiyye" (قهوة عربية) = Arabic coffee — lightly brewed with cardamom (haal), golden-yellow, served in small cups without handles. Symbol of Arab hospitality. "2ahwe fransawiyye" (قهوة فرنساوية) = French coffee — espresso-style, strong, dark, closer to European café culture. Lebanon\'s French influence (mandate era) created a culture of both: you might have "2ahwe 3arabiyye" at home and "2ahwe fransawiyye" at Café Younes or Kababji.'
  },
  {
    q: 'What does "tukram" (تكرم) mean when someone offers you coffee?',
    opts: [
      '"You honor me" — a gracious acceptance of an offer',
      '"Thank you, but no" — a polite refusal',
      '"Please hurry" — asking for faster service',
      '"It\'s expensive" — commenting on the price'
    ],
    ans: 0,
    note: '"Tukram" (تكرم) = you honor me / you are generous (lit. "you are noble"). Said when accepting something offered — coffee, food, a seat, a gift. It acknowledges the host\'s generosity. Female/plural form: "tukramu." "Tukram w tsharraf" = you honor and dignify (me) — fuller form. Lebanese hospitality phrases are layered with this kind of elevated acknowledgment. Not formal — said casually between friends too.'
  },
  {
    q: 'What is "nargiile" (نرجيلة) and why is it a café staple in Lebanon?',
    opts: [
      'Hookah / waterpipe — the signature accompaniment to coffee in Lebanese cafés',
      'A type of sweet pastry — served with coffee',
      'A card game — played at cafés over coffee',
      'A music instrument — played during café evenings'
    ],
    ans: 0,
    note: '"Nargiile" (نرجيلة) = hookah/waterpipe. Lebanese café culture is incomplete without it. "2ahwe w nargiile" = the classic Lebanese café session. Apple flavor (tuffaa7) is most popular. A nargiile session can last 1-2 hours — you don\'t rush it. "Jiib nargiile" = bring me a hookah. Lebanese mountain cafés (Faraya, Bcharre, Ehden) are famous for nargiile in cool mountain air. It\'s social, not solitary.'
  },
  {
    q: 'What does "3al-rii2" (على الريق) mean in Lebanese coffee context?',
    opts: [
      'On an empty stomach — the first coffee before eating anything',
      'On credit — paying for coffee later',
      'On the way — taking coffee to go',
      'On the house — free coffee from the café owner'
    ],
    ans: 0,
    note: '"3al-rii2" (على الريق) = on an empty stomach. Morning coffee before food is sacred in Lebanese culture. "2ahwet el SubuH 3al-rii2" = morning coffee on an empty stomach — the ritual that starts the day. Some Lebanese believe the morning "2ahwe 3arabiyye" before eating anything is essential. "Ma shirbit 2ahwete" (I haven\'t had my coffee yet) is a valid excuse for any morning behavior.'
  },
  {
    q: 'What does "ya3Tiik el 3aafye" (يعطيك العافية) mean in Lebanese?',
    opts: [
      'May God give you health — said to someone who is working or serving you',
      'Enjoy your coffee — a toast before drinking',
      'Thank you for the coffee — said after finishing',
      'Welcome — said when someone arrives at the café'
    ],
    ans: 0,
    note: '"Ya3Tiik el 3aafye" (يعطيك العافية) = may God give you health/vitality. Said to someone who is working, serving, cooking, cleaning — any effort. Said to the barista, waiter, or whoever made your coffee. Response: "alla y3aafik" (may God give you health too) or "allah ysalmak" (may God keep you well). One of the most used phrases in Lebanese daily life — acknowledging anyone doing labor is a cultural obligation.'
  },
];

const COF_TIPS = [
  {
    title: 'Coffee as hospitality language',
    body: 'In Lebanese culture, offering coffee is an act of welcome and respect. Refusing coffee is refusing hospitality — not done without a good reason. When visiting a Lebanese home, expect coffee within minutes of arrival. The host\'s reputation is partly built on how quickly and generously they serve coffee. "2ahwe w 7aki" (coffee and chat) isn\'t just an activity — it\'s the framework of Lebanese social life.'
  },
  {
    title: 'The Arabic coffee ritual',
    body: '"2ahwe 3arabiyye" (Arabic coffee) has specific etiquette. It\'s served in small handle-less cups (finjan). You hold it with three fingers. Refills are automatic until you shake the cup to indicate you\'re done. Accepting 3+ refills is polite. The coffee is lightly brewed with cardamom (haal) — not strong like espresso. At Bedouin-influenced gatherings, refusing a third cup can be seen as abrupt.'
  },
  {
    title: 'Cup reading culture',
    body: '"2ira2et el finjan" (coffee cup reading) is a beloved social ritual. After drinking Turkish coffee, turn the cup upside-down on the saucer. Wait for grounds to dry, then interpret. Practiced by grandmothers, friends, and professional readers. Some Lebanese take it very seriously ("shu shaayif?" = what do you see?); most enjoy it socially. A good "reader" is a sought-after guest at gatherings.'
  },
  {
    title: 'The bill fight at cafés',
    body: 'Lebanese café bill-paying follows the same rules as restaurant bill-fighting: nobody lets the other person pay. "3a 7sabnaati" (it\'s on me), "la2 3a 7sabi" (no, it\'s mine), "ma mniTiik tdfa3" (we won\'t let you pay). Whoever pays for the first coffee owes nothing; whoever lets the other pay is socially obligated to pay next time. Tracking "door" (whose turn) is automatic and lifelong.'
  },
  {
    title: 'Lebanon\'s café culture',
    body: 'Lebanese cafés (especially in Beirut\'s Gemmayzeh, Mar Mikhael, Hamra, Achrafieh) are institutions. Café Younes (since 1935 in Hamra) is legendary. Lebanese café culture blends French espresso culture with Arab coffee tradition. Cafés are offices (Lebanese do business at café tables), therapy sessions (best conversations over coffee), and stages (to see and be seen). "Roo7 3al-ma2ha" = going to the café is a lifestyle, not just a drink.'
  },
];

const COF_ABOUT = `
<p><strong>☕ Lebanese Coffee & Café Culture</strong></p>
<p>Coffee is not a beverage in Lebanon — it's a social institution. From the first "2ahwe 3arabiyye" before breakfast to the last "2ahwe fransawiyye" at a Beirut café at midnight, coffee marks the rhythm of Lebanese life. Every meaningful conversation, every business deal, every reconciliation, every afternoon visit happens over coffee.</p>
<p><strong>Two coffee traditions:</strong> Lebanon holds both the Arab tradition (2ahwe 3arabiyye — cardamom coffee in small cups, associated with hospitality and Bedouin culture) and the French tradition (2ahwe fransawiyye — espresso, from the French mandate era). Both coexist: you might have Arabic coffee at home with your grandmother and French coffee at Café Younes with a friend.</p>
<p><strong>The sweetness vocabulary:</strong> When ordering Lebanese coffee, you must specify: "saade" (no sugar), "maDbuuT" (medium — literally "just right"), or "7ilo" (sweet). Getting someone's coffee preference right is a matter of paying attention and respect. Remembering that your friend takes "maDbuuT" is a small social act of care.</p>
<p><strong>Cup reading:</strong> "2ira2et el finjan" — reading coffee grounds in the upturned cup — is practiced semi-seriously across Lebanese society. Even skeptics turn their cups over at family gatherings. The grounds tell stories; the conversations around them are the point.</p>
`;
