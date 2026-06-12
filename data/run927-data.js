// R927 — NEW FEATURE: Lebanese Bargaining & Market Negotiation (bgn)

const BGN_WORDS = [
  { ar: 'بكم هاد؟', tr: 'bi-kam haad?', en: 'how much is this?' },
  { ar: 'غالي كتير', tr: 'ghali ktiir', en: 'very expensive' },
  { ar: 'رخيص', tr: 'rkhiiS', en: 'cheap / inexpensive' },
  { ar: 'خفف عليّ', tr: 'khaffif 3alayye', en: 'give me a discount / go easy on me' },
  { ar: 'عطيني حق الصديق', tr: '3Tiini 7a22 eS-Sdiiq', en: 'give me the friends\' price' },
  { ar: 'مش معي هالقدر', tr: 'mish ma3i hal-2adr', en: 'I don\'t have that much on me' },
  { ar: 'بدفعلك نقدًا', tr: 'b-dfa3-lak na2dan', en: 'I\'ll pay you cash' },
  { ar: 'آخر كلمة', tr: 'aakhir kilme', en: 'final price / last word' },
  { ar: 'بدّي كتير منو', tr: 'baddii ktiir minno', en: 'I want a lot of it (bulk discount hint)' },
  { ar: 'ما في أحسن منو؟', tr: 'maa fii a7san minno?', en: 'is there nothing better?' },
  { ar: 'شو أحسن ما عندك؟', tr: 'shu a7san ma 3andak?', en: 'what\'s the best you have?' },
  { ar: 'حطلي هالشي مجانًا', tr: '7uTT-ili hal-shi majjaanan', en: 'throw this in for free' },
  { ar: 'رح آخد اثنين', tr: 'ra7 aakhod tineen', en: 'I\'ll take two (leverage for deal)' },
  { ar: 'ما في تنزيل؟', tr: 'maa fii tanzeel?', en: 'no discount?' },
  { ar: 'هاد ما يسوى هيك', tr: 'haad maa ysawwa heek', en: 'this isn\'t worth that much' },
  { ar: 'قديم / متآكل', tr: '2adiim / mta2akkal', en: 'old / worn out (justifying lower price)' },
  { ar: 'بالجملة', tr: 'bil-jumle', en: 'wholesale / in bulk' },
  { ar: 'جملة وتفصيل', tr: 'jumle w-tafSiil', en: 'wholesale and retail' },
  { ar: 'لازم أسأل مرتي', tr: 'laazim as2al marti', en: 'I need to ask my wife (stalling tactic)' },
  { ar: 'رح فكر', tr: 'ra7 fakkar', en: 'I\'ll think about it (negotiation pressure)' },
  { ar: 'بكرا برجع', tr: 'bukra brja3', en: 'I\'ll come back tomorrow (exit strategy)' },
  { ar: 'في غيرك ببيع أرخص', tr: 'fii gheerak b-bii3 arkhaS', en: 'others sell it cheaper' },
  { ar: 'مقارنة بالسوق', tr: 'mu2aarne bis-suu2', en: 'compared to the market' },
  { ar: 'شو أدنى سعر؟', tr: 'shu adna si3r?', en: 'what\'s the lowest price?' },
  { ar: 'ببوس إيدك', tr: 'b-buus iidhak', en: 'I kiss your hand (flattery for better deal)' },
  { ar: 'حلو الحلو', tr: '7elo el-7elo', en: 'sweeten the deal' },
  { ar: 'والله ما عندي أكتر', tr: 'waLLa maa 3andi aktar', en: 'I swear I don\'t have more' },
  { ar: 'بيطلع معي بس...', tr: 'byeT-la3 ma3i bass...', en: 'I only have... (offering a number)' }
];

const BGN_DRILLS = [
  { q: 'How do you ask "how much is this?" in Lebanese?', opts: ['ghali ktiir', 'bi-kam haad?', 'maa fii tanzeel?', 'rkhiiS'], ans: 1 },
  { q: 'What does "3Tiini 7a22 eS-Sdiiq" mean?', opts: ['Give me the wholesale price', 'Give me the friends\' price', 'This is too expensive', 'I\'ll pay cash'], ans: 1 },
  { q: 'What is "b-dfa3-lak na2dan"?', opts: ['I\'ll come back tomorrow', 'I\'ll think about it', 'I\'ll pay you cash', 'Give me a discount'], ans: 2 },
  { q: 'How do you say "very expensive"?', opts: ['rkhiiS', 'ghali ktiir', 'maa fii a7san minno', 'bil-jumle'], ans: 1 },
  { q: 'What does "ra7 fakkar" mean in negotiation?', opts: ['The final price', 'I\'ll pay cash', 'I\'ll think about it (pressure tactic)', 'Throw this in free'], ans: 2 },
  { q: 'What is "aakhir kilme"?', opts: ['Cheap price', 'Final price / last word', 'Wholesale price', 'Friends\' price'], ans: 1 },
  { q: 'How do you say "no discount?" in Lebanese?', opts: ['ghali ktiir', 'bil-jumle', 'maa fii tanzeel?', 'bi-kam haad?'], ans: 2 },
  { q: 'What does "fii gheerak b-bii3 arkhaS" mean?', opts: ['I don\'t have that much', 'Others sell it cheaper', 'Throw this in free', 'What\'s the best you have?'], ans: 1 },
  { q: 'What is "7uTT-ili hal-shi majjaanan"?', opts: ['This isn\'t worth that much', 'Throw this in for free', 'I\'ll take two', 'Give me the wholesale price'], ans: 1 },
  { q: 'How do you say "I\'ll come back tomorrow" (exit strategy)?', opts: ['ra7 fakkar', 'bukra brja3', 'laazim as2al marti', 'b-buus iidhak'], ans: 1 },
  { q: 'What does "b-buus iidhak" mean?', opts: ['I\'ll pay cash', 'I kiss your hand (flattery)', 'I don\'t have more', 'I\'ll take two'], ans: 1 },
  { q: 'What is "bil-jumle"?', opts: ['Retail price', 'Wholesale / in bulk', 'Final price', 'Cash payment'], ans: 1 },
  { q: 'What does "haad maa ysawwa heek" mean?', opts: ['This is the best price', 'This isn\'t worth that much', 'I have a lot of this', 'Compared to the market'], ans: 1 },
  { q: 'What is "shu adna si3r?"', opts: ['How much is this?', 'No discount?', 'What\'s the lowest price?', 'Is there nothing better?'], ans: 2 },
  { q: 'What does "waLLa maa 3andi aktar" mean?', opts: ['The price is final', 'I swear I don\'t have more', 'I\'ll think about it', 'Give me the friends\' price'], ans: 1 },
  { q: 'How do you say "I only have..." when offering a number?', opts: ['maa fii tanzeel?', 'byeT-la3 ma3i bass...', 'mish ma3i hal-2adr', '7elo el-7elo'], ans: 1 }
];

const BGN_TIPS = [
  { title: 'Bargaining Is a Social Contract', body: 'In Lebanese markets — especially in the old souks of Tripoli, the antique dealers of Furn el-Chebbak, or any small hardware store — not bargaining is almost an insult. The price on the tag (if there is one) is an opener, never a ceiling. The seller EXPECTS you to counter. A buyer who pays the first price is either a tourist or not serious. The whole exchange is performative: both sides know the real price exists somewhere in the middle. You arrive at it through theater.' },
  { title: 'The Lebanese Negotiation Toolkit', body: '"3Tiini 7a22 eS-Sdiiq" (give me the friends\' price) works because Lebanon is a relational society — everyone is connected through a web of favors, neighborhoods, and family. Invoking friendship activates that network. "b-dfa3-lak na2dan" (I\'ll pay cash) is powerful because it removes the risk of bounced checks and bank delays. "bukra brja3" (I\'ll come back tomorrow) is the ultimate pressure move — the seller knows you mean it and that you might really go elsewhere.' },
  { title: 'The Drama of Not Having Enough', body: '"mish ma3i hal-2adr" (I don\'t have that much on me) and "byeT-la3 ma3i bass..." (I only have...) are classic moves. Even if your wallet is full, you physically count out the money in front of the seller, lay it on the counter, spread your hands wide: this is it, take it or leave it. "waLLa maa 3andi aktar" (I swear I don\'t have more) invokes God as a witness to your poverty — in a high-trust society, this still carries weight.' },
  { title: 'Flattery and Pressure Tactics', body: '"b-buus iidhak" (I kiss your hand) is hyperbolic respect — used to soften a counter-offer or beg for mercy on the price. Completely accepted. "7elo el-7elo" (sweeten the deal) is a charm offensive: you\'re not asking for a discount, you\'re inviting generosity. "laazim as2al marti" (I need to ask my wife) is a universal stall — it signals you\'re almost there, you just need cover. The seller might drop the price slightly to close before you "consult."' },
  { title: 'Market Words You Need', body: '"bil-jumle" (wholesale) and "jumle w-tafSiil" (wholesale and retail) — Lebanese merchants use these constantly. If you\'re buying multiple units, explicitly invoke wholesale: "ana baajer bil-jumle" (I\'m buying wholesale). "tanzeel" (discount/markdown) appears in window signs during sales seasons. "aakhir kilme" (last word / final price) signals that the seller is done negotiating — respect it or walk. "mu2aarne bis-suu2" (compared to the market) is the intellectual appeal: let\'s be rational about the real market price.' }
];
