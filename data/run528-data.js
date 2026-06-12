// R528 — Lebanese Francoarabic & Code-Switching (prefix: frc)
const FRC_WORDS = [
  // French greetings used daily in Lebanon
  {ar:'بونجور', tr:'bonjour', en:'"Good morning / Hello" — French greeting used constantly in Lebanon. Lebanese people mix it freely with "marhaba" and "kifak."', cat:'greeting'},
  {ar:'بونسوار', tr:'bonsoir', en:'"Good evening" — the French evening greeting. Used in Lebanon as naturally as any Arabic greeting.', cat:'greeting'},
  {ar:'مرسي', tr:'merci', en:'"Thank you" — French merci used MORE than Arabic "shukran" in everyday Lebanese speech. "Merci habiib" is classic.', cat:'greeting'},
  {ar:'دي ريان', tr:'de rien', en:'"You\'re welcome" — French "de rien" (it\'s nothing). Lebanese use it alongside "waalaw" and "ahlan."', cat:'greeting'},
  {ar:'سيل vu ple', tr:'sil vu ple', en:'"Please" (French s\'il vous plaît). Lighter and softer than "min faDlak." Said constantly in shops and restaurants.', cat:'greeting'},
  {ar:'وا لا', tr:'voilà', en:'"There you go / here it is / exactly!" — French "voilà" fully absorbed into Lebanese. Said when presenting something or making a point.', cat:'greeting'},
  // code-switch phrases (mixing Arabic + French)
  {ar:'مرسي حبيبي', tr:'merci 7abiib', en:'"Thank you, darling" — the quintessential Lebanese code-switch. French + Arabic in two words. Heard everywhere.', cat:'codemix'},
  {ar:'بونجور كيفك؟', tr:'bonjour kiifak?', en:'"Hello, how are you?" — perfect example of Lebanese code-switching: French greeting + Arabic question in one breath.', cat:'codemix'},
  {ar:'سيلفو ple حبيبي', tr:'sil vu ple 7abiib', en:'"Please, darling" — French politeness particle + Arabic term of endearment. So natural it doesn\'t register as mixing.', cat:'codemix'},
  {ar:'سي لا في', tr:'c\'est la vie', en:'"That\'s life / such is life" — French "c\'est la vie" used exactly as in French, usually with a sigh or shrug at bad news.', cat:'codemix'},
  {ar:'آنكور', tr:'ankoor', en:'"Again / one more time / encore" — French "encore" used in Lebanese Arabic for asking for a repeat. "3amil-ha ankoor" = do it again.', cat:'codemix'},
  {ar:'كانكيتو', tr:'kan-kiitoo', en:'"Nasty / gossip / malicious" (from French "cancans" = gossip). "Ma 3indo gheer kankaato" = he does nothing but gossip.', cat:'codemix'},
  // urban / daily life loans
  {ar:'أبارتمان', tr:'apartmaan', en:'"Apartment" — from French "appartement." Standard Lebanese word for apartment, preferred over Arabic "sha22a."', cat:'urban'},
  {ar:'أسانسير', tr:'asansiir', en:'"Elevator" — from French "ascenseur." The standard Lebanese word. Saying the Arabic "miS3ad" sounds formal/odd.', cat:'urban'},
  {ar:'باركينغ', tr:'baarkiing', en:'"Parking" — English loan via Lebanese. "Fi baarking?" = is there parking? Essential in Beirut.', cat:'urban'},
  {ar:'سوبرمار', tr:'suupar maar', en:'"Supermarket" (French "supermarché" shortened). Lebanese say "suupar maar" or "supermarché" — never "suuq kabeer."', cat:'urban'},
  {ar:'بوتيك', tr:'buutiik', en:'"Boutique / shop" — from French "boutique." Used for any small fashion/clothing shop. "Bfuut 3al buutiik" = I\'m popping into the shop.', cat:'urban'},
  {ar:'كوافير', tr:'kuafeer', en:'"Hair salon / hairdresser" — from French "coiffeur." EVERYONE uses this word. The Arabic "7allaaq" is for barbers only.', cat:'urban'},
  // fashion & beauty terms
  {ar:'تانتة', tr:'taanta', en:'"Aunt / older woman" — from French "tante." Lebanese use it for aunts AND as a respectful form of address to any older woman.', cat:'fashion'},
  {ar:'أونكل', tr:'uunkl', en:'"Uncle" — from French "oncle." Used alongside Arabic "3ammo" and "khalo." "Uunkl" feels more modern/urban.', cat:'fashion'},
  {ar:'روب', tr:'ruub', en:'"Robe / dressing gown" — from French "robe." "Libse r-ruub" = she put on her robe. Now means house-wear/gown in general.', cat:'fashion'},
  {ar:'كالوت', tr:'kaluut', en:'"Underpants/briefs" — from French "caleçon." One of the most French-to-Lebanese words that Lebanese children learn early.', cat:'fashion'},
  // food & hospitality loans
  {ar:'بوفيه', tr:'buufee', en:'"Buffet" — from French "buffet." Lebanese use it for any spread of food, not just self-service. "Sawwou buufee" = they laid out a spread.', cat:'food'},
  {ar:'فروماج', tr:'fromaaj', en:'"Cheese" — from French "fromage." Lebanese say "fromaaj" for fancy/imported cheese, "jibneh" for everyday local cheese.', cat:'food'},
  {ar:'بيتزا', tr:'biitza', en:'"Pizza" — Italian loan via Lebanese culture. Pizza culture is massive in Lebanon. "Ruu7 jiibi biiTza" = go get pizza.', cat:'food'},
  {ar:'كروسان', tr:'kruwasaan', en:'"Croissant" — from French. Lebanese pastry culture is heavily French-influenced. A morning croissant is standard Beirut life.', cat:'food'},
  // exclamations & expressions from French
  {ar:'كتاستروف', tr:'kataastrouf', en:'"Catastrophe / disaster" — from French "catastrophe." Lebanese use it dramatically for any bad situation. "Haal kataastrouf!" = what a disaster!', cat:'exclaim'},
  {ar:'بيزار', tr:'biizaar', en:'"Weird / bizarre" — from French "bizarre." Fully Lebanese now. "Shu biizaar!" = how weird!', cat:'exclaim'},
  {ar:'جونتي', tr:'jontii', en:'"Kind / nice" — from French "gentil(le)." "Howe ktiir jontii" = he\'s very kind. Used more with women: "jontiye" (feminine).', cat:'exclaim'},
  {ar:'ميرفيو', tr:'meerviiy', en:'"Wonderful / marvelous" — from French "merveilleux." "Shu meerviiy!" = how wonderful! Said at good food, good news, beautiful things.', cat:'exclaim'},
  {ar:'بروف', tr:'bruuf', en:'"Proof / test" — from French "preuve" or English "proof." "3amlo-lak bruuf" = they proved it to you. Used in arguments.', cat:'exclaim'},
  // modern English loans
  {ar:'شيك', tr:'shiik', en:'"Chic / stylish" — from French "chic." "Inta shiik" = you\'re stylish. Lebanese fashion consciousness runs deep.', cat:'exclaim'},
  {ar:'شيكي', tr:'shiiiki', en:'"Fancy / chic (adj.)" — Lebanese-ized "chic" with Arabic suffix. "Hal restoraan shiiiki" = this restaurant is fancy.', cat:'exclaim'},
  {ar:'كلاس', tr:'klaas', en:'"Class / elegance" — from French/English "class." "Ma 3indo klaas" = he has no class. Major insult in Lebanon\'s appearance-focused culture.', cat:'exclaim'},
];

const FRC_DRILLS = [
  {
    q: 'How do Lebanese people typically say "thank you" in daily conversation?',
    opts: ['shukran (Arabic)', 'merci (French)', 'Either — both are equally common, "merci" slightly preferred', 'They bow instead of saying it'],
    ans: 2,
    exp: 'Both are used naturally, but "merci" is arguably MORE common in everyday Lebanese speech than "shukran." "Merci 7abiib" is a classic combo. This reflects Lebanon\'s deep French cultural layer from the Mandate era and continued francophile identity.'
  },
  {
    q: 'A Lebanese friend exclaims "shu kataastrouf!" What happened?',
    opts: ['Something amazing happened', 'Something went terribly wrong or is a mess', 'They\'re quoting a French movie', 'It\'s a compliment about something dramatic'],
    ans: 1,
    exp: '"Kataastrouf" (from French "catastrophe") is used dramatically for any bad situation — traffic, bad news, a messy room, a failed plan. Lebanese people love dramatic French-derived words. "Haal kataastrouf" is a very Lebanese expression of dismay.'
  },
  {
    q: 'Someone says "bonjour kiifak?" to you. What language mix is this?',
    opts: ['Pure French with Arabic pronunciation', 'French greeting + Arabic question — classic code-switch', 'It\'s an error — you can\'t mix these', 'Lebanese dialect of French'],
    ans: 1,
    exp: 'Perfect Lebanese code-switching: "bonjour" (French hello) + "kiifak" (Arabic how are you). This mixing happens mid-sentence, mid-word, completely naturally in Lebanon. It\'s not an error — it\'s a feature. Lebanese people switch between Arabic, French, and English fluidly.'
  },
  {
    q: 'What does a Lebanese person mean when they say your restaurant is "shiiiki"?',
    opts: ['The food is very spicy', 'It\'s fancy / chic / upscale', 'The service is slow', 'It\'s too small'],
    ans: 1,
    exp: '"Shiiiki" is "chic" with an Arabic-ized suffix — meaning fancy, stylish, upscale. Lebanon\'s appearance culture is intense; restaurants, clothes, and people are regularly rated on their "klaas" (class). "Ma 3indo klaas" is a serious insult.'
  },
  {
    q: 'You want to say "the elevator is broken" in Lebanese. Which word do you use for elevator?',
    opts: ['miS3ad (Arabic)', 'asansiir (French ascenseur)', 'lifft (English)', 'Beirutis take the stairs always'],
    ans: 1,
    exp: '"Asansiir" (from French "ascenseur") is the standard Lebanese word for elevator. Saying "miS3ad" sounds formal or unusual. This is typical of Lebanese French loans — the French word became the default, and the Arabic equivalent sounds bookish.'
  },
  {
    q: 'When is "fromaaj" used vs "jibneh" for cheese in Lebanon?',
    opts: ['"Fromaaj" for imported/fancy cheese; "jibneh" for local everyday cheese', '"Fromaaj" for all cheese; "jibneh" is old-fashioned', '"Jibneh" for all cheese; "fromaaj" is only in restaurants', 'They mean the same thing and are interchangeable'],
    ans: 0,
    exp: 'The French/Arabic divide mirrors the social context: "jibneh" = everyday local cheese (akkaawi, jibneh bayde, labne), "fromaaj" = imported or fancy cheese (brie, camembert, gouda). This language split reflects Lebanon\'s two-tier social culture where French signals sophistication.'
  },
  {
    q: 'You hear "3amlo-lak bruuf." What does "bruuf" mean here?',
    opts: ['They drank a toast to you', 'They proved something to you / provided evidence', 'They made you a profit', 'They cleaned something for you'],
    ans: 1,
    exp: '"Bruuf" from French "preuve" (proof) or English "proof" — evidence or demonstration. "3amlo-lak bruuf" = they proved it / they gave you proof. French legal vocabulary seeped into Lebanese because French law governed Lebanon under the Mandate.'
  },
  {
    q: 'What\'s the Lebanese word for hair salon?',
    opts: ['7allaaq', 'kuafeer (from French coiffeur)', 'makwaje', '7alaaqa'],
    ans: 1,
    exp: '"Kuafeer" (from French "coiffeur") is THE word for hair salon in Lebanon. "7allaaq" is for a traditional barber (men\'s). Using "7allaaq" for a women\'s hair salon would sound odd or old-fashioned. This is one of the most firmly-established French loans in Lebanese vocabulary.'
  },
  {
    q: 'What does "ma 3indo klaas" mean?',
    opts: ['He has no school today', 'He has no class / no elegance / is low-quality', 'He has no classroom available', 'He doesn\'t know what\'s happening'],
    ans: 1,
    exp: '"Ma 3indo klaas" = "he has no class" — a serious insult in appearance-obsessed Lebanese culture. "Klaas" (from French/English "class") means elegance, refinement, social grace. This phrase can refer to dress, behavior, or taste. In Lebanon, lacking "klaas" is a genuine social failing.'
  },
  {
    q: 'Which word is purely Lebanese-Francoarabic — meaning it evolved uniquely in Lebanon?',
    opts: ['"merci" — exists in French unchanged', '"kankaato" — gossip/nasty behavior (from French cancans)', '"bonjour" — standard French', '"voilà" — standard French'],
    ans: 1,
    exp: '"Kankaato" (from French "cancans" = gossip/scandal) evolved into a Lebanese word meaning gossip, nastiness, or petty behavior. "Ma 3indo gheer kankaato" = he does nothing but gossip and cause drama. This kind of phonological adaptation — taking a French word and giving it Lebanese pronunciation and usage — is pure Francoarabic.'
  },
];

const FRC_TIPS = [
  {
    title: '🇫🇷 Why Lebanese Arabic has so much French',
    body: 'Lebanon was under French Mandate from 1920-1943, and France ran schools, courts, and administration in French. This wasn\'t just political — it shaped the language permanently. The educated Lebanese elite spoke French at home and considered it a prestige marker. Today, French survives in the words for everyday objects (elevator = asansiir, apartment = apartmaan), in social greetings (bonjour, merci), and in class-signaling vocabulary (klaas, shiik, jontii).'
  },
  {
    title: '🔄 Code-switching is NOT code-mixing up — it\'s a skill',
    body: 'Lebanese people switch between Arabic, French, and English within a single sentence — not because they\'re confused, but because each language fills a specific social role. French = formality, refinement, urban identity. English = modernity, tech, pop culture. Arabic = emotional expression, home, family. "Merci 7abiib, voilà — anyway, mniit 3a waqtak" is three languages in one sentence, and it sounds completely natural to a Lebanese ear.'
  },
  {
    title: '📍 Urban vs rural French loan usage',
    body: 'French loans are more concentrated in urban Beirut than in rural Lebanon. Saying "asansiir" for elevator is normal in Beirut; a villager might say "miS3ad." "Fromaaj" vs "jibneh" marks social/urban identity. This isn\'t snobbery — it\'s just how the language stratified. Knowing both the French loan AND the Arabic word lets you adapt to your audience.'
  },
  {
    title: '✨ The "merci habibi" phenomenon',
    body: '"Merci 7abiib" is the most Lebanese thing you can say. Two words, two languages, no hesitation. This pattern (French politeness + Arabic endearment) shows up constantly: "sil vu ple 7abiib," "jontii ktiir," "c\'est la vie ya 3ammo." The blending isn\'t conscious — it\'s the natural output of a population raised with both languages simultaneously.'
  },
  {
    title: '💅 Fashion & appearance vocabulary is mostly French',
    body: 'Lebanese appearance culture runs deep, and its vocabulary is overwhelmingly French: "kuafeer" (hairdresser), "buutiik" (shop), "shiik / shiiiki" (chic/stylish), "klaas" (class/elegance), "meerviiy" (marvelous). Learning this vocabulary helps you understand Lebanese social commentary — praising someone\'s style ("ktiir shiik"), critiquing someone\'s lack of class ("ma 3indo klaas"), or complimenting a venue ("shiiiki ktiir") all require this French-derived layer.'
  },
];

const FRC_ABOUT = `<p><strong>🇫🇷🇱🇧 Lebanese Francoarabic — When Two Languages Become One</strong></p>
<p>Lebanese Arabic is unlike any other Arabic dialect because it carries a French skeleton beneath its Arabic surface. Decades of French Mandate rule, French-language schools, and Lebanese-French cultural ties created a unique linguistic phenomenon: words, phrases, and entire sentence structures that blend Arabic and French seamlessly.</p>
<p><strong>This isn't bilingualism — it's fusion:</strong> A Lebanese person saying "merci 7abiib, voilà, on y va" (thank you darling, there we go, let's go) isn't consciously switching between languages. The words have been absorbed so completely that they feel like one language.</p>
<p><strong>Class markers:</strong> French vocabulary in Lebanon historically signaled education, urban identity, and social status. "Kuafeer" vs "7allaaq," "fromaaj" vs "jibneh," "asansiir" vs "miS3ad" — the French word is often the prestigious, modern, urban choice.</p>
<p><strong>Three-language code-switching:</strong> Lebanon has now added English to the mix, creating three-language sentences. "I'll call you later, 3al evening, merci habiib" is completely natural. English handles tech and pop culture; French handles refinement; Arabic handles emotion and intimacy.</p>
<p><strong>Why learn this:</strong> You cannot understand real Lebanese conversation without knowing Francoarabic. A huge portion of daily vocabulary — from "bonjour" to "kataastrouf" to "asansiir" to "kankaato" — comes from French. Thinking of Lebanese Arabic as "Arabic with French seasoning" will make you fluent much faster.</p>`;
