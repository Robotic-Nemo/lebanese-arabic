// R618 — NEW FEATURE: Lebanese Wedding & Celebration Phrases (wcp)

const WCP_CATS = [
  { id: 'congrats',  label: '🎉 Congratulations' },
  { id: 'wedding',   label: '💍 Wedding' },
  { id: 'blessings', label: '🤲 Blessings' },
  { id: 'toasts',    label: '🥂 Toasts' },
];

const WCP_PHRASES = [
  // Congratulations
  { id: 'wcp01', cat: 'congrats', ar: 'مبروك', tr: 'mabrook', en: 'Congratulations!', note: 'The all-purpose congratulations word. Used for everything — weddings, births, new jobs, graduations.' },
  { id: 'wcp02', cat: 'congrats', ar: 'ألف مبروك', tr: '2alf mabrook', en: 'A thousand congratulations!', note: 'Stronger version — literally "a thousand congratulations". Used for big occasions.' },
  { id: 'wcp03', cat: 'congrats', ar: 'يعطيك العافية', tr: 'ya3tik l-3afye', en: 'May God give you health/strength', note: 'Said to acknowledge effort or accomplishment. Also used to say "good work / well done".' },
  { id: 'wcp04', cat: 'congrats', ar: 'الله يبارك فيك', tr: 'allah yibarak fik', en: 'May God bless you', note: 'A heartfelt blessing — response to mabrook is often "allah yibarak fik".' },
  { id: 'wcp05', cat: 'congrats', ar: 'كل عام وأنتم بخير', tr: 'kull 3am w-intu b-kheir', en: 'Happy every year / Happy anniversary or holiday', note: 'The standard phrase for yearly occasions — birthdays, Eid, holidays. Response: "w-inta/inti b-kheir".' },
  { id: 'wcp06', cat: 'congrats', ar: 'عقبال عندك', tr: '3oubel 3andak', en: 'May you be next! (for marriage/good news)', note: 'Said to an unmarried person at weddings or when hearing good news. 3oubel 3andek (to a woman).' },
  // Wedding
  { id: 'wcp07', cat: 'wedding', ar: 'بالرفاه والبنين', tr: 'bi-r-rafa w-l-banin', en: 'May you have prosperity and sons', note: 'Traditional wedding blessing. Somewhat old-fashioned, but still widely used.' },
  { id: 'wcp08', cat: 'wedding', ar: 'يخليكم لبعض', tr: 'yakhlikkon la-ba3d', en: 'May God keep you for each other', note: 'Heartfelt wedding wish — wishing the couple stay together.' },
  { id: 'wcp09', cat: 'wedding', ar: 'عقبال ما تشيلوا ولادكم', tr: '3oubel ma tshilu wladkon', en: 'May you soon carry your children (= have kids)', note: 'Traditional wedding wish for children. "3oubel" = may it soon happen.' },
  { id: 'wcp10', cat: 'wedding', ar: 'الله يتمم عاليكن بالخير', tr: 'allah yitmim 3aleikon bi-l-kheir', en: 'May God complete this upon you in goodness', note: 'Said at weddings or during good news — wishing the occasion concludes with blessings.' },
  { id: 'wcp11', cat: 'wedding', ar: 'مبروك النجوم', tr: 'mabrook l-njum', en: 'Congratulations, stars! (to the couple)', note: 'Poetic congratulation calling the couple "stars" — used in toasts and wedding speeches.' },
  // Blessings
  { id: 'wcp12', cat: 'blessings', ar: 'الله يحميك', tr: 'allah y7umik', en: 'May God protect you', note: 'General blessing for safety and protection. Used when someone is traveling or in danger.' },
  { id: 'wcp13', cat: 'blessings', ar: 'الله معك', tr: 'allah ma3ak', en: 'God be with you', note: 'Said as a farewell blessing or wish of support.' },
  { id: 'wcp14', cat: 'blessings', ar: 'يسعدك', tr: 'yis3idak', en: 'May you be happy / May it make you happy', note: 'Wishing happiness. Also used as thanks response: someone says "mabrook" → you say "yis3idak".' },
  { id: 'wcp15', cat: 'blessings', ar: 'إن شاء الله على خير', tr: 'inshallah 3a-kheir', en: 'God willing, may it be for the best', note: 'Said when something uncertain is ahead — hoping it works out well.' },
  { id: 'wcp16', cat: 'blessings', ar: 'ربنا يوفقك', tr: 'rabbna ywaffiqak', en: 'May God grant you success', note: 'Blessing for someone starting something — a new job, exam, venture. rabbna = our Lord.' },
  { id: 'wcp17', cat: 'blessings', ar: 'عيشوا وتعمروا', tr: '3ishu w-t3ammru', en: 'Live long and prosper / May you live and thrive', note: 'Said to a couple or family. 3ishu = may you live, t3ammru = may you build (a life).' },
  // Toasts
  { id: 'wcp18', cat: 'toasts', ar: 'كاسك', tr: 'kasak', en: 'To your glass! / Cheers!', note: 'Standard Lebanese toast. kasek (to a woman). Glasses clink on the k of kasak.' },
  { id: 'wcp19', cat: 'toasts', ar: 'صحتين', tr: 'sa7tein', en: 'To your health! (twice)', note: 'Response after someone says "sa77a" (health). "sa7tein w-3ala albak" = health twice and to your heart.' },
  { id: 'wcp20', cat: 'toasts', ar: 'بصحتك', tr: 'b-sa77tak', en: 'To your health!', note: 'Another common toast. b-sa77tek (to a woman). Often said before drinking.' },
  { id: 'wcp21', cat: 'toasts', ar: 'على عيونك', tr: '3ala 3younak', en: 'To your eyes! / For your sake!', note: 'Romantic/affectionate toast. 3ala 3younik (to a woman). Means "I do this for you."' },
  { id: 'wcp22', cat: 'toasts', ar: 'يحيا الحب', tr: 'ye7ya l-7obb', en: 'Long live love!', note: 'Wedding toast. ye7ya = long live. A common exclamation at celebrations.' },
  { id: 'wcp23', cat: 'toasts', ar: 'على حبنا', tr: '3ala 7obbna', en: 'To our love!', note: 'Intimate toast between a couple. 7obb = love.' },
];

const WCP_DRILLS = [
  { q: 'How do you say "Congratulations"?', opts: ['yis3idak', 'mabrook', 'kasak', 'sa7tein'], ans: 1, exp: 'mabrook (مبروك) = congratulations. The most common celebration word in Lebanese Arabic.' },
  { q: 'What does "ya3tik l-3afye" mean?', opts: ['Congratulations!', 'May God protect you', 'May God give you health/strength', 'To your health'], ans: 2, exp: 'ya3tik l-3afye = may God give you energy/health. Said to acknowledge effort or good work.' },
  { q: 'How do you wish a couple "May you be next!" at a wedding?', opts: ['mabrook l-njum', '3oubel 3andak', 'bi-r-rafa w-l-banin', 'yakhlikkon la-ba3d'], ans: 1, exp: '3oubel 3andak = may you be next (at a wedding). 3oubel 3andek (to a woman).' },
  { q: 'What is the traditional Lebanese wedding blessing meaning "prosperity and sons"?', opts: ['yakhlikkon la-ba3d', '3ishu w-t3ammru', 'bi-r-rafa w-l-banin', 'allah yitmim 3aleikon'], ans: 2, exp: 'bi-r-rafa w-l-banin = with prosperity and sons. A traditional wedding blessing, still widely used.' },
  { q: 'How do you say "Cheers!" (to your glass)?', opts: ['sa7tein', '3ala 3younak', 'kasak', 'b-sa77tak'], ans: 2, exp: 'kasak = to your glass / cheers! kasek (to a woman). The standard Lebanese drinking toast.' },
  { q: 'What does "sa7tein" mean?', opts: ['To your eyes!', 'To your health (twice)', 'Long live love!', 'May God bless you'], ans: 1, exp: 'sa7tein = to your health twice. A warm response to "sa77a" (health). sa77a = health.' },
  { q: 'How do you say "May God bless you"?', opts: ['allah y7umik', 'allah yibarak fik', 'rabbna ywaffiqak', 'allah ma3ak'], ans: 1, exp: 'allah yibarak fik = may God bless you. A standard response to mabrook and general blessing.' },
  { q: 'What does "kull 3am w-intu b-kheir" mean?', opts: ['May you have children soon', 'Happy every year / Happy holiday', 'Long live love!', 'May God protect you'], ans: 1, exp: 'kull 3am w-intu b-kheir = happy every year. Used for birthdays, Eid, anniversaries.' },
  { q: 'How do you say "May God keep you for each other"?', opts: ['allah yitmim 3aleikon', 'yakhlikkon la-ba3d', '3ishu w-t3ammru', 'bi-r-rafa w-l-banin'], ans: 1, exp: 'yakhlikkon la-ba3d = may God keep you for each other. A heartfelt wedding wish.' },
  { q: 'What does "rabbna ywaffiqak" mean?', opts: ['May you be happy', 'May God protect you', 'May God grant you success', 'God be with you'], ans: 2, exp: 'rabbna ywaffiqak = may God grant you success. Said when someone starts something new.' },
  { q: 'How do you toast "To your eyes!"?', opts: ['kasak', 'b-sa77tak', '3ala 3younak', 'ye7ya l-7obb'], ans: 2, exp: '3ala 3younak = to your eyes / for your sake. Romantic toast. 3ala 3younik (to a woman).' },
  { q: 'What does "ye7ya l-7obb" mean?', opts: ['To our love!', 'Long live love!', 'Love is beautiful', 'God bless love'], ans: 1, exp: 'ye7ya l-7obb = long live love! ye7ya = long live. A festive wedding exclamation.' },
  { q: 'What is "inshallah 3a-kheir"?', opts: ['Congratulations!', 'May God be with you', 'God willing, may it be for the best', 'To your health'], ans: 2, exp: 'inshallah 3a-kheir = God willing, may it turn out well. Said about uncertain outcomes.' },
  { q: 'What does "3ishu w-t3ammru" mean?', opts: ['To your eyes!', 'May you have sons', 'Live long and prosper / May you thrive', 'To your health twice'], ans: 2, exp: '3ishu w-t3ammru = live (long) and build (a life). Said to couples and families.' },
  { q: 'How do you say "a thousand congratulations"?', opts: ['mabrook', '2alf mabrook', 'ya3tik l-3afye', 'allah yibarak fik'], ans: 1, exp: '2alf mabrook = a thousand congratulations. Stronger than mabrook alone — for big occasions.' },
];

const WCP_TIPS = [
  { title: 'mabrook everywhere', body: '"Mabrook" (مبروك) is the Swiss Army knife of Lebanese celebrations. New job, new baby, new car, engagement, passing an exam, moving house — all get mabrook. Saying it twice "mabrook mabrook" shows extra enthusiasm.' },
  { title: 'Responding to mabrook', body: 'When someone says mabrook to you, the classic response is "allah yibarak fik" (may God bless you). More casually: "yis3idak" (may you be happy) or simply "shukran" (thank you).' },
  { title: 'Wedding phrase culture', body: '"Bi-r-rafa w-l-banin" (prosperity and sons) is the traditional wedding phrase, though modern couples may prefer "3ishu w-t3ammru" (live long and prosper). Both are safe at Lebanese weddings.' },
  { title: 'Toasting in Lebanon', body: 'Lebanese drinking toasts: "kasak!" with clinking glasses, "sa77a!" (health), "b-sa77tak!" (to your health). Non-drinkers join by raising their glass and saying "kasak" anyway — it\'s about the gesture, not the drink.' },
  { title: '3oubel — wishing you next', body: '"3oubel 3andak" (may you be next) is said to unmarried guests at weddings. It\'s enthusiastic, not pressure — just wishing good things. Saying it to someone already married is a social blunder to avoid.' },
  { title: 'Ya3tik l-3afye uses', body: '"Ya3tik l-3afye" covers many situations: someone finishes hard work ("ya3tik l-3afye!"), you leave someone still working ("ya3tik l-3afye"), passing a meal being prepared ("ya3tik l-3afye"). It\'s a versatile acknowledgment of effort.' },
];
