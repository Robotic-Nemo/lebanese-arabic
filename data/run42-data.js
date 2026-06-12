// Run #42 — Word Origins / Etymology Explorer
// Prefix: etym
//
// Lebanese is uniquely rich with loanwords from French (200 years of contact),
// Turkish (Ottoman era), Italian (port trade), Persian, Aramaic (substrate),
// and modern English. This module surfaces the etymology so learners
// understand WHY Lebanese is so different from MSA.

const ETYMOLOGY = [
  // ── French (200+ years of Mandate + Beirut francophone tradition) ──
  { ar:'بنطلون', tr:'banTalon', en:'pants/trousers', origin:'French', source:'pantalon', note:'Direct borrow from French 1900s; almost universal in Lebanon.' },
  { ar:'أوتيل', tr:'otel', en:'hotel', origin:'French', source:'hôtel', note:'Used alongside MSA فندق (funduq) — French version more common in Beirut.' },
  { ar:'اسانسير', tr:'asansyer', en:'elevator', origin:'French', source:'ascenseur', note:'MSA equivalent مصعد (mas3ad) is rare; Lebanese always say asansyer.' },
  { ar:'بسكليت', tr:'basklet', en:'bicycle', origin:'French', source:'bicyclette', note:'Common across all dialects of Levantine.' },
  { ar:'شوفير', tr:'shofer', en:'driver', origin:'French', source:'chauffeur', note:'Same word for taxi or private driver.' },
  { ar:'ميرسي', tr:'merci', en:'thank you', origin:'French', source:'merci', note:'Used everyday alongside Arabic شكراً (shukran). Often "merci ktir" = "thanks a lot".' },
  { ar:'بونجور', tr:'bonjour', en:'good morning', origin:'French', source:'bonjour', note:'Heard in cafés, shops, formal greetings — uniquely Lebanese among Arabic dialects.' },
  { ar:'سلون', tr:'salon', en:'living room', origin:'French', source:'salon', note:'Standard word for living room.' },
  { ar:'بلكون', tr:'balkon', en:'balcony', origin:'French', source:'balcon', note:'MSA شرفة (shurfa) is technical; balkon is daily speech.' },
  { ar:'كوفّيه', tr:'koffieh', en:'hairdresser', origin:'French', source:'coiffeur', note:'Both genders use the word (sometimes كوفّيره koffeira for woman).' },
  { ar:'كرافات', tr:'karavat', en:'tie/necktie', origin:'French', source:'cravate', note:'Universal in Lebanon.' },
  { ar:'تيليفون', tr:'telefon', en:'telephone', origin:'French', source:'téléphone', note:'Older word; younger generation says موبايل (mobayl).' },
  { ar:'ابارتمان', tr:'apartemane', en:'apartment', origin:'French', source:'appartement', note:'Used for rental flats.' },
  { ar:'فريز', tr:'frez', en:'strawberry', origin:'French', source:'fraise', note:'MSA فراولة (farawla) also used.' },

  // ── Turkish (Ottoman administration 1516-1918) ──
  { ar:'أوضة', tr:'oda', en:'room', origin:'Turkish', source:'oda', note:'Older word for room; غرفة (ghurfa) is also used.' },
  { ar:'تنجرة', tr:'Tanjra', en:'cooking pot', origin:'Turkish', source:'tencere', note:'Standard kitchen word.' },
  { ar:'صوبيا', tr:'Sobya', en:'heater/stove', origin:'Turkish', source:'soba', note:'Diesel or gas heater for winter.' },
  { ar:'دولاب', tr:'dolab', en:'wardrobe/closet', origin:'Turkish via Persian', source:'dolap', note:'Originally Persian for "wheel/cabinet".' },
  { ar:'بقشيش', tr:'ba2sheesh', en:'tip/gratuity', origin:'Persian via Turkish', source:'bahşiş', note:'Word for restaurant tip or service tip.' },
  { ar:'بقجة', tr:'bo2ja', en:'bundle/parcel', origin:'Turkish', source:'bohça', note:'Bundle wrapped in cloth.' },
  { ar:'كباب', tr:'kabab', en:'kebab/grilled meat', origin:'Turkish', source:'kebab', note:'Came via Ottomans throughout the Levant.' },
  { ar:'باشا', tr:'basha', en:'sir/big shot', origin:'Turkish', source:'paşa', note:'Originally Ottoman title; now playful "boss".' },
  { ar:'أفندي', tr:'afandi', en:'sir/gentleman', origin:'Turkish', source:'efendi', note:'Polite address; used in old Beirut.' },
  { ar:'يخنة', tr:'yakhne', en:'stew', origin:'Turkish', source:'yahni', note:'Many Lebanese stews carry this name.' },
  { ar:'كزدورة', tr:'kazdura', en:'walk/stroll', origin:'Turkish', source:'gezdirmek', note:'"To take a walk" — uniquely Lebanese.' },

  // ── Italian (port trade, sailing terms via Genoa & Venice) ──
  { ar:'بيتزا', tr:'pitza', en:'pizza', origin:'Italian', source:'pizza', note:'Modern loan, used everywhere.' },
  { ar:'باستا', tr:'basta', en:'pasta', origin:'Italian', source:'pasta', note:'Modern loan; in older speech: مكرونة (makarona).' },
  { ar:'كافيه', tr:'kafe', en:'café', origin:'Italian/French', source:'caffè', note:'Both Italian and French roots; Lebanese uses both pronunciations.' },
  { ar:'بنك', tr:'bank', en:'bank', origin:'Italian', source:'banca', note:'Came via Italian merchant trade.' },
  { ar:'فاتورة', tr:'fatura', en:'invoice/bill', origin:'Italian', source:'fattura', note:'Standard business word.' },
  { ar:'كرتونة', tr:'kartona', en:'cardboard box', origin:'Italian', source:'cartone', note:'Box for moving or shipping.' },

  // ── English (modern, mostly tech/business) ──
  { ar:'موبايل', tr:'mobayl', en:'mobile/cell phone', origin:'English', source:'mobile', note:'Replaced telefon for cell phones.' },
  { ar:'لابتوب', tr:'laptop', en:'laptop', origin:'English', source:'laptop', note:'Tech vocab universal.' },
  { ar:'باي', tr:'bay', en:'bye', origin:'English', source:'bye', note:'Common informal goodbye. Often "bye bye".' },
  { ar:'أوكي', tr:'oki', en:'OK', origin:'English', source:'OK', note:'Universal. Often shortened to just "ok".' },
  { ar:'ميتنغ', tr:'meeting', en:'meeting', origin:'English', source:'meeting', note:'Business vocab.' },
  { ar:'ايميل', tr:'email', en:'email', origin:'English', source:'email', note:'Modern tech word.' },
  { ar:'كومبيوتر', tr:'kompyuter', en:'computer', origin:'English', source:'computer', note:'Used alongside MSA حاسوب (rare in speech).' },

  // ── Aramaic (Lebanon\'s pre-Arabic substrate language) ──
  { ar:'شو', tr:'shu', en:'what', origin:'Aramaic', source:'shu/shū', note:'Iconic Lebanese question word — Aramaic substrate. MSA: ما (ma).' },
  { ar:'هيدا', tr:'hayda', en:'this (m)', origin:'Aramaic-influenced', source:'hāden', note:'Demonstrative shape; not from MSA هذا.' },
  { ar:'مزبوط', tr:'mazbouT', en:'exact/correct', origin:'Aramaic', source:'mzabbat', note:'Very common; used for confirming.' },
  { ar:'بدّي', tr:'baddi', en:'I want', origin:'Aramaic', source:'b-iddī ("in my hand")', note:'Originally "in my hand"; now "I want". MSA: أريد (urid).' },
  { ar:'منيح', tr:'mneh', en:'good/fine', origin:'Aramaic', source:'mneeḥ', note:'Iconic Lebanese; replaces MSA جيد.' },
  { ar:'كرمال', tr:'karmal', en:'because of/for the sake of', origin:'Aramaic', source:'qrām-d-', note:'Levantine; MSA: من أجل.' },
  { ar:'هلق', tr:'halla2', en:'now', origin:'Aramaic', source:'hā-walqt', note:'"This time"; MSA: الآن (al-aan).' },
  { ar:'فوت', tr:'fut', en:'enter/come in', origin:'Aramaic', source:'fut', note:'"To enter" — Aramaic root, not from MSA.' },
  { ar:'إيش', tr:'esh', en:'what (alt.)', origin:'Aramaic', source:'iyš', note:'Some Lebanese say إيش, others شو.' },

  // ── Persian (via Ottoman trade routes) ──
  { ar:'بازار', tr:'bazar', en:'market/bazaar', origin:'Persian', source:'bāzār', note:'Came via Ottomans.' },
  { ar:'كاوتشوك', tr:'kawtshouk', en:'rubber/tire', origin:'French via Italian', source:'caoutchouc', note:'Latin American → French → Lebanese.' },
  { ar:'شاورما', tr:'shawarma', en:'shawarma (rotating meat)', origin:'Turkish', source:'çevirme ("turning")', note:'From Turkish "to turn"; iconic Levantine street food.' },
  { ar:'برندا', tr:'baranda', en:'verandah/porch', origin:'Portuguese via Hindi', source:'varanda', note:'Long-traveled word; common architectural term.' },
  { ar:'صابون', tr:'Saboun', en:'soap', origin:'Latin', source:'sapo', note:'Originally Latin → Greek → Aramaic → Arabic.' },

  // ── Native Arabic (for contrast / drill distractors) ──
  { ar:'كتاب', tr:'kteb', en:'book', origin:'Native Arabic', source:'k-t-b root', note:'Pure Arabic; same root across all Semitic.' },
  { ar:'ماء', tr:'mai', en:'water', origin:'Native Arabic', source:'māʔ', note:'Universal Semitic root; Lebanese usually says مي (may).' },
  { ar:'بيت', tr:'bayt', en:'house', origin:'Native Arabic', source:'bayt', note:'Pure Arabic; same in all dialects.' },
  { ar:'يد', tr:'iid', en:'hand', origin:'Native Arabic', source:'yad', note:'Body part; Semitic root.' },
  { ar:'شمس', tr:'shams', en:'sun', origin:'Native Arabic', source:'šams', note:'Native; common across all Arabic.' },
];

const ETYM_ORIGINS = ['French', 'Turkish', 'Italian', 'English', 'Aramaic', 'Persian', 'Native Arabic'];

const ETYM_DRILL = [
  { ar:'بنطلون', tr:'banTalon', en:'pants', correct:'French', opts:['French','Turkish','English','Native Arabic'] },
  { ar:'أوضة',   tr:'oda',      en:'room',  correct:'Turkish', opts:['Turkish','French','Italian','Aramaic'] },
  { ar:'موبايل', tr:'mobayl',   en:'cell phone', correct:'English', opts:['English','French','Italian','Native Arabic'] },
  { ar:'شو',     tr:'shu',      en:'what',  correct:'Aramaic', opts:['Aramaic','Native Arabic','Turkish','Persian'] },
  { ar:'بيتزا',  tr:'pitza',    en:'pizza', correct:'Italian', opts:['Italian','English','French','Turkish'] },
  { ar:'بازار',  tr:'bazar',    en:'market',correct:'Persian', opts:['Persian','Turkish','Aramaic','Native Arabic'] },
  { ar:'منيح',   tr:'mneh',     en:'good/fine', correct:'Aramaic', opts:['Aramaic','Native Arabic','Persian','French'] },
  { ar:'اسانسير',tr:'asansyer', en:'elevator', correct:'French', opts:['French','English','Italian','Turkish'] },
  { ar:'كباب',   tr:'kabab',    en:'kebab', correct:'Turkish', opts:['Turkish','Persian','Native Arabic','Aramaic'] },
  { ar:'كتاب',   tr:'kteb',     en:'book',  correct:'Native Arabic', opts:['Native Arabic','Aramaic','Turkish','Persian'] },
  { ar:'بدّي',   tr:'baddi',    en:'I want',correct:'Aramaic', opts:['Aramaic','Native Arabic','Turkish','French'] },
  { ar:'فاتورة', tr:'fatura',   en:'invoice',correct:'Italian',opts:['Italian','French','Turkish','Native Arabic'] },
  { ar:'باي',    tr:'bay',      en:'bye',   correct:'English', opts:['English','French','Italian','Aramaic'] },
  { ar:'ميرسي',  tr:'merci',    en:'thanks',correct:'French',  opts:['French','Italian','English','Native Arabic'] },
  { ar:'شاورما', tr:'shawarma', en:'shawarma',correct:'Turkish',opts:['Turkish','Native Arabic','Persian','Aramaic'] },
];
