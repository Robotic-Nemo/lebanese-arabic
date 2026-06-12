// R663 — NEW FEATURE: Lebanese Emotions & Feelings (mnt)

const MNT_CATS = [
  { id: 'positive', label: '😊 Positive Feelings' },
  { id: 'negative', label: '😤 Negative Feelings' },
  { id: 'body', label: '💛 Body & Heart Idioms' },
  { id: 'phrases', label: '💬 Emotional Phrases' }
];

const MNT_WORDS = [
  // Positive
  { ar: 'far7aan', tr: 'far7aan', en: 'happy (male)', cat: 'positive' },
  { ar: 'far7aane', tr: 'far7aane', en: 'happy (female)', cat: 'positive' },
  { ar: 'mabSouT', tr: 'mabSouT', en: 'pleased / content', cat: 'positive' },
  { ar: 'mnii7', tr: 'mnii7', en: 'good / fine', cat: 'positive' },
  { ar: '3al-2albe', tr: '3al-2albe', en: 'on my heart (beloved)', cat: 'positive' },
  { ar: 'bfarji7', tr: 'bfarji7', en: 'it cheers me up', cat: 'positive' },
  { ar: 'nashiiT', tr: 'nashiiT', en: 'energetic / lively', cat: 'positive' },
  // Negative
  { ar: 'za3laan', tr: 'za3laan', en: 'upset / sad (male)', cat: 'negative' },
  { ar: 'ta3baan', tr: 'ta3baan', en: 'tired / exhausted', cat: 'negative' },
  { ar: 'daayikh', tr: 'daayikh', en: 'dizzy / confused', cat: 'negative' },
  { ar: 'mit2axxar', tr: 'mit2axxar', en: 'embarrassed / sorry', cat: 'negative' },
  { ar: 'khaaif', tr: 'khaaif', en: 'scared / afraid', cat: 'negative' },
  { ar: 'mishtaa2', tr: 'mishtaa2', en: 'missing someone / longing', cat: 'negative' },
  { ar: 'Dayy2iin', tr: 'Dayy2iin', en: 'stressed / tight (plural)', cat: 'negative' },
  // Body & heart idioms
  { ar: '2albi waj3aan', tr: '2albi waj3aan', en: 'my heart aches', cat: 'body' },
  { ar: 'bi3ioni', tr: 'bi3ioni', en: 'in my eyes (I cherish you)', cat: 'body' },
  { ar: 'ruu7i', tr: 'ruu7i', en: 'my soul (term of endearment)', cat: 'body' },
  { ar: '7abiibi', tr: '7abiibi', en: 'my darling / my love', cat: 'body' },
  { ar: 'daami 7arr', tr: 'daami 7arr', en: 'my blood runs hot (I\'m angry)', cat: 'body' },
  { ar: 'raa7 3a2li', tr: 'raa7 3a2li', en: 'my mind left me (I lost it)', cat: 'body' },
  // Emotional phrases
  { ar: 'shu bik?', tr: 'shu bik?', en: 'what\'s wrong with you?', cat: 'phrases' },
  { ar: 'ana mish kwayyis', tr: 'ana mish kwayyis', en: 'I\'m not doing well', cat: 'phrases' },
  { ar: 'baddik shii?', tr: 'baddik shii?', en: 'do you need something?', cat: 'phrases' },
  { ar: 'ma 7ada fhimni', tr: 'ma 7ada fhimni', en: 'no one understood me', cat: 'phrases' },
  { ar: 'khayyilni wii7di', tr: 'khayyilni wii7di', en: 'leave me alone', cat: 'phrases' },
  { ar: 'maa 3indi tab3a', tr: 'maa 3indi tab3a', en: 'I\'m in no mood', cat: 'phrases' },
  { ar: '2albi ma3ak', tr: '2albi ma3ak', en: 'my heart is with you', cat: 'phrases' },
  { ar: 'yislam 2albak', tr: 'yislam 2albak', en: 'bless your heart', cat: 'phrases' }
];

const MNT_DRILLS = [
  { q: 'What does "far7aan" mean?', opts: ['tired','angry','happy','scared'], ans: 2 },
  { q: 'What does "za3laan" mean?', opts: ['happy','upset/sad','energetic','embarrassed'], ans: 1 },
  { q: 'What does "ta3baan" mean?', opts: ['angry','dizzy','tired/exhausted','bored'], ans: 2 },
  { q: '"mishtaa2" means?', opts: ['scared','confused','missing someone','content'], ans: 2 },
  { q: '"mabSouT" means?', opts: ['sad','stressed','pleased/content','angry'], ans: 2 },
  { q: '"daami 7arr" literally/idiomatically means?', opts: ['I am cold','I am angry','I am tired','I am hot outside'], ans: 1 },
  { q: '"2albi waj3aan" means?', opts: ['I have a headache','my heart aches','I feel dizzy','I am happy'], ans: 1 },
  { q: '"raa7 3a2li" means?', opts: ['I went home','I lost my mind','I forgot something','I am going crazy with joy'], ans: 1 },
  { q: '"bi3ioni" means?', opts: ['in my eyes / I cherish you','with my hand','in my heart','on my back'], ans: 0 },
  { q: '"shu bik?" means?', opts: ['how are you?','where are you?','what\'s wrong with you?','what do you want?'], ans: 2 },
  { q: '"khayyilni wii7di" means?', opts: ['help me','leave me alone','come with me','take me home'], ans: 1 },
  { q: '"yislam 2albak" expresses?', opts: ['anger','gratitude/blessing','sadness','surprise'], ans: 1 },
  { q: '"maa 3indi tab3a" means?', opts: ['I have no money','I am not hungry','I\'m in no mood','I don\'t understand'], ans: 2 },
  { q: '"7abiibi" is used for?', opts: ['a stranger','a darling/loved one','a teacher','an enemy'], ans: 1 },
  { q: '"ruu7i" literally means and is used as?', opts: ['my body/a compliment','my soul/term of endearment','my mind/expression of shock','my heart/expression of pain'], ans: 1 }
];

const MNT_TIPS = [
  { title: 'Lebanese emotional directness', body: 'Lebanese Arabic is emotionally expressive. "Za3laan" (upset) is stated openly — emotions aren\'t hidden. If someone is za3laan, others will ask "shu bik?" immediately. Suppressing feelings is unusual; discussing them openly is the norm.' },
  { title: 'Heart (2alb) in expression', body: '"2alb" (heart) features in dozens of Lebanese idioms. "3al-2albe" (on my heart) = beloved. "2albi ma3ak" = emotional support. "2albi waj3aan" = heartache. "Yislam 2albak" = bless your kind heart. The heart is Lebanon\'s emotional center.' },
  { title: 'Ruu7i & 7abiibi', body: '"Ruu7i" (my soul) and "7abiibi/7abiibti" (my darling) are used constantly — between friends, family, and lovers. Lebanese warmth means terms of endearment flow freely. A shopkeeper might call you "7abiibi"; your mother calls everyone "ruu7i."' },
  { title: 'Za3laan — the Lebanese upset', body: '"Za3laan" is specifically upset/hurt — not just sad. It implies someone wronged you. "Mnih za3laan minnak" = he is hurt by you (not just sad). Resolving za3laan situations quickly is a cultural priority — letting hurt feelings linger is frowned upon.' },
  { title: 'Ta3baan — a versatile word', body: '"Ta3baan" (tired/exhausted) covers physical and emotional exhaustion. "Ta3baan min l-wa2" = tired from the situation/life. It\'s used for illness too — "the country is ta3baan" = the country is struggling. Highly versatile in Lebanese daily speech.' },
  { title: 'Daymi 7arr & body-anger idioms', body: 'Lebanese expresses anger through body metaphors: "daami 7arr" (blood is hot), "raa7 3a2li" (my mind left), "Taari3 3a l-jnan" (on the edge of madness). Physical metaphors for emotions are more vivid and accepted than clinical terms.' }
];
