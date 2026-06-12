// Run #26 — Real Estate & Housing, News & Politics, Childhood & School
// Prefixes: re-, np-, ch-

// ============ REAL ESTATE & HOUSING ============
const HOUSING_VOCAB = [
  { tr: 'beit',         ar: 'بيت',         en: 'house' },
  { tr: 'sha22a',       ar: 'شقة',         en: 'apartment' },
  { tr: 'villa',        ar: 'فيلا',        en: 'villa' },
  { tr: 'studio',       ar: 'ستوديو',      en: 'studio' },
  { tr: 'binayeh',      ar: 'بناية',       en: 'building' },
  { tr: 'TabaQa',       ar: 'طبقة',        en: 'floor / story' },
  { tr: 'arDi',         ar: 'أرضي',        en: 'ground floor' },
  { tr: 'ghorfeh',      ar: 'غرفة',        en: 'room' },
  { tr: 'oDet nom',     ar: 'أوضة نوم',    en: 'bedroom' },
  { tr: 'salon',        ar: 'صالون',       en: 'living room' },
  { tr: 'maTbakh',      ar: 'مطبخ',        en: 'kitchen' },
  { tr: 'Hammam',       ar: 'حمّام',       en: 'bathroom' },
  { tr: 'balcon',       ar: 'بلكون',       en: 'balcony' },
  { tr: 'sa-Hra',       ar: 'سحرة',        en: 'roof / terrace' },
  { tr: 'jniyneh',      ar: 'جنينة',       en: 'garden' },
  { tr: 'mawqaf',       ar: 'موقف',        en: 'parking spot' },
  { tr: 'mafrousheh',   ar: 'مفروشة',      en: 'furnished' },
  { tr: 'fadyeh',       ar: 'فاضية',       en: 'empty / vacant' },
  { tr: 'ejar',         ar: 'إيجار',       en: 'rent' },
  { tr: 'beid',         ar: 'بيع',         en: 'sale' },
  { tr: 'malek',        ar: 'مالك',        en: 'owner / landlord' },
  { tr: 'mosta2jer',    ar: 'مستأجر',      en: 'tenant' },
  { tr: 'samsar',       ar: 'سمسار',       en: 'real estate agent' },
  { tr: '3a2d ejar',    ar: 'عقد إيجار',   en: 'lease contract' },
  { tr: '3arboun',      ar: 'عربون',       en: 'deposit' },
  { tr: 'kahraba',      ar: 'كهربا',       en: 'electricity' },
  { tr: 'may',          ar: 'مي',          en: 'water' },
  { tr: 'internet',     ar: 'إنترنت',      en: 'internet' },
  { tr: '3atel',        ar: 'عاطل',        en: 'broken / out of order' },
  { tr: 'mn3atel',      ar: 'منعطّل',      en: 'breaks down' },
  { tr: 'sayyaneh',     ar: 'صيانة',       en: 'maintenance' },
  { tr: 'ajwad',        ar: 'أجواد',       en: 'better quality' },
  { tr: 'meter mraba3', ar: 'متر مربع',    en: 'square meter' }
];

const ROOM_TYPES = [
  { tr: 'oDet sofra',   ar:'أوضة سفرة',   en: 'dining room' },
  { tr: 'oDet ghassel', ar:'أوضة غسل',    en: 'laundry room' },
  { tr: 'oDet zyaftan',ar:'أوضة ضيوف',    en: 'guest room' },
  { tr: 'oDet awlad',   ar:'أوضة أولاد',  en: 'kids room' },
  { tr: 'maktab',       ar:'مكتب',         en: 'office / study' },
  { tr: 'mostawda3',    ar:'مستودع',       en: 'storage / closet' },
  { tr: 'medkhal',      ar:'مدخل',         en: 'entrance / foyer' },
  { tr: 'mama-rr',      ar:'ممرّ',         en: 'hallway' }
];

const HOUSING_PHRASES = [
  { tr: 'biddi sha22a la l-ejar',     ar:'بدي شقة للإيجار',           en:'I want an apartment to rent' },
  { tr: 'kam ghorfeh fiya?',           ar:'كم غرفة فيها؟',             en:'how many rooms does it have?' },
  { tr: 'addesh el ejar bi-sh-shaher?',ar:'قديش الإيجار بالشهر؟',      en:'how much is the rent per month?' },
  { tr: 'mafrousheh aw fadyeh?',       ar:'مفروشة أو فاضية؟',          en:'furnished or empty?' },
  { tr: 'fi balcon?',                   ar:'في بلكون؟',                  en:'is there a balcony?' },
  { tr: 'fi mawqaf sayyara?',          ar:'في موقف سيارة؟',             en:'is there a parking spot?' },
  { tr: 'kam meter mraba3?',           ar:'كم متر مربع؟',               en:'how many square meters?' },
  { tr: 'el sha22a 3al TabaQa el ___', ar:'الشقة عالطبقة الـ ___',      en:'the apartment is on the ___ floor' },
  { tr: 'fi as-an-soor?',              ar:'في أسانسور؟',                en:'is there an elevator?' },
  { tr: 'el kahraba kam sa3a bil yom?',ar:'الكهربا كم ساعة باليوم؟',   en:'how many hours of electricity per day? (Lebanon-specific!)' },
  { tr: 'fi mowled?',                   ar:'في مولد؟',                   en:'is there a generator? (Lebanon-specific!)' },
  { tr: 'biddi 2eshouf el sha22a',     ar:'بدي شوف الشقة',              en:'I want to see the apartment' },
  { tr: 'emta fini eji?',               ar:'إمتى فيني إجي؟',             en:'when can I come?' },
  { tr: 'el 3arboun kam?',              ar:'العربون كم؟',                en:'how much is the deposit?' },
  { tr: 'el 3a2d la kam sene?',         ar:'العقد لكم سنة؟',             en:'the contract is for how many years?' }
];

const HOUSING_DIALOG = [
  { sp:'Renter',  tr:'mar7aba, 3am dawwer 3a sha22a la l-ejar bi A-shra-fiyyeh', en:'Hi, I am looking for an apartment to rent in Achrafieh' },
  { sp:'Agent',   tr:'ahla. baddak addesh ghorfeh?', en:'Welcome. How many rooms do you want?' },
  { sp:'Renter',  tr:'tlett oWaD nom, salon, maTbakh, w Hammam', en:'Three bedrooms, living room, kitchen, and bathroom' },
  { sp:'Agent',   tr:'fini 2efrijak sha22a 3al-TabaQa l-tletyeh, 140 meter mraba3', en:'I can show you an apartment on the third floor, 140 square meters' },
  { sp:'Renter',  tr:'mafrousheh aw fadyeh?', en:'Furnished or empty?' },
  { sp:'Agent',   tr:'mafrousheh sho-may, w fi balcon kbir w mawqaf', en:'Lightly furnished, with a big balcony and parking' },
  { sp:'Renter',  tr:'addesh el ejar?', en:'How much is the rent?' },
  { sp:'Agent',   tr:'1500 dollar bi-sh-shaher, w 3arboun shahrein', en:'$1500 per month, and a two-month deposit' },
  { sp:'Renter',  tr:'el kahraba mta2amne?', en:'Is the electricity reliable?' },
  { sp:'Agent',   tr:'fi mowled bi-l-binayeh, kell el yom', en:'There\'s a generator in the building, all day' },
  { sp:'Renter',  tr:'tamem, fini eshouf-a bukra?', en:'Perfect, can I see it tomorrow?' },
  { sp:'Agent',   tr:'akeed, el sa3a 4 ba3ed eD-Dehr?', en:'Of course, 4 in the afternoon?' }
];

const RE_DRILL = [
  { en:'apartment',     opts:['beit','sha22a','villa','binayeh'], correct:1 },
  { en:'kitchen',       opts:['Hammam','salon','maTbakh','balcon'], correct:2 },
  { en:'bathroom',      opts:['maTbakh','Hammam','salon','ghorfeh'], correct:1 },
  { en:'rent (noun)',   opts:['beid','ejar','3arboun','samsar'], correct:1 },
  { en:'landlord',      opts:['mosta2jer','samsar','malek','mowled'], correct:2 },
  { en:'tenant',        opts:['malek','mosta2jer','samsar','jare'], correct:1 },
  { en:'real estate agent',opts:['samsar','malek','mostakhdem','mhandes'], correct:0 },
  { en:'deposit',       opts:['ejar','3arboun','beid','sayyaneh'], correct:1 },
  { en:'furnished',     opts:['fadyeh','mafrousheh','mn3atel','3atel'], correct:1 },
  { en:'how many rooms?', opts:['kam ghorfeh fiya?','addesh el ejar?','wein el sha22a?','emta fini eji?'], correct:0 },
  { en:'is there a generator? (LB)',opts:['fi balcon?','fi mowled?','fi mawqaf?','fi internet?'], correct:1 },
  { en:'lease contract',opts:['3a2d beid','3a2d ejar','wasl','faatoura'], correct:1 }
];

// ============ NEWS & POLITICS ============
const NEWS_VOCAB = [
  { tr: 'akhbar',        ar:'أخبار',        en:'news' },
  { tr: 'jare-de',       ar:'جريدة',        en:'newspaper' },
  { tr: 'ma2ale',        ar:'مقالة',        en:'article' },
  { tr: 'sa7ife',        ar:'صحيفة',        en:'newspaper / press' },
  { tr: 'mou-7ar-rer',   ar:'محرّر',        en:'editor' },
  { tr: 'sa7afe',        ar:'صحفي',         en:'journalist' },
  { tr: 'mu-zee3',       ar:'مذيع',         en:'news anchor' },
  { tr: 'kha-bar 3ajel', ar:'خبر عاجل',     en:'breaking news' },
  { tr: 'ta2reer',       ar:'تقرير',        en:'report' },
  { tr: 'mu-Habara',     ar:'مقابلة',       en:'interview' },
  { tr: 'taSree7',       ar:'تصريح',        en:'statement / press release' },
  { tr: 'ra2y',          ar:'رأي',          en:'opinion' },
  { tr: 'shahed 3yaan',  ar:'شاهد عيان',    en:'eyewitness' },
  { tr: 'maSdar',        ar:'مصدر',         en:'source' },
  { tr: 'qan-naat',      ar:'قنوات',        en:'channels (TV)' },
  { tr: 'eza3a',         ar:'إذاعة',        en:'radio broadcast' }
];

const POLITICS_VOCAB = [
  { tr: 'siyaseh',       ar:'سياسة',        en:'politics' },
  { tr: 'siyase',        ar:'سياسي',        en:'politician (m)' },
  { tr: 'Hu-koumeh',     ar:'حكومة',        en:'government' },
  { tr: 'wazeer',        ar:'وزير',         en:'minister' },
  { tr: 'ra2is wuzara',  ar:'رئيس وزراء',   en:'prime minister' },
  { tr: 'ra2is jumhouriyeh',ar:'رئيس جمهورية',en:'president of the republic' },
  { tr: 'naa-2ib',       ar:'نائب',         en:'parliament member / deputy' },
  { tr: 'majles',        ar:'مجلس',         en:'council' },
  { tr: 'majles el-nuwwab',ar:'مجلس النواب',en:'parliament' },
  { tr: 'in-ti-khabaat', ar:'انتخابات',     en:'elections' },
  { tr: 'TaaifeH',       ar:'طائفة',        en:'sect / confession' },
  { tr: 'Hizb',          ar:'حزب',          en:'political party' },
  { tr: 'mu3ar-aDa',     ar:'معارضة',       en:'opposition' },
  { tr: 'mu-Wa-laat',    ar:'مولاة',        en:'loyalist faction' },
  { tr: 'qaa-noun',      ar:'قانون',        en:'law' },
  { tr: 'dustour',       ar:'دستور',        en:'constitution' },
  { tr: 'ee2tiSaad',     ar:'اقتصاد',       en:'economy' },
  { tr: 'azme',          ar:'أزمة',         en:'crisis' },
  { tr: 'aSlaaH',        ar:'إصلاح',        en:'reform' },
  { tr: 'fasaad',        ar:'فساد',         en:'corruption' },
  { tr: 'mu-zaaharaat',  ar:'مظاهرات',      en:'protests / demonstrations' },
  { tr: 'thawra',        ar:'ثورة',         en:'revolution' },
  { tr: 'amn',           ar:'أمن',          en:'security' },
  { tr: 'jeish',         ar:'جيش',          en:'army' }
];

const HEADLINE_PATTERNS = [
  { ar:'الحكومة تقرر ___', tr:'el Hukoumeh ta-Qarrer ___', en:'The government decides ___', use:'Decision/policy headlines' },
  { ar:'إعلان حالة الطوارئ في ___', tr:'i3lan 7alat el Tawari2 fi ___', en:'State of emergency declared in ___', use:'Crisis headlines' },
  { ar:'لقاء بين ___ و___', tr:'liQa2 bein ___ w ___', en:'Meeting between ___ and ___', use:'Diplomacy/politics' },
  { ar:'نتائج الانتخابات', tr:'nataa-ej el inti-khabaat', en:'Election results', use:'Election coverage' },
  { ar:'ارتفاع سعر ___', tr:'ir-tifaa3 si3r ___', en:'Rise in the price of ___', use:'Economy headlines' },
  { ar:'استقالة وزير ___', tr:'is-tiQaalat wazeer ___', en:'Resignation of the minister of ___', use:'Political turnover' },
  { ar:'مظاهرات في ___', tr:'mu-zaaharaat fi ___', en:'Demonstrations in ___', use:'Civil unrest coverage' },
  { ar:'بيان من ___', tr:'bayaan min ___', en:'Statement from ___', use:'Official communications' }
];

const NP_DRILL = [
  { en:'news',                opts:['akhbar','azme','siyaseh','ra2y'], correct:0 },
  { en:'newspaper',           opts:['ma2ale','jare-de','eza3a','qan-naat'], correct:1 },
  { en:'breaking news',       opts:['ta2reer','mu-Habara','khabar 3ajel','taSree7'], correct:2 },
  { en:'government',          opts:['majles','Hu-koumeh','dustour','jeish'], correct:1 },
  { en:'minister',            opts:['naa-2ib','wazeer','ra2is','ee2tiSaad'], correct:1 },
  { en:'parliament',          opts:['majles el-nuwwab','majles wuzara','dustour','azme'], correct:0 },
  { en:'elections',           opts:['mu-zaaharaat','in-ti-khabaat','aSlaaH','thawra'], correct:1 },
  { en:'corruption',          opts:['amn','fasaad','aSlaaH','dustour'], correct:1 },
  { en:'opposition (political)',opts:['mu-Wa-laat','mu3ar-aDa','Hizb','TaaifeH'], correct:1 },
  { en:'army',                opts:['amn','shorTa','jeish','majles'], correct:2 },
  { en:'protests',            opts:['mu-zaaharaat','aSlaaH','thawra','azme'], correct:0 },
  { en:'sect / confession',   opts:['Hizb','TaaifeH','majles','dustour'], correct:1 }
];

// ============ CHILDHOOD & SCHOOL ============
const CHILDHOOD_VOCAB = [
  { tr: 'walad',        ar:'ولد',         en:'boy / child' },
  { tr: 'bint',         ar:'بنت',         en:'girl' },
  { tr: 'awlad',        ar:'أولاد',       en:'kids / children' },
  { tr: 'baby',         ar:'بيبي',        en:'baby' },
  { tr: 'shabb',        ar:'شب',          en:'young man / teenager' },
  { tr: 'sabe',         ar:'صبي',         en:'boy' },
  { tr: 'mou-3aT-Tal',  ar:'موعطل',       en:'spoiled / pampered' },
  { tr: 'shaqi',        ar:'شقي',         en:'naughty / mischievous' },
  { tr: 'hadi',         ar:'هادي',        en:'calm / quiet' },
  { tr: 'zekeh',        ar:'ذكي',         en:'smart' },
  { tr: 'baby si-tter',ar:'بيبي ستر',    en:'babysitter' },
  { tr: 'sayyaarit awlad',ar:'سيارة أولاد',en:'stroller' },
  { tr: 'la3beh',       ar:'لعبة',        en:'toy / game' },
  { tr: 'la3ebt',       ar:'لعبت',        en:'I played (past)' },
  { tr: 'rakkebt el bisikleh', ar:'ركبت البسكليت', en:'I rode the bike' },
  { tr: 'ftour el subeH',ar:'فطور الصبح', en:'breakfast (morning)' }
];

const KIDS_GAMES = [
  { tr: 'ghummeyDeh',  ar:'غميضة',       en:'hide and seek' },
  { tr: 'tin-iss',     ar:'تنيس',        en:'tag (you\'re it)' },
  { tr: 'eRb el menshafe',ar:'حرب المنشفة',en:'towel war (locker room game)' },
  { tr: 'l-7ajleh',    ar:'الحجلة',      en:'hopscotch' },
  { tr: '7abel',       ar:'حبل',         en:'jump rope' },
  { tr: 'kora',        ar:'كرة',         en:'ball' },
  { tr: 'pat pat',     ar:'بات بات',     en:'patty-cake' },
  { tr: 'ya 7ajj',     ar:'يا حجّ',      en:'red rover variant' },
  { tr: 'tou-3ah',     ar:'طوعة',        en:'marbles' },
  { tr: 'banadiq',     ar:'بنادق',       en:'water guns / toy guns' }
];

const SCHOOL_VOCAB = [
  { tr: 'madrase',     ar:'مدرسة',       en:'school' },
  { tr: 'jam3a',       ar:'جامعة',       en:'university' },
  { tr: 'Saff',        ar:'صف',          en:'class / classroom' },
  { tr: 'mou3al-lem',  ar:'معلّم',        en:'teacher (m)' },
  { tr: 'mou3al-leme', ar:'معلّمة',      en:'teacher (f)' },
  { tr: 'tilmiz',      ar:'تلميذ',       en:'student / pupil' },
  { tr: 'kteb',        ar:'كتاب',        en:'book' },
  { tr: 'daftar',      ar:'دفتر',        en:'notebook' },
  { tr: 'qalam',       ar:'قلم',         en:'pen' },
  { tr: 'misTara',     ar:'مسطرة',       en:'ruler' },
  { tr: 'ma7faza',     ar:'محفظة',       en:'school bag' },
  { tr: 'fa-rDi',      ar:'فرض',         en:'homework / assignment' },
  { tr: 'imti7an',     ar:'امتحان',      en:'exam' },
  { tr: '3alameh',     ar:'علامة',       en:'grade / mark' },
  { tr: 'najjaH',      ar:'نجح',         en:'passed (an exam)' },
  { tr: 'rasab',       ar:'رسب',         en:'failed (an exam)' },
  { tr: 'far-3ah',     ar:'فرعة',        en:'recess / break' },
  { tr: '3aTleh',      ar:'عطلة',        en:'vacation' },
  { tr: 'Sayfiyyeh',   ar:'صيفية',       en:'summer break' },
  { tr: 'darras',      ar:'درس',         en:'lesson / studied' }
];

const SCHOOL_SUBJECTS = [
  { tr: 'lougha 3arabe', ar:'لغة عربية', en:'Arabic language' },
  { tr: 'inglizi',       ar:'إنكليزي',  en:'English' },
  { tr: 'fa-ran-saweh',  ar:'فرنساوي', en:'French' },
  { tr: 'riyaDiyaat',    ar:'رياضيات', en:'mathematics' },
  { tr: '3oloum',        ar:'علوم',     en:'sciences' },
  { tr: 'ta-reekh',      ar:'تاريخ',    en:'history' },
  { tr: 'jough-rafia',   ar:'جغرافيا',  en:'geography' },
  { tr: 'fizia2',        ar:'فيزياء',   en:'physics' },
  { tr: 'kimia2',        ar:'كيمياء',   en:'chemistry' },
  { tr: 'a7yaa2',        ar:'أحياء',    en:'biology' },
  { tr: 'fan',           ar:'فن',       en:'art' },
  { tr: 'mousiqa',       ar:'موسيقى',   en:'music' },
  { tr: 'ri-yaa-Da',     ar:'رياضة',    en:'P.E. / sports' }
];

const PARENT_PHRASES = [
  { tr: 'ekmel akel-tak', ar:'إكمل أكلتك',     en:'finish your food' },
  { tr: 'rou7 nem',       ar:'روح نام',         en:'go to sleep' },
  { tr: 'la t3eyeT',      ar:'لا تعيط',         en:'don\'t shout' },
  { tr: 'sma3 kalami',    ar:'سمع كلامي',      en:'listen to what I say' },
  { tr: 'ma fi hek',      ar:'ما في هيك',      en:'we don\'t do that' },
  { tr: 'TallaQ akhouk',  ar:'طلّق أخوك',      en:'leave your brother alone' },
  { tr: 'l-7a2et hayda',  ar:'الحقيقة هيدا',   en:'the truth is this' },
  { tr: 'ya 3eini',       ar:'يا عيني',         en:'oh my dear (endearment to child)' },
  { tr: 'ya rou7i',       ar:'يا روحي',         en:'my soul (endearment)' },
  { tr: 'tu2borne',       ar:'تقبرني',          en:'may you bury me (deepest endearment)' },
  { tr: 'ya 7abibi',      ar:'يا حبيبي',        en:'my love (to child)' },
  { tr: 'shaTer / shaTra',ar:'شاطر / شاطرة',  en:'clever / good boy or girl' },
  { tr: 'rou7 idros',     ar:'روح إدرس',       en:'go study' },
  { tr: 'khallak hadi',   ar:'خلّيك هادي',     en:'stay calm' }
];

const CH_DRILL = [
  { en:'kids / children', opts:['walad','bint','awlad','baby'], correct:2 },
  { en:'school',          opts:['jam3a','madrase','Saff','kteb'], correct:1 },
  { en:'teacher (f)',     opts:['mou3al-lem','mou3al-leme','tilmiz','mou-zaffafe'], correct:1 },
  { en:'homework',        opts:['imti7an','3alameh','fa-rDi','3aTleh'], correct:2 },
  { en:'passed (exam)',   opts:['rasab','najjaH','darras','far-3ah'], correct:1 },
  { en:'mathematics',     opts:['fizia2','kimia2','riyaDiyaat','3oloum'], correct:2 },
  { en:'hide and seek',   opts:['ghummeyDeh','tin-iss','l-7ajleh','7abel'], correct:0 },
  { en:'hopscotch',       opts:['ghummeyDeh','tin-iss','l-7ajleh','kora'], correct:2 },
  { en:'go to sleep',     opts:['rou7 nem','rou7 idros','rou7 la3eb','rou7 akol'], correct:0 },
  { en:'good boy/girl',   opts:['shaqi','shaTer','3aT-Tal','hadi'], correct:1 },
  { en:'recess / break',  opts:['3aTleh','far-3ah','Sayfiyyeh','imti7an'], correct:1 },
  { en:'finish your food',opts:['rou7 nem','sma3 kalami','ekmel akel-tak','la t3eyeT'], correct:2 }
];
