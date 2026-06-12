// R930 — NEW FEATURE: Lebanese Photography & Social Media Culture (pht)

const PHT_WORDS = [
  { ar: 'خودلي صورة', tr: 'khud-li soora', en: 'take my picture' },
  { ar: 'فتو', tr: 'foto', en: 'photo / picture' },
  { ar: 'سيلفي', tr: 'selfie', en: 'selfie' },
  { ar: 'انستقرام', tr: 'instagram', en: 'Instagram' },
  { ar: 'تيك توك', tr: 'tiktok', en: 'TikTok' },
  { ar: 'واتساب', tr: 'whatsapp', en: 'WhatsApp' },
  { ar: 'ستوري', tr: 'story', en: 'story (social media)' },
  { ar: 'بوست', tr: 'post', en: 'post (social media)' },
  { ar: 'لايك', tr: 'like', en: 'like (social media)' },
  { ar: 'شير', tr: 'share', en: 'share' },
  { ar: 'فولور', tr: 'follower', en: 'follower' },
  { ar: 'فلتر', tr: 'filter', en: 'filter' },
  { ar: 'كاميرا', tr: 'camera', en: 'camera' },
  { ar: 'فيديو', tr: 'video', en: 'video' },
  { ar: 'لايف', tr: 'live', en: 'live stream' },
  { ar: 'رييلز', tr: 'reels', en: 'reels' },
  { ar: 'حسن صورتك', tr: '7assen soortak', en: 'fix your picture (edit the photo)' },
  { ar: 'بدي انزل صورة', tr: 'baddi anzil soora', en: 'I want to post a photo' },
  { ar: 'شو اخدت؟', tr: 'shu akhadt?', en: 'what did you take (what did you photograph)?' },
  { ar: 'صوّرني', tr: 'sawwir-ni', en: 'photograph me' },
  { ar: 'الصورة طالعت منيح', tr: 'es-soora Tele3et mni7', en: 'the photo came out nice' },
  { ar: 'مش شايف بالصورة', tr: 'mish shayef bis-soora', en: 'I don\'t look good in the photo' },
  { ar: 'هيدي شخصيتي', tr: 'haydi shakhsiyti', en: 'this is my persona / aesthetic' },
  { ar: 'ضيف كابشن', tr: 'Dyyef caption', en: 'add a caption' },
  { ar: 'كتبلك تاق', tr: 'katab-lak tag', en: 'tagged you' },
  { ar: 'شيل التاق', tr: 'shil et-tag', en: 'remove the tag' },
  { ar: 'خصوصية', tr: 'khusoosiyye', en: 'privacy' },
  { ar: 'بلوك', tr: 'block', en: 'block (someone)' },
  { ar: 'منشن', tr: 'mention', en: 'mention' },
  { ar: 'هاشتاق', tr: 'hashtag', en: 'hashtag' },
];

const PHT_DRILLS = [
  { q: 'How do you say "take my picture" in Lebanese?', opts: ['خودلي صورة','خودلي حاجة','خودلي وقت','خودلي مصاري'], ans: 0 },
  { q: 'What does "بدي انزل صورة" mean?', opts: ['I want to delete a photo','I want to post a photo','I want to take a photo','I want to zoom in'], ans: 1 },
  { q: '"صوّرني" means...', opts: ['edit me','follow me','photograph me','block me'], ans: 2 },
  { q: 'What is "سيلفي" in English?', opts: ['video','selfie','story','reel'], ans: 1 },
  { q: 'What does "ستوري" refer to?', opts: ['a short film','a social media story','a photo album','a live stream'], ans: 1 },
  { q: '"الصورة طالعت منيح" means...', opts: ['the photo is blurry','the photo came out nice','the photo was deleted','the photo is old'], ans: 1 },
  { q: 'What does "شيل التاق" mean?', opts: ['add a caption','remove the tag','add a hashtag','share the post'], ans: 1 },
  { q: '"كتبلك تاق" means...', opts: ['sent you a message','blocked you','tagged you','followed you'], ans: 2 },
  { q: 'What is "فلتر" in Lebanese?', opts: ['follower','filter','poster','caption'], ans: 1 },
  { q: '"بدو لايك" in Lebanese is asking for...', opts: ['a like','a follow','a share','a tag'], ans: 0 },
  { q: 'What does "حسن صورتك" mean?', opts: ['delete your photo','take your photo','fix / edit your photo','share your photo'], ans: 2 },
  { q: '"خصوصية" in social media context means...', opts: ['popularity','privacy','activity','following'], ans: 1 },
  { q: 'What does "مش شايف بالصورة" mean?', opts: ['I\'m not in the photo','I don\'t look good in the photo','I can\'t see the photo','I deleted the photo'], ans: 1 },
  { q: '"لايف" on social media means...', opts: ['caption','live stream','filter','reel'], ans: 1 },
  { q: 'What does "ضيف كابشن" mean?', opts: ['add a caption','remove a tag','block someone','post a story'], ans: 0 },
  { q: '"هاشتاق" is the Lebanese word for...', opts: ['mention','hashtag','filter','follower'], ans: 1 },
];

const PHT_TIPS = [
  {
    title: 'Photography Is a Love Language',
    body: 'Lebanese people treat photos as social currency. Whether at a restaurant, a wedding, or a casual outing, "خودلي صورة" is a constant request. Capturing the moment matters — and so does how good you look in it.',
  },
  {
    title: 'Food Photography Etiquette',
    body: 'Never start eating before photos are taken. The phrase "بس لحظة بدي صور الأكل" (wait, I want to photograph the food) is almost always spoken before any meal in a nice setting. It\'s a compliment to the restaurant and a social norm.',
  },
  {
    title: 'WhatsApp Is King',
    body: 'In Lebanon, WhatsApp groups run everything — family updates, neighborhood news, business deals, political debates. "نزّلتلك عالواتساب" (I sent it to you on WhatsApp) is how most communication gets done.',
  },
  {
    title: 'Instagram Culture',
    body: 'Lebanon has a vibrant Instagram scene. Beirut restaurants, beaches, and mountain spots are heavily documented. A perfect Instagram aesthetic ("هيدي شخصيتي") matters. Being tagged in a bad photo ("مش شايف بالصورة") is a minor social crisis.',
  },
  {
    title: 'Privacy and Family Dynamics',
    body: 'With multigenerational WhatsApp family groups, privacy ("خصوصية") is nuanced. Young Lebanese navigate carefully what to post publicly vs. what stays off social media. The phrase "لا تنزل هالصورة" (don\'t post this photo) is very common.',
  },
];
