// R569 — BUG FIX: _clrRenderDrill/_fodRenderDrill/_bdyRenderDrill/_dirRenderDrill missing completion state
// These older coaches used _xxxDrillIdx % drills.length — loop forever, no "all done" screen.
// Fix via IIFE adding completion guard to each render function.
