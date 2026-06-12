// Run #16 data — Diary Prompts, Collocations, Politeness
// Prefixes: dj-, co-, pe-

// ============ DIARY / JOURNAL PROMPTS ============
const DIARY_PROMPTS = [
  {
    id: 1,
    en: 'Describe your morning routine.',
    ar: 'وصّف روتينك الصباحي',
    tr: 'wassef rotinak el saba7i',
    hints: ['fi2et = woke up','shrebt 2ahwe = drank coffee','akalt = ate','nzelet = went down','ri7et 3al shoghol = went to work'],
    sample: {
      ar: 'بفيق الساعة سبعة. بشرب قهوة وبوكل خبز. بعدين بنزل عالشغل عالساعة تمنية.',
      tr: 'bfi2 el se3a sab3a. beshrab 2ahwe w bewkol khebez. ba3dein benzel 3al shoghol 3al se3a tmenye.',
      en: 'I wake up at seven. I drink coffee and eat bread. Then I go down to work at eight.'
    }
  },
  {
    id: 2,
    en: 'Talk about your weekend plans.',
    ar: 'إحكي عن خططك للويك إند',
    tr: '7ki 3an khotatak lal weekend',
    hints: ['ra7 = will','rou7 / nrou7 = go','sahra = night out','3ayle = family','2arib = friend / close one'],
    sample: {
      ar: 'هالويك إند رح روح عبيت أهلي. بعدين رح طلع سهرة مع رفقاتي.',
      tr: 'hal weekend ra7 rou7 3a bayt ahli. ba3dein ra7 etla3 sahra ma3 rfe2ati.',
      en: "This weekend I'll go to my parents' house. Then I'll go out at night with my friends."
    }
  },
  {
    id: 3,
    en: 'Describe a meal you love.',
    ar: 'وصّف أكلة بتحبها',
    tr: 'wassef akle bet7ibba',
    hints: ['akle = dish','bet7ibb = you love','tabkha = cooking','soura = picture','ta3em = taste'],
    sample: {
      ar: 'بحب التبولة كتير. فيها بقدونس وبندورة وبرغل وحامض. تقول طعمها مفتاح الصيف.',
      tr: 'b7ib el tabbouleh kteer. fiya ba2dounes w bandoura w borghol w 7amed. te2oul ta3ma mefte7 el sayf.',
      en: 'I love tabbouleh a lot. It has parsley, tomatoes, bulgur, and lemon. You\'d say its taste is the key of summer.'
    }
  },
  {
    id: 4,
    en: 'Write about a place you want to visit.',
    ar: 'إكتب عن محل بدّك تزوره',
    tr: 'ekteb 3an ma7al baddak tzouro',
    hints: ['baddi = I want','zar = visit','ymken = maybe','sho2et = I miss','te2afe = culture'],
    sample: {
      ar: 'بدي روح عاليابان. سمعت إنّو الأكل طيّب والثقافة حلوة كتير. يمكن السنة الجاية روح.',
      tr: 'baddi rou7 3al Yaban. sme3et inno el akel tayyeb wel sa2afe 7ilwe kteer. yemken el sene el jaye rou7.',
      en: 'I want to go to Japan. I heard the food is delicious and the culture is very nice. Maybe next year I\'ll go.'
    }
  },
  {
    id: 5,
    en: 'Describe how you felt today.',
    ar: 'وصّف كيف حسّيت اليوم',
    tr: 'wassef kif 7assayt el yawm',
    hints: ['mabsout = happy','ta3ben = tired','metnarvez = stressed','3am bafkar = thinking','akhiran = finally'],
    sample: {
      ar: 'حسّيت كتير منيح اليوم. الجو كان حلو وخلصت كل شغلي قبل وقت. أخيرا قدرت إرتاح شوي.',
      tr: '7assayt kteer mni7 el yawm. el jaw ken 7ilo w khalast kel shoghli 2abel wa2t. akhiran 2dirt erta7 shway.',
      en: 'I felt very good today. The weather was nice and I finished all my work early. Finally I was able to rest a bit.'
    }
  },
  {
    id: 6,
    en: 'Talk about your best friend.',
    ar: 'إحكي عن أحسن صديق إلك',
    tr: '7ki 3an a7san sadi2 elak',
    hints: ['rfi2 / sadi2 = friend','ne3em / mni7 = good-natured','min sghor = since young age','byestannani = waits for me','byefham = understands'],
    sample: {
      ar: 'أحسن رفيقي إسمو كريم. صديقي من زمان من المدرسة. بيفهمني حتى لما ما بحكي شي.',
      tr: 'a7san rfi2i esmo Karim. sadi2i men zaman men el madrase. byefhamni 7atta lamma ma be7ki shi.',
      en: 'My best friend\'s name is Karim. My friend since long ago, from school. He understands me even when I don\'t say anything.'
    }
  },
  {
    id: 7,
    en: 'Write about something that made you laugh.',
    ar: 'إكتب عن شي ضحّكك',
    tr: 'ekteb 3an shi da77akak',
    hints: ['da7ek = laughed','nokte = joke','mawqef = situation','7aywan = animal (or funny person)','ma 2dirt 7akem 7ali = couldn\'t control myself'],
    sample: {
      ar: 'مبارح خيّي حكالي نكتة عن قطّتنا. ما قدرت أحكم حالي من الضحك.',
      tr: 'mbere7 khayyi 7akali nokte 3an 2attetna. ma 2dirt e7kem 7ali men el da7ek.',
      en: 'Yesterday my brother told me a joke about our cat. I couldn\'t control myself from laughing.'
    }
  },
  {
    id: 8,
    en: 'Describe your dream job.',
    ar: 'وصّف شغل أحلامك',
    tr: 'wassef shoghol a7lemak',
    hints: ['7olm = dream','baddi sir = I want to become','kteer 7lo = very nice','7orriye = freedom','sa3ed el nes = help people'],
    sample: {
      ar: 'بحلم سير دكتور. بحب ساعد الناس وبحب علم الطب. بعرف إنّو طريق طويل بس بستحق.',
      tr: 'be7lom sir doctor. b7ib se3ed el nes w b7ib 3elem el tib. ba3ref inno tari2 tawil bas byesta7e2.',
      en: 'I dream of becoming a doctor. I love helping people and I love medicine. I know it\'s a long road but it\'s worth it.'
    }
  }
];

// ============ COMMON COLLOCATIONS ============
// Fixed multi-word combos that learners produce wrong individually
const COLLOCATIONS = [
  { ar: 'فات النوم', tr: 'fet el nawm', en: 'fall asleep (lit. enter sleep)', cat: 'verb+n' },
  { ar: 'أخد قرار', tr: 'akhad qarar', en: 'make a decision', cat: 'verb+n' },
  { ar: 'عمل حساب', tr: '3amel 7sab', en: 'open an account', cat: 'verb+n' },
  { ar: 'دفع الحساب', tr: 'dafa3 el 7sab', en: 'pay the bill', cat: 'verb+n' },
  { ar: 'طلب مساعدة', tr: 'talab msa3ade', en: 'ask for help', cat: 'verb+n' },
  { ar: 'صار جوع', tr: 'sar jou3', en: 'got hungry (lit. became hunger)', cat: 'verb+n' },
  { ar: 'صار عمر', tr: 'sar 3omr', en: 'has been a long time', cat: 'verb+n' },
  { ar: 'ضحك من قلبو', tr: 'de7ek men 2albo', en: 'laughed from his heart', cat: 'verb+prep' },
  { ar: 'حكا من قلبو', tr: '7aka men 2albo', en: 'spoke sincerely', cat: 'verb+prep' },
  { ar: 'مات ضحك', tr: 'met de7ek', en: 'died laughing (loved it)', cat: 'verb+v' },
  { ar: 'قتلني من الجوع', tr: 'qatalni men el jou3', en: "I'm starving (he killed me from hunger)", cat: 'idiom' },
  { ar: 'وقع بحب', tr: 'wi2e3 b 7ob', en: 'fell in love', cat: 'verb+prep' },
  { ar: 'فتح موضوع', tr: 'fata7 mawdou3', en: 'brought up a topic', cat: 'verb+n' },
  { ar: 'سدّ شغلة', tr: 'sad shaghle', en: 'plugged a gap / handled a thing', cat: 'verb+n' },
  { ar: 'لقّط الموقف', tr: 'la22et el mawqef', en: 'caught on / read the situation', cat: 'verb+n' },
  { ar: 'كسر الجو', tr: 'kasar el jaw', en: 'broke the ice', cat: 'idiom' },
  { ar: 'شدّ الحيل', tr: 'shadd el 7ayl', en: 'pull yourself together', cat: 'idiom' },
  { ar: 'تركت بيدك', tr: 'tarakit b idak', en: 'left it in your hands', cat: 'idiom' },
  { ar: 'حطّ ببالك', tr: '7ott b belak', en: 'keep in mind', cat: 'idiom' },
  { ar: 'راح ع راسي', tr: 'ra7 3a rasi', en: "went on me / I'll cover it", cat: 'idiom' },
  { ar: 'قلبي معك', tr: '2albi ma3ak', en: 'my heart is with you', cat: 'comfort' },
  { ar: 'يخرب بيتك', tr: 'ykharrib baytak', en: 'damn you (playful)', cat: 'idiom' },
  { ar: 'الله معك', tr: 'allah ma3ak', en: 'good luck (God be with you)', cat: 'farewell' },
  { ar: 'صحّتين', tr: 'sa7tein', en: 'two healths (= bless your meal)', cat: 'meal' }
];

// Cloze: the verb is missing — pick from options
const CO_DRILL = [
  { sent: '____ النوم بسرعة', blank: 'fet', en: 'fall asleep fast', opts: ['fet','akal','rasem','wassel'] },
  { sent: 'لازم نـ____ قرار', blank: 'akhod', en: 'we must make a decision', opts: ['akhod','dafe3','futa','rasem'] },
  { sent: '____ الحساب لو سمحت', blank: 'edfa3', en: 'pay the bill please', opts: ['edfa3','wein','akhod','7ki'] },
  { sent: 'صار لي ____ ما شفتك', blank: '3omr', en: "it's been ages since I saw you", opts: ['3omr','3asha','sayf','jaw'] },
  { sent: 'ضحك من ____', blank: '2albo', en: 'laughed wholeheartedly', opts: ['2albo','baytol','beit','sho2lo'] },
  { sent: 'كسر ____ بحكي مضحك', blank: 'el jaw', en: 'broke the ice with a joke', opts: ['el jaw','el bayt','el jou3','el ma2lab'] },
  { sent: 'حطّ ____ تتذكر', blank: 'b belak', en: 'keep in mind so you remember', opts: ['b belak','3a baytak','men 7eit','3a tor2ak'] },
  { sent: 'راح ____ — انا بدفع', blank: '3a rasi', en: "it's on me — I pay", opts: ['3a rasi','la 3indak','men foa2','b dunyak'] },
  { sent: 'وقع ____ معها', blank: 'b 7ob', en: 'fell in love with her', opts: ['b 7ob','b nawm','b kteb','b mai'] },
  { sent: 'يخرب ____ يا ولد!', blank: 'baytak', en: 'damn you, kid (playful)', opts: ['baytak','beit el sa7eb','3indak','3aleik'] }
];

// ============ POLITENESS / ETIQUETTE ============
const POLITENESS_FORMS = [
  {
    sit: 'Greeting an elder / stranger',
    informal: 'kifak (m) / kifik (f)',
    polite: 'kif 7adertak (m) / 7adertik (f)',
    note: '7aderte/7adertik literally "your presence" — polite address for elders, customers, formal contexts.'
  },
  {
    sit: 'Asking someone to do something',
    informal: '7ot honi',
    polite: 'iza btirjouk / lao samaht 7ot honi',
    note: 'iza btirjouk = "if you don\'t mind"; lao samaht = "if you permit". Use w/ strangers + elders.'
  },
  {
    sit: 'Refusing politely',
    informal: 'la2 ma baddi',
    polite: 'mashkour bas mish hala2',
    note: 'mashkour = "thanked" — polite refusal w/ thanks. Avoid bare "la2" w/ guests/elders.'
  },
  {
    sit: 'Expressing gratitude',
    informal: 'merci / shukran',
    polite: 'tislam idak / 3eshet ideik',
    note: 'tislam idak = "may your hand be safe"; 3eshet ideik = "may your hands live" — warm/elaborate thanks.'
  },
  {
    sit: 'Receiving thanks',
    informal: 'ahla / wala yhemmak',
    polite: 'el 3afw / b sharaf',
    note: 'el 3afw = "the pardon"; b sharaf = "with honor" — formal "you\'re welcome".'
  },
  {
    sit: 'Visiting someone\'s home',
    informal: 'ahleen',
    polite: 'tikram / nawwartouna',
    note: 'tikram = "honor us"; nawwartouna = "you brightened us" — said BY host to guest on arrival.'
  },
  {
    sit: 'Leaving someone\'s home',
    informal: 'yalla bye',
    polite: 'estabaztou / khalleeli sehratak',
    note: 'estabaztou = "we have inconvenienced you"; khalleeli sehratak = "save your evening for me (next time)".'
  },
  {
    sit: 'Condolences',
    informal: 'ma3a el salame',
    polite: 'el ba2iye b 7ayetkon / allah yer7amo',
    note: 'el ba2iye b 7ayetkon = "may the rest be in your lives"; allah yer7amo = "God have mercy on him".'
  },
  {
    sit: 'Wishing health (sneeze)',
    informal: 'sa7a',
    polite: 'sa7tein wa 3afye',
    note: 'sa7tein = "two healths" w/ doubled wish. Reply: 3a 2albak.'
  },
  {
    sit: 'After haircut / shower',
    informal: 'ne3iman',
    polite: 'ne3iman / yen3am 3aleik',
    note: 'ne3iman = "blessing/comfort to you" — said when someone is freshly cleaned. Reply: allah yen3am 3aleik.'
  },
  {
    sit: 'Congratulating',
    informal: 'mabrouk',
    polite: 'allah ymabrek / mabrouk we 3o2bel ma yshallah',
    note: 'mabrouk we 3o2bel ma yshallah = "congrats and may the next [good thing] follow" — for engagements/etc.'
  },
  {
    sit: 'Apologizing',
    informal: 'sorry / asfe',
    polite: 'b sma7tak / 2asef ktir / metasef',
    note: 'b sma7tak = "by your permission" — polite apology before interrupting or burdening.'
  }
];

// Drill: given situation, pick polite form
const PE_DRILL = [
  { sit: 'You enter an older neighbor\'s home', polite: 'tikram / ahla', wrong: ['yalla bye','la2','la2 ma baddi','sayyer'], correct: 0 },
  { sit: 'You sneeze at a formal dinner', polite: 'sa7tein wa 3afye', wrong: ['sa7tein wa 3afye','yalla','b sharaf','khalas'], correct: 0 },
  { sit: 'A stranger asks you "kifak?"', polite: 'el 7amdellah / mni7 mashkour', wrong: ['mni7 mashkour','wala yhemmak','tikram','mabrouk'], correct: 0 },
  { sit: 'A guest thanks your hospitality', polite: 'b sharaf / el 3afw', wrong: ['el 3afw','la2','khalas','3eshet ideik'], correct: 0 },
  { sit: 'Refusing food politely', polite: 'mashkour bas mish hala2', wrong: ['mashkour bas mish hala2','la2 ma baddi','khalas','akhdet kfeye'], correct: 0 }
];
