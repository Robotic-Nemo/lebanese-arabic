// R690 — NEW FEATURE: Lebanese Street Food & Snacks (stf)
const STF_CATS = [
  { id:'savory',  label:'🥙 Savory' },
  { id:'sweets',  label:'🍬 Sweets' },
  { id:'drinks',  label:'☕ Drinks' },
  { id:'phrases', label:'💬 Phrases' },
];

const STF_WORDS = [
  // savory street food
  { ar:'فلافل',       tr:'falafel',        en:'falafel',                cat:'savory' },
  { ar:'شاورما',      tr:'shawarma',       en:'shawarma',               cat:'savory' },
  { ar:'منقوشة',      tr:'man2ousha',      en:'manoushe (flatbread)',    cat:'savory' },
  { ar:'سمبوسك',      tr:'sambousak',      en:'sambousak (fried pastry)',cat:'savory' },
  { ar:'لحم بعجين',   tr:'la7m bi3ajeen',  en:'meat flatbread',         cat:'savory' },
  { ar:'صفيحة',       tr:'Sfiha',          en:'open meat pie',          cat:'savory' },
  { ar:'حمص',         tr:'7ummus',         en:'hummus',                 cat:'savory' },
  { ar:'فول',         tr:'fool',           en:'fava beans',             cat:'savory' },
  // sweets & snacks
  { ar:'كنافة',       tr:'knefe',          en:'knafeh (cheese pastry)', cat:'sweets' },
  { ar:'بقلاوة',      tr:'ba2laawa',       en:'baklava',                cat:'sweets' },
  { ar:'هريسة',       tr:'hreese',         en:'semolina cake',          cat:'sweets' },
  { ar:'معمول',       tr:'ma3moul',        en:'ma3moul (date cookie)',  cat:'sweets' },
  { ar:'عرقسوس',      tr:'3ar2soos',       en:'liquorice drink/candy',  cat:'sweets' },
  { ar:'ترمس',        tr:'tormoss',        en:'lupini beans (snack)',    cat:'sweets' },
  { ar:'حبوب',        tr:'7boob',          en:'mixed seeds/nuts',       cat:'sweets' },
  // drinks
  { ar:'عصير',        tr:'3aseer',         en:'juice',                  cat:'drinks' },
  { ar:'ليموناضة',    tr:'laymoonaDa',     en:'lemonade',               cat:'drinks' },
  { ar:'تمر هندي',    tr:'tamar hindi',    en:'tamarind juice',         cat:'drinks' },
  { ar:'جلّاب',       tr:'jallaab',        en:'grape/rosewater drink',  cat:'drinks' },
  { ar:'قهوة عربية',  tr:'2ahwe 3arabiyye',en:'Arabic coffee',          cat:'drinks' },
  { ar:'شاي',         tr:'shaay',          en:'tea',                    cat:'drinks' },
  { ar:'عرق',         tr:'3ara2',          en:'arak (anise spirit)',     cat:'drinks' },
  // phrases
  { ar:'شو في عندك؟',   tr:'shu fii 3andak?',  en:'what do you have?',    cat:'phrases' },
  { ar:'بكم هاد؟',      tr:'bi2addesh haad?',   en:'how much is this?',    cat:'phrases' },
  { ar:'بدي واحد',       tr:'biddi waaHad',      en:'I want one',           cat:'phrases' },
  { ar:'كمان',           tr:'kamaan',            en:'one more / also',      cat:'phrases' },
  { ar:'الله يعطيك',     tr:'alla ya3Tiik',      en:'God give you (thanks)',cat:'phrases' },
  { ar:'على راسي',       tr:'3a raasi',          en:'with pleasure (lit. on my head)', cat:'phrases' },
];

const STF_DRILLS = [
  { q:'How do you say "manoushe"?', opts:['man2ousha','falafel','shawarma','Sfiha'], ans:0 },
  { q:'"Knefe" means:', opts:['knafeh (cheese pastry)','baklava','semolina cake','date cookie'], ans:0 },
  { q:'What is "shawarma"?', opts:['shawarma','meat flatbread','falafel','hummus'], ans:0 },
  { q:'"7ummus" means:', opts:['hummus','fava beans','falafel','sambousak'], ans:0 },
  { q:'How do you say "baklava"?', opts:['ba2laawa','knefe','ma3moul','hreese'], ans:0 },
  { q:'"Fool" means:', opts:['fava beans','hummus','falafel','snack'], ans:0 },
  { q:'What is "sambousak"?', opts:['fried pastry','flatbread','meat pie','cookie'], ans:0 },
  { q:'"3aseer" means:', opts:['juice','tea','coffee','arak'], ans:0 },
  { q:'How do you say "tamarind juice"?', opts:['tamar hindi','jallaab','laymoonaDa','2ahwe 3arabiyye'], ans:0 },
  { q:'"Tormoss" means:', opts:['lupini beans','liquorice','mixed nuts','seeds'], ans:0 },
  { q:'What is "la7m bi3ajeen"?', opts:['meat flatbread','open meat pie','shawarma','falafel'], ans:0 },
  { q:'"Jallaab" means:', opts:['grape/rosewater drink','lemonade','tamarind juice','arak'], ans:0 },
  { q:'How do you say "one more"?', opts:['kamaan','biddi waaHad','shu fii 3andak','3a raasi'], ans:0 },
  { q:'"3ara2" means:', opts:['arak (anise spirit)','juice','coffee','tea'], ans:0 },
  { q:'How do you say "how much is this"?', opts:['bi2addesh haad?','shu fii 3andak?','biddi waaHad','alla ya3Tiik'], ans:0 },
];

const STF_TIPS = [
  { title:'Man2ousha — the Lebanese breakfast king', body:'"Man2ousha" (منقوشة) is the ultimate Lebanese street food — flatbread topped with za3tar (thyme/olive oil mix), cheese, or meat, baked on a hot stone. Every neighbourhood has its furn (bakery/oven). "Man2ousha 3a za3tar" = the classic. Eaten hot, folded like a wrap, sometimes with fresh vegetables.' },
  { title:'Shawarma culture', body:'"Shawarma" (شاورما) in Lebanon = marinated meat (chicken or lamb) on a vertical spit, shaved into a flatbread with garlic sauce (toum), pickles, and tomatoes. Lebanese shawarma is distinct from Turkish/Syrian versions. Street vendors shout "yalla 3a shawarma!" (come on, shawarma!) to draw customers.' },
  { title:'Falafel & Hummus', body:'"Falafel" (فلافل) — fried chickpea balls — are served in bread with tahini, vegetables, and pickles. "7ummus" (حمص) = chickpeas (the word itself) or hummus dip. Both are from the mezze tradition but are now sold from tiny street kiosks. "7ummus b-tahini" = the classic dip.' },
  { title:'Knafeh — the queen of sweets', body:'"Knefe" (كنافة) is Lebanon\'s most beloved street sweet: shredded wheat pastry filled with white cheese, soaked in rosewater sugar syrup. Best eaten hot from the shop. Tripoli is famous for knafe. "Knefe na3me" (soft/fine knafe) vs "knefe kheshneh" (coarse) — know your preference before you order.' },
  { title:'3ar2soos & street drinks', body:'"3ar2soos" (عرقسوس) = liquorice drink — vendors carry it in copper vessels on their backs, pouring into small cups. "Tamar hindi" (تمر هندي) = tamarind — cool, sour, and sweet. "Jallaab" = grape juice with rosewater and pine nuts. These traditional drinks are part of Ramadan culture and old Beirut souks.' },
  { title:'Street transaction phrases', body:'Key phrases: "shu fii 3andak?" (what do you have?), "bi2addesh haad?" (how much?), "biddi waaHad" (I want one), "kamaan" (one more / also), "alla ya3Tiik" (God give you = thanks), "3a raasi" (on my head = with pleasure). Lebanese vendors are warm — expect banter and a free extra bite.' },
];
