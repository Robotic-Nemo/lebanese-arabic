// R471 — Lebanese Clothing & Fashion coach (prefix: clth)
const CLTH_WORDS = [
  // basic clothing
  {ar:'قميص', tr:'2amiiS', en:'shirt', cat:'clothes'},
  {ar:'بنطلون', tr:'bantaloon', en:'pants / trousers', cat:'clothes'},
  {ar:'فستان', tr:'fustaan', en:'dress', cat:'clothes'},
  {ar:'تنورة', tr:'tannuura', en:'skirt', cat:'clothes'},
  {ar:'جاكيت', tr:'jaakit', en:'jacket', cat:'clothes'},
  {ar:'معطف', tr:'mi3Taf', en:'coat / overcoat', cat:'clothes'},
  {ar:'كنزة', tr:'kanze', en:'sweater / knitwear', cat:'clothes'},
  {ar:'تيشيرت', tr:'tii-shirt', en:'t-shirt', cat:'clothes'},
  {ar:'شورت', tr:'short', en:'shorts', cat:'clothes'},
  {ar:'بيجامة', tr:'bijaama', en:'pyjamas', cat:'clothes'},
  // shoes & accessories
  {ar:'كندرة', tr:'kundara', en:'shoes (Lebanese word)', cat:'accessories'},
  {ar:'شبشب', tr:'shibshib', en:'flip-flops / sandals', cat:'accessories'},
  {ar:'حزام', tr:'7izaam', en:'belt', cat:'accessories'},
  {ar:'شنطة', tr:'shanTa', en:'bag / purse', cat:'accessories'},
  {ar:'ساعة', tr:'saa3a', en:'watch', cat:'accessories'},
  {ar:'خاتم', tr:'khaatam', en:'ring', cat:'accessories'},
  {ar:'قرط', tr:'2urt', en:'earring', cat:'accessories'},
  {ar:'عقد', tr:'3i2d', en:'necklace', cat:'accessories'},
  {ar:'نضارة', tr:'naDDaara', en:'glasses / sunglasses', cat:'accessories'},
  {ar:'كرافات', tr:'kraavaat', en:'tie (necktie)', cat:'accessories'},
  // traditional clothing
  {ar:'عباية', tr:'3abaaya', en:'abaya (full robe)', cat:'traditional'},
  {ar:'طربوش', tr:'Tarbuush', en:'fez / tarboosh (Ottoman hat)', cat:'traditional'},
  {ar:'كوفية', tr:'kuufiyye', en:'keffiyeh (headscarf)', cat:'traditional'},
  {ar:'جلابية', tr:'jalaabiyye', en:'jalabiya (long robe)', cat:'traditional'},
  {ar:'تنورة دبكة', tr:'tannuura dabke', en:'dabke skirt (folk dance costume)', cat:'traditional'},
  // shopping & fitting
  {ar:'مقاس', tr:'ma2aas', en:'size', cat:'shopping'},
  {ar:'ما بيناسبني', tr:'maa bnaasibne', en:'it doesn\'t fit me', cat:'shopping'},
  {ar:'بيناسبني', tr:'bnaasibne', en:'it fits me', cat:'shopping'},
  {ar:'واسع', tr:'waasi3', en:'loose / wide', cat:'shopping'},
  {ar:'ضيق', tr:'Dayyiq', en:'tight / narrow', cat:'shopping'},
  {ar:'فيه حجم أكبر؟', tr:'fii 7ajm akbar', en:'do you have a larger size?', cat:'shopping'},
  {ar:'شو السعر؟', tr:'shu es-si3r', en:'what\'s the price?', cat:'shopping'},
  {ar:'غالي كتير', tr:'ghaalii ktiir', en:'very expensive', cat:'shopping'},
  {ar:'عندك أرخص؟', tr:'3endak arkhaS', en:'do you have cheaper?', cat:'shopping'},
  // Lebanese fashion expressions
  {ar:'ع الموضة', tr:'3a el mooda', en:'fashionable / on trend', cat:'style'},
  {ar:'متناسق', tr:'mitnaasiq', en:'well-coordinated (outfit)', cat:'style'},
  {ar:'شيك', tr:'sheek', en:'chic / stylish', cat:'style'},
  {ar:'مكشوف', tr:'makshoof', en:'revealing / exposed', cat:'style'},
  {ar:'محتشم', tr:'mu7tashim', en:'modest / conservative dress', cat:'style'},
  {ar:'بتلبسي منيح', tr:'btilbase mniH', en:'you dress well (to a woman)', cat:'style'},
  {ar:'كلاسيكي', tr:'klassiki', en:'classic / timeless style', cat:'style'},
];

const CLTH_DRILLS = [
  {
    q: 'What is the Lebanese word for "shoes"?',
    opts: ['kundara', 'shibshib', 'shanTa', 'Tarbuush'],
    ans: 0,
    note: '"Kundara" (كندرة) is the Lebanese/Levantine word for shoes. Standard Arabic uses "7ithaa2" but nobody says that in Lebanon. "Shibshib" = flip-flops/sandals.'
  },
  {
    q: 'How do you say "it doesn\'t fit me" in Lebanese?',
    opts: ['maa bnaasibne', 'ghaalii ktiir', 'Dayyiq ktiir', 'maa 7elo'],
    ans: 0,
    note: '"Maa bnaasibne" = it doesn\'t suit/fit me. "Bnaasibne" = it fits me. "Naasaba" = to suit/match. Very useful in clothing shops!'
  },
  {
    q: 'What does "3a el mooda" mean?',
    opts: [
      'On trend / fashionable',
      'On sale / discounted',
      'Made in Lebanon',
      'Second-hand / vintage'
    ],
    ans: 0,
    note: '"3a el mooda" = on the fashion/trend. "Mooda" comes from French "mode". Lebanese borrows heavily from French for fashion vocabulary: "sheek" (chic), "klassiki" (classique), "laang" (ligne = cut/style).'
  },
  {
    q: 'What is a "Tarbuush" and what is its cultural significance?',
    opts: [
      'Red fez hat — symbol of Ottoman era Lebanon',
      'Traditional embroidered vest',
      'White headscarf worn by women',
      'Long robe worn for weddings'
    ],
    ans: 0,
    note: '"Tarbuush" (fez) was the Ottoman-era hat worn by Lebanese men. Now mainly seen in old photographs, folklore performances, and as a cultural symbol. Nizar Qabbani\'s poems often mention the tarbuush.'
  },
  {
    q: 'You\'re shopping and the price is too high. What do you say?',
    opts: ['ghaalii ktiir', 'Dayyiq ktiir', 'maa bnaasibne', 'waasi3 ktiir'],
    ans: 0,
    note: '"Ghaalii ktiir" = very expensive. Follow with "3endak arkhaS?" (do you have cheaper?). Lebanese shoppers are skilled bargainers — showing price-shock is part of the negotiation!'
  },
  {
    q: 'What does "shanTa" mean in Lebanese?',
    opts: ['Bag / purse / handbag', 'Shoe', 'Hat', 'Scarf'],
    ans: 0,
    note: '"ShanTa" = bag, purse, handbag. Used for all sizes. "ShanTit safar" = travel bag/suitcase. Lebanese women are known for their love of designer bags — Beirut has boutiques of every luxury brand.'
  },
  {
    q: 'How do you compliment a woman on her outfit in Lebanese?',
    opts: [
      'btilbase mniH (you dress well)',
      'btilbas mniH (you dress well — m form)',
      'labse 7elo (wearing something beautiful)',
      'All of the above depending on context'
    ],
    ans: 3,
    note: 'All three work! "Btilbase mniH" (f), "btilbas mniH" (m) = you dress well. "Labse 7elo" = wearing something beautiful. Lebanese are very expressive with fashion compliments.'
  },
  {
    q: 'What is "kuufiyye" in Lebanese culture?',
    opts: [
      'Keffiyeh — traditional checkered headscarf',
      'Embroidered blouse from the mountains',
      'Long formal dress for occasions',
      'Woolen winter hat'
    ],
    ans: 0,
    note: '"Kuufiyye" = keffiyeh, the traditional checkered headscarf (black/white or red/white). In Lebanon it\'s associated with both Palestinian solidarity and rural/traditional Lebanese culture.'
  },
  {
    q: 'What does "fii 7ajm akbar?" mean in a clothing store?',
    opts: [
      'Do you have a larger size?',
      'Is this the only color?',
      'Can I try this on?',
      'Is there a discount?'
    ],
    ans: 0,
    note: '"Fii 7ajm akbar?" = do you have a bigger size? "7ajm" = size/volume. "Akbar" = bigger. For smaller: "7ajm as8har". "Ma2aas" is also used for clothing size.'
  },
  {
    q: 'Elie Saab and Zuhair Murad are Lebanese fashion designers famous globally. What word describes their style?',
    opts: ['klassiki w sheek (classic and chic)', '3a el mooda ktiir (very trendy)', 'mu7tashim (modest)', 'makshoof (revealing)'],
    ans: 0,
    note: 'Lebanese couture (Elie Saab, Zuhair Murad, Georges Chakra) is known for "klassiki w sheek" — timeless elegance. Lebanese designers dress royalty and Hollywood. Lebanon punches way above its weight in global fashion.'
  },
];

const CLTH_TIPS = [
  {
    title: 'Lebanese fashion culture',
    body: 'Beirut is the fashion capital of the Arab world. Lebanese people invest heavily in appearance — "mezyaniin" (looking good) is a cultural value. Expect compliments on clothing, and give them freely. The phrase "btilbase mniH ktir" (you dress very well) goes a long way.'
  },
  {
    title: 'French loanwords in Lebanese fashion',
    body: 'Lebanese fashion vocabulary is heavily French-influenced: "mooda" (mode/fashion), "sheek" (chic), "klassiki" (classique), "kraavaat" (cravate/tie), "jaakit" (jacket). This reflects Lebanon\'s French cultural ties. When in doubt about a fashion word, try the French version with a Lebanese accent!'
  },
  {
    title: 'Shopping in Lebanon',
    body: 'Lebanese markets range from luxury malls in Beirut to traditional souks. In Hamra, Gemmayzeh, and Mar Mikhael you\'ll find boutiques. In traditional shops, bargaining (masaawame) is expected. Start with "ghaalii ktiir" and work toward "3aTeene discount" (give me a discount).'
  },
  {
    title: 'Dress codes',
    body: 'Lebanon is diverse in dress standards. Beirut\'s nightlife and beach scene is very liberal. Mountain villages and religious areas are more conservative ("mu7tashim"). Women covering their hair ("7ijaab") are common in some areas, rare in others. Read the environment.'
  },
  {
    title: 'The "kundara" vs "7ithaa2" distinction',
    body: '"Kundara" is the Levantine word for shoes that every Lebanese person uses. If you say "7ithaa2" (the Modern Standard Arabic word) you\'ll sound like a textbook. Similarly, use "shibshib" for sandals/flip-flops, never "na3l". The local words signal fluency.'
  },
];

const CLTH_ABOUT = `
<p><strong>👗 Lebanese Clothing & Fashion</strong></p>
<p>Lebanon holds a unique place in the Arab world's fashion landscape. From ancient textile traditions to modern haute couture, clothing in Lebanon tells a story of culture, religion, class, and identity.</p>
<p><strong>The couture connection:</strong> Lebanese designers Elie Saab, Zuhair Murad, and Georges Chakra dress Hollywood stars, Middle Eastern royalty, and celebrities worldwide. Beirut Fashion Week attracts international press. This tiny country has an outsized influence on global fashion.</p>
<p><strong>Traditional vs modern:</strong> The tarbuush (fez), kuufiyye (keffiyeh), and dabke costume represent Lebanon's heritage. Modern Lebanese fashion blends these roots with Mediterranean, French, and global influences into something distinctly Lebanese — glamorous but warm.</p>
<p><strong>Shopping culture:</strong> From the luxury boutiques of Verdun to the chaotic bargaining of Bourj Hammoud's market, clothing shopping is a full sensory experience in Lebanon. Learning clothing vocabulary opens up authentic market interactions.</p>
`;
