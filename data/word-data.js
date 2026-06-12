const WORD_EXAMPLES = {
  'مرحبا': [
    { ar:'مرحبا، كيفك اليوم؟', tr:'marhaba, kifak el-yom?', en:'Hello, how are you today?' },
    { ar:'مرحبا مرحبتين!', tr:'marhaba marhabtayn!', en:'Hello hello! (warm double greeting)' },
  ],
  'شكراً': [
    { ar:'شكراً كتير عالمساعدة', tr:'shukran ktir 3al-musa3ade', en:'Thank you very much for the help' },
    { ar:'شكراً، يسلمو إيدك', tr:'shukran, yislamu idayk', en:'Thank you, bless your hands' },
  ],
  'بدّي': [
    { ar:'بدّي قهوة وكعك', tr:'biddi ahwe w-ka3k', en:"I want coffee and cookies" },
    { ar:'ما بدّي روح هلق', tr:"ma biddi ruh halla2", en:"I don't want to go now" },
  ],
  'منيح': [
    { ar:'كيفك؟ منيح الحمد لله', tr:"kifak? mneh, l-hamdilla", en:"How are you? Good, praise God" },
    { ar:'الجو منيح هالنهار', tr:"el-jaww mneh hal-nahar", en:'The weather is nice today' },
  ],
  'يلا': [
    { ar:'يلا نروح ناكل', tr:"yalla nruh nakel", en:"Let's go eat" },
    { ar:'يلا بدّنا نمشي', tr:"yalla biddna nmshi", en:"Come on, we need to go" },
  ],
  'إن شاء الله': [
    { ar:'رح نتلاقى بكرا إن شاء الله', tr:"ra7 netlaa2a bukra inshaallah", en:"We'll meet tomorrow, God willing" },
    { ar:'إن شاء الله الأمور تتحسّن', tr:"inshaallah el-umur tit7assin", en:'God willing, things will get better' },
  ],
  'حبيبي': [
    { ar:'حبيبي، كيفك؟', tr:"7abibi, kifak?", en:'My dear, how are you?' },
    { ar:'اسمع حبيبي، هيدا مش صح', tr:"esma3 7abibi, hayda mish sa77", en:'Listen dear, this is not right' },
  ],
  'خلص': [
    { ar:'خلص الدوام', tr:"khallas ed-dawem", en:'Work is done / The shift is over' },
    { ar:'خلص، مش رح أحكي معك', tr:"khalas, mish ra7 a7ki ma3ak", en:"That's it, I'm not talking to you" },
  ],
  'هلق': [
    { ar:'وين إنت هلق؟', tr:"wen inta halla2?", en:'Where are you right now?' },
    { ar:'هلق مش وقتها', tr:"halla2 mish wa2tha", en:"Now is not the time for it" },
  ],
  'بكرا': [
    { ar:'بكرا موعدنا الساعة تلاتة', tr:"bukra maw3idna es-sa3a tlate", en:"Tomorrow our appointment is at 3 o'clock" },
    { ar:'ما في بكرا', tr:"ma fi bukra", en:"There's no tomorrow (seize the day)" },
  ],
  'شو': [
    { ar:'شو بدّك تاكل؟', tr:"shu biddak takel?", en:'What do you want to eat?' },
    { ar:'شو هالحكي؟', tr:"shu hal-7aki?", en:"What is this talk? (What are you saying?)" },
  ],
  'وين': [
    { ar:'وين رحت البارح؟', tr:"wen ru7t el-bari7?", en:'Where did you go yesterday?' },
    { ar:'وين بتشتغل؟', tr:"wen btishtaghel?", en:'Where do you work?' },
  ],
  'ليش': [
    { ar:'ليش ما جيت؟', tr:"lesh ma jet?", en:"Why didn't you come?" },
    { ar:'ليش عم تضحك؟', tr:"lesh 3am tid7ak?", en:'Why are you laughing?' },
  ],
  'قدّيش': [
    { ar:'قدّيش البيت؟', tr:"addesh el-bayt?", en:'How much is the house?' },
    { ar:'قدّيش الساعة؟', tr:"addesh es-sa3a?", en:'What time is it? (lit. how much is the hour)' },
  ],
  'عندي': [
    { ar:'عندي موعد بكرا', tr:"3indi maw3id bukra", en:'I have an appointment tomorrow' },
    { ar:'ما عندي وقت هلق', tr:"ma 3indi wa2t halla2", en:"I don't have time right now" },
  ],
  'بحبّ': [
    { ar:'بحبّ الأكل اللبناني كتير', tr:"b7ibb el-akl el-libnenni ktir", en:'I love Lebanese food a lot' },
    { ar:'بحبّك كتير يا ماما', tr:"b7ibbak ktir ya mama", en:'I love you very much, mom' },
  ],
  'معليش': [
    { ar:'معليش، تأخّرت شوي', tr:"ma3lesh, ta2akhkhert shwayy", en:"Sorry, I was a bit late" },
    { ar:'معليش، ما قصدت', tr:"ma3lesh, ma 2asadt", en:"Sorry, I didn't mean it" },
  ],
  'كيفك': [
    { ar:'كيفك يا صاحبي؟', tr:"kifak ya sa7bi?", en:'How are you, my friend?' },
    { ar:'كيفك عم تحكي على الجميع', tr:"kifak 3am te7ki 3al-jami3", en:"You're asking about everyone's wellbeing (ironic)" },
  ],
  'شوي': [
    { ar:'انتظر شوي من فضلك', tr:"intazar shwayy men fadlak", en:'Wait a little please' },
    { ar:'بعد شوي رح وصل', tr:"ba3d shwayy ra7 wussel", en:"I'll arrive in a bit" },
  ],
  'روح': [
    { ar:'روح على البيت وارتاح', tr:"ruh 3al-bayt w-irta7", en:'Go home and rest' },
    { ar:'كيف بدّي روح؟', tr:"kif biddi ruh?", en:'How am I going to go?' },
  ],
  'ماشي': [
    { ar:'ماشي، رح شوف شو بقدر اعمل', tr:"mashi, ra7 shuf shu b2edar a3mol", en:"Okay, I'll see what I can do" },
    { ar:'ماشي الحال', tr:"mashi el-7al", en:"Things are going along / Not bad" },
  ],
  'تمام': [
    { ar:'تمام، موافق', tr:"tamem, mwefe2", en:'Perfect, agreed' },
    { ar:'الموضوع تمام', tr:"el-mawdu3 tamem", en:'The matter is settled / All good' },
  ],
  'فيني': [
    { ar:'فيني أساعدك؟', tr:"fiyye sa3dak?", en:'Can I help you?' },
    { ar:'ما فيني أجي هلق', tr:"ma fiyye aji halla2", en:"I can't come right now" },
  ],
  'مش': [
    { ar:'مش عارف شو بقول', tr:"mish 3eref shu b2ul", en:"I don't know what to say" },
    { ar:'هيدا مش صح', tr:"hayda mish sa77", en:'This is not right' },
  ],
  'اكل': [
    { ar:'بدّنا ناكل شي كتير', tr:"biddna nakel shi ktir", en:'We want to eat something a lot' },
    { ar:'شو عندك تاكل؟', tr:"shu 3andak takel?", en:'What do you have to eat?' },
  ],
  'قهوة': [
    { ar:'بدّي قهوة عربي بدون سكر', tr:"biddi ahwe 3arabi bidun sukkar", en:'I want Arabic coffee without sugar' },
    { ar:'القهوة جاهزة', tr:"el-ahwe jahze", en:'The coffee is ready' },
  ],
  'بعدين': [
    { ar:'منحكي بعدين عن هالموضوع', tr:"mn7ki ba3dayn 3an hal-mawdu3", en:"We'll talk later about this topic" },
    { ar:'بعدين بعدين — هلق في وقت', tr:"ba3dayn ba3dayn — halla2 fi wa2t", en:"Later later — we have time now" },
  ],
  'طيب': [
    { ar:'طيب، شو بدّك مني؟', tr:"tayyib, shu biddak minni?", en:"Okay, what do you want from me?" },
    { ar:'هوّ إنسان طيّب كتير', tr:"howe insan tayyib ktir", en:'He is a very good person' },
  ],
  'منقوشة': [
    { ar:'بدّي منقوشة زعتر وقهوة', tr:'biddi manu2she za3tar w-ahwe', en:'I want a za\'atar mankoushe and coffee' },
    { ar:'المنقوشة فطور لبناني أصيل', tr:'el-manu2she ftour lubnani asil', en:'The mankoushe is an authentic Lebanese breakfast' },
  ],
  'حمص': [
    { ar:'الحمص عنا مع زيت الزيتون', tr:'el-hummus 3anna ma3 zayt el-zaytun', en:'The hummus here is served with olive oil' },
    { ar:'بدّي حمص وخبز عربي', tr:'biddi hummus w-khubz 3arabi', en:'I want hummus and pita bread' },
  ],
  'كبّة': [
    { ar:'كبّة النيّة الألذّ في لبنان', tr:'kibbe el-nayyeh el-alazz bi-lubnan', en:'Raw kibbeh is the most delicious in Lebanon' },
    { ar:'أمي بتعمل كبّة بالصينية كل جمعة', tr:'immi bt3amel kibbe bil-siniyye kull jum3a', en:'My mother makes baked kibbeh every Friday' },
  ],
  'لبنة': [
    { ar:'لبنة وزيتون وشاي على الفطور', tr:'labneh w-zaytun w-shay 3al-ftour', en:'Labneh, olives, and tea for breakfast' },
    { ar:'اللبنة اللبنانية أحسن من كل مكان', tr:'el-labneh el-lubnaniyye ahsan men kull makan', en:'Lebanese labneh is the best anywhere' },
  ],
  'تبولة': [
    { ar:'التبولة لازم تكون بالبقدونس مش بالبرغل', tr:'el-tabbule lazem tkun bil-ba2dunis mish bil-burghul', en:'Tabbouleh must be with parsley not bulgur' },
    { ar:'جهّزتي التبولة للمشوى', tr:'jahhazti el-tabbule lal-mashwe', en:'She prepared the tabbouleh for the barbecue' },
  ],
  'شاورما': [
    { ar:'بدّي شاورما دجاج وثوم وحامض', tr:'biddi shawarma djaj w-tum w-hamid', en:'I want chicken shawarma with garlic and pickles' },
    { ar:'أحسن شاورما ببيروت بالجمّيزة', tr:'ahsan shawarma b-bayrut bil-jemayze', en:'The best shawarma in Beirut is in Gemmayzeh' },
  ],
  'عرق': [
    { ar:'العرق بيبيض لما بتحطّلو مي', tr:'el-3ara2 byebyed lamma bt7atello may', en:'Arak turns white when you add water to it' },
    { ar:'شربنا عرق وأكلنا ميزة', tr:'shiribna 3ara2 w-akalna meze', en:'We drank arak and had meze' },
  ],
  'ميزة': [
    { ar:'الميزة اللبنانية عندها أكتر من ثلاثين صحن', tr:'el-meze el-lubnaniyye 3anda aktar men tletin sa7an', en:'A Lebanese meze has more than thirty dishes' },
    { ar:'طلبنا ميزة كاملة للعشا', tr:'talabna meze kamle lal-3asha', en:'We ordered a full meze for dinner' },
  ],
  'كيف': [
    { ar:'كيفك؟ كيف صحتك؟', tr:'kifak? kif sa77tak?', en:'How are you? How is your health?' },
    { ar:'كيف بتعرف هالشي؟', tr:'kif bt3aref hal-shi?', en:'How do you know this thing?' },
  ],
  'أهلاً': [
    { ar:'أهلاً وسهلاً بلبنان', tr:'ahlan w-sahlan b-Lubnan', en:'Welcome to Lebanon (lit: family and ease be with you)' },
    { ar:'أهلاً فيك، شو بيطلبك؟', tr:'ahlan fik, shu byitlubak?', en:'Welcome, what do you need?' },
  ],
  'عم': [
    { ar:'عم بحكي معك، سمعني', tr:'3am b7ki ma3ak, esma3ni', en:'I\'m talking to you, listen to me' },
    { ar:'عم بتاكلي وين هلق؟', tr:'3am btakli wen halla2?', en:'Where are you eating right now?' },
  ],
  'رح': [
    { ar:'رح روح البيت بكرا', tr:'ra7 ruh el-bayt bukra', en:'I will go home tomorrow' },
    { ar:'رح أشتري هالكتاب', tr:"ra7 ishtri hal-ktab", en:"I'm going to buy this book" },
    { ar:'رح يجي بكرا إن شاء الله', tr:"ra7 yiji bukra inshaallah", en:"He'll come tomorrow, God willing" },
    { ar:'رح يكون في وقت أحسن', tr:'rah ykun fi wa2t a7san', en:'There will be a better time' },
  ],
  'بس': [
    { ar:'بس دقيقة، رح آجي', tr:'bas da2i2a, rah iji', en:'Just a minute, I\'ll come' },
    { ar:'بدّي قهوة بس، مش شاي', tr:'biddi ahwe bas, mish shay', en:'I want only coffee, not tea' },
  ],
  'هيدا': [
    { ar:'هيدا مين؟ ما بعرفو', tr:'hayda min? ma ba3rifo', en:'Who is this? I don\'t know him' },
    { ar:'هيدا الكتاب تبعي', tr:'hayda el-ktab taba3i', en:'This book is mine' },
  ],
  'قلب': [
    { ar:'قلبي بيوجعني من هالأخبار', tr:'albi byuoj3ani men hal-akhbar', en:'My heart hurts from this news' },
    { ar:'هيّ بنت طيبة القلب', tr:'hiyye bnet tayybet el-alb', en:'She\'s a kind-hearted girl' },
  ],
  'وقت': [
    { ar:'ما في وقت هلق، بكرا', tr:'ma fi wa2t halla2, bukra', en:'There\'s no time now, tomorrow' },
    { ar:'ما في وقت للتأخير', tr:"ma fi wa2t lel-ta2khir", en:"There's no time for delay" },
    { ar:'الوقت من ذهب', tr:"el-wa2t men dhahab", en:'Time is gold (proverb)' },
    { ar:'وقتك قيّم، ما تضيّعو', tr:'wa2tak ayyem, ma tdayy3o', en:'Your time is precious, don\'t waste it' },
  ],
  'أكل': [
    { ar:'أكلنا كتير وشبعنا', tr:'akalna ktir w-shab3ana', en:'We ate a lot and got full' },
    { ar:'بدّك تاكل معنا الليلة؟', tr:'biddak takol ma3na el-leyle?', en:'Do you want to eat with us tonight?' },
  ],
  'بيت': [
    { ar:'بيتنا كبير بس ما في أسانسير', tr:'betna kbir bas ma fi asansir', en:'Our house is big but there\'s no elevator' },
    { ar:'بيتنا عالجبل', tr:"baytna 3al-jabal", en:'Our house is on the mountain' },
    { ar:'روح عالبيت، ما في داعي تبقى', tr:'ruh 3al-bayt, ma fi da3i tba2a', en:'Go home, no need to stay' },
  ],
  'صاحب': [
    { ar:'صاحبي الكبير بيشتغل بالخارج', tr:'sa7bi el-kbir byishtaghel bil-kharij', en:'My best friend works abroad' },
    { ar:'هوّ أحسن صاحب عندي', tr:"howe a7san sa7ib 3indi", en:"He's my best friend" },
    { ar:'صاحبي الجديد من بيروت', tr:"sa7ibi el-jdid men bayrut", en:'My new friend is from Beirut' },
    { ar:'هوّ مش صاحبي، بس معرفة', tr:'huwwe mish sa7bi, bas ma3rife', en:'He\'s not my close friend, just an acquaintance' },
  ],
  'حكى': [
    { ar:'حكيتلو بس ما سمع', tr:'7akkitlo bas ma seme3', en:'I told him but he didn\'t listen' },
    { ar:'عم تحكي فرنساوي معهم', tr:'3am t7ki faransawi ma3on', en:'She\'s speaking French with them' },
  ],
  'عرف': [
    { ar:'ما بعرف كيف بيعملوها', tr:'ma ba3ref kif by3amluha', en:'I don\'t know how they do it' },
    { ar:'عرفت الجواب من أول ما شفتو', tr:'3erift el-jawwab men awwal ma shufto', en:'I knew the answer from the moment I saw it' },
  ],
  'شاف': [
    { ar:'شفت الفيلم؟ كيفو؟', tr:'shift el-film? kiffo?', en:'Did you see the film? How was it?' },
    { ar:'ما شفتو من زمان، وينو؟', tr:'ma shifto men zeman, wayno?', en:'I haven\'t seen him in a long time, where is he?' },
  ],
  'رجع': [
    { ar:'متى رح يرجع من السفر؟', tr:'emta ra7 yirja3 men el-safar?', en:'When will he return from the trip?' },
    { ar:'رجعت عالبيت تعبانة كتير', tr:'rija3et 3al-bayt ta3bane ktir', en:'I came home very tired' },
  ],
  'جاب': [
    { ar:'جابلي هدية من باريس', tr:'jabli hadiyye men Baris', en:'He brought me a gift from Paris' },
    { ar:'شو جابك هون؟', tr:'shu jabak hon?', en:'What brought you here? (why are you here?)' },
  ],
  'قلّو': [
    { ar:'قلّو مرحبا عني', tr:'2illo mar7aba 3anni', en:'Say hi to him for me (lit: tell him hello from me)' },
    { ar:'قلّو تيجي بكرا', tr:'2illo tiji bukra', en:'Tell him to come tomorrow' },
  ],
  'طلع': [
    { ar:'طلع الخبر من كل مكان', tr:'tele3 el-khabar men kull makan', en:'The news came out everywhere' },
    { ar:'طلع غلطان — ما كان يعرف', tr:'tele3 ghaltan — ma ken ya3ref', en:'He turned out to be wrong — he didn\'t know' },
  ],
  'مبسوط': [
    { ar:'أنا مبسوط كتير إنك جيت', tr:'ana mabsut ktir innak jet', en:'I\'m so happy that you came' },
    { ar:'مش مبسوط من الوضع', tr:'mish mabsut men el-wad3', en:'Not happy with the situation' },
  ],
  'قلقان': [
    { ar:'قلقانة عليك كتير، وين كنت؟', tr:'2al2ane 3layk ktir, wen kent?', en:'I was so worried about you, where were you?' },
    { ar:'لا تكون قلقان، كل شي تمام', tr:'la tkun 2al2an, kull shi tamem', en:'Don\'t be worried, everything is fine' },
  ],
  'شغل': [
    { ar:'الشغل كتير هالأسبوع، ما في وقت', tr:'el-shughl ktir hal-usbu3, ma fi wa2et', en:'There\'s a lot of work this week, no time' },
    { ar:'الشغل كتير هالأيام', tr:"esh-shughl ktir hal-ayyam", en:'Work is a lot these days' },
    { ar:'شو شغلتك؟', tr:"shu shughltak?", en:'What is your job?' },
    { ar:'لقيت شغل جديد ببيروت', tr:'la2eet shughl jdid b-Bayrut', en:'I found a new job in Beirut' },
  ],
  'مهندس': [
    { ar:'أخوي مهندس بشركة كبيرة', tr:'akhwi muhandis b-shirke kbire', en:'My brother is an engineer at a big company' },
    { ar:'بدّي كمّل دراستي وصير مهندس', tr:'biddi kammel dirasiti w-sir muhandis', en:'I want to finish my studies and become an engineer' },
  ],
  'دكتور': [
    { ar:'الدكتور قلّي خذ راحة أسبوع', tr:'el-doktor 2illi khod ra7a usbu3', en:'The doctor told me to rest for a week' },
    { ar:'بدها تكون دكتورة لما تكبر', tr:'badda tkun doktore lamma tkbar', en:'She wants to be a doctor when she grows up' },
  ],
  'أستاذ': [
    { ar:'أستاذنا بيعلّمنا تاريخ لبنان', tr:'ustazna by3allimna tarikh Lubnan', en:'Our teacher teaches us Lebanese history' },
    { ar:'الأستاذ مش موجود هلق — رح يجي بعدين', tr:'el-ustaz mish mawjud halla2 — ra7 yiji ba3den', en:'The professor isn\'t here now — he\'ll come later' },
  ],
  'محامي': [
    { ar:'محتاج محامي لهالموضوع', tr:'m7taj mu7ami la-hal-mawdu3', en:'I need a lawyer for this matter' },
    { ar:'أخته محامية مشهورة ببيروت', tr:'ukhto mu7amiye mashhure b-Bayrut', en:'His sister is a well-known lawyer in Beirut' },
  ],
  'الساعة': [
    { ar:'الساعة كم هلق؟ — الساعة تلاتة ونص', tr:'el-sa3a kam halla2? — el-sa3a tlate w-noss', en:'What time is it now? — It\'s 3:30' },
    { ar:'الموعد الساعة عشرة الصبح', tr:'el-maw3id el-sa3a 3ashre el-sobe7', en:'The appointment is at 10 in the morning' },
  ],
  'كتير': [
    { ar:'عندي كتير شغل هلق', tr:'3andi ktir shughl halla2', en:'I have a lot of work right now' },
    { ar:'الأكل كتير منيح', tr:"el-akl ktir mneh", en:'The food is very good' },
    { ar:'شكراً كتير عالمساعدة', tr:'shukran ktir 3al-musa3ade', en:'Thank you very much for the help' },
  ],
};

const BORROW_HINTS = {
  'تلفون': 'From French: téléphone', 'فيزا': 'From English: visa',
  'سيارة': 'From Syriac: seyoro', 'تلفزيون': 'From English: television',
  'كمبيوتر': 'From English: computer', 'بنك': 'From English/French: bank',
  'مرسيدس': 'Brand name', 'أوتوبيس': 'From French: autobus',
  'تاكسي': 'From English/French: taxi', 'بيجامة': 'From Persian → English: pyjamas',
  'شنطة': 'From Turkish: çanta (bag)', 'طاسة': 'From Persian: tāsa',
  'قهوة': 'Origin of English "coffee" — from Arabic قهوة (qahwa)',
  'شوكولا': 'From French: chocolat', 'بسكويت': 'From French: biscuit',
  'بيرة': 'From English: beer', 'سيكار': 'From Spanish: cigarro (cigar)',
  'سيناريو': 'From Italian: scenario', 'فيلم': 'From English: film',
  'ميدان': 'From Persian: maydān', 'كراسي': 'From Persian: korsī',
  'صينية': 'From Persian: chīnī (Chinese porcelain)', 'طرشي': 'From Persian: turshi (pickles)',
  'ترجمان': 'Origin of "dragoman" — from Arabic/Turkish',
  'كاراتيه': 'From Japanese: karate', 'بيانو': 'From Italian: piano',
  'غيتار': 'From Spanish: guitarra → English: guitar', 'دكتور': 'From Latin: doctor',
  'بروفيسور': 'From Latin: professor', 'أكاديمية': 'From Greek: akademeia',
  'أوبرا': 'From Italian: opera', 'برنامج': 'From Persian: barnāma',
  'دوشك': 'From Turkish: döşek (mattress)', 'يخ': 'From Turkish: yağ (oil/grease)',
  'جرزة': 'From French: jersey', 'بيجو': 'French car brand: Peugeot',
  'رنو': 'French car brand: Renault', 'موبايل': 'From English: mobile (phone)',
  'إنترنت': 'From English: internet', 'ميكرويف': 'From English: microwave',
  'ديناميت': 'From Greek: dynamis → Nobel\'s invention', 'أسفلت': 'From French: asphalte',
  'باص': 'From English: bus', 'سيرك': 'From Latin: circus',
  'بيتزا': 'From Italian: pizza', 'بيفتيك': 'From French: bifteck (beef steak)',
};

// Arabic root → { root, latin, meaning, words[] } mapping
const WORD_ROOTS = [
  { root:'ك-ت-ب', latin:'k-t-b', meaning:'writing', words:['كتاب','كتابة','كاتب','مكتب','مكتبة','يكتب','اكتب'] },
  { root:'د-ر-س', latin:'d-r-s', meaning:'studying/learning', words:['درس','دراسة','مدرسة','مدرس','تدريس','يدرس'] },
  { root:'ك-ل-م', latin:'k-l-m', meaning:'speaking/words', words:['كلام','كلمة','يكلم','تكلم','مكالمة'] },
  { root:'ع-م-ل', latin:'3-m-l', meaning:'work/action', words:['عمل','عامل','يعمل','عمال','معمل','اعمال'] },
  { root:'ع-ر-ف', latin:'3-r-f', meaning:'knowing', words:['معرفة','يعرف','عارف','عرفان','تعرف'] },
  { root:'ح-ب-ب', latin:'7-b-b', meaning:'love/liking', words:['حب','حبيب','بحب','محبوب','حباية'] },
  { root:'ق-و-ل', latin:'2-w-l', meaning:'saying/speaking', words:['قول','يقول','قال','مقولة'] },
  { root:'أ-ك-ل', latin:'2-k-l', meaning:'eating', words:['أكل','ياكل','أكلة','ماكولات'] },
  { root:'ش-ر-ب', latin:'sh-r-b', meaning:'drinking', words:['شرب','يشرب','شراب','مشروب'] },
  { root:'ب-ي-ت', latin:'b-y-t', meaning:'home/house', words:['بيت','بيوت','أبيت'] },
  { root:'و-ل-د', latin:'w-l-d', meaning:'birth/child', words:['ولد','أولاد','والدين','مولود','ميلاد'] },
  { root:'ر-ج-ع', latin:'r-j-3', meaning:'returning', words:['رجع','يرجع','رجوع','مرجع'] },
  { root:'ف-ه-م', latin:'f-h-m', meaning:'understanding', words:['فهم','يفهم','فاهم','مفهوم'] },
  { root:'س-ف-ر', latin:'s-f-r', meaning:'travel', words:['سفر','يسافر','مسافر','سفارة'] },
  { root:'ص-د-ق', latin:'s-d-2', meaning:'truth/friendship', words:['صديق','صدق','يصدق','صداقة'] },
  { root:'ح-م-ل', latin:'7-m-l', meaning:'carrying/pregnancy', words:['حمل','يحمل','حامل','محمول'] },
  { root:'ق-ر-أ', latin:'2-r-2', meaning:'reading', words:['قراءة','يقرأ','قارئ','قرأ','مقروء'] },
  { root:'ج-ل-س', latin:'j-l-s', meaning:'sitting', words:['جلسة','يجلس','جالس','مجلس'] },
  { root:'ن-ظ-ر', latin:'n-dh-r', meaning:'looking/sight', words:['نظر','ينظر','نظرة','منظر','ناظر','نظارة'] },
  { root:'ح-ك-ي', latin:'7-k-y', meaning:'telling/story', words:['حكاية','يحكي','حاكي','حكى'] },
  { root:'ف-ت-ح', latin:'f-t-7', meaning:'opening', words:['فتح','يفتح','فاتح','مفتاح','مفتوح'] },
  { root:'ص-ح-ح', latin:'s-7-7', meaning:'health/correctness', words:['صحة','صحيح','يصحح','تصحيح'] },
  { root:'ح-ك-م', latin:'7-k-m', meaning:'ruling/wisdom', words:['حكم','حكمة','حاكم','محكمة','حكومة'] },
  { root:'ش-غ-ل', latin:'sh-gh-l', meaning:'work/occupation', words:['شغل','يشتغل','شاغل','مشغول'] },
  { root:'و-ق-ت', latin:'w-2-t', meaning:'time', words:['وقت','أوقات','مؤقت'] },
  { root:'ق-ل-ب', latin:'2-l-b', meaning:'heart/turning', words:['قلب','قلوب','قلبي','انقلب'] },
  { root:'خ-ر-ج', latin:'kh-r-j', meaning:'exit/going out', words:['خروج','يخرج','خارج','مخرج','خرج'] },
  { root:'د-خ-ل', latin:'d-kh-l', meaning:'entering', words:['دخول','يدخل','داخل','مدخل','دخل'] },
  { root:'ح-ل-و', latin:'7-l-w', meaning:'sweet/beautiful', words:['حلو','حلوى','أحلى','حلاوة'] },
  { root:'ز-ي-ن', latin:'z-y-n', meaning:'beauty/decoration', words:['زين','زينة','زيني','مزيّن'] },
  { root:'ن-ف-س', latin:'n-f-s', meaning:'self/breath', words:['نفس','نفسي','نفسه','أنفاس','تنفس'] },
  { root:'ك-ب-ر', latin:'k-b-r', meaning:'large/old', words:['كبير','أكبر','يكبر','كبار'] },
  { root:'ص-غ-ر', latin:'s-gh-r', meaning:'small/young', words:['صغير','أصغر','صغار','يصغر'] },
  { root:'ق-د-م', latin:'2-d-m', meaning:'old/foot/presenting', words:['قديم','أقدم','قدم','مقدمة','يقدم'] },
  { root:'ج-د-د', latin:'j-d-d', meaning:'new/renewing', words:['جديد','يجدد','تجديد','جدد'] },
  { root:'ح-ر-ك', latin:'7-r-k', meaning:'movement', words:['حركة','يتحرك','تحريك','حارك'] },
  { root:'ع-ل-م', latin:'3-l-m', meaning:'knowledge/world', words:['علم','عالم','يعلم','معلم','معلومات','تعليم'] },
  { root:'أ-م-ن', latin:'2-m-n', meaning:'safety/trust', words:['أمان','أمين','يأمن','إيمان'] },
  { root:'و-ص-ل', latin:'w-s-l', meaning:'arriving/connecting', words:['وصول','يوصل','واصل','وصلة'] },
  { root:'ط-ل-ب', latin:'t-l-b', meaning:'requesting/seeking', words:['طلب','يطلب','طالب','مطلوب'] },
  { root:'ن-ز-ل', latin:'n-z-l', meaning:'descending/hotel', words:['نزول','ينزل','فندق','نزلة'] },
  { root:'ر-ح-م', latin:'r-7-m', meaning:'mercy/womb', words:['رحمة','يرحم','رحيم','مرحوم','رحمان'] },
  { root:'م-ش-ي', latin:'m-sh-y', meaning:'walking/going', words:['مشي','يمشي','ماشي','مشوار'] },
  { root:'ر-ك-ض', latin:'r-k-d', meaning:'running', words:['ركض','يركض','راكض'] },
  { root:'ح-ف-ظ', latin:'7-f-dh', meaning:'memorizing/preserving', words:['حفظ','يحفظ','حافظ','محفوظ'] },
  { root:'ق-ر-ر', latin:'2-r-r', meaning:'deciding', words:['قرار','يقرر','مقرر','تقرير'] },
  { root:'س-ك-ن', latin:'s-k-n', meaning:'living/residing', words:['سكن','يسكن','ساكن','مسكن','سكان'] },
  { root:'ل-ع-ب', latin:'l-3-b', meaning:'playing', words:['لعبة','يلعب','لاعب','ملعب'] },
  { root:'ب-د-أ', latin:'b-d-2', meaning:'beginning', words:['بداية','يبدأ','بادئ','ابتداء'] },
  { root:'ن-ه-ي', latin:'n-h-y', meaning:'ending', words:['نهاية','ينهي','منتهي','نهائي'] },
];
