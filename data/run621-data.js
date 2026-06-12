// R621 — NEW FEATURE: Lebanese Daily Routines & Time Expressions (dly)

const DLY_CATS = [
  { id: 'morning',   label: '🌅 Morning' },
  { id: 'daytime',   label: '☀️ Daytime' },
  { id: 'evening',   label: '🌙 Evening' },
  { id: 'time',      label: '⏰ Time Expressions' },
];

const DLY_WORDS = [
  // Morning
  { id: 'dly01', cat: 'morning', ar: 'صحّى', tr: 'sa77a', en: 'Woke up / woke (someone)', note: '"sa77it bekir" = I woke up early. "sa77ini" = wake me up.' },
  { id: 'dly02', cat: 'morning', ar: 'فطر', tr: 'faTar', en: 'Had breakfast / broke fast', note: '"faTart?" = did you have breakfast? Root: فطر (break fast).' },
  { id: 'dly03', cat: 'morning', ar: 'الفطور', tr: 'l-fuTur', en: 'Breakfast', note: '"2akalt l-fuTur?" = did you eat breakfast?' },
  { id: 'dly04', cat: 'morning', ar: 'اغتسل', tr: 'ightasal', en: 'Showered / washed up', note: '"ightasalt w-tla2ta" = I showered and got ready.' },
  { id: 'dly05', cat: 'morning', ar: 'لبس', tr: 'libis', en: 'Got dressed / put on clothes', note: '"libis shi kwiyyis" = wear something nice.' },
  { id: 'dly06', cat: 'morning', ar: 'طلع', tr: 'Tili3', en: 'Went out / left the house', note: '"Tili3t min l-beit" = I left home. Also: "Tili3 l-kahraba" = electricity went out.' },
  { id: 'dly07', cat: 'morning', ar: 'وصل', tr: 'wiSil', en: 'Arrived', note: '"wiSilt?" = did you arrive? "wiSilna" = we arrived.' },
  // Daytime
  { id: 'dly08', cat: 'daytime', ar: 'شتغل', tr: 'shtaGal', en: 'Worked', note: '"shtaGalt l-yom?" = did you work today?' },
  { id: 'dly09', cat: 'daytime', ar: 'اتغدّى', tr: 'itGadda', en: 'Had lunch', note: '"wein itGaddeit?" = where did you have lunch?' },
  { id: 'dly10', cat: 'daytime', ar: 'الغدا', tr: 'l-Ghada', en: 'Lunch', note: '"2akl l-Ghada" = lunchtime meal. Biggest meal of the day in Lebanon.' },
  { id: 'dly11', cat: 'daytime', ar: 'استرّاح', tr: 'ista77', en: 'Rested / took a break', note: '"ista77 shway" = rest a little. Lebanese midday nap culture: "2axad Qaylule" (took a nap).' },
  { id: 'dly12', cat: 'daytime', ar: 'راح', tr: 'ra7', en: 'Went (somewhere)', note: '"ra7 3al-jami3a" = went to university. Very common movement verb.' },
  { id: 'dly13', cat: 'daytime', ar: 'رجع', tr: 'riji3', en: 'Came back / returned', note: '"riji3t min l-shaGal" = I came back from work.' },
  { id: 'dly14', cat: 'daytime', ar: 'اتصل', tr: 'itTaSal', en: 'Called (on phone)', note: '"itTaSal fiyyi" = he called me. "layk itTaSal fiya" = why did he call me?' },
  // Evening
  { id: 'dly15', cat: 'evening', ar: 'اتعشّى', tr: 'it3asha', en: 'Had dinner', note: '"wein 3am nit3asha?" = where are we having dinner?' },
  { id: 'dly16', cat: 'evening', ar: 'العشا', tr: 'l-3asha', en: 'Dinner', note: 'Evening meal — usually lighter than lunch. "3azamni 3al-3asha" = invited me for dinner.' },
  { id: 'dly17', cat: 'evening', ar: 'تفرّج', tr: 'tfarra2', en: 'Watched (TV/show)', note: '"tfarra2na 3ala serial" = we watched a TV series.' },
  { id: 'dly18', cat: 'evening', ar: 'لعب', tr: 'li3ib', en: 'Played / hung out casually', note: '"nru7 nil3ab tawle?" = shall we go play backgammon?' },
  { id: 'dly19', cat: 'evening', ar: 'نام', tr: 'nam', en: 'Slept / went to sleep', note: '"nam bekir" = went to sleep early. "nam mtarri7" = slept comfortably.' },
  { id: 'dly20', cat: 'evening', ar: 'سهر', tr: 'sihir', en: 'Stayed up late', note: '"sihirna ktir" = we stayed up very late. Lebanese love staying up.' },
  // Time expressions
  { id: 'dly21', cat: 'time', ar: 'هلّق', tr: 'halla2', en: 'Now / right now', note: 'The key Lebanese word for "now". Much more common than "2al-2an". "halla2 bekir" = right now, hurry.' },
  { id: 'dly22', cat: 'time', ar: 'بكرا', tr: 'bukra', en: 'Tomorrow', note: '"bukra b-rou7" = I\'ll go tomorrow. "bukra mn hayk" = soon/eventually (lit: tomorrow from there).' },
  { id: 'dly23', cat: 'time', ar: 'مبارح', tr: 'mbare7', en: 'Yesterday', note: '"mbare7 kint ta3ban" = I was sick yesterday.' },
  { id: 'dly24', cat: 'time', ar: 'هالأسبوع', tr: 'hal-isbu3', en: 'This week', note: '"hal-isbu3 masGhul" = busy this week.' },
  { id: 'dly25', cat: 'time', ar: 'بدرّي', tr: 'b-dri', en: 'Early', note: '"Tili3 b-dri" = left early. Opposite: "mta2akkhir" = late.' },
  { id: 'dly26', cat: 'time', ar: 'متأخر', tr: 'mta2akhkhir', en: 'Late', note: '"3am iji mta2akhkhir" = coming late. Common Lebanese excuse.' },
  { id: 'dly27', cat: 'time', ar: 'على طول', tr: '3ala tul', en: 'Right away / straight away', note: 'In time context: "3ala tul" = immediately. Also means "straight ahead" for directions.' },
  { id: 'dly28', cat: 'time', ar: 'بعدين', tr: 'ba3dein', en: 'Later / afterwards', note: '"ba3dein n7uki" = we\'ll talk later. "ba3dein ba3dein" = way later (dismissive).' },
  { id: 'dly29', cat: 'time', ar: 'هلّق بعدين', tr: 'halla2 ba3dein', en: 'Right now, later / in a moment', note: 'Classic Lebanese response to "when?" = "halla2 ba3dein" (literally: now, later). Means "soon... ish".' },
  { id: 'dly30', cat: 'time', ar: 'مشّي الحال', tr: 'maashi l-7al', en: 'Getting by / it\'s going', note: 'Answer to "kif l-7al?" (how are things?). "maashi l-7al" = things are moving along (not great, not bad).' },
];

const DLY_DRILLS = [
  { q: 'How do you say "I woke up early"?', opts: ['faTart bekir', 'sa77it bekir', 'Tili3t bekir', 'nam bekir'], ans: 1, exp: 'sa77it bekir = I woke up early. sa77a = to wake up. sa77eni = wake me (command).' },
  { q: 'What is "l-fuTur"?', opts: ['Lunch', 'Dinner', 'Breakfast', 'Snack'], ans: 2, exp: 'l-fuTur = breakfast. From root meaning to break fast. "faTart?" = did you have breakfast?' },
  { q: 'How do you say "I went to work"?', opts: ['riji3t min l-shaGal', 'ra7t 3al-shaGal', 'shtaGalt l-yom', 'wiSilt l-shaGal'], ans: 1, exp: 'ra7t 3al-shaGal = I went to work. ra7 = went. 3al = to the.' },
  { q: 'What does "halla2" mean?', opts: ['Tomorrow', 'Yesterday', 'Later', 'Now / right now'], ans: 3, exp: 'halla2 = now, right now. The key Lebanese word for "now" — more common than classical 2al-2an.' },
  { q: 'How do you say "we stayed up late"?', opts: ['nimna bekir', 'sihirna ktir', 'ista77na ktir', 'tfarra2na ktir'], ans: 1, exp: 'sihirna ktir = we stayed up very late. sihir = to stay up, not sleep.' },
  { q: 'What does "mbare7" mean?', opts: ['Tomorrow', 'Now', 'Yesterday', 'Last week'], ans: 2, exp: 'mbare7 = yesterday. "mbare7 kint ta3ban" = I was sick yesterday.' },
  { q: 'How do you say "later / afterwards"?', opts: ['halla2', 'ba3dein', '3ala tul', 'b-dri'], ans: 1, exp: 'ba3dein = later, afterwards. "ba3dein n7uki" = we\'ll talk later.' },
  { q: 'What is "it3asha"?', opts: ['Had breakfast', 'Had lunch', 'Had dinner', 'Had a snack'], ans: 2, exp: 'it3asha = had dinner. l-3asha = dinner (the evening meal).' },
  { q: 'How do you say "he came back from work"?', opts: ['ra7 min l-shaGal', 'riji3 min l-shaGal', 'Tili3 min l-shaGal', 'wiSil min l-shaGal'], ans: 1, exp: 'riji3 min l-shaGal = he came back from work. riji3 = returned, came back.' },
  { q: 'What does "mta2akhkhir" mean?', opts: ['Early', 'Right away', 'Late', 'Now'], ans: 2, exp: 'mta2akhkhir = late. "3am iji mta2akhkhir" = coming late. Common Lebanese excuse!' },
  { q: 'How do you say "right away / immediately"?', opts: ['ba3dein', 'mta2akhkhir', 'b-dri', '3ala tul'], ans: 3, exp: '3ala tul = right away, immediately (in time context). Also "straight ahead" for directions.' },
  { q: 'What is the Lebanese meaning of "halla2 ba3dein"?', opts: ['Never', 'Immediately', 'In a moment / soon-ish', 'Much later'], ans: 2, exp: '"halla2 ba3dein" = literally now-later. The classic Lebanese vague answer to "when?" — soon, sometime.' },
  { q: 'How do you say "I watched a TV series"?', opts: ['li3ibna serial', 'tfarra2na 3ala serial', 'sihirna serial', 'it3ashait serial'], ans: 1, exp: 'tfarra2na 3ala serial = we watched a TV series. tfarra2 = watched/looked at something.' },
  { q: 'What does "maashi l-7al" mean?', opts: ['I\'m doing great!', 'Getting by / it\'s going OK', 'I\'m very busy', 'All good!'], ans: 1, exp: '"maashi l-7al" = things are moving along, getting by. Standard Lebanese response meaning "not bad."' },
  { q: 'How do you say "I called him"?', opts: ['ra7t 3andu', 'itTaSalt fiha', 'itTaSalt fih', 'wiSiltu'], ans: 2, exp: 'itTaSalt fih = I called him. itTaSal = to call by phone. fih = him/in him.' },
];

const DLY_TIPS = [
  { title: '"Halla2" — the Lebanese now', body: 'Lebanese "halla2" (now) has a range of urgency. "Halla2!" alone = right this second. "Halla2 ba3dein" = sometime soon. "Ba3dein" alone = later (could be hours). Lebanese time is flexible — plan accordingly.' },
  { title: 'Daily meal rhythm', body: 'Lebanese meal culture: fuTur (breakfast) = light, often kaak or man2oushe on the go. l-Ghada (lunch) = the main meal, often home-cooked. l-3asha (dinner) = lighter, later (8-10pm). Saying "ta3a tkul" (come eat) is hospitality — refusing is rude.' },
  { title: '"Ra7" vs "Tili3" vs "wiSil"', body: 'Three key movement verbs: ra7 = went (toward a destination), Tili3 = went out/left/came out, wiSil = arrived/reached. "ra7 3al-shaGal" = went to work. "Tili3 min l-beit" = left home. "wiSilt?" = did you arrive?' },
  { title: 'Staying up — sihir culture', body: '"Sihir" (staying up) is a Lebanese social activity. "Sahra" = a late-night gathering. Lebanese nights start late — dinner at 9pm, socializing until 1-2am is normal. Asking "kif kenet l-sahra?" = how was the late night?' },
  { title: '"Maashi l-7al" — the Lebanese shrug', body: '"Maashi l-7al" is the Lebanese everyman answer to "how are things?". It doesn\'t mean bad — it means "things are moving, we\'re managing." In hard times, Lebanese say it with pride: we\'re still moving forward.' },
  { title: 'Time words to master', body: 'Core time vocab: halla2 (now), ba3dein (later), bukra (tomorrow), mbare7 (yesterday), b-dri (early), mta2akhkhir (late), 3ala tul (right away), hal-isbu3 (this week). Add these and you can talk about when anything happens.' },
];
