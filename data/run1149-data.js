// R1149 — NEW FEATURE: Lebanese Food Delivery & Tawseel Culture (tws)

const TWS_WORDS = [
  { ar: 'توصيل', tr: 'tawseel', en: 'delivery' },
  { ar: 'طلب', tr: 'talab', en: 'order' },
  { ar: 'تطبيق', tr: 'tatbee2', en: 'app / application' },
  { ar: 'سائق', tr: 'sa\'e2', en: 'driver / courier' },
  { ar: 'عنوان', tr: '3inwan', en: 'address' },
  { ar: 'حارة', tr: '7ara', en: 'neighborhood / quarter' },
  { ar: 'طابق', tr: 'tabiq', en: 'floor / storey' },
  { ar: 'جرس', tr: 'jaras', en: 'doorbell' },
  { ar: 'مبرّد', tr: 'mbarrad', en: 'cooler bag / insulated bag' },
  { ar: 'تأخير', tr: 'ta\'kheer', en: 'delay' },
  { ar: 'تقييم', tr: 'ta2yeem', en: 'rating / review' },
  { ar: 'إكراميّة', tr: 'ikramiyye', en: 'tip (for driver)' },
  { ar: 'دفع نقداً', tr: 'daf3 na2dan', en: 'cash payment' },
  { ar: 'بطاقة', tr: 'bta2a', en: 'card (payment)' },
  { ar: 'مطعم', tr: 'mat3am', en: 'restaurant' },
  { ar: 'ساعة توصيل', tr: 'sa3et tawseel', en: 'delivery time' },
  { ar: 'تتبّع', tr: 'tatab3', en: 'tracking / follow' },
  { ar: 'إلغاء', tr: 'ilghaa\'', en: 'cancellation' },
  { ar: 'رسوم التوصيل', tr: 'rusum it-tawseel', en: 'delivery fee' },
  { ar: 'حار / بارد', tr: '7ar / bared', en: 'hot / cold (food temp)' },
];

const TWS_DRILLS = [
  {
    q: 'How do you say "delivery" in Lebanese Arabic?',
    opts: ['talab', 'tawseel', '3inwan', 'tatbee2'],
    ans: 1
  },
  {
    q: 'What does "talab" mean?',
    opts: ['driver', 'address', 'order', 'delay'],
    ans: 2
  },
  {
    q: 'How do you say "tip for the driver" in Lebanese?',
    opts: ['ta2yeem', 'ikramiyye', 'bta2a', 'rusum it-tawseel'],
    ans: 1
  },
  {
    q: '"Ta\'kheer" means:',
    opts: ['tracking', 'cancellation', 'rating', 'delay'],
    ans: 3
  },
  {
    q: 'How do you say "delivery fee"?',
    opts: [' sa3et tawseel', 'daf3 na2dan', 'rusum it-tawseel', 'ilghaa\''],
    ans: 2
  },
  {
    q: 'What is "ta2yeem"?',
    opts: ['rating / review', 'address', 'floor', 'app'],
    ans: 0
  },
  {
    q: '"3inwan" means:',
    opts: ['doorbell', 'neighborhood', 'address', 'restaurant'],
    ans: 2
  },
  {
    q: 'How do you say "cash payment"?',
    opts: ['bta2a', 'daf3 na2dan', 'tatbee2', 'tatab3'],
    ans: 1
  },
];

const TWS_TIPS = [
  'Apps like Toters, Talabat, and HungerStation dominate Lebanese food delivery — drivers often call when lost in narrow Beirut streets.',
  'Always give a nearby landmark (3alam — علم) with your address: "3and Starbucks" or "2oddém l-jami3" — Lebanese streets often lack clear numbering.',
  'Cash (na2d) is still king for delivery payments in Lebanon, though card payments are growing with PoS machines on delivery bikes.',
  'Giving the driver an ikramiyye (tip) is culturally appreciated, especially in bad traffic (za77me) or bad weather — even 5,000 LBP is noticed.',
];
