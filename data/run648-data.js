// R648 — NEW FEATURE: Lebanese Produce & Fresh Market coach (pvg)

const PVG_CATS = [
  {id:'fruits',  label:'🍎 Fruits'},
  {id:'vegs',    label:'🥦 Vegetables'},
  {id:'market',  label:'🏪 Market'},
  {id:'sayings', label:'💬 Sayings'}
];

const PVG_WORDS = [
  // fruits (8)
  {tr:'teffaa7',          en:'apple',               cat:'fruits'},
  {tr:'2ajjaas',          en:'pear',                cat:'fruits'},
  {tr:'mishmish',         en:'apricot',             cat:'fruits'},
  {tr:'3anab',            en:'grapes',              cat:'fruits'},
  {tr:'teen',             en:'figs',                cat:'fruits'},
  {tr:'rummaane',         en:'pomegranate',         cat:'fruits'},
  {tr:'moz',              en:'banana',              cat:'fruits'},
  {tr:'toot',             en:'mulberry',            cat:'fruits'},
  // vegetables (8)
  {tr:'banadoura',        en:'tomato',              cat:'vegs'},
  {tr:'khiyaar',          en:'cucumber',            cat:'vegs'},
  {tr:'baadhinjaan',      en:'eggplant',            cat:'vegs'},
  {tr:'koosa',            en:'zucchini',            cat:'vegs'},
  {tr:'faasoolia',        en:'green beans',         cat:'vegs'},
  {tr:'basal',            en:'onion',               cat:'vegs'},
  {tr:'toom',             en:'garlic',              cat:'vegs'},
  {tr:'na3na3',           en:'mint',                cat:'vegs'},
  // market phrases (6)
  {tr:'l-khaDra',         en:'the produce / greens',cat:'market'},
  {tr:'baddak shi?',      en:'do you want something?', cat:'market'},
  {tr:'addeish l-kilo?',  en:'how much per kilo?',  cat:'market'},
  {tr:'2a3Tiini kilo',    en:'give me a kilo',      cat:'market'},
  {tr:'ma7all l-khaDra',  en:'the greengrocer',     cat:'market'},
  {tr:'Taaze kteer',      en:'very fresh',          cat:'market'},
  // sayings (6)
  {tr:'mitel l-teen',     en:'like a fig (sweet/ripe person)', cat:'sayings'},
  {tr:'2ib2a basal',      en:'you\'re transparent (lit. be an onion)', cat:'sayings'},
  {tr:'3eel 3a-toom',     en:'get used to hardship (lit. eat garlic)', cat:'sayings'},
  {tr:'7elo mitel l-3anab', en:'sweet as grapes (compliment)', cat:'sayings'},
  {tr:'bala basal',       en:'without onion (not worth much)', cat:'sayings'},
  {tr:'shaajir 3a-l-moz', en:'can\'t live without it (lit. craving banana)', cat:'sayings'}
];

const PVG_DRILLS = [
  {q:'What is "teffaa7"?',           opts:['apricot','apple','pear','fig'],              ans:1},
  {q:'What is "mishmish"?',          opts:['mulberry','banana','apricot','grapes'],      ans:2},
  {q:'What is "banadoura"?',         opts:['tomato','onion','cucumber','eggplant'],      ans:0},
  {q:'What is "baadhinjaan"?',       opts:['zucchini','garlic','mint','eggplant'],       ans:3},
  {q:'What is "rummaane"?',          opts:['fig','pomegranate','mulberry','pear'],       ans:1},
  {q:'What is "na3na3"?',            opts:['garlic','onion','mint','green beans'],       ans:2},
  {q:'What does "Taaze kteer" mean?',opts:['very expensive','very fresh','out of stock','sold out'], ans:1},
  {q:'What is "teen"?',              opts:['grapes','banana','figs','mulberry'],         ans:2},
  {q:'What does "addeish l-kilo?" mean?', opts:['is it fresh?','give me one kilo','how much per kilo?','any discount?'], ans:2},
  {q:'What is "koosa"?',             opts:['eggplant','zucchini','cucumber','tomato'],   ans:1},
  {q:'What is "toot"?',              opts:['fig','apricot','mulberry','pomegranate'],    ans:2},
  {q:'What does "2ib2a basal" mean figuratively?', opts:['you\'re sweet','you\'re transparent','you\'re fresh','you\'re cheap'], ans:1},
  {q:'What does "ma7all l-khaDra" mean?', opts:['the kitchen','the farmer','the greengrocer','the market'], ans:2},
  {q:'What is "3anab"?',             opts:['figs','apricot','apple','grapes'],           ans:3},
  {q:'What does "mitel l-teen" mean?', opts:['hard as wood','sweet/ripe (person)','sour mood','quick temper'], ans:1}
];

const PVG_TIPS = [
  {title:'The Souk Culture',         body:'Lebanese fresh produce is sold at souks (markets) and corner khaDra shops. The greengrocer (baa2 l-khaDra) knows his regulars — prices are often negotiable and he\'ll throw in extra parsley or mint as a gesture. Always greet him before asking the price.'},
  {title:'Apricot Season',           body:'Mishmish (apricot) has a short season — about 3 weeks in June. Lebanese families traditionally make mrabba l-mishmish (apricot jam) and dry apricots on rooftops. "Bakra b-l-mishmish" (tomorrow with the apricots) means "never" — apricot season always feels too short.'},
  {title:'The Onion in Idiom',       body:'"2ib2a basal" (be an onion) is a gentle insult meaning you\'re transparent — peeled layer by layer, nothing hidden. Onion also appears in "waalid l-basal" (father of the onion) — used for someone notoriously cheap or stingy.'},
  {title:'Mulberry Trees',           body:'Toot (mulberry) trees were historically Lebanon\'s main crop — silkworms fed on the leaves to produce silk for trade. Mountain villages still have centuries-old toot trees. Mulberry juice (3aSeer toot) and mulberry molasses (dibs l-toot) are beloved Lebanese flavors.'},
  {title:'Mint in Everything',       body:'Na3na3 (mint) appears in Lebanese cuisine constantly: in tabbouleh, fattoush, laban b-khiyaar (yogurt cucumber), and as tea. Fresh mint is almost always on the table at Lebanese restaurants. "Bala na3na3" (without mint) means something is bland or incomplete.'},
  {title:'Fig Wisdom',               body:'Teen (figs) carry deep symbolism in Lebanon — the fig tree (shajret l-teen) is mentioned in the Quran and Bible. "Mitel l-teen" (like a fig) means someone is at their perfect ripeness — a real compliment. Figs are picked at dawn when coolest, eaten fresh or dried.'}
];
