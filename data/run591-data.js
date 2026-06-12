// R591 — NEW FEATURE: Lebanese Books, Reading & Intellectual Life (prefix: bks)

const BKS_WORDS = [
  // reading & books
  { ar: 'كتاب', tr: 'ktaab', en: 'book', cat: 'reading' },
  { ar: 'مكتبة', tr: 'maktabe', en: 'bookshop / library', cat: 'reading' },
  { ar: 'بقرأ', tr: 'bi2ra', en: 'I read / he reads (present)', cat: 'reading' },
  { ar: 'روايه', tr: 'riwaaye', en: 'novel', cat: 'reading' },
  { ar: 'قصيدة', tr: '2aSiide', en: 'poem', cat: 'reading' },
  { ar: 'مقالة', tr: 'ma2aale', en: 'article / essay', cat: 'reading' },
  { ar: 'ترجمة', tr: 'tarjame', en: 'translation', cat: 'reading' },
  { ar: 'منشورات', tr: 'manshuuraat', en: 'publications / publisher (pl.)', cat: 'reading' },
  // writers & thinkers
  { ar: 'كاتب', tr: 'kaatib', en: 'writer / author', cat: 'writers' },
  { ar: 'شاعر', tr: 'shaa3ir', en: 'poet', cat: 'writers' },
  { ar: 'مفكر', tr: 'mufakkir', en: 'intellectual / thinker', cat: 'writers' },
  { ar: 'ناشر', tr: 'naashir', en: 'publisher', cat: 'writers' },
  { ar: 'نقد', tr: 'na2d', en: 'criticism / critique', cat: 'writers' },
  // Beirut literary scene
  { ar: 'شارع الحمرا', tr: 'shaari3 el-Hamra', en: 'Hamra Street (Beirut\'s intellectual hub)', cat: 'beirut' },
  { ar: 'منتدى', tr: 'muntada', en: 'cultural forum / gathering space', cat: 'beirut' },
  { ar: 'معرض الكتاب', tr: 'ma3raD el-ktaab', en: 'book fair', cat: 'beirut' },
  { ar: 'عالم الكتاب', tr: '3aalam el-ktaab', en: 'book world (phrase for literary culture)', cat: 'beirut' },
  { ar: 'دار النشر', tr: 'daar el-nashr', en: 'publishing house', cat: 'beirut' },
  // language & learning
  { ar: 'لهجة', tr: 'lahje', en: 'dialect / accent', cat: 'language' },
  { ar: 'فصحى', tr: 'fuS7a', en: 'Modern Standard Arabic (MSA)', cat: 'language' },
  { ar: 'عامية', tr: '3ammiyye', en: 'colloquial / dialect Arabic', cat: 'language' },
  { ar: 'ثنائي اللغة', tr: 'thunaaii el-lugha', en: 'bilingual', cat: 'language' },
  { ar: 'مصطلح', tr: 'muSTala7', en: 'term / terminology', cat: 'language' },
  // opinions & discussion
  { ar: 'برأيي', tr: 'b-ra2yi', en: 'in my opinion', cat: 'opinions' },
  { ar: 'في نظري', tr: 'fi naZari', en: 'in my view / as I see it', cat: 'opinions' },
  { ar: 'موافق', tr: 'muwaafi2', en: 'I agree', cat: 'opinions' },
  { ar: 'مش موافق', tr: 'mish muwaafi2', en: 'I disagree', cat: 'opinions' },
  { ar: 'من وجهة نظري', tr: 'min wijhet naZari', en: 'from my point of view', cat: 'opinions' },
];

const BKS_DRILLS = [
  {
    q: 'What makes Beirut historically significant in Arab literary culture?',
    opts: ['It had the first printing press in the Arab world (brought by missionaries in 1610)', 'Its oil wealth funded publishing throughout the region', 'The Quran was first translated there', 'It was the center of Ottoman poetry'],
    ans: 0,
    exp: 'Beirut received one of the first printing presses in the Arab world, brought by Maronite monks. By the 19th century, Beirut was the Arab world\'s publishing capital. The al-Nahda (Arab Renaissance) intellectual movement was deeply rooted in Lebanon, producing writers and thinkers who shaped modern Arabic literature.'
  },
  {
    q: 'What is the difference between فصحى (fuS7a) and عامية (3ammiyye)?',
    opts: ['fuS7a is written only; 3ammiyye is spoken only', 'fuS7a is Modern Standard Arabic used in formal writing; 3ammiyye is colloquial spoken dialect', 'fuS7a is Lebanese; 3ammiyye is pan-Arab', 'They are identical — just different spellings'],
    ans: 1,
    exp: 'fuS7a = Modern Standard Arabic (MSA) — used in literature, news, formal writing. 3ammiyye = colloquial dialect. Lebanese Arabic is 3ammiyye. Most Lebanese are effectively bilingual between the two, plus often French and/or English. This linguistic layering shapes Lebanese literary identity.'
  },
  {
    q: 'You want to express your opinion politely in a discussion. Which phrase works?',
    opts: ['معرض الكتاب (ma3raD el-ktaab)', 'برأيي (b-ra2yi)', 'ناشر (naashir)', 'ترجمة (tarjame)'],
    ans: 1,
    exp: 'b-ra2yi = "in my opinion." A soft, respectful way to introduce your view. Lebanese intellectual culture values debate and argumentation — knowing opinion phrases (b-ra2yi, fi naZari, min wijhet naZari) lets you engage in the rich discussion culture of Beirut cafés and salons.'
  },
  {
    q: 'What is معرض الكتاب (ma3raD el-ktaab)?',
    opts: ['A famous Lebanese novelist', 'The annual Beirut International Book Fair — one of the oldest in the Arab world', 'A neighborhood known for booksellers', 'A literary criticism journal'],
    ans: 1,
    exp: 'ma3raD el-ktaab = "book fair." The Beirut International Book Fair has run since 1956 — one of the longest-running in the Arab world. For Lebanese intellectuals, it\'s a major cultural event. Beirut\'s publishers (like Dar al-Adab, Dar al-Nahar) are respected throughout the Arab world.'
  },
  {
    q: 'A Lebanese person is described as مفكر (mufakkir). What does this mean?',
    opts: ['A novelist who writes fiction', 'A public intellectual / thinker — someone who engages with ideas', 'A poet who performs spoken word', 'A journalist at a newspaper'],
    ans: 1,
    exp: 'mufakkir = intellectual / thinker. Lebanon has produced some of the Arab world\'s most influential intellectuals — from Kahlil Gibran (Jubran Khalil Jubran) to Amin Maalouf to Edward Said (Palestinian-American but Beirut-educated). The figure of the mufakkir is highly respected in Lebanese cultural life.'
  },
  {
    q: 'What does ثنائي اللغة (thunaaii el-lugha) describe?',
    opts: ['A book written in two volumes', 'Being bilingual — speaking two languages', 'A translation from Arabic to another language', 'A dialect that mixes Arabic and French'],
    ans: 1,
    exp: 'thunaaii el-lugha = "bilingual." Lebanon\'s multilingual culture is perhaps its most distinctive feature — many Lebanese speak Arabic, French, and English fluently. Lebanese literature often exists in three languages simultaneously, and many Beirut bookshops stock French and English literature alongside Arabic.'
  },
  {
    q: 'When would you say مش موافق (mish muwaafi2) in a literary discussion?',
    opts: ['When you strongly agree with the critic\'s view', 'When you disagree with what was just said', 'When you want more time to think', 'When you have not read the book'],
    ans: 1,
    exp: 'mish muwaafi2 = "I disagree." Lebanese intellectual culture has a strong tradition of debate and polite disagreement — the café culture of Hamra and Gemmayzeh has always been a place for spirited discussions. Knowing disagreement phrases is essential for engaging authentically in these conversations.'
  },
  {
    q: 'What is the literary significance of شارع الحمرا (Hamra Street)?',
    opts: ['It is where the Beirut International Book Fair is held every year', 'It was historically Beirut\'s intellectual hub — cafés, bookshops, AUB proximity gave it a unique literary atmosphere', 'It is named after a famous Lebanese poet', 'It is the publishing district where all major publishers are located'],
    ans: 1,
    exp: 'Hamra = historically Beirut\'s intellectual and bohemian heart. The American University of Beirut (AUB) is nearby. In its golden era (1960s-70s), Hamra\'s cafés and bookshops drew writers, intellectuals, and revolutionaries from across the Arab world. Despite decline post-civil war, it retains cultural resonance.'
  },
  {
    q: 'What does نقد (na2d) mean in a literary context?',
    opts: ['Cash payment for a book', 'Literary criticism / critique', 'A negative review that hurts sales', 'Translation feedback'],
    ans: 1,
    exp: 'na2d = criticism / critique. In literary Arabic, نقد أدبي (na2d adabi) = literary criticism. Lebanon has a strong tradition of literary criticism — the Lebanese press historically had major literary supplements. na2d can be positive (analytical) or negative; context distinguishes. The root also means "cash" in everyday speech — different register.'
  },
  {
    q: 'Kahlil Gibran (Jubran Khalil Jubran) wrote The Prophet. What language did he primarily write in?',
    opts: ['Modern Standard Arabic only', 'Both Arabic and English — he was a pioneering Lebanese-American writer bridging both worlds', 'French, as he was educated at a French mission school', 'Lebanese dialect, to preserve authentic speech'],
    ans: 1,
    exp: 'Gibran wrote in both Arabic and English. Born in Bsharri, Lebanon (1883), emigrated to Boston at 12. The Prophet (1923) was written in English and became one of the best-selling poetry books of the 20th century. His Arabic works were also influential in the Arab Renaissance. He embodies Lebanon\'s bilingual literary tradition.'
  },
];

const BKS_TIPS = [
  'Beirut has been called the "publishing capital of the Arab world." Publishers like Dar al-Adab (founded 1956), Dar al-Nahar, and Dar al-Saqi have shaped modern Arabic literature. Even during the civil war, Beirut\'s presses continued running — books became symbols of cultural resistance.',
  'Lebanon\'s multilingual reality shapes its literature profoundly. Writers like Amin Maalouf write in French; Gibran wrote in English and Arabic; others write in Lebanese dialect. This linguistic plurality is considered a strength, not a fragmentation, of Lebanese cultural identity.',
  'The مهجر (mahjar) tradition — Lebanese émigré literature — produced some of the most important Arabic literature of the 20th century. Gibran, Mikhail Naimy, and Ilya Abu Madi wrote from the Americas while remaining deeply connected to Lebanese themes of longing, identity, and spiritual seeking.',
  'Beirut\'s civil war (1975-1990) paradoxically strengthened literary culture. Writers documented the conflict; publishers kept printing. The 2020 Beirut explosion prompted another wave of urgent literature. Lebanon\'s literary tradition has always been shaped by the experience of living through crisis.',
  'The مكتبة (maktabe) occupies a special place in Lebanese culture. Antoine Bookshop (Librarie Antoine), Virginie\'s Books, and T-Marbouta are cultural institutions. Independent bookshops in Beirut survived where they collapsed elsewhere — browsing them reveals Lebanon\'s cosmopolitan literary culture.',
];

const BKS_ABOUT = 'Lebanon has one of the richest literary traditions in the Arab world. Beirut served as the Arab world\'s intellectual capital for much of the 20th century, hosting writers, intellectuals, and publishers from across the region. The al-Nahda (Arab Renaissance) of the 19th century found its center here; the Lebanese diaspora (mahjar) produced Kahlil Gibran; the civil war spawned urgent literature of witness. Today, despite economic collapse, Lebanon\'s literary culture persists — in independent bookshops, annual book fairs, and a reading public that takes literature seriously. Understanding words like fuS7a vs 3ammiyye, mufakkir, and na2d opens the door to Lebanon\'s intellectual life.';
