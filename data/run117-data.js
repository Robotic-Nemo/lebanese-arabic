// Run #117 — Verb+Preposition Collocations drill (NEW FEATURE)
// Users see a Lebanese verb + English gloss + a sentence with the preposition blanked.
// They pick the correct preposition from 3 options (correct + 2 distractors).
// Goal: fix the #1 cross-language interference error where learners transfer
// English prepositions into Lebanese ("think about X" → wrong "fakkar about X").
// Note that Lebanese prepositions are highly polysemous and verb-dependent —
// the correct choice is often arbitrary from a learner's perspective and must
// be memorized as a unit with the verb.

const VPC_CATS = [
  { id: 'mental',   label: '🧠 Mental & thought' },
  { id: 'physical', label: '🚶 Physical & motion' },
  { id: 'social',   label: '🗣 Social & speech' },
  { id: 'emotion',  label: '❤️ Emotion & feeling' }
];

const VPC_PREPS = ['bi', 'fi', 'min', '3a', '3an', 'la', 'ma3', '3and'];

const VPC_ITEMS = [
  // mental & thought
  { id:'m1', cat:'mental', verb:'فكّر', verbTr:'fakkar', en:'to think about',
    correct:'bi', distractors:['3a','fi'],
    example:'عم فكّر ___ المشكلة.', exampleTr:'3am fakkar bi-l-meshkle.',
    exampleEn:"I'm thinking about the problem.",
    note:'"fakkar bi" = think ABOUT. Not "3a" (that would mean "think on" which doesn\'t exist). Classic EN→LB transfer trap: English "think about" would suggest "3an," but "3an" with fakkar means "to remind OF" someone.' },
  { id:'m2', cat:'mental', verb:'حلم', verbTr:'7elem', en:'to dream of/about',
    correct:'fi', distractors:['bi','3a'],
    example:'7elemet ___ beyti l-2adim.', exampleTr:'7elemet fi beyti l-2adim.',
    exampleEn:'I dreamed of my old house.',
    note:'"7elem fi" is the fixed form. "bi" would suggest "dream in" and is wrong here even though "fi" and "bi" overlap elsewhere.' },
  { id:'m3', cat:'mental', verb:'اتفاجأ', verbTr:'tfaja2',  en:'to be surprised by',
    correct:'min', distractors:['bi','3a'],
    example:'tfaja2et ___ jaweb-a.', exampleTr:'tfaja2et min jaweb-a.',
    exampleEn:'I was surprised by her answer.',
    note:'"tfaja2 min" — the cause of surprise gets "min" (from). English "by" → "min" for passive-like causes.' },
  { id:'m4', cat:'mental', verb:'نسي', verbTr:'nesi', en:'to forget about',
    correct:'—', distractors:['3an','fi'],
    example:'nsit mow3ad-na.', exampleTr:'nsit mow3ad-na.',
    exampleEn:'I forgot our appointment.',
    note:'TRAP: "nesi" takes a direct object, NO preposition. English "forget about X" does not map — "about" disappears. The dash "—" option is the correct one.' },
  { id:'m5', cat:'mental', verb:'شكّ', verbTr:'shakk', en:'to doubt/suspect',
    correct:'fi', distractors:['min','bi'],
    example:'shakk ___ kleme.', exampleTr:'shakk fi kleme.',
    exampleEn:'He doubted her words.',
    note:'"shakk fi" — the thing doubted takes "fi." "bi" is wrong; "min" would mean "from" the person, not doubt them.' },

  // physical & motion
  { id:'p1', cat:'physical', verb:'راح', verbTr:'ra7', en:'to go to',
    correct:'3a', distractors:['la','ila'],
    example:'r7et ___ l-mat3am.', exampleTr:'r7et 3a-l-mat3am.',
    exampleEn:'I went to the restaurant.',
    note:'"ra7 3a" is the default for "go to a place." "la" exists ("to/for") but is used for recipients/abstract destinations, not physical locations. "ila" is Modern Standard Arabic, sounds formal in Lebanese.' },
  { id:'p2', cat:'physical', verb:'طلع', verbTr:'Tele3', en:'to leave/exit from',
    correct:'min', distractors:['3an','3a'],
    example:'Tele3 ___ l-bet.', exampleTr:'Tele3 min l-bet.',
    exampleEn:'He left the house.',
    note:'"Tele3 min" = exit from. "Tele3 3a" means "go up to / climb to" — different verb sense.' },
  { id:'p3', cat:'physical', verb:'رجع', verbTr:'reje3', en:'to return to',
    correct:'3a', distractors:['la','min'],
    example:'reje3 ___ beyto.', exampleTr:'reje3 3a-beyto.',
    exampleEn:'He returned home.',
    note:'"reje3 3a" for location. "reje3 la-" is used in abstract senses ("returned to the topic"). "min" would mean "came back FROM," which requires "reje3 min."' },
  { id:'p4', cat:'physical', verb:'وقف', verbTr:'we2ef', en:'to stand on',
    correct:'3a', distractors:['fi','bi'],
    example:'we2ef ___ l-kersi.', exampleTr:'we2ef 3a-l-kersi.',
    exampleEn:'He stood on the chair.',
    note:'"we2ef 3a" for physical surface. Also "we2ef bi-bello" = "he stood in his way" (figurative).' },
  { id:'p5', cat:'physical', verb:'دخل', verbTr:'dakhal', en:'to enter',
    correct:'3a', distractors:['fi','la'],
    example:'dakhal ___ l-2uda.', exampleTr:'dakhal 3a-l-2uda.',
    exampleEn:'He entered the room.',
    note:'COUNTERINTUITIVE: "dakhal 3a" not "dakhal fi." Lebanese uses "3a" for entering a room/space where English/MSA would use "fi" or "to."' },

  // social & speech
  { id:'s1', cat:'social', verb:'حكى', verbTr:'7aka', en:'to talk to',
    correct:'ma3', distractors:['la','3a'],
    example:'7keet ___ akhuy.', exampleTr:'7keet ma3 akhuy.',
    exampleEn:'I talked to my brother.',
    note:'"7aka ma3" = spoke WITH (mutual). "7aka la-" can appear but implies a one-way message/report TO someone. English "talk to" → "ma3" most often.' },
  { id:'s2', cat:'social', verb:'اعتمد', verbTr:'i3tamad', en:'to depend on',
    correct:'3a', distractors:['bi','min'],
    example:'i3tamadt ___ nafs-i.', exampleTr:'i3tamadt 3a nafs-i.',
    exampleEn:'I relied on myself.',
    note:'"i3tamad 3a" — matches English "depend on." Common.' },
  { id:'s3', cat:'social', verb:'سأل', verbTr:'sa2al', en:'to ask about',
    correct:'3an', distractors:['3a','fi'],
    example:'sa2al ___ akhuk.', exampleTr:'sa2al 3an akhuk.',
    exampleEn:'He asked about your brother.',
    note:'"sa2al 3an" = ask ABOUT. "sa2al 3a" exists but is non-standard. The "3an" preposition mostly survives in fixed collocations — this is one of them.' },
  { id:'s4', cat:'social', verb:'التقى', verbTr:'elte2a', en:'to meet with',
    correct:'bi', distractors:['ma3','3a'],
    example:'elte2et ___ l-professor.', exampleTr:'elte2et bi-l-professor.',
    exampleEn:'I met the professor.',
    note:'FORMAL: "elte2a bi" is written/formal. In everyday speech, "shefto" (saw him) or "t3arraft 3alay" is more common. Keep this for formal register.' },

  // emotion & feeling
  { id:'e1', cat:'emotion', verb:'حب', verbTr:'7abb', en:'to love',
    correct:'—', distractors:['la','bi'],
    example:'b7ebb akhuy.', exampleTr:'b7ebb akhuy.',
    exampleEn:'I love my brother.',
    note:'TRAP: "7abb" takes a direct object — NO preposition. English "love for" does not transfer. The suffix pronoun attaches directly: b7ebb-ak = I love you.' },
  { id:'e2', cat:'emotion', verb:'خاف', verbTr:'khaf', en:'to be afraid of',
    correct:'min', distractors:['3a','3an'],
    example:'btkhaf ___ l-3atme.', exampleTr:'btkhaf min l-3atme.',
    exampleEn:'You are afraid of the dark.',
    note:'"khaf min" = afraid OF. But "khaf 3a" means "worried ABOUT" (someone\'s safety) — different meaning, same verb. Watch the preposition to decode which sense.' },
  { id:'e3', cat:'emotion', verb:'زعل', verbTr:'ze3el', en:'to be upset with',
    correct:'min', distractors:['3a','ma3'],
    example:'ze3let ___ rfi2t-a.', exampleTr:'ze3let min rfi2t-a.',
    exampleEn:'She got upset with her friend.',
    note:'"ze3el min" — the source of upset takes "min." Also common "ze3el 3a" which means "upset ON [behalf of]" (sympathizing), not with (directly).' },
  { id:'e4', cat:'emotion', verb:'اشتاق', verbTr:'shta2', en:'to miss/long for',
    correct:'la', distractors:['fi','min'],
    example:'shta2t ___ immi.', exampleTr:'shta2t la-immi.',
    exampleEn:'I missed my mother.',
    note:'"shta2 la-" — the object of longing takes "la." One of the few everyday uses of "la-" as an emotional-object marker.' },
  { id:'e5', cat:'emotion', verb:'فرح', verbTr:'feri7', en:'to be happy about',
    correct:'bi', distractors:['min','3a'],
    example:'fri7t ___ l-khabar.', exampleTr:'fri7t bi-l-khabar.',
    exampleEn:'I was happy about the news.',
    note:'"feri7 bi" = happy ABOUT/FOR. "bi" is the "in/with" preposition doing a causative-emotional role here.' }
];

const VPC_TIPS = [
  'Verb+preposition pairs are memorized as units, not derived from the preposition\'s "general" meaning. "fakkar bi" (think about) and "fakkar fi" (rare, formal) pair a single verb with different preps for similar-but-not-identical senses.',
  'The zero-preposition case is a real answer. Verbs like "7abb" (love), "nesi" (forget), "shef" (see) take direct objects — the English "about/for" does not map to any Lebanese preposition.',
  'Lebanese "3a" often replaces MSA "ila" (to) and MSA "fi" (in/at/on) — contracting them both into one hyper-productive preposition. When in doubt for location or direction, try "3a" first.',
  '"ma3" vs "la-" in speech: "7aka ma3" = spoke WITH (two-way), "7aka la-" = spoke TO (one-way message). Subtle but the mutuality flag matters.',
  '"3an" survives only in fixed collocations (sa2al 3an, tkallam 3an, 2aree2 3an). Do not productively use "3an" — if unsure, pick another preposition and you\'ll likely be more natural.',
  '"min" covers English "from/of/out of/by" — agent of passive ("tfaja2 min"), source of departure ("Tele3 min"), cause of emotion ("ze3el min"), comparative basis ("a7san min").',
  'False friend: English "to X" does not always become Lebanese "la-X." For physical destinations, use "3a-X." "la-" is mostly for recipients, dative relations, or abstract goals.',
  'When you see "la-[person]" after an emotion verb, it\'s usually "longing/missing/wishing" — "shta2 la-, 2albi 3ala (sympathy), btmanna la-" (I wish for). Emotional dative construction.'
];
