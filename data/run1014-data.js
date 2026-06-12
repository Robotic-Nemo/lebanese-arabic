// R1014 — NEW FEATURE: Lebanese Gold Souk & Jewelry Culture (gld)

const GLD_WORDS = [
  { ar: 'سوق الذهب', tr: 'sou2 id-dahab', en: 'gold souk / gold market', cat: 'places' },
  { ar: 'صايغ', tr: 'Sayi3', en: 'goldsmith / jeweler', cat: 'people' },
  { ar: 'ذهب', tr: 'dahab', en: 'gold', cat: 'metals' },
  { ar: 'فضة', tr: 'feDDa', en: 'silver', cat: 'metals' },
  { ar: 'بلاتين', tr: 'blatine', en: 'platinum', cat: 'metals' },
  { ar: 'عيار', tr: '3ayar', en: 'karat / gold purity grade (18k, 21k, 24k)', cat: 'metals' },
  { ar: 'عيار ثمانتعش', tr: '3ayar tamantashar', en: '18-karat gold', cat: 'metals' },
  { ar: 'عيار واحد وعشرين', tr: '3ayar wa7id w-3ishrin', en: '21-karat gold', cat: 'metals' },
  { ar: 'خاتم', tr: 'khatem', en: 'ring', cat: 'jewelry' },
  { ar: 'إسوارة', tr: 'iswara', en: 'bracelet', cat: 'jewelry' },
  { ar: 'قلادة', tr: '2lede', en: 'necklace', cat: 'jewelry' },
  { ar: 'حلق', tr: '7al2', en: 'earrings', cat: 'jewelry' },
  { ar: 'سلسلة', tr: 'silsle', en: 'chain / necklace chain', cat: 'jewelry' },
  { ar: 'دبلة', tr: 'dbele', en: 'wedding band / engagement ring', cat: 'jewelry' },
  { ar: 'مهر', tr: 'mahr', en: 'dowry gold / bridal gold gift', cat: 'culture' },
  { ar: 'شبكة', tr: 'shbeke', en: 'engagement gift set (gold jewelry)', cat: 'culture' },
  { ar: 'بالوزن', tr: 'bil-wazin', en: 'by weight (how gold is sold)', cat: 'shopping' },
  { ar: 'سعر الغرام', tr: 'si3r il-ghram', en: 'price per gram', cat: 'shopping' },
  { ar: 'أجرة الصياغة', tr: 'ujrit iS-Siyagha', en: 'craftsmanship fee / making charge', cat: 'shopping' },
  { ar: 'فاتورة', tr: 'fattoura', en: 'receipt / invoice', cat: 'shopping' },
  { ar: 'مرصع', tr: 'muraSSa3', en: 'studded with gems / encrusted', cat: 'jewelry' },
  { ar: 'ألماس', tr: 'almas', en: 'diamond', cat: 'metals' },
  { ar: 'حجر كريم', tr: '7ajar karim', en: 'gemstone / precious stone', cat: 'metals' },
  { ar: 'استثمار بالذهب', tr: 'istithmar bid-dahab', en: 'investing in gold (Lebanese savings habit)', cat: 'culture' },
  { ar: 'مزيف', tr: 'mzayyaf', en: 'fake / counterfeit (gold)', cat: 'shopping' },
];

const GLD_CATS = ['places', 'people', 'metals', 'jewelry', 'culture', 'shopping'];

const GLD_DRILLS = [
  { q: 'What does "sou2 id-dahab" (سوق الذهب) mean?', opts: ['jewelry box', 'gold souk / gold market', 'silver shop', 'diamond store'], ans: 1 },
  { q: 'What is a "Sayi3" (صايغ)?', opts: ['gold buyer', 'goldsmith / jeweler', 'gem cutter', 'pawn broker'], ans: 1 },
  { q: 'How do you say "karat / gold purity grade" in Lebanese Arabic?', opts: ['dahab', '3ayar', 'wazin', 'mahr'], ans: 1 },
  { q: 'What is "dbele" (دبلة)?', opts: ['necklace', 'bracelet', 'wedding band / engagement ring', 'earrings'], ans: 2 },
  { q: 'What does "mahr" (مهر) mean?', opts: ['gold chain', 'dowry gold / bridal gold gift', 'craftsmanship fee', 'gold price'], ans: 1 },
  { q: 'How do you say "by weight" (how gold is sold)?', opts: ['bil-wazin', '3ayar', 'fattoura', 'muraSSa3'], ans: 0 },
  { q: 'What is "shbeke" (شبكة) in Lebanese culture?', opts: ['gold investment', 'silver bracelet', 'engagement gift set (gold jewelry)', 'gold chain'], ans: 2 },
  { q: 'What does "ujrit iS-Siyagha" (أجرة الصياغة) mean?', opts: ['gold price', 'diamond fee', 'craftsmanship fee / making charge', 'receipt'], ans: 2 },
  { q: 'How do you say "necklace" in Lebanese Arabic?', opts: ['7al2', '2lede', 'iswara', 'silsle'], ans: 1 },
  { q: 'What is "istithmar bid-dahab" (استثمار بالذهب)?', opts: ['gold shopping', 'investing in gold', 'gold exhibition', 'gold loan'], ans: 1 },
  { q: 'What does "mzayyaf" (مزيف) mean?', opts: ['polished', 'engraved', 'fake / counterfeit', 'heavy'], ans: 2 },
  { q: 'How do you say "bracelet" in Lebanese Arabic?', opts: ['khatem', '2lede', 'iswara', 'silsle'], ans: 2 },
];

const GLD_TIPS = [
  { title: '⚖️ Gold is Sold by Weight', body: 'In Lebanese gold souks, jewelry is priced "bil-wazin" (by weight) based on daily spot price per gram, plus "ujrit iS-Siyagha" (craftsmanship fee) which varies by design complexity. Always ask for a "fattoura" (receipt) listing weight and karat. The most common karaten are 18k (3ayar tamantashar) and 21k (3ayar wa7id w-3ishrin).' },
  { title: '💍 The Shbeke Tradition', body: '"Shbeke" is the gold jewelry set given by the groom\'s family to the bride at engagement. It typically includes a ring, necklace, bracelet, and earrings — all matching. The value signals the family\'s status and seriousness. Negotiating the shbeke is a family affair that can go on for weeks.' },
  { title: '🏦 Gold as Lebanese Savings', body: 'Many Lebanese families don\'t trust banks — instead they "istithmar bid-dahab" (invest in gold). Gold is bought in coins (Lebanese lira era) or bars, stored at home or in safety deposits. During crises, it\'s liquidated instantly. "Dahab is better than dollars" is a common Lebanese grandmother proverb.' },
  { title: '🛡️ Spotting Fake Gold', body: '"Mzayyaf" gold is a real risk in informal markets. Lebanese buyers know to check the "3ayar" stamp on every piece — 18k is stamped 750 (75% pure), 21k is 875. Real gold souks guarantee authenticity. Ask the "Sayi3" for the stamp if in doubt. A small magnet test also helps — real gold isn\'t magnetic.' },
];
