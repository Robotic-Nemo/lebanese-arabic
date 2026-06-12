// Run #306 — Lebanese Hospitality & Guest Culture Coach (hsp)
// Hosting, offering, receiving guests, generosity phrases, Lebanese karam culture — 40 items, MCQ drill, 5 tips

const HSP_WORDS = [
  // welcoming guests
  { tr: 'ahlan wa sahlan',  ar: 'أهلاً وسهلاً',    en: 'welcome (formal)',                cat: 'welcome' },
  { tr: 'tfaDDal / tfaDDali', ar: 'تفضّل / تفضّلي', en: 'please come in / help yourself (m/f)', cat: 'welcome' },
  { tr: 'nuurtu l-beit',   ar: 'نوّرتو البيت',      en: 'you lit up the house (welcome)',   cat: 'welcome' },
  { tr: 'Hayyo-na',        ar: 'حيّونا',            en: 'you blessed us (by coming)',        cat: 'welcome' },
  { tr: 'shirraf-na',      ar: 'شرّفنا',            en: 'you honored us (by coming)',        cat: 'welcome' },
  { tr: 'Hayye mniH',      ar: 'حيّي منيح',          en: 'make yourself at home',             cat: 'welcome' },
  { tr: 'inta bi-beitak',  ar: 'إنت ببيتك',          en: 'you are in your own home',          cat: 'welcome' },
  { tr: 'wayn raayi7?',    ar: 'وين رايح؟',          en: 'where are you going? (don\'t leave)', cat: 'welcome' },
  // offering food & drink
  { tr: 'tfaDDal kol',     ar: 'تفضّل كول',          en: 'please eat (m)',                   cat: 'offering' },
  { tr: 'la2 ma baakol',   ar: 'لا ما باكول',         en: 'no I won\'t eat (polite refusal)',  cat: 'offering' },
  { tr: 'saHtein',         ar: 'صحتين',              en: 'bon appétit / to your health',      cat: 'offering' },
  { tr: '3ala 2albak',     ar: 'على قلبك',           en: 'to your heart (reply to saHtein)',  cat: 'offering' },
  { tr: 'shu btishrab?',   ar: 'شو بتشرب؟',          en: 'what would you like to drink?',    cat: 'offering' },
  { tr: '2ahwe willa shaay?', ar: 'قهوة ولا شاي؟',   en: 'coffee or tea?',                   cat: 'offering' },
  { tr: 'zid / zidi',      ar: 'زيد / زيدي',         en: 'have more / take more (m/f)',       cat: 'offering' },
  { tr: 'bis-salameh',     ar: 'بالسلامة',           en: 'safely / bon appétit (after drink)', cat: 'offering' },
  // generosity phrases
  { tr: 'karam',           ar: 'كرم',               en: 'generosity / hospitality',          cat: 'generosity' },
  { tr: 'kariim',          ar: 'كريم',               en: 'generous (m)',                      cat: 'generosity' },
  { tr: 'ma bitkallaf',    ar: 'ما بتكلّف',           en: 'don\'t go to any trouble',          cat: 'generosity' },
  { tr: 'khajjalTna',      ar: 'خجّلتنا',            en: 'you\'ve embarrassed us (with your gifts)', cat: 'generosity' },
  { tr: '3azeemtak',       ar: 'عزيمتك',             en: 'your invitation / generosity',      cat: 'generosity' },
  { tr: 'Allah yibaarak fiik', ar: 'الله يبارك فيك', en: 'God bless you',                     cat: 'generosity' },
  { tr: 'tislam',          ar: 'تسلم',               en: 'bless you / thank you',             cat: 'generosity' },
  { tr: 'akramak Allah',   ar: 'أكرمك الله',          en: 'may God honor you',                 cat: 'generosity' },
  // guest behavior
  { tr: 'ma fi daawii',    ar: 'ما في داعي',          en: 'there\'s no need (you shouldn\'t have)', cat: 'guest' },
  { tr: 'walla walla',     ar: 'والله والله',          en: 'no really (insisting refusal)',     cat: 'guest' },
  { tr: 'ktir 3azeemtak',  ar: 'كتير عزيمتك',         en: 'your hospitality is too much',      cat: 'guest' },
  { tr: 'biddna ninSaraf', ar: 'بدنا ننصرف',          en: 'we need to leave now',              cat: 'guest' },
  { tr: 'yislamuu ideikun', ar: 'يسلمو إيديكن',       en: 'bless your hands (after meal)',     cat: 'guest' },
  { tr: 'alla yikhalli-lkon', ar: 'الله يخلّيلكن',    en: 'may God keep your family for you',  cat: 'guest' },
  // coffee culture
  { tr: '2ahwe 3arabiyye', ar: 'قهوة عربية',          en: 'Arabic coffee (cardamom)',          cat: 'coffee' },
  { tr: '2ahwe sade',      ar: 'قهوة سادة',           en: 'coffee without sugar',              cat: 'coffee' },
  { tr: '2ahwe maZbuuTa',  ar: 'قهوة مضبوطة',         en: 'coffee with medium sugar',          cat: 'coffee' },
  { tr: '2ahwe Helo',      ar: 'قهوة حلوة',           en: 'sweet coffee',                      cat: 'coffee' },
  { tr: 'nbiidh',          ar: 'نبيذ',               en: 'wine',                              cat: 'coffee' },
  { tr: '3ara2',           ar: 'عرق',                en: 'arak (anise spirit)',                cat: 'coffee' },
  { tr: 'na2na3',          ar: 'نعنع',               en: 'mint (for tea)',                    cat: 'coffee' },
  { tr: 'ma3 l-2ahwe',     ar: 'مع القهوة',           en: 'with the coffee (sweets/biscuits)', cat: 'coffee' },
  // departing
  { tr: 'ma3 l-salameh',   ar: 'مع السلامة',          en: 'go in safety (farewell)',           cat: 'farewell' },
  { tr: 'truu7 w tirja3',  ar: 'تروح وترجع',          en: 'go and come back',                  cat: 'farewell' },
];

const HSP_DRILLS = [
  {
    q: 'What does "nuurtu l-beit" mean?',
    opts: ['please sit down', 'you lit up the house (welcome)', 'dinner is ready', 'come visit us again'],
    correct: 1,
    note: '"nuurtu l-beit" = you lit up the house (نوّرتو البيت — nuur = light). Lebanese welcome expression when guests arrive. The highest compliment: your presence illuminates the home. "Nuurtu" = you (pl) lit/brightened. Also: "nuurti" (to one female guest). "Nuur 3ala nuur" = light upon light = even better. Lebanese hospitality vocabulary is full of light, honor, and blessing metaphors. Pair with physical welcome: Lebanese hosts typically stand at the door, hug, often three cheek kisses. The welcome is physical and verbal.'
  },
  {
    q: 'How do you say "you are in your own home" in Lebanese Arabic?',
    opts: ['shirraf-na', 'inta bi-beitak', 'Hayye mniH', 'tfaDDal'],
    correct: 1,
    note: '"inta bi-beitak" = you\'re in your own home (إنت ببيتك). The ultimate Lebanese hosting statement — the guest\'s comfort is treated as if they own the place. "beitak" = your house. Female guest: "inti bi-beitek". "Beitak beitna" = your house is our house (equal). Lebanese hosting culture: guest autonomy is total — the guest sets the agenda, and the host\'s job is to ensure every need is met. The host should never let a guest pour their own drink, carry their own plate, or feel any inconvenience.'
  },
  {
    q: 'What is "tfaDDal" used for in hosting contexts?',
    opts: ['to say goodbye', 'to please come in / help yourself', 'to offer more food', 'to thank a guest'],
    correct: 1,
    note: '"tfaDDal" = please / come in / help yourself (تفضّل — from فضل = grace/preference). The most versatile Lebanese hospitality word. "tfaDDal" alone can mean: come in, sit down, eat, take it, go ahead, after you. Female: "tfaDDali". Plural: "tfaDDalu". Lebanese daily use: pointing someone to a seat = "tfaDDal". Offering food = "tfaDDal kol". Letting someone through a door = "tfaDDal". Presenting something = "tfaDDal, haydaa ilak" (please, this is for you). Mastering "tfaDDal" timing is key to natural Lebanese hosting.'
  },
  {
    q: 'What does "saHtein" mean and when do you say it?',
    opts: ['welcome, please sit', 'bon appétit / to your health (said after eating/drinking)', 'please have more', 'the food is delicious'],
    correct: 1,
    note: '"saHtein" = two healths / bon appétit (صحتين — saHHa = health × 2). Said AFTER someone eats or drinks, and after haircuts. Response: "3ala 2albak" (to your heart). Lebanese ritual: when someone at the table finishes or you notice them eating, "saHtein." After a haircut, everyone who sees you says "saHtein." Lebanese health wishes are doubled — "saHtein w 3aafiye" = two healths and strength. The reply "3ala 2albak" wishes wellness back. Proper Lebanese hosting = tracking every guest\'s glass and plate, saying "saHtein" and "zid/zidi" constantly.'
  },
  {
    q: 'How do you say "there\'s no need" (when someone brings a gift) in Lebanese Arabic?',
    opts: ['ma bitkallaf', 'ma fi daawii', 'karam', 'ktir 3azeemtak'],
    correct: 1,
    note: '"ma fi daawii" = there\'s no need (ما في داعي — daawii = need/reason). Said when a guest brings a gift, food, or sweets. Lebanese social protocol: when guest arrives with chocolates or pastries: "ma fi daawii, walla!" The guest insists: "3aadi, shi bsiiT" (it\'s nothing, a small thing). Host accepts graciously. This exchange is MANDATORY — accepting a gift without saying "ma fi daawii" suggests you expected it. "Khajjaluna" (you\'ve embarrassed us with your generosity) is the upgraded version. Lebanese gift culture: never arrive empty-handed; never accept on first offer.'
  },
  {
    q: 'What does "khajjalTna" mean?',
    opts: ['you made us laugh', 'you\'ve embarrassed us (with your generous gifts)', 'you\'re too kind', 'you came at the wrong time'],
    correct: 1,
    note: '"khajjalTna" = you\'ve embarrassed us / overwhelmed us with generosity (خجّلتنا — from خجل = embarrassment/shyness). Positive shame: your gift is so generous it makes us embarrassed by comparison. "Khajjaltna" = you\'ve shamed us (in the best way). Said when a guest brings an extravagant gift, expensive sweets, or flowers. Lebanese compliment: the more elaborate the gift → the bigger the "khajjalTna." Reply: "la2 walla, shi bsiiT" (no honestly, a small thing). Lebanese generosity competition: hosts and guests try to outgive each other.'
  },
  {
    q: 'How do you say "bless your hands" (after a meal) in Lebanese Arabic?',
    opts: ['saHtein', 'ma3 l-salameh', 'yislamuu ideikun', 'tislam'],
    correct: 2,
    note: '"yislamuu ideikun" = bless your hands (يسلمو إيديكن — yislam = be safe/blessed, ideikun = your hands [pl]). Said to the cook/hosts after a meal. Shorter: "tislam ideik" (your hands be blessed — to one person). "Ideik" = your two hands. Lebanese food appreciation ritual: after a meal, every guest thanks the cook personally, touching their heart. "Kteer laziiz" (very delicious) + "tislam ideik" = complete compliment package. The host replies: "saHtein 3aleikun" (bon appétit to all of you). Hands symbolize labor and care in Lebanese culture.'
  },
  {
    q: 'What is "3ara2" in Lebanese hospitality context?',
    opts: ['a type of Lebanese mezze', 'arak (anise spirit) — the national drink', 'strong black coffee', 'homemade wine'],
    correct: 1,
    note: '"3ara2" = arak (عرق — from عرق = sweat, as the distillation process). Lebanon\'s national spirit: anise-flavored, 50-60% alcohol. Turns milky white when mixed with water and ice — "bleaches" the glass. Served with mezze: "3ara2 ma3 meze" = arak with mezze is the classic Lebanese social meal. Lebanese arak culture: pour arak first, add cold water (turns white), add ice (never ice before water!). Toast: "kasak" (your glass) or "bi-sa7tak" (to your health). Lebanese saying: "l-3ara2 byishrab 7alo" = arak drinks itself (goes down too easily).'
  },
  {
    q: 'What does "biddna ninSaraf" mean?',
    opts: ['shall we order?', 'we need to leave now', 'let\'s stay longer', 'can you call us a taxi?'],
    correct: 1,
    note: '"biddna ninSaraf" = we need to leave now (بدنا ننصرف — biddi = I want, ninSaraf = to depart/excuse ourselves). "inSaraf" = formal departure. Lebanese leave-taking is elaborate: saying "biddna ninSaraf" is the FIRST signal — not actual departure. Host responds: "la2 la2, ba3d bakiir" (no no, it\'s still early). Guest sits back down. Second attempt: "inSaraf waqtna" (our time to leave). Third attempt triggers actual departure. Lebanese goodbyes: at the door, in the elevator, at the car — multiple rounds. "3al-mashi" = literally on the way out (still talking for 20 minutes).'
  },
  {
    q: 'How do you offer someone a drink in Lebanese Arabic?',
    opts: ['saHtein', 'shu btishrab?', 'zid / zidi', '2ahwe maZbuuTa'],
    correct: 1,
    note: '"shu btishrab?" = what would you like to drink? (شو بتشرب؟ — btishrab = you drink [present]). The first question to any arriving guest. Lebanese coffee/drink ritual: guest arrives → immediate "2ahwe willa shaay?" (coffee or tea?). Coffee: "sade" (no sugar), "maZbuuTa" (medium sugar), "Helo" (sweet), "3arabiyye" (Arabic/cardamom). Tea: "bi-na3na3" (with mint). Lebanese coffee culture: refusing coffee is impolite; accepting then not drinking is fine. "2ahwtak faatit" = your coffee got cold (gentle hint you\'ve been sitting too long, said jokingly).'
  },
];

const HSP_TIPS = [
  { title: 'Lebanese hosting — karam as a way of life', body: 'Lebanese hospitality ("karam") is legendary — it\'s a source of pride and identity, not just politeness. Key principles: (1) A guest is never allowed to feel any discomfort. (2) The host absorbs all cost and effort silently. (3) Food and drink must be endless — "tfaDDal kol" (please eat) repeated until the guest surrenders. (4) The guest is treated as if they own the house. (5) Refusing an offer requires 2-3 firm refusals before accepting. Lebanese saying: "l-Dayf mniH" (the guest is good) — guests bring blessings. Hosting well reflects family honor. "Kariim" (generous) is the highest social compliment.' },
  { title: 'Welcome phrases and their cultural weight', body: '"ahlan wa sahlan" (welcome), "nuurtu l-beit" (you lit up the house), "shirraf-na" (you honored us), "Hayyo-na" (you blessed us) — these aren\'t empty phrases. Each one carries genuine emotional weight. Lebanese hosts genuinely feel that guests honor them by coming. "inta bi-beitak" (you\'re in your own home) is the master phrase — giving the guest ownership. Physical welcome: three-kiss greeting (cheek kisses: right-left-right), taking coats, immediate offer of coffee. "tfaDDal" (please, go ahead) is the universal facilitator. Never arrive at a Lebanese home empty-handed — flowers, chocolates, or pastries are expected.' },
  { title: 'Lebanese coffee culture — reading the signals', body: 'Coffee is the ritual backbone of Lebanese hospitality. "2ahwe 3arabiyye" (Arabic/cardamom coffee in small cups) = formal/respectful coffee. Turkish coffee = more casual. Sugar levels: "sade" (none), "maZbuuTa" (medium — most common), "Helo" (sweet). Lebanese coffee rule: when you want the refill to stop, shake your empty cup side to side as you hand it back. Standing coffee cup = refill me. Lebanese hospitality clock: visiting = minimum 30 minutes of coffee, fruit, sweets, conversation. Leaving before being urged to stay longer is considered rude — wait for "la2 la2 ba3d bakiir" at least once.' },
  { title: 'The gift and refusal dance', body: 'Bringing gifts and the ritual refusal are central to Lebanese hospitality. Guest brings sweets/pastries → host says "ma fi daawii, walla!" (no need, really!) → guest: "shi bsiiT" (it\'s nothing) → host: "khajjalTna" (you\'ve embarrassed us). This exchange validates the gift\'s value. Gifts are not opened immediately in front of the giver — it\'s considered greedy. "la2, inta 2assi 3alei" = no, you\'re being too kind to me. Lebanese gift culture: quality matters. Common guest gifts: "maamoul" (date cookies), "baaklawa" (baklava), chocolates, a nice bottle of wine or arak.' },
  { title: 'Departing — the Lebanese goodbye ritual', body: 'Lebanese goodbyes are a multi-stage production. Stage 1: "biddna ninSaraf" (we need to leave) — host says "la2 la2, ba3d bakiir" (no no, it\'s still early). Stage 2: Second attempt — accepted with "tfaDDal" to the door. Stage 3: At the door — extended goodbye round, more thanks. Stage 4: At the elevator or car — final kisses, "yislam rabbak" (God bless you). Stage 5: Follow-up text/call confirming safe arrival: "wSiltu?" (did you arrive?). Guest sends: "wSilna bi-l-salim, tislamu" (we arrived safely, bless you). The farewell is as elaborate as the welcome. "Ij3alu 3andna" = please come to us again (sincere invitation).' },
];

const HSP_ABOUT = 'Master Lebanese Arabic for hospitality and guest culture — welcoming phrases, offering food and drink, generosity expressions, coffee rituals, and the elaborate Lebanese farewell. Essential for visiting Lebanese homes, hosting Lebanese guests, and understanding the deep cultural value of karam (generosity) in Lebanese society.';
