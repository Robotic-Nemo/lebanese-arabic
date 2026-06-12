// Run #252 — Lebanese Market & Shopping Coach (mrk)
// Souq vocab, haggling, money, shop types, shopping phrases — 40 items, MCQ drill, 5 tips

const MRK_WORDS = [
  // shop types
  { tr: 'su2',           ar: 'سوق',           en: 'market / souq',                  cat: 'shops' },
  { tr: 'dukkaan',       ar: 'دكان',           en: 'small shop / store',             cat: 'shops' },
  { tr: 'supermarket',   ar: 'سوبرماركت',      en: 'supermarket',                    cat: 'shops' },
  { tr: 'seta',          ar: 'صيدلية',         en: 'pharmacy (Lebanese: sei7a)',      cat: 'shops' },
  { tr: 'farmazon',      ar: 'فرماسون',        en: 'pharmacy (French: pharmacien)',   cat: 'shops' },
  { tr: 'khabbaaZ',      ar: 'خبّاز',          en: 'bakery / bread shop',            cat: 'shops' },
  { tr: 'Jazzaar',       ar: 'جزّار',          en: 'butcher shop',                   cat: 'shops' },
  { tr: 'mHall mlaabis',  ar: 'محل ملابس',     en: 'clothing store',                 cat: 'shops' },
  // money & prices
  { tr: 'kaddeysh?',     ar: 'قديش؟',          en: 'how much?',                      cat: 'money' },
  { tr: 'ghali',         ar: 'غالي',           en: 'expensive',                      cat: 'money' },
  { tr: 'rkhiiS',        ar: 'رخيص',           en: 'cheap / inexpensive',            cat: 'money' },
  { tr: 'mSaare',        ar: 'مصاري',          en: 'money (colloquial)',              cat: 'money' },
  { tr: 'fakkeh',        ar: 'فكة',            en: 'change / coins',                 cat: 'money' },
  { tr: 'Haaseb',        ar: 'حاسب',           en: 'bill / check (settle up)',       cat: 'money' },
  { tr: '3al Hisaab',    ar: 'عالحساب',        en: 'on the tab / on credit',         cat: 'money' },
  { tr: 'khSom',         ar: 'خصم',            en: 'discount',                       cat: 'money' },
  // haggling & negotiation
  { tr: '7uTTha',        ar: 'حطّها',          en: 'lower it (the price)',            cat: 'haggling' },
  { tr: 'tnaazal',       ar: 'تنازل',          en: 'make a deal / give a discount',  cat: 'haggling' },
  { tr: 'mish mazbouT',  ar: 'مش مضبوط',       en: 'not right / not fair',           cat: 'haggling' },
  { tr: 'la2, ktir ghali', ar: 'لأ، كتير غالي', en: 'no, too expensive',             cat: 'haggling' },
  { tr: 'bi-kaam?',      ar: 'بكام؟',          en: 'for how much?',                  cat: 'haggling' },
  { tr: 'kariim',        ar: 'كريم',           en: 'generous (used in negotiation)', cat: 'haggling' },
  { tr: 'Tabba2-leh',    ar: 'طبّقلو',         en: 'apply it (the discount) for him', cat: 'haggling' },
  { tr: 'maa bHa2 ghayr',ar: 'ما بحق غير',     en: 'it\'s worth no more than',       cat: 'haggling' },
  // what to say
  { tr: 'baddi…',        ar: 'بدي…',           en: 'I want…',                        cat: 'phrases' },
  { tr: 'khudni la…',    ar: 'خدني لـ…',       en: 'take me to…',                    cat: 'phrases' },
  { tr: '3ande bass…',   ar: 'عندي بس…',       en: 'I only have…',                   cat: 'phrases' },
  { tr: 'mesh 3ajbani',  ar: 'مش عاجبني',      en: 'I don\'t like it',               cat: 'phrases' },
  { tr: 'fiih ghayro?',  ar: 'فيه غيرو؟',      en: 'is there another one?',          cat: 'phrases' },
  { tr: 'wein el-kaassa?', ar: 'وين الكاسا؟',  en: 'where is the cashier?',          cat: 'phrases' },
  // items commonly bought
  { tr: 'khuDra',        ar: 'خضرة',           en: 'vegetables',                     cat: 'items' },
  { tr: 'fawaake',       ar: 'فواكه',          en: 'fruits',                         cat: 'items' },
  { tr: 'laHem',         ar: 'لحم',            en: 'meat',                           cat: 'items' },
  { tr: 'dajaaJ',        ar: 'دجاج',           en: 'chicken',                        cat: 'items' },
  { tr: 'mlaabis',       ar: 'ملابس',          en: 'clothes / clothing',             cat: 'items' },
  { tr: 'HaDhaayeh',     ar: 'حذاية',          en: 'shoes',                          cat: 'items' },
  { tr: 'kahraba',       ar: 'كهربا',          en: 'electricity (also: appliances)', cat: 'items' },
  { tr: 'dawaaye',       ar: 'دواية',          en: 'medicine / pills',               cat: 'items' },
  { tr: '3aTar',         ar: 'عطر',            en: 'perfume',                        cat: 'items' },
  { tr: 'hadiiyye',      ar: 'هدية',           en: 'gift / present',                 cat: 'items' },
];

const MRK_DRILLS = [
  {
    q: 'How do you say "how much?" in Lebanese Arabic?',
    opts: ['kaddeysh?', 'ghali', 'rkhiiS', 'bi-kaam?'],
    correct: 0,
    note: '"kaddeysh?" = how much? (most common); "bi-kaam?" = for how much? (slightly more specific); "ghali" = expensive; "rkhiiS" = cheap'
  },
  {
    q: 'What does "7uTTha" mean in a market context?',
    opts: ['I want it', 'pay the bill', 'lower the price', 'add a discount'],
    correct: 2,
    note: '"7uTTha" (lit: put it down) = lower the price — essential phrase for haggling. Use: "7uTTha shway" = lower it a bit. Very Lebanese negotiation opener.'
  },
  {
    q: 'How do you say "too expensive" in Lebanese Arabic?',
    opts: ['mish mazbouT', 'la2, ktir ghali', 'maa bHa2 ghayr', 'mesh 3ajbani'],
    correct: 1,
    note: '"la2, ktir ghali" = no, too expensive — the classic market rejection. "mish mazbouT" = not right/fair; "maa bHa2 ghayr" = worth no more than; "mesh 3ajbani" = I don\'t like it'
  },
  {
    q: 'What does "fakkeh" mean?',
    opts: ['discount', 'expensive', 'change / coins', 'bill'],
    correct: 2,
    note: '"fakkeh" = change/coins (from "fakk" = to break apart). "fiik tfakkali?" = can you give me change? Essential when Lebanese merchants say "ma fi fakkeh" (no change).'
  },
  {
    q: 'How do you say "I want…" in Lebanese Arabic?',
    opts: ['baddi…', 'khudni la…', 'fiih ghayro?', '3ande bass…'],
    correct: 0,
    note: '"baddi…" = I want… (from "badi" = want). "khudni la…" = take me to…; "fiih ghayro?" = is there another?; "3ande bass…" = I only have… (for negotiating)'
  },
  {
    q: 'What does "dukkaan" mean?',
    opts: ['supermarket', 'small shop / store', 'butcher', 'pharmacy'],
    correct: 1,
    note: '"dukkaan" = small shop/store (very common Lebanese word for any neighborhood shop); "supermarket" = supermarket (same word); "Jazzaar" = butcher; "farmazon/seta" = pharmacy'
  },
  {
    q: 'How do you say "is there another one?" in Lebanese Arabic?',
    opts: ['mesh 3ajbani', 'mish mazbouT', 'fiih ghayro?', 'khSom'],
    correct: 2,
    note: '"fiih ghayro?" = is there another one? (useful when the color/size isn\'t right); "mesh 3ajbani" = I don\'t like it; "khSom" = discount; "mish mazbouT" = not right'
  },
  {
    q: 'What does "3al Hisaab" mean?',
    opts: ['cash payment', 'on the tab / credit', 'on sale', 'the check please'],
    correct: 1,
    note: '"3al Hisaab" = on the tab/credit (very common in Lebanon — shop owners know their customers and allow running tabs). "Haaseb" = settle the bill; "bi-kaam?" = for how much?'
  },
  {
    q: 'How do you say "vegetables" in Lebanese Arabic?',
    opts: ['fawaake', 'laHem', 'khuDra', 'dajaaJ'],
    correct: 2,
    note: '"khuDra" = vegetables (from "akhDar" = green); "fawaake" = fruits; "laHem" = meat; "dajaaJ" = chicken'
  },
  {
    q: 'What does "tnaazal" mean in a bargaining context?',
    opts: ['overcharge', 'make a deal / give discount', 'refuse to sell', 'accept the price'],
    correct: 1,
    note: '"tnaazal" = make a concession/give a discount (from "naazal" = to yield). "tnaazal shway" = give a little discount. Very polite negotiating language.'
  },
];

const MRK_TIPS = [
  { title: 'Haggling in Lebanese markets — it\'s expected', body: 'In Lebanon\'s traditional markets (su2), haggling is cultural. Start at 50-60% of asking price, expect to settle around 70-80%. Key phrases: "kaddeysh haida?" (how much is this?), "ktir ghali" (too expensive), "7uTTha" (lower it), "tnaazal shway" (give a small discount). Always polite — "kariim" (generous) flatters the seller into giving a better price. Supermarkets have fixed prices; markets and small shops have negotiable ones.' },
  { title: '"Fakkeh" — the great Lebanese problem', body: '"Ma fi fakkeh" (no change) is Lebanon\'s most common market phrase. Merchants almost never have change — always carry small bills. "Fiik tfakkali?" = can you give me change? "Ma 3ande illa 100" = I only have a 100. Pro tip: buy something small first to "make change" for a larger transaction. Mobile payment apps ("OMT", "Whish") are now common — ask "fiik tkhud OMT?" = can you take OMT?' },
  { title: 'Lebanese market vocabulary — types of shops', body: 'Neighborhood shops: "dukkaan" (small general store), "dekkanje" (shop owner). Food markets: "su2 el-khuDra" (vegetable market), "Jazzaar" (butcher), "khabbaaZ" (bakery), "sa7n el-laHme" (butcher\'s dish). Specialty: "3aTaar" (spice/herb shop — a Lebanese institution). Pharmacies: "farmazon" (large pharmacy from French pharmacien), "seidaliiyye" (formal). The word "supermarket" is used as-is. "Mall" = mall.' },
  { title: 'Prices and money expressions in Lebanese', body: 'Key money phrases: "ghali ktir" (very expensive), "rkhiiS" (cheap — good thing), "bilash" (free/for nothing), "bi-ayy ta3riife?" (at what price?). Lebanese prices often quoted in thousands of Lebanese pounds OR in USD (since the crisis). "Dolar" (dollar) is now the standard for major purchases. "Bi-lira" (in lira) vs "bi-dolar" (in dollars) — always clarify! "Shek" = check; "kredit card" = credit card (often not accepted in small shops).' },
  { title: 'Practical shopping phrases for the Lebanese souq', body: 'Enter a shop: "marhaba" (hello), then state your need: "baddi… (what you want)". The seller asks: "shuu baddak?" (what do you want?). Trying clothes: "fiih takho bi-" + color. Sizes: "Sghiir/wasaT/kbiir" (small/medium/large). "fiih aHsan?" = is there better? "mnee7?" = good? (asking for quality). Leaving empty-handed: "shukran" + "mish 3ajbani" (thanks, not my thing) — perfectly acceptable and expected.' },
];

const MRK_ABOUT = 'Master Lebanese Arabic market and shopping vocabulary — souq phrases, haggling expressions, money terms, shop types, and essential buying phrases. Vital for navigating Lebanon\'s vibrant traditional markets, neighborhood shops, and the art of Lebanese bargaining culture.';
