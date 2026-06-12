// Run #31 — Songs Library + Phone/Texting + Flirting & Compliments
// Prefixes: sg- / ph- / fl-

// ============ SONGS LIBRARY ============
// Iconic Lebanese songs with verse, translation, artist, and cultural notes.
const SONGS_LIBRARY = [
  {
    id: 'fairuz_bhebbak',
    title: 'B7ebbak ya Lebnan',
    titleAr: 'بحبك يا لبنان',
    artist: 'Fairuz',
    year: '1979',
    icon: '🇱🇧',
    verse: 'B7ebbak ya Lebnan, ya watani b7ebbak\nbi shamalak, bi janoubak, bi sahlak b7ebbak',
    verseAr: 'بحبك يا لبنان، يا وطني بحبك\nبشمالك، بجنوبك، بسهلك بحبك',
    translation: 'I love you, Lebanon, my homeland I love you\nIn your north, in your south, in your plain I love you',
    note: 'Unofficial second national anthem. Performed during the civil war as an act of unity.'
  },
  {
    id: 'fairuz_li_beirut',
    title: 'Li Beirut',
    titleAr: 'لبيروت',
    artist: 'Fairuz',
    year: '1984',
    icon: '🌹',
    verse: 'Li Beirut, men 2albi salamon li Beirut\nw 2obal lel ba7r w lel byout',
    verseAr: 'لبيروت، من قلبي سلامٌ لبيروت\nوقُبَلٌ للبحر وللبيوت',
    translation: 'To Beirut, from my heart peace to Beirut\nAnd kisses to the sea and to the houses',
    note: 'Written by poet Joseph Harb. A love letter to wartime Beirut.'
  },
  {
    id: 'fairuz_kifak',
    title: 'Kifak inta',
    titleAr: 'كيفك إنت',
    artist: 'Fairuz',
    year: '1991',
    icon: '☕',
    verse: 'Kifak inta? 7abibi kifak inta?\nshu 2elt 3anni? hayda kalamak inta?',
    verseAr: 'كيفك إنت؟ حبيبي كيفك إنت؟\nشو قلت عني؟ هيدا كلامك إنت؟',
    translation: 'How are you? My love how are you?\nWhat did you say about me? Are these your words?',
    note: 'Composed by Ziad Rahbani (her son). A jazzy, cafe-chic Beirut classic.'
  },
  {
    id: 'wadih_3al_jisr',
    title: '3al jisr al-Lawziye',
    titleAr: 'عالجسر اللوزية',
    artist: 'Wadih el Safi',
    year: '1960s',
    icon: '🌳',
    verse: '3al jisr al-Lawziye, ye3edem el ward 3layye\nyema, ya yema, byewja3ni 2albi 3layye',
    verseAr: 'عالجسر اللوزية، يقدم الورد عليّي\nيمّا، يا يمّا، بيوجعني قلبي عليّي',
    translation: 'On the Lawziye bridge, roses are offered to me\nMother, oh mother, my heart aches for me',
    note: 'Mountain folk classic. Wadih el Safi was the voice of Lebanon\'s golden age.'
  },
  {
    id: 'sabah_yana_yana',
    title: 'Yana Yana',
    titleAr: 'يانا يانا',
    artist: 'Sabah',
    year: '1960s',
    icon: '🌟',
    verse: 'Yana yana, ya 7abibi yana\nya marayet 2albi w el dene',
    verseAr: 'يانا يانا، يا حبيبي يانا\nيا مرايات قلبي والدنية',
    translation: 'Me, me, my love it\'s me\nO mirrors of my heart and the world',
    note: 'Sabah ("Shahroura") was a megastar across the Arab world. Joyful, dabke energy.'
  },
  {
    id: 'marcel_oummi',
    title: 'Oummi',
    titleAr: 'أمي',
    artist: 'Marcel Khalife',
    year: '1976',
    icon: '👩',
    verse: 'A7enno ila khobzi oummi w 2ahwati oummi\nw lamasati oummi',
    verseAr: 'أحنُّ إلى خبزِ أمي وقهوةِ أمي\nولمساتِ أمي',
    translation: 'I long for my mother\'s bread, my mother\'s coffee, and my mother\'s touch',
    note: 'Lyrics by Mahmoud Darwish (Palestinian poet). Marcel Khalife is Lebanon\'s leading politically-engaged composer.'
  },
  {
    id: 'majida_2alby',
    title: '2alby ma3ak',
    titleAr: 'قلبي معك',
    artist: 'Majida El Roumi',
    year: '1990s',
    icon: '💖',
    verse: '2alby ma3ak, w ana w 2almi w el sama\nbel 7obb byinkteb 7akiyna',
    verseAr: 'قلبي معك، وأنا وقلمي والسما\nبالحب بينكتب حكاينا',
    translation: 'My heart is with you, me and my pen and the sky\nIn love our story is written',
    note: 'Majida is the queen of Lebanese ballads. Often called the "Lady of Arabic song".'
  },
  {
    id: 'najwa_3atabna',
    title: '3atabna 3leik',
    titleAr: 'عتبنا عليك',
    artist: 'Najwa Karam',
    year: '2000s',
    icon: '🎤',
    verse: '3atabna 3leik, w el ghaybe Tawalit\nshu sar fina 7abibi, w shu sar bel jamil',
    verseAr: 'عتبنا عليك، والغيبة طولت\nشو صار فينا حبيبي، وشو صار بالجميل',
    translation: 'We blame you, the absence has grown long\nWhat happened to us my love, and what happened to the kindness',
    note: 'Najwa is the queen of mountain pop. Strong dabke beats and traditional themes.'
  }
];

const SG_DRILL = [
  { q:'Who sang "Li Beirut"?',
    options:['Sabah','Fairuz','Najwa Karam','Wadih el Safi'], answer:1 },
  { q:'Which song was written by Mahmoud Darwish?',
    options:['Oummi','Kifak inta','Yana Yana','3atabna 3leik'], answer:0 },
  { q:'"Kifak inta" was composed by:',
    options:['Marcel Khalife','Joseph Harb','Ziad Rahbani','Wadih el Safi'], answer:2 },
  { q:'"3al jisr al-Lawziye" mentions a bridge made of:',
    options:['stone','wood','almond trees','iron'], answer:2 },
  { q:'What does "B7ebbak ya Lebnan" mean?',
    options:['I miss you Lebanon','I love you Lebanon','I see you Lebanon','I call you Lebanon'], answer:1 },
  { q:'Sabah\'s nickname was:',
    options:['Shahroura','Jabal el Sheikh','Nightingale of the East','Queen of Beirut'], answer:0 },
  { q:'Majida El Roumi is known as the:',
    options:['Voice of Beirut','Lady of Arabic Song','Queen of Dabke','Diva of the Cedars'], answer:1 },
  { q:'Fairuz is the mother of which composer?',
    options:['Marcel Khalife','Ziad Rahbani','Elias Rahbani','Mansour Rahbani'], answer:1 }
];

// ============ PHONE & TEXTING ============
const PHONE_VOCAB = [
  // Calling
  { en:'phone',                lb:'telefon',           ar:'تلفون',       cat:'noun' },
  { en:'mobile',               lb:'mobile / khelyawi', ar:'موبايل',      cat:'noun' },
  { en:'number',               lb:'ra2em',             ar:'رقم',         cat:'noun' },
  { en:'call (noun)',          lb:'mkalame',           ar:'مكالمة',      cat:'noun' },
  { en:'voicemail',            lb:'risale Sawtiye',    ar:'رسالة صوتية', cat:'noun' },
  { en:'ringtone',             lb:'naghmet rannine',   ar:'نغمة رنين',   cat:'noun' },
  { en:'signal / reception',   lb:'shabake',           ar:'شبكة',        cat:'noun' },
  { en:'battery',              lb:'baTariye',          ar:'بطارية',      cat:'noun' },
  { en:'charger',              lb:'shaa7en',           ar:'شاحن',        cat:'noun' },
  { en:'screen',               lb:'shashe',            ar:'شاشة',        cat:'noun' },
  { en:'app',                  lb:'aplekayshen',       ar:'أبليكايشن',   cat:'noun' },
  { en:'message',              lb:'rsale',             ar:'رسالة',       cat:'noun' },
  // Verbs
  { en:'to call (someone)',    lb:'kallam',            ar:'كلّم',        cat:'verb' },
  { en:'to ring',              lb:'rann',              ar:'رنّ',          cat:'verb' },
  { en:'to answer',            lb:'rad',               ar:'ردّ',          cat:'verb' },
  { en:'to hang up',           lb:'sakkar',            ar:'سكّر',         cat:'verb' },
  { en:'to text / write',      lb:'katab',             ar:'كتب',         cat:'verb' },
  { en:'to send',              lb:'ba3at',             ar:'بعت',         cat:'verb' },
  { en:'to charge',            lb:'sha7an',            ar:'شحن',         cat:'verb' },
  { en:'to download',          lb:'7ammal',            ar:'حمّل',         cat:'verb' }
];

const PHONE_PHRASES = [
  { en:'Hello? (answering)',           lb:'Aloh?',                    ar:'ألو؟' },
  { en:'Who is this?',                 lb:'Min ma3i?',                ar:'مين معي؟' },
  { en:'It\'s me, [name].',            lb:'Ana, [name].',             ar:'أنا، [الاسم].' },
  { en:'Can you hear me?',             lb:'3am tesma3ne?',            ar:'عم تسمعني؟' },
  { en:'The line is bad.',             lb:'el khaT mish mneh.',       ar:'الخط مش منيح.' },
  { en:'Call me back, please.',        lb:'kalmne, plz.',             ar:'كلّمني، بليز.' },
  { en:'I\'ll call you later.',        lb:'ba3deen bkalmak.',         ar:'بعدين بكلمك.' },
  { en:'I missed your call.',          lb:'fatetne mkalamtak.',       ar:'فاتتني مكالمتك.' },
  { en:'Send me your location.',       lb:'ba3atli locayshenak.',     ar:'بعتلي لوكيشنك.' },
  { en:'Did you get my message?',      lb:'wesletak rsalte?',         ar:'وصلتك رسالتي؟' },
  { en:'I sent you a WhatsApp.',       lb:'ba3atelak 3al WhatsApp.',  ar:'بعتلك عالواتساب.' },
  { en:'My phone died.',               lb:'mat el telefon.',          ar:'مات التلفون.' },
  { en:'I\'m out of credit.',          lb:'khelsen el rasid.',        ar:'خلصان الرصيد.' },
  { en:'My battery is at 5%.',         lb:'el baTariye 3andi 5%.',    ar:'البطارية عندي ٥٪.' },
  { en:'I\'ll text you the address.',  lb:'bkatebelak el 3enwen.',    ar:'بكتبلك العنوان.' }
];

const SMS_ABBREVS = [
  { abbrev:'aw',     full:'aw',           meaning:'or'             },
  { abbrev:'b3den',  full:'ba3deen',      meaning:'later / then'   },
  { abbrev:'ba3',    full:'ba3id',        meaning:'still / yet'    },
  { abbrev:'2lk',    full:'2lak',         meaning:'I told you'     },
  { abbrev:'3aleyk', full:'3aleek',       meaning:'on you / your turn' },
  { abbrev:'mn shi', full:'mish shi',     meaning:'no big deal'    },
  { abbrev:'7bb',    full:'7abib',        meaning:'love (term of endearment)' },
  { abbrev:'tsl',    full:'taSel',        meaning:'connect / ring me' },
  { abbrev:'mafi',   full:'ma fi',        meaning:'there isn\'t'    },
  { abbrev:'3njd',   full:'3al jadd',     meaning:'seriously / for real' },
  { abbrev:'walaw',  full:'walaw',        meaning:'come on, no problem' },
  { abbrev:'ymrd',   full:'ya merdele',   meaning:'oh my god (mild)' }
];

const PH_DRILL = [
  { q:'How do you say "Hello?" when answering the phone?',
    options:['Marhaba','Aloh?','Ahla','Yalla'], answer:1 },
  { q:'"My phone died" in Lebanese:',
    options:['mat el telefon','el telefon harban','xalas el telefon','baToul el telefon'], answer:0 },
  { q:'"Send me your location" — choose the natural phrase:',
    options:['ba3atli el wEn','ba3atli locayshenak','wenak ba3at','sho 3enwenak'], answer:1 },
  { q:'SMS "b3den" stands for:',
    options:['baddi','ba3deen','baba','before'], answer:1 },
  { q:'"3njd" in chat means:',
    options:['only now','at night','seriously, for real','again'], answer:2 },
  { q:'A "shaa7en" is a:',
    options:['screen','battery','charger','signal'], answer:2 },
  { q:'"Did you get my message?" =',
    options:['ba3atli rsale?','wesletak rsalte?','smei3etni?','fhemtne?'], answer:1 },
  { q:'"I\'m out of credit" =',
    options:['xalsen el baTariye','khelsen el rasid','ma fi shabake','ma fi internet'], answer:1 }
];

// ============ FLIRTING & COMPLIMENTS ============
const COMPLIMENTS = [
  // Looks (m → f)
  { cat:'looks_to_f', en:'You\'re beautiful.',           lb:'inti 7elwe.',        ar:'إنتي حلوة.' },
  { cat:'looks_to_f', en:'You look stunning today.',     lb:'inti rou3a el yawm.',ar:'إنتي روعة اليوم.' },
  { cat:'looks_to_f', en:'Your smile is amazing.',       lb:'btisamtek rou3a.',   ar:'بتسامتك روعة.' },
  { cat:'looks_to_f', en:'Your eyes are like the sea.',  lb:'3yunek metl el ba7r.',ar:'عيونك متل البحر.' },
  // Looks (f → m)
  { cat:'looks_to_m', en:'You\'re handsome.',            lb:'inta 7elo.',         ar:'إنت حلو.' },
  { cat:'looks_to_m', en:'You look great today.',        lb:'inta rou3a el yawm.',ar:'إنت روعة اليوم.' },
  { cat:'looks_to_m', en:'You have such a strong smile.',lb:'btisamtak 2awiye.',  ar:'بتسامتك قوية.' },
  // Personality
  { cat:'personality', en:'You\'re so kind.',            lb:'inta/inti kteer Tayyeb/Tayybe.',ar:'إنت كتير طيّب/طيّبة.' },
  { cat:'personality', en:'You make me laugh.',          lb:'btDa77ekne.',        ar:'بتضحكني.' },
  { cat:'personality', en:'I love your energy.',         lb:'b7eb Ta2tak.',       ar:'بحب طاقتك.' },
  { cat:'personality', en:'You\'re so sweet.',           lb:'inta/inti kteer 7elo/7elwe.',ar:'إنت كتير حلو/حلوة.' },
  { cat:'personality', en:'You have a good heart.',      lb:'2albak/2albek 2lb Tayyeb.',ar:'قلبك قلب طيّب.' },
  // Skills
  { cat:'skills', en:'You\'re so smart.',                lb:'inta/inti kteer zaki/zakiye.',ar:'إنت كتير ذكي/ذكية.' },
  { cat:'skills', en:'You\'re really talented.',         lb:'inta/inti mawhoob/mawhoube.',ar:'إنت موهوب/موهوبة.' },
  { cat:'skills', en:'I admire your work.',              lb:'b3jebne shoghlak/shoghlek.',ar:'بيعجبني شغلك.' },
  // Romantic (gentle)
  { cat:'romantic', en:'I think about you.',             lb:'3am fakker fik/fiki.',ar:'عم فكّر فيك/فيكي.' },
  { cat:'romantic', en:'I miss you.',                    lb:'mishta2lak / mishta2lek.',ar:'مشتاقلك / مشتاقلك.' },
  { cat:'romantic', en:'You make my day better.',        lb:'btsenne nahari.',    ar:'بتسنّي نهاري.' },
  { cat:'romantic', en:'I want to see you.',             lb:'baddi shoufak/shoufek.',ar:'بدي شوفك.' },
  { cat:'romantic', en:'I love you.',                    lb:'b7ebbak / b7ebbek.', ar:'بحبك / بحبك.' },
  // Strong / passionate
  { cat:'romantic', en:'My heart is with you.',          lb:'2albe ma3ak/ma3ek.', ar:'قلبي معك.' },
  { cat:'romantic', en:'You are my whole world.',        lb:'inta/inti dene2.',   ar:'إنت دنيتي.' },
  // Pickup line / opener
  { cat:'opener', en:'Have we met before?',              lb:'tla2eyna 2bel?',     ar:'تلاقينا قبل؟' },
  { cat:'opener', en:'Can I buy you a coffee?',          lb:'fini je2ebik fenjen 2ahwe?',ar:'فيني جيبك فنجان قهوة؟' },
  { cat:'opener', en:'What\'s your name?',               lb:'shu esmak/esmek?',   ar:'شو اسمك؟' },
  { cat:'opener', en:'Are you from Beirut?',             lb:'inta/inti men Beirut?',ar:'إنت من بيروت؟' }
];

const FLIRT_TIPS = [
  '🌹 In Lebanon, compliments are common between friends — calling a friend "7abibi" or "7abibte" is casual, not romantic.',
  '☕ Ask someone for coffee ("fenjen 2ahwe") as the universal first move — low-stakes, culturally accepted.',
  '🌙 "ya 2amar" (oh moon) and "ya rou7i" (oh my soul) are romantic but very strong — save for someone you\'re serious about.',
  '👀 Direct eye contact + a slight smile reads as flirty. Sustained staring without smiling reads as intense or rude.',
  '👨‍👩 Many families are conservative; meeting parents early is a serious signal.',
  '💬 WhatsApp-first dating is normal. Voice notes are common; long calls feel intimate.',
  '🍷 Casual dating culture varies sharply by region: Beirut has nightlife dating; villages tend toward family-introduction.',
  '🎶 Sending a song lyric is a classic Lebanese flirt move. Fairuz lyrics = romantic, Najwa Karam = playful.'
];

const FC_DRILL = [
  { q:'Compliment a woman: "You\'re beautiful":',
    options:['inta 7elo','inti 7elwe','inta jameel','inti jameele'], answer:1 },
  { q:'"I miss you" (to a woman):',
    options:['mishta2lak','mishta2lek','b7ebbek','baddi shoufek'], answer:1 },
  { q:'"Can I buy you a coffee?" =',
    options:['fini je2ebik 2ahwe','baddi 2ahwe','khod 2ahwe','jib 2ahwe'], answer:0 },
  { q:'Calling a friend "7abibi" means:',
    options:['my love (always romantic)','my friend (casual)','my brother','my king'], answer:1 },
  { q:'Strong romantic phrase "ya rou7i" means:',
    options:['my friend','my mind','my soul','my heart'], answer:2 },
  { q:'Compliment "btDa77ekne" =',
    options:['You amaze me','You make me laugh','You confuse me','You inspire me'], answer:1 },
  { q:'"Inta dene2" =',
    options:['You\'re my coffee','You\'re my whole world','You\'re my evening','You\'re my luck'], answer:1 },
  { q:'In Lebanese dating culture, a song lyric over text is:',
    options:['rude','too forward','a classic flirt move','only for marriage'], answer:2 }
];
