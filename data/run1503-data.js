// R1503 — NEW FEATURE: Lebanese Shawarma Street Culture (shw) — 20 words, 8 drills, 4 tips
const WRP_WORDS = [
  {w:'shawarma',t:'شاورما',tr:'shawarma',e:'rotisserie meat sandwich — Lebanon\'s ultimate street food',c:'shw'},
  {w:'7aj',t:'حاج',tr:"7aj",e:'respectful address for the shawarma man — "sir/master"',c:'shw'},
  {w:'dajaj',t:'دجاج',tr:'dajaj',e:'chicken (most popular shawarma fill in Lebanon)',c:'shw'},
  {w:'la7me 3ajl',t:'لحمة عجل',tr:"la7me 3ajl",e:'veal meat (classic Lebanese shawarma choice)',c:'shw'},
  {w:'la7me ghnam',t:'لحمة غنم',tr:"la7me ghnam",e:'lamb meat (richest, most traditional flavor)',c:'shw'},
  {w:'toom',t:'توم',tr:'toom',e:'garlic paste — non-negotiable on chicken shawarma',c:'shw'},
  {w:'7amad',t:'حامض',tr:"7amad",e:'pickled turnip (pink, sour — essential topping)',c:'shw'},
  {w:'mkhallel',t:'مخلّل',tr:'mkhallel',e:'pickled vegetables (cucumber, turnip, jalapeño)',c:'shw'},
  {w:'ta7ine',t:'تحينة',tr:"ta7ine",e:'tahini sauce — drizzled on meat shawarma',c:'shw'},
  {w:'khobz 3arabi',t:'خبز عربي',tr:"khobz 3arabi",e:'Arabic flatbread wrap (standard shawarma vessel)',c:'shw'},
  {w:'dawware',t:'داوارة',tr:'dawware',e:'the vertical rotating spit (the heart of shawarma)',c:'shw'},
  {w:'sha7me',t:'شحمة',tr:"sha7me",e:'fat layer on the spit (adds flavor, melts into meat)',c:'shw'},
  {w:'msakhkhan',t:'مسخّن',tr:'msakhkhan',e:'well-spiced/marinated meat layers on the spit',c:'shw'},
  {w:'frayez',t:'فرايز',tr:'frayez',e:'fries inside the shawarma (Lebanese-style)',c:'shw'},
  {w:'banadoura',t:'بندورة',tr:'banadoura',e:'tomato (sliced fresh, added to wrap)',c:'shw'},
  {w:'ba2dounes',t:'بقدونس',tr:"ba2dounes",e:'parsley (chopped, mixed into meat or topping)',c:'shw'},
  {w:'3ala 2add 3eynak',t:'على قد عينك',tr:"3ala 2add 3eynak",e:'"as big as your eye wants" — informal size request',c:'shw'},
  {w:'2eshto',t:'قشطو',tr:"2eshto",e:'"slice it off" — command to cut meat from spit',c:'shw'},
  {w:'wra2 3anze',t:'ورق عنزة',tr:"wra2 3anze",e:'"goat paper" — thin flatbread variant used as wrap',c:'shw'},
  {w:'mfawwar',t:'مفوّر',tr:'mfawwar',e:'"extra-juicy/dripping" — highest compliment for shawarma',c:'shw'},
];

const WRP_DRILLS = [
  {q:'One chicken shawarma with garlic please.',a:'وحدة شاورما دجاج بتوم لو سمحت.',ar:"wa7de shawarma dajaj b-toom law sama7t.",correct:0,
   opts:['وحدة شاورما دجاج بتوم لو سمحت.','وحدة شاورما لحمة لو سمحت.','شاورما بدون توم.','شاورما دجاج بدون خبز.']},
  {q:'More garlic on the chicken, please.',a:'زيد توم على الدجاج لو سمحت.',ar:"zayyid toom 3al-dajaj law sama7t.",correct:0,
   opts:['زيد توم على الدجاج لو سمحت.','شيل التوم منها.','بدي توم بس.','شاورما بدون توم.']},
  {q:'Add pickled turnip and fries inside.',a:'حط حامض وفرايز جوا.',ar:"7ott 7amad w-frayez juwwa.",correct:0,
   opts:['حط حامض وفرايز جوا.','بدون حامض.','فرايز بس جوا.','حط كاتشاب جوا.']},
  {q:'Is the meat lamb or veal?',a:'اللحمة غنم ولّا عجل؟',ar:"l-la7me ghnam willa 3ajl?",correct:0,
   opts:['اللحمة غنم ولّا عجل؟','اللحمة دجاج؟','اللحمة طازجة؟','اللحمة من وين؟']},
  {q:'The shawarma here is extra juicy — delicious!',a:'الشاورما هون مفوّرة — كتير طيّبة!',ar:"l-shawarma hown mfawwara — ktir tayyibe!",correct:0,
   opts:['الشاورما هون مفوّرة — كتير طيّبة!','الشاورما هون ناشفة.','الشاورما هون مش منيح.','الشاورما صغيرة.']},
  {q:'Wrap it in thin flatbread, not Arabic bread.',a:'لفّها بورق عنزة مش بخبز عربي.',ar:"liffha b-wra2 3anze mesh b-khobz 3arabi.",correct:0,
   opts:['لفّها بورق عنزة مش بخبز عربي.','لفّها بخبز عربي.','بدي بدون خبز.','لفّها بكيس.']},
  {q:'Excuse me sir, slice some meat off please.',a:'عم الحاج، قشطو لو سمحت.',ar:"3amm el-7aj, 2eshtou law sama7t.",correct:0,
   opts:['عم الحاج، قشطو لو سمحت.','قشطو بدون لحمة.','بدي شاورما كاملة.','عندك دجاج؟']},
  {q:'Give me a big one — as big as your eye wants.',a:'عطيني كبيرة — على قد عينك.',ar:"3tini kbiire — 3ala 2add 3eynak.",correct:0,
   opts:['عطيني كبيرة — على قد عينك.','عطيني صغيرة.','عطيني وسط.','عطيني اتنين.']},
];

const WRP_TIPS = [
  {title:'Shawarma: Lebanon\'s Street Cathedral',body:"Shawarma is not just food — it is architecture. The dawware (rotating spit) can hold 60 to 100 kilograms of layered meat: alternating thin slices of msakhkhan (marinated meat) with sha7me (fat layers) that melt downward as the spit turns, basting everything below. The 7aj (the master shawarma-man) reads the spit the way a sculptor reads marble — he knows when to 2eshto (slice), when to rest the blade, how far down the spit to go for the crispiest outer layer versus the juiciest interior. You do not rush him. Lebanese shawarma culture has an ethic: the 7aj is the expert; you trust his hand."},
  {title:'The Toom Question: Chicken vs. Meat',body:"The single most important split in Lebanese shawarma is the toom question. Dajaj (chicken) shawarma is always served with toom — thick, whipped garlic paste beaten with oil and lemon until white and fluffy, piled generously. To order chicken without toom is a statement — and not a polite one. La7me (meat — veal or lamb) shawarma, by contrast, takes ta7ine (tahini) or ma7shi sauce, not toom. Mixing these protocols — toom on meat, tahini on chicken — marks you immediately as someone who learned shawarma from a menu, not a street corner. The 7aj will likely correct you without being asked."},
  {title:'Inside the Wrap: The Architecture of Fillings',body:"What goes inside the Lebanese shawarma wrap is a negotiation, not a recipe. Standard inclusions: 7amad (pickled pink turnips), mkhallel (mixed pickles), banadoura (fresh tomato), ba2dounes (chopped parsley), and of course toom or ta7ine. The Lebanese innovation that separates Beirut shawarma from all others: frayez (fries) inside the wrap. This is not a recent gimmick — the fries absorb the meat juices and toom, becoming something structurally different from fries on a plate. Some shops offer a choice of wra2 3anze (thin flatbread) instead of the standard khobz 3arabi — the thin wrap caramelizes on the press, creating a crunch that the regular bread cannot match."},
  {title:'Ordering Like a Lebanese: Size, Slang & Etiquette',body:"Lebanese shawarma ordering has its own compressed vocabulary. 3ala 2add 3eynak means literally 'as big as your eye wants' — said to the 7aj to signal trust and generosity, both asking for a large one and paying him a compliment. When the spit is running low and you want the crispy outer layers, say min barra ('from the outside'). When you want him to add more: zayyid (add more). When you want the wrap pressed hot on the saj (griddle) until sealed and crisp: 3al-saj. A mfawwar shawarma — literally 'overflowing/dripping' — is the highest compliment a customer can give mid-bite. The 7aj will hear it, and your next shawarma will be noticeably larger."},
];
