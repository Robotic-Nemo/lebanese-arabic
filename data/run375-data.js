// Run #375 — Lebanese Driving & Traffic Culture
// Categories: car-vocabulary | road-terms | driving-phrases | traffic-expressions | road-rage

const DRV_WORDS = [
  // car-vocabulary
  { ar: 'سيارة', tr: 'sayyaara', en: 'car / vehicle', cat: 'car-vocabulary' },
  { ar: 'بوق', tr: 'buu2', en: 'car horn', cat: 'car-vocabulary' },
  { ar: 'بنزين', tr: 'benziin', en: 'petrol / gasoline', cat: 'car-vocabulary' },
  { ar: 'كراج', tr: 'kraaj', en: 'garage / repair shop', cat: 'car-vocabulary' },
  { ar: 'طايرة', tr: 'Taayra', en: 'flat tyre (Lebanese colloquial)', cat: 'car-vocabulary' },
  { ar: 'ترمز', tr: 'tarmez', en: 'brakes / to brake', cat: 'car-vocabulary' },
  { ar: 'فيتيس', tr: 'fitiis', en: 'gear / transmission (from French vitesse)', cat: 'car-vocabulary' },
  { ar: 'باركينج', tr: 'baarking', en: 'parking (loanword)', cat: 'car-vocabulary' },
  // road-terms
  { ar: 'اوتوستراد', tr: 'ootustraad', en: 'highway / expressway (from French autoroute)', cat: 'road-terms' },
  { ar: 'دوار', tr: 'duwwaar', en: 'roundabout', cat: 'road-terms' },
  { ar: 'إشارة', tr: 'ishaara', en: 'traffic light / signal', cat: 'road-terms' },
  { ar: 'موقف', tr: 'maw2ef', en: 'parking spot / bus stop', cat: 'road-terms' },
  { ar: 'منعطف', tr: 'man3ataf', en: 'turn / junction / intersection', cat: 'road-terms' },
  { ar: 'جسر', tr: 'jisr', en: 'bridge / overpass', cat: 'road-terms' },
  { ar: 'نفق', tr: 'nafaq', en: 'tunnel', cat: 'road-terms' },
  { ar: 'رصيف', tr: 'raSiif', en: 'pavement / sidewalk / curb', cat: 'road-terms' },
  // driving-phrases
  { ar: 'رخصة القيادة', tr: 'rukhset il-2iyaade', en: 'driver\'s license', cat: 'driving-phrases' },
  { ar: 'حادثة', tr: '7aadshe', en: 'accident / incident', cat: 'driving-phrases' },
  { ar: 'تيكيت', tr: 'tiikeet', en: 'fine / traffic ticket (loanword)', cat: 'driving-phrases' },
  { ar: 'دوري الطرق', tr: 'dawri it-Turuq', en: 'traffic police patrol', cat: 'driving-phrases' },
  { ar: 'سرعة زائدة', tr: 'sur3a zaayda', en: 'speeding / excess speed', cat: 'driving-phrases' },
  { ar: 'دهس', tr: 'da7as', en: 'to run over / to hit with a car', cat: 'driving-phrases' },
  { ar: 'دبل', tr: 'dabbal', en: 'double-park (to block someone in)', cat: 'driving-phrases' },
  { ar: 'فول البنزين', tr: 'fuul il-benziin', en: 'fill up the tank (full tank)', cat: 'driving-phrases' },
  // traffic-expressions
  { ar: 'زحمة', tr: 'za7me', en: 'traffic jam / crowd / congestion', cat: 'traffic-expressions' },
  { ar: 'الطريق مسدود', tr: 'iT-Tariiq masduud', en: 'the road is blocked', cat: 'traffic-expressions' },
  { ar: 'قطعلي الطريق', tr: '2aTa3li iT-Tariiq', en: 'he cut me off (on the road)', cat: 'traffic-expressions' },
  { ar: 'وين رايح؟', tr: 'wein raaye7?', en: 'where are you going? (said to bad drivers)', cat: 'traffic-expressions' },
  { ar: 'ضوء أحمر', tr: 'Daw a7mar', en: 'red light', cat: 'traffic-expressions' },
  { ar: 'ضوء أخضر', tr: 'Daw akhdhar', en: 'green light', cat: 'traffic-expressions' },
  { ar: 'تحت الجسر', tr: 'ta7et il-jisr', en: 'under the bridge (Beirut landmark reference)', cat: 'traffic-expressions' },
  { ar: 'طلعت بالزحمة', tr: 'Tla3et bil-za7me', en: 'I got stuck in traffic', cat: 'traffic-expressions' },
  // road-rage
  { ar: 'شو هيك تسوق؟', tr: 'shu hek tsuu2?', en: 'what kind of driving is that?! (road rage)', cat: 'road-rage' },
  { ar: 'طز', tr: 'taz', en: 'damn it! / screw this! (mild expletive, road rage)', cat: 'road-rage' },
  { ar: 'يلعن أبوك', tr: 'yil3an abuuk', en: 'curse on your father (strong road-rage exclamation)', cat: 'road-rage' },
  { ar: 'مجنون؟', tr: 'majnuun?', en: 'are you crazy?!', cat: 'road-rage' },
  { ar: 'ابعد عني', tr: 'ib3ed 3anni', en: 'get away from me / back off!', cat: 'road-rage' },
  { ar: 'شو عندك شغلة؟', tr: 'shu 3andak shighle?', en: 'do you have a problem with me? / what\'s your deal?', cat: 'road-rage' },
  { ar: 'كبر شوي', tr: 'kbbar shwayy', en: 'slow down a bit! (grow up / act big)', cat: 'road-rage' },
  { ar: 'والله شو ناس', tr: 'walla shu naas', en: 'my God, what people! (exasperation at other drivers)', cat: 'road-rage' },
];

const DRV_DRILLS = [
  {
    q: 'What does "za7me" mean?',
    opts: ['car horn', 'traffic jam / congestion', 'flat tyre', 'speeding'],
    correct: 1,
    note: '"za7me" (زحمة) — literally "crowd/crush." The most-used driving word in Lebanon. Beirut traffic is infamous. "Fee za7me ktiir" = there\'s a huge jam. Also used for any crowd.'
  },
  {
    q: 'What is "buu2"?',
    opts: ['brakes', 'petrol', 'car horn', 'parking'],
    correct: 2,
    note: '"buu2" (بوق) — the car horn. Lebanese drivers are world-famous for horn use. It communicates: hello, move, thanks, watch out, I\'m here, and road rage — all by duration and rhythm.'
  },
  {
    q: 'What does "dabbal" mean in Lebanese driving context?',
    opts: ['to go fast', 'to double-park / block someone in', 'to overtake', 'to reverse'],
    correct: 1,
    note: '"dabbal" (دبل) — double-parking is extremely common in Lebanon. If someone blocks your car, you lay on the horn. The blocker usually comes out quickly.'
  },
  {
    q: 'What does "shu hek tsuu2?" mean?',
    opts: ['where are you parking?', 'how do I get there?', 'what kind of driving is that?! (road rage)', 'can you move forward?'],
    correct: 2,
    note: '"shu hek tsuu2?" (شو هيك تسوق؟) — the classic Lebanese road rage phrase. Direct: "what kind of driving IS this?!" Expect it with dramatic hand gestures.'
  },
  {
    q: 'What is "ootustraad"?',
    opts: ['a roundabout', 'highway / expressway', 'a traffic light', 'a tunnel'],
    correct: 1,
    note: '"ootustraad" (اوتوستراد) — from French "autoroute." The main highway through Lebanon, especially the Beirut-Tripoli or Beirut-South roads. Often jammed at rush hour.'
  },
  {
    q: 'What does "2aTa3li iT-Tariiq" mean?',
    opts: ['the road is blocked', 'he gave me directions', 'he cut me off (on the road)', 'he double-parked'],
    correct: 2,
    note: '"2aTa3li iT-Tariiq" (قطعلي الطريق) — literally "he cut my road." The Lebanese phrase for being cut off in traffic. Triggers instant horn use and possibly a chase.'
  },
  {
    q: 'What is "fitiis"?',
    opts: ['fine / traffic ticket', 'gear / transmission', 'petrol station', 'brakes'],
    correct: 1,
    note: '"fitiis" (فيتيس) — from French "vitesse" (speed/gear). Lebanese mechanics and drivers use it for the gearbox/transmission. "fitiis maaksuur" = broken gearbox.'
  },
  {
    q: 'What does "rukhset il-2iyaade" mean?',
    opts: ['car registration', 'driving test', 'driver\'s license', 'traffic fine'],
    correct: 2,
    note: '"rukhset il-2iyaade" (رخصة القيادة) — the driver\'s license. Getting one in Lebanon involves a written test and a driving test. Many Lebanese drive before getting one though.'
  },
  {
    q: 'What does "Tla3et bil-za7me" mean?',
    opts: ['I avoided the traffic', 'I got stuck in traffic', 'I was speeding', 'I found parking'],
    correct: 1,
    note: '"Tla3et bil-za7me" (طلعت بالزحمة) — literally "I went out into the traffic." One of the most common Lebanese daily complaints. The response is usually knowing sympathy.'
  },
  {
    q: 'What is "duwwaar"?',
    opts: ['traffic light', 'speed bump', 'roundabout', 'highway ramp'],
    correct: 2,
    note: '"duwwaar" (دوار) — roundabout. Lebanon has many famous roundabouts used as landmark directions. "3al-duwwaar ruu7 3a shimal" = at the roundabout go left.'
  },
];

const DRV_TIPS = [
  'Lebanese driving culture is legendary in the Arab world. Rules are treated as suggestions, lanes are fluid, and the horn is a primary communication device. Key survival phrases: "3an iznak" (excuse me, coming through) and "min fadlak" (please let me pass). Always assume the unexpected.',
  'Traffic in Beirut is described by time and area, not distance. "10 minutes" could mean an hour in za7me. Key areas for traffic jams: Jal el-Dib, Zouk, the Cola intersection, Martyr\'s Square area. Avoid rush hours (7-9am, 5-8pm) if possible.',
  'Parking: "dabbal" (double-park) is normal but leaves the car in neutral. If blocked, use the horn — the blocker returns fast. "baarking" lots are called "baarking" (from English). Valet parking ("faale") is extremely common in Beirut restaurants and venues.',
  'Road directions in Lebanon use landmarks, not street names. "3a ymiinek ba3ed il-jisr" (turn right after the bridge), "2abel il-ishaara" (before the traffic light), "ba3ed il-duwwaar" (after the roundabout). Street signs exist but are rarely used in speech.',
  'The car horn ("buu2") communicates everything: one short = greeting, two short = thanks or hello, long = get out of the way, aggressive rapid = road rage. Flashing headlights means "I\'m passing" or "let me go." Hazard lights mean "I\'m double-parking, be right back."',
];

const DRV_ABOUT = 'Lebanese driving is a full cultural experience. With some of the highest car ownership rates in the region and notoriously inadequate infrastructure, Lebanese roads are a daily adventure. Traffic jams ("za7me") are a national pastime and conversation topic. The horn ("buu2") is used freely and communicates nuance. Double-parking ("dabbal") is normal, lanes are flexible, and landmarks replace street addresses. Understanding Lebanese driving vocabulary helps you navigate directions, understand daily complaints, follow conversations about commutes, and survive the road yourself. From the highway ("ootustraad") to the mountain village road, driving is central to Lebanese life and identity.';
