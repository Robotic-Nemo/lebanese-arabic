// R732 — NEW FEATURE: Lebanese Beauty & Grooming (bty)

const BTY_CATS = ['hair','face','nails','phrases'];

const BTY_WORDS = [
  // hair
  {tr:'kwafeer',        en:'hair salon / hairdresser',  ar:'كوافير',        cat:'hair'},
  {tr:'7alaa2',         en:'barber (men)',               ar:'حلاق',          cat:'hair'},
  {tr:'2uss sha3r',     en:'haircut',                   ar:'قص شعر',        cat:'hair'},
  {tr:'sabgha',         en:'hair dye / coloring',       ar:'صبغة',          cat:'hair'},
  {tr:'sishwaah',       en:'blow dry (from séchoir)',   ar:'سيشوار',        cat:'hair'},
  {tr:'fardi',          en:'straightening treatment',   ar:'فردي',          cat:'hair'},
  {tr:'keratin',        en:'keratin treatment',         ar:'كيراتين',       cat:'hair'},
  {tr:'ta7rish',        en:'curling / texturing',       ar:'تحريش',         cat:'hair'},
  // face
  {tr:'jilse',          en:'beauty session / facial',   ar:'جلسة',          cat:'face'},
  {tr:'makiyaaj',       en:'makeup',                    ar:'ميكياج',        cat:'face'},
  {tr:'foundation',     en:'foundation',                ar:'فاونديشن',      cat:'face'},
  {tr:'riimil',         en:'mascara',                   ar:'ريميل',         cat:'face'},
  {tr:'a7mar shfaayef', en:'lipstick',                  ar:'أحمر شفايف',    cat:'face'},
  {tr:'boudre',         en:'face powder',               ar:'بودرة',         cat:'face'},
  {tr:'kreem',          en:'cream / moisturizer',       ar:'كريم',          cat:'face'},
  {tr:'3atir',          en:'perfume / scent',           ar:'عطير',          cat:'face'},
  // nails
  {tr:'2Dafir',         en:'nails',                     ar:'أظافر',         cat:'nails'},
  {tr:'manikyeer',      en:'manicure',                  ar:'مانيكير',       cat:'nails'},
  {tr:'pedikyeer',      en:'pedicure',                  ar:'باديكير',       cat:'nails'},
  {tr:'laakk',          en:'nail polish (from laque)',  ar:'لاك',           cat:'nails'},
  {tr:'7laaqe',         en:'waxing / epilation',        ar:'حلاقة',         cat:'nails'},
  {tr:'massaje',        en:'massage',                   ar:'مساج',          cat:'nails'},
  // phrases
  {tr:'3amle sha3rak',          en:'getting your hair done',          ar:'عاملة شعرك',        cat:'phrases'},
  {tr:'min een 3amelte?',       en:'where did you get it done?',      ar:'من وين عاملتي؟',    cat:'phrases'},
  {tr:'helo kteer',             en:'very beautiful',                  ar:'حلو كتير',          cat:'phrases'},
  {tr:'byombelet',              en:'it\'s perfect! (from complète)',  ar:'بيكمبله',           cat:'phrases'},
  {tr:'baayin sha3rak',         en:'your hair looks great',           ar:'بايّن شعرك',        cat:'phrases'},
  {tr:'jilset 3inaaye',         en:'care / beauty session',           ar:'جلسة عناية',        cat:'phrases'},
];

const BTY_DRILLS = [
  {q:'What does "kwafeer" mean?', opts:['hair salon / hairdresser','barber for men','beauty session','nail salon'], a:0},
  {q:'"sabgha" means?', opts:['hair dye / coloring','haircut','blow dry','straightening'], a:0},
  {q:'What is "sishwaah"?', opts:['blow dry (from séchoir)','hair dye','curling treatment','keratin'], a:0},
  {q:'"makiyaaj" means?', opts:['makeup','moisturizer','perfume','mascara'], a:0},
  {q:'How do you say "nail polish" in Lebanese?', opts:['laakk','manikyeer','pedikyeer','2Dafir'], a:0},
  {q:'"riimil" is?', opts:['mascara','lipstick','face powder','foundation'], a:0},
  {q:'What does "jilse" mean in beauty context?', opts:['beauty session / facial','haircut','manicure','waxing'], a:0},
  {q:'"7laaqe" in a beauty salon means?', opts:['waxing / epilation','haircut','manicure','massage'], a:0},
  {q:'What is "fardi"?', opts:['straightening treatment','hair dye','curling','blow dry'], a:0},
  {q:'"byombelet" means?', opts:['it\'s perfect! (from complète)','it\'s beautiful','where did you do it?','very nice'], a:0},
  {q:'How do you say "manicure" in Lebanese?', opts:['manikyeer','pedikyeer','laakk','2Dafir'], a:0},
  {q:'"3atir" means?', opts:['perfume / scent','cream','makeup','face powder'], a:0},
  {q:'What does "baayin sha3rak" mean?', opts:['your hair looks great','where did you do it?','very beautiful','getting hair done'], a:0},
  {q:'"a7mar shfaayef" is?', opts:['lipstick','mascara','foundation','face powder'], a:0},
  {q:'How do you say "where did you get it done?"', opts:['min een 3amelte?','3amle sha3rak','helo kteer','baayin sha3rak'], a:0},
];

const BTY_TIPS = [
  {title:'Lebanon\'s Beauty Obsession', body:'Lebanon consistently ranks among the world\'s highest per-capita spenders on cosmetics and salon services. Beirut has more beauty salons per capita than almost any city globally. Appearance is central to Lebanese social life — looking "mzebbad" (polished/put-together) is a cultural value, not vanity.'},
  {title:'The Lebanese Hairdresser (Kwafeer)', body:'The Lebanese hair salon is a social institution. Women go weekly — not just for cuts but for blow-dries ("sishwaah"), dye ("sabgha"), and long gossip sessions. Hairdressers know everything. Saying "3amle sha3rak?" (did you get your hair done?) is a standard greeting after a fresh style.'},
  {title:'Men\'s Grooming Culture', body:'Lebanese men are equally invested in appearance. The "7alaa2" (barber) is a male social hub — sharp fades, beard trims, and face shaves with hot towels. Young Lebanese men spend significantly on grooming. "Shaabak mzebbad" (you\'re looking sharp) is a genuine compliment between men.'},
  {title:'French-Origin Beauty Words', body:'Lebanese beauty vocabulary is heavily French-derived: "sishwaah" (séchoir/hair dryer), "laakk" (laque/nail polish), "boudre" (poudre/powder), "jilse" treatment words. Even "byombelet" (from complète) meaning "perfect" entered Lebanese from French colonial influence. French beauty culture shaped Lebanese beauty language.'},
  {title:'"Byombelet" and Lebanese Compliment Culture', body:'"Byombelet!" is the ultimate compliment — from French "complète" (complete/perfect). Said when someone looks flawless. Lebanese compliment culture is effusive: "helo kteer" (very beautiful), "baayin sha3rak" (your hair looks amazing). Complimenting someone\'s appearance is not intrusive — it\'s warm hospitality.'},
  {title:'Waxing & Nail Culture', body:'Lebanese women wax ("7laaqe") religiously — legs, arms, face. Nail salons ("manikyeer / pedikyeer") are everywhere and affordable. Gel nails, nail art, and elaborate designs are mainstream. Before weddings, holidays, and any major occasion, a full "jilset 3inaaye" (beauty session) is non-negotiable — nails + waxing + hair + makeup.'},
];
