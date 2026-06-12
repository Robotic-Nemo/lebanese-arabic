// R432 — Lebanese Airport & Diaspora Culture (air)
const AIR_WORDS = [
  // airport / travel
  { ar: 'مطار', tr: 'maTaar', en: 'airport', cat: 'airport' },
  { ar: 'رحلة', tr: 'ri7la', en: 'flight / trip', cat: 'airport' },
  { ar: 'تذكرة', tr: 'tazkaara', en: 'ticket', cat: 'airport' },
  { ar: 'شنطة', tr: 'shanTa', en: 'suitcase / bag', cat: 'airport' },
  { ar: 'جواز سفر', tr: 'jawwaaz safar', en: 'passport', cat: 'airport' },
  { ar: 'تأشيرة', tr: 'ta2shiira', en: 'visa', cat: 'airport' },
  { ar: 'بوابة', tr: 'bawwaaba', en: 'gate', cat: 'airport' },
  { ar: 'طيران', tr: 'Tayraan', en: 'airline / aviation', cat: 'airport' },
  { ar: 'طائرة', tr: 'Tayyaara', en: 'airplane', cat: 'airport' },
  { ar: 'مدة الرحلة', tr: 'muddet el ri7la', en: 'flight duration', cat: 'airport' },
  // check-in / customs
  { ar: 'وصول', tr: 'wuSuul', en: 'arrivals', cat: 'checkin' },
  { ar: 'مغادرة', tr: 'mghaadara', en: 'departures', cat: 'checkin' },
  { ar: 'تسجيل الدخول', tr: 'tasjiil el dukhoul', en: 'check-in', cat: 'checkin' },
  { ar: 'جمارك', tr: 'jamaarik', en: 'customs', cat: 'checkin' },
  { ar: 'تفتيش', tr: 'taftiish', en: 'security check / inspection', cat: 'checkin' },
  { ar: 'أمتعة', tr: 'amti3a', en: 'luggage / baggage', cat: 'checkin' },
  { ar: 'حجز', tr: '7ajz', en: 'reservation / booking', cat: 'checkin' },
  { ar: 'رسوم زيادة', tr: 'rusuum ziyeede', en: 'excess baggage fees', cat: 'checkin' },
  { ar: 'تأخير', tr: 'ta2khiir', en: 'delay', cat: 'checkin' },
  { ar: 'شباك', tr: 'shbaak', en: 'counter / window (at airport)', cat: 'checkin' },
  // diaspora culture
  { ar: 'مغترب', tr: 'mghtarib', en: 'expatriate / diaspora member', cat: 'diaspora' },
  { ar: 'غربة', tr: 'ghurba', en: 'being far from home / emigration longing', cat: 'diaspora' },
  { ar: 'مهجر', tr: 'mahjar', en: 'diaspora / place of emigration', cat: 'diaspora' },
  { ar: 'رجع على لبنان', tr: 'rija3 3a lubnaaan', en: 'came back to Lebanon', cat: 'diaspora' },
  { ar: 'سافر', tr: 'saafar', en: 'traveled / left the country', cat: 'diaspora' },
  { ar: 'هاجر', tr: 'haajara', en: 'emigrated / left permanently', cat: 'diaspora' },
  { ar: 'بعيد عن البلد', tr: 'b3iid 3an el balad', en: 'far from home country', cat: 'diaspora' },
  { ar: 'واشتقتلك', tr: 'wishtaatilak', en: 'I missed you so much (reunion greeting)', cat: 'diaspora' },
  { ar: 'رجعت', tr: 'rja3t', en: 'I came back / I\'m home', cat: 'diaspora' },
  { ar: 'أهلاً وسهلاً', tr: 'ahlan wa sahlan', en: 'welcome (warm return greeting)', cat: 'diaspora' },
  // Lebanese airport culture
  { ar: 'على مناق الطيارة', tr: '3a mana2 el Tayyaara', en: 'at the plane steps (whole family comes)', cat: 'culture' },
  { ar: 'بقبلة', tr: 'b2abble', en: 'I\'ll kiss you / warm greeting kiss', cat: 'culture' },
  { ar: 'شي للبنان', tr: 'shi la lubnaaan', en: 'something for Lebanon (bringing gifts)', cat: 'culture' },
  { ar: 'جبتلك', tr: 'jibtilak', en: 'I brought you (something from abroad)', cat: 'culture' },
  { ar: 'شو جبت', tr: 'shu jibt', en: 'what did you bring? (asked of returning traveler)', cat: 'culture' },
  { ar: 'هدية', tr: 'hadiyye', en: 'gift', cat: 'culture' },
  { ar: 'سوفينير', tr: 'souvenir', en: 'souvenir', cat: 'culture' },
  { ar: 'ودعني', tr: 'wadda3ni', en: 'said goodbye to me / saw me off', cat: 'culture' },
  { ar: 'استقبالي', tr: 'ista2baluni', en: 'they welcomed/received me', cat: 'culture' },
  { ar: 'ترا', tr: 'tura', en: 'by the way / heads up (WhatsApp before arrival)', cat: 'culture' },
];

const AIR_DRILLS = [
  {
    q: 'What does "ghurba" (غربة) mean in Lebanese culture?',
    opts: ['going on holiday', 'being far from home / the émigré experience', 'a type of music', 'a neighborhood'],
    correct: 1,
    note: '"Ghurba" is one of the most emotionally loaded words in Lebanese culture — the ache of being away from home. Lebanon has one of the world\'s largest diaspora-to-population ratios. Lebanese in Australia, Brazil, USA, West Africa, and the Gulf all share "ghurba." It\'s the emotional core of Lebanese emigration culture. Fairouz\'s songs are full of it.'
  },
  {
    q: 'What does "mghtarib" (مغترب) mean?',
    opts: ['a new immigrant', 'a Lebanese expatriate / diaspora member', 'a foreigner visiting Lebanon', 'a Lebanese who never left'],
    correct: 1,
    note: '"Mghtarib" (from ghurba) is the word for a Lebanese person living abroad. Lebanon has approximately 14 million diaspora (4x its current population). The "mghtarib" returning home for summer or Christmas is a major cultural event — the whole extended family mobilizes. Beirut airport\'s arrivals hall is famous for its tearful reunions.'
  },
  {
    q: 'What is "3a mana2 el Tayyaara" (على مناق الطيارة) referring to?',
    opts: ['the plane engine', 'at the airplane steps (whole family comes to greet)', 'the runway', 'the airline seats'],
    correct: 1,
    note: 'In Lebanese culture, returning travelers don\'t just get picked up — the whole family used to come to "mana2 el Tayyaara" (the plane steps/tarmac). Modern airport security has made this harder, but the spirit remains: arrivals hall gatherings of 10-20 family members, flowers, tears, ululations. This is genuine Lebanese airport culture.'
  },
  {
    q: 'A returning Lebanese says "shu jibt" (شو جبت) — what are they asking?',
    opts: ['how was the flight?', 'what did you bring? (gifts from abroad)', 'are you tired?', 'how long were you gone?'],
    correct: 1,
    note: '"Shu jibt?" (what did you bring?) is the affectionate first question asked of any Lebanese returning from abroad. Bringing gifts ("shi la lubnaaan") is not optional in Lebanese culture — it\'s an expression of love and connection. Chocolate, perfume, branded goods, or local food specialties from wherever you were. Arriving empty-handed would be noticed.'
  },
  {
    q: 'What does "wishtaatilak" (واشتقتلك) mean at an airport reunion?',
    opts: ['nice to meet you', 'I missed you so much', 'welcome back to Lebanon', 'you\'ve changed a lot'],
    correct: 1,
    note: '"Wishtaatilak" is the intense reunion greeting — "I\'ve longed for you so much." Lebanese family separations are taken very seriously. Even a 2-month absence warrants this level of emotional greeting. The Lebanese airport arrivals scene is legendary for its warmth: hugging, kissing, crying, talking all at once. There\'s a whole social ritual around "the return."'
  },
  {
    q: 'Why is bringing a "shanTa" (شنطة) for Lebanese customs notable?',
    opts: ['Lebanon has no customs rules', 'travelers often bring huge amounts of goods — gifts, requests from relatives, etc.', 'Lebanese pack very lightly', 'airport bags are extra expensive'],
    correct: 1,
    note: '"ShantTa" (suitcase) for a Lebanese traveler is legendary. Lebanese returning from abroad don\'t just pack for themselves — they bring requests from relatives, church goods, medicines unavailable in Lebanon, food items. It\'s common to have 3-4 extra bags of gifts. The customs line for Lebanese travelers often involves negotiating "rusuum ziyeede" (excess baggage fees) or creative packing explanations.'
  },
  {
    q: 'What does "saafar" (سافر) mean beyond just "traveled"?',
    opts: ['went to the beach', 'left for work abroad — often permanent', 'took a day trip', 'changed neighborhoods'],
    correct: 1,
    note: '"Saafar" (traveled/departed) carries weight in Lebanese. Saying "saafar 3al Kuwait" or "saafar 3al gharb" usually means someone left to work abroad — often indefinitely. Lebanon\'s brain drain is massive: doctors, engineers, and young people constantly "bisaafru." When someone says their son "saafar," it usually means he\'s gone to work overseas, not just on vacation.'
  },
  {
    q: 'What is the purpose of a WhatsApp "tura" (ترا) before arriving?',
    opts: ['it means "I\'m late"', 'a heads-up message sent before arrival so family can prepare', 'a way to say goodbye', 'a request for pickup'],
    correct: 1,
    note: '"Tura" (heads up / by the way) in modern Lebanese usage (especially WhatsApp) is used to warn someone before you arrive, before sharing news, or before dropping a request. "Tura ana waaSel ba3ad sa3a" (heads up, I\'m arriving in an hour) allows the family to prepare food, clean, mobilize — Lebanese hospitality requires preparation time.'
  },
  {
    q: 'What does "mahjar" (مهجر) refer to in Lebanese history?',
    opts: ['a neighborhood in Beirut', 'the diaspora / place of emigration — historically Brazil/Americas', 'a type of visa', 'the airport terminal'],
    correct: 1,
    note: '"Al-mahjar" (the diaspora/emigration land) has special resonance in Lebanese literature. The "Mahjar poets" — Khalil Gibran, Mikhail Naimy, Ameen Rihani — who emigrated to the Americas in the late 1800s/early 1900s form a cornerstone of modern Arabic literature. Gibran wrote "The Prophet" from New York. Lebanon\'s relationship with emigration is hundreds of years old.'
  },
  {
    q: 'What\'s the cultural significance of "rja3t" (رجعت) said by a returning Lebanese?',
    opts: ['just a statement of physical return', 'a declaration of identity — "I\'m back / I belong here"', 'asking for directions', 'announcing a delay'],
    correct: 1,
    note: '"Rja3t" (I came back) for a Lebanese expat carries enormous emotional weight. Coming home — even temporarily — reconnects them with family, food, language, and identity. Lebanese who have lived abroad for decades often say "rja3t" about visiting, even if they\'ve been living elsewhere for 30 years. Lebanon is always "el balad" (the homeland) regardless of where you live.'
  },
];

const AIR_TIPS = [
  {
    title: '✈️ Beirut Airport: Lebanon\'s Emotional Hub',
    body: 'Rafic Hariri International Airport in Beirut is one of the world\'s most emotionally charged airports. The arrivals hall is regularly packed with extended family gatherings — flowers, ululations, tears, and shouting. Summer and Christmas are peak "return seasons" for the diaspora. The airport road (autostrade) gets congested with welcoming convoys. To understand Lebanon, understand that departure and return are national experiences.'
  },
  {
    title: '🌍 Lebanon\'s Diaspora by Numbers',
    body: 'Lebanon has approximately 4-5 million residents and 14+ million diaspora worldwide. Brazil has 7+ million Lebanese-origin citizens; Mexico, Australia, USA, Ivory Coast, West Africa, and the Gulf have massive communities. The 1975-90 civil war, the 2006 war, and the 2019-present economic collapse each sent new waves. "3al ghirbe" (in the diaspora) is a shared Lebanese experience across generations.'
  },
  {
    title: '🎁 The Gift Ritual',
    body: '"Shu jibt?" (what did you bring?) isn\'t rude — it\'s an expression of connection. Returning travelers are expected to bring: chocolates from Europe, olive oil from the village, spices, specific branded items that are hard to find or expensive in Lebanon, medicines requested by relatives. The gift isn\'t the point — the thought (showing you were thinking of home while away) is. Arriving empty-handed signals you didn\'t think of your people.'
  },
  {
    title: '📱 WhatsApp & Coordination',
    body: 'Lebanese airport culture runs on WhatsApp. Before a flight: "tura, ana waaSel ba3ad tlet se3aat" (heads up, arriving in 3 hours). The family WhatsApp group explodes with logistics — who picks up, who brings food, which relatives will come, what\'s being cooked. After landing: the first WhatsApp messages go out immediately. Lebanese families maintain elaborate coordination systems for arrivals and departures across continents.'
  },
  {
    title: '💔 Ghurba: The Lebanese Ache',
    body: '"Ghurba" is more than homesickness — it\'s the specific pain of the Lebanese diaspora identity. Songs about ghurba (Fairouz: "Li Beirut," Wadih el Safi: "Ya Biladi") are the soundtrack of every Lebanese expat\'s feelings. The paradox: Lebanon\'s economic and political instability pushes people away, but the cultural pull (family, food, identity) draws them back. This tension — push and pull — defines the modern Lebanese experience.'
  },
];

const AIR_ABOUT = 'The Lebanese airport experience is unlike any other. Rafic Hariri International Airport in Beirut is the gateway to a country that sends its people all over the world and welcomes them back with extraordinary warmth. Lebanon has one of the highest diaspora-to-resident ratios in the world — meaning the airport is constantly charged with the emotion of separations and reunions. Understanding Lebanese airport and diaspora vocabulary means understanding the rhythm of Lebanese life: the son who left for the Gulf, the family that emigrated to Brazil three generations ago and still speaks Lebanese, the summer return that\'s more emotional than any ordinary holiday. "Ghurba" (émigré longing) and "3awde" (return) are twin pillars of Lebanese cultural identity.';
