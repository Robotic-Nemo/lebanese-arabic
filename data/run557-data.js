// R557 — BUG FIX: _renderNarWords / _renderCelWords / _renderBlgWords raw category labels
// NAR/CEL/BLG category filter buttons showed raw lowercase strings (device, flavor,
// congrats, birthday, negation, waiting, etc.) — same issue fixed for PRV/TTL in R551
// and HGL in R554. Redefine all three renderers via IIFE with emoji labels.
