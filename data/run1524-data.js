// R1524 — NEW FEATURE: Lebanese Mokhtar & Neighborhood Official Culture (mkh)

const MKH_WORDS = [
  { w: "mokhtar", tr: "مختار", en: "neighborhood official / local mayor", ex: "roo7 3and l mokhtar, yimDilek l wara2", exEn: "go to the mokhtar, he'll stamp your papers", notes: "elected local official who handles civil documents, disputes, and neighborhood matters — a uniquely Lebanese institution" },
  { w: "sha7ade", tr: "شهادة", en: "official attestation / certificate", ex: "3tini sha7ade sakane mnel mokhtar", exEn: "give me a residency attestation from the mokhtar", notes: "mokhtar issues sha7ade for residency, good conduct, civil status — required for many government procedures" },
  { w: "ekhraj 2eid", tr: "إخراج قيد", en: "civil registry extract / family record", ex: "biddak ekhraj 2eid la l jwaaz", exEn: "you need a civil registry extract for the passport", notes: "essential Lebanese document listing family members registered in the civil registry — every citizen needs it regularly" },
  { w: "tawqii3", tr: "توقيع", en: "signature / official stamp", ex: "lazem tawqii3 l mokhtar 3al wara2", exEn: "you need the mokhtar's signature on the paper", notes: "mokhtar's signature and stamp give documents official local legitimacy; without it many institutions won't accept papers" },
  { w: "wara2 rasmi", tr: "ورق رسمي", en: "official papers / formal documents", ex: "jib kell l wara2 l rasmi ma3ak", exEn: "bring all the official papers with you", notes: "Lebanese bureaucracy is deeply paper-based — wara2 rasmi refers to any stamped or notarized document" },
  { w: "3alam", tr: "علم", en: "official seal / government stamp", ex: "fi 3alam l mokhtar 3al wara2?", exEn: "is the mokhtar's seal on the paper?", notes: "the mokhtar's rubber stamp (3alam) is the mark of legitimacy — locals say a document without it 'ma byi3mel shi'" },
  { w: "sened", tr: "سند", en: "deed / formal legal document", ex: "sened l mulkiyye 3and l kaatib 3adl", exEn: "the ownership deed is with the notary", notes: "property deeds (sened mulkiyye) are the most contested documents in Lebanon — mokhtar often first step before notary" },
  { w: "7aret", tr: "حارة", en: "neighborhood quarter (mokhtar's jurisdiction)", ex: "howe mokhtar l 7aret kella min 30 sene", exEn: "he's been the mokhtar of the whole neighborhood for 30 years", notes: "each 7aret has its own mokhtar — their jurisdiction is hyperlocal, covering just a few streets or a village section" },
  { w: "daftar", tr: "دفتر", en: "registry / record book", ex: "ismak bil daftar 3and l mokhtar", exEn: "your name is in the registry with the mokhtar", notes: "the mokhtar keeps handwritten registers of residents — surprisingly still paper-based in most areas" },
  { w: "masla7a", tr: "مصلحة", en: "government bureau / public service office", ex: "lazem troo7 3al masla7a ba3d l mokhtar", exEn: "you need to go to the government bureau after the mokhtar", notes: "masla7a = any government service office (civil status, passport authority, etc.) — mokhtar's stamp often precedes a masla7a visit" },
  { w: "jedded", tr: "جدّد", en: "renew (documents / registration)", ex: "jedded l 7uiyye, nife2et min zaman", exEn: "renew the ID, it expired a while ago", notes: "jedded is the word for renewing any document; mokhtar sometimes needed in the renewal process depending on the document" },
  { w: "nife2", tr: "نفق", en: "expired / ran out (document)", ex: "l wara2 nife2, ma byi2bal", exEn: "the document expired, it won't be accepted", notes: "nife2 = literally 'ran out' — used for expired documents; Lebanese say 'l wara2 nife2' the same way they say 'l mazut nife2'" },
  { w: "ma7dar", tr: "محضر", en: "official report / formal minutes", ex: "3amlo ma7dar 3and l mokhtar 3al mawDou3", exEn: "they filed an official report with the mokhtar on the matter", notes: "ma7dar = formal written record of a dispute, agreement, or incident — mokhtar can write one for neighborhood matters" },
  { w: "kaatib 3adl", tr: "كاتب عدل", en: "notary public", ex: "roo7 3and l kaatib 3adl la l 3a2d", exEn: "go to the notary for the contract", notes: "kaatib 3adl handles legally binding contracts and property transactions — a step above the mokhtar in legal weight" },
  { w: "mwaqqa3", tr: "موقّع", en: "signed / officially endorsed", ex: "l wara2 lazem ykoon mwaqqa3 min l mokhtar", exEn: "the paper needs to be signed by the mokhtar", notes: "mwaqqa3 = signed and endorsed — documents without this are considered unofficial in Lebanese administrative culture" },
  { w: "taddakhkhul", tr: "تدخّل", en: "intervention / mediation (social role)", ex: "l mokhtar 3amil taddakhkhul w 7alle l mawDou3", exEn: "the mokhtar intervened and resolved the matter", notes: "beyond paperwork, the mokhtar is a social mediator — neighbor disputes, family matters, building issues all pass through him" },
  { w: "3arD 7al", tr: "عرض حال", en: "written petition / formal request letter", ex: "ktab 3arD 7al la l mokhtar 3al mawDou3", exEn: "write a petition to the mokhtar about the matter", notes: "formal written petition used to request intervention or documentation — standard way to approach the mokhtar officially" },
  { w: "bie3ref l kell", tr: "بيعرف الكل", en: "knows everyone (mokhtar's reputation)", ex: "es2alo, howe bie3ref l kell bil 7aret", exEn: "ask him, he knows everyone in the neighborhood", notes: "mokhtar's defining social trait — he knows every family, their history, their relations; this is how he can vouch for residents" }
];

const MKH_DRILLS = [
  { q: "What is a 'mokhtar'?", a: "neighborhood official / local mayor", hint: "stamps your papers and knows everyone" },
  { q: "What does 'ekhraj 2eid' mean?", a: "civil registry extract / family record", hint: "needed for passports and official documents" },
  { q: "How do you say 'official seal/stamp' in Lebanese?", a: "3alam", hint: "rubber stamp that makes papers legitimate" },
  { q: "What is a 'sha7ade' from the mokhtar?", a: "official attestation / certificate", hint: "proves residency, good conduct, or civil status" },
  { q: "How do you say a document has 'expired'?", a: "nife2", hint: "literally 'ran out' — document won't be accepted" },
  { q: "What does 'taddakhkhul' mean in the mokhtar's context?", a: "intervention / mediation", hint: "mokhtar's social role in disputes" },
  { q: "What is 'masla7a'?", a: "government bureau / public service office", hint: "where you go after the mokhtar" },
  { q: "How do you say 'renew' (documents) in Lebanese?", a: "jedded", hint: "what you do before a document expires" },
  { q: "What is a 'kaatib 3adl'?", a: "notary public", hint: "handles legally binding contracts" },
  { q: "What does 'bie3ref l kell' describe about the mokhtar?", a: "he knows everyone in the neighborhood", hint: "his key social superpower" }
];

const MKH_TIPS = [
  "The Lebanese mokhtar (مختار) is a uniquely Lebanese institution — an elected neighborhood or village official who bridges the community and the state. They handle civil attestations, residency certificates, dispute mediation, and vouch for residents to government bodies. Every Lebanese neighborhood and village has its own mokhtar, sometimes several.",
  "The 'ekhraj 2eid' (إخراج قيد) is one of the most requested documents in Lebanon — a civil registry extract showing family members registered under a given civil registry number. You need it for passport applications, marriage registrations, school enrollment, and dozens of official procedures. The mokhtar is often the first stop.",
  "The mokhtar's 'wara2 rasmi' (official paperwork) chain works like this: you come with a request, the mokhtar verifies your identity and status, writes a sha7ade or signs your document, stamps it with his 3alam (seal), and sends you to the relevant masla7a (government bureau). Without the mokhtar's stamp, many documents are rejected.",
  "Beyond paperwork, the mokhtar serves as a neighborhood mediator — 'taddakhkhul' (intervention). When neighbors dispute over a shared wall, parking spot, or noise issue, the mokhtar is called before anyone goes to court. His word carries social weight precisely because he knows everyone personally ('bie3ref l kell').",
  "A practical Lebanese bureaucracy tip: before visiting any government masla7a, check if you need the mokhtar's attestation first. Many procedures require 'sha7ade sakane' (residency certificate), 'sha7ade 7usn sira' (good conduct certificate), or an 'ekhraj 2eid' — all issued or endorsed by the mokhtar. Going to the masla7a without these means a wasted trip."
];
