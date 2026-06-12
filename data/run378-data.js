// Run #378 — Lebanese Coffee Shop & Café Culture
// Categories: coffee-drinks | cafe-vocabulary | ordering-phrases | social-rituals | expressions

const CAF_WORDS = [
  // coffee-drinks
  { ar: 'قهوة', tr: '2ahwe', en: 'coffee (general)', cat: 'coffee-drinks' },
  { ar: 'قهوة عربية', tr: '2ahwe 3arabiyye', en: 'Arabic/Lebanese coffee (cardamom-spiced)', cat: 'coffee-drinks' },
  { ar: 'إسبريسو', tr: 'espriso', en: 'espresso (loanword)', cat: 'coffee-drinks' },
  { ar: 'كابتشينو', tr: 'kabchino', en: 'cappuccino (loanword)', cat: 'coffee-drinks' },
  { ar: 'نسكافيه', tr: 'neskaafe', en: 'instant coffee / Nescafé (brand = generic)', cat: 'coffee-drinks' },
  { ar: 'شاي', tr: 'shaay', en: 'tea', cat: 'coffee-drinks' },
  { ar: 'شاي بالنعنع', tr: 'shaay bil-na3na3', en: 'mint tea', cat: 'coffee-drinks' },
  { ar: 'عرق', tr: '3ara2', en: 'arak (anise spirit, often with coffee)', cat: 'coffee-drinks' },
  // cafe-vocabulary
  { ar: 'مقهى', tr: 'ma2ha', en: 'café / coffee house', cat: 'cafe-vocabulary' },
  { ar: 'أرجيلة', tr: 'arjiile', en: 'hookah / water pipe (very common in Lebanese cafés)', cat: 'cafe-vocabulary' },
  { ar: 'طاولة', tr: 'Taawle', en: 'table', cat: 'cafe-vocabulary' },
  { ar: 'جرسون', tr: 'garsoon', en: 'waiter (from French garçon)', cat: 'cafe-vocabulary' },
  { ar: 'حساب', tr: '7saab', en: 'bill / check', cat: 'cafe-vocabulary' },
  { ar: 'بقشيش', tr: 'ba2shiish', en: 'tip (gratuity)', cat: 'cafe-vocabulary' },
  { ar: 'واي فاي', tr: 'waay faay', en: 'Wi-Fi (loanword)', cat: 'cafe-vocabulary' },
  { ar: 'تراس', tr: 'traas', en: 'terrace / outdoor seating (from French terrasse)', cat: 'cafe-vocabulary' },
  // ordering-phrases
  { ar: 'بدي قهوة', tr: 'baddi 2ahwe', en: 'I want a coffee', cat: 'ordering-phrases' },
  { ar: 'مرتين', tr: 'martein', en: 'twice-brewed / double shot (coffee strength)', cat: 'ordering-phrases' },
  { ar: 'حلو', tr: '7elo', en: 'sweet (for coffee ordering)', cat: 'ordering-phrases' },
  { ar: 'وسط', tr: 'waSaT', en: 'medium sweet', cat: 'ordering-phrases' },
  { ar: 'سادة', tr: 'saada', en: 'plain / no sugar', cat: 'ordering-phrases' },
  { ar: 'جيبلي', tr: 'jiibli', en: 'bring me (ordering command)', cat: 'ordering-phrases' },
  { ar: 'كيفك؟', tr: 'kiifak?', en: 'how are you? (obligatory café greeting to waiter)', cat: 'ordering-phrases' },
  // social-rituals
  { ar: 'فنجان قهوة', tr: 'finjaan 2ahwe', en: 'cup of coffee (demitasse cup for Arabic coffee)', cat: 'social-rituals' },
  { ar: 'قرا البخت', tr: '2ara il-bakht', en: 'reading fortunes in coffee grounds (tasseography)', cat: 'social-rituals' },
  { ar: 'دعوة', tr: 'da3we', en: 'invitation / treat (paying for someone\'s coffee)', cat: 'social-rituals' },
  { ar: 'على حسابي', tr: '3a 7saabi', en: 'on my tab / my treat', cat: 'social-rituals' },
  { ar: 'معزوم', tr: 'ma3zuum', en: 'hosted / treated (you\'re my guest)', cat: 'social-rituals' },
  { ar: 'تفضل', tr: 'tfaDDal', en: 'please (go ahead / help yourself / welcome)', cat: 'social-rituals' },
  { ar: 'صحتين', tr: 'Sa7tein', en: 'to your double-health (said after eating/drinking)', cat: 'social-rituals' },
  { ar: 'دبارك الله', tr: 'dbaarek alla', en: 'God bless (response to Sa7tein)', cat: 'social-rituals' },
  // expressions
  { ar: 'روح اشرب قهوة', tr: 'ruu7 eshrab 2ahwe', en: 'go drink coffee (polite way to say get lost)', cat: 'expressions' },
  { ar: 'بحياة القهوة', tr: 'b7ayaat il-2ahwe', en: 'by the life of the coffee (mild oath / emphasis)', cat: 'expressions' },
  { ar: 'شو بدنا أكثر', tr: 'shu badna aktar', en: 'what more could we want? (contentment at a café)', cat: 'expressions' },
  { ar: 'ما تشيل هم', tr: 'ma tshill hamm', en: 'don\'t worry / no stress (café small talk)', cat: 'expressions' },
  { ar: 'حكي وقهوة', tr: '7aki w 2ahwe', en: 'conversation and coffee (the Lebanese ideal)', cat: 'expressions' },
  { ar: 'خد وقتك', tr: 'khod wa2tak', en: 'take your time (no rush)', cat: 'expressions' },
  { ar: 'اتفضل قاعد', tr: 'itfaDDal 2aa3ed', en: 'please sit down / make yourself comfortable', cat: 'expressions' },
  { ar: 'منيح كتير', tr: 'mnii7 ktiir', en: 'very good / excellent (appreciating coffee/food)', cat: 'expressions' },
  { ar: 'ماشي الحال', tr: 'maashi l-7aal', en: 'things are going / getting by (common small-talk reply)', cat: 'expressions' },
];

const CAF_DRILLS = [
  {
    q: 'How do you order "I want a coffee" in Lebanese?',
    opts: ['jiibli 2ahwe', 'baddi 2ahwe', '2ahwe min fadlak', 'ha2a 2ahwe'],
    correct: 1,
    note: '"baddi 2ahwe" (بدي قهوة) — "baddi" = I want. Direct and completely natural in a Lebanese café. You can also say "jiibli 2ahwe" (bring me a coffee) or just "2ahwe" while pointing.'
  },
  {
    q: 'What is "arjiile"?',
    opts: ['a strong espresso', 'hookah / water pipe', 'an outdoor terrace', 'a demitasse cup'],
    correct: 1,
    note: '"arjiile" (أرجيلة) — the hookah or water pipe. An inseparable part of Lebanese café culture. Many cafés primarily operate as arjiile venues with coffee as an accompaniment. Flavors: tuffaa7 (apple), 3inab (grape), mnti (mint).'
  },
  {
    q: 'In Lebanese coffee culture, "saada" means:',
    opts: ['double shot', 'medium sweet', 'plain / no sugar', 'extra sweet'],
    correct: 2,
    note: '"saada" (سادة) — plain, no sugar. Arabic coffee is ordered by sweetness: "saada" (none), "waSaT" (medium), "7elo" (sweet). Tell the host before brewing, not after — it can\'t be changed once made.'
  },
  {
    q: 'What does "2ara il-bakht" mean?',
    opts: ['ordering a second coffee', 'reading fortunes in coffee grounds', 'paying the bill', 'inviting someone for coffee'],
    correct: 1,
    note: '"2ara il-bakht" (قرا البخت) — reading fortunes in the coffee grounds left in an Arabic coffee cup. A beloved Lebanese tradition, especially among women. The cup is flipped, the grounds read, fortunes told — always in fun.'
  },
  {
    q: 'What does "3a 7saabi" mean?',
    opts: ['bring me the bill', 'what does this cost?', 'on my tab / my treat', 'how much did we spend?'],
    correct: 2,
    note: '"3a 7saabi" (على حسابي) — my treat, I\'m paying. One of the most-uttered phrases at Lebanese café tables. Fighting over who pays is a Lebanese sport. Expect strong insistence from both sides.'
  },
  {
    q: 'What is "ma3zuum"?',
    opts: ['the coffee bill', 'hosted / treated (you\'re my guest)', 'a café reservation', 'a coffee order'],
    correct: 1,
    note: '"ma3zuum" (معزوم) — when someone says "inta ma3zuum" you\'re their honored guest and they insist on paying. Refusing is considered rude. Accepting with "alla y3awedon" (may God reward them) is proper etiquette.'
  },
  {
    q: 'What does "Sa7tein" mean?',
    opts: ['enjoy your coffee', 'to your double-health (said after eating/drinking)', 'welcome, please sit', 'thank you for the coffee'],
    correct: 1,
    note: '"Sa7tein" (صحتين) — "to your double health." Said to someone who just ate, drank, or even showered. The response is "dbaarek alla" (God bless) or "3ala 2albak" (on your heart). Used after every coffee, meal, or drink.'
  },
  {
    q: 'What is a "finjaan 2ahwe"?',
    opts: ['a coffee thermos', 'a cup of coffee (demitasse for Arabic coffee)', 'a coffee machine', 'a coffee blend'],
    correct: 1,
    note: '"finjaan 2ahwe" (فنجان قهوة) — a small demitasse cup of Arabic coffee. Lebanese homes always have a thermos of Arabic coffee ready for guests. Refusing is mildly offensive: "tfaDDal, finjaan 2ahwe!" is almost mandatory hospitality.'
  },
  {
    q: 'What does "7aki w 2ahwe" represent in Lebanese culture?',
    opts: ['a type of café', 'a coffee recipe', 'conversation and coffee (the Lebanese ideal)', 'a morning routine'],
    correct: 2,
    note: '"7aki w 2ahwe" (حكي وقهوة) — conversation and coffee. This phrase captures the Lebanese café spirit perfectly. Cafés are social hubs, not just drink stops. Hours are spent over one coffee, talking about life, politics, family.'
  },
  {
    q: 'What does "garsoon" mean?',
    opts: ['coffee grounds', 'a café table', 'waiter (from French garçon)', 'the bill'],
    correct: 2,
    note: '"garsoon" (جرسون) — waiter, from French "garçon." Lebanese hospitality and French influence collide here. Call a waiter with "garsoon!" or by snapping fingers or eye contact. Tipping ("ba2shiish") around 10-15% is customary.'
  },
];

const CAF_TIPS = [
  'Lebanese coffee culture is a social institution. A café visit is never just about the drink — it\'s about conversation ("7aki"), connection, and hospitality. Expect to spend hours over one coffee. Rushing out is considered rude. The phrase "khod wa2tak" (take your time) is literally meant.',
  'Arabic coffee ("2ahwe 3arabiyye") is brewed with cardamom and served in small demitasse cups ("finjaan"). Always specify sweetness BEFORE brewing: "saada" (no sugar), "waSaT" (medium), "7elo" (sweet). The grounds settle — don\'t drink the last sip. Flip the cup for fortune reading.',
  'The arjiile (hookah) is central to Lebanese café culture. Many establishments are primarily arjiile cafés. Common flavors: "tuffaa7" (apple), "3inab" (grape), "na3na3" (mint), "duble appel" (double apple — most popular). Sharing one is a bonding ritual.',
  'Paying the bill ("7saab") triggers a Lebanese tradition: everyone fights to pay. "3a 7saabi!" (my treat!), "la2, ana 3a 7saabi!" (no, MY treat!), "ma3zuum!" (you\'re my guest!). The person who grabbed the bill first usually wins. Never split the bill with a Lebanese host — offer insistently but expect to be refused.',
  'French influence is heavy in Lebanese café vocabulary. "Garsoon" (garçon = waiter), "traas" (terrasse = terrace), "kabchino" (cappuccino). Many café menus are in French and Arabic. Ordering in either language is fine. Say "merci" and "s\'il vous plaît" — they\'ll understand and appreciate it.',
];

const CAF_ABOUT = 'The Lebanese café is a cornerstone of daily social life. From the tiny neighborhood "ma2ha" with plastic chairs and argilas to the chic rooftop establishments of Gemmayzeh and Mar Mikhael, cafés are where Lebanese life unfolds. Business deals, political debates, love stories, and family arguments — all over coffee. Arabic coffee ("2ahwe 3arabiyye"), bitter and cardamom-spiced, is served at every home visit as an act of hospitality. The fortune-telling tradition ("2ara il-bakht") turns coffee grounds into a social ritual. Understanding café vocabulary means understanding Lebanese social life: the generosity of "ma3zuumi", the warmth of "Sa7tein", and the cultural truth that "7aki w 2ahwe" — conversation and coffee — is all you really need.';
