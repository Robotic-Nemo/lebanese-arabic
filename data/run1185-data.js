// R1185 — NEW FEATURE: Lebanese Florist & Flower Gifting Culture (zhr)

const ZHR_WORDS = [
  { ar: 'زهرة', tr: 'zahre', en: 'flower' },
  { ar: 'وردة', tr: 'warde', en: 'rose' },
  { ar: 'باقة زهور', tr: 'ba2et zhur', en: 'bouquet of flowers' },
  { ar: 'ياسمين', tr: 'yasmin', en: 'jasmine' },
  { ar: 'قرنفل', tr: '2aranful', en: 'carnation' },
  { ar: 'زنبق', tr: 'zanbak', en: 'lily' },
  { ar: 'بخور مريم', tr: 'bkhur maryam', en: 'cyclamen (Lebanon\'s national flower)' },
  { ar: 'محل زهور', tr: 'ma7all zhur', en: 'flower shop' },
  { ar: 'بائع زهور', tr: 'baya3 zhur', en: 'flower vendor' },
  { ar: 'عيد الأم', tr: '3id el-2umm', en: "Mother's Day (March 21 in Lebanon)" },
  { ar: 'طازج', tr: 'taze', en: 'fresh' },
  { ar: 'ذابل', tr: 'dabel', en: 'wilted / dried out' },
  { ar: 'إكليل', tr: 'iklil', en: 'floral wreath / crown' },
  { ar: 'زينة', tr: 'zine', en: 'decoration / adornment' },
  { ar: 'عطر الزهور', tr: '3atar el-zhur', en: 'flower fragrance' },
  { ar: 'هدية', tr: 'hadiye', en: 'gift' },
  { ar: 'نرجس', tr: 'narjis', en: 'narcissus / daffodil' },
  { ar: 'خزامى', tr: 'khuzama', en: 'lavender' },
  { ar: 'سوق الزهور', tr: 'su2 el-zhur', en: 'flower market' },
  { ar: 'ورد البيلسان', tr: 'ward el-bilsan', en: 'balsam / touch-me-not flower' },
];

const ZHR_DRILLS = [
  { q: 'Lebanon\'s national flower is:', opts: ['cyclamen (bkhur maryam)', 'rose (warde)', 'jasmine (yasmin)', 'lily (zanbak)'], ans: 0 },
  { q: 'When is Mother\'s Day in Lebanon?', opts: ['March 21', 'May (2nd Sunday)', 'February 14', 'April 1'], ans: 0 },
  { q: '"Dabel" means:', opts: ['wilted / dried out', 'fresh', 'fragrant', 'colorful'], ans: 0 },
  { q: 'How do you say "flower shop"?', opts: ['ma7all zhur', 'su2 el-zhur', 'baya3 zhur', 'ba2et zhur'], ans: 0 },
  { q: '"Iklil" in a Lebanese flower shop means:', opts: ['floral wreath / crown', 'bouquet', 'single stem', 'potted plant'], ans: 0 },
  { q: '"Ba2et zhur" means:', opts: ['bouquet of flowers', 'flower market', 'flower vendor', 'wilted flowers'], ans: 0 },
  { q: '"Taze" describes flowers that are:', opts: ['fresh', 'wilted', 'artificial', 'dried'], ans: 0 },
  { q: 'Jasmine in Lebanese Arabic is:', opts: ['yasmin', '2aranful', 'zanbak', 'narjis'], ans: 0 },
];

const ZHR_TIPS = [
  {
    title: "Mother's Day — Lebanon's Biggest Flower Day",
    body: "Lebanon celebrates Mother's Day on March 21 (first day of spring), unlike the Western May date. Flower shops run out of stock days before. Red carnations (2aranful a7mar) are the traditional Mother's Day flower. \"3id el-2umm mubarak\" is the greeting. It's treated as a national holiday — schools close, families gather.",
  },
  {
    title: "Cyclamen — The National Flower",
    body: "Bkhur maryam (cyclamen) is Lebanon's national flower and grows wild across Lebanese mountains from November to March. Its Arabic name means \"Mary's incense.\" Picking wild cyclamen is technically illegal but widely done. You'll find it on Lebanese currency, stamps, and national emblems. Beirut's old neighborhoods often named streets after it.",
  },
  {
    title: 'Flowers at Every Life Event',
    body: "Lebanese use flowers for every occasion: 3aza (condolences — white flowers, never red), weddings (3irs — flower arches/ikliil are elaborate), graduations, hospital visits, and airport arrivals for returning diaspora. \"Jiblo warde\" (bring her a flower) is reflexive at any celebration. Florists cluster near hospitals and churches.",
  },
  {
    title: 'Jasmine & Street Vendors',
    body: 'Yasmin is the scent of Lebanese summer nights. Itinerant vendors sell strings of jasmine flowers ("3az2 yasmin") in the evening — threaded into bracelets or necklaces for ~1000 LL. Women pin them to their hair or hang them in cars. The scent is inseparable from Beirut summer memory. "Yasmin ya yasmin" is a classic street cry.',
  },
];
