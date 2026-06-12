// R1137 — NEW FEATURE: Lebanese Bureaucracy & Government Paperwork (mue)

const MUE_WORDS = [
  { ar: 'معاملة', tr: 'mu3aame', en: 'transaction / official paperwork' },
  { ar: 'دائرة', tr: 'daayra', en: 'government office / department' },
  { ar: 'واسطة', tr: 'waaSta', en: 'connections / using influence' },
  { ar: 'ختم', tr: 'khatm', en: 'stamp / official seal' },
  { ar: 'بطاقة', tr: 'biTaaqa', en: 'ID card' },
  { ar: 'جواز', tr: 'jawaaz', en: 'passport' },
  { ar: 'خطاب', tr: 'khiTaab', en: 'official letter' },
  { ar: 'طابور', tr: 'Taabuur', en: 'queue / waiting line' },
  { ar: 'دور', tr: 'door', en: 'turn (in line)' },
  { ar: 'رقم', tr: 'ra2am', en: 'number (queue ticket)' },
  { ar: 'موظف', tr: 'muwaDHDHaf', en: 'government employee / clerk' },
  { ar: 'مدير', tr: 'mudiir', en: 'director / manager' },
  { ar: 'تأجيل', tr: 'ta2jiil', en: 'postponement / delay' },
  { ar: 'استمارة', tr: 'isteemaara', en: 'form / application' },
  { ar: 'توقيع', tr: 'taw2ii3', en: 'signature' },
  { ar: 'تصديق', tr: 'taSdiiq', en: 'notarization / official authentication' },
  { ar: 'موعد', tr: 'maw3ad', en: 'appointment' },
  { ar: 'دفع', tr: 'dafa3', en: 'payment / fee paid' },
  { ar: 'ناقص', tr: 'naaqiS', en: 'missing (a document)' },
  { ar: 'خلص', tr: 'khalaS', en: 'done / finished / all clear' },
  { ar: 'تعب', tr: 'ta3ab', en: 'trouble / hassle' },
  { ar: 'بكرا', tr: 'bukra', en: 'tomorrow (classic stall answer)' },
  { ar: 'شو بدك؟', tr: 'shu baddak?', en: 'what do you want? (dismissive clerk tone)' },
  { ar: 'عم تستعجل؟', tr: '3am tasta3jel?', en: 'why are you rushing?' },
  { ar: 'ما في', tr: 'ma fii', en: 'there is none / unavailable' }
];

const MUE_DRILLS = [
  {
    q: '"waaSta" means:',
    opts: ['using connections/influence', 'queue number', 'official stamp', 'appointment'],
    a: 0
  },
  {
    q: 'You need an official seal on your document. You need a:',
    opts: ['khatm', 'jawaaz', 'biTaaqa', 'maw3ad'],
    a: 0
  },
  {
    q: 'The clerk says "bukra" — that means:',
    opts: ['come tomorrow', 'all done', 'your turn', 'missing documents'],
    a: 0
  },
  {
    q: '"khalaS" in a government context means:',
    opts: ["done / finished / all clear", 'missing a document', 'queue line', 'postponement'],
    a: 0
  },
  {
    q: 'The word for "government employee / clerk":',
    opts: ['muwaDHDHaf', 'mudiir', 'khatm', 'Taabuur'],
    a: 0
  },
  {
    q: '"isteemaara" is:',
    opts: ['a form / application', 'a signature', 'a passport', 'a payment'],
    a: 0
  },
  {
    q: 'Your document is missing something. The clerk says:',
    opts: ['naaqiS', 'khalaS', 'taw2ii3', 'daayra'],
    a: 0
  },
  {
    q: '"taSdiiq" means:',
    opts: ['notarization / official authentication', 'appointment', 'queue', 'fee'],
    a: 0
  },
  {
    q: 'The clerk asks "shu baddak?" in a dismissive tone. This means:',
    opts: ['what do you want?', 'take a number', 'next in line', 'come back later'],
    a: 0
  },
  {
    q: '"ta2jiil" refers to:',
    opts: ['postponement / delay', 'official letter', 'ID card', 'government office'],
    a: 0
  }
];

const MUE_TIPS = [
  {
    title: 'The Wasta System',
    body: 'In Lebanese bureaucracy, waaSta (using connections) is not just helpful — it\'s often essential. Knowing someone inside the daayra (office) or the mudiir (manager) can turn a week-long process into an hour. The phrase "3andak waaSta?" (do you have connections?) is asked before even attempting complex paperwork. This is not seen as corruption — it\'s just how things work.'
  },
  {
    title: '"Bukra" — The Universal Stall',
    body: 'Lebanese government offices have elevated "bukra" (tomorrow) to an art form. Asked when your paperwork will be ready, the answer is almost always bukra. Followed by the next day with another bukra. After experiencing this, Lebanese developed the ironic phrase "bukra ma bitzaahir" (tomorrow doesn\'t show up). Yet patience is key — eventually khalaS (it\'s done) does come.'
  },
  {
    title: 'The Stamp Ritual',
    body: 'Lebanese paperwork requires an absurd number of khatm (stamps) and taw2ii3 (signatures). A single mu3aame might pass through 5 desks. Each muwaDHDHaf stamps their section and passes it on. Documents often need taSdiiq (notarization) from a notary, then from a ministry, then sometimes from a mukhtaar (neighborhood official). Lebanese keep folders of documents stamped in anticipation of future needs.'
  },
  {
    title: 'Queue Number Culture',
    body: 'Modern offices issue ra2am (queue numbers), but the old Taabuur (standing in line) still exists in many branches. Lebanese have mastered the art of befriending the person at the counter. "Shu baddak?" (What do you want?) might sound rude but is standard clerk communication. The experienced Lebanese brings coffee, chats up the muwaDHDHaf, and asks if there\'s a shortcut — because there usually is, with the right waaSta.'
  }
];
