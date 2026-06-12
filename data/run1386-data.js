// R1386 — NEW FEATURE: Lebanese Sahra & Late Night Gathering (shr)
const SHR_WORDS = [
  {ar:'سهرة',tr:'sahra',en:'evening gathering / night out'},
  {ar:'سهر',tr:'sahar',en:'staying up late'},
  {ar:'ضيوف',tr:'dyuf',en:'guests'},
  {ar:'ضيف',tr:'dyef',en:'guest'},
  {ar:'مضيف',tr:'mudyef',en:'host'},
  {ar:'مقعد',tr:'ma2ad',en:'seat / sitting area'},
  {ar:'أرجيلة',tr:'arjile',en:'hookah / nargileh'},
  {ar:'فنجان',tr:'finjan',en:'small coffee cup'},
  {ar:'قهوة عربية',tr:'2ahwe 3arabiyye',en:'Arabic coffee'},
  {ar:'حلوى',tr:'7alwa',en:'sweets / candy'},
  {ar:'بسطة',tr:'basta',en:'spread of food / setup'},
  {ar:'أغنية',tr:'3hniyye',en:'song'},
  {ar:'عزف',tr:'3azef',en:'playing music'},
  {ar:'دبكة',tr:'dabke',en:'Lebanese folk dance'},
  {ar:'ضجة',tr:'dajje',en:'commotion / loud fun'},
  {ar:'خلص الليل',tr:'kheles el-lel',en:'night is over / wrapped up'},
  {ar:'يصحى على خير',tr:'yis7a 3al-kher',en:'wake up well (goodnight wish)'},
  {ar:'تأخرنا',tr:'ta2akhkharna',en:'we stayed late'},
  {ar:'دايخ',tr:'dayekh',en:'dizzy / out of it (from tiredness)'},
  {ar:'نعساني',tr:'na3sani',en:'sleepy'}
];

const SHR_DRILLS = [
  {q:'A "sahra" (سهرة) is...?',opts:['an argument','a morning prayer','an evening gathering','a market'],a:2},
  {q:'Your "mudyef" (مضيف) is the person who...?',opts:['arrives last','hosts the guests','plays music','makes coffee'],a:1},
  {q:'At a sahra you sit with a "finjan" (فنجان). What is it?',opts:['a cushion','a small coffee cup','a nargileh pipe','a song'],a:1},
  {q:'"Dabke" (دبكة) at a Lebanese sahra is...?',opts:['a sweet dessert','a type of coffee','a folk dance','a late-night argument'],a:2},
  {q:'You\'re "na3sani" (نعساني) at 2am. How do you feel?',opts:['energetic','hungry','sleepy','dizzy'],a:2},
  {q:'"Ta2akhkharna" (تأخرنا) means...?',opts:['we ate too much','we stayed late','we left early','we danced all night'],a:1},
  {q:'The Lebanese goodnight wish "yis7a 3al-kher" literally means...?',opts:['sweet dreams','good morning','wake up well','go to sleep now'],a:2},
  {q:'"Dajje" (ضجة) at a sahra describes...?',opts:['Arabic coffee','commotion and loud fun','the food spread','an early bedtime'],a:1}
];

const SHR_TIPS = [
  {title:'Sahra Culture',body:'A "sahra" in Lebanon is a cherished social ritual — friends and family gather at someone\'s home in the evening, often unannounced. Hospitality is immediate: the host (mudyef) rushes to prepare 2ahwe 3arabiyye, arjile, and 7alwa. Refusing a sahra invitation is considered unusual and slightly offensive.'},
  {title:'The Coffee Ritual',body:'Arabic coffee (2ahwe 3arabiyye) at a sahra is served in tiny finjans. Cardamom-spiced and often unsweetened, it signals the transition to serious talk or just relaxed connection. You signal "enough" by tilting the finjan slightly — the host will stop refilling. Not tilting means you want more.'},
  {title:'Dabke & Music',body:'At livelier sahras, someone brings out a phone speaker or oud, and dabke dancing begins. Dabke is a line or circle folk dance where participants stamp feet in unison to a driving beat. Any guest can join — refusing is unusual. The best dancers receive cheers of "heyy!" from the circle.'},
  {title:'Staying Too Late',body:'Lebanese sahras often stretch well past midnight. "Ta2akhkharna ktir" (we stayed way too late) is said with a mix of exhaustion and pride. Hosts rarely ask guests to leave — the polite guest watches for "kheles el-lel" signals like yawning hosts, dimming lights, or the arjile going cold. The farewell (wada3) can itself last 30 more minutes at the door.'}
];
