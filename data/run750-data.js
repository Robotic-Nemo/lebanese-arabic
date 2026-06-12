// R750 — NEW FEATURE: Lebanese Pharmacy & Health (sdl)

const SDL_CATS = ['pharmacy','symptoms','medicine','phrases'];

const SDL_WORDS = [
  // pharmacy
  {tr:'saydalliyye',      en:'pharmacy / drugstore',        ar:'صيدلية',          cat:'pharmacy'},
  {tr:'saydali',          en:'pharmacist (m)',               ar:'صيدلي',           cat:'pharmacy'},
  {tr:'saydalaniyye',     en:'pharmacist (f)',               ar:'صيدلانية',        cat:'pharmacy'},
  {tr:'wasfe',            en:'prescription',                 ar:'وصفة',            cat:'pharmacy'},
  {tr:'dawa',             en:'medicine / drug',              ar:'دواء',            cat:'pharmacy'},
  {tr:'7abbe',        en:'pill / tablet',                ar:'حبّة',            cat:'pharmacy'},
  {tr:'shrab',            en:'syrup / liquid medicine',      ar:'شراب',            cat:'pharmacy'},
  {tr:'laS2a',            en:'plaster / band-aid',           ar:'لاصقة',           cat:'pharmacy'},
  // symptoms
  {tr:'alam',            en:'pain / ache',                  ar:'ألم',             cat:'symptoms'},
  {tr:'7umme',            en:'fever',                        ar:'حمّى',            cat:'symptoms'},
  {tr:'bard',             en:'cold (illness)',               ar:'برد',             cat:'symptoms'},
  {tr:'su3al',            en:'cough',                        ar:'سعال',            cat:'symptoms'},
  {tr:'waja3 ras',        en:'headache',                     ar:'وجع راس',         cat:'symptoms'},
  {tr:'waja3 batn',       en:'stomachache',                  ar:'وجع بطن',         cat:'symptoms'},
  {tr:'da3fe',            en:'weakness / fatigue',           ar:'ضعف',             cat:'symptoms'},
  {tr:'dawkha',           en:'dizziness',                    ar:'دوخة',            cat:'symptoms'},
  // medicine
  {tr:'musakkin',          en:'painkiller',                   ar:'مسكّن',           cat:'medicine'},
  {tr:'antibiyo',         en:'antibiotic',                   ar:'أنتيبيو',         cat:'medicine'},
  {tr:'vitamin',          en:'vitamin',                      ar:'فيتامين',         cat:'medicine'},
  {tr:'khafd l-7arare',   en:'fever reducer',                ar:'خافض الحرارة',    cat:'medicine'},
  {tr:'2aTrit 3ayn',            en:'eye drops',                    ar:'قطرة عين',        cat:'medicine'},
  {tr:'marahem',          en:'ointment / cream',             ar:'مراهم',           cat:'medicine'},
  // phrases
  {tr:'badde dawa la l-waja3', en:'I need medicine for the pain',  ar:'بدي دوا للوجع',        cat:'phrases'},
  {tr:'2addesh hida l-dawa?',  en:'how much is this medicine?',    ar:'قديش هيدا الدوا؟',     cat:'phrases'},
  {tr:'lezem wasfe?',          en:'do I need a prescription?',     ar:'لازم وصفة؟',           cat:'phrases'},
  {tr:'3ande 7umme',           en:'I have a fever',                ar:'عندي حمّى',            cat:'phrases'},
  {tr:'men 2emte 3andak?',     en:'how long have you had it?',     ar:'من إمتى عندك؟',        cat:'phrases'},
  {tr:'khod 7abbtein bil-yom', en:'take two pills a day',          ar:'خود حبتين باليوم',     cat:'phrases'},
];

const SDL_DRILLS = [
  {q:'What does "saydalliyye" mean?', opts:['pharmacy','hospital','clinic','doctor\'s office'], ans:0},
  {q:'"dawa" means?', opts:['medicine','doctor','prescription','vitamin'], ans:0},
  {q:'How do you say "fever"?', opts:['7umme','bard','dawkha','da3fe'], ans:0},
  {q:'"wasfe" means?', opts:['prescription','medicine','pill','syrup'], ans:0},
  {q:'How do you say "headache"?', opts:['waja3 ras','waja3 batn','alam','su3al'], ans:0},
  {q:'"7abbe" refers to?', opts:['pill / tablet','syrup','ointment','injection'], ans:0},
  {q:'How do you say "cough"?', opts:['su3al','bard','7umme','dawkha'], ans:0},
  {q:'"musakkin" means?', opts:['painkiller','antibiotic','vitamin','fever reducer'], ans:0},
  {q:'How do you say "dizziness"?', opts:['dawkha','da3fe','alam','bard'], ans:0},
  {q:'"laS2a" means?', opts:['plaster / band-aid','pill','cream','drops'], ans:0},
  {q:'How do you say "weakness / fatigue"?', opts:['da3fe','dawkha','7umme','su3al'], ans:0},
  {q:'"antibiyo" is?', opts:['antibiotic','vitamin','painkiller','syrup'], ans:0},
  {q:'How do you say "stomachache"?', opts:['waja3 batn','waja3 ras','alam','bard'], ans:0},
  {q:'"shrab" in pharmacy context means?', opts:['syrup / liquid medicine','drink at bar','juice','water'], ans:0},
  {q:'How do you say "I have a fever"?', opts:['3ande 7umme','badde dawa','fi wasfe','men 2emte'], ans:0},
];

const SDL_TIPS = [
  {title:'The Lebanese Pharmacy: More Than a Drugstore', body:'The Lebanese saydalliyye is a first-line health resource. Pharmacists (saydali) dispense antibiotics, give injections, and advise on treatment — often without requiring a prescription. When someone is sick, the reflex is to go to the pharmacy first, not a clinic. The pharmacist knows the neighborhood families, remembers what you take, and may extend credit. "Ro7 3al saydali" (go to the pharmacist) is almost always the first advice you hear.'},
  {title:'Prescription Culture in Lebanon', body:'While wasfe (prescriptions) technically exist, Lebanese pharmacy culture is famously flexible. Antibiotics, steroids, sleeping pills — most are available over the counter. The pharmacist often plays doctor, recommending specific medications based on your description of symptoms. This reflects both limited healthcare access and deep trust in the neighborhood pharmacist as community health expert.'},
  {title:'The "Waja3" Vocabulary', body:'"Waja3" (وجع) is the Lebanese Arabic word for pain or ache — much more colloquial than "alam." "Waja3 ras" (headache), "waja3 batn" (stomachache), "waja3 dahr" (backache). The word stretches metaphorically too: "waja3 2alb" (heartache) or "howe waja3" (he\'s a pain/annoyance) are everyday expressions. The Lebanese use waja3 freely where Standard Arabic would use alam.'},
  {title:'Fever Talk: 7umme vs Bard', body:'Lebanese distinguish carefully between 7umme (fever — elevated temperature) and bard (cold — the illness). Having bard doesn\'t necessarily mean 7umme, and vice versa. "3ande bard" means you have a cold/flu; "3ande 7umme" means your temperature is up. The standard first response to either is khafd l-7arare (fever reducer) plus lots of citrus juice and rest — grandmotherly wisdom as universal as the saydali\'s advice.'},
  {title:'The Vitamin & Supplement Obsession', body:'Lebanese pharmacy culture has a strong supplement culture. Vitamin C, vitamin D, zinc, omega-3, magnesium — Lebanese families stock them like pantry staples. The saydali is consulted for supplement advice as much as for illness. "Khod vitamins" (take vitamins) is dispensed as freely as any prescription. High-quality European brands dominate; local generic drugs are distrusted. Brand loyalty for medicine is intense.'},
  {title:'Going to the Doctor in Lebanon', body:'The full doctor visit sequence in Lebanese slang: "7asset 7ali ta3eben" (felt myself sick) → "ro7et 3al saydali" (went to pharmacist) → "ma nfa3" (didn\'t help) → "2ijit 3and l-doktor" (went to the doctor) → "3atani wasfe" (gave me a prescription) → "3edet 3al saydali" (back to pharmacy). The pharmacist visit often substitutes for steps 3-5. Lebanese are pragmatic healthcare consumers.'},
];
