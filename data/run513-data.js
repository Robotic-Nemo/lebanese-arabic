// R513 — Lebanese Body Language & Gestures (prefix: blg)
const BLG_WORDS = [
  // negation & refusal gestures
  {ar:'لا (بتكّة)', tr:'la2 (tukka)', en:'"No" — head tilts back + tongue-click "tsk" (the Lebanese no)', cat:'negation'},
  {ar:'ما في', tr:'ma fii', en:'"There is none" — upturned palm raised, slight shoulder shrug', cat:'negation'},
  {ar:'مش عارف', tr:'mish 3aarif', en:'"I don\'t know" — both palms up, shoulder shrug, slight tilt', cat:'negation'},
  {ar:'ما بيهمّني', tr:'ma byi7ammni', en:'"I don\'t care" — flat hand waved sideways dismissively', cat:'negation'},
  // patience & waiting gestures
  {ar:'استنّى', tr:'istanna', en:'"Wait / hold on" — hand pressed downward, palm facing floor', cat:'waiting'},
  {ar:'شويّ شويّ', tr:'shwayy shwayy', en:'"Slowly / easy does it" — hand patted slowly downward', cat:'waiting'},
  {ar:'بدّك وقت', tr:'biddak wa2t', en:'"You need time / be patient" — finger taps side of wrist (no watch needed)', cat:'waiting'},
  {ar:'هلق هلق', tr:'hala2 hala2', en:'"Right now right now" — rapid hand flutter forward (urgency)', cat:'waiting'},
  // quantity & agreement gestures
  {ar:'كتير', tr:'ktiir', en:'"A lot / too much" — fingers bunched, shaken or tapped repeatedly', cat:'quantity'},
  {ar:'شوي', tr:'shwayy', en:'"A little" — thumb and index finger pinched close together', cat:'quantity'},
  {ar:'نص نص', tr:'nuSS nuSS', en:'"Half and half / so-so" — flat hand rocked side to side', cat:'quantity'},
  {ar:'متل بعض', tr:'mitl ba3D', en:'"Same / similar" — two index fingers rubbed together side by side', cat:'quantity'},
  // excellence & approval
  {ar:'تمام', tr:'tamaam', en:'"Perfect" — OK sign (thumb-index circle) or thumbs up', cat:'approval'},
  {ar:'يعطيك العافية', tr:'ya3Tiik el 3aafye', en:'"Excellent work" — fingers pinched to lips then spread open (kissed fingers)', cat:'approval'},
  {ar:'على راسي', tr:'3a raasi', en:'"My pleasure / certainly" — hand flat, touched to forehead then gestured outward', cat:'approval'},
  {ar:'بصحّتك', tr:'bi Sa77tak', en:'"Cheers / to your health" — glass raise + eye contact (critical)', cat:'approval'},
  // frustration & disbelief
  {ar:'شو هالشي', tr:'shu hal-shi', en:'"What is this?!" — hands thrown up outward in disbelief', cat:'frustration'},
  {ar:'على شو', tr:'3ala shu', en:'"What for? / why?" — hand out, palm up, shaken side to side', cat:'frustration'},
  {ar:'بدّك تجنّن', tr:'biddak tjannin', en:'"You\'re driving me crazy" — finger circles at temple', cat:'frustration'},
  {ar:'كيف هيك', tr:'kiif heek', en:'"How so? impossible!" — chin rested on thumb, finger pointing upward', cat:'frustration'},
  // beckoning & directing
  {ar:'تعا', tr:'ta3a', en:'"Come here" — hand gestures DOWNWARD toward self (not upward/toward speaker)', cat:'directing'},
  {ar:'روح', tr:'ruu7', en:'"Go away" — hand flicked away, palm outward', cat:'directing'},
  {ar:'مين؟', tr:'miin?', en:'"Who? / me?" — finger pointed at own chest with quizzical look', cat:'directing'},
  {ar:'هوني', tr:'hoon', en:'"Right here" — index finger pointed down at ground twice', cat:'directing'},
  // emphasis & oath gestures
  {ar:'والله', tr:'walla', en:'"I swear to God" — index finger raised, other hand on chest', cat:'emphasis'},
  {ar:'على عيني', tr:'3a 3ayni', en:'"On my eyes" — two fingers touch under eye then gesture outward', cat:'emphasis'},
  {ar:'حياتك', tr:'7ayaatak', en:'"On your life" — pointing at person while touching own heart', cat:'emphasis'},
  {ar:'ما في مشكلة', tr:'ma fii mushkile', en:'"No problem" — both hands waved outward, palms forward', cat:'emphasis'},
  // size & distance
  {ar:'هيك كبير', tr:'heek kbiir', en:'"This big" — both hands spread apart showing size', cat:'size'},
  {ar:'بعيد', tr:'ba3iid', en:'"Far away" — arm extended fully, finger pointed to distance', cat:'size'},
  {ar:'أدّيه', tr:'2addeh', en:'"About this much" — thumb and index finger held up showing rough amount', cat:'size'},
  // common cultural gestures
  {ar:'ألا', tr:'2alla', en:'"Oh God / wow" — hand pressed to chest, head tilted in empathy', cat:'cultural'},
  {ar:'يسلموا', tr:'yislamu', en:'"Thank you / may they be blessed" — both hands joined at chest', cat:'cultural'},
  {ar:'صحتين', tr:'Sa7tein', en:'"Eat well / bon appétit" — said while gesturing toward food with open hand', cat:'cultural'},
  {ar:'بتعرف؟', tr:'bt3arraf?', en:'"You know? / get it?" — chin jut forward + raised eyebrows', cat:'cultural'},
];

const BLG_DRILLS = [
  {
    q: 'How do Lebanese people gesture "no" — and why must foreigners learn it?',
    opts: [
      'Head tilts BACK + "tsk" tongue-click — opposite of the Western head-shake',
      'Head shakes LEFT and RIGHT — same as in most Western countries',
      'Index finger wagged side to side — the pointing "no" gesture',
      'Both hands crossed in an X — showing refusal or rejection'
    ],
    ans: 0,
    note: 'The Lebanese "no" (لا) is a head tilt BACKWARD with a "tsk" tongue-click sound — completely opposite to Western head-shaking. Foreigners miss it constantly. If a Lebanese nods slightly upward and makes a click sound, they mean "no." This gesture can also mean "that\'s not possible" or "we don\'t have it." You\'ll see it at bakeries ("ma fii?" — "no we don\'t have it" — head tilt back), in taxis, and in any service context. Learn this before anything else.'
  },
  {
    q: 'What does the Lebanese "come here" gesture look like — and how is it different from Western usage?',
    opts: [
      'Hand gestures DOWNWARD toward the speaker — opposite of the Western upward curl',
      'Index finger curled upward toward the speaker — same as most Western countries',
      'Both hands waved toward the body, like sweeping something in',
      'Thumb pointed backward over shoulder toward a space behind'
    ],
    ans: 0,
    note: 'Lebanese "ta3a" (come) uses a hand gesture that faces DOWN and moves toward the speaker\'s body — not the upward curl common in Western countries. The palm faces down or inward, fingers point toward the floor, and the motion is pulling downward toward the speaker. Using the Western upward-finger curl can read as condescending in Lebanese culture. Watch Lebanese people call a waiter, call a child, or beckon someone across the street — it\'s always the downward-toward-body motion.'
  },
  {
    q: 'What does the "fingers bunched + shaken" gesture mean in Lebanese body language?',
    opts: [
      '"A lot / too much" — "ktiir" expressed through the bunched fingers gesture',
      '"Delicious / excellent" — the kissed fingers gesture for great food or work',
      '"Hurry up" — urgent motion telling someone to move faster',
      '"Money" — rubbing fingers together indicating a financial matter'
    ],
    ans: 0,
    note: 'Fingers bunched together and shaken (or tapped) = "ktiir" (a lot / too much). "Fii nas ktiir" (too many people) shown by bunched fingers shaken. For "a little" (shwayy), the opposite: thumb and index finger pinched very close together. These quantity gestures are so automatic that Lebanese use them even while on the phone (the caller can\'t see it, but the speaker gestures anyway). Hands are never still in Lebanese conversation.'
  },
  {
    q: 'What does "nuSS nuSS" (نص نص) look like as a gesture?',
    opts: [
      'Flat hand rocked from side to side — "half and half / so-so / mediocre"',
      'Two fists bumped together — showing equal balance between two things',
      'Index fingers crossed in an X — indicating a split decision',
      'Hand cut horizontally through air — dividing something in half'
    ],
    ans: 0,
    note: '"NuSS nuSS" (نص نص) = half and half — and the gesture is a flat hand rocked from side to side (same as the Italian "così così"). Used for "so-so" quality, split results, uncertain situations, or literal halves. "Shu 7aal el 7affle?" (how was the party?) — "nuSS nuSS" + hand rock = it was okay, not great. The gesture amplifies the ambivalence. "Walaw — nuSS nuSS" = "come on — it was only half good." Universal Lebanese answer to almost any evaluation question.'
  },
  {
    q: 'What does "mitl ba3D" (متل بعض) look like as a gesture?',
    opts: [
      'Two index fingers held side by side and rubbed together — "same / similar / alike"',
      'Two hands pressed palm to palm — showing perfect match',
      'Both arms crossed over the chest — indicating two things connected',
      'Index fingers pointed at each other from opposite sides — showing comparison'
    ],
    ans: 0,
    note: '"Mitl ba3D" (متل بعض) = similar / same — and the gesture is two index fingers extended side by side, rubbing or tapping together. "Heeh — mitl ba3D" (yes — they\'re similar) + gesture. Used to show similarity between two things, people, or situations. "Inta w hiyye mitl ba3D" = you and she are the same (in behavior). The gesture can precede or substitute the words entirely. Someone might gesture it without saying anything and you know: "roughly equivalent."'
  },
  {
    q: 'What is the "kissed fingers" gesture (يعطيك العافية) used for in Lebanon?',
    opts: [
      'Expressing something is excellent or delicious — fingers pinched to lips then spread open',
      'Saying goodbye — a kissing gesture directed toward someone leaving',
      'Swearing an oath — kissing fingers and then pressing them to the heart',
      'Greeting someone — a substitute for the cheek kiss in formal settings'
    ],
    ans: 0,
    note: 'The "kissed fingers" (fingers bunched, brought to lips, then spread outward) = excellent / delicious / well done. It accompanies "ya3Tiik el 3aafye" (may God give you health) when praising someone\'s work, or "ya salaam" when tasting good food. You\'ll see it at restaurants after a great dish, after a musician plays well, or when someone does something impressive. Not romantic in context — it\'s pure appreciation. Lebanese appreciation vocabulary is physical: the gesture makes it visceral.'
  },
  {
    q: 'What does the Lebanese "wait/calm down" gesture look like?',
    opts: [
      'Hand pressed downward, palm facing floor — "istanna / shwayy shwayy" (wait / slowly)',
      'Both palms raised toward the person — like stopping traffic',
      'Index finger pressed to lips — requesting silence',
      'Hand cupped behind ear — asking someone to speak louder'
    ],
    ans: 0,
    note: '"Istanna" (wait) and "shwayy shwayy" (slowly / easy) both use the same gesture: hand flat, palm facing DOWN, pressed slowly downward. It means "lower the energy / slow down / hold on." In Lebanese traffic, drivers use it to say "let me in." In conversations, it\'s "let me finish." In arguments, "calm down." The downward pressing motion is distinctly Mediterranean — it\'s the physical embodiment of "khallii el 7aal tamaam" (keep things calm). Never point up to say wait — that means something else.'
  },
  {
    q: 'What does "walla" (والله) look like as a physical gesture when used as an oath?',
    opts: [
      'Index finger raised upward + other hand pressed to chest — swearing by God',
      'Both hands pressed together in prayer — religious gesture of honesty',
      'Right hand placed flat on a surface — like swearing on a Bible',
      'Index finger and thumb rubbed together — showing conviction'
    ],
    ans: 0,
    note: '"Walla" (والله) = I swear by God. The gesture: one index finger raised toward the sky (God), the other hand pressed flat to the heart. Intensity varies: light "walla" (mild emphasis) to full gesture + eye contact (serious oath). "Walla ma 3arfet" (I swear I didn\'t know) — the gesture makes it credible. Lebanese conversation uses "walla" dozens of times daily as both emphasis ("really!") and oath ("I promise"). When the gesture accompanies it, the seriousness of the claim increases noticeably.'
  },
  {
    q: 'What does the Lebanese chin-jut + raised eyebrows gesture mean?',
    opts: [
      '"You know? / get it?" — a check-in asking if the listener understood or agrees',
      '"Look over there" — directing attention to something behind the listener',
      '"Are you serious?" — expressing disbelief at what was just said',
      '"What do you want?" — an impatient demand for the listener to state their request'
    ],
    ans: 0,
    note: 'Chin jutted slightly forward + eyebrows raised = "bt3arraf?" (you know? / do you get it?). A conversational check-in: "am I being understood?" Also used as "right?" seeking agreement. Lebanese speech is highly interactive — speakers check listener understanding constantly. The chin-jut is also used with "min?" (who?) to ask "which person?" non-verbally. Lebanese facial expressions carry enormous meaning — raised eyebrows alone have 5+ meanings depending on context. The face speaks as much as the words.'
  },
  {
    q: 'What does "3a raasi" (على راسي) look like as a gesture?',
    opts: [
      'Flat hand touched to forehead then gestured outward — "on my head / my pleasure"',
      'Both hands placed on top of head — showing overwhelming acceptance',
      'Hand patted on top of someone else\'s head — showing care and affection',
      'Index finger tapped to temple — indicating thinking or cleverness'
    ],
    ans: 0,
    note: '"3a raasi" (على راسي) = on my head — absolute willingness, my pleasure, I\'ll do it gladly. The gesture: flat hand touches the forehead (or top of head) and then gestures outward toward the person you\'re accepting the request from. "Laazim shi?" (need something?) "3a raasi!" + head-touch gesture = I\'m absolutely here for you. Placing something "on one\'s head" in Lebanese culture is the highest form of respect and commitment. Also used: "3a 3ayni w raasi" (on my eyes and head) = even stronger commitment.'
  },
];

const BLG_TIPS = [
  {
    title: 'Hands never stop in Lebanese conversation',
    body: 'Lebanese conversation is whole-body. Hands gesture continuously, facial expressions amplify every statement, head movements carry meaning. A Lebanese person sitting completely still while talking feels wrong — it reads as disengaged or upset. Gesture mirroring is automatic: when speaking with Lebanese people, matching their gesture energy (not copying exactly) signals engagement. If you want to be understood as present and enthusiastic in Lebanese conversation, move your hands. Stillness is interpreted as distance.'
  },
  {
    title: 'The critical: "no" gesture',
    body: 'Foreigners in Lebanon routinely miss the Lebanese "no." A head tilted slightly BACK + a "tsk" click = no / we don\'t have it / that\'s not possible. This is used everywhere: the bakery (ma fi jibneh? — tsk), the taxi (3al Hamra? — tsk, ana mish raaye7), the shop (fi hada? — tsk). If you ask something and see a Lebanese head tilt up and hear a click, the answer is no. The Western head-shake is understood but feels foreign. The tsk-tilt is automatic. Learning to recognize it prevents enormous confusion.'
  },
  {
    title: 'Eye contact rules',
    body: 'Lebanese eye contact is direct and sustained — much more than Northern European or East Asian norms. Looking away while being addressed can seem evasive or disrespectful. When making a toast ("kasak"), eye contact with each person is mandatory — skipping someone is a social slight. When swearing ("walla"), looking directly into the other person\'s eyes is part of the oath\'s credibility. Lebanese professional meetings: sustained eye contact signals confidence. Avoiding eye contact in negotiations reads as dishonesty. In contrast, staring is also contextually regulated — there are rules.'
  },
  {
    title: 'Cheek kissing protocol',
    body: 'Lebanese greeting kisses (men-women, women-women, or women-men depending on context): typically three kisses, alternating cheeks, starting right. Variations: some Lebanese do two, some do one, regional and family differences exist. Men greeting men: typically handshake, sometimes one-kiss or cheek-to-cheek. The critical: initiating the wrong greeting (going in for a kiss when a handshake was expected) creates awkwardness. Follow the other person\'s lead. Post-COVID, some Lebanese shifted to elbow-bumps or nods — flexibility matters. "Shu — ma fi bouse?" = "what, no kiss?" (mock complaint when skipped).'
  },
  {
    title: 'Gestures as emphasis, not decoration',
    body: 'Lebanese gestures are not decorative — they carry semantic content. "Walla" (swear) without the hand-on-heart is weaker. "Ktiir" (a lot) without the bunched fingers is less vivid. "3a 3ayni" (on my eyes) without touching under the eye carries less weight. When Lebanese people gesture, they\'re adding information, not just moving their hands. Learning gestures alongside vocabulary dramatically increases comprehension — you\'ll understand what someone means before you understand the words. Gesture is a layer of Lebanese Arabic as real as any grammatical structure.'
  },
];

const BLG_ABOUT = `
<p><strong>🤲 Lebanese Body Language & Gestures</strong></p>
<p>Lebanese conversation is never just words. The head, hands, face, and torso all carry meaning — sometimes replacing words entirely, sometimes amplifying them beyond what language alone conveys. A Lebanese person saying "walla" (I swear) while pressing a hand to their chest and making eye contact is making a very different statement than saying the word alone.</p>
<p><strong>The most important gesture to learn:</strong> The Lebanese "no" — a head tilt BACKWARD and a tongue-click "tsk." Foreigners miss this constantly. If someone's head goes up and you hear a click, the answer is no. This single gesture, unlearned, causes more misunderstanding for visitors than any vocabulary gap.</p>
<p><strong>Hands are constant:</strong> Lebanese speakers gesture with both hands throughout conversation. Stillness reads as disengagement. The gestures carry quantity information (ktiir/shwayy = much/little), emotional intensity (walla with full gesture vs. without), and relational cues (3a raasi = absolute commitment). Learning them adds a whole channel of communication.</p>
<p><strong>Why this matters:</strong> Body language in Lebanon is culturally specific. The "come here" gesture goes DOWN, not up. The head-tilt is "no," not "I'm thinking." The finger-pinch can mean "perfect" or "be patient" depending on context. None of this is in any Lebanese Arabic textbook. It is learned by watching, by being in Lebanon, or — now — by studying it deliberately.</p>
`;
