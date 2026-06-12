// R1515 — NEW FEATURE: Lebanese Maamoul & Holiday Cookie Culture (mmw)

const MMW_WORDS = [
  { w: "maamoul", tr: "معمول", en: "maamoul (stuffed shortbread cookie)", ex: "3malna maamoul la 3eid", exEn: "we made maamoul for Eid", notes: "made for both Easter and Eid al-Fitr — filled with dates, pistachios, or walnuts" },
  { w: "3ajin", tr: "عجين", en: "dough", ex: "l 3ajin lazem yerta7", exEn: "the dough needs to rest", notes: "semolina-based dough scented with rose and orange blossom water" },
  { w: "7ashwe", tr: "حشوة", en: "filling / stuffing", ex: "shu l 7ashwe? tamr aw fistek?", exEn: "what's the filling? dates or pistachios?", notes: "three classic fillings: tamr (dates), fistek (pistachios), jawz (walnuts)" },
  { w: "tamr", tr: "تمر", en: "dates (filling)", ex: "maamoul l tamr a7la", exEn: "date maamoul is the sweetest", notes: "date paste filling spiced with cinnamon and nutmeg" },
  { w: "fistek", tr: "فستق", en: "pistachios", ex: "b7ebb l maamoul bil fistek", exEn: "I love pistachio maamoul", notes: "ground pistachios sweetened with sugar and rose water" },
  { w: "jawz", tr: "جوز", en: "walnuts", ex: "l jawz a77an", exEn: "the walnut one is tastier", notes: "chopped walnuts with cinnamon and sugar" },
  { w: "ma2 zaher", tr: "ماء زهر", en: "rose water", ex: "7atti shwayit ma2 zaher", exEn: "add a little rose water", notes: "essential flavoring in maamoul dough — perfumes the whole house" },
  { w: "ma2 3ater", tr: "ماء عطر", en: "orange blossom water", ex: "ma2 3ater b3abbi l bayt", exEn: "orange blossom water fills the house with fragrance", notes: "used alongside rose water in the dough" },
  { w: "qaleb", tr: "قالب", en: "maamoul mold / cookie press", ex: "l qaleb byeswa l ma3mol", exEn: "the mold makes the pattern on the cookie", notes: "wooden carved mold that stamps the traditional geometric design" },
  { w: "smid", tr: "سميد", en: "semolina", ex: "l maamoul bi smid mish 7enn", exEn: "maamoul made with semolina is the real thing", notes: "coarse semolina gives the classic crumbly texture" },
  { w: "2askar", tr: "سكر بودرة", en: "powdered sugar (for dusting)", ex: "rshu 3alehon 2askar", exEn: "dust them with powdered sugar", notes: "cookies are dusted generously with icing sugar before serving" },
  { w: "ferren", tr: "فرن", en: "oven / bakery", ex: "7ottehon 3al ferren", exEn: "put them in the oven", notes: "also means neighborhood bakery — you can bring raw trays to be baked at the communal furn" },
  { w: "sa7n", tr: "صحن", en: "tray / plate of maamoul", ex: "ba3atla sa7n maamoul", exEn: "I sent her a tray of maamoul", notes: "gifting trays of maamoul to neighbors is the Eid and Easter tradition" },
  { w: "3yediye", tr: "عيدية", en: "holiday gift (money or sweets)", ex: "l maamoul min a7la l 3yediye", exEn: "maamoul is the best holiday gift", notes: "children get 3yediye as cash; adults exchange trays of sweets" },
  { w: "3am ya3mlu", tr: "عم يعملو", en: "they are making (them)", ex: "imme 3am ya3mlu maamoul", exEn: "my mom is making maamoul", notes: "3am + present verb = ongoing action" },
  { w: "ji7in", tr: "جحين", en: "kneading (dough)", ex: "ji7in l 3ajin mas2ale", exEn: "kneading the dough is an art", notes: "kneading activates the semolina, makes it smooth" },
  { w: "ta2er", tr: "طاير", en: "crumbly / falls apart (in a good way)", ex: "l maamoul lazem ykon ta2er", exEn: "the maamoul should be crumbly", notes: "the ideal maamoul melts in the mouth — ta2er is the highest praise" },
  { w: "yi3mel 3eid", tr: "يعمل عيد", en: "to celebrate / make a feast", ex: "yi3mel 3eid yom l maamoul yinzal", exEn: "it's a celebration when the maamoul comes out", notes: "yi3mel 3eid literally 'to make a feast/holiday'" }
];

const MMW_DRILLS = [
  { q: "What are the three classic maamoul fillings?", a: "tamr, fistek, jawz", hint: "dates, pistachios, walnuts" },
  { q: "What is the wooden carved press used to shape maamoul called?", a: "qaleb", hint: "stamps the geometric pattern on top" },
  { q: "What two flower waters are essential in maamoul dough?", a: "ma2 zaher w ma2 3ater", hint: "rose water and orange blossom water" },
  { q: "What grain gives maamoul its crumbly texture?", a: "smid", hint: "coarse semolina" },
  { q: "How do you say 'the maamoul should be crumbly' in Lebanese?", a: "l maamoul lazem ykon ta2er", hint: "ta2er = melts in the mouth" },
  { q: "What Lebanese word means 'dough'?", a: "3ajin", hint: "it needs to rest before shaping" },
  { q: "What is 'gifting a tray of sweets' called?", a: "3yediye", hint: "holiday gift tradition at Eid and Easter" },
  { q: "How do you say 'my mom is making maamoul'?", a: "imme 3am ya3mlu maamoul", hint: "3am + verb = ongoing action" },
  { q: "What is 'powdered sugar' called in Lebanese Arabic?", a: "2askar", hint: "dusted generously on top before serving" },
  { q: "What does 'sa7n maamoul' mean?", a: "a tray of maamoul", hint: "what you gift to neighbors" }
];

const MMW_TIPS = [
  "Maamoul is made twice a year in Lebanon — before Easter (for Christians) and before Eid al-Fitr (for Muslims). Families gather for a full day of communal baking, each taking their tray to the neighborhood furn (bakery oven) to be baked.",
  "The qaleb (wooden mold) is a prized family heirloom. Patterns vary by region and family — intricate geometric designs that identify the filling inside (round dome = dates, flat = walnuts, pointed = pistachios).",
  "The highest compliment for maamoul is 'ta2er' — meaning so crumbly it melts on the tongue. Getting this texture right requires resting the semolina dough overnight to fully absorb the butter and flower waters.",
  "Gifting sa7en (trays) of maamoul to neighbors and relatives is a core part of Eid and Easter etiquette. Refusing to accept or not reciprocating is considered impolite. The exchange of sweets symbolizes communal celebration.",
  "Rose water (ma2 zaher) and orange blossom water (ma2 3ater) are the soul of maamoul. Lebanese households keep large bottles year-round. The scent of maamoul baking is one of the most universally recognized 'home' smells for Lebanese people everywhere."
];
