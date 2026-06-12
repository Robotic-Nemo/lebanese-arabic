// Run #48 — Question Formation Trainer
// Prefix: qf. Constants only; browser globals.

// Tab 1: Quick question-word MCQ (pick right Lebanese QW for the English question)
const QF_WORD_DRILL = [
  { en:"What's your name?",              opts:["shu","meen","wen","kif"],       ans:"shu",      lb:"shu esmak?" },
  { en:"Who is this?",                   opts:["shu","meen","wen","emta"],      ans:"meen",     lb:"meen hayda?" },
  { en:"Where are you going?",           opts:["wen","emta","leh","addesh"],    ans:"wen",      lb:"wen raye7?" },
  { en:"When will you come?",            opts:["wen","emta","leh","kif"],       ans:"emta",     lb:"emta ra7 tiji?" },
  { en:"Why are you late?",              opts:["leh","kif","shu","meen"],       ans:"leh",      lb:"leh met2akhar?" },
  { en:"How did you know?",              opts:["kif","leh","shu","addesh"],     ans:"kif",      lb:"kif 3rifte?" },
  { en:"How much does it cost?",         opts:["kam","addesh","shu","meen"],    ans:"addesh",   lb:"addesh 7a22o?" },
  { en:"Which car do you want?",         opts:["ayya","shu","kam","meen"],      ans:"ayya",     lb:"ayya sayyaara beddak?" },
  { en:"How many days?",                 opts:["addesh","kam","ayya","shu"],    ans:"kam",      lb:"kam yawm?" },
  { en:"Where are you from?",            opts:["wen","min wen","shu","emta"],   ans:"min wen",  lb:"min wen inta?" },
  { en:"What time is it?",               opts:["shu","addesh","emta","kif"],    ans:"addesh",   lb:"addesh es-saa3a?" },
  { en:"Who do you want?",               opts:["meen","shu","leh","ayya"],      ans:"meen",     lb:"meen beddak?" },
  { en:"What are you doing?",            opts:["shu","kif","leh","meen"],       ans:"shu",      lb:"shu 3am ta3mil?" },
  { en:"On which day?",                  opts:["ayya","emta","kam","shu"],      ans:"ayya",     lb:"b-ayy yawm?" },
  { en:"Why didn't you come?",           opts:["leh","kif","shu","wen"],        ans:"leh",      lb:"leh ma ejit?" },
];

// Tab 2: Addressee-sensitive question conjugation (kif + suffix across pronouns)
const QF_ADDRESSEE = [
  { en:"How are you? (to a man)",        opts:["kifak","kifek","kifkon","kifon"],  ans:"kifak",  notes:"-ak = 2ms" },
  { en:"How are you? (to a woman)",      opts:["kifek","kifak","kifkon","kifon"],  ans:"kifek",  notes:"-ek = 2fs" },
  { en:"How are you? (to a group)",      opts:["kifkon","kifak","kifek","kifon"],  ans:"kifkon", notes:"-kon = 2pl" },
  { en:"What's your name? (to a woman)", opts:["shu esmek","shu esmak","shu esmkon","shu esmi"], ans:"shu esmek", notes:"-ek on esim" },
  { en:"What's your name? (to a man)",   opts:["shu esmak","shu esmek","shu esmkon","shu esmi"], ans:"shu esmak", notes:"-ak on esim" },
  { en:"Where are you from? (to a man)", opts:["min wen inta","min wen inti","min wen intu","min wen hiye"], ans:"min wen inta" },
  { en:"Where are you from? (to a woman)", opts:["min wen inti","min wen inta","min wen intu","min wen howe"], ans:"min wen inti" },
  { en:"Where are you from? (to a group)", opts:["min wen intu","min wen inta","min wen inti","min wen hinnen"], ans:"min wen intu" },
  { en:"How much do you want? (to a man)", opts:["addesh beddak","addesh beddek","addesh beddkon","addesh beddi"], ans:"addesh beddak" },
  { en:"How much do you want? (to a woman)", opts:["addesh beddek","addesh beddak","addesh beddkon","addesh beddi"], ans:"addesh beddek" },
  { en:"How many kids do you have? (to a man)", opts:["kam walad 3andak","kam walad 3andek","kam walad 3andkon","kam walad 3andna"], ans:"kam walad 3andak" },
  { en:"Why are you late? (to a woman)", opts:["leh met2akhra","leh met2akhar","leh met2akhrin","leh met2akharna"], ans:"leh met2akhra", notes:"-a feminizes the adj" },
];

// Tab 3: Form question from an answer — target the missing info
const QF_FORM = [
  { answer:"I went to Beirut yesterday.",         cue:"Ask WHERE.",  opts:["wen ru7t?","emta ru7t?","kif ru7t?","meen ra7?"],                 ans:"wen ru7t?" },
  { answer:"I went to Beirut yesterday.",         cue:"Ask WHEN.",   opts:["emta ru7t?","wen ru7t?","leh ru7t?","shu 3milt?"],                 ans:"emta ru7t?" },
  { answer:"My name is Layla.",                   cue:"Ask NAME.",   opts:["shu esmek?","meen inti?","wen inti?","kif 7aalek?"],               ans:"shu esmek?" },
  { answer:"It costs 10 dollars.",                cue:"Ask PRICE.",  opts:["addesh 7a22o?","kam 3andak?","shu hayda?","meen 7a22o?"],          ans:"addesh 7a22o?" },
  { answer:"I'm going because I'm tired.",        cue:"Ask REASON.", opts:["leh raye7?","wen raye7?","emta raye7?","kif raye7?"],              ans:"leh raye7?" },
  { answer:"I have three kids.",                  cue:"Ask HOW MANY.", opts:["kam walad 3andak?","addesh 3andak?","shu 3andak?","meen 3andak?"], ans:"kam walad 3andak?" },
  { answer:"That's my brother Ziad.",             cue:"Ask WHO.",    opts:["meen hayda?","shu hayda?","wen hayda?","kif hayda?"],              ans:"meen hayda?" },
  { answer:"We'll travel on Friday.",             cue:"Ask WHEN.",   opts:["emta rah tsefru?","wen rah tsefru?","leh rah tsefru?","kif rah tsefru?"], ans:"emta rah tsefru?" },
  { answer:"I took the blue car.",                cue:"Ask WHICH.",  opts:["ayya sayyaara akhadet?","shu akhadet?","wen akhadet?","meen akhad?"], ans:"ayya sayyaara akhadet?" },
  { answer:"I'm fine, thank God.",                cue:"Ask HOW ARE YOU.", opts:["kifak?","shu 3am ta3mil?","wen inta?","leh hek?"],            ans:"kifak?" },
  { answer:"The meeting is at 5 PM.",             cue:"Ask WHAT TIME.", opts:["addesh es-saa3a?","emta el-mu3ad?","wen el-mu3ad?","meen fi?"], ans:"emta el-mu3ad?" },
  { answer:"I learned from my grandmother.",      cue:"Ask FROM WHOM.", opts:["min meen t3allamt?","shu t3allamt?","wen t3allamt?","leh t3allamt?"], ans:"min meen t3allamt?" },
];

// Tab 4: Patterns reference (short structural templates)
const QF_PATTERNS = [
  { pat:"shu + NOUN?",            lb:"shu esmak?",            en:"What's your name?",               note:"Ask about identity/thing." },
  { pat:"shu + 3am + VERB?",      lb:"shu 3am ta3mil?",       en:"What are you doing?",             note:"Progressive (3am = -ing)." },
  { pat:"meen + DEM/NOUN?",       lb:"meen hayda?",           en:"Who is this?",                    note:"DEM = hayda/haydi/hawdu." },
  { pat:"wen + ACTIVE-PART?",     lb:"wen raye7?",            en:"Where are you going?",            note:"Active participle for motion." },
  { pat:"min wen + PRON?",        lb:"min wen inta?",         en:"Where are you from?",             note:"min = from." },
  { pat:"emta + rah + VERB?",     lb:"emta ra7 tiji?",        en:"When will you come?",             note:"rah = future." },
  { pat:"leh + ma + PAST?",       lb:"leh ma ejit?",          en:"Why didn't you come?",            note:"ma + past = negative past." },
  { pat:"kif + PAST/PRES?",       lb:"kif 3rifte?",           en:"How did you know?",               note:"-te = 2fs past ending." },
  { pat:"addesh + NOUN + SUFFIX?",lb:"addesh 7a22o?",         en:"How much does it cost?",          note:"7a22 = price, -o = its." },
  { pat:"kam + SG-NOUN?",         lb:"kam yawm?",             en:"How many days?",                  note:"After kam, noun is singular." },
  { pat:"ayy(a) + NOUN?",         lb:"ayya sayyaara beddak?", en:"Which car do you want?",          note:"ayya before fem noun." },
  { pat:"b-ayy + NOUN?",          lb:"b-ayy yawm?",           en:"On which day?",                   note:"b- = on/in." },
  { pat:"POLAR: just intonation", lb:"raye7 3al-beit?",       en:"Are you going home?",             note:"No QW — rising intonation." },
  { pat:"POLAR: mish + X?",       lb:"mish hek?",             en:"Isn't it so?",                    note:"Tag question with mish." },
];
