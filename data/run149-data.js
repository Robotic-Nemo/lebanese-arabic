// Run #149 NEW FEATURE: Backup/Restore coach (prefix: bkp)
// Exports all localStorage state as a JSON download and lets the user
// restore a previously exported snapshot. Pairs with R148 (leech reset
// now actually persists) — the underlying store is only useful if the
// user has a way to recover from "cleared browser data". This feature
// makes la_srs, la_xp, streaks, activity, and every per-run coach's
// data durable across devices and accidental wipes.
//
// Run #150 BUG FIX: BKP_KEYS originally had 4 phantom key names
// (la_daily_counts, la_streak_current, la_streak_best, la_settings)
// that the app never writes — backups silently missed daily counts,
// streak-driving activity + frozen-days, and audio settings. Rewritten
// to the complete, verified list of keys the app actually uses.

const BKP_KEYS = [
  // --- SRS core ---
  'la_srs',                  // main SRS card data (ease/interval/lapses/due/reps)
  'la_sentence_srs',         // sentence-level SRS
  'la_phrase_srs',           // phrase SRS
  'la_srs_new_limit', 'la_srs_review_limit', 'la_srs_ease_start',

  // --- Activity / streak / goal ---
  'la_activity',             // drives current-streak computation
  'la_daily_ct',             // per-day review counts (goal bar, heatmap)
  'la_frozen_days',          // streak freeze days
  'la_freeze_tokens',        // remaining freeze tokens
  'la_daily_goal',           // user-chosen daily goal
  'la_daily_challenge',      // daily challenge state

  // --- XP / streaks / milestones ---
  'la_xp',                   // lifetime XP
  'la_xp_today',             // per-day XP history
  'la_streak_milestones',    // shown milestone badges
  'la_level_gates',          // level gate state
  'la_achievements',         // achievements dict

  // --- User-curated content ---
  'la_favs',                 // favorite words
  'la_phrase_favs',          // favorite phrases
  'la_custom_vocab',         // user-added vocab
  'la_word_lists',           // custom word lists
  'la_personal_notes',       // per-word notes
  'la_mistake_journal',      // mistake log

  // --- Session / history ---
  'la_session_size',         // preferred session size
  'la_session_history',      // past sessions
  'la_wotd',                 // current word of the day
  'la_wotd_history',         // WOTD archive
  'la_placement',            // placement test result

  // --- Audio / coach stats ---
  'la_audio_settings',       // voiceName/voiceLang/playbackRate/autoReplay/strict
  'la_autospeak',            // TTS auto-speak toggle
  'la_drill_autoplay',       // drill autoplay toggle
  'la_hmp_daily_v1',         // R144 audio heatmap daily counts
  'la_dc_stats',             // dialogue-fill stats
  'la_pdx_stats',            // pair-discrim stats
  'la_rtb_stats',            // root-browse stats
  'la_listen_scores',        // listen-story progress
  'la_proverb_progress',     // proverb quiz

  // --- UI preferences ---
  'la_theme',                // dark/light
  'la_font_idx',             // font size index
  'la_show_script',          // show Arabic script toggle
  'la_sfx',                  // sfx enabled
  'la_hard_mode',            // hard mode toggle
  'la_welcome_seen',         // seen welcome modal
];

const BKP_TIPS = [
  'Your progress lives in <b>localStorage on this browser</b>. Clearing site data, switching browsers, or reinstalling wipes it.',
  'Export a backup before any <b>browser cleanup</b>, OS reinstall, or if you want to study on a second device.',
  'Import <b>replaces</b> every key in the backup — SRS, streaks, XP, settings, and every coach\'s state — it is not a diff/merge.',
  'Backups are plain JSON. You can open them in any text editor and they travel over email/Airdrop/Drive.',
  'Export regularly (e.g. first of the month) — backups are only useful if they exist <b>before</b> the wipe, not after.',
];

const BKP_ABOUT = 'Backup bundles <b>' + BKP_KEYS.length + ' localStorage keys</b> that together reconstruct your study state. The snapshot is tagged <code>_app:"lebanese-arabic-v2"</code> so imports from other apps are rejected. Import fully replaces the listed keys — it is not a merge/diff. Your browser\'s File API handles the download/upload entirely client-side; nothing is uploaded to any server.';
