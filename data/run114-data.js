// Run #114 — Literal-vs-Contextual idiom drill (NEW FEATURE)
// Users see a Lebanese idiom + its LITERAL word-for-word gloss, then pick the
// actual figurative meaning from 3 options. Distractors include:
//   1. the literal reading (trap — obvious but wrong)
//   2. a plausible wrong gloss (semantic neighbor / false friend)
//   3. the real idiomatic meaning
// Trains learners to recognize when Lebanese Arabic uses metaphor, not just
// decode word-by-word.

const LIC_CATS = [
  { id: 'social', label: '👥 Social & judgment' },
  { id: 'mood',   label: '😊 Mood & feeling' },
  { id: 'time',   label: '⏰ Time & pace' },
  { id: 'action', label: '🏃 Action & agency' }
];

const LIC_IDIOMS = [
  // social & judgment
  { id:'s1', cat:'social', ar:'عينك ميزانك', tr:'3einak mizanak',
    literal:'Your eye is your scale.',
    correct:'Trust your own judgment.',
    distractors:['Look carefully at the scale when weighing things.','Your eyesight is as sharp as a precision balance.'],
    note:'Advice given when someone asks "how much should I take?" — meaning "use your own estimate, you\'ll know what\'s right."' },
  { id:'s2', cat:'social', ar:'بيفهمها وهي طايرة', tr:'byefhamha w hiye Tayra',
    literal:'He understands it while it\'s [still] flying.',
    correct:'He catches on extremely fast.',
    distractors:['He gets distracted by things in the air.','He only understands topics about birds or airplanes.'],
    note:'Positive — a sharp, quick-witted person. "Catches a hint before it lands."' },
  { id:'s3', cat:'social', ar:'ما بيخلي حجر ما يقلبو', tr:'ma bikhalli 7ajar ma i2allbo',
    literal:'He doesn\'t leave a stone he doesn\'t flip.',
    correct:'He searches/tries everything exhaustively.',
    distractors:['He trips over rocks constantly.','He is a stonemason by trade.'],
    note:'English has the cognate "leaves no stone unturned" — rare case where literal & figurative map 1:1 across languages.' },
  { id:'s4', cat:'social', ar:'ما بيعرف كوعو من بوعو', tr:'ma bya3ref ku3o min bu3o',
    literal:'He doesn\'t know his elbow from his forearm.',
    correct:'He is completely clueless / has no idea what he\'s doing.',
    distractors:['He has an injury that confuses his arm anatomy.','He\'s very flexible and can bend both ways.'],
    note:'Cognate to English "doesn\'t know his ass from his elbow." Mild insult, common.' },
  { id:'s5', cat:'social', ar:'ايدو مش عم تمشي', tr:'eedo mesh 3am temshi',
    literal:'His hand isn\'t walking.',
    correct:'He has no money right now (cash flow is tight).',
    distractors:['His hand is injured.','He isn\'t signing contracts anymore.'],
    note:'Money "walks" through the hand in Lebanese metaphor — if the hand isn\'t walking, nothing\'s flowing out. Used softly to decline spending.' },

  // mood & feeling
  { id:'m1', cat:'mood', ar:'قلبي معلق', tr:'2albi m3alla2',
    literal:'My heart is hanging [suspended].',
    correct:'I\'m anxious / worried about something.',
    distractors:['I\'m in love.','I have a heart condition.'],
    note:'Hanging = not resting on its place = worry. Common for parents waiting for kids to come home.' },
  { id:'m2', cat:'mood', ar:'نفسي مقطوعة', tr:'nafsi ma2Tu3a',
    literal:'My breath/soul is cut [off].',
    correct:'I\'ve completely lost my appetite / enthusiasm.',
    distractors:['I\'m out of breath from running.','I\'m dying — this is a death threat.'],
    note:'"nafs" = breath/soul/appetite polysemy. Context is usually food or motivation, rarely dramatic.' },
  { id:'m3', cat:'mood', ar:'دمو تقيل', tr:'dammo t2il',
    literal:'His blood is heavy.',
    correct:'He is unpleasant / annoying to be around.',
    distractors:['He has high blood pressure.','He moves slowly.'],
    note:'"dam khafif" (light blood) = charming/fun, "dam t2il" (heavy blood) = unpleasant. Universal Lebanese personality judgment.' },
  { id:'m4', cat:'mood', ar:'عم يطلعلي روحي', tr:'3am yeTla3li ru7i',
    literal:'My soul is rising out to me.',
    correct:'He\'s exhausting me / driving me crazy.',
    distractors:['I\'m becoming spiritually enlightened.','I\'m about to die.'],
    note:'Exasperation idiom — said about a difficult person, child, or situation draining your patience.' },
  { id:'m5', cat:'mood', ar:'قلبي انفطر', tr:'2albi nfaTar',
    literal:'My heart split open.',
    correct:'I felt deep sorrow / my heart broke.',
    distractors:['I had a medical cardiac event.','I became extremely hungry.'],
    note:'"fTar" = split/break-fast; same root. Emotional idiom, not medical.' },

  // time & pace
  { id:'t1', cat:'time', ar:'على مهلك', tr:'3ala mahlak',
    literal:'On your pace.',
    correct:'Take it easy / slow down, no rush.',
    distractors:['At your own expense.','Quickly, before I get angry.'],
    note:'Common polite brake-pump: said to someone rushing or getting worked up. Literal and contextual diverge subtly.' },
  { id:'t2', cat:'time', ar:'من وقتها', tr:'min wa2ta',
    literal:'From her/its time.',
    correct:'Since then / ever since.',
    distractors:['From a long time ago.','Exactly on time.'],
    note:'The "her" is an abstract prior moment. Temporal reference, not personal.' },
  { id:'t3', cat:'time', ar:'عالماشي', tr:'3al-meshi',
    literal:'On the walking.',
    correct:'On the go / hastily / en route.',
    distractors:['By foot (not by car).','At a slow walking pace.'],
    note:'"Something 3al-meshi" = done in passing, not focused. Contrast: walking *slowly* = 3ala mahlak.' },
  { id:'t4', cat:'time', ar:'بعد شوي', tr:'ba3d shwayy',
    literal:'After a little.',
    correct:'In a little while / shortly.',
    distractors:['After a small child [arrives].','After only a tiny amount.'],
    note:'"shwayy" = a little (time or quantity). Context disambiguates — here temporal.' },
  { id:'t5', cat:'time', ar:'يومياتي معو', tr:'yawmeyyeti ma3o',
    literal:'My dailies are with him.',
    correct:'I deal with him every single day (usually said in frustration).',
    distractors:['My diary is about him.','My salary is paid by him.'],
    note:'"yawmeyyeh" = daily/diary/day-wages — polysemy. Tone is usually exasperated, like "ugh, every day with this guy."' },

  // action & agency
  { id:'a1', cat:'action', ar:'بلش يفتي', tr:'ballash yefti',
    literal:'He started to issue fatwas.',
    correct:'He started giving unsolicited opinions/lectures.',
    distractors:['He converted to Islam and became a cleric.','He started answering religious questions professionally.'],
    note:'Mildly sarcastic — "fatwa" (religious ruling) used figuratively for anyone laying down the law on a topic they\'re not qualified for.' },
  { id:'a2', cat:'action', ar:'شد حيلك', tr:'shedd 7ilak',
    literal:'Pull/tighten your strength.',
    correct:'Pull yourself together / give it your best effort.',
    distractors:['Flex your muscles to show strength.','Lift something heavy.'],
    note:'Encouragement idiom. Coach/parent/friend saying "come on, push through."' },
  { id:'a3', cat:'action', ar:'راح عليي النوم', tr:'ra7 3aleyyi n-nom',
    literal:'Sleep went on me.',
    correct:'I lost my sleep / I couldn\'t sleep anymore.',
    distractors:['I overslept.','I went to sleep immediately.'],
    note:'"ra7 3ala-" = "went on [someone]" = lost, gone. Often used after a phone ringing or worry striking.' },
  { id:'a4', cat:'action', ar:'ما عندي خلق', tr:'ma 3endi khele2',
    literal:'I don\'t have creation.',
    correct:'I\'m not in the mood / I can\'t be bothered.',
    distractors:['I don\'t have children.','I don\'t have creative talent.'],
    note:'"khele2" (creation/mood) — Lebanese sense is mood/patience. Everyday decline: "no, ma 3endi khele2 la-hay l-7aki."' },
  { id:'a5', cat:'action', ar:'دق الباب للاخر', tr:'da22 l-beb la-l-akher',
    literal:'Knock on the door to the end.',
    correct:'Push something all the way to its limit / go all-in.',
    distractors:['Break the door down by force.','Knock until someone answers.'],
    note:'"la-l-akher" = to the end / all the way. Used for commitment: "whatever happens, da22 l-beb la-l-akher."' }
];

const LIC_TIPS = [
  'Idiom decoding is the #1 intermediate-learner bottleneck. Literal mapping (word-by-word) gets you the surface; cultural context gets you the meaning.',
  'Body-part idioms are everywhere: 3ein (eye) = attention/envy, 2alb (heart) = emotion/courage, dam (blood) = personality, nafs (soul/breath) = appetite/mood.',
  'Speed metaphors: "Tayra" (flying) = fast, "3al-meshi" (walking) = hasty/on-the-go, "3ala mahlak" (on your pace) = slow down. The pace is always implicit in the body-action verb.',
  'If an idiom sounds weirdly literal, it probably isn\'t. "dammo t2il" doesn\'t mean actual blood pressure — it means the person is unpleasant.',
  'When in doubt between literal and figurative, default to figurative. Lebanese speakers rarely describe anatomy or objects directly in conversation.',
  'Watch for polysemy traps: "nafs" = self/same/breath/soul/appetite depending on context. "khele2" = creation/mood. "yawmeyyeh" = daily/diary/day-wages. Idioms often hinge on the less-obvious sense.',
  'Some idioms DO map 1:1 to English ("leaves no stone unturned"). These are the exceptions, not the rule — always worth noting as cognates.',
  'Gesture + tone carry half the meaning. Learn an idiom in a video or audio clip before memorizing the translation.'
];
