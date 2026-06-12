// Run #345 — Lebanese Diaspora & Emigration Coach (dsp)
// 40 words across 5 categories: emigration / longing / identity / return / diaspora-life
// 10 MCQ drills, 5 tips, about text

const DSP_WORDS = [
  // emigration & leaving
  { tr: 'ghurbe', ar: 'غربة', en: 'living far from home / alienation of emigration', cat: 'emigration' },
  { tr: 'muGHTarib', ar: 'مغترب', en: 'emigrant / one living abroad', cat: 'emigration' },
  { tr: 'haajar', ar: 'هاجر', en: 'emigrated / left the homeland', cat: 'emigration' },
  { tr: 'hijre', ar: 'هجرة', en: 'emigration / migration', cat: 'emigration' },
  { tr: 'saafar', ar: 'سافر', en: 'traveled / departed', cat: 'emigration' },
  { tr: 'Taalab lajiie', ar: 'طالب لجوء', en: 'asylum seeker', cat: 'emigration' },
  { tr: 'biTaa2et il-mGHTaribiiin', ar: 'بطاقة المغتربين', en: 'diaspora ID card / expatriate card', cat: 'emigration' },
  { tr: 'wiiza', ar: 'فيزا', en: 'visa', cat: 'emigration' },
  // longing & nostalgia
  { tr: 'ishtiyaa2', ar: 'اشتياق', en: 'deep longing / intense missing', cat: 'longing' },
  { tr: 'Haniin', ar: 'حنين', en: 'nostalgia / yearning for home', cat: 'longing' },
  { tr: 'bwaa7shiini', ar: 'بوحشني', en: 'I miss you (everyday expression)', cat: 'longing' },
  { tr: 'raaji3', ar: 'راجع', en: 'returning / coming back', cat: 'longing' },
  { tr: 'waTan', ar: 'وطن', en: 'homeland / fatherland', cat: 'longing' },
  { tr: 'il-ard', ar: 'الأرض', en: 'the land / the earth (symbol of belonging)', cat: 'longing' },
  { tr: 'biddi iirja3', ar: 'بدي إرجع', en: 'I want to return', cat: 'longing' },
  { tr: 'ghaalib 3alaiye', ar: 'غالب عليي', en: 'it overwhelms me / can\'t hold back the feeling', cat: 'longing' },
  // identity & belonging
  { tr: 'huwwiiye', ar: 'هوية', en: 'identity / ID document', cat: 'identity' },
  { tr: 'lubnaanii', ar: 'لبناني', en: 'Lebanese (m)', cat: 'identity' },
  { tr: 'lubnaaniiiye', ar: 'لبنانية', en: 'Lebanese (f)', cat: 'identity' },
  { tr: 'judhuur', ar: 'جذور', en: 'roots (family / cultural)', cat: 'identity' },
  { tr: '2intimaa2', ar: 'انتماء', en: 'belonging / sense of attachment', cat: 'identity' },
  { tr: 'ta2eSSelni', ar: 'تأصلني', en: 'it roots me / makes me feel connected to my origins', cat: 'identity' },
  { tr: 'jinsiiiye', ar: 'جنسية', en: 'nationality / citizenship', cat: 'identity' },
  { tr: '2ibni/ibnaet lubnaanii', ar: 'ابني لبناني', en: 'my son is Lebanese (pride of diaspora parent)', cat: 'identity' },
  // return & visits
  { tr: 'raH iirja3 3a lubnaen', ar: 'رح إرجع على لبنان', en: 'I\'m going back to Lebanon', cat: 'return' },
  { tr: 'nawwarTna', ar: 'نورتنا', en: 'you lit us up — said when someone returns/visits', cat: 'return' },
  { tr: 'massaytna', ar: 'مسيتنا', en: 'you graced us / visited us (very warm welcome)', cat: 'return' },
  { tr: 'ziyaare', ar: 'زيارة', en: 'visit', cat: 'return' },
  { tr: 'jiib maak', ar: 'جيب معك', en: 'bring with you (from abroad)', cat: 'return' },
  { tr: '7a2ibtak baydaawi', ar: 'حقيبتك بيضاوي', en: 'your suitcase is from Bourj Hammoud — packed with gifts', cat: 'return' },
  { tr: 'shu jibt maanak?', ar: 'شو جبت معك؟', en: 'what did you bring with you? (diaspora arrival question)', cat: 'return' },
  { tr: 'ma shufnaak', ar: 'ما شفناك', en: 'we haven\'t seen you (said to returning emigrant)', cat: 'return' },
  // diaspora life
  { tr: 'mahjar', ar: 'مهجر', en: 'the diaspora / place of emigration (literary term)', cat: 'diaspora-life' },
  { tr: 'jaaliye lubnaaniiiye', ar: 'جالية لبنانية', en: 'Lebanese community abroad', cat: 'diaspora-life' },
  { tr: 'maTa3am lubnaanii', ar: 'مطعم لبناني', en: 'Lebanese restaurant (anchor of diaspora culture)', cat: 'diaspora-life' },
  { tr: 'Taarad il-ghurbe', ar: 'طرد الغربة', en: 'fighting off alienation / beating loneliness abroad', cat: 'diaspora-life' },
  { tr: 'bi2ultural', ar: 'بيكلتشرال', en: 'bicultural (diaspora identity)', cat: 'diaspora-life' },
  { tr: 'laHje', ar: 'لهجة', en: 'dialect / accent', cat: 'diaspora-life' },
  { tr: 'faransa / 2amriika / 2ustraalia', ar: 'فرنسا / أمريكا / أستراليا', en: 'France / America / Australia — top diaspora destinations', cat: 'diaspora-life' },
  { tr: '2ibn il-mahjar', ar: 'ابن المهجر', en: 'son of the diaspora — second-generation Lebanese abroad', cat: 'diaspora-life' },
];

const DSP_DRILLS = [
  {
    q: 'What is "ghurbe" (غربة) and why is it central to Lebanese identity?',
    opts: ['A type of food eaten abroad', 'The pain of living far from home — a deeply felt state of alienation in emigration', 'An Arabic word for adventure', 'Pride in Lebanese heritage'],
    correct: 1,
    note: '"Ghurbe" (غربة) is untranslatable — it\'s the ache of living far from your homeland, the feeling that something essential is missing despite a comfortable life abroad. Lebanese have emigrated in massive waves (civil war, economic crisis, 2020 explosion) and ghurbe runs deep in the culture. Fairuz sings about it constantly. "Bi2kullni il-ghurbe" = the ghurbe is eating me up.'
  },
  {
    q: 'What does "muGHTarib" (مغترب) mean?',
    opts: ['A tourist visiting Lebanon', 'A Lebanese emigrant / one living abroad', 'A village elder', 'A political refugee only'],
    correct: 1,
    note: '"MuGHTarib" (مغترب) = emigrant — specifically a Lebanese living abroad, from "ghurbe". Lebanon has ~15 million muGHTaribiin worldwide vs ~6 million in-country. The diaspora is in Brazil, Argentina, West Africa, USA, Australia, France, Gulf. Many maintain Lebanese passports and vote. "Min wein il-muGHTaribin? Min il-mahjar il-baraziili" = the emigrants from Brazil.'
  },
  {
    q: 'What does "nawwarTna" (نورتنا) express when someone returns from abroad?',
    opts: ['You look different', 'You lit us up — an explosion of warmth welcoming someone back', 'You\'ve been gone too long', 'You brought us gifts'],
    correct: 1,
    note: '"Nawwarttna" (نورتنا) = you brightened/lit up our world — from "nuur" (light). Said when someone comes back after a long absence. Full of warmth and genuine joy. "Nawwart il-beit!" = you lit up the house! One of the most beautiful Lebanese welcome expressions. The implication: your presence brings light to everything. Paired with kisses, hugs, and usually food.'
  },
  {
    q: 'What is "mahjar" (مهجر) in Lebanese culture?',
    opts: ['A neighborhood in Beirut', 'The diaspora — the literary and emotional term for where Lebanese emigrants live', 'A type of legal document', 'A mountain village'],
    correct: 1,
    note: '"Mahjar" (مهجر) = the place of emigration / the diaspora. "Adab al-mahjar" (مهجر literature) is a major literary movement — Kahlil Gibran (Jubran Khalil Jubran) was the greatest mahjar writer, writing from New York about Lebanon and the human spirit. The mahjar experience — being Lebanese but living elsewhere — has shaped Lebanese culture, music, and literature for 150 years.'
  },
  {
    q: 'What does "Haniin" (حنين) mean specifically in diaspora context?',
    opts: ['Excitement about visiting', 'Nostalgia / deep yearning — especially for the homeland left behind', 'Anger at having to leave', 'Pride in being Lebanese'],
    correct: 1,
    note: '"Haniin" (حنين) = nostalgia, aching longing — specifically for the homeland. For Lebanese diaspora, Haniin is the dominant emotional tone: for Lebanon\'s mountains, sea, food, language, family. Fairuz\'s "Li Beirut" (to Beirut) is pure Haniin in song form. "7aneen Lubnaen b2albi" = Lebanon\'s longing is in my heart. The word itself feels heavy and sweet at the same time.'
  },
  {
    q: 'When a diaspora Lebanese returns and family asks "shu jibt maanak?" (شو جبت معك؟), what are they asking?',
    opts: ['How was your flight?', 'What did you bring back with you? (gifts from abroad are a cultural expectation)', 'Are you staying long?', 'How is the weather there?'],
    correct: 1,
    note: '"Shu jibt maanak?" = what did you bring with you? Returning diaspora Lebanese are expected to bring gifts (chocolate, coffee, clothing, medications, specific brands unavailable in Lebanon). The suitcase packed with gifts is a diaspora ritual — "7a2ibtak baydaawi" (your suitcase is from Bourj Hammoud = stuffed to the brim). Not asking/answering this would be unusual.'
  },
  {
    q: 'What does "judhuur" (جذور) mean in Lebanese diaspora culture?',
    opts: ['Tree branches', 'Roots — family, cultural, and village origins that define Lebanese identity', 'A Lebanese dish', 'Legal documents'],
    correct: 1,
    note: '"Judhuur" (جذور) = roots. For Lebanese diaspora, judhuur means the village your family came from (every Lebanese knows their ancestral village), the religious community, the family name. "Shu judhuurak?" = where are your roots? is a standard question. Lebanese diaspora obsess over judhuur — third-generation Lebanese in Brazil know which village in the Bekaa or Shouf their great-grandparents came from.'
  },
  {
    q: 'What is "2ibn il-mahjar" (ابن المهجر)?',
    opts: ['A Lebanese airline', 'Son of the diaspora — second-generation Lebanese born and raised abroad', 'A folk song', 'A political movement'],
    correct: 1,
    note: '"2ibn il-mahjar" (ابن المهجر) = son of the diaspora — a Lebanese person born and raised abroad, often with complicated identity: fluent in French/English/Spanish but not Arabic, holding Lebanese passport but never lived there. The mahjar experience creates a unique hybrid identity. "2ibni mahjaari" = my son is diaspora-born. Many mahjar kids return to Lebanon "to find their roots" — a hugely emotional journey.'
  },
  {
    q: 'What does "haajar" (هاجر) mean and what context does it carry?',
    opts: ['A common Lebanese name only', 'Emigrated / left the homeland — carries weight of sacrifice and separation', 'Returned home', 'Traveled for vacation'],
    correct: 1,
    note: '"Haajar" (هاجر) = emigrated, left the homeland. From the same root as "hijra" (هجرة). Unlike simply "saafar" (traveled), haajar implies a more permanent, often painful departure. "Haajar min il-7arb" = left because of the war. Lebanon\'s emigration waves: 1975-90 (civil war), 2005-10 (political crises), 2019-present (economic collapse + explosion). Each wave added to the mahjar.'
  },
  {
    q: 'What does "ta2eSSelni" (تأصلني) express?',
    opts: ['I feel lost', 'It roots me / reconnects me to my origins and makes me feel grounded', 'I want to leave', 'I am confused about my identity'],
    correct: 1,
    note: '"Ta2eSSelni" (تأصلني) = it roots me, it connects me to my asl (origin/essence). Said when something — a song, a scent, a dish, a phrase — makes a diaspora Lebanese feel reconnected to their homeland. "Hal ughniyye bt2eSSelni" = this song roots me / takes me back to my roots. One of the most emotionally meaningful expressions in diaspora Lebanese Arabic.'
  },
];

const DSP_TIPS = [
  {
    title: 'Lebanon\'s Diaspora: 15 Million Strong',
    body: 'Lebanon has ~6 million residents but ~15 million muGHTaribiin (diaspora Lebanese) worldwide: Brazil has ~7-10M Lebanese-descended people (the largest Arab diaspora community outside the Arab world), plus large communities in USA, France, Australia, Canada, Mexico, Argentina, Ivory Coast, Senegal, Gulf states. Every major Lebanese emigration wave (1880s-1920s, 1975 civil war, 1990s rebuilding, 2005-10, 2019-present) added more. The diaspora sends ~$7B annually to Lebanon — critical to the economy.'
  },
  {
    title: '"Ghurbe" — Understanding the Core Lebanese Emotion',
    body: '"Ghurbe" (غربة) has no English translation. It\'s the specific emotional state of living far from Lebanon — not just homesickness, but a deeper sense that part of you is missing, that the food, the air, the Arabic around you, the smell of thyme and sea, are elsewhere. Lebanese emigrants work hard, succeed, build lives — but ghurbe lives underneath. "Trud il-ghurbe" (fighting off ghurbe) is something diaspora Lebanese do constantly: with music, food, family calls, Lebanese restaurants.'
  },
  {
    title: 'Kahlil Gibran and the Mahjar Literary Tradition',
    body: 'The Lebanese diaspora produced one of Arabic literature\'s greatest movements: "adab al-mahjar" (diaspora literature). Kahlil Gibran (Jubran Khalil Jubran, 1883-1931) emigrated to Boston then New York from Bsharri, Lebanon, and wrote "The Prophet" in English while writing Arabic poetry about Lebanon. Mikhail Naimy, Ameen Rihani — all mahjar writers in New York\'s "Pen League." Their work was soaked in ghurbe and Haniin. Every Lebanese diaspora home has a Gibran book somewhere.'
  },
  {
    title: 'The Village Connection: Judhuur Culture',
    body: '"Min wein inti/inta?" (where are you from?) means what village your family is from — not just your city. Every Lebanese family has a "day3a" (ضيعة = village) they consider home, even three generations after emigrating. In diaspora, the village connection is fiercely maintained: village associations (jam3iiyet), WhatsApp groups, summer reunions where diaspora Lebanese return to ancestral villages. "Ana min Deir el-Ahmar" = I\'m from Deir el-Ahmar (even if born in Melbourne).'
  },
  {
    title: 'The Return: Emotional Grammar of Coming Back',
    body: 'When diaspora Lebanese return to Lebanon, a whole vocabulary activates: "nawwarttna" (you lit us up), "missi" (you graced us), "ya ahla" (most welcome). The returning diaspora must visit: grandparents, cousins, the ancestral village, their favorite restaurants. They must bring gifts (suitcases of chocolate, medicine, clothing). They must endure teasing ("ma shufnaak" = haven\'t seen you). And always: "mata raH tiirja3?" (when will you come back?). The return is never simple or purely joyful — it\'s layered with ghurbe, Haniin, and guilt.'
  },
];

const DSP_ABOUT = 'No people in the world have emigrated more proportionally than the Lebanese. With 15 million Lebanese-descended people outside a country of 6 million, the diaspora (mahjar) is as much Lebanon as Lebanon itself. From Kahlil Gibran in New York to Lebanese merchants in West Africa, from the Sao Paulo jaaliye to the Melbourne Lebanese community, the ghurbe (ache of living abroad) and Haniin (longing for home) have shaped Lebanese culture, music, and literature as profoundly as anything that happened in Beirut. Understanding this vocabulary is understanding what it means to be Lebanese.';
