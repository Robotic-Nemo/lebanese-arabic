// Run #273 — Lebanese Shopping & Bargaining Coach (shp)
// Shop vocab, prices, bargaining, market culture — 40 items, MCQ drill, 5 tips

const SHP_WORDS = [
  // shops & places
  { tr: 'd-dkken',       ar: 'الدكان',      en: 'the shop / corner store',         cat: 'shops' },
  { tr: 'ssou2',         ar: 'السوق',        en: 'the market / souk',               cat: 'shops' },
  { tr: 'mall',          ar: 'مول',          en: 'shopping mall',                   cat: 'shops' },
  { tr: 'Saydaliyye',    ar: 'صيدلية',       en: 'pharmacy',                        cat: 'shops' },
  { tr: 'maktabe',       ar: 'مكتبة',        en: 'bookshop / stationery',           cat: 'shops' },
  { tr: 'bakkaal',       ar: 'بقال',         en: 'grocer / general store',          cat: 'shops' },
  { tr: 'Halla2',        ar: 'حلاق',         en: 'barber / hairdresser',            cat: 'shops' },
  // items & products
  { tr: 'bDaa3a',        ar: 'بضاعة',        en: 'goods / merchandise',             cat: 'items' },
  { tr: 'maSriyyaat',    ar: 'مصريات',       en: 'accessories / small items',       cat: 'items' },
  { tr: '2oumi',         ar: 'أومي',         en: 'come here / this one',            cat: 'items' },
  { tr: 'haydik',        ar: 'هيديك',        en: 'that one (f)',                    cat: 'items' },
  { tr: 'hayda',         ar: 'هيدا',         en: 'this one (m)',                    cat: 'items' },
  // prices & money
  { tr: 'si3r',          ar: 'سعر',          en: 'price',                           cat: 'prices' },
  { tr: 'bi-2addeysh?',  ar: 'بقديش؟',       en: 'how much is it?',                 cat: 'prices' },
  { tr: 'ghali',         ar: 'غالي',         en: 'expensive',                       cat: 'prices' },
  { tr: 'rkhiiS',        ar: 'رخيص',         en: 'cheap',                           cat: 'prices' },
  { tr: 'la2 ma3i',      ar: 'لا معي',       en: 'I don\'t have (money)',           cat: 'prices' },
  { tr: 'fi takhfiif?',  ar: 'في تخفيف؟',    en: 'is there a discount?',            cat: 'prices' },
  { tr: 'kesserni',      ar: 'كسرني',        en: 'give me a deal / cut me a price', cat: 'prices' },
  { tr: '7isebli',       ar: 'حسبلي',        en: 'calculate it for me',             cat: 'prices' },
  // bargaining phrases
  { tr: 'hada ktir ghali', ar: 'هدا كتير غالي', en: 'this is too expensive',       cat: 'bargain' },
  { tr: 'nazzil shi',    ar: 'نزل شي',       en: 'lower the price a bit',           cat: 'bargain' },
  { tr: 'bou3Tiini b...',ar: 'بوعطيني بـ...', en: 'I\'ll give you [price] for it', cat: 'bargain' },
  { tr: 'shi teni?',     ar: 'شي تاني؟',     en: 'anything else?',                  cat: 'bargain' },
  { tr: 'khalas',        ar: 'خلاص',         en: 'done / finished / that\'s it',    cat: 'bargain' },
  { tr: 'la2, shukran',  ar: 'لأ، شكران',    en: 'no thank you',                    cat: 'bargain' },
  // transactions
  { tr: 'shteri',        ar: 'شتري',         en: 'I\'ll buy it',                    cat: 'transaction' },
  { tr: 'ma shteri',     ar: 'ما شتري',      en: 'I won\'t buy it',                 cat: 'transaction' },
  { tr: 'wein l-kassa?', ar: 'وين الكاسا؟', en: 'where is the cashier?',           cat: 'transaction' },
  { tr: 'fi 3andkon...?',ar: 'في عندكن...؟', en: 'do you have...?',                 cat: 'transaction' },
  { tr: 'khalliini shuf',ar: 'خليني شوف',    en: 'let me see / let me look',        cat: 'transaction' },
  { tr: 'rah rja3',      ar: 'رح أرجع',      en: 'I\'ll come back',                 cat: 'transaction' },
  // quality & complaints
  { tr: 'jdiid',         ar: 'جديد',         en: 'new',                             cat: 'quality' },
  { tr: 'mkaSSar',       ar: 'مكسر',         en: 'broken',                          cat: 'quality' },
  { tr: 'muush tamiim',  ar: 'مش تميم',      en: 'not perfect / flawed',            cat: 'quality' },
  { tr: 'asli',          ar: 'أصلي',         en: 'genuine / original',              cat: 'quality' },
  { tr: 'taqliid',       ar: 'تقليد',        en: 'imitation / fake',                cat: 'quality' },
  { tr: 'DHamaanak',     ar: 'ضمانك',        en: 'your guarantee',                  cat: 'quality' },
  { tr: 'b-doon DHamaan',ar: 'بدون ضمان',    en: 'without warranty',                cat: 'quality' },
  { tr: 'brid-do',       ar: 'بريدو',        en: 'I want to return it',             cat: 'quality' },
];

const SHP_DRILLS = [
  {
    q: 'How do you ask "how much is it?" in Lebanese Arabic?',
    opts: ['si3r?', 'ghali?', 'bi-2addeysh?', 'fi takhfiif?'],
    correct: 2,
    note: '"bi-2addeysh?" = how much is it? (بقديش؟ — bi = in/with, 2addeysh = how much). Alternatives: "2addeysh hayda?" (how much is this?), "2addeysh el-kull?" (how much total?). "si3r" = price (noun); "fi takhfiif?" = is there a discount?'
  },
  {
    q: 'What does "kesserni" mean?',
    opts: ['give me a receipt', 'break it for me', 'give me a deal / cut me a price', 'wrap it up'],
    correct: 2,
    note: '"kesserni" = give me a deal (literally "break it for me" — كسرني from كسر = to break). Lebanese bargaining term: asking the seller to "break" their price. Use with a smile: "kesserni shwayy" = give me a small discount. The seller may reply: "ma fi meni" (nothing from me = I can\'t).'
  },
  {
    q: 'How do you say "this is too expensive" in Lebanese Arabic?',
    opts: ['hayda rkhiiS ktir', 'hada ktir ghali', 'la2 ma3i', 'fi takhfiif?'],
    correct: 1,
    note: '"hada ktir ghali" = this is too expensive. Bargaining opener: say this after hearing the price, look disappointed, maybe turn to leave. The seller will often call you back with a lower price. "ktir" = very/too much. Follow up: "nazzil shi" (lower the price a bit).'
  },
  {
    q: 'What does "khalas" mean?',
    opts: ['expensive', 'let me think', 'done / finished / that\'s it', 'no thank you'],
    correct: 2,
    note: '"khalas" = done/finished/that\'s it (خلاص). One of the most versatile Lebanese words: "khalas, shteri" (done, I\'ll buy it), "khalas, bkaffi" (enough, that\'s enough), "khalas, yalla!" (OK, let\'s go!). Closing a deal: "khalas, bi-hayda" = done, at that price.'
  },
  {
    q: 'How do you say "do you have...?" in Lebanese Arabic?',
    opts: ['fi 3andkon...?', 'wein l-kassa?', 'khalliini shuf', 'bDaa3a mniH?'],
    correct: 0,
    note: '"fi 3andkon...?" = do you have...? (fi = there is, 3andkon = you [pl] have). To an individual: "fi 3andak...?" (m) or "fi 3andik...?" (f). Example: "fi 3andkon Nike?" = do you have Nike? In a small shop, "fi 3andak ras el-3asfour?" = do you have ras el-3asfour tea?'
  },
  {
    q: 'What does "asli" mean in a shopping context?',
    opts: ['expensive', 'second-hand', 'genuine / original', 'discounted'],
    correct: 2,
    note: '"asli" = genuine/original (أصلي). Antonym: "taqliid" = imitation/fake. Lebanon has markets with both genuine and imitation goods. Always ask: "asli willa taqliid?" (genuine or fake?). For electronics: "DHamaanak shu?" (what\'s your guarantee?). "b-doon DHamaan" = sold as-is, no warranty.'
  },
  {
    q: 'How do you say "lower the price a bit" in Lebanese Arabic?',
    opts: ['khalas', 'nazzil shi', 'rah rja3', 'bou3Tiini'],
    correct: 1,
    note: '"nazzil shi" = lower the price a bit (نزل شي — nazzil = bring down, shi = something/a bit). Standard bargaining: "nazzil shi 3alayyi" = lower it for me a bit. More direct: "3Tiini si3r ta7et" (give me a lower price). Polite exit if no deal: "rah rja3" (I\'ll come back) — universal soft no.'
  },
  {
    q: 'What is a "bakkaal" in Lebanon?',
    opts: ['pharmacy', 'bookshop', 'grocer / general store', 'barber'],
    correct: 2,
    note: '"bakkaal" = neighborhood grocer/general store (بقال). The Lebanese "bakkaal" sells everything — groceries, cleaning supplies, cold drinks, phone credit. Essential neighborhood institution, often open till midnight. "3a l-bakkaal" = to the corner store. Distinct from "ssou2" (market) and "mall". Many run on tab ("d-daftar") — pay at end of month.'
  },
  {
    q: 'How do you say "let me see / let me look" in Lebanese Arabic?',
    opts: ['rah rja3', 'khalliini shuf', 'shi teni?', 'haydik'],
    correct: 1,
    note: '"khalliini shuf" = let me see / let me look (خليني شوف — khalliini = let me, shuf = see/look). Before buying: "khalliini shuf l-si3r" (let me check the price). Also used generally: "khalliini shuf shu sar" (let me see what happened). "khalliini" = let me [do something] — useful construction.'
  },
  {
    q: 'What does "mkaSSar" mean?',
    opts: ['genuine', 'on sale', 'new', 'broken'],
    correct: 3,
    note: '"mkaSSar" = broken (مكسر — from كسر = to break). Key quality check words: "jdiid" (new), "mkaSSar" (broken), "muush tamiim" (not perfect/flawed), "asli" (genuine). Always inspect goods: "mkaSSar?" (is it broken?). In Lebanon, "mkaSSar" is also used figuratively: "ana mkaSSar" = I\'m exhausted/destroyed.'
  },
];

const SHP_TIPS = [
  { title: 'Lebanese bargaining culture — the art of the deal', body: 'Bargaining ("moufaSSale") is expected in traditional souks, small shops, and markets — never in malls or pharmacies. The script: seller names price → you look shocked: "hada ktir ghali!" → offer 60-70% → seller counters → you "kesserni" (ask for a break) → deal somewhere in between. Tactics: (1) pick up multiple items — "shu bi-tallou l-tnen?" (what are both for?); (2) pretend to leave — "rah rja3" (I\'ll come back); (3) mention a lower price you saw elsewhere: "7abbib shafto bi..." Lebanese sellers enjoy the social ritual of bargaining — a direct "no" is rare.' },
  { title: 'Lebanese market vocabulary — dkken to mall', body: 'Lebanese retail has layers: "dkken" (corner store, open late, sells everything), "bakkaal" (neighborhood grocer), "ssou2" (traditional market/souk — Souk el-Ahad/Sunday Market, Souk el-Ahad Dbayeh), "mall" (ABC Dbayeh/Verdun, City Mall, etc.), "sour" (street market). Famous markets: "sou2 el-ahad" (Sunday flea market), "sou2 el-khDar" (vegetable market), "sou2 el-dahab" (gold souk). Shopping neighborhoods: Hamra (boutiques), Achrafieh (high-end), Tripoli Old Souk (traditional artisan goods).' },
  { title: 'Prices in Lebanon — navigating the currency chaos', body: 'Lebanese pricing post-2019 collapse is complex. Prices may be quoted in: "lira" (Lebanese pounds — now in trillions), "dollar" (USD cash preferred), "fresh dollar" (literally fresh dollar = USD that entered Lebanon post-crisis, distinct from pre-crisis bank dollars). Always clarify: "bi-lira willa bi-dollar?" (in lira or dollar?). Smartphone prices, rent, and big purchases typically in USD. Groceries in LBP (millions). "Fresh dollar" commands a premium. Apps (Lollar, etc.) track daily exchange rate. Rule: agree on currency before agreeing on price.' },
  { title: 'Key phrases for Lebanese shopping success', body: '"Fi 3andkon...?" (do you have...?) — always start here. "2addeysh hayda?" (how much is this?). "Fi takhfiif?" (any discount?). "Kesserni shwayy" (give me a small break). "Khalas, bi-hayda" (done, at this price). "Ma 3andi" (I don\'t have — money/change). "Btaa7sib?" (do you accept card?). "Ma fi fraata?" (no change?). Smart moves: bring small bills (sellers often "have no change"), ask about bulk discounts ("shu bi-tallou tlete?"), and always check for defects before paying ("mkaSSar shi?" = anything broken?).' },
  { title: 'Lebanese shopping etiquette and customs', body: 'Greet first, buy second — entering a shop without saying "marhaba" or "keefak" (how are you) is rude. The seller is a host. Small shops: chatting before buying is expected; rushing is rude. Gift shopping: wrapping ("laffeeli-ya") is offered free in most shops. Haggling is social, not aggressive — maintain good humor. "Ma 7ada byikra 3aleik" = no one will hold it against you (seller\'s charm phrase meaning "this is a fair price"). Leaving without buying: always thank: "shukran, rja3 ba3dein" (thank you, I\'ll come back). The "rja3 ba3dein" softens the rejection and maintains the relationship.' },
];

const SHP_ABOUT = 'Master Lebanese Arabic for shopping and bargaining — market vocabulary, price negotiation, quality terms, and transaction phrases. Essential for navigating Lebanese souks, corner stores, and the unique post-crisis pricing culture.';
