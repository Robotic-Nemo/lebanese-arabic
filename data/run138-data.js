// Run #138 NEW FEATURE: Root Browser coach (prefix: rtb)
// Surfaces the 30 trilateral roots already in data/roots.js as a study path:
// learners see word families, then drill on "which root does this word
// belong to?" — builds the pattern-recognition muscle that makes Arabic
// vocab expansion compound (one root → 5-6 words you can decode).

const RTB_TIPS = [
  'Arabic words are built on <b>3-consonant roots</b>. Once you know the root, you can often guess related words without looking them up.',
  'Example: ك ت ب (k-t-b) = writing. From it: كتب (wrote), كتاب (book), مكتبة (library), مكتب (office), كاتب (writer), مكتوب (letter).',
  'The <b>root consonants stay in order</b> — vowels and affixes change to mark meaning/grammar (verb, noun, place, doer).',
  'Pattern hint: <b>ma-aC1C2aC3-e(h)</b> often = <i>place where C1C2C3 happens</i> (maktabe = library, madrase = school, mat3am = restaurant).',
  'Pattern hint: <b>C1aaC2eC3</b> often = <i>the one who does C1C2C3</i> (keteb = writer, 3aamel = worker, qaatel = killer).',
  'Pattern hint: <b>maC1C2uuC3</b> often = <i>the thing that was C1C2C3-ed</i> (maktub = written/letter, maftu7 = opened, maghmur = submerged).',
  'Drill strategy: when you meet a new word, look for a root you know inside it. If you find one, you have half the meaning for free.',
  'Lebanese tip: some roots get <b>fronted vowels</b> in the dialect (e → i, a → e), but the 3 root consonants always stay recognizable.',
];
