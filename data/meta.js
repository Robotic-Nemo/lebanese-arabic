const RESOURCES = [
  {
    name: 'Lingualism — Lebanese Arabic Books',
    tags: ['book', 'paid'],
    desc: 'Matthew Aldrich\'s series is the gold standard for Lebanese Arabic learners. "Lebanese Arabic in a Flash" (vocab) and "Stories in Lebanese Arabic" are the best entry points.',
    url: 'https://lingualism.com/product-category/lebanese-arabic/',
    urlLabel: 'lingualism.com'
  },
  {
    name: 'Glossika Lebanese Arabic',
    tags: ['app', 'paid'],
    desc: 'Sentence-level spaced repetition with native Lebanese speaker audio. Great for building sentence fluency after you have basic vocabulary. Pairs naturally with this flashcard app.',
    url: 'https://ai.glossika.com',
    urlLabel: 'ai.glossika.com'
  },
  {
    name: 'italki — Lebanese Tutors',
    tags: ['app', 'paid'],
    desc: 'Find community tutors from Lebanon for 1-on-1 conversation practice. The fastest way to build speaking confidence. Search "Lebanese Arabic" when booking and specify the dialect.',
    url: 'https://www.italki.com',
    urlLabel: 'italki.com'
  },
  {
    name: 'Pimsleur Eastern Arabic',
    tags: ['app', 'paid'],
    desc: '"Eastern Arabic" covers the Levantine dialect family — the closest major commercial audio course to Lebanese. Audio-only format trains rhythm and pronunciation before worrying about script.',
    url: 'https://www.pimsleur.com/learn-arabic',
    urlLabel: 'pimsleur.com'
  },
  {
    name: 'Forvo — Pronunciation Database',
    tags: ['free'],
    desc: 'Native speaker recordings of individual words. Useful for checking pronunciation of words not in this app\'s audio library. Search Arabic script directly for the best results.',
    url: 'https://forvo.com/languages/ar/',
    urlLabel: 'forvo.com/languages/ar'
  },
  {
    name: 'YouTube: Lebanese Content',
    tags: ['free'],
    desc: 'Search "Lebanese Arabic lesson" or "تعلم اللبناني". Shadowing real content (repeat what you hear, same speed and rhythm) is one of the most effective techniques for intonation.',
    url: 'https://www.youtube.com/results?search_query=learn+lebanese+arabic',
    urlLabel: 'Search YouTube'
  },
  {
    name: 'r/learnArabic',
    tags: ['community', 'free'],
    desc: 'Active Reddit community. Search "Lebanese" or "Levantine" for dialect-specific threads, resource recommendations, and questions answered by native speakers.',
    url: 'https://www.reddit.com/r/learnArabic/',
    urlLabel: 'reddit.com/r/learnArabic'
  },
  {
    name: 'HelloTalk / Tandem',
    tags: ['app', 'free'],
    desc: 'Language exchange apps. Find Lebanese speakers who want to learn your language. Set your target to Arabic and filter for Lebanon. Text chat is a low-pressure way to start.',
    url: 'https://www.hellotalk.com',
    urlLabel: 'hellotalk.com'
  },
  {
    name: 'Nassim Arabic Podcast',
    tags: ['free'],
    desc: 'Podcast specifically for Levantine Arabic learners — slow-paced dialogues in natural Lebanese/Syrian dialect. Each episode comes with a transcript, making it excellent for beginners.',
    url: 'https://www.youtube.com/results?search_query=nassim+arabic+podcast',
    urlLabel: 'Search YouTube'
  },
  {
    name: 'Lebanese Arabic Phrasebook (Lonely Planet)',
    tags: ['book', 'paid'],
    desc: 'Compact travel phrasebook covering Lebanese dialect. Great pocket reference for survival phrases, food ordering, directions, and emergency situations. Affordable and widely available.',
    url: 'https://shop.lonelyplanet.com/products/arabic-phrasebook-dictionary',
    urlLabel: 'lonelyplanet.com'
  },
];

// ─── WORD OF THE DAY ─────────────────────────────────────────────────────────
const WOTD_CULTURE_NOTES = {
  Greetings: 'Lebanese people often greet with multiple kisses on the cheek (2–3 times). مرحبا (marhaba) is universal, but أهلاً (ahlan) is warmer.',
  Food: 'Lebanese cuisine is one of the world\'s most popular. مزة (mezze) — sharing small dishes — is central to Lebanese social culture.',
  Phrases: 'Lebanese Arabic mixes Arabic, French, and English. "Merci ktir" (thank you very much mixing French+Arabic) is completely natural.',
  Slang: 'Lebanese slang is heavily influenced by French. Many young Lebanese say "c\'est la vie" as خلص (khalas) — "it\'s over/done".',
  People: 'Lebanese society is family-oriented. حبيبي (habibi/habibti) is used for loved ones but also casually between friends.',
  Numbers: 'Lebanese Arabic uses a mix of MSA and dialect numbers. In daily speech, the dialect forms (واحد، تنين، تلاتة) are standard.',
  Questions: 'Lebanese questions use rising intonation. شو? (shu = what?) is the most common, used even mid-sentence: "shu, you came?"',
  Time: 'Lebanese time-keeping is famously flexible — "bukra" (tomorrow) can mean tomorrow, soon, or eventually!',
  Transport: 'The "service" (سيرفيس) is a shared taxi following fixed routes — cheaper than a regular taxi, a cornerstone of Beirut transport.',
  default: 'Lebanese Arabic (Levantine dialect) is considered one of the most widely understood Arabic dialects due to Lebanese TV and music.'
};
