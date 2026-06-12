// R1569 — NEW FEATURE: Lebanese Pottery & Ceramics Craft (fkhr)
const FKHR_WORDS = [
  { w: "fakhar", t: "فخار", en: "pottery / earthenware", ex: "Fakhar Beit Chabab a3la fakhar bi-Lebnen.", exEn: "Beit Chabab pottery is the finest in Lebanon.", notes: "Beit Chabab in Mount Lebanon has 300+ years of pottery tradition. Pre-Islamic kilns still in use." },
  { w: "khazzaf", t: "خزّاف", en: "potter / ceramicist", ex: "El-khazzaf 3am yshaghel el-doulaab.", exEn: "The potter is working the wheel.", notes: "Generational craft. Most Lebanese potters today are 4th+ generation, family workshops in mountain villages." },
  { w: "doulaab", t: "دولاب", en: "potter's wheel", ex: "El-doulaab byidour bi-rejlo.", exEn: "The wheel turns with his foot.", notes: "Foot-pedal kick wheel — traditional Lebanese style. Electric wheels rare; old masters insist on the kick." },
  { w: "Tine", t: "طين", en: "clay", ex: "El-Tine min Asia a7san wa7ad.", exEn: "Clay from Assia is the best.", notes: "Lebanese potters source local red clay. Assia (Akkar) and Rashaya clay deposits prized for plasticity." },
  { w: "kura", t: "كورة", en: "kiln", ex: "El-kura 3am tshe3el.", exEn: "The kiln is firing.", notes: "Wood-fired beehive kilns are traditional. Some workshops switched to gas; purists keep wood for color depth." },
  { w: "jarra", t: "جرّة", en: "water jar / amphora", ex: "El-jarra btbarred el-mai bel-Sayf.", exEn: "The jar cools the water in summer.", notes: "Porous unglazed clay jars cool water by evaporation. A pre-fridge Lebanese kitchen staple, still used in mountain homes." },
  { w: "ibreek fakhar", t: "إبريق فخار", en: "clay pitcher", ex: "El-ibreek fakhar byekhli el-mai 3azab.", exEn: "The clay pitcher keeps water sweet.", notes: "Earthenware pitcher with narrow neck. Water poured from height (no lip-touch) — communal hygiene tradition." },
  { w: "Sa7n fakhar", t: "صحن فخار", en: "clay plate / dish", ex: "El-mloukhiyeh atyab b-Sa7n fakhar.", exEn: "Mloukhiyeh tastes better in a clay plate.", notes: "Slow-cooked stews retain heat better in earthenware. Many Lebanese restaurants serve signature dishes in clay." },
  { w: "tannour", t: "تنّور", en: "clay oven", ex: "Khebez el-tannour bel-deyy3a.", exEn: "Tannour bread in the village.", notes: "Cylindrical clay oven — bread dough slapped on inner walls. Backbone of village bread tradition; saj is its flat cousin." },
  { w: "zikhraf", t: "زخرف", en: "decorative pattern / ornament", ex: "El-zikhraf 3al jarra mn3oush bel-yad.", exEn: "The pattern on the jar is hand-engraved.", notes: "Geometric and floral motifs — Phoenician-rooted. Cobalt blue and turquoise glazes most iconic." },
  { w: "tale3a", t: "طالعة", en: "glazing / glaze coat", ex: "El-tale3a el-zar2a a3la min el-akhdar.", exEn: "The blue glaze is finer than the green.", notes: "Cobalt and copper-oxide glazes are Lebanon's signature. The tale3a is applied before second firing." },
  { w: "rashqa", t: "رشقة", en: "ceramic shard", ex: "Rashqa min jarra qadeemeh.", exEn: "A shard from an old jar.", notes: "Archaeological term — rashqas at Phoenician sites (Byblos, Tyre) document millennia of pottery continuity." },
  { w: "ghadda", t: "غضّة", en: "cracked / chipped", ex: "El-jarra ghadda, ma feene tibi3a.", exEn: "The jar is cracked, I can't sell it.", notes: "Imperfections after firing — rejected for sale, often used as planters or kept for sentimental value." },
  { w: "Saw3a", t: "صوعة", en: "small clay cup (coffee/herbs)", ex: "Sho 7elwet hal Saw3a!", exEn: "How beautiful this little cup is!", notes: "Tiny handle-less cups for Arabic coffee or sage tea. Sets of 6-12 are wedding-gift staples in mountain villages." },
  { w: "ma3mal fakhar", t: "معمل فخار", en: "pottery workshop / atelier", ex: "Z2arna ma3mal fakhar bi-Rashaya.", exEn: "We visited a pottery workshop in Rashaya.", notes: "Tourist-friendly workshops in Beit Chabab, Rashaya, Assia. Often offer hands-on wheel sessions for visitors." },
  { w: "tarwees", t: "ترويس", en: "shaping / forming on the wheel", ex: "El-tarwees byekhod 3omor la-yet3allam.", exEn: "Shaping takes a lifetime to master.", notes: "The hand-forming stage — when raw clay becomes form. Lebanese masters say 7-10 years to reliably center clay." }
];

const FKHR_DRILLS = [
  { q: "How say 'pottery'?", a: "fakhar", hint: "Beit Chabab tradition, 300+ years." },
  { q: "What's 'potter'?", a: "khazzaf", hint: "Generational family-workshop craft." },
  { q: "How say 'potter's wheel'?", a: "doulaab", hint: "Foot-pedal kick wheel — traditional." },
  { q: "What's 'clay'?", a: "Tine", hint: "Sourced from Assia or Rashaya." },
  { q: "How say 'kiln'?", a: "kura", hint: "Wood-fired beehive style preferred." },
  { q: "What's 'water jar'?", a: "jarra", hint: "Cools water by evaporation." },
  { q: "How say 'clay oven'?", a: "tannour", hint: "Backbone of village bread tradition." },
  { q: "What's 'decorative pattern'?", a: "zikhraf", hint: "Cobalt blue + turquoise iconic." },
  { q: "How say 'glaze coat'?", a: "tale3a", hint: "Cobalt or copper-oxide glaze." },
  { q: "Pottery workshop / atelier?", a: "ma3mal fakhar", hint: "Tourist-visited in Rashaya/Assia." }
];

const FKHR_TIPS = [
  "🏺 Beit Chabab in Mount Lebanon has 300+ years of pottery tradition. The Saade and Daher families still operate ancestral kilns.",
  "🌀 Lebanese kick wheels are foot-pedaled; masters refuse electric wheels for fine work — claim hand sensitivity drops with motor speed.",
  "🔵 Cobalt-blue and turquoise glazes are Lebanon's pottery signature, traceable through Phoenician shards at Byblos and Tyre archaeological sites.",
  "🍞 The tannour (clay oven) is the round cousin of the saj. Bread dough is slapped onto the cylinder's inner walls and peeled off when bubbled.",
  "🎨 Rashaya and Assia (Akkar) workshops welcome visitors for hands-on wheel sessions. Saade Pottery in Beit Chabab is the most established public-facing atelier."
];
