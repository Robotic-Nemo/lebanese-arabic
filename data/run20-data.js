// Run #20 — Number-to-Words, Time-Telling, Verbs of Motion
// Prefixes: nw-, tt-, vm-

// ============ NUMBER WORDS ============
const NUMBER_WORDS = [
  { n: 0,   tr: 'sefer',           ar: 'صفر' },
  { n: 1,   tr: 'wa7ad',           ar: 'واحد' },
  { n: 2,   tr: 'tnen',            ar: 'تنين' },
  { n: 3,   tr: 'tlete',           ar: 'تلاتة' },
  { n: 4,   tr: 'arba3a',          ar: 'أربعة' },
  { n: 5,   tr: 'khamse',          ar: 'خمسة' },
  { n: 6,   tr: 'sette',           ar: 'ستّة' },
  { n: 7,   tr: 'sab3a',           ar: 'سبعة' },
  { n: 8,   tr: 'tmene',           ar: 'تمانة' },
  { n: 9,   tr: 'tes3a',           ar: 'تسعة' },
  { n: 10,  tr: '3ashra',          ar: 'عشرة' },
  { n: 11,  tr: '7da3sh',          ar: 'حدعش' },
  { n: 12,  tr: 'tna3sh',          ar: 'تنعش' },
  { n: 13,  tr: 'tlatta3sh',       ar: 'تلتعش' },
  { n: 14,  tr: 'arba3ta3sh',      ar: 'أربعتعش' },
  { n: 15,  tr: 'khamsta3sh',      ar: 'خمستعش' },
  { n: 16,  tr: 'setta3sh',        ar: 'ستعش' },
  { n: 17,  tr: 'sab3ata3sh',      ar: 'سبعتعش' },
  { n: 18,  tr: 'tmenta3sh',       ar: 'تمنتعش' },
  { n: 19,  tr: 'tes3ata3sh',      ar: 'تسعتعش' },
  { n: 20,  tr: '3eshrin',         ar: 'عشرين' },
  { n: 21,  tr: 'wa7ad w 3eshrin', ar: 'واحد و عشرين' },
  { n: 25,  tr: 'khamse w 3eshrin',ar: 'خمسة و عشرين' },
  { n: 30,  tr: 'tletin',          ar: 'تلاتين' },
  { n: 33,  tr: 'tlete w tletin',  ar: 'تلاتة و تلاتين' },
  { n: 40,  tr: 'arb3in',          ar: 'أربعين' },
  { n: 47,  tr: 'sab3a w arb3in',  ar: 'سبعة و أربعين' },
  { n: 50,  tr: 'khamsin',         ar: 'خمسين' },
  { n: 55,  tr: 'khamse w khamsin',ar: 'خمسة و خمسين' },
  { n: 60,  tr: 'settin',          ar: 'ستّين' },
  { n: 70,  tr: 'sab3in',          ar: 'سبعين' },
  { n: 80,  tr: 'tmenin',          ar: 'تمانين' },
  { n: 90,  tr: 'tes3in',          ar: 'تسعين' },
  { n: 100, tr: 'mit',             ar: 'مية' },
  { n: 150, tr: 'mit w khamsin',   ar: 'مية و خمسين' },
  { n: 200, tr: 'miten',           ar: 'ميتين' },
  { n: 300, tr: 'tlat mit',        ar: 'تلت مية' },
  { n: 500, tr: 'khames mit',      ar: 'خمس مية' },
  { n: 1000,tr: 'alf',             ar: 'ألف' },
  { n: 2000,tr: 'alfen',           ar: 'ألفين' },
  { n: 5000,tr: 'khames talef',    ar: 'خمس تلاف' },
  { n: 1000000, tr: 'malyoun',     ar: 'مليون' }
];

const NW_DRILL_POOL = NUMBER_WORDS.filter(x => [3,7,11,14,18,21,25,33,47,55,70,100,200,500,1000].includes(x.n));

// ============ CLOCK TIMES / TIME-TELLING ============
// Lebanese time: el sa3a [hour] w [minute fraction]
// Common fractions: w nuS = and a half (30), w rba3 = and quarter (15), illa rba3 = quarter to (45)
const TIME_RULES = [
  { rule: 'el sa3a wa7de = 1:00 (hour 1 uses fem "wa7de" not "wa7ad")', tr_ex: 'el sa3a wa7de' },
  { rule: 'el sa3a tnen w nuS = 2:30 (and a half)', tr_ex: 'el sa3a tnen w nuS' },
  { rule: 'el sa3a tlete w rba3 = 3:15 (and quarter)', tr_ex: 'el sa3a tlete w rba3' },
  { rule: 'el sa3a khamse illa rba3 = 4:45 (quarter to five)', tr_ex: 'el sa3a khamse illa rba3' },
  { rule: 'el sa3a sab3a w 3ashra = 7:10 (and ten)', tr_ex: 'el sa3a sab3a w 3ashra' },
  { rule: 'illa khamse = minus five (e.g., 9:55 = el sa3a 3ashra illa khamse)', tr_ex: 'el sa3a 3ashra illa khamse' },
  { rule: 'AM/PM: bil sob7 (morning) / ba3d el dohor (afternoon) / bil masa (evening) / bil leyl (at night)', tr_ex: 'el sa3a sab3a bil sob7' }
];

const CLOCK_TIMES = [
  { time: '1:00',  tr: 'el sa3a wa7de' },
  { time: '2:00',  tr: 'el sa3a tnen' },
  { time: '3:30',  tr: 'el sa3a tlete w nuS' },
  { time: '4:15',  tr: 'el sa3a arba3a w rba3' },
  { time: '5:45',  tr: 'el sa3a sette illa rba3' },
  { time: '6:10',  tr: 'el sa3a sette w 3ashra' },
  { time: '7:20',  tr: 'el sa3a sab3a w tlet' },
  { time: '8:25',  tr: 'el sa3a tmene w nuS illa khamse' },
  { time: '9:55',  tr: 'el sa3a 3ashra illa khamse' },
  { time: '10:00', tr: 'el sa3a 3ashra' },
  { time: '11:30', tr: 'el sa3a 7da3sh w nuS' },
  { time: '12:00', tr: 'el sa3a tna3sh' }
];

const TT_DRILL = [
  { time: '1:00',  opts: ['el sa3a wa7ad','el sa3a wa7de','el sa3a tnen','el sa3a 3ashra'], correct: 1 },
  { time: '2:30',  opts: ['el sa3a tnen','el sa3a tnen w rba3','el sa3a tnen w nuS','el sa3a tnen illa nuS'], correct: 2 },
  { time: '3:15',  opts: ['el sa3a tlete w rba3','el sa3a tlete w nuS','el sa3a tlete illa rba3','el sa3a arba3a w rba3'], correct: 0 },
  { time: '4:45',  opts: ['el sa3a arba3a w rba3','el sa3a khamse illa rba3','el sa3a khamse w rba3','el sa3a arba3a w nuS'], correct: 1 },
  { time: '5:55',  opts: ['el sa3a khamse w khamsin','el sa3a sette illa khamse','el sa3a sette w khamse','el sa3a khamse illa khamse'], correct: 1 },
  { time: '6:10',  opts: ['el sa3a sette w 3ashra','el sa3a sette illa 3ashra','el sa3a sab3a illa 3ashra','el sa3a sab3a w 3ashra'], correct: 0 },
  { time: '7:30',  opts: ['el sa3a sab3a','el sa3a sab3a w nuS','el sa3a tmene w nuS','el sa3a sab3a w rba3'], correct: 1 },
  { time: '8:00 morning',  opts: ['el sa3a tmene bil masa','el sa3a tmene bil leyl','el sa3a tmene bil sob7','el sa3a tmene ba3d el dohor'], correct: 2 }
];

// ============ VERBS OF MOTION ============
// Conjugated for present tense (b- prefix) across 8 pronouns
const MOTION_VERBS = [
  {
    en: 'go',
    inf: 'rou7',
    forms: { ana:'brou7', inta:'btrou7', inti:'btrou7e', howe:'byrou7', hiye:'btrou7', n7na:'mnrou7', intu:'btrou7u', hinnen:'byrou7u' }
  },
  {
    en: 'come',
    inf: 'iji',
    forms: { ana:'biji', inta:'btiji', inti:'btije', howe:'byiji', hiye:'btiji', n7na:'mnejje', intu:'btiju', hinnen:'byiju' }
  },
  {
    en: 'enter',
    inf: 'fout',
    forms: { ana:'bfout', inta:'btfout', inti:'btfute', howe:'byfout', hiye:'btfout', n7na:'mnfout', intu:'btfutu', hinnen:'byfutu' }
  },
  {
    en: 'exit / go out',
    inf: 'Tla3',
    forms: { ana:'beTla3', inta:'btiTla3', inti:'btiTla3e', howe:'byiTla3', hiye:'btiTla3', n7na:'mnitla3', intu:'btitla3u', hinnen:'byitla3u' }
  },
  {
    en: 'arrive',
    inf: 'wsil',
    forms: { ana:'bwSal', inta:'btwSal', inti:'btwSale', howe:'byowSal', hiye:'btwSal', n7na:'mnwSal', intu:'btwSalu', hinnen:'byowSalu' }
  },
  {
    en: 'return',
    inf: 'rja3',
    forms: { ana:'berja3', inta:'btirja3', inti:'btirja3e', howe:'byirja3', hiye:'btirja3', n7na:'mnirja3', intu:'btirja3u', hinnen:'byirja3u' }
  },
  {
    en: 'walk',
    inf: 'mshe',
    forms: { ana:'bemshe', inta:'btimshe', inti:'btimshe', howe:'byimshe', hiye:'btimshe', n7na:'mnimshe', intu:'btimshu', hinnen:'byimshu' }
  },
  {
    en: 'run',
    inf: 'rkoD',
    forms: { ana:'borkoD', inta:'btorkoD', inti:'btorkoDe', howe:'byorkoD', hiye:'btorkoD', n7na:'mnorkoD', intu:'btorkoDu', hinnen:'byorkoDu' }
  },
  {
    en: 'climb / go up',
    inf: 'Tla3 (also "go up")',
    forms: { ana:'beTla3', inta:'btiTla3', inti:'btiTla3e', howe:'byiTla3', hiye:'btiTla3', n7na:'mnitla3', intu:'btitla3u', hinnen:'byitla3u' }
  },
  {
    en: 'descend / go down',
    inf: 'nzil',
    forms: { ana:'benzal', inta:'btinzal', inti:'btinzale', howe:'byinzal', hiye:'btinzal', n7na:'mninzal', intu:'btinzalu', hinnen:'byinzalu' }
  },
  {
    en: 'pass by',
    inf: 'mar',
    forms: { ana:'bmor', inta:'btmor', inti:'btmore', howe:'bymor', hiye:'btmor', n7na:'mnmor', intu:'btmorru', hinnen:'bymorru' }
  },
  {
    en: 'fly',
    inf: 'Tar',
    forms: { ana:'bTir', inta:'btTir', inti:'btTire', howe:'byTir', hiye:'btTir', n7na:'mnTir', intu:'btTiru', hinnen:'byTiru' }
  }
];

// Drill: pick correct form given verb + pronoun
const VM_DRILL = (function(){
  const pronouns = ['ana','inta','inti','howe','hiye','n7na','intu','hinnen'];
  const items = [];
  // Generate ~15 items by sampling verb x pronoun pairs
  const samples = [
    ['go','ana'], ['go','hinnen'], ['come','inti'], ['come','n7na'],
    ['enter','howe'], ['exit / go out','intu'], ['arrive','hiye'],
    ['return','ana'], ['walk','inta'], ['run','n7na'], ['descend / go down','howe'],
    ['pass by','intu'], ['fly','hinnen'], ['exit / go out','ana'], ['come','howe']
  ];
  for(const [en, pr] of samples){
    const v = MOTION_VERBS.find(x => x.en === en);
    if(!v) continue;
    items.push({ en: v.en, pronoun: pr, correct: v.forms[pr] });
  }
  return items;
})();
