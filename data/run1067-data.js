// R1067 — BUG FIX: DrillReset for mng/dsr/cmx/frm/grp/rnt/gld/wap openX functions
// Root cause: openX functions call setXTab('vocab') but don't reset _xDrillIdx/Answered/PickedIdx/Score
// Fix: wrap each openX to reset drill state before showing overlay
