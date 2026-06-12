// R624 — NEW FEATURE: Lebanese Money & Banking (mny)

const FNC_CATS = [
  { id: 'cash',    label: '💵 Cash & Prices' },
  { id: 'bank',    label: '🏦 Banking' },
  { id: 'crisis',  label: '📉 Economic Crisis' },
  { id: 'haggle',  label: '🤝 Haggling' },
];

const FNC_WORDS = [
  // Cash & Prices
  { id: 'mny01', cat: 'cash', ar: 'مصاري', tr: 'maSari', en: 'Money (colloquial)', note: 'The everyday Lebanese word for money. "3ando maSari" = he has money. More common than "flus".' },
  { id: 'mny02', cat: 'cash', ar: 'الليرة', tr: 'l-lire', en: 'The lira (Lebanese pound)', note: 'Lebanon\'s currency. After 2019, massively devalued. "karakib l-lire" = the lira is collapsing.' },
  { id: 'mny03', cat: 'cash', ar: 'الدولار', tr: 'l-dollar', en: 'The dollar (USD)', note: 'Since the crisis, the dollar dominates. "b-dollar willa b-lire?" = in dollars or lira?' },
  { id: 'mny04', cat: 'cash', ar: 'بكم هيدا', tr: 'b-kam hayda', en: 'How much is this?', note: 'The essential shopping phrase. "b-kam" = for how much? "hayda" = this.' },
  { id: 'mny05', cat: 'cash', ar: 'غالي', tr: 'ghali', en: 'Expensive', note: '"ghali ktir!" = very expensive! A constant Lebanese reaction to prices.' },
  { id: 'mny06', cat: 'cash', ar: 'رخيص', tr: 'rkhis', en: 'Cheap / inexpensive', note: '"hali2 rkhis" = it\'s cheap now. "rkhis la-hal-2awiye" = cheap for this quality.' },
  { id: 'mny07', cat: 'cash', ar: 'فكة', tr: 'fakke', en: 'Change (coins)', note: '"fi fakke ma3ak?" = do you have change? "ma fi fakke" = no change (extremely common).' },
  { id: 'mny08', cat: 'cash', ar: 'فاتورة', tr: 'fatura', en: 'Bill / invoice', note: '"2eddi l-fatura" = bring the bill (in a restaurant). Also: receipt.' },
  // Banking
  { id: 'mny09', cat: 'bank', ar: 'المصرف', tr: 'l-masrif', en: 'The bank', note: 'Lebanese Arabic for bank. "ra7t 3al-masrif" = went to the bank. Also "l-bank" (from French).' },
  { id: 'mny10', cat: 'bank', ar: 'الحساب', tr: 'l-7isab', en: 'The account / the bill', note: 'Dual meaning: bank account AND the bill at a restaurant. Context makes it clear.' },
  { id: 'mny11', cat: 'bank', ar: 'سحب', tr: 'sa7ab', en: 'Withdrew (money)', note: '"sa7abt maSari min l-ATM" = I withdrew money from the ATM.' },
  { id: 'mny12', cat: 'bank', ar: 'حوّل', tr: '7awwal', en: 'Transferred (money)', note: '"7awwil-li" = transfer me (money). Western Union is widely used due to banking crisis.' },
  { id: 'mny13', cat: 'bank', ar: 'الفائدة', tr: 'l-fa2ide', en: 'The interest rate', note: 'Lebanese banks offered very high interest rates before the 2019 crisis — "l-fa2ide 3aliye".' },
  { id: 'mny14', cat: 'bank', ar: 'مجمّد', tr: 'mujammad', en: 'Frozen (account)', note: '"7isabna mujammad" = our account is frozen. The bitter reality for most Lebanese since 2019.' },
  // Economic Crisis
  { id: 'mny15', cat: 'crisis', ar: 'الأزمة', tr: 'l-2azme', en: 'The crisis', note: '"l-2azme" refers specifically to Lebanon\'s post-2019 economic collapse. No further explanation needed.' },
  { id: 'mny16', cat: 'crisis', ar: 'دولرة', tr: 'dalwale', en: 'Dollarization', note: 'The shift to dollar-based pricing. "l-balad mdalwal" = the country has dollarized.' },
  { id: 'mny17', cat: 'crisis', ar: 'تضخم', tr: 'tadakhkhum', en: 'Inflation', note: 'Lebanon had one of the world\'s worst inflation rates post-2019. "l-tadakhkhum mashkle" = inflation is a problem.' },
  { id: 'mny18', cat: 'crisis', ar: 'على سعر الصرف', tr: '3ala si3r l-Sarf', en: 'At the exchange rate', note: '"3ala 2ayy si3r?" = at what rate? Multiple exchange rates existed simultaneously in Lebanon.' },
  { id: 'mny19', cat: 'crisis', ar: 'الكاش', tr: 'l-kash', en: 'Cash (physical)', note: '"biddi l-kash" = I want cash. Since bank accounts froze, cash became king in Lebanon.' },
  { id: 'mny20', cat: 'crisis', ar: 'اقتصاد', tr: 'i2tiSad', en: 'Economy', note: '"l-i2tiSad mkharbat" = the economy is ruined. A constant topic of Lebanese conversation.' },
  // Haggling
  { id: 'mny21', cat: 'haggle', ar: 'آخر سعر', tr: '2akhir si3r', en: 'Final price / last price', note: '"2akhir si3r?" = what\'s your final price? The classic haggling opener in Lebanese markets.' },
  { id: 'mny22', cat: 'haggle', ar: 'خلّيني فكّر', tr: 'khalliini fakkar', en: 'Let me think about it', note: 'Useful delay tactic while haggling. Often triggers a better offer from the seller.' },
  { id: 'mny23', cat: 'haggle', ar: 'نازل معي', tr: 'naazil ma3i', en: 'Come down (in price) with me', note: '"naazil ma3i shway?" = will you come down a bit? A polite way to ask for a discount.' },
  { id: 'mny24', cat: 'haggle', ar: 'بعمل خسارة', tr: 'b-3ammil khasaara', en: 'I\'m taking a loss (seller says)', note: '"b-3ammil khasaara 3aleik" = I\'m losing money for you. Classic seller line in Lebanese haggling.' },
  { id: 'mny25', cat: 'haggle', ar: 'كاش أو كريدي', tr: 'kash 2aw kridi', en: 'Cash or credit card?', note: 'The payment question. "kash" = cash preferred. "kridi" = credit. Dollar cash gets best deals.' },
  { id: 'mny26', cat: 'haggle', ar: 'خسّ شوي', tr: 'khass shwai', en: 'Reduce a little', note: '"khass shwai 3aleiye" = reduce it a little for me. Direct haggling request.' },
  { id: 'mny27', cat: 'haggle', ar: 'بزبون', tr: 'bizzabun', en: 'As a loyal customer (discount)', note: '"3emilha bizzabun" = do it as a loyal customer discount. Recognizes repeat-customer relationship.' },
  { id: 'mny28', cat: 'haggle', ar: 'مبروك النقوط', tr: 'mabrook l-no2uT', en: 'Bless the money gifts (wedding/graduation)', note: 'no2uT = cash gifts at celebrations. "mabrook l-no2uT" is said when receiving gift envelopes.' },
];

const FNC_DRILLS = [
  { q: 'How do you say "how much is this?" in Lebanese?', opts: ['b-kam l-dollar?', 'b-kam hayda?', '2akhir si3r?', 'fi fakke?'], ans: 1, exp: '"b-kam hayda?" = how much is this? b-kam = for how much, hayda = this.' },
  { q: 'What is "maSari"?', opts: ['The bank', 'Change (coins)', 'Money (colloquial)', 'The bill'], ans: 2, exp: 'maSari = money. The everyday Lebanese Arabic word. "3ando maSari" = he has money.' },
  { q: 'What does "2akhir si3r?" mean in a Lebanese market?', opts: ['How much did you pay?', 'Is it expensive?', 'What\'s your final price?', 'Can I haggle?'], ans: 2, exp: '"2akhir si3r?" = what\'s your final price? The classic haggling opener.' },
  { q: 'What does "l-7isab mujammad" mean?', opts: ['The bill is paid', 'The account is frozen', 'The interest is high', 'The bank is closed'], ans: 1, exp: '"mujammad" = frozen. "l-7isab mujammad" = the account is frozen. Bitter reality for Lebanese savers.' },
  { q: 'How do you ask for a small price reduction?', opts: ['b-3ammil khasaara', 'khalliini fakkar', 'khass shwai', 'naazil ma3i'], ans: 2, exp: '"khass shwai" = reduce a little. Direct request for discount. shwai = a little.' },
  { q: 'What is "l-2azme" in Lebanese context?', opts: ['The exchange rate', 'The economic crisis (post-2019)', 'Inflation', 'Dollarization'], ans: 1, exp: '"l-2azme" = the crisis. In Lebanon it refers specifically to the post-2019 financial collapse.' },
  { q: 'How do you say "do you have change?"', opts: ['fi dollar ma3ak?', 'fi fakke ma3ak?', 'fi kash ma3ak?', 'fi maSari ma3ak?'], ans: 1, exp: '"fi fakke ma3ak?" = do you have change? Fakke = coins/small change. Very common in Lebanon.' },
  { q: 'What does "naazil ma3i shway?" mean?', opts: ['Come with me', 'Will you come down in price a little?', 'Let me think', 'I\'m taking a loss'], ans: 1, exp: '"naazil ma3i shway?" = will you come down in price a little? Polite haggling request.' },
  { q: 'What is "dalwale"?', opts: ['Inflation', 'Frozen accounts', 'Dollarization', 'The crisis'], ans: 2, exp: '"dalwale" = dollarization. Lebanon shifted to dollar-based pricing after the lira collapse.' },
  { q: 'What does a seller mean by "b-3ammil khasaara 3aleik"?', opts: ['You owe me money', 'I\'m taking a loss for you', 'I\'ll give you a discount', 'The price is final'], ans: 1, exp: '"b-3ammil khasaara 3aleik" = I\'m taking a loss for you. Classic seller line to resist haggling.' },
  { q: 'How do you say "bring the bill" in a Lebanese restaurant?', opts: ['2eddi l-7isab', '2eddi l-fatura', 'khalliini fakkar', 'b-kam hayda?'], ans: 1, exp: '"2eddi l-fatura" = bring the bill/invoice. fatura = bill, invoice, receipt.' },
  { q: 'What is "sa7ab" in banking context?', opts: ['Deposited', 'Transferred', 'Withdrew', 'Borrowed'], ans: 2, exp: '"sa7ab" = withdrew. "sa7abt maSari" = I withdrew money.' },
  { q: 'What does "bizzabun" mean in a negotiation?', opts: ['At the market price', 'As a loyal customer discount', 'Cash only', 'Final price'], ans: 1, exp: '"bizzabun" = as a loyal customer. "3emilha bizzabun" = do it as a regular customer favor.' },
  { q: 'What is "l-kash" and why is it important in Lebanon?', opts: ['ATM cash machines', 'Physical cash, king since bank freezes', 'Dollar exchange', 'Credit cards'], ans: 1, exp: '"l-kash" = physical cash. Since bank accounts froze post-2019, cash became the preferred payment.' },
  { q: 'How do you say "expensive!" in Lebanese?', opts: ['rkhis!', 'ghali ktir!', 'mujammad!', 'khasaara!'], ans: 1, exp: '"ghali ktir!" = very expensive! The Lebanese reaction to inflated prices. ghali = expensive.' },
];

const FNC_TIPS = [
  { title: 'Lebanon\'s currency chaos', body: 'Lebanon has had multiple simultaneous exchange rates: the official "lollar" rate, the black market rate, the Sayrafa platform rate, the fresh dollar rate. When paying, always clarify: "3ala 2ayy si3r?" (at which rate?). Dollar cash usually gets the best deal.' },
  { title: 'Haggling culture', body: 'Haggling is normal in Lebanese markets (suq), small shops, and with service providers. The magic opener: "2akhir si3r?" (final price?). Then "naazil ma3i" (come down with me) and "khass shwai" (reduce a little). At shops: "3emilha bizzabun" (loyal customer rate).' },
  { title: 'Cash is king post-crisis', body: 'Since 2019, most Lebanese bank accounts are "mujammode" (frozen) or limited to tiny withdrawals. "l-kash" (physical cash) rules. Merchants prefer cash and often give better prices for it: "b-dollar kash?" = in dollar cash? Gets discounts.' },
  { title: 'The "fakke" problem', body: '"Ma fi fakke" (no change) is a daily phrase in Lebanon. Prices shift constantly and small denomination coins disappeared. Shops use chocolate or mints as change. Always have small bills ready, or say "ma ma3i ghir hayda" (I only have this).' },
  { title: 'Restaurant bill phrases', body: 'In restaurants: "2eddi l-fatura" = bring the bill. "n7asib" or "l-7isab" = let\'s pay / the check. "3alayi l-7isab" = the bill is on me (I\'m paying). The Lebanese classic debate about who pays: "ma 7ada bitruk l-ta2le ta l-ghero" = no one leaves the bill for someone else.' },
  { title: 'no2uT — cash gift culture', body: 'At Lebanese weddings, graduations, and celebrations, guests give "no2uT" — envelopes of cash. The host says "mabrook l-no2uT" (bless the cash gifts). The amount is noted and reciprocated at the giver\'s next occasion. It\'s a social ledger, not charity.' },
];
