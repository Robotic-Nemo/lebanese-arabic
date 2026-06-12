// Run #231 — Lebanese Numbers Deep Dive Coach (ndd)
// Cardinal 0-20 + tens + hundreds, ordinals, time numbers, money phrases — 40 items, MCQ drill, 5 tips

const NDD_WORDS = [
  // cardinals 0-10
  { tr: 'sifr',         ar: 'صفر',        en: '0 (zero)',              cat: 'cardinal' },
  { tr: 'wa7ed',        ar: 'واحد',       en: '1 (one)',               cat: 'cardinal' },
  { tr: 'tnen',         ar: 'تنين',       en: '2 (two)',               cat: 'cardinal' },
  { tr: 'tlete',        ar: 'تلاتة',      en: '3 (three)',             cat: 'cardinal' },
  { tr: 'arba3a',       ar: 'أربعة',      en: '4 (four)',              cat: 'cardinal' },
  { tr: 'khamse',       ar: 'خمسة',       en: '5 (five)',              cat: 'cardinal' },
  { tr: 'sette',        ar: 'ستة',        en: '6 (six)',               cat: 'cardinal' },
  { tr: 'sab3a',        ar: 'سبعة',       en: '7 (seven)',             cat: 'cardinal' },
  { tr: 'tmene',        ar: 'تمانية',     en: '8 (eight)',             cat: 'cardinal' },
  { tr: 'tes3a',        ar: 'تسعة',       en: '9 (nine)',              cat: 'cardinal' },
  { tr: '3ashre',       ar: 'عشرة',       en: '10 (ten)',              cat: 'cardinal' },
  // 11-20
  { tr: '7da3sh',       ar: 'حداشر',      en: '11 (eleven)',           cat: 'teens' },
  { tr: 'tna3sh',       ar: 'تناشر',      en: '12 (twelve)',           cat: 'teens' },
  { tr: 'tletta3sh',    ar: 'تلتاشر',     en: '13 (thirteen)',         cat: 'teens' },
  { tr: 'arba3ta3sh',   ar: 'أربعتاشر',   en: '14 (fourteen)',         cat: 'teens' },
  { tr: 'khamsta3sh',   ar: 'خمستاشر',    en: '15 (fifteen)',          cat: 'teens' },
  { tr: '3eshriIn',     ar: 'عشرين',      en: '20 (twenty)',           cat: 'tens' },
  { tr: 'tletiIn',      ar: 'تلاتين',     en: '30 (thirty)',           cat: 'tens' },
  { tr: 'arba3iin',     ar: 'أربعين',     en: '40 (forty)',            cat: 'tens' },
  { tr: 'khamsiin',     ar: 'خمسين',      en: '50 (fifty)',            cat: 'tens' },
  { tr: 'stiin',        ar: 'ستين',       en: '60 (sixty)',            cat: 'tens' },
  { tr: 'sab3iin',      ar: 'سبعين',      en: '70 (seventy)',          cat: 'tens' },
  { tr: 'tmaniin',      ar: 'تمانين',     en: '80 (eighty)',           cat: 'tens' },
  { tr: 'tes3iin',      ar: 'تسعين',      en: '90 (ninety)',           cat: 'tens' },
  { tr: 'miit',         ar: 'مية',        en: '100 (one hundred)',     cat: 'hundreds' },
  { tr: 'mitayn',       ar: 'ميتين',      en: '200 (two hundred)',     cat: 'hundreds' },
  { tr: 'tlet miit',    ar: 'تلت مية',    en: '300 (three hundred)',   cat: 'hundreds' },
  { tr: 'alf',          ar: 'ألف',        en: '1000 (one thousand)',   cat: 'hundreds' },
  // ordinals
  { tr: 'awwal',        ar: 'أول',        en: '1st (first)',           cat: 'ordinal' },
  { tr: 'taani',        ar: 'تاني',       en: '2nd (second)',          cat: 'ordinal' },
  { tr: 'taalit',       ar: 'تالت',       en: '3rd (third)',           cat: 'ordinal' },
  { tr: 'raabi3',       ar: 'رابع',       en: '4th (fourth)',          cat: 'ordinal' },
  { tr: 'khaames',      ar: 'خامس',       en: '5th (fifth)',           cat: 'ordinal' },
  // time with numbers
  { tr: 'sa3a wa7de',   ar: 'ساعة واحدة', en: '1 o\'clock',           cat: 'time' },
  { tr: 'sa3a tnen',    ar: 'ساعة تنين',  en: '2 o\'clock',           cat: 'time' },
  { tr: 'nuss sa3a',    ar: 'نص ساعة',    en: 'half hour / 30 min',   cat: 'time' },
  { tr: 'rub3 sa3a',    ar: 'ربع ساعة',   en: 'quarter hour / 15 min', cat: 'time' },
  // money
  { tr: 'bi-kaam?',     ar: 'بكام؟',      en: 'how much (price)?',    cat: 'money' },
  { tr: 'ghali',        ar: 'غالي',       en: 'expensive',            cat: 'money' },
  { tr: 'rkhiis',       ar: 'رخيص',       en: 'cheap',                cat: 'money' },
];

const NDD_DRILLS = [
  {
    q: 'How do you say "7" in Lebanese Arabic?',
    opts: ['sab3a', 'tes3a', 'sette', 'tmene'],
    correct: 0,
    note: '"sab3a" = 7; "tes3a" = 9; "sette" = 6; "tmene" = 8'
  },
  {
    q: 'What does "tnen" mean?',
    opts: ['20', '12', '2', '3'],
    correct: 2,
    note: '"tnen" = 2; "tna3sh" = 12; "3eshriIn" = 20; "tlete" = 3'
  },
  {
    q: 'How do you say "100" in Lebanese Arabic?',
    opts: ['alf', 'mitayn', 'miit', 'tlet miit'],
    correct: 2,
    note: '"miit" = 100; "alf" = 1000; "mitayn" = 200; "tlet miit" = 300'
  },
  {
    q: 'What does "taani" mean?',
    opts: ['1st', '3rd', '2nd', '4th'],
    correct: 2,
    note: '"taani" = 2nd; "awwal" = 1st; "taalit" = 3rd; "raabi3" = 4th'
  },
  {
    q: 'How do you say "how much?" in Lebanese Arabic?',
    opts: ['ghali', 'bi-kaam?', 'rkhiis', 'miit'],
    correct: 1,
    note: '"bi-kaam?" = how much?; "ghali" = expensive; "rkhiis" = cheap; "miit" = 100'
  },
  {
    q: 'What does "nuss sa3a" mean?',
    opts: ['1 o\'clock', 'quarter hour', 'half hour', '2 o\'clock'],
    correct: 2,
    note: '"nuss sa3a" = half hour (30 min); "rub3 sa3a" = quarter hour; "sa3a wa7de" = 1 o\'clock'
  },
  {
    q: 'How do you say "50" in Lebanese Arabic?',
    opts: ['arba3iin', 'stiin', 'khamsiin', 'sab3iin'],
    correct: 2,
    note: '"khamsiin" = 50; "arba3iin" = 40; "stiin" = 60; "sab3iin" = 70'
  },
  {
    q: 'What does "khamsta3sh" mean?',
    opts: ['50', '5', '15', '500'],
    correct: 2,
    note: '"khamsta3sh" = 15; "khamsiin" = 50; "khamse" = 5; "khamse miit" = 500'
  },
  {
    q: 'How do you say "1000" in Lebanese Arabic?',
    opts: ['miit', 'alf', 'mitayn', 'tes3iin'],
    correct: 1,
    note: '"alf" = 1000; "miit" = 100; "mitayn" = 200; "tes3iin" = 90'
  },
  {
    q: 'What does "rub3 sa3a" mean?',
    opts: ['half hour', 'quarter hour', '15 seconds', '4 hours'],
    correct: 1,
    note: '"rub3 sa3a" = quarter hour (15 min); "nuss sa3a" = half hour; "rub3" = quarter'
  },
];

const NDD_TIPS = [
  { title: 'Lebanese numbers: key differences from MSA', body: '"Tnen" (2) vs MSA "ithnayn". "Tlete" (3) vs MSA "thalatha". "Arba3a" (4) sounds similar to MSA. "Khamse" (5), "sette" (6), "sab3a" (7), "tmene" (8), "tes3a" (9), "3ashre" (10). The Lebanese forms are shorter and more casual. Use these in everyday speech.' },
  { title: 'Counting from 11-20: add "-ta3sh"', body: 'From 11-19, Lebanese adds "-ta3sh" (or "-a3sh") to the unit: "7da3sh" (11), "tna3sh" (12), "tletta3sh" (13). The pattern is unit + ta3sh = number. Exception: 11 = "7da3sh" (from wa7ed + ta3sh, contracted). 20 = "3eshriIn" (not "tna3sh × 2").' },
  { title: 'Tens: -iin suffix pattern', body: 'Lebanese tens: 20="3eshriIn", 30="tletiIn", 40="arba3iin", 50="khamsiin", 60="stiin", 70="sab3iin", 80="tmaniin", 90="tes3iin". The "-iin" suffix marks tens. Combining: "3eshriIn w khamse" = 25 (twenty and five). "Miit w khamse" = 105.' },
  { title: 'Telling time in Lebanese', body: '"Saa3a" = hour/o\'clock. "Sa3a wa7de" = 1:00. "Sa3a tnen" = 2:00. "Sa3a tnen w nuss" = 2:30 (and half). "Sa3a tnen w rub3" = 2:15 (and quarter). "Sa3a tnen ila rub3" = 1:45 (to quarter). "il-saa3a 2addeish?" = what time is it?' },
  { title: 'Prices and haggling', body: '"Bi-kaam?" = how much? "Ghali" = expensive. "Rkhiis" = cheap. "3Tiini bi-nuSS" = give it to me for half (price). "Ma fi a7san?" = is there a better (deal)? "Tarek-li shu" = leave me something (discount). In Lebanon, haggling is common in souks — use numbers confidently!' },
];

const NDD_ABOUT = 'Master Lebanese Arabic numbers from 0 to 1000 — cardinals, teens, tens, hundreds, ordinals, telling time, and price vocabulary. Essential for shopping, making appointments, giving phone numbers, and everyday conversations.';
