// R534 — Lebanese Compliments & Romantic Expressions (prefix: flr)
const FLR_WORDS = [
  // appearance compliments
  {ar:'كتير حلو / حلوة', tr:'ktiir 7ilo / 7ilwe', en:'"Very handsome / beautiful" — the standard Lebanese appearance compliment. "Ktiir 7ilwe!" = she\'s so beautiful. Said freely and often.', cat:'looks'},
  {ar:'يي شو حلو', tr:'yii shu 7ilo', en:'"Wow so handsome/beautiful" — the "yii" adds impressed surprise. More enthusiastic than plain "ktiir 7ilo."', cat:'looks'},
  {ar:'ماشاالله عليك', tr:'ma shaa alla 3aleek', en:'"God willed it upon you" — protective compliment. ALWAYS say this with appearance compliments or risk the evil eye.', cat:'looks'},
  {ar:'ع القلب', tr:'3al 2alb', en:'"On the heart" — you look so good it touches the heart. Said spontaneously about someone looking especially attractive.', cat:'looks'},
  {ar:'عيونك بتوجع', tr:'3yiinak btuwja3', en:'"Your eyes are painful" — your eyes are so beautiful they hurt to look at. Lebanese hyperbole for stunning eyes.', cat:'looks'},
  {ar:'وجهك بيضوّي', tr:'wajhak biyDawwi', en:'"Your face lights up (the room)" — you have a radiant, glowing face. High compliment for someone with warm, bright energy.', cat:'looks'},
  {ar:'عمري شفت متلك', tr:'3omri shft mitlak', en:'"In my life I\'ve never seen anyone like you" — hyperbolic compliment for someone truly stunning or impressive.', cat:'looks'},
  // flirting expressions
  {ar:'بتشبهلي', tr:'btshabihli', en:'"You resemble my type / you\'re my type" — subtle flirting. Saying someone matches the image you carry of who you want.', cat:'flirt'},
  {ar:'ما شفت زيّك', tr:'ma shfet ziyyak', en:'"I\'ve never seen anyone like you" — stronger version. Implies this person is uniquely attractive or special to you.', cat:'flirt'},
  {ar:'بتجنّن', tr:'bitjannin', en:'"You\'re driving me crazy" — you\'re so attractive/charming you\'re making me lose my mind. Very Lebanese flirting expression.', cat:'flirt'},
  {ar:'عيني عليك', tr:'3eeni 3aleek', en:'"My eye is on you" — I\'ve noticed you, I\'m watching you (in an attracted way). Can be playful or romantic.', cat:'flirt'},
  {ar:'بحبّك', tr:'b7ibbak / b7ibbik', en:'"I love you" (m/f) — the direct expression. Lebanese use "b7ibbak" more casually between friends too, but romantically it\'s clear from context.', cat:'flirt'},
  {ar:'واوو', tr:'waaow', en:'"Wow" — Lebanese-pronounced English "wow." Said when someone looks especially good. Sometimes elongated: "waaaaow."', cat:'flirt'},
  // admiration / character
  {ar:'شخصيّتك كتير حلوة', tr:'shakhSiyytak ktiir 7ilwe', en:'"Your personality is very beautiful/lovely" — complimenting character, not just looks. More meaningful in Lebanese culture.', cat:'admire'},
  {ar:'كتير أكيد', tr:'ktiir akiid', en:'"Very confident/assured" — complimenting someone\'s self-assurance and composure. Highly valued quality.', cat:'admire'},
  {ar:'فيك كاريزما', tr:'fiik kaariizma', en:'"You have charisma" — direct charisma compliment. "Fiik kaariizma ktiir" = you have a lot of charisma.', cat:'admire'},
  {ar:'بتشعّ', tr:'bitshe33', en:'"You radiate / you glow" — you emit positive energy and warmth. Can be about looks OR personality.', cat:'admire'},
  {ar:'كتير ناضج / ناضجة', tr:'ktiir naaDij / naaDije', en:'"Very mature/developed" — admiring someone\'s mental or emotional maturity. Genuine compliment for depth of character.', cat:'admire'},
  // love & relationship
  {ar:'ما بقدر عيش بدونك', tr:'ma b2dir 3iish bidduunak', en:'"I can\'t live without you" — strong romantic declaration. Lebanese love intense emotional expression in relationships.', cat:'love'},
  {ar:'إنت كلّك', tr:'inta kullak / inti kullak', en:'"You are everything / you\'re complete" — saying someone is perfect, has it all. "Inti kullak!" = you\'re everything!', cat:'love'},
  {ar:'تاجي', tr:'taaji', en:'"My crown" — deeply affectionate term. Calling someone your crown = they are your highest honor and pride.', cat:'love'},
  {ar:'روحي', tr:'ruu7i', en:'"My soul" — very intimate term of endearment. "Ruu7i inta" = you are my soul. Used between partners and close family.', cat:'love'},
  {ar:'حياتي', tr:'7ayaati', en:'"My life" — calling someone your life. "7ayaati inti" = you are my life. Very Lebanese/Arabic romantic expression.', cat:'love'},
  {ar:'ضوء عيني', tr:'Daw 3eeni', en:'"Light of my eyes" — you are the light of my eyes. Ancient Arabic romantic expression still used in Lebanese.', cat:'love'},
  // dealing with compliments
  {ar:'الله يخلّيك', tr:'alla ykhallliik', en:'"May God keep you" — response to a compliment. Like saying "you\'re too kind, God bless you."', cat:'response'},
  {ar:'تسلم', tr:'tislam / tislami', en:'"May you be safe/well" — response to a compliment (m/f). Gracious, warm acknowledgment without false modesty.', cat:'response'},
  {ar:'الله يخلّي ع عيونك', tr:'alla ykhalli 3a 3yiinak', en:'"May God keep your eyes" — thanking someone for seeing/noticing you beautifully. Response to appearance compliment.', cat:'response'},
  {ar:'مبالغ / مبالغة', tr:'mbaali / mbaalie', en:'"You\'re exaggerating" — playful pushback on a compliment. Said with a smile, inviting the person to keep complimenting.', cat:'response'},
  // terms of endearment
  {ar:'حبيبي / حبيبتي', tr:'7abiib / 7abiibti', en:'"My love/darling" (m/f) — the most common Lebanese endearment. Used between couples, friends, family — extremely versatile.', cat:'endear'},
  {ar:'قمري', tr:'2amari', en:'"My moon" — calling someone your moon. Beautiful, poetic endearment used in Lebanese Arabic.', cat:'endear'},
  {ar:'عسلي / عسلتي', tr:'3asali / 3asalti', en:'"My honey" (m/f) — "honey" endearment, fully Lebanese. Sweeter and more intimate than "7abiib."', cat:'endear'},
  {ar:'كبد', tr:'kbad', en:'"Liver" — "kbaddi" = my liver. In Arabic culture the liver (not the heart) was the seat of love. Intimate, deep endearment.', cat:'endear'},
  {ar:'زهرتي', tr:'zahrti', en:'"My flower" — romantic endearment, calling someone your flower. More poetic, often used in songs and deeper romantic expression.', cat:'endear'},
];

const FLR_DRILLS = [
  {
    q: 'You\'re complimenting a Lebanese person on their appearance. Why MUST you add "ma shaa alla"?',
    opts: ['It\'s required by Lebanese law', 'To protect against the evil eye — complimenting without it risks bringing bad luck', 'It\'s a standard Lebanese greeting', 'To show you\'re a native speaker'],
    ans: 1,
    exp: '"Ma shaa alla" (God willed it) is a protective phrase that shields the person being admired from the evil eye. Complimenting someone\'s beauty directly without protection can bring bad luck in Lebanese culture. "Ma shaa alla, ktiir 7ilwe!" is the complete, proper way to give an appearance compliment.'
  },
  {
    q: 'A Lebanese person says "3yiinak btuwja3" about you. This means:',
    opts: ['There\'s something wrong with your eyes', 'Your eyes are so beautiful they\'re painful to look at', 'Your eyes look tired', 'You\'re giving me a headache'],
    ans: 1,
    exp: '"3yiinak btuwja3" = "your eyes are painful (to look at)" — Lebanese hyperbole for stunning eyes. The idea is that someone so beautiful causes a pleasurable ache. Lebanese romantic compliments are intensely poetic and often use metaphors of pain, fire, or madness to express attraction.'
  },
  {
    q: 'What\'s the Lebanese term of endearment that uses the word for "liver"?',
    opts: ['Qalbi (my heart)', 'Ruu7i (my soul)', 'Kbaddi (my liver)', 'Zahrti (my flower)'],
    ans: 2,
    exp: '"Kbaddi" = "my liver." In classical Arabic culture, the liver (not the heart) was considered the seat of love and deep emotion. Calling someone your liver is an ancient, intimate endearment that survived in Lebanese Arabic. It signals deeper intimacy than "7abiibti" and has a more traditional, emotional weight.'
  },
  {
    q: 'Someone compliments you in Lebanon with "ktiir 7ilo!" How do you respond gracefully?',
    opts: ['La2, ana mish 7ilo (no I\'m not beautiful)', 'Tislam / alla ykhallliik', 'Ma shaa alla 3aleek', 'Shu dakhlak? (none of your business)'],
    ans: 1,
    exp: '"Tislam" (may you be safe) or "alla ykhallliik" (may God keep you) are the gracious Lebanese responses to a compliment. False modesty ("no I\'m not!") sounds awkward in Lebanese culture. The warm response acknowledges the compliment and blesses the person giving it — both receive the goodness.'
  },
  {
    q: 'What does "bitjannin" mean when used as a flirting expression?',
    opts: ['You\'re clinically insane', 'You\'re driving me crazy / you\'re so attractive I\'m losing my mind', 'You\'re being ridiculous', 'Stop it, you\'re embarrassing me'],
    ans: 1,
    exp: '"Bitjannin" = "you\'re driving me crazy" from "jannin" (to madden). In Lebanese flirting, comparing attraction to madness is a compliment — you make me lose my senses. It\'s intense but playful. Similar to "inta majnuun!" but directed at attractiveness rather than actions.'
  },
  {
    q: 'Which of these is the most intimate Lebanese term of endearment?',
    opts: ['"7abiib" — used between anyone, friends included', '"Ruu7i" — my soul, for partners and very close family', '"Tislam" — gracious general response', '"3eeni 3aleek" — I\'ve noticed you'],
    ans: 1,
    exp: '"Ruu7i" (my soul) is among the most intimate endearments in Lebanese Arabic. While "7abiib" (my darling/love) is used widely between friends, colleagues, and family too, "ruu7i" carries deep intimacy — it means this person IS your soul, your essential being. Used between romantic partners and the closest family bonds.'
  },
  {
    q: 'Someone says "wajhak biyDawwi" to you. What are they saying?',
    opts: ['Your phone screen is too bright', 'Your face lights up the room / you have a radiant face', 'You need more sleep, you look pale', 'Turn off the lights, you\'re being dramatic'],
    ans: 1,
    exp: '"Wajhak biyDawwi" = "your face lights up (the room)" from "Dawwa" = to illuminate. It says the person\'s face emits light — a warm, radiant, glowing energy. Can refer to literal looks or the emotional warmth someone radiates. Very Lebanese way of expressing that someone makes a space better by being in it.'
  },
  {
    q: 'What\'s "taaji" and why is it such a meaningful Lebanese endearment?',
    opts: ['"My sun" — you are my source of light', '"My crown" — you are my highest honor and pride', '"My king" — a term of respect and admiration', '"My treasure" — you are precious to me'],
    ans: 1,
    exp: '"Taaji" = "my crown." Calling someone your crown means they are your highest honor — what you wear on your head, what represents your dignity and pride. In Lebanese culture where family honor matters deeply, being someone\'s "taaj" (crown) carries profound meaning. More powerful than "7abiib."'
  },
  {
    q: 'A Lebanese person says "mbaalie!" while smiling when you compliment them. They mean:',
    opts: ['They\'re genuinely offended', 'They\'re playfully saying you\'re exaggerating, invite you to keep going', 'They completely agree with your compliment', 'They can\'t hear you properly'],
    ans: 1,
    exp: '"Mbaalie" (exaggerating, f.) said with a smile is the Lebanese version of "oh stop it!" — a performative pushback that actually invites the compliment to continue. If someone truly wanted you to stop, they\'d say it without the smile. This is part of the Lebanese social dance around compliments — refuse a little, let them insist, enjoy the moment.'
  },
  {
    q: 'What\'s the key difference between "b7ibbak" between Lebanese friends vs. in a romantic context?',
    opts: ['There is no difference — it always means romantic love', '"B7ibbak" between friends means liking them; romantically it\'s love — context makes it clear', 'Friends say "b7ibbak" as an insult', 'Lebanese people never say "b7ibbak" to friends'],
    ans: 1,
    exp: '"B7ibbak/b7ibbik" is used both between close Lebanese friends (intense friendship love) and romantically. Lebanese emotional expression is high-intensity — friends say "b7ibbak" and mean it deeply but not romantically. Context (tone, relationship, setting) makes the meaning clear. This is why understanding Lebanese emotional culture matters — the words are big, and they\'re meant that way.'
  },
];

const FLR_TIPS = [
  {
    title: '👁️ Always protect compliments from the evil eye',
    body: 'In Lebanese culture, complimenting someone\'s appearance without "ma shaa alla" is considered incomplete at best, risky at worst. The evil eye (3een) — envy made physical — is a real belief for many Lebanese people. "Ma shaa alla 3aleek, ktiir 7ilo!" protects the compliment. Similarly, if someone compliments your child or possession, adding "ma shaa alla" yourself wards off potential envy. This isn\'t superstition to be polite about — it\'s deeply embedded in Lebanese social behavior.'
  },
  {
    title: '🔥 Lebanese romantic expression is intense — on purpose',
    body: 'Lebanese romantic and flirtatious language is characteristically intense and hyperbolic. Eyes that hurt to look at ("3yiinak btuwja3"), faces that emit light ("wajhak biyDawwi"), attraction described as madness ("bitjannin"), love expressed as "I can\'t live without you." This intensity isn\'t exaggeration — it\'s how Lebanese culture expresses genuine feeling. Understatement in emotional expression reads as cold or uninterested. When a Lebanese person says something dramatic, take it as a high compliment.'
  },
  {
    title: '💛 "7abiib" is not only romantic',
    body: '"7abiib" (darling/love) is used between Lebanese friends, family, colleagues, and romantic partners. A Lebanese man calling his male friend "7abiib" is expressing warm friendship. A Lebanese woman calling her female friend "7abiibti" is normal affection. The distinction is in context and behavior, not the word. This is why Lebanese people sometimes confuse non-Lebanese who aren\'t used to this level of verbal warmth between people who are "just friends."'
  },
  {
    title: '🎭 Compliment response: the dance of modesty',
    body: 'When complimented in Lebanon, the gracious response involves mild, smiling resistance followed by warm acceptance. "Mbaali!" (you\'re exaggerating) with a smile — then accepting the blessing "alla ykhallliik." Saying a flat "thank you" and moving on can feel cold. Insisting "no I\'m not!" too strongly is false modesty and awkward. The dance is: receive the compliment graciously, bless the person giving it, let it settle warmly. This exchange is a small ritual of mutual appreciation.'
  },
  {
    title: '📜 Ancient terms that survived: kbaddi, 2amari, ruu7i',
    body: 'Some Lebanese endearments are ancient Arabic poetry that survived in everyday speech. "Kbaddi" (my liver) — the liver was the seat of love in pre-Islamic Arab culture, predating the heart-as-love symbol. "2amari" (my moon) — calling a beloved your moon connects to ancient Arabic poetry where the moon was the highest beauty standard. "Daw 3eeni" (light of my eyes) appears in classical Arabic literature. Using these terms connects Lebanese speech to thousands of years of Arab poetic tradition.'
  },
];

const FLR_ABOUT = `<p><strong>💕 Lebanese Compliments & Romance — Intensity as a Love Language</strong></p>
<p>Lebanese emotional and romantic expression is characteristically high-intensity. Eyes that are "painful to look at," faces that "emit light," attraction described as madness, love declared as "I cannot live without you" — this isn't exaggeration. This is how Lebanese culture expresses genuine feeling.</p>
<p><strong>The evil eye and compliments:</strong> In Lebanese culture, admiring beauty without protection risks the evil eye. "Ma shaa alla" is not optional — it's the difference between a complete compliment and a potentially harmful one. Understanding this explains why Lebanese people automatically add protective phrases when appreciating beauty.</p>
<p><strong>"7abiib" is not a romantic word:</strong> Lebanese use "7abiib" (darling/love) between friends, family, and strangers. A shop owner calling you "7abiib" means warmth and service, not romance. But when a Lebanese person uses it in a romantic context, it's genuine — the word carries the full weight of what Arabic love poetry has put into it for centuries.</p>
<p><strong>Poetic inheritance:</strong> Terms like "kbaddi" (my liver — ancient seat of love), "2amari" (my moon — classical beauty standard), "ruu7i" (my soul), "Daw 3eeni" (light of my eyes) connect modern Lebanese speech to classical Arabic poetry. This isn't nostalgia — these words are alive in everyday Lebanese conversation.</p>
<p><strong>Responding to compliments:</strong> The Lebanese way of receiving compliments involves graceful acceptance with blessings back ("tislam," "alla ykhallliik"), mild playful resistance ("mbaali!"), and never flat rejection or flat acceptance. The compliment exchange is a ritual — both people leave it warmer than before.</p>`;
