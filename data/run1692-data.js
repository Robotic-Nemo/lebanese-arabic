// Run #1692 — NEW FEATURE: bsr — Khalil Gibran & Bsharri.
// Khalil Gibran (1883-1931, Lebanese spelling: جبران خليل جبران Jubran Khalil
// Jubran). Born Bsharri, Qadisha valley. Painter, poet, philosopher. Author of
// "The Prophet" (1923) — most translated literary work after the Bible. Lived
// most adult life in Boston/NYC but the village + valley shaped his vision.
// Buried at Mar Sarkis monastery near Bsharri, now Gibran Museum. Distinct
// from R1605 qsh (Wadi Qadisha generally) — narrow focus on Bsharri village
// + Gibran the man. Prefix: bsr (Bsharri).

const BSR_WORDS = [
  { w: 'Bsharri', t: 'بشري', e: 'Bsharri — village in Qadisha Valley, Khalil Gibran\'s birthplace', ex: 'Bsharri 3a-rasn jbal Lebnan.', exEn: 'Bsharri is high in the Lebanon mountains.' },
  { w: 'Jbran Khalil Jbran', t: 'جبران خليل جبران', e: 'Khalil Gibran — full Arabic name (Jubran Khalil Jubran)', ex: 'Jbran Khalil Jbran chaa3er kbir.', exEn: 'Khalil Gibran is a great poet.' },
  { w: 'el-Nabi', t: 'النبي', e: '"The Prophet" — Gibran\'s 1923 masterpiece, sold 100M+ copies', ex: 'el-Nabi tarjam 100 lugha.', exEn: '"The Prophet" was translated into 100 languages.' },
  { w: 'matha7af Jbran', t: 'متحف جبران', e: 'Gibran Museum — at Mar Sarkis, holds his art + tomb', ex: 'matha7af Jbran fi Bsharri.', exEn: 'The Gibran Museum is in Bsharri.' },
  { w: 'Mar Sarkis', t: 'مار سركيس', e: 'Mar Sarkis — 7th-c monastery, Gibran\'s burial place', ex: 'Jbran madfun bi-Mar Sarkis.', exEn: 'Gibran is buried at Mar Sarkis.' },
  { w: 'shi3r', t: 'شعر', e: 'poetry — Gibran wrote in both Arabic and English', ex: 'shi3r Jbran m3aroof.', exEn: 'Gibran\'s poetry is famous.' },
  { w: 'rassam', t: 'رسام', e: 'painter — Gibran trained in Paris, 700+ artworks survive', ex: 'Jbran kan rassam mawhoob.', exEn: 'Gibran was a gifted painter.' },
  { w: 'el-Mahjar', t: 'المهجر', e: 'al-Mahjar — Arab diaspora literary movement Gibran led in NYC', ex: 'Jbran zaa3im el-Mahjar el-adabi.', exEn: 'Gibran led the diaspora literary movement.' },
  { w: 'el-Rabita el-Qalamiyye', t: 'الرابطة القلمية', e: 'Pen League — NYC literary society Gibran founded 1920', ex: 'el-Rabita el-Qalamiyye assassha Jbran.', exEn: 'Gibran founded the Pen League.' },
  { w: 'Mustafa', t: 'مصطفى', e: 'Almustafa — protagonist of "The Prophet"', ex: 'Mustafa shakhsiyye Jbran.', exEn: 'Almustafa is Gibran\'s character.' },
  { w: 'Orphalese', t: 'أورفليس', e: 'Orphalese — fictional city in "The Prophet"', ex: 'Orphalese balad fi-l-Nabi.', exEn: 'Orphalese is a city in "The Prophet".' },
  { w: 'el-7obb', t: 'الحب', e: 'love — first chapter of "The Prophet"', ex: 'fasel el-7obb awal fasel.', exEn: 'The chapter on love is first.' },
  { w: 'el-mawt', t: 'الموت', e: 'death — last chapter of "The Prophet"', ex: 'fasel el-mawt akher fasel.', exEn: 'The chapter on death is last.' },
  { w: 'mahad Jbran', t: 'مهد جبران', e: 'Gibran\'s cradle — restored birth-house in Bsharri', ex: 'mahad Jbran zerto el-sane el-madye.', exEn: 'I visited Gibran\'s birth-house last year.' },
  { w: 'Wadi Qadisha', t: 'وادي قاديشا', e: 'Qadisha Valley — sacred valley below Bsharri, UNESCO site', ex: 'Bsharri ta-fawq Wadi Qadisha.', exEn: 'Bsharri is above the Qadisha Valley.' },
  { w: 'Arz el-Rabb', t: 'أرز الرب', e: 'Cedars of God — ancient grove near Bsharri, on Lebanese flag', ex: 'Arz el-Rabb 3omro 2000 sane.', exEn: 'The Cedars of God are 2000 years old.' },
  { w: 'el-3a2el', t: 'العقل', e: 'reason / mind — recurring Gibran theme', ex: 'Jbran 7aka 3an el-3a2el wa-l-shaghaf.', exEn: 'Gibran wrote about reason and passion.' },
  { w: 'el-7arf', t: 'الحرف', e: 'word / letter — Gibran the wordsmith', ex: 'el-7arf 3and Jbran muqaddas.', exEn: 'The word for Gibran is sacred.' },
  { w: 'sadiqah Mary', t: 'صديقته ماري', e: 'Mary Haskell — Gibran\'s patron + lifelong correspondent (Boston)', ex: 'Mary Haskell sa3adato.', exEn: 'Mary Haskell helped him.' },
  { w: 'rumooz Lebnaniyye', t: 'رموز لبنانية', e: 'Lebanese symbols — Gibran is a national icon', ex: 'Jbran men rumooz Lebnan.', exEn: 'Gibran is among Lebanon\'s symbols.' },
  { w: 'kanise Maruniyye', t: 'كنيسة مارونية', e: 'Maronite church — Gibran\'s religious tradition', ex: 'Bsharri kella Maruniyye.', exEn: 'Bsharri is entirely Maronite.' },
  { w: '3uzla mubdi3a', t: 'عزلة مبدعة', e: 'creative solitude — Gibran\'s ideal in Mar Sarkis', ex: '3uzla mubdi3a sirret Jbran.', exEn: 'Creative solitude was Gibran\'s secret.' }
];

const BSR_DRILLS = [
  { q: 'Where was Khalil Gibran born?', opts: ['Beirut', 'Bsharri', 'Tripoli'], a: 1, exp: 'Bsharri (بشري) — a small mountain village in the Qadisha Valley, north Lebanon, around 1500m altitude. He was born there in 1883 and emigrated to Boston in 1895 with his mother and siblings.' },
  { q: 'What is Gibran\'s most famous book?', opts: ['The Madman', 'The Prophet', 'Broken Wings'], a: 1, exp: '"The Prophet" (1923) — 26 prose-poetry essays delivered by Almustafa as he leaves the city of Orphalese. It has sold over 100 million copies and is the third-best-selling book of all time after the Bible and the Quran.' },
  { q: 'Where is Gibran buried?', opts: ['Mar Sarkis (Bsharri)', 'Pere Lachaise (Paris)', 'Mount Auburn (Boston)'], a: 0, exp: 'Mar Sarkis monastery near Bsharri — Gibran requested in his will to be buried in his birthplace. The monastery now houses the Gibran Museum with his paintings, manuscripts, and personal belongings.' },
  { q: 'What was the Pen League (al-Rabita al-Qalamiyye)?', opts: ['a Lebanese literary prize', 'an Arab diaspora literary society in NYC', 'a school of calligraphy in Beirut'], a: 1, exp: 'Founded by Gibran in 1920 in New York with Mikhail Naimy and other Arab émigré writers. It modernized Arabic literature by mixing diaspora (mahjar) experience with classical Arabic forms.' },
  { q: 'What does the Lebanese cedar (Arz el-Rabb) symbolize?', opts: ['mountain freshness', 'Lebanon\'s national identity', 'longevity in folklore'], a: 1, exp: 'The Cedar of Lebanon is on the national flag and at the heart of Lebanese identity — referenced 70+ times in the Bible. The grove of "Arz el-Rabb" near Bsharri has trees over 2000 years old.' },
  { q: 'Who was Mary Haskell to Gibran?', opts: ['his sister', 'his Boston patron and editor', 'his publisher\'s wife'], a: 1, exp: 'Mary Haskell — a Boston headmistress who became Gibran\'s patron, editor, and lifelong intellectual companion (1904-1931). Their 600+ letters document the creative process behind "The Prophet".' },
  { q: 'In what languages did Gibran write?', opts: ['only Arabic', 'only English', 'both Arabic and English'], a: 2, exp: 'Gibran wrote his early works in Arabic ("Broken Wings", "The Tempests") for the Arab diaspora press, then switched to English from "The Madman" (1918) onwards to reach a wider audience while continuing to publish Arabic essays.' },
  { q: 'Who is Almustafa?', opts: ['Gibran\'s teacher in Beirut', 'the protagonist of "The Prophet"', 'Gibran\'s pen name in NYC'], a: 1, exp: 'Almustafa ("the chosen one") — the prophet figure in the book who has been waiting twelve years in the city of Orphalese for his ship home. As he prepares to leave, the people ask him to share his wisdom on love, marriage, work, death, etc.' }
];

const BSR_TIPS = [
  'Gibran is the third-best-selling poet in history (after Shakespeare and Lao Tzu). "The Prophet" never went out of print since 1923 and was massively popular with the 1960s American counterculture (the Beatles, JFK quotations from it).',
  'Bsharri is a 2-hour drive from Beirut, deep in north Lebanon. Visiting the Gibran Museum + Cedars of God + Qadisha Valley monasteries is a single classic Lebanese day trip — the village is the highest in Lebanon at ~1500m and gets snow December-March.',
  'Two spellings: "Gibran" (his publisher\'s simplification for English readers) vs. "Jubran" / "Jbran" (the actual Arabic transliteration). His baptismal name was Jubran Khalil Jubran — the middle name is his father\'s, per Arabic naming custom.',
  'Mar Sarkis monastery (his burial place) is carved into the cliff of Qadisha Valley — Gibran lived there in self-imposed creative retreats. His will donated all his future royalties to his hometown of Bsharri "for the benefit of the inhabitants" — those funds still operate the museum today.',
  'Gibran painted before he wrote. He studied with Auguste Rodin in Paris (1908-1910) and Rodin reportedly called him "the William Blake of the 20th century". The Gibran Museum has 440+ of his paintings and drawings, many in his characteristic mystical/symbolist style.'
];
