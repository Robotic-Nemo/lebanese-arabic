// Run #411 — Lebanese Coffee & Café Culture Coach (ahw)
// Categories: coffee-types | rituals | cafe-vocab | order | social

const AHW_WORDS = [
  // coffee-types
  { ar: 'قهوة', tr: '2ahwe', en: 'coffee (Lebanese: ahwe — the center of social life)', cat: 'coffee-types' },
  { ar: 'قهوة عربية', tr: '2ahwe 3arabiyye', en: 'Arabic coffee (cardamom-spiced, unsweetened — served in small cups)', cat: 'coffee-types' },
  { ar: 'قهوة تركية', tr: '2ahwe turkiyye', en: 'Turkish coffee (boiled, unfiltered, with grounds)', cat: 'coffee-types' },
  { ar: 'نسكافيه', tr: 'nescafe', en: 'Nescafé (instant coffee — surprisingly popular in Lebanon)', cat: 'coffee-types' },
  { ar: 'اسبريسو', tr: '2espresso', en: 'espresso (Lebanese café staple)', cat: 'coffee-types' },
  { ar: 'أمريكانو', tr: '2americaano', en: 'americano (popular in Beirut specialty cafés)', cat: 'coffee-types' },
  { ar: 'قهوة بالحليب', tr: '2ahwe bil-7aliib', en: 'coffee with milk (café au lait style)', cat: 'coffee-types' },
  { ar: 'قهوة مضبوطة', tr: '2ahwe maDbuuTa', en: 'medium-sweet coffee (perfect balance — the Lebanese default)', cat: 'coffee-types' },
  // rituals
  { ar: 'فنجان', tr: 'finjaan', en: 'coffee cup (small cup for Arabic/Turkish coffee)', cat: 'rituals' },
  { ar: 'الغيبة بالقهوة', tr: 'il-ghiibe bil-2ahwe', en: 'gossip over coffee (Lebanese national pastime)', cat: 'rituals' },
  { ar: 'قراءة الفنجان', tr: '2raayet il-finjaan', en: 'cup reading / fortune telling from coffee grounds', cat: 'rituals' },
  { ar: 'فنجان الصباح', tr: 'finjaan iS-Saba7', en: 'morning coffee (sacred first cup of the day)', cat: 'rituals' },
  { ar: 'ضيافة', tr: 'Diyaafe', en: 'hospitality / offering coffee to guests (obligatory)', cat: 'rituals' },
  { ar: 'هيل', tr: 'haal', en: 'cardamom (the spice in Arabic coffee)', cat: 'rituals' },
  { ar: 'دلة', tr: 'dalla', en: 'dallah (traditional brass coffee pot)', cat: 'rituals' },
  { ar: 'تثليت', tr: 'tatliit', en: 'making 3 rounds of coffee (traditional hosting ritual)', cat: 'rituals' },
  // cafe-vocab
  { ar: 'كافيه', tr: 'kaafe', en: 'café (coffee shop — Beirut has hundreds)', cat: 'cafe-vocab' },
  { ar: 'كابيتول', tr: 'kaapitool', en: 'Capitol (iconic Beirut café — historic meeting spot)', cat: 'cafe-vocab' },
  { ar: 'تراس', tr: 'traas', en: 'terrace / outdoor seating (Lebanese café culture is very outdoor)', cat: 'cafe-vocab' },
  { ar: 'نرجيلة', tr: 'nargiile', en: 'narghile / hookah (often accompanies coffee in cafés)', cat: 'cafe-vocab' },
  { ar: 'كرسي', tr: 'kursi', en: 'chair (Lebanese cafés are sitting culture — you stay for hours)', cat: 'cafe-vocab' },
  { ar: 'رزنامة', tr: 'rezmane', en: 'newspaper (reading it over morning coffee — old Beirut habit)', cat: 'cafe-vocab' },
  { ar: 'حجز طاولة', tr: '7ijiz Taawle', en: 'reserve a table (popular Beirut cafés require reservations)', cat: 'cafe-vocab' },
  { ar: 'واي فاي', tr: 'waay faay', en: 'WiFi (Lebanese ask for it immediately upon sitting)', cat: 'cafe-vocab' },
  // order
  { ar: 'بدي قهوة', tr: 'baddi 2ahwe', en: 'I want a coffee (ordering)', cat: 'order' },
  { ar: 'حلو', tr: '7ilu', en: 'sweet (coffee sweetness level)', cat: 'order' },
  { ar: 'مر', tr: 'murr', en: 'bitter / unsweetened (coffee without sugar)', cat: 'order' },
  { ar: 'بالسكر', tr: 'bis-sukkar', en: 'with sugar', cat: 'order' },
  { ar: 'الحساب', tr: 'il-7isaab', en: 'the bill / check please', cat: 'order' },
  { ar: 'زيادة', tr: 'ziyaade', en: 'extra / again (another cup please)', cat: 'order' },
  { ar: 'بارد أو ساخن', tr: 'baarid aw saakhin', en: 'cold or hot (iced coffee vs hot)', cat: 'order' },
  { ar: 'تيك أواي', tr: 'teek 2away', en: 'takeaway / to go (Lebanese use English loanword)', cat: 'order' },
  // social
  { ar: 'نتقهوى', tr: 'nit2ahwaa', en: 'let\'s have coffee (Lebanese social invitation)', cat: 'social' },
  { ar: 'على القهوة', tr: '3al-2ahwe', en: 'over coffee (discussing something over coffee)', cat: 'social' },
  { ar: 'قهوتك تصبر', tr: '2ahwtak tiSbar', en: 'your coffee waits (said when someone is late)', cat: 'social' },
  { ar: 'سهرة', tr: 'sahra', en: 'evening gathering (coffee + conversation + maybe cards)', cat: 'social' },
  { ar: 'جلسة', tr: 'jalse', en: 'a sitting / a gathering (informal coffee meetup)', cat: 'social' },
  { ar: 'بالهنا والشفا', tr: 'bil-hana w sh-shafa', en: 'enjoy (said when someone drinks/eats — response: yis3id 2albak)', cat: 'social' },
  { ar: 'يسعد قلبك', tr: 'yis3id 2albak', en: 'may your heart be happy (reply to bil-hana w sh-shafa)', cat: 'social' },
  { ar: 'دايماً عامر', tr: 'dayman 3aamir', en: 'may it always be full (toast/wish said of a house or cup)', cat: 'social' },
];

const AHW_DRILLS = [
  {
    q: 'What is "2ahwe" and why is it central to Lebanese culture?',
    opts: ['2ahwe (coffee)', '2espresso (espresso)', 'nescafe (instant)', '2ahwe turkiyye (Turkish)'],
    correct: 0,
    note: '"2ahwe" (قهوة) — coffee, the Lebanese word for both the drink and the social act. Lebanon runs on coffee. Morning starts with ahwe; business deals close over ahwe; condolences are offered over ahwe; gossip flows with ahwe. "Nit2ahwaa?" = want to grab coffee? is Lebanon\'s most popular social invitation. The Lebanese relationship with coffee blends French café culture with Arab hospitality traditions — you never let a guest sit without offering.',
  },
  {
    q: 'What is "2ahwe 3arabiyye" and how is it served?',
    opts: ['2ahwe 3arabiyye (Arabic coffee)', '2ahwe turkiyye (Turkish)', '2ahwe maDbuuTa (medium-sweet)', '2ahwe bil-7aliib (with milk)'],
    correct: 0,
    note: '"2ahwe 3arabiyye" (قهوة عربية) — Arabic coffee. Light yellow-green color, flavored with cardamom (haal), unsweetened, served in tiny handle-less cups (finjaan). Traditionally poured from a dalla (brass pot). Offered to guests as first act of hospitality — refusing is slightly rude. In Lebanese culture, drinking Arabic coffee together signifies peace: after a dispute, sharing coffee means the conflict is resolved. "Nishrab 3arabiyye ma3 ba3D" = let\'s drink Arabic coffee together.',
  },
  {
    q: 'What does "2ahwe maDbuuTa" mean when ordering coffee?',
    opts: ['2ahwe maDbuuTa (medium-sweet)', '2ahwe murr (bitter)', '2ahwe 7ilu (sweet)', 'ziyaade (extra)'],
    correct: 0,
    note: '"2ahwe maDbuuTa" (قهوة مضبوطة) — perfectly calibrated / medium sweet. "MaDbuuT" means exact/correct. When ordering Turkish or Arabic coffee, sweetness levels are: "murr" (bitter, no sugar), "maDbuuTa" (medium, balanced), "7ilu" (sweet). Lebanese coffee culture is precise about sweetness — ask anyone how they take their coffee and they\'ll tell you the exact level. "Kif bitrid 2ahwtak?" = how do you like your coffee? is a question Lebanese people answer with detail.',
  },
  {
    q: 'What is "2raayet il-finjaan" in Lebanese coffee culture?',
    opts: ['2raayet il-finjaan (cup reading)', 'finjaan iS-Saba7 (morning cup)', 'Diyaafe (hospitality)', 'tatliit (3 rounds)'],
    correct: 0,
    note: '"2raayet il-finjaan" (قراءة الفنجان) — reading the coffee cup. After drinking Turkish coffee, you flip the cup on the saucer, let the grounds dry, then read the shapes in the grounds to tell fortunes. This is a social ritual in Lebanese culture — done at home between women friends, at cafés, by professional readers. "Shu shaayfe?" = what do you see? "Fii safar" = there\'s a trip in your future. Younger Lebanese treat it as entertainment; older generations take it seriously.',
  },
  {
    q: 'What does "nit2ahwaa" mean as a social invitation?',
    opts: ['nit2ahwaa (let\'s have coffee)', '3al-2ahwe (over coffee)', 'jalse (a gathering)', 'sahra (evening gathering)'],
    correct: 0,
    note: '"Nit2ahwaa" (نتقهوى) — let\'s have coffee together. The Lebanese verb form: root "2-h-w" + we form. This is THE Lebanese social invitation. It means: let\'s sit, talk, catch up, spend time. The coffee is the occasion, not just the beverage. "Nit2ahwaa ktiir" = we should definitely get coffee (we haven\'t seen each other in too long). Unlike "let\'s meet" in English, "nit2ahwaa" promises warmth — sitting across from someone, talking about life, with no rush to leave.',
  },
  {
    q: 'What is "nargiile" and how does it relate to café culture?',
    opts: ['nargiile (hookah/narghile)', 'rezmane (newspaper)', 'traas (terrace)', '7ijiz Taawle (table reservation)'],
    correct: 0,
    note: '"Nargiile" (نرجيلة) — hookah / water pipe. The Lebanese café experience often combines coffee, nargiile, and conversation. Ordering: "nargiile ma3 tuffaa7" = nargiile with apple tobacco. "Baddna nargiile w 2ahwe" = we want nargiile and coffee. Lebanese café culture is known for long, leisurely sessions. A table of Lebanese people will sit for 3-4 hours with one nargiile and several coffees. The waiter (garson) brings refills, adjusts the coals, and generally doesn\'t rush you.',
  },
  {
    q: 'What does "bil-hana w sh-shafa" mean?',
    opts: ['bil-hana w sh-shafa (enjoy)', 'yis3id 2albak (may your heart be happy)', 'dayman 3aamir (always full)', '2ahwtak tiSbar (your coffee waits)'],
    correct: 0,
    note: '"Bil-hana w sh-shafa" (بالهنا والشفا) — enjoy in good health (lit. with happiness and healing). Said when someone eats, drinks, buys new clothes, or moves into a new home. The standard reply: "yis3id 2albak" (may your heart be happy). These formulas of blessing are Lebanese social lubricant — there\'s a phrase for every positive moment. Knowing when to say "bil-hana" and responding with "yis3id 2albak" makes you sound genuinely Lebanese rather than just language-correct.',
  },
  {
    q: 'What is "haal" in Lebanese coffee culture?',
    opts: ['haal (cardamom)', 'sukkar (sugar)', 'dalla (coffee pot)', 'finjaan (cup)'],
    correct: 0,
    note: '"Haal" (هيل) — cardamom. The defining spice of Arabic coffee. Lebanese Arabic borrowed "haal" from Gulf Arabic; MSA says "haal" or "habahan." Cardamom gives Arabic coffee its distinctive green-gold color and aromatic flavor. Amounts vary: Gulf-style uses a lot; Lebanese style uses less but it\'s still present. "2ahwe ma3 haal ktiir" = coffee with lots of cardamom. Cardamom is also in Lebanese desserts — "ka3k" cookies, "ma3moul," and "2eshta" cream. The scent of cardamom = Lebanese hospitality.',
  },
  {
    q: 'What does "jalse" mean in Lebanese social vocabulary?',
    opts: ['jalse (a gathering/sitting)', 'sahra (evening party)', 'Diyaafe (hospitality)', '3al-2ahwe (over coffee)'],
    correct: 0,
    note: '"Jalse" (جلسة) — a sitting / informal gathering. From the verb "jalis" (to sit). A jalse is smaller and more casual than a sahra (evening party). "Jalset 2ahwe" = a coffee sitting (just two or three friends). "Mniih il-jalse" = the gathering was nice. Lebanese social life is organized around these informal sittings — on balconies, in kitchens, at café corners. "Baddna jalse" = we need a gathering (we should spend time together). The jalse is the foundation of Lebanese social connection.',
  },
  {
    q: 'What is "tatliit" in Arabic coffee hosting?',
    opts: ['tatliit (3 rounds of coffee)', 'dalla (coffee pot)', 'finjaan (cup)', 'haal (cardamom)'],
    correct: 0,
    note: '"Tatliit" (تثليت) — literally "three-ing" — the tradition of serving three rounds of Arabic coffee to guests. Each refill has a meaning: first pour (tawsiit) = welcome; second (tatliit) = honor; third (tatriin) = farewell hint. To indicate you\'ve had enough and don\'t want more, gently shake the empty finjaan side to side. If you just hand it back without shaking, you\'ll get refilled. This small gesture matters — knowing it means you understand Lebanese hosting protocols deeply.',
  },
];

const AHW_TIPS = [
  'Lebanese café culture is a blend of French colonial legacy and Arab hospitality tradition. Beirut\'s café scene — once centered around Hamra Street — has spread across all neighborhoods. A Lebanese café is not just a coffee shop; it\'s an office, a therapy session, a political forum, and a matchmaking venue. "Shu 3andkon ahwe?" = what kind of coffee do you have? opens a relationship with the barista that may last years. Regular customers (zabboon daayim) are remembered and respected. "2ahwtak 3al-nahar" = your coffee is on me today.',
  'Turkish coffee etiquette in Lebanon: when invited to someone\'s home, you will be offered coffee. Always accept (refusing is a small insult). Hold the finjaan with your right hand. Don\'t drain it completely — leave the grounds. When you\'re done, turn it upside down on the saucer and let it dry (if you want your fortune read). The grounds form shapes that the hostess or a visiting "reader" will interpret. Classic images: birds (news coming), roads (travel), hearts (love). Lebanese people know not to take the reading too seriously, but they do take it delightfully.',
  'The "nit2ahwaa" culture means coffee invitations are social commitments. If a Lebanese person says "lazim nit2ahwaa" = we must get coffee, they mean it — follow up. Not following up on a coffee invitation is a mild social failure. Lebanese time management around coffee is peculiar: you might be rushing all day but the moment "nit2ahwaa?" is proposed, time stops. The coffee session itself is unhurried — "min gheer 3ajale" = without hurry. Lebanese cafés in diaspora cities (São Paulo, Sydney, Detroit) recreate this same unhurried space for community.',
  'Sweetness levels for Lebanese coffee are a serious matter. When making Turkish coffee for guests: ask every single person separately how they take it. "Kif badda?" = how does she like it? "Murr" = bitter (no sugar, the intellectual\'s order). "MaDbuuTa" = medium (most popular). "7ilu" = sweet. "Ziyaade 7ilu" = extra sweet (frowned upon by coffee purists). Getting someone\'s coffee order wrong is a small but real social gaffe. If you\'re Lebanese and you make your guest\'s coffee incorrectly, you will hear about it.',
  'Lebanese coffee vocabulary reveals the culture. "Nit2ahwaa?" literally means "shall we engage in the ritual of coffee together?" — the social act is embedded in the grammar. "3al-2ahwe" = over coffee, meaning: we\'ll discuss it properly and thoroughly. "Il-ghiibe bil-2ahwe" = gossip over coffee — acknowledged as a cultural reality, not a criticism. The word for morning, "Saba7," is often followed immediately by "il-2ahwe" in Lebanese speech: "Saba7 il-2ahwe" = good morning + coffee is a single unit. Coffee is not separate from Lebanese life; it is Lebanese life in liquid form.',
];

const AHW_ABOUT = 'Lebanese coffee culture sits at the intersection of French café tradition and Arab hospitality ritual — a country that colonially absorbed the café as a social institution while maintaining the ancient logic of the Arabic coffee pot (dalla) and the fortune-telling grounds (finjaan). In Lebanon, coffee is never just a beverage. It is the medium for negotiation, gossip, courtship, grief, and joy. To offer coffee is to open your door. To drink coffee with someone is to sit in their time. Understanding Lebanese coffee vocabulary means understanding how Lebanon maintains human connection — one small cup at a time.';
