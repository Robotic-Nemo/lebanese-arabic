// R1011 — NEW FEATURE: Lebanese WhatsApp & Voice Note Culture (wap)

const WAP_WORDS = [
  { ar: 'واتساب', tr: 'WhatsApp', en: 'WhatsApp — Lebanon\'s primary communication app', cat: 'tech' },
  { ar: 'رسالة صوتية', tr: 'risale Sawtiye', en: 'voice note / voice message', cat: 'tech' },
  { ar: 'منشن', tr: 'mention', en: 'mention / tag someone (@)', cat: 'tech' },
  { ar: 'ستيكر', tr: 'sticker', en: 'sticker / emoji sticker', cat: 'tech' },
  { ar: 'بروفايل', tr: 'profile', en: 'profile / profile picture', cat: 'tech' },
  { ar: 'غروب', tr: 'group', en: 'WhatsApp group', cat: 'tech' },
  { ar: 'غروب العيلة', tr: 'group il-3eyle', en: 'the family WhatsApp group', cat: 'culture' },
  { ar: 'مسّج', tr: 'massaj', en: 'message / text message', cat: 'tech' },
  { ar: 'شفت', tr: 'shift', en: 'seen / read (blue ticks)', cat: 'tech' },
  { ar: 'تيكات زرق', tr: 'teeket zar2', en: 'blue ticks — message was read', cat: 'tech' },
  { ar: 'بلوك', tr: 'block', en: 'to block someone', cat: 'tech' },
  { ar: 'ميوت', tr: 'mute', en: 'to mute a group / notification', cat: 'tech' },
  { ar: 'فورواردة', tr: 'forwarded', en: 'forwarded message — chain messages, prayers', cat: 'culture' },
  { ar: 'تسجيل', tr: 'tasjil', en: 'recording / voice note (alt. term)', cat: 'tech' },
  { ar: 'شاير', tr: 'share', en: 'to share (a post, link, or media)', cat: 'tech' },
  { ar: 'لاين', tr: 'last seen', en: 'last seen — when someone was last active', cat: 'tech' },
  { ar: 'أرشيف', tr: 'archive', en: 'archived chats', cat: 'tech' },
  { ar: 'ذاتيات', tr: 'Zatiyyat', en: 'WhatsApp status / stories', cat: 'tech' },
  { ar: 'كول', tr: 'call', en: 'WhatsApp call', cat: 'tech' },
  { ar: 'بالواتساب', tr: 'bil-WhatsApp', en: 'on WhatsApp / via WhatsApp', cat: 'culture' },
  { ar: 'تعا على الواتساب', tr: 'ta3a 3al-WhatsApp', en: 'come on WhatsApp / message me', cat: 'culture' },
  { ar: 'بعتيلي', tr: 'ba3tili', en: 'send it to me (imperative)', cat: 'culture' },
  { ar: 'صور على صور', tr: 'Suwar 3a Suwar', en: 'photos on photos — spamming the group with pics', cat: 'culture' },
  { ar: 'دعوة', tr: 'da3we', en: 'prayer / blessing message (forwarded)', cat: 'culture' },
  { ar: 'روت اللي ما بيبعت', tr: 'root illi ma byb3at', en: '"doom to whoever doesn\'t forward" — chain message threat', cat: 'culture' },
];

const WAP_CATS = ['tech', 'culture'];

const WAP_DRILLS = [
  { q: 'What does "risale Sawtiye" (رسالة صوتية) mean?', opts: ['text message', 'voice note / voice message', 'forwarded message', 'profile picture'], ans: 1 },
  { q: 'What are "teeket zar2" (تيكات زرق)?', opts: ['missed calls', 'blue ticks — message was read', 'typing indicator', 'group notification'], ans: 1 },
  { q: 'What is "group il-3eyle" (غروب العيلة)?', opts: ['a work group chat', 'the family WhatsApp group', 'a neighborhood group', 'a friends group'], ans: 1 },
  { q: 'How do you say "to block someone" in Lebanese Arabic?', opts: ['ميوت', 'أرشيف', 'بلوك', 'منشن'], ans: 2 },
  { q: 'What does "Zatiyyat" (ذاتيات) mean?', opts: ['archived chats', 'voice notes', 'WhatsApp status / stories', 'profile picture'], ans: 2 },
  { q: 'What is a "forwarded" message in Lebanese culture?', opts: ['a deleted message', 'chain messages, prayers', 'a voice note', 'a photo album'], ans: 1 },
  { q: 'How do you say "send it to me" in Lebanese Arabic?', opts: ['ta3a 3al-WhatsApp', 'ba3tili', 'share', 'mute'], ans: 1 },
  { q: 'What does "mute" (ميوت) mean?', opts: ['to delete', 'to forward', 'to mute a group / notification', 'to archive'], ans: 2 },
  { q: 'What is "Suwar 3a Suwar" (صور على صو��)?', opts: ['story highlights', 'profile photos', 'photos on photos — spamming group with pics', 'shared albums'], ans: 2 },
  { q: 'How do you say "come on WhatsApp / message me"?', opts: ['ba3tili', 'ta3a 3al-WhatsApp', 'bil-WhatsApp', 'last seen'], ans: 1 },
  { q: 'What does "root illi ma byb3at" (روت اللي ما بيبعت) mean?', opts: ['a prayer for good luck', 'a farewell message', '"doom to whoever doesn\'t forward"', 'a greeting message'], ans: 2 },
  { q: 'What is "last seen" (لاين) in WhatsApp?', opts: ['typing indicator', 'when someone was last active', 'online status', 'read receipt'], ans: 1 },
];

const WAP_TIPS = [
  { title: '🎤 Voice Notes over Typing', body: 'Lebanese people HATE typing long messages. Instead, they send "risale Sawtiyye" (voice notes) for everything — directions, gossip, invitations, arguments. A 3-minute voice note is normal. Receiving 15 voice notes in a row from a Lebanese aunt is a love language.' },
  { title: '👨‍👩‍👧‍👦 The Family Group', body: '"Group il-3eyle" is sacred and terrifying. It\'s where your uncle argues politics at 7am, your grandmother sends "da3wat" (blessings) every Friday, and wedding photos appear before you\'ve had coffee. Leaving the family group is a diplomatic incident.' },
  { title: '📨 The Forwarded Prayer Economy', body: '"Da3we" — religious forwarded messages promising blessings if you share with 10 people — flood Lebanese WhatsApp groups daily. The threat at the end: "root illi ma byb3at" (doom to whoever doesn\'t forward). Ignoring them is a spiritual gamble few Lebanese take.' },
  { title: '🔵 Blue Tick Culture', body: '"Shfit" (seen) and "teeket zar2" (blue ticks) are serious business in Lebanon. Leaving someone on read — especially a family member or a potential partner — requires explanation. Being "on seen" with no reply is a statement. Some people disable read receipts just for domestic peace.' },
];
