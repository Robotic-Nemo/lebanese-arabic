// R839 — NEW FEATURE: Lebanese Food Delivery & Online Orders Culture (dlr)

const DLR_CATS = ['apps','ordering','payment','expressions'];

const DLR_WORDS = [
  // delivery apps & services
  { a: 'توصيل', tr: 'tawSiil', en: 'delivery — "tawSiil" is the core word for all food delivery in Lebanon', cat: 'apps' },
  { a: 'طلبية', tr: 'Talabiyye', en: 'order — "shu l-Talabiyye?" = what\'s the order? used for food and shopping', cat: 'apps' },
  { a: 'تطبيق التوصيل', tr: 'taTbiiq it-tawSiil', en: 'delivery app — Toters, Blueground, and Zomato are the big ones', cat: 'apps' },
  { a: 'توترز', tr: 'Toters', en: 'Toters — Lebanon\'s dominant homegrown delivery app, became essential post-2019', cat: 'apps' },
  { a: 'المطعم', tr: 'il-maTa3m', en: 'the restaurant — "min il-maTa3m" = from the restaurant (specifying pickup)', cat: 'apps' },
  { a: 'وقت التوصيل', tr: 'wa2t it-tawSiil', en: 'delivery time — always a source of anxiety in Lebanese ordering culture', cat: 'apps' },
  { a: 'مسافة', tr: 'msaafe', en: 'distance — affects delivery cost in Lebanese apps', cat: 'apps' },
  // ordering phrases
  { a: 'بدي آمر', tr: 'biddi 2aamur', en: '"I want to order" — first phrase when calling any Lebanese restaurant', cat: 'ordering' },
  { a: 'إيش عندكم اليوم؟', tr: '2eesh 3andkon il-yom?', en: '"what do you have today?" — daily specials change at Lebanese restaurants', cat: 'ordering' },
  { a: 'كم بيكلف؟', tr: 'kam bikallif?', en: '"how much does it cost?" — essential question before committing to order', cat: 'ordering' },
  { a: 'قديش الديلفري؟', tr: '2addeesh il-delivery?', en: '"how much is the delivery?" — often negotiated or bundled', cat: 'ordering' },
  { a: 'بكم مضروب؟', tr: 'bikam maDruub?', en: '"how much all together?" — asking for total including delivery fee', cat: 'ordering' },
  { a: 'خد ا��مزيد', tr: 'khod il-maziid', en: '"add extra" — requesting more of something (toom, sauce, bread)', cat: 'ordering' },
  { a: 'بدون', tr: 'biduun', en: '"without" — "biduun basal" (without onion), "biduun toom" (without garlic)', cat: 'ordering' },
  // payment
  { a: 'كاش', tr: 'kaash', en: 'cash — still preferred by many Lebanese delivery drivers post-crisis', cat: 'payment' },
  { a: 'فريش دولار', tr: 'fresh dollar', en: '"fresh dollar" — crisp unfolded USD bills demanded by some Lebanese vendors', cat: 'payment' },
  { a: 'بالتطبيق', tr: 'bil-taTbiiq', en: '"through the app" — paying via the delivery app\'s digital wallet', cat: 'payment' },
  { a: 'ما في فكة', tr: 'ma fi fakke', en: '"no change" — the Lebanese delivery reality, always have exact change', cat: 'payment' },
  { a: 'بالليرة اللبنانية', tr: 'bil-lire l-libnaaniyye', en: 'in Lebanese pounds — increasingly avoided as payment method post-2019 crisis', cat: 'payment' },
  { a: 'تيبس', tr: 'tips', en: 'tip — tipping delivery drivers became more important post-crisis as salaries collapsed', cat: 'payment' },
  { a: 'بورتفوليو', tr: 'portfolio', en: 'digital wallet — used in delivery apps like Toters to store balance', cat: 'payment' },
  // expressions
  { a: 'وين الراكب؟', tr: 'wein ir-raakib?', en: '"where is the driver?" — anxious tracking of delivery status', cat: 'expressions' },
  { a: 'وصل؟', tr: 'wiSil?', en: '"did it arrive?" — the eternal Lebanese delivery question', cat: 'expressions' },
  { a: 'متأخر عليك', tr: 'mit2akhkhir 3aleek', en: '"late for you" — the polite apology delivery drivers give in Lebanese', cat: 'expressions' },
  { a: 'طلعت غلط', tr: 'Tili3at ghalaT', en: '"something came out wrong" — discovering the order has an error', cat: 'expressions' },
  { a: 'مش هيك طلبت', tr: 'mish heek Tallabt', en: '"that\'s not what I ordered" — common Lebanese delivery complaint phrase', cat: 'expressions' },
  { a: 'زبوني', tr: 'zubuuni', en: '"my customer" — how Lebanese restaurant staff refer to their regulars', cat: 'expressions' },
  { a: 'على حسابي', tr: '3ala 7saabi', en: '"on my tab/account" — regulars who have running credit with local restaurants', cat: 'expressions' }
];

const DLR_DRILLS = [
  { q: 'What is "tawSiil" in Lebanese daily life?', opts: ['a restaurant reservation','delivery — the word for all food/goods delivery','a takeaway order','a menu item'], ans: 0, exp: '"TawSiil" (توصيل) = delivery. Since 2019, delivery culture exploded in Lebanon — with power cuts, currency collapse, and security concerns, ordering in became much more common. Toters, Zomato, and informal WhatsApp ordering all use "tawSiil."' },
  { q: 'Why did Toters become Lebanon\'s dominant delivery app?', opts: ['it\'s cheaper than international apps','it\'s a Lebanese-founded app that adapted to local realities post-2019','it has the best UI','it was the first delivery app in Lebanon'], ans: 1, exp: 'Toters is Lebanese-founded and adapted specifically to local realities: cash collection, Lebanese address formats (no street numbers in many areas), power-cut schedules, and multiple currencies. It became essential post-2019 crisis.' },
  { q: 'Why is "ma fi fakke" (no change) such a common Lebanese delivery phrase?', opts: ['drivers forget their wallets','payment apps don\'t work','drivers often don\'t carry change due to currency complexity','restaurants charge exact prices only'], ans: 2, exp: '"Ma fi fakke" (ما في فكة) = no change. In Lebanon\'s multi-currency environment (USD + Lebanese pounds + LL coins worth almost nothing), having exact change for delivery is genuinely complicated. Drivers often ask customers to prepare exact amounts.' },
  { q: 'What does "fresh dollar" mean in Lebanese delivery context?', opts: ['a new dollar coin','crisp, unfolded USD bills that some vendors specifically request','payment through the app','a dollar tip for the driver'], ans: 1, exp: '"Fresh dollar" became a thing in Lebanese commerce because some vendors and drivers prefer crisp, new USD bills — older torn bills sometimes get refused. It reflects the cash-centric nature of Lebanese commerce post-banking crisis.' },
  { q: '"Biddi 2aamur" literally means...', opts: ['"I want the menu"','"I want to order"','"I want a table"','"I want to pay"'], ans: 1, exp: '"Biddi 2aamur" (بدي آمر) = I want to order — from "amr" = command/order. This is the standard opening phrase when calling a Lebanese restaurant or placing an order through staff.' },
  { q: 'Why do Lebanese diners ask "2eesh 3andkon il-yom?"', opts: ['because menus change daily with fresh ingredients and specials','because they don\'t have a menu','because everything is cooked to order','to test the restaurant\'s knowledge'], ans: 0, exp: '"2eesh 3andkon il-yom?" (إيش عندكم اليوم؟) = what do you have today? Lebanese restaurants often feature daily specials and fresh seasonal items beyond the printed menu. Asking this often reveals the best and freshest options.' },
  { q: 'What does "zubuuni" express in Lebanese restaurant culture?', opts: ['a regular customer','a complaint','a new order','an expensive item'], ans: 0, exp: '"Zubuuni" (زبوني) = my customer — from "zabuun" = customer. Lebanese restaurants build deep relationships with regulars (zabaayin). Being called "zubuuni" means you\'re a known regular, often getting better service and sometimes credit.' },
  { q: '"3ala 7saabi" in the context of food ordering means...', opts: ['"that\'s expensive"','"it\'s on my bill/tab — a running credit account with the restaurant"','"I\'ll pay cash"','"it\'s my treat"'], ans: 1, exp: '"3ala 7saabi" (على حسابي) = on my tab/account. Many Lebanese locals have informal credit accounts with neighborhood restaurants — they order regularly and settle up at the end of the week or month. A trust-based system predating apps.' },
  { q: 'Why is tipping delivery drivers especially important in post-2019 Lebanon?', opts: ['it\'s legally required','driver salaries collapsed with the lira — tips in USD became essential income','apps don\'t pay drivers','it was always expected'], ans: 1, exp: 'Post-2019 crisis, Lebanese delivery drivers\' salaries (paid in Lebanese pounds) lost 90%+ of purchasing power. Tips in USD became a crucial supplement. The culture shifted from optional to essentially expected for international currency tips.' },
  { q: '"Wein ir-raakib?" is asked when...', opts: ['booking a restaurant','checking delivery driver location — tracking the order','complaining about an error','ordering a rideshare'], ans: 1, exp: '"Wein ir-raakib?" (وين الراكب؟) = where is the driver? After placing a delivery order in Lebanon, tracking the driver is a common anxious ritual — especially given traffic, power cuts, and address confusion in Lebanese neighborhoods.' },
  { q: 'What does "biduun" help customize in Lebanese food orders?', opts: ['price negotiation','removing ingredients — "biduun basal" (no onion)','specifying cooking method','requesting fast delivery'], ans: 1, exp: '"Biduun" (بدون) = without — essential customization word. Lebanese food culture accommodates many ingredient preferences. "Biduun toom" (no garlic), "biduun lemon" (no lemon), "biduun spice" are common requests.' },
  { q: '"Mish heek Tallabt" is said when...', opts: ['"I haven\'t ordered yet"','the order arrived with errors — "that\'s not what I ordered"','"I want to change the order"','"the food isn\'t good"'], ans: 1, exp: '"Mish heek Tallabt" (مش هيك طلبت) = that\'s not what I ordered. Order errors in Lebanon are common — handwritten tickets, translation between apps and kitchen, and high volume all contribute. This phrase initiates the (usually friendly) correction process.' },
  { q: 'Why do Lebanese apps show "wqt it-tawSiil" prominently?', opts: ['to plan around it','delivery time is highly anxious in Lebanon — traffic + power cuts + address confusion','for billing purposes','because it\'s legally required'], ans: 0, exp: 'Delivery time (وقت التوصيل) is highly variable in Lebanon — drivers navigate informal address systems (no numbered streets in many areas), traffic jams, generator-switch schedules, and multi-building compounds. Estimated times are rough guidelines.' },
  { q: '"Bil-taTbiiq" as a payment method means...', opts: ['"in cash"','"by card"','"through the app\'s digital wallet"','"by bank transfer"'], ans: 2, exp: '"Bil-taTbiiq" (بالتطبيق) = through the app. Delivery apps like Toters have digital wallets you can pre-load. For Lebanese users it avoids the "ma fi fakke" (no change) problem and the USD/LL currency question for the driver.' },
  { q: 'What does "khod il-maziid" accomplish in Lebanese food ordering?', opts: ['speeds up the order','requests extra of something — more bread, sauce, or condiments','asks for a discount','changes the order completely'], ans: 1, exp: '"Khod il-maziid" (خد المزيد) = take/add extra — a customization phrase. Lebanese dining culture is generous and extra bread, toom (garlic paste), or pickles are often requested and usually provided. "Khod" here is an informal "add for me."' }
];

const DLR_TIPS = [
  'Lebanon\'s food delivery culture transformed completely after 2019. Before the crisis, delivery was a convenience; after it, it became a safety and economic strategy. Many restaurants pivoted to delivery-only or delivery-first models as dining out became harder with currency volatility, power cuts, and economic stress.',
  'Toters is Lebanon\'s homegrown delivery champion, built specifically for Lebanese realities: cash collection, informal address systems (many Lebanese neighborhoods have no street numbers — buildings are known by names or landmarks), multiple currencies, and power-cut-aware scheduling.',
  'The "fresh dollar" phenomenon reflects Lebanon\'s informal currency culture. Post-2019, USD became the preferred currency for many transactions. Some vendors prefer crisp bills because worn or torn bills are sometimes rejected in informal currency exchange. Always have clean bills when ordering delivery.',
  '"3ala 7saabi" (on my tab) represents a trust-based credit system that predates all apps. Lebanese neighborhood restaurants often extend informal credit to regulars — you order freely and settle weekly or monthly. This personal relationship between "zabuun" (customer) and "Sa7ib il-maTa3m" (restaurant owner) is central to Lebanese food culture.',
  'Tipping delivery drivers has shifted from optional to expected in Lebanon post-2019. Drivers\' base salaries in Lebanese pounds lost 90%+ of value. A tip of $1-2 USD or its equivalent in "fresh" currency is now considered standard. The economic crisis transformed tipping from a courtesy to a lifeline.',
  'Delivery addresses in Lebanon are an adventure. Most areas lack numbered streets — orders are directed to landmarks ("next to the church," "facing the blue building"), GPS pins, or descriptive instructions. Drivers are highly skilled navigators of informal address systems, often using WhatsApp voice notes to locate customers.'
];
