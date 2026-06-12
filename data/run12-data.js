// ============================================================
// RUN #12 — Reverse Conjugation, Animals & Nature, Professions & Workplace
// ============================================================

// ---- ANIMALS ----
const ANIMALS = [
  // Pets / domestic
  { ar:'كلب',     tr:'kalb',       en:'dog',          cat:'pet',   sound:'haw haw' },
  { ar:'بسّ',      tr:'bess',       en:'cat',          cat:'pet',   sound:'mew' },
  { ar:'عصفور',   tr:'3asfour',    en:'bird',         cat:'pet',   sound:'tsutsu' },
  { ar:'سمكة',    tr:'samake',     en:'fish',         cat:'pet',   sound:'-' },
  // Farm
  { ar:'حصان',    tr:'7sen',       en:'horse',        cat:'farm',  sound:'hihi' },
  { ar:'بقرة',    tr:'ba2ara',     en:'cow',          cat:'farm',  sound:'mu' },
  { ar:'خروف',    tr:'kharouf',    en:'sheep',        cat:'farm',  sound:'mé' },
  { ar:'عنزة',    tr:'3anze',      en:'goat',         cat:'farm',  sound:'mé' },
  { ar:'دجاجة',   tr:'djeje',      en:'chicken',      cat:'farm',  sound:'2a2' },
  { ar:'ديك',     tr:'dik',        en:'rooster',      cat:'farm',  sound:'kukurikoo' },
  { ar:'بطّة',     tr:'batta',      en:'duck',         cat:'farm',  sound:'kwak' },
  { ar:'حمار',    tr:'7mar',       en:'donkey',       cat:'farm',  sound:'haw haw' },
  // Wild
  { ar:'أسد',     tr:'asad',       en:'lion',         cat:'wild',  sound:'roar' },
  { ar:'نمر',     tr:'nemer',      en:'tiger',        cat:'wild',  sound:'-' },
  { ar:'ديب',     tr:'dib',        en:'wolf',         cat:'wild',  sound:'awoo' },
  { ar:'دبّ',      tr:'debb',       en:'bear',         cat:'wild',  sound:'-' },
  { ar:'فيل',     tr:'fil',        en:'elephant',     cat:'wild',  sound:'-' },
  { ar:'ثعلب',    tr:'tha3lab',    en:'fox',          cat:'wild',  sound:'-' },
  { ar:'أرنب',    tr:'arnab',      en:'rabbit',       cat:'wild',  sound:'-' },
  { ar:'فأر',     tr:'far',        en:'mouse',        cat:'wild',  sound:'-' },
  { ar:'حيّة',     tr:'7ayye',      en:'snake',        cat:'wild',  sound:'-' },
  // Insects / sea
  { ar:'نحلة',    tr:'na7le',      en:'bee',          cat:'insect',sound:'bzz' },
  { ar:'دبّورة',   tr:'dabbura',    en:'wasp',         cat:'insect',sound:'-' },
  { ar:'فراشة',   tr:'farashe',    en:'butterfly',    cat:'insect',sound:'-' },
  { ar:'صرصور',   tr:'sarsour',    en:'cockroach',    cat:'insect',sound:'-' },
  { ar:'نملة',    tr:'namle',      en:'ant',          cat:'insect',sound:'-' },
];

const NATURE_VOCAB = [
  { ar:'جبل',     tr:'jabal',      en:'mountain',     cat:'land' },
  { ar:'وادي',    tr:'wedi',       en:'valley',       cat:'land' },
  { ar:'بحر',     tr:'ba7r',       en:'sea',          cat:'water' },
  { ar:'نهر',     tr:'nahr',       en:'river',        cat:'water' },
  { ar:'بحيرة',   tr:'b7eyra',     en:'lake',         cat:'water' },
  { ar:'شطّ',      tr:'shatt',      en:'beach',        cat:'water' },
  { ar:'موج',     tr:'mawj',       en:'wave',         cat:'water' },
  { ar:'صخر',     tr:'sakher',     en:'rock',         cat:'land' },
  { ar:'تربة',    tr:'torbe',      en:'soil',         cat:'land' },
  { ar:'رمل',     tr:'raml',       en:'sand',         cat:'land' },
  { ar:'حقل',     tr:'7a2el',      en:'field',        cat:'land' },
  { ar:'غابة',    tr:'ghabe',      en:'forest',       cat:'plant' },
  { ar:'شجرة',    tr:'shajra',     en:'tree',         cat:'plant' },
  { ar:'وردة',    tr:'wardé',      en:'flower / rose',cat:'plant' },
  { ar:'حشيش',    tr:'7shish',     en:'grass',        cat:'plant' },
  { ar:'قمر',     tr:'2amar',      en:'moon',         cat:'sky' },
  { ar:'نجمة',    tr:'najme',      en:'star',         cat:'sky' },
  { ar:'سما',     tr:'sama',       en:'sky',          cat:'sky' },
  { ar:'شمس',     tr:'shams',      en:'sun',          cat:'sky' },
  { ar:'ضو',      tr:'daw',        en:'light',        cat:'sky' },
];

const ANIMAL_PHRASES = [
  { ar:'عندي كلب بالبيت',          tr:'3andi kalb bel-beit',          en:'I have a dog at home' },
  { ar:'البسّ نايم',                 tr:'el-bess nayem',                en:'The cat is sleeping' },
  { ar:'الديك بيصيح بكير',          tr:'ed-dik byseyye7 bakir',        en:'The rooster crows early' },
  { ar:'البحر هادي اليوم',          tr:'el-ba7r hede el-yawm',         en:'The sea is calm today' },
  { ar:'القمر بدر الليلة',           tr:'el-2amar badr el-leyle',       en:'The moon is full tonight' },
  { ar:'فيي شوف نجوم',              tr:'feyye shouf njoum',            en:'I can see stars' },
  { ar:'الشجرة كبيرة كتير',         tr:'esh-shajra kbire ktir',        en:'The tree is very big' },
  { ar:'في حشيش بالحديقة',          tr:'fi 7shish bel-7adi2a',         en:"There's grass in the garden" },
  { ar:'بكره الفأر',                 tr:'ba2rah el-far',                en:'I hate the mouse' },
  { ar:'إحذر الحيّة',                 tr:'i7zar el-7ayye',               en:'Beware of the snake' },
  { ar:'النحل عم يطير',              tr:'en-na7l 3am ytir',             en:'The bees are flying' },
  { ar:'منحب نروح ع الشط',          tr:"mn7eb nrouh 3ash-shatt",       en:'We love going to the beach' },
];

// ---- PROFESSIONS & WORKPLACE ----
const PROFESSIONS = [
  // Common — m/f forms
  { en:'doctor',         m:{ar:'دكتور',    tr:'doktor'},     f:{ar:'دكتورة',  tr:'doktora'} },
  { en:'engineer',       m:{ar:'مهندس',    tr:'mhandes'},    f:{ar:'مهندسة',  tr:'mhandse'} },
  { en:'teacher',        m:{ar:'أستاذ',     tr:'estez'},      f:{ar:'أستاذة',   tr:'esteze'} },
  { en:'student',        m:{ar:'طالب',     tr:'taleb'},      f:{ar:'طالبة',   tr:'talbe'} },
  { en:'lawyer',         m:{ar:'محامي',    tr:'me7ami'},     f:{ar:'محامية',  tr:'me7amiyye'} },
  { en:'accountant',     m:{ar:'محاسب',    tr:'m7aseb'},     f:{ar:'محاسبة',  tr:'m7asbe'} },
  { en:'nurse',          m:{ar:'ممرّض',     tr:'mmarred'},    f:{ar:'ممرّضة',   tr:'mmarrde'} },
  { en:'manager',        m:{ar:'مدير',     tr:'mudir'},      f:{ar:'مديرة',   tr:'mudira'} },
  { en:'employee',       m:{ar:'موظّف',     tr:'mwazzaf'},    f:{ar:'موظّفة',   tr:'mwazzfe'} },
  { en:'driver',         m:{ar:'سائق',     tr:'sayye2'},     f:{ar:'سائقة',   tr:'sayy2a'} },
  { en:'chef',           m:{ar:'طبّاخ',     tr:'tabbekh'},    f:{ar:'طبّاخة',   tr:'tabbekha'} },
  { en:'shopkeeper',     m:{ar:'صاحب محلّ', tr:"sa7eb ma7all"}, f:{ar:'صاحبة محلّ',tr:"sa7be ma7all"} },
  { en:'farmer',         m:{ar:'فلّاح',      tr:'falle7'},     f:{ar:'فلّاحة',    tr:'falle7a'} },
  { en:'journalist',     m:{ar:'صحافي',    tr:'sa7afi'},     f:{ar:'صحافية',  tr:'sa7afiyye'} },
  { en:'artist',         m:{ar:'فنّان',      tr:'fannen'},     f:{ar:'فنّانة',    tr:'fannene'} },
  { en:'soldier',        m:{ar:'عسكري',    tr:'3askari'},    f:{ar:'عسكرية',  tr:'3askariyye'} },
  { en:'baker',          m:{ar:'فرّان',      tr:'farren'},     f:{ar:'فرّانة',    tr:'farrene'} },
  { en:'carpenter',      m:{ar:'نجّار',      tr:'najjar'},     f:{ar:'نجّارة',    tr:'najjara'} },
  { en:'mechanic',       m:{ar:'ميكانيكي', tr:'meekaniki'},  f:{ar:'ميكانيكية',tr:'meekanikiyye'} },
  { en:'painter',        m:{ar:'دهّان',      tr:'dahhen'},     f:{ar:'دهّانة',    tr:'dahhene'} },
  { en:'plumber',        m:{ar:'صحّيّ',      tr:'se77i'},      f:{ar:'صحّيّة',     tr:'se77iyye'} },
  { en:'electrician',    m:{ar:'كهربجي',   tr:'kahrabji'},   f:{ar:'كهربجية', tr:'kahrabjiyye'} },
];

const WORKPLACE_VOCAB = [
  { ar:'شغل',     tr:'shoghol',    en:'work / job' },
  { ar:'مكتب',    tr:'maktab',     en:'office' },
  { ar:'شركة',    tr:'sharke',     en:'company' },
  { ar:'مدرسة',   tr:'madrase',    en:'school' },
  { ar:'مستشفى',  tr:'mostashfa',  en:'hospital' },
  { ar:'مصنع',    tr:'masna3',     en:'factory' },
  { ar:'محلّ',     tr:'ma7all',     en:'shop' },
  { ar:'ورشة',    tr:'warshe',     en:'workshop' },
  { ar:'إجتماع',  tr:'ijtema3',    en:'meeting' },
  { ar:'مشروع',   tr:'mashru3',    en:'project' },
  { ar:'مهمّة',    tr:'mahamme',    en:'task' },
  { ar:'موعد',    tr:'maw3ad',     en:'appointment' },
  { ar:'ملف',     tr:'malaff',     en:'file' },
  { ar:'تقرير',   tr:'ta2rir',     en:'report' },
  { ar:'إيميل',   tr:'email',      en:'email' },
  { ar:'تلفون',   tr:'telefon',    en:'phone' },
  { ar:'عقد',     tr:'3a2d',       en:'contract' },
  { ar:'راتب',    tr:'rateb',      en:'salary' },
  { ar:'إجازة',   tr:'ijaze',      en:'vacation / leave' },
  { ar:'دوام',    tr:'dawem',      en:'shift / working hours' },
  { ar:'زبون',    tr:'zboun',      en:'customer' },
  { ar:'زميل',    tr:'zamil',      en:'colleague' },
  { ar:'مديرة',   tr:'mudira',     en:'manager (f)' },
  { ar:'ضرايب',   tr:'darayeb',    en:'taxes' },
];

const WORKPLACE_PHRASES = [
  { ar:'شو شغلك؟',                  tr:'shu shoghlak?',                en:"What's your job?" },
  { ar:'بشتغل بشركة',                tr:'beshteghel b-sharke',          en:'I work at a company' },
  { ar:'عندي إجتماع الساعة عشرة',     tr:'3andi ijtema3 es-sa3a 3ashra', en:'I have a meeting at ten' },
  { ar:'بدّي بعت إيميل',                tr:'beddi be3ot email',            en:'I want to send an email' },
  { ar:'المدير عم يطلبني',             tr:'el-mudir 3am yetlobne',        en:"The manager wants me" },
  { ar:'الراتب آخر الشهر',             tr:'er-rateb ekher esh-shahr',     en:'The salary is end of month' },
  { ar:'بدّي إجازة بكرا',                tr:'beddi ijaze bukra',            en:'I want leave tomorrow' },
  { ar:'المشروع لازم يخلص',            tr:'el-mashru3 lezem ykhalles',    en:'The project must be finished' },
  { ar:'كم زميل عندك؟',               tr:'kam zamil 3andak?',            en:'How many colleagues do you have?' },
  { ar:'في زبون عم يستنّى',              tr:'fi zboun 3am yestanna',        en:"There's a customer waiting" },
  { ar:'الدوام من تمنة لخمسة',          tr:'ed-dawem min tmene la-khamse',en:'Working hours from 8 to 5' },
  { ar:'لازم نعمل تقرير',              tr:'lezem na3mol ta2rir',          en:'We need to make a report' },
];

const WORKPLACE_DIALOG = {
  title:'Asking about a new job',
  turns:[
    { who:'a', ar:'مرحبا، شو شغلك الجديد؟',          tr:'mar7aba, shu shoghlak el-jdid?',   en:"Hi, what's your new job?" },
    { who:'b', ar:'صرت مهندس بشركة بناء',             tr:"sert mhandes b-sharket bina",      en:"I became an engineer at a construction company" },
    { who:'a', ar:'مبروك! شو الدوام؟',                  tr:'mabrouk! shu ed-dawem?',           en:'Congrats! What are the hours?' },
    { who:'b', ar:'من تمنة لخمسة، خمس أيام بالأسبوع',   tr:'min tmene la-khamse, khams ayyem bel-osbu3', en:'From 8 to 5, five days a week' },
    { who:'a', ar:'كم الراتب؟ إذا بقدر سأل',             tr:'kam er-rateb? iza be2dar es2al',  en:'How much is the salary, if I may ask?' },
    { who:'b', ar:'منيح، بس عندي مهمّات كتير',           tr:'mni7, bess 3andi mahammet ktir',  en:"It's good, but I have many tasks" },
    { who:'a', ar:'إنشالله بتنجح',                      tr:'inshallah betenja7',              en:'God willing, you will succeed' },
    { who:'b', ar:'يسلموا، شكراً',                       tr:'yslamu, shukran',                  en:'Bless you, thanks' },
  ]
};
