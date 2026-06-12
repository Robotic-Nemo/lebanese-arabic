// R636 — NEW FEATURE: Lebanese Dabke & Folk Dance (dbk)

const DBK_CATS = [
  { id: 'dance',   label: '💃 Dance & Moves' },
  { id: 'music',   label: '🎶 Music & Instruments' },
  { id: 'culture', label: '🇱🇧 Culture & Occasions' },
  { id: 'calls',   label: '📣 Calls & Expressions' },
];

const DBK_WORDS = [
  // Dance & Moves
  { ar: 'الدبكة',      tr: 'l-dabke',        en: 'the dabke (folk dance)',  cat: 'dance' },
  { ar: 'نزول',        tr: 'nzool',           en: 'stepping down (move)',    cat: 'dance' },
  { ar: 'خط',          tr: 'khaTT',           en: 'the line (of dancers)',   cat: 'dance' },
  { ar: 'الراس',       tr: 'l-raas',          en: 'the leader (lit. head)',  cat: 'dance' },
  { ar: 'دوران',       tr: 'dawwaran',        en: 'spinning / turning',      cat: 'dance' },
  { ar: 'قفزة',        tr: '2afze',           en: 'a jump',                  cat: 'dance' },
  { ar: 'مشى',         tr: 'masha',           en: 'walked / stepped',        cat: 'dance' },
  // Music & Instruments
  { ar: 'الدبكة بتحكي', tr: 'l-dabke bte7ki', en: 'the dabke speaks',       cat: 'music' },
  { ar: 'الميجانا',    tr: 'l-miijana',       en: 'the mijana (folk melody)',cat: 'music' },
  { ar: 'العتابا',     tr: 'l-3ataaba',       en: 'the ataba (folk song)',   cat: 'music' },
  { ar: 'الطبلة',      tr: 'l-Tabla',         en: 'the drum',                cat: 'music' },
  { ar: 'المجوز',      tr: 'l-mijwez',        en: 'the mijwez (flute)',      cat: 'music' },
  { ar: 'الدحية',      tr: 'l-da7iye',        en: 'the da7iye (Shia dance)', cat: 'music' },
  { ar: 'إيقاع',       tr: 'ii2aa3',          en: 'rhythm / beat',           cat: 'music' },
  // Culture & Occasions
  { ar: 'عرس',         tr: '3irs',            en: 'a wedding',               cat: 'culture' },
  { ar: 'مهرجان',      tr: 'mahrajan',        en: 'a festival',              cat: 'culture' },
  { ar: 'فرح',         tr: 'fara7',           en: 'joy / celebration',       cat: 'culture' },
  { ar: 'تراث',        tr: 'turaas',          en: 'heritage / tradition',    cat: 'culture' },
  { ar: 'أصل',         tr: '2aSl',            en: 'origins / roots',         cat: 'culture' },
  { ar: 'أهل الجنوب',  tr: '2ahl l-jnoob',    en: 'people of the south',    cat: 'culture' },
  { ar: 'زفة',         tr: 'zaffi',           en: 'wedding procession',      cat: 'culture' },
  // Calls & Expressions
  { ar: 'هالا هالا',   tr: 'haala haala',     en: 'hey hey! (cheer)',        cat: 'calls' },
  { ar: 'عالعريس',     tr: '3a-l-3areis',     en: 'for the groom! (cheer)', cat: 'calls' },
  { ar: 'يلا نرقص',    tr: 'yalla nru2uS',    en: "let's dance!",           cat: 'calls' },
  { ar: 'تسلم إيديك',  tr: 'tislam iidek',    en: 'bless your hands (praise)', cat: 'calls' },
  { ar: 'شدّ الخط',    tr: 'shadd l-khaTT',   en: 'hold the line! (command)', cat: 'calls' },
  { ar: 'عالروح',      tr: '3a-r-ruu7',       en: 'with spirit / soulfully', cat: 'calls' },
  { ar: 'الله وين الدبكة', tr: 'allah ween l-dabke', en: 'where is the dabke! (exclamation)', cat: 'calls' },
];

const DBK_DRILLS = [
  { q: 'How do you say "the dabke" in Lebanese?', opts: ['l-raas','l-dabke','l-miijana','l-3ataaba'], ans: 1 },
  { q: 'What does "l-raas" mean in dabke?', opts: ['the drum','the jump','the leader','the line'], ans: 2 },
  { q: '"yalla nru2uS" means?', opts: ['hold the line','bless your hands',"let's dance",'the beat'], ans: 2 },
  { q: 'How do you say "the drum"?', opts: ['l-mijwez','l-Tabla','l-miijana','l-3ataaba'], ans: 1 },
  { q: 'What does "turaas" mean?', opts: ['wedding','jump','heritage/tradition','rhythm'], ans: 2 },
  { q: '"3irs" means?', opts: ['a festival','a jump','a melody','a wedding'], ans: 3 },
  { q: 'How do you cheer "let\'s dance"?', opts: ['3a-r-ruu7','haala haala','yalla nru2uS','shadd l-khaTT'], ans: 2 },
  { q: 'What is "l-mijwez"?', opts: ['the drum','the flute','the line','the rhythm'], ans: 1 },
  { q: '"shadd l-khaTT" means?', opts: ['hold the line','spin around','step down','celebrate'], ans: 0 },
  { q: 'How do you say "a jump" in Lebanese?', opts: ['nzool','dawwaran','2afze','masha'], ans: 2 },
  { q: 'What does "fara7" mean?', opts: ['heritage','wedding procession','joy/celebration','festival'], ans: 2 },
  { q: '"zaffi" means?', opts: ['the dabke leader','wedding procession','folk melody','spinning'], ans: 1 },
  { q: 'How do you say "with spirit" in Lebanese?', opts: ['3a-l-3areis','3a-r-ruu7','haala haala','tislam iidek'], ans: 1 },
  { q: 'What does "l-miijana" mean?', opts: ['the drum','the festival','the folk melody','the jump'], ans: 2 },
  { q: '"tislam iidek" means?', opts: ['hold the line','bless your hands','let\'s dance','the groom'], ans: 1 },
];

const DBK_TIPS = [
  { title: 'Dabke basics', body: '"Dabke" (دبكة) literally means "stomping of feet." It\'s a Levantine line dance performed at weddings, festivals. The line leader "l-raas" sets the moves and pace.' },
  { title: 'Regional styles', body: 'Lebanon has regional dabke styles: North Lebanese is lively with high kicks; South Lebanese (da7iye) is more rhythmic. Each village has its own twist.' },
  { title: 'Wedding chants', body: 'At weddings say "3a-l-3areis!" (for the groom!) or "3a-l-3aroose!" (for the bride!). "Haala haala!" is a universal cheer to keep energy up.' },
  { title: 'Instruments', body: '"l-mijwez" (double-pipe flute) + "l-Tabla" (goblet drum) are the core dabke duo. "l-miijana" and "l-3ataaba" are call-and-response folk song styles often paired with dabke.' },
  { title: 'Praising the dancer', body: '"Tislam iidek!" (bless your hands!) praises skill. "Allah ween l-dabke!" is an exclamation of admiration. "3a-r-ruu7" means dancing with full spirit and soul.' },
  { title: 'Heritage pride', body: '"Turaas" (heritage) and "2aSl" (roots/origins) are deeply important words. Lebanese people take great pride in dabke as living cultural heritage — not just a dance.' },
];
