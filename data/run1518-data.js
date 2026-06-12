// R1518 — NEW FEATURE: Lebanese Basta & Sidewalk Vendor Culture (bst)

const BST_WORDS = [
  { w: "basta", tr: "بسطة", en: "sidewalk stall / street vendor spread", ex: "roo7 shuf l basta, fi ktir 7ajet", exEn: "go check the basta, there's a lot of stuff", notes: "basta = any informal sidewalk display of goods — books, clothes, tools, antiques" },
  { w: "bayye3", tr: "بياع", en: "street vendor / seller", ex: "l bayye3 3am ynaadi 3ala l mshtireen", exEn: "the vendor is calling out to buyers", notes: "bayye3 calls loudly to attract customers — part of the street soundscape" },
  { w: "naddaf l ser", tr: "نداف السعر", en: "call out the price", ex: "naddaf l ser 3al mshteri", exEn: "call out the price to the buyer", notes: "vendors shout prices publicly to draw attention" },
  { w: "fawwat", tr: "فوات", en: "come in / step inside (vendor's call)", ex: "fawwat shuf, ma fi iltizam", exEn: "come look, no obligation to buy", notes: "classic vendor pitch — browse with no pressure" },
  { w: "rkhis", tr: "رخيص", en: "cheap / inexpensive", ex: "rkhis ktir, jeb jibtak", exEn: "it's very cheap, it's a deal", notes: "vendors emphasize cheapness constantly" },
  { w: "ghaali", tr: "غالي", en: "expensive", ex: "shu ghaali hayde? nizil shwayy", exEn: "why is this expensive? lower it a bit", notes: "always use ghaali to open negotiation" },
  { w: "wsit", tr: "وسيط", en: "middle price / fair price", ex: "ha, wsit mni7 hayde", exEn: "okay, that's a fair middle price", notes: "wsit = agreeable compromise during bargaining" },
  { w: "jayyid", tr: "جيد", en: "good (quality)", ex: "jayyid ktir, ma 3ando metlo", exEn: "very good quality, nothing like it", notes: "used to justify price" },
  { w: "3attar", tr: "عطار", en: "spice/herb vendor", ex: "roo7 3and l 3attar, jib za3tar", exEn: "go to the herb vendor, bring za3tar", notes: "3attar sells dried herbs, spices, folk remedies" },
  { w: "sarrafa", tr: "صرافة", en: "money changer / exchange stall", ex: "fi sarrafa 3al korner", exEn: "there's a money changer on the corner", notes: "informal currency exchange stalls are common in Lebanese markets" },
  { w: "tneen bel 7add", tr: "تنين بالحد", en: "two for one / buy-one-get-one", ex: "tneen bel 7add l yom bass", exEn: "two for one today only", notes: "hawker's deal — bel 7add literally 'two at the limit/edge'" },
  { w: "mish mitsarref", tr: "مش متصرف", en: "not flexible / firm price", ex: "mish mitsarref, hayde akher ser", exEn: "I'm not flexible, that's the final price", notes: "vendor signal that negotiation is over" },
  { w: "khod b sitte", tr: "خود بستة", en: "take it for six (dollars)", ex: "khod b sitte, 7elo ktir", exEn: "take it for six, it's very nice", notes: "naming a round-number price to close the deal" },
  { w: "fi ktir model", tr: "في كتير موديل", en: "there are many styles/models", ex: "fi ktir model, shu btrid?", exEn: "there are many styles, which one do you want?", notes: "used by clothing and accessories vendors" },
  { w: "jedid 3al basta", tr: "جديد على البسطة", en: "new to the stall / just arrived", ex: "jedid 3al basta l yom, ta2", exEn: "new to the stall today, come look", notes: "signals freshly restocked goods" },
  { w: "barood", tr: "بارود", en: "junk / odds and ends (bric-a-brac)", ex: "fi barood ktir 3al basta", exEn: "there's a lot of junk on the basta", notes: "affectionate term for eclectic mix of old goods — often treasures" },
  { w: "3youn l khayr", tr: "عيون الخير", en: "welcome / you bring good luck (greeting)", ex: "3youn l khayr, tfaddal shuf", exEn: "welcome, good to see you, come look", notes: "warm greeting to a browsing customer — literally 'eyes of good'" },
  { w: "3atini ma bti3ref", tr: "عطيني ما بتعرف", en: "make me an offer", ex: "3atini ma bti3ref, shuflak", exEn: "make me an offer, I'll consider it", notes: "invite to open bidding — vendor pretends any price is possible" }
];

const BST_DRILLS = [
  { q: "What is a 'basta'?", a: "sidewalk stall / street vendor spread", hint: "informal display of goods on the street" },
  { q: "How do you say 'cheap' in Lebanese?", a: "rkhis", hint: "what every vendor claims their goods are" },
  { q: "What does 'fawwat shuf, ma fi iltizam' mean?", a: "come look, no obligation to buy", hint: "classic vendor pitch to draw you in" },
  { q: "What does a '3attar' sell?", a: "spices / herbs / folk remedies", hint: "za3tar, za3faran, and other dried goods" },
  { q: "How do you say 'expensive' in Lebanese?", a: "ghaali", hint: "use this to start negotiating" },
  { q: "What is 'tneen bel 7add'?", a: "two for one / buy-one-get-one deal", hint: "vendor's bargain offer" },
  { q: "What does 'mish mitsarref' mean from a vendor?", a: "firm price / not flexible", hint: "they're done negotiating" },
  { q: "How do you say 'street vendor'?", a: "bayye3", hint: "calls out loudly to attract customers" },
  { q: "What is 'barood' on the basta?", a: "junk / bric-a-brac / odds and ends", hint: "eclectic old goods — often hidden treasures" },
  { q: "What does '3youn l khayr' mean?", a: "welcome / you bring good luck", hint: "warm greeting to a browsing customer" }
];

const BST_TIPS = [
  "The Lebanese basta (بسطة) is the informal sidewalk economy — vendors spread goods directly on the pavement or a folding table. You'll find everything from used books and secondhand clothes to phone accessories, tools, and spices. Hamra Street, Souk el-Ahad in Beirut, and souks in Tripoli are famous for their bastas.",
  "Bargaining (mfaw'da) is expected at the basta — not optional. Starting the negotiation with 'shu akhir ser?' (what's your best price?) or expressing mild shock at the quoted price ('shu ghaali!') is standard practice. Never pay the first price.",
  "The 3attar (عطار) stall is a Lebanese institution — a spice and herb vendor who also doubles as informal folk medicine advisor. They stock za3tar, za3faran (saffron), anise, chamomile, and dozens of dried herbs. Regular customers are greeted like old friends.",
  "Lebanese sidewalk vendors have a distinctive calling style — they project their voice down the street announcing prices and goods. 'Rkhis, rkhis! Yalla tfaddal!' is the standard shout. Some vendors use handheld microphones or set up small speakers to amplify their pitch.",
  "Sarrafa (صرافة) stalls — informal currency exchange spots — are woven into Lebanese market life, especially given the dollar/lira dual economy. They operate in tiny booths or even on the street corner, rates displayed on a chalkboard or phone screen."
];
