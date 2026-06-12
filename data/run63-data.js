// Run #63 — Proverb Completion drill
// PC_SITUATIONS: short English scenarios, each paired with a proverb from
// PROVERBS that fits. Used in the Situation tab where the learner sees the
// scenario and picks the matching proverb from 4 options.
// proverbId must reference a real id in data/proverbs.js.

const PC_SITUATIONS = [
  { id:'ps01', scenario:'Your friend is stressed about a job interview outcome and keeps checking their email every minute.', proverbId:'pv001' },
  { id:'ps02', scenario:'A coworker who mocked your idea now proposes the same thing and gets praised. A week later, management credits you.', proverbId:'pv002' },
  { id:'ps03', scenario:'Your cousin had a terrible week — sick kids, car breakdown — but then gets a surprise bonus on Friday.', proverbId:'pv003' },
  { id:'ps04', scenario:'You\'ve been scrolling your phone for two hours and realize you have a deadline tomorrow.', proverbId:'pv004' },
  { id:'ps05', scenario:'Everyone at work keeps whispering about a manager resigning. You dismissed it yesterday; today HR sends an announcement.', proverbId:'pv005' },
  { id:'ps06', scenario:'Your uncle calmly defuses a family argument by suggesting everyone sleep on it first.', proverbId:'pv006' },
  { id:'ps07', scenario:'A houseguest complains the coffee is weak, not realizing it\'s an imported single-origin roast.', proverbId:'pv007' },
  { id:'ps08', scenario:'You want a villa in Faraya but your bank account says studio in the suburbs.', proverbId:'pv008' },
  { id:'ps09', scenario:'Your flight gets delayed six hours. You\'re furious — then you find out the original flight had engine trouble and turned back.', proverbId:'pv009' },
  { id:'ps10', scenario:'At a tense dinner, you almost share a family secret, then stop yourself. You go home relieved.', proverbId:'pv010' },
  { id:'ps11', scenario:'You skipped studying all semester, then failed the exam and blamed the professor.', proverbId:'pv020' },
  { id:'ps12', scenario:'A friend\'s generous hosting — olive oil, fresh bread, home-cooked food — turned a simple dinner into a feast.', proverbId:'pv030' },
  { id:'ps13', scenario:'Your boss is always criticizing the team for small things while his own emails have typos and missing attachments.', proverbId:'pv040' },
  { id:'ps14', scenario:'Someone asks when you\'ll finish the project. You say "soon" and wave vaguely at the air.', proverbId:'pv050' },
  { id:'ps15', scenario:'A neighbor promises they\'ll pay you back their loan "when they can" and shrugs.', proverbId:'pv060' },
  { id:'ps16', scenario:'Your friend apologizes profusely for arriving 15 minutes late to an informal coffee. You wave it off.', proverbId:'pv065' },
  { id:'ps17', scenario:'After a week of delays, a stalled permit suddenly gets approved on a day you weren\'t expecting it.', proverbId:'pv001' },
  { id:'ps18', scenario:'A new driver cuts you off in traffic. Instead of yelling, you take a deep breath and keep going — and later see they caused a fender bender a block later.', proverbId:'pv002' },
  { id:'ps19', scenario:'You finally taste success after months of hard work. Someone who doubted you asks for tips.', proverbId:'pv020' },
  { id:'ps20', scenario:'You hear rumors about a restaurant closing. You don\'t believe it. Three weeks later there\'s a "for lease" sign on the door.', proverbId:'pv005' },
  { id:'ps21', scenario:'An old relative gives quiet, steady advice at a family crisis while everyone else panics.', proverbId:'pv006' },
  { id:'ps22', scenario:'You want to buy concert tickets for a band playing in Paris next month. Your budget says no.', proverbId:'pv008' },
  { id:'ps23', scenario:'You held your tongue during a political argument at a wedding. You sleep peacefully that night.', proverbId:'pv010' },
  { id:'ps24', scenario:'A teenager blames "the system" for their bad grades while scrolling TikTok every night.', proverbId:'pv040' },
  { id:'ps25', scenario:'Your client keeps saying the delivery will come "soon." It\'s been a month.', proverbId:'pv050' },
];

// PC_TIPS — portable takeaways about when and how these proverbs get used.
const PC_TIPS = [
  'Proverbs are social currency in Lebanese — dropping one at the right moment shows fluency beyond grammar.',
  'Most proverbs split cleanly on a comma (،) or the conjunction w- (و). Use that structure as a memorization hook.',
  'Use "الصبر مفتاح الفرج" whenever someone is waiting out a hardship — it\'s the default consolation.',
  'Wisdom proverbs tend to rhyme or use parallel structure: يوم عسل يوم بصل, إذا حكيت ندمت إذا سكتّ سلمت.',
  'Short idioms like ولا يهمك and بكرة الصبح function as polite brush-offs — they aren\'t insults.',
  'Proverbs about self-awareness (الجمل ما بيشوف عوج رقبتو) are among the most-used for gentle criticism.',
  'Proverbs about patience and delay (كل تأخيرة فيها خيرة) are common because Levantine culture embraces relief-through-waiting.',
];
