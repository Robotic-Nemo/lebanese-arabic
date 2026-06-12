// Run #90 — Lebanese Sound Shift Coach (LSS)
// Drills the systematic phonological shifts MSA → Lebanese that apply *within
// the same word* (distinct from Run #60 DLC which drills different-word swaps
// like madha→shu). These are rules, not vocabulary: once learned, they generalize
// to any word. For MSA-trained learners (Duolingo, classical Arabic classes)
// these shifts are the highest-leverage pronunciation upgrade available.
//
// Distinct from Run #15 (generic alphabet drill): that's bottom-up letter-by-letter.
// This is top-down "given MSA, predict Lebanese".

const LSS_SHIFTS = [
  { id:'qaf',   ar:'ق', msa:'q',  lb:'2',    en:"Qaf → glottal stop",         rule:"MSA /q/ (deep-throat k) becomes Lebanese /ʔ/ (glottal stop, written '2'). Keep /q/ only in religious/formal contexts and a few fixed words like 'Qur2an' itself." },
  { id:'tha',   ar:'ث', msa:'th', lb:'t/s',  en:"Thaa → t or s",              rule:"Interdental /θ/ shifts: usually t (e.g. thalātha→tlēte), sometimes s (thalj→salj). Never kept as English 'th'." },
  { id:'dhal',  ar:'ذ', msa:'dh', lb:'d/z',  en:"Dhal → d or z",              rule:"Interdental /ð/ shifts: d in everyday words (hādhā→hayda), z in literate borrowings (dhahab→zahab)." },
  { id:'zha',   ar:'ظ', msa:'DH', lb:'Z',    en:"Zha → emphatic Z",           rule:"Emphatic interdental /ðˤ/ collapses to emphatic /zˤ/. Example: DHuhr→Zohr (noon)." },
  { id:'jim',   ar:'ج', msa:'j',  lb:'zh',   en:"Jim → soft zh (French j)",   rule:"MSA /d͡ʒ/ becomes Lebanese /ʒ/ (like French 'j' in 'jour'). A minority of speakers keep hard /d͡ʒ/." },
  { id:'imala', ar:'ا', msa:'ā',  lb:'ē',    en:"Imāla: long ā → ē",          rule:"MSA long /aː/ raises to /eː/ in most contexts. Example: bāb→bēb, kitāb→ktēb. Stronger near front-vowel contexts, weaker near emphatics." },
  { id:'tamarbuta', ar:'ة', msa:'-a', lb:'-e', en:"Tā marbūṭa → -e",           rule:"Final ة usually /-a/ in MSA, raised to /-e/ in Lebanese. Example: madrasa→madrase, qahwa→2ahwe. Stays /-a/ after emphatics (SalaH→SalaH)." },
  { id:'hamzaElide', ar:'أ', msa:'2', lb:'-',  en:"Initial hamza often elided", rule:"Word-initial hamza ء is typically dropped in casual speech. Example: 2ana→ana, 2akal→akal. Still written in Arabic script but silent." },
  { id:'caseEnding', ar:'ً', msa:'-an', lb:'-', en:"Case endings dropped",      rule:"MSA nominative -u(n), accusative -a(n), genitive -i(n) case suffixes are entirely absent from Lebanese. Exception: fixed adverbs like shukran (keeps -an), jeddan (keeps -an)." },
  { id:'shortVowel', ar:'ُ', msa:'u', lb:'o/e', en:"Short u → o or schwa",      rule:"MSA short /u/ often lowers to /o/ (kull→kell), or weakens to schwa in unstressed syllables. Rural/conservative dialects keep /u/ more." }
];

const LSS_PAIRS = [
  // qaf shift
  { id:'w1',  msa_ar:'قلب',    msa_tr:'qalb',    lb_ar:'قلب',    lb_tr:'2alb',    en:'heart',     shifts:['qaf'] },
  { id:'w2',  msa_ar:'قهوة',   msa_tr:'qahwa',   lb_ar:'قهوة',   lb_tr:'2ahwe',   en:'coffee',    shifts:['qaf','tamarbuta'] },
  { id:'w3',  msa_ar:'قريب',   msa_tr:'qarīb',   lb_ar:'قريب',   lb_tr:'2arīb',   en:'near',      shifts:['qaf'] },
  { id:'w4',  msa_ar:'وقت',    msa_tr:'waqt',    lb_ar:'وقت',    lb_tr:'wa2et',   en:'time',      shifts:['qaf'] },
  // tha shift
  { id:'w5',  msa_ar:'ثلاثة',  msa_tr:'thalātha',lb_ar:'تلاتة',  lb_tr:'tlēte',   en:'three',     shifts:['tha','imala','tamarbuta'] },
  { id:'w6',  msa_ar:'ثوم',    msa_tr:'thūm',    lb_ar:'توم',    lb_tr:'tūm',     en:'garlic',    shifts:['tha'] },
  { id:'w7',  msa_ar:'ثلج',    msa_tr:'thalj',   lb_ar:'تلج',    lb_tr:'talj',    en:'snow / ice',shifts:['tha'] },
  // dhal shift
  { id:'w8',  msa_ar:'هذا',    msa_tr:'hādhā',   lb_ar:'هيدا',   lb_tr:'hayda',   en:'this (m)',  shifts:['dhal','imala'] },
  { id:'w9',  msa_ar:'ذهب',    msa_tr:'dhahab',  lb_ar:'ذهب',    lb_tr:'zahab',   en:'gold',      shifts:['dhal'] },
  { id:'w10', msa_ar:'ذكي',    msa_tr:'dhakiyy', lb_ar:'ذكي',    lb_tr:'zake',    en:'smart',     shifts:['dhal'] },
  // zha shift
  { id:'w11', msa_ar:'ظهر',    msa_tr:'DHuhr',   lb_ar:'ظهر',    lb_tr:'Zohr',    en:'noon',      shifts:['zha','shortVowel'] },
  { id:'w12', msa_ar:'ظالم',   msa_tr:'DHālim',  lb_ar:'ظالم',   lb_tr:'Zēlem',   en:'unjust',    shifts:['zha','imala'] },
  // jim shift (note: many Leb speakers say /ʒ/, others keep /d͡ʒ/ — both valid)
  { id:'w13', msa_ar:'جميل',   msa_tr:'jamīl',   lb_ar:'جميل',   lb_tr:'zhmīl',   en:'beautiful', shifts:['jim'] },
  { id:'w14', msa_ar:'جار',    msa_tr:'jār',     lb_ar:'جار',    lb_tr:'zhār',    en:'neighbor',  shifts:['jim'] },
  // imala (long ā → ē)
  { id:'w15', msa_ar:'كتاب',   msa_tr:'kitāb',   lb_ar:'كتاب',   lb_tr:'ktēb',    en:'book',      shifts:['imala'] },
  { id:'w16', msa_ar:'باب',    msa_tr:'bāb',     lb_ar:'باب',    lb_tr:'bēb',     en:'door',      shifts:['imala'] },
  { id:'w17', msa_ar:'حار',    msa_tr:'ḥārr',    lb_ar:'حار',    lb_tr:'7ārr',    en:'hot',       shifts:[] /* emphatic blocks imala */ },
  // tamarbuta final -a → -e
  { id:'w18', msa_ar:'مدرسة',  msa_tr:'madrasa', lb_ar:'مدرسة',  lb_tr:'madrase', en:'school',    shifts:['tamarbuta'] },
  { id:'w19', msa_ar:'سيارة',  msa_tr:'sayyāra', lb_ar:'سيارة',  lb_tr:'sayyāra', en:'car',       shifts:[] /* emphatic blocks raise */ },
  { id:'w20', msa_ar:'مكتبة',  msa_tr:'maktaba', lb_ar:'مكتبة',  lb_tr:'maktabe', en:'library',   shifts:['tamarbuta'] },
  // hamza elision
  { id:'w21', msa_ar:'أنا',    msa_tr:'2ana',    lb_ar:'أنا',    lb_tr:'ana',     en:'I',         shifts:['hamzaElide'] },
  { id:'w22', msa_ar:'أكل',    msa_tr:'2akala',  lb_ar:'أكل',    lb_tr:'akal',    en:'he ate',    shifts:['hamzaElide','caseEnding'] },
  // case-ending loss (full MSA form)
  { id:'w23', msa_ar:'البيتُ', msa_tr:'al-baytu',lb_ar:'البيت',  lb_tr:'el-bayt', en:'the house (nom.)', shifts:['caseEnding'] },
  { id:'w24', msa_ar:'الكتابَ',msa_tr:'al-kitāba',lb_ar:'الكتاب',lb_tr:'el-ktēb',  en:'the book (acc.)',  shifts:['caseEnding','imala'] },
  // short u → o
  { id:'w25', msa_ar:'كلّ',    msa_tr:'kull',    lb_ar:'كل',     lb_tr:'kell',    en:'all / every', shifts:['shortVowel'] },
  { id:'w26', msa_ar:'أم',     msa_tr:'2umm',    lb_ar:'أم',     lb_tr:'emm',     en:'mother',      shifts:['hamzaElide','shortVowel'] }
];

// Exercises: given MSA pronunciation, pick the correct Lebanese form.
// Each exercise has 4 options drawn from real LSS_PAIRS (same-shift distractors first).
const LSS_EXERCISES = [
  { id:'e1',  pairId:'w1'  },
  { id:'e2',  pairId:'w2'  },
  { id:'e3',  pairId:'w4'  },
  { id:'e4',  pairId:'w5'  },
  { id:'e5',  pairId:'w6'  },
  { id:'e6',  pairId:'w7'  },
  { id:'e7',  pairId:'w8'  },
  { id:'e8',  pairId:'w9'  },
  { id:'e9',  pairId:'w10' },
  { id:'e10', pairId:'w11' },
  { id:'e11', pairId:'w12' },
  { id:'e12', pairId:'w13' },
  { id:'e13', pairId:'w14' },
  { id:'e14', pairId:'w15' },
  { id:'e15', pairId:'w16' },
  { id:'e16', pairId:'w18' },
  { id:'e17', pairId:'w20' },
  { id:'e18', pairId:'w21' },
  { id:'e19', pairId:'w22' },
  { id:'e20', pairId:'w23' },
  { id:'e21', pairId:'w24' },
  { id:'e22', pairId:'w25' },
  { id:'e23', pairId:'w26' },
  { id:'e24', pairId:'w3'  }
];

const LSS_TIPS = [
  "If you were taught MSA first, your biggest Lebanese upgrade is the qaf shift: ق → 2 (glottal stop). 'qalb' → '2alb', 'qahwa' → '2ahwe'.",
  "Interdentals (ث ذ ظ) don't exist in spoken Lebanese. Lebanese speakers map them to stops or sibilants: th→t/s, dh→d/z, DH→Z.",
  "Imāla: long ā raises toward ē, especially near front vowels (kitāb → ktēb, bāb → bēb). Blocked near emphatics (ḥārr stays ḥārr).",
  "Final tā marbūṭa ة goes from -a to -e in most contexts: madrasa → madrase, qahwa → 2ahwe. Stays -a after emphatics (sayyāra).",
  "Drop initial hamza in speech: 2ana → ana, 2akal → akal. The letter is still written; just silent.",
  "Forget MSA case endings entirely: al-baytu / al-bayta / al-bayti all become el-bayt in Lebanese. No noun takes -u/-a/-i suffixes.",
  "Short /u/ often lowers to /o/ or schwa: kull → kell, DHuhr → Zohr. Rural speakers keep /u/ more than urban Beirut."
];
