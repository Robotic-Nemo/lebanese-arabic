// Run #51 — Code-Switching Trainer data
// Distinctively Lebanese: daily speech mixes Arabic + French + English.
// Prefix: csw. Browser globals only.

// Language tags per word: ar=Arabic/Lebanese, fr=French, en=English.
// Tag tab: learner taps each word to reveal its language tag.
const CSW_MIXED_SENTENCES = [
  { tokens:[
      {w:"Bonjour",    lang:"fr"}, {w:"kifak",      lang:"ar"}, {w:"habibi",  lang:"ar"},
      {w:"?",          lang:"ar"}
    ], en:"Hello, how are you my dear?" },
  { tokens:[
      {w:"Merci",      lang:"fr"}, {w:"ktir",       lang:"ar"}, {w:",",       lang:"ar"},
      {w:"you",        lang:"en"}, {w:"saved",      lang:"en"}, {w:"my",      lang:"en"},
      {w:"day",        lang:"en"}
    ], en:"Thanks a lot, you saved my day." },
  { tokens:[
      {w:"3am",        lang:"ar"}, {w:"rou7",       lang:"ar"}, {w:"3al",     lang:"ar"},
      {w:"mall",       lang:"en"}, {w:",",          lang:"ar"}, {w:"badi",    lang:"ar"},
      {w:"shopping",   lang:"en"}
    ], en:"I'm going to the mall, I want to shop." },
  { tokens:[
      {w:"Hi",         lang:"en"}, {w:"!",          lang:"en"}, {w:"shu",     lang:"ar"},
      {w:"el",         lang:"ar"}, {w:"plan",       lang:"en"}, {w:"la",      lang:"ar"},
      {w:"l-weekend",  lang:"en"}, {w:"?",          lang:"ar"}
    ], en:"Hi! What's the plan for the weekend?" },
  { tokens:[
      {w:"Bonsoir",    lang:"fr"}, {w:",",          lang:"ar"}, {w:"3andi",   lang:"ar"},
      {w:"réunion",    lang:"fr"}, {w:"bukra",      lang:"ar"}, {w:"sine",    lang:"ar"},
      {w:"7",          lang:"ar"}
    ], en:"Good evening, I have a meeting tomorrow at 7." },
  { tokens:[
      {w:"Please",     lang:"en"}, {w:",",          lang:"ar"}, {w:"jibli",   lang:"ar"},
      {w:"coffee",     lang:"en"}, {w:"w",          lang:"ar"}, {w:"croissant",lang:"fr"}
    ], en:"Please bring me a coffee and a croissant." },
  { tokens:[
      {w:"Yalla",      lang:"ar"}, {w:"bye",        lang:"en"}, {w:",",       lang:"ar"},
      {w:"bshufak",    lang:"ar"}, {w:"demain",     lang:"fr"}
    ], en:"OK bye, see you tomorrow." },
  { tokens:[
      {w:"L-email",    lang:"en"}, {w:"taba3ak",    lang:"ar"}, {w:"wosol",   lang:"ar"},
      {w:",",          lang:"ar"}, {w:"thanks",     lang:"en"}
    ], en:"Your email arrived, thanks." },
  { tokens:[
      {w:"Bravo",      lang:"fr"}, {w:"!",          lang:"fr"}, {w:"inta",    lang:"ar"},
      {w:"genius",     lang:"en"}, {w:"3anjad",     lang:"ar"}
    ], en:"Well done! You're a genius seriously." },
  { tokens:[
      {w:"Excuse-moi", lang:"fr"}, {w:",",          lang:"ar"}, {w:"addesh",  lang:"ar"},
      {w:"el",         lang:"ar"}, {w:"bill",       lang:"en"}, {w:"?",       lang:"ar"}
    ], en:"Excuse me, how much is the bill?" },
  { tokens:[
      {w:"3an",        lang:"ar"}, {w:"jed",        lang:"ar"}, {w:"?",       lang:"ar"},
      {w:"That's",     lang:"en"}, {w:"crazy",      lang:"en"}, {w:"!",       lang:"en"}
    ], en:"Seriously? That's crazy!" },
  { tokens:[
      {w:"Mama",       lang:"ar"}, {w:"3amla",      lang:"ar"}, {w:"tabbouleh",lang:"ar"},
      {w:"w",          lang:"ar"}, {w:"gratin",     lang:"fr"}
    ], en:"Mom made tabbouleh and gratin." },
  { tokens:[
      {w:"Send",       lang:"en"}, {w:"li",         lang:"ar"}, {w:"l",       lang:"ar"},
      {w:"address",    lang:"en"}, {w:"3al",        lang:"ar"}, {w:"WhatsApp",lang:"en"}
    ], en:"Send me the address on WhatsApp." },
  { tokens:[
      {w:"C'est",      lang:"fr"}, {w:"pas",        lang:"fr"}, {w:"grave",   lang:"fr"},
      {w:",",          lang:"ar"}, {w:"ma",         lang:"ar"}, {w:"tehtam",  lang:"ar"}
    ], en:"It's no big deal, don't worry." },
  { tokens:[
      {w:"Habibi",     lang:"ar"}, {w:",",          lang:"ar"}, {w:"can",     lang:"en"},
      {w:"you",        lang:"en"}, {w:"wait",       lang:"en"}, {w:"shwayy",  lang:"ar"},
      {w:"?",          lang:"ar"}
    ], en:"Dear, can you wait a bit?" },
  { tokens:[
      {w:"El",         lang:"ar"}, {w:"meeting",    lang:"en"}, {w:"enta2al", lang:"ar"},
      {w:"la",         lang:"ar"}, {w:"Zoom",       lang:"en"}
    ], en:"The meeting moved to Zoom." },
  { tokens:[
      {w:"Rou7",       lang:"ar"}, {w:"3al",        lang:"ar"}, {w:"pharmacie",lang:"fr"},
      {w:"w",          lang:"ar"}, {w:"jibli",      lang:"ar"}, {w:"medicine",lang:"en"}
    ], en:"Go to the pharmacy and bring me medicine." },
];

// Standard loanwords/borrowings — used natively in Lebanese speech even in
// otherwise all-Arabic conversations. Organized by origin.
const CSW_BORROWINGS = [
  // French
  { lb:"merci",      origin:"fr", en:"thank you",       note:"Standard thanks, even in all-Arabic speech." },
  { lb:"bonjour",    origin:"fr", en:"hello / good morning", note:"Morning greeting across all registers." },
  { lb:"bonsoir",    origin:"fr", en:"good evening",    note:"Evening greeting, replaces msa2 el-khair in most contexts." },
  { lb:"pardon",     origin:"fr", en:"excuse me / sorry", note:"Apology + attention-getter." },
  { lb:"déjà",       origin:"fr", en:"already",         note:"Used with Arabic verb: 'déjà 3rifna'." },
  { lb:"garçon",     origin:"fr", en:"waiter",          note:"Restaurant term, often polite." },
  { lb:"ascenseur",  origin:"fr", en:"elevator",        note:"Building term, rarely translated." },
  { lb:"coiffeur",   origin:"fr", en:"hairdresser",     note:"Beauty vocabulary mostly French." },
  { lb:"voiture",    origin:"fr", en:"car",             note:"Equally common as 'sayyaara'." },
  { lb:"fromage",    origin:"fr", en:"cheese",          note:"Especially for European-style cheeses." },
  { lb:"café",       origin:"fr", en:"coffee/café",     note:"The place; 'ahwe' for the drink." },
  // English
  { lb:"hi",         origin:"en", en:"hi",              note:"Casual greeting, youth-preferred." },
  { lb:"bye",        origin:"en", en:"bye",             note:"Often pairs with 'yalla': 'yalla bye'." },
  { lb:"ok",         origin:"en", en:"ok",              note:"Universal agreement particle." },
  { lb:"please",     origin:"en", en:"please",          note:"Softens requests; 'law sama7t' formal equivalent." },
  { lb:"weekend",    origin:"en", en:"weekend",         note:"No native single word; takes definite 'l-weekend'." },
  { lb:"meeting",    origin:"en", en:"meeting",         note:"Business context, fully integrated." },
  { lb:"email",      origin:"en", en:"email",           note:"Takes Arabic article: 'l-email'." },
  { lb:"shopping",   origin:"en", en:"shopping",        note:"Activity noun, takes Arabic aspect: '3am eshopping'." },
  { lb:"laptop",     origin:"en", en:"laptop",          note:"Tech vocabulary predominantly English." },
  { lb:"boss",       origin:"en", en:"boss",            note:"Workplace; 'el-boss' with article." },
  { lb:"mall",       origin:"en", en:"mall",            note:"Takes 'el-': 'l-mall'." },
  { lb:"taxi",       origin:"en", en:"taxi",            note:"Cross-linguistic; also French origin." },
];

// Swap tab: learner sees an Arabic-only sentence, picks the natural code-switched
// variant Lebanese actually say. Wrong options are real-sounding but off in register.
const CSW_SWAP = [
  { arabic:"shukran ktir",              opts:["merci ktir","thanks ktir","thanks a lot","shu ktir"],              ans:"merci ktir",     note:"French 'merci' is the default thanks in Lebanese." },
  { arabic:"sabah el-khair",            opts:["bonjour","good morning habibi","bonsoir","hi sabah"],             ans:"bonjour",         note:"'bonjour' replaces MSA morning greeting in most registers." },
  { arabic:"el-ejtima3 enta2al la Zoom",opts:["el-meeting enta2al la Zoom","meeting moved to Zoom","réunion moved","ejtima3 Zoom"], ans:"el-meeting enta2al la Zoom", note:"'meeting' + Arabic article 'el-' is standard workplace speech." },
  { arabic:"3afwan, addesh el-fatura?", opts:["pardon, addesh el-bill?","sorry addesh?","excuse-moi fatura","3afwan bill"],       ans:"pardon, addesh el-bill?", note:"'pardon' + 'bill' code-switch is common in restaurants." },
  { arabic:"ma3 es-salami",             opts:["yalla bye","bye salami","merci salami","adieu"],                   ans:"yalla bye",       note:"'yalla bye' is the dominant casual goodbye." },
  { arabic:"la2, mish kteer",           opts:["no, mish kteer","non mish","la2 kteer no","la2 pas"],               ans:"no, mish kteer",  note:"English 'no' lightens/softens negation in casual speech." },
  { arabic:"ma fi mushkile",            opts:["c'est pas grave, ma fi mushkile","no problem habibi","ok fi mushkile","merci mushkile"], ans:"c'est pas grave, ma fi mushkile", note:"French idiom fronts the Arabic reassurance." },
  { arabic:"3andi maw3ed",              opts:["3andi meeting","j'ai meeting","meeting 3andi bukra","3andi réunion"], ans:"3andi meeting", note:"Work appointments skew English; family/doctor stay 'maw3ed'." },
  { arabic:"khalle7 l-email",           opts:["send l-email","khalle7 le mail","ba3th l-email","send email habibi"], ans:"send l-email",  note:"'send' fully replaces Arabic verb in digital contexts." },
  { arabic:"b7ebbak ktir",              opts:["je t'aime ktir","love you ktir","b7ebbak habibi","je t'aime habibi"], ans:"je t'aime ktir", note:"Romance/affection often code-switches into French." },
];

// Drill tab: MCQ — identify which single word is the non-Arabic one.
const CSW_DRILL = [
  { sentence:"Bonjour kifak?",               opts:["bonjour","kifak"],                          ans:"bonjour",    origin:"fr" },
  { sentence:"Yalla bye habibi",             opts:["yalla","bye","habibi"],                     ans:"bye",        origin:"en" },
  { sentence:"3am rou7 3al mall",            opts:["rou7","3al","mall"],                        ans:"mall",       origin:"en" },
  { sentence:"Shu el plan la l-weekend?",    opts:["shu","plan","weekend","la"],                ans:"plan",       origin:"en" },
  { sentence:"Merci ktir 3anjad",            opts:["merci","ktir","3anjad"],                    ans:"merci",      origin:"fr" },
  { sentence:"3andi réunion bukra",          opts:["3andi","réunion","bukra"],                  ans:"réunion",    origin:"fr" },
  { sentence:"Send li l-address",            opts:["send","li","address"],                      ans:"send",       origin:"en" },
  { sentence:"C'est pas grave habibi",       opts:["c'est","pas","grave","habibi"],             ans:"grave",      origin:"fr" },
  { sentence:"Rou7 3al pharmacie",           opts:["rou7","3al","pharmacie"],                   ans:"pharmacie",  origin:"fr" },
  { sentence:"El meeting enta2al la Zoom",   opts:["meeting","enta2al","la","Zoom"],            ans:"meeting",    origin:"en" },
  { sentence:"Please jibli coffee",          opts:["please","jibli","coffee"],                  ans:"please",     origin:"en" },
  { sentence:"Bravo, inta genius!",          opts:["bravo","inta","genius"],                    ans:"genius",     origin:"en" },
];

// Short reference: when Lebanese code-switch by register.
const CSW_REGISTERS = [
  { context:"Greetings",              pattern:"Morning/evening → French (bonjour, bonsoir); casual hi → English" },
  { context:"Thanks",                 pattern:"French 'merci' is default; English 'thanks' for very casual contexts" },
  { context:"Workplace / Tech",       pattern:"Predominantly English: meeting, email, laptop, boss, deadline" },
  { context:"Food / Restaurant",      pattern:"French for European dishes + service terms; Arabic for local food" },
  { context:"Romance / Affection",    pattern:"French ('je t'aime') or Arabic ('b7ebbak'); English 'love you' youth-casual" },
  { context:"Shopping / Urban",       pattern:"English: mall, shopping, coffee-shop, delivery" },
  { context:"Apology / Attention",    pattern:"French 'pardon' > Arabic '3afwan' for mild requests" },
  { context:"Weekend / Leisure",      pattern:"'weekend' fully replaces Arabic equivalent; 'plan' as noun too" },
];
