// R563 — BUG FIX: _renderAlhWords / _prsRenderBrowse raw category labels
// ALH showed text labels without emojis (All, Inshalla, Hamdilla, etc.)
// PRS showed plain text (Positive, Negative, Appearance, Mood)
// Redefine both renderers via IIFE with emoji category labels.
