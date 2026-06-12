// R1656 — Lebanese Fashion Designers — Beirut couture (cou)
const COU_WORDS = [
  { w: "Elie Saab",                t: "إيلي صعب",               e: "Beirut couturier (b. 1964) — globally famous evening gowns + bridal; dressed Halle Berry, Beyoncé, Queen Rania",  ex: "Elie Saab fastan ma3roof bil-3alam" },
  { w: "Reem Acra",                t: "ريم عكره",                e: "Lebanese-American couturier (b. 1961); known for ornate bridal + red-carpet gowns",                              ex: "Reem Acra fastan zaffe khaled" },
  { w: "Zuhair Murad",             t: "زهير مراد",               e: "Beirut couturier (b. 1971); haute couture house in Paris; flowing draped gowns",                                ex: "Zuhair Murad fastan beauty queens" },
  { w: "Tony Ward",                t: "توني وارد",               e: "Beirut couturier; Italian couture register; ornate beading + structure",                                       ex: "Tony Ward fasaten couture" },
  { w: "Rabih Kayrouz",            t: "ربيع كيروز",              e: "Beirut couturier — Maison Rabih Kayrouz Paris; modern minimalism + Lebanese craftsmanship",                       ex: "Rabih Kayrouz tasameem 7adise" },
  { w: "Georges Hobeika",          t: "جورج حبيقة",              e: "Beirut couturier; intricate beadwork; Arab-royal + Hollywood clientele",                                       ex: "Georges Hobeika za7raf bil-fastan" },
  { w: "Krikor Jabotian",          t: "كريكور جابوتيان",         e: "Beirut Armenian couturier; sculptural couture + bridal",                                                       ex: "Krikor Jabotian fastan sculpture" },
  { w: "Nicolas Jebran",           t: "نيكولا جبران",            e: "Beirut couturier; dramatic ball gowns",                                                                       ex: "Nicolas Jebran fasaten 3arouseh" },
  { w: "Robert Abi Nader",         t: "روبير أبي نادر",         e: "Beirut couturier; refined evening wear",                                                                      ex: "Robert Abi Nader 3uroud azya2" },
  { w: "Hermitage Beirut Fashion", t: "موضة بيروت",              e: "Beirut Fashion Week — biannual; Saifi Village + Beirut Souks venues",                                          ex: "moudet Beirut kel sene marratayn" },
  { w: "haute couture",            t: "هوت كوتور",               e: "Paris-recognized custom-made couture — Elie Saab + Zuhair Murad + Rabih Kayrouz are official members",          ex: "haute couture Paris Elie Saab 3edu" },
  { w: "fastan zaffe",             t: "فستان زفّة",              e: "Lebanese wedding gown — couture-level + multiple changes during night",                                       ex: "fastan zaffe lazem yekoun min couturier" },
  { w: "tatreez",                  t: "تطريز",                   e: "embroidery — Lebanese couture famous for intricate hand-tatreez beading",                                     ex: "tatreez 3al fastan ya3ne 3amal idoui" },
  { w: "Saifi Village",            t: "سيفي فيلاج",              e: "Beirut downtown design district; ateliers + boutiques; restored post-civil-war",                              ex: "Saifi Village 3a designers Lebnen" },
  { w: "Achrafieh ateliers",       t: "أتيليه الأشرفية",         e: "East Beirut couture workshops — most major designers based here",                                              ex: "ateliers el-Achrafieh dawren bil-couture" },
  { w: "Cannes red carpet",        t: "ساط كان الأحمر",          e: "Cannes red-carpet gowns by Lebanese designers — annual showcase of Beirut couture",                            ex: "fasaten Cannes ktir min Lebnen" }
];

const COU_DRILLS = [
  {
    q: "Who is Elie Saab?",
    opts: [
      "actor",
      "Beirut couturier (b. 1964) — globally famous Lebanese fashion designer; evening gowns + bridal; Paris haute-couture house; dressed Halle Berry's 2002 Oscar gown, Beyoncé, Queen Rania, Catherine Middleton",
      "singer",
      "politician"
    ],
    a: 1
  },
  {
    q: "Lebanese designers in Paris haute couture?",
    opts: [
      "none",
      "Elie Saab + Zuhair Murad + Rabih Kayrouz — three Lebanese houses are official members of the Chambre Syndicale de la Haute Couture in Paris (rare for non-French houses)",
      "only Elie Saab",
      "only Italian designers"
    ],
    a: 1
  },
  {
    q: "Elie Saab's Halle Berry moment?",
    opts: [
      "didn't dress her",
      "2002 Oscars — Halle Berry won Best Actress wearing burgundy Elie Saab gown — moment that launched Saab into Hollywood fame; first Arab designer to dress a Best Actress winner",
      "minor styling",
      "rejected"
    ],
    a: 1
  },
  {
    q: "Zuhair Murad signature?",
    opts: [
      "minimalist",
      "Beirut couturier (b. 1971); flowing draped gowns + intricate beadwork; haute couture house in Paris; favored by Beyoncé, Jennifer Lopez, Shakira",
      "menswear only",
      "casual sportswear"
    ],
    a: 1
  },
  {
    q: "Rabih Kayrouz vs Elie Saab style?",
    opts: [
      "identical",
      "Rabih Kayrouz = modern minimalism + architectural cuts + Lebanese craftsmanship in subtle palette; Elie Saab = ornate beading + dramatic silhouettes + glamour. Different couture poles",
      "both maximalist",
      "Rabih more ornate"
    ],
    a: 1
  },
  {
    q: "Achrafieh ateliers significance?",
    opts: [
      "tourist shops",
      "East Beirut neighborhood where most major Lebanese couturiers are based; their workshops employ generations of Lebanese seamstresses + embroiderers — the craft ecosystem behind global luxury",
      "wholesale market",
      "fabric market only"
    ],
    a: 1
  },
  {
    q: "Tatreez in Lebanese couture?",
    opts: [
      "machine-only",
      "hand-embroidery + beading — Lebanese couture's signature craftsmanship; a single Elie Saab gown can take 1000+ hours of hand-tatreez; explains why these dresses cost $50k+",
      "imported from Asia",
      "not used"
    ],
    a: 1
  },
  {
    q: "Why so many Lebanese fashion designers?",
    opts: [
      "coincidence",
      "post-civil-war Beirut became luxury-craft hub; long Levantine textile tradition (Phoenician dye/silk); Christian-French connection eased Paris access; civil-war diaspora wealth funded ateliers; concentration of skilled labor in small country",
      "government program",
      "cheap labor only"
    ],
    a: 1
  },
  {
    q: "Beirut Fashion Week?",
    opts: [
      "doesn't exist",
      "biannual event in Saifi Village + Beirut Souks; showcases Lebanese designers + emerging talent; positions Beirut as regional fashion capital",
      "annual only",
      "only foreign designers"
    ],
    a: 1
  },
  {
    q: "fastan zaffe — Lebanese wedding meaning?",
    opts: [
      "off-the-rack",
      "wedding gown for Lebanese bride — typically couture-level + multiple gown changes during the wedding night; fuels demand for local couture industry; weddings drive Lebanese designer revenue",
      "casual dress",
      "rented item"
    ],
    a: 1
  }
];

const COU_TIPS = [
  "Watch any Cannes/Oscars red carpet — count the Lebanese designers; usually 3-5 gowns per major event are Lebanese-made",
  "Elie Saab's Beirut atelier in Achrafieh employs 200+ artisans; the brand kept 100% production in Lebanon even after Paris flagship opened in 2002",
  "Lebanese bridal industry is multi-billion — fastan zaffe culture means every middle-class+ Lebanese wedding has couture-level gowns, often 2-3 per bride",
  "The Lebanese fashion ecosystem includes Saifi Village (downtown design district), Achrafieh ateliers, and Beirut Souks luxury retail — concentrated within a few km in central Beirut",
  "August 2020 Beirut port explosion damaged many ateliers in Mar Mikhael / Gemmayzeh — but designers rebuilt quickly; the resilience itself became part of Lebanese couture identity"
];
