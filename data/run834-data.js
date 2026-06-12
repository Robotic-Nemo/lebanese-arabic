// R834 — NEW FEATURE: Lebanese Nightlife & Gemmayzeh Culture (ntf)

const NTF_CATS = ['venues','drinks','vibes','expressions'];

const NTF_WORDS = [
  // venues & districts
  { a: 'جمّيزة', tr: 'Gemmayzeh', en: 'Gemmayzeh — Beirut\'s main nightlife & bar district, always packed', cat: 'venues' },
  { a: 'مار مخايل', tr: 'Mar Mikhael', en: 'Mar Mikhael — trendy bar street, hipster Beirut nightlife hub', cat: 'venues' },
  { a: 'بار', tr: 'baar', en: 'bar — Lebanese nightlife staple, open until dawn', cat: 'venues' },
  { a: 'ملهى', tr: 'mala7a', en: 'nightclub — the full-service Beirut club experience', cat: 'venues' },
  { a: 'حانة', tr: '7aane', en: 'pub / tavern — local dive bar, more intimate than a club', cat: 'venues' },
  { a: 'روف', tr: 'roof', en: 'rooftop bar — Beirut skyline + cocktails, Lebanese summer staple', cat: 'venues' },
  { a: 'بيت الدين', tr: 'beit id-diin', en: 'Beiteddine — site of famous summer music festival', cat: 'venues' },
  // drinks & ordering
  { a: 'كاسة', tr: 'kaase', en: 'glass / drink — "kaase?" = want a drink? the Lebanese opener', cat: 'drinks' },
  { a: 'ويسكي', tr: 'wiski', en: 'whisky — Lebanese nightlife default spirit after arak', cat: 'drinks' },
  { a: 'كوكتيل', tr: 'cocktail', en: 'cocktail — Beirut bars serve elaborate cocktails, world-class scene', cat: 'drinks' },
  { a: 'بيرة', tr: 'biira', en: 'beer — Almaza is the Lebanese national beer', cat: 'drinks' },
  { a: 'ألمازة', tr: 'Almaza', en: 'Almaza — Lebanon\'s iconic national beer brand', cat: 'drinks' },
  { a: 'ربطة', tr: 'rabTa', en: 'a round of drinks — "rabTa" = set up a round for the table', cat: 'drinks' },
  { a: 'بالصحة', tr: 'bil-Se7a', en: '"cheers / to your health" — Lebanese toast with drinks', cat: 'drinks' },
  // nightlife vibes
  { a: 'جلسة ليلية', tr: 'jelse layliyye', en: 'night session — a long night out, could go until sunrise', cat: 'vibes' },
  { a: 'سهرة', tr: 'sehre', en: 'evening out / party — any social gathering after dark', cat: 'vibes' },
  { a: 'عالموسيقى', tr: '3al-musiqa', en: '"on the music" — dancing/vibing to the beat, Lebanese expression', cat: 'vibes' },
  { a: 'هلق بدنا نرقص', tr: 'hala2 bidna nri2os', en: '"now we want to dance" — the moment the mood lifts', cat: 'vibes' },
  { a: 'الجو حلو', tr: 'il-jaww 7elo', en: '"the vibe is good" — Lebanese assessment of whether a night is working', cat: 'vibes' },
  { a: 'عالآخر', tr: '3al-akhir', en: '"to the end / full throttle" — going all out on the dance floor', cat: 'vibes' },
  { a: 'جبلنا الـ DJ', tr: 'jiblna l-DJ', en: '"bring us the DJ" — requesting the music to get louder/better', cat: 'vibes' },
  // expressions
  { a: 'وين رايح الليلة', tr: 'wein raaye7 il-layle', en: '"where are you going tonight?" — standard Beirut pre-night opener', cat: 'expressions' },
  { a: 'بدنا نكمّل', tr: 'bidna nkammil', en: '"we want to continue" — moving from bar to bar or staying out later', cat: 'expressions' },
  { a: 'شو في بكرا', tr: 'shu fi bukra', en: '"what\'s there tomorrow?" — Lebanese rhetorical: nothing stops tonight', cat: 'expressions' },
  { a: 'الليل طويل', tr: 'il-leil Tawiil', en: '"the night is long" — reassurance that there\'s plenty of time to party', cat: 'expressions' },
  { a: 'عالريحة', tr: '3al-ree7a', en: '"let\'s go wherever" — spontaneous Beirut night out with no plan', cat: 'expressions' },
  { a: 'دبلنا الباب', tr: 'dablna l-baab', en: '"we hit the door" — arrived at the club, the night officially begins', cat: 'expressions' },
  { a: 'آخر واحد يطفي النور', tr: 'aakhir wa7ad yiTfi in-nuur', en: '"last one turn off the lights" — staying till closing time', cat: 'expressions' }
];

const NTF_DRILLS = [
  { q: 'What is "Gemmayzeh"?', opts: ['a type of Lebanese cocktail','Beirut\'s main nightlife & bar district','a famous Lebanese singer','a rooftop venue'], ans: 1, exp: '"Gemmayzeh" (جمّيزة) is Beirut\'s original nightlife district — a street lined with bars, restaurants, and clubs. Before the 2020 explosion damaged much of it, it was the epicenter of Beirut\'s legendary party scene. It\'s largely rebuilt and still going.' },
  { q: 'What is "Almaza"?', opts: ['a cocktail bar','a Lebanese nightclub chain','Lebanon\'s iconic national beer brand','a rooftop district'], ans: 2, exp: '"Almaza" (ألمازة) is Lebanon\'s flagship beer — a pilsner brewed since 1933. Ordering "biira" (beer) in Lebanon almost always means Almaza. The bottle is iconic: amber glass, red label, ubiquitous at every bar, restaurant, and beach in Lebanon.' },
  { q: '"Sehre" means...', opts: ['a neighborhood bar','an evening out / any social gathering after dark','a cocktail type','a morning after brunch'], ans: 1, exp: '"Sehre" (سهرة) = an evening gathering — from the Arabic root for "staying awake at night." A sehre can be anything from a quiet house gathering to a massive club night. "Aamilna sehre" = let\'s have a night out. Central to Lebanese social life.' },
  { q: '"Il-jaww 7elo" at a bar means...', opts: ['"the weather is nice"','"the drink is sweet"','"the vibe is good" — night is working out','the music is too loud'], ans: 2, exp: '"Il-jaww 7elo" (الجو حلو) = the atmosphere/vibe is good — "jaww" means weather but in this context means atmosphere/mood. It\'s the Lebanese quality check on a night out. When it\'s said, you stay. When it\'s not said, you consider leaving.' },
  { q: 'What does "bidna nkammil" signal?', opts: ['time to go home','we\'re hungry','we want to continue — going to the next bar or staying later','the DJ should stop'], ans: 2, exp: '"Bidna nkammil" (بدنا نكمّل) = we want to continue — this is the Lebanese night-extension phrase. After a bar closes or the group wants more, someone says "bidna nkammil" and leads the group to the next destination.' },
  { q: '"3al-akhir" on the dance floor means...', opts: ['"I need a break"','"last call for drinks"','"to the end / full throttle" — going all out','the bar is closing'], ans: 2, exp: '"3al-akhir" (عالآخر) = to the maximum — used across Lebanese life to mean "all the way." On the dance floor: dancing with full energy. Also used for driving too fast, eating too much, etc. Lebanese intensity expression.' },
  { q: 'What is "Mar Mikhael"?', opts: ['a Lebanese religious festival','a famous church area that became a trendy bar street','a neighborhood in South Beirut','a cocktail bar chain'], ans: 1, exp: '"Mar Mikhael" (مار مخايل) = Saint Michael — a neighborhood in Beirut that transformed into the hipster/indie bar scene. Named after the church at its center. Smaller, more artisanal bars compared to Gemmayzeh. A younger, alternative crowd.' },
  { q: '"Bil-Se7a" is...', opts: ['a prayer before eating','"cheers / to your health" — Lebanese toast with drinks','asking for the bill','requesting water'], ans: 1, exp: '"Bil-Se7a" (بالصحة) = to your health — the Lebanese toast when raising glasses. It\'s less formal than the classical Arabic "fi Se7etek" but identical in meaning. You\'ll hear it constantly in Beirut bars.' },
  { q: '"Il-leil Tawiil" said during a night out means...', opts: ['"I\'m tired"','"it\'s very late"','"the night is long" — there\'s plenty of time, don\'t rush','the bar closes soon'], ans: 2, exp: '"Il-leil Tawiil" (الليل طويل) = the night is long — a reassurance that the party has just started and leaving early is not necessary. Lebanese nights regularly run until 5-6am. "Il-leil Tawiil" is both a fact and an invitation to stay.' },
  { q: 'What is "rabTa" in Lebanese nightlife?', opts: ['a dance move','a round of drinks for the table','a VIP section','a type of Lebanese cocktail'], ans: 1, exp: '"RabTa" (ربطة) = a round/set — literally "a tie" but colloquially means a round of drinks. "3malna rabTa" = we ordered a round for everyone. Also used in other contexts for a "batch" of something.' },
  { q: '"Wein raaye7 il-layle?" means...', opts: ['"where did you come from?"','"where are you going tonight?" — standard pre-night opener','asking about tomorrow\'s plans','asking about the venue\'s location'], ans: 1, exp: '"Wein raaye7 il-layle?" (وين رايح الليلة؟) = where are you going tonight? — the classic Beirut evening conversation opener. Everyone asks everyone. The answers change: "Gemmayzeh," "Mar Mikhael," "not sure yet," "3al-ree7a." Night planning is fluid.' },
  { q: '"Shu fi bukra?" during a night out is...', opts: ['genuinely asking about tomorrow\'s schedule','"what\'s there tomorrow?" — rhetorical for "nothing stops tonight"','asking about the venue\'s next event','a request for the check'], ans: 1, exp: '"Shu fi bukra?" (شو في بكرا؟) = what is there tomorrow? — rhetorical question meaning "nothing important stops tonight." It\'s the Lebanese way of dismissing concerns about being tired tomorrow. Usually said when someone suggests leaving early.' },
  { q: 'What is a "roof" in Beirut?', opts: ['a type of Lebanese spirit','a traditional café','a rooftop bar — Beirut skyline + cocktails, summer staple','the last floor of a club'], ans: 2, exp: '"Roof" (روف) — borrowed directly from English — refers to rooftop bars, a major part of Beirut\'s summer nightlife. With the sea view and Beirut skyline, rooftop bars in neighborhoods like Monot or Achrafieh are iconic nightlife destinations from April to October.' },
  { q: '"Dablna l-baab" means...', opts: ['"the door is broken"','"we arrived at the club — the night officially begins"','asking to leave','the venue is full'], ans: 1, exp: '"Dablna l-baab" (دبلنا الباب) = we hit/touched the door — arrival at the club or bar. It signals the night has officially started. The phrase is celebratory — there\'s often a small cheer or toast immediately after.' },
  { q: '"Hala2 bidna nri2os" is said when...', opts: ['the music stops','it\'s time to leave','the mood lifts and the group wants to dance','ordering another round'], ans: 2, exp: '"Hala2 bidna nri2os" (هلق بدنا نرقص) = now we want to dance — said when the music, the drinks, and the crowd align. It\'s the moment a sehre transitions from talking to dancing. In Lebanese culture, dancing together is communal and joyful, not an individual act.' }
];

const NTF_TIPS = [
  'Beirut\'s nightlife starts late by any standard — clubs and bars fill up after midnight and peak around 2-3am. Arriving at a Beirut bar at 10pm means you\'re nearly alone. "Il-leil Tawiil" (the night is long) is not just an expression — Thursday through Saturday, venues run until sunrise, sometimes later.',
  '"Sehre" (evening out) can be planned or spontaneous but is almost always social. Lebanese don\'t typically go to bars alone. A sehre means a group, and the group decides direction as the night evolves — from dinner to bar to club, led by "bidna nkammil" (we want to continue) at each stage.',
  'The bill politics of Beirut nightlife are complex. Like restaurants, one person often pays for the whole table (especially at bars). But at clubs, group tabs are common. "Bil-Se7a" (cheers/to your health) is said with every round — it\'s the punctuation mark of Lebanese drinking culture.',
  'Almaza (ألمازة) is Lebanon\'s national beer — a crisp pilsner that pairs with everything from mezze to a club night. "Biira" in Lebanon defaults to Almaza unless specified otherwise. In times of economic crisis, Almaza became a symbol of Lebanese resilience — still brewed, still cold.',
  'Gemmayzeh and Mar Mikhael survived the 2020 Beirut port explosion with serious damage but rebuilt remarkably quickly. The bar scene was running again within months. Lebanese nightlife is understood locally as an act of defiance and resilience — partying through the crisis is a cultural statement, not just entertainment.',
  'Lebanese dancing culture is communal — dabke (group line dance), 3al-musiqa (vibing together), and floor shows are all part of the sehre. When the DJ plays a Lebanese classic or a popular dabke track, everyone joins in regardless of what they were doing. The dance floor becomes a shared moment, not a personal performance.'
];
