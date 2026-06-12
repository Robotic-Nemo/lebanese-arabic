// R744 — NEW FEATURE: Lebanese Wine & Winemaking Culture (wyn)

const WYN_CATS = ['grapes','winery','tasting','phrases'];

const WYN_WORDS = [
  // grapes
  {tr:'3inab',           en:'grapes',                        ar:'عنب',            cat:'grapes'},
  {tr:'karm',            en:'vineyard',                      ar:'كرم',            cat:'grapes'},
  {tr:'7aSaad',          en:'harvest / grape picking',       ar:'حصاد',           cat:'grapes'},
  {tr:'3enbe',           en:'grape (single)',                ar:'عنبة',           cat:'grapes'},
  {tr:'bekaa3',          en:'Bekaa Valley (wine region)',    ar:'بقاع',           cat:'grapes'},
  {tr:'mawsim',          en:'harvest season',                ar:'موسم',           cat:'grapes'},
  {tr:'dawwali',         en:'grapevine (trellis)',           ar:'دوّالي',         cat:'grapes'},
  // winery
  {tr:'winery',          en:'winery / wine estate',          ar:'واينري',         cat:'winery'},
  {tr:'khal',            en:'vinegar (from wine)',           ar:'خل',             cat:'winery'},
  {tr:'3aSir',           en:'grape juice / pressing',        ar:'عصير',           cat:'winery'},
  {tr:'barmil',          en:'barrel',                        ar:'برميل',          cat:'winery'},
  {tr:'2ammam',          en:'wine cellar / fermentation',    ar:'أمّام',          cat:'winery'},
  {tr:'SHa7H',           en:'cork / stopper',                ar:'صاحح',           cat:'winery'},
  {tr:'takhmir',         en:'fermentation',                  ar:'تخمير',          cat:'winery'},
  // tasting
  {tr:'nabidh',          en:'wine (classical/formal)',       ar:'نبيذ',           cat:'tasting'},
  {tr:'khmar',           en:'wine / alcohol (colloquial)',   ar:'خمر',            cat:'tasting'},
  {tr:'a7mar',           en:'red (wine)',                    ar:'أحمر',           cat:'tasting'},
  {tr:'2abyad',          en:'white (wine)',                  ar:'أبيض',           cat:'tasting'},
  {tr:'wardiyye',        en:'rosé',                          ar:'ورديّة',         cat:'tasting'},
  {tr:'ta3mo 7elo',      en:'it tastes sweet',               ar:'طعمو حلو',       cat:'tasting'},
  {tr:'7amad',           en:'acidity / sourness',            ar:'حموض',           cat:'tasting'},
  // phrases
  {tr:'bi7ebbak',        en:'cheers (to your health)',       ar:'بحبّك',          cat:'phrases'},
  {tr:'kas wa kas',      en:'glass after glass',             ar:'كاس وكاس',       cat:'phrases'},
  {tr:'min l-karm',      en:'straight from the vineyard',   ar:'من الكرم',       cat:'phrases'},
  {tr:'nbi2 l-bekaa3',   en:'Bekaa wine',                   ar:'نبيع البقاع',    cat:'phrases'},
  {tr:'shi2 lbanaani',   en:'a Lebanese thing (with pride)',ar:'شي لبناني',      cat:'phrases'},
  {tr:'3al barkeh',      en:'cheers / may it be blessed',   ar:'عالبركة',        cat:'phrases'},
  {tr:'chateau ksara',   en:'Château Ksara (famous winery)',ar:'شاتو كسارة',     cat:'phrases'},
];

const WYN_DRILLS = [
  {q:'What does "karm" mean?', opts:['vineyard','grape','harvest','barrel'], a:0},
  {q:'"7aSaad" means?', opts:['harvest / grape picking','vineyard','fermentation','wine cellar'], a:0},
  {q:'How do you say "grapes"?', opts:['3inab','nabidh','khmar','3aSir'], a:0},
  {q:'"nabidh" is?', opts:['wine (classical/formal)','vinegar','juice','barrel'], a:0},
  {q:'What is "bekaa3"?', opts:['Bekaa Valley (wine region)','a type of grape','winery','harvest season'], a:0},
  {q:'How do you say "barrel"?', opts:['barmil','khal','2ammam','dawwali'], a:0},
  {q:'"takhmir" means?', opts:['fermentation','pressing','harvest','aging'], a:0},
  {q:'How do you say "rosé"?', opts:['wardiyye','a7mar','2abyad','nabidh'], a:0},
  {q:'What is "3al barkeh"?', opts:['cheers / may it be blessed','a type of wine','vineyard blessing','harvest prayer'], a:0},
  {q:'"a7mar" refers to?', opts:['red (wine)','white wine','rosé','grape juice'], a:0},
  {q:'How do you say "cheers"?', opts:['bi7ebbak','kas wa kas','3al barkeh','shi2 lbanaani'], a:0},
  {q:'What is "khal"?', opts:['vinegar (from wine)','wine barrel','grape juice','cork'], a:0},
  {q:'"dawwali" means?', opts:['grapevine (trellis)','vineyard owner','harvest worker','wine cellar'], a:0},
  {q:'What is "Château Ksara"?', opts:['famous Lebanese winery','a type of grape','wine region','harvest festival'], a:0},
  {q:'"kas wa kas" means?', opts:['glass after glass','cheers to health','straight from vine','red wine'], a:0},
];

const WYN_TIPS = [
  {title:'Bekaa Valley: Lebanon\'s Wine Country', body:'The Bekaa Valley (l-Bekaa3) is Lebanon\'s premier wine region, 1000m above sea level between the Lebanon and Anti-Lebanon mountain ranges. The high altitude, 300 days of sunshine, and cool nights create ideal conditions. Château Ksara, Château Musar, and Château Kefraya are the grand names. Winemaking in Lebanon dates back 5000 years — it\'s one of the oldest wine-producing regions on earth.'},
  {title:'Château Musar: Lebanon\'s Most Famous Wine', body:'Château Musar (Ghazir, north of Beirut) is Lebanon\'s most internationally acclaimed winery. Hochar family has made wine here since 1930 — even during the civil war, they never missed a vintage. "The wine of war" became legendary worldwide. The red blend is aged 7+ years before release. "From Lebanon, a miracle" was Wine Spectator\'s verdict. Musar put Lebanese wine on the world map.'},
  {title:'The Word for Wine in Lebanese', body:'Lebanese uses two words: "nabidh" (نبيذ) — the formal/classical Arabic term for wine; and "khmar" (خمر) — more colloquial, covers all alcohol. In casual speech people often say "nabidh" or just name the brand. Wine is sold legally in Lebanon despite its Muslim majority — religious pluralism makes Lebanon unique in the Arab world for having a thriving wine culture.'},
  {title:'Harvest Time (Mawsim l-7aSaad)', body:'September-October is harvest season (mawsim l-7aSaad) in the Bekaa. Families come together to pick grapes — it\'s a social event, not just agriculture. Women and men pick side by side, songs are sung, argileh is smoked at breaks, and food is brought. The fresh grape juice (3aSir) is drunk on the spot. Dibs (grape molasses) is made from the excess. It\'s one of Lebanon\'s most celebrated seasonal traditions.'},
  {title:'Wine and Lebanese Identity', body:'Despite being a majority-Muslim country, Lebanon has historically embraced wine as part of its Phoenician and Christian heritage. Christians (Maronites, Greek Orthodox, Catholics) make up roughly 40% of the population — wine is part of religious practice and daily culture. Even many Lebanese Muslims drink wine privately. "Shi2 lbanaani" (a Lebanese thing) captures this pride — Lebanese wine is identity, not just a drink.'},
  {title:'Arak: Wine\'s Older Brother', body:'Before wine became fashionable, Lebanon ran on arak — an anise-flavored spirit distilled from grapes, diluted with water and ice to turn milky white. "Arak b-mazza" (arak with mezze) is the classic Lebanese dining ritual. Many winemakers also distill arak from their grape pomace. The saying goes: "3aSfour b-idak wa3la 3ashra 3al shajar" — take what\'s in your hand over what\'s on the vine.'},
];
