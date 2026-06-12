// Run #384 — Lebanese Nightlife & Going Out Coach (ngt)
// Categories: bars-clubs | drinks-vocab | nightlife-phrases | going-out | expressions

const NGT_WORDS = [
  // bars-clubs
  { ar: 'بار', tr: 'baar', en: 'bar (loanword)', cat: 'bars-clubs' },
  { ar: 'نايتكلاب', tr: 'naayt klaab', en: 'nightclub (loanword)', cat: 'bars-clubs' },
  { ar: 'جمّيزة', tr: 'Gemmayzeh', en: 'Gemmayzeh — Beirut\'s most famous bar street', cat: 'bars-clubs' },
  { ar: 'مار مخايل', tr: 'maar mkhaayel', en: 'Mar Mikhael — hipster bar district in Beirut', cat: 'bars-clubs' },
  { ar: 'مدام', tr: 'madaam', en: 'Madame (bar hostess / formal address)', cat: 'bars-clubs' },
  { ar: 'لوكال', tr: 'lookal', en: 'local dive bar (from French local)', cat: 'bars-clubs' },
  { ar: 'روفتوب', tr: 'ruuftop', en: 'rooftop bar (loanword)', cat: 'bars-clubs' },
  { ar: 'تراس', tr: 'traas', en: 'terrace / outdoor seating (from French terrasse)', cat: 'bars-clubs' },
  // drinks-vocab
  { ar: 'عرق', tr: '3ara2', en: 'arak — anise spirit, Lebanon\'s national drink', cat: 'drinks-vocab' },
  { ar: 'بيرة', tr: 'biira', en: 'beer', cat: 'drinks-vocab' },
  { ar: 'نبيذ', tr: 'nabiidh', en: 'wine', cat: 'drinks-vocab' },
  { ar: 'ويسكي', tr: 'wiski', en: 'whisky (loanword)', cat: 'drinks-vocab' },
  { ar: 'كاسة', tr: 'kaase', en: 'glass / drink / round', cat: 'drinks-vocab' },
  { ar: 'مزة', tr: 'mazze', en: 'mezze snacks (always with drinks)', cat: 'drinks-vocab' },
  { ar: 'نخبة', tr: 'nukhbe', en: 'cheers! / toast (raising glass)', cat: 'drinks-vocab' },
  { ar: 'كازو', tr: 'kaazu', en: 'Almaza beer (beloved Lebanese brand, informal)', cat: 'drinks-vocab' },
  // nightlife-phrases
  { ar: 'رايح تسهر؟', tr: 'raaye7 tshar?', en: 'are you going out tonight? (lit. going to stay up late?)', cat: 'nightlife-phrases' },
  { ar: 'فين رايح؟', tr: 'feen raaye7?', en: 'where are you going? (for the night)', cat: 'nightlife-phrases' },
  { ar: 'نكمّل عالبار', tr: 'nkammil 3al-baar', en: 'let\'s continue at the bar', cat: 'nightlife-phrases' },
  { ar: 'البلد', tr: 'il-balad', en: 'downtown / city center (going out area)', cat: 'nightlife-phrases' },
  { ar: 'عالفاضي', tr: '3al-faaDE', en: 'free entry / for free', cat: 'nightlife-phrases' },
  { ar: 'شو الطابور', tr: 'shu iT-Taabuur', en: 'what\'s the line / queue (at the club door)', cat: 'nightlife-phrases' },
  { ar: 'باونسر', tr: 'baawnser', en: 'bouncer (loanword)', cat: 'nightlife-phrases' },
  { ar: 'ليست', tr: 'liist', en: 'guest list (loanword)', cat: 'nightlife-phrases' },
  // going-out
  { ar: 'سهرة', tr: 'sahra', en: 'night out / evening gathering', cat: 'going-out' },
  { ar: 'سهر', tr: 'sahar', en: 'staying out late / nightlife (general)', cat: 'going-out' },
  { ar: 'حفلة', tr: '7afle', en: 'party / concert', cat: 'going-out' },
  { ar: 'دخلية', tr: 'dakhliiyye', en: 'cover charge / entry fee', cat: 'going-out' },
  { ar: 'فالي باركينج', tr: 'vaale baarking', en: 'valet parking (ubiquitous in Beirut)', cat: 'going-out' },
  { ar: 'طلعة', tr: 'Tla3a', en: 'going out / outing', cat: 'going-out' },
  { ar: 'كريّة', tr: 'kariyye', en: 'the tab / round of drinks (splitting costs)', cat: 'going-out' },
  { ar: 'عزومة', tr: '3azuume', en: 'treat / someone\'s paying (invitation out)', cat: 'going-out' },
  // expressions
  { ar: 'يلا بنا', tr: 'yalla biina', en: 'let\'s go! (going out exclamation)', cat: 'expressions' },
  { ar: 'هلق بتسهر', tr: 'halla2 btshar', en: 'now you party (said approvingly to a newcomer)', cat: 'expressions' },
  { ar: 'الليل طويل', tr: 'il-leel Tawiil', en: 'the night is long (plenty of time ahead)', cat: 'expressions' },
  { ar: 'عالصحة', tr: '3as-Si77a', en: 'to your health! (drinking toast)', cat: 'expressions' },
  { ar: 'ما في بكرا', tr: 'maa fii bukra', en: 'there\'s no tomorrow (YOLO — live for tonight)', cat: 'expressions' },
  { ar: 'هيدا لبنان', tr: 'heyda libnaan', en: 'this is Lebanon! (said at an unexpectedly epic night)', cat: 'expressions' },
  { ar: 'شربنا وغنينا', tr: 'shribna w ghannina', en: 'we drank and sang (a good night was had)', cat: 'expressions' },
  { ar: 'كل يوم بيجي بيوم', tr: 'kell yoom biiji byoom', en: 'every day brings a day (live in the moment)', cat: 'expressions' },
];

const NGT_DRILLS = [
  {
    q: 'What is "3ara2"?',
    opts: ['3ara2', 'biira', 'nabiidh', 'wiski'],
    correct: 0,
    note: '"3ara2" (عرق) — arak, Lebanon\'s national spirit. Distilled from grapes and anise, it turns cloudy white when water is added ("3ara2 bi-maay"). Always served with mezze and ice. Drinking 3ara2 is a social ritual, not just drinking — "ta3aala nishrab 3ara2" (come let\'s drink arak) means come socialize.',
  },
  {
    q: 'What is "sahra"?',
    opts: ['sahra', 'sahar', '7afle', 'Tla3a'],
    correct: 0,
    note: '"sahra" (سهرة) — an evening/night gathering. More intimate than a 7afle (party) — it can be friends at someone\'s home, a dinner that goes long, or a night out. "3amalna sahra mnii7a" = we had a great night. Lebanese sehraas are legendary for going until dawn.',
  },
  {
    q: 'What does "Gemmayzeh" refer to in nightlife context?',
    opts: ['Gemmayzeh', 'maar mkhaayel', 'il-balad', 'lookal'],
    correct: 0,
    note: '"Gemmayzeh" (جمّيزة) — Beirut\'s most famous bar street, in the Achrafieh district. A historic neighborhood that became a bar scene after the civil war. Narrow streets, Ottoman-era buildings, and dozens of bars back to back. The Gemmayzeh strip is iconic Lebanese nightlife.',
  },
  {
    q: 'What does "nukhbe" mean?',
    opts: ['nukhbe', '3as-Si77a', 'yalla biina', 'heyda libnaan'],
    correct: 0,
    note: '"nukhbe" (نخبة) — cheers! The classic Lebanese toast when raising glasses. Also means "elite/cream of the crop" in other contexts. When drinking 3ara2 together: "nukhbe!" said in unison before the first sip. Can also say "3as-Si77a" (to your health) or "in your eyes" ("b-3uyuunak").',
  },
  {
    q: 'What is "maa fii bukra"?',
    opts: ['maa fii bukra', 'il-leel Tawiil', '3al-faaDE', 'halla2 btshar'],
    correct: 0,
    note: '"maa fii bukra" (ما في بكرا) — there\'s no tomorrow. The Lebanese nightlife philosophy: live fully tonight. Given Lebanon\'s turbulent history (wars, economic crises), this saying carries real weight — you party hard because tomorrow is uncertain. It\'s not just hedonism; it\'s survival spirit.',
  },
  {
    q: 'What does "raaye7 tshar?" mean?',
    opts: ['raaye7 tshar?', 'feen raaye7?', 'nkammil 3al-baar', 'shu iT-Taabuur'],
    correct: 0,
    note: '"raaye7 tshar?" (رايح تسهر؟) — are you going out tonight? Literally "going to stay up late?" From "sahar" = staying awake / up late. The standard Friday/Saturday question among Lebanese youth. Reply: "ee, raaye7 3a Gemmayzeh" (yes, going to Gemmayzeh).',
  },
  {
    q: 'What is "dakhliiyye"?',
    opts: ['dakhliiyye', 'vaale baarking', 'liist', 'baawnser'],
    correct: 0,
    note: '"dakhliiyye" (دخلية) — cover charge / entry fee at a club. Beirut clubs can have high dakhliiyye on weekends (sometimes including a drink). "Shu l-dakhliiyye?" = what\'s the cover? Being on the "liist" (guest list) usually means no dakhliiyye.',
  },
  {
    q: 'What does "heyda libnaan" mean?',
    opts: ['heyda libnaan', 'maa fii bukra', 'shribna w ghannina', 'kell yoom biiji byoom'],
    correct: 0,
    note: '"heyda libnaan!" (هيدا لبنان) — this is Lebanon! Said when something happens that is simultaneously crazy, amazing, and only-in-Lebanon. A DJ set that goes until 10am, a beachside bar on a hillside, bumping into a celebrity — "heyda libnaan!" is the expression of Lebanese exceptionalism, usually with delight.',
  },
  {
    q: 'What is a "lookal"?',
    opts: ['lookal', 'baar', 'ruuftop', 'traas'],
    correct: 0,
    note: '"lookal" (لوكال) — a local dive bar, from French "local." The unpretentious neighborhood drinking spot: plastic chairs, cheap 3ara2, locals who\'ve been coming for 20 years. Every Beirut neighborhood has its lookal. Opposite of the glossy rooftop bars. "Ta3aala 3al-lookal" = come to the local bar.',
  },
  {
    q: 'What does "3al-faaDE" mean?',
    opts: ['3al-faaDE', 'kariyye', '3azuume', 'il-leel Tawiil'],
    correct: 0,
    note: '"3al-faaDE" (عالفاضي) — free / for free / nothing to do. In nightlife context: free entry, no cover charge. "Yalla 3al-faaDE" = let\'s go, it\'s free entry. Also used generally: "3al-faaDE" = nothing\'s happening, I\'m free tonight.',
  },
];

const NGT_TIPS = [
  'Beirut is one of the great nightlife cities of the world. The scene is concentrated in Gemmayzeh, Mar Mikhael, Hamra, and the nightclub strip of Jounieh. Lebanese nights start late — restaurants fill at 10pm, bars get going after midnight, clubs peak at 2-4am and sometimes go until noon. Pace yourself: the night is long ("il-leel Tawiil").',
  'Arak ("3ara2") is the heart of Lebanese drinking culture. It\'s always diluted with ice water — never straight. Pour 3ara2 into the glass first, add water (it turns white), then ice. "3ara2 mazbut" = well-made 3ara2. Always served with mezze. Drinking 3ara2 without food is considered rude — the food is as important as the drink.',
  'Lebanese nightlife has survived wars, economic crises, and a port explosion. The resilience is legendary: clubs reopened weeks after the 2006 war, parties happened during power cuts (by generator). "Maa fii bukra" (there\'s no tomorrow) isn\'t just a phrase — it\'s a hard-won philosophy. When Lebanese party, they mean it.',
  'Valet parking ("vaale baarking") is standard at nearly every Beirut bar and restaurant. Pull up, hand over keys, get a ticket. The valets navigate impossible parking situations. Tip generously. Refusing valet and trying to self-park makes you the difficult foreigner. Just use the valet.',
  'The guest list ("liist") and cover charge ("dakhliiyye") system is real in Beirut clubs. Knowing someone on the list ("3al-liist") = free entry, sometimes free drinks. Lebanese social networks determine your nightlife experience. The bouncer ("baawnser") is often the social gatekeeper — a friendly approach helps more than aggression.',
];

const NGT_ABOUT = 'Lebanese nightlife is famous across the Arab world and beyond. In a region where drinking culture is often restricted, Lebanon stands apart — bars, clubs, and restaurants with full liquor service operate openly, and Beirut has earned a reputation as the "Paris of the Middle East" partly on the strength of its nocturnal energy. The scene survived a civil war, Israeli invasions, and economic collapse — each time, the Lebanese returned to dance. Gemmayzeh and Mar Mikhael are globally known nightlife districts. The drink of choice is arak ("3ara2"), and the philosophy is "maa fii bukra" — there is no tomorrow, so live tonight. Understanding nightlife vocabulary means understanding a core part of Lebanese identity: the stubborn, resilient, joyful insistence on living fully.';
