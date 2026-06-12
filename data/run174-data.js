// Run #174 NEW FEATURE: Verb Conjugation Browser (prefix: vcb)
// Browsable reference for all CONJ_VERBS with full present/past tables.
// 3 tabs: Browse (verb grid → full table) / Patterns (morphology notes) / Tips.

const VCB_CATS = [
  {
    id: 'sound',
    label: 'Sound Verbs',
    desc: 'Regular three-root verbs — no weak letters, no doubling.',
    verbIds: ['3ref','shaf','shreb','kel','fhm','dars','la2a','sa2al','fata7','de77ak'],
  },
  {
    id: 'doubled',
    label: 'Doubled Verbs',
    desc: 'Second and third root letters identical (e.g. 7abb, baka). Geminate in some forms.',
    verbIds: ['7ebb','habb','baka','de77ak'],
  },
  {
    id: 'hollow',
    label: 'Hollow Verbs',
    desc: 'Weak middle root letter (و or ي). Vowel changes in past/present.',
    verbIds: ['ruh','shaf','nem','qra','3esh','bedd','nzal','tele3','wqef'],
  },
  {
    id: 'defective',
    label: 'Defective Verbs',
    desc: 'Weak final root letter (و or ي). Ends in vowel, changes in suffixed forms.',
    verbIds: ['7ki','qra','meshi','ishtera','la2a','baka','fakkar'],
  },
  {
    id: 'borrowed',
    label: 'Borrowed / Form V-X',
    desc: 'Loanwords adapted to Arabic patterns, or derived forms with prefix تـ / اتـ.',
    verbIds: ['eshtaghal','itfara3','ishtera','wussel'],
  },
];

const VCB_PATTERNS = [
  {
    id: 'present_prefix',
    title: 'Present Tense: b- prefix',
    body: 'Lebanese present uses a <b>b-</b> prefix (not shared by MSA). "Ana b-ruh" = I go. The b- merges: b+t → bti- for inta/inti, b+n → mni- for n7na. Past tense has NO prefix — just suffix changes.',
    example_ar: 'بروح / برحت',
    example_tr: 'b-ruh / ru7t',
    example_en: 'I go / I went',
  },
  {
    id: 'past_suffixes',
    title: 'Past Suffixes (all verbs)',
    body: 'Past suffix pattern: <b>ana → -t</b>, inta → -t, inti → -ti, howe → Ø (bare stem), hiye → -et, n7na → -na, intu → -tu, hinnen → -u. The howe/hiye distinction is in the vowel of the stem, not the suffix.',
    example_ar: 'رحت / رحتي / راح / راحت / رحنا',
    example_tr: 'ru7t / ru7ti / ra7 / ra7et / ru7na',
    example_en: 'I/you-m went / you-f went / he went / she went / we went',
  },
  {
    id: 'hollow_change',
    title: 'Hollow Verbs: vowel alternation',
    body: 'Hollow verbs (weak middle root) show a long vowel in 3rd-person singular past (howe/hiye) but a short vowel with suffixes. E.g. <b>ra7 → ru7t</b> (go), <b>nam → nimt</b> (sleep), <b>shar → shert</b> (work/buy). The vowel "collapses" when a suffix attaches.',
    example_ar: 'نام / نمت / تلع / طلعت',
    example_tr: 'nam / nimt / tele3 / tele3t',
    example_en: 'he slept / I slept / he went up / I went up',
  },
  {
    id: 'form_ii',
    title: 'Form II Verbs: -a- infix or doubled',
    body: 'Lebanese Form II (intensive/causative) doubles the middle root consonant: <b>de77ak</b> (make laugh, from d7k), <b>fakkar</b> (think, from fkr), <b>wussel</b> (deliver, from wsl). Present: b-de77ik / b-fakker / b-wassel. Past: de77ak / fakkar / wussel.',
    example_ar: 'فكّر / بفكّر',
    example_tr: 'fakkar / b-fakker',
    example_en: 'he thought / he thinks',
  },
  {
    id: 'reflex_prefix',
    title: 'Reflexive/Passive: 2it- prefix',
    body: 'Lebanese reflexive/passive uses <b>2it-</b> prefix (Form VII/VIII/X analogue). E.g. <b>2itfarra3</b> (to branch off/split), <b>2ishtara</b> (to buy — borrowed). Present tense drops the 2i-: b-tfarra3, b-shtari.',
    example_ar: 'اتفرّع / بتفرّع',
    example_tr: '2itfarra3 / b-tfarra3',
    example_en: 'he branched off / he branches off',
  },
  {
    id: 'negation',
    title: 'Negation: bare ma (no -sh)',
    body: 'Lebanese verb negation uses bare <b>ma</b> before the verb. "Ma broo7" = I don\'t go. "Ma ru7t" = I didn\'t go. The ma...sh wrap (with -sh) is Egyptian/southern-rural, not Beirut/Mount-Lebanon Lebanese.',
    example_ar: 'ما بروح / ما رحت',
    example_tr: 'ma broo7 / ma ru7t',
    example_en: 'I don\'t go / I didn\'t go',
  },
];

const VCB_TIPS = [
  'Learn <b>ruh (go)</b> and <b>eje (come)</b> first — they\'re the two most irregular but most-used motion verbs. "Ruh" has a hollow root; "eje" is suppletive (different roots in present vs past).',
  'The <b>b- present prefix</b> is the single biggest difference from MSA. Drop it for imperatives, infinitives after modal verbs (lazem, biddi, fikk), and after "lamma" (when).',
  'Present <b>bti-</b> vs <b>bi-</b>: inta/inti use "bti-" (you go = btiruh), howe uses "bi-" (he goes = biruh). N7na uses "mni-" (mniruuh). Memorize these three prefix shapes first.',
  'For drilling: conjugate each new verb through all 8 pronouns out loud in one go — "biddak" before you move on. This trains the suffix pattern as a motor memory loop, not a lookup.',
  'Hollow verbs (nam/nim, ra7/ruh, tele3/tele3) feel inconsistent but follow one rule: <b>long vowel in bare forms, short vowel before suffixes</b>. Once you see the pattern it clicks for all hollow verbs.',
];

const VCB_ABOUT = 'Verb Browser covers all 40 conjugation-table verbs in Lebanese Arabic. Browse tab: pick any verb to see its full present and past table across all 8 Lebanese pronouns. Patterns tab: six morphological pattern notes explaining b- prefix, past suffixes, hollow vowel alternation, Form II doubling, reflexive 2it- prefix, and negation wrap. Tips tab: five learning strategies for internalizing Lebanese verb conjugation.';
