// Run #354 — Lebanese Coffee & Café Culture Coach (cfe)
// 40 words across 5 categories: coffee-types / café-vocab / coffee-making / café-culture / phrases
// 10 MCQ drills, 5 tips, about text

const CFE_WORDS = [
  // coffee types
  { tr: 'ahwe', ar: 'قهوة', en: 'coffee', cat: 'coffee-types' },
  { tr: 'ahwe 3arabiyye', ar: 'قهوة عربية', en: 'Lebanese/Arabic coffee — cardamom-spiced', cat: 'coffee-types' },
  { tr: 'neskafe', ar: 'نسكافيه', en: 'instant coffee — Nescafé used as generic term', cat: 'coffee-types' },
  { tr: 'ahwe maZbuuTa', ar: 'قهوة مضبوطة', en: 'medium-sweet Turkish coffee — the standard Lebanese order', cat: 'coffee-types' },
  { tr: 'ahwe 7ilwe', ar: 'قهوة حلوة', en: 'sweet coffee', cat: 'coffee-types' },
  { tr: 'ahwe murra', ar: 'قهوة مرّة', en: 'bitter / unsweetened coffee', cat: 'coffee-types' },
  { tr: 'frap', ar: 'فراب', en: 'iced blended coffee — ubiquitous at Lebanese cafés', cat: 'coffee-types' },
  { tr: 'ahwe bHaliib', ar: 'قهوة بحليب', en: 'white coffee / coffee with milk', cat: 'coffee-types' },
  // café vocab
  { tr: 'maqha', ar: 'مقهى', en: 'café / coffee house', cat: 'café-vocab' },
  { tr: 'argile', ar: 'أرجيلة', en: 'hookah / water pipe — central to Lebanese café culture', cat: 'café-vocab' },
  { tr: 'finjaan', ar: 'فنجان', en: 'small coffee cup — for Arabic or Turkish coffee', cat: 'café-vocab' },
  { tr: 'rakwe', ar: 'ركوة', en: 'long-handled coffee pot — for making Turkish coffee', cat: 'café-vocab' },
  { tr: 'taraaS', ar: 'تراس', en: 'terrace / outdoor seating (borrowed from French)', cat: 'café-vocab' },
  { tr: 'naddeel', ar: 'ندّيل', en: 'waiter (Lebanese colloquial term)', cat: 'café-vocab' },
  { tr: 'Hsaab', ar: 'حساب', en: 'the bill / check', cat: 'café-vocab' },
  { tr: '7ail', ar: 'هيل', en: 'cardamom — the spice that flavors Arabic coffee', cat: 'café-vocab' },
  // coffee-making
  { tr: 'm7ammaS', ar: 'محمّص', en: 'roasted — freshly roasted coffee beans', cat: 'coffee-making' },
  { tr: 'maT7uun', ar: 'مطحون', en: 'ground — freshly ground coffee', cat: 'coffee-making' },
  { tr: 'ghala', ar: 'غلى', en: 'to boil — the coffee is boiling / ready', cat: 'coffee-making' },
  { tr: '3aTir', ar: 'عطر', en: 'fragrant / aromatic — describing good coffee smell', cat: 'coffee-making' },
  { tr: '2awwa', ar: 'قوي', en: 'strong — requesting strong coffee', cat: 'coffee-making' },
  { tr: 'khfiif', ar: 'خفيف', en: 'light / weak — requesting lighter coffee', cat: 'coffee-making' },
  { tr: 'sukkur', ar: 'سكّر', en: 'sugar', cat: 'coffee-making' },
  { tr: 'khashe', ar: 'خشّة', en: 'coffee grounds — left in cup for fortune-telling', cat: 'coffee-making' },
  // café culture
  { tr: '2ira2et finjaan', ar: 'قراءة الفنجان', en: 'coffee cup reading — fortune-telling from grounds', cat: 'café-culture' },
  { tr: 'sahra', ar: 'سهرة', en: 'evening gathering / late-night café outing', cat: 'café-culture' },
  { tr: 'Haake', ar: 'حكي', en: 'chat / conversation / gossip — Lebanese café staple', cat: 'café-culture' },
  { tr: 'yiTawwilu', ar: 'يطوّلوا', en: 'they linger / stay a long time at a café', cat: 'café-culture' },
  { tr: 'argilet teffe7a', ar: 'أرجيلة تفاحة', en: 'apple-flavor hookah — Lebanon\'s most popular', cat: 'café-culture' },
  { tr: '3al-taraaS', ar: 'عالتراس', en: 'on the terrace — sitting outside', cat: 'café-culture' },
  { tr: 'beiT il-leil', ar: 'بيت الليل', en: 'the night house — late-night café / all-night spot', cat: 'café-culture' },
  { tr: '2issa', ar: 'قصّة', en: 'a story — the "qissa" / gossip shared over coffee', cat: 'café-culture' },
  // phrases
  { tr: 'yalla nsharrab ahwe', ar: 'يلا نشرب قهوة', en: 'let\'s have coffee — the classic Lebanese social invite', cat: 'phrases' },
  { tr: '3azzamtak 3a ahwe', ar: 'عزمتك عقهوة', en: 'I\'m treating you to coffee — my invitation', cat: 'phrases' },
  { tr: '3a rasna', ar: 'عارسنا', en: 'with pleasure — accepting coffee/hospitality', cat: 'phrases' },
  { tr: 'tislam ideik', ar: 'تسلم إيديك', en: 'may your hands be blessed — after a good cup', cat: 'phrases' },
  { tr: 'shu btishrab', ar: 'شو بتشرب', en: 'what will you have? — ordering at a café', cat: 'phrases' },
  { tr: 'wein nsharrab', ar: 'وين نشرب', en: 'where shall we have coffee? — planning a café meet', cat: 'phrases' },
  { tr: 'ija il-Hsaab', ar: 'إجا الحساب', en: 'the bill came — time to pay', cat: 'phrases' },
  { tr: '3a l-Hsaab miin', ar: 'عالحساب مين', en: 'whose bill is it? / who\'s paying?', cat: 'phrases' },
];

const CFE_DRILLS = [
  {
    q: 'What does "ahwe maZbuuTa" (قهوة مضبوطة) mean and why is it the standard Lebanese order?',
    opts: ['Black coffee, no sugar', 'Medium-sweet Turkish coffee — the default order at Lebanese cafés, balanced between sweet and bitter', 'Very sweet coffee', 'Coffee with milk'],
    correct: 1,
    note: '"AhwemaZbuuTa" (قهوة مضبوطة) = medium/just-right coffee — "maZbuuT" means "accurate/calibrated." It\'s the default Turkish coffee order in Lebanon: neither too sweet nor bitter. The ordering spectrum: "murra" (no sugar) → "3ala-r-reef" (very light sugar) → "maZbuuTa" (medium) → "wasTa" (medium-sweet) → "7ilwe" (sweet) → "ziyadeh" (extra sweet). Knowing these levels lets you order like a Lebanese. "3tiini ahwe maZbuuTa!" = give me a medium-sweet coffee!'
  },
  {
    q: 'What is the "argile" (أرجيلة) and how central is it to Lebanese café culture?',
    opts: ['A type of coffee bean', 'The hookah / water pipe — as essential as coffee at Lebanese cafés, a social ritual', 'A café chair style', 'A coffee measuring cup'],
    correct: 1,
    note: '"argile" (أرجيلة) = hookah/water pipe. At a Lebanese café, ordering argile is as automatic as ordering coffee. The most popular flavor: "te2faaHa" (apple). The ritual: ordering, the coals being placed, the slow draw, the conversation it facilitates. Lebanese cafés without argile barely exist. "3tiini argile te2faaHa w ahwe maZbuuTa" = the quintessential Lebanese café order. Even non-smokers often smoke argile socially at cafés.'
  },
  {
    q: 'What is "2ira2et finjaan" (قراءة الفنجان)?',
    opts: ['Reading the café menu', 'Coffee cup reading — fortune-telling from the grounds left after drinking Turkish coffee', 'Rating the quality of coffee', 'Reading while drinking coffee'],
    correct: 1,
    note: '"2ira2et finjaan" (قراءة الفنجان) = reading the cup — fortune-telling from Turkish coffee grounds. After drinking, you flip the cup, wait for grounds to dry, then a "2aarye" (reader) interprets the patterns. Widely practiced across Lebanese households and cafés — not just as fun but as a genuine cultural ritual. Phrases: "flibbii il-finjaan" = flip the cup. "Shu shayfe?" = what do you see? Even non-believers often find it irresistible.'
  },
  {
    q: 'What is "7ail" (هيل) and why is it essential in Lebanese coffee?',
    opts: ['A type of Lebanese coffee roast', 'Cardamom — the spice that flavors Arabic coffee and is central to its distinctive taste', 'The name for dark roast coffee', 'A coffee brand'],
    correct: 1,
    note: '"7ail" (هيل) = cardamom. The defining spice of Lebanese/Arabic coffee. "Ahwe 3arabiyye" (Arabic coffee) is made by boiling ground coffee with whole cardamom pods — the result is lighter, more aromatic, and less caffeinated than Turkish coffee. Served in small cups without handles, often with dates. "Finjaan 7ail" = a cup of cardamom coffee. Lebanese families often have the rakwe (coffee pot) simmering with 7ail as a permanent household scent.'
  },
  {
    q: 'What does "yiTawwilu" (يطوّلوا) describe about Lebanese café culture?',
    opts: ['They drink coffee quickly', 'They linger / stay a very long time — Lebanese café visits are events, not pit stops', 'They order many coffees', 'They talk loudly'],
    correct: 1,
    note: '"YiTawwilu" (يطوّلوا) = they stay long / they linger (from "Tawwil" = to lengthen/extend). The Lebanese café visit is not a quick stop — it\'s a 2-3 hour minimum event. One coffee, one argile, and conversation ("Haake") can last an entire afternoon. The taraaS (terrace) is where much of Lebanese social life happens. "Saarlon talaata sa3aat 3al-maqha" = they\'ve been at the café three hours. This is entirely normal and expected.'
  },
  {
    q: 'What does "3azzamtak 3a ahwe" (عزمتك عقهوة) mean?',
    opts: ['Can you buy me coffee?', 'I\'m inviting you for coffee — my treat, a gesture of hospitality and friendship', 'Do you like coffee?', 'Coffee is ready'],
    correct: 1,
    note: '"3azzamtak 3a ahwe" (عزمتك عقهوة) = I\'m treating you to coffee — from "3azama" (to invite formally). This is a culturally significant gesture in Lebanon. When someone "3azzamak" on coffee, refusing can feel rude. Response: "3a rasna" (with pleasure) or "la, 3azzamtaak inta" (no, let me treat you). The resulting back-and-forth argument over who pays the bill is a Lebanese social ritual. Eventually someone grabs the Hsaab when the other isn\'t looking.'
  },
  {
    q: 'What is the "rakwe" (ركوة) and how is it used?',
    opts: ['A café menu', 'The traditional long-handled coffee pot used to brew Turkish/Arabic coffee on a flame', 'A coffee cup size', 'A coffee filter'],
    correct: 1,
    note: '"Rakwe" (ركوة) = the long-handled brass or copper pot used to make Turkish coffee. The coffee and water (and sugar) go in together, heated until it rises ("ghala" = it boiled). The ritual: heat slowly, watch it rise, remove before it boils over. "Ija l-2awwal" = first rise. Allow to rise 1-3 times for stronger coffee. The rakwe on the stove is a permanent fixture in Lebanese households. "Shu, bidak ahwe? Iftahi r-rakwe" = want coffee? Put the rakwe on.'
  },
  {
    q: 'What does "khashe" (خشّة) refer to in Lebanese coffee culture?',
    opts: ['A coffee filter', 'The coffee grounds at the bottom of the cup — used for fortune-telling in "2ira2et finjaan"', 'A type of dark roast', 'A bitter aftertaste'],
    correct: 1,
    note: '"Khashe" (خشّة) = coffee grounds, the thick sediment at the bottom of a Turkish coffee cup. Do NOT drink the khashe — stop before you reach it. After finishing, flip the cup upside down on the saucer and wait 10 minutes for the grounds to create patterns on the inside. This is the basis of "2ira2et finjaan" (cup reading). "La tishrab il-khashe" = don\'t drink the grounds. The khashe patterns are interpreted as symbols of future events.'
  },
  {
    q: 'What does "sahra" (سهرة) mean in Lebanese social life?',
    opts: ['Morning coffee ritual', 'An evening gathering / late-night outing — central to Lebanese social life', 'A type of sweet coffee', 'Staying awake studying'],
    correct: 1,
    note: '"Sahra" (سهرة) = evening out / late-night gathering (from "sahira" = to stay awake). Lebanese people are famous for late nights — "sahra" at a café, at someone\'s house, or at a restaurant can start at 9pm and end at 3am. "Mnimsharrab sahra?" = shall we go out tonight? "Sahra 3a l-maqha" = a café evening. Lebanese cafés in Gemmayzeh, Hamra, Badaro thrive until dawn. "Ma bitSiir sahra bala ahwe" = no evening gathering is complete without coffee.'
  },
  {
    q: 'What is the Lebanese term "naddeel" (ندّيل)?',
    opts: ['A coffee bean quality grade', 'The waiter — the colloquial Lebanese term for a café/restaurant server', 'A small coffee napkin', 'The café owner'],
    correct: 1,
    note: '"Naddeel" (ندّيل) = waiter (colloquial Lebanese). From "naDal" (to carry/serve). The formal Arabic is "naadir" or "garson" (from French "garçon"). At a Lebanese café, you call: "ya naddeel!" to summon the waiter. Cafés are also a workplace for young Lebanese who need income. The naddeel memorizes dozens of complex orders — "thlaate ahwe, wahad maZbuuTa, tneyn 7ilwe" — and delivers without writing anything down. A mark of Lebanese café professionalism.'
  },
];

const CFE_TIPS = [
  {
    title: 'The Lebanese Coffee Order: A Guide',
    body: 'Ordering coffee in Lebanon requires knowing the sugar spectrum: "murra" (no sugar), "3ala-r-reef" (barely sweet), "wasTa" (between nothing and medium), "maZbuuTa" (medium — the default), "wasTa u ziyadeh" (medium-plus), "7ilwe" (sweet), "ziyadeh" (extra sweet). "AhwemaZbuuTa" is the safe default. There are also two main types: "ahwe 3arabiyye" (lighter, cardamom-spiced, no caffeine punch) and "ahwe turki" (Turkish coffee, stronger, darker). The "frap" (iced blend) is the modern café staple. "Neskafe" (instant) is ordered at home or simple spots.'
  },
  {
    title: 'The argile Ritual',
    body: '"argile" (أرجيلة) — also called "nargile" or "shisha" — is the water pipe smoked at Lebanese cafés. The dominant flavor is "te2faaHa" (apple), followed by mint, grape, and rose. The ritual: order, wait for coals to heat up, the first draw signals the start of real conversation. Lebanese consider smoking argile a social activity distinct from cigarette smoking — it\'s about taking your time. Sharing an argile = extended conversation. "Bitkhabaali?" = will you pass it? is heard constantly. The argile coal boy is an unofficial café employee.'
  },
  {
    title: 'Coffee Cup Reading: Qira2et il-Finjaan',
    body: '"2ira2et finjaan" (قراءة الفنجان) = reading the cup. After finishing Turkish coffee, the drinker flips the cup on the saucer, waits for grounds to dry, then a reader ("2aarye") interprets the patterns. Shapes are identified: a bird means good news coming, a snake means a betrayal, a horse means a journey. This tradition is practiced across all Lebanese communities regardless of religion. Popular at family gatherings and women\'s coffee mornings. Songs and films reference it. "Flibbii ib-finjaanak" = flip your cup — an invitation to have your fortune read.'
  },
  {
    title: 'The Lebanese Café: A Social Institution',
    body: 'The Lebanese "maqha" (café) is not a coffee stop — it\'s a social institution. Beirut neighborhoods like Hamra, Gemmayzeh, Mar Mikhael, and Gemmayze have café strips where Lebanese spend entire afternoons and evenings. The combination of coffee + argile + Haake (conversation) + taraaS (terrace seating) defines the experience. Lebanese cafés stay open until 1-3am regularly. During the economic crisis (2019-present), cafés became even more important as social refuges. Saying "yalla 3a l-maqha" = let\'s go to the café is one of the most common social invitations.'
  },
  {
    title: 'Coffee Hospitality: Offering and Refusing',
    body: 'Offering coffee in Lebanese culture is a hospitality ritual. When you visit someone: coffee appears automatically — refusing it is slightly rude. "Ahwetek faDDal" = here is your coffee, please. Saying "la, shukran" (no thank you) to the first offer is polite but the host will insist. Accept on the second offer. "3azzamtak 3a ahwe" = I\'m treating you — this signals warmth and care. When the Hsaab (bill) comes, Lebanese compete to pay — grabbing it discreetly is a skill. "Ija l-Hsaab" = the bill came. "3ala Hsaabi" = it\'s on me.'
  },
];

const CFE_ABOUT = 'Coffee in Lebanon is not a drink — it\'s a civilization. The Lebanese café (maqha) with its terrace seating, hookah smoke, Turkish coffee in small cups, and conversations that last for hours is one of the great cultural spaces of the Mediterranean world. Whether it\'s "ahwe 3arabiyye" flavored with 7ail (cardamom) served in a rakwe at home, "ahwe maZbuuTa" at a neighborhood café with an argile, or a frap at a modern Beirut coffee shop, the rituals of Lebanese coffee culture — who pays, how sweet you take it, whether you stay for the "2ira2et finjaan" fortune-telling — reveal everything about Lebanese identity and hospitality.';
