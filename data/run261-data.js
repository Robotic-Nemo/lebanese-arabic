// Run #261 — Lebanese Food & Dining Out Coach (fdr)
// Restaurant vocab, ordering, Lebanese dishes, food culture — 40 items, MCQ drill, 5 tips

const FDR_WORDS = [
  // Lebanese dishes
  { tr: 'hummuS',          ar: 'حمص',             en: 'hummus',                          cat: 'dishes' },
  { tr: 'tabbule',         ar: 'تبولة',            en: 'tabbouleh (parsley salad)',        cat: 'dishes' },
  { tr: 'falafel',         ar: 'فلافل',            en: 'falafel',                          cat: 'dishes' },
  { tr: 'kafta',           ar: 'كفتة',             en: 'kafta (spiced ground meat)',       cat: 'dishes' },
  { tr: 'kibbe',           ar: 'كبة',              en: 'kibbeh (bulgur & meat)',           cat: 'dishes' },
  { tr: 'fattoush',        ar: 'فتوش',             en: 'fattoush (bread salad)',           cat: 'dishes' },
  { tr: 'man2ooshe',       ar: 'منقوشة',           en: 'manoushe (flatbread with toppings)', cat: 'dishes' },
  { tr: 'shawrma',         ar: 'شاورمة',           en: 'shawarma',                        cat: 'dishes' },
  // drinks & basics
  { tr: 'ahwe',            ar: 'قهوة',             en: 'coffee',                          cat: 'drinks' },
  { tr: 'ahwe 3arabiyye',  ar: 'قهوة عربية',       en: 'Arabic coffee',                   cat: 'drinks' },
  { tr: 'shai',            ar: 'شاي',              en: 'tea',                             cat: 'drinks' },
  { tr: 'mayy',            ar: 'ماي',              en: 'water',                           cat: 'drinks' },
  { tr: '3aSiir',          ar: 'عصير',             en: 'juice',                           cat: 'drinks' },
  { tr: '3arak',           ar: 'عرق',              en: 'arak (anise spirit)',              cat: 'drinks' },
  { tr: 'laban',           ar: 'لبن',              en: 'yogurt drink / buttermilk',       cat: 'drinks' },
  { tr: 'zhourat',         ar: 'زهورات',           en: 'herbal tea / flower infusion',    cat: 'drinks' },
  // restaurant ordering
  { tr: 'menu / 2a2ema',   ar: 'قائمة',            en: 'menu',                            cat: 'ordering' },
  { tr: 'Talab',           ar: 'طلب',              en: 'order (noun)',                    cat: 'ordering' },
  { tr: 'waiter / garSon', ar: 'غرسون',            en: 'waiter',                          cat: 'ordering' },
  { tr: '7saab',           ar: 'حساب',             en: 'bill / check',                    cat: 'ordering' },
  { tr: 'jib l-7saab',     ar: 'جيب الحساب',       en: 'bring the bill',                  cat: 'ordering' },
  { tr: 'baddi 2eTlob',    ar: 'بدي أطلب',         en: 'I want to order',                 cat: 'ordering' },
  { tr: 'shu fi lyom?',    ar: 'شو في اليوم؟',     en: 'what\'s available today?',        cat: 'ordering' },
  { tr: 'tayeb / zaki',    ar: 'طيب / زاكي',       en: 'delicious / tasty',               cat: 'ordering' },
  // meze & sharing
  { tr: 'mezze',           ar: 'مازة',             en: 'mezze (appetizer spread)',        cat: 'meze' },
  { tr: 'khubez',          ar: 'خبز',              en: 'bread (pita)',                    cat: 'meze' },
  { tr: 'zaytoun',         ar: 'زيتون',            en: 'olives',                          cat: 'meze' },
  { tr: 'jebne',           ar: 'جبنة',             en: 'cheese',                          cat: 'meze' },
  { tr: 'waraq 3inab',     ar: 'ورق عنب',          en: 'stuffed grape leaves',            cat: 'meze' },
  { tr: 'ba2le',           ar: 'بقلة',             en: 'purslane / wild herb',            cat: 'meze' },
  // eating phrases
  { tr: 'Sah7a!',          ar: 'صحة!',             en: 'cheers! / bon appétit!',          cat: 'phrases' },
  { tr: 'Sah7ten!',        ar: 'صحتين!',           en: 'double cheers! (response)',       cat: 'phrases' },
  { tr: '2akalt mnii7',    ar: 'أكلت منيح',        en: 'I ate well (I\'m satisfied)',     cat: 'phrases' },
  { tr: 'Halwe l-2akle',   ar: 'حلوة الأكلة',      en: 'the food is delicious',           cat: 'phrases' },
  { tr: 'kell shi mnii7',  ar: 'كل شي منيح',       en: 'everything is good / all good',   cat: 'phrases' },
  { tr: 'bi-lafiyye!',     ar: 'بالعافية!',        en: 'enjoy! (said after eating)',      cat: 'phrases' },
  { tr: '3al 2eed!',       ar: 'عالإيد!',          en: 'good hands! (compliment cook)',   cat: 'phrases' },
  { tr: 'deyfeena',        ar: 'ضيفينا',           en: 'you\'re our guest (host pays)',   cat: 'phrases' },
  { tr: '7aram',           ar: 'حرام',             en: 'shame / waste (food wasted)',     cat: 'phrases' },
  { tr: 'zahlawi',         ar: 'زحلاوي',           en: 'from Zahle (famous for food)',    cat: 'phrases' },
];

const FDR_DRILLS = [
  {
    q: 'How do you say "bill / check" in Lebanese Arabic?',
    opts: ['Talab', '7saab', 'menu', 'garSon'],
    correct: 1,
    note: '"7saab" = bill/check (also means account/calculation). To ask for it: "jib l-7saab" = bring the bill; "Talab" = order; "menu" = menu; "garSon" = waiter'
  },
  {
    q: 'What does "Sah7a!" mean?',
    opts: ['enjoy your meal!', 'delicious!', 'cheers! / bon appétit!', 'thank you for cooking'],
    correct: 2,
    note: '"Sah7a!" = cheers / to your health / bon appétit (from صحة = health). Response: "Sah7ten!" (double health to you). Used before/during meals, after drinks, and when someone sneezes'
  },
  {
    q: 'What is "mezze"?',
    opts: ['main course', 'dessert', 'appetizer spread', 'drink menu'],
    correct: 2,
    note: '"mezze" (مازة) = the Lebanese tradition of many small dishes served together as starters. Essential to Lebanese dining culture — can become the whole meal. "man2ooshe" = breakfast flatbread, not mezze'
  },
  {
    q: 'How do you say "I want to order" in Lebanese Arabic?',
    opts: ['jib l-7saab', 'shu fi lyom?', 'baddi 2eTlob', 'tayeb ktir'],
    correct: 2,
    note: '"baddi 2eTlob" = I want to order (baddi = I want, 2eTlob = to order/request); "jib l-7saab" = bring the bill; "shu fi lyom?" = what\'s available today?'
  },
  {
    q: 'What does "man2ooshe" mean?',
    opts: ['stuffed grape leaves', 'flatbread with toppings', 'spiced ground meat', 'bread salad'],
    correct: 1,
    note: '"man2ooshe" = Lebanese flatbread with toppings (za\'atar, cheese, or kishk). Lebanon\'s iconic breakfast. "waraq 3inab" = stuffed grape leaves; "kafta" = spiced ground meat; "fattoush" = bread salad'
  },
  {
    q: 'How do you say "delicious" in Lebanese Arabic?',
    opts: ['zaytoun', 'tayeb / zaki', 'Sah7a', 'laban'],
    correct: 1,
    note: '"tayeb" or "zaki" = delicious/tasty. "tayeb ktir" = very delicious. Response to complimenting food: "3al 2eed!" (good hands!) — complimenting the cook. "zaytoun" = olives; "laban" = yogurt drink'
  },
  {
    q: 'What does "deyfeena" mean?',
    opts: ['the bill is ready', 'please leave', 'you\'re our guest (host pays)', 'take your time'],
    correct: 2,
    note: '"deyfeena" = you\'re our guest (from ضيف = guest). When a Lebanese host says this, they\'re insisting on paying. Refusing to let guests pay is a point of Lebanese pride and hospitality. Never argue — you\'ll lose'
  },
  {
    q: 'What is "arak" in Lebanese Arabic?',
    opts: ['juice', 'tea', 'anise spirit', 'coffee'],
    correct: 2,
    note: '"3arak" = arak, the traditional Lebanese anise-based spirit (similar to ouzo/pastis). Drunk with mezze and water/ice — turns milky white. "Lebanon\'s national drink." "ahwe" = coffee; "shai" = tea; "3aSiir" = juice'
  },
  {
    q: 'How do you say "everything is good" in Lebanese Arabic?',
    opts: ['bi-lafiyye', '7aram', 'kell shi mnii7', '2akalt mnii7'],
    correct: 2,
    note: '"kell shi mnii7" = everything is good/all good (kell = all, shi = thing, mnii7 = good). General positive response to "how is the food?" "2akalt mnii7" = I ate well (I\'m satisfied); "bi-lafiyye!" = enjoy! (said AFTER eating)'
  },
  {
    q: 'What does "kibbe" refer to?',
    opts: ['hummus dip', 'yogurt sauce', 'bulgur & meat dish', 'flatbread'],
    correct: 2,
    note: '"kibbe" (كبة) = Lebanese national dish — bulgur wheat mixed with minced meat and spices. Eaten raw (kibbe nayye), baked, fried, or in broth. "hummuS" = chickpea dip; "khubez" = bread; "man2ooshe" = flatbread'
  },
];

const FDR_TIPS = [
  { title: 'Mezze culture — the heart of Lebanese dining', body: 'Lebanese meals center on "mezze" — dozens of small dishes covering the table. Nobody orders individually; everyone shares. Essential phrases: "khadhna mezze" (we\'ll have mezze), "zidna min..." (add more of...), "kefayye" (enough, we\'re full). The host always orders more than needed — abundance is hospitality. Order mezze "la ma2kale" (for the table). Don\'t eat individual plates — take from shared dishes with pita. The mezze IS the meal, not just an appetizer.' },
  { title: 'Lebanese coffee and the art of visiting', body: 'Coffee ("ahwe") is central to Lebanese hospitality. Arriving at someone\'s home: "taddal/taddali" (please come in) → "shrab ahwe?" (have coffee?). Refusing coffee is mildly rude. Types: "ahwe 3arabiyye" (Arabic coffee, cardamom-spiced, small cups), "ahwe fransawi" (French-style espresso), "nescafe" (any instant coffee). No sugar: "saade." Medium: "wasTa." Sweet: "7loo." Very sweet: "3a raa7tak" (as you like). At the end: flip the cup for fortune-telling.' },
  { title: '"Sah7a" — the Lebanese toast system', body: '"Sah7a" (to your health) is used: raising a glass before drinking, when someone sneezes (instead of bless you), at the start of a meal, when complimenting food. Response: "Sah7ten" (double health to you). With arak or wine: "kasak" (to your glass) or just "Sah7a". After someone finishes eating: "bi-lafiyye!" (enjoy / may it be beneficial) → response: "allah y3afik" (may God bless you). After cooking: "3al 2eed!" (good hands!) → response: "da2men bi-sanadak" (always to your support).' },
  { title: 'Ordering food — Lebanese restaurant survival', body: 'At a restaurant: get the waiter\'s attention: "garSon!" or catch their eye. Order: "baddi..." (I want...) + dish name. If unsure: "shu fi lyom?" (what\'s available/special today?) or "shu btansaH?" (what do you recommend?). For the bill: "jib l-7saab min fadlak" (bring the bill please). Lebanese restaurants often include a bread basket, olives, and water automatically. Tipping: 10-15% in good restaurants (not always included). At street food: pay when you get the food.' },
  { title: 'Lebanese food culture essentials', body: '"Kibbe nayye" (raw kibbeh) is Lebanon\'s proudest dish — offered to honored guests. "Man2ooshe" = Lebanon\'s breakfast institution — za\'atar (thyme/oil), cheese, or kishk flatbread from the bakery each morning. "Zahlawi" = from Zahle, the food capital of the Bekaa Valley — calling food "zahlawi" is the highest compliment. "7aram tkisruu khetrak" = shame you didn\'t eat more (host guilt-complimenting). "Rbb l-beit" (lord of the house) always insists on more food. The correct response to any offer of food: accept at least once, then you may decline.' },
];

const FDR_ABOUT = 'Master Lebanese Arabic food and dining vocabulary — dishes, drinks, restaurant ordering, mezze culture, and food expressions. Essential for eating out in Lebanon, hosting guests, and participating in the deeply social Lebanese food culture.';
