// ============================================================
// RUN #10 — Shopping & Bargaining, Weather & Clothing, Conditionals
// ============================================================

// ---- SHOPPING & MONEY ----
const MONEY_TERMS = [
  { ar:'مصاري',     tr:'masari',       en:'money (general)' },
  { ar:'فلوس',      tr:'flus',         en:'money (cash)' },
  { ar:'ليرة',      tr:'lira',         en:'lira (LBP)' },
  { ar:'دولار',     tr:'dolar',        en:'dollar' },
  { ar:'سعر',       tr:'se3r',         en:'price' },
  { ar:'حساب',      tr:'7isab',        en:'bill / account' },
  { ar:'فكّة',        tr:'fakke',        en:'change (coins)' },
  { ar:'كاش',       tr:'cash',         en:'cash' },
  { ar:'بطاقة',     tr:'bita2a',       en:'card' },
  { ar:'فاتورة',    tr:'fatura',       en:'receipt / invoice' },
  { ar:'تخفيض',     tr:'takhfid',      en:'discount' },
  { ar:'غالي',      tr:'ghali',        en:'expensive' },
  { ar:'رخيص',      tr:'rkhis',        en:'cheap' },
  { ar:'نص سعر',    tr:'nos se3r',     en:'half price' },
  { ar:'مجّاني',     tr:'majjani',      en:'free' },
  { ar:'بقشيش',     tr:'ba2shish',     en:'tip' },
];

const SHOPPING_PHRASES = [
  { ar:'بكم هيدا؟',                    tr:'b-kam hayda?',                en:'How much is this?',                step:'ask' },
  { ar:'بكم هيدول؟',                   tr:'b-kam haydol?',               en:'How much for these?',              step:'ask' },
  { ar:'كم بياخد؟',                    tr:'kam byekhod?',                en:'How much does it cost?',           step:'ask' },
  { ar:'في تخفيض؟',                    tr:'fi takhfid?',                 en:'Is there a discount?',             step:'ask' },
  { ar:'فيي شوف؟',                     tr:'feyye shouf?',                en:'Can I look?',                      step:'ask' },
  { ar:'فيي جرّب؟',                     tr:'feyye jarreb?',               en:'Can I try (it on)?',               step:'ask' },
  { ar:'في حجم أكبر؟',                 tr:'fi 7ajem akbar?',             en:'Is there a bigger size?',          step:'ask' },
  { ar:'في لون تاني؟',                  tr:'fi lawn tani?',               en:'Is there another color?',          step:'ask' },
  { ar:'هيدا غالي كتير',                tr:'hayda ghali ktir',            en:"This is too expensive",            step:'bargain' },
  { ar:'بتنزّل السعر؟',                 tr:'btnazzel es-se3r?',           en:'Will you lower the price?',        step:'bargain' },
  { ar:'آخر سعر؟',                     tr:'akher se3r?',                 en:'Best (final) price?',              step:'bargain' },
  { ar:'بدفع كاش لو نزّلت',              tr:'badfa3 cash law nazzalt',     en:"I'll pay cash if you lower it",    step:'bargain' },
  { ar:'بآخدو بـ…',                     tr:"baekhdo b-…",                 en:"I'll take it for…",                step:'bargain' },
  { ar:'لأ، كتير غالي',                  tr:'la2, ktir ghali',             en:"No, too expensive",                step:'bargain' },
  { ar:'برجع بعدين، شكراً',                    tr:'birja3 ba3dein, shukran',              en:"I'll come back later, thanks",     step:'bargain' },
  { ar:'بدّي إيّاه',                      tr:'beddi yyeh',                  en:'I want it',                        step:'buy' },
  { ar:'بآخدو',                        tr:'baekhdo',                     en:"I'll take it",                     step:'buy' },
  { ar:'لفّيلي يّاه من فضلك',             tr:'leffili yyeh min fadlak',     en:'Wrap it for me, please',           step:'buy' },
  { ar:'فيي إرجاعو؟',                   tr:'feyye irja3o?',               en:'Can I return it?',                 step:'buy' },
  { ar:'الفاتورة من فضلك',               tr:'el-fatura min fadlak',        en:'Receipt, please',                  step:'buy' },
];

const SHOPPING_DIALOGS = [
  {
    title:'Asking the price',
    turns:[
      { who:'you',     ar:'مرحبا، بكم هيدا؟',           tr:'mar7aba, b-kam hayda?',         en:'Hi, how much is this?' },
      { who:'shopkpr', ar:'هيدا بـ خمسين دولار',         tr:'hayda b-khamsin dolar',         en:"This is fifty dollars" },
      { who:'you',     ar:'كتير غالي… آخر سعر؟',         tr:'ktir ghali… akher se3r?',       en:'Too expensive… best price?' },
      { who:'shopkpr', ar:'منزّل أربعين',                 tr:'mnazzel arba3in',                en:"I'll go down to forty" },
      { who:'you',     ar:'بآخدو بـ خمسة وتلاتين',         tr:'baekhdo b-khamse w-tletin',     en:"I'll take it for thirty-five" },
      { who:'shopkpr', ar:'ماشي، تكرم عينك',              tr:'mashi, tekram 3ainak',           en:"OK, with pleasure" },
    ]
  },
  {
    title:'Trying on clothes',
    turns:[
      { who:'you',     ar:'فيي جرّب هيدا القميص؟',         tr:'feyye jarreb hayda el-2amis?',  en:'Can I try on this shirt?' },
      { who:'shopkpr', ar:'أكيد، الكبينة هونيك',            tr:'akid, el-cabine honik',          en:'Sure, the dressing room is over there' },
      { who:'you',     ar:'هيدا صغير، في حجم أكبر؟',       tr:'hayda zghir, fi 7ajem akbar?',   en:"This is small, is there a bigger size?" },
      { who:'shopkpr', ar:'تفضّل، هيدا لارج',                tr:'tfaddal, hayda L',               en:'Here you go, this is large' },
      { who:'you',     ar:'تمام، بآخدو',                    tr:'tamem, baekhdo',                 en:"Perfect, I'll take it" },
    ]
  },
  {
    title:'Paying',
    turns:[
      { who:'you',     ar:'بتقبلوا فيزا؟',                 tr:'bte2balu visa?',                 en:'Do you accept Visa?' },
      { who:'shopkpr', ar:'بنقبل كاش وفيزا',               tr:'bne2bal cash w visa',            en:'We accept cash and Visa' },
      { who:'you',     ar:'كم الكلّ؟',                      tr:'kam el-kell?',                    en:'How much is the total?' },
      { who:'shopkpr', ar:'مية وعشرين',                   tr:'miyye w 3eshrin',                en:'One hundred twenty' },
      { who:'you',     ar:'تفضّل، فيزا',                     tr:'tfaddal, visa',                  en:'Here is the Visa' },
      { who:'shopkpr', ar:'الفاتورة، شكرا',                tr:'el-fatura, shukran',             en:'Your receipt, thanks' },
    ]
  },
];

// ---- WEATHER & CLOTHING ----
const WEATHER_WORDS = [
  { ar:'الجو',      tr:'el-jaw',     en:'weather',         cat:'gen' },
  { ar:'شمس',       tr:'shams',      en:'sun',             cat:'gen' },
  { ar:'مشمس',      tr:'mshammes',   en:'sunny',           cat:'cond' },
  { ar:'غيم',       tr:'gheim',      en:'clouds',          cat:'gen' },
  { ar:'مغيّم',       tr:'mgheyyem',   en:'cloudy',          cat:'cond' },
  { ar:'مطر',       tr:'matar',      en:'rain',            cat:'gen' },
  { ar:'عم تشتي',   tr:'3am tshatti',en:"it's raining",    cat:'cond' },
  { ar:'تلج',       tr:'talj',       en:'snow',            cat:'gen' },
  { ar:'عم تتلج',   tr:'3am tetlej', en:"it's snowing",    cat:'cond' },
  { ar:'هوا',       tr:'hawa',       en:'wind / air',      cat:'gen' },
  { ar:'عاصفة',     tr:'3asfe',      en:'storm',           cat:'gen' },
  { ar:'رعد',       tr:'ra3ed',      en:'thunder',         cat:'gen' },
  { ar:'برق',       tr:'bare2',      en:'lightning',       cat:'gen' },
  { ar:'ضباب',      tr:'dabab',      en:'fog',             cat:'gen' },
  { ar:'حرارة',     tr:'7arara',     en:'heat / temp',     cat:'gen' },
  { ar:'حرّ',         tr:'7arr',       en:'hot',             cat:'cond' },
  { ar:'برد',       tr:'bared',      en:'cold',            cat:'cond' },
  { ar:'دفا',       tr:'dafa',       en:'warmth',          cat:'gen' },
  { ar:'دافي',      tr:'defé',       en:'warm',            cat:'cond' },
  { ar:'رطوبة',     tr:'rtoube',     en:'humidity',        cat:'gen' },
  { ar:'مغبّر',       tr:'mghabbar',   en:'dusty',           cat:'cond' },
  { ar:'لطيف',      tr:'latif',      en:'pleasant',        cat:'cond' },
];

const CLOTHING_ITEMS = [
  { ar:'تيشيرت',    tr:'tishirt',    en:'t-shirt',         season:'all' },
  { ar:'قميص',      tr:'2amis',      en:'shirt',           season:'all' },
  { ar:'بنطلون',    tr:'bantalon',   en:'pants',           season:'all' },
  { ar:'شورت',      tr:'short',      en:'shorts',          season:'summer' },
  { ar:'تنّورة',      tr:'tannoura',   en:'skirt',           season:'all' },
  { ar:'فستان',     tr:'fustan',     en:'dress',           season:'all' },
  { ar:'جاكيت',     tr:'jakét',      en:'jacket',          season:'winter' },
  { ar:'كنزة',      tr:'kanze',      en:'sweater',         season:'winter' },
  { ar:'معطف',      tr:'me3taf',     en:'coat',            season:'winter' },
  { ar:'بدلة',      tr:'badle',      en:'suit',            season:'all' },
  { ar:'حذاء',      tr:'7aza',       en:'shoes (formal)',  season:'all' },
  { ar:'كندرة',     tr:'kondra',     en:'shoes',           season:'all' },
  { ar:'صندل',      tr:'sandal',     en:'sandals',         season:'summer' },
  { ar:'بوط',       tr:'bot',        en:'boots',           season:'winter' },
  { ar:'كلسات',     tr:'kalsat',     en:'socks',           season:'all' },
  { ar:'قبّعة',       tr:'2obba3a',    en:'hat',             season:'all' },
  { ar:'شال',       tr:'shal',       en:'scarf',           season:'winter' },
  { ar:'كفوف',      tr:'kfuf',       en:'gloves',          season:'winter' },
  { ar:'حزام',      tr:'7zem',       en:'belt',            season:'all' },
  { ar:'نظّارات',     tr:'naddarat',   en:'sunglasses',      season:'summer' },
  { ar:'مظلّة',      tr:'mzalle',     en:'umbrella',        season:'rain' },
  { ar:'مايو',      tr:'mayyo',      en:'swimsuit',        season:'summer' },
];

const WEATHER_PHRASES = [
  { ar:'كيف الجو اليوم؟',                tr:'kif el-jaw el-yawm?',          en:"How's the weather today?" },
  { ar:'الجو منيح',                       tr:'el-jaw mni7',                  en:'The weather is nice' },
  { ar:'عم يحرّ',                          tr:'3am y7err',                    en:"It's getting hot" },
  { ar:'عم يبرّد',                         tr:'3am ybarred',                  en:"It's getting cold" },
  { ar:'عم تشتي بقوّة',                    tr:"3am tshatti b-2owwe",          en:"It's raining hard" },
  { ar:'الشمس قويّة',                      tr:'esh-shams 2awiyye',            en:'The sun is strong' },
  { ar:'كم الحرارة؟',                     tr:'kam el-7arara?',               en:"What's the temperature?" },
  { ar:'حوالي عشرين درجة',                 tr:"7awale 3eshrin daraje",        en:'About twenty degrees' },
  { ar:'بكير، شو لازم البس؟',              tr:'bakir, shu lezem ilbas?',      en:"It's early, what should I wear?" },
  { ar:'إلبس جاكيت، الجو بارد',             tr:'ilbas jakét, el-jaw bared',    en:"Wear a jacket, it's cold" },
  { ar:'خود معك مظلّة',                    tr:'khod ma3ak mzalle',            en:'Take an umbrella with you' },
  { ar:'بكرا في غيم',                     tr:'bukra fi gheim',               en:"Tomorrow it's cloudy" },
];

// ---- CONDITIONALS (iza / law / iza ken) ----
const CONDITIONAL_TYPES = [
  {
    key:'iza',
    label:'إذا (iza) — real / likely',
    rule:'For likely or real conditions. Used with present or past in if-clause; main clause uses future or imperative.',
    pattern:'iza + [present/past], + [future/imperative]',
    examples:[
      { if:'iza shi3et el-matar',        then:'khod mzalle',             ar_if:'إذا شفت المطر',     ar_then:'خود مظلّة',     en:'If you see the rain, take an umbrella' },
      { if:'iza ejit bukra',             then:'mna7ki',                  ar_if:'إذا إجيت بكرا',     ar_then:'منحكي',         en:"If you come tomorrow, we'll talk" },
      { if:'iza 3andak wa2t',            then:'ta3a 3andna',             ar_if:'إذا عندك وقت',      ar_then:'تعا عندنا',     en:'If you have time, come over' },
    ]
  },
  {
    key:'law',
    label:'لو (law) — hypothetical / unreal',
    rule:'For hypothetical or contrary-to-fact conditions. Often paired with "kont" + verb in main clause for "would have".',
    pattern:'law + [past], + kont/raj7 + [verb]',
    examples:[
      { if:'law 3indi wa2t',             then:'kont jit',                ar_if:'لو عندي وقت',       ar_then:'كنت جيت',       en:'If I had time, I would have come' },
      { if:'law btshufo',                then:'kont 3jebak',             ar_if:'لو بتشوفو',         ar_then:'كنت عجبك',       en:'If you saw him, you would like him' },
      { if:'law fi mai',                 then:'kont 7ammamt',            ar_if:'لو في مي',          ar_then:'كنت حمّمت',     en:'If there were water, I would have showered' },
    ]
  },
  {
    key:'iza_ken',
    label:'إذا كان (iza ken) — past hypothetical',
    rule:'For past unreal: "if it had been...". Combines iza + past form of "kan" (to be) + main verb.',
    pattern:'iza ken + [verb past], + ra7/kan + [verb]',
    examples:[
      { if:'iza ken eja',                then:'kont kelmto',             ar_if:'إذا كان إجا',       ar_then:'كنت كلّمتو',    en:'If he had come, I would have spoken to him' },
      { if:'iza ken 3rifet',             then:'ma kont rht',             ar_if:'إذا كان عرفت',      ar_then:'ما كنت رحت',    en:"If I had known, I wouldn't have gone" },
    ]
  },
];

// Cloze drill items: blank one element, user types correct conditional word or verb
const CONDITIONAL_DRILL = [
  { sentence_blank:'___ 3andak wa2t, ta3a 3andna',  answer:'iza',     hint:'real, likely',           ar:'___ عندك وقت، تعا عندنا',   en:'If you have time, come over' },
  { sentence_blank:'___ 3indi flus, kont safart',   answer:'law',     hint:'hypothetical, unreal',   ar:'___ عندي فلوس، كنت سافرت',  en:'If I had money, I would have traveled' },
  { sentence_blank:'iza ___ bukra, mna7ki',         answer:'ejit',    hint:'past form of "to come"', ar:'إذا ___ بكرا، منحكي',       en:'If you come tomorrow, we will talk' },
  { sentence_blank:'law btshufo, ___ 3jebak',       answer:'kont',    hint:'auxiliary for "would"',  ar:'لو بتشوفو، ___ عجبك',        en:'If you saw him, you would like him' },
  { sentence_blank:'___ 3rifet, ma kont jit',       answer:'iza ken', hint:'past hypothetical',      ar:'___ عرفت، ما كنت جيت',       en:'If I had known, I would not have come' },
  { sentence_blank:'iza shi3et el-matar, ___ mzalle', answer:'khod',  hint:'imperative "take" (m)',  ar:'إذا شفت المطر، ___ مظلّة',     en:'If you see the rain, take an umbrella' },
  { sentence_blank:'law fi mai, ___ 7ammamt',       answer:'kont',    hint:'auxiliary for "would"',  ar:'لو في مي، ___ حمّمت',         en:'If there were water, I would have showered' },
  { sentence_blank:'___ ejit, kelmto',              answer:'iza',     hint:'real condition',         ar:'___ إجيت، كلّمتو',           en:'If I came, I spoke to him' },
];
