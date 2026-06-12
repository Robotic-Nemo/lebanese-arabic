// R456 — Lebanese Time Expressions (tim)
const TIM_WORDS = [
  // now / immediate
  { ar: 'هلق', tr: 'halla2', en: 'now / right now (colloquial)', cat: 'immediate' },
  { ar: 'هلق هلق', tr: 'halla2 halla2', en: 'right this instant / immediately (doubled for emphasis)', cat: 'immediate' },
  { ar: 'بعدين', tr: 'ba3deen', en: 'later / afterward (often means "never" in practice)', cat: 'immediate' },
  { ar: 'هلأ', tr: 'halla2', en: 'now (alternate spelling)', cat: 'immediate' },
  { ar: 'تق شوي', tr: 'ta2 shwayy', en: 'in a little bit / wait a moment', cat: 'immediate' },
  { ar: 'على طول', tr: '3a Tuul', en: 'right away / immediately / straight away', cat: 'immediate' },
  { ar: 'في الحال', tr: 'fi l-7aal', en: 'at once / immediately (more formal)', cat: 'immediate' },
  // days
  { ar: 'اليوم', tr: 'el youm', en: 'today', cat: 'days' },
  { ar: 'بكرا', tr: 'bukra', en: 'tomorrow (can mean "sometime in the future" informally)', cat: 'days' },
  { ar: 'مبارح', tr: 'mbaari7', en: 'yesterday (Lebanese colloquial)', cat: 'days' },
  { ar: 'اوول امبارح', tr: 'awwil mbaari7', en: 'the day before yesterday', cat: 'days' },
  { ar: 'بعد بكرا', tr: 'ba3d bukra', en: 'day after tomorrow', cat: 'days' },
  { ar: 'هالأسبوع', tr: 'hal 2isbuug', en: 'this week', cat: 'days' },
  { ar: 'الأسبوع الجاي', tr: 'el 2isbuug el jaay', en: 'next week', cat: 'days' },
  { ar: 'الأسبوع اللي فات', tr: 'el 2isbuug elli faat', en: 'last week', cat: 'days' },
  // days of week
  { ar: 'الاثنين', tr: 'el itneen', en: 'Monday', cat: 'weekdays' },
  { ar: 'الثلاثاء', tr: 'et-talaata', en: 'Tuesday', cat: 'weekdays' },
  { ar: 'الاربعاء', tr: 'el arba3a', en: 'Wednesday', cat: 'weekdays' },
  { ar: 'الخميس', tr: 'el khamiis', en: 'Thursday', cat: 'weekdays' },
  { ar: 'الجمعة', tr: 'el jum3a', en: 'Friday (holy day for Muslims; market/gathering day)', cat: 'weekdays' },
  { ar: 'السبت', tr: 'es-sabt', en: 'Saturday', cat: 'weekdays' },
  { ar: 'الأحد', tr: 'el a7ad', en: 'Sunday (holy day for Christians)', cat: 'weekdays' },
  // time of day
  { ar: 'الصبح', tr: 'eS-Sobe7', en: 'the morning (Lebanese)', cat: 'time-of-day' },
  { ar: 'بالصبح', tr: 'biS-Sobe7', en: 'in the morning', cat: 'time-of-day' },
  { ar: 'الضهر', tr: 'ed-Dohr', en: 'noon / midday', cat: 'time-of-day' },
  { ar: 'العصر', tr: 'el 3aSir', en: 'late afternoon (3-5pm)', cat: 'time-of-day' },
  { ar: 'المسا', tr: 'el masa', en: 'the evening / the night', cat: 'time-of-day' },
  { ar: 'بالليل', tr: 'bil leel', en: 'at night / in the night', cat: 'time-of-day' },
  { ar: 'نص الليل', tr: 'noss el leel', en: 'midnight (literally: half the night)', cat: 'time-of-day' },
  // duration / how long
  { ar: 'صارلي', tr: 'Saarli', en: 'I\'ve been here/doing this for... (time passed for me)', cat: 'duration' },
  { ar: 'منيين', tr: 'mneen', en: 'since (from when)', cat: 'duration' },
  { ar: 'من إمتى', tr: 'min 2iimta', en: 'since when? / how long has it been?', cat: 'duration' },
  { ar: 'شوي شوي', tr: 'shwayy shwayy', en: 'little by little / slowly slowly', cat: 'duration' },
  { ar: 'بس شوي', tr: 'bass shwayy', en: 'just a little while', cat: 'duration' },
  { ar: 'كتير', tr: 'ktiir', en: 'a lot / long time (context: "waited a long time")', cat: 'duration' },
  // seasons & year
  { ar: 'هالسنة', tr: 'hal sene', en: 'this year', cat: 'year' },
  { ar: 'السنة الجاية', tr: 'es-sene el jaaye', en: 'next year', cat: 'year' },
  { ar: 'السنة اللي فاتت', tr: 'es-sene elli faatat', en: 'last year', cat: 'year' },
  { ar: 'من زمان', tr: 'min zamaan', en: 'long ago / for a long time / ages ago', cat: 'year' },
  { ar: 'زمان', tr: 'zamaan', en: 'in the old days / once upon a time', cat: 'year' },
  { ar: 'رح', tr: 'ra7', en: 'will / going to (future marker)', cat: 'year' },
  { ar: 'كان', tr: 'kaan', en: 'was / used to be (past marker)', cat: 'year' },
];

const TIM_DRILLS = [
  {
    q: 'Your Lebanese friend says "khalliini 3a Tuul." What are they promising?',
    opts: ['"leave me alone immediately"', '"I\'ll come right away / I\'ll do it immediately"', '"I\'ll stay for a while longer"', '"I need more time"'],
    correct: 1,
    note: '"3a Tuul" (straight away / immediately) is one of the most useful Lebanese time expressions. "Khalliini 3a Tuul" = let me [come/do it] right away. But like "inshalla," Lebanese time expressions have cultural nuance: "3a Tuul" said seriously = genuinely immediately. Said while distracted = maybe 20 minutes. Context matters. Its opposite is "ba3deen" (later) — which can mean 5 minutes to never. Lebanese people understand that time is often flexible, and "3a Tuul" vs "ba3deen" signals urgency level, not precise timing.'
  },
  {
    q: 'What does "Saarli" (صارلي) mean and how is it used in Lebanese?',
    opts: ['"I was here" (past tense only)', '"it\'s been [time] for me — I\'ve been here/waiting/doing this for a duration"', '"I arrived just now"', '"I am ready"'],
    correct: 1,
    note: '"Saarli" (it has happened to me / it has been for me) is one of Lebanese Arabic\'s most useful grammatical constructions. It means "it\'s been [duration] since I [started]." Examples: "Saarli saa3a mista3nin" (I\'ve been waiting for an hour). "Saarli telt sniim b-Beirut" (I\'ve been in Beirut for three years). "Saarlo saa3a byintar" (he\'s been waiting for an hour). It uses personal suffixes: Saarlo (him), Saarla (her), Saarlon (them), Saarnak (you-m), Saarna (us). Extremely common in daily speech — more natural than saying "since [time]" in other structures.'
  },
  {
    q: 'What does "bukra" (بكرا) really mean in Lebanese Arabic?',
    opts: ['precisely tomorrow at a set time', '"tomorrow" — but culturally can mean "someday / eventually / not now"', '"in one week"', '"after work hours"'],
    correct: 1,
    note: '"Bukra" is one of the most culturally loaded Lebanese words. Literally = tomorrow. Practically = "not right now, at some indefinite future point." "Bukra" in Lebanese culture has become almost a philosophical stance: things will happen eventually, planning rigidly causes stress. Diaspora Lebanese joke that "bukra fil mishmish" (tomorrow when the apricots ripen — apricots being seasonal and unpredictable) means "never." The Lebanese saying "bukra byit7assan el 7aal" (tomorrow things will improve) captures both genuine optimism and the tendency to defer. Context separates literal bukra from vague bukra.'
  },
  {
    q: 'What is "ba3deen" (بعدين) and what does it signal socially?',
    opts: ['"a long time ago"', '"later / afterward" — often used to defer or avoid without saying no directly', '"immediately / right now"', '"in the morning"'],
    correct: 1,
    note: '"Ba3deen" (later / afterward) is the socially powerful counterpart to "3a Tuul" (right away). "Ba3deen" signals: I acknowledge your request but I\'m not doing it now. The degree of deferral depends on context and tone: said briskly = genuinely soon. Said dismissively = much later. Said repeatedly = avoidance. Lebanese use "ba3deen" as a social buffer to avoid conflict or direct refusal. "Mniimshi ba3deen" (we\'ll go later) can mean: later today, next week, or never. Combining with "inshalla" — "ba3deen inshalla" — is one of the clearest signals that something isn\'t happening.'
  },
  {
    q: 'How do you say "I\'ve been in Lebanon for 6 months" using the "Saarli" construction?',
    opts: ['"ana kint fi Lubnaan sitte ashhur"', '"Saarli sittit ishhur b-Lubnaan"', '"min sittit ishhur jeet Lubnaan"', '"ana sakkant Lubnaan sitte ashhur"'],
    correct: 1,
    note: '"Saarli sittit ishhur b-Lubnaan" is the natural Lebanese way. Breaking it down: Saarli = it\'s been for me / I\'ve been. Sittit ishhur = six months (note: "sitte" before consonant → "sittit" before vowel, but common speech varies). B-Lubnaan = in Lebanon. The construction is [Saar + personal suffix] + [duration] + [location/activity]. Other examples: "Saarli sa3a sta3nen" (I\'ve been waiting an hour). "Saarla shahr mriDa" (she\'s been sick for a month). Master this construction and you sound genuinely Lebanese.'
  },
  {
    q: 'What\'s the difference between "el youm" and "halla2" in Lebanese?',
    opts: ['"el youm" = today (the full day), "halla2" = right now (this moment)', 'they are identical', '"halla2" = today, "el youm" = now', '"el youm" = morning, "halla2" = evening'],
    correct: 0,
    note: '"El youm" (today — the day) vs "halla2" (now — this moment) is a key distinction. "Mniimshi el youm?" = shall we go today (at some point today)? "Mniimshi halla2?" = shall we go right now? "Ana ta3baan el youm" = I\'m tired today (general statement about the day). "Ana ta3baan halla2" = I\'m tired right now. "Halla2" is more urgent. "Halla2 halla2" (doubled) intensifies even further: right this second. Lebanese speech uses "halla2" very frequently — it\'s the most natural "now" in conversation. "El youm" is the day container; "halla2" is the precise moment.'
  },
  {
    q: 'What does "min zamaan" (من زمان) mean and why is it emotionally powerful for Lebanese?',
    opts: ['"from now on"', '"long ago / for so long / ages ago" — carries nostalgia for Lebanon\'s better times', '"recently / these days"', '"in a short time"'],
    correct: 1,
    note: '"Min zamaan" (from long ago / for ages / a long time ago) is deeply nostalgic in Lebanese usage. "Min zamaan ma shift-ak" (it\'s been so long since I\'ve seen you). "Zamaan kaan fi kahraba" (in the old days there was electricity). "Zamaan" alone means "the old days" — often a golden era before the civil war, before the crisis. Lebanese diaspora frequently use "min zamaan" for the gap between visits home: "Min zamaan ma rji3t" (I haven\'t been back for so long). It carries longing, nostalgia, and the sense that time has taken something away. The opposite: "3a youm" (just recently).'
  },
  {
    q: 'What does "taq shwayy" (تق شوي) mean and when do Lebanese use it?',
    opts: ['"stop immediately"', '"wait a little bit / in just a moment"', '"a long time passed"', '"hurry up / be quick"'],
    correct: 1,
    note: '"Ta2 shwayy" (wait a little / in a bit) is the gentler Lebanese version of asking someone to wait. "Ta2" = wait/pause. "Shwayy" = a little. Together: just a moment please. Used when you\'re not ready yet, finishing something, or need a brief delay. Can be said to a person directly: "ta2 shwayy, ana lissa maa khlaSSt" (wait a bit, I\'m not done yet). Or as self-talk when rushing: "ta2 shwayy, bkhallSS bil7een" (just a moment, I\'ll finish in a sec). More polite than "Istanna!" (wait!) alone. The Lebanese expression "3 minutes" (telet d2aaye2) famously means 20-30 minutes in practice.'
  },
  {
    q: 'How does Lebanese Arabic mark the future tense?',
    opts: ['"ba3deen" is always used for future', 'The particle "ra7" (رح) placed before the verb marks the future', '"halla2" is used for future actions', 'Same verb form as present, no special marker'],
    correct: 1,
    note: '"Ra7" (will / going to) is Lebanese Arabic\'s simple future marker — placed directly before the verb. "Ra7 ruu7" (I will go). "Ra7 tiji?" (will you come?). "Ra7 yiji bukra" (he\'ll come tomorrow). "Ra7" is shortened from "rah" — equivalent to English "gonna." It\'s much simpler than MSA\'s سَيَ prefix or سَوْفَ particle. Combined with time words: "ra7 ruu7 ba3d bukra" (I\'ll go the day after tomorrow). "Ra7" is also used for near-future promises: "ra7 khalliik" (I\'ll sort you out). One of the first things to master for fluent Lebanese speech.'
  },
  {
    q: 'What is the Lebanese expression for "long ago / in the old days" that carries nostalgic weight?',
    opts: ['"zaman el akhdar" (the green time)', '"min zamaan" or just "zamaan"', '"bukra fil mishmish"', '"ayyam el na7s" (the unlucky days)'],
    correct: 1,
    note: '"Zamaan" or "min zamaan" is the nostalgic time portal in Lebanese speech. "Zamaan kaan Beirut 7ilwe" (in the old days Beirut was beautiful). "Ayyet zamaan" (which era / those were the days). "Ayyam zamaan" (the days of old / the good old days). Lebanese use "zamaan" to reference: pre-civil war Lebanon (1975), the economic golden years (1950s-70s), childhood, or any idealized past. "Zamaan ma kaan" (in a time that no longer exists) captures loss. For Lebanese diaspora: "zamaan" often refers to the Lebanon they knew before leaving — a country that exists in memory but has changed dramatically.'
  },
];

const TIM_TIPS = [
  {
    title: '⏰ Lebanese Time Culture: "Rubber Time"',
    body: 'Lebanese time has earned the nickname "rubber time" — it stretches. A dinner "at 8pm" means guests arrive between 8:30-10pm. "Ba3deen" (later) is indefinite. "3a Tuul" (right away) has a range. This isn\'t rudeness — it\'s a cultural orientation where social interaction trumps clockwork precision. Exceptions: work meetings and professional contexts have tightened significantly. Airport pickups are punctual (Lebanese hospitality demands it). "3ala wa2t-o" (on its time / punctual) is actually praised, suggesting it\'s noteworthy. When scheduling with Lebanese friends: build in time cushion, communicate urgency level clearly, and "halla2 on the way" (I\'m on my way right now) means 15-30 minutes.'
  },
  {
    title: '📅 Days of the Week in Lebanese Context',
    body: 'Lebanese days have cultural weight: Friday (jum3a) is the Muslim holy day — banks, some businesses closed. Sunday (a7ad) is the Christian holy day — significant in Lebanon\'s mixed culture. Thursday night (lelet el khamiis) is a major going-out night in Beirut\'s bar/club scene — "lelet el khamiis" = the Thursday night. Saturday (sabt) is the main social day. "Weekend" in Lebanese is typically Friday-Saturday for Muslim-majority contexts, Saturday-Sunday for Christian-majority areas — reflecting Lebanon\'s sectarian geography. Public holidays follow both Islamic calendar (Ramadan end, Eid) and Christian calendar (Christmas, Easter) — Lebanon uniquely celebrates both.'
  },
  {
    title: '🌅 Morning Greetings by Time of Day',
    body: 'Lebanese greetings are time-coded: "Saba7 el kheer" (good morning) → reply "Saba7 en-nuur" (morning of light). "Masa el kheer" (good evening) → reply "Masa en-nuur." Timing matters: "Saba7 el kheer" is for sunrise to roughly noon. "Masa el kheer" from about 3pm onward. No precise equivalent for "good afternoon" — most say "masa el kheer" from early afternoon. "TSabe7 3a kheer" (may you wake to goodness — said before sleep) → reply "wa inta/inti min ahlo" (and you from its people). These time-specific greetings signal cultural literacy — using the right one shows you understand Lebanese social rhythms.'
  },
  {
    title: '🔄 Past Tense: "Kaan" and Time Markers',
    body: 'Lebanese past tense uses "kaan" (was/used to be) as an auxiliary for various time senses: "kaan" before present tense = used to / was doing: "kaan byiiktob" (he was writing / he used to write). "Kaan" before perfect = had done: "kaan khatab" (he had finished). Time markers that signal past in Lebanese: "mbaari7" (yesterday), "min zamaan" (long ago), "l-awwil" (before / in the old days), "zaman" (once upon a time). Contrast with present: "halla2" (now), "el youm" (today), and future: "bukra" (tomorrow), "ra7" + verb. Mastering these three zones — past/present/future — with their Lebanese markers transforms basic communication into fluent storytelling.'
  },
  {
    title: '🎯 Time Expressions for Practical Situations',
    body: 'Essential time expressions for real situations: Running late: "3am iji" (I\'m coming). "Saarli shwayy mista2khir" (I\'m a little late). "3 d2aaye2" (3 minutes — Lebanese 3 minutes = 15-30 min). Making plans: "mniimshi ma3 ba3D?" (shall we go together?). "Shu mawaa3id-ak?" (what are your appointments/plans?). "Ana 7aaD" (I\'m ready). Asking how long: "2addeysh ra7 yaakhod?" (how long will it take?). "Min 2iimta?" (since when?). "Laa-2iimta?" (until when?). Time for farewells: "laa-l-i2a2" (until we meet). "Laa-m2an alla" (to when God wills = see you when I see you). Lebanese timing vocabulary is less about precision and more about managing social expectations gracefully.'
  },
];

const TIM_ABOUT = 'Lebanese time is a philosophical system, not just a measurement system. "Halla2" (now), "ba3deen" (later), "bukra" (tomorrow), and "min zamaan" (long ago) aren\'t just words — they\'re cultural stances toward urgency, planning, hope, and memory. A Lebanese who says "halla2" means now. A Lebanese who says "ba3deen" means: not now, and I won\'t commit to when. A Lebanese who says "bukra" is either making a promise or invoking the future\'s uncertainty. "Min zamaan" carries the weight of a country that has seen golden eras and catastrophes. Understanding Lebanese time expressions means understanding Lebanese psychology — the flexibility that allows survival, the nostalgia that maintains identity, and the "inshalla" that keeps hope alive across generations.';
