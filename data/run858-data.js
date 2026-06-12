// R858 — NEW FEATURE: Lebanese Condolence & Funeral Culture (aza)

const AZA_CATS = ['condolences','funeral','customs','expressions'];

const AZA_WORDS = [
  // condolences
  { a: 'عزاء', tr: '3aza', en: 'condolence visit — Lebanese families host the 3aza at home for 3 days after a death', cat: 'condolences' },
  { a: 'تعزية', tr: 'ta3ziye', en: 'offering condolences — visiting the bereaved family to express sorrow', cat: 'condolences' },
  { a: 'الله يرحمو', tr: 'alla yir7amo', en: '"May God have mercy on him" — said whenever a deceased man is mentioned', cat: 'condolences' },
  { a: 'الله يرحمها', tr: 'alla yir7ama', en: '"May God have mercy on her" — said whenever a deceased woman is mentioned', cat: 'condolences' },
  { a: 'الباقي بحياتك', tr: 'il-baa2i b7ayaatak', en: '"May you live on" — the standard response from the bereaved to condolence visitors', cat: 'condolences' },
  { a: 'روحو بالسلامة', tr: 'ruu7u bis-slaame', en: '"May they go in peace" — said for the soul of the deceased', cat: 'condolences' },
  { a: 'عظّم الله أجرك', tr: '3azzam alla 2ajrak', en: '"May God magnify your reward" — deepest condolence phrase, for close losses', cat: 'condolences' },
  // funeral
  { a: 'جنازة', tr: 'jnaaze', en: 'funeral procession — the formal ceremony and transport of the deceased', cat: 'funeral' },
  { a: 'دفن', tr: 'dafn', en: 'burial — the interment ceremony at the cemetery', cat: 'funeral' },
  { a: 'مقبرة', tr: 'ma2bara', en: 'cemetery — Lebanese tend family graves carefully and visit on religious holidays', cat: 'funeral' },
  { a: 'فقيد', tr: 'fa2eed', en: 'the deceased — respectful term for the person who passed away', cat: 'funeral' },
  { a: 'مشّيناه', tr: 'mashyeenaa', en: '"We walked him to his rest" — Lebanese phrase announcing a completed burial', cat: 'funeral' },
  { a: 'صلاة الجنازة', tr: 'Salaat il-jnaaze', en: 'funeral prayer — religious service before burial, held at mosque or church', cat: 'funeral' },
  { a: 'بيت الحزن', tr: 'beet il-7ozn', en: 'house of mourning — the family home during the 3-day condolence visit period', cat: 'funeral' },
  // customs
  { a: 'ثلاثة أيام', tr: 'tlaatit iyyaam', en: 'three days — the standard Lebanese condolence reception period at the home', cat: 'customs' },
  { a: 'مرّت سنة', tr: 'marrit sene', en: '"A year has passed" — the first death anniversary, marked with prayers and grave visits', cat: 'customs' },
  { a: 'فاتحة', tr: 'faa7te', en: 'Al-Fatiha — the opening Quran verse, read silently for the deceased soul', cat: 'customs' },
  { a: 'شمعة', tr: 'sham3a', en: 'candle — lit in churches for the deceased soul, a Lebanese Christian practice', cat: 'customs' },
  { a: 'صورة الفقيد', tr: 'Soorit il-fa2eed', en: 'photo of the deceased — displayed prominently during the condolence visit', cat: 'customs' },
  { a: 'حلويات الحزن', tr: '7alawiyyaat il-7ozn', en: 'mourning sweets — dates and ma3moul cookies served to condolence visitors', cat: 'customs' },
  // expressions
  { a: 'وجع قلب', tr: 'waja3 2alb', en: '"Heart pain" — genuine grief expression, the Lebanese way to say deep sorrow', cat: 'expressions' },
  { a: 'تركنا وراح', tr: 'tarakna w raa7', en: '"He left us and went" — gentle Lebanese way of saying someone passed away', cat: 'expressions' },
  { a: 'ما أشقى الفراق', tr: 'ma ash2a il-fraaq', en: '"How bitter is separation" — poetic expression of grief used at funerals', cat: 'expressions' },
  { a: 'يسلم راسك', tr: 'yislam raasak', en: '"May your head be safe" — said to the family of the deceased, wishing their wellbeing', cat: 'expressions' },
  { a: 'طال عمرك', tr: 'Taal 3omrak', en: '"Long life to you" — said to the bereaved, wishing them long life after the loss', cat: 'expressions' },
  { a: 'ما فينا ما نيجي', tr: 'ma fiina ma niiji', en: '"We couldn\'t not come" — explaining why one felt compelled to visit the 3aza', cat: 'expressions' },
  { a: 'آخر الأحزان', tr: '2aakhir il-a7zaan', en: '"Last of the sorrows" — wishing no more grief on the bereaved family', cat: 'expressions' },
  { a: 'الذكر الطيّب', tr: 'iz-zikr it-Tayyib', en: '"The good memory" — "keep good memories of them" — common Lebanese consolation', cat: 'expressions' }
];

const AZA_DRILLS = [
  { q: 'What is "condolence visit" in Lebanese?', opts: ['ta3ziye', '3aza', 'jnaaze', 'dafn'], ans: 1 },
  { q: '"May God have mercy on him" in Lebanese?', opts: ['alla yir7ama', 'alla yir7amo', 'il-baa2i b7ayaatak', '3azzam alla 2ajrak'], ans: 1 },
  { q: 'What does "il-baa2i b7ayaatak" mean?', opts: ['may you live on', 'may God forgive him', 'go in peace', 'how bitter is separation'], ans: 0 },
  { q: 'How do you say "funeral procession"?', opts: ['dafn', 'ma2bara', 'jnaaze', 'Salaat il-jnaaze'], ans: 2 },
  { q: 'What is "cemetery" in Lebanese?', opts: ['beet il-7ozn', 'ma2bara', 'fa2eed', 'sham3a'], ans: 1 },
  { q: '"House of mourning" in Lebanese?', opts: ['beet il-7ozn', 'tlaatit iyyaam', 'marrit sene', 'Soorit il-fa2eed'], ans: 0 },
  { q: 'What does "fa2eed" mean?', opts: ['funeral prayer', 'cemetery', 'the deceased', 'candle'], ans: 2 },
  { q: '"Heart pain" (grief expression) in Lebanese?', opts: ['waja3 2alb', 'tarakna w raa7', 'Taal 3omrak', '2aakhir il-a7zaan'], ans: 0 },
  { q: 'How do you say "burial"?', opts: ['jnaaze', 'dafn', 'fa2eed', 'Salaat il-jnaaze'], ans: 1 },
  { q: '"He left us and went" — gentle Lebanese phrase for passing?', opts: ['yislam raasak', 'tarakna w raa7', 'iz-zikr it-Tayyib', 'ma ash2a il-fraaq'], ans: 1 },
  { q: 'Standard condolence visit period in Lebanon?', opts: ['one day', 'three days', 'one week', 'forty days'], ans: 1 },
  { q: '"Last of the sorrows" — wishing no more grief?', opts: ['marrit sene', 'Taal 3omrak', '2aakhir il-a7zaan', 'ma fiina ma niiji'], ans: 2 },
  { q: 'What is "candle" (for the deceased) in Lebanese?', opts: ['faa7te', 'sham3a', 'Soorit il-fa2eed', '7alawiyyaat il-7ozn'], ans: 1 },
  { q: '"May God magnify your reward" — deepest condolence?', opts: ['alla yir7amo', 'il-baa2i b7ayaatak', '3azzam alla 2ajrak', 'ruu7u bis-slaame'], ans: 2 },
  { q: 'What does "iz-zikr it-Tayyib" mean?', opts: ['the funeral prayer', 'the good memory', 'the cemetery', 'the condolence visit'], ans: 1 },
  { q: '"Long life to you" — said to the bereaved?', opts: ['yislam raasak', 'Taal 3omrak', 'waja3 2alb', 'ta3ziye'], ans: 1 }
];

const AZA_TIPS = [
  '<strong>The 3-day 3aza</strong>: Lebanese families receive condolence visitors for three days at home (beet il-7ozn). The home stays open, coffee and dates are served constantly. Skipping the 3aza for a close person is a major social offense — "bedna nruu7 n3azzi" (we must go offer condolences) takes priority over nearly anything.',
  '<strong>What to say</strong>: "Alla yir7amo" (for a man) or "alla yir7ama" (for a woman) every time the deceased is mentioned. The bereaved responds "yir7am mawtetak" (may God have mercy on your dead too) — nearly everyone has lost someone, so this is never awkward.',
  '<strong>Cross-community mourning</strong>: Lebanese Christians and Muslims attend each other\'s 3aza visits freely. The language of grief is shared across religions — "alla yir7amo" is used by Christians and Muslims alike. Solidarity in loss transcends sectarian lines.',
  '<strong>3azzam alla 2ajrak</strong>: This deep condolence phrase (may God magnify your reward) is reserved for profound losses — a parent, child, or spouse. It acknowledges that patience in grief earns spiritual reward, a comfort rooted in both Christian and Muslim tradition.',
  '<strong>Mourning food</strong>: Dates and ma3moul cookies are served to 3aza visitors. The bereaved family doesn\'t cook — neighbors and extended family bring food continuously for three days. "Akl il-3aza" (mourning food) is communally provided; refusing to eat when offered is slightly rude.',
  '<strong>Death anniversary</strong>: "Marrit sene" (a year has passed) — the first anniversary is marked with a church service or Quran reading, a grave visit, and sometimes a newspaper condolence notice. Lebanese families continue marking anniversaries for decades, keeping the deceased\'s memory active in family life.'
];
