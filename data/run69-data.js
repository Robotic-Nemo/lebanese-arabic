// Run #69 — Dialogue Pragmatics Drill
// DPR_ITEMS: common Lebanese expressions whose surface translation differs
// from what the speaker actually means. Each item has a `sentence` (Arabic),
// `translit`, a `surface` (literal gloss), 4 `implications` (one correct, the
// rest plausible-but-wrong readings), and a `note` with cultural/pragmatic
// context. Drill trains pragmatic competence — the skill of reading subtext,
// not just words.

const DPR_ITEMS = [
  { id:'dp01', sentence:'ولا يهمك', translit:'wala yhimmak', surface:"Doesn't matter to you",
    implications:[
      { text:"I've got this handled, don't worry about it", correct:true },
      { text:"I'm upset with you but pretending not to be", correct:false },
      { text:"You need to fix this yourself right now", correct:false },
      { text:"I don't understand what you're asking", correct:false }
    ],
    note:"Polite brush-off / reassurance. Similar to 'no worries' — closes a concern without drama."
  },
  { id:'dp02', sentence:'بكرا الصبح', translit:"bukra eS-Sub7", surface:'Tomorrow morning',
    implications:[
      { text:"Sometime vague in the future, probably not literally tomorrow", correct:true },
      { text:"Precisely tomorrow at sunrise", correct:false },
      { text:"I don't want to do this at all", correct:false },
      { text:"Immediately right now", correct:false }
    ],
    note:"Rarely means a real tomorrow. Standard Lebanese 'I\\'ll get to it' deflection. Tone matters."
  },
  { id:'dp03', sentence:'إن شاء الله', translit:"inshallah", surface:'God willing',
    implications:[
      { text:'Probably yes — used as an affirmation or polite commitment', correct:true },
      { text:'Definitely no, just said for politeness', correct:false },
      { text:'Only used in religious contexts', correct:false },
      { text:'A formal farewell phrase', correct:false }
    ],
    note:"Context + intonation decide. Warm fast delivery = yes; slow flat delivery = probably not."
  },
  { id:'dp04', sentence:'شو هالقصة؟', translit:"shu hal-2iSSa?", surface:"What's this story?",
    implications:[
      { text:"What's going on here — I'm confused or disapproving", correct:true },
      { text:"Please tell me a bedtime story", correct:false },
      { text:"This is a long tale to hear later", correct:false },
      { text:"How is your health?", correct:false }
    ],
    note:"Idiomatic 'what\\'s up with this?' — usually implies mild disapproval or surprise."
  },
  { id:'dp05', sentence:'تكرم عيونك', translit:"tikram 3yunak", surface:'Your eyes are honored',
    implications:[
      { text:"Absolutely yes, with pleasure — I'll do it", correct:true },
      { text:"I'm complimenting your appearance", correct:false },
      { text:"Please don't ask me again", correct:false },
      { text:"I need to see an eye doctor", correct:false }
    ],
    note:"Standard enthusiastic yes to a favor request. Warmer than 'of course'."
  },
  { id:'dp06', sentence:'عن جد؟', translit:"3an jadd?", surface:'Seriously?',
    implications:[
      { text:"Confirming surprise — I want to make sure you really mean it", correct:true },
      { text:"A formal address to a grandfather", correct:false },
      { text:"Asking about something religious", correct:false },
      { text:"Requesting someone to stop talking", correct:false }
    ],
    note:"Equivalent of 'for real?' — used to confirm surprising news, not necessarily doubt it."
  },
  { id:'dp07', sentence:'ما في مشكلة', translit:"ma fi mishkilé", surface:'There is no problem',
    implications:[
      { text:"Sure, no issue — granting the request easily", correct:true },
      { text:"I'm hiding that there is actually a problem", correct:false },
      { text:"You created a problem for me", correct:false },
      { text:"Mathematics has no solutions", correct:false }
    ],
    note:"Common 'sure, np' response. Sincere in Lebanese most of the time."
  },
  { id:'dp08', sentence:'روق', translit:"rawwi2", surface:'Calm down / chill',
    implications:[
      { text:"Take it easy — you're getting too worked up", correct:true },
      { text:"Stand up and leave", correct:false },
      { text:"Drink something cold", correct:false },
      { text:"Agree with what I said", correct:false }
    ],
    note:"Imperative of رواق. Firm but affectionate — friends use it; strangers would soften."
  },
  { id:'dp09', sentence:'عم بمزح', translit:"3am bimza7", surface:'I am joking',
    implications:[
      { text:'What I said just now was not serious — playing it off', correct:true },
      { text:'I want to practice comedy professionally', correct:false },
      { text:'You are being annoying', correct:false },
      { text:"Tell me a joke please", correct:false }
    ],
    note:"Quick save after a remark that might\\'ve landed wrong. Often follows a sharp comment."
  },
  { id:'dp10', sentence:'شو بدي قلك', translit:"shu biddi 2illak", surface:'What do I want to tell you',
    implications:[
      { text:"I'm at a loss for words / can't express it — frustration or resignation", correct:true },
      { text:"I'm about to reveal a big secret", correct:false },
      { text:"I want you to tell me something", correct:false },
      { text:"Asking for a meeting appointment", correct:false }
    ],
    note:"Rhetorical sigh — speaker gives up trying to explain. Pair with a head shake."
  },
  { id:'dp11', sentence:'هيدا عادي', translit:"hayda 3ède", surface:'This is normal',
    implications:[
      { text:"Nothing special happened — don't make a big deal", correct:true },
      { text:"This is a regular customer", correct:false },
      { text:"I agree completely", correct:false },
      { text:"The food is bland", correct:false }
    ],
    note:"Dismisses concern or downplays a situation. Not cold — just relaxed."
  },
  { id:'dp12', sentence:'يا الله', translit:"yalla", surface:'O God',
    implications:[
      { text:"Let's go / come on / hurry up — action trigger", correct:true },
      { text:"Formal prayer opening", correct:false },
      { text:"Expression of deep grief", correct:false },
      { text:"An exclamation of surprise", correct:false }
    ],
    note:"The most versatile Lebanese word after 'inshallah'. Used for any 'let\\'s move' moment."
  },
  { id:'dp13', sentence:'قديش حلو', translit:"2addesh 7ilo", surface:'How beautiful / how sweet',
    implications:[
      { text:"Genuine compliment or — sarcastic if tone drops", correct:true },
      { text:"Asking the price of something", correct:false },
      { text:"Requesting sugar in coffee", correct:false },
      { text:"Apologizing for a mistake", correct:false }
    ],
    note:"Tone-dependent. Warm + rising = real compliment. Flat + falling = sarcasm."
  },
  { id:'dp14', sentence:'شو قصدك؟', translit:"shu 2aSdak?", surface:'What do you mean?',
    implications:[
      { text:"I heard you but I'm challenging or questioning your implication", correct:true },
      { text:"Please repeat louder — I didn't hear", correct:false },
      { text:"Tell me your destination", correct:false },
      { text:"I agree fully", correct:false }
    ],
    note:"Rarely a literal comprehension check. Usually confrontational — be careful."
  },
  { id:'dp15', sentence:'لك شو', translit:"lak shu", surface:"Hey, what",
    implications:[
      { text:"Informal attention-grab — 'hey man, check this out / listen'", correct:true },
      { text:"A grammatical question particle", correct:false },
      { text:"Offering something to eat", correct:false },
      { text:"Asking about a missed meeting", correct:false }
    ],
    note:"Very casual. Only for close friends — can sound rude to strangers."
  },
  { id:'dp16', sentence:'إجت معي', translit:"ijit ma3é", surface:'It came with me',
    implications:[
      { text:"I got lucky / it worked out for me", correct:true },
      { text:"Someone literally accompanied me", correct:false },
      { text:"I brought food along", correct:false },
      { text:"I agreed with someone", correct:false }
    ],
    note:"Idiom for 'fortune smiled on me'. Often about passing exams, job interviews, etc."
  },
  { id:'dp17', sentence:'بعدين منشوف', translit:"ba3den minshuf", surface:"Later we'll see",
    implications:[
      { text:"Deferral — could be legitimate delay or a soft 'no'", correct:true },
      { text:"We will visit someone tomorrow", correct:false },
      { text:"We will see a movie together", correct:false },
      { text:"Eye doctor appointment is scheduled", correct:false }
    ],
    note:"Classic non-commitment. Firm 'yes' sounds different — ask a follow-up if it matters."
  },
  { id:'dp18', sentence:'ما عليك', translit:"ma 3alek", surface:'Not on you',
    implications:[
      { text:"Don't worry about it — I'm letting you off / covering for you", correct:true },
      { text:"You are not responsible for your actions legally", correct:false },
      { text:"Refusing an offer of help", correct:false },
      { text:"Criticizing a weight gain", correct:false }
    ],
    note:"Similar to 'ولا يهمك' but leans more toward 'I\\'ll handle it so you don\\'t have to.'"
  },
];

const DPR_TIPS = [
  'Pragmatics > vocabulary: knowing the word is 30%; knowing when and why to use it is the other 70%.',
  'Tone changes meaning completely — "2addesh 7ilo" said warmly is a compliment; said flatly is sarcasm.',
  'Polite brush-offs ("wala yhimmak", "ma 3alek", "ma fi mishkilé") are usually sincere in Lebanese, not passive-aggressive.',
  '"inshallah" without enthusiasm = probably no. Match the other person\'s energy when using it.',
  '"yalla" is the universal action trigger — meetings, meals, departures, even hanging up the phone.',
  'Sharp-sounding questions like "shu 2aSdak?" are rarely literal — they signal challenge or offense.',
  'Deferral formulas ("bukra", "ba3den", "2arib") default to soft-no unless reinforced with a concrete time.',
];
