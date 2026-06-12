// Run #417 — Lebanese Superstitions & Folk Beliefs Coach (sup)
// Categories: evil-eye | protection | luck | omens | sayings

const SUP_WORDS = [
  // evil-eye
  { ar: 'عين', tr: '3ein', en: 'evil eye (the gaze that brings harm)', cat: 'evil-eye' },
  { ar: 'حسد', tr: '7asad', en: 'envy / evil eye energy', cat: 'evil-eye' },
  { ar: 'نظرة', tr: 'naDra', en: 'gaze / look (can carry 3ein)', cat: 'evil-eye' },
  { ar: 'مشوف', tr: 'mashoof', en: 'hit by the evil eye (lit. seen/noticed)', cat: 'evil-eye' },
  { ar: 'اتعين', tr: 'it3ayyan', en: 'got the evil eye (verb: to be afflicted)', cat: 'evil-eye' },
  { ar: 'عين الحسود', tr: '3ein il-7asuud', en: 'the envier\'s eye (the most dangerous kind)', cat: 'evil-eye' },
  { ar: 'ما بشوفك عين', tr: 'ma btshufak 3ein', en: 'may no evil eye see you (blessing said to children)', cat: 'evil-eye' },
  { ar: 'عمل عين', tr: '3amal 3ein', en: 'gave someone the evil eye (intentionally or not)', cat: 'evil-eye' },
  // protection
  { ar: 'خمسة', tr: 'khamse', en: 'hamsa / hand of Fatima (five-fingered amulet)', cat: 'protection' },
  { ar: 'حرز', tr: '7irz', en: 'amulet / talisman (sewn into clothing for protection)', cat: 'protection' },
  { ar: 'بخور', tr: 'bakhuur', en: 'incense (burned to ward off evil spirits)', cat: 'protection' },
  { ar: 'زرقة', tr: 'zar2a', en: 'blue eye bead (worn against the evil eye)', cat: 'protection' },
  { ar: 'ما شاء الله', tr: 'masha2alla', en: 'masha\'allah (said to deflect evil eye when praising)', cat: 'protection' },
  { ar: 'بسم الله', tr: 'bismilla', en: 'in God\'s name (said before starting anything, also protects)', cat: 'protection' },
  { ar: 'تعويذة', tr: 'ta3wiize', en: 'incantation / protective charm (words or written)', cat: 'protection' },
  { ar: 'ملح', tr: 'mila7', en: 'salt (thrown over shoulder or burned to break evil eye)', cat: 'protection' },
  // luck
  { ar: 'حظ', tr: '7azz', en: 'luck / fortune', cat: 'luck' },
  { ar: 'نحس', tr: 'na7s', en: 'bad luck / ill omen', cat: 'luck' },
  { ar: 'سعد', tr: 'sa3d', en: 'good fortune / favorable star', cat: 'luck' },
  { ar: 'فأل', tr: 'faal', en: 'omen / sign (reading signs in daily events)', cat: 'luck' },
  { ar: 'طالعلك نجمة', tr: 'Taali3-lak nijme', en: 'a star rises for you (you\'re very lucky)', cat: 'luck' },
  { ar: 'نحسان', tr: 'na7saan', en: 'unlucky person (someone always has bad luck)', cat: 'luck' },
  { ar: 'قراية الفنجان', tr: '2raayit il-finjaan', en: 'coffee cup reading (fortune telling from grounds)', cat: 'luck' },
  { ar: 'ورقة البخت', tr: 'war2it il-bakht', en: 'fortune paper (carnival fortune telling)', cat: 'luck' },
  // omens
  { ar: 'بومة', tr: 'buume', en: 'owl (considered a bad omen — death or misfortune)', cat: 'omens' },
  { ar: 'غراب', tr: 'ghuraab', en: 'crow / raven (omen of bad news arriving)', cat: 'omens' },
  { ar: 'رفة عين', tr: 'riffit 3ein', en: 'eye twitch (right = good news, left = bad news)', cat: 'omens' },
  { ar: 'وقعت الملعقة', tr: 'wa2i3at il-mal3a2a', en: 'a spoon fell (visitor is coming)', cat: 'omens' },
  { ar: 'طنين أذن', tr: 'Taniin udn', en: 'ringing ear (someone is talking about you)', cat: 'omens' },
  { ar: 'مسك الشعر', tr: 'masak il-sha3r', en: 'hair-pulling sensation (someone is thinking of you)', cat: 'omens' },
  { ar: 'حلم بسنة', tr: '7ilim b-sinne', en: 'dreaming of a tooth (bad omen — loss or grief)', cat: 'omens' },
  { ar: 'طرق على الخشب', tr: 'Tar2 3al-khasab', en: 'knock on wood (to prevent jinxing something good)', cat: 'omens' },
  // sayings
  { ar: 'الله يحمي', tr: 'alla y7mii', en: 'may God protect (said after seeing something scary)', cat: 'sayings' },
  { ar: 'الله يستر', tr: 'alla ystur', en: 'may God cover/protect (expression of worry)', cat: 'sayings' },
  { ar: 'مش من هون', tr: 'mish min hoon', en: 'not from here (said about something inexplicable — supernatural cause)', cat: 'sayings' },
  { ar: 'بعد شر', tr: 'ba3d sharr', en: 'after evil (said after sneezing or bad news — ward it off)', cat: 'sayings' },
  { ar: 'الله أكبر من كل شر', tr: 'alla akbar min kall sharr', en: 'God is greater than all evil (ultimate protection phrase)', cat: 'sayings' },
  { ar: 'ما بتساوى شي', tr: 'ma btsaawaa shi', en: 'worth nothing (dismissing a bad omen — it means nothing)', cat: 'sayings' },
  { ar: 'يلعن أبو الشيطان', tr: 'yil3an abu sh-shayTaan', en: 'curse the devil\'s father (when something bad happens — blame it on evil)', cat: 'sayings' },
  { ar: 'من شر الحساد', tr: 'min sharr il-7assaad', en: 'from the evil of the envious (protective Quran phrase)', cat: 'sayings' },
];

const SUP_DRILLS = [
  {
    q: 'Someone compliments your new car effusively. What should you say to protect it from the evil eye?',
    opts: ['ما شاء الله (masha2alla)', 'شكراً (shukran)', 'الله يحمي (alla y7mii)', 'بسم الله (bismilla)'],
    correct: 0,
    note: '"Masha\'allah" (ما شاء الله) — what God wills. Said when admiring something good to deflect the evil eye. In Lebanon, NOT saying masha\'allah when someone shows you something new is almost rude — it implies you might be giving them the 3ein without meaning to. "Masha\'allah 3a l-3arabiyye" = masha\'allah on the car. Even non-religious Lebanese say this reflexively. Responding to a compliment without masha\'allah marks you as unaware of the cultural code.',
  },
  {
    q: 'A Lebanese grandmother is burning "بخور" (bakhuur) in the house. What is she likely doing?',
    opts: ['Warding off evil / evil eye', 'Cooking an old recipe', 'Making coffee', 'Treating a cold'],
    correct: 0,
    note: '"Bakhuur" (بخور) — incense burning for spiritual protection. Lebanese grandmothers (tattas) burn it in every room after bad news, after a fight, when someone seems "mashoof" (hit by evil eye), or just as regular spiritual maintenance. The smoke is walked through each room while prayers are recited. Different incense types have different protective properties. "Ji3it t7ar2 bakhuur" = she came to burn incense = protective ritual visit. Bakhuur comes in small pieces from specialty stores — every Lebanese household keeps some.',
  },
  {
    q: 'What does it mean when a Lebanese says "اتعين" (it3ayyan) about their child?',
    opts: ['The child got the evil eye', 'The child learned to walk', 'The child started school', 'The child is sick with fever'],
    correct: 0,
    note: '"It3ayyan" (اتعين) — got hit by the evil eye. Lebanese parents attribute certain symptoms to 3ein: sudden crying, fever with no cause, unusual tiredness, dropping things. Diagnosis: if a yawn turns into an immediate yawn chain from the person burning incense, that confirms 3ein. Treatment involves a ta3widze ritual, salt burning, or visiting a sheikh. "Akid it3ayyan" = he definitely got the evil eye. This belief is widespread across all religious communities in Lebanon.',
  },
  {
    q: 'What is the purpose of the blue "زرقة" (zar2a) bead worn by Lebanese children?',
    opts: ['Protection from evil eye', 'Good luck charm', 'Religious symbol', 'Decoration only'],
    correct: 0,
    note: '"Zar2a" (زرقة) — blue eye bead. The blue-and-white evil eye bead worn on bracelets, pinned to clothing, hung in cars and homes. The theory: evil eye is "reflected" by the blue color. Lebanese parents pin a blue eye to newborns before they\'re even named. If the bead cracks or breaks, it means it absorbed an evil eye attack — "kasser il-7arse" = the bead broke = it protected you. Sold everywhere in Lebanon: gold shops, pharmacies, souvenir stores. Blue is the protective color.',
  },
  {
    q: 'When does a Lebanese person say "بعد شر" (ba3d sharr)?',
    opts: ['After sneezing or bad news — to ward off evil', 'Before eating — blessing the food', 'When greeting someone new', 'After finishing prayers'],
    correct: 0,
    note: '"Ba3d sharr" (بعد شر) — may evil stay behind / after evil. Said after sneezing, after saying something bad happened to someone else, after mentioning disease or death, after a close call. It\'s a verbal talisman: you\'re symbolically pushing the evil away from you. "3atast — ba3d sharr" = you sneezed — ba3d sharr. At weddings it\'s said sarcastically: someone has a coughing fit and guests say "ba3d sharr" while laughing. Part of the constant stream of protective phrases in Lebanese daily speech.',
  },
  {
    q: 'What does "رفة عين" (riffit 3ein) — an eye twitch — mean in Lebanese folk belief?',
    opts: ['Right eye = good news, left eye = bad news', 'Both eyes mean visitors coming', 'Eye twitch means you need glasses', 'Someone is staring at you'],
    correct: 0,
    note: '"Riffit 3ein" (رفة عين) — eye twitching. Lebanese people take eye twitching seriously as an omen system: right eye = good news is coming, left eye = bad news on the way. "Btriff 3eini l-yamin" = my right eye is twitching = something good is coming. Every Lebanese has this rule memorized. It varies slightly by region — some say the opposite. If your left eye twitches, you\'ll hear "la2 la2 la2 bass kheir" = no no no but hopefully good. Eye twitching generates immediate family consultation.',
  },
  {
    q: 'What does "قراية الفنجان" (2raayit il-finjaan) mean?',
    opts: ['Reading the coffee cup — fortune telling', 'Making the perfect coffee', 'Washing the coffee cup', 'Counting the cups'],
    correct: 0,
    note: '"2raayit il-finjaan" (قراية الفنجان) — reading the coffee cup. After drinking Lebanese coffee, you flip the cup onto the saucer, wait for it to dry, then someone reads your future in the patterns of grounds. Lebanese grandmothers are often expert cup readers. Common readings: seeing a door = travel, seeing a bird = message coming, seeing a cross = facing a challenge, seeing a ring = marriage. "Yalla 2raay finjaanik" = come on, let me read your cup. Even skeptics participate for fun. A cultural tradition that cuts across class.',
  },
  {
    q: 'What does a Lebanese person say to ward off fears after mentioning something scary?',
    opts: ['الله يستر (alla ystur)', 'يعطيك العافية (ya3Tiik il-3aafye)', 'مبروك (mabruuk)', 'إن شاء الله (inshalla)'],
    correct: 0,
    note: '"Alla ystur" (الله يستر) — may God cover/protect. Said after mentioning a possible bad outcome, after hearing bad news about someone else, when expressing worry. "Alla ystur min hal-mawDuu3" = God protect us from this situation. Differs from "alla y7mii" (more specific protection from a visible threat) and "inshalla" (hope for the future). "Ystur" comes from "satar" = to veil/cover. God covering you means evil can\'t see or reach you. Universal phrase across Lebanese religious communities.',
  },
  {
    q: 'If a Lebanese person says "وقعت الملعقة" (wa2i3at il-mal3a2a) meaningfully, what do they expect?',
    opts: ['A visitor is coming soon', 'Dinner is ready', 'Someone needs help', 'Rain is coming'],
    correct: 0,
    note: '"Wa2i3at il-mal3a2a" — a spoon fell. In Lebanese folk belief, dropping cutlery predicts visitors: spoon = female visitor coming, fork = male visitor coming, knife = a fight coming. This is widely known even by young Lebanese who don\'t believe it — they\'ll still say it as a cultural reflex. "Wa2i3at il-mal3a2a — raa7 yiji 7ada" = the spoon fell — someone will come. The prediction is often used to explain unexpected guests: "ma2ult-lak il-mal3a2a wa2i3it!" = didn\'t I tell you the spoon fell!',
  },
  {
    q: 'When would you say "مش من هون" (mish min hoon) in Lebanese?',
    opts: ['When something inexplicable happens — supernatural cause', 'When a stranger arrives', 'When food tastes foreign', 'When describing a faraway place'],
    correct: 0,
    note: '"Mish min hoon" (مش من هون) — not from here. Said when something cannot be explained by normal means: a sudden illness, an unexplained coincidence, a series of bad luck. It implies a supernatural origin — jinn, evil eye, or spiritual interference. "Hali 3amil mish min hoon" = this situation is not from here = something supernatural is causing this. Lebanese people use this phrase to shift cause from the explainable to the spiritual domain. It opens the door to remedies: burning bakhuur, visiting a sheikh, wearing 7irz.',
  },
];

const SUP_TIPS = [
  'The evil eye (3ein / 7asad) is perhaps Lebanon\'s most pervasive folk belief, cutting across all religious communities. Christians, Muslims, Druze — everyone in Lebanon knows the signs of 3ein and the protective phrases. The belief: genuine admiration or envy from certain people (intentionally or not) carries a spiritual force that can cause harm. Babies are most vulnerable (blue eye pins from birth). The beautiful, the successful, and the newly fortunate are most at risk. Even educated Lebanese professionals carry a 7irz or have a zar2a in their car. To dismiss 3ein as superstition in Lebanon is tone-deaf — acknowledge it as cultural knowledge.',
  'Protective phrases form a constant soundtrack of Lebanese life. "Masha\'allah" deflects the evil eye when praising. "Bismilla" protects at the start of anything. "Alla ystur" covers the feared. "Alla y7mii" calls active divine protection. "Ba3d sharr" pushes evil backward after mention. These phrases are so automatic that Lebanese speakers often don\'t notice saying them — they\'re woven into the fabric of normal conversation. Learning when to use these phrases is as important as knowing the words. A foreigner who drops "masha\'allah" correctly when admiring a Lebanese baby will win instant points.',
  'Lebanese coffee cup reading (2raayit il-finjaan) is a social ritual as much as a fortune-telling practice. After a gathering, someone — often an older woman — offers to read cups. The reader "sees" patterns: mountains (obstacles), birds (news), doors (travel), hands (help), eyes (surveillance or protection). The readings are usually positive and entertaining. Even non-believers participate because it\'s a chance for storytelling and connection. The ritual belongs to a chain of divination practices including tarot (increasingly popular in urban Lebanon), astrology, and dream interpretation (7ilim reading). "Min 3ind meen t3allamti t2rayi?" = where did you learn to read? is the highest compliment for a cup reader.',
  'Lebanese omens form a detailed system of signs: fallen spoon = visitor coming, ringing ear = being talked about, eye twitch direction = good or bad news, dreaming of teeth = loss, owl hooting at night = death nearby, crow calling repeatedly = bad news traveling. These beliefs are more likely to be voiced by older generations but known by all. Lebanese teenagers who mock omens will still knock on wood reflexively or say ba3d sharr after sneezing. The logic of omens is: the universe sends signals, humans who know the language can read them. Dismissing the signal is bad manners with the universe.',
  'Burning bakhuur (incense) is Lebanon\'s most visible ritual protection. The specific bakhuur formula matters: oud-based for general blessing, kaadii for removing 3ein, frankincense for spiritual cleansing. The ritual: light charcoal in a mabkhara (incense burner), add bakhuur, carry it through every room while reciting specific prayers or suras. Then everyone in the house must walk through the smoke — if you yawn uncontrollably when the smoke reaches you, it confirms you had 3ein that is now being removed. Lebanese homes have mabkhara sets as standard items, often beautiful brass or silver pieces. The smell of bakhuur is deeply connected to feelings of safety and home.',
];

const SUP_ABOUT = 'Lebanese superstitions and folk beliefs form a parallel reality that coexists with modern life, education, and technology. A Lebanese doctor might dismiss superstition professionally but still have his mother burn bakhuur when he falls ill. A Lebanese tech entrepreneur in Beirut might not believe in the evil eye consciously but will say "masha\'allah" automatically when shown a new baby. These beliefs are not primitive — they\'re the accumulated cultural software of a society that has survived centuries of uncertainty, invasion, and hardship. The 3ein, the khamse, the ta3wiize: these are Lebanon\'s original defense systems, refined over millennia. Understanding them is understanding what Lebanese people reach for when logic and prayer feel insufficient — the ancestral toolkit.';
