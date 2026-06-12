// R1293 — NEW FEATURE: Lebanese Youth Slang & Everyday Expressions (shb) — 20 phrases, 8 drills, 4 tips
const SHB_WORDS = [
  {ar:'عنجد', tr:'3anjad', en:'seriously / for real', note:'Universal filler in youth speech — means "really?", "I swear", or "honestly" depending on tone'},
  {ar:'بدي موت', tr:'biddi mout', en:'I\'m dying (hyperbole)', note:'Used when something is extremely funny, delicious, or amazing — not literal, pure hyperbole'},
  {ar:'مش عارف شو', tr:'mish 3arif shu', en:'don\'t know what / no idea', note:'Expresses confusion or exasperation — "I have no idea what\'s going on"'},
  {ar:'شو هالشي', tr:'shu hal-shi', en:'what IS this / OMG (amazed)', note:'Amazement or disbelief — "what even is this?" used for food, people, situations'},
  {ar:'ما عندي خلق', tr:'ma 3indi khala2', en:'can\'t be bothered / no mood', note:'خلق means mood/will — nothing to do with "creation"; signals emotional unavailability'},
  {ar:'بالكيف', tr:'bil-keyf', en:'leisurely / willingly / at ease', note:'Doing something at your own pleasure; also used sarcastically for someone taking too long'},
  {ar:'فل عني', tr:'fill 3anni', en:'get away from me / leave me', note:'Direct dismissal — فل means "clear off"; stronger than "leave me alone"'},
  {ar:'حياتي', tr:'7ayati', en:'my life (endearment)', note:'Can be used for anyone you love — not just romantic partners; extremely common'},
  {ar:'صح', tr:'sa77', en:'true / right / exactly', note:'Short agreement marker — used constantly like "yeah" or "true" in English'},
  {ar:'هلق', tr:'halla2', en:'now / right now', note:'The Lebanese equivalent of MSA الآن — universal in daily speech, always use this'},
  {ar:'نزلنا', tr:'nizilna', en:'we went out / let\'s go out', note:'نزل means "to go down" but colloquially means going out to socialize; reflects Beirut\'s geography'},
  {ar:'شايفك', tr:'shayifak', en:'I see what you\'re doing', note:'Used with a knowing smile — "I see you" in the catching/knowing sense, not physical sight'},
  {ar:'تعبت من', tr:'ti3ibt min', en:'I\'m tired of / fed up with', note:'Emotional exhaustion — very common expression of deep frustration with a person or situation'},
  {ar:'مشان شو', tr:'mshan shu', en:'why / what for', note:'More casual than ليش — especially in rhetorical questions like "mshan shu 3am ti3mal heyk?"'},
  {ar:'كتير بدو', tr:'ktir biddo', en:'wants too much / so demanding', note:'Complaining someone is high-maintenance; also "ktir biddik" = you\'re asking too much'},
  {ar:'كيفك عالآخر', tr:'kifak 3al-akhir', en:'how are you really / deep down', note:'More intimate than كيفك — asking for genuine emotional check-in, not just small talk'},
  {ar:'يزعل', tr:'yiz3al', en:'he\'ll get upset / he\'s sensitive', note:'From زعل (anger/hurt feelings) — a warning: "careful, he\'ll get upset about this"'},
  {ar:'بس هيك', tr:'bas heyk', en:'just like that / just because', note:'Expressing randomness or casual justification — "why did you do that?" "bas heyk"'},
  {ar:'شو يعني', tr:'shu ya3ni', en:'what does that even mean / like...', note:'Both filler AND genuine question — mirrors "like" in English teen speech; used constantly'},
  {ar:'لو بدي', tr:'law biddi', en:'if I wanted to / if I cared', note:'Implies capability without effort — "if I bothered, I could"; often a deflection'}
];

const SHB_DRILLS = [
  {q:'What does عنجد mean?', opts:['let\'s go','seriously / for real','I\'m tired','now'], a:1},
  {q:'How do you say "can\'t be bothered / no mood"?', opts:['ما عندي خلق','بدي موت','فل عني','شو هالشي'], a:0},
  {q:'بدي موت — what\'s the emotional register?', opts:['literal death wish','hyperbole for amazing/funny','extreme anger','sadness'], a:1},
  {q:'What does هلق mean?', opts:['yesterday','later','now / right now','maybe'], a:2},
  {q:'فل عني means...', opts:['come here','I love you','get away from me','how are you'], a:2},
  {q:'حياتي is used as...', opts:['a curse','a term of endearment','a question','a place name'], a:1},
  {q:'نزلنا colloquially means...', opts:['we fell down','we went out / socialized','we arrived','we ate'], a:1},
  {q:'شو يعني is closest to which English filler?', opts:['whatever','like... / I mean...','anyway','basically'], a:1}
];

const SHB_TIPS = [
  {title:'Lebanese Code-Switching', body:'Lebanese youth constantly mix Arabic, French, and English in one sentence. "3anjad c\'est incroyable hayde il-pizza" is completely normal. Don\'t worry about "mixing languages" — this three-way blend is authentic Lebanese identity, shaped by French mandate, American media, and Arab heritage all at once.'},
  {title:'The Art of Hyperbole', body:'Lebanese speech loves extremes. بدي موت (I\'m dying), بدي اكل إيدك (I want to eat your hand), تقبرني (may you bury me). These expressions of extreme feeling are signs of warmth, not drama. The more intense the expression, the more genuine the affection or enthusiasm.'},
  {title:'خلق vs. طاقة — Mood vs. Energy', body:'ما عندي خلق differs from ما عندي طاقة. خلق (khala2) means mood/willingness while طاقة means physical energy. Youth use خلق for emotional unavailability: "I have no خلق for this drama." It\'s about emotional reserves, not tiredness.'},
  {title:'Going Out: نزل (Going Down)', body:'نزلنا (we went out) reflects Beirut\'s vertical geography. Many Lebanese live in mountain neighborhoods above the city and literally "go down" to coastal Beirut for nightlife. The expression captures Lebanon\'s social geography — the city as a destination you descend to for living, not just existing.'}
];
