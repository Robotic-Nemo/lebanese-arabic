// ============================================================
// RUN #11 — Travel & Directions, Counted Nouns, Synonyms/Antonyms
// ============================================================

// ---- TRANSPORT VOCAB ----
const TRANSPORT_VOCAB = [
  { ar:'سيّارة',     tr:'sayyaara',   en:'car',                  cat:'vehicle' },
  { ar:'تاكسي',     tr:'taxi',        en:'taxi',                 cat:'vehicle' },
  { ar:'سرفيس',     tr:'service',     en:'shared taxi',          cat:'vehicle' },
  { ar:'باص',       tr:'bas',         en:'bus',                  cat:'vehicle' },
  { ar:'فان',       tr:'van',         en:'van',                  cat:'vehicle' },
  { ar:'تران',      tr:'tren',        en:'train',                cat:'vehicle' },
  { ar:'طيّارة',     tr:'tayyaara',    en:'airplane',             cat:'vehicle' },
  { ar:'باخرة',     tr:'bekhra',      en:'ship',                 cat:'vehicle' },
  { ar:'موتسيكل',   tr:'motosikl',    en:'motorcycle',           cat:'vehicle' },
  { ar:'بسكليت',    tr:'bsiklit',     en:'bicycle',              cat:'vehicle' },
  { ar:'مطار',      tr:'matar',       en:'airport',              cat:'place' },
  { ar:'محطّة',      tr:'ma7atta',     en:'station',              cat:'place' },
  { ar:'موقف',      tr:'maw2af',      en:'parking / stop',       cat:'place' },
  { ar:'طريق',      tr:'tari2',       en:'road',                 cat:'place' },
  { ar:'شارع',      tr:'share3',      en:'street',               cat:'place' },
  { ar:'أوتوستراد',  tr:'autostrad',   en:'highway',              cat:'place' },
  { ar:'ساحة',      tr:'sa7a',        en:'square / plaza',       cat:'place' },
  { ar:'إشارة',     tr:'isharaa',     en:'traffic light',        cat:'place' },
  { ar:'تذكرة',     tr:'tazkara',     en:'ticket',               cat:'item' },
  { ar:'جواز سفر',   tr:'jawez safar', en:'passport',             cat:'item' },
  { ar:'فيزا',      tr:'visa',        en:'visa',                 cat:'item' },
  { ar:'حقيبة',     tr:'7a2ibe',      en:'suitcase / bag',       cat:'item' },
  { ar:'بنزين',     tr:'banzin',      en:'gasoline',             cat:'item' },
  { ar:'كروسي الأمان', tr:'7zem el-amen', en:'seatbelt',           cat:'item' },
];

const DIRECTION_PHRASES = [
  { ar:'وين…؟',                       tr:'wen…?',                       en:'Where is…?' },
  { ar:'كيف بوصل ع…؟',                tr:'kif bawsal 3a…?',             en:'How do I get to…?' },
  { ar:'بعيد ولّا قريب؟',                tr:"b3id walla 2arib?",           en:'Is it far or close?' },
  { ar:'كم دقيقة بالسيّارة؟',             tr:'kam de2i2a bes-sayyaara?',    en:'How many minutes by car?' },
  { ar:'كم دقيقة عالأقدام؟',            tr:"kam de2i2a 3al-a2dam?",       en:'How many minutes on foot?' },
  { ar:'دغري',                       tr:'doghré',                      en:'Straight ahead' },
  { ar:'لفّ يمين',                    tr:'leff yamin',                  en:'Turn right' },
  { ar:'لفّ شمال',                    tr:'leff shmel',                  en:'Turn left' },
  { ar:'بعد الإشارة',                 tr:"ba3d el-isharaa",             en:'After the traffic light' },
  { ar:'قبل الجامع',                  tr:'2abel el-jami3',              en:'Before the mosque' },
  { ar:'جنب البنك',                  tr:'janb el-bank',                en:'Next to the bank' },
  { ar:'قدّام المحلّ',                  tr:"2eddem el-ma7all",            en:'In front of the shop' },
  { ar:'وراء البيت',                  tr:'wara el-beit',                en:'Behind the house' },
  { ar:'بين الجامعة والمشفى',         tr:'beyn el-jem3a w el-mostashfa',en:'Between the university and the hospital' },
  { ar:'مش بعيد',                    tr:'mish b3id',                   en:'Not far' },
  { ar:'حوالي خمس دقايق',             tr:'7awale khams da2aye2',        en:'About five minutes' },
  { ar:'فوّت ع اليمين',                tr:'fawwet 3al-yamin',            en:'Take the right' },
  { ar:'تابع دغري',                   tr:'tebe3 doghré',                en:'Continue straight' },
  { ar:'إنزل هون',                   tr:'inzal hon',                   en:'Get off here' },
  { ar:'وقّفلي هون',                  tr:'wa22efli hon',                en:'Stop here for me' },
  { ar:'كم بياخد التاكسي ع…؟',        tr:'kam byekhod el-taxi 3a…?',    en:'How much does the taxi cost to…?' },
  { ar:'بدّي تذكرة لـ…',                tr:'beddi tazkara la-…',          en:'I want a ticket to…' },
];

const TRAVEL_DIALOGS = [
  {
    title:'Asking directions',
    turns:[
      { who:'you',     ar:'عفواً، وين أقرب صيدليّة؟',     tr:'3afwan, wen a2rab saydaliyye?',  en:'Excuse me, where is the nearest pharmacy?' },
      { who:'local',   ar:'تابع دغري، بعدين لفّ يمين',     tr:'tebe3 doghré, ba3den leff yamin', en:'Go straight, then turn right' },
      { who:'local',   ar:'بتلاقيها جنب البنك',           tr:'btla2iha janb el-bank',          en:"You'll find it next to the bank" },
      { who:'you',     ar:'بعيدة؟',                       tr:'b3ide?',                         en:'Is it far?' },
      { who:'local',   ar:'لأ، حوالي خمس دقايق عالأقدام',  tr:'la2, 7awale khams da2aye2 3al-a2dam', en:'No, about five minutes on foot' },
      { who:'you',     ar:'يسلمو',                       tr:'yslamu',                         en:'Thank you' },
    ]
  },
  {
    title:'Taking a service taxi',
    turns:[
      { who:'you',     ar:'سرفيس!',                     tr:'service!',                       en:'Service! (hailing shared taxi)' },
      { who:'driver',  ar:'لوين؟',                       tr:'la-wen?',                        en:'Where to?' },
      { who:'you',     ar:'الحمرا',                       tr:'el-7amra',                       en:'Hamra' },
      { who:'driver',  ar:'تفضّل، إركب',                  tr:'tfaddal, irkab',                 en:'Welcome, get in' },
      { who:'you',     ar:'بكم؟',                        tr:'b-kam?',                         en:'How much?' },
      { who:'driver',  ar:'سرفيسين، خمسين ألف',           tr:'serviceyn, khamsin alf',         en:'Two services, fifty thousand' },
      { who:'you',     ar:'وقّفلي هون من فضلك',            tr:'wa22efli hon min fadlak',        en:'Stop here, please' },
    ]
  },
  {
    title:'At the airport',
    turns:[
      { who:'you',     ar:'وين كاونتر شركة الطيران؟',      tr:'wen counter sharket et-tayaran?', en:'Where is the airline counter?' },
      { who:'staff',   ar:'لفّ شمال بعد المصعد',           tr:'leff shmel ba3d el-mas3ad',      en:'Turn left after the elevator' },
      { who:'you',     ar:'أيّ بوّابة لرحلتي؟',                tr:"ayy bawwabe la-re7letne?",       en:'Which gate for my flight?' },
      { who:'staff',   ar:'بوّابة سبعة، الطابق التاني',      tr:'bawwabe sab3a, et-tabe2 et-tene',en:'Gate seven, second floor' },
      { who:'you',     ar:'فيّي خود حقيبتي معي؟',           tr:'feyye khod 7a2ibté ma3é?',       en:'Can I take my suitcase with me?' },
      { who:'staff',   ar:'لأ، لازم تشحنها',              tr:'la2, lezem teshe7na',            en:'No, you must check it' },
    ]
  },
];

// ---- COUNTED NOUNS — Arabic-style number agreement ----
const COUNTED_NOUN_RULES = [
  {
    range:'1 (wa7ad)',
    rule:'Singular noun, no number needed if it is just "a/one X". Use "wa7ad/wa7de" for emphasis.',
    pattern:'NOUN.singular  (or  wa7ad/wa7de + NOUN)',
    examples:[
      { num:1, ar:'كتاب',         tr:'kteb',                en:'a book / one book' },
      { num:1, ar:'كتاب واحد',    tr:'kteb wa7ad',          en:'one book (m emphasis)' },
      { num:1, ar:'بنت وحدة',     tr:'bint wa7de',          en:'one girl (f emphasis)' },
    ]
  },
  {
    range:'2 (tnen)',
    rule:'Lebanese mostly uses "tnen" + plural, but classical "dual" form (-en suffix) still appears for body parts and some nouns.',
    pattern:'tnen + NOUN.plural   OR   NOUN+ayn (for fixed pairs)',
    examples:[
      { num:2, ar:'تنين كتب',     tr:'tnen kteb',           en:'two books' },
      { num:2, ar:'إيدين',        tr:'idayn',               en:'two hands (dual)' },
      { num:2, ar:'يومين',        tr:'yawmayn',             en:'two days (dual)' },
      { num:2, ar:'سنتين',        tr:'sentayn',             en:'two years (dual)' },
    ]
  },
  {
    range:'3 to 10',
    rule:'Number + plural noun. The number takes its normal feminine form; noun is plural and follows.',
    pattern:'NUMBER + NOUN.plural',
    examples:[
      { num:3,  ar:'تلت كتب',      tr:'tlet kteb',           en:'three books' },
      { num:5,  ar:'خمس بنات',     tr:'khams banat',         en:'five girls' },
      { num:7,  ar:'سبع أيّام',      tr:'sabe3 ayyem',         en:'seven days' },
      { num:10, ar:'عشر سنين',     tr:'3asher snin',         en:'ten years' },
    ]
  },
  {
    range:'11 and above',
    rule:'Number + SINGULAR noun (very different from English!). For 11+ the noun returns to its singular form.',
    pattern:'NUMBER + NOUN.singular',
    examples:[
      { num:11, ar:'حدعش كتاب',    tr:'7da3sh kteb',         en:'eleven books (sing!)' },
      { num:20, ar:'عشرين سنة',    tr:'3eshrin sene',        en:'twenty years (sing!)' },
      { num:100,ar:'مية يوم',      tr:'miyye yawm',          en:'one hundred days (sing!)' },
      { num:50, ar:'خمسين دولار',  tr:'khamsin dolar',       en:'fifty dollars (sing!)' },
    ]
  },
];

// Drill items: pick correct number-noun pairing
const COUNTED_DRILL = [
  { num:3,  noun:'kteb',  pl:'kteb',     correct:'tlet kteb',      wrong:['tlet kteb wa7ad','3eshrin kteb','tlet kitab'] },
  { num:5,  noun:'bint',  pl:'banat',    correct:'khams banat',    wrong:['khams bint','tlet bint','khams banatén'] },
  { num:11, noun:'sene',  pl:'snin',     correct:'7da3sh sene',    wrong:['7da3sh snin','tlet sene','7da3sh sentayn'] },
  { num:20, noun:'dolar', pl:'dolarat',  correct:'3eshrin dolar',  wrong:['3eshrin dolarat','tnen dolar','khamsin dolarat'] },
  { num:7,  noun:'yawm',  pl:'ayyem',    correct:'sabe3 ayyem',    wrong:['sabe3 yawm','sabe3 yawmayn','tlet ayyem'] },
  { num:2,  noun:'yawm',  pl:'yawmayn',  correct:'yawmayn',        wrong:['tnen ayyem','tnen yawm','tlet yawmayn'] },
  { num:50, noun:'lira',  pl:'lirat',    correct:'khamsin lira',   wrong:['khamsin lirat','tlet lira','khams lirat'] },
  { num:100,noun:'sene',  pl:'snin',     correct:'miyye sene',     wrong:['miyye snin','3asher snin','tlet sene'] },
  { num:1,  noun:'kteb',  pl:'kteb',     correct:'kteb wa7ad',     wrong:['wa7de kteb','tnen kteb','tlet kteb'] },
  { num:6,  noun:'sayyaara', pl:'sayyaarat', correct:'sett sayyaarat', wrong:['sett sayyaara','sett sayyaaratayn','tnen sayyaarat'] },
];

// ---- SYNONYMS & ANTONYMS ----
const SYNONYM_PAIRS = [
  { a:{ar:'كتير', tr:'ktir', en:'a lot'},     b:{ar:'هلق',  tr:'jdid',   en:'much'},      note:'both = abundant amount' },
  { a:{ar:'منيح', tr:'mni7',   en:'good'},    b:{ar:'تمام', tr:'tamem',  en:'fine'},      note:'common reply' },
  { a:{ar:'بدّي', tr:'beddi',  en:'I want'},   b:{ar:'بريد', tr:'brid',   en:'I want'},    note:'brid more formal/MSA' },
  { a:{ar:'هلّق', tr:'halla2',  en:'now'},    b:{ar:'هسّا',  tr:'hassa',  en:'now (rural)'}, note:'regional variant' },
  { a:{ar:'أكيد', tr:'akid',   en:'sure'},    b:{ar:'مبلا', tr:'mbala',  en:'of course'}, note:'mbala stronger affirm' },
  { a:{ar:'كيف',  tr:'kif',    en:'how'},     b:{ar:'شلون',tr:'shlon',   en:'how (rural)'}, note:'less common in Beirut' },
  { a:{ar:'هون',  tr:'hon',    en:'here'},    b:{ar:'هاي', tr:'hay',     en:'here (this)'}, note:'demonstrative use' },
  { a:{ar:'حلو',  tr:'7elo',   en:'sweet/nice'}, b:{ar:'حلوة',tr:'7elwe', en:'pretty'},   note:'sense overlap' },
  { a:{ar:'عبالي', tr:'3a-bali',en:'I feel like'}, b:{ar:'بدّي',tr:'beddi', en:'I want'},  note:'desire vs craving' },
  { a:{ar:'سريع', tr:'sari3',  en:'fast'},    b:{ar:'بسرعة',tr:'b-sor3a', en:'quickly'},  note:'adj vs adv' },
  { a:{ar:'بطيء', tr:'bati2',  en:'slow'},    b:{ar:'عالمهل',tr:'3a-l-mahel',en:'slowly'}, note:'slow / take it easy' },
  { a:{ar:'كبير', tr:'kbir',   en:'big'},     b:{ar:'ضخم', tr:'dakhem',  en:'huge'},      note:'dakhem more intense' },
];

const ANTONYM_PAIRS = [
  { a:{ar:'كبير', tr:'kbir',  en:'big'},      b:{ar:'صغير',tr:'zghir',  en:'small'} },
  { a:{ar:'حلو',  tr:'7elo',  en:'sweet'},    b:{ar:'مرّ',  tr:'morr',   en:'bitter'} },
  { a:{ar:'حرّ',   tr:'7arr',  en:'hot'},      b:{ar:'بارد',tr:'bared',  en:'cold'} },
  { a:{ar:'فوق',  tr:'fo2',   en:'up'},       b:{ar:'تحت',tr:'ta7t',    en:'down'} },
  { a:{ar:'يمين', tr:'yamin', en:'right'},    b:{ar:'شمال',tr:'shmel',   en:'left'} },
  { a:{ar:'سريع', tr:'sari3', en:'fast'},     b:{ar:'بطيء',tr:'bati2',   en:'slow'} },
  { a:{ar:'منيح', tr:'mni7',  en:'good'},     b:{ar:'عاطل',tr:'3atel',   en:'bad'} },
  { a:{ar:'كتير', tr:'ktir',  en:'a lot'},    b:{ar:'شويّة',tr:'shwayy',  en:'a little'} },
  { a:{ar:'قريب', tr:'2arib', en:'close'},    b:{ar:'بعيد',tr:'b3id',    en:'far'} },
  { a:{ar:'سهل',  tr:'sahel', en:'easy'},     b:{ar:'صعب',tr:'sa3eb',    en:'hard'} },
  { a:{ar:'فاضي', tr:'fade',  en:'empty'},    b:{ar:'مليان',tr:'malyen',  en:'full'} },
  { a:{ar:'جديد', tr:'jdid',  en:'new'},      b:{ar:'قديم',tr:'2adim',   en:'old (thing)'} },
  { a:{ar:'شاب',  tr:'shab',  en:'young'},    b:{ar:'كبير',tr:'kbir bes-sen',en:'old (person)'} },
  { a:{ar:'إجا',  tr:'eja',   en:'came'},     b:{ar:'راح',tr:'ra7',      en:'went'} },
  { a:{ar:'فتح',  tr:'fata7', en:'opened'},   b:{ar:'سكّر',tr:'sakkar',   en:'closed'} },
  { a:{ar:'حبّ',   tr:'7abb',  en:'loved'},    b:{ar:'كره',tr:'kereh',    en:'hated'} },
  { a:{ar:'ضحك',  tr:'de7ek', en:'laughed'},  b:{ar:'بكى',tr:'bake',     en:'cried'} },
  { a:{ar:'صبح',  tr:'sob7',  en:'morning'},  b:{ar:'مسا',tr:'masa',     en:'evening'} },
  { a:{ar:'حلو',  tr:'7elo',  en:'pretty'},   b:{ar:'بشع',tr:'beshe3',   en:'ugly'} },
  { a:{ar:'مبسوط',tr:'mabsut',en:'happy'},    b:{ar:'زعلان',tr:'za3lan',  en:'sad / upset'} },
];
