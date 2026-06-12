// Run #126 — Conversation Gap-Fill drill (NEW FEATURE)
// Short 3-4 turn Lebanese dialog with ONE turn blanked out. User picks
// the correct Lebanese response from 3 options (correct + 2 distractors).
// Distractors are drawn from real Lebanese — same general register — so
// the drill tests *contextual* appropriateness, not just vocabulary.
// Prefix: cvg. Scenarios: cafe, taxi, greeting, shop, phone, doctor,
// home, street. Rotation target: pragmatic fluency — what do you actually
// say when the other person just said X?

const CVG_CATS = [
  { id:'greet',  label:'👋 Greetings' },
  { id:'shop',   label:'🛒 Shopping' },
  { id:'food',   label:'🍽 Food & café' },
  { id:'travel', label:'🚕 Travel' },
  { id:'life',   label:'🏠 Home & daily' }
];

// Each item: context = 2-3 preceding turns + possibly 1 following turn.
// gap = the missing turn the user must supply. options = 3 candidate
// Lebanese utterances; exactly one is correct given the surrounding
// context; the other two are real Lebanese phrases that would fit
// *some* conversation but not THIS one. speaker = 'A' or 'B' indicates
// who is saying the missing line.
const CVG_ITEMS = [
  // ===== greetings =====
  { id:'cv1', cat:'greet',
    context:[
      { s:'A', ar:'مرحبا، كيفك؟', tr:'marhaba, kifak?', en:'Hi, how are you?' }
    ],
    gap:{ s:'B', ar:'منيح الحمد لله، وأنت؟', tr:'mneh l-hamdilla, w-inta?', en:'Fine, thank God. And you?' },
    distractors:[
      { ar:'قدّيش الساعة؟', tr:'addesh es-se3a?', en:'What time is it?' },
      { ar:'وين المطعم؟', tr:'wen el-maT3am?', en:'Where is the restaurant?' }
    ],
    note:'After "kifak?" the expected response is a status + reciprocal question. Time or location questions break the greeting flow.' },

  { id:'cv2', cat:'greet',
    context:[
      { s:'A', ar:'أهلا وسهلا! تفضّل', tr:'ahla w sahla! tfaDDal', en:'Welcome! Come in / please' },
      { s:'B', ar:'شكراً، الله يخليك', tr:'shukran, alla yikhallik', en:'Thanks, may God keep you' },
      { s:'A', ar:'شو بتشرب؟ قهوة ولا شاي؟', tr:'shu btishrab? ahwe walla shay?', en:'What will you drink? Coffee or tea?' }
    ],
    gap:{ s:'B', ar:'قهوة من فضلك', tr:'ahwe men faDlak', en:'Coffee please' },
    distractors:[
      { ar:'بدي أروح عالبيت', tr:'baddi ruh 3al-bet', en:'I want to go home' },
      { ar:'شو اسمك؟', tr:'shu esmak?', en:'What is your name?' }
    ],
    note:'"ahwe walla shay?" is a menu-style question — answer is one of the two. Going-home or asking-name both break conversational logic.' },

  { id:'cv3', cat:'greet',
    context:[
      { s:'A', ar:'يلا، باي، منشوفك', tr:'yalla, bye, minshufak', en:'OK, bye, see you' }
    ],
    gap:{ s:'B', ar:'باي، الله معك', tr:'bye, alla ma3ak', en:'Bye, God be with you' },
    distractors:[
      { ar:'مرحبا، كيفك؟', tr:'marhaba, kifak?', en:'Hi, how are you?' },
      { ar:'بكم هيدا؟', tr:'bi-kam hayda?', en:'How much is this?' }
    ],
    note:'"yalla bye" signals parting. Starting with "marhaba" mid-goodbye is wrong register; asking about price is scenario-mismatch.' },

  { id:'cv4', cat:'greet',
    context:[
      { s:'A', ar:'صباح الخير!', tr:'SabaH el-kher!', en:'Good morning!' }
    ],
    gap:{ s:'B', ar:'صباح النور', tr:'SabaH en-nur', en:'Morning of light (standard reply)' },
    distractors:[
      { ar:'مساء الخير', tr:'masa el-kher', en:'Good evening' },
      { ar:'تصبح على خير', tr:'tSbaH 3ala kher', en:'Good night (lit. wake on good)' }
    ],
    note:'"SabaH el-kher" ↔ "SabaH en-nur" is the classical formula pair. "masa el-kher" is the evening version; "tSbaH 3ala kher" is the bedtime formula.' },

  // ===== shopping =====
  { id:'cv5', cat:'shop',
    context:[
      { s:'A', ar:'أهلا، شو بتحب؟', tr:'ahla, shu bit-Hebb?', en:'Hi, what would you like?' }
    ],
    gap:{ s:'B', ar:'بدّي كيلو تفّاح من فضلك', tr:'baddi kilo tiffeH men faDlak', en:'I\'d like a kilo of apples please' },
    distractors:[
      { ar:'كيفك اليوم؟', tr:'kifak el-yom?', en:'How are you today?' },
      { ar:'بعرف شي', tr:'ba3rif shi', en:'I know something' }
    ],
    note:'In a shop "shu bit-Hebb" = "what do you want" → state what you want. Asking how they are delays the transaction; "ba3rif shi" is off-topic.' },

  { id:'cv6', cat:'shop',
    context:[
      { s:'A', ar:'بتدفع كاش ولا فيزا؟', tr:'btidfa3 cash walla visa?', en:'Paying cash or card?' }
    ],
    gap:{ s:'B', ar:'فيزا، تفضّل', tr:'visa, tfaDDal', en:'Card, here you go' },
    distractors:[
      { ar:'لا ما بدي', tr:'la ma baddi', en:'No I don\'t want' },
      { ar:'الحمد لله', tr:'el-Hamdilla', en:'Praise God' }
    ],
    note:'Binary cash-or-card question → answer one of the two. Refusing would be answered differently ("shukran, ma badd eshteri"); "Hamdilla" is a state reply.' },

  { id:'cv7', cat:'shop',
    context:[
      { s:'A', ar:'هيدي خمسة دولار', tr:'hayde khamse dolar', en:'This is five dollars' },
      { s:'B', ar:'خمسة؟ غالي شوي', tr:'khamse? ghali shway', en:'Five? A bit expensive' }
    ],
    gap:{ s:'A', ar:'بعمل لك حسم: أربعة', tr:'ba3mel-lak Hasem: arba3a', en:'I\'ll give you a discount: four' },
    distractors:[
      { ar:'شو اسمك؟', tr:'shu esmak?', en:'What is your name?' },
      { ar:'مرحبا فيك', tr:'marhaba fik', en:'Hello to you' }
    ],
    note:'After "ghali shway" (too expensive), the seller offers a discount. Name-asking breaks the price negotiation; "marhaba" is greeting register.' },

  // ===== food & café =====
  { id:'cv8', cat:'food',
    context:[
      { s:'A', ar:'جاهز تطلب؟', tr:'jehez tiTlob?', en:'Ready to order?' }
    ],
    gap:{ s:'B', ar:'آه، بدّي شاورما دجاج', tr:'ah, baddi shawarma djej', en:'Yes, I want a chicken shawarma' },
    distractors:[
      { ar:'كيف الطقس اليوم؟', tr:'kif eT-Ta2s el-yom?', en:'How is the weather today?' },
      { ar:'ما فهمت', tr:'ma fhimt', en:'I didn\'t understand' }
    ],
    note:'"jehez tiTlob?" = "ready to order?" → say what you want. Weather-talk and not-understanding both delay the order.' },

  { id:'cv9', cat:'food',
    context:[
      { s:'A', ar:'بتحبها حلوة ولا سادة؟', tr:'bt-Hebba Helwe walla sede?', en:'Do you like it sweet or plain?' }
    ],
    gap:{ s:'B', ar:'وسط، شكراً', tr:'wassat, shukran', en:'Medium (sweet), thanks' },
    distractors:[
      { ar:'لبنان حلو كتير', tr:'lebnen Helo ktir', en:'Lebanon is very nice' },
      { ar:'شو صار؟', tr:'shu Sar?', en:'What happened?' }
    ],
    note:'Lebanese coffee is ordered by sweetness (Helwe / wassat / sede). Off-topic compliments or "what happened" both miss the drink-choice question.' },

  { id:'cv10', cat:'food',
    context:[
      { s:'A', ar:'شو تاني؟', tr:'shu teni?', en:'Anything else?' },
      { s:'B', ar:'لأ، هيدا بكفّي', tr:'la2, hayda bikaffi', en:'No, that\'s enough' }
    ],
    gap:{ s:'B', ar:'قدّيش الحساب؟', tr:'addesh el-Hiseb?', en:'How much is the bill?' },
    distractors:[
      { ar:'فيني شوف الكتاب؟', tr:'fini shuf el-kteb?', en:'Can I see the book?' },
      { ar:'كيف بدي روح؟', tr:'kif baddi ruh?', en:'How do I go?' }
    ],
    note:'After "no, that\'s enough," you ask for the check. Asking for a book or directions is scene-mismatch for a café.' },

  // ===== travel =====
  { id:'cv11', cat:'travel',
    context:[
      { s:'A', ar:'سيرفيس؟ وين رايح؟', tr:'service? wen rayyeh?', en:'Service (shared taxi)? Where to?' }
    ],
    gap:{ s:'B', ar:'على الحمرا، بقدر؟', tr:'3al-Hamra, bi2dar?', en:'To Hamra, can I?' },
    distractors:[
      { ar:'شكراً، الله يعطيك العافية', tr:'shukran, alla ya3Tik el-3afye', en:'Thanks, may God give you health' },
      { ar:'منيح منيح', tr:'mneh mneh', en:'Good, good' }
    ],
    note:'Taxi driver asks destination → state destination. Gratitude-phrase or "good good" are appropriate in other turns but not here.' },

  { id:'cv12', cat:'travel',
    context:[
      { s:'A', ar:'قدّيش بدك؟', tr:'addesh baddak?', en:'How much do you want?' },
      { s:'B', ar:'عشرة ألف', tr:'3ashra alaf', en:'Ten thousand' }
    ],
    gap:{ s:'A', ar:'غالي كتير. تمانية بكفّي', tr:'ghali ktir. tmeniyye bikaffi', en:'Too expensive. Eight is enough' },
    distractors:[
      { ar:'بكم هيدا؟', tr:'bi-kam hayda?', en:'How much is this?' },
      { ar:'شكراً، باي', tr:'shukran, bye', en:'Thanks, bye' }
    ],
    note:'After seller names a price, buyer counter-offers. Asking "how much" again is a loop; saying "thanks bye" ends the negotiation prematurely.' },

  { id:'cv13', cat:'travel',
    context:[
      { s:'A', ar:'وقّفني هون، شكراً', tr:'wa22ifni hon, shukran', en:'Stop me here, thanks' }
    ],
    gap:{ s:'B', ar:'تفضّل، مع السلامة', tr:'tfaDDal, ma3 es-saleme', en:'Here you go, goodbye' },
    distractors:[
      { ar:'وين رايح؟', tr:'wen rayyeh?', en:'Where are you going?' },
      { ar:'بتحكي إنجليزي؟', tr:'btiHki inglizi?', en:'Do you speak English?' }
    ],
    note:'"wa22ifni hon" signals end of ride. Driver says goodbye; asking destination now is too late; asking about language is off-topic.' },

  // ===== home & daily =====
  { id:'cv14', cat:'life',
    context:[
      { s:'A', ar:'رنّ التلفون', tr:'rann et-telefon', en:'The phone rang' }
    ],
    gap:{ s:'B', ar:'بجاوب أنا', tr:'bjeweb ana', en:'I\'ll answer' },
    distractors:[
      { ar:'شو بدّك؟', tr:'shu baddak?', en:'What do you want?' },
      { ar:'يلا بسرعة', tr:'yalla b-sur3a', en:'Come on, quickly' }
    ],
    note:'"The phone rang" → someone says "I\'ll get it." Demanding or hurrying makes no sense as a response to a passive event statement.' },

  { id:'cv15', cat:'life',
    context:[
      { s:'A', ar:'حبيبي، كم الساعة؟', tr:'Habibi, kam es-se3a?', en:'Dear, what time is it?' }
    ],
    gap:{ s:'B', ar:'الساعة تلاتة ونص', tr:'es-se3a tlete w nuS', en:'It\'s three thirty' },
    distractors:[
      { ar:'شو الأكل اليوم؟', tr:'shu el-akel el-yom?', en:'What\'s for food today?' },
      { ar:'لا ما بحب', tr:'la ma bHebb', en:'No I don\'t like' }
    ],
    note:'"kam es-se3a?" is a time question. Food or preference responses are category mismatches.' },

  { id:'cv16', cat:'life',
    context:[
      { s:'A', ar:'بدّك شي من السوبرماركت؟', tr:'baddak shi men es-supermarket?', en:'Do you want anything from the supermarket?' }
    ],
    gap:{ s:'B', ar:'آه، جيب لي خبز وحليب', tr:'ah, jeeb-li khubz w Halib', en:'Yes, bring me bread and milk' },
    distractors:[
      { ar:'الساعة كم؟', tr:'es-se3a kam?', en:'What time is it?' },
      { ar:'وين البيت؟', tr:'wen el-bet?', en:'Where is the home?' }
    ],
    note:'Shopping-list request → list items or say no. Time or location questions drop the errand thread.' },

  { id:'cv17', cat:'life',
    context:[
      { s:'A', ar:'ليش ما رحت عالشغل اليوم؟', tr:'lesh ma reHet 3ash-shoghl el-yom?', en:'Why didn\'t you go to work today?' },
      { s:'B', ar:'كنت تعبان', tr:'kint ta3ben', en:'I was tired' }
    ],
    gap:{ s:'A', ar:'سلامتك، إرتاح', tr:'salemtak, irtaH', en:'Get well, rest' },
    distractors:[
      { ar:'قدّيش عمرك؟', tr:'addesh 3omrak?', en:'How old are you?' },
      { ar:'بحبّ البيتزا', tr:'bHebb el-pizza', en:'I love pizza' }
    ],
    note:'After someone says they\'re tired/sick, the Lebanese formula is "salemtak" (get well). Age or food preference are total derails.' },

  // ===== more greetings / social =====
  { id:'cv18', cat:'greet',
    context:[
      { s:'A', ar:'مبروك!', tr:'mabruk!', en:'Congratulations!' }
    ],
    gap:{ s:'B', ar:'الله يبارك فيك', tr:'alla ybarek fik', en:'God bless you (reply to mabruk)' },
    distractors:[
      { ar:'الله يعطيك العافية', tr:'alla ya3Tik el-3afye', en:'God give you health' },
      { ar:'الله يحميك', tr:'alla yiHmik', en:'God protect you' }
    ],
    note:'"mabruk" has a specific reply: "alla ybarek fik." The other two are real blessing formulas but fire for *different* triggers ("ya3Tik el-3afye" for work/effort, "yiHmik" for well-wishes).' },

  { id:'cv19', cat:'life',
    context:[
      { s:'A', ar:'الأكل طيّب كتير!', tr:'el-akel Tayyeb ktir!', en:'The food is very tasty!' }
    ],
    gap:{ s:'B', ar:'صحتين!', tr:'SaHHten!', en:'Double health (to the diner, after praise)' },
    distractors:[
      { ar:'بلا زحمة', tr:'bala zaHme', en:'Without crowding / no hassle' },
      { ar:'يا ريت', tr:'ya ret', en:'I wish / hopefully' }
    ],
    note:'When someone compliments the food, the Lebanese reply is "SaHHten" — wishes them good health for enjoying it. "bala zaHme" and "ya ret" are real phrases but fit different contexts.' },

  { id:'cv20', cat:'food',
    context:[
      { s:'A', ar:'شكراً كتير عالعزيمة', tr:'shukran ktir 3al-3ezime', en:'Thanks a lot for the invitation' }
    ],
    gap:{ s:'B', ar:'أهلاً وسهلاً، البيت بيتك', tr:'ahla w sahla, el-bet betak', en:'Welcome, the house is yours' },
    distractors:[
      { ar:'باي، منشوفك', tr:'bye, minshufak', en:'Bye, see you' },
      { ar:'شو بدك أخبرك؟', tr:'shu baddak ikhabbrak?', en:'What do you want me to tell you?' }
    ],
    note:'Classic Lebanese hospitality closure: "el-bet betak" = "the house is yours," extending hospitality. Direct goodbye cuts the warmth; the other option is non sequitur.' }
];

const CVG_TIPS = [
  'Conversation choice isn\'t just grammar — it\'s *register* (formal/casual), *turn logic* (question vs. answer), and *Lebanese formulae* (set responses to set phrases).',
  'Set-phrase pairs to memorize: SabaH el-kher → SabaH en-nur · mabruk → alla ybarek fik · SaHHten → (after food praise) · ya3Tik el-3afye → alla y3afik · ahla w sahla → ahla fik.',
  'When someone asks kifak / kif el-Hal, the expected shape is: [status word] + [thanks-to-God phrase] + [reciprocal question]. Examples: "mneh, l-Hamdilla, w-inta?" · "tamem, shukran, w-inti?"',
  'In shops and cafés, Lebanese transactions follow: greeting → request → clarification question → response → payment → thanks. Skipping a stage (e.g. saying goodbye before paying) marks non-native flow.',
  'Binary questions (sweet/plain, cash/card, yes/no) demand picking one option. The drill\'s hardest distractor is always a *plausible Lebanese phrase for another turn* — training you to notice context, not just translate words.',
  'The phrase "tfaDDal" is multi-purpose: "come in," "please," "here you go," "go ahead." Its meaning is always disambiguated by context — that flexibility is the hallmark of Lebanese hospitality speech.',
  'Hospitality formulae to collect: "el-bet betak" (my house is yours) · "SaHHten" (enjoy/double health) · "ma3 es-saleme" (with safety/goodbye) · "alla ya3Tik el-3afye" (may God give you health/strength).',
  'When in doubt, the neutral polite Lebanese response to almost any hospitality offer is "shukran, alla yikhallik" (thanks, may God keep you) — works in 80% of social scenarios.'
];
