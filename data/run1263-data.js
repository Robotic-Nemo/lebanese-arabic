const MSM_WORDS = [
  { ar:'مشمش', tr:'mishmish', en:'apricot', hint:'Mishmish — Lebanon\'s most beloved summer fruit; "yawm el-mishmish" means never (like "when pigs fly")' },
  { ar:'قمر الدين', tr:'2amareddin', en:'apricot leather sheet / fruit roll', hint:'2amareddin — thick dried apricot paste, essential Ramadan drink soaked in water overnight' },
  { ar:'مربى', tr:'mrabbeh', en:'jam / preserve', hint:'Mrabbeh el-mishmish — homemade apricot jam, every teta makes her own recipe in July' },
  { ar:'موسم', tr:'mawsim', en:'season / harvest time', hint:'Mawsim el-mishmish — lasts 3 weeks in June/July, entire villages mobilize to pick before it falls' },
  { ar:'قطف', tr:'2ataf', en:'to pick / to harvest (fruit)', hint:'2ataf el-mishmish — picking apricots before sunrise when fruit is firm and cool' },
  { ar:'بستان', tr:'bustan', en:'orchard / fruit garden', hint:'El-bustan fi el-dayye — village orchard where extended family picks together every summer' },
  { ar:'بركة', tr:'barake', en:'blessing / abundance', hint:'Barake — a full harvest is called barake; a failed one is called "el-mawsim mesh mnee7"' },
  { ar:'برقوق', tr:'bar2ou2', en:'plum', hint:'Bar2ou2 el-jbel — mountain plums harvested in August, often dried for winter or made into arak' },
  { ar:'كرز', tr:'krez', en:'cherry', hint:'Krez — Lebanese mountain cherries from Deir el-Ahmar and Becharreh, sweetest in the country' },
  { ar:'خوخ', tr:'khokh', en:'peach', hint:'Khokh — summer peaches sold from trucks on mountain roads, cost almost nothing in season' },
  { ar:'رمّان', tr:'remmane', en:'pomegranate', hint:'Remmane — pomegranate trees line old stone houses; fruit cracks open in October signal fall' },
  { ar:'عصير', tr:'3asir', en:'juice / pressed juice', hint:'3asir el-mishmish — fresh apricot juice, too thick to drink without thinning with water' },
  { ar:'مناقيش', tr:'mnaeesh', en:'flatbreads (here: for breakfast at harvest)', hint:'Mnaeesh — breakfast during harvest: eat under the tree with fresh-picked fruit beside your tea' },
  { ar:'صينية', tr:'sayniyye', en:'tray / flat tray (for drying fruit)', hint:'Sayniyye — flat metal tray used to dry halved apricots on rooftops for 3 days' },
  { ar:'مجفّف', tr:'mjaffaf', en:'dried / sun-dried', hint:'Mishmish mjaffaf — sun-dried apricots stored in cloth bags all winter, chewier and tangier' },
  { ar:'حلو', tr:'7elo', en:'sweet / ripe', hint:'2allik helo — "tell me it\'s sweet" means taste-test before buying; vendor always says yes' },
  { ar:'حامض', tr:'7amed', en:'sour / tart (unripe)', hint:'7amed — unripe apricots eaten with salt as a snack (anbeh melbese 2abla ma tnbej)' },
  { ar:'شجرة', tr:'shajra', en:'tree', hint:'Shajret el-mishmish — old apricot trees in Lebanon can live 80+ years, passed down in families' },
  { ar:'ناضج', tr:'naadej', en:'ripe / mature', hint:'Naadej — perfectly ripe means it fell off the tree; if you had to pull, it\'s too early' },
  { ar:'ضيعة', tr:'dayye', en:'village / home village', hint:'El-dayye — every Lebanese family has a home village; summer fruit is the reason to go back' }
];

const MSM_DRILLS = [
  { q:'What is "mishmish"?', opts:['cherry','apricot','peach','plum'], ans:1 },
  { q:'"2amareddin" is...?', opts:['apricot jam','dried apricot leather sheet','fresh apricot juice','apricot tree'], ans:1 },
  { q:'What does "mawsim" mean?', opts:['orchard','jam','season/harvest time','blessing'], ans:2 },
  { q:'"2ataf" means...?', opts:['to eat','to dry','to pick/harvest','to sell'], ans:2 },
  { q:'What is "bar2ou2"?', opts:['cherry','peach','pomegranate','plum'], ans:3 },
  { q:'"Naadej" means...?', opts:['sour','dried','ripe/mature','sweet'], ans:2 },
  { q:'What is "mrabbeh"?', opts:['juice','jam/preserve','tray','orchard'], ans:1 },
  { q:'"Dayye" means...?', opts:['tray','harvest','home village','blessing'], ans:2 }
];

const MSM_TIPS = [
  { title:'Yawm el-Mishmish — The Day That Never Comes', body:'The Lebanese phrase "yawm el-mishmish" (the day of the apricot) means "never" or "when pigs fly" — because apricot season is so short and unpredictable that saying "I\'ll do it on apricot day" became a joke. But when the season actually arrives in late June, Lebanese families drop everything. Entire extended families caravan to the village, pick from dawn until noon, then spend afternoons making mrabbeh (jam) and 2amareddin on the stone terraces.' },
  { title:'2amareddin — The Ramadan Sheet', body:'Lebanon\'s most famous apricot product is 2amareddin — thick sheets of dried and pressed apricot paste. Sold in flat orange sheets at every supermarket, it\'s dissolved in cold water to make the classic Ramadan Iftar drink. The name means "moon of religion" — it was historically made to survive the Ramadan month without refrigeration. Home-made 2amareddin is still made in mountain villages: apricots are boiled, strained, poured onto trays, and dried on rooftops for three days in July sun.' },
  { title:'Krez & Bar2ou2 — The Mountain Fruit Circuit', body:'Lebanon\'s mountain spine produces cherries (krez) in late May from Becharreh and Deir el-Ahmar, apricots (mishmish) in June from Aanjar and Chouf villages, peaches (khokh) in July from Baabdat and Beit Meri, and plums (bar2ou2) in August from Akkar and Hermel. Villagers track each harvest in a mental calendar: "when krez finishes, mishmish starts." Summer in the Lebanese mountains is essentially a continuous three-month fruit procession, each fruit celebrated and mourned when it ends.' },
  { title:'El-Dayye wa el-Bustan — The Village & Its Orchard', body:'For Lebanese families, the "dayye" (home village) is inseparable from its fruit trees. Families inherited specific trees — not just the land but the trees themselves, named by grandmother and grandfather. "Shajret Sitto" (grandmother\'s tree) means a 70-year-old apricot whose fruit is sweeter than any market variety. When developers buy old village properties, the hardest negotiation is often about the trees: who gets the fruit for the last season, who can cut old wood. The orchard connects generations in ways property papers cannot.' }
];
