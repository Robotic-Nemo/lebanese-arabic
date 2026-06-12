// R1485 — NEW FEATURE: Lebanese Sea Swimming & Summer Coast Culture (swm) — 20 words, 8 drills, 4 tips
const SWM_WORDS = [
  {w:'sbe7',t:'سبح',tr:'sbe7',e:'to swim',c:'swm'},
  {w:'ba7er',t:'بحر',tr:'ba7er',e:'sea / ocean',c:'swm'},
  {w:'sha6i2',t:'شاطئ',tr:"sha6i2",e:'beach / shore',c:'swm'},
  {w:'mawje',t:'موجة',tr:'mawje',e:'wave',c:'swm'},
  {w:'biyad',t:'بياض',tr:'biyad',e:'whiteness / the white foam (sea slang)',c:'swm'},
  {w:'masbah',t:'مسبح',tr:'masbah',e:'swimming pool',c:'swm'},
  {w:'shamsiye',t:'شمسية',tr:'shamsiye',e:'beach umbrella / parasol',c:'swm'},
  {w:'kursi sha6i2',t:'كرسي شاطئ',tr:'kursi sha6i2',e:'beach chair / sunlounger',c:'swm'},
  {w:'ra7 2isbah',t:'رح اسبح',tr:"ra7 2isbah",e:"I'm going swimming",c:'swm'},
  {w:'mayye 7elwe',t:'ماية حلوة',tr:'mayye 7elwe',e:'nice water (fresh/clear)',c:'swm'},
  {w:'ghaTas',t:'غطس',tr:'ghaTas',e:'to dive / dive underwater',c:'swm'},
  {w:'qandil ba7er',t:'قنديل بحر',tr:'qandil ba7er',e:'jellyfish (sea lantern)',c:'swm'},
  {w:'7awl',t:'حوض',tr:'7awl',e:'pool / basin (informal)',c:'swm'},
  {w:'nshef',t:'نشّف',tr:'nshef',e:'to dry off',c:'swm'},
  {w:'3a rmal',t:'عالرمل',tr:"3a rmal",e:'on the sand / at the beach',c:'swm'},
  {w:'m7awwar',t:'محوّر',tr:'m7awwar',e:'tanned (golden from sun)',c:'swm'},
  {w:'7amma',t:'حمّة',tr:'7amma',e:'natural hot spring',c:'swm'},
  {w:'balon ma2',t:'بالون ماء',tr:'balon ma2',e:'water balloon',c:'swm'},
  {w:'sa7el',t:'ساحل',tr:'sa7el',e:'coast / coastline',c:'swm'},
  {w:'bosta ba7riye',t:'بوسطة بحرية',tr:'bosta ba7riye',e:'boat trip / sea excursion',c:'swm'},
];

const SWM_DRILLS = [
  {q:"Let's go swimming in the sea.",a:'يلا نسبح بالبحر.',ar:"yalla nsba7 bil-ba7er.",correct:0,
   opts:['يلا نسبح بالبحر.','يلا نروح عالشاطئ.','يلا ننشّف.','يلا نتسلى.']},
  {q:'The waves are big today.',a:'الموج كبير اليوم.',ar:"l-mawj kbir l-yom.",correct:0,
   opts:['الموج كبير اليوم.','الشاطئ بعيد اليوم.','الماء بارد اليوم.','البحر هادئ اليوم.']},
  {q:'Watch out for jellyfish!',a:'حدر من قناديل البحر!',ar:"7ader min qanadil l-ba7er!",correct:0,
   opts:['حدر من قناديل البحر!','حدر من الموج!','حدر من الرمل!','حدر من الشمس!']},
  {q:"I want to get tanned this summer.",a:'بدي أتمحور هالصيف.',ar:"biddi 2itm7awwar ha-s-sayf.",correct:0,
   opts:['بدي أتمحور هالصيف.','بدي أسبح هالصيف.','بدي أغطس هالصيف.','بدي أروح البحر هالصيف.']},
  {q:'The water is so clear and nice!',a:'الماية صافية وحلوة!',ar:"l-mayye Safiye w-7elwe!",correct:0,
   opts:['الماية صافية وحلوة!','الماية باردة وحلوة!','الماية دافية وحلوة!','الماية مالحة وحلوة!']},
  {q:'She dried off with a towel.',a:'نشّفت بالمنشفة.',ar:"nshaffet bil-manshafe.",correct:0,
   opts:['نشّفت بالمنشفة.','سبحت بالبحر.','غطست بالمسبح.','جلست عالرمل.']},
  {q:'The coast road is beautiful.',a:'طريق الساحل حلو.',ar:"tari2 l-sa7el 7elo.",correct:0,
   opts:['طريق الساحل حلو.','شاطئ البحر حلو.','الماية حلوة.','الموج حلو.']},
  {q:"I'm going on a boat trip tomorrow.",a:'رح روح بوسطة بحرية بكرا.',ar:"ra7 ru7 bosta ba7riye bukra.",correct:0,
   opts:['رح روح بوسطة بحرية بكرا.','رح أسبح بكرا.','رح أروح الشاطئ بكرا.','رح أغطس بكرا.']},
];

const SWM_TIPS = [
  {title:'Lebanese Beach Clubs',body:"Lebanon's coast is dotted with private beach clubs (beach resorts) from Jounieh to Tyre. Entry fees can be steep — often $20–50 on weekends. You get a sunlounger (kursi sha6i2), umbrella (shamsiye), and access to the pool (masbah) and sea. 'Ba7r Lebanon' (the Lebanese sea) is warm, salty, and usually clear by August. Locals say 'yalla 3a ba7er!' (let's go to the sea!) like a command, not a suggestion."},
  {title:'Sea Swimming Culture',body:"Lebanese people take sea swimming (sbe7 bil-ba7er) seriously. Summer days often start with a 7 AM sea swim before work. The water being 'mayye 7elwe' (nice/clear water) versus 'mayye mdarrama' (murky/polluted) is a daily conversation. Jellyfish (qanadil ba7er) season in September is taken very seriously — locals check jellyfish forecast websites."},
  {title:'Getting Tanned',body:"Getting tanned (m7awwar — literally 'turned golden') is a status symbol in Lebanese summer culture. People compare tans competitively. The phrase 'm7awwar min l-ba7er' (tanned from the sea) is a compliment. Beach clubs have sunbathing areas. Fair skin in winter + dark tan in summer is the Lebanese seasonal look."},
  {title:'Natural Springs & Coastal Villages',body:"Beyond beach clubs, Lebanon has natural hot springs (7ammat) in the south and inland. Coastal villages like Batroun, Jbeil (Byblos), and Tyre (Sour/صور) have rocky sea-entry spots (not sandy beaches) where locals swim for free. 'Jumping from the rocks' (2el2a min l-7ajar) is a rite of passage. Boat trips (bosta ba7riye) along the coast are a classic summer day out."},
];
