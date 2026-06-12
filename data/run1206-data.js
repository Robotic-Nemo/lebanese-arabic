// R1206 — NEW FEATURE: Lebanese Car Repair Shop & Mafla3 Culture (mfl)

const MFL_WORDS = [
  {ar:'مفلع', tr:'mafla3', en:'car repair / tire shop'},
  {ar:'ميكانيسيان', tr:'mikanisyen', en:'mechanic'},
  {ar:'دولاب', tr:'doolab', en:'tire / wheel'},
  {ar:'عطل', tr:'3atl', en:'breakdown / malfunction'},
  {ar:'بطارية', tr:'baTTariyye', en:'car battery'},
  {ar:'فرين', tr:'frein', en:'brakes'},
  {ar:'زيت', tr:'zeet', en:'engine oil'},
  {ar:'تغيير الزيت', tr:'taghyir el-zeet', en:'oil change'},
  {ar:'كابو', tr:'kaabo', en:'car hood / bonnet'},
  {ar:'قطعة غيار', tr:'2it3a ghiyar', en:'spare part'},
  {ar:'نفخة', tr:'nafkhe', en:'flat tire / puncture'},
  {ar:'شمعة', tr:'shma3a', en:'spark plug'},
  {ar:'دراكون', tr:'drakoon', en:'shock absorber'},
  {ar:'ديركسيون', tr:'direksiyon', en:'steering wheel / steering'},
  {ar:'كلاكسون', tr:'klakson', en:'car horn'},
  {ar:'محرك', tr:'ma7rak', en:'engine / motor'},
  {ar:'مكيف', tr:'mkyef', en:'air conditioner'},
  {ar:'عجلة احتياط', tr:'3ajlet i7tiyaT', en:'spare wheel / spare tire'},
  {ar:'فلتر', tr:'filter', en:'oil / air filter'},
  {ar:'ويبر', tr:'waybar', en:'windshield wiper'},
];

const MFL_DRILLS = [
  {q:'The mechanic says "el-baTTariyye khalSit" — what happened?', opts:['engine is broken','battery is dead','brakes need replacing','oil needs changing'], a:1},
  {q:'"Doolab nafkhe" means:', opts:['brand new tire','flat tire / puncture','spare wheel','wheel alignment'], a:1},
  {q:'You want to check under the hood. What do you say?', opts:['fattehli el-kaabo','shu bido klakson','brid shma3a','feeni 3ajlet i7tiyaT'], a:0},
  {q:'"2it3a ghiyar" refers to:', opts:['oil change','spark plug','spare part','breakdown'], a:2},
  {q:'The Lebanese term for shock absorber is:', opts:['frein','klakson','drakoon','direksiyon'], a:2},
  {q:'"3atl bel-motor" means:', opts:['engine tune-up','engine breakdown','oil change','spark plug issue'], a:1},
  {q:'The mechanic says "lazem ghayyir el-frein" — what needs replacing?', opts:['the tire','the battery','the horn','the brakes'], a:3},
  {q:'"3ajlet i7tiyaT" is the Lebanese term for:', opts:['flat tire','shock absorber','spare wheel','windshield wiper'], a:2},
];

const MFL_TIPS = [
  {title:'The Mafla3 as Community Hub', body:'The neighborhood car repair shop isn\'t just for fixing cars — it\'s a social gathering spot where news is exchanged, politics debated, and strong coffee served on plastic chairs while you wait.'},
  {title:'Bargaining Is Expected', body:'Always ask "2adesh?" (how much?) before agreeing to any work, and know the first price is rarely the final one. A friendly "ya 3amm" (uncle/pal) softens negotiations.'},
  {title:'French Legacy in Car Terms', body:'Many Lebanese car terms come from the French colonial era: "frein" (brakes), "kaabo" (hood from "capot"), "direksiyon" (steering from "direction"), "klakson" (horn from "klaxon").'},
  {title:'Dual-Role Mechanics', body:'During Lebanon\'s chronic power cuts, neighborhood mechanics often double as electricians, helping wire generator connections and jump-start batteries — the mafla3 is an essential survival hub.'},
];
