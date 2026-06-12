// Run #312 — Lebanese Slang & Street Expressions Coach (slg)
// Colloquial fillers, expressive particles, street speech, Lebanese-specific expressions — 40 items, MCQ drill, 5 tips

const SLE_WORDS = [
  // expressive fillers & particles
  { tr: 'yalla',           ar: 'يلا',             en: 'let\'s go / come on / hurry up / OK',  cat: 'fillers' },
  { tr: 'walla',           ar: 'والله',            en: 'I swear to God / really / honestly',   cat: 'fillers' },
  { tr: 'la2 walla',       ar: 'لا والله',         en: 'no honestly / no way (emphatic)',       cat: 'fillers' },
  { tr: '7abibi / 7abibti', ar: 'حبيبي / حبيبتي',  en: 'my love / darling (m/f) — used casually', cat: 'fillers' },
  { tr: 'shi',             ar: 'شي',              en: 'something / a thing / "like" filler',   cat: 'fillers' },
  { tr: 'mish shi',        ar: 'مش شي',           en: 'it\'s nothing / no big deal',           cat: 'fillers' },
  { tr: 'hek',             ar: 'هيك',             en: 'like this / so / that\'s how it is',    cat: 'fillers' },
  { tr: 'nkun',            ar: 'نكون',            en: '"like" filler (storytelling — "I was like")', cat: 'fillers' },
  // reactions & interjections
  { tr: 'walaw',           ar: 'ولو',             en: 'no way! / get out! / you must be kidding', cat: 'reactions' },
  { tr: 'ya3',             ar: 'يع',              en: 'ugh / gross / yuck',                    cat: 'reactions' },
  { tr: 'uff',             ar: 'أف',              en: 'ugh / exasperation / frustration',      cat: 'reactions' },
  { tr: 'ay!',             ar: 'آي',              en: 'ouch! / oh! (mild pain/surprise)',       cat: 'reactions' },
  { tr: 'ya haram',        ar: 'يا حرام',         en: 'oh shame! / poor thing / how sad',      cat: 'reactions' },
  { tr: 'ya 3alam',        ar: 'يا عالم',         en: 'oh world! / oh people! (exclamation)',  cat: 'reactions' },
  { tr: 'mashallah',       ar: 'ما شاء الله',      en: 'God has willed it (admiration/protection)', cat: 'reactions' },
  { tr: 'inshallah',       ar: 'إن شاء الله',      en: 'God willing (yes, maybe, or polite no)', cat: 'reactions' },
  // approval & dismissal
  { tr: 'mnii7 ktir',      ar: 'منيح كتير',       en: 'very good / great',                     cat: 'approval' },
  { tr: '3al-aakhir',      ar: 'عالآخر',          en: 'to the max / awesome / excellent',      cat: 'approval' },
  { tr: 'maazing / 3azeeme', ar: 'عظيمة',         en: 'amazing (3azeeme lit. great)',          cat: 'approval' },
  { tr: 'tabb w rabb',     ar: 'تب ورب',          en: 'let it go / drop it / forget it',       cat: 'approval' },
  { tr: 'khalliik',        ar: 'خليّك',           en: 'stay / let yourself be / just be',      cat: 'approval' },
  { tr: 'ma khallii',      ar: 'ما خلّي',         en: 'didn\'t leave / didn\'t spare (anything)', cat: 'approval' },
  // Lebanese-specific expressions
  { tr: 'shi maazing',     ar: 'شي مميز',         en: 'something special / amazing',           cat: 'expressions' },
  { tr: 'bi-l-wa2t l-DaaT', ar: 'بالوقت الضايع',  en: 'waste of time',                         cat: 'expressions' },
  { tr: '3ala raasTak',    ar: 'على راسك',        en: 'on your head = your problem / up to you', cat: 'expressions' },
  { tr: 'wshi-lak',        ar: 'وشيلك',           en: 'mind your own business (lit. carry your face)', cat: 'expressions' },
  { tr: 'roo7 naaaam',     ar: 'روح نام',         en: 'go to sleep (dismissal) / get lost',    cat: 'expressions' },
  { tr: '7asabe',          ar: 'حسبه',            en: 'leave it / forget it / let it be',       cat: 'expressions' },
  // intensifiers & degree
  { tr: 'ktir',            ar: 'كتير',            en: 'very / a lot / too much',               cat: 'intensifiers' },
  { tr: 'shi ktir',        ar: 'شي كتير',         en: 'so much / way too much',                cat: 'intensifiers' },
  { tr: 'ma 2illo teni',   ar: 'ما إلو تاني',     en: 'there\'s no second / one of a kind / top notch', cat: 'intensifiers' },
  { tr: 'fir2a k-sama',    ar: 'فرقة كالسما',     en: 'difference like the sky (enormous difference)', cat: 'intensifiers' },
  { tr: '3ala tool',       ar: 'على طول',         en: 'straight / right away / immediately',   cat: 'intensifiers' },
  { tr: 'bass',            ar: 'بس',              en: 'enough / just / but / stop',            cat: 'intensifiers' },
  // street & youth slang
  { tr: 'shu l-khabar',    ar: 'شو الخبر',        en: 'what\'s up / what\'s the news',         cat: 'slang' },
  { tr: 'kher inshallah',  ar: 'خير إنشاء الله',  en: 'everything OK? (reply to odd question)', cat: 'slang' },
  { tr: 'shi balashe',     ar: 'شي بلاش',         en: 'something free / a good deal / nice thing', cat: 'slang' },
  { tr: 'nfar',            ar: 'نفر',             en: 'guy / dude / person (casual)',          cat: 'slang' },
  { tr: 'mish la2ii',      ar: 'مش لاقي',         en: 'not finding it / can\'t get it / broke', cat: 'slang' },
  { tr: 'haydaa huwwe',    ar: 'هيدا هو',         en: 'that\'s it / that\'s the one / exactly', cat: 'slang' },
];

const SLE_DRILLS = [
  {
    q: 'What are the multiple meanings of "yalla" in Lebanese Arabic?',
    opts: ['only means "hurry up"', 'let\'s go / come on / hurry / OK / goodbye', 'only used as a greeting', 'means "thank you" in slang'],
    correct: 1,
    note: '"yalla" = يلا — the most versatile Lebanese word. Meanings by context: (1) "yalla, bina!" = let\'s go! (2) "yalla, bi-sur3a" = come on, quickly! (3) "yalla, mabsooT?" = OK, happy? (checking in) (4) "yalla bye" = OK bye (ending a call — distinctly Lebanese). Lebanese yalla speed rating: "yalla" single = gentle. "yalla yalla" = more urgent. "YALLA!" = emergency. The speed and repetition communicate urgency. "Yalla 3al-aakil" = let\'s eat (dinner call). "yalla nrooH" = let\'s go. Lebanese parents calling kids: "yalla!" minimum 3 times with increasing volume before action.'
  },
  {
    q: 'What does "walaw" express in Lebanese street speech?',
    opts: ['I\'m tired', 'no way! / get out! / you must be kidding', 'let\'s go together', 'I\'m hungry'],
    correct: 1,
    note: '"walaw" = ولو — pure Lebanese expression of disbelief/shock. "walaw!" alone = no way! unbelievable! "shu ya walaw" = what no way? "walaw, shi byinDaHak" = no way, that\'s hilarious. The word is uniquely Lebanese — Syrians and Palestinians use it too but Lebanese usage is most expressive. Tone matters: soft "walaw" = mild surprise. Explosive "WALAW!" = genuine shock. "walaw 3alaik" = come on (gentle reproach). Lebanese humor: walaw is often the punchline response to an outrageous story. The famous Lebanese hand gesture (flicking fingers outward under chin) often accompanies "walaw."'
  },
  {
    q: 'What does "walla" mean and how is it used?',
    opts: ['it means "and" in Lebanese', 'I swear to God / really / honestly (emphasis)', 'a greeting between friends', 'means "please" formally'],
    correct: 1,
    note: '"walla" = والله — from "wa Allahi" (by God). Lebanese uses: (1) "walla ma 3arefet" = I honestly didn\'t know. (2) "walla ktir mni7" = honestly very good. (3) "walla?" = really? is that true? (4) "walla walla" = absolutely, no question. Lebanese emphasis culture: adding "walla" makes any statement 3x more credible. "walla ma biddi" = I genuinely don\'t want it (stronger refusal). "la2 walla" = definitely no (strongest refusal). Combination: "walla yall" = let\'s really go. Frequency: Lebanese people say "walla" approximately every 90 seconds in conversation.'
  },
  {
    q: 'What does "ya haram" express in Lebanese Arabic?',
    opts: ['that\'s forbidden in Islam', 'oh shame / poor thing / how sad / aww', 'a strong curse', 'I\'m very tired'],
    correct: 1,
    note: '"ya haram" = يا حرام — from "Haram" (forbidden/shame). Lebanese usage: sympathy/pity, not religious ruling. "ya haram, shi Saayir?" = oh poor thing, what happened? "ya haram 3aleo" = poor him (sympathetic). "ya haram l-walad" = the poor child (aww). Can be sarcastic: "ya haram! ma 7adan 2alo!" = oh poor thing! nobody told him! (mocking tone). Lebanese emotional expression: "ya haram" is the go-to sympathy phrase. Physical comfort follows — touching the arm, clicking tongue. "ya 7araaam" (elongated) = deep sympathy/shock. Often used with children who hurt themselves: "ya haram, tayye" (poor thing, come here).'
  },
  {
    q: 'When Lebanese say "inshallah" to a request, what might it actually mean?',
    opts: ['always means definite yes', 'yes / maybe / probably not — context-dependent (God willing)', 'only used in religious contexts', 'means "I don\'t care"'],
    correct: 1,
    note: '"inshallah" = إن شاء الله — God willing. Lebanese range of meaning: (1) Sincere: "inshallah btiji l-7afel" = God willing you\'ll come to the event (real hope). (2) Polite maybe: "btiji?" "inshallah..." = will you come? Inshallah (= probably not). (3) Polite no: "mish ta2akked?" "inshallah" = not sure? Inshallah (= no). (4) Deflection: "emta btkhallas?" "inshallah" = when will you finish? Inshallah (= unknown, stop asking). (5) Gentle threat: "inshallah trooH" = God willing you go (= get out). Lebanese inshallah decoder: the longer the pause before "inshallah," the less likely it is to happen.'
  },
  {
    q: 'What does "3ala tool" mean in Lebanese daily speech?',
    opts: ['on the long road', 'straight / right away / immediately / without delay', 'very tall person', 'turn left'],
    correct: 1,
    note: '"3ala tool" = على طول — literally "on the length/straight." Means: immediately, right away, straight ahead, or always (depending on context). (1) Direction: "rooH 3ala tool" = go straight. (2) Time: "raa7 3ala tool" = he left right away/immediately. (3) Frequency: "bi3mel hek 3ala tool" = he always does this. Lebanese time culture: "3ala tool" as "immediately" often means "within the next 30 minutes." "Halaa" (now) = also variable. Lebanese concept of time: ASAP = within the hour; tool = soon; bekra = tomorrow/someday. "rooH 3ala tool w irja3 3ala tool" = go straight and come back right away.'
  },
  {
    q: 'What does "bass" mean in Lebanese Arabic?',
    opts: ['only means "enough"', 'enough / just / but / stop — highly context-dependent', 'a type of fish only', 'very good'],
    correct: 1,
    note: '"bass" = بس — most versatile Lebanese word alongside "yalla." Meanings: (1) "bass!" = enough! stop! (2) "bass biddi..." = I just want... (3) "bass ma raaH" = but he didn\'t go. (4) "bass ktir" = just a lot (paradox of too much). (5) "bass hek" = just like that / that\'s all. Lebanese "bass" usage: ending stories = "w bass" (and that\'s it). Cutting off: "bass!" = stop talking. Minimizing: "bass shi bsiit" = just a small thing. "bas ktir tayyib" = but it\'s very good. Doubled: "bass bass" = OK OK, enough enough (calming someone down). Lebanese kids learn "bass" before they learn to walk.'
  },
  {
    q: 'What does "shu l-khabar" mean as a Lebanese greeting?',
    opts: ['what happened? (emergency)', 'what\'s up / what\'s the news (casual greeting)', 'read the newspaper', 'what do you want to eat?'],
    correct: 1,
    note: '"shu l-khabar" = شو الخبر — literally "what\'s the news?" Used as a casual greeting = "what\'s up?" "shu khabarik?" = what\'s up with you? (fem). "khabaraak?" = what\'s up? (masc shortening). Response options: "3ala khair" (fine), "kheir" (good), "mabsooT" (happy/good), "shi ktir mni7" (really good). Lebanese greeting culture: full greeting ritual before any business. "kifak? wll-7amdella. shu l-khabar? l-7amdella. kif l-3eele? l-7amdella. kif l-osra? 3ala khair." Skipping the greeting is rude — like going to a Lebanese home and not accepting coffee.'
  },
  {
    q: 'What does "ktir" mean in Lebanese Arabic?',
    opts: ['a little bit', 'very / a lot / too much (degree intensifier)', 'never / not at all', 'sometimes'],
    correct: 1,
    note: '"ktir" = كتير — Lebanese Arabic for "very" / "a lot" / "too much." From Classical Arabic "kathir" (much/many). Usage: (1) "ktir mni7" = very good. (2) "ktir t3aben" = very tired. (3) "ktir bhibba" = I love him/her a lot. (4) "ktir ktir" = very very much. (5) "ktir 3azeemtak" = you\'re too generous. Lebanese intensifier stacking: "ktir ktir mni7 ktir" = extremely very good (emotional emphasis). "ktir aHla" = much prettier/nicer. "mish ktir" = not much / not really. "ktir 3ata" = he gave a lot. Frequency: Lebanese conversations rarely go 30 seconds without "ktir." It\'s the most common intensifier, replacing MSA "jiddan."'
  },
  {
    q: 'What does "mashallah" express in Lebanese culture?',
    opts: ['a curse', 'God has willed it — admiration + protection against evil eye', 'I\'m surprised negatively', 'a farewell phrase'],
    correct: 1,
    note: '"mashallah" = ما شاء الله — "what God has willed." Lebanese uses: (1) Admiration: "mashallah, shu Hilwa!" = mashallah, how beautiful! (2) Protection from evil eye (3ayn): saying it when complimenting protects the praised person. (3) Surprise + approval: "mashallah, tfaDDal!" = mashallah, come in! (4) Sarcasm: "mashallah 3aleik" (emphasizing someone\'s audacity). Lebanese 3ayn (evil eye) culture: failing to say "mashallah" when admiring something is socially irresponsible — you might give someone the evil eye. Lebanese blue beads (kharzeh) and hamsa hands are physical protections. "la fi 3ain? 2ul mashallah!" = no evil eye? say mashallah!'
  },
];

const SLE_TIPS = [
  { title: 'The Lebanese filler system — yalla, bass, walla, hek', body: '"yalla," "bass," "walla," and "hek" are the backbone of Lebanese conversational flow. "yalla" = movement/urgency (let\'s go, hurry, OK). "bass" = boundary/limit (enough, just, but). "walla" = authenticity/emphasis (honestly, I swear). "hek" = pointing/demonstrating (like this, so, that\'s how). Master these four words and you\'ll sound dramatically more natural. Compound use: "yalla bass" = OK enough, let\'s move on. "walla hek" = honestly it\'s like this. "bass walla ma biddi" = but honestly I don\'t want it. These four words appear in almost every Lebanese sentence — they\'re the connective tissue of the dialect.' },
  { title: 'Lebanese emotional expression — walaw, ya haram, 3ala tool', body: 'Lebanese Arabic is intensely expressive. "walaw" (no way/you\'re kidding) expresses disbelief and shock — the louder, the stronger. "ya haram" expresses sympathy, pity, or mock-pity depending on tone. "mashallah" protects against the evil eye while expressing admiration. "inshallah" navigates uncertainty, commitment, and polite refusal simultaneously. Lebanese emotional vocabulary: "mabsooT/a" (happy), "za3laan/a" (upset), "tiib/tayyibe" (kind/sweet), "khebbe" (love, precious thing). Emotional directness: Lebanese people will tell you to your face if something is good or bad. "ktir 3ajabni" = I really liked it. "mish ktir" = not really (honest but gentle).' },
  { title: '"Inshallah" — the world\'s most flexible word', body: '"Inshallah" is the Lebanese/Arab communication Swiss Army knife. Literal meaning: God willing. Actual meanings by context: (1) Definite yes: "btiji l-3aze?" "inshallah!" = will you come to the wedding? God willing (yes!). (2) Polite maybe: "tiji ma3na?" "inshallah..." (slow) = come with us? Inshallah (= maybe, don\'t count on it). (3) Polite no: any question + "inshallah" + silence = no. (4) Cutting off: repeated "inshallah, inshallah" = I heard you, stop asking. (5) Gentle wish: "inshallah t3allim" = God willing you learn. Pro tip: "inshallah bekra" (God willing tomorrow) = 70% chance it\'s not tomorrow.' },
  { title: 'Lebanese time and urgency words', body: 'Lebanese time expressions are precise in intention, flexible in practice: "3ala tool" (immediately/straight) = within the hour. "halaa" (now) = soon. "haloo" (hello, same pronunciation, different meaning) confusion is common for learners! "ma3 l-wa2t" = with time (eventually). "ma2daan" (fixed time) = specific appointment. "ba3d shi" = after something = later. Urgency: "yalla, bi-sur3a!" = hurry, quickly! "fawran" = right away (formal). "ta3a 3ala tool" = come immediately. Lebanese meetings: "3innak sa3a tnte3sh?" = at 12? = actually 12:30-1pm. Social gatherings: "taji l-7aad bi-s-sab3a?" = 7pm Sunday? = arrive 8:30pm. Always add 1-1.5 hours to Lebanese social time estimates.' },
  { title: 'Reading the room — ktir, mish, bass register', body: '"ktir mni7" (very good) can mean excellent or "fine I guess" depending on tone. "mish ktir" = not very/not really — polite Lebanese understatement. "bass" as qualifier softens: "mni7, bass..." = good, but... (here comes the criticism). Lebanese directness vs. politeness: the language has elegant softeners. "shi maa2il" = something acceptable (= just OK). "mish baayin" = not showing/not obvious (= you can\'t tell, politely). "inno shi" = it\'s something (= it exists, not great not terrible). Lebanese compliment scale: "mni7" < "ktir mni7" < "3al-aakhir" < "ma 2illo teni" < "maazing walla." Master the gradations and you\'ll navigate social feedback naturally.' },
];

const SLE_ABOUT = 'Master Lebanese Arabic street expressions, colloquial fillers, and everyday slang — the authentic language of daily Lebanese life beyond textbooks. From the all-purpose "yalla" and "bass" to the expressive "walaw" and "ya haram," these expressions are what make Lebanese Arabic feel alive, natural, and culturally connected.';
