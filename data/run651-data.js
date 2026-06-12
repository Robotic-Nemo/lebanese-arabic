// R651 — NEW FEATURE: Lebanese Bakery & Bread coach (bky)

const BKY_CATS = [
  {id:'breads',   label:'🍞 Breads'},
  {id:'manakish', label:'🫓 Manakish'},
  {id:'sandwiches', label:'🥙 Sandwiches'},
  {id:'phrases',  label:'💬 Bakery Talk'}
];

const BKY_WORDS = [
  // breads (8)
  {tr:'khibez 3arabi',    en:'pita bread',                    cat:'breads'},
  {tr:'khibez tannour',   en:'clay oven flatbread',           cat:'breads'},
  {tr:'markouk',          en:'thin Lebanese mountain bread',  cat:'breads'},
  {tr:'ka3ek bi simsim',  en:'sesame ring bread',             cat:'breads'},
  {tr:'fteer',            en:'layered flaky pastry',          cat:'breads'},
  {tr:'saj',              en:'bread on convex griddle',       cat:'breads'},
  {tr:'khibez mkhammar',  en:'leavened fluffy bread',         cat:'breads'},
  {tr:'l-furn',           en:'the bakery / the oven',         cat:'breads'},
  // manakish (7)
  {tr:'mna2ish',          en:'Lebanese flatbread pies',       cat:'manakish'},
  {tr:'mna2ish bi za3tar', en:'za\'atar flatbread',          cat:'manakish'},
  {tr:'mna2ish bi jibneh', en:'cheese flatbread',            cat:'manakish'},
  {tr:'mna2ish bi kebbe', en:'minced meat flatbread',        cat:'manakish'},
  {tr:'za3tar w zeit',    en:'za\'atar and olive oil mix',   cat:'manakish'},
  {tr:'jibneh 3akkawiyye', en:'Akka-style white cheese',     cat:'manakish'},
  {tr:'mna2ish mkhalTa',  en:'mixed topping flatbread',      cat:'manakish'},
  // sandwiches (7)
  {tr:'sandwish falafel', en:'falafel sandwich',              cat:'sandwiches'},
  {tr:'sandwish shawarma', en:'shawarma sandwich',            cat:'sandwiches'},
  {tr:'sandwish kebbe',   en:'kibbe sandwich',                cat:'sandwiches'},
  {tr:'sandwish 7ommous', en:'hummus sandwich',               cat:'sandwiches'},
  {tr:'sandwish jibneh w zaytoun', en:'cheese & olive sandwich', cat:'sandwiches'},
  {tr:'toum',             en:'garlic paste (sandwich spread)', cat:'sandwiches'},
  {tr:'khall',            en:'turnip pickle (in sandwiches)', cat:'sandwiches'},
  // bakery phrases (6)
  {tr:'Taaze min l-furn', en:'fresh from the oven',           cat:'phrases'},
  {tr:'3a-l-saj',         en:'on the saj griddle',            cat:'phrases'},
  {tr:'naTHafit il-yad',  en:'handmade',                     cat:'phrases'},
  {tr:'baddak shi?',      en:'do you want something?',        cat:'phrases'},
  {tr:'2a3Tiini waa7de',  en:'give me one (piece)',           cat:'phrases'},
  {tr:'kteer Tayyib',     en:'very delicious',                cat:'phrases'}
];

const BKY_DRILLS = [
  {q:'What is "khibez 3arabi"?',       opts:['pita bread','thin flatbread','sesame ring','flaky pastry'],      ans:0},
  {q:'What is "markouk"?',             opts:['clay oven bread','pita','thin mountain bread','leavened bread'], ans:2},
  {q:'What are "mna2ish"?',            opts:['sandwiches','Lebanese flatbread pies','layered pastry','oven breads'], ans:1},
  {q:'What is "mna2ish bi za3tar"?',   opts:['cheese flatbread','meat flatbread','za\'atar flatbread','mixed flatbread'], ans:2},
  {q:'What is "za3tar w zeit"?',       opts:['bread and oil','za\'atar and olive oil mix','cheese and oil','garlic and oil'], ans:1},
  {q:'What is "sandwish falafel"?',    opts:['shawarma sandwich','kibbe sandwich','falafel sandwich','hummus sandwich'], ans:2},
  {q:'What does "Taaze min l-furn" mean?', opts:['from the market','by hand','fresh from the oven','baked yesterday'], ans:2},
  {q:'What is "fteer"?',               opts:['clay oven bread','layered flaky pastry','sesame ring bread','pita'], ans:1},
  {q:'What is "toum"?',                opts:['turnip pickle','garlic paste','za\'atar mix','cheese spread'],    ans:1},
  {q:'What is "jibneh 3akkawiyye"?',   opts:['aged hard cheese','Akka-style white cheese','goat cheese','cream cheese'], ans:1},
  {q:'What is "l-furn"?',              opts:['the market','the kitchen','the bakery/oven','the table'],        ans:2},
  {q:'What does "3a-l-saj" mean?',     opts:['in the oven','on the saj griddle','by hand','at the market'],    ans:1},
  {q:'What is "khall"?',               opts:['garlic paste','sesame seeds','turnip pickle','chili sauce'],     ans:2},
  {q:'What is "sandwish shawarma"?',   opts:['falafel sandwich','shawarma sandwich','kibbe sandwich','cheese sandwich'], ans:1},
  {q:'What does "kteer Tayyib" mean?', opts:['very fresh','very cheap','very delicious','very spicy'],         ans:2}
];

const BKY_TIPS = [
  {title:'Mana\'eesh Morning',       body:'Mna2ish are THE Lebanese breakfast — fresh from the furn (bakery) every morning. The za3tar w zeit version is most iconic: a mix of dried thyme, sumac, sesame seeds, and olive oil pressed onto dough and baked. Lebanese expats worldwide say the smell of mna2ish takes them straight home.'},
  {title:'The Saj Tradition',        body:'Markouk bread cooked on a convex saj griddle is a dying art kept alive by mountain villages. The baker stretches the dough paper-thin over a cushion (wusaade) and slaps it onto the hot dome. A skilled saj baker can produce sheets the size of a tablecloth in under a minute.'},
  {title:'Ka\'ek Sellers',           body:'Ka3ek bi simsim (sesame ring bread) is sold by street vendors carrying stacks on vertical poles in Beirut\'s streets. The cry "ka3ek, ka3ek!" is quintessential Beirut. Usually eaten with za3tar and a hard-boiled egg — the original Lebanese street breakfast.'},
  {title:'Falafel Sandwich Culture', body:'The falafel sandwich (sandwish falafel) is Lebanon\'s great equalizer — eaten by everyone from schoolchildren to executives. The perfect version includes falafel, hummus, tahini, tomato, parsley, pickled turnips (khall), and hot sauce — all wrapped in fresh khibez 3arabi.'},
  {title:'Akkawi Cheese',            body:'Jibneh 3akkawiyye (Akka cheese) is the traditional white brined cheese used on mna2ish and in pastries. It comes from the Palestinian city of Akka (Acre) across the border. Lebanese families buy it in large rounds from specialty shops, soaking it in water to reduce saltiness before use.'},
  {title:'Toum: The Sacred Spread',  body:'Toum (garlic paste) is Lebanon\'s most sacred condiment — an emulsified sauce of garlic, salt, lemon and oil that turns pure white when done right. It goes on shawarma, grilled chicken, sandwiches and more. Every Lebanese family argues their grandmother makes the best toum. There is no correct opinion.'}
];
