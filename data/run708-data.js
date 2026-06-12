// R708 — NEW FEATURE: Lebanese Jewelry & Gold (jwl)
const JWL_CATS = [
  { id:'metals',  label:'⚱️ Metals & Materials' },
  { id:'pieces',  label:'💍 Jewelry Pieces' },
  { id:'shops',   label:'🏪 Shopping & Trade' },
  { id:'phrases', label:'💬 Phrases' },
];

const JWL_WORDS = [
  // metals & materials
  { ar:'ذهب',          tr:'dahab',           en:'gold',                    cat:'metals' },
  { ar:'فضة',          tr:'fiDDa',           en:'silver',                  cat:'metals' },
  { ar:'ألماس',        tr:'almaas',          en:'diamond',                 cat:'metals' },
  { ar:'لؤلؤ',         tr:'lu2lu2',          en:'pearl',                   cat:'metals' },
  { ar:'ياقوت',        tr:'yaa2uut',         en:'ruby',                    cat:'metals' },
  { ar:'زمرد',         tr:'zumurrud',        en:'emerald',                 cat:'metals' },
  { ar:'مرجان',        tr:'marjaan',         en:'coral',                   cat:'metals' },
  { ar:'عيار',         tr:'3iyaar',          en:'carat/karat',             cat:'metals' },
  // jewelry pieces
  { ar:'خاتم',         tr:'khaatim',         en:'ring',                    cat:'pieces' },
  { ar:'سوار',         tr:'siwaar',          en:'bracelet/bangle',         cat:'pieces' },
  { ar:'قلادة',        tr:'2alaade',         en:'necklace',                cat:'pieces' },
  { ar:'حلق',          tr:'7alaq',           en:'earrings',                cat:'pieces' },
  { ar:'دبلة',         tr:'dabble',          en:'wedding band/ring',       cat:'pieces' },
  { ar:'عقد',          tr:'3a2d',            en:'necklace/strand',         cat:'pieces' },
  { ar:'بروش',         tr:'broosh',          en:'brooch',                  cat:'pieces' },
  // shops & trade
  { ar:'صياغة',        tr:'Siyaagha',        en:'goldsmith/jewelry craft', cat:'shops' },
  { ar:'صائغ',         tr:'Saa2igh',         en:'goldsmith/jeweler',       cat:'shops' },
  { ar:'محل ذهب',      tr:'ma7all dahab',    en:'gold shop',               cat:'shops' },
  { ar:'وزن',          tr:'wazn',            en:'weight',                  cat:'shops' },
  { ar:'سعر',          tr:'si3r',            en:'price',                   cat:'shops' },
  { ar:'مهر',          tr:'mahr',            en:'dowry/bridal gift',       cat:'shops' },
  { ar:'هدية',         tr:'hadiyye',         en:'gift',                    cat:'shops' },
  // phrases
  { ar:'قديش العيار؟',    tr:'2addeesh el-3iyaar?',   en:'what is the karat?',          cat:'phrases' },
  { ar:'بدي خاتم ذهب',    tr:'biddi khaatim dahab',    en:'I want a gold ring',           cat:'phrases' },
  { ar:'هالذهب أصلي؟',    tr:'hal-dahab aSli?',        en:'is this gold genuine?',        cat:'phrases' },
  { ar:'كم العيار هالسوار؟', tr:'kam el-3iyaar hal-siwaar?', en:'what karat is this bracelet?', cat:'phrases' },
  { ar:'الذهب غالي هلق',   tr:'el-dahab ghali halla2',  en:'gold is expensive now',        cat:'phrases' },
  { ar:'من الصياغة اللبنانية', tr:'min el-Siyaagha l-lubnaaniyye', en:'from Lebanese craftsmanship', cat:'phrases' },
];

const JWL_DRILLS = [
  { q:'How do you say "gold"?', opts:['dahab','fiDDa','almaas','lu2lu2'], ans:0 },
  { q:'"Khaatim" means:', opts:['ring','bracelet','necklace','earrings'], ans:0 },
  { q:'What is "Saa2igh"?', opts:['goldsmith/jeweler','gold shop','karat','weight'], ans:0 },
  { q:'"3iyaar" means:', opts:['carat/karat','weight','price','gold'], ans:0 },
  { q:'How do you say "necklace"?', opts:['2alaade','siwaar','7alaq','broosh'], ans:0 },
  { q:'"Almaas" means:', opts:['diamond','pearl','ruby','emerald'], ans:0 },
  { q:'What is "dabble"?', opts:['wedding band/ring','ring','bracelet','necklace'], ans:0 },
  { q:'"Mahr" means:', opts:['dowry/bridal gift','gift','price','weight'], ans:0 },
  { q:'How do you say "earrings"?', opts:['7alaq','siwaar','2alaade','khaatim'], ans:0 },
  { q:'"Lu2lu2" means:', opts:['pearl','diamond','coral','ruby'], ans:0 },
  { q:'What is "Siyaagha"?', opts:['goldsmith/jewelry craft','gold shop','silver','jeweler'], ans:0 },
  { q:'"Zumurrud" means:', opts:['emerald','ruby','diamond','sapphire'], ans:0 },
  { q:'How do you say "silver"?', opts:['fiDDa','dahab','almaas','marjaan'], ans:0 },
  { q:'"Hadiyye" means:', opts:['gift','dowry','price','weight'], ans:0 },
  { q:'How do you say "is this gold genuine"?', opts:['hal-dahab aSli?','2addeesh el-3iyaar?','biddi khaatim dahab','el-dahab ghali halla2'], ans:0 },
];

const JWL_TIPS = [
  { title:'Gold in Lebanese culture', body:'"Dahab" (ذهب) = gold — in Lebanon, gold is not just jewelry but investment and insurance. Lebanese families store wealth in gold. Grandmothers give gold coins ("lira dahab") to grandchildren at birth. Gold jewelry is gifted at weddings, births, and Eid. The gold souks of Tripoli, Sidon, and Beirut\'s Hamra district are cultural landmarks.' },
  { title:'The Lebanese goldsmith tradition', body:'"Saa2igh" (صائغ) = goldsmith — Lebanese goldsmiths are renowned across the Arab world for their craftsmanship "Siyaagha". Beirut\'s old gold souks in Bab Idriss had hundreds of workshops. Lebanese jewelry makers emigrated to West Africa, the Gulf, and the Americas, establishing gold businesses globally. "Min el-Siyaagha l-lubnaaniyye" = from Lebanese craftsmanship — a mark of quality.' },
  { title:'Mahr — the bridal gold', body:'"Mahr" (مهر) = the Islamic dowry — traditionally paid in gold by the groom to the bride. In Lebanon, even Christian families often give gold as a wedding gift. Gold jewelry sets ("mashaghel") — necklace, bracelet, ring, earrings — are standard wedding gifts. "Dabble" (دبلة) = wedding band — exchanged at Lebanese civil and religious ceremonies.' },
  { title:'Karat system in Lebanon', body:'"3iyaar" (عيار) = karat/purity — Lebanese gold is sold by weight and karat. 21-karat gold is the Lebanese standard for jewelry (higher than European 18k). "2addeesh el-3iyaar?" = what is the karat? The daily gold price is posted in every gold shop. Lebanese gold has a distinctive warm yellow tone from the 21-karat purity.' },
  { title:'Precious stones & pearls', body:'"Almaas" (ألماس) = diamond, "lu2lu2" (لؤلؤ) = pearl — Lebanon historically traded in pearls from the Gulf. The Phoenicians traded "marjaan" (coral) and precious stones throughout the Mediterranean. "Yaa2uut" (ruby), "zumurrud" (emerald) — precious stones appear in traditional Lebanese jewelry. "Fiazza" (silver) = "fiDDa" — silver jewelry is popular for everyday wear.' },
  { title:'Gold shopping phrases', body:'"2addeesh el-3iyaar?" = what is the karat? "Biddi khaatim dahab" = I want a gold ring. "Hal-dahab aSli?" = is this gold genuine? "Kam el-3iyaar hal-siwaar?" = what karat is this bracelet? "El-dahab ghali halla2" = gold is expensive now (always said in Lebanese gold shops). "Wazn" = weight — gold price per gram is the starting point for all negotiations.' },
];
