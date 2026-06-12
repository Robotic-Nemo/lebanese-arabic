// R1256 — BUG FIX: openCdr + openRns missing DrillReset on reopen; openLmn missing bumpAchievementCounter
// openCdr never reset _cdrDrillIdx/_cdrPickedIdx → drill resumes mid-session on reopen
// openRns never reset _rnsDrillIdx/_rnsPickedIdx → same bug
// openLmn never called bumpAchievementCounter('lmn_open')
