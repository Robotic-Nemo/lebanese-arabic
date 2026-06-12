// R771 — NEW FEATURE: Lebanese Barbershop & Hair Salon (brb)

const BRB_CATS = ['barber','salon','cuts','phrases'];

const BRB_WORDS = [
  // barber
  {tr:'7alla2',             en:'barber',                          ar:'حلاق',             cat:'barber'},
  {tr:'mzayyin',            en:'hairdresser (male)',               ar:'مزيّن',             cat:'barber'},
  {tr:'coiffeur',           en:'hair salon / stylist',             ar:'كوافور',            cat:'barber'},
  {tr:'7ala2a',             en:'barbershop',                       ar:'حلاقة',            cat:'barber'},
  {tr:'mawziyye',           en:'razor / straight razor',           ar:'موزية',            cat:'barber'},
  {tr:'ma2ass',             en:'scissors',                         ar:'مقص',              cat:'barber'},
  {tr:'misht',              en:'comb',                             ar:'مشط',              cat:'barber'},
  // salon
  {tr:'msa3ed',             en:'blow dryer',                       ar:'مساعد (مجفف)',     cat:'salon'},
  {tr:'mjafef sha3r',       en:'hair dryer',                       ar:'مجفف شعر',         cat:'salon'},
  {tr:'jel',                en:'hair gel',                         ar:'جيل',              cat:'salon'},
  {tr:'spray sha3r',        en:'hair spray',                       ar:'سبري شعر',         cat:'salon'},
  {tr:'sab8a',              en:'hair dye / coloring',              ar:'صبغة',             cat:'salon'},
  {tr:'sab8 sha3r',         en:'hair coloring service',            ar:'صبغ شعر',          cat:'salon'},
  {tr:'manicure',           en:'manicure',                         ar:'مانيكير',           cat:'salon'},
  // cuts
  {tr:'2ass sha3r',         en:'haircut',                          ar:'قص شعر',           cat:'cuts'},
  {tr:'ta7fif',             en:'trim / thin out',                  ar:'تخفيف',            cat:'cuts'},
  {tr:'sfif',               en:'fade / taper cut',                 ar:'سفيف',             cat:'cuts'},
  {tr:'3leje rasse',        en:'head treatment / scalp massage',   ar:'علاج رأس',         cat:'cuts'},
  {tr:'dwa2',               en:'shave / beard shave',              ar:'دواء (حلاقة)',     cat:'cuts'},
  {tr:'lih2a',              en:'beard',                            ar:'لحية',             cat:'cuts'},
  {tr:'sha3r',              en:'hair',                             ar:'شعر',              cat:'cuts'},
  // phrases
  {tr:'2addesh l-2as?',     en:'how much for a haircut?',          ar:'قديش القص؟',       cat:'phrases'},
  {tr:'shu badak?',         en:'what do you want? (to customer)',  ar:'شو بدك؟',          cat:'phrases'},
  {tr:'2ass w bass',        en:'just a trim / cut only',           ar:'قص وبس',           cat:'phrases'},
  {tr:'min2addesh khalliha', en:'leave it this long',              ar:'من قديش خليها',    cat:'phrases'},
  {tr:'ta7fif min l-janabein', en:'thin from the sides',           ar:'تخفيف من الجنبين', cat:'phrases'},
  {tr:'3al makina',         en:'with the clipper',                 ar:'عالماكينة',        cat:'phrases'},
  {tr:'mni7 ktir',          en:'very nice (compliment the cut)',   ar:'منيح كتير',        cat:'phrases'},
];

const BRB_DRILLS = [
  {q:'What is "7alla2"?', opts:['barber','hairdresser','stylist','colorist'], ans:0},
  {q:'"2ass sha3r" means?', opts:['haircut','shave','hair dye','trim only'], ans:0},
  {q:'How do you say "beard"?', opts:['lih2a','sha3r','misht','7ala2a'], ans:0},
  {q:'"ta7fif" refers to?', opts:['trim / thin out','full cut','shave','dye'], ans:0},
  {q:'How do you say "hair gel"?', opts:['jel','spray sha3r','sab8a','mzayyin'], ans:0},
  {q:'"sab8a" means?', opts:['hair dye / coloring','shampoo','hair spray','beard oil'], ans:0},
  {q:'How do you say "scissors"?', opts:['ma2ass','mawziyye','misht','ma2ass'], ans:0},
  {q:'"coiffeur" in Lebanese context means?', opts:['hair salon / stylist','barber only','male hairdresser','beauty supply shop'], ans:0},
  {q:'How do you say "how much for a haircut?"', opts:['2addesh l-2as?','shu badak?','2ass w bass','mni7 ktir'], ans:0},
  {q:'"sfif" refers to?', opts:['fade / taper cut','razor shave','straight cut','blow dry'], ans:0},
  {q:'How do you say "just a trim / cut only"?', opts:['2ass w bass','ta7fif min l-janabein','3al makina','shu badak?'], ans:0},
  {q:'"mawziyye" is?', opts:['razor / straight razor','comb','scissors','clipper'], ans:0},
  {q:'How do you say "hair spray"?', opts:['spray sha3r','jel','sab8a','msa3ed'], ans:0},
  {q:'"3al makina" means?', opts:['with the clipper','with scissors','with razor','by hand'], ans:0},
  {q:'How do you say "very nice"?', opts:['mni7 ktir','2ass w bass','shu badak?','ta7fif'], ans:0},
];

const BRB_TIPS = [
  {title:'The Lebanese 7alla2: A Social Institution', body:'The Lebanese barbershop — "7ala2a" — is far more than a place to get a "2ass sha3r" (haircut). It\'s a neighborhood social hub. Your "7alla2" (barber) knows your family, your job, your politics, and your marital status. He gives opinions freely. He remembers how you like your hair without asking. In Lebanon, switching barbershops is a betrayal — men often stay loyal to the same 7alla2 for decades, following him if he moves. The 7ala2a is where men get news, gossip, and advice alongside the haircut. Nothing is rushed.'},
  {title:'The French Legacy: Coiffeur Culture', body:'"Coiffeur" (كوافور) — borrowed directly from French — means a full hair salon, usually with both male and female sections. Lebanon\'s French Mandate period (1920–1943) left a lasting vocabulary in beauty and fashion. The coiffeur is upscale; the 7ala2a is neighborhood. A coiffeur does "sab8 sha3r" (hair coloring), "manicure," and "3leje rasse" (scalp treatments). Prices at a coiffeur are negotiated less — they\'re posted. At the corner 7ala2a, "2addesh l-2as?" (how much for a haircut?) always opens a conversation.'},
  {title:'The Art of the Lebanese Fade', body:'"Sfif" — the fade or taper — became the dominant style in Lebanese barbershops after 2010. Young Lebanese men take their hair seriously. The "sfif" requires precision: "ta7fif min l-janabein" (thin from the sides), "3al makina" (with the clipper) at different guard numbers, blended seamlessly. Lebanese barbers learned from diaspora trends — Beirut barbershops now rival the best in London or New York. The conversation is specific: how high the fade starts, how sharp the line, whether to keep length on top. A "mni7 ktir" (very nice) from customers is earned, not given.'},
  {title:'The Beard Renaissance', body:'"Lih2a" — beard — was once associated with older men or religious conservatism in Lebanon. That changed in the 2010s: beards became fashion statements. Young Lebanese men now ask for "dwa2" (beard shave/shape) alongside their haircut. The "7alla2" uses the "mawziyye" (straight razor) for precise beard lines — a skill passed down over generations. Beard products — "jel," "spray sha3r," beard oils — fill the shelves. A well-groomed "lih2a" paired with a "sfif" is the signature Lebanese male look of the 2020s.'},
  {title:'Negotiating at the 7ala2a', body:'At a Lebanese barbershop, the exchange follows a ritual. You walk in: "shu badak?" (what do you want?). You answer: "2ass w bass" (just a cut) or describe exactly what you need. Then: "2addesh l-2as?" (how much?) — a question asked even if you already know, because negotiation is relationship. If you come regularly, the price may drop or extras get added. "Min2addesh khalliha" (leave it this long) with a hand gesture is the universal length measurement. No ruler needed. After: "mni7 ktir" — always say it, even if you need to come back to fix something. The 7alla2 has feelings.'},
  {title:'Hair Color & the Modern Lebanese Salon', body:'"Sab8 sha3r" (hair coloring) went from occasional service to weekly appointment for many Lebanese women — and increasingly men. The "coiffeur" (hair salon) industry is one of Lebanon\'s most resilient despite economic crises. "Sab8a" (hair dye) services continued through power cuts, the pandemic, and financial collapse — Lebanese would sooner cut other expenses than skip the salon. The "msa3ed" (blow dryer) runs off generator when grid electricity fails. The "spray sha3r" and "jel" are stocked in USD in premium salons. Hair maintenance, in Lebanon, is non-negotiable.'},
];
