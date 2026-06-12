const GRAMMAR_SECTIONS = [
  {
    id: 'pronouns', title: 'Personal Pronouns', icon: '👤',
    render() { return `
      <p class="grammar-intro">Lebanese pronouns differ from Modern Standard Arabic. Always use these — not the MSA forms — in real conversation.</p>
      <table class="gtable">
        <tr><th>Person</th><th>Arabic</th><th>Translit.</th><th>vs MSA</th></tr>
        <tr><td>I</td><td class="t-ar">أنا</td><td class="t-tr">ana</td><td class="t-note">same</td></tr>
        <tr><td>You (m)</td><td class="t-ar">إنت</td><td class="t-tr">inta</td><td class="t-note">أنتَ</td></tr>
        <tr><td>You (f)</td><td class="t-ar">إنتي</td><td class="t-tr">inti</td><td class="t-note">أنتِ</td></tr>
        <tr><td>He</td><td class="t-ar">هوّ</td><td class="t-tr">huwwe</td><td class="t-note">هو</td></tr>
        <tr><td>She</td><td class="t-ar">هيّ</td><td class="t-tr">hiyye</td><td class="t-note">هي</td></tr>
        <tr><td>We</td><td class="t-ar">نحنا</td><td class="t-tr">nihna</td><td class="t-note">نحن</td></tr>
        <tr><td>You (pl)</td><td class="t-ar">إنتو</td><td class="t-tr">intu</td><td class="t-note">أنتم</td></tr>
        <tr><td>They</td><td class="t-ar">هنّي</td><td class="t-tr">hinne</td><td class="t-note">هم</td></tr>
      </table>
      ${gn('<strong>Pronoun drop:</strong> Subject pronouns are usually omitted — the verb prefix tells you who. <em>B7ki 3arabi</em> = "I speak Arabic" (no <em>ana</em> needed). Use the pronoun only for emphasis: <em>ana b7ki</em> = "I myself speak."')}
    `; }
  },
  {
    id: 'definite', title: 'Definite Article (el-)', icon: '🔤',
    render() { return `
      <p class="grammar-intro">The definite article is <strong>el-</strong>. It attaches directly to the noun and works like "the" — but also appears before abstract nouns, categories, and proper nouns more broadly than in English.</p>
      ${gs('Basic examples')}
      ${ge('البيت', 'el-beit', 'the house', 'el + beit')}
      ${ge('القهوة', 'el-ahwe', 'the coffee', 'the Q disappears in Lebanese — qahwa → ahwe')}
      ${ge('الشارع', 'el-share3', 'the street', '')}
      ${gs('Sun letter assimilation')}
      <p class="grammar-intro">When a noun begins with a "sun letter" (ل ن ر س ش ت د ذ ط ظ ص ض ز), the <em>l</em> in <em>el-</em> assimilates to match it. The article is still written the same but the <em>l</em> sound disappears in speech.</p>
      ${ge('الشمس', 'esh-shams', 'the sun', 'sh absorbs the l')}
      ${ge('النهار', 'en-nhar', 'the day', 'n absorbs the l')}
      ${ge('الصيدلية', 'es-seidliye', 'the pharmacy', 's absorbs the l')}
      ${ge('البيت', 'el-beit', 'the house', 'b is a moon letter — el stays as-is')}
      ${gn('<strong>Practical tip:</strong> In fast Lebanese speech, <em>el-</em> is often reduced or blended into the previous word. Don\'t stress about perfect assimilation early on — native speakers are very forgiving and context does most of the work.')}
    `; }
  },
  {
    id: 'present', title: 'Present Tense — Habitual (b- prefix)', icon: '🔄',
    render() { return `
      <p class="grammar-intro">Lebanese Arabic marks the habitual/general present with a <strong>b-</strong> prefix on the verb. This is one of the most defining features of Levantine dialect — MSA has no equivalent prefix. Drop the b- and you have the subjunctive/command stem instead.</p>
      ${gp('<span class="ph">b-</span> + verb stem = habitual present ("I eat", "she speaks")')}
      ${gs('Full conjugation — "to eat" (akal), present stem: akol')}
      <table class="gtable">
        <tr><th>Pronoun</th><th>Arabic</th><th>Translit.</th><th>English</th></tr>
        <tr><td>ana</td><td class="t-ar">باكل</td><td class="t-tr">bakol</td><td>I eat</td></tr>
        <tr><td>inta</td><td class="t-ar">بتاكل</td><td class="t-tr">btakol</td><td>you (m) eat</td></tr>
        <tr><td>inti</td><td class="t-ar">بتاكلي</td><td class="t-tr">btakli</td><td>you (f) eat</td></tr>
        <tr><td>huwwe</td><td class="t-ar">بياكل</td><td class="t-tr">byakol</td><td>he eats</td></tr>
        <tr><td>hiyye</td><td class="t-ar">بتاكل</td><td class="t-tr">btakol</td><td>she eats</td></tr>
        <tr><td>nihna</td><td class="t-ar">مناكل</td><td class="t-tr">mnakol</td><td>we eat</td></tr>
        <tr><td>intu</td><td class="t-ar">بتاكلو</td><td class="t-tr">btaklu</td><td>you (pl) eat</td></tr>
        <tr><td>hinne</td><td class="t-ar">بياكلو</td><td class="t-tr">byaklu</td><td>they eat</td></tr>
      </table>
      ${gs('Prefix pattern summary')}
      <table class="gtable">
        <tr><th>Person</th><th>Prefix</th><th>Suffix</th></tr>
        <tr><td>I (ana)</td><td class="t-tr">b-</td><td class="t-note">—</td></tr>
        <tr><td>You m (inta)</td><td class="t-tr">bt-</td><td class="t-note">—</td></tr>
        <tr><td>You f (inti)</td><td class="t-tr">bt-</td><td class="t-note">-i</td></tr>
        <tr><td>He (huwwe)</td><td class="t-tr">by-</td><td class="t-note">—</td></tr>
        <tr><td>She (hiyye)</td><td class="t-tr">bt-</td><td class="t-note">—</td></tr>
        <tr><td>We (nihna)</td><td class="t-tr">mn-</td><td class="t-note">—</td></tr>
        <tr><td>You pl (intu)</td><td class="t-tr">bt-</td><td class="t-note">-u</td></tr>
        <tr><td>They (hinne)</td><td class="t-tr">by-</td><td class="t-note">-u</td></tr>
      </table>
      ${gn('<strong>No "to be" in present:</strong> There is no equivalent of "is/am/are" in Lebanese present tense. Subject and predicate sit side by side. <em>Huwwe Libneni</em> = "He (is) Lebanese." <em>El-ahwe zaki</em> = "The coffee (is) delicious."')}
    `; }
  },
  {
    id: 'progressive', title: 'Present Progressive (3am)', icon: '▶️',
    render() { return `
      <p class="grammar-intro"><strong>3am</strong> (عم) before a verb signals an action happening right now — the present continuous. Without <em>3am</em>, the b- prefix form is habitual ("I eat every day"). With it, it's "I'm eating right now."</p>
      ${gp('<span class="ph">3am</span> + <span class="ph">b-</span>verb = currently doing (right now)')}
      ${gs('Examples')}
      ${ge('عم باكل', '3am bakol', "I'm eating (right now)", 'vs. bakol = I eat (in general / always)')}
      ${ge('عم بحكي', '3am b7ki', "I'm speaking", 'vs. b7ki = I speak / I know how to speak')}
      ${ge('عم بروح عالبيت', '3am bruh 3al-beit', "I'm going home", '')}
      ${ge('شو عم تعمل؟', 'shu 3am ta3mol?', 'What are you doing?', '')}
      ${ge('عم بتكلم معك', '3am btkallem ma3ak', "I'm talking to you", '')}
      ${gn('<strong>Key contrast:</strong><br>• <em>Bakol lahme</em> = I eat meat (in general — always / as a habit)<br>• <em>3am bakol lahme</em> = I\'m eating meat (right now, at this moment)<br><br>This distinction is important for natural-sounding speech.')}
    `; }
  },
  {
    id: 'past', title: 'Past Tense', icon: '⏮️',
    render() { return `
      <p class="grammar-intro">The past tense is built from the verb root with suffixes — no prefixes. The base form (he/it) is the simplest: just the bare root. All other persons add a suffix.</p>
      ${gs('Full conjugation — "to eat" (akal)')}
      <table class="gtable">
        <tr><th>Pronoun</th><th>Arabic</th><th>Translit.</th><th>English</th></tr>
        <tr><td>ana</td><td class="t-ar">أكلت</td><td class="t-tr">akalt</td><td>I ate</td></tr>
        <tr><td>inta</td><td class="t-ar">أكلت</td><td class="t-tr">akalt</td><td>you (m) ate</td></tr>
        <tr><td>inti</td><td class="t-ar">أكلتي</td><td class="t-tr">akalti</td><td>you (f) ate</td></tr>
        <tr><td>huwwe</td><td class="t-ar">أكل</td><td class="t-tr">akal</td><td>he ate</td></tr>
        <tr><td>hiyye</td><td class="t-ar">أكلت</td><td class="t-tr">akalet</td><td>she ate</td></tr>
        <tr><td>nihna</td><td class="t-ar">أكلنا</td><td class="t-tr">akalna</td><td>we ate</td></tr>
        <tr><td>intu</td><td class="t-ar">أكلتو</td><td class="t-tr">akaltu</td><td>you (pl) ate</td></tr>
        <tr><td>hinne</td><td class="t-ar">أكلو</td><td class="t-tr">akalu</td><td>they ate</td></tr>
      </table>
      ${gs('Past tense suffix pattern')}
      <table class="gtable">
        <tr><th>Person</th><th>Suffix</th></tr>
        <tr><td>I / You (m)</td><td class="t-tr">-t</td></tr>
        <tr><td>You (f)</td><td class="t-tr">-ti</td></tr>
        <tr><td>He</td><td class="t-note">— (bare root)</td></tr>
        <tr><td>She</td><td class="t-tr">-et / -at</td></tr>
        <tr><td>We</td><td class="t-tr">-na</td></tr>
        <tr><td>You (pl)</td><td class="t-tr">-tu</td></tr>
        <tr><td>They</td><td class="t-tr">-u</td></tr>
      </table>
      ${ge('رحت عالسوق', 'ruhit 3as-sou2', 'I went to the market', '')}
      ${ge('شفت الفيلم؟', 'shift el-film?', 'Did you see the movie?', 'yes/no question: just raise pitch at end')}
      ${ge('ما فهمت شو قال', 'ma fhimt shu 2al', "I didn't understand what he said", '')}
      ${gn('<strong>Note:</strong> "I" and "you (m)" have the same past suffix (<em>-t</em>). Context makes it clear. She (<em>-et</em>) and they (<em>-u</em>) are the easy ones to remember as unique.')}
    `; }
  },
  {
    id: 'future', title: 'Future Tense (rah)', icon: '⏭️',
    render() { return `
      <p class="grammar-intro">The future is formed by placing <strong>rah</strong> (رح) before the present tense verb. No changes to the verb itself — just add <em>rah</em> in front.</p>
      ${gp('<span class="ph">rah</span> + <span class="ph">b-</span>verb = will / going to')}
      ${gs('Examples')}
      ${ge('رح روح', 'rah ruh', "I'll go / I'm going to go", '')}
      ${ge('رح آكل', 'rah ekol', "I'm going to eat", '')}
      ${ge('رح يكون منيح', 'rah ykun mnih', "It's going to be good", '')}
      ${ge('إيمتى رح ترجع؟', 'eimta rah tirja3?', 'When are you coming back?', '')}
      ${ge('ما رح روح', 'ma rah ruh', "I won't go", 'ma before rah negates the future')}
      ${gn('<strong>Tip:</strong> <em>Rah</em> can also express strong intention ("I\'m definitely going to..."). In very casual speech it\'s sometimes clipped or merged into the verb. You may also hear <em>ra7</em> (same word, different romanization).')}
    `; }
  },
  {
    id: 'negation', title: 'Negation', icon: '🚫',
    render() { return `
      <p class="grammar-intro">Lebanese Arabic has two negation strategies: <strong>mish</strong> (مش) for non-verbal sentences (nouns, adjectives, equational), and <strong>ma</strong> (ما) placed directly before the verb. Lebanese does <em>not</em> add a <em>-sh</em> suffix (the "ma…sh sandwich") — that's Egyptian and some southern/Palestinian speech, not Beirut/Mount-Lebanon Lebanese.</p>
      ${gs('1. mish — negating nouns, adjectives & equational sentences')}
      ${gp('<span class="ph">mish</span> + noun / adjective / predicate')}
      ${ge('مش منيح', 'mish mnee7', 'not good', '')}
      ${ge('مش تعبان', 'mish ta3ban', 'not tired', '')}
      ${ge('هوّ مش لبناني', 'huwwe mish Libneni', "He's not Lebanese", '')}
      ${ge('مش عارف', 'mish 3arif', "I don't know (lit: not knowing)", 'very common — same idea as ma ba3rif')}
      ${gs('2. ma — negating verbs')}
      ${gp('<span class="ph">ma</span> + verb')}
      ${ge('ما باكل', 'ma bakol', "I don't eat", 'just ma before the b-verb — no suffix')}
      ${ge('ما فهمت', 'ma fhimt', "I didn't understand", '')}
      ${ge('ما بدّي', 'ma biddi', "I don't want", '')}
      ${ge('ما بعرف', 'ma ba3rif', "I don't know", '')}
      ${gs('3. Negating the future')}
      ${gp('<span class="ph">ma</span> / <span class="ph">mish</span> + raH + verb')}
      ${ge('ما رح روح', 'ma raH ruH', "I won't go", 'or: mish raH ruH (مش رح روح)')}
      ${gs('Quick reference')}
      <table class="gtable">
        <tr><th>Context</th><th>Pattern</th><th>Example</th></tr>
        <tr><td>Adjective / noun</td><td class="t-tr">mish + …</td><td class="t-note">mish mnee7 (not good)</td></tr>
        <tr><td>Habitual verb</td><td class="t-tr">ma + verb</td><td class="t-note">ma bakol (I don't eat)</td></tr>
        <tr><td>Past verb</td><td class="t-tr">ma + verb</td><td class="t-note">ma fhimt (I didn't understand)</td></tr>
        <tr><td>Future</td><td class="t-tr">ma / mish raH + verb</td><td class="t-note">ma raH ruH (I won't go)</td></tr>
        <tr><td>To have</td><td class="t-tr">ma 3andi</td><td class="t-note">ma 3andi (I don't have)</td></tr>
      </table>
      ${gn('<strong>Heads up:</strong> if you have studied Egyptian or heard southern/Palestinian Arabic, you may know the ma…sh "sandwich" (ma + verb + -sh). Lebanese does <em>not</em> add -sh: it is simply <em>ma bakol</em>, <em>ma fhimt</em>, <em>ma biddi</em>.')}
    `; }
  },
  {
    id: 'gender', title: 'Gender & Adjective Agreement', icon: '⚖️',
    render() { return `
      <p class="grammar-intro">Every Arabic noun is grammatically masculine or feminine. Adjectives agree with the noun. The good news: Lebanese feminines almost always end in <strong>-e</strong> or <strong>-a</strong>, making it very predictable.</p>
      ${gs('Masculine → Feminine: add -e')}
      <table class="gtable">
        <tr><th>Masculine</th><th>Translit.</th><th>Feminine</th><th>Translit.</th><th>Meaning</th></tr>
        <tr><td class="t-ar">كبير</td><td class="t-tr">kbir</td><td class="t-ar">كبيرة</td><td class="t-tr">kbire</td><td>big</td></tr>
        <tr><td class="t-ar">منيح</td><td class="t-tr">mnih</td><td class="t-ar">منيحة</td><td class="t-tr">mnihe</td><td>good</td></tr>
        <tr><td class="t-ar">حلو</td><td class="t-tr">helo</td><td class="t-ar">حلوة</td><td class="t-tr">helwe</td><td>beautiful</td></tr>
        <tr><td class="t-ar">تعبان</td><td class="t-tr">ta3ban</td><td class="t-ar">تعبانة</td><td class="t-tr">ta3bane</td><td>tired</td></tr>
        <tr><td class="t-ar">زعلان</td><td class="t-tr">za3lan</td><td class="t-ar">زعلانة</td><td class="t-tr">za3lane</td><td>upset</td></tr>
        <tr><td class="t-ar">لبناني</td><td class="t-tr">Libneni</td><td class="t-ar">لبنانية</td><td class="t-tr">Libneniye</td><td>Lebanese</td></tr>
      </table>
      ${gs('Adjective agreement in sentences')}
      ${ge('البيت الكبير', 'el-beit el-kbir', 'the big house', 'beit (house) is masculine → kbir')}
      ${ge('البنت الحلوة', 'el-bint el-helwe', 'the beautiful girl', 'bint (girl) is feminine → helwe')}
      ${ge('هوّ تعبان', 'huwwe ta3ban', 'He is tired', '')}
      ${ge('هيّ تعبانة', 'hiyye ta3bane', 'She is tired', '')}
      ${gs('Common feminine nouns (no -e ending — learn these)')}
      <table class="gtable">
        <tr><th>Arabic</th><th>Translit.</th><th>Meaning</th></tr>
        <tr><td class="t-ar">بنت</td><td class="t-tr">bint</td><td>girl</td></tr>
        <tr><td class="t-ar">إمّ</td><td class="t-tr">imm</td><td>mother</td></tr>
        <tr><td class="t-ar">أخت</td><td class="t-tr">ukht</td><td>sister</td></tr>
        <tr><td class="t-ar">أرض</td><td class="t-tr">ard</td><td>land / floor</td></tr>
      </table>
      ${gn('<strong>Quick rule:</strong> If a noun ends in <em>-e</em> or <em>-a</em>, it\'s feminine. Most body parts and paired things are feminine too (eyes, hands, etc.). When in doubt, treat it as masculine — you\'ll be right more often than not.')}
    `; }
  },
  {
    id: 'possession', title: 'Possessive Suffixes', icon: '🔗',
    render() { return `
      <p class="grammar-intro">Instead of separate words like "my" or "your", Arabic adds a suffix directly to the noun. These suffixes are extremely high-frequency — you use them in nearly every sentence.</p>
      <table class="gtable">
        <tr><th>Person</th><th>Suffix</th><th>beit (house)</th><th>Meaning</th></tr>
        <tr><td>my</td><td class="t-tr">-i</td><td class="t-ar">بيتي <span class="t-tr">beiti</span></td><td>my house</td></tr>
        <tr><td>your (m)</td><td class="t-tr">-ak</td><td class="t-ar">بيتك <span class="t-tr">beitak</span></td><td>your house</td></tr>
        <tr><td>your (f)</td><td class="t-tr">-ik</td><td class="t-ar">بيتك <span class="t-tr">beitik</span></td><td>your house</td></tr>
        <tr><td>his</td><td class="t-tr">-o</td><td class="t-ar">بيتو <span class="t-tr">beito</span></td><td>his house</td></tr>
        <tr><td>her</td><td class="t-tr">-a</td><td class="t-ar">بيتا <span class="t-tr">beita</span></td><td>her house</td></tr>
        <tr><td>our</td><td class="t-tr">-na</td><td class="t-ar">بيتنا <span class="t-tr">beitna</span></td><td>our house</td></tr>
        <tr><td>your (pl)</td><td class="t-tr">-kon</td><td class="t-ar">بيتكن <span class="t-tr">beitkon</span></td><td>your house</td></tr>
        <tr><td>their</td><td class="t-tr">-on</td><td class="t-ar">بيتون <span class="t-tr">beiton</span></td><td>their house</td></tr>
      </table>
      ${gs('High-frequency examples')}
      ${ge('اسمي...', 'ismi...', 'My name is...', 'essential introduction phrase')}
      ${ge('صاحبي', 'sahbi', 'my friend (m)', '')}
      ${ge('صاحبتي', 'sahbti', 'my friend (f)', '')}
      ${ge('كيفك؟ / كيفيك؟', 'kifak? / kifik?', 'How are you? (m/f)', '-ak for male, -ik for female')}
      ${ge('بيتنا كبير', 'beitna kbir', 'Our house is big', '')}
      ${gn('<strong>The -ak / -ik distinction matters:</strong> Using the wrong suffix sounds noticeably odd to native speakers. <em>Kifak?</em> to a man, <em>kifik?</em> to a woman. Same rule applies to all suffixes with m/f variants.')}
    `; }
  },
  {
    id: 'tohave', title: 'To Have — 3and (عند)', icon: '✋',
    render() { return `
      <p class="grammar-intro">Lebanese Arabic has no verb "to have." Instead, <strong>3and</strong> (عند — literally "at/with") takes possessive suffixes. Think: "there-is-with-me" rather than "I have."</p>
      <table class="gtable">
        <tr><th>Person</th><th>Arabic</th><th>Translit.</th><th>Meaning</th></tr>
        <tr><td>I have</td><td class="t-ar">عندي</td><td class="t-tr">3andi</td><td>I have</td></tr>
        <tr><td>You (m) have</td><td class="t-ar">عندك</td><td class="t-tr">3andak</td><td>you have</td></tr>
        <tr><td>You (f) have</td><td class="t-ar">عندك</td><td class="t-tr">3andik</td><td>you have</td></tr>
        <tr><td>He has</td><td class="t-ar">عنده</td><td class="t-tr">3ando</td><td>he has</td></tr>
        <tr><td>She has</td><td class="t-ar">عندا</td><td class="t-tr">3anda</td><td>she has</td></tr>
        <tr><td>We have</td><td class="t-ar">عندنا</td><td class="t-tr">3andna</td><td>we have</td></tr>
        <tr><td>You (pl) have</td><td class="t-ar">عندكن</td><td class="t-tr">3andkon</td><td>you have</td></tr>
        <tr><td>They have</td><td class="t-ar">عندون</td><td class="t-tr">3andon</td><td>they have</td></tr>
      </table>
      ${gs('Examples')}
      ${ge('عندي وقت', '3andi wa2t', 'I have time', '')}
      ${ge('عندك تلفون؟', '3andak telefon?', 'Do you have a phone?', '')}
      ${ge('ما عندي مصاري', 'ma 3andi masari', "I don't have money", 'masari = money (colloquial Lebanese)')}
      ${ge('عندنا ضيوف', '3andna dyuf', 'We have guests', '')}
      ${gn('<strong>fi / ma fi:</strong> For "there is / there isn\'t", use <em>fi</em> and <em>ma fi</em>. These are among the most useful words in Lebanese:<br>• <em>Fi kahwe?</em> = Is there coffee?<br>• <em>Ma fi</em> = There isn\'t / There\'s nothing / Nothing going on<br>• <em>Shu fi ma fi?</em> = What\'s up? (lit: what is, what isn\'t?)')}
    `; }
  },
  {
    id: 'patterns', title: 'Key Verb Patterns', icon: '🔑',
    render() { return `
      <p class="grammar-intro">These constructions cover the majority of everyday sentences. Note that after modal-like words (biddi, lazem, fiyye, rah), the following verb uses the bare stem — no b- prefix.</p>
      ${gs('biddi — I want (to)')}
      ${gp('<span class="ph">biddi</span> + noun &nbsp;|&nbsp; <span class="ph">biddi</span> + bare verb (no b-)')}
      ${ge('بدي قهوة', 'biddi ahwe', 'I want (a) coffee', 'biddi + noun')}
      ${ge('بدي روح', 'biddi ruh', 'I want to go', 'biddi + bare verb (not bruh)')}
      ${ge('بدي آكل شي', 'biddi akol shi', 'I want to eat something', '')}
      ${ge('ما بدّي', 'ma biddi', "I don't want", 'just ma \u2014 Lebanese adds no -sh')}
      ${gs('lazem — must / have to')}
      ${gp('<span class="ph">lazem</span> + bare verb')}
      ${ge('لازم روح', 'lazem ruh', 'I must go / I have to go', '')}
      ${ge('لازم تحكي معو', 'lazem t7ki ma3o', 'You need to talk to him', '')}
      ${ge('مش لازم', 'mish lazem', "You don't have to / It's not necessary", '')}
      ${gs('fiyye — I can')}
      ${gp('<span class="ph">fiyye</span> + bare verb')}
      ${ge('فيّ روح', 'fiyye ruh', 'I can go', '')}
      ${ge('ما فيّي روح', 'ma fiyye ruh', "I can't go", '')}
      ${ge('فيك تساعدني؟', 'fiyek tsa3edni?', 'Can you help me?', 'fiyek = you can (m)')}
      ${gs('Summary: modal + bare verb')}
      <table class="gtable">
        <tr><th>Pattern</th><th>Translit.</th><th>Meaning</th></tr>
        <tr><td>بدي + فعل</td><td class="t-tr">biddi + verb</td><td>I want to…</td></tr>
        <tr><td>لازم + فعل</td><td class="t-tr">lazem + verb</td><td>I must / have to…</td></tr>
        <tr><td>فيّ + فعل</td><td class="t-tr">fiyye + verb</td><td>I can…</td></tr>
        <tr><td>رح + فعل</td><td class="t-tr">rah + verb</td><td>I will / going to…</td></tr>
        <tr><td>عم + ب + فعل</td><td class="t-tr">3am + b + verb</td><td>I am currently…</td></tr>
      </table>
      ${gn('<strong>The b- rule:</strong> Habitual present uses <em>b-</em> (<em>bakol</em> = I eat). But after modals (biddi, lazem, fiyye, rah), use the bare stem (<em>akol</em>, <em>ruh</em>, etc.). This is one of the most common beginner errors.')}
    `; }
  },
  {
    id: 'numbers', title: 'Numbers, Time & Money', icon: '🔢',
    render() {
      const ordinals = [
        ['1st','الأول / الأولى','el-awwal / el-ula','m/f — first'],
        ['2nd','الثاني / الثانية','el-teni / el-tanye','second'],
        ['3rd','الثالث / الثالثة','el-talit / el-talte','third'],
        ['4th','الرابع / الرابعة','el-rabi3 / el-rabi3a','fourth'],
        ['5th','الخامس / الخامسة','el-khames / el-khamse','fifth'],
        ['last','الأخير / الأخيرة','el-akhir / el-akhire','last'],
      ];
      const timeExpr = [
        { ar:'هلق / هلّأ', tr:'halla2', en:'Right now' },
        { ar:'بكرا', tr:'bukra', en:'Tomorrow' },
        { ar:'امبارح / البارح', tr:'embareh / el-bare7', en:'Yesterday' },
        { ar:'بعدين', tr:'ba3den', en:'Later / after' },
        { ar:'من شوي', tr:'men shway', en:'A little while ago / soon' },
        { ar:'على طول', tr:'3ala tul', en:'Immediately / straight away' },
        { ar:'شوي شوي', tr:'shway shway', en:'Little by little / slowly' },
        { ar:'بالآخر', tr:'bil-akhir', en:'In the end / finally' },
        { ar:'الأسبوع الجاي', tr:'el-usbu3 el-jay', en:'Next week' },
        { ar:'الشهر اللي فات', tr:'el-shahr elli fat', en:'Last month' },
        { ar:'قبل ما', tr:'abel ma', en:'Before (+ verb)' },
        { ar:'بعد ما', tr:'ba3d ma', en:'After (+ verb)' },
      ];
      return `
      <p class="grammar-intro">Lebanese numbers have distinct dialect forms — especially for 2, 8, and the teens. Mastering clock time, money phrases, and ordinals is essential for daily life.</p>
      ${gs('Cardinal Numbers 1–10 (Lebanese)')}
      <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:6px;margin-bottom:14px">
        ${[['1','واحد','wahed'],['2','تنين','tnein'],['3','تلاتة','tlate'],['4','أربعة','arba3a'],['5','خمسة','khamse'],
           ['6','ستة','sitte'],['7','سبعة','sab3a'],['8','تمانية','tmenie'],['9','تسعة','tis3a'],['10','عشرة','3ashre']].map(([n,ar,tr]) =>
          `<div style="background:var(--card);border-radius:8px;padding:8px;text-align:center">
            <div style="font-size:1.1rem;font-weight:800;color:var(--accent)">${n}</div>
            <div style="direction:rtl;font-family:'Segoe UI','Noto Naskh Arabic',serif;font-size:0.95rem;font-weight:700;color:var(--accent2)">${ar}</div>
            <div style="font-size:0.7rem;color:var(--green);font-style:italic">${tr}</div>
          </div>`).join('')}
      </div>
      ${gs('Teens & Tens')}
      <div style="overflow-x:auto;margin-bottom:14px"><table style="width:100%;border-collapse:collapse;font-size:0.82rem">
        <thead><tr style="background:var(--card2)">
          <th style="padding:6px 10px;text-align:left;border-bottom:1px solid var(--border)">#</th>
          <th style="padding:6px 10px;text-align:right;border-bottom:1px solid var(--border)">Arabic</th>
          <th style="padding:6px 10px;text-align:left;border-bottom:1px solid var(--border)">Translit.</th>
          <th style="padding:6px 10px;text-align:left;border-bottom:1px solid var(--border)">Note</th>
        </tr></thead>
        <tbody>
          ${[['11','حدعش','7da3sh','Contracted from "one-ten"'],['12','تنعش','tna3sh','Contracted'],
             ['13','تلتعش','tlat3sh',''],['14','أربعتعش','arba3ta3sh',''],['15','خمستعش','khamsta3sh',''],
             ['20','عشرين','3ashrin',''],['30','تلاتين','tlatin',''],['40','أربعين','arba3in',''],
             ['50','خمسين','khamsin',''],['100','مية','miyye','MSA: mi\'a'],
             ['200','ميتين','mitein','Dual form'],['1000','ألف','alf',''],
             ['1,000,000','مليون','melyun','']].map(([n,ar,tr,note]) =>
            `<tr>
              <td style="padding:5px 10px;border-bottom:1px solid var(--border)44;font-weight:700">${n}</td>
              <td style="padding:5px 10px;border-bottom:1px solid var(--border)44;text-align:right;direction:rtl;font-family:'Segoe UI','Noto Naskh Arabic',serif;color:var(--accent2)">${ar}</td>
              <td style="padding:5px 10px;border-bottom:1px solid var(--border)44;color:var(--green);font-style:italic">${tr}</td>
              <td style="padding:5px 10px;border-bottom:1px solid var(--border)44;color:var(--muted)">${note}</td>
            </tr>`).join('')}
        </tbody>
      </table></div>
      ${gs('Ordinal Numbers (First, Second…)')}
      <div style="overflow-x:auto;margin-bottom:14px"><table style="width:100%;border-collapse:collapse;font-size:0.82rem">
        <tbody>
          ${ordinals.map(([n,ar,tr,note]) =>
            `<tr>
              <td style="padding:5px 10px;border-bottom:1px solid var(--border)44;font-weight:700;width:40px">${n}</td>
              <td style="padding:5px 10px;border-bottom:1px solid var(--border)44;text-align:right;direction:rtl;font-family:'Segoe UI','Noto Naskh Arabic',serif;color:var(--accent2)">${ar}</td>
              <td style="padding:5px 10px;border-bottom:1px solid var(--border)44;color:var(--green);font-style:italic">${tr}</td>
              <td style="padding:5px 10px;border-bottom:1px solid var(--border)44;color:var(--muted)">${note}</td>
            </tr>`).join('')}
        </tbody>
      </table></div>
      ${gs('Telling Time — Lebanese Style')}
      ${ge('قديش الساعة؟', 'addeish el-sa3a?', 'What time is it?', 'Most natural Lebanese question for the time')}
      ${ge('الساعة تلاتة', 'el-sa3a tlate', "It's 3 o'clock", 'el-sa3a + number')}
      ${ge('الساعة خمسة ونص', 'el-sa3a khamse w-noss', "It's 5:30", 'w-noss = and a half')}
      ${ge('الساعة سبعة وربع', 'el-sa3a sab3a w-rub3', "It's 7:15", 'w-rub3 = and a quarter')}
      ${ge('الساعة تسعة إلا ربع', 'el-sa3a tis3a illa rub3', "It's 8:45", 'illa = minus (quarter to nine)')}
      ${ge('الضهر / بعد الضهر', 'el-dohr / ba3d el-dohr', 'Noon / afternoon', 'el-masa = evening; el-lel = night; el-sobe7 = morning')}
      ${gs('Money & Prices')}
      ${ge('قديش بيكلف هاد؟', 'addeish bikallef hayda?', 'How much does this cost?', '')}
      ${ge('غالي كتير', 'ghali ktir', 'Very expensive', 'Useful when haggling')}
      ${ge('في خصم؟', 'fi khasm?', 'Is there a discount?', 'Always worth asking in Lebanese shops')}
      ${ge('كسّر السعر', 'kassar el-se3er', 'Lower the price / give me a deal', 'Lit. "break the price" — bargaining phrase')}
      ${ge('ليرة لبنانية', 'lira lubnaniyye', 'Lebanese Pound (LBP)', 'Currency — though USD increasingly dominant since 2019 crisis')}
      ${ge('بالدولار', 'bil-dolar', 'In dollars', 'Many prices now quoted in USD in Lebanon')}
      ${gs('Key Time Expressions')}
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:6px;margin-bottom:12px">
        ${timeExpr.map(t => `<div style="background:var(--card);border-radius:8px;padding:8px 10px">
          <div style="direction:rtl;font-family:'Segoe UI','Noto Naskh Arabic',serif;font-size:0.9rem;font-weight:700;color:var(--accent2)">${t.ar}</div>
          <div style="font-size:0.7rem;color:var(--green);font-style:italic">${t.tr}</div>
          <div style="font-size:0.7rem;color:var(--muted)">${t.en}</div>
        </div>`).join('')}
      </div>
      ${gn('Lebanese time tip: "bukra" (tomorrow) famously means anything from "tomorrow" to "someday." "3ala tul" (immediately) is often optimistic. And "min shway" can mean both "a moment ago" and "in a moment" — context is everything!')}
    `; }
  },
  {
    id: 'idioms', title: 'Common Idioms & Expressions', icon: '💬',
    render() { return `
      <p class="grammar-intro">Lebanese Arabic is rich with idiomatic expressions. These are the phrases that make you sound natural — they don't translate literally but are used constantly in daily conversation.</p>
      ${gs('Everyday expressions')}
      ${ge('الله معك', 'allah ma3ak', 'Go with God / Goodbye (warm)', 'Said when someone is leaving — warm farewell')}
      ${ge('ربي يحميك', 'rabbi y7miik', 'May God protect you', 'Warm blessing — said to someone you care about')}
      ${ge('كتر خيرك', 'ktir kheirak', 'Thank you (lit: may your good multiply)', 'More heartfelt than shukran')}
      ${ge('الله يخليك', 'allah ykhallik', 'Please (lit: may God keep you)', 'Said when asking a favor — like "please" but more emphatic')}
      ${ge('حياتي', '7ayati', 'My life (term of endearment)', 'Like "my darling" — used between close people')}
      ${ge('يسلم إيديك', 'yislam idek', 'Bless your hands', 'Said when someone cooks for you or does skilled work')}
      ${ge('على راسي', "3a rasi", 'On my head (absolutely / with pleasure)', 'Saying you will do something with the greatest respect')}
      ${ge('ما في شي', 'ma fi shi', 'Nothing / No problem / Never mind', 'Very versatile — dismisses a concern or says nothing is wrong')}
      ${ge('شو بدك', 'shu biddak', 'What do you want? / What\'s up?', 'Can be curious or confrontational depending on tone')}
      ${ge('هيدا هيدا', 'heida heida', 'This and that / All of this', 'Used to gesture at a situation — "all this stuff"')}
      ${gs('Encouragement & reaction')}
      ${ge('يلا يلا', 'yalla yalla', "Come on! Let's go!", 'Doubled for urgency')}
      ${ge('بالتوفيق', 'bil-tawfi2', 'Good luck', 'Said before exams, competitions, challenges')}
      ${ge('الله يوفقك', 'allah ywaffi2ak', 'May God grant you success', 'Stronger version of good luck')}
      ${ge('ما شاء الله', 'masha allah', 'How wonderful! (warding off evil eye)', 'Said admiringly — prevents the evil eye')}
      ${ge('الحمد لله', 'el-hamdu lillah', 'Thank God / I\'m fine (lit: praise God)', 'The default response to "how are you" in many contexts')}
      ${gs('Body-part idioms — head & heart')}
      ${ge('راسو كبير', 'raso kbir', 'He\'s stubborn / big-headed (lit: his head is big)', 'Very common way to call someone stubborn')}
      ${ge('بقلبي / عقلبي', 'b-albi / 3a-albi', 'In my heart / Dear to me', 'Used for people or things you love deeply')}
      ${ge('على راسي عيون', '3a rasi 3yun', 'With pleasure / you are precious to me (lit: on my head are eyes)', 'Strongest possible acceptance of a request')}
      ${ge('قلبو حجر', '2albo 7ajar', 'Heartless / cold-hearted (lit: his heart is stone)', 'Said of someone with no empathy')}
      ${ge('وجعتلي دماغي', 'waja3tilli dmaghi', 'You gave me a headache / you annoyed me', 'Common frustration expression')}
      ${ge('عم بتحمّلو', '3am bit7ammalo', 'I\'m putting up with him', 'Accept a burden or tolerate a difficult person')}
      ${gs('Body-part idioms — eye & hand')}
      ${ge('بعيون رأسي', 'b-3yun rasi', 'Absolutely / with my own eyes (swearing)', 'Very emphatic agreement or promise')}
      ${ge('بيضة عيني', 'bayde 3ayni', 'The apple of my eye (lit: egg of my eye)', 'Said of a beloved child or person — treasured')}
      ${ge('مسدود العين', 'masdud el-3ayn', 'Jinxed / brings bad luck (lit: blocked eye)', 'Said of someone who causes bad luck wherever they go')}
      ${ge('بإيدي', 'b-idi', 'In my hands / under my control', 'I\'ll take care of it — it\'s in my hands')}
      ${ge('تقطّعت إيديه', 't2atta3it ideh', 'His hands were cut off (lost his skill)', 'Someone lost their touch or ability')}
      ${gs('Food & daily life idioms')}
      ${ge('أكل همّو', 'akal hammo', 'He worried himself sick (lit: ate his worry)', 'Extreme worrying that consumes you')}
      ${ge('مش بالع كلامو', 'mish bele3 kalemo', 'I don\'t buy what he says (lit: not swallowing his words)', 'You\'re skeptical of someone\'s claims')}
      ${ge('شربها', 'shiribha', 'He got drunk / he was humiliated (lit: he drank it)', 'Context-dependent: drank alcohol OR got embarrassed')}
      ${ge('طبخ مؤامرة', 'tabakh mu\'amara', 'He cooked up a scheme (lit: cooked a conspiracy)', 'Planned something sneaky')}
      ${ge('ما بكيل بمكيالين', 'ma bkil b-mikyalein', 'I don\'t use double standards (lit: measure with two measures)', 'I judge everyone by the same standard')}
      ${gs('Colorful Lebanese expressions')}
      ${ge('شو هالبلد!', 'shu hal-balad!', 'What a country! (sarcastic)', 'The universal Lebanese expression of exasperated love for Lebanon')}
      ${ge('الله ستر', 'allah satar', 'God saved us / Thank goodness (lit: God covered/protected)', 'Relief that something bad didn\'t happen')}
      ${ge('ربك كبير', 'rabbak kbir', 'God is great / it\'ll work out', 'Fatalistic optimism — trust things will work out')}
      ${ge('حرام عليك', '7aram 3alayk', 'Shame on you / that\'s not fair', 'Strong moral reproach — you should be ashamed')}
      ${ge('زعلان / زعلانة', 'za3lan / za3lane', 'Upset / offended (m/f)', 'Very common — Lebanese get زعلان about all sorts of things!')}
      ${ge('بيجنن', 'byjannen', 'It\'s amazing / maddening (lit: it makes crazy)', 'Positive or negative depending on context: amazing food OR infuriating traffic')}
      ${gn('Pro tip: Lebanese expressions are highly tonal. "شو بدك؟" said softly = friendly curiosity; said sharply = confrontation. Context and tone are everything — listen carefully to native speakers.')}
    `; }
  },
  {
    id: 'french-loanwords', title: 'French in Lebanese Arabic', icon: '🇫🇷',
    render() { return `
      <p class="grammar-intro">Lebanon was under French Mandate (1920–1943) and French remains widely spoken today alongside Arabic and English. Hundreds of French words entered Lebanese Arabic, fully integrated into daily speech. Knowing these dramatically speeds up comprehension.</p>
      ${gs('Everyday French loanwords')}
      <div style="overflow-x:auto;margin-bottom:10px"><table style="width:100%;border-collapse:collapse;font-size:0.82rem">
        <thead><tr style="background:var(--card2)">
          <th style="padding:8px 10px;text-align:left;border-bottom:1px solid var(--border)">Lebanese Arabic</th>
          <th style="padding:8px 10px;text-align:left;border-bottom:1px solid var(--border)">Pronunciation</th>
          <th style="padding:8px 10px;text-align:left;border-bottom:1px solid var(--border)">French origin</th>
          <th style="padding:8px 10px;text-align:left;border-bottom:1px solid var(--border)">Meaning</th>
        </tr></thead>
        <tbody>
          ${[
            ['مرسي','mersi','merci','Thank you'],
            ['بونجور / سلام','bonjour / salam','bonjour','Good morning (mixed use)'],
            ['سيارة / كار','sayyara / kar','car (English via French)','Car'],
            ['أسانسير','asansir','ascenseur','Elevator / lift'],
            ['دوش','dush','douche','Shower'],
            ['سيرفيس','servis','service','Shared minibus taxi'],
            ['بلكون','balkon','balcon','Balcony'],
            ['صالون','salon','salon','Living room / salon'],
            ['أفوكا','avoka','avocat','Lawyer / avocado'],
            ['بلاستيك','blastik','plastique','Plastic bag'],
            ['سوبرماركت','supermarche','supermarché','Supermarket'],
            ['سيكلوب','siklo','cyclope (brand name)','Scotch tape / sellotape'],
            ['شوفاج','shofaj','chauffage','Heating / heater'],
            ['بنطلون','bantalon','pantalon','Trousers / pants'],
            ['جاكيت','jaket','jaquette / jacket','Jacket'],
            ['كلكس','kalaks','klaxon','Car horn'],
          ].map(([lb,pr,fr,en]) =>
            `<tr>
              <td style="padding:7px 10px;border-bottom:1px solid var(--border)44;direction:rtl;font-family:'Segoe UI','Noto Naskh Arabic',serif;font-size:1rem;color:var(--accent2)">${lb}</td>
              <td style="padding:7px 10px;border-bottom:1px solid var(--border)44;font-style:italic;color:var(--muted)">${pr}</td>
              <td style="padding:7px 10px;border-bottom:1px solid var(--border)44;color:var(--blue)">${fr}</td>
              <td style="padding:7px 10px;border-bottom:1px solid var(--border)44">${en}</td>
            </tr>`
          ).join('')}
        </tbody>
      </table></div>
      ${gs('Code-switching: Mixing French & Arabic')}
      ${ge('بدي روح عالsupermarché', 'baddi ruh 3al-supermarché', 'I want to go to the supermarket', 'Natural code-switching — French word in Arabic sentence')}
      ${ge('merci ktir!', 'mersi ktir', 'Thank you very much!', 'merci + Lebanese Arabic intensifier = natural phrase')}
      ${ge('c\'est quoi هيدا الشي؟', "c'est quoi hayde el-shi?", "What is this thing?", "French question + Arabic noun — heard constantly in Beirut")}
      ${ge('allô, kifak?', 'allo, kifak?', 'Hello (phone), how are you?', 'allô from French "allô" for phone greetings')}
      ${ge('الأوتوبيس', 'l-otobus', 'The bus (autobus)', 'French autobus → Lebanese l-otobus')}
      ${gs('Numbers & Everyday French in Lebanese')}
      ${ge('فضل عشر منيت', 'fadal 3ashr minit', 'There are 10 minutes left', 'منيت from French "minute" — very common')}
      ${ge('على البولفار', "3al-boulevard", 'On the boulevard', 'French boulevard used for main avenues in Beirut')}
      ${ge('روح عالروندبوين', '3al-rond-point', 'Go to the roundabout', 'rond-point = roundabout, universally used in Lebanon')}
      ${gn('Cultural note: Speaking French in Lebanon is a social marker. Upper-class and educated Lebanese seamlessly mix French into Arabic (and English) — this trilingual code-switching is called <strong>Arabizi</strong> or colloquially just "the Lebanese way of talking." Don\'t be surprised if a sentence has all three languages!')}
      ${gn('Pro tip: If you know any French, you have a head start in Lebanese! Many more French words: كومبيوتر (ordinateur → computer), تلفون (téléphone), بروجيه (projecteur), بيرو (bureau = desk/office), كابينيه (cabinet = office/bathroom).')}
    `; }
  },
  {
    id: 'leb-vs-msa', title: 'Lebanese vs. Standard Arabic (MSA)', icon: '🔄',
    render() { return `
      <p class="grammar-intro">If you've studied any Arabic before, this table is essential. Lebanese differs significantly from MSA. Learning these differences prevents your "textbook Arabic" from confusing native speakers.</p>
      <table class="gtable">
        <tr><th>Concept</th><th>MSA</th><th>Lebanese (Levantine)</th><th>Note</th></tr>
        <tr><td>Yes</td><td>نعم (na3am)</td><td class="t-tr">إيه (eih) / ايوا</td><td class="t-note">na3am sounds formal/unnatural in Lebanon</td></tr>
        <tr><td>What?</td><td>ماذا / ما (matha / ma)</td><td class="t-tr">شو (shu)</td><td class="t-note">shu is the key Lebanese marker</td></tr>
        <tr><td>Where?</td><td>أين (ayna)</td><td class="t-tr">وين (wein)</td><td class="t-note">ayna sounds like a textbook</td></tr>
        <tr><td>Why?</td><td>لماذا (limatha)</td><td class="t-tr">ليش (leish)</td><td class="t-note">leish = the only form you\'ll hear</td></tr>
        <tr><td>How?</td><td>كيف (kaifa)</td><td class="t-tr">كيف (kif)</td><td class="t-note">same word, but shorter: kif not kaifa</td></tr>
        <tr><td>Good</td><td>جيد (jayid)</td><td class="t-tr">منيح (mnih)</td><td class="t-note">jayid is never used in Lebanese speech</td></tr>
        <tr><td>I want</td><td>أريد (urid)</td><td class="t-tr">بدي (biddi)</td><td class="t-note">biddi = essential Lebanese verb</td></tr>
        <tr><td>Coffee</td><td>قهوة (qahwa)</td><td class="t-tr">أهوة (ahwe)</td><td class="t-note">Lebanese drop the "q" — very distinctive</td></tr>
        <tr><td>Speak</td><td>تكلّم (takallam)</td><td class="t-tr">حكى (haka)</td><td class="t-note">haka is the Lebanese verb for "to speak"</td></tr>
        <tr><td>Come (imp.)</td><td>تعال (ta3al)</td><td class="t-tr">تعا (ta3a)</td><td class="t-note">shorter and easier to say</td></tr>
        <tr><td>Now</td><td>الآن (al-aan)</td><td class="t-tr">هلق (halla2)</td><td class="t-note">halla2 is exclusively Lebanese/Levantine</td></tr>
        <tr><td>Two</td><td>اثنان (ithnan)</td><td class="t-tr">تنين (tnein)</td><td class="t-note">tnein sounds nothing like MSA</td></tr>
        <tr><td>Finished/Done</td><td>انتهى (intaha)</td><td class="t-tr">خلص (khalas)</td><td class="t-note">khalas is known worldwide — from Lebanese diaspora</td></tr>
      </table>
      ${gn('<strong>Tip:</strong> Lebanese Arabic has many loanwords from French ("merci" = common, "bonjour" heard in some contexts) and English (computer = "kompyutar", TV = "tilfizyon"). These feel natural, not foreign.')}
      ${gn('<strong>The ق (qaf) sound:</strong> In MSA, ق is pronounced like a "q". In Lebanese, it\'s replaced by a glottal stop (like the pause in "uh-oh"). So قهوة (qahwa) becomes أهوة (ahwe). This is one of the most distinctive features of Lebanese Arabic.')}
    `; }
  },
  {
    id: 'survival', title: 'Survival Dialogues', icon: '💬',
    render() { return `
      <p class="grammar-intro">Real Lebanese conversations you'll actually have. Learn these patterns — they cover 80% of everyday interactions as a visitor or beginner.</p>
      ${gs('At a restaurant (بالمطعم)')}
      ${ge('شو عندكم اليوم؟', 'shu 3andkon el-yom?', 'What do you have today?', '')}
      ${ge('عطيني منقوشة زعتر وقهوة', '3atini mankoushe za3tar w ahwe', 'Give me a zaatar mankoushe and coffee', 'Direct order — common and polite in Lebanese')}
      ${ge('الحساب، لو سمحت', 'el-hesab, law samaht', 'The check, please', '')}
      ${ge('كلو تمام؟', 'killo tamam?', 'Is everything OK?', 'Waiter asking — respond: "تمام كتير / tamam ktir"')}
      ${gs('Getting around (بالطريق)')}
      ${ge('كيف بروح عـ...؟', 'kif bruh 3a...?', 'How do I get to...?', '')}
      ${ge('قديش التاكسي لـ...؟', 'addeish el-taksi la...?', 'How much is the taxi to...?', '')}
      ${ge('وقفني هون', 'wa22ifni hon', 'Stop here (to driver)', '')}
      ${ge('روح دغري وبعدين يمين', 'ruh doghri w ba3dein ymin', 'Go straight then right', '')}
      ${gs('Shopping (بالدكان)')}
      ${ge('بدي أشوف هالشي', 'biddi ashuf hal-shi', 'I want to see this thing', '')}
      ${ge('عندك أحسن من هيدا؟', '3andak ahsan min heida?', 'Do you have better than this?', '')}
      ${ge('رح افكر', 'rah fakker', "I'll think about it", 'Polite way to exit a sales conversation')}
      ${gs('Socializing (الاجتماعيات)')}
      ${ge('تعا نحكي شوي', 'ta3a nhki shwayy', 'Come let\'s talk a bit', '')}
      ${ge('شو عملت بنهارك؟', 'shu 3milit b-nharak?', 'What did you do today?', '')}
      ${ge('مبسوط عرفتك', 'mabsut 3arriftak', 'Happy to meet you', '')}
      ${ge('خلينا نتواعد', 'khalina nitwa3ad', 'Let\'s make plans', '')}
    `; }
  },
  {
    id: 'prepositions', title: 'Prepositions & Location Words', icon: '📍',
    render() { return `
      <p class="grammar-intro">Lebanese Arabic prepositions are shorter and more collapsed than MSA. Mastering these lets you describe location, movement, and ownership with ease.</p>
      <table class="gtable">
        <tr><th>English</th><th>Arabic</th><th>Translit.</th><th>Note</th></tr>
        <tr><td>in / at</td><td class="t-ar">في / ب</td><td class="t-tr">fi / b-</td><td class="t-note">fi = standalone; b- = prefixed (b-Beirut = in Beirut)</td></tr>
        <tr><td>on / to / at</td><td class="t-ar">ع / على</td><td class="t-tr">3a / 3ala</td><td class="t-note">3a = very common shortening: 3a-l-beit = to the house</td></tr>
        <tr><td>with / and</td><td class="t-ar">مع / و</td><td class="t-tr">ma3 / w</td><td class="t-note">w = and (between nouns); ma3 = with (company/instrument)</td></tr>
        <tr><td>from</td><td class="t-ar">من</td><td class="t-tr">min</td><td class="t-note">min Beirut = from Beirut; min without? = from what?</td></tr>
        <tr><td>to / for</td><td class="t-ar">ل / لـ</td><td class="t-tr">la / l-</td><td class="t-note">prefixed to nouns: l-huwwe = for him</td></tr>
        <tr><td>about / on</td><td class="t-ar">عن</td><td class="t-tr">3an</td><td class="t-note">3an shu = about what?</td></tr>
        <tr><td>between</td><td class="t-ar">بين</td><td class="t-tr">bein</td><td class="t-note">bein el-beitin = between the two houses</td></tr>
        <tr><td>until / to</td><td class="t-ar">لحتى / لـ</td><td class="t-tr">la7ta / la</td><td class="t-note">la7ta wein? = until where? / la-halla2 = until now</td></tr>
        <tr><td>without</td><td class="t-ar">بلا</td><td class="t-tr">bala</td><td class="t-note">bala sukkar = without sugar</td></tr>
        <tr><td>because of</td><td class="t-ar">بسبب</td><td class="t-tr">b-sabab</td><td class="t-note">b-sabab el-za7me = because of the traffic</td></tr>
      </table>
      ${gs('Common location phrases')}
      ${ge('على اليمين', '3a l-ymin', 'On the right', '')}
      ${ge('على الشمال', '3a l-shmel', 'On the left', '')}
      ${ge('قدام البيت', '2uddem el-beit', 'In front of the house', '')}
      ${ge('جنب الدكان', 'janb el-dukken', 'Next to the shop', '')}
      ${ge('فوق الطاولة', 'fo2 el-tawle', 'On / above the table', '')}
      ${ge('تحت الكرسي', 'ta7t el-kursi', 'Under the chair', '')}
      ${ge('جوّا', 'jawwa', 'Inside / in there', 'Lebanese colloquial — MSA: dakhil')}
      ${ge('برّا', 'barra', 'Outside / out there', 'Lebanese colloquial — MSA: kharij')}
      ${gn('<strong>The b- prefix</strong> is one of the most useful patterns in Lebanese. It collapses "fi" + definite article: fi el-beit → b-el-beit → bel-beit (at the house). You\'ll hear this constantly.')}
    `; }
  },
  {
    id: 'questions', title: 'Building Questions', icon: '❓',
    render() { return `
      <p class="grammar-intro">Lebanese question words are different from MSA. Once you know these five words and how to combine them with verbs, you can ask almost anything.</p>
      <table class="gtable">
        <tr><th>Question word</th><th>Arabic</th><th>Translit.</th><th>Example</th></tr>
        <tr><td>What?</td><td class="t-ar">شو</td><td class="t-tr">shu</td><td class="t-note">shu biddak? = what do you want?</td></tr>
        <tr><td>Where?</td><td class="t-ar">وين</td><td class="t-tr">wein</td><td class="t-note">wein raye7? = where are you going?</td></tr>
        <tr><td>Who?</td><td class="t-ar">مين</td><td class="t-tr">min</td><td class="t-note">min huwwe? = who is he?</td></tr>
        <tr><td>How?</td><td class="t-ar">كيف</td><td class="t-tr">kif</td><td class="t-note">kif 3milta? = how did you do it?</td></tr>
        <tr><td>Why?</td><td class="t-ar">ليش</td><td class="t-tr">leish</td><td class="t-note">leish? = why? — works standalone</td></tr>
        <tr><td>When?</td><td class="t-ar">إيمتى</td><td class="t-tr">eimta</td><td class="t-note">eimta raje3? = when are you coming back?</td></tr>
        <tr><td>How much?</td><td class="t-ar">قديش</td><td class="t-tr">addeish</td><td class="t-note">addeish heida? = how much is this?</td></tr>
        <tr><td>Which?</td><td class="t-ar">أي</td><td class="t-tr">ayy</td><td class="t-note">ayy yom? = which day?</td></tr>
      </table>
      ${gs('Yes / No questions — just add rising intonation')}
      <p class="grammar-intro">Lebanese yes/no questions use <strong>rising intonation</strong> with no structural change. The same sentence can be a statement or a question.</p>
      ${ge('راح؟', 'rah?', 'Did he go?', 'Same as "rah" (he went) — rising intonation = question')}
      ${ge('منيح؟', 'mnih?', 'Is it good?', 'Same word as "good/fine"')}
      ${ge('بتعرف؟', 'bta3rif?', 'Do you know?', '')}
      ${gs('Question tags — checking understanding')}
      ${ge('صح؟', 'sa77?', 'Right? / Correct?', 'Most common question tag')}
      ${ge('مش هيك؟', 'mish heik?', "Isn't it? / Right?", 'Lit: not like this?')}
      ${gn('<strong>Negative questions</strong>: Add "mish" before the verb or adjective: mish mnih? = isn\'t it good? — mish raye7? = aren\'t you going?')}
    `; }
  },
  {
    id: 'conjunctions', title: 'Conjunctions & Connectors', icon: '🔀',
    render() { return `
      <p class="grammar-intro">These small words are the glue of Lebanese Arabic sentences. Mastering them lets you build complex sentences and sound much more fluent.</p>
      <table class="gtable">
        <tr><th>Word</th><th>Arabic</th><th>Translit.</th><th>Usage</th></tr>
        <tr><td>and</td><td class="t-ar">و</td><td class="t-tr">w / wa</td><td class="t-note">usually "w" in speech: ana w inta</td></tr>
        <tr><td>but</td><td class="t-ar">بس</td><td class="t-tr">bass</td><td class="t-note">Lebanese "but" — also means "just/enough"</td></tr>
        <tr><td>or</td><td class="t-ar">أو / ولا</td><td class="t-tr">aw / walla</td><td class="t-note">walla more common in speech</td></tr>
        <tr><td>because</td><td class="t-ar">لأنو</td><td class="t-tr">la2anno</td><td class="t-note">la2 + anno = because</td></tr>
        <tr><td>so / therefore</td><td class="t-ar">يعني</td><td class="t-tr">ya3ni</td><td class="t-note">lit: "it means" — used like "so" or filler</td></tr>
        <tr><td>if</td><td class="t-ar">إذا</td><td class="t-tr">iza</td><td class="t-note">iza biddak = if you want</td></tr>
        <tr><td>when</td><td class="t-ar">لما</td><td class="t-tr">lamma</td><td class="t-note">lamma rja3 = when he came back</td></tr>
        <tr><td>although</td><td class="t-ar">مع إنو</td><td class="t-tr">ma3 inno</td><td class="t-note">lit: "with that it"</td></tr>
        <tr><td>then</td><td class="t-ar">بعدين</td><td class="t-tr">ba3dein</td><td class="t-note">also means "later" — context determines</td></tr>
        <tr><td>also</td><td class="t-ar">كمان</td><td class="t-tr">kamen</td><td class="t-note">very common — "ana kamen" = me too</td></tr>
      </table>
      ${gs('ya3ni — the Lebanese all-purpose filler')}
      ${ge('يعني', "ya3ni", 'So / I mean / Like / You know', '')}
      ${ge('يعني منيح', "ya3ni mnih", 'It\'s kind of good / It\'s alright', 'Softens adjectives — "sort of"')}
      ${ge('يعني شو؟', "ya3ni shu?", 'What do you mean? / So what?', '')}
      ${gn('<strong>ya3ni</strong> is the Swiss Army knife of Lebanese Arabic. It functions as a filler, a hedge ("sort of"), a question ("what do you mean?"), and a discourse marker. You\'ll hear it constantly.')}
    `; }
  },
  {
    id: 'verb-conjugation', title: 'Verb Conjugation Tables', icon: '🔧',
    render() { return `
      <p class="grammar-intro">Lebanese verbs conjugate for person, gender, and number. The good news: it\'s more regular than MSA, and most daily speech uses only a handful of forms. Here are the most important verbs fully conjugated.</p>
      ${gs('To be (present) — كان / في')}
      <p class="grammar-intro">There\'s no present tense "to be" verb in Lebanese — you just put subject + predicate together. But <strong>في / ma fi</strong> means "there is / there isn\'t".</p>
      <table class="gtable">
        <tr><th>Pronoun</th><th>English</th><th>Lebanese</th><th>Note</th></tr>
        <tr><td>ana</td><td>I am</td><td class="t-tr">ana + [adj/noun]</td><td class="t-note">ana mnih = I am fine</td></tr>
        <tr><td>inta/inti</td><td>you are</td><td class="t-tr">inta/inti + [adj]</td><td class="t-note">inta mnih? = are you fine?</td></tr>
        <tr><td>huwwe</td><td>he is</td><td class="t-tr">huwwe + [adj]</td><td class="t-note">huwwe ta3ban = he is tired</td></tr>
        <tr><td>hiyye</td><td>she is</td><td class="t-tr">hiyye + [adj]</td><td class="t-note">hiyye za3lane = she is upset</td></tr>
        <tr><td>nihna</td><td>we are</td><td class="t-tr">nihna + [adj]</td><td class="t-note">nihna mabsutin = we are happy</td></tr>
      </table>
      ${gs('To know (b3irif) — present tense')}
      <table class="gtable">
        <tr><th>Person</th><th>Arabic</th><th>Translit.</th></tr>
        <tr><td>I know</td><td class="t-ar">بعرف</td><td class="t-tr">ba3rif</td></tr>
        <tr><td>you know (m)</td><td class="t-ar">بتعرف</td><td class="t-tr">bta3rif</td></tr>
        <tr><td>you know (f)</td><td class="t-ar">بتعرفي</td><td class="t-tr">bta3rifi</td></tr>
        <tr><td>he knows</td><td class="t-ar">بيعرف</td><td class="t-tr">byi3rif</td></tr>
        <tr><td>she knows</td><td class="t-ar">بتعرف</td><td class="t-tr">bta3rif</td></tr>
        <tr><td>we know</td><td class="t-ar">منعرف</td><td class="t-tr">mna3rif</td></tr>
        <tr><td>they know</td><td class="t-ar">بيعرفو</td><td class="t-tr">byi3rifu</td></tr>
      </table>
      ${gs('To go (ruh) — present / future')}
      <table class="gtable">
        <tr><th>Person</th><th>Present (going)</th><th>Future (will go)</th></tr>
        <tr><td>I</td><td class="t-tr">3am bruh</td><td class="t-tr">rah ruh</td></tr>
        <tr><td>you (m)</td><td class="t-tr">3am btruuh</td><td class="t-tr">rah truuh</td></tr>
        <tr><td>he</td><td class="t-tr">3am byruuh</td><td class="t-tr">rah yruuh</td></tr>
        <tr><td>we</td><td class="t-tr">3am mnruuh</td><td class="t-tr">rah nruuh</td></tr>
      </table>
      ${gn('<strong>The b- prefix rule:</strong> Habitual/general present → <em>b-</em> (bta3rif = you know in general). Progressive/current → <em>3am b-</em> (3am bta3rif = you are currently knowing/learning). Future → <em>rah</em> + bare stem.')}
    `; }
  },
  {
    id: 'dual-plural', title: 'Dual, Plural & Broken Plurals', icon: '2️⃣',
    render() { return `
      <p class="grammar-intro">Arabic has a dual form (exactly two of something) and plurals that often change the internal vowel pattern rather than adding a suffix — called "broken plurals". These are tricky but essential.</p>
      ${gs('Dual — exactly two')}
      <p class="grammar-intro">Add <strong>-ein</strong> (or <strong>-tein</strong> for feminine) to a noun to mean "two of it".</p>
      <table class="gtable">
        <tr><th>Singular</th><th>Dual</th><th>Meaning</th></tr>
        <tr><td class="t-tr">yom (day)</td><td class="t-tr">yomein</td><td>two days</td></tr>
        <tr><td class="t-tr">sa3a (hour)</td><td class="t-tr">sa3tein</td><td>two hours</td></tr>
        <tr><td class="t-tr">d2i2a (minute)</td><td class="t-tr">da2i2tein</td><td>two minutes</td></tr>
        <tr><td class="t-tr">kilo</td><td class="t-tr">kilotein</td><td>two kilos</td></tr>
        <tr><td class="t-tr">3ein (eye)</td><td class="t-tr">3einein</td><td>two eyes (the eyes)</td></tr>
        <tr><td class="t-tr">beit (house)</td><td class="t-tr">beitein</td><td>two houses</td></tr>
      </table>
      ${gs('Regular plurals — add -at or -in')}
      <table class="gtable">
        <tr><th>Singular</th><th>Plural</th><th>Pattern</th></tr>
        <tr><td class="t-tr">muhandis (engineer)</td><td class="t-tr">muhandisin</td><td>-in for professions</td></tr>
        <tr><td class="t-tr">taleb (student)</td><td class="t-tr">talbe / tullab</td><td>mixed</td></tr>
        <tr><td class="t-tr">maktab (office)</td><td class="t-tr">makatib</td><td>broken plural</td></tr>
      </table>
      ${gs('Common broken plurals — must be memorized')}
      <table class="gtable">
        <tr><th>Singular</th><th>Plural</th><th>Meaning</th></tr>
        <tr><td class="t-ar">كتاب</td><td class="t-ar">كتب</td><td>book → books (ktab → ktob)</td></tr>
        <tr><td class="t-ar">بيت</td><td class="t-ar">بيوت</td><td>house → houses (beit → byut)</td></tr>
        <tr><td class="t-ar">ولد</td><td class="t-ar">أولاد</td><td>boy → boys (walad → wled)</td></tr>
        <tr><td class="t-ar">بنت</td><td class="t-ar">بنات</td><td>girl → girls (bint → banat)</td></tr>
        <tr><td class="t-ar">كلب</td><td class="t-ar">كلاب</td><td>dog → dogs (kalb → klab)</td></tr>
        <tr><td class="t-ar">شارع</td><td class="t-ar">شوارع</td><td>street → streets (share3 → shwari3)</td></tr>
      </table>
      ${gn('<strong>Practical tip:</strong> When in doubt, add <em>-at</em> for feminine nouns and things, <em>-in/-iin</em> for people. The broken plural must be learned word by word — but the most common ones appear quickly in real speech.')}
    `; }
  },
  {
    id: 'proverbs', title: 'Lebanese Proverbs & Sayings', icon: '🌿',
    render() {
      const provs = [
        { ar:'الصبر مفتاح الفرج', tr:'el-sabr mifta7 el-faraj', en:'Patience is the key to relief', when:'Said during hardship — job loss, waiting, disappointment. The most common Arabic proverb.', tags:'patience' },
        { ar:'الجار قبل الدار', tr:'el-jar abel el-dar', en:'The neighbor before the house', when:'Check who your neighbors are before you buy or rent. Community matters more than the place.', tags:'community' },
        { ar:'على قدر لحافك مدّ رجليك', tr:"3ala 2addr li7afak madd rijlak", en:'Stretch your legs only as far as your blanket', when:'Said when someone is living beyond their means or being unrealistic about resources.', tags:'wisdom' },
        { ar:'الحكي رخيص والفعل غالي', tr:'el-7aki rkhis w el-fi3l ghali', en:'Talk is cheap, action is expensive', when:'Said to someone who makes promises but doesn\'t deliver. Actions speak louder.', tags:'action' },
        { ar:'اللي بيتو من قزاز ما يحدف الناس بالحجر', tr:'illi beito min 2azaz ma yi7dif el-nas bil-7ajar', en:'Those whose house is glass shouldn\'t throw stones at people', when:'Don\'t judge or criticize others for faults you share. The Lebanese version of "glass houses."', tags:'judgment' },
        { ar:'مع الذيب كون ذيب', tr:'ma3 el-zib kun zib', en:'With the wolf, be a wolf', when:'Adapt to your environment and company. Don\'t be naive when dealing with difficult people.', tags:'survival' },
        { ar:'الغايب حجتو معو', tr:'el-ghayib 7ujito ma3o', en:'The absent one has their excuse with them', when:'Don\'t judge someone who isn\'t there to explain. Hear all sides before concluding.', tags:'fairness' },
        { ar:'إيد وحدا ما بتصفق', tr:'id wa7da ma btsaffa2', en:'One hand can\'t clap alone', when:'You need cooperation and two sides for anything to work — conflict or collaboration.', tags:'cooperation' },
        { ar:'بكرا بكرا وهالدنيا فانية', tr:'bukra bukra w hal-dine faniye', en:'Tomorrow, tomorrow — and this world passes away', when:'Stop procrastinating. Time passes whether you act or not. Used to push someone to decide.', tags:'time' },
        { ar:'من شبّ على شي شاب عليه', tr:'min shabb 3ala shi shab 3aleih', en:'What you grow up with, you grow old with', when:'Habits formed young are hard to break. Said about ingrained behaviors or character.', tags:'habits' },
        { ar:'اللي بتزرعو بتحصدو', tr:'illi btizra3o bt7ssado', en:'You reap what you sow', when:'Your actions now will determine your future. Natural consequences — positive or negative.', tags:'consequences' },
        { ar:'الحيط الواطي بقفزوا عليه', tr:'el-7et el-wati bi2efzu 3aleih', en:'People jump over the low wall', when:'The weak get taken advantage of. Stand strong or others will impose on you.', tags:'strength' },
        { ar:'البعيد عن العين بعيد عن القلب', tr:'el-ba3id 3an el-3ayn ba3id 3an el-2alb', en:'Far from the eye, far from the heart', when:'Out of sight, out of mind. Long-distance relationships and absent friends fade.', tags:'relationships' },
        { ar:'الصبر جميل', tr:'el-sabr jamil', en:'Patience is beautiful', when:'Short and powerful — said when asking someone to wait or when accepting a difficult situation.', tags:'patience' },
        { ar:'ما في دخان بلا نار', tr:'ma fi dukhan bla nar', en:'There\'s no smoke without fire', when:'Every rumor has some basis. Where there are signs, there\'s usually something real behind them.', tags:'truth' },
        { ar:'العقل زينة', tr:'el-3a2l zine', en:'Intelligence is an adornment', when:'Being smart is the best quality. Sometimes said to imply: use your head!', tags:'wisdom' },
        { ar:'الحق مر', tr:'el-7a2 murr', en:'The truth is bitter', when:'Honest feedback is hard to hear. Said when delivering or receiving difficult truth.', tags:'truth' },
        { ar:'كل وادي وصداه', tr:'kull wadi w sdah', en:'Every valley has its echo', when:'Every action has its consequence. What you put out comes back to you.', tags:'consequences' },
        { ar:'يد الله مع الجماعة', tr:'id allah ma3 el-jama3a', en:'God\'s hand is with the group', when:'There is strength and blessing in unity. Said to encourage togetherness.', tags:'community' },
        { ar:'قرّب الحبيب ولو على جنب', tr:'2arreb el-7abib wlo 3ala janb', en:'Keep the loved one close, even sideways', when:'Maintain relationships even imperfectly. A strained connection is better than a broken one.', tags:'relationships' },
      ];
      const categories = [...new Set(provs.map(p => p.tags))];
      const tagColors = { patience:'var(--green)', wisdom:'var(--blue)', action:'var(--accent2)', community:'var(--easy)', judgment:'var(--hard)', survival:'var(--accent)', fairness:'var(--blue)', cooperation:'var(--green)', time:'var(--accent2)', habits:'var(--muted)', consequences:'var(--hard)', strength:'var(--accent)', relationships:'var(--blue)', truth:'var(--accent2)' };
      return `
      <p class="grammar-intro">Lebanese culture has a rich tradition of proverbs (أمثال — amsal / مثل — massal). These aren\'t just old sayings — Lebanese people drop proverbs naturally in daily conversation. Knowing even five or six will earn you genuine delight from native speakers.</p>
      ${gs('How to use proverbs')}
      <div style="background:var(--card);border-radius:10px;padding:12px 14px;margin-bottom:14px;border-left:3px solid var(--accent2)">
        <div style="font-size:0.82rem;line-height:1.6">
          Lebanese people introduce proverbs with: <span style="color:var(--accent2);font-weight:700">"بيحكوا..." (bi7ku)</span> = they say... or just state them directly.<br>
          The best moment to use one: when someone complains, when giving advice, or when accepting a situation gracefully.<br>
          Saying a proverb at the right time is called <span style="color:var(--accent2);font-weight:700">ضرب المثل (darb el-masal)</span> — striking the example.
        </div>
      </div>
      ${gs('20 Essential Lebanese Proverbs')}
      <div style="display:grid;gap:10px;margin-bottom:14px">
        ${provs.map((p, i) => `<div style="background:var(--card);border-radius:12px;padding:14px 16px;border-left:3px solid ${tagColors[p.tags] || 'var(--accent2)'}">
          <div style="display:flex;align-items:flex-start;gap:10px">
            <div style="min-width:24px;height:24px;background:var(--card2);border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:0.7rem;font-weight:700;color:var(--muted)">${i+1}</div>
            <div style="flex:1">
              <div style="direction:rtl;font-family:'Segoe UI','Noto Naskh Arabic',serif;font-size:1.05rem;font-weight:700;color:var(--accent2);margin-bottom:2px">${p.ar}</div>
              <div style="font-size:0.78rem;color:var(--green);font-style:italic;margin-bottom:3px">${p.tr}</div>
              <div style="font-size:0.82rem;font-weight:600;margin-bottom:4px">${p.en}</div>
              <div style="font-size:0.74rem;color:var(--muted);line-height:1.4">${p.when}</div>
            </div>
          </div>
        </div>`).join('')}
      </div>
      ${gn('Pro tip: The proverb "الصبر مفتاح الفرج" (patience is the key to relief) is the most universally understood Lebanese proverb. If you say it when someone is stressed, you\'ll get an immediate warm reaction. Start with the short ones: "الصبر جميل" (2 words!), "الحق مر" (3 words!) — maximum impact, minimum memory load.')}
    `; }
  },
  {
    id: 'register', title: 'Formal vs. Colloquial Register', icon: '🎭',
    render() { return `
      <p class="grammar-intro">Lebanese Arabic exists on a spectrum from very colloquial street speech to near-MSA formal Arabic (used in news, official documents, literature). Knowing which register to use when is key to sounding natural.</p>
      <table class="gtable">
        <tr><th>Context</th><th>Register</th><th>Example</th></tr>
        <tr><td>Friends, family</td><td style="color:var(--easy)">Colloquial</td><td class="t-note">shu biddak? / yalla! / khalas</td></tr>
        <tr><td>Shops, taxi, restaurants</td><td style="color:var(--easy)">Colloquial</td><td class="t-note">addeish? / 3atini / min fadlak</td></tr>
        <tr><td>Work meetings</td><td style="color:var(--blue)">Mixed</td><td class="t-note">colloquial + some MSA vocabulary</td></tr>
        <tr><td>TV news</td><td style="color:var(--hard)">MSA</td><td class="t-note">full MSA — different from spoken Lebanese</td></tr>
        <tr><td>Academic writing</td><td style="color:var(--hard)">MSA</td><td class="t-note">never use Lebanese dialect in writing</td></tr>
        <tr><td>Religious ceremonies</td><td style="color:var(--hard)">Classical</td><td class="t-note">Quranic Arabic / liturgical language</td></tr>
      </table>
      ${gs('Same sentence — three registers')}
      <div class="gex">
        <div class="ex-ar">شو عم تعمل؟</div>
        <div class="ex-tr">shu 3am ta3mol?</div>
        <div class="ex-en">What are you doing?</div>
        <div class="ex-note">Colloquial Lebanese — what you actually say</div>
      </div>
      <div class="gex">
        <div class="ex-ar">ماذا تفعل؟</div>
        <div class="ex-tr">matha taf3al?</div>
        <div class="ex-en">What are you doing?</div>
        <div class="ex-note">MSA — sounds like a textbook, nobody talks like this</div>
      </div>
      ${gs('Code-switching with French')}
      <p class="grammar-intro">Lebanese people frequently mix French into conversations, especially in Beirut. This is normal and prestigious — don\'t be surprised.</p>
      ${ge('merci', 'mersi', 'Thank you (French loanword)', 'Very commonly used instead of or alongside shukran')}
      ${ge('بونجور', 'bonjour', 'Good morning (French)', 'Said by Christian Lebanese especially — totally normal')}
      ${ge('سيلفوبلي', 'sil vous plait', 'Please (French)', 'Heard in Beirut restaurants and shops')}
      ${ge('يعني c\'est la vie', "ya3ni c'est la vie", 'That\'s life / Such is life', 'Classic Lebanese French mix — said with a shrug')}
      ${gn('<strong>The rule:</strong> When speaking to foreigners learning Arabic, Lebanese people will often shift toward MSA vocabulary to be more "correct." If you want to learn real Lebanese, explicitly ask them: <em>"7ki ma3i bil-3ammiyye" (speak to me in dialect)</em>.')}
    `; }
  },
  {
    id: 'msa-compare', title: 'Lebanese vs MSA — Quick Reference', icon: '🔄',
    render() {
      const rows = [
        ['Pronoun','This (m/f)','هيدا / هيدي','heida/heidi','هذا / هذه'],
        ['Pronoun','What?','شو','shu','ماذا / ما'],
        ['Pronoun','How?','كيف','kif','كيف'],
        ['Pronoun','Where?','وين','wen','أين'],
        ['Pronoun','Why?','ليش','lesh','لماذا'],
        ['Pronoun','When?','إيمتى','emta','متى'],
        ['Verb','To want','بدّو','baddo','يريد'],
        ['Verb','To go','يروح','yruh','يذهب'],
        ['Verb','To come','يجي','yji','يأتي'],
        ['Verb','To see','يشوف','yshouf','يرى'],
        ['Verb','To know','يعرف','ya3rif','يعلم / يعرف'],
        ['Verb','To work','يشتغل','yishtaghil','يعمل'],
        ['Verb','To eat','ياكل','yakol','يأكل'],
        ['Verb','To say','يحكي','yhki','يقول'],
        ['Negation','Not (verb)','ما','ma','لا / لم'],
        ['Negation','Not (adj/noun)','مش','mish','ليس'],
        ['Expression','Yes','آ / أيوا','ah/aywa','نعم'],
        ['Expression','No','لأ','la2','لا'],
        ['Expression','Now','هلّق','halla2','الآن'],
        ['Expression','Later','بعدين','ba3dayn','بعد ذلك'],
        ['Expression','Tomorrow','بكرا','bukra','غداً'],
        ['Expression','Maybe','يمكن / ممكن','ymken/mumken','ربما'],
        ['Expression','Very','كتير','ktir','جداً'],
        ['Expression','A lot','كتير','ktir','كثيراً'],
        ['Expression','Done/Enough','خلص','khalas','انتهى / كفى'],
        ['Expression','Let\'s go','يلّا','yalla','هيّا / انطلق'],
        ['Noun','House','بيت','bayt','بيت / منزل'],
        ['Noun','Water','مي','may','ماء'],
        ['Noun','Eye','عين','3ayn','عين'],
        ['Noun','God willing','إن شاء الله','inshaallah','إن شاء الله'],
        ['Noun','Of course','طبعاً','tab3an','بالطبع / طبعاً'],
        ['Noun','A bit','شوي','shway','قليلاً'],
        ['Noun','Possible / Can','فيه / ممكن','fi / mumken','يمكن / ممكن'],
        ['Noun','Money','مصاري','masari','مال / نقود'],
        ['Noun','Thing','شي','shi','شيء'],
      ];
      const cats = [...new Set(rows.map(r => r[0]))];
      return `
        <p class="grammar-intro">Side-by-side comparison of Lebanese dialect vs Modern Standard Arabic (MSA). Lebanese speakers use these forms in daily life — MSA is used in news, formal writing, and pan-Arab communication.</p>
        <div style="overflow-x:auto">
        <table class="gtable" id="msa-table">
          <tr><th>Type</th><th>Meaning</th><th>Lebanese 🇱🇧</th><th>Translit.</th><th>MSA</th></tr>
          ${rows.map(r => `<tr>
            <td><span style="font-size:0.68rem;background:var(--card2);border-radius:4px;padding:1px 6px">${r[0]}</span></td>
            <td>${r[1]}</td>
            <td class="t-ar" style="color:var(--accent2)">${r[2]}</td>
            <td class="t-tr">${r[3]}</td>
            <td class="t-ar">${r[4]}</td>
          </tr>`).join('')}
        </table>
        </div>
      `;
    }
  },
  {
    id: 'culture-tips', title: 'Lebanese Culture & Social Customs', icon: '🌟',
    render() {
      const tips = [
        { icon:'🤝', title:'Greetings are sacred', body:'Never rush a greeting. A proper Lebanese hello involves asking about health, family, work — often in sequence. Skipping straight to business is rude. مرحبا alone is minimum; كيفك / كيف الأهل (how\'s the family) is standard.' },
        { icon:'☕', title:'Coffee is a social contract', body:'Accepting قهوة (ahwe) is accepting hospitality. Refusing is somewhat rude — if you don\'t want more, wobble the empty cup between your fingers (Lebanese gesture for "no more, thank you"). Arabic coffee (bitter, with cardamom) is offered at every social occasion.' },
        { icon:'🍽️', title:'Food comes in abundance', body:'Lebanese hosts will insist you eat more. كول كول (kol kol — eat eat!) is inevitable. It\'s polite to serve others before yourself and to compliment the food: الأكل كتير منيح (el-akl ktir mneh). Leaving some food shows you\'ve been satisfied.' },
        { icon:'👨‍👩‍👧‍👦', title:'Family is everything', body:'Lebanese society is deeply family-oriented. Asking about someone\'s family (كيف الأهل؟) is a standard warm-up. Extended family (عيلة — 3ile) is the primary social unit. Never insult someone\'s family — it\'s taken very personally.' },
        { icon:'🕌', title:'Religious etiquette', body:'Lebanon is roughly half Christian, half Muslim. Always be aware of your host\'s religion when discussing topics like food (pork, alcohol), fasting (Ramadan), or religion itself. إن شاء الله (inshaallah) is used by everyone regardless of religion.' },
        { icon:'💬', title:'إن شاء الله — the universal hedge', body:'"God willing" — used constantly by both Christians and Muslims. It can mean genuine hope ("hopefully"), polite non-commitment ("maybe"), or gentle refusal ("probably not"). Context and tone tell you which.' },
        { icon:'🇫🇷', title:'French is everywhere', body:'Lebanon was under French mandate (1920–1943). French loanwords fill daily speech: merci, bonjour, bonne nuit, sac (bag), fromage (cheese), restaurant, docteur. Code-switching between Arabic, French, and English mid-sentence is normal and a mark of education.' },
        { icon:'🫱', title:'Wasta — the connection economy', body:'واسطة (wasta) means using personal connections to get things done. It\'s how jobs are found, paperwork expedited, favors secured. Not quite corruption — it\'s the Lebanese social fabric. Don\'t be surprised when people ask "مين تعرف هون؟" (who do you know here?).' },
        { icon:'⏰', title:'Lebanese time', body:'Punctuality is flexible. "Coming in 5 minutes" (جاي بعد خمس دقايق) often means 20–30. Social events start late. Business meetings start roughly on time. Don\'t take lateness personally — it\'s cultural, not disrespect.' },
        { icon:'🏘️', title:'Confessionalism matters', body:'Lebanon has 18 official religious sects, and political/social life is organized around them. People often identify by sect (Maronite, Sunni, Shia, Druze, Greek Orthodox…). Asking someone\'s sect directly is sometimes sensitive; it\'s often inferred from last name or region.' },
        { icon:'🎭', title:'Humor and directness', body:'Lebanese people are famously direct, witty, and self-deprecating about their country\'s chaos. Dark humor about electricity cuts, politics, and traffic is a coping mechanism. Joining in (gently!) is appreciated. شو هالبلد (shu hal-balad — what a country!) is a universal expression.' },
        { icon:'🛍️', title:'Bargaining culture', body:'In traditional markets (الأسواق — el-aswaq) bargaining is expected. Start at 50–60% of the asking price. Say قدّيش آخر سعر؟ (addesh akher si3r? — what\'s the final price?). In fixed-price shops, bargaining is inappropriate. Souvenir shops and street vendors: always negotiate.' },
        { icon:'🏡', title:'Hospitality obligations', body:'Being invited to a Lebanese home means receiving full hospitality: food, drinks, desserts. Your host will feel insulted if you decline. Bring pastries (حلويات — 7alawiyyat) or flowers as a gift. Always compliment the home and the food.' },
        { icon:'📞', title:'Phone culture', body:'Lebanese people are extremely sociable by phone. Calling is preferred over texting for anything important. Don\'t be surprised by long phone calls, even for simple topics. WhatsApp voice messages (رسالة صوتية) are the standard for quick communication.' },
        { icon:'🚗', title:'Driving and traffic', body:'Beirut traffic is legendary chaos. Lanes are suggestions; horns are language. The right of way goes to whoever is more aggressive. عال كيفك (3al kefak — at your own pace) is the traffic philosophy. Taxi drivers often double as tour guides and social commentators.' },
      ];
      return `
        <p class="grammar-intro">Understanding Lebanese culture is as important as learning the language. These cultural notes will help you navigate social situations, avoid missteps, and connect authentically with Lebanese people.</p>
        <div style="display:grid;gap:12px">
          ${tips.map(t => `<div style="background:var(--card2);border-radius:12px;padding:14px 16px;border-left:4px solid var(--accent2)">
            <div style="display:flex;align-items:center;gap:10px;margin-bottom:6px">
              <span style="font-size:1.4rem">${t.icon}</span>
              <strong style="font-size:0.95rem">${t.title}</strong>
            </div>
            <div style="font-size:0.84rem;line-height:1.6;color:var(--text)">${t.body}</div>
          </div>`).join('')}
        </div>`;
    }
  },
  {
    id: 'conditional', title: 'Conditional Sentences (If…Then)', icon: '🔀',
    render() { return `
      <p class="grammar-intro">Conditional sentences express "if X, then Y". Lebanese uses إذا (iza) for real conditions and لو (law) for hypothetical ones.</p>
      ${gs('Real condition — إذا (iza)')}
      ${ge('إذا جيت، رح نحكي', 'iza jit, ra7 ni7ki', 'If you come, we\'ll talk', 'Likely/possible future condition')}
      ${ge('إذا عندك وقت، تعا', 'iza 3andak wa2t, ta3a', 'If you have time, come', 'General invitation')}
      ${gs('Hypothetical — لو (law)')}
      ${ge('لو كنت غني، كنت سافرت', 'law kunt ghaniyy, kunt safart', 'If I were rich, I would have traveled', 'Contrary to fact')}
      ${ge('لو بعرف، كنت حكيتلك', 'law ba3rif, kunt 7akitlak', 'If I knew, I would\'ve told you', 'Hypothetical past')}
      ${gn('Key pattern: لو + past verb in both clauses = impossible/hypothetical. إذا + any tense = real/possible condition.')}
    `; }
  },
  {
    id: 'comparatives', title: 'Comparatives & Superlatives', icon: '📊',
    render() { return `
      <p class="grammar-intro">Lebanese uses the أفعل (af3al) pattern for comparatives. Add ال to make superlatives.</p>
      ${gs('Comparative (bigger/smaller/better)')}
      ${ge('هوّ أكبر مني', 'howe akbar minni', 'He is bigger than me', 'أكبر = bigger (from كبير)')}
      ${ge('هيدا أحلى', 'hayda a7la', 'This is nicer/prettier', 'أحلى = nicer (from حلو)')}
      ${ge('بيروت أحسن من...', 'Beyrut a7san men...', 'Beirut is better than...', 'أحسن = better (from حسن)')}
      ${gs('Superlative (the biggest/best)')}
      ${ge('هوّ الأكبر', 'howe el-akbar', 'He is the biggest', 'Add ال to comparative')}
      ${ge('أحسن أكلة بلبنان', 'a7san akle bi-Libnan', 'The best dish in Lebanon', 'Superlative before noun = no ال needed')}
    `; }
  },
  {
    id: 'time_expressions', title: 'Time Expressions & Clock', icon: '🕐',
    render() { return `
      <p class="grammar-intro">Telling time and expressing when in Lebanese Arabic.</p>
      ${gs('Asking and telling time')}
      ${ge('الساعة قدّيش؟', 'es-sa3a addesh?', 'What time is it?', 'Lit. "the hour how much?"')}
      ${ge('الساعة تلاتة ونص', 'es-sa3a tlate w-noss', 'It\'s half past three', 'ونص = and a half')}
      ${ge('الساعة عشرة وربع', 'es-sa3a 3ashre w-rub3', 'It\'s quarter past ten', 'وربع = and a quarter')}
      ${ge('الساعة سبعة إلا خمس', 'es-sa3a sab3a illa khams', 'It\'s five to seven', 'إلا = minus/except')}
      ${gs('Days, relative time')}
      ${ge('اليوم / مبارح / بكرا', 'el-yom / mbareh / bukra', 'today / yesterday / tomorrow', 'Core time words')}
      ${ge('بعد بكرا / أوّل مبارح', 'ba3d bukra / awwel mbareh', 'day after tomorrow / day before yesterday', 'Extended relative time')}
    `; }
  },
  {
    id: 'slang_expressions', title: 'Lebanese Slang & Fillers', icon: '😎',
    render() {
      const fillers = [
        { ar:'يعني', tr:'ya3ni', meaning:'I mean / like / sort of / that is / so', usage:'The most-used word in Lebanese. Fills pauses, softens statements, marks thinking. "Ya3ni, mish 3arif shu a3mel" = I mean, I don\'t know what to do.' },
        { ar:'هيك', tr:'hek / heik', meaning:'Like this / this way / so', usage:'"Hek" explains manner: "3amel hek" = do it this way. Also "shu hek" = what\'s this? / why like this?' },
        { ar:'يلا', tr:'yalla', meaning:"Let's go / come on / OK / hurry / bye", usage:'Context is everything. Yalla = let\'s go (leaving), yalla (reply to OK = cool), yalla bye = see you, yalla yalla = hurry up.' },
        { ar:'خلص', tr:'khalas', meaning:"Done / finished / enough / that's it / OK", usage:'"Khalas" closes things. Khalas = it\'s over. Ma khalas = not done yet. Khalas w-khalas = and that\'s final.' },
        { ar:'بس', tr:'bas', meaning:'But / only / just / stop / enough', usage:'Multi-purpose. "Biddi bas ahwe" = I just want coffee. "Bas!" alone = enough! stop!. "Bas inno" = but the thing is...' },
        { ar:'مش هيك؟', tr:'mish hek?', meaning:'Right? / Isn\'t it? / No?', usage:'Tag question — appended to statements for confirmation. "El-akl tayyeb, mish hek?" = The food is good, right?' },
        { ar:'وكمان', tr:'w-kaman', meaning:'And also / and too / and more', usage:'"W-kaman shi teni" = and one more thing. Common connector in stories and explanations.' },
        { ar:'مع هيك', tr:'ma3 hek', meaning:'Even so / despite that / with all this', usage:'"Ma3 hek, ma rdi" = Even so, she didn\'t agree. Used to contrast expected vs actual outcome.' },
        { ar:'شو بدك', tr:'shu baddak', meaning:"What do you want / what's the matter / so what", usage:'"Shu baddak?" can be genuine (what do you need?) or dismissive (so what?). Tone makes the difference.' },
        { ar:'ولا', tr:'wla', meaning:'Not even / nothing / or (negative context)', usage:'"Ma fi wla shi" = there\'s absolutely nothing. "Wla marra" = not even once. "Wla wa7ad" = not even one person.' },
      ];
      const address = [
        { ar:'حبيبي / حبيبتي', tr:'7abibi / 7abibti', use:'m/f — my love/dear; casual between friends, family, strangers' },
        { ar:'يا معلّم', tr:'ya m3allem', use:'male only — boss/chief; warm address for drivers, vendors, waiters' },
        { ar:'عمّو / خالتو', tr:'3ammo / khalto', use:'uncle/aunt — used for strangers, shopkeepers, older people (warm respect)' },
        { ar:'أبو / أم + name', tr:'abu / umm + name', use:'Father/mother of — "Abu Ali" used as nickname by firstborn\'s father' },
        { ar:'يا زلمة', tr:'ya zalame', use:'man/dude — slightly rough but common between male friends' },
        { ar:'ستّي / سيّدي', tr:'sitti / sayyedi', use:'my lady/sir — formal or ironic depending on tone' },
      ];
      const codeswitching = [
        { ar:'مرسي كتير', tr:'mersi ktir', meaning:'Thank you very much (French merci + Arabic ktir)' },
        { ar:'No comment', tr:'no comment', meaning:'No comment — said in English; huge in Lebanese politics and gossip' },
        { ar:'C\'est la vie', tr:"c'est la vie", meaning:'"That\'s life" — said in French exactly like this, usually with a shrug' },
        { ar:'تفضّلي', tr:'tfaddali', meaning:'Please / go ahead (to a woman) — pure Arabic politeness verb' },
        { ar:'Bonsoir habibi', tr:'bonsoir 7abibi', meaning:'Good evening dear — French + Arabic, heard constantly in Beirut evenings' },
        { ar:'يعطيك الصحة', tr:'ya3tik el-se77a', meaning:'May God give you health — said to workers, shopkeepers, anyone helping you' },
      ];
      const exclamations = [
        { ar:'يي!', tr:'yii!', meaning:'Oh! / Wow! / Yikes! — female-coded surprise' },
        { ar:'والله!', tr:'wallah!', meaning:'I swear! / Wow! / Really? / By God!' },
        { ar:'آه والله', tr:'ah wallah', meaning:'Oh yeah? / Is that so? (with rising intonation = disbelief or genuine interest)' },
        { ar:'لأ بالله!', tr:'la2 billah!', meaning:'No! You\'re kidding! / No way! (emphatic disbelief)' },
        { ar:'ما شاء الله', tr:'ma sha2 allah', meaning:'God has willed it — said when admiring something; wards off evil eye' },
        { ar:'الله يسعدك', tr:'allah yus3idak', meaning:'May God make you happy — warm response to compliments or thanks' },
        { ar:'الله يخليك', tr:'allah ykhallilak', meaning:'May God keep you / please (pleading) — very common polite request' },
        { ar:'تسلم', tr:'tislam', meaning:'Thank you / bless you — reply to compliments or gifts (lit. may you be safe)' },
      ];
      return `
      <p class="grammar-intro">Sounding natural in Lebanese Arabic isn\'t just vocabulary — it\'s the rhythm of fillers, the warmth of address terms, the humor of code-switching. These expressions glue conversation together. Master them and you\'ll sound fluent far beyond your vocabulary level.</p>
      ${gs('Essential Filler Words & Discourse Markers')}
      <div style="display:grid;gap:8px;margin-bottom:14px">
        ${fillers.map(f => `<div style="background:var(--card);border-radius:10px;padding:10px 14px">
          <div style="display:flex;align-items:baseline;gap:8px;margin-bottom:3px;flex-wrap:wrap">
            <span style="direction:rtl;font-family:'Segoe UI','Noto Naskh Arabic',serif;font-size:1.1rem;font-weight:700;color:var(--accent2)">${f.ar}</span>
            <span style="font-size:0.8rem;color:var(--green);font-style:italic">${f.tr}</span>
            <span style="font-size:0.8rem;font-weight:600">${f.meaning}</span>
          </div>
          <div style="font-size:0.76rem;color:var(--muted);line-height:1.4">${f.usage}</div>
        </div>`).join('')}
      </div>
      ${gs('Address Terms — Who Are You Talking To?')}
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:6px;margin-bottom:14px">
        ${address.map(a => `<div style="background:var(--card);border-radius:8px;padding:8px 12px">
          <div style="direction:rtl;font-family:'Segoe UI','Noto Naskh Arabic',serif;font-size:0.95rem;font-weight:700;color:var(--accent2)">${a.ar}</div>
          <div style="font-size:0.72rem;color:var(--green);font-style:italic;margin:1px 0">${a.tr}</div>
          <div style="font-size:0.72rem;color:var(--muted)">${a.use}</div>
        </div>`).join('')}
      </div>
      ${gs('Exclamations & Reactions')}
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:6px;margin-bottom:14px">
        ${exclamations.map(e => `<div style="background:var(--card);border-radius:8px;padding:8px 12px">
          <div style="direction:rtl;font-family:'Segoe UI','Noto Naskh Arabic',serif;font-size:0.95rem;font-weight:700;color:var(--accent)">${e.ar}</div>
          <div style="font-size:0.72rem;color:var(--green);font-style:italic;margin:1px 0">${e.tr}</div>
          <div style="font-size:0.72rem;color:var(--muted)">${e.meaning}</div>
        </div>`).join('')}
      </div>
      ${gs('Code-Switching — Arabic × French × English')}
      <div style="display:grid;gap:6px;margin-bottom:12px">
        ${codeswitching.map(c => `<div style="background:var(--card);border-radius:8px;padding:8px 12px;display:flex;align-items:flex-start;gap:10px">
          <div style="min-width:140px;direction:rtl;font-family:'Segoe UI','Noto Naskh Arabic',serif;font-size:0.88rem;font-weight:700;color:var(--accent2)">${c.ar}</div>
          <div style="font-size:0.76rem;color:var(--muted)">${c.meaning}</div>
        </div>`).join('')}
      </div>
      ${gn('The secret: Lebanese conversation speed + filler density = fluency signal. Dropping يعني (ya3ni) every few sentences, ending with مش هيك؟ (mish hek?), and switching to French for politeness words will make Lebanese people genuinely surprised by how natural you sound.')}
    `; }
  },
  {
    id: 'verb-patterns', title: 'Arabic Verb Patterns (Awzaan)', icon: '🔧',
    render() { return `
      <p class="grammar-intro">Arabic verbs follow patterns (أوزان). Knowing these unlocks the meaning of hundreds of new words automatically.</p>
      ${gs('Form I — base verb (فَعَل)')}
      ${ge('كتب / درس / أكل', 'katab / daras / akal', 'wrote / studied / ate', 'Root action, simple meaning')}
      ${gs('Form II — intensive/causative (فَعَّل)')}
      ${ge('درَّس', 'darras', 'taught (caused to study)', 'Double middle letter = causative of درس')}
      ${ge('كسَّر', 'kassar', 'smashed/broke repeatedly', 'Intensified action')}
      ${gs('Form V — reflexive of II (تفعَّل)')}
      ${ge('تعلّم', 'ta3allam', 'learned (reflexive of عَلَّم)', 'Learning happens to the subject')}
      ${gs('Form VI — reciprocal (تفاعل)')}
      ${ge('تفاهموا مع بعض', 'tfehamo ma3 ba3d', 'they understood each other', 'Mutual action between parties')}
      ${gn('Tip: When you see تـ prefix on a verb in Lebanese, think reflexive or reciprocal. This pattern is extremely common.')}
    `; }
  },
  {
    id: 'body-language', title: 'Lebanese Body Language & Social Cues', icon: '🤝',
    render() {
      const gestures = [
        { gesture:'Head tilt back + click', meaning:'"No" (la2)', detail:'A single sharp upward tilt of the chin with a tongue-click = no. Used more than verbal "la2" in many contexts. Don\'t confuse with a nod!' },
        { gesture:'Hand toward chest, head bow', meaning:'"Thank you / honored"', detail:'Placing your hand over your heart and dipping your head = heartfelt thanks or "you honor me." Extremely common in formal or emotional moments.' },
        { gesture:'Fingers pinched together, hand raised', meaning:'"Wait / hold on / be careful"', detail:'The "Italian hand" — all fingers touching tip upward. In Lebanese = "wait a moment" or "what are you doing?" Very expressive.' },
        { gesture:'Waving hand downward', meaning:'"Go away / never mind / don\'t worry"', detail:'A slow downward wave = dismissal, "it doesn\'t matter," or "stop." Similar to the English "whatever" but more polite.' },
        { gesture:'Right hand on left palm (slap)', meaning:'"I swear / I\'m serious"', detail:'Slapping the back of your right hand into your left palm = emphasis, "I swear to God," or punctuating a point emphatically.' },
        { gesture:'Thumb and index circle, other fingers raised', meaning:'"Perfect / excellent"', detail:'Like "OK" in English but means excellent/perfect. Very common in Lebanon for appreciating food, music, or a job well done.' },
        { gesture:'Pointing with full hand (not finger)', meaning:'Indicating direction/person', detail:'Lebanese people often point with the whole hand or chin rather than a single index finger, which can feel rude.' },
        { gesture:'Loud kiss sound greeting', meaning:'Warmth / close friendship', detail:'Lebanese greet close friends/family with cheek kisses (3 in Lebanon: right, left, right). The sound alone can mean "I love you" between family.' },
      ];
      const social = [
        { rule:'Hospitality is non-negotiable', note:'"تفضّل" (itfaddal) = please come in/eat/sit. Refusing food at a Lebanese home is a major social misstep. Accept at least symbolically.' },
        { rule:'Compliment → "Inshallah"', note:'If you admire something (someone\'s child, car, house), add "إن شاء الله" — protects from the evil eye (3ayn). Hosts may say "ما شاء الله" when you compliment.' },
        { rule:'Direct eye contact = respect', note:'Unlike some cultures, maintaining eye contact in Lebanon signals honesty and engagement. Looking away can seem evasive.' },
        { rule:'"3ala 3aini" = absolute yes', note:'"على عيني" (on my eye) = absolutely, I\'d be honored to. The strongest possible agreement or acceptance of a request.' },
        { rule:'Volume = passion, not anger', note:'Lebanese conversations are loud. People talking over each other, gesticulating, raising voices = normal engaged conversation. Don\'t mistake energy for conflict.' },
        { rule:'Privacy is flexible', note:'Asking about age, salary, marriage status, and weight is common and not considered rude by many Lebanese. It\'s curiosity, not intrusion.' },
      ];
      return `
      <p class="grammar-intro">Mastering Lebanese Arabic means understanding the physical language that accompanies words. Gestures and social rules carry as much meaning as vocabulary — get these right and you\'ll connect on a much deeper level.</p>
      ${gs('Essential Gestures')}
      <div style="display:grid;gap:8px;margin-bottom:14px">
        ${gestures.map(g => `<div style="background:var(--card);border-radius:10px;padding:12px 14px;display:flex;gap:12px;align-items:flex-start">
          <div style="min-width:36px;height:36px;background:var(--accent2)22;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:1.2rem">🤲</div>
          <div>
            <div style="font-weight:700;font-size:0.9rem;margin-bottom:2px">${g.gesture} → <span style="color:var(--accent2)">${g.meaning}</span></div>
            <div style="font-size:0.78rem;color:var(--muted);line-height:1.4">${g.detail}</div>
          </div>
        </div>`).join('')}
      </div>
      ${gs('Social Rules & Unwritten Codes')}
      <div style="display:grid;gap:8px;margin-bottom:12px">
        ${social.map(s => `<div style="background:var(--card);border-radius:10px;padding:12px 14px;border-left:3px solid var(--blue)">
          <div style="font-weight:700;font-size:0.88rem;margin-bottom:3px">${s.rule}</div>
          <div style="font-size:0.78rem;color:var(--muted);line-height:1.4">${s.note}</div>
        </div>`).join('')}
      </div>
      ${gs('Key Social Phrases with Body Context')}
      ${ge('تفضّل / تفضّلي', 'itfaddal / itfaddali', 'Please (enter/eat/sit) — said while gesturing inward', 'Accompanies an open-handed welcoming gesture — you\'re being welcomed')}
      ${ge('على عيني وراسي', '3ala 3ayni w-rasi', 'On my eye and head (absolute agreement)', 'Said while hand goes to eye then forehead — ultimate respect')}
      ${ge('الله لا يحرمنا', 'allah la y7rimna', 'May God not deprive us (of your company)', 'Said when a guest says they must leave — deeply warm hospitality phrase')}
      ${ge('يعطيك العافية', 'ya3tik el-3afiye', 'May God give you health (said to someone working)', 'Said to a worker, chef, cashier — acknowledges their effort. Reply: "الله يعافيك"')}
      ${gn('Observation tip: Watch how Lebanese people use their hands when they speak — it\'s not optional, it\'s part of the language. Try shadowing not just the words but the gestures when watching Lebanese TV or YouTube.')}
    `;}
  },
  {
    id: 'lebanese-geography', title: 'Lebanon — Regions, Cities & Culture', icon: '🗺️',
    render() {
      const regions = [
        { name:'🏙️ Beirut', ar:'بيروت', desc:'The capital and cultural heart. West Beirut is historically Muslim, East Beirut (Ashrafiyeh) historically Christian — but both are now cosmopolitan and mixed. The Corniche, Downtown (Solidere), Hamra, Gemmayzeh, and Mar Mikhael are the key neighbourhoods to know.' },
        { name:'🌿 Mount Lebanon (جبل لبنان)', ar:'جبل لبنان', desc:'The mountainous backbone of Lebanon. Home to Druze, Maronite, and other communities. Key towns: Jounieh, Byblos (Jbeil), Batroun. The Qadisha Valley is a UNESCO Sacred Valley. Ski resorts: Faraya, Mzaar, Cedars.' },
        { name:'🌾 The Bekaa (البقاع)', ar:'البقاع', desc:'Lebanon\'s agricultural heartland — wide fertile valley east of Mount Lebanon. Baalbek has Roman temples (UNESCO). Zahle is famous for arak and Bekaa wine. The Bekaa produces most of Lebanon\'s wine, Cannabis, and vegetables.' },
        { name:'🌊 The North (الشمال)', ar:'الشمال', desc:'Tripoli (Trablos) is Lebanon\'s second city — known for sweets (knafeh!), the old souk, and the citadel. The North has a strong Sunni identity. The coastal road from Beirut passes Byblos (Jbeil) — one of the oldest continuously inhabited cities on earth.' },
        { name:'🕊️ The South (الجنوب)', ar:'الجنوب', desc:'Sidon (Sayda) and Tyre (Sour) are the main cities. Sidon has a well-preserved old city and sea castle. Tyre is a UNESCO site with spectacular Roman ruins. The South has a predominantly Shia population and is Hezbollah\'s heartland.' },
      ];
      const dialect = [
        { region:'Beirut', note:'Most prestigious dialect — what you\'re learning. Urban, fast, mixed Christian/Muslim influences.' },
        { region:'Tripoli / North', note:'Slightly different vowels, more conservative pronunciation. الله is said more often in daily speech.' },
        { region:'Bekaa', note:'Heavier accent, slower delivery, more rural vocabulary. قاف (q) sometimes preserved as q.' },
        { region:'South', note:'Similar to Beirut but with some distinct Shia religious expressions and different intonation.' },
        { region:'Mountain (Druze)', note:'Some archaic words preserved. A Druze accent is distinct but mutually intelligible.' },
      ];
      return `
      <p class="grammar-intro">Understanding Lebanon's geography and its regional associations makes you a much more culturally informed speaker. Lebanese people strongly identify with their region (منطقة — minta2a) and village (ضيعة — day3a).</p>
      ${gs('The Five Regions')}
      <div style="display:grid;gap:10px;margin-bottom:14px">
        ${regions.map(r => `<div style="background:var(--card);border-radius:10px;padding:12px 14px;border-left:3px solid var(--accent2)">
          <div style="font-weight:700;margin-bottom:2px">${r.name} <span style="direction:rtl;font-family:'Segoe UI','Noto Naskh Arabic',serif;font-size:0.9rem;color:var(--accent2)">${r.ar}</span></div>
          <div style="font-size:0.82rem;color:var(--muted);line-height:1.5">${r.desc}</div>
        </div>`).join('')}
      </div>
      ${gs('Regional Dialect Differences')}
      <div style="overflow-x:auto;margin-bottom:12px"><table style="width:100%;border-collapse:collapse;font-size:0.82rem">
        <thead><tr style="background:var(--card2)">
          <th style="padding:8px 10px;text-align:left;border-bottom:1px solid var(--border)">Region</th>
          <th style="padding:8px 10px;text-align:left;border-bottom:1px solid var(--border)">Dialect note</th>
        </tr></thead>
        <tbody>
          ${dialect.map(d => `<tr>
            <td style="padding:7px 10px;border-bottom:1px solid var(--border)44;font-weight:600;white-space:nowrap">${d.region}</td>
            <td style="padding:7px 10px;border-bottom:1px solid var(--border)44">${d.note}</td>
          </tr>`).join('')}
        </tbody>
      </table></div>
      ${gs('Key Phrases About Location')}
      ${ge('من وين إنت/إنتي؟', 'men wayn inta/inti?', 'Where are you from?', 'The most common personal question in Lebanon — always asked early')}
      ${ge('أنا من بيروت / من الجبل / من الجنوب', 'ana men Bayrut / men el-jabal / men el-jnoub', 'I\'m from Beirut / from the mountains / from the South', 'Standard ways to identify your region')}
      ${ge('أنا من ضيعة عالجبل', 'ana men day3a 3al-jabal', 'I\'m from a village in the mountains', 'Lebanese identity is often tied to a specific ancestral village')}
      ${ge('شو منطقتك؟', 'shu minta2tak?', 'What region are you from?', 'Asking about someone\'s area — slightly more specific than "where are you from"')}
      ${ge('روح دغري ولمّا توصل الروشة دير يسار', 'ruh doghri w-lamma tosal el-Rawshe dir ysar', 'Go straight and when you reach Raouche, turn left', 'Typical Beirut direction using a landmark')}
      ${gn('Cultural note: Lebanese people are often asked "من أيّ طائفة؟" (men ayy ta2ife? — from what religious community?) — this is a sensitive but common social question rooted in Lebanon\'s confessional system. Your region often signals your community. Approach this topic with curiosity rather than judgment.')}
    `;}
  },
  {
    id: 'dialect-comparison', title: 'Lebanese vs. Other Arabic Dialects', icon: '🌍',
    render() { return `
      <p class="grammar-intro">If you already know Egyptian or Gulf Arabic, or meet speakers of other dialects, this section helps you navigate the differences. Lebanese is often mutually intelligible with Syrian Arabic but differs significantly from Egyptian, Gulf, and Moroccan.</p>
      ${gs('Question Words — Major Differences')}
      <div style="overflow-x:auto;margin-bottom:10px"><table style="width:100%;border-collapse:collapse;font-size:0.82rem">
        <thead><tr style="background:var(--card2)">
          <th style="padding:8px 10px;text-align:left;border-bottom:1px solid var(--border)">Meaning</th>
          <th style="padding:8px 10px;text-align:left;border-bottom:1px solid var(--border)">🇱🇧 Lebanese</th>
          <th style="padding:8px 10px;text-align:left;border-bottom:1px solid var(--border)">🇪🇬 Egyptian</th>
          <th style="padding:8px 10px;text-align:left;border-bottom:1px solid var(--border)">🇸🇦 Gulf</th>
        </tr></thead>
        <tbody>
          ${[
            ['What?','شو (shu)','إيه (eh)','إيش (esh)'],
            ['Where?','وين (wayn)','فين (fayn)','وين (wayn)'],
            ['How much?','قديش (addeish)','بكام (b-kam)','بكم (b-kam)'],
            ['Why?','ليش (lesh)','ليه (leh)','ليش (lesh)'],
            ['How?','كيف (kif)','إزّيّ (izzay)','كيف (kif)'],
            ['Who?','مين (min)','مين (min)','مين (min)'],
          ].map(([m,lb,eg,gf]) =>
            `<tr><td style="padding:7px 10px;border-bottom:1px solid var(--border)44;font-weight:600">${m}</td>
            <td style="padding:7px 10px;border-bottom:1px solid var(--border)44;color:var(--accent2)">${lb}</td>
            <td style="padding:7px 10px;border-bottom:1px solid var(--border)44">${eg}</td>
            <td style="padding:7px 10px;border-bottom:1px solid var(--border)44">${gf}</td></tr>`
          ).join('')}
        </tbody>
      </table></div>
      ${gs('Verb Conjugation — Present Tense Prefixes')}
      <div style="overflow-x:auto;margin-bottom:10px"><table style="width:100%;border-collapse:collapse;font-size:0.82rem">
        <thead><tr style="background:var(--card2)">
          <th style="padding:8px 10px;text-align:left;border-bottom:1px solid var(--border)">Person</th>
          <th style="padding:8px 10px;text-align:left;border-bottom:1px solid var(--border)">🇱🇧 Lebanese</th>
          <th style="padding:8px 10px;text-align:left;border-bottom:1px solid var(--border)">🇪🇬 Egyptian</th>
          <th style="padding:8px 10px;text-align:left;border-bottom:1px solid var(--border)">MSA</th>
        </tr></thead>
        <tbody>
          ${[
            ['I (go)','بروح (bruh)','باروح (baruh)','أذهب'],
            ['You (m)','بتروح (btruh)','بتروح (btruh)','تذهب'],
            ['He','بيروح (byiruh)','بيروح (byiruh)','يذهب'],
            ['She','بتروح (btruh)','بتروح (btruh)','تذهب'],
            ['We','منروح (mnruh)','بنروح (bnruh)','نذهب'],
            ['They','بيروحوا (byiru7u)','بيروحوا (byiru7u)','يذهبون'],
          ].map(([p,lb,eg,msa]) =>
            `<tr><td style="padding:7px 10px;border-bottom:1px solid var(--border)44;font-weight:600">${p}</td>
            <td style="padding:7px 10px;border-bottom:1px solid var(--border)44;color:var(--accent2)">${lb}</td>
            <td style="padding:7px 10px;border-bottom:1px solid var(--border)44">${eg}</td>
            <td style="padding:7px 10px;border-bottom:1px solid var(--border)44">${msa}</td></tr>`
          ).join('')}
        </tbody>
      </table></div>
      ${gs('Key Vocabulary Differences')}
      <div style="overflow-x:auto;margin-bottom:10px"><table style="width:100%;border-collapse:collapse;font-size:0.82rem">
        <thead><tr style="background:var(--card2)">
          <th style="padding:8px 10px;text-align:left;border-bottom:1px solid var(--border)">Meaning</th>
          <th style="padding:8px 10px;text-align:left;border-bottom:1px solid var(--border)">🇱🇧 Lebanese</th>
          <th style="padding:8px 10px;text-align:left;border-bottom:1px solid var(--border)">🇪🇬 Egyptian</th>
          <th style="padding:8px 10px;text-align:left;border-bottom:1px solid var(--border)">🇸🇦 Gulf</th>
        </tr></thead>
        <tbody>
          ${[
            ['I want','بدّي (biddi)','عايز (3ayez)','أبي (abi)'],
            ['Now','هلق (halla2)','دلوقتي (dilwa2ti)','الحين (el-7in)'],
            ['Like this','هيك (hayk)','كده (keda)','جذي (chidhi)'],
            ['A lot','كتير (ktir)','أوي (awi)','واجد (wajid)'],
            ['Go!','يلا (yalla)','امشي (emshi)','روح (ruh)'],
            ['Bread','خبز (khubz)','عيش (3aysh)','خبز (khubz)'],
            ['House','بيت (bayt)','بيت (bayt)','بيت (bayt)'],
            ['Car','سيارة (sayyara)','عربية (3arabiyya)','سيارة (sayyara)'],
          ].map(([m,lb,eg,gf]) =>
            `<tr><td style="padding:7px 10px;border-bottom:1px solid var(--border)44;font-weight:600">${m}</td>
            <td style="padding:7px 10px;border-bottom:1px solid var(--border)44;color:var(--accent2)">${lb}</td>
            <td style="padding:7px 10px;border-bottom:1px solid var(--border)44">${eg}</td>
            <td style="padding:7px 10px;border-bottom:1px solid var(--border)44">${gf}</td></tr>`
          ).join('')}
        </tbody>
      </table></div>
      ${gs('Unique Lebanese Sounds')}
      ${ge('قاف → أ or 2', '2alb not qalb', 'heart', 'Lebanese drops ق → glottal stop (أ). Cairo also does this — key shared feature.')}
      ${ge('جيم → j (not g)', 'jamil not gamil', 'beautiful', 'Lebanese/Syrian keep ج as j. Egyptian says g — "gamiil". Gulf varies by region.')}
      ${ge('ث → t or s', 'tlate not thalathe', 'three', 'Lebanese merges ث with ت (tlate). Egyptian: talata. Gulf: thalatha (kept).')}
      ${gn('Comprehension tip: Lebanese and Syrian are the most mutually intelligible pair. With Egyptians, the TV dialect exposure helps both sides. Gulf Arabic can be harder to follow for beginners due to more distinct vowel patterns.')}
    `; }
  },
  {
    id: 'sentence-patterns', title: 'Core Lebanese Sentence Patterns', icon: '🗣️',
    render() { return `
      <p class="grammar-intro">Lebanese Arabic has consistent sentence patterns. Master these frames and slot in new vocabulary to speak fluently.</p>
      ${gs('Pattern 1 — Simple Statement: Subject + Verb')}
      ${ge('أنا بحب القهوة.', 'ana b7ibb el-ahwe.', 'I love coffee.', 'Present tense: b- prefix on verb')}
      ${ge('هو بيشتغل بالمكتب.', 'huwwe byishtaghel bil-maktab.', 'He works at the office.', 'Masculine 3rd person: بيـ prefix')}
      ${ge('هي بتحكي عربي كتير.', 'hiyye bit7ki 3arabi ktir.', 'She speaks a lot of Arabic.', 'Feminine 3rd person: بتـ prefix')}
      ${gs('Pattern 2 — Negation: مش / ما + Verb')}
      ${ge('أنا مش جوعان.', 'ana mish jaw3an.', "I'm not hungry.", 'مش negates nouns/adjectives')}
      ${ge('ما عرفت شو يعمل.', 'ma 3rifet shu y3mel.', "I didn't know what to do.", 'ما negates past tense verbs')}
      ${ge('ما بدي روح.', 'ma baddi ruh.', "I don't want to go.", 'ما بدّي = I don\'t want')}
      ${gs('Pattern 3 — Question with شو / مين / وين / كيف / قديش')}
      ${ge('شو بدك؟', 'shu baddak?', 'What do you want?', 'شو = what (Lebanese)')}
      ${ge('مين هاد؟', 'min hayde?', 'Who is that?', 'مين = who')}
      ${ge('وين رايح؟', 'wayn rayeh?', 'Where are you going?', 'وين = where (Lebanese, not أين)')}
      ${ge('قديش بيكلف هاد؟', 'addeish bikallef hayda?', 'How much does this cost?', 'قديش = how much (Lebanese)')}
      ${gs('Pattern 4 — Possession with عند / عندي')}
      ${ge('عندي سيارة جديدة.', '3andi sayyara jdide.', 'I have a new car.', 'عندي = I have (literally "at me")')}
      ${ge('عندو تلات أولاد.', '3ando tlat awlad.', 'He has three children.', 'عندو = he has')}
      ${ge('ما عندي وقت هلق.', 'ma 3andi wa2et halla2.', "I don't have time right now.", 'Negated with ما')}
      ${gs('Pattern 5 — Intention with رح / بدّي')}
      ${ge('رح روح عالسوق.', 'rah ruh 3al-sou2.', "I'm going to go to the market.", 'رح = will/going to (future)')}
      ${ge('بدّي آكل شي.', 'baddi ekol shi.', 'I want to eat something.', 'بدّي = I want (uniquely Lebanese)')}
      ${ge('كان بدّو يجي بس ما قدر.', 'ken baddo yiji bas ma e2dar.', 'He wanted to come but couldn\'t.', 'بدّو in past = he wanted to')}
      ${gs('Pattern 6 — Existential في / ما في')}
      ${ge('في ناس كتير بالبيت.', 'fi nes ktir bil-bayt.', 'There are many people at home.', 'في = there is/are (Lebanese)')}
      ${ge('ما في مشكلة.', 'ma fi mushkile.', "There's no problem.", 'ما في = there isn\'t/aren\'t')}
      ${ge('في شي تاني؟', 'fi shi teni?', 'Is there anything else?', 'Question form: في at start')}
      ${gn('Memory tip: Lebanese Arabic drops the formal قد، إنّ، لكنّ in favour of shorter words: بس (but), هيك (like this), يعني (I mean/so). Pepper these into any sentence pattern for instant naturalness.')}
    `; }
  },
  {
    id: 'lebanese-music', title: 'Lebanese Music — Fairuz, Lyrics & Culture', icon: '🎵',
    render() {
      const artists = [
        { name:'فيروز (Fairuz)', era:'1950s–present', note:'The most beloved Arabic singer of all time — her voice is synonymous with Lebanon itself. Her songs are played every morning across the Arab world. Learning Fairuz lyrics is the deepest way to absorb Lebanese Arabic poetry.' },
        { name:'مارسيل خليفة (Marcel Khalife)', era:'1970s–present', note:'Oud virtuoso and political poet-musician. His settings of Mahmoud Darwish\'s poetry ("أنا يوسف يا أبي" / "Rita w-el-Bunduqiyye") are classics of Arabic musical literature. Beloved in Lebanon for his leftist, humanist stance.' },
        { name:'ماجدة الرومي (Majida El Roumi)', era:'1980s–present', note:'Lebanese soprano with operatic range. Her song "يا بيروت" (Ya Beirut) is the city\'s unofficial anthem — essential listening for any Lebanon learner.' },
        { name:'مشروع ليلى (Mashrou\' Leila)', era:'2008–2022', note:'Indie-rock band from AUB — Arabic and English lyrics, politically engaged. Famous for "شم الياسمين" (Shem el-Yasmine). Broke new ground for LGBTQ+ themes in Arab music.' },
        { name:'نانسي عجرم (Nancy Ajram)', era:'2000s–present', note:'Lebanon\'s pop princess — massive in the Gulf and Arab world. Songs like "أه ونص" (Ah w-Nus) and "يا طبطب ودلع" are famous. Great for learning colloquial Arabic phrasing.' },
        { name:'راغب علامة (Ragheb Alama)', era:'1986–present', note:'Lebanese pop star known for romantic ballads. "حبينا" (Habeena) is a classic. His style blends Lebanese folk with modern pop.' },
      ];
      const phrases = [
        { ar:'يا بيروت', tr:'ya bayrut', en:'"O Beirut" — title of Majida El Roumi\'s iconic song; an address to the city as a beloved person', song:'يا بيروت — ماجدة الرومي' },
        { ar:'بحبك يا لبنان', tr:'b7ibbak ya Lubnan', en:'"I love you, O Lebanon" — the opening line of Fairuz\'s most famous patriotic song', song:'بحبك يا لبنان — فيروز' },
        { ar:'لمين بقول حبيبي رحل', tr:'la-min b2ul 7abibi ra7al', en:'"To whom shall I say: my love has gone" — opening of a Fairuz classic', song:'من أرشيف فيروز' },
        { ar:'زوروني كل سنة مرة', tr:'zruni kull sane marra', en:'"Visit me once a year" — a Fairuz song about longing and rare visits; famous Lebanese expression of irony about those who never come', song:'فيروز' },
        { ar:'سنة حلوة يا جميل', tr:'sene helwe ya jamil', en:'"Happy Birthday (lit: a sweet year, O beautiful one)" — the Arabic Happy Birthday song (sung to the Happy Birthday tune), popularized by Lebanese singer Sabah', song:'سنة حلوة يا جميل — صباح' },
        { ar:'شم الياسمين', tr:'shem el-yasmine', en:'"Smell the jasmine" — Mashrou\' Leila\'s most famous song; jasmine is a beloved Levantine flower (Lebanon\'s emblem is the cedar)', song:'مشروع ليلى' },
      ];
      const vocab = [
        { ar:'أغنية', tr:'oghniyye', en:'Song' },
        { ar:'موسيقى', tr:'musika', en:'Music' },
        { ar:'عود', tr:'3oud', en:'Oud (lute)' },
        { ar:'مطرب / مطربة', tr:'motrib / motriba', en:'Singer (m/f)' },
        { ar:'كلمات', tr:'kallemet', en:'Lyrics / words' },
        { ar:'لحن', tr:'la7an', en:'Melody / tune' },
        { ar:'دبكة', tr:'dabke', en:'Lebanese folk circle dance' },
        { ar:'ميجنا', tr:'meijana', en:'Traditional improvised Lebanese folk song style' },
        { ar:'تخت', tr:'takht', en:'Traditional Arabic ensemble (oud, qanun, violin, percussion)' },
        { ar:'مهرجان', tr:'mahrajane', en:'Festival' },
      ];
      return `
      <p class="grammar-intro">Music is one of the fastest paths into Lebanese Arabic. Fairuz's voice has shaped how millions of Arabs hear their language — her lyrics are poetry, her phrases are proverbs. Understanding Lebanese music unlocks culture, emotion, and idiom simultaneously.</p>
      ${gs('Key Lebanese Artists')}
      <div style="display:grid;gap:8px;margin-bottom:14px">
        ${artists.map(a => `<div style="background:var(--card);border-radius:10px;padding:12px 14px;border-left:3px solid var(--accent)">
          <div style="font-weight:700;font-size:0.88rem;margin-bottom:1px">${a.name} <span style="color:var(--muted);font-size:0.78rem;font-weight:400">(${a.era})</span></div>
          <div style="font-size:0.78rem;color:var(--muted);line-height:1.4;margin-top:3px">${a.note}</div>
        </div>`).join('')}
      </div>
      ${gs('Famous Phrases from Lebanese Songs')}
      <div style="display:grid;gap:8px;margin-bottom:14px">
        ${phrases.map(p => `<div style="background:var(--card);border-radius:10px;padding:12px 14px">
          <div style="direction:rtl;font-family:'Segoe UI','Noto Naskh Arabic',serif;font-size:1.05rem;font-weight:700;color:var(--accent2);margin-bottom:2px">${p.ar}</div>
          <div style="font-size:0.82rem;color:var(--green);font-style:italic;margin-bottom:2px">${p.tr}</div>
          <div style="font-size:0.82rem;margin-bottom:3px">${p.en}</div>
          <div style="font-size:0.72rem;color:var(--muted)">♪ ${p.song}</div>
        </div>`).join('')}
      </div>
      ${gs('Music Vocabulary')}
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:6px;margin-bottom:12px">
        ${vocab.map(v => `<div style="background:var(--card);border-radius:8px;padding:8px 10px;text-align:center">
          <div style="direction:rtl;font-family:'Segoe UI','Noto Naskh Arabic',serif;font-size:1rem;font-weight:700;color:var(--accent2)">${v.ar}</div>
          <div style="font-size:0.72rem;color:var(--green);font-style:italic">${v.tr}</div>
          <div style="font-size:0.72rem;color:var(--muted)">${v.en}</div>
        </div>`).join('')}
      </div>
      ${gn('Cultural tip: Saying "بحب فيروز" (b7ibb Fairuz — I love Fairuz) is an instant connection with any Lebanese person. Fairuz transcends politics, religion, and generation — she is the one thing all Lebanese agree on. Her morning concerts on Lebanese radio are still a daily ritual.')}
    `; }
  },
  {
    id: 'lebanese-education', title: 'The Lebanese Education System', icon: '🎓',
    render() {
      const tracks = [
        { name:'French Track (Francophone)', lang:'French + Arabic', exam:'Bakalorya Faransawiyye', note:'Rooted in French colonial legacy. Students study most subjects in French. Very common in Christian schools (Maronite, Jesuit, LCU). Graduates may pursue universities in France or Francophone institutions.' },
        { name:'English Track (Anglophone)', lang:'English + Arabic', exam:'Lebanese Baccalaureate (LB)', note:'Growing in prestige. Used in schools like ACS, IC, LAU-affiliated schools. Aligns with AUB, LAU, and US university admissions. Increasingly popular among all communities.' },
        { name:'Arabic / Official Track', lang:'Arabic (all subjects)', exam:'Brevet + Bakalorya Rasmiyye', note:'The Lebanese state curriculum. Taught fully in Arabic. Used in public schools and some private Arabic-medium schools. Seen as less prestigious but accessible to more families.' },
      ];
      const unis = [
        { name:'AUB (الجامعة الأمريكية في بيروت)', short:'AUB', note:'Founded 1866 by American missionaries. Teaching in English. Lebanon\'s most prestigious university — often called "the Harvard of the Middle East". Located in Ras Beirut, overlooking the sea.' },
        { name:'LAU (الجامعة اللبنانية الأمريكية)', short:'LAU', note:'Originally the Beirut College for Women (1924). Now co-educational, teaching in English. Campuses in Beirut (Hamra) and Byblos. Strong business, engineering, and pharmacy programs.' },
        { name:'USJ (Université Saint-Joseph)', short:'USJ', note:'Jesuit-founded, 1875. Teaching in French. Major faculties: law, medicine, engineering, political science. Located in Ashrafiyeh. Very strong in Lebanese Catholic communities.' },
        { name:'LU (الجامعة اللبنانية)', short:'LU', note:'The only public/state university — الجامعة اللبنانية (el-Jame3a el-Lubnaniyye). Free/very low tuition. Multiple campuses across Lebanon. Largest student enrollment in the country.' },
        { name:'NDU (Notre Dame University)', short:'NDU', note:'Founded by Maronite Church, 1987. English-medium. Located in Zouk Mosbeh, North Metn. Strong in arts, communications, and business.' },
      ];
      const phrases = [
        { ar:'عم بحضّر للبريفيه', tr:'3am b7addar lal-breve', en:'I\'m studying for the brevet', note:'Grade 9 national exam' },
        { ar:'رسبت بالامتحان', tr:'rasabt bil-imti7an', en:'I failed the exam', note:'From رسب — to fail/sink. Very feared in Lebanese education culture.' },
        { ar:'نجح بالبكالوريا', tr:'nja7 bil-bakalorya', en:'He passed the baccalaureate', note:'نجح = to succeed/pass. A major family celebration event.' },
        { ar:'عم بدرس بالـ AUB', tr:'3am bidros bil-AUB', en:'I\'m studying at AUB', note:'Prestige marker — AUB acceptance is a source of family pride' },
        { ar:'الرسوم الجامعية غالية كتير', tr:'el-rusum el-jame3iyye ghalye ktir', en:'University fees are very expensive', note:'A constant source of financial stress for Lebanese families' },
        { ar:'أستاذتي من أحسن المدرّسين', tr:'ustazti men ahsan el-mudarrisin', en:'My teacher is one of the best teachers', note:'أستاذة (f) — ustaze is used honorifically beyond teaching' },
      ];
      return `
      <p class="grammar-intro">Lebanon has one of the highest literacy rates in the Arab world, yet one of its most fragmented education systems — split across language tracks, religious communities, and public vs. private schools. Understanding this context is essential for real conversations about Lebanese life.</p>
      ${gs('The Three Language Tracks')}
      <div style="display:grid;gap:10px;margin-bottom:14px">
        ${tracks.map(t => `<div style="background:var(--card);border-radius:10px;padding:12px 14px;border-left:3px solid var(--accent2)">
          <div style="font-weight:700;font-size:0.88rem;margin-bottom:2px">${t.name}</div>
          <div style="font-size:0.78rem;color:var(--blue);margin-bottom:3px">Language of instruction: ${t.lang} · Exam: ${t.exam}</div>
          <div style="font-size:0.78rem;color:var(--muted);line-height:1.4">${t.note}</div>
        </div>`).join('')}
      </div>
      ${gs('Key Universities')}
      <div style="display:grid;gap:8px;margin-bottom:14px">
        ${unis.map(u => `<div style="background:var(--card);border-radius:10px;padding:10px 14px;border-left:3px solid var(--green)">
          <div style="font-weight:700;font-size:0.85rem;margin-bottom:1px">${u.short} — ${u.name}</div>
          <div style="font-size:0.76rem;color:var(--muted);line-height:1.4">${u.note}</div>
        </div>`).join('')}
      </div>
      ${gs('Education Phrases')}
      ${phrases.map(p => `<div style="background:var(--card);border-radius:10px;padding:10px 14px;margin-bottom:6px">
        <div style="direction:rtl;font-family:'Segoe UI','Noto Naskh Arabic',serif;font-size:1rem;font-weight:700;color:var(--accent2)">${p.ar}</div>
        <div style="font-size:0.8rem;color:var(--green);font-style:italic">${p.tr}</div>
        <div style="font-size:0.8rem;margin:2px 0">${p.en}</div>
        <div style="font-size:0.72rem;color:var(--muted)">${p.note}</div>
      </div>`).join('')}
      ${gn('Cultural note: In Lebanon, where you went to school and university signals your social background, community, and political leanings. Questions like "من أيّ مدرسة؟" (men ayy madrasse? — from which school?) carry enormous social weight. A Lebanese parent\'s greatest ambition is often to send their child to AUB or a French Jesuit institution.')}
    `; }
  },
  {
    id: 'weddings-celebrations', title: 'Lebanese Weddings & Celebrations', icon: '💒',
    render() {
      const traditions = [
        { name:'الزفّة (el-zaffe)', desc:'The processional — the bride and groom are escorted into the venue with drummers (tabla), bagpipers, and sometimes live Fairuz songs or Lebanese folk music. Guests clap and chant. The zaffe is the emotional peak of the wedding — it\'s not negotiable.' },
        { name:'الدبكة (el-dabke)', desc:'Lebanese folk line dance performed at weddings. Dancers lock arms at shoulders, stomp feet in coordinated rhythm. A dabke troupe (فرقة دبكة) often performs professionally, followed by guests joining. It\'s identity, joy, and community in motion.' },
        { name:'الزغاريط (el-zagharit)', desc:'High-pitched ululation trilled by women (زغرودة / zaghruude) — made by rapidly moving the tongue against the palate. Done at joyous moments: the zaffe, the first dance, cutting the cake. A sound unique to Lebanese/Levantine celebration.' },
        { name:'العزيمة (el-3azime)', desc:'The gathering / feast. Lebanese weddings are famous for their elaborate meze — hundreds of dishes, arak, wine, dancing. Minimum 100 guests is common; 300–500 is not unusual for larger families. Hospitality is everything.' },
        { name:'هدية العروس (hadiyyat el-3arus)', desc:'Wedding gift. Lebanese guests typically give cash (in an envelope, فيشة). A family discussion happens about what is an appropriate amount — it\'s tied to the relationship and family standing.' },
        { name:'الطلّة والرقص (el-talle w-el-ra2s)', desc:'After dinner: the dance floor opens. Modern Lebanese weddings mix Fairuz classics, Arabic pop, Western hits. The couple\'s first dance (رقصة الشرف) is a highlight. Guests form circles and dance all night.' },
      ];
      const vocab = [
        { ar:'عريس / عروس', tr:'3aris / 3arus', en:'Groom / bride' },
        { ar:'خطوبة', tr:'khtube', en:'Engagement' },
        { ar:'مهر', tr:'mahr', en:'Dowry / bride gift' },
        { ar:'حفلة', tr:'7afle', en:'Party / celebration' },
        { ar:'دعوة', tr:'da3we', en:'Invitation' },
        { ar:'ضيف / ضيوف', tr:'dayyef / dyuf', en:'Guest / guests' },
        { ar:'كعكة العرس', tr:'ka3ket el-3ares', en:'Wedding cake' },
        { ar:'شهر عسل', tr:'shahr 3asal', en:'Honeymoon (lit: honey month)' },
        { ar:'مبروك', tr:'mabrook', en:'Congratulations (lit: blessed)' },
        { ar:'يعيشوا', tr:'yi3ishu', en:'May they live (said to newlyweds)' },
        { ar:'بالرفاه والبنين', tr:'bil-rafa w-el-banin', en:'In prosperity and sons (traditional blessing)' },
        { ar:'نعيماً', tr:'na3iman', en:'Blessings / congratulations (after haircut, shower, etc.)' },
      ];
      const phrases = [
        { ar:'مبروك للعروسين', tr:'mabrook lal-3ursayn', en:'Congratulations to the couple', note:'Said when meeting the bride and groom' },
        { ar:'يعيشوا ويسعدوا', tr:'yi3ishu w-yis3adu', en:'May they live and be happy', note:'Blessing for the newlyweds — very common' },
        { ar:'كل الأعراس تيجي بالسلامة', tr:'kull el-a3ras tiji bis-salame', en:'May all weddings come in safety', note:'Said when attending a wedding' },
        { ar:'نفرح بعرسك', tr:'nifreh b-3arsak', en:'May we rejoice at your wedding', note:'Said to an unmarried person — wishing them to marry soon' },
        { ar:'الله يديم المحبة', tr:'allah ydim el-ma7abbe', en:'May God keep the love lasting', note:'Blessing for a couple' },
        { ar:'وينك؟ عالحفلة؟', tr:'waynak? 3al-7afle?', en:'Where are you? At the party?', note:'How Lebanese people ask if you\'re at a celebration' },
      ];
      return `
      <p class="grammar-intro">Lebanese weddings are legendary — elaborate, loud, emotionally intense, and deeply cultural. Understanding wedding traditions gives you insight into the Lebanese soul: family, music, food, hospitality, and joy at maximum intensity.</p>
      ${gs('Wedding Traditions')}
      <div style="display:grid;gap:8px;margin-bottom:14px">
        ${traditions.map(t => `<div style="background:var(--card);border-radius:10px;padding:12px 14px;border-left:3px solid var(--accent)">
          <div style="font-weight:700;font-size:0.9rem;margin-bottom:3px">${t.name}</div>
          <div style="font-size:0.78rem;color:var(--muted);line-height:1.5">${t.desc}</div>
        </div>`).join('')}
      </div>
      ${gs('Wedding Vocabulary')}
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:6px;margin-bottom:14px">
        ${vocab.map(v => `<div style="background:var(--card);border-radius:8px;padding:8px 10px">
          <div style="direction:rtl;font-family:'Segoe UI','Noto Naskh Arabic',serif;font-size:0.95rem;font-weight:700;color:var(--accent2)">${v.ar}</div>
          <div style="font-size:0.72rem;color:var(--green);font-style:italic">${v.tr}</div>
          <div style="font-size:0.72rem;color:var(--muted)">${v.en}</div>
        </div>`).join('')}
      </div>
      ${gs('Celebration Phrases')}
      ${phrases.map(p => `<div style="background:var(--card);border-radius:10px;padding:10px 14px;margin-bottom:6px">
        <div style="direction:rtl;font-family:'Segoe UI','Noto Naskh Arabic',serif;font-size:1rem;font-weight:700;color:var(--accent2)">${p.ar}</div>
        <div style="font-size:0.8rem;color:var(--green);font-style:italic">${p.tr}</div>
        <div style="font-size:0.8rem;margin:2px 0">${p.en}</div>
        <div style="font-size:0.72rem;color:var(--muted)">${p.note}</div>
      </div>`).join('')}
      ${gn('Tip: Lebanese celebrations include many other milestones — موسم (mawsem / harvest feast), عيد ميلاد (3id milad / birthday), خروج من المستشفى (leaving hospital), نجاح (exam success), and of course religious Eids. The phrases and energy are similar — Mabrok, May God bless, dance, food, zagharit.')}
    `; }
  },
  {
    id: 'imperatives', title: 'Imperatives & Commands', icon: '📣',
    render() {
      const verbs = [
        { en:'Come', m:{ar:'تعا', tr:'ta3a'}, f:{ar:'تعي', tr:'ta3i'}, pl:{ar:'تعوا', tr:'ta3u'}, neg:{ar:'ما تيجي', tr:'ma tiji'}, root:'إجا (eja)' },
        { en:'Go', m:{ar:'روح', tr:'ruh'}, f:{ar:'روحي', tr:'ruhi'}, pl:{ar:'روحوا', tr:'ruhu'}, neg:{ar:'ما تروح', tr:'ma truh'}, root:'راح (rah)' },
        { en:'Eat', m:{ar:'كول', tr:'kul'}, f:{ar:'كلي', tr:'kli'}, pl:{ar:'كلوا', tr:'klu'}, neg:{ar:'ما تاكل', tr:'ma takol'}, root:'أكل (akal)' },
        { en:'Drink', m:{ar:'اشرب', tr:'shrab'}, f:{ar:'اشربي', tr:'shrabi'}, pl:{ar:'اشربوا', tr:'shrabu'}, neg:{ar:'ما تشرب', tr:'ma tishrab'}, root:'شرب (shereb)' },
        { en:'Sit', m:{ar:'إقعد', tr:'i23od'}, f:{ar:'إقعدي', tr:'i23di'}, pl:{ar:'إقعدوا', tr:'i23du'}, neg:{ar:'ما تقعد', tr:'ma ti23od'}, root:'قعد (2a3ad)' },
        { en:'Stop / Wait', m:{ar:'وقّف', tr:'wa22if'}, f:{ar:'وقّفي', tr:'wa22ife'}, pl:{ar:'وقّفوا', tr:'wa22ifu'}, neg:{ar:'ما توقّف', tr:'ma twa22if'}, root:'وقف (wa2af)' },
        { en:'Listen', m:{ar:'إسمع', tr:'isma3'}, f:{ar:'إسمعي', tr:'ism3i'}, pl:{ar:'إسمعوا', tr:'ism3u'}, neg:{ar:'ما تسمع', tr:'ma tisma3'}, root:'سمع (sime3)' },
        { en:'Look', m:{ar:'تطلّع', tr:'ttalla3'}, f:{ar:'تطلّعي', tr:'ttall3i'}, pl:{ar:'تطلّعوا', tr:'ttall3u'}, neg:{ar:'ما تتطلّع', tr:'ma tittalla3'}, root:'تطلّع (ttalla3)' },
        { en:'Speak', m:{ar:'حكي', tr:'7ki'}, f:{ar:'حكي', tr:'7ki'}, pl:{ar:'حكوا', tr:'7ku'}, neg:{ar:'ما تحكي', tr:'ma ti7ki'}, root:'حكى (7aka)' },
        { en:'Tell me', m:{ar:'قلّي', tr:'2illi'}, f:{ar:'قوليلي', tr:'2ulili'}, pl:{ar:'قولولي', tr:'2ululi'}, neg:{ar:'ما تقلّي', tr:'ma t2illi'}, root:'قال (2al)' },
        { en:'Take', m:{ar:'خود', tr:'khod'}, f:{ar:'خدي', tr:'khdi'}, pl:{ar:'خدوا', tr:'khdu'}, neg:{ar:'ما تاخد', tr:'ma takhod'}, root:'أخد (akhad)' },
        { en:'Give me', m:{ar:'عطيني', tr:'3atini'}, f:{ar:'عطيني', tr:'3atini'}, pl:{ar:'عطوني', tr:'3atuni'}, neg:{ar:'ما تعطيني', tr:'ma ta3tini'}, root:'عطى (3ata)' },
        { en:'Open', m:{ar:'افتح', tr:'fta7'}, f:{ar:'افتحي', tr:'fta7i'}, pl:{ar:'افتحوا', tr:'fta7u'}, neg:{ar:'ما تفتح', tr:'ma tifta7'}, root:'فتح (fata7)' },
        { en:'Close', m:{ar:'سكّر', tr:'sakker'}, f:{ar:'سكّري', tr:'sakkre'}, pl:{ar:'سكّروا', tr:'sakkru'}, neg:{ar:'ما تسكّر', tr:'ma tsakker'}, root:'سكّر (sakkar)' },
        { en:'Hurry', m:{ar:'يلا بسرعة', tr:'yalla bisor3a'}, f:{ar:'يلا بسرعة', tr:'yalla bisor3a'}, pl:{ar:'يلا بسرعة', tr:'yalla bisor3a'}, neg:{ar:'ما تستعجل', tr:'ma tista3jel'}, root:'يلا (yalla — particle)' },
      ];
      const softeners = [
        { phrase:'لو سمحت', tr:'law sama7t', use:'"If you would allow" — most polite/formal request softener. Add before any imperative.' },
        { phrase:'من فضلك', tr:'min fadlak', use:'"From your favor" — equivalent to "please." Add to any command.' },
        { phrase:'بليز', tr:'pliz', use:'English "please" borrowed — extremely common in modern Lebanese' },
        { phrase:'بعد إذنك', tr:'ba3d iznak', use:'"With your permission" — said before requests, very polite' },
        { phrase:'الله يخلّيك', tr:'allah ykhallik', use:'"May God preserve you" — pleading/begging request softener' },
        { phrase:'تكرم', tr:'tikram', use:'"Be honored" — soft command, said to friends/equals. Adds warmth.' },
        { phrase:'يا ريت', tr:'ya rayt', use:'"I wish that" — softens a command into a wish: "ya rayt tijji bukra" = I wish you would come tomorrow' },
      ];
      const negCommands = [
        { ar:'ما تحكي', tr:'ma t7ki', en:"Don't speak" },
        { ar:'ما تروح', tr:'ma truh', en:"Don't go" },
        { ar:'ما تقلق', tr:'ma t2la2', en:"Don't worry" },
        { ar:'ما تنسى', tr:'ma tinsa', en:"Don't forget" },
        { ar:'ما تخاف', tr:'ma tkhaf', en:"Don't be afraid" },
        { ar:'ما تستعجل', tr:'ma tista3jel', en:"Don't rush" },
        { ar:'ما تزعل', tr:'ma tiz3al', en:"Don't be upset" },
        { ar:'ما تعتب', tr:'ma ti3teb', en:"Don't be cross / take offense" },
      ];
      return `
      <p class="grammar-intro">Lebanese imperatives are how you ask, request, command, or invite. Unlike English, the verb form changes based on who you're addressing — masculine, feminine, or plural. Negative commands use <strong>ما + present tense</strong>, not the imperative form.</p>
      ${gp('Positive: <span class="ph">imperative stem</span> + (ـي for f / ـوا for pl)<br>Negative: <span class="ph">ما</span> + present tense (drop b- prefix)')}
      ${gs('Essential Imperative Verbs')}
      <div style="overflow-x:auto;margin-bottom:14px"><table style="width:100%;border-collapse:collapse;font-size:0.8rem">
        <thead><tr style="background:var(--card2)">
          <th style="padding:7px 8px;text-align:left;border-bottom:1px solid var(--border)">English</th>
          <th style="padding:7px 8px;text-align:left;border-bottom:1px solid var(--border)">→ him (m)</th>
          <th style="padding:7px 8px;text-align:left;border-bottom:1px solid var(--border)">→ her (f)</th>
          <th style="padding:7px 8px;text-align:left;border-bottom:1px solid var(--border)">→ them (pl)</th>
          <th style="padding:7px 8px;text-align:left;border-bottom:1px solid var(--border)">Don't (neg)</th>
        </tr></thead>
        <tbody>
          ${verbs.map(v => `<tr>
            <td style="padding:6px 8px;border-bottom:1px solid var(--border)44;font-weight:600">${v.en}<div style="font-size:0.68rem;color:var(--muted);font-weight:400">${v.root}</div></td>
            <td style="padding:6px 8px;border-bottom:1px solid var(--border)44"><span style="direction:rtl;color:var(--accent2);font-weight:600">${v.m.ar}</span><div style="font-size:0.7rem;color:var(--green);font-style:italic">${v.m.tr}</div></td>
            <td style="padding:6px 8px;border-bottom:1px solid var(--border)44"><span style="direction:rtl;color:var(--accent2);font-weight:600">${v.f.ar}</span><div style="font-size:0.7rem;color:var(--green);font-style:italic">${v.f.tr}</div></td>
            <td style="padding:6px 8px;border-bottom:1px solid var(--border)44"><span style="direction:rtl;color:var(--accent2);font-weight:600">${v.pl.ar}</span><div style="font-size:0.7rem;color:var(--green);font-style:italic">${v.pl.tr}</div></td>
            <td style="padding:6px 8px;border-bottom:1px solid var(--border)44"><span style="direction:rtl;color:var(--again);font-weight:600">${v.neg.ar}</span><div style="font-size:0.7rem;color:var(--green);font-style:italic">${v.neg.tr}</div></td>
          </tr>`).join('')}
        </tbody>
      </table></div>
      ${gs('Politeness — Softening a Command')}
      <p class="grammar-intro" style="margin-top:0">A bare imperative can sound abrupt. Adding any of these phrases turns a command into a polite request — essential in Lebanese culture where directness is rarely the goal.</p>
      <div style="display:grid;gap:6px;margin-bottom:14px">
        ${softeners.map(s => `<div style="background:var(--card);border-radius:8px;padding:9px 12px">
          <div style="display:flex;align-items:baseline;gap:8px;flex-wrap:wrap;margin-bottom:2px">
            <span style="direction:rtl;font-family:'Segoe UI','Noto Naskh Arabic',serif;font-size:1rem;font-weight:700;color:var(--accent2)">${s.phrase}</span>
            <span style="font-size:0.78rem;color:var(--green);font-style:italic">${s.tr}</span>
          </div>
          <div style="font-size:0.74rem;color:var(--muted);line-height:1.4">${s.use}</div>
        </div>`).join('')}
      </div>
      ${gs('Real-World Examples')}
      ${ge('لو سمحت، عطيني كاسة ميّ', 'law sama7t, 3atini kesit mayy', 'Please, give me a glass of water', 'Politeness softener + imperative + object suffix')}
      ${ge('تعا لهون شوي', 'ta3a la-hon shway', 'Come here for a moment', 'Most common informal call to a friend')}
      ${ge('ما تنسى تشتري خبز', 'ma tinsa tishtri khobz', "Don't forget to buy bread", 'Negative command + verb chain')}
      ${ge('قلّي شو صار', 'illi shu sar', 'Tell me what happened', 'Note: قال + لي = قلّي (compressed form)')}
      ${ge('روحوا ناموا، تأخّرتوا', 'ruhu namu, t2akkharto', 'Go to sleep, you (pl) are late', 'Two plural imperatives in sequence')}
      ${ge('يا ريت تساعدني هلق', 'ya rayt tsa3idni halla2', 'I wish you would help me now', 'Wish-form softener — much politer than direct command')}
      ${gs("Don't (Negative Commands) — Most Useful")}
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:6px;margin-bottom:12px">
        ${negCommands.map(n => `<div style="background:var(--card);border-radius:8px;padding:8px 10px;text-align:center;border-left:2px solid var(--again)">
          <div style="direction:rtl;font-family:'Segoe UI','Noto Naskh Arabic',serif;font-size:0.95rem;font-weight:700;color:var(--again)">${n.ar}</div>
          <div style="font-size:0.7rem;color:var(--green);font-style:italic">${n.tr}</div>
          <div style="font-size:0.72rem;color:var(--muted);margin-top:2px">${n.en}</div>
        </div>`).join('')}
      </div>
      ${gn('<strong>Cultural insight:</strong> Lebanese parents often layer multiple softeners on commands to children: "<em>habibi, ya rayt ti3mel hek, allah ykhallik</em>" = "my dear, I wish you would do this, God preserve you." The more affection words around the command, the warmer (and stronger!) the request actually is. Bare commands feel cold — always add at least one of <em>ya 7abibi / ya rayt / law sama7t / min fadlak</em>.')}
    `; }
  },  {
    id: 'object-pronouns', title: 'Object Pronouns & Verb Suffixes', icon: '🔗',
    render() {
      const suffixes = [
        { en:'me', ar:'ـني', tr:'-ni', example:'shefni = he saw me', exAr:'شافني' },
        { en:'you (m)', ar:'ـك', tr:'-ak', example:'shefak = he saw you (m)', exAr:'شافك' },
        { en:'you (f)', ar:'ـك', tr:'-ik', example:'shefik = he saw you (f)', exAr:'شافِك' },
        { en:'him', ar:'ـو', tr:'-o / -u', example:'shefo = he saw him', exAr:'شافو' },
        { en:'her', ar:'ـا / ـها', tr:'-a / -ha', example:'shefa = he saw her', exAr:'شافا' },
        { en:'us', ar:'ـنا', tr:'-na', example:'shefna = he saw us', exAr:'شافنا' },
        { en:'you (pl)', ar:'ـكون', tr:'-kon', example:'shefkon = he saw you (pl)', exAr:'شافكون' },
        { en:'them', ar:'ـن / ـهن', tr:'-on / -hon', example:'shefon = he saw them', exAr:'شافن' },
      ];
      const indirect = [
        { ar:'قلّي', tr:'2illi', en:'tell me', root:'قال + لي' },
        { ar:'قلّك', tr:'2illak', en:'tell you (m)', root:'قال + لك' },
        { ar:'قلّو', tr:'2illo', en:'tell him', root:'قال + لو' },
        { ar:'قلّا', tr:'2illa', en:'tell her', root:'قال + لا' },
        { ar:'قلّلنا', tr:'2illilna', en:'tell us', root:'قال + لنا' },
        { ar:'قلّكون', tr:'2illkon', en:'tell you (pl)', root:'قال + لكون' },
        { ar:'قلّن', tr:'2illon', en:'tell them', root:'قال + لون' },
      ];
      const stacking = [
        { ar:'عطيتو ياها', tr:'3taytu yaha', en:'I gave it (f) to him', note:'verb + indirect (him) + ya- placeholder + direct (her)' },
        { ar:'بعتلك ياه', tr:'ba3atlak yeh', en:'I sent it (m) to you', note:'past + لك (to you) + ياه (it m)' },
        { ar:'جبتلهن ياهن', tr:'jibitlhon yehon', en:'I brought them to them', note:'يا- carries both pronouns when stacked' },
        { ar:'قلتلها ياه', tr:'iltilla yeh', en:'I told her about it', note:'قلت + لها + ياه' },
      ];
      const onPreps = [
        { ar:'معي', tr:'ma3i', en:'with me' },
        { ar:'معك', tr:'ma3ak', en:'with you (m)' },
        { ar:'معو', tr:'ma3o', en:'with him' },
        { ar:'منّي', tr:'minni', en:'from me' },
        { ar:'لإلي', tr:'la-ili', en:'for me / mine' },
        { ar:'فيّي', tr:'fiyyi', en:'in me / I can' },
        { ar:'عليّ', tr:'3alayyi', en:'on me / I owe' },
        { ar:'إلو', tr:'ilo', en:'for him / his' },
      ];
      return `
      <p class="grammar-intro">Lebanese attaches direct and indirect object pronouns directly onto verbs as suffixes. Instead of "I told him," you say <em>iltillo</em> — one word. Mastering these suffixes is the single biggest leap in sounding like a native speaker.</p>
      ${gp('Verb + <span class="ph">direct object suffix</span> = "verb him/her/them"<br>Verb + <span class="ph">ل + indirect suffix</span> = "verb to him/to her"<br>Both stacked: verb + indirect + <span class="ph">يا</span> + direct')}
      ${gs('Direct Object Suffixes — Attached to Verbs')}
      <div style="overflow-x:auto;margin-bottom:14px"><table style="width:100%;border-collapse:collapse;font-size:0.82rem">
        <thead><tr style="background:var(--card2)">
          <th style="padding:8px 10px;text-align:left;border-bottom:1px solid var(--border)">English</th>
          <th style="padding:8px 10px;text-align:left;border-bottom:1px solid var(--border)">Suffix</th>
          <th style="padding:8px 10px;text-align:left;border-bottom:1px solid var(--border)">Translit.</th>
          <th style="padding:8px 10px;text-align:left;border-bottom:1px solid var(--border)">Example (with shaaf — saw)</th>
        </tr></thead>
        <tbody>
          ${suffixes.map(s => `<tr>
            <td style="padding:7px 10px;border-bottom:1px solid var(--border)44;font-weight:600">${s.en}</td>
            <td style="padding:7px 10px;border-bottom:1px solid var(--border)44;direction:rtl;color:var(--accent2);font-weight:700">${s.ar}</td>
            <td style="padding:7px 10px;border-bottom:1px solid var(--border)44;color:var(--green);font-style:italic">${s.tr}</td>
            <td style="padding:7px 10px;border-bottom:1px solid var(--border)44"><span style="direction:rtl;color:var(--accent2)">${s.exAr}</span> — <span style="font-style:italic;color:var(--green)">${s.example}</span></td>
          </tr>`).join('')}
        </tbody>
      </table></div>
      ${gs('Indirect Object — "to me / to him" with ل (la-)')}
      <p class="grammar-intro" style="margin-top:0">For verbs like <em>tell, give, send, bring, write</em> — the recipient takes a لـ + suffix. In speech these compress: <em>2al + li</em> → <em>illi</em>.</p>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:6px;margin-bottom:14px">
        ${indirect.map(i => `<div style="background:var(--card);border-radius:8px;padding:8px 11px">
          <div style="direction:rtl;font-family:'Segoe UI','Noto Naskh Arabic',serif;font-size:1rem;font-weight:700;color:var(--accent2)">${i.ar}</div>
          <div style="font-size:0.72rem;color:var(--green);font-style:italic">${i.tr}</div>
          <div style="font-size:0.74rem">${i.en}</div>
          <div style="font-size:0.66rem;color:var(--muted);direction:rtl">${i.root}</div>
        </div>`).join('')}
      </div>
      ${gs('Stacking Both — Indirect + Direct via يا (ya-)')}
      <p class="grammar-intro" style="margin-top:0">When you have BOTH "to him" AND "it" — Arabic uses an <strong>يا (ya-)</strong> filler before the direct object suffix. This is one of the most native-sounding constructions.</p>
      <div style="display:grid;gap:6px;margin-bottom:14px">
        ${stacking.map(s => `<div style="background:var(--card);border-radius:8px;padding:9px 12px">
          <div style="display:flex;align-items:baseline;gap:10px;flex-wrap:wrap;margin-bottom:2px">
            <span style="direction:rtl;font-family:'Segoe UI','Noto Naskh Arabic',serif;font-size:1.05rem;font-weight:700;color:var(--accent2)">${s.ar}</span>
            <span style="font-size:0.8rem;color:var(--green);font-style:italic">${s.tr}</span>
          </div>
          <div style="font-size:0.78rem;margin-bottom:2px">${s.en}</div>
          <div style="font-size:0.7rem;color:var(--muted);line-height:1.4">${s.note}</div>
        </div>`).join('')}
      </div>
      ${gs('Same Suffixes on Prepositions')}
      <p class="grammar-intro" style="margin-top:0">The exact same suffixes attach to prepositions — مع (with), من (from), لـ (for), في (in), على (on), إلى (to). Master once, use everywhere.</p>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:6px;margin-bottom:12px">
        ${onPreps.map(p => `<div style="background:var(--card);border-radius:8px;padding:8px 10px;text-align:center">
          <div style="direction:rtl;font-family:'Segoe UI','Noto Naskh Arabic',serif;font-size:1rem;font-weight:700;color:var(--accent2)">${p.ar}</div>
          <div style="font-size:0.7rem;color:var(--green);font-style:italic">${p.tr}</div>
          <div style="font-size:0.72rem;color:var(--muted)">${p.en}</div>
        </div>`).join('')}
      </div>
      ${gs('Real-Conversation Examples')}
      ${ge('شفتو امبارح', 'sheftu mberi7', 'I saw him yesterday', 'past verb (1st sg) + -o suffix')}
      ${ge('قلتلها روح', 'iltilla ruh', 'I told her to go', 'تـ + لـ + ها = compressed')}
      ${ge('ما بعرفك', 'ma ba3rfak', "I don't know you (m)", 'negation + verb + -ak')}
      ${ge('بحبك يا ولد', 'b7ibbak ya walad', 'I love you, kid', 'b- prefix + verb + -ak')}
      ${ge('عطيني ياه', '3atini yeh', 'Give it (m) to me', 'imperative + ني + يا + ه')}
      ${ge('شو في معك؟', 'shu fi ma3ak?', "What do you (m) have? (lit: with you)", 'preposition + suffix in question')}
      ${gn('<strong>Pronunciation tip:</strong> When a verb ends in a vowel and a suffix is added, the vowel can shift or assimilate. <em>shaaf + o</em> → <em>shaafo</em> (smooth), <em>shaaf + ha</em> → <em>shaafa</em> (the h often drops in fast speech). Listening to Lebanese audio is the only way to absorb these natural reductions — don\'t over-pronounce every letter.')}
    `; }
  },  {
    id: 'modals', title: 'Modal Verbs (Must, Can, Should, May)', icon: '🛡️',
    render() {
      const modals = [
        { en:'must / have to', word:'لازم', tr:'lezim', invariant:true, note:'Invariant — never conjugates. Followed directly by present-tense verb (no b- prefix). "lezim ruh" = I must go.' },
        { en:'can / be able', word:'فيني / فيك / فيو', tr:'fini / fik / fiyo', invariant:false, note:'Conjugates by attaching pronoun suffix. "fini sa3dak" = I can help you. Negative: "ma fini" = I can\'t.' },
        { en:'can (alternative)', word:'بقدر', tr:'bi2dar', invariant:false, note:'Full verb — bi2dar (I can), bti2dar (you can), byi2dar (he can). Slightly more formal than fini.' },
        { en:'might / may / could', word:'يمكن', tr:'yimken', invariant:true, note:'Invariant — like "maybe." "yimken yiji bukra" = he might come tomorrow.' },
        { en:'possible / can', word:'ممكن', tr:'mumken', invariant:true, note:'Invariant. As a question = "may I?" "mumken se2alak shi?" = May I ask you something?' },
        { en:'should / ought to', word:'لازم + شرط', tr:'lezim + softener', invariant:true, note:'Lebanese has no exact "should" — uses lezim with softer tone, or "min el-mafrud" = "it\'s expected that..."' },
        { en:'expected / supposed to', word:'المفروض', tr:'el-mafrud', invariant:true, note:'"el-mafrud yiji el-yom" = he\'s supposed to come today. Common written/spoken form.' },
        { en:'want', word:'بدّي / بدّك', tr:'biddi / biddak', invariant:false, note:'Conjugates with pronoun suffix. "biddi ruh" = I want to go. The most common modal in daily speech.' },
        { en:'know how to', word:'بعرف', tr:'ba3rif', invariant:false, note:'"ba3rif sebih" = I know how to swim. Distinct from "fini" — knowledge vs ability.' },
        { en:'used to', word:'كنت', tr:'kint', invariant:false, note:'Past of "to be" + present verb. "kint ruh" = I used to go / I would go.' },
      ];
      const fini = [
        { pro:'I', ar:'فيّي / فيني', tr:'fiyyi / fini' },
        { pro:'you (m)', ar:'فيك', tr:'fik' },
        { pro:'you (f)', ar:'فيكي', tr:'fiki' },
        { pro:'he', ar:'فيو', tr:'fiyo' },
        { pro:'she', ar:'فيا', tr:'fiyya' },
        { pro:'we', ar:'فينا', tr:'fina' },
        { pro:'you (pl)', ar:'فيكون', tr:'fikon' },
        { pro:'they', ar:'فيون', tr:'fiyon' },
      ];
      const examples = [
        { ar:'لازم روح هلق', tr:'lezim ruh halla2', en:'I must go now', cat:'must' },
        { ar:'لازم تدفع كاش', tr:'lezim tidfa3 cash', en:'You have to pay cash', cat:'must' },
        { ar:'ما لازم تنسى', tr:'ma lezim tinsa', en:"You mustn't forget", cat:'must (neg)' },
        { ar:'فيني ساعدك؟', tr:'fini sa3dak?', en:'Can I help you?', cat:'can' },
        { ar:'ما فيني نام', tr:'ma fini nam', en:"I can't sleep", cat:'can (neg)' },
        { ar:'بقدر إجي بكرا', tr:'bi2dar iji bukra', en:'I can come tomorrow', cat:'can (alt)' },
        { ar:'يمكن يمطر اليوم', tr:'yimken yimtor el-yom', en:'It might rain today', cat:'might' },
        { ar:'يمكن، يمكن لأ', tr:'yimken, yimken la2', en:'Maybe, maybe not', cat:'might' },
        { ar:'ممكن أسألك سؤال؟', tr:'mumken as2alak su2al?', en:'May I ask you a question?', cat:'may' },
        { ar:'المفروض يصل الساعة تمانية', tr:'el-mafrud yusal es-se3a tmene', en:"He's supposed to arrive at eight", cat:'supposed to' },
        { ar:'بدي قهوة، لو سمحت', tr:'biddi ahwe, law sama7t', en:'I want a coffee, please', cat:'want' },
        { ar:'بعرف أحكي عربي', tr:'ba3rif e7ki 3arabi', en:'I know how to speak Arabic', cat:'know how' },
        { ar:'كنت روح كل يوم', tr:'kint ruh kill yom', en:'I used to go every day', cat:'used to' },
      ];
      return `
      <p class="grammar-intro">Modal verbs are how you express necessity, ability, possibility, and intention. Lebanese modals come in two flavors: <strong>invariant words</strong> (lezim, mumken, yimken — never change) and <strong>conjugating modals</strong> (fini, bi2dar, biddi — change with pronoun). Master both — they're in every other sentence.</p>
      ${gp('Invariant modal: <span class="ph">lezim/mumken/yimken</span> + present verb (no b-)<br>Conjugating modal: <span class="ph">fini/biddi/bi2dar</span> + present verb (no b-)')}
      ${gs('All Modal Verbs at a Glance')}
      <div style="overflow-x:auto;margin-bottom:14px"><table style="width:100%;border-collapse:collapse;font-size:0.8rem">
        <thead><tr style="background:var(--card2)">
          <th style="padding:7px 10px;text-align:left;border-bottom:1px solid var(--border)">Meaning</th>
          <th style="padding:7px 10px;text-align:left;border-bottom:1px solid var(--border)">Lebanese</th>
          <th style="padding:7px 10px;text-align:left;border-bottom:1px solid var(--border)">Notes</th>
        </tr></thead>
        <tbody>
          ${modals.map(m => `<tr>
            <td style="padding:7px 10px;border-bottom:1px solid var(--border)44;font-weight:600">${m.en}</td>
            <td style="padding:7px 10px;border-bottom:1px solid var(--border)44"><span style="direction:rtl;color:var(--accent2);font-weight:700">${m.word}</span><div style="font-size:0.72rem;color:var(--green);font-style:italic">${m.tr}</div></td>
            <td style="padding:7px 10px;border-bottom:1px solid var(--border)44;font-size:0.76rem;color:var(--muted);line-height:1.4">${m.note}</td>
          </tr>`).join('')}
        </tbody>
      </table></div>
      ${gs('"Can/Be able" — Conjugating fini')}
      <p class="grammar-intro" style="margin-top:0">The most common way to say "can" in Lebanese. Built from فيـ + pronoun suffix. Negate by adding ما before it.</p>
      <div style="overflow-x:auto;margin-bottom:14px"><table style="width:100%;border-collapse:collapse;font-size:0.85rem">
        <thead><tr style="background:var(--card2)">
          <th style="padding:7px 10px;text-align:left;border-bottom:1px solid var(--border)">Pronoun</th>
          <th style="padding:7px 10px;text-align:left;border-bottom:1px solid var(--border)">Arabic</th>
          <th style="padding:7px 10px;text-align:left;border-bottom:1px solid var(--border)">Translit.</th>
        </tr></thead>
        <tbody>
          ${fini.map(f => `<tr>
            <td style="padding:6px 10px;border-bottom:1px solid var(--border)44;font-weight:600">${f.pro}</td>
            <td style="padding:6px 10px;border-bottom:1px solid var(--border)44;direction:rtl;color:var(--accent2);font-weight:700">${f.ar}</td>
            <td style="padding:6px 10px;border-bottom:1px solid var(--border)44;color:var(--green);font-style:italic">${f.tr}</td>
          </tr>`).join('')}
        </tbody>
      </table></div>
      ${gs('Real-Conversation Examples')}
      <div style="display:grid;gap:6px;margin-bottom:14px">
        ${examples.map(e => `<div style="background:var(--card);border-radius:8px;padding:9px 12px;display:flex;gap:10px;align-items:flex-start;flex-wrap:wrap">
          <div style="background:var(--accent2)22;color:var(--accent2);border-radius:6px;padding:2px 8px;font-size:0.66rem;font-weight:700;text-transform:uppercase">${e.cat}</div>
          <div style="flex:1;min-width:200px">
            <div style="direction:rtl;font-family:'Segoe UI','Noto Naskh Arabic',serif;font-size:1rem;font-weight:700;color:var(--accent2)">${e.ar}</div>
            <div style="font-size:0.76rem;color:var(--green);font-style:italic">${e.tr}</div>
            <div style="font-size:0.78rem">${e.en}</div>
          </div>
        </div>`).join('')}
      </div>
      ${gs('Past-Tense Modals — Use كان (ken)')}
      <p class="grammar-intro" style="margin-top:0">For past modals like "I had to", "I could", "I wanted to" — combine كان (ken) with the modal.</p>
      ${ge('كان لازم روح', 'ken lezim ruh', 'I had to go', 'ken + lezim + present verb')}
      ${ge('كنت بقدر إعمل هيك', 'kint bi2dar i3mel hek', 'I was able to do this', 'kint + bi2dar + present')}
      ${ge('كان بدّي قلّك بس نسيت', 'ken biddi 2illak bas nsit', "I wanted to tell you but I forgot", 'ken biddi = past want')}
      ${ge('كان مفروض يجي امبارح', 'ken mafrud yiji mberi7', 'He was supposed to come yesterday', 'ken + mafrud')}
      ${gn('<strong>Common pitfall:</strong> Don\'t put a <em>b-</em> prefix on the verb after a modal. "lezim <em>b</em>ruh" is wrong — say "lezim ruh." The b- marks habitual/general present; modals introduce a different mood (subjunctive). Same rule for biddi, fini, bi2dar, lezim, mumken, yimken — all take the bare present stem.')}
    `; }
  },  {
    id: 'relative-clauses', title: 'Relative Clauses (illi)', icon: '🔗',
    render() {
      const examples = [
        { ar:'الولد اللي إجا', tr:'el-walad illi eja', en:'The boy who came', note:'illi connects to a definite noun (el-walad)' },
        { ar:'الكتاب اللي قريتو', tr:'el-kteb illi 2rito', en:'The book that I read', note:'When the relative is the object, attach pronoun (-o = it/him)' },
        { ar:'البيت اللي ساكن فيو', tr:'el-bayt illi seken fi-yo', en:'The house I live in', note:'For prepositional links, use prep + pronoun resumption (fi-yo)' },
        { ar:'البنت اللي بعرفها', tr:'el-bint illi ba3rifha', en:'The girl I know', note:'Object pronoun -ha refers back to el-bint' },
        { ar:'الناس اللي رحنا معن', tr:'en-nes illi rohna ma3on', en:'The people we went with', note:'ma3on = with them, ties back to en-nes' },
        { ar:'الموبايل اللي ضاع منّي', tr:'el-mobile illi da3 minni', en:'The phone that I lost (lit: that was lost from me)', note:'No pronoun needed if relative is subject' },
        { ar:'الأكل اللي بحبّو', tr:'el-akel illi b7ibbo', en:'The food I love', note:'-o = it (referring back to el-akel, masculine food)' },
        { ar:'المكان اللي قلتلّك عنّو', tr:'el-mukan illi iltillak 3anno', en:'The place I told you about', note:'3anno = about it; double pronoun chain (told-you about-it)' },
      ];
      const indef = [
        { ar:'في ناس عم يستنّوا', tr:'fi nes 3am yistanno', en:'There are people waiting', note:'No illi — indefinite "people" connects directly' },
        { ar:'بدّي شغلة بتساعدني', tr:'biddi shaghle btsa3idni', en:'I want something that helps me', note:'shaghle (something) is indefinite, no illi' },
        { ar:'في مطعم بفتح بكير', tr:'fi mat3am byifteh bkir', en:'There\'s a restaurant that opens early', note:'mat3am indefinite, verb attaches directly' },
        { ar:'بعرف واحد بيشتغل هونيك', tr:'ba3rif wa7ad byishtighel honik', en:'I know someone who works there', note:'wa7ad indefinite' },
      ];
      return `
      <p class="grammar-intro">Lebanese (and all Arabic dialects) uses one word — <strong>اللي (illi)</strong> — for "who," "which," "that," and "whom." It comes after a definite noun and connects it to a clause that describes it. With indefinite nouns, you skip illi entirely. This single rule unlocks complex Lebanese sentences.</p>
      ${gp('Definite noun + <span class="ph">illi</span> + clause<br>Indefinite noun + clause (no illi)')}
      ${gs('How illi Works — The Core Rule')}
      <p class="grammar-intro" style="margin-top:0">If the noun being described has <strong>el-</strong> (the), use <strong>illi</strong>. If not (a / some / any), skip <strong>illi</strong> entirely. Inside the clause, if the noun plays the role of <em>object</em> or <em>object of preposition</em>, you must add a "resumption pronoun" pointing back at it.</p>
      ${gs('Examples with Definite Nouns + illi')}
      <div style="display:grid;gap:6px;margin-bottom:14px">
        ${examples.map(e => `<div style="background:var(--card);border-radius:8px;padding:9px 12px">
          <div style="display:flex;align-items:baseline;gap:10px;flex-wrap:wrap;margin-bottom:2px">
            <span style="direction:rtl;font-family:'Segoe UI','Noto Naskh Arabic',serif;font-size:1.05rem;font-weight:700;color:var(--accent2)">${e.ar}</span>
            <span style="font-size:0.78rem;color:var(--green);font-style:italic">${e.tr}</span>
          </div>
          <div style="font-size:0.8rem;margin-bottom:2px">${e.en}</div>
          <div style="font-size:0.72rem;color:var(--muted);line-height:1.4">${e.note}</div>
        </div>`).join('')}
      </div>
      ${gs('Examples with Indefinite Nouns — No illi')}
      <div style="display:grid;gap:6px;margin-bottom:14px">
        ${indef.map(e => `<div style="background:var(--card);border-radius:8px;padding:9px 12px;border-left:3px solid var(--blue)">
          <div style="display:flex;align-items:baseline;gap:10px;flex-wrap:wrap;margin-bottom:2px">
            <span style="direction:rtl;font-family:'Segoe UI','Noto Naskh Arabic',serif;font-size:1.05rem;font-weight:700;color:var(--accent2)">${e.ar}</span>
            <span style="font-size:0.78rem;color:var(--green);font-style:italic">${e.tr}</span>
          </div>
          <div style="font-size:0.8rem;margin-bottom:2px">${e.en}</div>
          <div style="font-size:0.72rem;color:var(--muted);line-height:1.4">${e.note}</div>
        </div>`).join('')}
      </div>
      ${gs('Resumption Pronouns — When You Must Add One')}
      <p class="grammar-intro" style="margin-top:0">When the relative noun is the <strong>object</strong>, <strong>possessor</strong>, or <strong>object of a preposition</strong> inside the clause, you MUST add a pronoun pointing back. English drops these — Arabic doesn\'t.</p>
      ${ge('الفيلم اللي شفتو ❌ الفيلم اللي شفت', 'el-film illi shifto', 'The film I watched (it)', 'You CANNOT say illi shift — must say illi shifto (added -o)')}
      ${ge('المعلّم اللي بحكي معه ❌ المعلّم اللي بحكي مع', 'el-mu3allem illi bi7ki ma3o', 'The teacher I talk to (him)', 'Preposition needs pronoun: ma3o (with him)')}
      ${ge('الشي اللي خبّيتو', 'esh-shi illi khabbeyto', 'The thing I hid (it)', 'khabbeyto = I hid it; -o resumes esh-shi')}
      ${ge('الست اللي ابنها بالجامعة', 'es-sitt illi ibna bil-jem3a', 'The lady whose son is at university', 'ibna = her son; -ha resumes es-sitt as possessor')}
      ${gs('Multiple Clauses Together')}
      ${ge('الكتاب اللي قريتو واللي عجبني كتير', 'el-kteb illi 2rito w-illi 3ajabni ktir', 'The book I read and (which) I liked a lot', 'Two illi clauses — repeat illi for each')}
      ${ge('في حدا اللي بيعرف الطريق', 'fi 7ada illi bya3rif et-taree2', 'There is someone who knows the way', '7ada (someone) is sometimes treated as definite — illi can appear')}
      ${gn('<strong>Pro tip:</strong> If you hear yourself mid-sentence about to use a relative clause, ask: <em>Was the noun definite (el-)? Yes → use illi. No → skip it. Is the noun the subject or object inside the clause? Subject → no extra pronoun. Object/possessor/prep object → add pronoun (-o, -a, -on, etc.)</em>. With practice this becomes automatic — but until then, slowing down for one beat at illi-decisions will dramatically improve your accuracy.')}
    `; }
  },  {
    id: 'phone-texting', title: 'Phone, Text & Social Media Lebanese', icon: '📱',
    render() {
      const phoneEtiquette = [
        { ar:'ألو', tr:'alo', use:'Phone "hello" — only on calls, never face-to-face. From French allô.' },
        { ar:'مين معي؟', tr:'min ma3i?', use:'Who is this? (lit: who is with me?) — said when you don\'t recognize the number' },
        { ar:'بسمعك منيح', tr:'bisma3ak mneh', use:'I hear you well — confirms good signal' },
        { ar:'ما عم بسمعك', tr:'ma 3am bisma3ak', use:"I can't hear you — common when signal is bad (which is often in Lebanon)" },
        { ar:'الإشارة ضعيفة', tr:'el-isharra da3ife', use:'The signal is weak' },
        { ar:'بحكيك بعدين', tr:'bi7kik ba3dein', use:"I'll talk to you later" },
        { ar:'بعاود اتصل فيك', tr:'b3awid attasil fik', use:"I'll call you back" },
        { ar:'بطلبك بعد شوي', tr:'btlobak ba3d shway', use:"I'll dial/call you in a bit (also: btlobik for f)" },
        { ar:'البطارية فاضية', tr:'el-batariye fadye', use:'The battery is dead' },
        { ar:'الخط مسكّر', tr:'el-khatt msakkar', use:'The line is closed/blocked (no service or out of credit)' },
      ];
      const sms = [
        { ar:'مرحبا', tr:'mar7aba', en:'Hello — chat opener' },
        { ar:'كيفك؟', tr:'kifak?', en:'How are you?' },
        { ar:'شو بتعمل؟', tr:'shu bta3mil?', en:'What are you up to?' },
        { ar:'مشغول هلق', tr:'mashghul halla2', en:"I'm busy now" },
        { ar:'بحكيك بعدين', tr:'bi7kik ba3dein', en:"I'll talk to you later" },
        { ar:'وين رح نلتقي؟', tr:'wein rah nelta2i?', en:'Where shall we meet?' },
        { ar:'متأخر شوي', tr:'mit2akhkhar shway', en:"I'm a little late" },
        { ar:'وصلت', tr:'wsilt', en:'I arrived' },
        { ar:'بنطرك', tr:'bnattrak', en:"I'm waiting for you" },
        { ar:'جاي بعد شوي', tr:'jay ba3d shway', en:"Coming in a bit" },
      ];
      const chatAbbr = [
        { abbr:'7', stands:'ح (7a)', ex:'mar7aba = مرحبا', why:'7 visually resembles ح. Universal in Arabic-romanization chat.' },
        { abbr:'2', stands:'ء / ق (glottal stop)', ex:'2alb = قلب (heart)', why:'2 represents the glottal stop, especially common in Lebanese which drops ق to ء.' },
        { abbr:'3', stands:'ع (3ayn)', ex:'3arabi = عربي', why:'3 visually mirrors ع. Identifying ع in chat = lifesaver.' },
        { abbr:'5 / kh', stands:'خ (kha)', ex:'5alas = خلص', why:'5 looks somewhat like خ; or write "kh."' },
        { abbr:'6 / t', stands:'ط (emphatic t)', ex:'6alab / talab = طلب', why:'Some chat with 6, others write "t" — both common.' },
        { abbr:'9 / s', stands:'ص (emphatic s)', ex:'9aba7 / sabah = صباح', why:'9 used in some Arabic countries; in Lebanon usually written "s."' },
        { abbr:'gh', stands:'غ (ghayn)', ex:'ghada = غدا', why:'No number used; written "gh."' },
        { abbr:'sh', stands:'ش', ex:'shu = شو', why:'Written "sh" — universal' },
        { abbr:'th', stands:'ث', ex:'(rare in Lebanese)', why:'Written "th" but Lebanese usually drops to t/s' },
      ];
      const slangChat = [
        { ar:'7abibe', tr:'7abibe / 7biibi', meaning:'My dear (sent dozens of times a day in Lebanese chats — devalued through use)' },
        { ar:'tnt', tr:'7anenet / 7annene', meaning:'"How sweet of you" — common reply to favor/compliment' },
        { ar:'lol / haha / ahaha', tr:'lol / haha', meaning:'Laughing (English borrowed)' },
        { ar:'inshallah', tr:'inshallah', meaning:'God willing — used SO often in chat it\'s essentially "ok we\'ll see"' },
        { ar:'ok / mneh / tamem', tr:'ok / mneh / tamem', meaning:'Three ways to say "ok" — all common' },
        { ar:'mish 3arfe', tr:'mish 3arfe', meaning:'I don\'t know (f)' },
        { ar:'eyyyyy', tr:'ey/eyyy', meaning:'Yeah — extending letters = casual' },
        { ar:'7ayete', tr:'7ayete', meaning:'My life — even more affectionate than 7abibe' },
        { ar:'wlek', tr:'wlek', meaning:'Hey/man (very Lebanese, slightly rough — used between male friends)' },
        { ar:'msj / vn', tr:'msj / vn', meaning:'Message / voice note — borrowed English/French abbreviations' },
      ];
      return `
      <p class="grammar-intro">Lebanese phone, text, and social media language is its own dialect — packed with French/English code-switches, number-letter substitutions (called "Arabizi" or "Franco-Arabic"), and warmth markers like 7abibe sent dozens of times a day. Mastering this opens the door to actually chatting with Lebanese friends.</p>
      ${gp('Phone calls: still formal openers (alo, mar7aba)<br>Texting: Arabizi (3, 7, 2 substitutions), no diacritics, lots of emojis<br>WhatsApp voice notes: extremely common — Lebanese prefer voice over text')}
      ${gs('Phone Call Etiquette')}
      <div style="display:grid;gap:6px;margin-bottom:14px">
        ${phoneEtiquette.map(p => `<div style="background:var(--card);border-radius:8px;padding:9px 12px">
          <div style="display:flex;align-items:baseline;gap:8px;flex-wrap:wrap;margin-bottom:2px">
            <span style="direction:rtl;font-family:'Segoe UI','Noto Naskh Arabic',serif;font-size:1rem;font-weight:700;color:var(--accent2)">${p.ar}</span>
            <span style="font-size:0.78rem;color:var(--green);font-style:italic">${p.tr}</span>
          </div>
          <div style="font-size:0.74rem;color:var(--muted);line-height:1.4">${p.use}</div>
        </div>`).join('')}
      </div>
      ${gs('Common Text Messages')}
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:6px;margin-bottom:14px">
        ${sms.map(s => `<div style="background:var(--card);border-radius:8px;padding:8px 11px">
          <div style="direction:rtl;font-family:'Segoe UI','Noto Naskh Arabic',serif;font-size:0.95rem;font-weight:700;color:var(--accent2)">${s.ar}</div>
          <div style="font-size:0.72rem;color:var(--green);font-style:italic">${s.tr}</div>
          <div style="font-size:0.74rem;color:var(--muted)">${s.en}</div>
        </div>`).join('')}
      </div>
      ${gs('Arabizi — Number Substitutions in Chat')}
      <p class="grammar-intro" style="margin-top:0">When Lebanese type Arabic with Latin letters, they use numbers to represent sounds English doesn\'t have. Without this key, Arabic chat looks like gibberish. With it, it\'s second nature.</p>
      <div style="overflow-x:auto;margin-bottom:14px"><table style="width:100%;border-collapse:collapse;font-size:0.82rem">
        <thead><tr style="background:var(--card2)">
          <th style="padding:7px 10px;text-align:center;border-bottom:1px solid var(--border)">Char</th>
          <th style="padding:7px 10px;text-align:left;border-bottom:1px solid var(--border)">Arabic letter</th>
          <th style="padding:7px 10px;text-align:left;border-bottom:1px solid var(--border)">Example</th>
          <th style="padding:7px 10px;text-align:left;border-bottom:1px solid var(--border)">Why</th>
        </tr></thead>
        <tbody>
          ${chatAbbr.map(a => `<tr>
            <td style="padding:6px 10px;border-bottom:1px solid var(--border)44;text-align:center;font-weight:800;color:var(--accent2);font-size:1.1rem">${a.abbr}</td>
            <td style="padding:6px 10px;border-bottom:1px solid var(--border)44;direction:rtl;font-weight:700">${a.stands}</td>
            <td style="padding:6px 10px;border-bottom:1px solid var(--border)44;font-style:italic;color:var(--green)">${a.ex}</td>
            <td style="padding:6px 10px;border-bottom:1px solid var(--border)44;font-size:0.74rem;color:var(--muted)">${a.why}</td>
          </tr>`).join('')}
        </tbody>
      </table></div>
      ${gs('Chat Slang & Affection Markers')}
      <div style="display:grid;gap:6px;margin-bottom:14px">
        ${slangChat.map(s => `<div style="background:var(--card);border-radius:8px;padding:9px 12px">
          <div style="display:flex;align-items:baseline;gap:8px;flex-wrap:wrap;margin-bottom:2px">
            <span style="font-family:monospace;font-size:0.95rem;font-weight:700;color:var(--accent2)">${s.tr}</span>
          </div>
          <div style="font-size:0.74rem;color:var(--muted);line-height:1.4">${s.meaning}</div>
        </div>`).join('')}
      </div>
      ${gs('Sample Real Lebanese WhatsApp Exchange')}
      <div style="background:var(--card2);border-radius:12px;padding:14px;margin-bottom:12px;font-family:monospace;font-size:0.85rem;line-height:1.7">
        <div style="color:var(--accent2)"><strong>A:</strong> mar7abaaa 7abibe kifik?</div>
        <div style="color:var(--green)"><strong>B:</strong> ahla! mneha el7amdilla, w inti?</div>
        <div style="color:var(--accent2)"><strong>A:</strong> tmem 🙂 jeyye 3al 3azime el5amis?</div>
        <div style="color:var(--green)"><strong>B:</strong> akid! sho lezem jib?</div>
        <div style="color:var(--accent2)"><strong>A:</strong> wala shi 7abibti, bas talli 3a 3aini ❤️</div>
        <div style="color:var(--green)"><strong>B:</strong> ya 7biibi tislamile, bshufik el5amis inshallah</div>
        <div style="color:var(--accent2)"><strong>A:</strong> yallaa bay byee 😘</div>
      </div>
      ${gn('<strong>Notes for the example above:</strong> mar7abaaa = stretched mar7aba (warm), 7abibe / 7biibi = "dear" (sent constantly), 3azime = invitation/dinner, 5amis = خميس (Thursday), wala shi = nothing, talli 3a 3aini = "show up on my eye" (just be there), tislamile = bless you (compressed تسلملي), bshufik = I\'ll see you (f). The closing "yallaa bay byee" mixes Arabic + English + French = peak Lebanese.')}
    `; }
  },];
