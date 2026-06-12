// R1458 — NEW FEATURE: Lebanese Foul & Bean Breakfast Culture (fwl)
const FWL_WORDS = [
  {w:'foul',          t:'فول',            tr:'fava beans / the breakfast dish',    ex:'foul z-zayt w l-laymoun 3al-ftar kull yom',      et:'Foul with oil and lemon at breakfast every day'},
  {w:'zeit zaytoun',  t:'زيت زيتون',      tr:'olive oil (poured on foul)',          ex:'7att 3aleh zeit zaytoun mn a7la n-no3',           et:'He poured the finest olive oil on it'},
  {w:'laymoun',       t:'ليمون',          tr:'lemon (squeezed over foul)',          ex:'bidun laymoun l-foul ma bynibba3',                et:'Without lemon the foul is not satisfying'},
  {w:'thoum',         t:'ثوم',            tr:'garlic',                             ex:'thoum mhayyas 3al-foul — b3ayyer l-ta3me',        et:'Crushed garlic on foul — it changes the taste'},
  {w:'kammoun',       t:'كمون',           tr:'cumin (essential spice on foul)',     ex:'kammoun w zeit w foul — ta2m l-janneh',           et:'Cumin, oil, and foul — taste of heaven'},
  {w:'7arr',          t:'حارّ',           tr:'spicy / hot chili addition',         ex:'biddak 7arr? fi flifleh 7amra la-7alak',          et:'Do you want it spicy? There\'s red chili for you'},
  {w:'ba2dounes',     t:'بقدونس',         tr:'parsley (garnish on foul)',           ex:'ba2dounes mfaram 3al-foul min 2abil ma takeleh',  et:'Chopped parsley on foul before you eat it'},
  {w:'khobez 3arabi', t:'خبز عربي',       tr:'Arabic flatbread (for scooping)',    ex:'khobez 3arabi sa7n byokol l-foul zekeh',          et:'Fresh Arabic bread — you eat foul properly with it'},
  {w:'msabbah',       t:'مسبّح',          tr:'musabbaha (whole beans in tahini)',   ex:'msabbah ahsan mn l-7ommous 3and ba3d l-nas',      et:'Musabbaha is better than hummus for some people'},
  {w:'tarator',       t:'تراطور',         tr:'tahini sauce',                       ex:'tarator 3al-foul aw 3a l-msabbah — nefs l-zake',  et:'Tahini sauce on foul or musabbaha — same deliciousness'},
  {w:'fawwale',       t:'فوّالة',         tr:'foul shop / bean breakfast vendor',  ex:'l-fawwale l-zbouniyye btefte7 min s-sebbe3',      et:'The busy foul shop opens from seven'},
  {w:'shanklish',     t:'شنكليش',         tr:'aged spiced cheese (breakfast side)',ex:'shanklish bil-banadoura w zeit zaytoun',           et:'Shanklish with tomatoes and olive oil'},
  {w:'baydeh ma2liyye',t:'بيضة مقليّة',   tr:'fried egg (served alongside foul)', ex:'baydeh ma2liyye ma3 l-foul — ftar kamil',         et:'Fried egg with foul — a complete breakfast'},
  {w:'7ommous',       t:'حمّوص',          tr:'chickpea hummus dip',                ex:'7ommous w foul 3ala nefs l-tawle ma bi7la',       et:'Hummus and foul on the same table — it works'},
  {w:'labneh',        t:'لبنة',           tr:'strained yoghurt (breakfast spread)',ex:'labneh bi-zeit w za3tar ma byenzil min l-ftar',   et:'Labneh with oil and za\'atar never leaves the breakfast table'},
  {w:'s7un',          t:'صحن',            tr:'plate / shared breakfast dish',      ex:'s7un foul kbir la-kull l-3ayle',                  et:'A big plate of foul for the whole family'},
  {w:'2ate3',         t:'قاطع',           tr:'filling / satisfying (of a dish)',   ex:'l-foul 2ate3 w mish 3am bi7tajak te2kol ktir',   et:'Foul is filling and you don\'t need to eat much'},
  {w:'ta3me',         t:'طعمة',           tr:'flavor / taste',                     ex:'ta3me l-foul bi-l-3arabi ma bitrakkebha shi tani',et:'The flavor of foul in Arabic has no equivalent'},
  {w:'saffir',        t:'صفير',           tr:'whistle / vendor\'s call',           ex:'sma3it saffir l-bayye3 min ba3id — foul!',        et:'I heard the vendor\'s whistle from afar — foul!'},
  {w:'ftar',          t:'فطار',           tr:'breakfast',                          ex:'ftar billebnene: foul, labneh, za3tar, baydeh',   et:'Lebanese breakfast: foul, labneh, za\'atar, egg'},
];

const FWL_DRILLS = [
  {q:'What is "foul" in Lebanese?',                              opts:['fava beans dish','hummus','yoghurt','egg'],              ans:'fava beans dish',  correct:0},
  {q:'What is "zeit zaytoun"?',                                  opts:['olive oil','lemon juice','tahini','cumin'],              ans:'olive oil',        correct:0},
  {q:'What does "kammoun" mean?',                                opts:['cumin','garlic','parsley','salt'],                      ans:'cumin',            correct:0},
  {q:'What is "tarator" in Lebanese?',                           opts:['tahini sauce','fried egg','bread','olive oil'],         ans:'tahini sauce',     correct:0},
  {q:'What is "msabbah"?',                                       opts:['whole beans in tahini','spiced cheese','flatbread','cumin'], ans:'whole beans in tahini', correct:0},
  {q:'What does "fawwale" mean?',                                opts:['foul shop/vendor','garlic','parsley','plate'],          ans:'foul shop/vendor', correct:0},
  {q:'What is "ftar" in Lebanese?',                              opts:['breakfast','vendor','flavor','fried egg'],              ans:'breakfast',        correct:0},
  {q:'What does "2ate3" mean about a dish?',                     opts:['filling/satisfying','spicy','sweet','sour'],            ans:'filling/satisfying', correct:0},
];

const FWL_TIPS = [
  {title:'Foul — Lebanon\'s Morning Soul Food',  body:'Foul (فول fava beans) is the undisputed king of the Lebanese breakfast table. Served since dawn from the fawwale (فوّالة bean vendor), a steaming bowl of foul medammas is dressed with zeit zaytoun (زيت زيتون olive oil), laymoun (ليمون lemon), thoum (ثوم garlic), and kammoun (كمون cumin). Scooped with khobez 3arabi (خبز عربي flatbread), it is the fuel of labourers, students, and university professors alike. The street vendor\'s "foul, foul!" cry echoes through Beirut alleys at 6 AM. No Lebanese morning is complete without it.'},
  {title:'The Full Lebanese Breakfast Table',  body:'The Lebanese ftar (فطار breakfast) is a communal affair. Around one s7un (صحن plate) of foul, the table fills with labneh (لبنة strained yoghurt), shanklish (شنكليش aged cheese), baydeh ma2liyye (بيضة مقليّة fried egg), za3tar w zeit (za\'atar with oil), and 7ommous (حمّوص hummus). Everything is shared and scooped with Arabic bread. The word for this feast of flavours is "ftar kbir" — a big breakfast. Lebanese families argue about whose mother\'s foul recipe is best — an argument with no winner.'},
  {title:'Msabbah vs Foul — The Great Debate',  body:'While foul (crushed fava beans) is king, msabbah (مسبّح whole beans in warm tahini) has passionate defenders. Msabbah is made by tossing whole cooked chickpeas or beans in warm tarator (تراطور tahini sauce), drizzled with olive oil, and scattered with parsley and cumin. It is a Levantine breakfast staple — smoother, richer, and arguably more refined than standard hummus. A true breakfast connoisseur orders both foul and msabbah and alternates bites. The fawwale (bean vendor) knows his regulars\' preferences by heart.'},
  {title:'The Fawwale — Beirut\'s Bean Shrine',  body:'Every Beirut neighbourhood has a fawwale (فوّالة foul shop) — often a tiny hole-in-the-wall with a massive copper pot, clouds of steam, and a queue of workers from 6 AM. The vendor\'s saffir (صفير whistle or call) announces the morning opening. A single bowl of foul is 2ate3 (قاطع filling) enough to power a full morning\'s work. True fawwale regulars never need to order — the vendor already knows: extra thoum (garlic), light on the 7arr (chili), generous 3al-laymoun (on the lemon). It is a ritual older than the civil war.'},
];
