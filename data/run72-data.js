// Run #72 — Loanword Spotter (NEW FEATURE)
// Lebanese Arabic borrows heavily from French (Mandate era 1920–43),
// Turkish (Ottoman 400 yrs), English (modern tech/business), Persian
// (Sassanid era + Arabic-mediated), and Aramaic (substrate). Identifying
// the source teaches register: French = chic/urban/educated, Turkish =
// domestic/old-Beirut, English = tech/youth, Persian/Aramaic = cultural-
// historical depth. Each item: word (Arabic + translit), gloss, origin,
// optional `etym` note. Quiz format = 5 origin buttons; user picks one.
//
// Origin labels (kept short for buttons): fr / tr / en / fa / arc / ar
//   ar = native/MSA root (distractor — not all items are loans)

const LWS_ITEMS = [
  { id:'lw01', ar:'أصونصور', tr:'aSonSeur',     en:'elevator',         origin:'fr',  etym:"From French 'ascenseur'. Universal in Beirut buildings." },
  { id:'lw02', ar:'بانيو',   tr:'banyo',         en:'bathtub',          origin:'fr',  etym:"From French 'baignoire' via 'baignoire→banyo'. Sometimes traced via Italian." },
  { id:'lw03', ar:'تواليت',  tr:'twalet',        en:'toilet',           origin:'fr',  etym:"From French 'toilette'. Replaces classical حمّام for the fixture." },
  { id:'lw04', ar:'ميرسي',   tr:'merci',         en:'thank you',        origin:'fr',  etym:"From French 'merci'. Used alongside شكراً in everyday speech." },
  { id:'lw05', ar:'بونجور',  tr:'bonjour',       en:'good morning',     origin:'fr',  etym:"From French. Educated/urban register; village speech prefers صباح الخير." },
  { id:'lw06', ar:'باسبور',  tr:'baSbor',        en:'passport',         origin:'fr',  etym:"From French 'passeport'. Official paperwork register is heavily French." },
  { id:'lw07', ar:'كنبة',    tr:"kanabé",        en:'sofa',             origin:'fr',  etym:"From French 'canapé'. Older Lebanese also use ديوان (Persian/Arabic)." },
  { id:'lw08', ar:'صالون',   tr:'Salon',         en:'living room',      origin:'fr',  etym:"From French 'salon'. Replaces مجلس in modern apartments." },
  { id:'lw09', ar:'أوضة',    tr:'oDa',           en:'room',             origin:'tr',  etym:"From Turkish 'oda'. Native Arabic غرفة coexists; أوضة feels colloquial." },
  { id:'lw10', ar:'دولاب',   tr:'dulèb',         en:'closet/wheel',     origin:'fa',  etym:"From Persian 'dūlāb' (water-wheel→cabinet by metaphor). Came via Ottoman Turkish." },
  { id:'lw11', ar:'صوبيا',   tr:'Sobya',         en:'heating stove',    origin:'tr',  etym:"From Turkish 'soba'. Standard winter vocabulary in mountain homes." },
  { id:'lw12', ar:'بقشيش',   tr:'ba2shish',      en:'tip/gratuity',     origin:'fa',  etym:"From Persian 'bakhshīsh' via Turkish. Pan-Levantine." },
  { id:'lw13', ar:'فستان',   tr:'fistèn',        en:'dress',            origin:'tr',  etym:"From Turkish 'fistan' ← Italian 'fustagno'. Older generation word." },
  { id:'lw14', ar:'كمبيوتر', tr:'kombyuter',     en:'computer',         origin:'en',  etym:"Direct English borrowing. حاسوب (MSA) almost never spoken in Lebanese." },
  { id:'lw15', ar:'موبايل',  tr:'mobayl',        en:'mobile phone',     origin:'en',  etym:"From English 'mobile'. Replaces older خلوي." },
  { id:'lw16', ar:'إيميل',   tr:'imayl',         en:'email',            origin:'en',  etym:"Direct English. Plural عم بعتلك إيميلات is typical Lebanese morphology on English root." },
  { id:'lw17', ar:'أوكي',    tr:'okay',          en:'okay',             origin:'en',  etym:"Universal. Often pronounced with rising intonation as confirmation." },
  { id:'lw18', ar:'باركينغ', tr:'barking',       en:'parking lot',      origin:'en',  etym:"From English. Sometimes spelled باركينج. موقف (native) used in formal contexts." },
  { id:'lw19', ar:'باص',     tr:'bāS',           en:'bus',              origin:'en',  etym:"From English 'bus'. Native حافلة exists but only in news/MSA." },
  { id:'lw20', ar:'تريّق',   tr:'tarya2',        en:'have breakfast',   origin:'arc', etym:"Aramaic substrate (root r-y-q meaning daybreak meal). Not Arabic morphology." },
  { id:'lw21', ar:'شوب',     tr:'shob',          en:'hot weather',      origin:'arc', etym:"Aramaic root š-w-b 'heat'. Distinct from Arabic حرّ (which means heat in MSA)." },
  { id:'lw22', ar:'بيت',     tr:'bayt',          en:'house',            origin:'ar',  etym:"Native Semitic root b-y-t. Not a loanword — distractor." },
  { id:'lw23', ar:'كتاب',    tr:'ktèb',          en:'book',             origin:'ar',  etym:"Native Arabic root k-t-b. Not a loanword — distractor." },
  { id:'lw24', ar:'شاورما',  tr:'shawarma',      en:'shawarma',         origin:'tr',  etym:"From Turkish 'çevirme' (turning), referring to the rotating spit. Pan-regional now." },
  { id:'lw25', ar:'كرفتة',   tr:'krafté',        en:'necktie',          origin:'fr',  etym:"From French 'cravate'. Universal in Lebanese formal-wear vocabulary." },
  { id:'lw26', ar:'قهوة',    tr:'2ahwé',         en:'coffee',           origin:'ar',  etym:"Native Arabic, possibly originally meaning wine. Not a loan despite the world borrowing IT." },
  { id:'lw27', ar:'ديوان',   tr:'diwèn',         en:'sitting hall',     origin:'fa',  etym:"From Persian 'dīwān' (record/court). Came via formal Arabic, used in old houses." },
  { id:'lw28', ar:'بضاعة',   tr:'bDā3a',         en:'merchandise',      origin:'ar',  etym:"Native Semitic root b-D-3. Not a loanword — distractor." },
  { id:'lw29', ar:'جزدان',   tr:'jizdèn',        en:'wallet',           origin:'fa',  etym:"From Persian 'juzdān' (notebook holder). Via Ottoman Turkish to Levantine." },
  { id:'lw30', ar:'رستوران', tr:'restoran',      en:'restaurant',       origin:'fr',  etym:"From French 'restaurant'. مطعم (native) is more common but restoran appears on signage." },
];

const LWS_ORIGINS = [
  { code:'fr',  label:'🇫🇷 French',     short:'French' },
  { code:'tr',  label:'🇹🇷 Turkish',    short:'Turkish' },
  { code:'en',  label:'🇬🇧 English',    short:'English' },
  { code:'fa',  label:'🇮🇷 Persian',    short:'Persian' },
  { code:'arc', label:'📜 Aramaic',     short:'Aramaic' },
  { code:'ar',  label:'🟢 Native Arabic', short:'Arabic (native)' },
];

const LWS_TIPS = [
  'French loans cluster in fashion, building features, polite phrases (merci, salon, ascenseur). Mandate-era legacy.',
  'Turkish loans cluster in domestic life and old Beirut: oda (room), soba (stove), fistan (dress).',
  'English loans dominate tech, transit, business: kombyuter, mobayl, imayl, baS.',
  'Persian came via Ottoman: dolab (closet), diwan (hall), jizdan (wallet) — rarely felt as foreign.',
  'Aramaic substrate hides in everyday verbs (taraya2 / shob) — feel native but predate Arabic in the region.',
  'Watch out: قهوة, بيت, كتاب are NOT loans — Lebanese is still a Semitic language at its core.',
  'Register matters: salon = modern apt, diwan = old village house, majlis = formal/MSA. Pick by setting.',
];
