// Run #288 — Lebanese Parties & Social Events Coach (prt)
// Celebrations, events, invitations, toasts, social phrases — 40 items, MCQ drill, 5 tips

const PRT_WORDS = [
  // celebrations
  { tr: '7affle',         ar: 'حفلة',           en: 'party / celebration',             cat: 'events' },
  { tr: '3urs',           ar: 'عرس',            en: 'wedding',                         cat: 'events' },
  { tr: '3id milad',      ar: 'عيد ميلاد',       en: 'birthday',                        cat: 'events' },
  { tr: 'ma2bale',        ar: 'مأبلة',           en: 'reception / engagement party',    cat: 'events' },
  { tr: '3id',            ar: 'عيد',            en: 'holiday / feast day',             cat: 'events' },
  { tr: 'sehra',          ar: 'سهرة',           en: 'evening gathering',               cat: 'events' },
  { tr: 'dabke',          ar: 'دبكة',           en: 'Lebanese folk dance',             cat: 'events' },
  { tr: 'Taabit',         ar: 'طابت',           en: 'night out',                       cat: 'events' },
  // invitations
  { tr: '3azamtak',       ar: 'عزمتك',          en: 'I\'m inviting you (m)',           cat: 'invitations' },
  { tr: 'maa3zuumiin',    ar: 'معزومين',         en: 'we\'re invited',                  cat: 'invitations' },
  { tr: 'ta3a/ta3ay',     ar: 'تعا/تعي',        en: 'come (m/f)',                      cat: 'invitations' },
  { tr: 'fi 3azaayim',    ar: 'في عزايم',        en: 'there are guests / invited people', cat: 'invitations' },
  { tr: 'nkuun ma3ak',    ar: 'نكون معاك',       en: 'we\'ll be with you',              cat: 'invitations' },
  { tr: 'inshallah njiik',ar: 'إنشالله نجيك',    en: 'God willing we\'ll come',         cat: 'invitations' },
  // toasts & wishes
  { tr: 'kasak',          ar: 'كاسك',           en: 'cheers (lit: your glass)',        cat: 'toasts' },
  { tr: 'bi-sa7tak',      ar: 'بصحتك',          en: 'to your health / cheers',         cat: 'toasts' },
  { tr: 'mabrook',        ar: 'مبروك',           en: 'congratulations',                 cat: 'toasts' },
  { tr: '3u2baalek',      ar: 'عقبالك',          en: 'may you be next (for marriage/celebrations)', cat: 'toasts' },
  { tr: 'tfaDDal akol',   ar: 'تفضل اكل',        en: 'please eat',                      cat: 'toasts' },
  { tr: 'saHtein',        ar: 'صحتين',           en: 'bon appétit / to your health (double)', cat: 'toasts' },
  // social phrases
  { tr: 'shu 3amiltu?',   ar: 'شو عملتو؟',       en: 'what did you make / prepare?',   cat: 'social' },
  { tr: 'ktiir zaaki',    ar: 'كتير زاكي',        en: 'very delicious',                  cat: 'social' },
  { tr: 'tabbarna',       ar: 'تبّرنا',           en: 'we stayed up (had a great time)', cat: 'social' },
  { tr: 'wla 3ala rasna', ar: 'ولا على راسنا',    en: 'nothing\'s on our head = we\'re free/easy', cat: 'social' },
  { tr: 'shu 7elo l-jaw', ar: 'شو حلو الجو',      en: 'what a nice atmosphere/vibe',    cat: 'social' },
  { tr: 'Hayyo-nna',      ar: 'حيّونا',           en: 'they/he blessed us (warm greeting at party)', cat: 'social' },
  // farewell
  { tr: 'tislam/tislamii', ar: 'تسلم/تسلمي',     en: 'bless you / thank you (m/f)',    cat: 'farewell' },
  { tr: 'ma3 l-salameh',  ar: 'مع السلامة',       en: 'goodbye (go with safety)',        cat: 'farewell' },
  { tr: 'yislam timeek',  ar: 'يسلم تيمك',        en: 'bless your mouth (said after compliment)', cat: 'farewell' },
  { tr: 'truu7 w tirja3 bi-salim', ar: 'تروح وترجع بسلام', en: 'go and return safely', cat: 'farewell' },
  // music & dancing
  { tr: '3azzef',         ar: 'عزّف',            en: 'to play music',                   cat: 'music' },
  { tr: 'ghanne',         ar: 'غنّى',             en: 'to sing',                         cat: 'music' },
  { tr: 'ra2aS',          ar: 'رقص',             en: 'to dance',                        cat: 'music' },
  { tr: 'zaffe',          ar: 'زفّة',             en: 'wedding procession / zaffa',      cat: 'music' },
  { tr: 'maazouka',       ar: 'مازوركا',          en: 'mazurka (Lebanese party dance)',   cat: 'music' },
  { tr: 'Taarab',         ar: 'طرب',             en: 'musical ecstasy / feeling the music', cat: 'music' },
  { tr: 'ya3Tiik l-3aafiye', ar: 'يعطيك العافية',en: 'may God give you health (thank you for effort)', cat: 'music' },
  { tr: 'nshalla btHaDar', ar: 'إنشالله بتحضر',   en: 'I hope you\'ll come/attend',      cat: 'music' },
  { tr: 'Hayy Hayy',      ar: 'حي حي',           en: 'exclamation of excitement/joy',   cat: 'music' },
  { tr: 'zghriite',       ar: 'زغريتة',          en: 'ululation / celebratory trill',   cat: 'music' },
];

const PRT_DRILLS = [
  {
    q: 'How do you say "congratulations" in Lebanese Arabic?',
    opts: ['saHtein', 'mabrook', 'kasak', '3u2baalek'],
    correct: 1,
    note: '"mabrook" = congratulations (مبروك — from بارك = to bless). The most used congratulatory word in Lebanese Arabic. Reply to "mabrook": "allah ybarik fiik" (God bless you) or "mabrook 3aleik" (congratulations to you too). Used for: weddings, births, new jobs, passing exams, new homes. "Mabrook ya 3ariis" = congratulations groom. Doubling: "mabrook mabrook" = big congratulations.'
  },
  {
    q: 'What does "3u2baalek" mean?',
    opts: ['cheers', 'congratulations', 'may you be next', 'bless you'],
    correct: 2,
    note: '"3u2baalek" = may you be next (عقبالك — 3u2baal = after, -ek = you). Said to single people at weddings: "mabrook! 3u2baalek!" (congratulations! may you be next!). Female: "3u2baalik". Lebanese social pressure around marriage — "3u2baalek" is both a wish and a hint. Reply options: smile, or "inshallah" (God willing), or "w 3u2baalik" (same to you).'
  },
  {
    q: 'How do you say "cheers" in Lebanese Arabic?',
    opts: ['mabrook', 'saHtein', 'kasak', 'tabbarna'],
    correct: 2,
    note: '"kasak" = cheers (كاسك — literally "your glass"). Informal toast. More formal: "bi-sa7tak" (to your health). Group: "bi-sa7etkun" (to all your healths). Lebanese drinking culture: arak (anise spirit) is the national drink — "3ala kasak" = to your glass. Clinching glasses: make eye contact or it\'s bad luck (superstition). "Kasak ya [name]" = personalizes the toast.'
  },
  {
    q: 'What is "zghriite"?',
    opts: ['a wedding dance', 'ululation / celebratory trill', 'a type of food', 'a toast'],
    correct: 1,
    note: '"zghriite" = ululation (زغريتة — plural: zaghariit). The high-pitched celebratory trill made by women at weddings, parties, and events of joy. Produced by rapidly moving the tongue. In Lebanon: key moment of "zaffa" (wedding procession), when bride enters, when bride and groom meet. Also at births of boys (traditionally), military homecomings, exam results. "Tarzghiit" = to ululate. One of the most distinctive sounds of Lebanese celebrations.'
  },
  {
    q: 'How do you say "bon appétit / to your health (double)" in Lebanese Arabic?',
    opts: ['tfaDDal akol', 'kasak', 'saHtein', 'mabrook'],
    correct: 2,
    note: '"saHtein" = to your health × 2 (صحتين — "two healths"). Said after someone eats, drinks, or gets a haircut. Reply: "3a albak" (to your heart). More elaborate: "saHtein w 3aafiye" = two healths and strength. "saHtein" after food → "3a albak". After a drink → "3a albak" or "w 3a albak". After a haircut → "saHtein" from everyone present — a social ritual.'
  },
  {
    q: 'What does "Taarab" mean?',
    opts: ['a type of dance', 'musical ecstasy / feeling the music', 'a wedding procession', 'a party invitation'],
    correct: 1,
    note: '"Taarab" = musical ecstasy (طرب — from طرب = to be moved by music). Deep emotional state when beautiful music hits the soul. When an Arabic singer is great and the audience is moved: "3amilna Taarab" = they gave us tarab. Lebanese music legend Fairuz is the queen of "Taarab". Classic Lebanese party moment: everyone goes silent when an iconic song plays — that\'s pure "Taarab". "Moo2assas" = deeply moved.'
  },
  {
    q: 'How do you say "to dance" in Lebanese Arabic?',
    opts: ['ghanne', '3azzef', 'ra2aS', 'dabke'],
    correct: 2,
    note: '"ra2aS" = to dance (رقص). "dabke" = Lebanese folk line dance (دبكة) — the national dance, done at weddings and celebrations. "ra2aS dabke" = danced the dabke. Individual dancing: "ra2aS". Traditional dabke: hands linked, feet stomping in unison, line led by "lawwiH" (leader with handkerchief). Wedding dabke circles are mandatory. Non-Lebanese dancing: "ra2aS". Lebanese disco/club: "ra2aS 3al-mousiiqe" (danced to music).'
  },
  {
    q: 'What does "tislam" mean?',
    opts: ['goodbye', 'congratulations', 'please eat', 'bless you / thank you'],
    correct: 3,
    note: '"tislam" = bless you / thank you (تسلم — from سلم = to be safe/well). Female: "tislamii". Both: "tislamuu". Said after receiving a gift, a compliment, or kind gesture — "tislam ideik" (bless your hands). Very warm Lebanese expression of gratitude. "Tislamii ya habibti" (bless you my dear — f) is affectionate. Not just formal thanks — carries genuine warmth. "Allah yislimak" = God keep you safe (response).'
  },
  {
    q: 'How do you say "go and return safely" in Lebanese Arabic?',
    opts: ['ma3 l-salameh', 'truu7 w tirja3 bi-salim', 'nshalla btHaDar', 'tislam'],
    correct: 1,
    note: '"truu7 w tirja3 bi-salim" = go and return safely. More elaborate farewell than "ma3 l-salameh". Said at end of night to departing guests — especially after parties. "Ma3 l-salameh" = goodbye (with safety — simpler). Lebanese partings can be long: multiple goodbyes, final embraces, calls after arrival home ("wSiltu?" = did you arrive?). Lebanese farewell rituals: saying goodbye at the door, then again at the car, then calling to confirm safe arrival.'
  },
  {
    q: 'What does "dabke" mean?',
    opts: ['a type of food', 'an evening gathering', 'Lebanese folk dance', 'ululation'],
    correct: 2,
    note: '"dabke" = Lebanese folk dance (دبكة — from دبّ = to stomp). Lebanon\'s national dance — performed at weddings, national events, folk festivals. Line dance: participants link arms/hands, stomp feet in synchronized rhythm, led by "lawwiH" who improvises. Regions have distinct styles: North Lebanese, South Lebanese, Bekaa dabke. "Farqet dabke" = dabke troupe. UNESCO recognized as intangible heritage. Every Lebanese learns dabke at school. "Yalla dabke!" = everyone on the floor!'
  },
];

const PRT_TIPS = [
  { title: 'Lebanese celebrations — the art of the party', body: 'Lebanon has a global reputation for parties and nightlife — Beirut was called "Paris of the Middle East." Lebanese celebrations are extravagant: weddings ("3urs") can have 500-1000 guests, multiple venues, professional "zaffa" processions with drummers and torch-bearers. The "7affle" (party) culture extends to everything — birthdays, engagements, promotions, new babies. Lebanese hospitality rule: never let a guest\'s glass or plate be empty. "3azaayim" (invitations/guests) are treated like royalty. Food is central — "shu 3amiltu?" (what did you make?) is asked before the compliment.' },
  { title: 'Lebanese toasts and celebratory language', body: '"Kasak" (your glass) and "bi-sa7tak" (to your health) are the standard toasts. The national drink: "arak" (anise-based spirit, 50-60% alcohol, goes white when mixed with water and ice) — "arak w meze" is the classic Lebanese social meal. At dinner parties, toasting is constant: "3a albak" (to your heart) is the reply to "saHtein." "Mabrook" is omnipresent — said for any good news. "3u2baalek" at weddings creates gentle social pressure on single attendees. "Hayy Hayy" = exclamation of joy at a great moment.' },
  { title: 'The dabke — Lebanon\'s soul in a dance', body: '"Dabke" (دبكة) is Lebanon\'s folk dance — performed at every significant celebration. The word means "to stomp" — the dance is earthy, communal, joyful. Line formation: participants link hands or put arms over shoulders, stomp left feet in unison. The "lawwiH" (leader) at the right end improvises moves with a handkerchief. Different regions have distinct styles — Jnoubi (South) dabke is famous for speed and athleticism. Lebanese children learn dabke in school. At weddings, the dabke circle is mandatory — someone who refuses to join is antisocial. "Yalla 3al-dabke!" = let\'s dance!' },
  { title: 'Lebanese wedding culture — a national institution', body: '"3urs" (wedding) in Lebanon is a major production. Timeline: "khetbe" (engagement announcement) → "mlaake" (formal engagement) → "3urs madani" (civil marriage in Cyprus — Lebanese law has no civil marriage) → "3urs" (religious ceremony + reception). Cost: middle-class Lebanese weddings: $30,000-100,000+. "Zaffa" = wedding procession with drummers, bagpipes (popular!), fire jugglers. "Leileh mbayyaDa" = the white night (wedding night). Parents of bride/groom: "ahel l-3ariis/3arus" = groom\'s/bride\'s family. "Mabrook l-3urs" = congratulations on the wedding.' },
  { title: 'Lebanese social expressions at events', body: '"Hayyo-nna" (they blessed us) = warm welcome when a special guest arrives. "Tabbarna" = we stayed up late and had a great time (from tabbar = to stay up). "Wla 3ala rasna" = nothing on our heads = we\'re free (no obligations tonight). "Shu 7elo l-jaw" = what a nice atmosphere — key party compliment. "Ya3Tiik l-3aafiye" = may God give you health — said to musicians, hosts, anyone who made effort. "Nshalla btHaDar" = I hope you\'ll come (said with genuine warmth, not a formality). Lebanese RSVP culture: "inshallah" = maybe; "mazbout inshallah" = probably yes; "inshallah" with a smile = yes.' },
];

const PRT_ABOUT = 'Master Lebanese Arabic for parties and social events — celebrations, invitations, toasts, farewells, music, and dancing. Essential for navigating Lebanese weddings, social gatherings, and the rich celebratory culture.';
