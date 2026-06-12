const CONVERSATIONS = [
  {
    id: 'cafe', emoji: '☕', title: 'At the Café', desc: 'Ordering coffee and chatting',
    lines: [
      { s:'A', ar:'مرحبا، شو بدّك؟', tr:'marhaba, shu baddak?', en:'Hello, what would you like?' },
      { s:'B', ar:'بدّي قهوة عربية، من فضلك', tr:'baddi ahwe 3arabiyye, men fadlak', en:'I\'d like a Lebanese coffee, please' },
      { s:'A', ar:'حلو ولا سادة؟', tr:'helo walla sade?', en:'Sweet or plain (no sugar)?' },
      { s:'B', ar:'وسط، شكراً', tr:'wassat, shukran', en:'Medium sweet, thank you' },
      { s:'A', ar:'تفضّل، تفضّل. شي تاني؟', tr:'tfaddal, tfaddal. shi teni?', en:'Here you go. Anything else?' },
      { s:'B', ar:'لأ، هيدا بكفي. قدّيش الحساب؟', tr:'la2, hayda bikaffi. addesh el-hiseb?', en:'No, that\'s enough. How much is the bill?' },
      { s:'A', ar:'خمسة آلاف ليرة', tr:'khamse tlef lira', en:'Five thousand liras' },
      { s:'B', ar:'تفضّل. شكراً كتير', tr:'tfaddal. shukran ktir', en:'Here you are. Thank you very much' }
    ]
  },
  {
    id: 'taxi', emoji: '🚕', title: 'Taking a Taxi', desc: 'Getting a ride around Beirut',
    lines: [
      { s:'A', ar:'سيرفيس؟ وين رايح؟', tr:'service? wen rayyeh?', en:'Service taxi? Where are you going?' },
      { s:'B', ar:'على الحمرا، بقدر؟', tr:'3al-Hamra, bi2dar?', en:'To Hamra, can I?' },
      { s:'A', ar:'تفضّل اطلع', tr:'tfaddal itla3', en:'Get in, come on' },
      { s:'B', ar:'قدّيش من هون لعالحمرا؟', tr:'addesh men hon la-3al-Hamra?', en:'How much from here to Hamra?' },
      { s:'A', ar:'ألفين', tr:'alfayn', en:'Two thousand' },
      { s:'B', ar:'منيح. روح من المزرعة؟', tr:'mneh. ruh men el-Mazra3a?', en:'Good. Going through Mazra3a?' },
      { s:'A', ar:'آ، طبعاً', tr:'ah, tab3an', en:'Yes, of course' },
      { s:'B', ar:'وقّفني هون، شكراً', tr:'wa22ifni hon, shukran', en:'Stop me here, thanks' }
    ]
  },
  {
    id: 'meeting', emoji: '👋', title: 'Meeting Someone', desc: 'First introductions in Lebanese',
    lines: [
      { s:'A', ar:'أهلاً، كيفك؟', tr:'ahlan, kifak?', en:'Hello, how are you?' },
      { s:'B', ar:'منيح، الحمد لله. وأنت؟', tr:'mneh, l-hamdilla. w-inta?', en:'Fine, praise God. And you?' },
      { s:'A', ar:'تمام. شو اسمك؟', tr:'tamem. shu esmak?', en:'Great. What\'s your name?' },
      { s:'B', ar:'اسمي كريم. وأنت؟', tr:'ismi Karim. w-inta?', en:'My name is Karim. And you?' },
      { s:'A', ar:'أنا ساره. من وين إنت؟', tr:'ana Sara. men wen inta?', en:'I\'m Sara. Where are you from?' },
      { s:'B', ar:'أنا من بيروت. وإنتِ؟', tr:'ana men Beyrut. w-inti?', en:'I\'m from Beirut. And you (f)?' },
      { s:'A', ar:'أنا أجنبية، بس بحبّ لبنان كتير', tr:'ana ajnabiyye, bas bhibb Lebnen ktir', en:'I\'m a foreigner, but I love Lebanon a lot' },
      { s:'B', ar:'هيدا حلو! عارفي عربي منيح', tr:'hayda helo! 3arfe 3arabi mneh', en:'That\'s nice! You know Arabic well' }
    ]
  },
  {
    id: 'supermarket', emoji: '🛒', title: 'At the Supermarket', desc: 'Shopping for groceries',
    lines: [
      { s:'A', ar:'صباح الخير، كيف بقدر ساعدك؟', tr:'sabah el-kheyr, kif bi2dar se3dak?', en:'Good morning, how can I help you?' },
      { s:'B', ar:'فيك تحكيلي وين الخبز؟', tr:'fiyak te7kilni wen el-khobz?', en:'Can you tell me where the bread is?' },
      { s:'A', ar:'الخبز على اليمين، بعد الكاشير', tr:'el-khobz 3al-yamin, ba3d el-kashir', en:'The bread is on the right, after the cashier' },
      { s:'B', ar:'وعندكم حمص؟', tr:'w-3andkon hummus?', en:'And do you have hummus?' },
      { s:'A', ar:'آ، منحطّو مع الأكل الجاهز', tr:'ah, mnhatto ma3 el-akl el-jahiz', en:'Yes, we put it with the ready food' },
      { s:'B', ar:'شكراً. قدّيش هيدي البندورة؟', tr:'shukran. addesh haydi el-banadoura?', en:'Thanks. How much are these tomatoes?' },
      { s:'A', ar:'ثلاثة آلاف الكيلو', tr:'tlate tlef el-kilo', en:'Three thousand per kilo' },
      { s:'B', ar:'خد كيلو واحد', tr:'khod kilo wahad', en:'Take one kilo' }
    ]
  },
  {
    id: 'directions', emoji: '🗺️', title: 'Asking Directions', desc: 'Finding your way around',
    lines: [
      { s:'A', ar:'عفواً، بدّي روح على وسط البلد', tr:'3afo, baddi ruh 3a-wast el-balad', en:'Excuse me, I want to go to downtown' },
      { s:'B', ar:'من هون؟ مشي على طول', tr:'men hon? mshe 3a-tul', en:'From here? Walk straight ahead' },
      { s:'A', ar:'بعيد؟', tr:'ba3id?', en:'Is it far?' },
      { s:'B', ar:'لأ، قريب. خمس دقايق مشي', tr:'la2, 2arib. khamas da2ayi2 mshe', en:'No, close. Five minutes walk' },
      { s:'A', ar:'وبعدين؟', tr:'w-ba3dayn?', en:'And then?' },
      { s:'B', ar:'بعد الإشارة، دور على الشمال', tr:'ba3d el-ishara, dur 3ash-shmal', en:'After the traffic light, turn left' },
      { s:'A', ar:'اليسار؟', tr:'el-yesar?', en:'The left?' },
      { s:'B', ar:'آ، بتشوف البحر من هناك', tr:'ah, btshuf el-bahr men honnek', en:'Yes, you\'ll see the sea from there' }
    ]
  },
  {
    id: 'doctor', emoji: '🏥', title: 'At the Doctor', desc: 'Describing symptoms in Lebanese',
    lines: [
      { s:'A', ar:'أهلاً، شو في معك؟', tr:'ahlan, shu fi ma3ak?', en:'Hello, what\'s wrong with you?' },
      { s:'B', ar:'دكتور، عندي وجع راس كتير', tr:'doktor, 3andi waja3 ras ktir', en:'Doctor, I have a very bad headache' },
      { s:'A', ar:'من إيمتى؟', tr:'men emta?', en:'Since when?' },
      { s:'B', ar:'من امبارح الصبح', tr:'men mbereh es-subh', en:'Since yesterday morning' },
      { s:'A', ar:'عندك حمّى؟', tr:'3andak humma?', en:'Do you have a fever?' },
      { s:'B', ar:'ما بعرف، بس حاسس حالي تعبان', tr:'ma ba3ref, bas hases hali ta3ben', en:'I don\'t know, but I feel tired/unwell' },
      { s:'A', ar:'بكتبلك دوا. كل يوم مرتين', tr:'biktiblak dawa. koll yom marratayn', en:'I\'ll prescribe you medicine. Twice a day' },
      { s:'B', ar:'شكراً دكتور', tr:'shukran doktor', en:'Thank you, doctor' }
    ]
  },
  {
    id: 'plans', emoji: '📅', title: 'Making Plans', desc: 'Arranging to meet up',
    lines: [
      { s:'A', ar:'شو عم تعمل بكرا؟', tr:'shu 3am ta3mol bukra?', en:'What are you doing tomorrow?' },
      { s:'B', ar:'ما في شي خاص. ليش؟', tr:'ma fi shi khass. lesh?', en:'Nothing special. Why?' },
      { s:'A', ar:'بدّي روح على الساحل. بتيجي؟', tr:'baddi ruh 3as-sahel. bteji?', en:'I want to go to the coast. Will you come?' },
      { s:'B', ar:'فكرة حلوة! أيمتى؟', tr:'fikra helwe! ayymta?', en:'Great idea! When?' },
      { s:'A', ar:'السبت الصبح، الساعة عشرة', tr:'es-sabt es-subh, es-se3a 3ashra', en:'Saturday morning, at ten o\'clock' },
      { s:'B', ar:'تمام، بس بدّي رجع بدري', tr:'tamem, bas baddi arja3 badri', en:'OK, but I need to return early' },
      { s:'A', ar:'بالطبع. منرجع بالعصر', tr:'bit-tab3, mnirja3 bil-3asr', en:'Of course. We\'ll return in the afternoon' },
      { s:'B', ar:'تمام، موعدنا السبت', tr:'tamem, maw3adna es-sabt', en:'OK, our appointment is Saturday' }
    ]
  },
  {
    id: 'restaurant', emoji: '🍽️', title: 'At a Restaurant', desc: 'Ordering a meal Lebanese style',
    lines: [
      { s:'A', ar:'أهلاً وسهلاً، كم نفر؟', tr:'ahlan w-sahlan, kam nafar?', en:'Welcome, how many people?' },
      { s:'B', ar:'اثنين، شكراً', tr:'tnin, shukran', en:'Two, thank you' },
      { s:'A', ar:'تفضّلوا، هيدي المنيو', tr:'tfaddalu, haydi el-menu', en:'Come in, here is the menu' },
      { s:'B', ar:'شو المشاوي اليوم؟', tr:'shu el-mashawi el-yom?', en:'What are the grills today?' },
      { s:'A', ar:'عندنا كفتة وشيش طاووق ومنسف', tr:'3andna kafta w-shish tawuk w-mansaf', en:'We have kafta, shish taouk and mansaf' },
      { s:'B', ar:'آخد كفتة مع خبز وسلطة', tr:'akkhod kafta ma3 khobz w-salata', en:'I\'ll take kafta with bread and salad' },
      { s:'A', ar:'وشو بتشرب؟', tr:'w-shu bteshrab?', en:'And what will you drink?' },
      { s:'B', ar:'مي باردة، وعصير ليمون بالنعناع', tr:'may barde, w-3asir laymon bin-na3na3', en:'Cold water, and lemon juice with mint' }
    ]
  },
  {
    id: 'pharmacy', emoji: '💊', title: 'At the Pharmacy', desc: 'Buying medicine in Lebanon',
    lines: [
      { s:'A', ar:'مرحبا، شو بقدر ساعدك؟', tr:'marhaba, shu bi2dar se3dak?', en:'Hello, how can I help you?' },
      { s:'B', ar:'عندي زكام ووجع راس من يومين', tr:'3andi zukkam w-waja3 ras men yummayn', en:'I have a cold and a headache for two days' },
      { s:'A', ar:'عندك حرارة؟', tr:'3andak harara?', en:'Do you have a fever?' },
      { s:'B', ar:'شوي، مش كتير', tr:'shway, mish ktir', en:'A bit, not much' },
      { s:'A', ar:'منعطيك أدوية للزكام ومسكّن للوجع', tr:'mna3tik adwiye laz-zukkam w-musakkin lal-waja3', en:'We\'ll give you cold medicine and a painkiller' },
      { s:'B', ar:'حلو. وفيك تعطيني شي للحلق؟ واجعني', tr:'helo. w-fiyak ta3tini shi lal-7al2? waj3ni', en:'Good. And can you give me something for the throat? It hurts' },
      { s:'A', ar:'طبعاً. البخاخ أحسن لهيدا', tr:'tab3an. el-bakhakh ahsan la-hayda', en:'Of course. Spray is best for this' },
      { s:'B', ar:'قدّيش الكل؟', tr:'addesh el-kell?', en:'How much is everything?' },
      { s:'A', ar:'ثلاثة وسبعين ألف ليرة', tr:'tlate w-sab3in alf lira', en:'Seventy-three thousand liras' }
    ]
  },
  {
    id: 'sim', emoji: '📱', title: 'Getting a SIM Card', desc: 'Setting up a Lebanese phone plan',
    lines: [
      { s:'A', ar:'أهلاً، بدّك خط لبناني؟', tr:'ahlan, baddak khatt libneni?', en:'Hello, do you want a Lebanese line?' },
      { s:'B', ar:'آ، بدّي شريحة مع إنترنت', tr:'ah, baddi shri7a ma3 internet', en:'Yes, I want a SIM card with internet' },
      { s:'A', ar:'عندنا باقة شهرية بعشرة دولار', tr:'3andna ba2a shahhriyye b-3ashara dollar', en:'We have a monthly package for ten dollars' },
      { s:'B', ar:'شو بتتضمّن؟', tr:'shu btetdamman?', en:'What does it include?' },
      { s:'A', ar:'ثلاثة جيجا إنترنت ومكالمات محلية', tr:'tlate giga internet w-mukalemet mahalliyye', en:'Three gigs internet and local calls' },
      { s:'B', ar:'ومنقدر نجدّد كل شهر؟', tr:'w-min2dar njadded koll shahr?', en:'And can we renew every month?' },
      { s:'A', ar:'آ، تلقائي أو بالمتجر', tr:'ah, tila2a\'i aw bil-matjar', en:'Yes, automatically or at the store' },
      { s:'B', ar:'منيح. وصورة هوية لازمة؟', tr:'mneh. w-soret hawiyye lazme?', en:'Good. And is an ID photo required?' },
      { s:'A', ar:'آ، لازم جواز أو هوية', tr:'ah, lazem jawwaz aw hawiyye', en:'Yes, you need a passport or ID' }
    ]
  },
  {
    id: 'barber', emoji: '✂️', title: 'At the Barber / Hair Salon', desc: 'Getting a haircut in Lebanon',
    lines: [
      { s:'A', ar:'أهلاً تفضّل، كيف بقدر ساعدك؟', tr:'ahlan tfaddal, kif bi2dar se3dak?', en:'Hello welcome, how can I help you?' },
      { s:'B', ar:'بدّي قصّة شعر', tr:'baddi 2assa sha3r', en:'I want a haircut' },
      { s:'A', ar:'كيف بدّك؟ قصير أو متوسط؟', tr:'kif baddak? 2asir aw mutawassit?', en:'How do you want it? Short or medium?' },
      { s:'B', ar:'متوسط. بقصّ من الجنبين بس', tr:'mutawassit. bu2oss men el-janbein bass', en:'Medium. Just cut from the sides' },
      { s:'A', ar:'وفوق؟ كتير أو شوي؟', tr:'w-fo2? ktir aw shway?', en:'And on top? A lot or a little?' },
      { s:'B', ar:'شوي بس. وبدّي تعمل الشكل بالماكينة', tr:'shway bass. w-baddi ta3mel esh-shakl bil-makine', en:'Just a little. And I want you to shape it with the trimmer' },
      { s:'A', ar:'حلو. وللّحية؟', tr:'helo. w-lal-li7ye?', en:'Good. And for the beard?' },
      { s:'B', ar:'سوّيها بسيطة، مش كتير', tr:'sawwiha basita, mish ktir', en:'Keep it simple, not too much' },
      { s:'A', ar:'خلصنا. كيف حبّيت؟', tr:'khalasna. kif habbeit?', en:'All done. How did you like it?' },
      { s:'B', ar:'كتير حلو، شكراً كتير', tr:'ktir helo, shukran ktir', en:'Very nice, thank you very much' }
    ]
  },
  {
    id: 'landlord', emoji: '🏠', title: 'Viewing an Apartment', desc: 'Renting a place in Lebanon',
    lines: [
      { s:'A', ar:'هيدي الشقة من غرفتين وصالون', tr:'haydi esh-sha22a men ghurften w-salon', en:'This apartment has two bedrooms and a living room' },
      { s:'B', ar:'الإيجار قدّيش بالشهر؟', tr:'el-ijar addesh bish-shahr?', en:'How much is the rent per month?' },
      { s:'A', ar:'سبعمية وخمسين دولار، يدفع ثلاثة مقدّم', tr:'sab3miye w-khamseen dollar, ydfa3 tlate mu2addam', en:'Seven hundred fifty dollars, pay three months upfront' },
      { s:'B', ar:'وفيها مصاري ماي وكهرباء؟', tr:'w-fiha masari may w-kahraba?', en:'Does it include water and electricity bills?' },
      { s:'A', ar:'الماي عليّ. الكهرباء على الساكن', tr:'el-may 3alayye. el-kahraba 3as-sakin', en:'Water is on me. Electricity is on the tenant' },
      { s:'B', ar:'وبالشقة شوفاج؟', tr:'w-bish-sha22a shofaj?', en:'Is there a heater in the apartment?' },
      { s:'A', ar:'آ، في شوفاج مركزي للمبنى', tr:'ah, fi shofaj markazi lal-mabna', en:'Yes, there is central heating for the building' },
      { s:'B', ar:'إيمتى الشقة بتفضى؟', tr:'eimta esh-sha22a btifda?', en:'When does the apartment become vacant?' },
      { s:'A', ar:'أول الشهر الجاي', tr:'awwal esh-shahr el-jey', en:'The beginning of next month' }
    ]
  },
  {
    id: 'airport', emoji: '✈️', title: 'At the Airport', desc: 'Checking in and navigating Beirut airport',
    lines: [
      { s:'A', ar:'صباح الخير، معي حجز على الرحلة', tr:'saba7 el-kheyr, ma3i 7ajez 3ar-re7le', en:'Good morning, I have a booking for the flight' },
      { s:'B', ar:'جواز السفر لو سمحت', tr:'jawaz es-safar law sama7t', en:'Your passport please' },
      { s:'A', ar:'تفضل، ورحلتي على بيروت بالساعة عشرة', tr:'tfadal, w-re7lti 3a Beyrut bis-sa3a 3ashra', en:'Here you go, my flight to Beirut is at ten o\'clock' },
      { s:'B', ar:'عندك أمتعة تشيك إن؟', tr:'3andak amte3a tshek in?', en:'Do you have luggage to check in?' },
      { s:'A', ar:'آ، عندي شنطة وحدة', tr:'ah, 3andi shante wa7de', en:'Yes, I have one suitcase' },
      { s:'B', ar:'وزنها أربعة وعشرين كيلو — تمام', tr:'wazinha arba3a w-3eshrin kilo — tamem', en:'Its weight is twenty-four kilos — that\'s fine' },
      { s:'A', ar:'رقم الغيت قدّيش؟', tr:'ra2m el-gheyt addesh?', en:'What is the gate number?' },
      { s:'B', ar:'غيت سبعة. التبورد بيبدا بعد ساعة', tr:'gheyt sab3a. et-tabord byibda ba3d se3a', en:'Gate seven. Boarding starts in one hour' }
    ]
  },
  {
    id: 'bank', emoji: '🏦', title: 'At the Bank', desc: 'Banking in Lebanon — dollars and lira',
    lines: [
      { s:'A', ar:'بدّي صرّف مية دولار على ليرة', tr:'baddi sarref miyye dollar 3a lira', en:'I want to exchange one hundred dollars to lira' },
      { s:'B', ar:'السعر اليوم سبعة وثمانين ألف ليرة بالدولار', tr:'es-se3r el-yom sab3a w-tmanin alf lire bid-dollar', en:'The rate today is eighty-seven thousand lira per dollar' },
      { s:'A', ar:'وفيني فتح حساب هون؟', tr:'w-fiyyni fta7 7isab hon?', en:'Can I open an account here?' },
      { s:'B', ar:'لازم تجيب جواز سفر وإثبات عنوان', tr:'lazem tjib jawaz safar w-isbat 3enwan', en:'You need to bring a passport and proof of address' },
      { s:'A', ar:'كم يوم بياخد؟', tr:'kam yom byakhod?', en:'How many days does it take?' },
      { s:'B', ar:'عادةً خمس أيام عمل', tr:'3adatan khams iyyem 3amal', en:'Usually five working days' }
    ]
  },
  {
    id: 'gym', emoji: '💪', title: 'At the Gym', desc: 'Signing up and working out in Lebanese',
    lines: [
      { s:'A', ar:'كيفك، بدّي سجّل عضوية', tr:'kifak, baddi sajjel 3udwiyye', en:'Hi, I want to sign up for a membership' },
      { s:'B', ar:'أهلاً! عندنا اشتراك شهري أو سنوي', tr:'ahlan! 3andna ishtirak shahri aw sanawi', en:'Welcome! We have monthly or annual subscriptions' },
      { s:'A', ar:'الشهري بكم؟', tr:'esh-shahri bi-kam?', en:'How much is the monthly?' },
      { s:'B', ar:'خمسة وعشرين دولار بالشهر وبتشمل كل شي', tr:'khamse w-3eshrin dollar bish-shahr w-btishmul kell shi', en:'Twenty-five dollars a month and it includes everything' },
      { s:'A', ar:'في كلاسات جماعية؟', tr:'fi klisat jama3iyye?', en:'Are there group classes?' },
      { s:'B', ar:'آ، يوغا وزومبا وبوكس — الجدول عالجدار', tr:'ah, yoga w-zumba w-boks — el-jadwal 3al-jidar', en:'Yes, yoga, zumba, and boxing — the schedule is on the wall' },
      { s:'A', ar:'شكراً، رح فكر وأرجع', tr:'shukran, ra7 fakker w-arja3', en:'Thank you, I\'ll think about it and come back' }
    ]
  },
  {
    id: 'party', emoji: '🎉', title: 'At a Party', desc: 'Small talk and socializing in Lebanese',
    lines: [
      { s:'A', ar:'أهلاً! إنت من وين؟', tr:'ahlan! inta min wayn?', en:'Hello! Where are you from?' },
      { s:'B', ar:'أنا من بيروت، وإنت؟', tr:'ana min Beyrut, w-inta?', en:'I\'m from Beirut, and you?' },
      { s:'A', ar:'أنا أجنبي، عم بتعلم عربي', tr:'ana ajnabi, 3am bet3allam 3arabi', en:'I\'m a foreigner, I\'m learning Arabic' },
      { s:'B', ar:'واو، عربيتك منيحة! شو بتشتغل؟', tr:'wow, 3arabiytak mni7a! shu btishtaghel?', en:'Wow, your Arabic is good! What do you do for work?' },
      { s:'A', ar:'أنا مهندس. وإنت؟', tr:'ana muhandis. w-inta?', en:'I\'m an engineer. And you?' },
      { s:'B', ar:'أنا طالب طب بالجامعة الأمريكية', tr:'ana taleb tebb bil-jami3a el-amrikiyye', en:'I\'m a medical student at the American University' },
      { s:'A', ar:'رائع! ليلة حلوة معك', tr:'ra\'i3! lele 7elwe ma3ak', en:'Wonderful! Nice evening with you' }
    ]
  },
  {
    id: 'electricity', emoji: '💡', title: 'Power Cut Conversation', desc: 'Talking about Lebanon\'s electricity situation',
    lines: [
      { s:'A', ar:'الكهربا قطعت تاني مرة اليوم', tr:'el-kahraba 2atte3et tani marra el-yom', en:'The electricity cut again today' },
      { s:'B', ar:'طبيعي، عنّا ساعتين بس بالنهار', tr:'tabi3i, 3anna sa3tayn bass bel-nahar', en:'Normal, we only have two hours during the day' },
      { s:'A', ar:'المولّد شو بياخد؟', tr:'el-mwalled shu byakhod?', en:'What does the generator take?' },
      { s:'B', ar:'خمس امبيرات بخمسين دولار بالشهر', tr:'khames ambirat bi-khamsine dollar besh-shahr', en:'Five amps for fifty dollars a month' },
      { s:'A', ar:'غالي كتير. ما في حل تاني؟', tr:'ghali ktir. ma fi 7all teni?', en:'Very expensive. Is there no other solution?' },
      { s:'B', ar:'في ناس عاملين طاقة شمسية', tr:'fi nes 3emlin ta2a shamsiyye', en:'Some people have installed solar energy' },
      { s:'A', ar:'هيدي فكرة منيحة، بس غالية هي كمان', tr:'haydi fikra mni7a, bass ghalye hiyye kaman', en:'That\'s a good idea, but it\'s also expensive' },
      { s:'B', ar:'يعني، هيك لبنان', tr:'ya3ni, hek Libnan', en:'Well, that\'s Lebanon for you' }
    ]
  },
  {
    id: 'wedding', emoji: '💒', title: 'Lebanese Wedding Talk', desc: 'Discussing a Lebanese wedding celebration',
    lines: [
      { s:'A', ar:'كيف كان عرس ابن عمّك؟', tr:'kif ken 3ers iben 3ammak?', en:'How was your cousin\'s wedding?' },
      { s:'B', ar:'والله رائع! ناس كتير وأكل كتير', tr:'wallah ra\'i3! nas ktir w-akl ktir', en:'By God, wonderful! Lots of people and lots of food' },
      { s:'A', ar:'وين كانو عاملينه؟', tr:'wen kenu 3emlinno?', en:'Where was it held?' },
      { s:'B', ar:'بقاعة بالجبل، الطبيعة حلوة كتير', tr:'bi-2a3a bel-jabal, et-tabi3a 7elwe ktir', en:'In a hall in the mountains, the nature is very beautiful' },
      { s:'A', ar:'زفّة كمان عملوا؟', tr:'zaffe kaman 3amelu?', en:'Did they have a zaffa procession too?' },
      { s:'B', ar:'آه، بطبول ومزمار، الجيران صحيو كلّهم', tr:'ah, bi-tbul w-mzmar, el-jiran si7yu killun', en:'Yes, with drums and mizmar, all the neighbors woke up' },
      { s:'A', ar:'عقبالك إنت كمان!', tr:'3ubalak inta kaman!', en:'May you be next! (wishing you a wedding too)' },
      { s:'B', ar:'إن شاء الله! لسّا وقتها', tr:'inshaallah! lessa wa2tha', en:'God willing! There\'s still time' }
    ]
  },
  {
    id: 'traffic', emoji: '🚗', title: 'Stuck in Beirut Traffic', desc: 'Typical Beirut traffic jam conversation',
    lines: [
      { s:'A', ar:'يي، شو هالزحمة! من وين جيت؟', tr:'yii, shu hal-za7me! min wen jet?', en:'Oh wow, what traffic! Where are you coming from?' },
      { s:'B', ar:'من الداون تاون، ساعة ونص عالطريق', tr:'men ed-dawntawn, se3a w-noss 3at-tari2', en:'From downtown, hour and a half on the road' },
      { s:'A', ar:'كل يوم هيك. ما في حل بهالبلد', tr:'kull yom hek. ma fi 7all bi-hal-balad', en:'Every day like this. No solution in this country' },
      { s:'B', ar:'البلد ما لها حل، بس نحنا بنحبّها', tr:'el-balad ma ilha 7all, bass ni7na bni7ebba', en:'The country has no solution, but we love it' },
      { s:'A', ar:'صح. يلا، خدني عالشمال من هون', tr:'sa77. yalla, khudni 3ash-shmal men hon', en:'True. Come on, take me left from here' },
      { s:'B', ar:'تمام. بعد الإشارة على اليمين', tr:'tamem. ba3d el-ishara 3al-yamin', en:'OK. After the traffic light turn right' },
      { s:'A', ar:'شكراً، يعطيك العافية', tr:'shukran, ya3tik el-3afye', en:'Thank you, may God give you strength' }
    ]
  },
  {
    id: 'food_market', emoji: '🧺', title: 'At the Farmers\' Market', desc: 'Buying fresh produce in Lebanese',
    lines: [
      { s:'A', ar:'صباح الخير، كيف الحال؟', tr:'sabah el-kheyr, kif el-7al?', en:'Good morning, how are you?' },
      { s:'B', ar:'صباح النور، الحمد لله. شو بدّك اليوم؟', tr:'sabah en-nur, el-7amdilla. shu biddak el-yom?', en:'Good morning, praise God. What do you want today?' },
      { s:'A', ar:'بدّي كيلو بندورة وكيلو خيار', tr:'biddi kilo banadure w-kilo khyar', en:'I want a kilo of tomatoes and a kilo of cucumbers' },
      { s:'B', ar:'البندورة من الشمال، طازة كتير', tr:'el-banadure men esh-shmal, taze ktir', en:'The tomatoes are from the north, very fresh' },
      { s:'A', ar:'منيح. وقدّيش الكيلو؟', tr:'mni7. w-addesh el-kilo?', en:'Good. And how much per kilo?' },
      { s:'B', ar:'بعشرة آلاف ليرة', tr:'bi-3ashara alef lira', en:'For ten thousand lira' },
      { s:'A', ar:'عطيني كيلواين من كل شي', tr:'3tini kilwayn men kull shi', en:'Give me two kilos of everything' },
      { s:'B', ar:'تفضّل. الله يبارك فيك', tr:'tfaddal. allah ybarik fik', en:'Here you go. God bless you' }
    ]
  },
  {
    id: 'university', emoji: '🎓', title: 'University Registration', desc: 'Registering for courses at a Lebanese university',
    lines: [
      { s:'A', ar:'مرحبا، بدّي أسجّل بالكورسات للفصل الجاي', tr:'marhaba, biddi sajjel bel-korsat lal-fasl el-jey', en:'Hello, I want to register for next semester\'s courses' },
      { s:'B', ar:'تفضّل، شو اسمك وشو رقمك الجامعي؟', tr:'tfaddal, shu ismak w-shu ra2mak el-jeme3i?', en:'Please, what\'s your name and student number?' },
      { s:'A', ar:'اسمي كريم، رقمي اثنين صفر تلاتة', tr:'ismi Karim, ra2ami tnein sifr tlate', en:'My name is Karim, my number is 203' },
      { s:'B', ar:'تمام. شو الكورسات اللي بدّك تاخدها؟', tr:'tamem. shu el-korsat elli biddak takhudha?', en:'OK. What courses do you want to take?' },
      { s:'A', ar:'بدّي اقتصاد وإحصاء ومحاسبة', tr:'biddi i2tisad w-i7sa2 w-mu7asabe', en:'I want economics, statistics and accounting' },
      { s:'B', ar:'المحاسبة مش متاحة هالفصل، في تسويق بدلها', tr:'el-mu7asabe mish meta7a hal-fasl, fi taswe2 badhale', en:'Accounting isn\'t available this semester, there\'s marketing instead' },
      { s:'A', ar:'ماشي، بآخد التسويق', tr:'mashi, b-akhod et-taswe2', en:'OK, I\'ll take marketing' },
      { s:'B', ar:'تمام، سجّلناك. حظ موفّق', tr:'tamem, sajjalnak. 7azz mwaffa2', en:'Done, we\'ve registered you. Good luck' }
    ]
  },
  {
    id: 'renting_apartment',
    emoji: '🏠',
    title: 'Renting an Apartment',
    desc: 'Finding and negotiating a rental in Beirut',
    lines: [
      { s:'A', ar:'آلو، شفت الإعلان عن الشقة — لسا فاضية؟', tr:'alo, shifet el-i3lan 3an esh-sha22a — lessa fadye?', en:'Hello, I saw the ad about the apartment — is it still available?' },
      { s:'B', ar:'آه، لسا موجودة. إيمتا بدك تجي تشوفا؟', tr:'ah, lessa mawjude. imta baddak tiji tshufha?', en:'Yes, it\'s still available. When do you want to come see it?' },
      { s:'A', ar:'ممكن بكرا الصبح؟ وقديش الإيجار؟', tr:'mumken bukra el-subeh? w-addeish el-ijjar?', en:'Can I come tomorrow morning? And how much is the rent?' },
      { s:'B', ar:'ألف دولار بالشهر، شامل الماء مش شامل الكهربا', tr:'alf dollar bil-shaher, shamel el-may mish shamel el-kahraba', en:'One thousand dollars per month, water included, electricity not included' },
      { s:'A', ar:'ما في مجال تنزّل شوي؟ ثمنمية بتناسبني أكتر', tr:'ma fi majal tnazzil shway? tmenmiyye btnasbni aktar', en:'Any chance you can lower it a bit? Eight hundred suits me better' },
      { s:'B', ar:'تسعمية آخر حل، وبدّك تدفع شهرين تأمين', tr:'tse3miyye akhir hall, w-baddak tdfa3 shahren ta2min', en:'Nine hundred is my final offer, and you\'ll need to pay two months deposit' },
      { s:'A', ar:'ماشي متّفقين، شوفك بكرا الساعة عشرة', tr:'mashi muttafe2in, shufak bukra el-se3a 3ashre', en:'OK, we\'re agreed. See you tomorrow at ten' },
      { s:'B', ar:'تمام، بنتظرك. بعتلي اسمك عالواتساب', tr:'tamem, bintizrak. b3atli ismak 3al-whatsapp', en:'OK, I\'ll wait for you. Send me your name on WhatsApp' },
    ]
  },
  {
    id: 'haggling',
    emoji: '🤝',
    title: 'Haggling at the Souq',
    desc: 'Bargaining for a good price at the market',
    lines: [
      { s:'A', ar:'هيدا الكوفية — قديش؟', tr:'hayda el-kufiyye — addeish?', en:'This keffiyeh — how much?' },
      { s:'B', ar:'بعطيك ياها بمية دولار، نوعها ممتاز', tr:'ba3tik yyaha b-miyye dollar, now3ha mumtaz', en:'I\'ll give it to you for a hundred dollars, the quality is excellent' },
      { s:'A', ar:'مية؟ كتير عليها. ستين وخلّص', tr:'miyye? ktir 3alayha. sittin w-khalles', en:'A hundred? That\'s too much. Sixty and done' },
      { s:'B', ar:'لا لا، ستين ما بتكفي. تسعين، وهيدا آخر كلام', tr:'la la, sittin ma btekfe. tse3in, w-hayda akhir kalam', en:'No no, sixty is not enough. Ninety, and that\'s my final word' },
      { s:'A', ar:'خليها بسبعين وبآخد إتنين منك', tr:'khalliya b-sab3in w-b-akhod itnein minnak', en:'Make it seventy and I\'ll take two from you' },
      { s:'B', ar:'إتنين بمية وثلاثين — أقلّ من هيك ما فيّي', tr:'itnein b-miyye w-tletin — a2all men hayke ma fiyyi', en:'Two for a hundred and thirty — I can\'t do less than that' },
      { s:'A', ar:'ماشي، إتنين بمية وعشرين، وهيدا آخر عرض', tr:'mashi, itnein b-miyye w-3ishrin, w-hayda akhir 3ard', en:'Fine, two for a hundred and twenty, and that\'s my final offer' },
      { s:'B', ar:'الله يبارك فيك! اتفقنا. بلفّلك ياهن', tr:'allah ybarek fik! ittafa2na. b-leffellak yyahon', en:'God bless you! We agreed. I\'ll wrap them for you' },
    ]
  },
  {
    id: 'neighbour_chat',
    emoji: '🏘️',
    title: 'Chatting with a Neighbour',
    desc: 'Casual hallway conversation in a Lebanese building',
    lines: [
      { s:'A', ar:'صباح الخير يا عمّو! كيفك؟', tr:'subah el-kher ya 3ammo! kifak?', en:'Good morning, uncle! How are you?' },
      { s:'B', ar:'أهلاً يا حبيبي، الحمد لله. وانت كيفك وكيف أهلك؟', tr:'ahlan ya 7abibi, el-hamdullah. w-inta kifak w-kif ahlek?', en:'Welcome dear, praise God. And how are you and your family?' },
      { s:'A', ar:'منيحين كلّن. سمعت في ناس جداد انتقلوا للطابق الثاني؟', tr:'mniyyin kullon. sme3et fi nes jdad inta2alu lal-tabi2 el-teni?', en:'They\'re all fine. I heard new people moved to the second floor?' },
      { s:'B', ar:'آه، عيلة شابة. ولادن كتير حلوين بس كتير دواشة', tr:'ah, 3ile shebba. wledon ktir 7ilwin bas ktir dawashe', en:'Yes, a young family. Their kids are very cute but very noisy' },
      { s:'A', ar:'ولاد! شو بدّك تعمل؟ أنا كمان كنت هيك', tr:'wled! shu baddak ta3mel? ana kaman kont hayke', en:'Kids! What can you do? I was the same' },
      { s:'B', ar:'معك حق. بس الصوت بيوصل لعندنا — ما فينا ننام', tr:'ma3ak 7a2. bas el-sowt byusal la-3andna — ma finna nnem', en:'You\'re right. But the noise reaches us — we can\'t sleep' },
      { s:'A', ar:'حكّيلن بهدوء، الناس ما بتعرف إذا ما حدا قلّن', tr:'7akkillon b-hudou, el-nas ma bt3ref iza ma 7ada allun', en:'Talk to them calmly, people don\'t know if no one tells them' },
      { s:'B', ar:'عندك حق. بروح حكيلن اليوم. يسلمو إيديك', tr:'3andak 7a2. bruh 7akkilon el-yom. yislamu idayk', en:'You\'re right. I\'ll go talk to them today. God bless your hands' },
    ]
  },
  {
    id: 'doctor_visit',
    emoji: '🏥',
    title: 'At the Doctor',
    desc: 'A patient visits a Lebanese clinic with a complaint',
    lines: [
      { s:'A', ar:'صباح الخير دكتور. أنا مش حاسس حالي منيح من يومين.', tr:'suba7 el-kher doktor. ana mish 7ases 7ali mneh men yomein.', en:'Good morning doctor. I haven\'t been feeling well for two days.' },
      { s:'B', ar:'أهلاً. شو عندك؟ وين بيوجعك؟', tr:'ahlan. shu 3andak? wayn byuoj3ak?', en:'Welcome. What\'s wrong? Where does it hurt?' },
      { s:'A', ar:'عندي وجع راس وحرارة وكتير تعبان. وكمان زكام.', tr:'3andi waja3 ras w-7arara w-ktir ta3ben. w-kaman zkem.', en:'I have a headache, fever, and general fatigue. And also a cold.' },
      { s:'B', ar:'من إيمتى الحرارة؟ قستها؟', tr:'men emta el-7arare? 2estaha?', en:'Since when is the fever? Did you take your temperature?' },
      { s:'A', ar:'من امبارح الليل. سبعة وثلاثين ونص.', tr:'men embareh el-lel. sab3a w-tletin w-noss.', en:'Since last night. Thirty-seven and a half.' },
      { s:'B', ar:'ما في داعي تخاف. شايف إنك مصاب بنزلة برد. رح عطيك وصفة. ارتاح واشرب مي كتير.', tr:'ma fi da3i tkhaf. shayyef innak musab b-nozlet bard. ra7 3attik wasfe. rta7 w-shrab may ktir.', en:'No need to worry. I see you have a cold. I\'ll give you a prescription. Rest and drink a lot of water.' },
      { s:'A', ar:'لازم آخد إجازة مرضية من الشغل؟', tr:'lazem akhod ijaze maradiyye men el-shughl?', en:'Do I need a sick leave from work?' },
      { s:'B', ar:'بوصيك تستريح يومين. رح كتبلك إجازة يومين وشوف حالك بعدين.', tr:'b-wassiik tistere7 yomein. ra7 kattbillak ijaze yomein w-shuf 7alak ba3den.', en:'I advise you to rest for two days. I\'ll write you a two-day leave and you can check on yourself afterward.' },
    ]
  },
  {
    id: 'call_abroad',
    emoji: '📞',
    title: 'Calling Lebanon from Abroad',
    desc: 'A Lebanese expat calls home to check in',
    lines: [
      { s:'A', ar:'الو؟ ماما؟ كيفك؟ مشتاقة عليكي كتير.', tr:'alo? mama? kifik? mshta2a 3layki ktir.', en:'Hello? Mama? How are you? I\'ve been missing you so much.' },
      { s:'B', ar:'حبيبي! أخيراً اتصلت. كنا قلقانين عليك. كيفك وكيف الشغل؟', tr:'7abibi! akhiran ittasalt. kenna 2al2anin 3layk. kifak w-kif el-shughl?', en:'My dear! You finally called. We were worried about you. How are you and how\'s work?' },
      { s:'A', ar:'الشغل تمام. بس بصراحة مشتاق كتير — للبيت وللأكل وللناس.', tr:'el-shughl tamam. bas b-sara7a mishte2 ktir — lal-bayt w-lal-akl w-lal-nas.', en:'Work is fine. But honestly I\'m very homesick — for home, for the food, for the people.' },
      { s:'B', ar:'ولدي، لبنان مش راح يروح. إنت هونيك لمصلحتك.', tr:'waladi, Lubnan mish ra7 yru7. inta hunik la-masla7tak.', en:'My son, Lebanon isn\'t going anywhere. You\'re there for your own good.' },
      { s:'A', ar:'بعرف ماما. بس يعني — صعب. متى رح تيجوا تزوروني؟', tr:'ba3ref mama. bas ya3ni — sa3ab. emta ra7 tiju tzuruni?', en:'I know mama. But you know — it\'s hard. When are you going to visit me?' },
      { s:'B', ar:'إن شاء الله الصيف الجاي يا قلبي. أبوك عم يوفّر الفلوس.', tr:'inshaallah el-sayf el-jay ya 2albi. abbuk 3am ywaffar el-flus.', en:'God willing next summer my heart. Your father is saving money.' },
      { s:'A', ar:'يلا ماما. بحبك. سلّمي على كل واحد عندكم.', tr:'yalla mama. b7ibbik. sallemi 3ala kull wa7ad 3andkon.', en:'OK mama. I love you. Say hi to everyone there.' },
      { s:'B', ar:'الله معك يا عمري. اتصل كتير. منحبك', tr:'allah ma3ak ya 3omri. ittasil ktir. mn7ibbak.', en:'God be with you my life. Call often. We love you.' },
    ]
  },
  {
    id: 'wedding_prep',
    emoji: '💒',
    title: 'Wedding Preparations',
    desc: 'Two friends discuss an upcoming Lebanese wedding',
    lines: [
      { s:'A', ar:'سمعت إنك مدعوّة عالعرس؟ شو رح تلبسي؟', tr:'seme3et innek mad3uwwe 3al-3ares? shu ra7 tilbsi?', en:'I heard you\'re invited to the wedding? What are you wearing?' },
      { s:'B', ar:'آه! عرس سامي وريم السبت. لسا ما لبّست. في دكان حلو بالجميزة.', tr:'ah! 3ares Sami w-Rim el-sabt. lessa ma labbeset. fi dukken 7ilu bil-Jemayze.', en:'Yes! Sami and Rim\'s wedding on Saturday. I still haven\'t dressed. There\'s a nice shop in Gemmayzeh.' },
      { s:'A', ar:'حلو. بيحبوا الزفّة؟ رح ترقصوا الدبكة؟', tr:'7ilu. bi7ibbu el-zaffe? ra7 tir2usu el-dabke?', en:'Nice. Do they like the zaffe? Will you do the dabke?' },
      { s:'B', ar:'أكيد في زفّة! وعزّيمة كبيرة — مية وخمسين ضيف عالأقل.', tr:'akid fi zaffe! w-3azime kbire — miyye w-khamsin dayf 3al-a2all.', en:'Of course there\'s a zaffe! And a big gathering — at least 150 guests.' },
      { s:'A', ar:'يي! وين بيعملوا الحفلة؟', tr:'yii! wayn by3amlu el-7afli?', en:'Wow! Where are they having the party?' },
      { s:'B', ar:'ببيروت قرب الكورنيش. قاعة كبيرة. وقالولي في تبّولة وكبّة وكل شي.', tr:'b-Bayrut rib el-Kornish. a3a kbire. w-2aluli fi tabbule w-kibbe w-kull shi.', en:'In Beirut near the Corniche. A big hall. And they told me there\'s tabbouleh and kibbeh and everything.' },
      { s:'A', ar:'كل الأعراس اللبنانية هيك! يعطيهن العافية ويعيشوا متل الأمراء.', tr:'kull el-a3ras el-lubnaniyye hek! ya3tiyon el-3afiye w-yi3ishu mtel el-umara.', en:'All Lebanese weddings are like this! God give them health and may they live like royalty.' },
      { s:'B', ar:'آمين! يلا لازم تيجي معي عالتسوق.', tr:'amen! yalla lazem tiji ma3i 3al-tasawwu2.', en:'Amen! Come on, you have to come shopping with me.' },
    ]
  },
  {
    id: 'bad_news',
    emoji: '😔',
    title: 'Consoling a Friend',
    desc: 'Offering comfort using Lebanese proverbs and phrases',
    lines: [
      { s:'A', ar:'شو في؟ شايفك مش تمام اليوم.', tr:'shu fi? shayfak mish tamam el-yom.', en:'What\'s up? I can see you\'re not OK today.' },
      { s:'B', ar:'خسرت شغلي. الشركة أقفلت وتسريح الكل.', tr:'khasaret shughli. el-shirke a2falat w-tasri7 el-kull.', en:'I lost my job. The company closed and laid everyone off.' },
      { s:'A', ar:'الله معك يا حبيبي. هيدا الشي ما بيتمنى لحدا.', tr:'allah ma3ak ya 7abibi. hayda el-shi ma byitmanna la-7ada.', en:'God be with you my dear. This is something you wouldn\'t wish on anyone.' },
      { s:'B', ar:'مش عارف شو بعمل. كمان الإيجار ناقص الأسبوع الجاي.', tr:'mish 3arif shu b3amel. kaman el-ijar na2es el-usbu3 el-jay.', en:'I don\'t know what to do. And rent is due next week too.' },
      { s:'A', ar:'اسمع — الصبر مفتاح الفرج. والله ما بيخلي إنسان. في دايماً حل.', tr:'esma3 — el-sabr mifta7 el-faraj. w-allah ma ykhal-li insan. fi daymen 7all.', en:'Listen — patience is the key to relief. God never abandons anyone. There\'s always a solution.' },
      { s:'B', ar:'تسلم. أنا بس خايف كتير. ما عندي خبرة متل هيك.', tr:'tislam. ana bas khayef ktir. ma 3andi khibri mtel hek.', en:'Thank you. I\'m just very scared. I\'ve never experienced something like this.' },
      { s:'A', ar:'هيك الحياة — الله بيسكّر باب وبيفتح باب أحسن.', tr:'hek el-7ayet — alla bisakker bab w-byifta7 bab a7san.', en:'That\'s life — God closes one door and opens a better one.' },
      { s:'B', ar:'يعطيك العافية يا صاحبي. بيكفي مشان الأصحاب.', tr:'ya3tik el-3afiye ya sa7bi. bykaffi mshan el-as7ab.', en:'May God give you health my friend. It\'s enough to have friends like you.' },
    ]
  },
  {
    id: 'bargaining',
    emoji: '🛒',
    title: 'At the Souq — Bargaining',
    desc: 'Haggling in a traditional Lebanese market',
    lines: [
      { s:'A', ar:'كيفك يا عمّو! شو أسعار الخضرة هالأيام؟', tr:'kifak ya 3ammo! shu as3ar el-khodra hal-iyyam?', en:'How are you, uncle! What are vegetable prices like these days?' },
      { s:'B', ar:'أهلاً فيك! الأسعار طايرة — الليرة خايسة كتير.', tr:'ahlan fik! el-as3ar tayri — el-lira khaysi ktir.', en:'Welcome! Prices are flying — the lira is really bad.' },
      { s:'A', ar:'قديش الكيلو بندورة؟', tr:'addeish el-kilo bandura?', en:'How much is a kilo of tomatoes?' },
      { s:'B', ar:'عشرة آلاف ليرة الكيلو.', tr:'3ashara alaf lira el-kilo.', en:'Ten thousand lira per kilo.' },
      { s:'A', ar:'واو! غالية كتير! ما فيك تكسّر السعر شوي؟', tr:'wow! ghalyye ktir! ma fiyak tkassar el-se3er shway?', en:'Wow! Very expensive! Can\'t you lower the price a bit?' },
      { s:'B', ar:'والله يا حبيبي أنا مش رابح كتير. بس لأنك زبون كويس — سبعة آلاف.', tr:'wallah ya 7abibi ana mish rabe7 ktir. bas la2annak zabun kwayyis — sab3a alaf.', en:'I swear dear I\'m not making much profit. But since you\'re a good customer — seven thousand.' },
      { s:'A', ar:'ماشي. وكمان جيب لي كيلو خيار وكيلو بصل.', tr:'mashi. w-kaman jib li kilo khyar w-kilo basal.', en:'Deal. And also bring me a kilo of cucumber and a kilo of onion.' },
      { s:'B', ar:'حاضر! الله يبارك فيك. تعا دايماً عندي.', tr:'7adir! allah ybarak fik. ta3a daymen 3andi.', en:'Right away! God bless you. Always come to me.' },
    ]
  },
  {
    id: 'phone_call', emoji: '📞', title: 'Phone Call with a Friend', desc: 'Casual catching up by phone',
    lines: [
      { s:'A', ar:'ألو، مرحبا!', tr:'alo, mar7aba!', en:'Hello (phone), hi!' },
      { s:'B', ar:'أهلين! كيفك حبيبي؟ شو الأخبار؟', tr:'ahlein! kifak 7abibi? shu el-akhbar?', en:'Hey! How are you, dear? What\'s new?' },
      { s:'A', ar:'الحمدلله، تمام. وإنت كيف حالك؟', tr:'el-7amdilla, tamem. w-inta kif 7alak?', en:'Praise God, all good. And how are you doing?' },
      { s:'B', ar:'منيح. سمعتك مشغول كتير هالفترة.', tr:'mneh. smi3tak mashghul ktir hal-fatra.', en:'Good. I heard you\'ve been very busy lately.' },
      { s:'A', ar:'إيه والله، الشغل ما بيخلص. شو رأيك نلتقي يوم الجمعة؟', tr:'eh wallah, esh-shoghol ma byikhlas. shu ra2yak nilta2i yom el-jum3a?', en:'Yeah honestly, work never ends. What do you think we meet up Friday?' },
      { s:'B', ar:'يا ريت! وين بدّك نلتقي؟', tr:'ya rayt! wein baddak nilta2i?', en:'I\'d love to! Where do you want to meet?' },
      { s:'A', ar:'بحب نروح عالحمرا، نقعد بكافيه.', tr:'b7ibb nruh 3al-7amra, ni23od bi-kafe.', en:'I\'d like to go to Hamra, sit at a café.' },
      { s:'B', ar:'تمام. الساعة كم؟', tr:'tamem. es-se3a kam?', en:'Perfect. What time?' },
      { s:'A', ar:'الساعة سبعة المسا. منيح؟', tr:'es-se3a sab3a el-masa. mneh?', en:'Seven in the evening. Good?' },
      { s:'B', ar:'منيح كتير. بشوفك هونيك يلا. باي.', tr:'mneh ktir. bshufak honik yalla. bay.', en:'Very good. See you there, then. Bye.' },
      { s:'A', ar:'باي حبيبي، الله معك.', tr:'bay 7abibi, allah ma3ak.', en:'Bye dear, God be with you.' }
    ]
  },
  {
    id: 'job_interview', emoji: '💼', title: 'Job Interview',
    desc: 'Professional Lebanese in a hiring conversation',
    lines: [
      { s:'A', ar:'تفضّلي اقعدي. شكراً إنك إجيتي.', tr:'tfaddali i23di. shukran innik ijiti.', en:'Please sit down. Thank you for coming.' },
      { s:'B', ar:'شكراً إلك على هالفرصة.', tr:'shukran ilak 3ala hal-forsa.', en:'Thank you for this opportunity.' },
      { s:'A', ar:'احكيلي عن حالك شوي.', tr:'7kili 3an 7alik shway.', en:'Tell me a little about yourself.' },
      { s:'B', ar:'أنا خرّيجة هندسة كومبيوتر من الجامعة الأميركية، وعندي خبرة تلات سنين بشركة برمجيات.', tr:'ana kharrijet handaset computer mn el-jem3a el-amerikiyye, w-3andi khebra tlet snin bi-sherket barmajiyyet.', en:'I\'m a computer engineering graduate from AUB, and I have three years of experience at a software company.' },
      { s:'A', ar:'منيح. شو لغات البرمجة اللي بتعرفي؟', tr:'mneh. shu loghet el-barmaje elli bta3rfi?', en:'Good. What programming languages do you know?' },
      { s:'B', ar:'بشتغل بـ Python وJavaScript بشكل أساسي، وبعرف SQL وGit منيح.', tr:'beshtighel bi-Python w-JavaScript bi-shakl asasi, w-ba3rif SQL w-Git mneh.', en:'I work mainly in Python and JavaScript, and I know SQL and Git well.' },
      { s:'A', ar:'ليش تركتي شغلك السابق؟', tr:'lesh tarakti shighlik es-sebe2?', en:'Why did you leave your previous job?' },
      { s:'B', ar:'كنت بدّي تحدّي جديد، وفرصة كبر مهنياً.', tr:'kent baddi ta7addi jdid, w-forsa kbar mihaniyyan.', en:'I wanted a new challenge, and an opportunity for professional growth.' },
      { s:'A', ar:'شو نقاط قوتك ونقاط ضعفك؟', tr:'shu nu2at 2uwwtik w-nu2at da3fik?', en:'What are your strengths and weaknesses?' },
      { s:'B', ar:'قوتي إني منظمة وبشتغل منيح بفريق. ضعفي إني أحياناً بدقّق كتير بالتفاصيل.', tr:'2owweti inni mnazzame w-beshtighel mneh bi-fari2. da3fi inni a7yenan bda22e2 ktir bil-tafasil.', en:'My strength is being organized and working well in a team. My weakness is sometimes I focus too much on details.' },
      { s:'A', ar:'قدّيش بدّك راتب؟', tr:'addesh baddik retib?', en:'How much salary are you asking for?' },
      { s:'B', ar:'حسب السوق، بتمنى ألفين دولار بالشهر.', tr:'7asab es-su2, btmana alfein dolar bil-shahr.', en:'Based on the market, I\'m hoping for two thousand dollars a month.' },
      { s:'A', ar:'تمام، رح ندرس طلبك ونرجعلك خلال أسبوع.', tr:'tamem, rah nidros talabik w-nirja3lik khilel isbu3.', en:'OK, we\'ll review your application and get back to you within a week.' },
      { s:'B', ar:'شكراً جزيلاً. بستنّى خبركن.', tr:'shukran jazilan. bistanna khabarkon.', en:'Thank you very much. I\'ll be waiting to hear from you.' }
    ]
  },
  {
    id: 'at_the_bank', emoji: '🏦', title: 'At the Bank',
    desc: 'Withdrawing dollars and asking about exchange',
    lines: [
      { s:'A', ar:'مرحبا، شو بتأمر؟', tr:'mar7aba, shu bit2ammir?', en:'Hello, how can I help you (lit: what do you order)?' },
      { s:'B', ar:'مرحبا. بدّي اسحب من حسابي.', tr:'mar7aba. biddi as7ab min 7sebi.', en:'Hello. I\'d like to withdraw from my account.' },
      { s:'A', ar:'بدولار ولا بليرة؟', tr:'b-dolar walla b-lira?', en:'In dollars or in lira?' },
      { s:'B', ar:'بدولار، إذا في فريش.', tr:'b-dolar, iza fi fresh.', en:'In dollars, if there\'s fresh (cash).' },
      { s:'A', ar:'قدّيش بدّك تسحب؟', tr:'addesh baddak tis7ab?', en:'How much do you want to withdraw?' },
      { s:'B', ar:'خمسمية دولار، لو سمحت.', tr:'khamsmiyye dolar, law sama7t.', en:'Five hundred dollars, please.' },
      { s:'A', ar:'تكرم. هويّتك معك؟', tr:'tikram. hawiyytak ma3ak?', en:'Of course. Do you have your ID?' },
      { s:'B', ar:'إيه، تفضّل. وكمان بسأل عن سعر الصرف اليوم.', tr:'eh, tfaddal. w-kaman bis2al 3an si3r es-sarf el-yom.', en:'Yes, here. And I also want to ask about today\'s exchange rate.' },
      { s:'A', ar:'الصرف اليوم تسعين ألف ليرة للدولار.', tr:'es-sarf el-yom tis3in alf lira lid-dolar.', en:'Today\'s rate is ninety thousand lira to the dollar.' },
      { s:'B', ar:'تمام. وفي عمولة عالسحب؟', tr:'tamem. w-fi 3umule 3al-sa7b?', en:'OK. Is there a commission on withdrawals?' },
      { s:'A', ar:'لأ، إذا أقلّ من ألف، ما في عمولة.', tr:'la2, iza a2all min alf, ma fi 3umule.', en:"No, if it's less than a thousand, there's no commission." },
      { s:'B', ar:'ممتاز، يعطيك العافية.', tr:'momtez, ya3tik el-3afiye.', en:'Great, may God give you health.' },
      { s:'A', ar:'الله يعافيك. تفضّل المصاري والإيصال.', tr:'allah y3afik. tfaddal el-masari w-l-isal.', en:'God preserve you. Here\'s the money and receipt.' }
    ]
  },
  {
    id: 'family_visit', emoji: '👨‍👩‍👧‍👦', title: 'A Family Sunday Visit',
    desc: 'Catching up with extended family',
    lines: [
      { s:'A', ar:'يا أهلين! تفضّلوا تفضّلوا.', tr:'ya ahlein! tfaddalu tfaddalu.', en:'Welcome! Please come in, come in.' },
      { s:'B', ar:'مرحبا تيتا! كيفك؟', tr:'mar7aba teta! kifik?', en:'Hi grandma! How are you?' },
      { s:'A', ar:'الحمدلله يا حبيبتي. كم صار من شوفتك؟', tr:'el-7amdilla ya 7abibti. kam sar min shoftik?', en:'Praise God my dear. How long has it been since I saw you?' },
      { s:'B', ar:'شي شهر تقريباً. كنت مشغولة بالشغل والولاد.', tr:'shi shahr ta2riban. kint mashghule bish-shoghol w-l-walad.', en:'About a month. I\'ve been busy with work and the kids.' },
      { s:'A', ar:'شو أخبار جوزك والولاد؟ كلّن منيح؟', tr:'shu akhbar jowzik w-el-wled? killon mni7?', en:'How are your husband and the kids? Everyone well?' },
      { s:'B', ar:'كلهن منيحين. الولاد عم يكبروا بسرعة.', tr:'killon mni7in. el-wled 3am yikbaro b-sir3a.', en:"Everyone's well. The kids are growing fast." },
      { s:'A', ar:'الله يخلّيلك ياهن. عمّك وعمّتك بالداخل.', tr:'allah ykhallilik yehon. 3ammik w-3ammtik bid-dakhel.', en:'May God preserve them for you. Your uncle and aunt are inside.' },
      { s:'B', ar:'يا حلو! وخالي مارون رح ييجي؟', tr:'ya 7elo! w-khali maroun rah yiji?', en:'How nice! And is my (maternal) uncle Maroun coming?' },
      { s:'A', ar:'إيه، رح يجي بعد شوي مع خالتك ووليدها.', tr:'eh, rah yiji ba3d shway ma3 khaltik w-wlayda.', en:'Yes, he\'ll come a bit later with your aunt and her son.' },
      { s:'B', ar:'منيح، عيلتنا كلها رح تتجمّع اليوم!', tr:'mneh, 3ayilitna killa rah titjamma3 el-yom!', en:'Great, our whole family will gather today!' },
      { s:'A', ar:'هيدي عادتنا، الأحد عيلة. قهوة ولا شاي؟', tr:'haydi 3adetna, el-a7ad 3ayle. ahwe walla shay?', en:'This is our tradition — Sunday is family. Coffee or tea?' },
      { s:'B', ar:'قهوة، لو سمحتي. وسكّر وسط.', tr:'ahwe, law sama7ti. w-sukkar wassat.', en:'Coffee, please. Medium sweet.' }
    ]
  },
];
