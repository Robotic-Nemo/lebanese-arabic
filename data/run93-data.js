// Run #93 — Aspect Coach (ASP)
// Lebanese tense/aspect is built with a small set of auxiliaries (kān, 3am, ra7, b-)
// stacked on top of plain verbal forms. MSA-trained learners often collapse all
// presents into one or miss the kān-auxiliary constructions entirely. This run drills
// the seven core aspect slots on eight common verbs, all in 1sg to keep focus on
// the aspect marker rather than pronoun agreement.
//
// Distinct from Run #26/VTM (verb conjugation paradigm — walks a single verb across
// persons) and Run #60 DLC (MSA↔Leb lexicon swaps): this is the grid of
// auxiliary stacks that selects a time reference and inner-aspect shape per verb.

const ASP_TYPES = [
  { id:'present_hab',  label:'Habitual / simple present',   marker:'b-',           formula:'b- + present',          en:'I ___ / I always ___',  note:"Stative / habitual / gnomic present. 'b7ebb 2ahwe' = I love coffee." },
  { id:'present_prog', label:'Progressive present',          marker:'3am',          formula:'3am + b-present',       en:'I am ___ing (right now)', note:"Ongoing action *now*. '3am be7ki' = I'm speaking (now). Drop b- optional in some speakers: '3am e7ki'." },
  { id:'future',       label:'Future',                        marker:'ra7',          formula:'ra7 + subjunctive',     en:'I will ___',             note:"'ra7' (from rāye7) is the future particle. Can also appear as 7a- attached: '7arū7' = I'll go." },
  { id:'past',         label:'Simple past',                   marker:'—',            formula:'plain past',            en:'I ___ed',                note:"Bare perfective. No auxiliary." },
  { id:'past_hab',     label:'Past habitual ("used to")',     marker:'kān + b-',     formula:'kān + b-present',       en:'I used to ___',          note:"'kent be7ki 3arabe' = I used to speak Arabic. The kān conjugates for person; the main verb stays in b-present." },
  { id:'past_prog',    label:'Past progressive',              marker:'kān 3am',      formula:'kān + 3am + b-present', en:'I was ___ing',           note:"'kent 3am be7ki' = I was speaking. The 3am makes it ongoing-in-the-past, parallel to 3am-present." },
  { id:'pluperfect',   label:'Pluperfect ("had ___ed")',      marker:'kān + past',   formula:'kān + past',            en:'I had ___',              note:"'kent 7kēt' = I had spoken. Two past-tensed words stacked = event before another past event." }
];

// Eight high-frequency verbs, all in 1sg. ar = Arabic script; tr = chat-alphabet.
const ASP_ITEMS = [
  { id:'i1', verb_en:'speak', tr_past:'7kēt', tr_bpres:'be7ki', tr_subj:'e7ki',
    forms:{
      present_hab:  { ar:'بحكي',         tr:'be7ki' },
      present_prog: { ar:'عم بحكي',      tr:'3am be7ki' },
      future:       { ar:'رح حكي',       tr:'ra7 e7ki' },
      past:         { ar:'حكيت',         tr:'7kēt' },
      past_hab:     { ar:'كنت بحكي',     tr:'kent be7ki' },
      past_prog:    { ar:'كنت عم بحكي', tr:'kent 3am be7ki' },
      pluperfect:   { ar:'كنت حكيت',     tr:'kent 7kēt' }
    }
  },
  { id:'i2', verb_en:'go', tr_past:'re7t', tr_bpres:'brū7', tr_subj:'rū7',
    forms:{
      present_hab:  { ar:'بروح',         tr:'brū7' },
      present_prog: { ar:'عم بروح',      tr:'3am brū7' },
      future:       { ar:'رح روح',       tr:'ra7 rū7' },
      past:         { ar:'رحت',          tr:'re7t' },
      past_hab:     { ar:'كنت بروح',     tr:'kent brū7' },
      past_prog:    { ar:'كنت عم بروح', tr:'kent 3am brū7' },
      pluperfect:   { ar:'كنت رحت',      tr:'kent re7t' }
    }
  },
  { id:'i3', verb_en:'eat', tr_past:'akalt', tr_bpres:'bēkol', tr_subj:'ākol',
    forms:{
      present_hab:  { ar:'باكل',         tr:'bēkol' },
      present_prog: { ar:'عم باكل',      tr:'3am bēkol' },
      future:       { ar:'رح آكل',       tr:'ra7 ākol' },
      past:         { ar:'اكلت',         tr:'akalt' },
      past_hab:     { ar:'كنت باكل',     tr:'kent bēkol' },
      past_prog:    { ar:'كنت عم باكل', tr:'kent 3am bēkol' },
      pluperfect:   { ar:'كنت اكلت',     tr:'kent akalt' }
    }
  },
  { id:'i4', verb_en:'see', tr_past:'shefet', tr_bpres:'bshūf', tr_subj:'shūf',
    forms:{
      present_hab:  { ar:'بشوف',         tr:'bshūf' },
      present_prog: { ar:'عم بشوف',      tr:'3am bshūf' },
      future:       { ar:'رح شوف',       tr:'ra7 shūf' },
      past:         { ar:'شفت',          tr:'shefet' },
      past_hab:     { ar:'كنت بشوف',     tr:'kent bshūf' },
      past_prog:    { ar:'كنت عم بشوف', tr:'kent 3am bshūf' },
      pluperfect:   { ar:'كنت شفت',      tr:'kent shefet' }
    }
  },
  { id:'i5', verb_en:'know', tr_past:'3reft', tr_bpres:'ba3ref', tr_subj:'a3ref',
    forms:{
      present_hab:  { ar:'بعرف',         tr:'ba3ref' },
      present_prog: { ar:'عم بعرف',      tr:'3am ba3ref' },
      future:       { ar:'رح اعرف',      tr:'ra7 a3ref' },
      past:         { ar:'عرفت',         tr:'3reft' },
      past_hab:     { ar:'كنت بعرف',     tr:'kent ba3ref' },
      past_prog:    { ar:'كنت عم بعرف', tr:'kent 3am ba3ref' },
      pluperfect:   { ar:'كنت عرفت',     tr:'kent 3reft' }
    }
  },
  { id:'i6', verb_en:'write', tr_past:'ktabet', tr_bpres:'bektob', tr_subj:'ektob',
    forms:{
      present_hab:  { ar:'بكتب',         tr:'bektob' },
      present_prog: { ar:'عم بكتب',      tr:'3am bektob' },
      future:       { ar:'رح اكتب',      tr:'ra7 ektob' },
      past:         { ar:'كتبت',         tr:'ktabet' },
      past_hab:     { ar:'كنت بكتب',     tr:'kent bektob' },
      past_prog:    { ar:'كنت عم بكتب', tr:'kent 3am bektob' },
      pluperfect:   { ar:'كنت كتبت',     tr:'kent ktabet' }
    }
  },
  { id:'i7', verb_en:'hear', tr_past:'sme3et', tr_bpres:'besma3', tr_subj:'esma3',
    forms:{
      present_hab:  { ar:'بسمع',         tr:'besma3' },
      present_prog: { ar:'عم بسمع',      tr:'3am besma3' },
      future:       { ar:'رح اسمع',      tr:'ra7 esma3' },
      past:         { ar:'سمعت',         tr:'sme3et' },
      past_hab:     { ar:'كنت بسمع',     tr:'kent besma3' },
      past_prog:    { ar:'كنت عم بسمع', tr:'kent 3am besma3' },
      pluperfect:   { ar:'كنت سمعت',     tr:'kent sme3et' }
    }
  },
  { id:'i8', verb_en:'love', tr_past:'7abbēt', tr_bpres:'b7ebb', tr_subj:'7ebb',
    forms:{
      present_hab:  { ar:'بحب',           tr:'b7ebb' },
      present_prog: { ar:'عم بحب',        tr:'3am b7ebb' },
      future:       { ar:'رح حب',         tr:'ra7 7ebb' },
      past:         { ar:'حبيت',          tr:'7abbēt' },
      past_hab:     { ar:'كنت بحب',       tr:'kent b7ebb' },
      past_prog:    { ar:'كنت عم بحب',   tr:'kent 3am b7ebb' },
      pluperfect:   { ar:'كنت حبيت',      tr:'kent 7abbēt' }
    }
  }
];

// Exercises: prompt is an English sentence that pins down the aspect; the learner
// picks the Lebanese form that matches. Distractors are other aspects of the SAME
// verb — this forces the learner to focus on the auxiliary stack, not vocab.
const ASP_EXERCISES = [
  // speak
  { id:'ae1',  itemId:'i1', targetType:'present_prog', en:"I'm speaking Arabic (right now)" },
  { id:'ae2',  itemId:'i1', targetType:'past_hab',     en:'I used to speak Arabic' },
  { id:'ae3',  itemId:'i1', targetType:'past_prog',    en:'I was speaking Arabic' },
  // go
  { id:'ae4',  itemId:'i2', targetType:'future',       en:"I will go" },
  { id:'ae5',  itemId:'i2', targetType:'pluperfect',   en:'I had gone (before that)' },
  { id:'ae6',  itemId:'i2', targetType:'present_prog', en:"I'm going (right now)" },
  // eat
  { id:'ae7',  itemId:'i3', targetType:'past',         en:'I ate' },
  { id:'ae8',  itemId:'i3', targetType:'past_hab',     en:'I used to eat (every day)' },
  { id:'ae9',  itemId:'i3', targetType:'present_hab',  en:'I eat (regularly)' },
  // see
  { id:'ae10', itemId:'i4', targetType:'past_prog',    en:'I was seeing / watching' },
  { id:'ae11', itemId:'i4', targetType:'future',       en:'I will see' },
  { id:'ae12', itemId:'i4', targetType:'pluperfect',   en:'I had seen' },
  // know
  { id:'ae13', itemId:'i5', targetType:'present_hab',  en:'I know (it)' },
  { id:'ae14', itemId:'i5', targetType:'past_hab',     en:'I used to know' },
  { id:'ae15', itemId:'i5', targetType:'past',         en:'I knew / found out' },
  // write
  { id:'ae16', itemId:'i6', targetType:'present_prog', en:"I'm writing (right now)" },
  { id:'ae17', itemId:'i6', targetType:'future',       en:'I will write' },
  { id:'ae18', itemId:'i6', targetType:'pluperfect',   en:'I had written' },
  // hear
  { id:'ae19', itemId:'i7', targetType:'past',         en:'I heard' },
  { id:'ae20', itemId:'i7', targetType:'past_prog',    en:'I was listening / hearing' },
  // love
  { id:'ae21', itemId:'i8', targetType:'present_hab',  en:'I love (it) / I like (it)' },
  { id:'ae22', itemId:'i8', targetType:'past_hab',     en:'I used to love (it)' },
  { id:'ae23', itemId:'i8', targetType:'pluperfect',   en:'I had loved' },
  { id:'ae24', itemId:'i8', targetType:'past',         en:'I loved' }
];

const ASP_TIPS = [
  "Two presents: bare b-present = habitual ('b7ebb 2ahwe' = I love coffee); 3am + b-present = progressive ('3am beshrab 2ahwe' = I'm drinking coffee now).",
  "Future = ra7 + subjunctive (bare imperfect, no b-). 'ra7 rū7' not 'ra7 brū7'. A contracted 7a- exists: '7arū7' = I'll go.",
  "kān is the universal past-shifter. Pair it with b-present = 'used to', with 3am-present = 'was ___ing', with past = pluperfect.",
  "kān always conjugates for person (kent, kenti, kān, kānet, kenna, kentu, kēno). The main verb shape is what you'd pick for the corresponding present/past.",
  "The subjunctive (bare imperfect, no b-) is what you use after ra7, lāzim, bedd, btrīd — and as the inner verb after la + imperative negation.",
  "Don't confuse 3am (progressive particle) with 3am (year) or 3amm (uncle / general). Context disambiguates.",
  "Stative verbs (7ebb, a3ref, bedd) usually stay in bare b-present even in 'now' contexts — '3am ba3ref' is rare; 'ba3ref' covers 'I know it now'."
];
