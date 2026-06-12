// MSA vs Lebanese contrast — for learners coming from MSA / fus7a
const MSA_CONTRAST = {
  pronunciation: [
    { msa:'ق (q)',  leb:'ء (2)',  note:'qaaf → glottal stop in most cities. Beirut "qul" → "2ul" (say). Some rural areas keep q.' },
    { msa:'ث (th)', leb:'ت or س', note:'thaa → "t" or "s". MSA "thalaatha" → Leb "tlate" (three).' },
    { msa:'ذ (dh)', leb:'د or ز', note:'dhaal → "d" or "z". MSA "haadhaa" → Leb "hayda" (this).' },
    { msa:'ظ (DH)', leb:'ز or ض', note:'DHaa → "z" or merges with daad. "DHaher" → "zaher" (back).' },
    { msa:'ج (j)',  leb:'ج (zh-ish j)', note:'Lebanese keeps j (like French "jour"), unlike Egyptian "g".' },
    { msa:'Vowels', leb:'Imala (ē)', note:'Long ā tilts to ē/ī in many words: "naas" → "nees" (people), "kalb" stays.' },
    { msa:'تَ tā at end', leb:'-e / -a', note:'Feminine -ah/-ah → unstressed -e: "madiina" → "madine" (city).' },
  ],
  pronouns: [
    { msa:'أنا (ana)',     leb:'أنا (ana)',          en:'I' },
    { msa:'أنتَ (anta)',    leb:'إنت (inta)',         en:'you (m)' },
    { msa:'أنتِ (anti)',    leb:'إنتِ (inti)',         en:'you (f)' },
    { msa:'هو (huwa)',      leb:'هوّ (howe)',         en:'he' },
    { msa:'هي (hiya)',      leb:'هيّ (hiye)',         en:'she' },
    { msa:'نحن (na7nu)',    leb:'نحنا (n7na)',       en:'we' },
    { msa:'أنتم (antum)',   leb:'إنتو (intu)',        en:'you (pl)' },
    { msa:'هم (hum)',       leb:'هنّ (hinnen)',       en:'they' },
  ],
  common_swaps: [
    { msa:'ماذا (madha)',          leb:'شو (shu)',           en:'what' },
    { msa:'كيف (kayfa)',           leb:'كيف (kif)',          en:'how' },
    { msa:'لماذا (limadha)',       leb:'ليش (lesh)',         en:'why' },
    { msa:'متى (mata)',            leb:'إيمتى (emta)',       en:'when' },
    { msa:'أين (ayna)',            leb:'وين (wen)',          en:'where' },
    { msa:'كم (kam)',              leb:'أديش (addaysh)',     en:'how much/many (price)' },
    { msa:'الآن (al-aan)',         leb:'هلق (halla2)',       en:'now' },
    { msa:'هذا (haadhaa)',         leb:'هيدا (hayda)',       en:'this (m)' },
    { msa:'هذه (haadhihi)',        leb:'هيدي (haydi)',       en:'this (f)' },
    { msa:'هؤلاء (haa2ulaa2)',     leb:'هودي (hawdi)',       en:'these' },
    { msa:'كثير (kathir)',         leb:'كتير (ktir)',        en:'much / very' },
    { msa:'ليس (laysa)',           leb:'مش (mish)',          en:'is not / not' },
    { msa:'لا أعرف (laa a3rifu)',  leb:'ما بعرف (ma ba3ref)',en:"I don't know" },
    { msa:'أريد (urīd)',           leb:'بدّي (beddi)',       en:'I want' },
    { msa:'يوجد (yuujad)',         leb:'في (fi)',            en:'there is' },
    { msa:'الفطور (al-futur)',     leb:'الترويقة (et-trwi2a)', en:'breakfast' },
    { msa:'العشاء (al-3ashaa2)',   leb:'العشا (el-3asha)',   en:'dinner' },
    { msa:'فقط (faqat)',           leb:'بس (bas)',           en:'only / just' },
    { msa:'الآن حالاً (7aalan)',   leb:'هلق هلق (halla2)',   en:'right now' },
    { msa:'أيضاً (ayDan)',         leb:'كمان (kameen)',      en:'also / too' },
    { msa:'جداً (jiddan)',         leb:'كتير (ktir)',        en:'very' },
    { msa:'حسناً (7asanan)',       leb:'طيّب (tayyeb)',      en:'okay' },
    { msa:'أحب (u7ibb)',           leb:'بحب (b7ebb)',        en:'I love' },
    { msa:'سيارة (sayyaara)',      leb:'سيارة (sayyaara)',   en:'car (same!)' },
    { msa:'يذهب (yadhhab)',        leb:'بيروح (byruh)',      en:'he goes' },
    { msa:'يستطيع (yastatii3)',    leb:'فيه (fi-h)',         en:'he can' },
    { msa:'كثيراً (kathiran)',     leb:'كتير (ktir)',        en:'a lot' },
  ],
  verb_prefixes: [
    { msa:'present indicative: yaktub-u', leb:'b- prefix: byiktob', note:'Lebanese present uses b-: ya3rif → bya3ref. Drops mood vowels.' },
    { msa:'present continuous: rare in MSA', leb:'3am + verb: 3am byiktob', note:'"3am" prefixed to b-form means "is doing right now".' },
    { msa:'future: sa- / sawfa', leb:'rah / 7a-: rah ruh / 7ruh', note:'"rah" or contracted "7" prefixes future verb.' },
    { msa:'subjunctive: an + yaktub', leb:'bare yiktob: lazem yiktob', note:'After modals (lazem = must, biddo = want), use bare yiktob form (no b-).' },
  ],
};

// Connector words / discourse markers — essential for fluent Lebanese
const CONNECTORS = [
  { ar:'بس',     tr:'bas',           en:'but / only',       cat:'Contrast',
    examples:[
      { ar:'بحبّك بس مش هلق',    tr:'b7ebbak bas mish halla2',   en:'I like you but not now' },
      { ar:'بس واحد',              tr:'bas waa7ad',                en:'only one' },
    ]},
  { ar:'لأنّو',  tr:'la2enno',       en:'because',          cat:'Reason',
    examples:[
      { ar:'ما إجيت لأنّو كنت تعبان', tr:'ma ejit la2enno kent ta3baan', en:"I didn't come because I was tired" },
    ]},
  { ar:'يعني',   tr:'ya3ne',         en:'I mean / like',    cat:'Filler',
    examples:[
      { ar:'يعني، شو بدّي قلّك',   tr:'ya3ne, shu beddi 2ellak',   en:"I mean, what should I tell you" },
      { ar:'يعني عادي',             tr:'ya3ne 3aadi',                en:"like, normal" },
    ]},
  { ar:'مثلاً',  tr:'mathalan',      en:'for example',      cat:'Examples',
    examples:[
      { ar:'مثلاً، بحبّ الموز',     tr:'mathalan, b7ebb el-mawz',   en:'For example, I like bananas' },
    ]},
  { ar:'كأنّو',  tr:'ka2enno',       en:'as if / like',     cat:'Comparison',
    examples:[
      { ar:'كأنّو ما سمع',          tr:'ka2enno ma seme3',          en:"As if he didn't hear" },
    ]},
  { ar:'كمان',   tr:'kameen',        en:'also / too',       cat:'Addition',
    examples:[
      { ar:'أنا كمان',              tr:'ana kameen',                 en:'Me too' },
      { ar:'بدّي كمان واحد',        tr:'beddi kameen waa7ad',        en:'I want one more' },
    ]},
  { ar:'لكن',    tr:'laaken',        en:'however / but',    cat:'Contrast',
    examples:[
      { ar:'حلو لكن غالي',          tr:'7elw laaken ghaali',         en:"It's nice but expensive" },
    ]},
  { ar:'إذا',    tr:'iza',           en:'if',               cat:'Condition',
    examples:[
      { ar:'إذا بدّك تجي، تعا',     tr:'iza beddak tiji, ta3a',      en:'If you want to come, come' },
    ]},
  { ar:'لو',     tr:'law',           en:'if (hypothetical)',cat:'Condition',
    examples:[
      { ar:'لو كنت أعرف، كنت قلتلك',tr:'law kent a3ref, kent 2eltellak', en:"If I had known, I'd have told you" },
    ]},
  { ar:'لازم',   tr:'lazem',         en:'must / have to',   cat:'Modal',
    examples:[
      { ar:'لازم نروح',             tr:'lazem nruh',                 en:'We have to go' },
    ]},
  { ar:'ممكن',   tr:'mumken',        en:'maybe / possible / can',cat:'Modal',
    examples:[
      { ar:'ممكن أساعدك؟',          tr:'mumken sa3dak?',             en:'Can I help you?' },
      { ar:'ممكن يجي بكرا',          tr:'mumken yiji bukra',          en:'Maybe he comes tomorrow' },
    ]},
  { ar:'بدّي',   tr:'beddi',         en:'I want',           cat:'Modal (irregular)',
    examples:[
      { ar:'بدّي قهوة',              tr:'beddi 2ahwe',                en:'I want coffee' },
      { ar:'شو بدّك؟',                tr:'shu beddak?',                en:'What do you want? (m)' },
    ]},
  { ar:'لهيك',   tr:'lahek',         en:'so / therefore',   cat:'Result',
    examples:[
      { ar:'كنت تعبان، لهيك ما إجيت', tr:'kent ta3baan, lahek ma ejit', en:"I was tired, so I didn't come" },
    ]},
  { ar:'بعدين',  tr:'ba3den',        en:'then / later / afterwards', cat:'Sequence',
    examples:[
      { ar:'بنروح، بعدين منرجع',    tr:'bnruh, ba3den mnirja3',      en:"We'll go, then come back" },
    ]},
  { ar:'أوّل شي', tr:'awwal shi',     en:'first of all',     cat:'Sequence',
    examples:[
      { ar:'أوّل شي، شكراً',         tr:'awwal shi, shukran',          en:'First of all, thanks' },
    ]},
  { ar:'بالنسبة', tr:'b-en-nisbe la-',en:'as for',           cat:'Topic',
    examples:[
      { ar:'بالنسبة إلي، حلو',       tr:'b-en-nisbe ele, 7elw',       en:'As for me, it\'s nice' },
    ]},
  { ar:'صحيح',   tr:'sa7ee7',        en:'right? / true',    cat:'Tag',
    examples:[
      { ar:'هيك أحسن، صحيح؟',        tr:'hek a7san, sa7ee7?',         en:"That's better, right?" },
    ]},
  { ar:'ولا',    tr:'wala',          en:'or',               cat:'Choice',
    examples:[
      { ar:'شاي ولا قهوة؟',          tr:'shay wala 2ahwe?',           en:'Tea or coffee?' },
    ]},
  { ar:'حتى',    tr:'7atta',         en:'even / until',     cat:'Emphasis',
    examples:[
      { ar:'حتى أنا',                 tr:'7atta ana',                   en:'Even me' },
      { ar:'إستنى حتى يجي',           tr:'istanna 7atta yiji',          en:'Wait until he comes' },
    ]},
  { ar:'إن شالله',tr:'inshalla',      en:'God willing / hopefully', cat:'Hope',
    examples:[
      { ar:'منشوفك بكرا إن شالله',   tr:'mnshufak bukra inshalla',    en:"We'll see you tomorrow, God willing" },
    ]},
];
