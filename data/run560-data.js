// R560 — BUG FIX: _renderAlhDrill/_renderBntDrill/_renderFrcDrill/_renderNetDrill missing completion state
// These four coaches use modulo wrap-around (_xxxDrillIdx % _xxxDrillShuf.length) so the
// drill set silently cycles back to the start without showing "All done! Restart" feedback.
// Same bug fixed for FLR in R545. Redefine all four with the completion guard pattern.
