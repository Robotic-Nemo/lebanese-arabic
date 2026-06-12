// Run #23 — Cooking & Recipes, Doctor Visit, Banking & Money
// Prefixes: ck-, dv-, bk-

// ============ COOKING & RECIPES ============
const COOKING_VERBS = [
  { tr: 'Tabakh',    ar: 'طبخ',    en: 'cook' },
  { tr: 'a2la',      ar: 'قلى',    en: 'fry' },
  { tr: 'shawa',     ar: 'شوى',    en: 'grill / roast' },
  { tr: 'sala2',     ar: 'سلق',    en: 'boil' },
  { tr: 'fara2',     ar: 'فرق',    en: 'chop / cut up' },
  { tr: 'kharaT',    ar: 'خرط',    en: 'slice / chop fine' },
  { tr: 'ba2sham',   ar: 'بقشم',   en: 'peel' },
  { tr: 'ma2lash',   ar: 'مقلش',   en: 'stir' },
  { tr: '7aT mele7', ar: 'حط ملح', en: 'add salt' },
  { tr: 'khaffaf',   ar: 'خفّف',   en: 'lower (heat)' },
  { tr: '3ajjan',    ar: 'عجّن',   en: 'knead' },
  { tr: 'khabaz',    ar: 'خبز',    en: 'bake' },
  { tr: 'rasham',    ar: 'رشّ',    en: 'sprinkle' },
  { tr: 'da2',       ar: 'دق',     en: 'pound / mash' },
  { tr: 'dhawwab',   ar: 'ذوّب',   en: 'melt / dissolve' },
  { tr: 'sa2a',      ar: 'سقى',    en: 'water / drizzle' }
];

const INGREDIENTS = [
  { tr: 'baTaTa',    ar: 'بطاطا',   en: 'potato' },
  { tr: 'baSal',     ar: 'بصل',     en: 'onion' },
  { tr: 'tom',       ar: 'توم',     en: 'garlic' },
  { tr: 'banadoura', ar: 'بندورة',  en: 'tomato' },
  { tr: 'khyar',     ar: 'خيار',    en: 'cucumber' },
  { tr: 'fejel',     ar: 'فجل',     en: 'radish' },
  { tr: 'na3na3',    ar: 'نعنع',    en: 'mint' },
  { tr: 'ba2dounis', ar: 'بقدونس',  en: 'parsley' },
  { tr: 'lemoun',    ar: 'ليمون',   en: 'lemon' },
  { tr: 'zet zaytoun',ar:'زيت زيتون',en: 'olive oil' },
  { tr: 'mele7',     ar: 'ملح',     en: 'salt' },
  { tr: 'felfel',    ar: 'فلفل',    en: 'pepper' },
  { tr: 'jebne',     ar: 'جبنة',    en: 'cheese' },
  { tr: 'la7me',     ar: 'لحمة',    en: 'meat' },
  { tr: 'djej',      ar: 'دجاج',    en: 'chicken' },
  { tr: 'samak',     ar: 'سمك',     en: 'fish' },
  { tr: 'roz',       ar: 'رز',      en: 'rice' },
  { tr: '7omoS',     ar: 'حمص',     en: 'chickpeas' },
  { tr: 'burghul',   ar: 'برغل',    en: 'bulgur' },
  { tr: 'Ta7ineh',   ar: 'طحينة',   en: 'tahini' }
];

const RECIPES = [
  {
    name: 'Tabbouleh',
    ar: 'تبولة',
    serves: 4,
    ingredients: ['ba2dounis (3 bunches)','na3na3 (1 bunch)','banadoura (3)','baSal (1 small)','burghul na3em (½ cup)','lemoun (3)','zet zaytoun','mele7','felfel'],
    steps: [
      'naqqe el ba2dounis w gh-sello mni7 = clean and wash parsley well',
      'kharreT el ba2dounis na3em na3em = chop parsley very finely',
      'farre2 el banadoura zghar zghar = dice tomatoes very small',
      'kharreT el baSal na3em = chop onion finely',
      'naqq3 el burghul bil ma3 daqi2tein = soak bulgur in water for 2 min',
      '7eT el kell bi sahn = put everything in a bowl',
      'sa2i 3aSiir lemoun w zet zaytoun = drizzle lemon juice and olive oil',
      '7eT mele7 w felfel = add salt and pepper, mix gently'
    ],
    tip: 'Parsley is the star — should be ~70% of the dish, NOT bulgur.'
  },
  {
    name: 'Hommos',
    ar: 'حمص',
    serves: 4,
    ingredients: ['7omoS msalla2 (2 cups)','Ta7ineh (½ cup)','tom (3 cloves)','lemoun (2)','mele7','zet zaytoun','kammoun (cumin) optional'],
    steps: [
      'sla2 el 7omoS la yshib = boil chickpeas until very soft (overnight soak first)',
      '2erfe3 el shour = remove the skins for smoothness (optional but worth it)',
      '7eTT el 7omoS bil khallaT = put chickpeas in food processor',
      'zid el Ta7ineh w el tom w el lemoun = add tahini, garlic, lemon',
      'kha-llaT 7atta yseer kremi = blend until creamy',
      '2eza yebes zid may bared = if too thick, add cold water',
      '7uTT bi sa7n w sa2i zet zaytoun fou2 = serve in bowl, drizzle olive oil on top',
      'zayyen bi 7omoS w ba2dounis = garnish with whole chickpeas + parsley'
    ],
    tip: 'Cold water (not hot) makes hommos fluffy. Tahini is non-negotiable.'
  },
  {
    name: 'Fattoush',
    ar: 'فتوش',
    serves: 4,
    ingredients: ['khass (1 head)','khyar (2)','banadoura (3)','fejel (4)','baSal akhDar (3 stalks)','ba2dounis','na3na3','khebez maqlee = fried bread','dibs remmen = pomegranate molasses','sumac','lemoun','zet zaytoun'],
    steps: [
      'khareT el khass w el khyar w el banadoura = chop lettuce, cucumber, tomato',
      'qaTTe3 el fejel sharha2 = slice radish thin',
      'kharreT el ba2dounis w el na3na3 = chop herbs',
      '7eTT el kell bi sahn kbir = combine in a big bowl',
      'fee2le2 el khebez yebes 7atta yeShra2 = fry day-old bread until crisp',
      'bi sahn ta7at: 7eT lemoun + zet + dibs remmen + sumac + mele7 = whisk dressing',
      'sa2i el dressing 3al salaTa = pour dressing over salad',
      'zid el khebez la2 a-khir wa2et = add the bread last (so it stays crispy)'
    ],
    tip: 'Sumac + dibs remmen (pomegranate molasses) is what makes fattoush, fattoush.'
  }
];

const CK_DRILL = [
  { en: 'to fry',          opts: ['Tabakh','a2la','shawa','sala2'], correct: 1 },
  { en: 'to grill / roast',opts: ['shawa','khabaz','3ajjan','rasham'], correct: 0 },
  { en: 'to peel',         opts: ['fara2','ba2sham','kharaT','sala2'], correct: 1 },
  { en: 'to knead (dough)',opts: ['da2','3ajjan','dhawwab','rasham'], correct: 1 },
  { en: 'olive oil',       opts: ['lemoun','Ta7ineh','zet zaytoun','dibs'], correct: 2 },
  { en: 'parsley',         opts: ['na3na3','ba2dounis','fejel','khass'], correct: 1 },
  { en: 'main herb in tabbouleh', opts: ['mint','parsley','cilantro','dill'], correct: 1 },
  { en: 'tahini in Arabic',opts: ['Ta7ineh','7omoS','dibs','sumac'], correct: 0 },
  { en: 'add salt',        opts: ['7eT mele7','zid lemoun','rasham felfel','khaffaf'], correct: 0 },
  { en: 'fattoush distinctive sour: pomegranate molasses', opts: ['Ta7ineh','dibs remmen','zet zaytoun','sumac'], correct: 1 }
];

// ============ DOCTOR VISIT ============
const DOCTOR_PHRASES = [
  { tr: 'biddi maw3ed ma3 el doctor', ar:'بدي موعد مع الدكتور', en:'I want an appointment with the doctor' },
  { tr: 'fi maw3ed el yom?',         ar:'في موعد اليوم؟',       en:'is there an appointment today?' },
  { tr: 'shu el meshkleh?',          ar:'شو المشكلة؟',          en:'what is the problem?' },
  { tr: '3am yewja3ne ___',          ar:'عم يوجعني ___',         en:'my ___ hurts' },
  { tr: '7asses 7ali ta3ban',        ar:'حسس حالي تعبان',        en:'I feel tired' },
  { tr: '3andi 7arara',              ar:'عندي حرارة',            en:'I have a fever' },
  { tr: '3andi su3al',               ar:'عندي سعال',             en:'I have a cough' },
  { tr: 'mish 3am 2eder nem',        ar:'مش عم قدر نام',        en:'I cannot sleep' },
  { tr: 'badde wasfa',               ar:'بدي وصفة',              en:'I need a prescription' },
  { tr: '3andak 7assasiyye?',        ar:'عندك حسّاسية؟',         en:'do you have any allergy?' },
  { tr: 'ekhdo marrtain bil yom',    ar:'خدو مرتين باليوم',     en:'take it twice a day' },
  { tr: 'ekhdo ba3ed el akel',       ar:'خدو بعد الأكل',        en:'take it after meals' },
  { tr: 'la2 t-shrab kahwe',         ar:'لا تشرب قهوة',         en:'do not drink coffee' },
  { tr: 'estre7 yomain',             ar:'استريح يومين',          en:'rest for two days' },
  { tr: '3andi mou3ad ba3ed esbou3', ar:'عندي موعد بعد أسبوع',   en:'I have an appointment in a week' },
  { tr: 'kam el 7seb?',              ar:'كم الحساب؟',            en:'how much is the bill?' },
  { tr: 'btet2abal vize?',           ar:'بتقبل فيزا؟',           en:'do you accept (credit) card?' },
  { tr: 'biddi ta7lil dam',          ar:'بدي تحليل دم',          en:'I want a blood test' },
  { tr: 'el natije btiTla3 emta?',   ar:'النتيجة بتطلع إيمتى؟',  en:'when will the result come out?' },
  { tr: 'salametak / salametik',     ar:'سلامتك / سلامتك',       en:'get well (m/f) — said TO sick person' },
  { tr: 'allah y3afik',              ar:'الله يعافيك',            en:'may God restore you (response)' }
];

const SYMPTOMS = [
  { tr: 'wja3 ras',     ar:'وجع راس',     en:'headache' },
  { tr: 'wja3 baTen',   ar:'وجع بطن',     en:'stomach ache' },
  { tr: 'wja3 zor',     ar:'وجع زور',     en:'sore throat' },
  { tr: '7arara',       ar:'حرارة',       en:'fever' },
  { tr: 'su3al',        ar:'سعال',        en:'cough' },
  { tr: 'rasheh',       ar:'رشح',         en:'cold / runny nose' },
  { tr: 'ghathayan',    ar:'غثيان',       en:'nausea' },
  { tr: 'ishal',        ar:'إسهال',       en:'diarrhea' },
  { tr: '7assasiyye',   ar:'حساسية',      en:'allergy' },
  { tr: 'dawkhe',       ar:'دوخة',        en:'dizziness' },
  { tr: 'wja3 Dahr',    ar:'وجع ضهر',     en:'back pain' },
  { tr: 'mish 3am tnam mni7', ar:'مش عم تنام منيح', en:'not sleeping well' }
];

const DOCTOR_DIALOG = [
  { sp: 'Patient', tr: 'mar7aba, biddi maw3ed ma3 el doctor', en: 'Hi, I want an appointment with the doctor' },
  { sp: 'Reception', tr: 'mar7aba. shu shoghlak?', en: 'Hello. What is your concern?' },
  { sp: 'Patient', tr: '3am yewja3ne ras-i w 3andi shway 7arara', en: 'My head hurts and I have a slight fever' },
  { sp: 'Reception', tr: 'fi maw3ed bukra el sa3a tnein. munaseb?', en: 'There is an appointment tomorrow at 2. Suitable?' },
  { sp: 'Patient', tr: 'eh tamem. shukran', en: 'Yes, perfect. Thanks' },
  { sp: 'Doctor', tr: 'mar7aba, shu el meshkleh?', en: 'Hello, what is the problem?' },
  { sp: 'Patient', tr: 'min embare7 3andi wja3 ras qawi w 7arara', en: 'Since yesterday I have a strong headache and fever' },
  { sp: 'Doctor', tr: '3andak 7assasiyye 3a shi dawa?', en: 'Do you have any allergy to medication?' },
  { sp: 'Patient', tr: 'la2, ma 3andi', en: 'No, I do not' },
  { sp: 'Doctor', tr: 'ra7 baktoblak wasfa. ekhdo marrtain bil yom ba3ed el akel', en: 'I will write you a prescription. Take it twice a day after meals' },
  { sp: 'Patient', tr: 'shukran ktir doctor', en: 'Thank you very much, doctor' },
  { sp: 'Doctor', tr: 'salametak. estre7 yomain', en: 'Get well. Rest for two days' }
];

const DV_DRILL = [
  { en: 'I want an appointment', opts: ['biddi maw3ed','3andi maw3ed','fi maw3ed','shu maw3ed'], correct: 0 },
  { en: 'I have a fever',        opts: ['3andi su3al','3andi 7arara','3andi rasheh','3andi wja3'], correct: 1 },
  { en: 'my head hurts',         opts: ['3am yewja3ne baTni','3am yewja3ne ras-i','3am yewja3ne Dahri','3am yewja3ne zor'], correct: 1 },
  { en: 'take it twice a day',   opts: ['ekhdo marra bil yom','ekhdo marrtain bil yom','ekhdo kell sa3a','ekhdo bel-leil'], correct: 1 },
  { en: 'I need a prescription', opts: ['badde dawa','badde wasfa','badde ta7lil','badde doctor'], correct: 1 },
  { en: 'do you have allergy?',  opts: ['3andak 7arara?','3andak 7assasiyye?','3andak wja3?','3andak su3al?'], correct: 1 },
  { en: 'after meals',           opts: ['abel el akel','ba3ed el akel','ma3 el akel','bidoun akel'], correct: 1 },
  { en: 'response to "salametak"', opts: ['shukran','allah y3afik','mar7aba','tab'], correct: 1 },
  { en: 'sore throat',           opts: ['wja3 ras','wja3 zor','wja3 baTen','wja3 Dahr'], correct: 1 },
  { en: 'do you accept card?',   opts: ['btet2abal vize?','3andi vize','kam el 7seb?','badde fakke'], correct: 0 }
];

// ============ BANKING & MONEY ============
const BANKING_VOCAB = [
  { tr: 'bank',        ar: 'بنك',        en: 'bank' },
  { tr: '7seb',        ar: 'حساب',       en: 'account' },
  { tr: '7seb jare',   ar: 'حساب جاري',  en: 'checking account' },
  { tr: '7seb tawfir', ar: 'حساب توفير', en: 'savings account' },
  { tr: 'card',        ar: 'كرت',        en: 'card' },
  { tr: 'vize',        ar: 'فيزا',       en: 'visa / credit card' },
  { tr: 'sarraf eli',  ar: 'صرّاف آلي',  en: 'ATM' },
  { tr: 'sa7eb',       ar: 'سحب',        en: 'withdrawal' },
  { tr: 'iida3',       ar: 'إيداع',      en: 'deposit' },
  { tr: '7awale',      ar: 'حوالة',      en: 'transfer / wire' },
  { tr: 'masari',      ar: 'مصاري',      en: 'money' },
  { tr: 'fakke',       ar: 'فكّة',       en: 'change (small bills/coins)' },
  { tr: 'forSa',       ar: 'فرصة',       en: 'rate (exchange)' },
  { tr: 'Sarrf',       ar: 'صرف',        en: 'exchange' },
  { tr: 'qarD',        ar: 'قرض',        en: 'loan' },
  { tr: 'fayde',       ar: 'فايدة',      en: 'interest' },
  { tr: 'rasid',       ar: 'رصيد',       en: 'balance' },
  { tr: 'check',       ar: 'شيك',        en: 'check' },
  { tr: 'tawqee3',     ar: 'توقيع',      en: 'signature' },
  { tr: 'huwiye',      ar: 'هوية',       en: 'ID card' },
  { tr: 'kashf 7seb',  ar: 'كشف حساب',   en: 'account statement' },
  { tr: 'rasm',        ar: 'رسم',        en: 'fee' },
  { tr: 'dollar',      ar: 'دولار',      en: 'dollar' },
  { tr: 'lira lebnaniye',ar:'ليرة لبنانية',en: 'Lebanese lira' },
  { tr: 'cash',        ar: 'كاش',        en: 'cash' },
  { tr: 'fawatir',     ar: 'فواتير',     en: 'bills' }
];

const BANKING_PHRASES = [
  { tr: 'biddi efta7 7seb',           ar:'بدي إفتح حساب',         en:'I want to open an account' },
  { tr: 'kam el rasid?',               ar:'كم الرصيد؟',            en:'what is the balance?' },
  { tr: 'biddi es7ab masari',          ar:'بدي إسحب مصاري',        en:'I want to withdraw money' },
  { tr: 'biddi awwde3 hal mablagh',    ar:'بدي أودع هالمبلغ',      en:'I want to deposit this amount' },
  { tr: '3andi 7awale jeye',           ar:'عندي حوالة جاية',       en:'I have an incoming wire' },
  { tr: 'shu el forSa el yom?',        ar:'شو الفرصة اليوم؟',      en:'what is the rate today?' },
  { tr: 'biddi Sarrf dollar la lira',  ar:'بدي صرّف دولار لليرة',  en:'I want to exchange dollars to lira' },
  { tr: '3andi check biddi 2eqbaSo',   ar:'عندي شيك بدي إقبضو',    en:'I have a check I want to cash' },
  { tr: 'biddi qarD shakhSe',          ar:'بدي قرض شخصي',          en:'I want a personal loan' },
  { tr: 'shu el fayde?',               ar:'شو الفايدة؟',           en:'what is the interest rate?' },
  { tr: '3andak fakke?',               ar:'عندك فكّة؟',            en:'do you have change?' },
  { tr: 'el kart ma 3am yeshtoghol',   ar:'الكرت ما عم يشتغل',     en:'the card is not working' },
  { tr: 'biddi kashf 7seb',            ar:'بدي كشف حساب',          en:'I want an account statement' },
  { tr: 'nseet el ra2em el sirre',     ar:'نسيت الرقم السري',      en:'I forgot the PIN' }
];

const BK_DIALOG = [
  { sp: 'Customer', tr: 'mar7aba, biddi efta7 7seb jare', en: 'Hi, I want to open a checking account' },
  { sp: 'Teller',   tr: 'ahla. badna huwiye w eshbat sakan', en: 'Welcome. We need ID and proof of residence' },
  { sp: 'Customer', tr: 'tfaDDal hayde el huwiye', en: 'Here is the ID' },
  { sp: 'Teller',   tr: 'mni7. baddak vize ma3 el 7seb?', en: 'Good. Do you want a card with the account?' },
  { sp: 'Customer', tr: 'eh, w 3am bfakker bi qarD kamen', en: 'Yes, and I am also thinking about a loan' },
  { sp: 'Teller',   tr: 'el qarD mou3aDal 3 fil mieh fayde', en: 'The loan rate is 3% interest' },
  { sp: 'Customer', tr: 'shu el wara2 el lazem la el qarD?', en: 'What papers do I need for the loan?' },
  { sp: 'Teller',   tr: 'kashf ratib, huwiye, w eshbat 3enwen', en: 'Salary statement, ID, and proof of address' },
  { sp: 'Customer', tr: 'tamem, ra7 jib-on bukra', en: 'Perfect, I will bring them tomorrow' },
  { sp: 'Teller',   tr: 'tfaDDal wq3i hon w hon = please sign here and here', en: 'Please sign here and here' },
  { sp: 'Customer', tr: 'shukran ktir', en: 'Thank you very much' },
  { sp: 'Teller',   tr: 'ahla w sahla, mou3ad sa3id', en: 'Welcome (any time), happy to help' }
];

const BK_DRILL = [
  { en: 'bank account',     opts: ['7seb','bank','rasid','vize'], correct: 0 },
  { en: 'ATM',              opts: ['vize','sarraf eli','check','rasm'], correct: 1 },
  { en: 'withdraw',         opts: ['iida3','sa7eb','7awale','Sarrf'], correct: 1 },
  { en: 'deposit',          opts: ['iida3','sa7eb','qarD','fayde'], correct: 0 },
  { en: 'I want to open an account', opts: ['biddi es7ab','biddi efta7 7seb','biddi check','biddi qarD'], correct: 1 },
  { en: 'what is the rate today?',   opts: ['kam el rasid?','shu el forSa el yom?','3andak fakke?','kam fayde?'], correct: 1 },
  { en: 'change (coins/small bills)',opts: ['fakke','rasid','fayde','rasm'], correct: 0 },
  { en: 'loan',             opts: ['7awale','qarD','iida3','rasm'], correct: 1 },
  { en: 'interest',         opts: ['fayde','forSa','rasid','rasm'], correct: 0 },
  { en: 'I forgot the PIN', opts: ['nseet huwiye','nseet el ra2em el sirre','nseet el card','nseet 7seb'], correct: 1 },
  { en: 'cash',             opts: ['check','vize','cash','7awale'], correct: 2 },
  { en: 'wire transfer',    opts: ['sa7eb','7awale','iida3','Sarrf'], correct: 1 }
];
