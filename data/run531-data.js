// R531 — Lebanese Internet & Social Media Slang (prefix: net)
const NET_WORDS = [
  // social platforms & features
  {ar:'الفيس', tr:'el-fiis', en:'"Facebook" — Lebanese shorthand. "Shufto 3al fiis" = I saw it on Facebook. Still hugely used in Lebanon across all generations.', cat:'platform'},
  {ar:'الإنستا', tr:'el-insta', en:'"Instagram" — shortened as everywhere. Lebanese influencer culture is massive. "3al insta" = on Instagram.', cat:'platform'},
  {ar:'الواتس', tr:'el-waats', en:'"WhatsApp" — the dominant Lebanese messaging app. "Ba3atlik 3al waats" = I sent you on WhatsApp.', cat:'platform'},
  {ar:'تيك توك', tr:'tiik tuuk', en:'"TikTok" — huge with younger Lebanese. "Shufto 3a tiik tuuk" = I saw it on TikTok.', cat:'platform'},
  {ar:'ستوري', tr:'stoori', en:'"Story" (Instagram/WhatsApp). "Hatt stoori" = posted a story. "Shufti s-stoori" = did you see the story?', cat:'platform'},
  {ar:'ريلز', tr:'riilz', en:'"Reels" — Instagram reels. "3amil riilz" = made a reel. Lebanese comedians and creators dominate this format.', cat:'platform'},
  {ar:'غروب', tr:'gruub', en:'"Group" (WhatsApp/Telegram group chat). "Haytna b-gruub" = they put us in a group. Very Lebanese way to organize anything.', cat:'platform'},
  // engagement actions
  {ar:'لايك', tr:'laayik', en:'"Like" — fully absorbed. "Laajiit-o" = I liked it. "3amil-li laayik" = he liked my post.', cat:'action'},
  {ar:'شير', tr:'shiir', en:'"Share" — sharing posts. "Shaayart-o" = I shared it. "Shiir hal-post" = share this post.', cat:'action'},
  {ar:'كومنت', tr:'kuumint', en:'"Comment" — on a post. "3amal kuumint" = left a comment. "Shufti l-kuumintat?" = did you see the comments?', cat:'action'},
  {ar:'فولو', tr:'foolo', en:'"Follow" — following an account. "Foolooni" = follow me. "Ana faaloo-la" = I follow her.', cat:'action'},
  {ar:'أنفولو', tr:'anfoolo', en:'"Unfollow" — the social drama of unfollowing. "Anfoloni" = she unfollowed me. Considered rude between acquaintances.', cat:'action'},
  {ar:'بلوك', tr:'bluuk', en:'"Block" — blocking someone. "Bluukni" = he blocked me. A serious social statement in Lebanese WhatsApp culture.', cat:'action'},
  {ar:'سكريين شوت', tr:'skreenshoot', en:'"Screenshot" — "3amal skreenshoot" = he screenshotted it. Lebanese people screenshot everything constantly.', cat:'action'},
  {ar:'ستريك', tr:'striik', en:'"Streak" (Snapchat/WhatsApp). "Fi 3anna striik" = we have a streak. Maintaining streaks is very Lebanese teen culture.', cat:'action'},
  // seen & ghosting culture
  {ar:'سين', tr:'siin', en:'"Seen" — as in read receipt. "Khallani 3al siin" = left me on seen. A major source of drama in Lebanese relationships.', cat:'seen'},
  {ar:'خلّاني ع السين', tr:'khallaani 3al-siin', en:'"Left me on seen" — one of the most Lebanese phrases in the digital era. Implies deliberate ignoring after reading.', cat:'seen'},
  {ar:'ريبلاي', tr:'riiplee', en:'"Reply" — "ma riiplee" = didn\'t reply. "Liish ma 3am triiplee?" = why aren\'t you replying?', cat:'seen'},
  {ar:'غوستيد', tr:'ghoostid', en:'"Ghosted" — "ghoostaytni" = she ghosted me. English ghosting fully adopted into Lebanese conversation.', cat:'seen'},
  {ar:'أونلاين', tr:'uunlayn', en:'"Online" — WhatsApp shows when someone is online. "Howe uunlayn bas ma 3am yrid" = he\'s online but not replying.', cat:'seen'},
  // content & virality
  {ar:'بوست', tr:'buust', en:'"Post" — social media post. "3amal buust" = posted something. "Shufti l-buust?" = did you see the post?', cat:'content'},
  {ar:'رييل', tr:'riil', en:'"Reel" — short video. "3amalo riil" = made a reel. Lebanese content creators are very active on Reels format.', cat:'content'},
  {ar:'مييم', tr:'miim', en:'"Meme" — "hal miim ktiir 7elo" = this meme is so good. Lebanese meme culture is rich and politically sharp.', cat:'content'},
  {ar:'ترند', tr:'triind', en:'"Trend" — "3al triind" = it\'s trending. "Shu l-triind halla2?" = what\'s trending now?', cat:'content'},
  {ar:'فايرال', tr:'faayiral', en:'"Viral" — "Saar faayiral" = it went viral. Lebanese videos and memes regularly go regional-viral.', cat:'content'},
  {ar:'فلتر', tr:'filtar', en:'"Filter" — photo/video filter. "Hatt filtar" = applied a filter. Lebanese selfie culture is intense.', cat:'content'},
  // connectivity & tech
  {ar:'نت', tr:'net', en:'"Internet" — "ma fi net" = no internet. "Net biT2" = slow internet. Lebanese internet is notoriously unreliable.', cat:'tech'},
  {ar:'واي فاي', tr:'wayy fayy', en:'"WiFi" — "shu l-wayy fayy?" = what\'s the WiFi password? Always asked immediately upon entering any Lebanese home.', cat:'tech'},
  {ar:'بطّاري', tr:'baTTaari', en:'"Battery" — "baTTaari 3am tiDal" = battery is dying. "baTTaari khaast" = battery died. Major problem with 2-4hr daily power cuts.', cat:'tech'},
  {ar:'شاحن', tr:'shaaHin', en:'"Charger" — "3andak shaaHin?" = do you have a charger? Lebanon\'s electricity cuts mean people guard chargers carefully.', cat:'tech'},
  {ar:'داتا', tr:'daata', en:'"Mobile data" — "daata khalsat" = data ran out. Lebanese mobile data prices are among the highest in the region.', cat:'tech'},
  {ar:'تشارج', tr:'tshaariij', en:'"Charge (verb)" — "tsharrijit el-tel" = charged the phone. "Lazim tsharriij" = need to charge.', cat:'tech'},
  // messaging expressions
  {ar:'فويس', tr:'foyis', en:'"Voice note" (WhatsApp). "Ba3atlik foyis" = I sent you a voice note. Lebanese prefer voice notes to texts — very common.', cat:'msg'},
  {ar:'بروادكاست', tr:'bruudkaast', en:'"Broadcast" (WhatsApp broadcast). "3amal bruudkaast" = sent a broadcast. Lebanese love group announcements.', cat:'msg'},
  {ar:'بين', tr:'biin', en:'"Pin" — pinning a message in chat. "Biin hal-risaale" = pin this message. Used in WhatsApp groups.', cat:'msg'},
];

const NET_DRILLS = [
  {
    q: 'Your Lebanese friend texts you but you can tell they\'ve read your earlier message and didn\'t reply. What\'s the Lebanese phrase for this?',
    opts: ['anfoloni', 'khallaani 3al-siin', 'ghoostaytni', 'bluukni'],
    ans: 1,
    exp: '"Khallaani 3al-siin" = "left me on seen." WhatsApp\'s blue double-tick (read receipt) is famous in Lebanon. Being left on seen — when someone clearly read your message and chose not to reply — is a major source of relationship drama. It implies deliberate ignoring.'
  },
  {
    q: 'A Lebanese person asks "shu l-wayy fayy?" immediately after arriving at your house. What are they asking?',
    opts: ['How is the food?', 'What\'s the WiFi password?', 'Where is the bathroom?', 'Is the way far from here?'],
    ans: 1,
    exp: '"Wayy fayy" = WiFi. Asking for the WiFi password is the FIRST thing Lebanese guests do after arriving — before sitting down, before coffee. Lebanon\'s mobile data is expensive and internet cuts are common, so WiFi is precious. "Shu l-wayy fayy?" is practically a greeting.'
  },
  {
    q: 'You see something went viral on Lebanese social media. How do you say "it went viral"?',
    opts: ['Saar uunlayn', 'Saar faayiral', 'Hatt stoori', '3amal buust'],
    ans: 1,
    exp: '"Saar faayiral" = "it went viral." Lebanese content — memes, videos, political commentary — regularly goes regional-viral. Lebanon punches above its weight in Arabic social media content. The word "faayiral" is English "viral" with Lebanese pronunciation.'
  },
  {
    q: 'What does "baTTaari 3am tiDal" mean?',
    opts: ['The battery is full and charged', 'The battery is dying / running out', 'The battery needs replacing', 'The battery is brand new'],
    ans: 1,
    exp: '"BaTTaari 3am tiDal" = "battery is dying / depleting." This is a constant issue in Lebanon where power cuts of 2-4+ hours daily mean phones are always being managed carefully. "baTTaari khaast" (battery died) explains why Lebanese people frequently go offline suddenly.'
  },
  {
    q: 'Your Lebanese contact is shown as "uunlayn" on WhatsApp but hasn\'t replied. How do you complain about this?',
    opts: ['"Khallaani 3al-siin"', '"Anfoloni"', '"Howe uunlayn bas ma 3am yrid"', '"Ghoostayto"'],
    ans: 2,
    exp: '"Howe uunlayn bas ma 3am yrid" = "he\'s online but not replying." Being seen as online on WhatsApp while ignoring messages is a Lebanese social crime. The platform shows last active time, making it impossible to pretend you were unavailable.'
  },
  {
    q: 'What does "anfoloni" mean in Lebanese social media context?',
    opts: ['She followed me', 'She unfollowed me', 'She blocked me', 'She sent me a voice note'],
    ans: 1,
    exp: '"Anfoloni" = "she unfollowed me." The "un-" prefix from English "unfollow" was directly borrowed into Lebanese. Being unfollowed by an acquaintance or friend is considered a social statement — passive aggression or ending a relationship. Causes real drama.'
  },
  {
    q: 'Lebanese people are known for preferring which type of WhatsApp message over typed texts?',
    opts: ['GIFs and stickers', 'Voice notes (foyis)', 'Long paragraphs', 'Screenshots'],
    ans: 1,
    exp: '"Foyis" (voice note) is the Lebanese default. Texting feels too cold or too slow; voice notes convey emotion, speed, and personality. A Lebanese family WhatsApp group might have dozens of foyis per day. Some Lebanese send 5-minute voice notes for something that could be typed in 10 words.'
  },
  {
    q: 'What\'s the most significant thing about Lebanese meme culture ("miim")?',
    opts: ['Lebanese memes are usually in classical Arabic', 'Lebanese memes are politically sharp and go regional-viral frequently', 'Lebanese people don\'t use memes much', 'Lebanese memes are always in English'],
    ans: 1,
    exp: 'Lebanese meme culture is one of the sharpest in the Arab world. Lebanese internet users turn political crises, electricity cuts, and currency collapse into darkly funny content almost instantly. These memes regularly spread to other Arab countries. Lebanese "miim" culture is both a coping mechanism and a form of social commentary.'
  },
  {
    q: 'You created a WhatsApp group for your Lebanese friends. How do you say "he put us in a group"?',
    opts: ['"3amal bluuk"', '"Haytna b-gruub"', '"Ba3atna foyis"', '"3amal bruudkaast"'],
    ans: 1,
    exp: '"Haytna b-gruub" = "he put us in a group." WhatsApp groups are how Lebanon runs — family groups, friend groups, building groups, neighborhood groups. Being added to a group without asking is normal. Groups for every occasion, including many that never get used after the first week.'
  },
  {
    q: 'Why is "daata khalsat" (mobile data ran out) especially painful in Lebanon?',
    opts: ['Lebanese phones don\'t support data', 'Lebanese mobile data prices are among the highest in the region, making it a luxury', 'Data is unlimited in Lebanon', 'Lebanese people don\'t use smartphones'],
    ans: 1,
    exp: '"Daata khalsat" = data ran out. Lebanon has some of the most expensive mobile data in the region — and with daily 2-4+ hour electricity cuts forcing reliance on mobile rather than WiFi, data runs out fast. "Ma fi net" (no internet) is a daily reality. This economic reality shapes how Lebanese people communicate online.'
  },
];

const NET_TIPS = [
  {
    title: '📱 WhatsApp runs Lebanon',
    body: 'WhatsApp ("el-waats") is not just a messaging app in Lebanon — it\'s how the country operates. Family announcements, business deals, political organizing, school groups, neighborhood committees — all on WhatsApp. The "gruub" (group) is the unit of Lebanese social organization. Lebanese WhatsApp culture has its own norms: always use voice notes (foyis), always reply to voice notes with voice notes, and never acknowledge when you\'ve clearly read something.'
  },
  {
    title: '👁️ The seen culture (3al-siin)',
    body: '"Khallaani 3al-siin" (left me on seen) is one of the defining phrases of modern Lebanese relationships. WhatsApp\'s read receipts (blue ticks) removed all plausible deniability about whether you\'ve read a message. Lebanese culture, which is high-context and very relationship-focused, turned this into a rich source of drama and micro-aggression. Being left on seen by the wrong person carries real social weight.'
  },
  {
    title: '⚡ Electricity cuts explain half the tech behavior',
    body: 'Lebanese internet and phone behavior is shaped by the electricity crisis. With 2-8 hour daily power cuts, WiFi goes down constantly — hence asking "shu l-wayy fayy?" immediately on arrival (to get data off your phone). Battery anxiety ("baTTaari 3am tiDal") is universal. "Ma fi net" is a daily occurrence. This context explains why Lebanese people are obsessive about chargers, power banks, and alternative connectivity.'
  },
  {
    title: '🎭 Lebanese meme culture is politically charged',
    body: 'Lebanese "miim" culture is famous in the Arab world for its speed and sharpness. The 2019 revolution was partly organized and satirized through memes. Economic collapse, power cuts, political corruption — all became dark humor within hours. Lebanese meme creators are some of the most followed in the region. Understanding Lebanese internet means understanding that memes here are a form of political speech, not just entertainment.'
  },
  {
    title: '🗣️ Voice notes over text — always',
    body: 'The Lebanese preference for "foyis" (voice notes) over typed messages is cultural. Lebanese communication is oral — the tone, the emotion, the jokes land better in voice. Typing feels cold and slow. A Lebanese mother will send you a 3-minute voice note explaining something that could be texted in two sentences, and she\'s right — the warmth in her voice carries information that text can\'t. On Lebanese family WhatsApp groups, voice notes are currency.'
  },
];

const NET_ABOUT = `<p><strong>📱 Lebanese Internet & Social Media — Digital Culture in a Connected Country</strong></p>
<p>Lebanon has one of the highest social media penetration rates in the Arab world despite — or because of — its infrastructure struggles. Lebanese people have adapted digital tools to their chaotic reality in ways that reveal a lot about the culture.</p>
<p><strong>WhatsApp is infrastructure:</strong> "El-waats" isn't just an app; it's how Lebanon communicates. Groups ("gruub") for every purpose, voice notes ("foyis") preferred over text, and the dreaded read receipt ("siin") create a unique communication landscape. The seen culture — being left on seen — is one of the defining social anxieties of Lebanese digital life.</p>
<p><strong>Electricity shapes digital behavior:</strong> Lebanon's daily power cuts explain the obsession with WiFi passwords ("shu l-wayy fayy?"), battery anxiety ("baTTaari 3am tiDal"), and the constant scrambling for chargers. When your internet goes down 4 hours a day, you develop different habits.</p>
<p><strong>Lebanese meme culture punches above its weight:</strong> Despite the country's size, Lebanese meme creators are among the most influential in Arabic social media. Political satire, dark humor about power cuts and currency collapse, and sharp cultural commentary make Lebanese "miim" content go regional-viral constantly.</p>
<p><strong>The language is absorbed wholesale:</strong> Unlike some Arabic dialects that resist English tech terms, Lebanese Arabic fully absorbs them with local pronunciation: "laayik," "shiir," "foolo," "anfoolo," "bluuk," "skreenshoot." These words feel as natural as Arabic to Lebanese speakers.</p>`;
