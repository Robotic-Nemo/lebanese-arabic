// R498 — Lebanese Wasta & Networking Culture (prefix: wst)
const WST_WORDS = [
  // wasta core
  {ar:'واسطة', tr:'waaSiTa', en:'wasta — connections / pulling strings / influence', cat:'wasta'},
  {ar:'واسط', tr:'waaSiT', en:'connector — person who pulls strings for you', cat:'wasta'},
  {ar:'معارف', tr:'ma3aarif', en:'connections / people who can help (lit. acquaintances)', cat:'wasta'},
  {ar:'ظهر', tr:'Dahr', en:'backing / support — someone who has your back', cat:'wasta'},
  {ar:'علاقات', tr:'3alaa2at', en:'relationships / connections (formal/business)', cat:'wasta'},
  {ar:'صلة', tr:'Sele', en:'tie / link — personal connection to someone', cat:'wasta'},
  {ar:'شبكة', tr:'shabke', en:'network (modern term for connections)', cat:'wasta'},
  // favors
  {ar:'معروف', tr:'ma3ruuf', en:'favor / good deed (creates social obligation)', cat:'favors'},
  {ar:'بدّي معروف', tr:'baddi ma3ruuf', en:'I need a favor', cat:'favors'},
  {ar:'الله يخليك', tr:'alla ykhalliik', en:'may God keep you — said before asking a favor', cat:'favors'},
  {ar:'رجاء', tr:'rajaa', en:'please / I beg you (heartfelt request)', cat:'favors'},
  {ar:'كرمك', tr:'karamak', en:'by your grace / if you please (very polite)', cat:'favors'},
  {ar:'على عيني', tr:'3a 3ayni', en:'on my eyes — I\'ll absolutely take care of it', cat:'favors'},
  {ar:'في حل', tr:'fii 7all', en:'it\'s solved / handled — I\'ll take care of it', cat:'favors'},
  {ar:'صار', tr:'Saar', en:'done! / handled! (it has happened — task complete)', cat:'favors'},
  // networking
  {ar:'جماعة', tr:'jama3a', en:'the guys / one\'s group / inner circle', cat:'networking'},
  {ar:'زلمة', tr:'zalame', en:'a capable connected man (good person to know)', cat:'networking'},
  {ar:'صاحبي', tr:'Sa7bi', en:'my buddy — person you call for favors', cat:'networking'},
  {ar:'ناس', tr:'naas', en:'the right people / the people who matter', cat:'networking'},
  {ar:'حدا', tr:'7ada', en:'someone (as in: I know someone who can help)', cat:'networking'},
  {ar:'اتصل بي', tr:'ittaSal fiiye', en:'call me / reach out (offer to help)', cat:'networking'},
  {ar:'تحت أمرك', tr:'ta7t amrak', en:'at your service / I\'m here for you', cat:'networking'},
  // hierarchy & respect
  {ar:'زعيم', tr:'za3iim', en:'leader / political strongman / boss', cat:'hierarchy'},
  {ar:'معلّم', tr:'m3allem', en:'boss / master (respectful term for someone in charge)', cat:'hierarchy'},
  {ar:'بك', tr:'bek', en:'bey — Ottoman honorific still used for respect', cat:'hierarchy'},
  {ar:'ريّس', tr:'rayyis', en:'chief / boss (informal, used for taxi drivers to ministers)', cat:'hierarchy'},
  {ar:'كبير', tr:'kibiir', en:'senior / elder / big person (in influence)', cat:'hierarchy'},
  {ar:'واجه', tr:'waajeh', en:'prominent / prestigious / has standing', cat:'hierarchy'},
  // culture phrases
  {ar:'شو بتعرف تقدر', tr:'shu bt3arraf te2dar', en:'it\'s who you know (that gets things done)', cat:'phrases'},
  {ar:'ماشي الحال', tr:'maashi el 7aal', en:'things are moving / going forward / handled', cat:'phrases'},
  {ar:'خلّيك بمعرفتك', tr:'khalliik bi-ma3rftik', en:'use your connections / work your network', cat:'phrases'},
  {ar:'في نفر', tr:'fii naafar', en:'there\'s a man (someone who can handle this)', cat:'phrases'},
  {ar:'الله معك', tr:'alla ma3ak', en:'God be with you (wishing luck navigating a system)', cat:'phrases'},
  {ar:'بيعرفني', tr:'byi3rifni', en:'he knows me — the magic phrase that opens doors', cat:'phrases'},
  {ar:'حكيلو عني', tr:'7kiilo 3anni', en:'talk to him about me / put in a word for me', cat:'phrases'},
];

const WST_DRILLS = [
  {
    q: 'What is "waaSiTa" (واسطة) — Lebanon\'s most essential social concept?',
    opts: [
      'Wasta — using personal connections and influence to get things done',
      'A formal contract — a written agreement between two parties',
      'A government permit — official approval for a business or activity',
      'A religious blessing — said before starting an important task'
    ],
    ans: 0,
    note: '"WaaSiTa" (واسطة) = wasta — the use of personal connections, influence, or a well-connected middleman to navigate bureaucracy, get a job, skip a queue, or solve a problem. Ubiquitous in Lebanon and across the Arab world. "Lazim waaSiTa" = you need wasta (said resignedly). NOT inherently corrupt — often just social lubrication. "Ma fii waaSiTa, ma fii shi" = without wasta, nothing happens (pessimistic but realistic Lebanese view).'
  },
  {
    q: 'What does "ma3ruuf" (معروف) mean in Lebanese social culture?',
    opts: [
      'A favor — a good deed that creates an unspoken social obligation',
      'A known person — someone famous in the community',
      'A salary — regular payment for work done',
      'A law — a regulation everyone must follow'
    ],
    ans: 0,
    note: '"Ma3ruuf" (معروف) = favor / good deed. From the root "known" — a favor is something you do that others know about. Key principle: doing a "ma3ruuf" creates an implicit social debt. "3amilna ma3ruuf" = do us a favor. Refusing a "ma3ruuf" request from someone close is socially costly. The Lebanese social economy runs partly on "ma3ruuf" exchanges — debts and credits of goodwill. "Baddi ma3ruuf" = I need a favor.'
  },
  {
    q: 'What does "3a 3ayni" (على عيني) mean when someone says it in response to a request?',
    opts: [
      '"On my eyes" — an absolute commitment to do something',
      '"Watch your eyes" — a warning to be careful',
      '"I\'ll think about it" — a polite maybe',
      '"That\'s too much" — pushing back on the request'
    ],
    ans: 0,
    note: '"3a 3ayni" (على عيني) = on my eyes — a powerful commitment phrase. "On my eyes" means I will stake my vision on this — I will absolutely do it. Also: "3a 3ayni w raasi" (on my eyes and head) = even stronger. Used when committing to help: "laazim shi? 3a 3ayni!" = need something? On my eyes! Lebanese verbal culture escalates commitment through body parts — eyes, head, life. "3a 7yaati" (on my life) = absolute promise.'
  },
  {
    q: 'What does "fii 7all" (في حل) mean when a connected Lebanese person says it?',
    opts: [
      '"It\'s solved" — I\'ll handle this problem for you',
      '"There\'s a solution" — suggesting you look for one yourself',
      '"It\'s fine" — indicating nothing needs to be done',
      '"There\'s money" — implying a bribe is needed'
    ],
    ans: 0,
    note: '"Fii 7all" (في حل) = it\'s solved / there\'s a solution. Said by someone with connections when they\'ve committed to helping. "Maashi 7alak" = your situation is being taken care of. This is the magic sentence in Lebanese problem-solving — it doesn\'t mean the solution exists yet, it means the speaker is personally taking responsibility. "Tawakkal 3alay" (rely on me) carries the same meaning.'
  },
  {
    q: 'What is "jama3a" (جماعة) in Lebanese networking context?',
    opts: [
      'One\'s inner circle / group — the trusted people you can call on',
      'A mosque congregation — religious community gathering',
      'A business meeting — formal gathering of professionals',
      'A political party — organized group with official membership'
    ],
    ans: 0,
    note: '"Jama3a" (جماعة) = the group / the guys / one\'s inner circle. "Haade min jama3atna" = this person is one of ours (trustworthy, can be called on). "Roo7 3al-jama3a" = go to the group (people who will help). In Lebanon, your "jama3a" is your social safety net — family, friends, neighbors, former classmates, co-sectarians. Lebanese social identity is fundamentally collective: "shu jama3tak?" = who are your people? This determines access to resources.'
  },
  {
    q: 'What does "byi3rifni" (بيعرفني) literally mean — and why is it powerful?',
    opts: [
      '"He knows me" — claiming connection to an influential person that opens doors',
      '"He recognizes me" — being identified as a known person',
      '"He owes me" — claiming someone has an outstanding debt',
      '"He called me" — saying someone reached out for help'
    ],
    ans: 0,
    note: '"Byi3rifni" (بيعرفني) = he knows me. In Lebanon, "byi3rifni" plus an influential name is a social credential. "Ra7 2ullo byi3rifni" = I\'ll tell him he knows me. Dropped casually: "ana 3arif el rayyis" (I know the boss). The implication: doors open, queues shorten, problems dissolve. "Ma7ada byi3rifo" = nobody knows him (he has no connections — a disadvantage). Lebanese social navigation requires constantly signaling one\'s network.'
  },
  {
    q: 'What does "za3iim" (زعيم) mean in Lebanese political and social life?',
    opts: [
      'Leader / political strongman — a figure with followers and real power to deliver',
      'An elected official — someone chosen through democratic process',
      'A business CEO — the head of a large company',
      'A religious scholar — a learned spiritual authority'
    ],
    ans: 0,
    note: '"Za3iim" (زعيم) = leader/strongman. In Lebanon, "za3iim" refers to the traditional political leader of a sect or community — someone who commands loyalty and delivers favors in exchange. "Roo7 3and el za3iim" = go to the leader (for help). Lebanese politics is organized around za3aama (leadership) — Jumblatt, Geagea, Nasrallah, Berri each have their za3ama networks. Wasta flows through za3aama: the leader delivers for constituents, who deliver loyalty.'
  },
  {
    q: 'What does "m3allem" (معلّم) mean and how is it used?',
    opts: [
      'Boss / master — a respectful title for someone in charge or skilled',
      'Teacher — someone who teaches formally in a school',
      'Rich man — someone known for having wealth',
      'Foreigner — someone from outside the country'
    ],
    ans: 0,
    note: '"M3allem" (معلّم) = master / boss. Originally "master craftsman" — the head of a traditional trade. Now used broadly for respect: "m3allem" the garage owner, the restaurant owner, the fixer. Called "m3allem" = you\'re recognized as someone with authority and skill. "Shu biddak ya m3allem?" = what do you need, boss? When asking a favor: "m3allem, laazim shi" = boss, I need something. A term of both respect AND flattery.'
  },
  {
    q: 'What does "alla ykhalliik" (الله يخليك) signal when said before a request?',
    opts: [
      '"May God keep you" — a blessing used to soften a request or favor ask',
      '"God willing" — expressing hope that something will happen',
      '"Thank God" — gratitude for something already received',
      '"God protect you" — warding off danger for the listener'
    ],
    ans: 0,
    note: '"Alla ykhalliik" (الله يخليك) = may God keep you / preserve you. Said before making a request to invoke goodwill and soften the ask: "alla ykhalliik, laazim mi3ruuf" = may God keep you, I need a favor. Invoking God\'s name before a request elevates its emotional weight — the person you\'re asking feels the social and moral pull more strongly. Female form: "alla ykhalliiki." This is the Lebanese "pretty please" with divine backing.'
  },
  {
    q: 'What does "7kiilo 3anni" (حكيلو عني) mean — and why is it essential?',
    opts: [
      '"Talk to him about me" — asking someone to put in a word on your behalf',
      '"Tell him my story" — explaining a personal situation to someone',
      '"Call him for me" — asking someone to make a phone call',
      '"Visit him with me" — requesting company to meet someone important'
    ],
    ans: 0,
    note: '"7kiilo 3anni" (حكيلو عني) = talk to him about me / put in a word for me. The activating phrase of Lebanese networking. You have a contact who knows the decision-maker. You ask: "7kiilo 3anni" — establish your existence and legitimacy with them. This preemptive introduction transforms you from a stranger to a "known person" (byi3rifni). "Ana 7kiitak ma3o" = I spoke for you to him (I vouched for you). Vouch culture is the currency of Lebanese social capital.'
  },
];

const WST_TIPS = [
  {
    title: 'Wasta is not (only) corruption',
    body: 'Western observers often equate wasta with corruption. Lebanese see it differently. Wasta is the social operating system — a network of mutual obligations, trust, and reciprocity that exists BECAUSE formal institutions are unreliable. When electricity, courts, and bureaucracies fail, people fall back on "ma3aarif" (connections). Wasta isn\'t bypassing the system — it IS the system. Understanding this distinction is essential for anyone working with Lebanese partners or institutions.'
  },
  {
    title: 'The obligation economy',
    body: '"Ma3ruuf" (favor) creates "dayn" (debt) — not financial but social. Do someone a "ma3ruuf" and they owe you one, possibly forever. Lebanese social accounting tracks these debts precisely. "Haada biyya dayn" = this person owes me one. Refusing to help someone who did you a "ma3ruuf" is a serious breach. The Lebanese social economy runs on this exchange. When someone offers wasta, they\'re both giving a gift and creating a future claim.'
  },
  {
    title: 'How to activate wasta',
    body: 'The wasta activation sequence: (1) identify who you need to reach; (2) trace your network to someone who knows them ("7ada byi3rifak?"); (3) ask your contact to "7ki" (speak) for you; (4) approach with "byi3rifni" as credential; (5) express the request with "alla ykhalliik" + "baddi ma3ruuf." Skip steps and wasta fails. Lebanese networking is not transactional — it requires relationship investment before the ask. Cold requesting without a connector rarely works.'
  },
  {
    title: 'Za3aama: the political wasta network',
    body: 'Lebanese political leaders ("za3aama") operate as institutionalized wasta brokers. Followers provide votes and loyalty; za3iim provides jobs, favors, and protection. "Roo7 3and el za3iim" (go to the leader) is a real solution to real problems — getting a relative hired, resolving a legal dispute, securing a permit. Each sect has its za3aama network. Lebanese citizens often engage with their za3iim directly as a first resort before formal institutions.'
  },
  {
    title: 'Modern wasta: LinkedIn with loyalty',
    body: 'Lebanese professional culture has adapted wasta to the modern world. WhatsApp groups replace formal networking events. University alumni networks ("khirjaan") are crucial connectors. "Shu khirjaan?" (what are your alumni?) is asked early in professional conversations. LinkedIn is used Lebanese-style — not passive profile maintenance but active connection requests with "7kiilik 3anni" messages. Lebanese diaspora networks (especially in Gulf, West Africa, Americas) operate on the same wasta principles globally.'
  },
];

const WST_ABOUT = `
<p><strong>🤝 Lebanese Wasta & Networking Culture</strong></p>
<p>"WaaSiTa" (واسطة) — connections, influence, the strategic deployment of personal relationships — is not a Lebanese scandal. It is Lebanese operating logic. In a country where formal institutions have repeatedly failed, burned, or fragmented along sectarian lines, the informal network of mutual obligation became the functional social infrastructure.</p>
<p><strong>How wasta works:</strong> Every Lebanese person maintains a mental map of their connections — who they know, who those people know, and what social debts exist. When a problem arises, the first question is "shu ma3aarfak?" (what are your connections?), not "what does the law say?" Finding "7ada byi3rifak" (someone who knows you) in the right place solves bureaucratic problems, gets relatives jobs, accelerates permits.</p>
<p><strong>The vocabulary of obligation:</strong> "Ma3ruuf" (favor), "dayn" (social debt), "3a 3ayni" (I commit), "fii 7all" (it's solved) — these are the words of Lebanese problem-solving. Knowing them signals to Lebanese interlocutors that you understand how things actually work, not just how they're supposed to work.</p>
<p><strong>Navigating it as an outsider:</strong> Foreigners often miss wasta cues. When a Lebanese person says "ta3a 3andi" (come to me) or "ana 7kiilak" (I'll speak for you), they're activating the network on your behalf — this is a significant social investment. Acknowledge it, reciprocate eventually, and never exploit it repeatedly without return.</p>
`;
