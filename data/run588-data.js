// R588 — NEW FEATURE: Lebanese Marketplace & Souk culture (prefix: mkt)

const MKT_WORDS = [
  // bargaining & price
  { ar: 'بقدير', tr: 'bi2addir', en: 'how much is it / I can value it (bargaining opener)', cat: 'bargain' },
  { ar: 'غالي كتير', tr: 'ghali ktiir', en: 'very expensive', cat: 'bargain' },
  { ar: 'رخيص', tr: 'rkhiis', en: 'cheap / inexpensive', cat: 'bargain' },
  { ar: 'نازل معي', tr: 'naazil ma3i', en: 'come down with me (lower the price)', cat: 'bargain' },
  { ar: 'آخر سعر', tr: 'aakhir si3r', en: 'final price / last price', cat: 'bargain' },
  { ar: 'خليني فكر', tr: 'khalliini fakkar', en: 'let me think about it', cat: 'bargain' },
  { ar: 'بعمل خسارة', tr: 'ba3mil khasaara', en: 'I\'m making a loss (seller\'s bluff)', cat: 'bargain' },
  { ar: 'على كيفك', tr: '3ala kiifak', en: 'as you like / up to you', cat: 'bargain' },
  // market types & places
  { ar: 'سوق', tr: 'suu2', en: 'market / souq', cat: 'places' },
  { ar: 'محل', tr: 'ma7all', en: 'shop / store', cat: 'places' },
  { ar: 'دكان', tr: 'dukkaan', en: 'small shop / corner store', cat: 'places' },
  { ar: 'بسطة', tr: 'basTA', en: 'street stall / market stand', cat: 'places' },
  { ar: 'سوق الطويلة', tr: 'suu2 el-Tawiile', en: 'the long souk (Tripoli old city market)', cat: 'places' },
  { ar: 'الحمرا', tr: 'el-Hamra', en: 'Hamra street (Beirut shopping district)', cat: 'places' },
  // goods & produce
  { ar: 'بضاعة', tr: 'bDaa3a', en: 'goods / merchandise', cat: 'goods' },
  { ar: 'نوعية', tr: 'naw3iyye', en: 'quality / type', cat: 'goods' },
  { ar: 'طازج', tr: 'Taazij', en: 'fresh', cat: 'goods' },
  { ar: 'مستعمل', tr: 'musta3mal', en: 'used / second-hand', cat: 'goods' },
  { ar: 'مقلد', tr: 'mu2allad', en: 'fake / imitation / counterfeit', cat: 'goods' },
  { ar: 'أصلي', tr: '2aSli', en: 'original / authentic / genuine', cat: 'goods' },
  // buying actions
  { ar: 'شو عندك', tr: 'shu 3indak', en: 'what do you have / what\'ve you got', cat: 'actions' },
  { ar: 'جيبلي', tr: 'jiibli', en: 'bring me (fetch it for me)', cat: 'actions' },
  { ar: 'لفّ لي', tr: 'laff li', en: 'wrap it up for me', cat: 'actions' },
  { ar: 'هالحجم', tr: 'hal-7ajim', en: 'this size', cat: 'actions' },
  { ar: 'من هون', tr: 'min hoon', en: 'from here / this one here', cat: 'actions' },
  { ar: 'كيلو بكم', tr: 'kiilo b-kam', en: 'how much per kilo', cat: 'actions' },
  { ar: 'الحساب', tr: 'el-7saab', en: 'the bill / the account', cat: 'actions' },
  { ar: 'كاش أو كارت', tr: 'kaash aw kaart', en: 'cash or card', cat: 'actions' },
];

const MKT_DRILLS = [
  {
    q: 'A seller says بعمل خسارة (ba3mil khasaara). What is happening?',
    opts: ['He\'s genuinely losing money and needs charity', 'Classic seller bluff meaning "I\'m giving you a deal" — standard bargaining tactic', 'He\'s refusing to negotiate any further', 'He\'s offering you a payment plan'],
    ans: 1,
    exp: 'ba3mil khasaara = "I\'m making a loss" — the most classic line in Lebanese market bargaining. 99% of the time it means the opposite. When you hear it, you\'re usually still 30-40% above rock bottom. Smile and counter.'
  },
  {
    q: 'You want to negotiate the price down. Which phrase opens a bargain?',
    opts: ['طازج (Taazij)', 'نازل معي (naazil ma3i)', 'من هون (min hoon)', 'الحساب (el-7saab)'],
    ans: 1,
    exp: 'naazil ma3i = "come down with me" — a direct invitation to lower the price. One of the most natural bargaining phrases. Implies you want to meet somewhere in the middle. Often said warmly, not aggressively.'
  },
  {
    q: 'What is a بسطة (basTA)?',
    opts: ['A large indoor shopping mall', 'A small street stall or outdoor market stand', 'A Lebanese supermarket chain', 'A warehouse for wholesale goods'],
    ans: 1,
    exp: 'basTA = street stall / market stand. A cornerstone of Lebanese street commerce — from Bourj Hammoud\'s fabric bastas to the vegetable bastas in Burj Abi Haidar. The word comes from بسط (to spread out), because goods are spread on the ground or table.'
  },
  {
    q: 'A vendor says آخر سعر (aakhir si3r) — what does this mean?',
    opts: ['The price changes by season', 'This is my final price — I won\'t go lower', 'I\'ll check the latest price for you', 'The item is on clearance'],
    ans: 1,
    exp: 'aakhir si3r = "final price" / "last price." Signals the vendor has reached their floor. In practice, it\'s often not truly final — you might get one more small reduction if you start walking away. Read body language to judge authenticity.'
  },
  {
    q: 'What does مقلد (mu2allad) mean in a market context?',
    opts: ['Handmade and artisanal', 'Fake / imitation / counterfeit — not the real brand', 'Imported directly from the origin country', 'A limited edition item'],
    ans: 1,
    exp: 'mu2allad = "imitation" or "counterfeit." Used openly in Lebanese markets where replica goods (bags, watches, electronics) are common. Opposite of أصلي (2aSli = original/authentic). Knowing this distinction saves money and avoids disappointment.'
  },
  {
    q: 'You want fresh produce. Which word asks about freshness?',
    opts: ['مستعمل (musta3mal)', 'نوعية (naw3iyye)', 'طازج (Taazij)', 'بضاعة (bDaa3a)'],
    ans: 2,
    exp: 'Taazij = fresh. Ask "Taazij?" when buying fish, vegetables, or meat. A vendor will always say yes, but the word signals you\'re checking. If you want to be more specific: "min imta?" (since when?) or "mn amta jaabu?" (when did they bring it?)'
  },
  {
    q: 'What area is سوق الطويلة (suu2 el-Tawiile) associated with?',
    opts: ['Beirut\'s downtown financial district', 'Tripoli\'s historic old city market', 'The Bekaa Valley\'s agricultural market', 'Sidon\'s coastal fish market'],
    ans: 1,
    exp: 'suu2 el-Tawiile (the long souk) is the historic covered market in Tripoli\'s old city — one of the most intact medieval souqs in the Arab world. Famous for gold, textiles, spices, and traditional crafts. A must-visit to understand real Lebanese market culture.'
  },
  {
    q: 'خليني فكر (khalliini fakkar) is said during bargaining. What effect does it have?',
    opts: ['Forces the vendor to give a final answer immediately', 'Signals hesitation — often prompts the vendor to offer a better price to keep you', 'Ends the negotiation permanently', 'Means you\'ll return tomorrow with more money'],
    ans: 1,
    exp: 'khalliini fakkar = "let me think about it." A powerful bargaining tool — signals you\'re not committed. A smart vendor will often drop the price slightly to keep you engaged. Works even better combined with turning to walk away slowly.'
  },
  {
    q: 'A vendor asks كاش أو كارت (kaash aw kaart). Why might cash matter more in Lebanon?',
    opts: ['Cards are always cheaper than cash in Lebanon', 'Due to the banking crisis, cash (USD or Lebanese pounds) is often preferred and may get a better price', 'Cards are illegal in Lebanese markets', 'Cash is only used for very expensive items'],
    ans: 1,
    exp: 'kaash aw kaart = "cash or card?" Post-2019 banking crisis, many Lebanese vendors strongly prefer cash — especially USD. Offering cash (especially dollars) often gets you a better price. Bank cards sometimes involve surcharges or unreliable systems.'
  },
  {
    q: 'When would you say كيلو بكم (kiilo b-kam)?',
    opts: ['When asking for a discount on branded goods', 'When buying produce, cheese, or anything sold by weight at a market', 'When asking how long delivery takes', 'When negotiating rent on a market stall'],
    ans: 1,
    exp: 'kiilo b-kam = "how much per kilo?" Essential phrase for food markets. Lebanon\'s produce markets sell most items by weight — vegetables, olives, cheese, nuts, za\'atar mixes. Knowing this phrase marks you as market-savvy rather than a tourist price target.'
  },
];

const MKT_TIPS = [
  'Lebanese bargaining culture is warm and social, not combative. Start with greetings, comment on the goods, ask questions. Vendors respect engaged buyers. The negotiation is partly social ritual — enjoy it rather than treating it as confrontation.',
  'The post-2019 economic crisis transformed Lebanese market dynamics. Many prices are now quoted in USD or at black-market exchange rates. Always clarify: "b-dollar aw b-lira?" (in dollars or pounds?) to avoid confusion at payment.',
  'Walking away is your most powerful tool. If a vendor calls you back, you\'ve found the real floor. If they let you go, either the price was already fair or they have another customer. Either way, you learn the market quickly.',
  'Tripoli\'s souqs (el-Tawiile, el-Nahaasiin, el-Attaarine) and Sidon\'s old souk are among the most authentic markets. Beirut\'s Bourj Hammoud is famous for gold and antiques. Each has its own specialty — knowing this helps you shop smart.',
  'Fresh food vocabulary matters most: طازج (fresh), منيح (good quality), من اليوم (from today), من امبارح (from yesterday). Vendors in produce markets appreciate when you know these words — it signals you\'re serious and not a tourist.',
];

const MKT_ABOUT = 'Lebanese market culture blends Phoenician trading heritage with Ottoman souk tradition and modern cosmopolitanism. From Tripoli\'s 14th-century covered souqs to Hamra\'s boutique shops to Bourj Hammoud\'s street vendors, buying and selling in Lebanon is a cultural performance. Bargaining (المساومة) is expected in traditional markets — it\'s not rude but rather a sign of engagement and respect. Since the 2019 economic collapse, market dynamics shifted dramatically: dual-currency pricing, cash-preference, and improvised informal markets became the norm. Understanding this vocabulary helps you navigate real Lebanese commerce with confidence.';
