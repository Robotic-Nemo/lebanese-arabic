// R1101 — NEW FEATURE: Lebanese Christmas & Winter Holidays (xms)

const XMS_WORDS = [
  { ar: 'ميلاد مجيد',   tr: 'Milad Majid',      en: 'Merry Christmas' },
  { ar: 'عيد الميلاد',  tr: '3id l Milad',       en: 'Christmas (the feast)' },
  { ar: 'شجرة الميلاد', tr: 'shajrit l Milad',   en: 'Christmas tree' },
  { ar: 'بابا نويل',    tr: 'Baba Noel',          en: 'Santa Claus' },
  { ar: 'هدية',          tr: 'hadiye',             en: 'gift / present' },
  { ar: 'كنيسة',         tr: 'knise',              en: 'church' },
  { ar: 'قداس',          tr: '2odas',              en: 'Mass / divine liturgy' },
  { ar: 'تزيينات',       tr: 'tziyinat',           en: 'decorations' },
  { ar: 'حفلة رأس السنة', tr: '7aflit Ra2s l Sene', en: 'New Year\'s party' },
  { ar: 'رأس السنة',     tr: 'Ra2s l Sene',        en: 'New Year' },
  { ar: 'كانيكول',       tr: 'kanikul',            en: 'Christmas school break' },
  { ar: 'ثلج',           tr: 'talj',               en: 'snow' },
  { ar: 'بخور',          tr: 'bkhur',              en: 'incense' },
  { ar: 'مسيحي',         tr: 'masi7i',             en: 'Christian' },
  { ar: 'أجراس',         tr: '2ajras',             en: 'bells' },
  { ar: 'مغارة',         tr: 'mghare',             en: 'nativity scene / cave' },
  { ar: 'صليب',          tr: 'salib',              en: 'cross' },
  { ar: 'ألعاب نارية',   tr: '2al3ab nariye',      en: 'fireworks' },
  { ar: 'عم يجي',        tr: '3am yiji',           en: 'he\'s coming (Santa is coming)' },
  { ar: 'سنة جديدة سعيدة', tr: 'Sene Jdide Sa3ide', en: 'Happy New Year' },
  { ar: 'مقبلات',        tr: 'm2ablat',            en: 'appetizers / mezze spread' },
  { ar: 'أنوار',         tr: '2anwar',             en: 'lights / illuminations' },
  { ar: 'شرفة',          tr: 'sharfe',             en: 'balcony (decorated for holidays)' },
  { ar: 'عيلة',          tr: '3yile',              en: 'family (gathering)' },
  { ar: 'ستة وعشرين',    tr: 'sitte w 3ishrin',    en: 'the 26th (Boxing Day in Lebanon)' },
];

const XMS_DRILLS = [
  { q: 'How do you say "Merry Christmas" in Lebanese?', opts: ['Milad Majid', 'Sene Jdide', 'Ra2s l Sene', 'Baba Noel'], ans: 0 },
  { q: 'What is "Baba Noel"?', opts: ['Baby Jesus', 'Santa Claus', 'The priest', 'Angel Gabriel'], ans: 1 },
  { q: 'What does "kanikul" mean?', opts: ['New Year countdown', 'Christmas music', 'School holiday break', 'Midnight mass'], ans: 2 },
  { q: 'How do you say "Happy New Year" in Lebanese?', opts: ['Milad Majid', '3id Saeed', 'Sene Jdide Sa3ide', 'Ra2s l Sene Hilwe'], ans: 2 },
  { q: 'What is a "mghare" at Christmas?', opts: ['A Christmas tree', 'A nativity scene / cave', 'A church', 'A gift'], ans: 1 },
  { q: 'What does "2odas" mean?', opts: ['Decorations', 'Bells', 'Mass / church service', 'Incense'], ans: 2 },
  { q: 'Which word means "fireworks"?', opts: ['2ajras', '2al3ab nariye', 'bkhur', 'tziyinat'], ans: 1 },
  { q: 'What is "shajrit l Milad"?', opts: ['Christmas gift', 'Christmas tree', 'Christmas card', 'Christmas star'], ans: 1 },
];

const XMS_TIPS = [
  'Lebanon is one of the few Arab countries where Christmas is a public holiday — celebrated by both Christians AND Muslims. You\'ll see Muslim families decorating trees and joining the festivities in Beirut.',
  '"Milad Majid" (ميلاد مجيد) is the standard Christmas greeting. Muslims often say it too as a warm gesture to Christian friends. The reply is "w 2inta/inti mn l sa3adin" (و أنت/أنتِ من السعداء).',
  'The "kanikul" (school break) is a big deal — Lebanese families travel to the mountains, visit relatives, and the ski resorts open. Christmas in the mountains with snow ("talj") is a classic Lebanese dream.',
  'Lebanese Christmas is intensely family-focused. The 25th is for church and quiet family lunch, while the 31st (Ra2s l Sene) is the big party night — many Lebanese Christians party until dawn.',
  '"Sitte w 3ishrin" — December 26th — is an unofficial second holiday in Lebanon: the day you visit every relative who came to celebrate. Expect table after table of food and "kayyif 3id-ak?" (how was your holiday?).',
];
