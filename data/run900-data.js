// R900 — NEW FEATURE: Lebanese Neighborhood Shop & Dukkan Culture (dkn)

const DKN_WORDS = [
  { ar: 'دُكّان', tr: 'dukkaan', en: 'corner shop / neighborhood store' },
  { ar: 'بَقّال', tr: 'ba22aal', en: 'grocer / corner shop owner' },
  { ar: 'جزّار', tr: 'jazzaar', en: 'butcher' },
  { ar: 'خبّاز', tr: 'khabbaaZ', en: 'baker / bread vendor' },
  { ar: 'فرن', tr: 'furn', en: 'bakery / oven (neighborhood)' },
  { ar: 'حلّاق', tr: '7alaa2', en: 'barber / hairdresser' },
  { ar: 'صيدلية', tr: 'Saydaliyye', en: 'pharmacy' },
  { ar: 'بالحساب', tr: 'bil-7saab', en: 'on credit / put it on my tab' },
  { ar: 'دفتر الحساب', tr: 'daftar el-7saab', en: 'the tab ledger (credit book)' },
  { ar: 'عالزبون', tr: '3al-ziboun', en: 'regular customer / loyal customer' },
  { ar: 'كيلو بالكام؟', tr: 'keelo bil-kaam?', en: 'how much per kilo?' },
  { ar: 'حطّ عالحساب', tr: '7aTT 3al-7saab', en: 'put it on my tab' },
  { ar: 'عندك ريّا؟', tr: '3indak riyya?', en: 'do you have change?' },
  { ar: 'ما عندي فكّة', tr: 'maa 3indi fakke', en: 'I have no small change' },
  { ar: 'خود شوية زيادة', tr: 'khod shwayyi ziyaade', en: 'take a little extra (vendor giving bonus)' },
  { ar: 'صرمايي', tr: 'Sarmaayii', en: 'loyal / regular (from same neighborhood)' },
  { ar: 'ما بتلاقي هيك برّا', tr: 'maa btilaaqii haik barra', en: 'you won\'t find this outside (quality boast)' },
  { ar: 'بضاعة طازة', tr: 'biDaa3a Taaze', en: 'fresh goods / fresh stock' },
  { ar: 'وصّلتلك', tr: 'waSSltak', en: 'I\'ll deliver it to you' },
  { ar: 'من الدار للدار', tr: 'min el-daar lal-daar', en: 'door to door (local delivery)' },
  { ar: 'مستودع', tr: 'mustawda3', en: 'warehouse / storage (back of shop)' },
  { ar: 'رفّ', tr: 'raff', en: 'shelf (in the shop)' },
  { ar: 'بيزن', tr: 'biizen', en: 'it weighs / weighing out portions' },
  { ar: 'كيس نايلون', tr: 'kiis naaylon', en: 'plastic bag' },
  { ar: 'كرتونة', tr: 'kartoone', en: 'cardboard box / crate of goods' },
  { ar: 'يلّي جابك؟', tr: 'yalli jaabak?', en: 'what brings you? / what do you need?' },
  { ar: 'شو بدّك؟', tr: 'shu biddak?', en: 'what do you want? (shop owner asking)' },
  { ar: 'برضو ما تنسى', tr: 'braDDo maa tinsaa', en: 'also don\'t forget (reminder of tab debt)' }
];

const DKN_DRILLS = [
  { q: 'How do you say "corner shop"?', a: 'dukkaan', hint: 'دُكّان' },
  { q: 'How do you say "grocer / shop owner"?', a: 'ba22aal', hint: 'بَقّال' },
  { q: 'How do you say "put it on my tab"?', a: '7aTT 3al-7saab', hint: 'حطّ عالحساب' },
  { q: 'How do you say "on credit / on tab"?', a: 'bil-7saab', hint: 'بالحساب' },
  { q: 'What is "daftar el-7saab"?', a: 'the tab ledger / credit book', hint: 'دفتر الحساب' },
  { q: 'How do you ask "how much per kilo?"', a: 'keelo bil-kaam?', hint: 'كيلو بالكام؟' },
  { q: 'How do you say "do you have change?"', a: '3indak riyya?', hint: 'عندك ريّا؟' },
  { q: 'How do you say "I have no small change"?', a: 'maa 3indi fakke', hint: 'ما عندي فكّة' },
  { q: 'How do you say "fresh goods"?', a: 'biDaa3a Taaze', hint: 'بضاعة طازة' },
  { q: 'How do you say "regular customer"?', a: '3al-ziboun', hint: 'عالزبون' },
  { q: 'How do you say "baker / bread vendor"?', a: 'khabbaaZ', hint: 'خبّاز' },
  { q: 'How do you say "bakery"?', a: 'furn', hint: 'فرن' },
  { q: 'How do you say "butcher"?', a: 'jazzaar', hint: 'جزّار' },
  { q: 'How do you say "what do you want?" (in a shop)?', a: 'shu biddak?', hint: 'شو بدّك؟' },
  { q: 'How do you say "plastic bag"?', a: 'kiis naaylon', hint: 'كيس نايلون' },
  { q: 'How do you say "door to door delivery"?', a: 'min el-daar lal-daar', hint: 'من الدار للدار' }
];

const DKN_TIPS = [
  { title: 'The Dukkan as Social Hub', body: 'The Lebanese dukkan (دُكّان) is far more than a shop — it\'s the neighborhood\'s heartbeat. You hear the news there, leave messages for neighbors, and settle disputes over a cup of coffee. The ba22aal knows every family\'s preferences, schedules, and tab history.' },
  { title: 'Bil-7saab: The Credit System', body: 'Running a tab (bil-7saab) is standard in Lebanese corner shops. The shopkeeper keeps a small ledger (daftar el-7saab) and families pay at end of month or whenever cash arrives. In economic crises, this informal credit system becomes essential for survival.' },
  { title: 'The Furn: Morning Ritual', body: 'The furn (فرن, neighborhood bakery) opens before dawn. Families send children to buy fresh ka3ke or man2oushi before school. The smell of hot bread from the furn is deeply tied to Lebanese childhood memory — queuing up with a lira in hand.' },
  { title: 'Vendor Generosity & Loyalty', body: '"Khod shwayyi ziyaade" (take a little extra) is the vendor\'s way of rewarding loyalty. Regular customers (3al-ziboun) get slightly heavier portions, extra fruit thrown in, or priority when stock is low. This reciprocal generosity is unspoken but deeply felt.' },
  { title: 'The Barber & the Pharmacy', body: 'The 7alaa2 (barber) and Saydaliyye (pharmacy) anchor every Lebanese neighborhood. The barber is a therapist and gossip source; the pharmacist often gives medical advice without a prescription. Both are trusted community figures who know everyone\'s business.' }
];
