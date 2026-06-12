// R1047 — NEW FEATURE: Lebanese Content Creator & Social Media Culture (crt)

const CRT_WORDS = [
  // platforms & formats
  { ar: 'ريلز', tr: 'reels', eng: 'Reels (short video format)', cat: 'platforms' },
  { ar: 'ستوري', tr: 'stoori', eng: 'Story (24-hour post)', cat: 'platforms' },
  { ar: 'لايف', tr: 'laif', eng: 'Live stream', cat: 'platforms' },
  { ar: 'فيد', tr: 'feed', eng: 'feed (social media timeline)', cat: 'platforms' },
  { ar: 'يوتيوبر', tr: 'youtuubar', eng: 'YouTuber', cat: 'platforms' },
  { ar: 'تيك توكر', tr: 'TikTokkar', eng: 'TikTokker', cat: 'platforms' },
  // engagement
  { ar: 'لايك', tr: 'laik', eng: 'like (reaction)', cat: 'engagement' },
  { ar: 'كومنت', tr: 'komment', eng: 'comment', cat: 'engagement' },
  { ar: 'شير', tr: 'shiir', eng: 'share', cat: 'engagement' },
  { ar: 'سيف', tr: 'seif', eng: 'save (a post)', cat: 'engagement' },
  { ar: 'فولوور', tr: 'foluuwar', eng: 'follower', cat: 'engagement' },
  { ar: 'سبسكرايب', tr: 'subscribe', eng: 'subscribe', cat: 'engagement' },
  // content
  { ar: 'محتوى', tr: 'mu7tawa', eng: 'content', cat: 'content' },
  { ar: 'هاشتاق', tr: 'haashtiiq', eng: 'hashtag', cat: 'content' },
  { ar: 'ترند', tr: 'trend', eng: 'trend / trending topic', cat: 'content' },
  { ar: 'فايرل', tr: 'vaayrl', eng: 'viral', cat: 'content' },
  { ar: 'بوست', tr: 'boost', eng: 'post / boost (paid promotion)', cat: 'content' },
  { ar: 'أكاونت', tr: '2akaunt', eng: 'account (social media)', cat: 'content' },
  // creator vocab
  { ar: 'إنفلونسر', tr: 'influensar', eng: 'influencer', cat: 'creator' },
  { ar: 'كريتر', tr: 'kriitar', eng: 'content creator', cat: 'creator' },
  { ar: 'كريتيف', tr: 'kriitif', eng: 'creative (adj)', cat: 'creator' },
  { ar: 'كولاب', tr: 'kolaab', eng: 'collab (collaboration)', cat: 'creator' },
  { ar: 'سبونسر', tr: 'spoonsar', eng: 'sponsor / paid partnership', cat: 'creator' },
  { ar: 'ستوديو', tr: 'stoodyo', eng: 'studio (filming space)', cat: 'creator' },
  // Lebanese expressions
  { ar: 'شو رأيك؟', tr: 'shuu ra2yak?', eng: 'what do you think? (Lebanese CTA)', cat: 'expressions' },
  { ar: 'خبرني بالكومنتات', tr: 'khibbirni bil-kommentat', eng: 'tell me in the comments', cat: 'expressions' },
  { ar: 'إيجابية كتير', tr: 'iijaabiyye ktiir', eng: 'very positive (vibe)', cat: 'expressions' },
  { ar: 'اشتركوا بالقناة', tr: 'ishtarikuu bil-2anaa', eng: 'subscribe to the channel', cat: 'expressions' },
  { ar: 'دعموا البوست', tr: 'da3muu il-boost', eng: 'support the post / boost it', cat: 'expressions' },
  { ar: 'شاركوا مع أصحابكم', tr: 'shaarikuu ma3 aS7aabkon', eng: 'share with your friends', cat: 'expressions' },
];

const CRT_CATS = ['all', 'platforms', 'engagement', 'content', 'creator', 'expressions'];

const CRT_DRILLS = [
  {
    q: '"reels" (ريلز) in Lebanese social media is:',
    opts: ['a live stream', 'a short video format', 'a story', 'a hashtag'],
    ans: 1
  },
  {
    q: '"laif" (لايف) means:',
    opts: ['a like', 'a save', 'live stream', 'a feed'],
    ans: 2
  },
  {
    q: '"foluuwar" (فولوور) is:',
    opts: ['a comment', 'a follower', 'a creator', 'a sponsor'],
    ans: 1
  },
  {
    q: '"mu7tawa" (محتوى) means:',
    opts: ['platform', 'content', 'account', 'studio'],
    ans: 1
  },
  {
    q: '"haashtiiq" (هاشتاق) is:',
    opts: ['a trend', 'a hashtag', 'a boost', 'a collab'],
    ans: 1
  },
  {
    q: '"vaayrl" (فايرل) means:',
    opts: ['trending', 'viral', 'boosted', 'shared'],
    ans: 1
  },
  {
    q: '"influensar" (إنفلونسر) is:',
    opts: ['a subscriber', 'a comment', 'an influencer', 'a platform'],
    ans: 2
  },
  {
    q: '"kolaab" (كولاب) is:',
    opts: ['a collab (collaboration)', 'a studio', 'a sponsor', 'a Reel'],
    ans: 0
  },
  {
    q: '"spoonsar" (سبونسر) means:',
    opts: ['a follower', 'a content creator', 'sponsor / paid partnership', 'a share'],
    ans: 2
  },
  {
    q: '"trend" (ترند) is:',
    opts: ['a story', 'a feed', 'a trending topic', 'a hashtag'],
    ans: 2
  },
  {
    q: '"seif" (سيف) in social media means:',
    opts: ['share', 'like', 'save (a post)', 'subscribe'],
    ans: 2
  },
  {
    q: '"shuu ra2yak?" (شو رأيك؟) is:',
    opts: ['share with friends', 'subscribe to channel', 'what do you think? (CTA)', 'tell me in the comments'],
    ans: 2
  },
  {
    q: '"khibbirni bil-kommentat" (خبرني بالكومنتات) means:',
    opts: ['boost the post', 'tell me in the comments', 'subscribe to the channel', 'what do you think?'],
    ans: 1
  },
  {
    q: '"2akaunt" (أكاونت) is:',
    opts: ['a comment', 'account (social media)', 'a creative', 'a collab'],
    ans: 1
  },
  {
    q: '"da3muu il-boost" (دعموا البوست) means:',
    opts: ['subscribe to the channel', 'share with your friends', 'support / boost the post', 'tell me in comments'],
    ans: 2
  },
];

const CRT_TIPS = [
  {
    title: 'Lebanon\'s Creator Boom',
    body: 'Lebanon has produced a disproportionate number of viral Arab content creators despite its small size. From Beirut-based comedians to food vloggers documenting mezze spreads, Lebanese creators blend Arabic dialect humour with global trends. The economic crisis of 2019 paradoxically fuelled content creation — with stable jobs scarce, many turned to "mu7tawa" (content) and "kolaab" (collabs) as income. A Lebanese "influensar" can be funnier in 30 seconds of "reels" than most networks in an hour.'
  },
  {
    title: 'Lebanese CTA Style',
    body: 'Lebanese call-to-action language has its own flavour. Instead of formal MSA "subscribe," creators say "ishtarikuu bil-2anaa" (اشتركوا بالقناة) or just "subscribe" in English mixed with Lebanese. "Khibbirni bil-kommentat" (tell me in the comments) is a staple closer, as is "shuu ra2yak?" (what do you think?) — delivered fast, casual, direct. Lebanese creators rarely say "please" in CTAs — "da3muu il-boost" (support the post) is a command, and that\'s normal.'
  },
  {
    title: 'Platform Mix in Lebanon',
    body: 'Lebanese creators are heavy Instagram users ("stoori," "reels," "feed"), followed by TikTok ("TikTokkar"), YouTube ("youtuubar"), and Snapchat for the 16–25 demographic. WhatsApp Business is often used to convert followers to buyers. Paid promotion ("boost" or "spoonsar") is expensive relative to Lebanese salaries — many micro-creators rely on organic reach through "haashtiiq" (hashtags) and "khibbirni bil-kommentat" to drive engagement without paying Meta.'
  },
  {
    title: 'The Collab Culture',
    body: '"Kolaab" (collaboration) is the fast lane for growth among Lebanese creators. The Lebanese networking instinct — "3alam m3arfiin" (people with connections) — translates directly to social media. Creators regularly co-host "laif" (live streams), cross-promote "mu7tawa" (content), and launch joint "spoonsar" campaigns. A Lebanese beauty influencer might collab with a food creator to unbox a Lebanese brand — mixing audiences and multiplying "foluuwar" (followers) overnight.'
  },
  {
    title: 'Going "Vaayrl" the Lebanese Way',
    body: 'Lebanese content goes "vaayrl" (viral) for specific reasons: humour about the electricity crisis, "dollar rate" memes, political satire, and wedding highlights. The "iijaabiyye ktiir" (very positive vibe) aesthetic of mountain homes and sunset sea views also performs well. Lebanese creators know their audience oscillates between dark humour about local crises and warm pride in their food and landscape. A "trend" hits when it speaks to both — the absurdity of life in Lebanon and the love of it.'
  },
];
