// Run #297 — Lebanese Money & Finance Coach (mny)
// Currency, banking, prices, economic phrases, lira crisis vocabulary — 40 items, MCQ drill, 5 tips

const MNY_WORDS = [
  // currency & bills
  { tr: 'lira',            ar: 'ليرة',            en: 'lira (Lebanese pound)',            cat: 'currency' },
  { tr: 'dollar',          ar: 'دولار',           en: 'dollar (USD)',                     cat: 'currency' },
  { tr: 'kesh',            ar: 'كاش',             en: 'cash',                             cat: 'currency' },
  { tr: 'war2a',           ar: 'ورقة',            en: 'banknote / paper bill',            cat: 'currency' },
  { tr: 'maSraaf',         ar: 'مصراف',           en: 'bank',                             cat: 'currency' },
  { tr: '3omle',           ar: 'عملة',            en: 'currency / coin',                  cat: 'currency' },
  { tr: 'Si7ife',          ar: 'صيفية',           en: 'change (coins)',                   cat: 'currency' },
  { tr: 'kart',            ar: 'كارت',            en: 'card (credit/debit)',              cat: 'currency' },
  // prices & amounts
  { tr: 'si3ir',           ar: 'سعر',             en: 'price',                            cat: 'prices' },
  { tr: 'ghele',           ar: 'غلي',             en: 'expensive / high price',           cat: 'prices' },
  { tr: 'rkhiiS',          ar: 'رخيص',            en: 'cheap',                            cat: 'prices' },
  { tr: 'addesh?',         ar: 'أديش؟',           en: 'how much?',                        cat: 'prices' },
  { tr: 'Hisaab',          ar: 'حساب',            en: 'bill / account / calculation',     cat: 'prices' },
  { tr: 'khaSSam',         ar: 'خصّم',             en: 'discount',                         cat: 'prices' },
  { tr: 'takhfiiD',        ar: 'تخفيض',           en: 'reduction / sale',                 cat: 'prices' },
  { tr: '3arD',            ar: 'عرض',             en: 'offer / deal',                     cat: 'prices' },
  // banking & payments
  { tr: 'Hisaab maSrafi',  ar: 'حساب مصرفي',      en: 'bank account',                     cat: 'banking' },
  { tr: 'hawwel',          ar: 'حوّل',             en: 'to transfer (money)',              cat: 'banking' },
  { tr: 'sa7ab',           ar: 'سحب',             en: 'to withdraw',                      cat: 'banking' },
  { tr: 'da33',            ar: 'دعّ',              en: 'to deposit',                       cat: 'banking' },
  { tr: 'ATM / Siraaf',    ar: 'ATM / صرّاف',     en: 'ATM / money changer',              cat: 'banking' },
  { tr: 'faatura',         ar: 'فاتورة',          en: 'invoice / bill',                   cat: 'banking' },
  { tr: 'dee2',            ar: 'ديون',            en: 'debts',                            cat: 'banking' },
  { tr: 'Dimaane',         ar: 'ضمانة',           en: 'guarantee / collateral',           cat: 'banking' },
  // Lebanese economic phrases
  { tr: 'dollar 3ala si3ir addesh?', ar: 'دولار على سعر أديش؟', en: 'what\'s the dollar rate?', cat: 'economic' },
  { tr: 'si3ir l-Sarf',    ar: 'سعر الصرف',       en: 'exchange rate',                    cat: 'economic' },
  { tr: 'kesh dollar',     ar: 'كاش دولار',        en: 'fresh dollars (physical cash)',    cat: 'economic' },
  { tr: 'lollar',          ar: 'لولار',           en: 'trapped bank dollars (slang)',     cat: 'economic' },
  { tr: 'azme',            ar: 'أزمة',            en: 'crisis',                           cat: 'economic' },
  { tr: 'ghelaa',          ar: 'غلاء',            en: 'high cost of living / inflation',  cat: 'economic' },
  // transactions
  { tr: 'dafa3',           ar: 'دفع',             en: 'to pay',                           cat: 'transactions' },
  { tr: 'ishtare',         ar: 'اشترى',           en: 'to buy',                           cat: 'transactions' },
  { tr: 'baa3',            ar: 'باع',             en: 'to sell',                          cat: 'transactions' },
  { tr: 'kassar',          ar: 'كسّر',             en: 'to break a bill / give change',    cat: 'transactions' },
  { tr: 'saraf',           ar: 'صرف',             en: 'to exchange / spend',              cat: 'transactions' },
  { tr: 'be-l-2aqsaaT',   ar: 'بالأقساط',         en: 'in installments',                  cat: 'transactions' },
  { tr: '3al-Hisaab',      ar: 'عالحساب',          en: 'on account / on credit',           cat: 'transactions' },
  { tr: 'mabsouT?',        ar: 'مبسوط؟',          en: 'satisfied? (after transaction)',   cat: 'transactions' },
  { tr: 'Hassal',          ar: 'حصّل',             en: 'to collect / recover money',       cat: 'transactions' },
  { tr: 'shaaTir',         ar: 'شاطر',            en: 'smart / savvy (good negotiator)',  cat: 'transactions' },
];

const MNY_DRILLS = [
  {
    q: 'How do you ask "how much?" in Lebanese Arabic?',
    opts: ['si3ir?', 'addesh?', 'ghele?', 'kash?'],
    correct: 1,
    note: '"addesh?" = how much? (أديش؟). The most-used shopping word in Lebanon. "Addesh haydaa?" = how much is this? "Addesh l-kilo?" = how much per kilo? "Addesh l-ujra?" = how much is the fare? Lebanese price culture: always ask the price — prices are often not displayed, especially in traditional markets (souks). Knowing "addesh" + a number = you can function in any Lebanese market. "Addesh 3andak?" = how much do you have? (do you have enough?)'
  },
  {
    q: 'What does "lollar" mean in Lebanese slang?',
    opts: ['a foreign currency', 'trapped bank dollars', 'a type of Lebanese lira', 'dollar exchanged at black market'],
    correct: 1,
    note: '"lollar" = trapped bank dollars (لولار — portmanteau of "lira" + "dollar"). Lebanese slang born from the 2019 financial crisis. When Lebanese banks froze accounts, dollars deposited became inaccessible — they became "lollars": you could see the balance but couldn\'t withdraw real USD. "3andi dollar bi-l-bank? La2, lollar." The distinction is critical: "kesh dollar" (physical fresh USD) vs "lollar" (bank-trapped USD). Reflects Lebanon\'s unique and devastating financial crisis.'
  },
  {
    q: 'How do you say "expensive" in Lebanese Arabic?',
    opts: ['rkhiiS', 'kheesme', 'ghele', 'Si7ife'],
    correct: 2,
    note: '"ghele" = expensive / gone up in price (غلي — from غلا = to become expensive). "Haydaa ghele ktiir" = this is very expensive. "L-3esh gele" = food/living got expensive. One of Lebanon\'s most said words post-2019. "Ghele 3aleik" = too expensive for you. Opposite: "rkhiiS" = cheap. "Kteer ghele" vs "shwayy ghele" = very/a bit expensive. "Ghelaa" (noun) = cost of living / high prices. Lebanese shopping culture: expressing shock at prices is normal and expected — "shu haydaa?!" (what is this?!)'
  },
  {
    q: 'What does "kesh dollar" mean?',
    opts: ['ATM withdrawal', 'fresh physical USD cash', 'dollar exchange rate', 'dollar bill'],
    correct: 1,
    note: '"kesh dollar" = fresh/physical USD cash (كاش دولار). In post-crisis Lebanon, "kesh dollar" became the most desirable form of money — physical US banknotes that weren\'t trapped in banks. Businesses price in "kesh dollar" vs "lollar" vs Lebanese lira. "Btidfa3 kesh dollar?" = are you paying in fresh dollars? "Si3ir l-kesh" = the cash dollar rate. The distinction kesh/lollar changed Lebanese commercial life fundamentally. Many expats send "kesh dollar" to family: "ba3atlak dollar" = I sent you dollars.'
  },
  {
    q: 'How do you say "to pay" in Lebanese Arabic?',
    opts: ['ishtare', 'dafa3', 'saraf', 'hawwel'],
    correct: 1,
    note: '"dafa3" = to pay (دفع — from دفع = to push/pay). "Miin bi-idfa3?" = who\'s paying? "Ana ba-dfa3" = I\'ll pay. Lebanese paying culture: it\'s common to fight over who pays — "la2, ana ba-dfa3!" In groups: whoever invited usually pays ("3azamtak" = I\'m inviting you = I\'ll pay). At restaurants: the waiter often hesitates to bring the bill — ask: "Hisaab, 2aziiztna?" = may we have the bill, please? "Dafa3 l-Hisaab" = paid the bill. "bi-idfa3" (he pays regularly) vs "dafa3" (paid, past).'
  },
  {
    q: 'What does "kassar" mean in a money context?',
    opts: ['to steal money', 'to break a bill / give change', 'to exchange currency', 'to spend too much'],
    correct: 1,
    note: '"kassar" = to break a bill / give change (كسّر — from كسر = to break). "Kassarli l-war2a" = break the bill for me / give me change. Lebanese change culture: change ("Si7ife") is notoriously hard to find — small shops often don\'t have it. "Ma fi Si7ife" = no change. "Kassar 3andi" = I\'ll make change for you. The 1000 lira coin used to be standard Si7ife; now with inflation it\'s worthless. Post-crisis: everything\'s in large denominations — breaking bills is a daily challenge.'
  },
  {
    q: 'How do you say "exchange rate" in Lebanese Arabic?',
    opts: ['si3ir l-Sarf', 'Hisaab maSrafi', '3omle', 'dee2'],
    correct: 0,
    note: '"si3ir l-Sarf" = exchange rate (سعر الصرف — si3ir = price/rate, Sarf = exchange/change). Post-2019 Lebanese daily question: "dollar 3ala si3ir addesh?" (what\'s the dollar rate today?). Lebanon has had multiple parallel exchange rates: (1) official rate, (2) Sayrafa platform rate, (3) black market ("souk sawda") rate. Checking WhatsApp groups and websites for the daily dollar rate became routine. "Si3ir l-Sarf tleeh" = the exchange rate went up. "Nzal" = went down.'
  },
  {
    q: 'What does "3al-Hisaab" mean?',
    opts: ['on the bill', 'on account / on credit', 'on sale', 'with the bank'],
    correct: 1,
    note: '"3al-Hisaab" = on account / on credit (عالحساب — 3ala = on, Hisaab = account). Traditional Lebanese shopkeeper culture: trusted customers pay later. "Khod 3al-Hisaab" = take it on account. "Haniyye" = the credit book/tab. Small neighborhood shops still run tabs for regular customers. "Wffit l-Hisaab" = I settled the account. In restaurants: "3al-Hisaab" = charge it to my account. "Hisaab" alone = bill (restaurant). "Hisaab" also = calculation: "Hisaabu maa3o" (his math is with him = he\'s calculating/careful).'
  },
  {
    q: 'How do you say "discount" in Lebanese Arabic?',
    opts: ['ghele', 'khaSSam', 'addesh', 'Dimaane'],
    correct: 1,
    note: '"khaSSam" = discount (خصّم — from خصم = to deduct). "3aTiini khaSSam" = give me a discount. "Fi khaSSam?" = is there a discount? Lebanese bargaining culture: asking for a discount is normal and expected everywhere except supermarkets. Key negotiation phrases: "kasiirli shwayy" (give me a little break), "ma 3andi kteer" (I don\'t have much), "2iddem shi" (offer something). Shopkeepers expect negotiation — the first price is rarely the final price. "Takhfiiid" (reduction) = formal/advertising word for discount.'
  },
  {
    q: 'What does "azme" mean?',
    opts: ['appointment', 'crisis', 'argument', 'decision'],
    correct: 1,
    note: '"azme" = crisis (أزمة — from أزم = to be in hardship). Post-2019: "l-azme" = THE crisis, understood by all Lebanese to mean the financial collapse. "Wil-azme?" = and the crisis? (rhetorical — how are you dealing with everything?). "Min zaman l-azme" = since the crisis. Related: "azme iqtiSaadiyye" (economic crisis), "azme siyaasiyye" (political crisis), "azme kahraba" (electricity crisis). Lebanese dark humor: "shu azme haydaa!" (what a crisis this is!) — used for minor daily problems too. Borrowed to mean any difficult situation.'
  },
];

const MNY_TIPS = [
  { title: 'Lebanese currency basics — lira, dollar, and the crisis', body: 'Lebanon officially uses the Lebanese lira (LL or LBP). But since the 2019 financial collapse, Lebanon effectively operates on dual/triple currency: physical USD ("kesh dollar"), trapped bank dollars ("lollar"), and Lebanese lira. The lira lost over 98% of its value. Key phrases: "addesh l-dollar?" (what\'s the dollar rate?), "btidfa3 b-shu?" (what are you paying in?), "kesh walla transfer?" (cash or transfer?). Always clarify which "dollar" you mean. Fresh USD cash is king in modern Lebanon.' },
  { title: 'Prices and bargaining in Lebanese markets', body: 'Lebanese pricing culture varies by context. Supermarkets: fixed prices, no bargaining. Traditional markets ("souq"), vegetable vendors, small shops: bargaining expected. Start lower than you\'d accept: vendor asks 100K lira → you offer 60K → settle at 75K. Key phrases: "ktiir ghele" (too expensive), "kasiirli shwayy" (knock a bit off), "addesh akhir si3ir?" (what\'s your final price?), "ta3a ma3i" (come with me — implying you\'ll take your business elsewhere). Lebanese vendors appreciate engaged customers — silent acceptance insults them.' },
  { title: 'Banking in Lebanon — a unique situation', body: 'Lebanese banking post-2019: most accounts have withdrawal limits, dollars may be "lollars" (accessible only in lira at official rates), and ATMs often dispense lira only. "ATM" or "Siraaf" = ATM machine. "Sa7ab" (to withdraw) is often followed by disappointment. "Hawwel" (transfer) = domestic or international transfer (Western Union and OMT are popular for receiving money). "Kesh dollar" can be sent via "hawwala" (informal money transfer networks) or Western Union/OMT. Key phrase for money changers ("Sarraafiiin"): "baddi Sarraf dollar" (I want to exchange dollars).' },
  { title: 'Lebanese financial vocabulary for daily life', body: '"Faatura" (bill/invoice) = electricity bill, phone bill, any utility. "Be-l-2aqsaaT" (installments) = very common — phones, appliances, even groceries sometimes. "3al-Hisaab" (on account/tab) = traditional credit at local shops. "Dee2" (debts) = unfortunately common in post-crisis Lebanon. "Dimaane" (guarantee/collateral) = often required for any credit. Key daily interactions: restaurant: "l-Hisaab, 2aziiztna" (the bill please); shop: "b-shu btidfa3?" (what are you paying with?); taxi: "addesh?" (how much?). Financial topics are openly discussed in Lebanese culture — asking about prices is normal.' },
  { title: 'The lira crisis in daily Lebanese speech', body: 'The 2019 financial collapse changed Lebanese Arabic. New vocabulary entered daily speech: "lollar" (trapped bank dollars), "kesh dollar" (fresh USD), "souk sawda" (black market), "azme" (the crisis), "ghelaa" (inflation), "si3ir l-Sarf" (exchange rate — now checked daily). Prices shift constantly: "l-3esh ghele" (food got expensive), "ma fi 2adra" (no purchasing power). Lebanese resilience vocabulary: "3am n2aadum" (we\'re managing/surviving), "mashi l-Hal" (getting by). Dark humor is central: "l-lira min zaman maatit" (the lira died long ago). Understanding this vocabulary connects you to the lived Lebanese experience.' },
];

const MNY_ABOUT = 'Master Lebanese Arabic for money and finance — currency, prices, banking, bargaining, and the unique vocabulary of Lebanon\'s economic reality. Essential for shopping, negotiating, banking, and understanding modern Lebanese daily life.';
