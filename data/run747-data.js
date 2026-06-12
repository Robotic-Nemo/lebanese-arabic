// R747 — NEW FEATURE: Lebanese Barbershop & Men's Social Culture (bsp)

const BSP_CATS = ['haircut','shave','talk','phrases'];

const BSP_WORDS = [
  // haircut
  {tr:'7alla2',          en:'barber',                         ar:'حلّاق',          cat:'haircut'},
  {tr:'7ala2a',          en:'barbershop',                     ar:'حلاقة',          cat:'haircut'},
  {tr:'2ass',            en:'cut (hair)',                     ar:'قص',             cat:'haircut'},
  {tr:'sha3r',           en:'hair',                           ar:'شعر',            cat:'haircut'},
  {tr:'mashet',          en:'comb',                           ar:'مشط',            cat:'haircut'},
  {tr:'mshat',           en:'to comb',                        ar:'مسّط',           cat:'haircut'},
  {tr:'tasfif',          en:'styling / blow dry',             ar:'تسفيف',          cat:'haircut'},
  {tr:'2ass 3ala jeenb', en:'fade on the side',               ar:'قص على جنب',     cat:'haircut'},
  // shave
  {tr:'7ala2a',          en:'shave',                          ar:'حلاقة',          cat:'shave'},
  {tr:'7alla2 l-da2n',   en:'shave the beard',                ar:'حلّق الدقن',     cat:'shave'},
  {tr:'da2n',            en:'beard',                          ar:'دقن',            cat:'shave'},
  {tr:'sharb',           en:'mustache',                       ar:'شارب',           cat:'shave'},
  {tr:'masous',          en:'razor / blade',                  ar:'موس',            cat:'shave'},
  {tr:'kream 7ala2a',    en:'shaving cream',                  ar:'كريم حلاقة',     cat:'shave'},
  // talk
  {tr:'2a3 3ala l-kursi',en:'sit in the chair',               ar:'قعد على الكرسي', cat:'talk'},
  {tr:'kif baddo sha3ro',en:'how he wants his hair',          ar:'كيف بدّو شعرو',  cat:'talk'},
  {tr:'ta3 3a l-7alla2', en:'go to the barber',               ar:'تع عالحلاق',     cat:'talk'},
  {tr:'ktir tawil',      en:'too long (hair)',                ar:'كتير طويل',      cat:'talk'},
  {tr:'shwayye min hon', en:'a little from here',             ar:'شوية من هون',    cat:'talk'},
  {tr:'7lawi ktir',      en:'looks great',                    ar:'حلاوي كتير',     cat:'talk'},
  {tr:'la2 shwayye bass', en:'no just a little',              ar:'لا شوية بس',     cat:'talk'},
  // phrases
  {tr:'2addesh l-7ala2a?',    en:'how much for a haircut?',       ar:'قديش الحلاقة؟',      cat:'phrases'},
  {tr:'badde 2ass bass',       en:'just a cut please',             ar:'بدي قص بس',          cat:'phrases'},
  {tr:'lyom mfi l-7alla2',     en:'went to the barber today',      ar:'اليوم مفي الحلاق',   cat:'phrases'},
  {tr:'sha3ro 3al moda',       en:'his hair is trendy',            ar:'شعرو على المودة',    cat:'phrases'},
  {tr:'7alla2na min zbene',    en:'our barber for ages',           ar:'حلّاقنا من زمان',    cat:'phrases'},
  {tr:'ndaf l-ma2ass',         en:'clean the scissors',            ar:'نظّف المقص',         cat:'phrases'},
  {tr:'3am y7ki m3 l-7alla2',  en:'chatting with the barber',      ar:'عم يحكي مع الحلاق',  cat:'phrases'},
];

const BSP_DRILLS = [
  {q:'What does "7alla2" mean?', opts:['barber','hairdresser (female)','salon owner','stylist'], a:0},
  {q:'"da2n" means?', opts:['beard','mustache','sideburns','hair'], a:0},
  {q:'How do you say "haircut"?', opts:['7ala2a','tasfif','mashet','masous'], a:0},
  {q:'"sharb" refers to?', opts:['mustache','beard','sideburn','eyebrow'], a:0},
  {q:'What is "masous"?', opts:['razor / blade','scissors','comb','clipper'], a:0},
  {q:'How do you say "hair"?', opts:['sha3r','da2n','sharb','tasfif'], a:0},
  {q:'"2ass" means?', opts:['cut (hair)','style','comb','wash'], a:0},
  {q:'What does "tasfif" mean?', opts:['styling / blow dry','shave','wash','cut'], a:0},
  {q:'How do you say "comb"?', opts:['mashet','masous','kream','sha3r'], a:0},
  {q:'"ktir tawil" means?', opts:['too long','very short','looks great','a little'], a:0},
  {q:'How do you say "just a cut please"?', opts:['badde 2ass bass','7alla2 l-da2n','2addesh l-7ala2a','sha3ro 3al moda'], a:0},
  {q:'What does "2addesh l-7ala2a?" mean?', opts:['how much for a haircut?','when can I come?','how long will it take?','is the barber here?'], a:0},
  {q:'"7lawi ktir" means?', opts:['looks great','too expensive','very long','cut more'], a:0},
  {q:'What is "shwayye min hon"?', opts:['a little from here','cut it all','just a trim','from the top'], a:0},
  {q:'How do you say "barber shop"?', opts:['7ala2a','7alla2','mashet','tasfif'], a:0},
];

const BSP_TIPS = [
  {title:'The Lebanese Barbershop: A Social Institution', body:'The Lebanese barbershop (7ala2a) is not just a place to get a haircut — it\'s a community center. Men gather to discuss politics, football, local gossip, and family news while waiting their turn. The barber (7alla2) is often a trusted confidant, advisor, and entertainer. The same men come back every 2-3 weeks for decades. "7alla2na min zbene" (our barber since forever) is a badge of loyalty.'},
  {title:'The Art of the Lebanese Hot Shave', body:'Lebanese barbershops are famous for the traditional hot shave. A thick lather of kream 7ala2a, a straight masous (razor blade), hot towel on the face, cold towel after — the ritual takes 20 minutes and costs less than a coffee. Arab men treat the face shave as both grooming and relaxation. Many men go weekly specifically for the shave, not the cut.'},
  {title:'Conversation Rituals at the Barbershop', body:'The conversation at the Lebanese barbershop follows an unwritten script: start with health and family greetings, move to football (Man City or Barcelona?), then politics (always passionate), then neighbor gossip. No topic is off limits. The barber moderates like a talk show host. When it\'s your turn in the chair, the conversation doesn\'t stop — it just gets quieter and more focused on your head.'},
  {title:'Style Vocabulary: The Lebanese Look', body:'"Sha3ro 3al moda" (hair on trend) — Lebanese men are remarkably style-conscious. The fade (2ass 3ala jeenb), slicked-back styles, undercuts — Lebanese barbershops follow international trends closely but add a local flair. Beirut\'s barbershops are Instagram-worthy, with LED lighting, vintage chairs, and barbers who trained in Milan or Dubai. The craft has been elevated into an art form.'},
  {title:'Price and Loyalty', body:'"2addesh l-7ala2a?" (how much for a cut?) ranges from 5,000 LBP to $20 USD depending on the neighborhood and whether you\'re in a basic neighborhood shop or a trendy Gemmayzeh salon. But the price matters less than the relationship. Once you find your 7alla2, you stick with him for years. Moving neighborhoods and switching barbers is a minor personal crisis for Lebanese men.'},
  {title:'The Coffee and the Wait', body:'No barbershop visit is complete without coffee. The barber or a neighborhood boy brings small cups of bitter Lebanese coffee (ahwe sade) or sometimes tea. You sit in plastic chairs, flip through a magazine that\'s three years old, and wait your turn. The wait is part of the experience. Nobody rushes. "3am y7ki m3 l-7alla2" (chatting with the barber) is its own form of therapy.'},
];
