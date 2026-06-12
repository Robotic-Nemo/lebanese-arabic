// ============================================================
// RUN #9 — Demonstratives, Idafa, Restaurant/Food
// ============================================================

// ---- DEMONSTRATIVES (this/that with gender + plural + distance) ----
const DEMONSTRATIVES = [
  { ar:'هيدا', tr:'hayda',  en:'this (m)',     g:'m',  num:'sg', dist:'near' },
  { ar:'هيدي', tr:'haydé',  en:'this (f)',     g:'f',  num:'sg', dist:'near' },
  { ar:'هودي', tr:'hawdé',  en:'these',        g:'pl', num:'pl', dist:'near' },
  { ar:'هيدول', tr:'haydol', en:'these (alt)',  g:'pl', num:'pl', dist:'near' },
  { ar:'هداك', tr:'hadak',  en:'that (m)',     g:'m',  num:'sg', dist:'far' },
  { ar:'هديك', tr:'hadik',  en:'that (f)',     g:'f',  num:'sg', dist:'far' },
  { ar:'هدولاك', tr:'hadolak', en:'those',     g:'pl', num:'pl', dist:'far' },
];

// Place words and adverbs of location
const SPATIAL_WORDS = [
  { ar:'هون', tr:'hon',     en:'here',         cat:'place' },
  { ar:'هونيك', tr:'honik', en:'there',        cat:'place' },
  { ar:'لهون', tr:'la-hon', en:'over here',    cat:'place' },
  { ar:'لهونيك', tr:'la-honik', en:'over there', cat:'place' },
  { ar:'فوق', tr:'fo2',     en:'up / above',   cat:'place' },
  { ar:'تحت', tr:'ta7t',    en:'down / below', cat:'place' },
  { ar:'قدّام', tr:'2eddem', en:'in front of', cat:'prep' },
  { ar:'ورا', tr:'wara',    en:'behind',       cat:'prep' },
  { ar:'جنب', tr:'janb',    en:'next to',      cat:'prep' },
  { ar:'بين', tr:'beyn',    en:'between',      cat:'prep' },
  { ar:'حدّ', tr:'7add',    en:'beside',       cat:'prep' },
  { ar:'فوق', tr:'fo2',     en:'on top of',    cat:'prep' },
  { ar:'تحت', tr:'ta7t',    en:'under',        cat:'prep' },
  { ar:'بـ', tr:'b-',       en:'in / at',      cat:'prep' },
  { ar:'عـ', tr:'3a-',      en:'on / to',      cat:'prep' },
  { ar:'مع', tr:'ma3',      en:'with',         cat:'prep' },
  { ar:'بدون', tr:'bdun',   en:'without',      cat:'prep' },
  { ar:'يمين', tr:'yamin',  en:'right',        cat:'dir' },
  { ar:'شمال', tr:'shmel',  en:'left / north', cat:'dir' },
  { ar:'دغري', tr:'doghré', en:'straight',     cat:'dir' },
  { ar:'ضدّ', tr:'dedd',    en:'opposite',     cat:'prep' },
];

// Sample noun + demonstrative phrases for chart
const DEMO_PHRASES = [
  { d:'hayda',  noun:'el-walad',   ar:'هيدا الولد',   en:'this boy' },
  { d:'haydé',  noun:'el-bint',    ar:'هيدي البنت',   en:'this girl' },
  { d:'hawdé',  noun:'el-wled',    ar:'هودي الولاد',  en:'these kids' },
  { d:'hayda',  noun:'el-kteb',    ar:'هيدا الكتاب',  en:'this book' },
  { d:'haydé',  noun:'es-sayyaara',ar:'هيدي السيّارة', en:'this car' },
  { d:'hadak',  noun:'el-zalame',  ar:'هداك الزلمة',  en:'that man' },
  { d:'hadik',  noun:'el-mara',    ar:'هديك المرا',   en:'that woman' },
  { d:'hadolak',noun:'en-nes',     ar:'هدولاك الناس', en:'those people' },
  { d:'hayda',  noun:'el-shi',     ar:'هيدا الشي',    en:'this thing' },
  { d:'haydé',  noun:'el-2isse',   ar:'هيدي القصّة',   en:'this story' },
  { d:'hadak',  noun:'el-yawm',    ar:'هداك اليوم',   en:'that day' },
  { d:'hadik',  noun:'es-sene',    ar:'هديك السنة',   en:'that year' },
];

// ---- IDAFA (possessive construction X of Y) ----
// Pattern: possessed-noun (no "el-") + possessor-noun (with "el-")
// Example: kteb + el-walad → "kteb el-walad" = the boy's book
const IDAFA_RULES = [
  { rule:'possessed has NO "el-" prefix',     example:'kteb (NOT el-kteb)' },
  { rule:'possessor takes "el-" if definite',  example:'el-walad → kteb el-walad' },
  { rule:'possessor stays bare if generic',    example:'kteb walad = "a boy\'s book"' },
  { rule:'feminine "ة" → "et" before el-',     example:'sayyaara → sayyaaret el-mudir' },
  { rule:'chains can extend',                  example:'kteb walad el-doctor = "the doctor\'s boy\'s book"' },
];

const IDAFA_EXAMPLES = [
  { possessed:{ar:'كتاب', tr:'kteb', en:'book'},          possessor:{ar:'الولد', tr:'el-walad', en:'the boy'}, full:{ar:'كتاب الولد', tr:'kteb el-walad', en:"the boy's book"}, fem:false },
  { possessed:{ar:'بيت', tr:'beit', en:'house'},          possessor:{ar:'العيلة', tr:'el-3ayle', en:'the family'}, full:{ar:'بيت العيلة', tr:'beit el-3ayle', en:"the family's house"}, fem:false },
  { possessed:{ar:'سيّارة', tr:'sayyaara', en:'car'},      possessor:{ar:'المدير', tr:'el-mudir', en:'the manager'}, full:{ar:'سيّارة المدير', tr:'sayyaaret el-mudir', en:"the manager's car"}, fem:true },
  { possessed:{ar:'باب', tr:'bab', en:'door'},            possessor:{ar:'الغرفة', tr:'el-ghorfe', en:'the room'}, full:{ar:'باب الغرفة', tr:'bab el-ghorfe', en:"the room's door"}, fem:false },
  { possessed:{ar:'إسم', tr:'esem', en:'name'},           possessor:{ar:'البنت', tr:'el-bint', en:'the girl'}, full:{ar:'إسم البنت', tr:'esem el-bint', en:"the girl's name"}, fem:false },
  { possessed:{ar:'صاحب', tr:'sa7eb', en:'owner'},        possessor:{ar:'المحلّ', tr:'el-ma7all', en:'the shop'}, full:{ar:'صاحب المحلّ', tr:'sa7eb el-ma7all', en:"the shop's owner"}, fem:false },
  { possessed:{ar:'مفتاح', tr:'mefta7', en:'key'},        possessor:{ar:'البيت', tr:'el-beit', en:'the house'}, full:{ar:'مفتاح البيت', tr:'mefta7 el-beit', en:"the house key"}, fem:false },
  { possessed:{ar:'لون', tr:'lawn', en:'color'},          possessor:{ar:'القميص', tr:'el-2amis', en:'the shirt'}, full:{ar:'لون القميص', tr:'lawn el-2amis', en:"the shirt's color"}, fem:false },
  { possessed:{ar:'عمّ', tr:'3amm', en:'uncle'},          possessor:{ar:'محمد', tr:'Mohamad', en:'Mohamad'}, full:{ar:'عمّ محمد', tr:'3amm Mohamad', en:"Mohamad's uncle"}, fem:false },
  { possessed:{ar:'أمّ', tr:'emm', en:'mother'},          possessor:{ar:'الولد', tr:'el-walad', en:'the boy'}, full:{ar:'أمّ الولد', tr:'emm el-walad', en:"the boy's mother"}, fem:false },
  { possessed:{ar:'مدرسة', tr:'madrase', en:'school'},    possessor:{ar:'الحيّ', tr:'el-7ayy', en:'the neighborhood'}, full:{ar:'مدرسة الحيّ', tr:'madraset el-7ayy', en:"the neighborhood school"}, fem:true },
  { possessed:{ar:'وقت', tr:'wa2t', en:'time'},           possessor:{ar:'الأكل', tr:'el-akel', en:'the food'}, full:{ar:'وقت الأكل', tr:'wa2t el-akel', en:"food time"}, fem:false },
  { possessed:{ar:'زجاج', tr:'zjej', en:'glass'},         possessor:{ar:'الشبّاك', tr:'esh-shebbek', en:'the window'}, full:{ar:'زجاج الشبّاك', tr:'zjej esh-shebbek', en:"the window's glass"}, fem:false },
  { possessed:{ar:'ساعة', tr:'sa3a', en:'watch / hour'},  possessor:{ar:'الإمتحان', tr:'el-imti7an', en:'the exam'}, full:{ar:'ساعة الإمتحان', tr:'sa3et el-imti7an', en:"the exam's hour"}, fem:true },
  { possessed:{ar:'صديق', tr:'sadi2', en:'friend'},       possessor:{ar:'إبني', tr:'ebné', en:'my son'}, full:{ar:'صديق إبني', tr:'sadi2 ebné', en:"my son's friend"}, fem:false },
  { possessed:{ar:'بنت', tr:'bint', en:'daughter'},       possessor:{ar:'الجيران', tr:'el-jiran', en:'the neighbors'}, full:{ar:'بنت الجيران', tr:'bint el-jiran', en:"the neighbors' daughter"}, fem:false },
  { possessed:{ar:'لبس', tr:'libs', en:'clothes'},        possessor:{ar:'الشتي', tr:'esh-shete', en:'the winter'}, full:{ar:'لبس الشتي', tr:'libs esh-shete', en:"winter clothes"}, fem:false },
  { possessed:{ar:'ريحة', tr:'ri7a', en:'smell'},         possessor:{ar:'القهوة', tr:'el-2ahwe', en:'the coffee'}, full:{ar:'ريحة القهوة', tr:'ri7et el-2ahwe', en:"the coffee's smell"}, fem:true },
  { possessed:{ar:'طعم', tr:'ta3m', en:'taste'},          possessor:{ar:'الكيكة', tr:'el-kayke', en:'the cake'}, full:{ar:'طعم الكيكة', tr:'ta3m el-kayke', en:"the cake's taste"}, fem:false },
  { possessed:{ar:'يوم', tr:'yawm', en:'day'},            possessor:{ar:'الجمعة', tr:'el-jem3a', en:'Friday'}, full:{ar:'يوم الجمعة', tr:'yawm el-jem3a', en:'Friday'}, fem:false },
];

// ---- RESTAURANT & FOOD ----
const FOOD_ITEMS = [
  // Main dishes
  { ar:'تبّولة',     tr:'tabbule',     en:'tabbouleh',                 cat:'mezze' },
  { ar:'حمّص',       tr:'7ommos',      en:'hummus',                    cat:'mezze' },
  { ar:'متبّل',       tr:'mtabbal',     en:'baba ghanoush',             cat:'mezze' },
  { ar:'فتّوش',       tr:'fattush',     en:'fattoush salad',            cat:'mezze' },
  { ar:'لبنة',       tr:'labne',       en:'strained yogurt',           cat:'mezze' },
  { ar:'ورق عنب',   tr:'wara2 3enab', en:'stuffed grape leaves',      cat:'mezze' },
  { ar:'كبّة',        tr:'kebbe',       en:'kibbeh (meat & bulgur)',    cat:'mezze' },
  { ar:'فلافل',     tr:'falafel',     en:'falafel',                   cat:'mezze' },
  { ar:'منقوشة',    tr:'man2ouché',   en:'manakish (flatbread)',      cat:'main' },
  { ar:'شاورما',    tr:'shawarma',    en:'shawarma',                  cat:'main' },
  { ar:'مشاوي',     tr:'mashawi',     en:'grilled meat platter',      cat:'main' },
  { ar:'شيش طاووق',  tr:'shish tawu2', en:'chicken kebab',             cat:'main' },
  { ar:'كفتة',      tr:'kafta',       en:'minced meat skewer',        cat:'main' },
  { ar:'مجدّرة',    tr:'mjadara',     en:'lentils & rice',            cat:'main' },
  { ar:'مقلوبة',    tr:'ma2lube',     en:'upside-down rice dish',     cat:'main' },
  { ar:'ملوخيّة',    tr:'mlukhiyye',   en:'molokhia stew',             cat:'main' },
  { ar:'سمك',       tr:'samak',       en:'fish',                      cat:'main' },
  { ar:'لحمة',      tr:'la7me',       en:'meat',                      cat:'main' },
  { ar:'دجاج',      tr:'djej',        en:'chicken',                   cat:'main' },
  { ar:'رز',        tr:'rezz',        en:'rice',                      cat:'main' },
  { ar:'خبز',       tr:'khebez',      en:'bread',                     cat:'main' },
  // Drinks
  { ar:'مي',        tr:'mai',         en:'water',                     cat:'drink' },
  { ar:'قهوة',      tr:'2ahwe',       en:'coffee',                    cat:'drink' },
  { ar:'شاي',       tr:'shay',        en:'tea',                       cat:'drink' },
  { ar:'عصير',      tr:'3asir',       en:'juice',                     cat:'drink' },
  { ar:'لمونادا',   tr:'limonada',    en:'lemonade',                  cat:'drink' },
  { ar:'بيرة',      tr:'birra',       en:'beer',                      cat:'drink' },
  { ar:'نبيذ',      tr:'nbiid',        en:'wine',                      cat:'drink' },
  { ar:'عرق',       tr:'3ara2',       en:'arak (anise spirit)',       cat:'drink' },
  // Sweets
  { ar:'بقلاوة',    tr:'ba2lawa',     en:'baklava',                   cat:'sweet' },
  { ar:'كنافة',     tr:'knefe',       en:'kunafa (cheese pastry)',    cat:'sweet' },
  { ar:'مهلّبيّة',    tr:'mhallabiyye', en:'milk pudding',              cat:'sweet' },
  { ar:'بوظة',      tr:'buza',        en:'ice cream (Lebanese style)',cat:'sweet' },
  // Tastes / qualities
  { ar:'حلو',       tr:'7elo',        en:'sweet',                     cat:'taste' },
  { ar:'حامض',      tr:'7amed',       en:'sour',                      cat:'taste' },
  { ar:'مالح',      tr:'mali7',       en:'salty',                     cat:'taste' },
  { ar:'حرّ',        tr:'7arr',        en:'spicy / hot',               cat:'taste' },
  { ar:'سخن',       tr:'sokhn',       en:'hot (temp)',                cat:'taste' },
  { ar:'بارد',      tr:'bared',       en:'cold',                      cat:'taste' },
  { ar:'طيّب',       tr:'tayyeb',      en:'tasty',                     cat:'taste' },
];

// Restaurant phrases / dialog scenarios
const RESTAURANT_PHRASES = [
  { ar:'طاولة لتنين من فضلك',         tr:'tawle la-tnen min fadlak',         en:'A table for two, please',          step:'arrive' },
  { ar:'عندكون مكان فاضي؟',          tr:'3andkon makan fade?',              en:'Do you have a free spot?',         step:'arrive' },
  { ar:'بدّي شوف المنيو',              tr:'beddi shouf el-menyu',             en:'I want to see the menu',           step:'arrive' },
  { ar:'شو بتنصحني؟',                tr:'shu btensa7ne?',                   en:'What do you recommend?',           step:'order' },
  { ar:'شو الطبق اليوم؟',            tr:'shu et-taba2 el-yawm?',            en:"What's today's dish?",             step:'order' },
  { ar:'بدّي طلب…',                    tr:'beddi etlob…',                     en:'I want to order…',                 step:'order' },
  { ar:'بلا بصل من فضلك',             tr:'bala basal min fadlak',            en:'Without onions, please',           step:'order' },
  { ar:'مش حرّ كتير',                  tr:'mish 7arr ktir',                   en:'Not too spicy',                    step:'order' },
  { ar:'كمان واحد',                  tr:'kamen wa7ad',                      en:'Another one',                      step:'order' },
  { ar:'بدّي مي بلا غاز',              tr:'beddi mai bala ghaz',              en:'I want still water',               step:'order' },
  { ar:'ما في لحمة؟',                tr:'ma fi la7me?',                     en:'No meat?',                         step:'order' },
  { ar:'أنا نباتي',                  tr:'ana nabati',                       en:"I'm vegetarian",                   step:'order' },
  { ar:'هيدا كتير زاكي',              tr:'hayda ktir zaki',                  en:'This is very tasty',               step:'meal' },
  { ar:'الأكل بارد',                 tr:'el-akel bared',                    en:'The food is cold',                 step:'meal' },
  { ar:'ممكن شويّة خبز؟',             tr:'momken shwayyet khebez?',          en:'Could I have some bread?',         step:'meal' },
  { ar:'الحساب من فضلك',              tr:'el-7isab min fadlak',              en:'The bill, please',                 step:'pay' },
  { ar:'بدفع كاش',                   tr:'badfa3 cash',                      en:"I'll pay cash",                    step:'pay' },
  { ar:'بتقبلوا فيزا؟',               tr:'bte2balu visa?',                   en:'Do you accept Visa?',              step:'pay' },
  { ar:'البقشيش معكم',                tr:'el-ba2shish ma3kon',               en:'Keep the change as tip',           step:'pay' },
  { ar:'صحتين',                      tr:'sa7tein',                          en:'Bon appétit / "double health"',    step:'meal' },
  { ar:'دايمة إنشالله',               tr:'dayme inshallah',                  en:'(reply to sa7tein) "Always, God willing"', step:'meal' },
  { ar:'تعيشوا وتاكلوا',               tr:'t3ishu w-taakulu',                 en:'May you live & eat well',          step:'meal' },
];

// Mini ordering scenarios (multi-turn)
const RESTAURANT_DIALOGS = [
  {
    title:'Arriving & seating',
    turns:[
      { who:'you',    ar:'مرحبا، طاولة لتنين',      tr:'mar7aba, tawle la-tnen',         en:'Hello, a table for two' },
      { who:'waiter', ar:'أهلا فيكم، تفضّلوا',        tr:'ahla fikon, tfaddalu',           en:"Welcome, please come in" },
      { who:'waiter', ar:'هون منيح؟',                tr:'hon mni7?',                      en:'Is here good?' },
      { who:'you',    ar:'منيح، شكرا',                tr:'mni7, shukran',                  en:'Good, thanks' },
    ]
  },
  {
    title:'Ordering food',
    turns:[
      { who:'waiter', ar:'شو بتحبّوا تطلبوا؟',          tr:'shu bet7ebbu tetlbu?',           en:'What would you like to order?' },
      { who:'you',    ar:'منبلّش بتبّولة وحمّص',           tr:'mnballesh b-tabbule w 7ommos',   en:"We'll start with tabbouleh and hummus" },
      { who:'you',    ar:'وبعدين شيش طاووق ومشاوي',     tr:'w-ba3den shish tawu2 w mashawi', en:'Then chicken kebab and grilled meats' },
      { who:'waiter', ar:'شو بتشربوا؟',                 tr:'shu betshrabu?',                 en:'What will you drink?' },
      { who:'you',    ar:'لمونادا وعرق',                tr:'limonada w 3ara2',               en:'Lemonade and arak' },
      { who:'waiter', ar:'تكرم عينكم',                  tr:'tekram 3aynkon',                 en:'(polite "with pleasure")' },
    ]
  },
  {
    title:'Paying the bill',
    turns:[
      { who:'you',    ar:'الحساب من فضلك',              tr:'el-7isab min fadlak',            en:'The bill, please' },
      { who:'waiter', ar:'تفضّل، الكلّ مية ألف',           tr:'tfaddal, el-kell miyye alf',     en:'Here you go, total is 100,000' },
      { who:'you',    ar:'بقبلوا فيزا؟',                 tr:'bte2balu visa?',                 en:'Do you take Visa?' },
      { who:'waiter', ar:'أكيد',                        tr:'akid',                           en:'Sure' },
      { who:'you',    ar:'البقشيش معكون',                tr:'el-ba2shish ma3kon',             en:'Keep the change as tip' },
      { who:'waiter', ar:'الله يبارك فيك',                tr:'Allah ybarek fik',               en:'God bless you' },
    ]
  },
];
