// R540 — NEW FEATURE: Lebanese Haggling & Market Bargaining coach (prefix: hgl)

const HGL_WORDS = [
  // cat: price
  { ar: 'قديش؟', tr: '2addiish?', en: 'How much? (price inquiry — most common market opener)', cat: 'price' },
  { ar: 'بكم هيدا؟', tr: 'bi-kam hayda?', en: 'How much is this?', cat: 'price' },
  { ar: 'غالي', tr: 'ghali', en: 'Expensive', cat: 'price' },
  { ar: 'رخيص', tr: 'rkhiiS', en: 'Cheap / inexpensive', cat: 'price' },
  { ar: 'السعر', tr: 'el-si3r', en: 'The price', cat: 'price' },
  { ar: 'المبلغ', tr: 'el-mablaGH', en: 'The amount / sum', cat: 'price' },
  { ar: 'هيدا غالي كتير', tr: 'hayda ghali ktiir', en: 'This is very expensive', cat: 'price' },
  { ar: 'ما رح دفع هيك', tr: 'ma ra7 dfaa3 heek', en: 'I won\'t pay that much', cat: 'price' },

  // cat: offer
  { ar: 'عطيني بـ...', tr: '3Tiini bi-...', en: 'Give it to me for... (making an offer)', cat: 'offer' },
  { ar: 'آخر سعر', tr: 'aakher si3r', en: 'Final price (seller\'s last offer)', cat: 'offer' },
  { ar: 'منصف', tr: 'munSif', en: 'Fair / reasonable (price)', cat: 'offer' },
  { ar: 'خفف شوي', tr: 'khaffif shwayy', en: 'Lower it a bit (bring the price down)', cat: 'offer' },
  { ar: 'حط عليي', tr: '7uTT 3alayy', en: 'Give me a deal / throw in something extra', cat: 'offer' },
  { ar: 'خليها بـ...', tr: 'khalliha bi-...', en: 'Make it... (proposing a price)', cat: 'offer' },
  { ar: 'اتفقنا', tr: 'ttafa2na', en: 'We agreed / deal! (sealing the bargain)', cat: 'offer' },
  { ar: 'ماشي', tr: 'maashi', en: 'OK / fine / we have a deal', cat: 'offer' },

  // cat: pressure
  { ar: 'رايح', tr: 'raaye7', en: 'I\'m leaving (threat to walk away)', cat: 'pressure' },
  { ar: 'في غيرك', tr: 'fii gheirak', en: 'There are others (other sellers have it)', cat: 'pressure' },
  { ar: 'ما بدي', tr: 'ma baddi', en: 'I don\'t want it (feigned disinterest)', cat: 'pressure' },
  { ar: 'بكون بدهم يعطوني أرخص', tr: 'bikuun baddun ya3Tuuni arkhaS', en: 'They\'ll probably give it cheaper (elsewhere)', cat: 'pressure' },
  { ar: 'تعا بكرا', tr: 'ta3a bukra', en: 'Come back tomorrow (seller stalling)', cat: 'pressure' },

  // cat: quality
  { ar: 'مضمون', tr: 'maDmuun', en: 'Guaranteed / reliable quality', cat: 'quality' },
  { ar: 'أصلي', tr: '2aSli', en: 'Original / authentic (not a copy)', cat: 'quality' },
  { ar: 'مش زابط', tr: 'mish zaabTi', en: 'Not right / not working properly', cat: 'quality' },
  { ar: 'بضاعة مليحة', tr: 'biDaa3a mliH7e', en: 'Good merchandise / quality goods', cat: 'quality' },
  { ar: 'تقيل', tr: 'ta2iil', en: 'Thick/heavy (describing solid construction — positive)', cat: 'quality' },

  // cat: market
  { ar: 'السوق', tr: 'el-suu2', en: 'The market / souk', cat: 'market' },
  { ar: 'الدكان', tr: 'el-dukkaan', en: 'The shop / stall', cat: 'market' },
  { ar: 'البقالة', tr: 'el-ba22aale', en: 'The grocery / small store', cat: 'market' },
  { ar: 'الحساب', tr: 'el-7isaab', en: 'The bill / the account', cat: 'market' },
  { ar: 'كاش', tr: 'kaash', en: 'Cash', cat: 'market' },
  { ar: 'بالبطاقة', tr: 'bel-biTTaa2a', en: 'By card (credit/debit)', cat: 'market' },
  { ar: 'خلص', tr: 'khalaS', en: 'Finished / sold out / done', cat: 'market' },
];

const HGL_DRILLS = [
  {
    q: 'You see a nice jacket in a Beirut souk. What do you say first to ask the price?',
    opts: [
      '2addiish? — How much?',
      'maashi — OK / deal',
      'ghali ktiir — Very expensive',
      'ttafa2na — We agreed'
    ],
    ans: 0,
    exp: '"2addiish?" is the universal Lebanese market opener. Short, direct, slightly abrupt — exactly right for souk culture. Don\'t overthink it. Beirut vendors expect this instantly. "bi-kam hayda?" (how much is this?) is a slightly longer variant, equally acceptable.'
  },
  {
    q: 'The vendor says 150,000 lira. Way too high. What do you say to start bargaining?',
    opts: [
      'hayda ghali ktiir — This is very expensive',
      'ttafa2na — We agreed',
      '2aSli? — Is it original?',
      'el-si3r 2addish? — What\'s the price?'
    ],
    ans: 0,
    exp: '"hayda ghali ktiir" — this is very expensive. Classic first response to an opening price. Say it with a slight shake of the head and a disappointed look. Lebanese vendors EXPECT this — if you don\'t protest, they think they underpriced. Never accept the first price.'
  },
  {
    q: 'You want to make a counteroffer of 80,000 lira. What do you say?',
    opts: [
      '3Tiini bi-tmeniiin alf — Give it to me for 80,000',
      'aakher si3r? — Final price?',
      'khaffif shwayy — Lower it a bit',
      'fii gheirak — There are others'
    ],
    ans: 0,
    exp: '"3Tiini bi-..." — give it to me for [price]. The core bargaining phrase. Direct and clear. Say your price with confidence even if it\'s way below the ask. In Lebanese souk culture, making a low offer isn\'t offensive — it\'s expected and respected.'
  },
  {
    q: 'The vendor won\'t budge. You want to signal you might leave. What\'s the key phrase?',
    opts: [
      'raaye7 — I\'m leaving',
      'ma baddi — I don\'t want it',
      'fii gheirak — There are others',
      'All of these work'
    ],
    ans: 3,
    exp: 'All three are valid walk-away pressure tactics! "raaye7" (I\'m leaving) is most direct. "ma baddi" (I don\'t want it) shows feigned disinterest. "fii gheirak" (there are others/I can go elsewhere) signals competition. Lebanese sellers will often call you back when they see you actually starting to leave.'
  },
  {
    q: 'Vendor drops price slightly. You want to close the deal. What do you say?',
    opts: [
      'ttafa2na — We agreed / deal!',
      'ghali — Expensive',
      'maDmuun? — Guaranteed?',
      'raaye7 — I\'m leaving'
    ],
    ans: 0,
    exp: '"ttafa2na" — we agreed. The deal-sealing word. Once you say this and the vendor agrees, honor it. Lebanese souk etiquette: a verbal agreement is binding. Walking away after "ttafa2na" is considered rude. Only say it when you\'re genuinely ready to buy.'
  },
  {
    q: 'You\'re suspicious the goods are fake. What do you ask?',
    opts: [
      '2aSli? — Is it original/authentic?',
      'maDmuun? — Guaranteed?',
      'mish zaabTi — Not right',
      'ta2iil? — Is it heavy/solid?'
    ],
    ans: 0,
    exp: '"2aSli?" — is it original/authentic? The key question for electronics, branded goods, or anything that might be a copy. Lebanese vendors will always say yes — so watch their face and hesitation. Also check spelling on packaging. In Tripoli\'s markets, always ask for "2aSli walla copy?" (original or copy?) if you suspect.'
  },
  {
    q: 'You want the vendor to add something extra or give a small discount as a gesture. You say:',
    opts: [
      '7uTT 3alayy — Give me a deal / throw something in',
      'khaffif shwayy — Lower it a bit',
      'khalliha bi-... — Make it...',
      '3Tiini bi-... — Give it to me for...'
    ],
    ans: 0,
    exp: '"7uTT 3alayy" literally means "put [something] on me" — a request for a bonus, freebie, or symbolic discount as a goodwill gesture. Used after price is mostly agreed — you\'re asking the vendor to add a little extra to seal the good feeling. Often gets you an extra small item thrown in.'
  },
  {
    q: 'The vendor says "aakher si3r" — what does this mean?',
    opts: [
      'This is my final price — take it or leave it',
      'What is your last price? (asking you)',
      'The price went up',
      'No more items in stock'
    ],
    ans: 0,
    exp: '"aakher si3r" = final price. The vendor is saying this is their bottom line. May or may not be true! Experienced bargainers will still push back once after hearing this — sometimes you get another small drop. But if they repeat it and their demeanor is firm, it\'s likely genuine. This is where knowing when to accept matters.'
  },
  {
    q: 'The vendor says "maDmuun" about their product — what are they claiming?',
    opts: [
      'The product is guaranteed / reliable quality',
      'The price is final',
      'It\'s imported from abroad',
      'Payment by cash only'
    ],
    ans: 0,
    exp: '"maDmuun" = guaranteed. Vendors use this to assert quality and reliability. In Lebanese market culture it means "I stand behind this product." Useful phrase to know when vendors are making quality claims. Can also be used as a question: "maDmuun?" to ask if something is reliable.'
  },
  {
    q: 'You want to pay cash. What do you say?',
    opts: [
      'kaash — Cash',
      'bel-biTTaa2a — By card',
      'el-7isaab? — The bill?',
      'bi-kam? — For how much?'
    ],
    ans: 0,
    exp: '"kaash" — cash (borrowed from English). In Lebanese markets, cash often gets you a better price. Many small vendors don\'t accept cards, and even those who do may offer a small "cash discount" since they avoid card fees. Always ask "fi-ish takhfiiD lel-kaash?" (is there a cash discount?) if paying large amounts.'
  },
];

const HGL_TIPS = [
  '<strong>Never accept the first price:</strong> In Lebanese souk culture, the first price is an opening gambit — always 30-100% above what the seller will accept. Accepting immediately confuses the vendor and signals you\'re unfamiliar with the culture. Always counter, even if you\'re happy with the price.',
  '<strong>The walk-away is your best tool:</strong> Genuinely starting to leave (not pretending) is the single most effective bargaining move. Lebanese vendors will often call you back with a better offer when they see you actually heading toward the door. The key word: "raaye7" (I\'m leaving) — say it and start moving.',
  '<strong>Build rapport first:</strong> Before bargaining, exchange a few pleasantries — "kiifak?" (how are you?), "kull shi mni7?" (is everything good?). Lebanese souk culture is relationship-based. A vendor is more likely to give a good price to someone they\'ve chatted with than a stranger who just asks "2addiish?" coldly.',
  '<strong>Cash is king:</strong> Always ask about cash discounts ("fi takhfiiD lel-kaash?"). Many small vendors price in the assumption you\'ll pay by card — paying cash can get you 5-15% off. In crisis-era Lebanon, USD cash often gets even better treatment than Lebanese lira.',
  '<strong>The bundle strategy:</strong> Buying multiple items gives you much more leverage. "lamma jayyib maa3ak ithniin, shu btaa3Tiini?" (if I bring two with me, what will you give me?) — buying in bulk unlocks pricing that individual items won\'t. This works especially well for clothing, produce, and household goods.',
];

const HGL_ABOUT = 'Lebanese market culture is one of the most vibrant in the Arab world — Beirut\'s souks, Tripoli\'s old city markets, and neighborhood dekkeniis (small shops) are stages for a centuries-old performance of offer, counter-offer, and deal. Bargaining (<em>musaawame</em>) isn\'t just transactional — it\'s social. A vendor who lets you walk away without trying to keep you is indifferent; one who chases you with a better price respects your business. Master a dozen phrases and you\'ll navigate any Lebanese market with confidence, save money, and earn the respect of vendors who deal with non-bargaining tourists all day.';
