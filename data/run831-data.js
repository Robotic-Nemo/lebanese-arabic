// R831 — NEW FEATURE: Lebanese Coffee & Café Culture (qhw)

const QHW_CATS = ['coffee','cafe','orders','expressions'];

const QHW_WORDS = [
  // coffee types & preparation
  { a: 'قهوة عربية', tr: 'qahwe 3arabiyye', en: 'Arabic coffee — cardamom-spiced Lebanese coffee, served in small cups', cat: 'coffee' },
  { a: 'قهوة حلو', tr: 'qahwe 7elo', en: 'sweet coffee — heavily sweetened, Lebanese default', cat: 'coffee' },
  { a: 'قهوة وسط', tr: 'qahwe wasat', en: 'medium-sweet coffee — ask for this if you want balance', cat: 'coffee' },
  { a: 'قهوة سادة', tr: 'qahwe saade', en: 'plain/unsweetened coffee — no sugar at all', cat: 'coffee' },
  { a: 'نسكافيه', tr: 'neskafe', en: 'Nescafé — instant coffee, very common in Lebanon', cat: 'coffee' },
  { a: 'اسبريسو', tr: 'espresso', en: 'espresso — the modern café staple in Beirut', cat: 'coffee' },
  { a: 'قهوة فرنسي', tr: 'qahwe faransi', en: 'French coffee — filter/drip coffee, old-school Lebanese cafés', cat: 'coffee' },
  { a: 'هيل', tr: '7aal', en: 'cardamom — the essential spice in Lebanese Arabic coffee', cat: 'coffee' },
  // café vocabulary
  { a: 'مقهى', tr: 'ma2ha', en: 'café / coffee shop — where Lebanese go for hours of conversation', cat: 'cafe' },
  { a: 'أركيلة', tr: 'argileh', en: 'argileh / hookah — standard café companion with coffee', cat: 'cafe' },
  { a: 'ورق شب', tr: 'wara2 shabb', en: 'playing cards — ubiquitous at Lebanese cafés, especially tawle', cat: 'cafe' },
  { a: 'تاولي', tr: 'tawle', en: 'backgammon — the Lebanese national café game', cat: 'cafe' },
  { a: 'حساب', tr: '7saab', en: 'bill / check — ask for it, they won\'t rush you', cat: 'cafe' },
  { a: 'زاوية', tr: 'zaawye', en: 'corner spot — preferred seat at Lebanese cafés', cat: 'cafe' },
  { a: 'المحل القديم', tr: 'il-ma7all il-2adim', en: 'the old place — neighborhood café regulars have been going for decades', cat: 'cafe' },
  // ordering expressions
  { a: 'شو بدك تشرب', tr: 'shu baddak tishrab', en: '"what do you want to drink?" — standard opening at any café', cat: 'orders' },
  { a: 'جيبلي قهوة', tr: 'jiibli qahwe', en: '"bring me a coffee" — direct Lebanese order, no "please" needed', cat: 'orders' },
  { a: 'عالريحة', tr: '3al-ree7a', en: '"according to your mood" — tell the waiter to decide the sweetness level', cat: 'orders' },
  { a: 'كاس ميّ', tr: 'kaas mayy', en: 'glass of water — always served with Arabic coffee in Lebanon', cat: 'orders' },
  { a: 'بدي أشرب شي ساخن', tr: 'biddi ishrab shi saakhin', en: '"I want something hot" — standard café request in winter', cat: 'orders' },
  { a: 'مين بدفع', tr: 'miin biddaffa3', en: '"who\'s paying?" — rhetorical, the host always insists on paying', cat: 'orders' },
  { a: 'على حسابي', tr: '3ala 7saabi', en: '"it\'s on me" — Lebanese insistence to pay for everyone', cat: 'orders' },
  // coffee culture expressions
  { a: 'نقرة قهوة', tr: 'na2ret qahwe', en: 'a coffee gathering — the social unit of Lebanese daily life', cat: 'expressions' },
  { a: 'على قهوة', tr: '3ala qahwe', en: '"over coffee" — how Lebanese say "let\'s meet and talk"', cat: 'expressions' },
  { a: 'قرأ الفنجان', tr: '2ara il-finjaane', en: 'reading the coffee cup — traditional fortune-telling from grounds', cat: 'expressions' },
  { a: 'فنجان', tr: 'finjaan', en: 'small coffee cup — the demitasse used for Arabic coffee', cat: 'expressions' },
  { a: 'دايماً هون', tr: 'dayman hon', en: '"always here" — said by café regulars who have a permanent spot', cat: 'expressions' },
  { a: 'جلسة', tr: 'jelse', en: 'a sit-down session — Lebanese coffee jlese can last 3+ hours', cat: 'expressions' }
];

const QHW_DRILLS = [
  { q: 'What is "qahwe 3arabiyye"?', opts: ['French press coffee','Arabic coffee — cardamom-spiced, served in small cups','espresso','instant coffee'], ans: 1, exp: '"Qahwe 3arabiyye" (قهوة عربية) is Lebanese/Arabic coffee — lightly roasted beans with ground cardamom (7aal), boiled in a small pot (dalla) and poured into tiny cups (finjaan). It\'s always served with a glass of water. The cardamom level defines the house style of each family.' },
  { q: '"Qahwe 7elo" means...', opts: ['hot coffee','sweet coffee — heavily sugared','black coffee','coffee with milk'], ans: 1, exp: '"Qahwe 7elo" (قهوة حلو) = sweet coffee — in Lebanon, coffee comes sweetened unless you specify otherwise. "7elo" means sweet/beautiful. Ordering without specifying gets you the default sweet level of wherever you are — always ask for your preference.' },
  { q: 'What is "argileh" at a Lebanese café?', opts: ['a card game','a type of coffee','hookah / waterpipe — standard café companion','a dessert'], ans: 2, exp: '"Argileh" (أركيلة) is hookah/waterpipe — inseparable from the Lebanese café experience. It\'s ordered alongside coffee, and a café session often means sitting for 2-3 hours with coffee + argileh + cards or backgammon.' },
  { q: '"Tawle" at a Lebanese café refers to...', opts: ['a coffee table','backgammon — the national café game','playing cards','a big group table'], ans: 1, exp: '"Tawle" (تاولي) = backgammon — Lebanon\'s most-played café game. The clicking of backgammon tiles is the background music of any traditional Lebanese coffee shop. Regulars have their own sets and their own spot.' },
  { q: 'What does "3al-ree7a" mean when ordering coffee?', opts: ['make it strong','make it iced','"according to your mood" — let the waiter decide sweetness','make it large'], ans: 2, exp: '"3al-ree7a" (عالريحة) = "on the scent / as you feel" — telling the waiter to use their judgment on the sweetness level. It\'s a trust gesture, common with regulars who know the waiter will get it right.' },
  { q: 'What comes automatically with Arabic coffee in Lebanon?', opts: ['milk','a date or sweet','a glass of water — always served alongside','bread'], ans: 2, exp: '"Kaas mayy" (كاس ميّ) = glass of water — always served with Arabic coffee in Lebanon. It\'s a hospitality must. Drinking water before the coffee to "prepare the palate" is traditional.' },
  { q: '"2ara il-finjaane" means...', opts: ['ordering another coffee','reading the coffee cup for fortune-telling','finishing the cup quickly','paying the bill'], ans: 1, exp: '"2ara il-finjaane" (قرأ الفنجان) = reading the coffee cup — a Lebanese tradition where the grounds left in the cup are read for fortune-telling. After drinking Arabic coffee, you flip the cup onto the saucer, wait, then someone "reads" the patterns. Common at women\'s gatherings.' },
  { q: '"3ala 7saabi" at the café means...', opts: ['"put it on my tab"','"it\'s on me" — Lebanese insistence to pay for everyone','split it equally','charge me later'], ans: 1, exp: '"3ala 7saabi" (على حسابي) = it\'s on me / on my account — the phrase Lebanese use when insisting to pay for the whole group. Refusing payment from others is expected on the first try. The host will always fight to pay.' },
  { q: 'What is a "jelse" in Lebanese café culture?', opts: ['a single coffee cup','a corner seat','a sit-down session — can last 3+ hours','the daily special'], ans: 2, exp: '"Jelse" (جلسة) = a sitting/session — in Lebanon, going for coffee means a full social gathering that can stretch for hours. A jelse isn\'t just a quick coffee — it\'s conversation, cards, argileh, and another round of coffee.' },
  { q: '"Shu baddak tishrab" is...', opts: ['"are you thirsty?"','"what do you want to drink?" — standard café greeting','ordering water','asking someone to leave'], ans: 1, exp: '"Shu baddak tishrab" (شو بدك تشرب) = what do you want to drink? — the opening line from any waiter or host when you sit down. In Lebanese culture, you will never sit somewhere without immediately being offered a drink.' },
  { q: 'What is "neskafe" in Lebanon?', opts: ['a Lebanese coffee brand','Italian coffee','instant coffee — very common throughout Lebanon','cold brew'], ans: 2, exp: '"Neskafe" is Nescafé/instant coffee — despite the abundance of espresso cafés in Beirut, instant coffee remains extremely common in homes and traditional shops. Asking for "neskafe" anywhere in Lebanon will get you instant coffee, no questions asked.' },
  { q: '"Na2ret qahwe" refers to...', opts: ['one cup of coffee','a coffee gathering — the core social unit of Lebanese daily life','a coffee stain','the coffee price'], ans: 1, exp: '"Na2ret qahwe" (نقرة قهوة) = a coffee gathering — this phrase captures how Lebanese society runs. Business deals, family matters, neighbourhood disputes — everything is handled "3ala qahwe" (over coffee). It\'s the Lebanese meeting format.' },
  { q: 'What does "qahwe wasat" mean?', opts: ['large coffee','cold coffee','medium-sweet coffee — balanced sugar level','half coffee half milk'], ans: 2, exp: '"Qahwe wasat" (قهوة وسط) = medium/middle coffee — not too sweet, not bitter. When ordering Arabic coffee, you specify: 7elo (sweet), wasat (medium), or saade (plain). "Wasat" is the balanced Lebanese default for those who want both flavor and sugar.' },
  { q: 'What is "7aal" in Lebanese coffee?', opts: ['the coffee grind','cardamom — the essential spice in Arabic coffee','the coffee pot','the sugar amount'], ans: 1, exp: '"7aal" (هيل) = cardamom — the spice that defines Arabic coffee. Ground cardamom is mixed with the coffee, giving it the signature warm, aromatic flavor. The amount of 7aal varies by family: some use a lot (strong floral), some a little.' },
  { q: '"Dayman hon" said by a café regular means...', opts: ['"the food is always fresh"','"always here" — marking permanent regular status','the café is always open','"I\'ll always be back"'], ans: 1, exp: '"Dayman hon" (دايماً هون) = always here — said by Lebanese café regulars who\'ve been coming to the same spot for years or decades. In Lebanese neighborhood life, your regular café is a second home. The waiter knows your order before you speak.' }
];

const QHW_TIPS = [
  'Lebanese coffee culture is inseparable from time. A "na2ret qahwe" (coffee gathering) is not a quick stop — it\'s a 2-3 hour social commitment. Showing up to a Lebanese café and leaving in 20 minutes is considered rude. The café is where you settle into conversation, play tawle, and have a second or third coffee.',
  'Arabic coffee sweetness has three official levels: "7elo" (sweet), "wasat" (medium), "saade" (plain). Always specify. The default — if you say nothing — varies by household and region. In traditional South Lebanese homes, coffee is usually heavy on cardamom (7aal) and lighter on sugar. In Beirut cafés, it depends.',
  '"Qraa\' il-finjaane" (reading the coffee cup) is a real social ritual, especially among older Lebanese women. After drinking Arabic coffee, you flip the cup, let the grounds dry, and someone reads the patterns for fortune. It\'s not taken with complete seriousness but is treated as meaningful conversation and entertainment.',
  'The argileh is as much part of Lebanese café culture as the coffee itself. A proper café session involves: Arabic coffee + argileh (usually apple flavor, "tuffaa7") + tawle or cards + conversation. Ordering just coffee without argileh at a traditional café marks you as someone passing through, not a regular.',
  'Lebanese café payment politics are fierce. "3ala 7saabi" (it\'s on me) is said by everyone, and a real fight over the bill is expected. The protocol: host insists, guests resist twice, then accept. Splitting the bill is considered somewhat un-Lebanese in traditional settings — someone always pays for the group.',
  'The finjaan (small coffee cup) is refilled silently in Lebanese hospitality. When your cup is empty, the host refills without asking. To signal you\'ve had enough, give your cup a slight side-to-side shake (not nodding). This gesture — 7arrak il-finjaan — is the universal Lebanese "no more coffee, thank you."'
];
