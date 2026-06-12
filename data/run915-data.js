// R915 — NEW FEATURE: Lebanese WhatsApp & Voice Notes Culture (vnt)

const VNT_WORDS = [
  { ar: 'واتساب', tr: 'waatsaap', en: 'WhatsApp' },
  { ar: 'رسالة صوتية', tr: 'risaale Sawtiiyye', en: 'voice message / voice note' },
  { ar: 'مجموعة واتساب', tr: 'majmuu3et waatsaap', en: 'WhatsApp group' },
  { ar: 'بث', tr: 'bath', en: 'broadcast list (mass message)' },
  { ar: 'الزرقاوين', tr: 'ez-zar2aawein', en: 'the blue ticks (read receipts)' },
  { ar: 'شايف ومش راد', tr: 'shaayef w mish raadd', en: 'seen it and not replying (ghosting)' },
  { ar: 'رسالة صوتية طويلة', tr: 'risaale Sawtiiyye tawiileh', en: 'long voice note (notorious in Lebanon)' },
  { ar: 'حظر', tr: '7azar', en: 'blocked (someone)' },
  { ar: 'أدمن', tr: 'admin', en: 'group admin' },
  { ar: 'ريموف من المجموعة', tr: 'remove min el-majmuu3a', en: 'removed from the group' },
  { ar: 'أركايف', tr: 'archive', en: 'archive (a chat)' },
  { ar: 'لقطة شاشة', tr: 'la2tet shaashe', en: 'screenshot' },
  { ar: 'فرواردت', tr: 'forwarded', en: 'forwarded (message)' },
  { ar: 'إشارة', tr: 'ishaare', en: 'WhatsApp status (story)' },
  { ar: 'قصة', tr: '2iSSa', en: 'story (WhatsApp / Instagram story)' },
  { ar: 'ستيكر', tr: 'sticker', en: 'sticker (in chat)' },
  { ar: 'ريأكشن', tr: 'ri2akshan', en: 'reaction (emoji react to message)' },
  { ar: 'منشن', tr: 'mention', en: 'mention / tag (someone in a group)' },
  { ar: 'مكالمة', tr: 'mukaalmeh', en: 'call (WhatsApp voice call)' },
  { ar: 'مكالمة فيديو', tr: 'mukaalmit video', en: 'video call' },
  { ar: 'شيلتني من المجموعة', tr: 'shiiltni min el-majmuu3a', en: 'you removed me from the group!' },
  { ar: 'عمل بث', tr: '3amal bath', en: 'sent a broadcast' },
  { ar: 'سمعت الصوتية؟', tr: 'smi3t eS-Sawtiiyye?', en: 'did you listen to the voice note?' },
  { ar: 'الأخبار على واتساب', tr: 'el-akhbaar 3ala waatsaap', en: 'news on WhatsApp (often unverified)' },
  { ar: 'الجروب ساكت', tr: 'el-gruup saakit', en: 'the group is quiet (suspicious / unusual)' },
  { ar: 'خليني أبعتلك صوتية', tr: 'khalliini ib3atilak Sawtiiyye', en: 'let me send you a voice note' },
  { ar: 'بدي حكيلك بصوتي', tr: 'baddii 7kiilak b-Sawtii', en: 'I want to tell you by voice (not text)' },
  { ar: 'واتساب العيلة', tr: 'waatsaap el-3eele', en: 'the family WhatsApp group (chaotic)' }
];

const VNT_DRILLS = [
  { q: 'How do you say "voice message"?', opts: ['mukaalmeh', 'risaale Sawtiiyye', 'sticker', 'archive'], ans: 1 },
  { q: 'What are "ez-zar2aawein"?', opts: ['Group admins', 'The blue ticks (read receipts)', 'Screenshot', 'Stickers'], ans: 1 },
  { q: 'How do you say "blocked"?', opts: ['bath', '7azar', 'mention', 'ri2akshan'], ans: 1 },
  { q: 'What does "shaayef w mish raadd" mean?', opts: ['Sent a broadcast', 'Seen it and not replying', 'Long voice note', 'Video call'], ans: 1 },
  { q: 'How do you say "group admin"?', opts: ['sticker', 'forwarded', 'admin', 'archive'], ans: 2 },
  { q: 'What is "bath" on WhatsApp?', opts: ['Video call', 'Reaction emoji', 'Broadcast list', 'Screenshot'], ans: 2 },
  { q: 'How do you say "screenshot"?', opts: ['ishaare', 'la2tet shaashe', 'mukaalmit video', 'mention'], ans: 1 },
  { q: 'What does "el-gruup saakit" mean?', opts: ['The group is quiet', 'Removed from group', 'Long voice note', 'Family WhatsApp'], ans: 0 },
  { q: 'How do you say "WhatsApp status/story"?', opts: ['bath', 'ishaare', 'ri2akshan', 'waatsaap'], ans: 1 },
  { q: 'How do you say "video call"?', opts: ['mukaalmit video', 'la2tet shaashe', 'risaale Sawtiiyye', '7azar'], ans: 0 },
  { q: 'What does "smi3t eS-Sawtiiyye?" mean?', opts: ['Did you screenshot it?', 'Are you in the group?', 'Did you listen to the voice note?', 'Did you block them?'], ans: 2 },
  { q: 'How do you say "sticker"?', opts: ['mention', 'archive', 'sticker', 'forwarded'], ans: 2 },
  { q: 'What is "waatsaap el-3eele"?', opts: ['Voice note', 'The family WhatsApp group', 'Broadcast list', 'Read receipt'], ans: 1 },
  { q: 'How do you say "reaction" (emoji react)?', opts: ['ri2akshan', 'ishaare', 'bath', '2iSSa'], ans: 0 },
  { q: 'What does "shiiltni min el-majmuu3a" mean?', opts: ['You blocked me', 'You forwarded my message', 'You removed me from the group', 'You muted the group'], ans: 2 },
  { q: 'How do you say "let me send you a voice note"?', opts: ['smi3t eS-Sawtiiyye?', '7azar', 'khalliini ib3atilak Sawtiiyye', 'waatsaap el-3eele'], ans: 2 }
];

const VNT_TIPS = [
  { title: 'Lebanon Runs on Voice Notes', body: 'In Lebanon, typing a text message when you could send a voice note is considered rude or cold. The Lebanese voice note (risaale Sawtiiyye) can run 2-10 minutes and covers topics ranging from a dinner invitation to a full political analysis of the current government. Receiving a 7-minute voice note at 2am is completely normal. Not listening to it immediately is a social offence.' },
  { title: 'The Blue Ticks Dilemma', body: '"Ez-zar2aawein" (the two blue ticks) are Lebanon\'s most anxiety-inducing UI element. "Shaayef w mish raadd" (seen it and not replying) is a social accusation. Turning off read receipts is viewed with deep suspicion. "3am bitkhabbii min el-zar2a?" (are you hiding from the blue tick?) is a real question asked to people who disable the feature. Leaving someone on read is a form of social warfare.' },
  { title: 'Family Groups: The Chaos', body: '"Waatsaap el-3eele" (the family WhatsApp group) is Lebanon\'s most volatile communication channel. It hosts daily good morning photos, prayer chains, fake news articles, holiday recipes, heated political arguments, and accidental memes. Being removed from it by an angry uncle (shiiltni min el-majmuu3a) is a family incident. Group admins (admin) wield enormous social power. "El-gruup saakit" (the group is quiet) means something is wrong.' },
  { title: 'Broadcast Culture', body: 'The "bath" (broadcast) is how news — verified or not — spreads through Lebanon. A broadcast reaches hundreds of contacts simultaneously. "El-akhbaar 3ala waatsaap" (news on WhatsApp) is both Lebanon\'s most read and least reliable news source. During crises (power cuts, explosions, currency crashes), WhatsApp broadcasts replace television. Chain messages about "urgent" government decisions, prayers that "must be forwarded to 10 people," and politically charged videos circulate within hours.' },
  { title: 'Screenshots as Social Currency', body: '"La2tet shaashe" (screenshot) is the Lebanese currency of accountability and betrayal. A private conversation screenshot can topple a friendship, expose a secret, or go viral within hours. "7azar" (blocked) is the nuclear option in any WhatsApp dispute. The social contract around WhatsApp in Lebanon: never screenshot a private chat, never reveal who sent the broadcast, and always listen to voice notes — no matter how long.' }
];
