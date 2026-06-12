// R885 — NEW FEATURE: Lebanese Engagement & Proposal Culture (eng)

const ENG_CATS = ['proposal', 'engagement', 'families', 'expressions'];

const ENG_WORDS = [
  // proposal
  { a: 'خطبة', tr: 'khetbe', en: 'engagement / proposal', cat: 'proposal' },
  { a: 'خاطب', tr: 'khaaTib', en: 'fiancé / suitor', cat: 'proposal' },
  { a: 'خطوبة', tr: 'khTouube', en: 'betrothal / engagement period', cat: 'proposal' },
  { a: 'طلب إيدها', tr: 'Talab eedha', en: 'asked for her hand', cat: 'proposal' },
  { a: 'رحنا نخطبها', tr: 'ri7na nkhatbha', en: 'we went to propose to her', cat: 'proposal' },
  { a: 'قبلت فيه', tr: '2ebilet fii', en: 'she accepted him', cat: 'proposal' },
  { a: 'رفضته', tr: 'rafeZte', en: 'she rejected him', cat: 'proposal' },
  // engagement
  { a: 'حفلة الخطوبة', tr: '7aflet il-khTouube', en: 'engagement party', cat: 'engagement' },
  { a: 'دبلة', tr: 'deble', en: 'engagement ring', cat: 'engagement' },
  { a: 'شبكة', tr: 'shaabke', en: 'jewelry gift set at engagement', cat: 'engagement' },
  { a: 'مخطوبة', tr: 'makhTouube', en: 'engaged woman', cat: 'engagement' },
  { a: 'مخطوب', tr: 'makhToub', en: 'engaged man', cat: 'engagement' },
  { a: 'فترة الخطوبة', tr: 'fatret il-khTouube', en: 'engagement period', cat: 'engagement' },
  { a: 'سبحة', tr: 'sub7a', en: 'prayer beads gifted at engagement', cat: 'engagement' },
  // families
  { a: 'أهل العريس', tr: 'ahl il-3ariss', en: "groom's family", cat: 'families' },
  { a: 'أهل العروس', tr: 'ahl il-3arouus', en: "bride's family", cat: 'families' },
  { a: 'الوالدين وافقوا', tr: 'il-waaldein waaf2u', en: 'the parents agreed', cat: 'families' },
  { a: 'زيارة العيلة', tr: 'zyaaret il-3eele', en: 'family visit (for proposal)', cat: 'families' },
  { a: 'موضوع المهر', tr: 'mawDou3 il-mahr', en: 'the matter of the dowry', cat: 'families' },
  { a: 'بركة الأهل', tr: 'barket il-ahl', en: "parents' blessing", cat: 'families' },
  { a: 'وافق الأهل', tr: 'waafa2 il-ahl', en: 'the family agreed', cat: 'families' },
  // expressions
  { a: 'مبروك الخطوبة', tr: 'mabrook il-khTouube', en: 'congratulations on the engagement', cat: 'expressions' },
  { a: 'الله يتمملكون', tr: 'alla yitammilkon', en: 'may God complete it for you (bless the union)', cat: 'expressions' },
  { a: 'عقبال الفرح', tr: '3a2bal il-fara7', en: 'wishing you joy (said at engagements)', cat: 'expressions' },
  { a: 'نص تفاحة', tr: 'noSS taffa7a', en: 'the perfect match (lit. half an apple)', cat: 'expressions' },
  { a: 'كانت من نصيبه', tr: 'kaanet min naSibo', en: 'she was meant for him (destiny)', cat: 'expressions' },
  { a: 'ما في أحلى منكن', tr: 'ma fii a7la minkon', en: 'there is nobody lovelier than you two', cat: 'expressions' },
  { a: 'الفرح بيجي بعدها', tr: 'il-fara7 biji ba3dha', en: 'the wedding comes after', cat: 'expressions' },
];

const ENG_DRILLS = [
  { q: 'How do you say "engagement"?', opts: ['khetbe', 'shaabke', 'deble', '7afle'], ans: 0 },
  { q: 'What is "engagement ring" in Lebanese?', opts: ['khTouube', 'deble', 'sub7a', 'khetbe'], ans: 1 },
  { q: '"asked for her hand" → ?', opts: ['ri7na nkhatbha', 'Talab eedha', '2ebilet fii', 'rafeZte'], ans: 1 },
  { q: 'What does "makhTouube" mean?', opts: ['married woman', 'engaged woman', 'divorced woman', 'widow'], ans: 1 },
  { q: 'How do you congratulate someone on an engagement?', opts: ['mabrook il-khTouube', '3a2bal il-fara7', 'alla yitammilkon', 'mabrook'], ans: 0 },
  { q: '"she accepted him" → ?', opts: ['rafeZte', 'kaanet min naSibo', '2ebilet fii', 'waafa2 il-ahl'], ans: 2 },
  { q: 'What is "shaabke"?', opts: ['engagement party', 'jewelry gift set at engagement', 'dowry', 'ring'], ans: 1 },
  { q: '"the parents agreed" → ?', opts: ['il-waaldein waaf2u', 'barkeet il-ahl', 'ahl il-3ariss', 'zyaaret il-3eele'], ans: 0 },
  { q: 'What does "3a2bal il-fara7" mean?', opts: ['congratulations', 'wishing you joy', 'good luck', 'may God bless'], ans: 1 },
  { q: '"half an apple" (perfect match) → ?', opts: ['naSS taffa7a', 'noSS taffa7a', 'ma fii a7la', 'kaanet min naSibo'], ans: 1 },
  { q: '"engagement period" → ?', opts: ['7aflet il-khTouube', 'fatret il-khTouube', 'mawDou3 il-mahr', 'khetbe'], ans: 1 },
  { q: '"groom\'s family" → ?', opts: ['ahl il-3arouus', 'ahl il-3ariss', 'il-waaldein', 'il-3eele'], ans: 1 },
  { q: 'What is "mahr"?', opts: ['engagement ring', 'dowry', 'blessing', 'wedding'], ans: 1 },
  { q: '"may God complete it for you" → ?', opts: ['alla yitammilkon', 'mabrook il-khTouube', '3a2bal il-fara7', 'barket il-ahl'], ans: 0 },
  { q: '"she was meant for him" → ?', opts: ['ma fii a7la minkon', 'kaanet min naSibo', 'il-fara7 biji ba3dha', 'noSS taffa7a'], ans: 1 },
  { q: '"the wedding comes after" → ?', opts: ['3a2bal il-fara7', 'il-fara7 biji ba3dha', 'alla yitammilkon', 'mabrook'], ans: 1 },
];

const ENG_TIPS = [
  { title: 'The Proposal Visit', body: 'In Lebanon, the groom\'s family formally visits the bride\'s family to propose. The groom\'s mother often leads, asking "Talab eedha" (asking for her hand). Saying no to a respected family can be delicate.' },
  { title: 'The Shaabke', body: 'The "shaabke" is a jewelry set (necklace, bracelet, earrings, ring) given by the groom\'s family. Its value signals the family\'s financial status and intention. The engagement ring ("deble") is exchanged at the party.' },
  { title: 'Engagement Party (7aflet Khtoube)', body: 'The engagement party is a major event. Both families attend. The couple exchange rings in front of witnesses. Guests say "mabrook il-khTouube" and "3a2bal il-fara7" (wishing the wedding comes soon).' },
  { title: 'The Mahr (Dowry)', body: '"Mawdou3 il-mahr" (the dowry matter) is negotiated between families before the engagement. It is a gift from groom to bride, not bride\'s family. It has symbolic and legal significance in Lebanese law.' },
  { title: 'Destiny & Blessings', body: 'Lebanese use beautiful expressions around marriage: "kaanet min naSibo" (she was his destiny), "noSS taffa7a" (perfect match, half an apple), "barket il-ahl" (parents\' blessing). These reflect deep family and fate values.' },
  { title: 'Family Consent', body: 'Getting "barket il-ahl" (parents\' blessing) is still very important in Lebanese culture even for modern couples. The groom visiting the bride\'s father to ask permission is a respected tradition even if the couple has been together for years.' },
];
