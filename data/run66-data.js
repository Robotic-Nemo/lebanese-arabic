// Run #66 — Sentence Pattern Drill
// SPD_PATTERNS: high-frequency Lebanese sentence templates with a single slot
// (___). Learners see the template, meaning, example, and register tag.
// SPD_EXERCISES: fill-in-the-blank drills tied to a pattern via patternId.
// Each exercise exposes 4 options, one correct, and an English gloss for the
// full sentence so the user knows what meaning to reach for.

const SPD_PATTERNS = [
  { id:'sp01', template:'ما بقدر ___',        translit:'ma b2dir ___',        meaning:"I can't ___",                category:'inability',   register:'neutral' },
  { id:'sp02', template:'بدي ___',             translit:'biddi ___',           meaning:'I want ___',                  category:'desire',      register:'neutral' },
  { id:'sp03', template:'لازم ___',            translit:'lezim ___',           meaning:'I/you must ___',              category:'obligation',  register:'neutral' },
  { id:'sp04', template:'ممكن ___؟',           translit:'mumken ___?',         meaning:'Can I/you ___?',              category:'request',     register:'polite'  },
  { id:'sp05', template:'عم ___',              translit:'3am ___',             meaning:'I am ___-ing (progressive)',  category:'tense',       register:'neutral' },
  { id:'sp06', template:'رح ___',              translit:'ra7 ___',             meaning:'I will ___',                  category:'tense',       register:'neutral' },
  { id:'sp07', template:'ما في ___',           translit:'ma fi ___',           meaning:"There is no ___",             category:'existence',   register:'neutral' },
  { id:'sp08', template:'في ___؟',             translit:'fi ___?',             meaning:'Is there ___?',               category:'existence',   register:'neutral' },
  { id:'sp09', template:'شو ___؟',             translit:'shu ___?',            meaning:'What ___?',                   category:'question',    register:'casual'  },
  { id:'sp10', template:'ليش ___؟',            translit:'lesh ___?',           meaning:'Why ___?',                    category:'question',    register:'neutral' },
  { id:'sp11', template:'كيف ___؟',            translit:'kif ___?',            meaning:'How ___?',                    category:'question',    register:'neutral' },
  { id:'sp12', template:'وين ___؟',            translit:'wen ___?',            meaning:'Where ___?',                  category:'question',    register:'neutral' },
  { id:'sp13', template:'عندي ___',            translit:'3indi ___',           meaning:'I have ___',                  category:'possession',  register:'neutral' },
  { id:'sp14', template:'ما عندي ___',         translit:'ma 3indi ___',        meaning:"I don't have ___",            category:'possession',  register:'neutral' },
  { id:'sp15', template:'بعدني ___',           translit:'ba3edni ___',         meaning:"I'm still ___",               category:'state',       register:'neutral' },
  { id:'sp16', template:'صار ___',             translit:'Sar ___',             meaning:'It became / started ___',     category:'state',       register:'neutral' },
  { id:'sp17', template:'كنت ___',             translit:'kint ___',            meaning:'I was ___',                   category:'tense',       register:'neutral' },
  { id:'sp18', template:'إذا ___ بخبرك',       translit:'iza ___ bikhabbrak',  meaning:"If ___ I'll tell you",        category:'conditional', register:'neutral' },
  { id:'sp19', template:'يا ريت ___',          translit:'ya ret ___',          meaning:'I wish ___',                  category:'wish',        register:'neutral' },
  { id:'sp20', template:'بالنسبة لـ___',       translit:'bin-nisbé la-___',    meaning:'Regarding ___',               category:'reference',   register:'formal'  },
];

const SPD_EXERCISES = [
  { id:'se01', patternId:'sp01', blank:'روح',      full:'ما بقدر روح اليوم',             translit:'ma b2dir rou7 el-youm',        english:"I can't go today",                    options:['روح','أكل','شرب','نام'],         correctIdx:0 },
  { id:'se02', patternId:'sp01', blank:'انام',     full:'ما بقدر انام',                    translit:'ma b2dir nem',                  english:"I can't sleep",                       options:['اركض','انام','اضحك','اشتغل'],      correctIdx:1 },
  { id:'se03', patternId:'sp02', blank:'قهوة',    full:'بدي قهوة',                          translit:'biddi 2ahwé',                   english:'I want coffee',                        options:['نوم','عمل','قهوة','بيت'],          correctIdx:2 },
  { id:'se04', patternId:'sp02', blank:'روح',     full:'بدي روح عالبيت',                    translit:'biddi rou7 3al-bet',           english:'I want to go home',                    options:['روح','اضحك','اكل','اشرب'],        correctIdx:0 },
  { id:'se05', patternId:'sp03', blank:'ادرس',   full:'لازم ادرس كتير',                     translit:'lezim idris ktir',              english:'I have to study a lot',                options:['ادرس','الحق','الحس','اسمع'],       correctIdx:0 },
  { id:'se06', patternId:'sp04', blank:'اسأل',   full:'ممكن اسأل سؤال؟',                    translit:'mumken is2al su2al?',           english:'Can I ask a question?',                options:['اضحك','اسأل','انام','اركض'],       correctIdx:1 },
  { id:'se07', patternId:'sp04', blank:'تساعدني', full:'ممكن تساعدني؟',                     translit:'mumken tsa3idni?',              english:'Can you help me?',                     options:['تساعدني','تحكيني','تشوفني','تاخدني'], correctIdx:0 },
  { id:'se08', patternId:'sp05', blank:'اشتغل',  full:'عم اشتغل هلق',                       translit:'3am ishtighil halla2',          english:'I am working now',                     options:['انام','اشتغل','افكر','اكل'],        correctIdx:1 },
  { id:'se09', patternId:'sp05', blank:'يحكي',   full:'عم يحكي معها',                        translit:'3am yi7ki ma3a',                english:'He is talking to her',                 options:['يحكي','يضحك','يروح','يجي'],        correctIdx:0 },
  { id:'se10', patternId:'sp06', blank:'روح',    full:'رح روح بكرا',                        translit:'ra7 rou7 bukra',                english:"I'll go tomorrow",                     options:['روح','نام','اكل','اشرب'],          correctIdx:0 },
  { id:'se11', patternId:'sp06', blank:'اتصل',   full:'رح اتصل فيك',                        translit:'ra7 ittiSil fik',               english:"I'll call you",                        options:['اشوف','اتصل','اضحك','اركض'],       correctIdx:1 },
  { id:'se12', patternId:'sp07', blank:'وقت',    full:'ما في وقت',                          translit:'ma fi wa2t',                    english:'There is no time',                     options:['خبز','وقت','ناس','شي'],             correctIdx:1 },
  { id:'se13', patternId:'sp07', blank:'مي',     full:'ما في مي',                            translit:'ma fi mayy',                    english:'There is no water',                    options:['قهوة','شاي','مي','حليب'],          correctIdx:2 },
  { id:'se14', patternId:'sp08', blank:'حدا',    full:'في حدا بالبيت؟',                      translit:'fi 7ada bil-bet?',              english:'Is there anyone home?',                options:['شي','حدا','وقت','طريق'],           correctIdx:1 },
  { id:'se15', patternId:'sp09', blank:'بتعمل',  full:'شو بتعمل؟',                            translit:'shu bta3mel?',                  english:'What are you doing?',                  options:['بتعمل','بتقول','بتاكل','بتحكي'],    correctIdx:0 },
  { id:'se16', patternId:'sp10', blank:'مش جاي', full:'ليش مش جاي؟',                         translit:'lesh mish jéyé?',               english:"Why aren't you coming?",               options:['مش جاي','مش راضي','مش هون','مش مبسوط'], correctIdx:0 },
  { id:'se17', patternId:'sp11', blank:'الحال',   full:'كيف الحال؟',                          translit:'kif il-7al?',                   english:'How are you?',                         options:['الحال','الطقس','الجو','الليل'],     correctIdx:0 },
  { id:'se18', patternId:'sp12', blank:'بيتك',    full:'وين بيتك؟',                          translit:'wen bétak?',                    english:'Where is your house?',                 options:['بيتك','شغلك','اكلك','نومك'],       correctIdx:0 },
  { id:'se19', patternId:'sp13', blank:'اخ',      full:'عندي اخ كبير',                        translit:'3indi akh kbir',                english:'I have an older brother',              options:['اخ','بيت','كلب','سيارة'],           correctIdx:0 },
  { id:'se20', patternId:'sp14', blank:'وقت',    full:'ما عندي وقت',                         translit:'ma 3indi wa2t',                 english:"I don't have time",                   options:['وقت','فلوس','اكل','نوم'],          correctIdx:0 },
  { id:'se21', patternId:'sp15', blank:'تعبان',   full:'بعدني تعبان',                        translit:'ba3edni ta3ben',                english:"I'm still tired",                     options:['تعبان','مبسوط','جوعان','نايم'],    correctIdx:0 },
  { id:'se22', patternId:'sp16', blank:'متأخر',   full:'صار متأخر',                          translit:'Sar met2akhhar',                english:"It's gotten late",                    options:['مبكر','متأخر','جميل','طويل'],      correctIdx:1 },
  { id:'se23', patternId:'sp17', blank:'بالبيت',  full:'كنت بالبيت امبارح',                   translit:'kint bil-bet mberé7',           english:'I was at home yesterday',              options:['بالمدرسة','بالشغل','بالبيت','بالسيارة'], correctIdx:2 },
  { id:'se24', patternId:'sp18', blank:'جيت',    full:'إذا جيت بخبرك',                       translit:'iza jit bikhabbrak',            english:"If I come I'll tell you",              options:['جيت','روحت','ركضت','نمت'],         correctIdx:0 },
  { id:'se25', patternId:'sp19', blank:'بتجي',    full:'يا ريت بتجي معي',                    translit:'ya ret btijé ma3é',             english:'I wish you would come with me',        options:['بتجي','بتقول','بتنام','بتاكل'],     correctIdx:0 },
  { id:'se26', patternId:'sp20', blank:'للشغل',   full:'بالنسبة للشغل، كل شي تمام',          translit:'bin-nisbé lesh-shighil, kill shi tmém', english:'Regarding work, everything is fine', options:['للشغل','للبيت','للولد','للسيارة'], correctIdx:0 },
];

const SPD_TIPS = [
  'Master 10 patterns and you can say ~60% of daily Lebanese. Patterns beat isolated vocab.',
  '`عم + verb` = present progressive. `رح + verb` = future. No auxiliary-to-be needed in present.',
  '`بدي` (want) + verb = want-to-verb, no infinitive marker. "bdi rou7" not "biddi la-rou7".',
  '`ممكن` at the start of any verb turns it into a polite request. Safe in almost every register.',
  '`لازم` is register-neutral obligation. For harsher "must" use `ضروري`, for suggestion use `أحسن`.',
  'Questions in Lebanese rarely invert word order — just add a question word (شو/ليش/كيف/وين) to the front.',
  '`ما في` = "there isn\'t" — so common it works as a universal denial ("no chance", "no way").',
  '`يا ريت` expresses wish/regret. Pair with present verb for wish, past verb for counterfactual.',
];
