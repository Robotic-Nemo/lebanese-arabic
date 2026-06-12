// R714 — NEW FEATURE: Lebanese Astrology & Superstitions (ast)
const AST_CATS = [
  { id:'zodiac',  label:'♈ Zodiac & Stars' },
  { id:'evil',    label:'🧿 Evil Eye & Protection' },
  { id:'omens',   label:'🦉 Omens & Beliefs' },
  { id:'phrases', label:'💬 Phrases' },
];

const AST_WORDS = [
  // zodiac & stars
  { ar:'أبراج',         tr:'abraaj',          en:'zodiac signs/horoscope',  cat:'zodiac' },
  { ar:'برج',           tr:'burj',            en:'zodiac sign/tower',       cat:'zodiac' },
  { ar:'نجم',           tr:'najm',            en:'star',                    cat:'zodiac' },
  { ar:'قمر',           tr:'2amar',           en:'moon',                    cat:'zodiac' },
  { ar:'حظ',            tr:'7azz',            en:'luck/fortune',            cat:'zodiac' },
  { ar:'مولد',          tr:'mawled',          en:'birthday/birth date',     cat:'zodiac' },
  { ar:'طالع',          tr:'Taale3',          en:'horoscope/fate',          cat:'zodiac' },
  { ar:'مستقبل',        tr:'musta2bal',       en:'future',                  cat:'zodiac' },
  // evil eye & protection
  { ar:'عين',           tr:'3een',            en:'eye/evil eye',            cat:'evil' },
  { ar:'حسد',           tr:'7asad',           en:'envy/evil eye (act)',     cat:'evil' },
  { ar:'حجاب',          tr:'7ijaab',          en:'amulet/talisman',         cat:'evil' },
  { ar:'خرزة زرقاء',    tr:'kharaze zar2a',   en:'blue bead (evil eye protection)', cat:'evil' },
  { ar:'كف مريم',       tr:'kaff maryam',     en:'Hand of Mary/Hamsa',     cat:'evil' },
  { ar:'ماشاء الله',    tr:'maa shaa allah',  en:'MashaAllah (ward off evil)', cat:'evil' },
  { ar:'تعويذة',        tr:'ta3wiize',        en:'charm/spell',             cat:'evil' },
  // omens & beliefs
  { ar:'فأل',           tr:'fa2l',            en:'omen/good sign',          cat:'omens' },
  { ar:'حلم',           tr:'7elem',           en:'dream',                   cat:'omens' },
  { ar:'كف',            tr:'kaff',            en:'palm (palm reading)',     cat:'omens' },
  { ar:'فنجان',         tr:'finjaan',         en:'coffee cup (reading)',    cat:'omens' },
  { ar:'قرعة',          tr:'2ur3a',           en:'draw/lottery/fate',       cat:'omens' },
  { ar:'بخت',           tr:'bakht',           en:'destiny/luck',            cat:'omens' },
  { ar:'سحر',           tr:'si7r',            en:'magic/sorcery',           cat:'omens' },
  // phrases
  { ar:'شو برجك؟',          tr:'shu burjak?',          en:'what\'s your zodiac sign?',    cat:'phrases' },
  { ar:'ماشاء الله عليك',    tr:'maa shaa allah 3leek', en:'MashaAllah on you (protection)', cat:'phrases' },
  { ar:'العين حقيقية',       tr:'el-3een 7a2ii2iyye',   en:'the evil eye is real',          cat:'phrases' },
  { ar:'قرأت فنجاني',        tr:'2ara2t finjaani',       en:'she read my coffee cup',        cat:'phrases' },
  { ar:'حظك كتير منيح',      tr:'7azzak kteer mnii7',    en:'your luck is very good',        cat:'phrases' },
  { ar:'الله يحميك',         tr:'alla y7miik',           en:'God protect you',               cat:'phrases' },
];

const AST_DRILLS = [
  { q:'How do you say "zodiac signs"?', opts:['abraaj','burj','najm','Taale3'], ans:0 },
  { q:'"7asad" means:', opts:['envy/evil eye','luck','fate','dream'], ans:0 },
  { q:'What is "finjaan" in Lebanese culture?', opts:['coffee cup (reading)','palm reading','amulet','zodiac'], ans:0 },
  { q:'"Maa shaa allah" means:', opts:['MashaAllah (ward off evil)','God willing','thank God','praise God'], ans:0 },
  { q:'How do you say "dream"?', opts:['7elem','fa2l','bakht','si7r'], ans:0 },
  { q:'"Kharaze zar2a" means:', opts:['blue bead (evil eye)','charm','amulet','talisman'], ans:0 },
  { q:'What is "7azz"?', opts:['luck/fortune','fate','sign','destiny'], ans:0 },
  { q:'"Kaff maryam" means:', opts:['Hand of Mary/Hamsa','palm reading','cup reading','evil eye'], ans:0 },
  { q:'How do you say "destiny/luck"?', opts:['bakht','7azz','fa2l','2ur3a'], ans:0 },
  { q:'"Si7r" means:', opts:['magic/sorcery','dream','charm','omen'], ans:0 },
  { q:'What is "Taale3"?', opts:['horoscope/fate','star','moon','sign'], ans:0 },
  { q:'"7ijaab" in amulet context means:', opts:['amulet/talisman','veil','protection','charm'], ans:0 },
  { q:'How do you say "what\'s your zodiac sign"?', opts:['shu burjak?','shu 7azzak?','shu Taale3ak?','shu 7elemak?'], ans:0 },
  { q:'"Fa2l" means:', opts:['omen/good sign','destiny','luck','magic'], ans:0 },
  { q:'How do you say "your luck is very good"?', opts:['7azzak kteer mnii7','maa shaa allah 3leek','alla y7miik','el-3een 7a2ii2iyye'], ans:0 },
];

const AST_TIPS = [
  { title:'The evil eye — deeply embedded belief', body:'"3een" (عين) = eye/evil eye — belief in the evil eye ("al-3een") is widespread across Lebanese society, cutting across religion and education level. An envious glance can cause bad luck, illness, or misfortune. "Maa shaa allah" = MashaAllah — said immediately when complimenting someone to prevent the evil eye. "7asad" = envy — the act of casting the evil eye.' },
  { title:'Blue bead & Hamsa', body:'"Kharaze zar2a" (خرزة زرقاء) = blue bead — the blue glass evil-eye bead hangs in homes, cars, and on jewelry throughout Lebanon. "Kaff maryam" = Hand of Mary/Hamsa — the open palm symbol is found in Shia, Sunni, and Christian households alike. "7ijaab" (حجاب) = amulet (in this folk context) — verses from holy texts sewn into small bags as protection.' },
  { title:'Coffee cup reading — everyday ritual', body:'"Finjaan" (فنجان) = coffee cup — after drinking Arabic coffee, turning the cup upside down and reading the grounds ("2ara2t el-finjaan") is a popular Lebanese pastime. Women gather to read each other\'s cups. "Taale3" (طالع) = horoscope/fate — "Shu Taale3ik?" = what\'s your fortune? Professional cup readers operate in cafes across Beirut.' },
  { title:'Zodiac & horoscopes', body:'"Abraaj" (أبراج) = zodiac signs — Lebanese newspapers and TV shows dedicate significant space to horoscopes. "Burj" = sign/tower — "Shu burjak?" = what\'s your sign? Zodiac signs are often used to explain personality ("howe 3a2rab, shu biddak?" = he\'s a Scorpio, what do you expect?). "Najm" (نجم) = star — astrology columns are widely read.' },
  { title:'Sayings for protection & blessings', body:'"Alla y7miik" = God protect you (said after a compliment). "Maa shaa allah 3leek" = MashaAllah on you (highest protection phrase). "Alla yikhleek" = may God keep you (response to a compliment). Lebanese conversation is rich with protective phrases. Spitting three times (symbolically, "tfu tfu tfu") wards off evil eye in folk tradition.' },
  { title:'Dreams & omens', body:'"7elem" (حلم) = dream — dreams are taken seriously in Lebanese folk belief. "Fa2l" (فأل) = omen/good sign. "Bakht" (بخت) = destiny/luck — "Hada bakhto" = that\'s his destiny. "2ur3a" = draw/lottery — fate decided by chance. "Si7r" (سحر) = magic/sorcery — belief in magic spells is common; people visit sheikhs for "fatwa" against sorcery.' },
];
