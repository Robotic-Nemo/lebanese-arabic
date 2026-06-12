// R1002 — NEW FEATURE: Lebanese Post Office & Shipping Abroad (pst)

const PST_WORDS = [
  { ar: 'بريد', tr: 'barid', en: 'mail / post', cat: 'basics' },
  { ar: 'مكتب البريد', tr: 'maktab il-barid', en: 'post office', cat: 'basics' },
  { ar: 'طرد', tr: 'Tard', en: 'package / parcel', cat: 'basics' },
  { ar: 'ظرف', tr: 'Zarf', en: 'envelope', cat: 'basics' },
  { ar: 'طابع', tr: 'Taabe3', en: 'stamp', cat: 'basics' },
  { ar: 'تسليم', tr: 'taslim', en: 'delivery', cat: 'basics' },
  { ar: 'موظف البريد', tr: 'mwaZZaf il-barid', en: 'postal clerk', cat: 'people' },
  { ar: 'ساعي البريد', tr: 'sa3i il-barid', en: 'postman / mail carrier', cat: 'people' },
  { ar: 'المرسل', tr: 'il-mursel', en: 'sender', cat: 'people' },
  { ar: 'المستلم', tr: 'il-mustalam', en: 'recipient', cat: 'people' },
  { ar: 'شحن', tr: 'sha7in', en: 'shipping / freight', cat: 'shipping' },
  { ar: 'تتبع الطرد', tr: 'tatabbo3 iT-Tard', en: 'track the package', cat: 'shipping' },
  { ar: 'رقم التتبع', tr: 'raqam it-tatabbo3', en: 'tracking number', cat: 'shipping' },
  { ar: 'جمارك', tr: 'jamarik', en: 'customs', cat: 'shipping' },
  { ar: 'رسوم جمركية', tr: 'rousom jomrokiyye', en: 'customs fees / duties', cat: 'shipping' },
  { ar: 'تصريح جمركي', tr: 'taSri7 jomroki', en: 'customs declaration', cat: 'shipping' },
  { ar: 'بريد مسجل', tr: 'barid masajjal', en: 'registered mail', cat: 'services' },
  { ar: 'توصيل سريع', tr: 'tawSil sari3', en: 'express delivery', cat: 'services' },
  { ar: 'صندوق بريد', tr: 'Sanduq barid', en: 'PO box / mailbox', cat: 'services' },
  { ar: 'إيصال', tr: 'iySal', en: 'receipt', cat: 'services' },
  { ar: 'وزن', tr: 'wazin', en: 'weight', cat: 'services' },
  { ar: 'لبنان بوست', tr: 'Libnan Post', en: 'Liban Post — Lebanon\'s postal service', cat: 'local' },
  { ar: 'الغربة', tr: 'il-Ghurbe', en: 'the diaspora / being abroad — why packages get sent', cat: 'local' },
  { ar: 'واسطة', tr: 'wasTa', en: 'connections / knowing someone — needed to speed things up', cat: 'local' },
  { ar: 'طابور', tr: 'Tabour', en: 'queue / line at the post office', cat: 'local' },
];

const PST_DRILLS = [
  { q: 'How do you say "post office" in Lebanese Arabic?', opts: ['maktab il-barid','sha7in','jamarik','Tard'], ans: 0 },
  { q: 'What is "Tard" (طرد)?', opts: ['envelope','stamp','package / parcel','receipt'], ans: 2 },
  { q: 'What does "jamarik" (جمارك) mean?', opts: ['delivery','customs','post office','postman'], ans: 1 },
  { q: 'How do you say "tracking number"?', opts: ['raqam it-tatabbo3','Taabe3','Zarf','Tabour'], ans: 0 },
  { q: 'What is "wasTa" (واسطة) in the post office context?', opts: ['a stamp','a receipt','connections to speed things up','express delivery'], ans: 2 },
  { q: 'How do you say "registered mail"?', opts: ['barid masajjal','barid msari3','tawSil sari3','sha7in'], ans: 0 },
  { q: 'What does "il-Ghurbe" (الغربة) mean?', opts: ['the queue','the post office','the diaspora / being abroad','the customs clerk'], ans: 2 },
  { q: 'How do you say "sender" in Lebanese Arabic?', opts: ['il-mustalam','il-mursel','sa3i il-barid','mwaZZaf il-barid'], ans: 1 },
  { q: 'What is "rousom jomrokiyye"?', opts: ['tracking number','customs fees / duties','delivery receipt','PO box'], ans: 1 },
  { q: 'How do you say "express delivery"?', opts: ['tawSil sari3','barid masajjal','taSri7 jomroki','iySal'], ans: 0 },
  { q: 'What does "Tabour" (طابور) mean?', opts: ['stamp','mailbox','queue / line','weight'], ans: 2 },
  { q: 'How do you say "stamp" in Lebanese Arabic?', opts: ['Zarf','Taabe3','Tard','Sanduq barid'], ans: 1 },
];

const PST_TIPS = [
  { title: '📬 Liban Post Reality', body: 'Liban Post is Lebanon\'s official postal service, but delivery reliability varies widely. Many Lebanese use private couriers like DHL or Aramex for important packages, especially to and from the diaspora.' },
  { title: '🛃 Customs Culture', body: 'Packages entering Lebanon often face unpredictable customs fees ("rousom jomrokiyye"). Having "wasTa" (connections) at the customs office can make a big difference in how quickly — and cheaply — your parcel clears.' },
  { title: '📦 Diaspora Packages', body: 'Sending packages from "il-Ghurbe" (abroad) to family in Lebanon is a deeply emotional act. Common contents include specific medicines, clothes, electronics, and sweets unavailable locally during hard times.' },
  { title: '🔢 Tracking Chaos', body: 'Lebanese trackng systems can be inconsistent. A common experience: the "raqam it-tatabbo3" (tracking number) stops updating mid-journey. WhatsApp your contact at the post office is often more reliable than the official system.' },
];
