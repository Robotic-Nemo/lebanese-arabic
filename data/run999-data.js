// R999 — NEW FEATURE: Lebanese Night Out & Going Out Culture (ngo)
const NGO_WORDS = [
  { ar: 'ليلة', tr: 'leile', en: 'night / a night out' },
  { ar: 'ملهى', tr: 'malha', en: 'nightclub / entertainment venue' },
  { ar: 'بار', tr: 'baar', en: 'bar' },
  { ar: 'روزانا', tr: 'rouzaana', en: 'Rouzan — famous Beirut nightlife district' },
  { ar: 'جميزة', tr: 'jemayze', en: 'Gemmayzeh — trendy bar street in Beirut' },
  { ar: 'مار مخايل', tr: 'maar mikhayil', en: 'Mar Mikhael — hip neighborhood with bars & clubs' },
  { ar: 'بعلبك', tr: 'ba3lebek', en: 'Baalbeck — ancient Roman ruins, also famous festival venue' },
  { ar: 'حفلة', tr: '7afle', en: 'party / concert / event' },
  { ar: 'دي جي', tr: 'dii jay', en: 'DJ' },
  { ar: 'بيشيل', tr: 'biishil', en: 'cover charge / entrance fee (Lebanese slang)' },
  { ar: 'شيشة', tr: 'shiisha', en: 'hookah / shisha (at bars and lounges)' },
  { ar: 'عرق', tr: '3araq', en: 'arak — Lebanese anise spirit, the national drink' },
  { ar: 'كسك', tr: 'kaasak', en: 'cheers! / to your health!' },
  { ar: 'دولة', tr: 'dawle', en: 'round (of drinks) — "we\'re doing a round"' },
  { ar: 'تعا نرقص', tr: 'ta3a nruqoS', en: 'come dance! — invitation to the dance floor' },
  { ar: 'أنا بدفع', tr: 'ana bidfaa3', en: 'I\'m paying — treating friends' },
  { ar: 'برّا نحكي', tr: 'barra ne7ki', en: 'let\'s talk outside — too loud inside' },
  { ar: 'كم الساعة بيسكروا', tr: 'kam issa3a biiskrou', en: 'what time do they close?' },
  { ar: 'في طابور', tr: 'fi Taabour', en: 'there\'s a queue / line at the door' },
  { ar: 'عندن ريزيرفيشن', tr: '3andon reserveishon', en: 'they have a reservation' },
  { ar: 'موسيقى عالية', tr: 'musiiqaa 3aalyeh', en: 'music is too loud' },
  { ar: 'تاكسي', tr: 'taaksi', en: 'taxi — calling a ride after the night out' },
  { ar: 'سهران', tr: 'sahraane', en: 'staying up late / partying all night' },
  { ar: 'مبسوط', tr: 'mabSouT', en: 'happy / having a good time' },
  { ar: 'نفسي', tr: 'nafsi', en: 'I feel like / I want — "nafsi 2uTlaa3" (I want to go out)' },
  { ar: 'رفقا', tr: 'rufqaa', en: 'friends / crew — going out with the crew' },
  { ar: 'تنسيقة', tr: 'tansiiqe', en: 'getting dressed up / coordinating outfits for a night out' },
  { ar: 'آخر نفر', tr: 'aakhir nafar', en: 'last one standing — the one who stays till closing' },
  { ar: 'الليل لساتو', tr: 'il-leil lasaato', en: 'the night is still young' },
  { ar: 'صبّحنا', tr: 'SabbA7na', en: 'we partied till morning — "we greeted the dawn"' }
];

const NGO_DRILLS = [
  { q: 'How do you say "cheers" in Lebanese?', opts: ['kaasak', '3araq', 'malha', 'leile'], ans: 0 },
  { q: 'Which Beirut neighborhood is famous for its bar street?', opts: ['ba3lebek', 'jemayze', 'maar mikhayil', 'Both b & c'], ans: 3 },
  { q: 'What is "3araq"?', opts: ['A cocktail bar', 'Lebanese anise spirit', 'Cover charge', 'Dance floor'], ans: 1 },
  { q: 'How do you invite someone to dance?', opts: ['kaasak!', 'barra ne7ki', 'ta3a nruqoS', 'fi Taabour'], ans: 2 },
  { q: '"SabbA7na" means:', opts: ['Good morning ritual', 'We partied till morning', 'We left early', 'We drank too much'], ans: 1 },
  { q: 'What is a "7afle"?', opts: ['A type of arak', 'A cover charge', 'A party or concert', 'A nightclub district'], ans: 2 },
  { q: '"il-leil lasaato" means:', opts: ['The night is over', 'The night is still young', 'Last night', 'Midnight'], ans: 1 },
  { q: 'How do you ask what time the place closes?', opts: ['fi Taabour?', 'kam issa3a biiskrou?', 'kaasak?', 'ta3a nruqoS?'], ans: 1 },
  { q: '"Mabsout" means:', opts: ['Tired', 'Sober', 'Having a good time', 'Going home'], ans: 2 },
  { q: 'What does "barra ne7ki" literally mean?', opts: ['Let\'s get a drink', 'Let\'s go outside to talk', 'I\'m paying', 'Call a taxi'], ans: 1 },
  { q: '"Dawle" in a bar context means:', opts: ['The government', 'A round of drinks', 'The DJ', 'VIP table'], ans: 1 },
  { q: 'What is "tansiiqe" before a night out?', opts: ['Booking a table', 'Getting dressed up / coordinating looks', 'Paying the bill', 'The lineup of DJs'], ans: 1 },
  { q: '"Sahraane" describes someone who:', opts: ['Went to bed early', 'Is staying up late / partying all night', 'Is sober', 'Called a taxi'], ans: 1 },
  { q: '"Ana bidfaa3" means:', opts: ['I\'m dancing', 'I\'m late', 'I\'m paying', 'I\'m tired'], ans: 2 },
  { q: 'What is "biishil" at a club?', opts: ['A type of drink', 'The DJ\'s set', 'Cover charge / entrance fee', 'A VIP section'], ans: 2 }
];

const NGO_TIPS = [
  'Lebanese nightlife starts late — clubs don\'t fill up until after midnight. "Leile Tawiileh" (long night) is the norm. Pre-gaming at a friend\'s place first is standard.',
  'Gemmayzeh (jemayze) and Mar Mikhael (maar mikhayil) are the heart of Beirut\'s bar scene — street-level, walkable, with terraces. They\'re the spots to say "ta3a nshrab shi" (let\'s get a drink).',
  'Arak (3araq) is THE Lebanese spirit — anise-flavored, served with ice and water (it turns white). Saying "kaasak!" while clinking glasses is mandatory. Never pour your own — let someone else pour for you.',
  'At clubs and rooftop lounges, reservations (reserveishon) and minimum spends are common. Arriving without one means standing in a queue (fi Taabour). Lebanese social hierarchy plays out visibly at the door.',
  'Lebanese nights end at dawn — "SabbA7na" (we stayed till morning) is a badge of honor. The phrase "il-leil lasaato" (the night is still young) is used seriously at 2am. Budget your taxi (taaksi) money before going out.'
];
