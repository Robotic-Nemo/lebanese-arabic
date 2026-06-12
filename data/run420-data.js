// Run #420 — Lebanese Terms of Endearment & Affection Coach (tnd)
// Categories: beloved | family-address | admiration | blessings | warmth

const TND_WORDS = [
  // beloved
  { ar: 'حبيبي / حبيبتي', tr: '7abibi / 7abibti', en: 'my love / my dear (m/f) — the most universal Lebanese endearment', cat: 'beloved' },
  { ar: 'يا عمري', tr: 'ya 3omri', en: 'my life (lit. my lifespan) — deepest affection for someone', cat: 'beloved' },
  { ar: 'يا روحي', tr: 'ya ruu7i', en: 'my soul — said to someone you cannot live without', cat: 'beloved' },
  { ar: 'يا قلبي', tr: 'ya 2albi', en: 'my heart — tender address to a loved one', cat: 'beloved' },
  { ar: 'يا حياتي', tr: 'ya 7ayaati', en: 'my life — very romantic, also said by parents to children', cat: 'beloved' },
  { ar: 'يا نور عيني', tr: 'ya nuur 3einii', en: 'light of my eye — said to cherished children and partners', cat: 'beloved' },
  { ar: 'يا ستي', tr: 'ya sittii', en: 'my lady / my dear (to women & girls — term of gentle respect)', cat: 'beloved' },
  { ar: 'يا خيي', tr: 'ya khayyi', en: 'my brother (friendly address — also said to strangers warmly)', cat: 'beloved' },
  // family-address
  { ar: 'يمّا', tr: 'yamma', en: 'mom (affectionate calling — also "ya ommi" in formal Arabic)', cat: 'family-address' },
  { ar: 'يابا', tr: 'yaaba', en: 'dad (affectionate calling — Lebanese children say this constantly)', cat: 'family-address' },
  { ar: 'يا عمّي', tr: 'ya 3ammi', en: 'my uncle — respectful address to any older man', cat: 'family-address' },
  { ar: 'يا خالتي', tr: 'ya khaalti', en: 'my aunt — respectful address to any older woman', cat: 'family-address' },
  { ar: 'يا ستي', tr: 'ya siiti', en: 'my grandmother (teta in urban Lebanese — siiti in village speech)', cat: 'family-address' },
  { ar: 'يا جدّي', tr: 'ya jiddi', en: 'my grandfather — affectionate address to grandfather', cat: 'family-address' },
  { ar: 'يا عمّو', tr: 'ya 3ammo', en: 'uncle (affectionate — children say this to friendly adult men)', cat: 'family-address' },
  { ar: 'يا أختي', tr: 'ya ukhti', en: 'my sister — warm address between women friends and strangers', cat: 'family-address' },
  // admiration
  { ar: 'شاطر / شاطرة', tr: 'shaaTer / shaaTra', en: 'clever / skilled (m/f) — high praise for competence', cat: 'admiration' },
  { ar: 'حلو / حلوة', tr: 'helw / helwe', en: 'beautiful / lovely (m/f) — for people AND things', cat: 'admiration' },
  { ar: 'زعبيط', tr: 'za3biit', en: 'cute / adorable — mainly said about babies and small children', cat: 'admiration' },
  { ar: 'مرقّق', tr: 'mra22a2', en: 'polished / refined — saying someone has excellent taste and class', cat: 'admiration' },
  { ar: 'نبيه / نبيهة', tr: 'nabiih / nabiihe', en: 'smart / perceptive (m/f) — bright and quick-thinking', cat: 'admiration' },
  { ar: 'شو فيك', tr: 'shu fiik', en: 'what\'s in you! — exclamation of admiration (what a person you are)', cat: 'admiration' },
  { ar: 'على قلبي', tr: '3ala 2albi', en: 'on my heart — warm expression of appreciation (you mean so much)', cat: 'admiration' },
  { ar: 'ما في متلك', tr: 'ma fi mitlak', en: 'there\'s no one like you (m) — ultimate compliment of uniqueness', cat: 'admiration' },
  // blessings
  { ar: 'الله يخليك', tr: 'alla ykhalllik', en: 'may God keep you — blessing said to someone who helped you', cat: 'blessings' },
  { ar: 'دلّع عيناك', tr: 'dalla 3einak', en: 'may your eye be spoiled (with beauty) — deep blessing of protection', cat: 'blessings' },
  { ar: 'الله يحميك', tr: 'alla y7miik', en: 'may God protect you — said with genuine care', cat: 'blessings' },
  { ar: 'عِيش وحيا', tr: '3iish w 7ya', en: 'live and thrive — blessing said on good news or reunion', cat: 'blessings' },
  { ar: 'تكرم عينك', tr: 'tikram 3einak', en: 'may your eye be honored — response when someone praises you', cat: 'blessings' },
  { ar: 'الله يخليلي إياك', tr: 'alla ykhallii-lii yyaak', en: 'may God keep you for me — said to someone you cannot bear to lose', cat: 'blessings' },
  { ar: 'يسلم إيديك', tr: 'yislamu ideiik', en: 'may your hands be blessed — thank you for work done with hands', cat: 'blessings' },
  { ar: 'الله يعطيك الصحة', tr: 'alla ya3Tiik is-si77a', en: 'may God give you health — said after any effort on your behalf', cat: 'blessings' },
  // warmth
  { ar: 'عم بشتاقلك', tr: '3am bishtaa2-lak', en: 'I\'m missing you (active present) — Lebanese present-tense missing', cat: 'warmth' },
  { ar: 'بحبك', tr: 'b7ibbak / b7ibbik', en: 'I love you (m/f) — Lebanese dialect love declaration', cat: 'warmth' },
  { ar: 'حضرتك', tr: '7aDretak', en: 'your presence (formal polite address — also expresses esteem)', cat: 'warmth' },
  { ar: 'قلبي فيك', tr: '2albi fiik', en: 'my heart is with you — said in sympathy or longing', cat: 'warmth' },
  { ar: 'الله معك', tr: 'alla ma3ak', en: 'God be with you — warm farewell blessing', cat: 'warmth' },
  { ar: 'تعبنا من فراقك', tr: 'ta3abna min firaaqak', en: 'we\'re exhausted from missing you — dramatic expression of deep longing', cat: 'warmth' },
  { ar: 'كتير منحبك', tr: 'ktiir mn7ibbak', en: 'we love you so much — collective warm expression to someone beloved', cat: 'warmth' },
  { ar: 'يا غالي', tr: 'ya ghaali', en: 'my precious one (lit. my expensive one) — you are so valuable to me', cat: 'warmth' },
];

const TND_DRILLS = [
  {
    q: 'A grandmother pinches her baby grandchild\'s cheeks and says "يا _______!" meaning the baby is unbearably cute. What word fits?',
    opts: ['زعبيط (za3biit — adorable)', 'شاطر (shaaTer — clever)', 'نبيه (nabiih — smart)', 'مرقّق (mra22a2 — refined)'],
    correct: 0,
    note: '"Za3biit" (زعبيط) — absolutely adorable. The Lebanese word for cuteness overload, almost exclusively used for babies and small children. The pinching cheeks + za3biit combo is a universal Lebanese grandmother move. "Shuu za3biit!" = how adorable! Note: there\'s no word in Lebanese for "too cute" — the concept doesn\'t compute. Babies cannot be too cute. Adults saying za3biit to non-children is gently teasing. The word has a round, cuddly sound that matches what it means.',
  },
  {
    q: 'Someone does you a big favor. You want to bless them and say "may God keep you." Which phrase?',
    opts: ['الله يخليك (alla ykhalllik)', 'الله يحميك (alla y7miik)', 'عيش وحيا (3iish w 7ya)', 'يسلم إيديك (yislamu ideiik)'],
    correct: 0,
    note: '"Alla ykhalllik" (الله يخليك) — may God keep you. The most versatile blessing after receiving help. "Khalla" = to keep/preserve. You\'re asking God to preserve this person in your life. Response: "alla ykhalliik" back, or "alla ykhalli l-jami3" (may God keep everyone). "Alla y7miik" (protect) is used when there\'s a specific threat. "3iish w 7ya" is for good news reunions. "Yislamu ideiik" specifically blesses hands after physical work. Master alla ykhalllik first — it goes with almost everything.',
  },
  {
    q: 'A Lebanese parent proudly tells their child "you\'re so _______!" after they solve a hard math problem. Best word?',
    opts: ['شاطر (shaaTer — clever/skilled)', 'حلو (helw — beautiful)', 'يا عمري (ya 3omri — my life)', 'زعبيط (za3biit — cute)'],
    correct: 0,
    note: '"ShaTer" (شاطر) — clever, skilled, good at things. The highest praise a Lebanese parent gives a child for competence. "Shuu shaaTer!" = how clever you are! Feminine: "shaaTra". "ShaTer" is used for any skill: math, cooking, sports, fixing things. It implies natural talent + hard work. "Yalla, koon shaaTer" = come on, be smart about this (directive). In Lebanese culture, being called shaaTer by your parents is formative — it becomes a personal identity. "Shaatir bass 3alaik" = I\'m counting on your cleverness.',
  },
  {
    q: 'Someone compliments your work. You humbly deflect the praise and say "may your eye be honored." Which phrase?',
    opts: ['تكرم عينك (tikram 3einak)', 'الله يخليك (alla ykhalllik)', 'دلّع عيناك (dalla 3einak)', 'على قلبي (3ala 2albi)'],
    correct: 0,
    note: '"Tikram 3einak" (تكرم عينك) — may your eye be honored. The standard Lebanese response when someone praises you or your work. It\'s simultaneously modest (deflecting the praise back to the praiser\'s eyes) and gracious. Eye metaphors are central to Lebanese blessings: the eye sees and values things. "Tikram" = to be honored/respected. "3einak" = your eye. Full meaning: "the eye that sees my work well deserves to be honored." Can be said after any compliment. Non-Lebanese who learn this phrase win instant respect from Lebanese speakers.',
  },
  {
    q: 'You haven\'t seen your Lebanese friend in months. They say "______ من فراقك!" expressing how much they missed you. Fill in.',
    opts: ['تعبنا (ta3abna — we\'re exhausted)', 'بحبك (b7ibbak — I love you)', 'مرقّق (mra22a2 — refined)', 'يا غالي (ya ghaali — my precious)'],
    correct: 0,
    note: '"Ta3abna min firaaqak" (تعبنا من فراقك) — we\'re exhausted/tired from missing you. Lebanese emotional expression is vivid and physical — you don\'t just miss someone, you\'re exhausted by the missing. "Ta3ab" = to be tired. "Firaaq" = separation. The exhaustion is real: Lebanese culture treats prolonged absence from loved ones as a kind of physical burden. "Walla ta3abt min fira2ak" = I swear I\'m tired from missing you. Response: "ana kamen" (me too) or "alla ma yfarri2na tani" (may God never separate us again).',
  },
  {
    q: 'An older Lebanese man you don\'t know well does something kind for you. What do you call him respectfully?',
    opts: ['يا عمّي (ya 3ammi — my uncle)', 'يا خيي (ya khayyi — my brother)', 'يا حبيبي (ya 7abibi — my dear)', 'يا غالي (ya ghaali — my precious)'],
    correct: 0,
    note: '"Ya 3ammi" (يا عمّي) — my uncle. Used to address any older man respectfully, not just actual uncles. This extension of family titles to strangers is core Lebanese social behavior — you fold everyone into your imaginary family. "Ya 3ammi, kif el-7al?" = uncle, how are you? For older women: "ya khaalti" (my aunt). For men your age: "ya akhii" or "ya khayyi" (my brother). For young boys: "ya ibni" (my son). For women your age: "ya ukhti" (my sister). Mastering these forms shows you understand Lebanese social intimacy.',
  },
  {
    q: 'Someone does you a special physical service — handmade food, fixing something, a massage. What specific blessing do you give?',
    opts: ['يسلم إيديك (yislamu ideiik — may your hands be blessed)', 'الله يخليك (alla ykhalllik — may God keep you)', 'تكرم عينك (tikram 3einak — may your eye be honored)', 'على قلبي (3ala 2albi — on my heart)'],
    correct: 0,
    note: '"Yislamu ideiik" (يسلم إيديك) — may your hands be blessed. Specific blessing for hands after physical work. Lebanese culture assigns unique value to hands: they knead dough, fix engines, give massages, make food. Blessing the hands specifically honors the physical labor and skill. "Yislam" = may it be intact/safe/blessed. "Ideiik" = your two hands (dual form). This phrase is used so often that Lebanese mothers who make kibbe by hand expect to hear it. If someone cooks for you and you don\'t say this, you\'re a social failure.',
  },
  {
    q: 'Your Lebanese friend\'s baby is deeply adorable. You say "يا _____ عيني" meaning "light of my eye."',
    opts: ['نور (nuur — light)', 'روح (ruu7 — soul)', 'قلب (2alb — heart)', 'حياة (7ayaat — life)'],
    correct: 0,
    note: '"Ya nuur 3einii" (يا نور عيني) — light of my eye. Said to beloved children and cherished people. The eye in Lebanese culture is precious — what lights your eye is what you love most. "Nuur" = light. "3ein" = eye. "Ya nuur 3enii, kif 7alak?" = light of my eye, how are you? Also: "ya 2albi" (my heart), "ya ruu7i" (my soul), "ya 7ayaati" (my life) — all used for the deepest loves. These metaphors form a system: heart, soul, eye, life — the four most precious things you can offer someone as a name.',
  },
  {
    q: 'When do Lebanese people say "الله يخليلي إياك" (alla ykhallii-lii yyaak)?',
    opts: ['To someone they cannot bear to lose — "may God keep you for me"', 'Greeting someone who arrived safely', 'After someone gives a gift', 'When saying formal goodnight'],
    correct: 0,
    note: '"Alla ykhallii-lii yyaak" (الله يخليلي إياك) — may God keep you for me. The possessive makes this deeply personal: not just "may God keep you" generically, but "keep you SPECIFICALLY FOR ME." Said to people whose loss would be unbearable: a beloved parent, a child, a best friend. The -lii (for me) transforms a general blessing into a declaration of personal need. Often said with tears, in reunion after long separation, or when someone is ill. Hearing this from a Lebanese person means you are irreplaceable in their life.',
  },
  {
    q: 'Your Lebanese partner does something wonderful. You want to say the Lebanese equivalent of "I love you." What do you say?',
    opts: ['بحبك (b7ibbak — I love you, to m)', 'يا حبيبي (ya 7abibi — my dear)', 'على قلبي (3ala 2albi — on my heart)', 'ما في متلك (ma fi mitlak — no one like you)'],
    correct: 0,
    note: '"B7ibbak" (بحبك) — I love you, said to a male. To a female: "b7ibbik." The "b-" prefix is the Lebanese present tense marker — "b7ibb" = I love (ongoing, present). MSA "u7ibbuka" sounds formal and stiff in Lebanese. "B7ibbak ktir" = I love you so much. "Walla b7ibbak" = I swear I love you. Lebanese people also show love through the other phrases — "ya 3omri", "ya ruu7i", "ya 7ayaati" — which can feel even more intimate than "b7ibbak" because they identify you AS their life, soul, breath. Actions and blessings often carry more weight than direct declarations.',
  },
];

const TND_TIPS = [
  'Lebanese terms of endearment form an entire parallel language of intimacy. What makes them unique is their scale: words that in English would be reserved for romantic partners are used casually in Lebanon between friends, parents, shopkeepers, even strangers. "7abibi" is said to the taxi driver. "Ya 3ammi" is said to the man who fixed your car. The intimacy level calibrates automatically based on context, tone, and relationship — Lebanese speakers navigate this unconsciously. For learners: err on the side of using these terms. Lebanon responds warmly to affectionate language. Not using them creates an emotional distance Lebanese culture finds odd.',
  'The eye metaphor is everywhere in Lebanese blessings. "Ya nuur 3einii" (light of my eye), "dalla 3einak" (may your eye be spoiled), "tikram 3einak" (may your eye be honored), "3ein il-7asud" (the envier\'s eye). Eyes represent perception, attention, care, and vulnerability in Lebanese culture. What you see you value; what values you blesses you. "3ala 3einii" (on my eye) = with the greatest care and attention. "Walla la faret 3einak" = by God I will not let your eye go unseeing (I will make sure you are pleased). Learning the eye vocabulary unlocks a deep layer of Lebanese emotional expression.',
  'Family address terms extend to strangers — this is not hyperbole, it\'s social architecture. Calling an older man "ya 3ammi" (my uncle) brings him into your temporary family. Calling a woman your mother\'s age "ya khaalti" (my aunt) creates instant warmth. Lebanese society is built on extended family networks, and address language recreates those networks everywhere you go. In a bakery: "ya 3ammo, baddii ka3k" = uncle, I want ka3k bread. In a taxi: "ya ustaz" (respected teacher/sir) for educated or older men. This system means no one is a stranger — everyone is a misplaced relative.',
  'Blessings in Lebanese are precise instruments. "Alla ykhalllik" (may God keep you) is for after help. "Alla y7miik" (may God protect you) is for when there\'s a threat. "3iish w 7ya" (live and thrive) is for good news. "Alla ykhalliilii yyaak" (may God keep you for me) is for people you desperately need. "Yislamu ideiik" (your hands be blessed) is for physical service. Using the wrong blessing signals that you\'re operating from a phrasebook, not from genuine feeling. The right blessing at the right moment shows you understand what just happened between you. Lebanese people notice this.',
  'Lebanese love declarations often come wrapped in dramatic suffering language: "ta3abt min fira2ak" (I\'m tired from missing you), "3am iishii bass 3ala fikrak" (I\'m barely living just thinking of you), "mit min il-ishtiyaa2" (I died from longing). This is NOT exaggeration for effect — it\'s the emotional register that Lebanese consider appropriate for deep feeling. Understated expressions of love ("I\'ve been thinking about you" in English) can read as cold or disinterested in Lebanese. The dramatic scale of expression is matched by the dramatic scale of Lebanese joy, grief, hospitality, and celebration. Fullness of feeling, always.',
];

const TND_ABOUT = 'Lebanese terms of endearment are a complete emotional vocabulary — a second language within the language for navigating love, respect, family, and belonging. What strikes outsiders is the porousness: endearments cross the boundaries of romance, family, friendship, and service without friction. A Lebanese person speaking with genuine warmth to a stranger at the market is not performing — they\'re extending the natural architecture of Lebanese social life, which organizes the world into one vast, slightly chaotic family. Learning these terms is not just vocabulary acquisition; it\'s learning how Lebanese people make each other feel seen, valued, and protected through language. The endearments are the warmth infrastructure of Lebanese culture.';
