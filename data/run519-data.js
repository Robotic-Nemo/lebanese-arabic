// R519 — Lebanese Celebrations & Congratulations (prefix: cel)
const CEL_WORDS = [
  // universal congratulations
  {ar:'مبروك', tr:'mabruuk', en:'"Congratulations!" — the most common congrats, used for everything: job, baby, engagement', cat:'congrats'},
  {ar:'ألف مبروك', tr:'alf mabruuk', en:'"A thousand congratulations!" — more emphatic form, for big milestones', cat:'congrats'},
  {ar:'يعطيك العافية', tr:'ya3Tiik el-3aafye', en:'"May God give you health/strength" — said after an achievement or hard work', cat:'congrats'},
  {ar:'الله يكرمك', tr:'alla yikrimak', en:'"May God honor you" — response to mabruuk or compliment (m), shows grace', cat:'congrats'},
  {ar:'يسلمو إيدك', tr:'yislamu iidak', en:'"May your hands be blessed" — said after someone makes/bakes/gifts something', cat:'congrats'},
  {ar:'بالرفاء والبنين', tr:'bil-rifaa w-el-baniin', en:'"With prosperity and sons" — traditional wedding congratulations', cat:'congrats'},
  // birthdays
  {ar:'عيد ميلاد سعيد', tr:'3iid milaad sa3iid', en:'"Happy birthday!" — formal/standard birthday wish', cat:'birthday'},
  {ar:'كل سنة وإنت طيّب', tr:'kull sane w-inta Tayyib', en:'"May every year find you well" — Lebanese birthday blessing (m)', cat:'birthday'},
  {ar:'كل سنة وإنتِ طيّبة', tr:'kull sane w-inti Tayyibe', en:'"May every year find you well" (f) — use with female birthday person', cat:'birthday'},
  {ar:'يطوّل عمرك', tr:'yTawwil 3umrak', en:'"May God lengthen your life" — birthday blessing, also said to elderly', cat:'birthday'},
  {ar:'طول عمرك', tr:'Tuul 3umrak', en:'"Long life to you" — informal birthday/celebration life wish', cat:'birthday'},
  // religious holidays
  {ar:'عيد مبارك', tr:'3iid mubaarak', en:'"Blessed Eid" — for Eid al-Fitr or Eid al-Adha (Muslim holidays)', cat:'holiday'},
  {ar:'عيد فطر سعيد', tr:'3iid fiTr sa3iid', en:'"Happy Eid al-Fitr" — end of Ramadan celebration', cat:'holiday'},
  {ar:'كل عام وأنتم بخير', tr:'kull 3aam w-antum bi-kheir', en:'"May every year find you well" — Eid/holiday plural blessing', cat:'holiday'},
  {ar:'مسيح مبارك', tr:'masii7 mubaarak', en:'"Blessed Christ" / Merry Christmas — Lebanese Christian Christmas greeting', cat:'holiday'},
  {ar:'سنة سعيدة', tr:'sane sa3iide', en:'"Happy New Year!" — used for both Gregorian and Hijri new year', cat:'holiday'},
  // toasts & celebrations
  {ar:'كسّاك', tr:'kasak', en:'"To your health!" (m) — the standard Lebanese toast when clinking glasses', cat:'toast'},
  {ar:'كسّيكِ', tr:'kassiki', en:'"To your health!" (f) — feminine form of the toast', cat:'toast'},
  {ar:'صحتين', tr:'Sa7tein', en:'"Double health to you!" — said after eating/drinking to compliment the meal', cat:'toast'},
  {ar:'على صحّتك', tr:'3a Sa77tak', en:'"To your health" — alternative toast, also used when handing someone food/drink', cat:'toast'},
  {ar:'يحيا الجمع', tr:'yi7ya l-jam3', en:'"Long live the gathering!" — toast celebrating the group being together', cat:'toast'},
  // new baby
  {ar:'مبروك المولود', tr:'mabruuk el-mawluud', en:'"Congratulations on the newborn" — new baby congratulations', cat:'baby'},
  {ar:'الله يخلّيلك إيّاه', tr:'alla ykhallii-lak iyya', en:'"May God keep him/her for you" — blessing for a new baby (gender-neutral use)', cat:'baby'},
  {ar:'يكبر بعزّك', tr:'yikbar bi-3izzak', en:'"May he/she grow in your pride" — blessing for baby/child to thrive in your honor', cat:'baby'},
  {ar:'يصير طولو مت إيدك', tr:'ySiir Tuulo mit iidak', en:'"May he grow a hundred times taller than your hand" — Lebanese baby blessing', cat:'baby'},
  // engagement & wedding
  {ar:'مبروك الخطوبة', tr:'mabruuk el-khuTuube', en:'"Congratulations on the engagement!" — for announcing an engagement', cat:'wedding'},
  {ar:'على البال', tr:'3a l-baal', en:'"May yours be next" (lit. "on the wish/mind") — said to singles at weddings', cat:'wedding'},
  {ar:'إن شاء الله عندك', tr:'in shaa alla 3andak', en:'"God willing it will be at your place next" — wedding blessing for unmarried guests', cat:'wedding'},
  {ar:'متل القمر', tr:'mitl el-amar', en:'"Like the moon (beautiful)" — compliment for bride/groom at celebrations', cat:'wedding'},
  // graduation & achievements
  {ar:'مبروك التخرّج', tr:'mabruuk et-takhkharuj', en:'"Congratulations on graduation!" — graduation ceremony congratulations', cat:'achieve'},
  {ar:'يعطيك الصحّة', tr:'ya3Tiik es-Si77a', en:'"May God give you health" — for any achievement, exam success, promotion', cat:'achieve'},
  {ar:'مستاهل', tr:'mista7il', en:'"You deserve it!" — sincere congratulations implying the person earned their success', cat:'achieve'},
  {ar:'بتتلمّع', tr:'bittilamma3', en:'"You shine / you\'re glowing" — compliment on achievement or at celebrations', cat:'achieve'},
  // response phrases
  {ar:'الله يبارك فيك', tr:'alla ybaarak fiik', en:'"May God bless you" — polite response to any blessing or congratulation', cat:'response'},
  {ar:'وإيّاك', tr:'w-iyyaak', en:'"And you too" — reciprocating a blessing or greeting (m)', cat:'response'},
  {ar:'منك لله', tr:'minnak la-alla', en:'"From you to God" — response to a compliment, showing humility (blessing comes from God)', cat:'response'},
];

const CEL_DRILLS = [
  {
    q: 'Your friend just got engaged. What do you say?',
    opts: ['mabruuk el-khuTuube', 'kasak ya 3aziiz', 'Sa7tein', 'in shaa alla 3andak'],
    ans: 0,
    exp: '"mabruuk el-khuTuube" = "Congratulations on the engagement!" The go-to phrase for this milestone.'
  },
  {
    q: 'Someone baked you a delicious cake. How do you compliment the baker?',
    opts: ['mabruuk', 'yislamu iidak', 'kull sane w-inta Tayyib', '3iid mubaarak'],
    ans: 1,
    exp: '"yislamu iidak" = "May your hands be blessed." Specifically said when someone made/created something for you.'
  },
  {
    q: 'It\'s your Lebanese friend\'s birthday. What\'s the most natural thing to say?',
    opts: ['3iid fiTr sa3iid', 'mabruuk el-mawluud', 'kull sane w-inta Tayyib', 'yi7ya l-jam3'],
    ans: 2,
    exp: '"kull sane w-inta Tayyib" is THE classic Lebanese birthday phrase — "may every year find you well." More natural than "3iid milaad sa3iid" in casual contexts.'
  },
  {
    q: 'You\'re at a Lebanese wedding and want to toast the couple. What do you say?',
    opts: ['3a l-baal', 'kasak', 'Sa7tein', 'alla ykhallii-lak iyya'],
    ans: 1,
    exp: '"kasak" = "to your health!" The standard Lebanese clinking toast. "Sa7tein" is after eating, "3a l-baal" is said to unmarried guests.'
  },
  {
    q: 'After finishing a great meal at a Lebanese home, what do you say?',
    opts: ['kasak', 'mabruuk', 'Sa7tein', '3iid mubaarak'],
    ans: 2,
    exp: '"Sa7tein" = "double health to you!" Said after eating to compliment the food and wish health on the cook. Equivalent to "bon appétit" in reverse.'
  },
  {
    q: 'Someone gives you a compliment or blessing. What\'s a natural humble response?',
    opts: ['alla ybaarak fiik', 'kasak', 'mabruuk', 'bittilamma3'],
    ans: 0,
    exp: '"alla ybaarak fiik" = "May God bless you." The standard gracious response to a blessing or compliment.'
  },
  {
    q: 'You\'re at a wedding and want to hint to your single friend that they\'re next. What do you say?',
    opts: ['mabruuk el-mawluud', '3a l-baal', 'yTawwil 3umrak', 'mista7il'],
    ans: 1,
    exp: '"3a l-baal" = "may yours be next / on the wish." Typically said to single guests at a wedding, implying "your wedding is on our mind."'
  },
  {
    q: 'Your Lebanese coworker just got promoted. What do you say?',
    opts: ['yi7ya l-jam3', 'ya3Tiik el-3aafye', 'alla ykhallii-lak iyya', '3iid milaad sa3iid'],
    ans: 1,
    exp: '"ya3Tiik el-3aafye" = "may God give you strength/health." Said after any achievement or hard work. Also just responding to someone finishing a task.'
  },
  {
    q: 'Eid al-Fitr just started. What do you say to your Muslim Lebanese friend?',
    opts: ['masii7 mubaarak', '3iid fiTr sa3iid', 'kull sane w-inta Tayyib', 'bil-rifaa w-el-baniin'],
    ans: 1,
    exp: '"3iid fiTr sa3iid" = "Happy Eid al-Fitr." Specifically the end-of-Ramadan Eid. "3iid mubaarak" also works. "masii7 mubaarak" is Christmas.'
  },
  {
    q: 'Someone says "mabruuk" to you after your graduation. What do you reply?',
    opts: ['kasak', 'alla ybaarak fiik', 'Sa7tein', 'minnak la-alla'],
    ans: 1,
    exp: '"alla ybaarak fiik" = "May God bless you." The most natural gracious response. "w-iyyaak" (and you too) also works if reciprocating the same blessing.'
  },
];

const CEL_TIPS = [
  {
    title: '🎂 Kull sane vs. 3iid milaad',
    body: '"Kull sane w-inta/inti Tayyib/Tayyibe" is what Lebanese people actually say to each other on birthdays in daily conversation. "3iid milaad sa3iid" sounds more formal/written. If you want to sound natural, go with "kull sane." Add the person\'s name for warmth: "kull sane w-inta Tayyib ya [name]!"'
  },
  {
    title: '🥂 Toast culture',
    body: '"Kasak" (m) / "kassiki" (f) / "kaskon" (plural) is the standard clinking toast. CRUCIAL: always make eye contact when you say it — not making eye contact at a Lebanese table is considered very bad luck (7 years of bad sex, according to the Lebanese). Say it looking directly at the person you\'re toasting.'
  },
  {
    title: '✨ Mabruuk vs. alf mabruuk',
    body: '"Mabruuk" works for everything. "Alf mabruuk" (a thousand congratulations) is for big moments: engagement, new baby, big promotion. There\'s also "mabruukon" (plural — to the couple or family). Lebanese people tend to be expressive — don\'t hesitate to use "alf mabruuk" freely for big moments.'
  },
  {
    title: '🤲 Responses to blessings',
    body: '"Alla ybaarak fiik" (m) / "fiiki" (f) is the go-to response to any blessing. "W-iyyaak/iyyaki" (and you too) returns the same wish back. "Minnak la-alla" (from you to God) humbly attributes the blessing to God, showing gratitude. Lebanese people layer these responses — "alla ybaarak fiik, w-iyyaak, minnak la-alla" in one breath is normal.'
  },
  {
    title: '👶 New baby culture',
    body: '"Mabruuk el-mawluud" is the standard new baby congrats. "Alla ykhallii-lak iyya" (may God keep the child for you) is a blessing reflecting Lebanese awareness of how precious children are — historically tied to high infant mortality rates, now a sincere cultural expression. "Yikbar bi-3izzak" (may he grow in your pride) is said looking at the baby.'
  },
];

const CEL_ABOUT = `<p><strong>🎉 Celebrations in Lebanese Life</strong></p>
<p>Lebanese people celebrate loudly and generously. Whether it's a birthday, engagement, new baby, graduation, or religious holiday, there's a specific phrase for the moment — and Lebanes people expect you to use it correctly.</p>
<p><strong>The mabruuk family:</strong> "Mabruuk" covers almost everything, but adding specifics shows care: "mabruuk el-khuTuube" (engagement), "mabruuk el-mawluud" (new baby), "mabruuk et-takhkharuj" (graduation). The response is always "alla ybaarak fiik."</p>
<p><strong>Birthdays:</strong> "Kull sane w-inta/inti Tayyib/Tayyibe" is the real Lebanese birthday phrase. It literally means "may every year find you healthy/well." More heartfelt than the generic "happy birthday."</p>
<p><strong>Toasts — the eye contact rule:</strong> At a Lebanese table, not making eye contact when saying "kasak" is considered very bad luck. Every person at the table should be acknowledged. Glasses must clink and eyes must meet.</p>
<p><strong>Religious celebrations:</strong> Lebanon is multi-religious (Sunni, Shia, Druze, Maronite, Orthodox, Greek Catholic...) and Lebanese people freely congratulate each other across religious lines. Saying "3iid mubaarak" to a Muslim friend or "masii7 mubaarak" to a Christian friend is normal and appreciated.</p>
<p><strong>Sa7tein:</strong> This deserves special mention — said after someone eats or drinks, it means "double health to you." The cook/host responds "3a albak" (to your heart) or just smiles. It's one of the most used phrases at Lebanese tables.</p>`;
