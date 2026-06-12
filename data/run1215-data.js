// R1215 — NEW FEATURE: Lebanese Hakawati (Traditional Storyteller) Culture coach
const HKW_WORDS = [
  {ar:'حكواتي',tr:'7akawati',en:'traditional storyteller',cat:'person'},
  {ar:'قصّة',tr:'2isseh',en:'story / tale',cat:'narrative'},
  {ar:'رواية',tr:'riwayeh',en:'narration / novel',cat:'narrative'},
  {ar:'سهرة',tr:'sahrit',en:'evening gathering',cat:'event'},
  {ar:'حكي',tr:'7aki',en:'talk / storytelling',cat:'action'},
  {ar:'مثل',tr:'maSal',en:'proverb / moral',cat:'narrative'},
  {ar:'بطل',tr:'baTTaal',en:'hero / champion',cat:'character'},
  {ar:'شرير',tr:'shareer',en:'villain',cat:'character'},
  {ar:'جامع',tr:'jaami3',en:'mosque / gathering place',cat:'place'},
  {ar:'مقهى',tr:'ma2ha',en:'coffeehouse',cat:'place'},
  {ar:'مسبحة',tr:'masba7a',en:'prayer beads (held while listening)',cat:'item'},
  {ar:'دفّ',tr:'daff',en:'frame drum (used in storytelling)',cat:'item'},
  {ar:'جمهور',tr:'jomhour',en:'audience',cat:'people'},
  {ar:'انبهر',tr:'inbahar',en:'to be amazed / captivated',cat:'feeling'},
  {ar:'سيف',tr:'sayf',en:'sword (common in tales)',cat:'narrative'},
  {ar:'سلطان',tr:'sulTaan',en:'sultan / ruler (tale character)',cat:'character'},
  {ar:'ألف ليلة وليلة',tr:'2alf leyle w leyle',en:'One Thousand and One Nights',cat:'narrative'},
  {ar:'عنترة',tr:'3antara',en:'Antar (legendary Arab hero)',cat:'character'},
  {ar:'راوي',tr:'raawi',en:'narrator',cat:'person'},
  {ar:'كان يا ما كان',tr:'kaan ya ma kaan',en:'once upon a time',cat:'phrase'},
];

const HKW_DRILLS = [
  {q:'What does "7akawati" mean?',opts:['folk singer','traditional storyteller','mosque preacher','court poet'],ans:1,exp:'حكواتي = the traditional storyteller — a beloved figure in Levantine coffeehouses who performed tales for seated audiences.'},
  {q:'What is "kaan ya ma kaan"?',opts:['the end','a type of drum','once upon a time','a moral lesson'],ans:2,exp:'كان يا ما كان = "once upon a time" — the classic Arabic story opener, equivalent to "once upon a time" in Western tales.'},
  {q:'Where did the hakawati traditionally perform?',opts:['ma2ha (coffeehouse)','jabal (mountain)','souk (market)','7ammam (bathhouse)'],ans:0,exp:'The ma2ha (coffeehouse / مقهى) was the classic venue — men gathered with coffee, masba7a in hand, to listen.'},
  {q:'What is a "raawi"?',opts:['villain','audience member','narrator','Sultan'],ans:2,exp:'راوي = narrator — the one who recounts the tale. Hakawati and raawi are related roles in oral storytelling tradition.'},
  {q:'What does "inbahar" mean?',opts:['to fall asleep','to be amazed / captivated','to laugh loudly','to clap'],ans:1,exp:'انبهر = to be amazed, captivated — the ideal reaction of the audience to a skilled hakawati\'s performance.'},
  {q:'What is "2alf leyle w leyle"?',opts:['a Lebanese folk song','One Thousand and One Nights','a type of proverb','an evening prayer'],ans:1,exp:'ألف ليلة وليلة = One Thousand and One Nights — the most famous collection of Arabic tales; hakawati repertoire centerpiece.'},
  {q:'What does "maSal" mean in storytelling?',opts:['sword','proverb / moral lesson','evening gathering','hero'],ans:1,exp:'مثل = proverb or moral — hakawati tales always ended with a maSal, the wisdom the story was meant to teach.'},
  {q:'What is "3antara" in Lebanese oral tradition?',opts:['a type of coffee','a legendary Arab warrior hero','a storytelling venue','a folk instrument'],ans:1,exp:'عنترة (Antar) = a legendary pre-Islamic Arab warrior hero — his romance with Abla is one of the most retold tales in hakawati tradition.'},
];

const HKW_TIPS = [
  {title:'The Last Hakawati',body:'For over a century, the Abu Shadi family kept hakawati alive in Damascus\'s Nawfara Café. Abu Shadi performed nightly until his death in 2008 — considered the last practicing hakawati. His son continued briefly. In Lebanon, the tradition lived in coffeehouses in Tripoli and Beirut\'s old quarters.'},
  {title:'How a Performance Worked',body:'The 7akawati stood or sat on an elevated chair (kursi). He\'d use a sayf (sword) as a prop, striking it to punctuate dramatic moments. The jomhour (audience) would interject, respond, gasp. Tales could stretch over weeks — each night ending on a cliffhanger, exactly like a TV serial.'},
  {title:'The Repertoire',body:'Core tales: 2alf leyle w leyle (1001 Nights), 3antara w 3abla (warrior romance), Seerit Baybars (Sultan hero epic), Seerit Bani Hilal (tribal migration saga). Each was a full cycle — weeks of nightly installments. The 7akawati memorized thousands of lines but improvised freely.'},
  {title:'Hakawati in Modern Lebanon',body:'Theatre group Hakawati (founded 1977 in Beirut) revived the tradition as political street theatre. Their name honors the role. Today "7akawati" is used colloquially to mean any engaging storyteller — someone who tells long, dramatic tales. "3am yet7aki maThalo l-7akawati" = he\'s telling stories like a hakawati.'},
];
