// Run #393 — Lebanese Banking & Finance Coach (bnk)
// Categories: banks-atm | currency | payments | financial-phrases | expressions

const BNK_WORDS = [
  // banks-atm
  { ar: 'مصرف', tr: 'maSraf', en: 'bank (Lebanese word)', cat: 'banks-atm' },
  { ar: 'بنك', tr: 'bank', en: 'bank (common loanword)', cat: 'banks-atm' },
  { ar: 'صراف', tr: 'Sarraaf', en: 'ATM / money changer', cat: 'banks-atm' },
  { ar: 'حساب', tr: '7saab', en: 'account / bill', cat: 'banks-atm' },
  { ar: 'فيزا', tr: 'viiza', en: 'visa card / credit card', cat: 'banks-atm' },
  { ar: 'شيك', tr: 'sheek', en: 'cheque / check (loanword)', cat: 'banks-atm' },
  { ar: 'قرض', tr: '2arD', en: 'loan', cat: 'banks-atm' },
  { ar: 'فائدة', tr: 'faa2ide', en: 'interest (on loan/savings)', cat: 'banks-atm' },
  // currency
  { ar: 'ليرة', tr: 'liira', en: 'lira (Lebanese pound)', cat: 'currency' },
  { ar: 'دولار', tr: 'dolaar', en: 'dollar (USD — widely used in Lebanon)', cat: 'currency' },
  { ar: 'صرف', tr: 'Sarf', en: 'exchange rate / currency exchange', cat: 'currency' },
  { ar: 'ورقة', tr: 'war2a', en: 'bill / banknote (lit. paper)', cat: 'currency' },
  { ar: 'مسكوكة', tr: 'maskuuke', en: 'coin', cat: 'currency' },
  { ar: 'سعر الصرف', tr: 'si3r iS-Sarf', en: 'exchange rate', cat: 'currency' },
  { ar: 'دولرة', tr: 'dalwara', en: 'dollarization (Lebanon\'s dual-currency reality)', cat: 'currency' },
  { ar: 'كاش', tr: 'kaash', en: 'cash (loanword)', cat: 'currency' },
  // payments
  { ar: 'دفع', tr: 'dafa3', en: 'to pay', cat: 'payments' },
  { ar: 'تحويل', tr: 'ta7wiil', en: 'transfer / wire transfer', cat: 'payments' },
  { ar: 'فاتورة', tr: 'faatuura', en: 'invoice / utility bill', cat: 'payments' },
  { ar: 'ويسترن يونيون', tr: 'western yuunyon', en: 'Western Union (diaspora remittances)', cat: 'payments' },
  { ar: 'OMT', tr: 'oo em tii', en: 'OMT — Lebanon\'s main money transfer service', cat: 'payments' },
  { ar: 'بيكاش', tr: 'bikaash', en: 'BoM/BOK Cash — mobile payment app Lebanon', cat: 'payments' },
  { ar: 'خصم', tr: 'khaSm', en: 'discount / deduction', cat: 'payments' },
  { ar: 'إيصال', tr: '2iiSaal', en: 'receipt', cat: 'payments' },
  // financial-phrases
  { ar: 'شو السعر؟', tr: 'shu is-si3r?', en: 'what\'s the price?', cat: 'financial-phrases' },
  { ar: 'غالي كتير', tr: 'ghaalii ktiir', en: 'very expensive', cat: 'financial-phrases' },
  { ar: 'رخيص', tr: 'rkhiiS', en: 'cheap / inexpensive', cat: 'financial-phrases' },
  { ar: 'معي مصاري', tr: 'ma3ii maSaari', en: 'I have money (Lebanese word for money)', cat: 'financial-phrases' },
  { ar: 'ما معي مصاري', tr: 'maa ma3ii maSaari', en: 'I don\'t have money / I\'m broke', cat: 'financial-phrases' },
  { ar: 'كم بدو؟', tr: 'kaam baddo?', en: 'how much does it cost?', cat: 'financial-phrases' },
  { ar: 'بدي أدفع', tr: 'biddi 2adfa3', en: 'I want to pay', cat: 'financial-phrases' },
  { ar: 'عندك فكة؟', tr: '3andak fakke?', en: 'do you have change? (coins/small bills)', cat: 'financial-phrases' },
  // expressions
  { ar: 'مصاري', tr: 'maSaari', en: 'money (Lebanese colloquial word)', cat: 'expressions' },
  { ar: 'فلوس', tr: 'fluus', en: 'money (general colloquial)', cat: 'expressions' },
  { ar: 'بالدولار أو بالليرة؟', tr: 'bil-dolaar aw bil-liira?', en: 'in dollars or liras? (Lebanon\'s daily question)', cat: 'expressions' },
  { ar: 'على حسابي', tr: '3ala 7saabi', en: 'it\'s on me / my treat', cat: 'expressions' },
  { ar: 'نقسّم', tr: 'n2assim', en: 'let\'s split (the bill)', cat: 'expressions' },
  { ar: 'عالنصف', tr: '3an-nuSS', en: 'fifty-fifty / half and half', cat: 'expressions' },
  { ar: 'ما بعرف أحسب', tr: 'maa ba3rif a7sib', en: 'I can\'t calculate (said re: lira inflation)', cat: 'expressions' },
  { ar: 'البنك سكّر', tr: 'il-bank sakkar', en: 'the bank closed (ref. to 2019 bank crisis)', cat: 'expressions' },
];

const BNK_DRILLS = [
  {
    q: 'What is "maSaari"?',
    opts: ['maSaari', 'fluus', 'kaash', 'war2a'],
    correct: 0,
    note: '"maSaari" (مصاري) — money, specifically in Lebanese colloquial. Different from fuSHa "maal" or colloquial "fluus" — "maSaari" is distinctly Lebanese. "Ma3ii maSaari" (I have money). The word comes from "maSaari" = gold coins in Ottoman Turkish. Lebanese use it for any money: "shu 3andak maSaari?" (how much money do you have?)',
  },
  {
    q: 'What is "Sarraaf"?',
    opts: ['Sarraaf', 'maSraf', 'bank', '7saab'],
    correct: 0,
    note: '"Sarraaf" (صراف) — ATM, or a money changer/currency exchange person. The word originally meant a money changer (from Ottoman banking). Now used for ATM machines: "ruu7 3al-Sarraaf" (go to the ATM). In Lebanon\'s informal economy, the "Sarraaf" (money changer on the street) also sets the real exchange rate, which often differs from the official rate.',
  },
  {
    q: 'What does "bil-dolaar aw bil-liira?" mean?',
    opts: ['bil-dolaar aw bil-liira?', '3ala 7saabi', 'n2assim', 'shu is-si3r?'],
    correct: 0,
    note: '"bil-dolaar aw bil-liira?" (بالدولار أو بالليرة؟) — in dollars or liras? Lebanon\'s most ubiquitous financial question since the 2019 economic crisis. After the lira collapsed (losing 95%+ of its value), Lebanon became a two-currency economy. Prices, rents, salaries are quoted in both. "Fresh" dollars (foreign transfer) are more valuable than "lollar" dollars (stuck in Lebanese banks).',
  },
  {
    q: 'What does "3ala 7saabi" mean?',
    opts: ['3ala 7saabi', 'n2assim', '3an-nuSS', 'biddi 2adfa3'],
    correct: 0,
    note: '"3ala 7saabi" (على حسابي) — it\'s on my account / my treat / I\'m paying. Lebanese hospitality means fighting over who pays the bill is a social ritual. "La2, 3ala 7saabi" (no, it\'s on me!) is said insistently. Accepting too easily is rude — protest at least once before letting someone pay. The back-and-forth over bills is a performance of generosity.',
  },
  {
    q: 'What is "dalwara"?',
    opts: ['dalwara', 'Sarf', 'si3r iS-Sarf', 'liira'],
    correct: 0,
    note: '"dalwara" (دولرة) — dollarization. Lebanon\'s unique economic condition where the USD became the dominant currency in daily transactions after the 2019 financial collapse. Rent, groceries, fuel — all quoted in dollars. Even street vendors use a "kiosk rate" to convert. Lebanon went from being proud of its stable pound to a fully dollarized informal economy.',
  },
  {
    q: 'What is "faatuura"?',
    opts: ['faatuura', '2iiSaal', 'sheek', 'war2a'],
    correct: 0,
    note: '"faatuura" (فاتورة) — invoice or utility bill. From Italian "fattura" (invoice) via Ottoman Turkish. In Lebanon: "faatuurat il-kahraba" (electricity bill), "faatuurat il-maay" (water bill). Lebanese utility bills are notoriously complex due to the parallel private generator system that supplements state electricity. "Faatuura" can also mean a restaurant bill.',
  },
  {
    q: 'What does "3andak fakke?" mean?',
    opts: ['3andak fakke?', 'kaam baddo?', 'shu is-si3r?', 'ghaalii ktiir'],
    correct: 0,
    note: '"3andak fakke?" (عندك فكة؟) — do you have change? Essential Lebanese phrase. "Fakke" = small change, coins, or small bills. Lebanon\'s cash economy means constant change-making. "Maa 3andi fakke" (I don\'t have change) is a common shopkeeper refrain. In the hyper-inflation era, "fakke" takes on new meaning as notes constantly redenominate.',
  },
  {
    q: 'What is "ta7wiil"?',
    opts: ['ta7wiil', 'western yuunyon', 'oo em tii', 'bikaash'],
    correct: 0,
    note: '"ta7wiil" (تحويل) — transfer, wire transfer. "Ta7wiil maSrafi" = bank transfer. In Lebanon, the diaspora sends massive remittances: Lebanon receives one of the world\'s highest remittance-to-GDP ratios. "Western Union" and "OMT" (a local competitor) handle billions annually. "Ta7wiil min hal-barra" (transfer from abroad) is critical for many Lebanese families\' survival.',
  },
  {
    q: 'What does "il-bank sakkar" mean?',
    opts: ['il-bank sakkar', 'maa ma3ii maSaari', 'maa ba3rif a7sib', '2arD'],
    correct: 0,
    note: '"il-bank sakkar" (البنك سكّر) — the bank closed/locked. Referring to the 2019 Lebanese banking crisis when banks literally locked depositors out of their accounts. Lebanese depositors lost access to billions of dollars. "MaSaari 3and il-bank" (money stuck in the bank) became a tragedy — people couldn\'t access their own savings for years.',
  },
  {
    q: 'What is "2arD"?',
    opts: ['2arD', 'faa2ide', '7saab', 'viiza'],
    correct: 0,
    note: '"2arD" (قرض) — loan. "2arD min il-maSraf" = bank loan. Before the 2019 crisis, Lebanese banks offered easy loans for housing and cars. "Faa2ide" (interest) on these loans became catastrophic when the lira collapsed — borrowers found their USD-denominated loans now cost 20x in lira terms. The banking crisis transformed "2arD" from opportunity to burden.',
  },
];

const BNK_TIPS = [
  'Lebanon operates a de facto dual-currency system: Lebanese lira (LL) and US dollars (USD). Prices are often quoted in both. The "official rate," "Sayrafa rate," and "black market rate" have all differed significantly. Always ask "bil-dolaar aw bil-liira?" and clarify which dollar — "fresh" (foreign transfer) or "lollar" (trapped in Lebanese banks). Understanding this is essential for any transaction in Lebanon.',
  'The 2019 Lebanese banking crisis is the defining financial event of modern Lebanon. Banks froze dollar accounts, preventing withdrawals. The lira lost 95%+ of its value. Lebanese people lost life savings. Understanding "il-bank sakkar" (the bank locked up) is not just financial vocabulary — it\'s an emotional and political reality that every Lebanese person carries. When discussing money in Lebanon, this context is always present.',
  'Cash is king in Lebanon\'s post-crisis economy. Card payments often fail or use unfavorable rates. ATMs ("Sarraaf") may give lira or dollars depending on the bank and account type. Western Union and OMT offices on every corner process remittances from the diaspora — these cash transfers sustain many Lebanese families. "Kaash" (cash) became the only reliable currency after 2019.',
  '"3ala 7saabi" (on my account/treat) is Lebanese hospitality in financial form. Fighting over who pays the bill at restaurants is a cultural performance. The person who invited ("3azam") is expected to pay, but everyone protests. Accepting too graciously is considered rude. The pushing back and forth ("la2, 3ala 7saabi!") is not performative — it\'s how respect and affection are expressed through the act of paying.',
  'Lebanese financial vocabulary mixes Arabic, Ottoman Turkish, French, and English loanwords. "maSraf" (bank) is Arabic; "Sarraaf" is Ottoman; "faatuura" is from Italian via Ottoman; "viiza/kaash/sheek" are anglophone loanwords; "OMT/Western Union" are brand names that became generic. This layering reflects Lebanon\'s history as a commercial crossroads — each empire left its financial vocabulary behind.',
];

const BNK_ABOUT = 'Lebanese banking and financial culture is shaped by a history of resilience, creativity, and ultimately a devastating crash. For decades, Lebanon\'s banks were trusted across the Arab world — a "Switzerland of the Middle East" known for financial sophistication and banking secrecy. Lebanese banking vocabulary reflects this history: sophisticated Arabic terms mixed with Ottoman, French, and English loanwords. Then came the 2019 financial collapse — banks froze deposits, the lira collapsed, and Lebanese people lost a generation of savings. Today, Lebanese financial culture navigates two realities: the formal banking system (now largely dysfunctional) and the informal cash economy (dollars, Western Union, OMT, street money changers). Understanding Lebanese money talk means understanding both the pride of a once-sophisticated financial center and the trauma of its betrayal.';
