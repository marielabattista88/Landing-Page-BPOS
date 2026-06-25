// Shared scroll-reveal config for landing sections.
//
// Why this exists: reveals used negative pixel viewport margins (e.g. "-80px")
// plus per-index stagger delays. On desktop (multi-column grids) that reads as a
// pleasant cascade, but on mobile the grids collapse to a single column — each
// card triggers its own reveal as it scrolls in, yet still carried an absolute
// `i * delay`, so lower cards sat visible-but-blank for up to ~0.5s. Combined
// with the negative margin (which delays the trigger on short screens), elements
// "popped in late" as you scrolled. Both are fixed here:
//
//  - `revealViewport` triggers on a fraction of the element (amount-based), so it
//    fires consistently regardless of screen height — no more late reveals on
//    short mobile viewports.
//  - `staggerDelay` caps the cascade so stacked mobile cards never lag noticeably,
//    while desktop rows keep a subtle stagger.

/** Trigger when ~20% of the element is visible. Responsive across screen sizes. */
export const revealViewport = { once: true, amount: 0.2 } as const;

/**
 * Gentle, capped stagger for grids. Defaults keep the worst-case delay at ~0.18s
 * so a column of stacked cards on mobile reveals briskly instead of lagging.
 */
export const staggerDelay = (i: number, step = 0.06, max = 0.18) =>
  Math.min(i * step, max);
