// Run #21 — Prepositions, Sentence Stress, Imperative+Object
// Prefixes: pr-, si-, io-

// ============ PREPOSITIONS ============
const PREPS = [
  { tr: 'fi',    ar: 'في',   en: 'in / inside / there is/are', use: 'Location inside; existential ("there is")', ex: 'fi may bil kez = there\u2019s water in the glass' },
  { tr: '3a',    ar: 'ع',    en: 'on / at / to', use: 'Surface contact, direction toward, "at"', ex: 'el ktab 3al Tawle = the book is on the table' },
  { tr: 'min',   ar: 'من',   en: 'from / of', use: 'Origin, source, partitive', ex: 'ana min Beirut = I am from Beirut' },
  { tr: 'la',    ar: 'لـ',   en: 'to / for / belonging to', use: 'Recipient, possession, dative', ex: 'hayda la Karim = this is for Karim' },
  { tr: 'ma3',   ar: 'مع',   en: 'with', use: 'Accompaniment ("with someone")', ex: 'jit ma3 ekhti = I came with my sister' },
  { tr: '3and',  ar: 'عند',  en: 'at [someone\u2019s] / has', use: 'Possession ("has") + at someone\u2019s place', ex: '3andi ktab = I have a book' },
  { tr: 'bi',    ar: 'بـ',   en: 'with / by means of', use: 'Instrument or means', ex: 'ktebt bi 2alam = I wrote with a pen' },
  { tr: 'ila',   ar: 'إلى',  en: 'to / toward (formal)', use: 'Formal "to" — used in writing more', ex: 'rou7 ila el matar = go to the airport' },
  { tr: '3an',   ar: 'عن',   en: 'about / from', use: '"About" a topic, source of news', ex: 'sma3et 3an el khabar = I heard about the news' },
  { tr: 'ben',   ar: 'بين',  en: 'between / among', use: 'Location between two points/people', ex: 'ben el bab w el shibbek = between door and window' },
  { tr: 'taht',  ar: 'تحت',  en: 'under / beneath', use: 'Below position', ex: 'taht el Tawle = under the table' },
  { tr: 'fou2',  ar: 'فوق',  en: 'above / over / on top', use: 'Above position', ex: 'fou2 el khazneh = above the cabinet' },
  { tr: '2eddem',ar: 'قدّام', en: 'in front of', use: 'Frontal position', ex: '2eddem el bait = in front of the house' },
  { tr: 'wara',  ar: 'وراء',  en: 'behind', use: 'Back position', ex: 'wara el bab = behind the door' },
  { tr: 'janb',  ar: 'جنب',   en: 'next to / beside', use: 'Adjacent position', ex: 'janbi = next to me' },
  { tr: 'b dakhel',ar:'بداخل', en: 'inside (emphatic)', use: 'Stronger "inside"', ex: 'b dakhel el ghorfe = inside the room' }
];

// Verb-preposition collocations — these matter because the prep often differs from English
const VERB_PREPS = [
  { verb: 'fakkar (think)',         prep: 'b/fi',  ex: 'fakkar fi = think about' },
  { verb: 'da7ak (laugh)',          prep: '3ala',  ex: 'da7ak 3ala = laugh AT' },
  { verb: 'sa2al (ask)',            prep: '3an',   ex: 'sa2al 3an = ask ABOUT' },
  { verb: 'ka7ak (depend)',         prep: '3ala',  ex: 'b3atmid 3ala = I depend ON' },
  { verb: 'tkhaSSaS (specialize)',  prep: 'b/fi',  ex: 'tkhaSSaS bi = specialize IN' },
  { verb: 'tzawwaj (marry)',        prep: 'min',   ex: 'tzawwaj min = married TO (lit: from)' },
  { verb: 'sma3 (hear)',            prep: '3an',   ex: 'sma3 3an = heard ABOUT' },
  { verb: 'el7a2 (catch up to)',    prep: 'ma3',   ex: 'el7a2 ma3 = catch up WITH' },
  { verb: 'eshtara (buy)',          prep: 'min',   ex: 'eshtarayt men = bought FROM' },
  { verb: '3aTa (give)',            prep: 'la',    ex: '3aTa la = gave TO' },
  { verb: 'sa3ad (help)',           prep: '(none)',ex: 'sa3adto = I helped him (direct obj, no prep)' },
  { verb: 'da3a (invite)',          prep: '3a/la', ex: 'da3eito 3al beit = invited him TO the house' }
];

const PR_DRILL = [
  { sent: 'el ktab ___ el Tawle', en: 'the book is on the table', opts: ['fi','3a','min','la'], correct: 1 },
  { sent: 'jit ___ ekhti', en: 'I came with my sister', opts: ['ma3','min','la','3an'], correct: 0 },
  { sent: 'ana ___ Beirut', en: 'I am from Beirut', opts: ['fi','la','min','ma3'], correct: 2 },
  { sent: '3andi hadyye ___ ekhtak', en: 'I have a gift for your sister', opts: ['min','la','3a','fi'], correct: 1 },
  { sent: 'sa2alto ___ el ma3rad', en: 'I asked him about the exhibit', opts: ['3a','min','3an','la'], correct: 2 },
  { sent: 'ana mabsout ___ el natije', en: 'I\u2019m happy with the result', opts: ['min','3a','fi','b/bi'], correct: 0 },
  { sent: 'tkhaSSaSet ___ el handase', en: 'I specialized in engineering', opts: ['min','b/bi','la','ma3'], correct: 1 },
  { sent: 'taht el ___', en: 'under the [table]', opts: ['Tawle','3a','min','la'], correct: 0 },
  { sent: 'da7ak ___ el nokte', en: 'he laughed at the joke', opts: ['fi','min','3ala','la'], correct: 2 },
  { sent: 'eshtarayt ___ el sou2', en: 'I bought from the market', opts: ['fi','3a','la','min'], correct: 3 }
];

// ============ SENTENCE STRESS & INTONATION ============
const STRESS_RULES = [
  { rule: 'Stress on long vowel (a/aa/ee/oo)', ex: 'kateB / katIIb / katAAtib', tip: 'Long vowels nearly always carry the stress.' },
  { rule: 'Stress on syllable with 2 consonants in coda', ex: 'mar7aBA, makTAB', tip: 'CVC pattern attracts stress.' },
  { rule: 'Otherwise: stress 2nd-to-last syllable (penult)', ex: 'KA-tab, MA-da-ras', tip: 'Default fallback for short-vowel words.' },
  { rule: 'Yes/no questions: rising intonation at end', ex: '3andak wa2et? ↗', tip: 'Voice goes UP on the last word.' },
  { rule: 'Wh-questions (shu/wein/lesh): falling intonation', ex: 'shu sar? ↘', tip: 'Voice goes DOWN like English wh-questions.' },
  { rule: 'Contrast/emphasis: stress shifts to contrasted word', ex: 'ANA jit (I came, not him)', tip: 'Move stress for emphasis.' },
  { rule: 'Lists: rising on each item except last', ex: 'akalt fattoush↗ tabbouleh↗ w hommos↘', tip: 'Voice rises on each list item, falls on the last.' }
];

const SI_DRILL = [
  { sent: 'kif el 7al?', q: 'What kind of intonation?', opts: ['Rising (yes/no question)','Falling (statement)','Falling (wh-question)','Flat'], correct: 2, why: 'kif = wh-word → falling intonation' },
  { sent: '3andak wa2et?', q: 'What kind of intonation?', opts: ['Rising (yes/no)','Falling (wh)','Flat','Stressed-final'], correct: 0, why: 'No wh-word → yes/no → rising' },
  { sent: 'kateb', q: 'Where does stress fall? (kateb = he wrote)', opts: ['ka-TEB','KA-teb','equally','last sound'], correct: 1, why: 'Default penult stress on short-vowel verbs' },
  { sent: 'katiib', q: 'Where does stress fall? (kateeb = writer)', opts: ['ka-TIIB','KA-tiib','equal','no stress'], correct: 0, why: 'Long vowel ii attracts stress' },
  { sent: 'akalt fattoush w hommos', q: 'How does intonation flow on a list?', opts: ['All falling','All rising','Rising on items, falling on last','Flat'], correct: 2, why: 'List: rise per item, fall final' },
  { sent: 'ANA jit, mish howe', q: 'Why is ANA stressed?', opts: ['Random','Contrast/emphasis','Long vowel','Penult rule'], correct: 1, why: 'Contrast w/ "not him" shifts stress to ANA' }
];

// ============ IMPERATIVE + OBJECT PRONOUN ============
// Pattern: command + attached suffix (-ni / -o / -a / -na / -hon)
const IO_VERBS = [
  { en: 'tell me',           lb: '2elli',     ar: 'قللي',     base: '2el (tell)',   suf: '-i (me)' },
  { en: 'give it (to me)',   lb: '3Tini',     ar: 'عطيني',    base: '3Ti (give)',   suf: '-ni (me)' },
  { en: 'help me',           lb: 'sa3edni',   ar: 'ساعدني',   base: 'sa3ed (help)', suf: '-ni (me)' },
  { en: 'wait for me',       lb: 'staNNeni',  ar: 'ستنّيني',  base: 'staNNe (wait)',suf: '-ni (me)' },
  { en: 'forgive me',        lb: 'sema7li',   ar: 'سمحلي',    base: 'sma7 (forgive)+l-i', suf: '-li (to me)' },
  { en: 'leave me alone',    lb: 'khallini',  ar: 'خلّيني',   base: 'khalli (leave)',suf: '-ni (me)' },
  { en: 'take it (m)',       lb: 'khodo',     ar: 'خدو',      base: 'khod (take)',  suf: '-o (it/him)' },
  { en: 'take it (f)',       lb: 'khoda',     ar: 'خدا',      base: 'khod (take)',  suf: '-a (it/her)' },
  { en: 'put it here',       lb: 'huTTo hon', ar: 'حطّو هون', base: 'huT (put)',    suf: '-o + adverb' },
  { en: 'show me',           lb: 'farjini',   ar: 'فرجيني',   base: 'farje (show)', suf: '-ni' },
  { en: 'send it to him',    lb: 'b3atlo yya','ar': 'بعتلو يّاه', base: 'b3at (send)+ l-o + yya', suf: '+l-o + yya (it to him)' },
  { en: 'open it',           lb: 'fta7o',     ar: 'فتحو',     base: 'fta7 (open)',  suf: '-o' },
  { en: 'close it',          lb: 'sekkro',    ar: 'سكّرو',    base: 'sekkir (close)',suf: '-o' },
  { en: 'try it',            lb: 'jarrbo',    ar: 'جرّبو',    base: 'jarreb (try)', suf: '-o' },
  { en: 'come to me',        lb: 'ta3a la-3ndi', ar: 'تعا لعندي', base: 'ta3a (come) + la-3and-i', suf: 'compound' },
  { en: 'follow me',         lb: 'tba3ni',    ar: 'تبعني',    base: 'tba3 (follow)',suf: '-ni' }
];

const IO_DRILL = [
  { en: 'tell me!', opts: ['2elli','2elo','2elna','2elhon'], correct: 0 },
  { en: 'give it (m) to me', opts: ['3Tini','3Tini yyeh','khodo','sa3edni'], correct: 1 },
  { en: 'help me!', opts: ['khallini','sa3edni','sa3edo','staNNeni'], correct: 1 },
  { en: 'leave me alone', opts: ['khallini','khallini bi 7ali','khalliha','tba3ni'], correct: 1 },
  { en: 'open it (m)', opts: ['fta7o','fta7a','sekkro','khodo'], correct: 0 },
  { en: 'close it (f)', opts: ['sekkra','sekkro','fta7a','sekkri'], correct: 0 },
  { en: 'wait for me', opts: ['staNNeni','staNN','sa3edni','farjini'], correct: 0 },
  { en: 'show me', opts: ['farjini','sa3edni','3Tini','jarrbo'], correct: 0 },
  { en: 'follow me', opts: ['tba3ni','tba3o','ta3a','khallini'], correct: 0 },
  { en: 'try it (m)', opts: ['jarrbo','jarrba','3Tini','khodo'], correct: 0 }
];
