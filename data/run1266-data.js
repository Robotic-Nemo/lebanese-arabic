const TAB_WORDS = [
  { ar:'تبولة', tr:'tabboulet', en:'tabbouleh (the dish)', hint:'Tabboulet — Lebanon\'s most famous dish worldwide; more parsley than bulgur, unlike diaspora versions' },
  { ar:'بقدونس', tr:'ba2dounes', en:'parsley', hint:'Ba2dounes — tabbouleh is 70% ba2dounes; Lebanese buy it by the arm-load at the market' },
  { ar:'نعنع', tr:'na3na3', en:'mint', hint:'Na3na3 — the other green in tabbouleh; also in ayran, salads, and fresh with every meal' },
  { ar:'برغل', tr:'burghul', en:'bulgur wheat', hint:'Burghul — soaked not cooked; just a little in tabbouleh; Lebanese say too much burghul is "Americano tabbouleh"' },
  { ar:'بندورة', tr:'banadoura', en:'tomato', hint:'Banadoura — diced small, drained before mixing so tabbouleh stays crisp not watery' },
  { ar:'خيار', tr:'khyar', en:'cucumber', hint:'Khyar — sometimes added; always on the side plate to scoop tabbouleh with lettuce cups' },
  { ar:'خس', tr:'khess', en:'lettuce / romaine', hint:'Khess — traditionally used as a scoop/wrap for tabbouleh instead of a fork' },
  { ar:'زيت زيتون', tr:'zeyt zaytoun', en:'olive oil', hint:'Zeyt zaytoun — Lebanese olive oil goes in everything; tabbouleh without good olive oil is just chopped greens' },
  { ar:'حامض', tr:'7amed', en:'lemon juice / sour', hint:'7amed — fresh lemon juice squeezed at last minute; too much or too little ruins the tabbouleh' },
  { ar:'ملح', tr:'maleh', en:'salt', hint:'Maleh — tossed in by feel; teta never measures, she just knows' },
  { ar:'فرم', tr:'faram', en:'to chop / to mince', hint:'Faram el-ba2dounes — chopping parsley fine is the skill; too rough = bad tabbouleh, too fine = mush' },
  { ar:'تبّل', tr:'tabbal', en:'to season / to dress (a salad)', hint:'Tabbal es-salata — to dress and season; tabbouleh name comes from this root (seasoned/spiced)' },
  { ar:'طبق', tr:'taba2', en:'plate / platter', hint:'Taba2 tabboulet — always served on a shared flat platter; communal eating is the whole point' },
  { ar:'عيدية', tr:'3idiyyeh', en:'celebration spread / feast table', hint:'3idiyyeh — tabbouleh is always at the 3idiyyeh table; no Lebanese celebration without it' },
  { ar:'سلطة', tr:'salata', en:'salad', hint:'Salata — in Lebanon, "salata" often just means tabbouleh; it\'s the default salad of the culture' },
  { ar:'نضير', tr:'nadir', en:'fresh / vibrant (of herbs)', hint:'Nadir — ba2dounes must be nadir (fresh bright green); yellow parsley means bad tabbouleh incoming' },
  { ar:'دقيق', tr:'da2i2', en:'fine / finely chopped', hint:'Da2i2 — the parsley must be chopped da2i2 (fine); Lebanese grandmothers can tell skill by the cut alone' },
  { ar:'عمود الأكل', tr:'3amoud el-akl', en:'pillar of the meal / staple', hint:'3amoud el-akl — tabbouleh called "pillar of the Lebanese meal"; present at every big lunch' },
  { ar:'خليط', tr:'khlit', en:'mixture / toss together', hint:'Khlit — tossing the tabbouleh; done right before serving so parsley stays crisp and not wilted' },
  { ar:'حديقة', tr:'7di2a', en:'garden / herb garden', hint:'7di2a — Lebanese homes often have a small 7di2a with ba2dounes, na3na3, za3tar growing fresh' }
];

const TAB_DRILLS = [
  { q:'What is "tabboulet"?', opts:['olive oil','mint','the tabbouleh dish','parsley'], ans:2 },
  { q:'"Ba2dounes" means...?', opts:['tomato','parsley','mint','lettuce'], ans:1 },
  { q:'What does "faram" mean?', opts:['to season','to serve','to chop/mince','to mix'], ans:2 },
  { q:'"Burghul" is...?', opts:['olive oil','lemon juice','mint','bulgur wheat'], ans:3 },
  { q:'What is "na3na3"?', opts:['cucumber','mint','salt','tomato'], ans:1 },
  { q:'"Tabbal" means...?', opts:['to chop','to season/dress','to wash','to plate'], ans:1 },
  { q:'What does "nadir" mean?', opts:['fine/small','sour','fresh/vibrant','dried'], ans:2 },
  { q:'"Khess" is used for...?', opts:['chopping','scooping tabbouleh','dressing','serving plates'], ans:1 }
];

const TAB_TIPS = [
  { title:'Ba2dounes First — The Tabbouleh Rule', body:'Lebanese tabbouleh is a parsley salad with a little bulgur — not a bulgur salad with parsley. The ratio is roughly 70-80% finely chopped ba2dounes (parsley) to everything else. What Lebanese call "Americano tabbouleh" (too much bulgur, not enough parsley) is a source of genuine national offense. The parsley must be fresh, chopped da2i2 (fine) with a mezzaluna or sharp knife, and completely dry before mixing — wet parsley makes soggy tabbouleh, and soggy tabbouleh means you have failed your family.' },
  { title:'The Art of the Scoop — Eating with Khess', body:'Tabbouleh is eaten by scooping it into a cup of khess (romaine/cos lettuce) or a small piece of khubez (flatbread), never with a fork alone at a proper Lebanese table. The taba2 (platter) sits in the center, and everyone reaches in. The protocol: don\'t double-dip your lettuce, take a reasonable scoop, and never pour the juice from the bottom of the platter — that\'s a sign of bad table manners. Tabbouleh is always served cold, and the lemon and olive oil are balanced to taste, not measured.' },
  { title:'Tabboulet at the Sofreh — Every Table, Always', body:'There is no Lebanese 3idiyyeh (celebration feast), no Sunday family lunch (sofret il-a7ad), and no mezze spread without tabbouleh. It appears alongside fattoush, hummus, moutabbal, and kibbeh nayye as a permanent fixture. Village families in the Bekaa and the mountains often grow their own ba2dounes and na3na3 in small 7di2a (herb gardens) outside the kitchen. The parsley is harvested in the morning and the tabbouleh is made the same day — next-day tabbouleh is considered an insult to guests.' },
  { title:'Chopping is an Art — The Tabbouleh Test', body:'How finely a person chops parsley reveals their Lebanese kitchen credentials. "Faram mezyan" (chopped well) is a compliment from a mother-in-law that means more than just knife skill — it signals someone was properly taught. The blade must be very sharp, the ba2dounes perfectly dry, and the motion rhythmic (not rough). In competition kitchens and village homes alike, the standard is the same: hold a handful of tabbouleh and squeeze it — it should hold together without dripping, and the color should be vibrant green, not dark or yellow.' }
];
