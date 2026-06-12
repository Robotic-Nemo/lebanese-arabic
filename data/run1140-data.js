// R1140 — NEW FEATURE: Lebanese Tailor & Khayat Culture (khy)
const KHY_WORDS = [
  {tr:'khayaT',ar:'خياط',en:'tailor (male)'},
  {tr:'khayaaTe',ar:'خياطة',en:'tailor (female) / sewing'},
  {tr:'maakine',ar:'ماكينة',en:'sewing machine'},
  {tr:'ibra',ar:'إبرة',en:'needle'},
  {tr:'khayT',ar:'خيط',en:'thread'},
  {tr:'2issar',ar:'قصار',en:'hemmer / alteration specialist'},
  {tr:'2assal',ar:'قصّل',en:'shorten (a garment)'},
  {tr:'tawwal',ar:'طوّل',en:'lengthen (a garment)'},
  {tr:'dayya2',ar:'ضيّق',en:'take in / tighten'},
  {tr:'wassa3',ar:'وسّع',en:'let out / widen'},
  {tr:'fassale',ar:'فصالة',en:'fitting / try-on'},
  {tr:'masaTir',ar:'مساطر',en:'measurements'},
  {tr:'Tar7a',ar:'طرحة',en:'fabric length / cut'},
  {tr:'ghaTTe',ar:'غطّة',en:'cover stitch'},
  {tr:'qaTT3',ar:'قطّع',en:'cut (the fabric)'},
  {tr:'bel-yedd',ar:'باليد',en:'handmade'},
  {tr:'2ishal',ar:'إيشال',en:'lining'},
  {tr:'zurar',ar:'زرار',en:'button'},
  {tr:'siHHab',ar:'سحّاب',en:'zipper'},
  {tr:'khem',ar:'خيم',en:'hem'},
  {tr:'darziyye',ar:'درزية',en:'seamstress'},
  {tr:'Trezziyye',ar:'طرزية',en:'embroidery / embroidered piece'},
  {tr:'2addid',ar:'عدّل',en:'alter / adjust'},
  {tr:'TayyarAye',ar:'طيّرآية',en:'loose / too big (slang)'},
  {tr:'ba3d sboo3',ar:'بعد سبوع',en:'ready in a week (classic khayat promise)'},
];

const KHY_DRILLS = [
  {q:'What does "khayaT" mean?',opts:['fabric','tailor (male)','needle','zipper'],a:1},
  {q:'You want the pants taken in — you say:',opts:['tawwal','wassa3','dayya2','2assal'],a:2},
  {q:'"fassale" means:',opts:['hemming','fitting / try-on','sewing machine','button'],a:1},
  {q:'The tailor promises "ba3d sboo3" — that means:',opts:['it\'s ready now','a week from now (classic delay)','in an hour','tomorrow'],a:1},
  {q:'"bel-yedd" means:',opts:['on credit','in a week','handmade','by measurement'],a:2},
  {q:'You want the dress lengthened — you say:',opts:['dayya2','2assal','tawwal','qaTT3'],a:2},
  {q:'"siHHab" is:',opts:['needle','zipper','thread','button'],a:1},
  {q:'"Trezziyye" means:',opts:['lining','hem','embroidery / embroidered piece','fitting'],a:2},
  {q:'"masaTir" are:',opts:['measurements','stitches','buttons','scissors'],a:0},
  {q:'If a shirt is "TayyarAye" it is:',opts:['too tight','perfectly fitted','loose / too big','embroidered'],a:2},
];

const KHY_TIPS = [
  {title:'The Khayat is Everywhere',body:'Every Lebanese neighbourhood has a khayaT or darziyye in a tiny shop. They handle everything from shortening jeans to crafting wedding gowns. Building a relationship with yours earns priority and good prices.'},
  {title:'"Ba3d Sboo3" Culture',body:'The famous phrase "ba3d sboo3" (in a week) rarely means exactly seven days. Budget double. If you need it urgently, say "iza fi2to" (if you can manage it) — never say "I need it tomorrow" or they will still say a week.'},
  {title:'Getting the Right Fit',body:'Lebanese tailors assume you want clothes fitted — not the loose Western cut. Always specify "mesh dayye2 kteer" (not too tight) upfront. Men\'s trousers especially default to very slim in Lebanese tailoring.'},
  {title:'The Wedding Dress Tradition',body:'Many Lebanese brides still go to a local khayaT rather than buy off-the-rack, even for complex gowns. The fassale (fitting session) is a social event with the mother, aunts, and opinions from everyone in the shop.'},
];
