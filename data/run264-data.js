// Run #264 — Lebanese Numbers & Counting Coach (nmc)
// Numbers 1-20, tens, ordinals, counting rules, Lebanese quirks — 40 items, MCQ drill, 5 tips

const NMC_WORDS = [
  // cardinal 1-10
  { tr: 'waHad',        ar: 'واحد',       en: 'one (1)',                         cat: 'cardinal' },
  { tr: 'tnen',         ar: 'تنين',       en: 'two (2)',                         cat: 'cardinal' },
  { tr: 'tlete',        ar: 'تلاتة',      en: 'three (3)',                       cat: 'cardinal' },
  { tr: 'arba3a',       ar: 'أربعة',      en: 'four (4)',                        cat: 'cardinal' },
  { tr: 'khemse',       ar: 'خمسة',       en: 'five (5)',                        cat: 'cardinal' },
  { tr: 'sitte',        ar: 'ستة',        en: 'six (6)',                         cat: 'cardinal' },
  { tr: 'sab3a',        ar: 'سبعة',       en: 'seven (7)',                       cat: 'cardinal' },
  { tr: 'tmene',        ar: 'تمانية',     en: 'eight (8)',                       cat: 'cardinal' },
  { tr: 'tis3a',        ar: 'تسعة',       en: 'nine (9)',                        cat: 'cardinal' },
  { tr: '3ashara',      ar: 'عشرة',       en: 'ten (10)',                        cat: 'cardinal' },
  // cardinal 11-20
  { tr: '7da3sh',       ar: 'حداعش',      en: 'eleven (11)',                     cat: 'teens' },
  { tr: 'tna3sh',       ar: 'تناعش',      en: 'twelve (12)',                     cat: 'teens' },
  { tr: 'tletta3sh',    ar: 'تلتاعش',     en: 'thirteen (13)',                   cat: 'teens' },
  { tr: 'arba3ta3sh',   ar: 'أربعتاعش',   en: 'fourteen (14)',                   cat: 'teens' },
  { tr: 'khamsta3sh',   ar: 'خمستاعش',    en: 'fifteen (15)',                    cat: 'teens' },
  { tr: 'setta3sh',     ar: 'ستاعش',      en: 'sixteen (16)',                    cat: 'teens' },
  { tr: 'saba3ta3sh',   ar: 'سبعتاعش',    en: 'seventeen (17)',                  cat: 'teens' },
  { tr: 'tmanta3sh',    ar: 'تمانتاعش',   en: 'eighteen (18)',                   cat: 'teens' },
  { tr: 'tsa3ta3sh',    ar: 'تسعتاعش',    en: 'nineteen (19)',                   cat: 'teens' },
  { tr: '3ishrin',      ar: 'عشرين',      en: 'twenty (20)',                     cat: 'tens' },
  // tens
  { tr: 'tletin',       ar: 'تلاتين',     en: 'thirty (30)',                     cat: 'tens' },
  { tr: 'arb3iin',      ar: 'أربعين',     en: 'forty (40)',                      cat: 'tens' },
  { tr: 'khamsiin',     ar: 'خمسين',      en: 'fifty (50)',                      cat: 'tens' },
  { tr: 'sittiin',      ar: 'ستين',       en: 'sixty (60)',                      cat: 'tens' },
  { tr: 'sab3iin',      ar: 'سبعين',      en: 'seventy (70)',                    cat: 'tens' },
  { tr: 'tmaniin',      ar: 'تمانين',     en: 'eighty (80)',                     cat: 'tens' },
  { tr: 'tis3iin',      ar: 'تسعين',      en: 'ninety (90)',                     cat: 'tens' },
  { tr: 'miyye',        ar: 'مية',        en: 'one hundred (100)',               cat: 'tens' },
  // ordinals
  { tr: 'awwal',        ar: 'أول',        en: 'first',                           cat: 'ordinal' },
  { tr: 'teni',         ar: 'تاني',       en: 'second',                          cat: 'ordinal' },
  { tr: 'telet',        ar: 'تالت',       en: 'third',                           cat: 'ordinal' },
  { tr: 'rabe3',        ar: 'رابع',       en: 'fourth',                          cat: 'ordinal' },
  { tr: 'khames',       ar: 'خامس',       en: 'fifth',                           cat: 'ordinal' },
  // counting expressions
  { tr: 'kell waHad',   ar: 'كل واحد',    en: 'each one / everyone',             cat: 'expressions' },
  { tr: 'waHad waHad',  ar: 'واحد واحد',  en: 'one by one',                      cat: 'expressions' },
  { tr: 'tnen tnen',    ar: 'تنين تنين',  en: 'two by two',                      cat: 'expressions' },
  { tr: 'noss',         ar: 'نص',         en: 'half',                            cat: 'expressions' },
  { tr: 'rub3',         ar: 'ربع',        en: 'quarter',                         cat: 'expressions' },
  { tr: 'alf',          ar: 'ألف',        en: 'thousand',                        cat: 'expressions' },
  { tr: 'milyoun',      ar: 'مليون',      en: 'million',                         cat: 'expressions' },
];

const NMC_DRILLS = [
  {
    q: 'How do you say "three" in Lebanese Arabic?',
    opts: ['tlete', 'arba3a', 'tnen', 'khemse'],
    correct: 0,
    note: '"tlete" = 3 (تلاتة). Lebanese numbers often differ from MSA: "tlete" vs MSA "talatha". Pattern: 3 → tlete, 4 → arba3a, 5 → khemse. The final "e/a" vowel is characteristic of Lebanese dialect.'
  },
  {
    q: 'What does "tnen" mean?',
    opts: ['ten', 'twelve', 'two', 'twenty'],
    correct: 2,
    note: '"tnen" = two (تنين). Lebanese "tnen" vs MSA "ithnayn". Key: "tnen" → two; "3ashara" → ten; "tna3sh" → twelve; "3ishrin" → twenty. "tnen" is also used for "both": "el-tnen" = both of them.'
  },
  {
    q: 'How do you say "fifteen" in Lebanese Arabic?',
    opts: ['khamsta3sh', 'setta3sh', 'arba3ta3sh', 'khamsiin'],
    correct: 0,
    note: '"khamsta3sh" = 15 (خمستاعش). Lebanese teen pattern: base + "ta3sh" (from عشر = ten). "khemse" (5) + ta3sh = khamsta3sh (15). "setta3sh" = 16; "arba3ta3sh" = 14; "khamsiin" = 50.'
  },
  {
    q: 'What does "awwal" mean?',
    opts: ['first', 'one', 'always', 'before'],
    correct: 0,
    note: '"awwal" = first (أول). Lebanese ordinals: awwal (1st), teni (2nd), telet (3rd), rabe3 (4th), khames (5th). "awwal marra" = first time. "yawm el-awwal" = the first day. Also: "bl-awal" = at first.'
  },
  {
    q: 'How do you say "twenty" in Lebanese Arabic?',
    opts: ['miyye', '3ashara', '3ishrin', 'tletin'],
    correct: 2,
    note: '"3ishrin" = 20 (عشرين). Tens pattern: 3ishrin (20), tletin (30), arb3iin (40), khamsiin (50), sittiin (60), sab3iin (70), tmaniin (80), tis3iin (90), miyye (100). All end in "-in" except miyye.'
  },
  {
    q: 'What does "noss" mean?',
    opts: ['zero', 'half', 'tenth', 'double'],
    correct: 1,
    note: '"noss" = half (نص). Fraction essentials: "noss" (half), "rub3" (quarter), "tult" (third). In time: "w noss" = half past. In prices: "noss miyye" = half a hundred (50). "noss noss" = so-so / half and half.'
  },
  {
    q: 'How do you say "one hundred" in Lebanese Arabic?',
    opts: ['alf', 'miyye', 'milyoun', '3ishrin'],
    correct: 1,
    note: '"miyye" = 100 (مية). Scale: "miyye" (100), "alf" (1000), "milyoun" (million). Compounds: "miyye w waHad" = 101; "miyye w 3ishrin" = 120; "alfein" = 2000 (dual of alf). Lebanese use French loans: "san" (100 Lebanese lira, from "cent").'
  },
  {
    q: 'What does "kell waHad" mean?',
    opts: ['one person', 'each one / everyone', 'alone', 'someone'],
    correct: 1,
    note: '"kell waHad" = each one / everyone (كل واحد). Key phrase for fairness/sharing: "kell waHad bidfa3 3anno" = everyone pays for themselves. "waHad waHad" = one by one. "kell shi" = everything.'
  },
  {
    q: 'How do you say "seven" in Lebanese Arabic?',
    opts: ['sitte', 'tis3a', 'sab3a', 'tmene'],
    correct: 2,
    note: '"sab3a" = 7 (سبعة). Tricky ones: "sab3a" (7) vs "sab3iin" (70) vs "saba3ta3sh" (17) — all from root س-ب-ع. "sitte" = 6; "tis3a" = 9; "tmene" = 8. Lebanese "tmene" vs MSA "thamaniya".'
  },
  {
    q: 'What does "teni" mean as an ordinal?',
    opts: ['two', 'twelve', 'second', 'twice'],
    correct: 2,
    note: '"teni" = second (تاني). Ordinal vs cardinal: "tnen" (cardinal: two) vs "teni" (ordinal: second). "el-marra el-tenie" = the second time. "teni shi" = something else / another thing. "la teni yom" = to the next day.'
  },
];

const NMC_TIPS = [
  { title: 'Lebanese numbers vs MSA — key differences', body: 'Lebanese numbers differ significantly from MSA (Modern Standard Arabic). Key shifts: 1 = "waHad" (not "wahid"), 2 = "tnen" (not "ithnayn"), 3 = "tlete" (not "talatha"), 8 = "tmene" (not "thamaniya"), 12 = "tna3sh" (not "ithna 3ashar"). The teen pattern (-ta3sh suffix) and tens (-iin ending) are systematic. Once you learn the Lebanese base forms, the pattern clicks. Never use MSA number forms in casual Lebanese conversation — you\'ll sound like a news broadcast.' },
  { title: 'The teen pattern (-ta3sh)', body: 'Lebanese teens follow: base + "ta3sh". 11 = 7da3sh (odd one out — not "waHad-ta3sh"), 12 = tna3sh, 13 = tletta3sh, 14 = arba3ta3sh, 15 = khamsta3sh, 16 = setta3sh, 17 = saba3ta3sh, 18 = tmanta3sh, 19 = tsa3ta3sh. The "ta3sh" comes from "ta3shar" (عشر = ten). Exception: 11 uses "7da3sh" (a contraction of "wa7id 3a-shar"). Hear Lebanese speakers: the teens are fast and run together.' },
  { title: 'Counting things — Lebanese agreement rules', body: 'In Lebanese, numbers 3-10 use the opposite gender from MSA. With counted nouns: use cardinal + noun (no case endings — dialect is case-free). "3 books" = "tlete kteb" (books is plural). For 11+ the noun stays singular: "11 book" = "7da3sh ktaab". Dual for 2: "ktabein" (two books, using dual suffix -ein/-iin). "tnen kteb" also acceptable colloquially. Numbers above 100: "miyye ktaab" (100 books) — noun singular.' },
  { title: 'Fractions, halves, and prices', body: '"noss" (half) is everywhere in daily Lebanese: "noss sa3a" (half hour), "noss kilo" (half kilo), "w noss" (and a half — clock), "noss noss" (so-so). "rub3" (quarter): "rub3 sa3a" (quarter hour), "w rub3" (quarter past), "illa rub3" (quarter to). Prices in thousands: "alf" (1,000 LL), "miyye alf" (100,000 LL), "milyoun" (1,000,000 LL). Old Lebanese currency slang: "2irsh" (small change), "lira" (pound). After the economic collapse, prices shot to billions — "malyar" (billion) entered everyday speech.' },
  { title: 'Lebanese number culture and superstitions', body: 'Numbers carry cultural weight in Lebanon. "7" (sab3a) is lucky — weddings, contracts, lucky charms. "13" (tletta3sh) is unlucky — buildings skip floor 13. "40" (arb3iin) has deep meaning: 40-day mourning period ("el-arb3iin"), 40 days of Lent, 40 years of wandering in religious tradition. "3" (tlete) appears everywhere: "tlete merrat" (three times = done properly). "7da3sh" (11) for football: "el-7da3sh" = the national team. Counting beads: Lebanese rosary/misbaha has 33 or 99 beads.' },
];

const NMC_ABOUT = 'Master Lebanese Arabic numbers — cardinals 1-100, teen pattern, ordinals, fractions, and counting expressions. Essential for prices, time, phone numbers, addresses, and everyday Lebanese conversations.';
