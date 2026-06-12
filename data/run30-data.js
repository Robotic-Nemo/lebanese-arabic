// Run #30 — Dialect Variations + Survival Phrasebook + Lebanese Names
// Prefixes: dl- (dialect), sv- (survival), nm- (names)

// ============ LEBANESE DIALECT VARIATIONS ============
const DIALECT_REGIONS = [
  { id:'beirut',  label:'🏙 Beirut',         desc:'The standard urban Lebanese — what most learners hear. Cosmopolitan, French-influenced.', flag:'🇱🇧' },
  { id:'tripoli', label:'🏛 Tripoli & North', desc:'Tripoli/Akkar — closer to Syrian Levantine. Some "shlon" instead of "kif". Heavier "qaf".', flag:'🇱🇧' },
  { id:'south',   label:'🌾 South Lebanon',   desc:'Sour, Nabatiyeh, Bint Jbeil — slower, melodic. Some Bedouin influence near border.', flag:'🇱🇧' },
  { id:'mountain',label:'⛰ Mount Lebanon',    desc:'Druze and Maronite mountain villages — Aley, Choueifat, Bcharre. Conservative, retains old forms.', flag:'🇱🇧' },
  { id:'bekaa',   label:'🌄 Bekaa Valley',     desc:'Zahle, Baalbek, Hermel — agricultural, more rural. Some Bedouin and Syrian features.', flag:'🇱🇧' }
];

const DIALECT_VARIATIONS = [
  { en:'how are you? (m)',     beirut:'kifak',         tripoli:'shlonak / kifak',     south:'kifak',            mountain:'kifak',         bekaa:'shlonak / kifak',  notes:'shlonak is from Iraqi/Syrian, used in Tripoli & Bekaa' },
  { en:'how are you? (f)',     beirut:'kifik',         tripoli:'shlonik / kifik',     south:'kifik',            mountain:'kifik',         bekaa:'shlonik / kifik',  notes:'' },
  { en:'what?',                beirut:'shu',           tripoli:'shu / esh',           south:'shu',              mountain:'shu',           bekaa:'shu',              notes:'esh is Syrian-influenced' },
  { en:'now',                  beirut:'halla2',        tripoli:'halla2 / hassa3',     south:'halla2',           mountain:'halla2',        bekaa:'hassa3',           notes:'hassa3 in Bekaa (rural)' },
  { en:'come (imp m)',         beirut:'ta3a',          tripoli:'ta3a',                south:'ta3a',             mountain:'ta3a',          bekaa:'ta3a',             notes:'rare uniformity' },
  { en:'go (imp m)',           beirut:'rou7',          tripoli:'rou7',                south:'rou7',             mountain:'rou7',          bekaa:'rou7',             notes:'' },
  { en:'tomato',               beirut:'bandoura',      tripoli:'banadoura',           south:'bandoura',         mountain:'bandoura',      bekaa:'banadoura',        notes:'longer "a" in Tripoli/Bekaa' },
  { en:'potato',               beirut:'baTaTa',        tripoli:'baTaTa',              south:'baTaTa',           mountain:'baTaTa',        bekaa:'baTaTa',           notes:'' },
  { en:'here',                 beirut:'hon',           tripoli:'hawn',                south:'hon',              mountain:'hon',           bekaa:'hon',              notes:'hawn (longer "aw") in Tripoli' },
  { en:'there',                beirut:'honik',         tripoli:'hawnek',              south:'honik',            mountain:'honik',         bekaa:'honik',            notes:'' },
  { en:'good (m)',             beirut:'mneeH',         tripoli:'mnee7',               south:'mnee7',            mountain:'mneeh / 7elo',  bekaa:'mnee7',            notes:'' },
  { en:'a lot / very',         beirut:'kteer',         tripoli:'kteer',               south:'kteer',            mountain:'kteer / shoub',  bekaa:'kteer',           notes:'shoub is mountain colloquial intensifier' },
  { en:'house',                beirut:'beit',          tripoli:'beit',                south:'beit',             mountain:'beit / dar',    bekaa:'beit',             notes:'dar (older form) in some mountain villages' },
  { en:'father',               beirut:'bayy / bayyé',  tripoli:'bayy',                south:'bayy / abou',      mountain:'bayy',          bekaa:'bayy',             notes:'abou commonly in south for "father of [name]"' },
  { en:'mother',               beirut:'imm / immé',    tripoli:'imm',                 south:'imm',              mountain:'imm',           bekaa:'imm',              notes:'' },
  { en:'water',                beirut:'mayy',          tripoli:'mayy / may',          south:'mayy',             mountain:'mayy',          bekaa:'mayy',             notes:'' },
  { en:'bread',                beirut:'khebez',        tripoli:'khebez',              south:'khebez',           mountain:'khebez',        bekaa:'khebez',           notes:'' },
  { en:'thank you',            beirut:'shukran / merci', tripoli:'shukran',           south:'shukran',          mountain:'shukran / yeslamlak', bekaa:'shukran',     notes:'merci common in Beirut (French influence)' },
  { en:'God willing',          beirut:'inshalla',      tripoli:'inshalla',            south:'inshalla',         mountain:'inshalla',      bekaa:'inshalla',         notes:'pan-Arab religious phrase' },
  { en:'baby / kid',           beirut:'walad / Tefel', tripoli:'walad',               south:'walad',            mountain:'sabi (boy)',    bekaa:'walad',            notes:'sabi is older mountain term for "young man"' },
  { en:'beautiful (f)',        beirut:'7elwe',         tripoli:'7elwe',               south:'7elwe',            mountain:'7elwe',         bekaa:'7elwe',            notes:'' },
  { en:'street',               beirut:'shar3',         tripoli:'shar3',               south:'shar3',            mountain:'shar3',         bekaa:'shar3',            notes:'' },
  { en:'yalla (let\'s go)',    beirut:'yalla',         tripoli:'yalla',               south:'yalla',            mountain:'yalla',         bekaa:'yalla',            notes:'pan-Lebanese' },
  { en:'no',                   beirut:'la2',           tripoli:'la / la2',            south:'la2',              mountain:'la2',           bekaa:'la2',              notes:'softer "la" in Tripoli (Syrian-style)' },
  { en:'yes',                  beirut:'aywa / na3am',  tripoli:'na3am / aywa',        south:'aywa / é',         mountain:'aywa / é',      bekaa:'aywa',             notes:'south uses short "é" colloquially' },
  { en:'why?',                 beirut:'lesh',          tripoli:'lesh / leh',          south:'lesh',             mountain:'lesh',          bekaa:'lesh',             notes:'' },
  { en:'today',                beirut:'el yom',        tripoli:'el yom',              south:'el yom',           mountain:'el yom',        bekaa:'el yom',           notes:'' },
  { en:'I want',               beirut:'biddi',         tripoli:'biddi / 3am bidd',    south:'biddi',            mountain:'biddi',         bekaa:'biddi',            notes:'' },
  { en:'q-letter (qaf)',       beirut:'usually 2 (glottal): a2ool', tripoli:'often kept "q": qool', south:'2', mountain:'2', bekaa:'sometimes "g": gool', notes:'qaf is the most variable consonant. Bekaa rural sometimes "g".' },
  { en:'evening',              beirut:'masa',          tripoli:'masa',                south:'masa / 3ashiyye',  mountain:'masa',          bekaa:'masa',             notes:'3ashiyye is poetic/older' }
];

// ============ SURVIVAL PHRASEBOOK ============
const SURVIVAL_SCENARIOS = [
  { id:'arrival', icon:'✈️', title:'Arrival at Beirut Airport',
    phrases:[
      { ar:'مرحبا، أنا غريب عن البلد', tr:'mar7aba, ana ghareeb 3an el balad', en:'Hello, I\'m new to the country' },
      { ar:'وين باخد التاكسي؟', tr:'wein b-akhod el taxi?', en:'Where do I get a taxi?' },
      { ar:'بدي SIM لبناني', tr:'biddi SIM lebnene', en:'I want a Lebanese SIM card' },
      { ar:'كم بدفع للتاكسي عبيروت؟', tr:'kam bedfa3 lal taxi 3a Beirut?', en:'How much do I pay for a taxi to Beirut?' },
      { ar:'في أوبر بلبنان؟', tr:'fi Uber bi-Lubnen?', en:'Is there Uber in Lebanon?' },
      { ar:'وين الخروج؟', tr:'wein el khurouj?', en:'Where is the exit?' }
    ],
    tip:'Bolt is more common than Uber in Lebanon. Confirm taxi price before getting in!' },
  { id:'taxi', icon:'🚕', title:'Taking a Service Taxi (servees)',
    phrases:[
      { ar:'سرفيس!', tr:'servees!', en:'Servees! (hail a shared taxi)' },
      { ar:'ع الحمرا', tr:'3al Hamra', en:'To Hamra' },
      { ar:'كم؟', tr:'kam?', en:'How much?' },
      { ar:'لأ تاكسي، سرفيس', tr:'la2, taxi mish servees', en:'No, regular taxi (not shared)' },
      { ar:'وقف هون', tr:'waqef hon', en:'Stop here' },
      { ar:'شكرا، عمو', tr:'shukran, 3ammo', en:'Thanks, uncle (polite to driver)' }
    ],
    tip:'Servees = shared taxi, set fare (~50,000 LL/2026). Taxi = private, more expensive. Always say destination first.' },
  { id:'cafe', icon:'☕', title:'Ordering at a Café',
    phrases:[
      { ar:'مرحبا، قهوة بيضا لو سمحت', tr:'mar7aba, ahwe bayDa law sama7t', en:'Hello, a white coffee please' },
      { ar:'قهوة عربية مزبوطة', tr:'ahwe 3arabiyye mazbouTa', en:'Arabic coffee, medium-sweet' },
      { ar:'بدي شاي بنعنع', tr:'biddi shay bi-na3na3', en:'I want tea with mint' },
      { ar:'في wifi هون؟', tr:'fi wifi hon?', en:'Is there wifi here?' },
      { ar:'الفاتورة لو سمحت', tr:'el fatoura law sama7t', en:'The bill, please' },
      { ar:'بدفع كاش', tr:'bedfa3 cash', en:'I\'ll pay cash' }
    ],
    tip:'"Ahwe bayDa" (white coffee) is hot water with orange-blossom essence — not coffee at all! For real coffee say "ahwe Espresso" or "ahwe 3arabiyye" (Arabic).' },
  { id:'souk', icon:'🛍', title:'Lost in the Souk',
    phrases:[
      { ar:'لو سمحت، وين سوق الخضرا؟', tr:'law sama7t, wein souq el khaDra?', en:'Excuse me, where is the vegetable souk?' },
      { ar:'فيك تساعدني؟', tr:'feek tsa3edni?', en:'Can you help me?' },
      { ar:'ضعت', tr:'Da3et', en:'I\'m lost' },
      { ar:'كيف بوصل ع...؟', tr:'kif bawSal 3a...?', en:'How do I get to...?' },
      { ar:'فيك تكتبلي ع الخريطة؟', tr:'feek toktoblé 3a el khareeTa?', en:'Can you write it for me on the map?' },
      { ar:'دغري، يمين، يسار', tr:'dughri, yameen, yasar', en:'Straight, right, left' }
    ],
    tip:'Lebanese love to help — even if they don\'t know the answer they\'ll point you somewhere! Ask 2-3 people to triangulate.' },
  { id:'emergency', icon:'🚨', title:'Emergency / Help',
    phrases:[
      { ar:'سعدوني!', tr:'sa3douni!', en:'Help me!' },
      { ar:'خبروا الإسعاف', tr:'khabbrou el is3aaf', en:'Call the ambulance' },
      { ar:'في حادث', tr:'fi 7adath', en:'There\'s an accident' },
      { ar:'بحاجة دكتور', tr:'be7aje dakhtor', en:'I need a doctor' },
      { ar:'وين أقرب مستشفى؟', tr:'wein a2rab mostashfa?', en:'Where\'s the nearest hospital?' },
      { ar:'عم بحس بألم بصدري', tr:'3am b7iss b-alam bi sadre', en:'I\'m feeling chest pain' }
    ],
    tip:'Lebanese Red Cross ambulance: 140. Civil Defense: 125. ISF (police): 112. Save these on your phone.' },
  { id:'bargain', icon:'💰', title:'Bargaining at the Market',
    phrases:[
      { ar:'اديش بيكلف هاد؟', tr:'addesh bikallef hayda?', en:'How much does this cost?' },
      { ar:'غالي كتير!', tr:'ghali kteer!', en:'Too expensive!' },
      { ar:'بنزل بالسعر؟', tr:'bnezzel bel se3er?', en:'Will you lower the price?' },
      { ar:'آخر سعر شو؟', tr:'akher se3er shu?', en:'What\'s the final price?' },
      { ar:'بالبلش، ما تفكر فيها', tr:'bel balash, ma tfakker fiya', en:'Forget it (not even for free)' },
      { ar:'يلا، أخدتها', tr:'yalla, akhadtha', en:'OK, I\'ll take it' }
    ],
    tip:'Bargaining is expected at street markets, not in malls or supermarkets. Counter-offer 50-60% of asking price; meet around 70%.' },
  { id:'taxi-late', icon:'🌙', title:'Late-Night Taxi Home',
    phrases:[
      { ar:'تاكسي ع الأشرفية', tr:'taxi 3al Ashrafieh', en:'Taxi to Ashrafieh' },
      { ar:'كم بكلف هلق؟', tr:'kam bikallef halla2?', en:'How much now (late rate)?' },
      { ar:'في زحمة؟', tr:'fi za7me?', en:'Is there traffic?' },
      { ar:'فيك تنطر شوي؟', tr:'feek tonTor shway?', en:'Can you wait a little?' },
      { ar:'هون منيح، شكرا', tr:'hon mneeH, shukran', en:'Here\'s good, thanks' },
      { ar:'خليلك الباقي', tr:'khalleelak el be2i', en:'Keep the change' }
    ],
    tip:'Apps like Bolt show fares upfront. After midnight expect 30-50% surcharge.' },
  { id:'host', icon:'🏠', title:'Visiting a Lebanese Home',
    phrases:[
      { ar:'أهلا فيك / بيك', tr:'ahla feek / beek', en:'Welcome (response to greeting)' },
      { ar:'تفضل، اقعد', tr:'tfaDDal, e23od', en:'Please, sit down' },
      { ar:'شو بتشرب؟ قهوة، شاي، عصير؟', tr:'shu btoshrab? ahwe, shay, 3aSir?', en:'What will you drink? Coffee, tea, juice?' },
      { ar:'شكرا، مش جوعان', tr:'shukran, mish jou3an', en:'Thanks, I\'m not hungry (you WILL be fed anyway)' },
      { ar:'أكلتك زاكية كتير', tr:'aklatak zakiyye kteer', en:'Your food is very tasty' },
      { ar:'يسلم ايديكي', tr:'yeslamou ideyki', en:'Bless your hands (compliment to cook)' }
    ],
    tip:'Refusing food once is polite — they\'ll insist. Accept by the second offer. NEVER turn down coffee on first visit.' },
  { id:'doctor', icon:'🩺', title:'At the Pharmacy',
    phrases:[
      { ar:'مرحبا، عندك دوا للراس؟', tr:'mar7aba, 3andak dawa lal-ras?', en:'Hello, do you have headache medicine?' },
      { ar:'بدي مضاد حيوي', tr:'biddi muDad 7ayawi', en:'I want antibiotics' },
      { ar:'بدون وصفة فيي آخد؟', tr:'bdoun waSfe fiyye akhod?', en:'Can I get it without a prescription?' },
      { ar:'عندي حساسية ع البنسلين', tr:'3andi 7assesiye 3al penicilin', en:'I\'m allergic to penicillin' },
      { ar:'هاد بكلف اديش؟', tr:'hayda bikallef addesh?', en:'How much does this cost?' },
      { ar:'في شي رخيص أكتر؟', tr:'fi shi rkhees aktar?', en:'Is there something cheaper?' }
    ],
    tip:'Lebanese pharmacies sell most things over-the-counter that need prescriptions in the US/EU. Pharmacists are often very knowledgeable.' },
  { id:'goodbye', icon:'👋', title:'Saying Goodbye Properly',
    phrases:[
      { ar:'يلا، فللينا', tr:'yalla, falleyna', en:'OK, we\'re leaving' },
      { ar:'بكير لسا!', tr:'bakeer lessa!', en:'It\'s still early! (host\'s protest)' },
      { ar:'لازم نروح، ع شي بكرا', tr:'lazem nrou7, 3a shi bukra', en:'We have to go, something tomorrow' },
      { ar:'أهلا فيكون بأي وقت', tr:'ahla feekon b-ay wa2t', en:'You\'re welcome anytime' },
      { ar:'بشوفك قريب، انشالله', tr:'bshoufak 2reeb, inshalla', en:'See you soon, God willing' },
      { ar:'تصبح ع خير', tr:'tSba7 3a kheir', en:'Good night (lit. wake up to good)' }
    ],
    tip:'Lebanese goodbyes can take 30+ minutes. Plan extra time. Always say "tSba7 3a kheir" before sleep — response is "wenta/wenti min ahlo" (and you from its people).' }
];

// ============ LEBANESE FIRST NAMES ============
const LEBANESE_NAMES = [
  // Christian / Maronite traditional
  { name:'Tony',     ar:'طوني',      gender:'m', tradition:'Christian', meaning:'< Antoine (St. Anthony)' },
  { name:'Joe',      ar:'جو',        gender:'m', tradition:'Christian', meaning:'< Joseph' },
  { name:'Charbel',  ar:'شربل',      gender:'m', tradition:'Christian', meaning:'St. Charbel — Maronite saint' },
  { name:'Elias',    ar:'الياس',     gender:'m', tradition:'Christian', meaning:'< Elijah (prophet)' },
  { name:'Georges',  ar:'جورج',      gender:'m', tradition:'Christian', meaning:'St. George' },
  { name:'Nicolas',  ar:'نقولا',     gender:'m', tradition:'Christian', meaning:'St. Nicholas' },
  { name:'Walid',    ar:'وليد',      gender:'m', tradition:'Both',      meaning:'newborn' },
  { name:'Karim',    ar:'كريم',      gender:'m', tradition:'Both',      meaning:'generous, noble' },
  { name:'Marc',     ar:'مارك',      gender:'m', tradition:'Christian', meaning:'St. Mark' },
  { name:'Pierre',   ar:'بيار',      gender:'m', tradition:'Christian', meaning:'< Peter (rock)' },
  // Muslim Sunni / Shia traditional
  { name:'Mohammad', ar:'محمد',      gender:'m', tradition:'Muslim',    meaning:'praised — most common name globally' },
  { name:'Ali',      ar:'علي',       gender:'m', tradition:'Muslim',    meaning:'high, exalted (Imam Ali)' },
  { name:'Hussein',  ar:'حسين',      gender:'m', tradition:'Shia',      meaning:'< Imam Hussein' },
  { name:'Hassan',   ar:'حسن',       gender:'m', tradition:'Muslim',    meaning:'good, beautiful' },
  { name:'Ahmad',    ar:'أحمد',      gender:'m', tradition:'Muslim',    meaning:'most praised' },
  { name:'Omar',     ar:'عمر',       gender:'m', tradition:'Sunni',     meaning:'long life, flourishing' },
  { name:'Khaled',   ar:'خالد',      gender:'m', tradition:'Muslim',    meaning:'eternal' },
  { name:'Fadi',     ar:'فادي',      gender:'m', tradition:'Both',      meaning:'redeemer (also Christian)' },
  { name:'Samir',    ar:'سمير',      gender:'m', tradition:'Both',      meaning:'jovial companion' },
  { name:'Rami',     ar:'رامي',      gender:'m', tradition:'Both',      meaning:'archer; sublime' },
  // Female — Christian
  { name:'Maria',    ar:'ماريا',     gender:'f', tradition:'Christian', meaning:'< Mary' },
  { name:'Carine',   ar:'كارين',     gender:'f', tradition:'Christian', meaning:'< Catherine' },
  { name:'Mireille', ar:'ميراي',     gender:'f', tradition:'Christian', meaning:'admirable (French)' },
  { name:'Therese',  ar:'تريز',      gender:'f', tradition:'Christian', meaning:'St. Therese' },
  { name:'Christine',ar:'كريستين',   gender:'f', tradition:'Christian', meaning:'follower of Christ' },
  { name:'Nayla',    ar:'نايلة',     gender:'f', tradition:'Christian', meaning:'one who attains' },
  // Female — Muslim
  { name:'Fatima',   ar:'فاطمة',     gender:'f', tradition:'Muslim',    meaning:'< Fatima al-Zahra (Prophet\'s daughter)' },
  { name:'Aisha',    ar:'عائشة',     gender:'f', tradition:'Sunni',     meaning:'living, prosperous' },
  { name:'Zeinab',   ar:'زينب',      gender:'f', tradition:'Shia',      meaning:'< Zaynab (granddaughter of Prophet)' },
  { name:'Mariam',   ar:'مريم',      gender:'Both', tradition:'Both',   meaning:'< Mary (used by both)' },
  { name:'Nour',     ar:'نور',       gender:'Both', tradition:'Both',   meaning:'light' },
  { name:'Layla',    ar:'ليلى',      gender:'f', tradition:'Both',      meaning:'night; dark beauty' },
  { name:'Yasmine',  ar:'ياسمين',    gender:'f', tradition:'Both',      meaning:'jasmine flower' },
  { name:'Rana',     ar:'رنا',       gender:'f', tradition:'Both',      meaning:'to gaze at' },
  { name:'Hala',     ar:'هلا',       gender:'f', tradition:'Both',      meaning:'halo around the moon' },
  { name:'Nada',     ar:'ندى',       gender:'f', tradition:'Both',      meaning:'morning dew' },
  { name:'Rima',     ar:'ريما',      gender:'f', tradition:'Both',      meaning:'white antelope' },
  { name:'Lina',     ar:'لينا',      gender:'f', tradition:'Both',      meaning:'tender, soft' },
  { name:'Sarah',    ar:'سارة',      gender:'f', tradition:'Both',      meaning:'< Sarah (biblical)' },
  // Druze names tend to overlap with Muslim, often shared
  { name:'Salim',    ar:'سليم',      gender:'m', tradition:'Druze/Muslim', meaning:'safe, sound' }
];

const NAME_DRILL = [
  { q:'Which name means "light" and is used by both Christian and Muslim Lebanese?', opts:['Layla','Nour','Mariam','Hala'], correct:1 },
  { q:'Charbel is named after a famous:', opts:['Lebanese poet','Maronite saint','Phoenician king','Druze sheikh'], correct:1 },
  { q:'Which name is from Imam Hussein (Shia tradition)?', opts:['Hassan','Hussein','Hamza','Hadi'], correct:1 },
  { q:'Mireille and Therese are typically:', opts:['Druze names','Sunni names','Christian names','Shia names'], correct:2 },
  { q:'Which means "morning dew"?', opts:['Rima','Hala','Nada','Lina'], correct:2 },
  { q:'Mariam (مريم) is used by:', opts:['Christians only','Muslims only','Both','Druze only'], correct:2 },
  { q:'Walid means:', opts:['warrior','newborn','wise man','traveler'], correct:1 },
  { q:'A common Lebanese male name from the French is:', opts:['Pierre','Hussein','Khaled','Salim'], correct:0 },
  { q:'Yasmine refers to which flower?', opts:['Rose','Jasmine','Lily','Tulip'], correct:1 },
  { q:'Which is a typically Sunni male name?', opts:['Hussein','Omar','Charbel','Elias'], correct:1 }
];

const DL_DRILL = [
  { en:'In Tripoli/North, "how are you?" is sometimes:', opts:['kifak','shlonak','keyfak','wallak'], correct:1 },
  { en:'In Beirut, "white coffee" actually contains:', opts:['milk','orange-blossom water','cream','sugar only'], correct:1 },
  { en:'The "qaf" letter (ق) in most urban Lebanese is pronounced as:', opts:['k','q','glottal stop (2)','g'], correct:2 },
  { en:'Beirutis often replace shukran with:', opts:['merci','danke','thanks','grazie'], correct:0 },
  { en:'Which region most uses "hassa3" for "now"?', opts:['Beirut','Bekaa','South','Mountain'], correct:1 },
  { en:'In rural Bekaa, "qaf" can sometimes sound like:', opts:['k','g','t','sh'], correct:1 },
  { en:'"hawn" instead of "hon" (here) is heard in:', opts:['Beirut','Tripoli/North','South','everywhere equally'], correct:1 },
  { en:'"Ahwe bayDa" is not actually coffee, it is:', opts:['decaf','espresso lungo','hot water + orange-blossom essence','milky coffee'], correct:2 }
];

const SV_DRILL = [
  { en:'You want to take a shared taxi. You shout:', opts:['Taxi!','Servees!','Bolt!','Bus!'], correct:1 },
  { en:'After eating at a Lebanese host\'s home, you compliment them with:', opts:['merci kteer','yeslamou ideyki','sahteyn','wallaw'], correct:1 },
  { en:'For an emergency ambulance, dial:', opts:['112','125','140','999'], correct:2 },
  { en:'A polite way to address a taxi driver is:', opts:['ya 3ammo (uncle)','ya zlamé (man)','ya akhi (brother)','any of these'], correct:0 },
  { en:'When bargaining, the seller\'s opening price is usually inflated by approximately:', opts:['10%','30%','50% or more','no markup'], correct:2 },
  { en:'When refusing food at a Lebanese home, the host will:', opts:['accept it immediately','insist (offer 2-3 times)','take offense','offer dessert instead'], correct:1 },
  { en:'"Yalla, falleyna" means:', opts:['let\'s eat','OK, we\'re leaving','enough already','quickly!'], correct:1 },
  { en:'For "good night" in Lebanese, say:', opts:['layla sa3eede','tSba7 3a kheir','masa el kheir','allah yhanneek'], correct:1 }
];
