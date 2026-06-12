// R894 — NEW FEATURE: Lebanese Card Games (crd) — Tarneeb, Basra, 31

const CRD_WORDS = [
  { ar: 'وَرَق', tr: 'wara2', en: 'playing cards' },
  { ar: 'تَرنيب', tr: 'tarneeb', en: 'Tarneeb (Lebanese trump card game)' },
  { ar: 'بَصرة', tr: 'basra', en: 'Basra (Lebanese fishing card game)' },
  { ar: 'تلاتين وواحد', tr: 'tletin wu wa7id', en: '31 (card game)' },
  { ar: 'شريك', tr: 'shareek', en: 'partner (in card game)' },
  { ar: 'فريق', tr: 'faree2', en: 'team / side' },
  { ar: 'كوبي', tr: 'kobi', en: 'trump suit' },
  { ar: 'اعلان', tr: 'i3lan', en: 'bid / declaration' },
  { ar: 'عملت', tr: '3melt', en: 'I bid / I declared' },
  { ar: 'اسّ', tr: 'ass', en: 'ace' },
  { ar: 'مَلِك', tr: 'malik', en: 'king' },
  { ar: 'بِنت', tr: 'bint', en: 'queen (lit. girl)' },
  { ar: 'صبي', tr: 'sabi', en: 'jack (lit. boy)' },
  { ar: 'كبشت', tr: 'kbasht', en: 'I captured / I took the trick' },
  { ar: 'دَبّيت', tr: 'dabbeit', en: 'I played a card (Basra: laid down)' },
  { ar: 'شُفت', tr: 'shuft', en: 'I revealed / I saw your card' },
  { ar: 'بَصرة بَصرة', tr: 'basra basra', en: 'basra on basra (double capture)' },
  { ar: 'مَدرَسة', tr: 'madrasi', en: 'school (pair of jacks in Basra)' },
  { ar: 'رِبِحنا', tr: 'rbe7na', en: 'we won' },
  { ar: 'خَسِرنا', tr: 'khsirna', en: 'we lost' },
  { ar: 'غَشّاش', tr: 'ghasshaash', en: 'cheater' },
  { ar: 'حَظّه كتير', tr: '7azz-o kteer', en: 'he\'s very lucky (lit. his luck is a lot)' },
  { ar: 'ما بِدّي ألعَب', tr: 'ma biddi El3ab', en: 'I don\'t want to play' },
  { ar: 'دَوري', tr: 'dawri', en: 'my turn' },
  { ar: 'لعبنا جولة', tr: 'la3bna jawle', en: 'we played a round' },
  { ar: 'اِقلّب الوَرَق', tr: 'i2lab el-wara2', en: 'flip the cards / deal' },
  { ar: 'خَلّطت', tr: 'khallaT-t', en: 'I shuffled' },
  { ar: 'وَزَّعت', tr: 'wazza3t', en: 'I dealt (the cards)' }
];

const CRD_DRILLS = [
  { q: 'How do you say "playing cards"?', a: 'wara2', hint: 'وَرَق' },
  { q: 'What is "tarneeb"?', a: 'Lebanese trump card game', hint: 'تَرنيب' },
  { q: 'What is "basra"?', a: 'Lebanese fishing card game', hint: 'بَصرة' },
  { q: 'How do you say "partner (in cards)"?', a: 'shareek', hint: 'شريك' },
  { q: 'What does "kobi" mean?', a: 'trump suit', hint: 'كوبي' },
  { q: 'How do you say "ace"?', a: 'ass', hint: 'اسّ' },
  { q: 'How do you say "king" in cards?', a: 'malik', hint: 'مَلِك' },
  { q: 'How do you say "queen" in Lebanese cards?', a: 'bint', hint: 'بِنت — lit. girl' },
  { q: 'How do you say "jack"?', a: 'sabi', hint: 'صبي — lit. boy' },
  { q: 'What does "kbasht" mean?', a: 'I captured the trick', hint: 'كبشت' },
  { q: 'How do you say "I shuffled (the cards)"?', a: 'khallaT-t', hint: 'خَلّطت' },
  { q: 'How do you say "I dealt the cards"?', a: 'wazza3t', hint: 'وَزَّعت' },
  { q: 'What is "basra basra"?', a: 'double capture in Basra', hint: 'بَصرة بَصرة' },
  { q: 'How do you say "we won"?', a: 'rbe7na', hint: 'رِبِحنا' },
  { q: 'How do you say "cheater"?', a: 'ghasshaash', hint: 'غَشّاش' },
  { q: 'How do you say "my turn"?', a: 'dawri', hint: 'دَوري' }
];

const CRD_TIPS = [
  { title: 'Tarneeb Basics', body: 'Tarneeb (تَرنيب) is Lebanon\'s most popular card game. Four players in two teams bid on how many tricks they\'ll win. The bidder chooses the trump suit (kobi). Common at cafés and family gatherings.' },
  { title: 'Basra', body: 'Basra (بَصرة) is a fishing card game. Players capture cards from the table. Capturing all table cards at once is a "basra." Jacks can capture any card — pairs of jacks are "madrasi" (school).' },
  { title: 'Queens & Jacks in Lebanese Cards', body: 'Lebanese players call the queen "bint" (girl) and the jack "sabi" (boy). You\'ll hear "bint el kobi" (trump queen) or "sabi el kobi" (trump jack) during a heated Tarneeb round.' },
  { title: 'Café Card Culture', body: 'Lebanese cafés (ahweh) are the home of card games. Men gather over argileh and coffee for hours of Tarneeb. The banter, accusations of cheating (ghasshaash!), and loud arguments are part of the experience.' },
  { title: 'Dealing & Shuffling', body: 'Before dealing, someone shuffles (khallaT) and another cuts the deck. To deal you say "wazza3" — distribute. The player to the right of the dealer usually bids first in Tarneeb.' }
];
