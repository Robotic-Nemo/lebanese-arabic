// R630 — NEW FEATURE: Lebanese Diaspora & Emigration (grb)

const GRB_CATS = [
  { id: 'emigration', label: '✈️ Leaving & Return' },
  { id: 'diaspora',   label: '🌍 Diaspora Life' },
  { id: 'nostalgia',  label: '🏡 Nostalgia & Roots' },
  { id: 'reunion',    label: '🤗 Reunion Phrases' },
];

const GRB_WORDS = [
  // Leaving & Return
  { id: 'grb01', cat: 'emigration', ar: 'الغربة', tr: 'l-ghurbe', en: 'Exile / living abroad', note: 'The central Lebanese concept. "ta3ab l-ghurbe" = the hardship of being abroad. Every Lebanese family knows it.' },
  { id: 'grb02', cat: 'emigration', ar: 'المغترب', tr: 'l-mughtarib', en: 'The emigrant / expat', note: '"l-mughtarib" = one who has gone into exile. Lebanon has ~15 million in the diaspora vs 6 million at home.' },
  { id: 'grb03', cat: 'emigration', ar: 'السفر', tr: 'l-safar', en: 'Travel / the journey abroad', note: '"raa7 3ala l-safar" = he went abroad. "safar" can mean a trip or the life abroad.' },
  { id: 'grb04', cat: 'emigration', ar: 'المهجر', tr: 'l-mahjar', en: 'The diaspora / place of exile', note: '"adab l-mahjar" = diaspora literature (Gibran, Naimy wrote from New York). Deep cultural concept.' },
  { id: 'grb05', cat: 'emigration', ar: 'رجع', tr: 'rija3', en: 'He returned / came back', note: '"mta rja3 min 3ind-on?" = when did he come back from them? Return visits are huge family events.' },
  { id: 'grb06', cat: 'emigration', ar: 'سفارة', tr: 'sfaara', en: 'Embassy', note: '"ra7 3as-sfaara" = he went to the embassy. Visa bureaucracy is constant topic for Lebanese emigrants.' },
  { id: 'grb07', cat: 'emigration', ar: 'إقامة', tr: '2i2aame', en: 'Residency permit', note: '"3ando 2i2aame" = he has residency. "jarrada l-2i2aame" = renewed the residency. Critical word.' },
  // Diaspora Life
  { id: 'grb08', cat: 'diaspora', ar: 'جالية', tr: 'jaaliye', en: 'Community / Lebanese diaspora community', note: '"l-jaaliye l-lubnaaniyye fi Brasil" = the Lebanese community in Brazil. Lebanon has major diaspora in Brazil/Argentina.' },
  { id: 'grb09', cat: 'diaspora', ar: 'بعيد', tr: 'b3iid', en: 'Far away / distant', note: '"b3iid 3an l-ahl" = far from family. "l-ghurbe b3iide" = the exile is far (emotionally and physically).' },
  { id: 'grb10', cat: 'diaspora', ar: 'حوالة', tr: '7awaale', en: 'Remittance / money transfer', note: '"ba3atlo 7awaale" = sent him a remittance. Lebanese diaspora sends billions annually to Lebanon.' },
  { id: 'grb11', cat: 'diaspora', ar: 'نوستالجيا', tr: 'nostalji', en: 'Nostalgia', note: 'Loanword used directly. "3am ba3ish nostalji" = I\'m feeling nostalgic. Lebanese expat experience.' },
  { id: 'grb12', cat: 'diaspora', ar: 'الوطن', tr: 'l-waTan', en: 'The homeland', note: '"7ubb l-waTan" = love of the homeland. "3am biftikir bel-waTan" = thinking of home constantly.' },
  { id: 'grb13', cat: 'diaspora', ar: 'أشتاق', tr: '2ishtaa2', en: 'I miss (verb)', note: '"2ishtaqit ktir" = I missed a lot. "3am bishtaa2 3a-lubnan" = he\'s missing Lebanon. Constantly used.' },
  { id: 'grb14', cat: 'diaspora', ar: 'هجرة', tr: 'hijre', en: 'Emigration / migration', note: '"l-hijre l-lubnaaniyye" = Lebanese emigration. "hijrit l-3a2ol" = brain drain. Deep national wound.' },
  // Nostalgia & Roots
  { id: 'grb15', cat: 'nostalgia', ar: 'الأرز', tr: 'l-arz', en: 'The cedar (tree / Lebanon symbol)', note: '"blad l-arz" = the land of cedars. Symbol of Lebanon. Every diaspora Lebanese has cedar pride.' },
  { id: 'grb16', cat: 'nostalgia', ar: 'ذاكرة', tr: 'zaakre', en: 'Memory', note: '"zaakrit lubnan" = memory of Lebanon. "ma bintsa" = never forget. Lebanese identity runs on memory.' },
  { id: 'grb17', cat: 'nostalgia', ar: 'ريحة لبنان', tr: 'ri7it lubnan', en: 'The smell of Lebanon', note: '"ya ri7it lubnan" = oh the smell of Lebanon. Refers to za3tar, pine, sea air. Beloved diaspora phrase.' },
  { id: 'grb18', cat: 'nostalgia', ar: 'جذور', tr: 'jzuur', en: 'Roots', note: '"jzuuro lubnaaniyye" = his roots are Lebanese. "btifti3 3a-jzuurak" = you return to your roots.' },
  { id: 'grb19', cat: 'nostalgia', ar: 'البلد', tr: 'l-balad', en: 'The village / hometown', note: '"baddna nruu7 3a-l-balad" = we want to go back to the village. Also = the country.' },
  { id: 'grb20', cat: 'nostalgia', ar: 'العيلة', tr: 'l-3eele', en: 'The family / clan', note: '"3a la2e l-3eele" = to be reunited with family. Lebanese family bonds cross continents.' },
  { id: 'grb21', cat: 'nostalgia', ar: 'الصيفية', tr: 'l-Sayfiyye', en: 'The summer (home) / summer stay', note: '"rji3na 3a-l-Sayfiyye" = we came back for summer. Lebanese diaspora summer return is a ritual.' },
  // Reunion Phrases
  { id: 'grb22', cat: 'reunion', ar: 'وحشتني', tr: 'wa7ashni', en: 'I missed you', note: '"wa7ashni ktir" = I missed you a lot. Emotional reunion word. "walla wa7ashna" = we truly missed you.' },
  { id: 'grb23', cat: 'reunion', ar: 'الحمد لله عالسلامة', tr: 'l-7amdilla 3as-slaame', en: 'Thank God you arrived safely', note: 'Said when someone returns. Full form of the arrival greeting. The standard response is "allah yisallmak".' },
  { id: 'grb24', cat: 'reunion', ar: 'كبرت', tr: 'kibirt', en: 'You\'ve grown up!', note: 'What Lebanese diaspora relatives say to every child. "kibirt w kbirt" = you\'ve grown a lot.' },
  { id: 'grb25', cat: 'reunion', ar: 'ما تروح تاني', tr: 'ma truu7 taani', en: 'Don\'t go again', note: '"ma truu7 taani, bi2a hon" = don\'t go again, stay here. Classic Lebanese family guilt trip on departure.' },
  { id: 'grb26', cat: 'reunion', ar: 'بعيد عن العين', tr: 'b3iid 3an l-3ein', en: 'Far from the eye', note: 'From the proverb "b3iid 3an l-3ein, b3iid 3an l-2alb" = out of sight, out of mind. But Lebanese disprove it.' },
  { id: 'grb27', cat: 'reunion', ar: 'مشتاقين', tr: 'mishtaa2iin', en: 'We/they missed you (plural)', note: '"kullna mishtaa2iin 3alaik" = we all missed you. Said on return. "mishtaa2 = yearning."' },
  { id: 'grb28', cat: 'reunion', ar: 'الله يخليك', tr: 'allah ykhalliik', en: 'May God keep you (safe, for us)', note: 'Said on departure to diaspora member. "allah ykhalliik ma3na" = may God keep you with us.' },
];

const GRB_DRILLS = [
  { q: 'What is "l-ghurbe"?', opts: ['The passport', 'The village', 'The exile/living abroad', 'The return journey'], ans: 2, exp: '"l-ghurbe" = exile/living abroad. Central Lebanese concept. "ta3ab l-ghurbe" = the hardship of being abroad.' },
  { q: 'What is "l-mughtarib"?', opts: ['The tourist', 'The emigrant/expat', 'The village elder', 'The customs officer'], ans: 1, exp: '"l-mughtarib" = the emigrant. Lebanon has ~15 million in diaspora globally. Core identity term.' },
  { q: 'What does "wa7ashni" mean?', opts: ['Welcome back', 'I was worried', 'I missed you', 'You\'ve changed'], ans: 2, exp: '"wa7ashni" = I missed you. Emotional reunion word. "wa7ashni ktir" = I missed you a lot.' },
  { q: 'What is "l-mahjar"?', opts: ['The airport', 'The diaspora/place of exile', 'The embassy', 'The homeland'], ans: 1, exp: '"l-mahjar" = diaspora. "adab l-mahjar" = diaspora literature (Khalil Gibran wrote from New York).' },
  { q: 'What does "2ishtaa2" mean?', opts: ['Arrived safely', 'Missed (verb)', 'Stayed home', 'Returned quickly'], ans: 1, exp: '"2ishtaa2" = I missed. "2ishtaqit 3a-lubnan" = I missed Lebanon. Constant diaspora emotion.' },
  { q: 'What does "l-7amdilla 3as-slaame" mean?', opts: ['Safe travels', 'Thank God you arrived safely', 'Welcome home forever', 'May God protect you'], ans: 1, exp: '"l-7amdilla 3as-slaame" = thank God you\'re safe. Said when someone returns safely from abroad.' },
  { q: 'What is "l-waTan"?', opts: ['The village', 'The homeland', 'The family', 'The summer house'], ans: 1, exp: '"l-waTan" = the homeland. "7ubb l-waTan" = love of homeland. Core Lebanese identity concept.' },
  { q: 'What is "hijrit l-3a2ol"?', opts: ['Illegal immigration', 'Brain drain', 'Seasonal migration', 'Mass exodus'], ans: 1, exp: '"hijrit l-3a2ol" = brain drain. Lebanon loses educated youth to emigration. Constant national concern.' },
  { q: 'What does "ma truu7 taani" mean?', opts: ['Travel safely', 'Come back soon', 'Don\'t go again', 'I\'ll miss you'], ans: 2, exp: '"ma truu7 taani" = don\'t go again. Classic family guilt trip said to diaspora members on departure.' },
  { q: 'What does "l-Sayfiyye" refer to?', opts: ['The Lebanese flag', 'Summer return/stay in Lebanon', 'A summer festival', 'The sea shore'], ans: 1, exp: '"l-Sayfiyye" = summer stay. Lebanese diaspora returning to Lebanon in summer is a deeply rooted tradition.' },
  { q: 'What is "7awaale"?', opts: ['Plane ticket', 'Remittance/money transfer', 'Residency permit', 'Family reunion'], ans: 1, exp: '"7awaale" = remittance. Lebanese diaspora sends billions annually to Lebanon. Critical economic lifeline.' },
  { q: 'What does "ri7it lubnan" evoke for diaspora Lebanese?', opts: ['Passport smell', 'The smell of Lebanon — za3tar, pine, sea', 'Airport arrivals hall', 'Village food cooking'], ans: 1, exp: '"ri7it lubnan" = the smell of Lebanon. Za3tar, pine trees, sea air, 3araq. Powerful diaspora nostalgia trigger.' },
  { q: 'What does "mishtaa2iin" mean?', opts: ['We travelled', 'We arrived', 'We missed you (plural)', 'We stayed'], ans: 2, exp: '"mishtaa2iin" = we/they missed you. Plural form of mishtaa2. "kullna mishtaa2iin 3alaik" = we all missed you.' },
  { q: 'What is "jzuur" in Lebanese diaspora context?', opts: ['Roots', 'Departure', 'Papers/documents', 'Village location'], ans: 0, exp: '"jzuur" = roots. "jzuuro lubnaaniyye" = his roots are Lebanese. Diaspora identity is tied to Lebanese roots.' },
  { q: 'What does "kibirt" mean when said by relatives?', opts: ['You\'re late', 'You\'ve grown up!', 'You look tired', 'Welcome back'], ans: 1, exp: '"kibirt" = you\'ve grown up! Every Lebanese diaspora child hears this from relatives on return visits.' },
];

const GRB_TIPS = [
  { title: 'Lebanon\'s extraordinary diaspora', body: 'Lebanon has ~15 million diaspora members worldwide vs ~6 million in Lebanon. Major communities in Brazil, Argentina, USA, Australia, West Africa, Gulf states. Lebanese identity travels: "lubnaani fi kull makan" (Lebanese everywhere). The diaspora sends billions in remittances annually, keeping Lebanon\'s economy partially afloat.' },
  { title: 'The summer return ritual', body: '"l-Sayfiyye" (the summer stay) is sacred. Diaspora Lebanese descend on Lebanon July-August. Villages fill with foreign-born Lebanese reconnecting with roots. Phrases: "ji2na 3a-l-Sayfiyye" (we came for summer), "btruu7u 3al-balad?" (are you going to the village?), "hal-Sayfiyye fi lubnan" (this summer in Lebanon).' },
  { title: 'Reunion emotions are intense', body: 'Lebanese reunions are emotionally charged. Key phrases: "wa7ashni ktir" (I missed you so much), "l-7amdilla 3as-slaame" (thank God you arrived safe), "ma truu7 taani" (don\'t go again). Crying is expected. Food is deployed immediately: "2ukkul, 2ukkul" = eat, eat.' },
  { title: 'Remittances and financial lifelines', body: '"7awaale" (remittance) kept Lebanon\'s middle class alive post-2019 when banks froze. Diaspora sent money via Western Union, OMT, Whish. "ba3atlo 7awaale" = sent him money. "3ambitrakkab 3al-diaspora" = the country relies on the diaspora.' },
  { title: 'Identity across generations', body: 'Second-gen Lebanese diaspora navigate dual identity: "min wein inta aslak?" = where are your origins? "jzuuri lubnaaniyye" = my roots are Lebanese. Villages are identity anchors: "min 7asbeyya" = from Hasbaya. Lebanese names, churches, and food keep identity alive globally.' },
  { title: 'The departing conversation', body: 'Every Lebanese farewell to a diaspora member follows a script: "allah ykhalliik" (may God keep you), "inti bi2albi" (you\'re in my heart), "ulla rji3 b-sari3" (just come back fast), "rayyi7na" (put our minds at ease = stay safe). The guilt of leaving is real and shared.' },
];
