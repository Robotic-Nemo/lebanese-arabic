// R1017 — NEW FEATURE: Lebanese Supermarket & Grocery Shopping (groc)

const GROC_WORDS = [
  { ar: 'سوبرماركت', tr: 'supermarchet', en: 'supermarket', cat: 'places' },
  { ar: 'دكانة', tr: 'dkene', en: 'corner shop / small grocery store', cat: 'places' },
  { ar: 'بقالة', tr: 'ba22ale', en: 'grocery shop / food store', cat: 'places' },
  { ar: 'عربية التسوق', tr: '3arabiyyit it-tasawwu2', en: 'shopping cart', cat: 'items' },
  { ar: 'كيس', tr: 'kis', en: 'bag / plastic bag', cat: 'items' },
  { ar: 'إيصال', tr: 'i3Sal', en: 'receipt', cat: 'items' },
  { ar: 'خضار', tr: 'khaD-Dar', en: 'vegetables / produce', cat: 'food' },
  { ar: 'فواكه', tr: 'faweke', en: 'fruits', cat: 'food' },
  { ar: 'لحمة', tr: 'la7me', en: 'meat', cat: 'food' },
  { ar: 'دجاج', tr: 'djej', en: 'chicken', cat: 'food' },
  { ar: 'سمك', tr: 'samak', en: 'fish', cat: 'food' },
  { ar: 'خبز', tr: 'khubiz', en: 'bread', cat: 'food' },
  { ar: 'حليب', tr: '7alib', en: 'milk', cat: 'food' },
  { ar: 'جبنة', tr: 'jibneh', en: 'cheese', cat: 'food' },
  { ar: 'زيت زيتون', tr: 'zet zaytun', en: 'olive oil', cat: 'food' },
  { ar: 'منظفات', tr: 'munaZZifet', en: 'cleaning products / detergents', cat: 'household' },
  { ar: 'تخفيض', tr: 'takhfid', en: 'discount / sale', cat: 'shopping' },
  { ar: 'تاريخ الانتهاء', tr: 'tarix il-intihé', en: 'expiry date', cat: 'shopping' },
  { ar: 'وزن', tr: 'wazin', en: 'weight', cat: 'shopping' },
  { ar: 'بالكيلو', tr: 'bil-kilo', en: 'by the kilogram', cat: 'shopping' },
  { ar: 'دفعت نقداً', tr: 'dafa3t na2dan', en: 'I paid in cash', cat: 'shopping' },
  { ar: 'كاشير', tr: 'kashir', en: 'cashier / checkout', cat: 'places' },
  { ar: 'صيدلية', tr: 'Saydliyye', en: 'pharmacy (found in supermarkets)', cat: 'places' },
  { ar: 'رف', tr: 'raff', en: 'shelf / aisle shelf', cat: 'items' },
  { ar: 'بضاعة مزبوطة', tr: 'biDa3a maZbuta', en: 'good quality product / the right stuff', cat: 'shopping' },
];

const GROC_CATS = ['places', 'food', 'items', 'household', 'shopping'];

const GROC_DRILLS = [
  { q: 'What does "supermarchet" (سوبرماركت) mean?', opts: ['bakery', 'supermarket', 'corner shop', 'pharmacy'], ans: 1 },
  { q: 'What is a "dkene" (دكانة)?', opts: ['supermarket', 'corner shop / small grocery store', 'shopping mall', 'butcher'], ans: 1 },
  { q: 'How do you say "shopping cart" in Lebanese Arabic?', opts: ['kis', '3arabiyyit it-tasawwu2', 'raff', 'i3Sal'], ans: 1 },
  { q: 'What does "khaD-Dar" (خضار) mean?', opts: ['fruits', 'meat', 'vegetables / produce', 'dairy'], ans: 2 },
  { q: 'How do you say "expiry date" in Lebanese Arabic?', opts: ['takhfid', 'wazin', 'tarix il-intihé', 'biDa3a maZbuta'], ans: 2 },
  { q: 'What is "takhfid" (تخفيض)?', opts: ['price tag', 'discount / sale', 'receipt', 'total'], ans: 1 },
  { q: 'How do you say "by the kilogram"?', opts: ['bil-kilo', 'wazin', 'na2dan', 'kis'], ans: 0 },
  { q: 'What does "7alib" (حليب) mean?', opts: ['cheese', 'yogurt', 'milk', 'butter'], ans: 2 },
  { q: 'What is "jibneh" (جبنة)?', opts: ['bread', 'cheese', 'milk', 'eggs'], ans: 1 },
  { q: 'How do you say "I paid in cash" in Lebanese Arabic?', opts: ['dafa3t bil-card', 'dafa3t na2dan', 'dafa3t bil-kilo', 'ma dafa3t'], ans: 1 },
  { q: 'What does "zet zaytun" (زيت زيتون) mean?', opts: ['sunflower oil', 'butter', 'olive oil', 'sesame paste'], ans: 2 },
  { q: 'What is "biDa3a maZbuta" (بضاعة مزبوطة)?', opts: ['expired product', 'good quality product / the right stuff', 'imported goods', 'cheap product'], ans: 1 },
];

const GROC_TIPS = [
  { title: '🛒 The Lebanese Supermarket Experience', body: 'Lebanese supermarkets ("supermarchet") range from global chains like Carrefour and Spinneys to local chains like TSC and Bou Khalil. Many Lebanese still prefer the "dkene" (corner shop) for daily staples — you\'ll hear "rou7 3al-dkene" (go to the corner shop) constantly. The dkene owner often gives credit ("defter" — a tab notebook) that families settle monthly.' },
  { title: '⚖️ Buying by Weight', body: 'Produce, meat, and cheese are sold "bil-kilo" (by the kilo). You\'ll tell the vendor "3tini kilo w nus khaD-Dar" (give me 1.5kg of vegetables) or "3tini nuss kilo jibneh" (half kilo of cheese). Always check the "tarix il-intihé" (expiry date) — Lebanese shoppers are vigilant about this, especially for dairy.' },
  { title: '💰 Cash Culture Survives', body: 'Despite Lebanon\'s dollar crisis, many small shops and dkenet still prefer cash — "na2dan" (cash). "Baddak tis3id bilkard?" (Can you pay by card?) is a common question. Since the economic crisis, many items have dual prices: lira price and dollar price. Always ask "shu l-se3r bil-dollar?" (what\'s the dollar price?).' },
  { title: '🧾 Haggling & Quality', body: '"Binazelek bil-7isab" means "I\'ll give you a deal." Lebanese shoppers constantly check "biDa3a maZbuta" — quality matters deeply. At produce stands, touching and squeezing fruit is expected. Vendors will push "heda freshe min l-yom" (this is fresh from today). The phrase "ma fi ghero" (there\'s nothing better) is used to close the deal.' },
];
