// Run #29 — Welcome Onboarding + Command Palette + Stats Hero
// Prefix: wel- / cmd- / sh-

// Welcome flow shown to first-time users (no session history)
const WELCOME_STEPS = [
  {
    title: '🇱🇧 Ahla w sahla!',
    subtitle: 'Welcome to Lebanese Arabic',
    body: 'Learn spoken Lebanese — the dialect of Beirut, mountains, diaspora kitchens, and Fairuz songs. This app teaches the colloquial language people actually speak, not formal MSA.',
    cta: 'Yalla — start →'
  },
  {
    title: '👤 Make it yours',
    subtitle: 'Create your profile',
    body: 'Your progress saves locally per user. Pick a name and avatar — you can switch users any time from the 👤 button in the header.',
    form: 'profile',
    cta: 'Continue →'
  },
  {
    title: '🎯 Set a daily goal',
    subtitle: 'How many cards per day?',
    body: 'Even 10 cards a day builds momentum. You can change this any time in settings.',
    form: 'goal',
    cta: 'Continue →'
  },
  {
    title: '📚 You have 84 topics',
    subtitle: 'Vocabulary, grammar, conversation, culture',
    body: 'Tap "📚 All Topics" any time to browse. Press <kbd>/</kbd> for quick access. Try a few — Family, Greetings, or Food are great starters.',
    cta: 'Got it →'
  },
  {
    title: '🎙 Hear real Lebanese',
    subtitle: 'Audio is built in',
    body: 'Most words have audio from real Lebanese speakers. The 🎙 Audio Lab lets you tune voice settings, see coverage, and play any sentence smartly.',
    cta: 'Yalla, let me study! 🚀'
  }
];

// Command palette ACTIONS — surfaced in the Topics modal as a 7th category
const COMMAND_ACTIONS = [
  { label:'🌙 Toggle theme',         fn:'toggleTheme',          desc:'switch dark / light' },
  { label:'Aa Cycle font size',     fn:'cycleFontSize',        desc:'small → med → large' },
  { label:'أ Toggle Arabic script',  fn:'toggleScript',         desc:'show/hide Arabic letters' },
  { label:'⚙️ Open settings',        fn:'openSettings',         desc:'audio + display options' },
  { label:'💾 Export / import data', fn:'openDataModal',        desc:'backup or restore' },
  { label:'⌨️ Keyboard shortcuts',   fn:'openShortcutsModal',   desc:'view all shortcuts' },
  { label:'🔍 Word lookup',          fn:'openLookup',           desc:'⌘K  search words' },
  { label:'👥 Switch user',          fn:'openUserPicker',       desc:'multi-user profiles' },
  { label:'🎓 Placement test',       fn:'openPlacementTest',    desc:'find your level' },
  { label:'➕ Add custom word',      fn:'openAddWordModal',     desc:'add to personal vocab' },
  { label:'🎉 Show welcome again',   fn:'openWelcomeForce',     desc:'replay onboarding' },
];

// Quick-start recommendations shown to brand new users on Study view
const NEWBIE_QUICK_STARTS = [
  { label:'👨‍👩‍👧 Start with Family',     fn:'openFamilyTree',     reason:'Universal vocab, lots of audio' },
  { label:'❓ Question Words',         fn:'openQuestionWords',  reason:'shu/kif/wen — building blocks' },
  { label:'🇱🇧 Lebanese Culture',      fn:'openCultural',       reason:'Foods, places, customs' },
  { label:'🔢 Numbers',                fn:'showNumbers',        reason:'Essential for everything' },
  { label:'🎯 Daily Mix',              fn:'startDailyMix',      reason:'Balanced session — 10 mins' },
];

// Avatars available in welcome flow (subset of USER_AVATARS, more curated)
const WELCOME_AVATARS = ['🦊','🐻','🌟','🌹','🇱🇧','☀️','🌙','🍋','🦁','🌺','🐢','🐧'];
