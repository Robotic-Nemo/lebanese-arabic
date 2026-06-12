// Run #405 — Lebanese Gestures & Body Language Coach (gst)
// Categories: negation | agreement | impatience | quantity | reactions | greetings

const GST_GESTURES = [
  // negation
  { name: 'Chin flick upward', ar: 'لأ', tr: 'la2', en: 'No (chin tilt up = definitive no)', cat: 'negation' },
  { name: 'Finger wag side to side', ar: 'لأ، لأ', tr: 'la2 la2', en: 'No no (index wag = mild refusal)', cat: 'negation' },
  { name: 'Hand push forward', ar: 'مش هيك', tr: 'mish heeyk', en: 'Not like that / that\'s wrong', cat: 'negation' },
  { name: 'One eyebrow raised + chin tilt', ar: 'مش صحيح', tr: 'mish Sa7ii7', en: 'That\'s not right (skepticism)', cat: 'negation' },
  { name: 'Flat palm facing out', ar: 'وقف', tr: 'wa22if', en: 'Stop / hold on', cat: 'negation' },
  { name: 'Hands crossed in X', ar: 'خلص', tr: 'xalaS', en: 'It\'s over / finished / done', cat: 'negation' },
  { name: 'Index + middle finger wag', ar: 'ما رح', tr: 'ma ra7', en: 'It won\'t happen / no way', cat: 'negation' },
  { name: 'Tongue click + chin tilt', ar: 'أبداً', tr: '2abadan', en: 'Absolutely not / never (strongest no)', cat: 'negation' },
  // agreement
  { name: 'Hand on heart', ar: 'أهلاً وسهلاً', tr: '2ahlan w sahlan', en: 'Welcome (sincere greeting gesture)', cat: 'agreement' },
  { name: 'Thumb up', ar: 'منيح', tr: 'mniH', en: 'Good / nice / okay', cat: 'agreement' },
  { name: 'Kissing fingertips', ar: 'يسلموا', tr: 'yislamu', en: 'Excellent / delicious / amazing', cat: 'agreement' },
  { name: 'Slow single nod', ar: 'أيوا', tr: '2aywa', en: 'Yes (affirmative, often with eye contact)', cat: 'agreement' },
  { name: 'Open hands side to side', ar: 'معقول', tr: 'ma3 2uul', en: 'Makes sense / reasonable', cat: 'agreement' },
  { name: 'Two-cheek air kiss', ar: 'حمار', tr: '7amar', en: 'Greeting kiss — two cheeks is standard Lebanese', cat: 'agreement' },
  { name: 'Flat hand chop on palm', ar: 'والله', tr: 'walla', en: 'I swear / by God (oath emphasis)', cat: 'agreement' },
  { name: 'Raised open palms shrug', ar: 'شو بعمل', tr: 'shuu ba3mil', en: 'What can I do / helpless', cat: 'agreement' },
  // impatience
  { name: 'Rapid finger snap', ar: 'يلا', tr: 'yalla', en: 'Hurry up / let\'s go (snap = speed up)', cat: 'impatience' },
  { name: 'Finger tap on wrist (no watch)', ar: 'وقت', tr: 'wa2t', en: 'Time is passing / you\'re late', cat: 'impatience' },
  { name: 'Fingers together pointing up (wait)', ar: 'لحظة', tr: 'la7za', en: 'One moment / wait (fingers bunched up)', cat: 'impatience' },
  { name: 'Foot tap + eye roll', ar: 'شو هالوقت', tr: 'shuu hal-wa2t', en: 'What is this timing / come on already', cat: 'impatience' },
  { name: 'Hand circles forward rapidly', ar: 'كمّل', tr: 'kammal', en: 'Keep going / continue / wrap it up', cat: 'impatience' },
  { name: 'Index finger to temple spin', ar: 'مجنون', tr: 'majnuun', en: 'Crazy / out of their mind', cat: 'impatience' },
  { name: 'Both palms up bounced up-down', ar: 'شوية شوية', tr: 'shwayy shwayy', en: 'Easy / slow down / calm down', cat: 'impatience' },
  { name: 'Sharp hand drop to thigh', ar: 'خلص', tr: 'xalaS', en: 'Enough / that\'s it / I\'m done talking', cat: 'impatience' },
  // quantity
  { name: 'Pinched fingers (very small)', ar: 'شوية', tr: 'shwayye', en: 'A little / a small amount', cat: 'quantity' },
  { name: 'Arms spread wide', ar: 'كتير', tr: 'ktiir', en: 'A lot / very much / too much', cat: 'quantity' },
  { name: 'Rubbing thumb against fingers', ar: 'مصاري', tr: 'maSaari', en: 'Money / it costs (money rub gesture)', cat: 'quantity' },
  { name: 'Hand level at head height', ar: 'لحد هون', tr: 'la7ad hoon', en: 'Up to here / this much (height indicator)', cat: 'quantity' },
  { name: 'Thumb-index circle (OK shape)', ar: 'تمام', tr: 'tamaam', en: 'Perfect / exactly right', cat: 'quantity' },
  { name: 'Flat hand slap down on table', ar: 'بالظبط', tr: 'bil-DabT', en: 'Exactly / precisely / that\'s it', cat: 'quantity' },
  { name: 'Hands forming large ball shape', ar: 'كبير كتير', tr: 'kbiir ktiir', en: 'Very big / enormous', cat: 'quantity' },
  { name: 'Two fingers pinched close together', ar: 'بس شوي', tr: 'bass shwayy', en: 'Just a little / barely this much', cat: 'quantity' },
  // reactions
  { name: 'Slap own cheek (shock)', ar: 'يي', tr: 'yii', en: 'Oh wow / shocked (exaggerated surprise)', cat: 'reactions' },
  { name: 'Both hands to cheeks', ar: 'الله', tr: 'alla', en: 'Oh God / unbelievable (overwhelmed)', cat: 'reactions' },
  { name: 'Fist bump to own chest', ar: 'بموت', tr: 'bmoot', en: 'I\'m dying / this is killing me (of emotion)', cat: 'reactions' },
  { name: 'Hand flip dismissal over shoulder', ar: 'يلعن دينك', tr: 'yil3an diinak', en: 'Forget it / get out (dismissal flick)', cat: 'reactions' },
  { name: 'Eyes wide + both hands out', ar: 'شو هاد', tr: 'shuu haad', en: 'What is this / unbelievable (reaction)', cat: 'reactions' },
  { name: 'Slow clap (sarcastic)', ar: 'برافو', tr: 'braavo', en: 'Bravo (sarcastic or genuine per context)', cat: 'reactions' },
  // greetings
  { name: 'Right hand to heart after shake', ar: 'تشرفنا', tr: 'tsharrafna', en: 'Honored to meet you (formal handshake follow)', cat: 'greetings' },
  { name: 'Head bow with hand to heart', ar: 'أهلين', tr: '2ahleeyn', en: 'Welcome (respectful greeting to elder)', cat: 'greetings' },
];

const GST_DRILLS = [
  {
    q: 'What does a Lebanese chin flick upward mean?',
    opts: ['la2 (no)', '2aywa (yes)', 'shwayye (a little)', 'yalla (hurry)'],
    correct: 0,
    note: 'Chin flick up = "la2" (no). One of Lebanon\'s most iconic gestures — a slight upward tilt of the chin, sometimes with a click of the tongue, means an emphatic NO. Outsiders often miss it. The more dramatic the tilt, the stronger the refusal. Combine with "2abadan" (absolutely not) for maximum denial. In Lebanese culture, this gesture replaces the word entirely — in loud environments, markets, or across a room, the chin says it all.',
  },
  {
    q: 'Fingers bunched upward = what Lebanese phrase?',
    opts: ['la7za (one moment)', 'yalla (let\'s go)', 'ktiir (a lot)', 'walla (I swear)'],
    correct: 0,
    note: '"La7za" (لحظة) — one moment. The bunched fingers pointing up (like holding a small ball) is the Lebanese way to say wait. It\'s used constantly: at restaurants to signal the waiter, in traffic to tell someone to hold, in conversation to say let me finish. The gesture + "la7za" is more polite; just the gesture alone works in casual settings. Paired with an apology: "la7za bass" = just one second.',
  },
  {
    q: 'Rubbing thumb against fingers means?',
    opts: ['maSaari (money)', 'shwayye (a little)', 'ktiir (a lot)', 'tamaam (perfect)'],
    correct: 0,
    note: '"MaSaari" (مصاري) — money. The universal money gesture (thumb rubbing against index and middle fingers) is used exactly the same in Lebanese culture. Context: "Shuu, maSaari?" = What, is it about money? "Maa 3ando maSaari" = he has no money. Lebanese conversations about money use both words and gesture frequently — Lebanon\'s economic crisis (post-2019) has made "maSaari" a daily topic. The lira collapse gave this gesture extra weight.',
  },
  {
    q: 'Kissing fingertips in Lebanese culture means?',
    opts: ['yislamu (excellent/amazing)', 'tsharrafna (honored)', '2ahlan (welcome)', 'mniH (good)'],
    correct: 0,
    note: '"Yislamu" (يسلموا) — literally "may they be kept safe/blessed." The fingertip kiss signals something is excellent — food, a person\'s work, a performance. "Yislamu 2ideek" = blessed be your hands (said after good cooking). In Lebanese food culture especially, this is the highest compliment. Also used when someone says something particularly kind or true: the gesture + "yislamu" = that was perfect / beautifully said.',
  },
  {
    q: 'What does slapping your own cheek in shock signal?',
    opts: ['yii (wow/shocked)', 'alla (oh God)', 'bmoot (I\'m dying)', 'shuu haad (what is this)'],
    correct: 0,
    note: '"Yii" (يي) — oh! / wow! Lebanese expression of surprise, shock, or delight. The cheek slap is the physical embodiment of being so surprised you feel the impact. It\'s theatrical and warm — not distress but expressive surprise. Lebanese communication is physically demonstrative compared to many cultures. "Yii, shuu saar?" = oh wow, what happened? The gesture alone across a room communicates "I can\'t believe this."',
  },
  {
    q: 'What does hand on heart during a greeting mean?',
    opts: ['2ahlan w sahlan (sincere welcome)', 'walla (I swear)', 'tsharrafna (honored)', '2abadan (absolutely not)'],
    correct: 0,
    note: '"2ahlan w sahlan" (أهلاً وسهلاً) — welcome. The hand-to-heart after a handshake or greeting is Lebanon\'s gesture of sincere hospitality. It means: you are truly welcome, I receive you with my whole heart. Lebanese hospitality culture places enormous emphasis on making guests feel genuinely wanted. "2ahlan" alone is common; the full "2ahlan w sahlan" + hand on heart signals deep warmth. Elders especially use this with younger visitors.',
  },
  {
    q: 'What does a rapid finger snap signal in Lebanese conversation?',
    opts: ['yalla (hurry up / let\'s go)', 'la7za (one moment)', 'tamaam (perfect)', 'kammal (continue)'],
    correct: 0,
    note: '"Yalla" (يلا) — let\'s go / hurry up. The snap + yalla is the Lebanese equivalent of a starter pistol. Used by parents rushing children, coaches pushing athletes, friends trying to leave a gathering. "Yalla yalla" with double snap = genuine urgency. Lebanese time culture is famously flexible ("Lebanese time" = always late), so the snap+yalla is often ironic — you say it knowing it won\'t be fast. But in real urgency, it\'s unmistakable.',
  },
  {
    q: 'Index finger spinning at temple means?',
    opts: ['majnuun (crazy)', 'maSaari (money)', 'la2 la2 (no no)', 'ktiir (a lot)'],
    correct: 0,
    note: '"Majnuun" (مجنون) — crazy / out of their mind. The universal "crazy" gesture is used freely in Lebanese conversation, often with affection rather than insult. "Majnuun inta?" = are you crazy? can mean genuine concern or playful teasing. "Tis3a w tis3iin majnuun" = 99 crazies (Lebanese saying for a chaotic situation). Lebanese culture uses hyperbole constantly — calling someone majnuun is often a term of endearment for someone impressively bold.',
  },
  {
    q: 'What does the flat palm chop on the other hand mean?',
    opts: ['walla (I swear / by God)', 'bil-DabT (exactly)', 'xalaS (finished)', 'yii (wow)'],
    correct: 0,
    note: '"Walla" (والله) — I swear / by God. The hand chop is a physical oath — slapping one palm onto the other as if making a pact. "Walla maa 3irfit" = I swear I didn\'t know. In Lebanese speech, "walla" is used constantly — as an intensifier, a filler, an oath, and an expression of surprise. "Walla!" alone = wow really? / by God! The gesture adds physical emphasis: you\'re staking your word on it.',
  },
  {
    q: 'Raised open palms + shoulders shrug in Lebanese means?',
    opts: ['shuu ba3mil (what can I do)', 'shwayy shwayy (calm down)', 'mish heeyk (not like that)', 'la2 (no)'],
    correct: 0,
    note: '"Shuu ba3mil" (شو بعمل) — what can I do? The helpless shrug + open palms is Lebanon\'s most versatile fatalistic gesture. Electricity out? "Shuu ba3mil." Government failed again? "Shuu ba3mil." Traffic for two hours? "Shuu ba3mil." Lebanese resilience and dark humor are expressed through this gesture — it\'s not despair, it\'s acknowledgment that some things are beyond control. Paired with "hayk il-7aal" = this is the situation (what can you do).',
  },
];

const GST_TIPS = [
  'Lebanese body language is among the most expressive in the Arab world. Lebanon\'s Mediterranean culture, French influence, and theatrical personality combine to make gestures large, clear, and emotionally charged. A Lebanese person can conduct an entire conversation across a noisy room using only gestures — the chin flick (no), the bunched fingers (wait), the shoulder shrug (what can I do), and a kiss on the fingertips (excellent) are understood by every Lebanese without a word.',
  'The "wait" gesture — fingers bunched together pointing up — is called "2intizir" position by linguists, but Lebanese just call it "la7za." It appears in traffic (driver holding up fingers to ask for a moment), restaurants, and conversations. It slows the interaction without shutting it down. The number of fingers held up changes meaning: all five bunched = strong "wait"; index alone = "one second."',
  'Physical distance in Lebanese greetings is close by Western standards. The standard greeting is three cheek kisses (right-left-right, or left-right-left by region). Men who are close friends kiss; men who are less close shake hands. Women always kiss. The hand-to-heart after a handshake elevates a greeting to sincere warmth. Refusing to kiss or keeping physical distance can be read as coldness or insult. Lebanese diaspora adjust by geography but return to full contact when back home.',
  'The chin flick vs. the head shake: in Western cultures, shaking the head side-to-side means no. In Lebanon, the chin flick upward (sometimes just the eyes going up) is the primary "no." First-time visitors often miss it entirely — they see the chin move and think it\'s a nod or a reaction. The tongue click that sometimes accompanies it ("tsk" sound) adds emphasis. "La2" + chin flick + tsk = the strongest non-verbal no in the Lebanese repertoire.',
  'Lebanese gestures for money, prices, and bargaining are their own category. The thumb-rub (money), pointing to numbers on fingers (prices), the flat palm tap (final price / take it or leave it), and the slowly shaking head while maintaining eye contact (I won\'t go lower) form a complete bargaining language used in souks and markets. Even in modern Beirut, these persist in taxis, old shops, and informal deals. Post-2019 economic crisis, the money gesture appears more in everyday frustrated conversation.',
];

const GST_ABOUT = 'Lebanese gestures are a language within a language — a parallel communication system developed over centuries of Mediterranean trade, multilingual culture, and densely social community life. Understanding Lebanese body language means understanding when a chin tilts up to say no, when bunched fingers mean wait, and when kissing your own fingertips is the highest compliment you can give. These non-verbal codes cross the Lebanese diaspora globally — in São Paulo, Sydney, or Detroit, a Lebanese person\'s hands still speak the same language as in Beirut.';
