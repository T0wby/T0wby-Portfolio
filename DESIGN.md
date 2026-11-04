---
name: Tobias Nühlen — Portfolio
description: A hand-written static portfolio whose project register is drawn as a DIN 6771 drawing set.
colors:
  page-ground: "#f2f2fc"
  sheet-ground: "#fdf9ff"
  rule-hairline: "#e8dfec"
  ink: "#302e4d"
  ink-secondary: "#504e70"
  page-ground-dark: "#151515"
  sheet-ground-dark: "#222222"
  rule-hairline-dark: "#393939"
  ink-dark: "#ffffff"
  ink-secondary-dark: "#e9e9e9"
  signal-crimson: "#e71838"
  signal-rust: "#cd4b0c"
  signal-pine: "#298561"
  signal-cobalt: "#1854b4"
  signal-magenta: "#d81ea0"
  signal-ink: "color-mix(in srgb, var(--skin-color) 94%, #000)"
  signal-ink-dark: "color-mix(in srgb, var(--skin-color) 75%, #fff)"
typography:
  display:
    fontFamily: "Archivo, 'Segoe UI', system-ui, sans-serif"
    fontSize: "30px"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.01em"
    fontVariation: "wdth 80"
  headline:
    fontFamily: "Archivo, 'Segoe UI', system-ui, sans-serif"
    fontSize: "19px"
    fontWeight: 600
    lineHeight: 1.3
    fontVariation: "wdth 92"
  title:
    fontFamily: "Archivo, 'Segoe UI', system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 600
    lineHeight: 1.4
    fontVariation: "wdth 90"
  body:
    fontFamily: "Archivo, 'Segoe UI', system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.6
  caption:
    fontFamily: "Archivo, 'Segoe UI', system-ui, sans-serif"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Archivo, 'Segoe UI', system-ui, sans-serif"
    fontSize: "11px"
    fontWeight: 600
    letterSpacing: "0.13em"
  wordmark:
    fontFamily: "'Clicker Script', cursive"
    fontSize: "30px"
    fontWeight: 400
rounded:
  none: "0px"
  focus: "2px"
spacing:
  hair: "5px"
  xs: "7px"
  sm: "12px"
  md: "16px"
  lg: "18px"
  xl: "22px"
  xxl: "40px"
components:
  ds-frame:
    backgroundColor: "{colors.page-ground}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
  ds-set-cell:
    backgroundColor: "{colors.sheet-ground}"
    textColor: "{colors.ink}"
    typography: "{typography.title}"
    padding: "12px 16px"
    rounded: "{rounded.none}"
  ds-filter:
    backgroundColor: "transparent"
    textColor: "{colors.ink-secondary}"
    typography: "{typography.label}"
    padding: "5px 10px"
    rounded: "{rounded.none}"
  ds-filter-pressed:
    textColor: "{colors.signal-ink}"
  ds-row:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.headline}"
    padding: "15px 14px 15px 18px"
    rounded: "{rounded.none}"
    width: "100%"
  ds-row-hover:
    backgroundColor: "{colors.sheet-ground}"
  ds-sheet-inner:
    backgroundColor: "{colors.sheet-ground}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
  ds-block-cell:
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    padding: "11px 16px 11px 12px"
  ds-close-btn:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    padding: "11px 22px"
    rounded: "{rounded.none}"
  ds-close-btn-hover:
    textColor: "{colors.signal-ink}"
---

# Design System: Tobias Nühlen — Portfolio

> **Scope note.** This site is a partial world. The **Portfolio section is the system** recorded here: a
> drawing set built from scratch. **Home, About and Contact still carry the incumbent free-template
> look**, which the user named an anti-reference; they are legacy, not system. Tokens marked
> site-wide below are shared and current. Everything under the drawing-set headings is scoped to
> `.portfolio` and is what new surfaces should inherit from.

## Overview

**Creative North Star: "The Drawing Set"**

The portfolio is a technical drawing set to DIN 6771 conventions: a sheet frame with corner
registration marks, a title block as a labelled cell grid, a numbered register of sheets hung on a
continuous year axis, and authored line schematics drawn at the same stroke weight as the rules
around them. The thesis is that industrial .NET work and real-time engine work are documented on the
*identical* spec sheet, so a reader compares them in one format instead of reading nine differently
styled marketing cards. Nothing on a sheet is free to shout louder than its neighbour.

The register is a drafting document, not a gallery. Density is high and ornament is zero: no radii,
no gradients, no shadows, no imagery outside the drawing area of an opened sheet. Everything is
carried by one ink, one hairline, and one accent used as a *signal* rather than as decoration. Where
a project's source cannot be shown, the drawing shows the architecture and the frame edge itself says
so — the encoding is in the line, not in a badge.

Legibility is a hard constraint, not a preference. All five accents were darkened until white text on
them passes WCAG AA, and small accent text is drawn from a theme-aware derived ink rather than the
raw accent so it stays readable on the light page and the dark one.

**Key Characteristics:**
- One stroke weight (1.5px) for every rule, border, SVG stroke and the +/− mark
- Zero corner radius throughout the world; the only radius on the page is the 2px focus ring
- Tabular figures everywhere inside the register
- Uppercase, wide-tracked 11px labels as the only label grammar
- Accent appears as a signal (marks, fills, pressed state, current-work dot) and nothing else
- Solid vs dashed left frame edge encodes published source vs under-NDA

## Colors

A near-monochrome ink-on-sheet palette carrying one swappable accent that behaves as a status signal.

### Primary
- **Signal** (`--skin-color`, default Signal Crimson): the live signal. Five interchangeable accents
  ship — crimson, rust, pine, cobalt, magenta — one active at a time via the skin switcher, all
  darkened in this build to pass WCAG AA for white text. In the drawing set it appears only on: the
  current-work dot, the expand mark on hover/open, the sheet number of a hovered or open row, the
  pressed filter's border, the `.sig` strokes inside schematics (flow direction and bindings), the
  global focus ring, and `::selection`.
- **Signal Ink** (`--ds-signal-ink`; the accent mixed toward black on light, toward white in dark
  mode): the *text* form of the accent. Every small accent-coloured word, link and pressed label uses
  this, never the raw accent. Fills and strokes use the raw accent; text does not.

### Neutral
- **Page Ground** (`--bg-black-900`, site-wide): the surface the whole page and the register sit on.
  Light theme is a lavender-tinted near-white, dark theme a true near-black.
- **Sheet Ground** (`--bg-black-100`, site-wide; `--ds-sheet` inside the world): the filled cell — set
  title block, row hover, expanded sheet body, closing block.
- **Hairline** (`--bg-black-50`; `--ds-line`): the interior rule. Every subdivision inside a frame.
- **Ink** (`--text-black-900`): designations, values, drawing strokes.
- **Secondary Ink** (`--text-black-700`; `--ds-line-strong`): labels, captions and stack lines, and the
  *structural* rule — outer frame, registration marks, year axis, row left edge.

### Named Rules

**The Two Rule Weights Rule.** Lines come in exactly two colours and one thickness. Structural edges
(frame, axis, row left edge, registration marks) use Secondary Ink; subdivisions inside a frame use
Hairline. Never a third.

**The Signal-Is-Status Rule.** The accent marks state, not importance: current, hovered, open,
pressed, focused, or flow direction in a schematic. If a use of the accent does not answer "what state
is this in", it does not get the accent.

**The Derived-Ink Rule.** Accent as fill or stroke uses `--ds-signal`; accent as text uses
`--ds-signal-ink`. Any new accent-coloured text inherits the derived value so it survives both themes.

## Typography

**Display / Body / Label Font:** Archivo (variable, `wdth 62–125`, `wght 300–800`), with
`'Segoe UI', system-ui, sans-serif` fallback — one family for the entire site.
**Wordmark Font:** Clicker Script, used **only** for the `Towby` logo in the aside.

**Character:** Archivo is a grotesque with a real width axis, which is what makes the drawing set
work: year markers compress to `wdth 80` so a four-digit number sits inside a 76px gutter,
designations run at `wdth 92` to keep long project titles on two lines, and captions stay at normal
width. The voice is plain, engineered, and never decorative.

### Hierarchy
- **Display / year marker** (700, 30px, `wdth 80`, line-height 1): the year on the register axis. Drops
  to 24px at 991px and 17px at 767px.
- **Headline / designation** (600, 19px, `wdth 92`, 1.3): the project title in a register row. Its
  `<small>` subline (400, 13px) carries employer and date span.
- **Title / set value** (600, 16px, `wdth 90`, 1.4): the values in the set title block cells, with a
  12px sub-note under each.
- **Body / sheet value** (400, 14px, 1.6): title-block values inside an opened sheet. The `Shows`
  field runs one step up (500, 15px) as the sheet's lede.
- **Caption** (400, 12px, 1.6): drawing captions and NDA notes.
- **Label** (600, 11px, `0.13em` tracking, uppercase): every field name — `DRAWING SET`, `SHEETS`,
  `ROLE`, `STACK`, `SOURCE`, `CURRENT`. Filters, legend and the sheet count run the same size at
  `0.09em`.
- **Stack line** (600, 12px, `0.07em`, uppercase): the technology column of a register row.

### Named Rules

**The Tabular Figures Rule.** `font-variant-numeric: tabular-nums` is set on everything inside the
register. Sheet numbers, years and date spans must align in a column; proportional figures break the
document.

**The Label Grammar Rule.** Field names are uppercase, 11px, 600, tracked `0.13em`, in Secondary Ink.
That is the only label style. New fields adopt it verbatim; no sentence-case field names, no bold
inline labels.

**The One Family Rule.** Archivo carries display, body and label. Differentiate by weight, size and
the width axis — never by adding a second face. Clicker Script is the logo only and is not available
to any other surface.

## Layout

The site is a fixed-panel tab architecture: four sections stacked at `position: fixed`, one shown at a
time. Content sits in a centred container (max-width 1100px) inside a hand-rolled flex grid — `.row`
at `-15px` side margins wrapping children with 15px side padding.

The drawing set occupies one full-width column and is built from three stacked structures:

1. **Sheet frame** (`.ds-frame`) — a 1.5px structural border with four 9px square registration marks
   pinned 5px outside the corners (two on the frame, two on the set block), each filled with page
   ground so it reads as a punched mark rather than a dot.
2. **Set title block** (`.ds-set`) — a 4-column grid of labelled `dl` cells (12px/16px padding),
   divided by hairlines, with the legend + filter bar beneath it on its own hairline row.
3. **Register on a year axis** (`.ds-axis`) — an 84px left gutter with a continuous vertical rule at
   60px running the full height. Each year band hangs its label in the gutter (76px, right-aligned)
   and connects to the axis with a 25px tick, then extends a hairline across the remaining width.

Rows are 15px/18px padded on a 4-column grid: `3rem` sheet number, fluid designation, `13rem` stack,
`1.4rem` mark. An opened sheet splits `1.15fr / 1fr` — drawing left, title block right, the title
block bottom-aligned so its last row lands level with the drawing area's base.

Spacing rhythm runs on a small set of steps: 5/7px inside marks and legends, 11–12px inside cells,
16–18px inside frames and drawing areas, 22px in the closing block, 40px above it.

**Breakpoints (site-wide):** 1199px — the 270px aside collapses to a hamburger and `.open` shifts
every section; 991px; 767px.

**Drawing-set responsive behaviour:**
- **≤991px** — set grid drops to 2 columns (right border cleared on every second cell, bottom hairline
  added to the first row); the opened sheet goes single-column and the drawing area's right border
  becomes a bottom border.
- **≤767px** — set grid becomes a single column with hairlines between cells; the filter bar loses its
  right alignment; register rows reflow to 3 columns with the stack line dropping to its own row under
  the designation and the mark pinned top-right; the axis gutter narrows from 84px to 52px (rule at
  38px, tick 15px); schematics take a `520px` minimum width inside a horizontally scrolling drawing
  box, and the otherwise hidden "Drawing scrolls sideways" note appears.

### Named Rules

**The Continuous Axis Rule.** The year axis is one unbroken rule spanning the whole register, not a
per-band segment. Bands attach to it with ticks. When a filter empties a band, the band and its list
are both hidden so the axis never carries an empty year.

**The In-Place Rule.** A sheet opens where it sits. No modal, no detail page, no route change; the
reader never loses their place in the register.

## Elevation & Depth

**The drawing set has no elevation.** There are no shadows, no blurs and no layered surfaces anywhere
in `.portfolio`. Depth is entirely tonal and structural: a filled cell (sheet ground) reads as forward
against page ground, and a structural rule reads as forward against a hairline. That is the whole
vocabulary.

### Shadow Vocabulary (site-wide legacy only)
- **`.shadow-dark`** (`box-shadow: 0 2px 12px rgba(48, 46, 77, 0.13)`): a soft downward-offset drop
  carried by the legacy sections (aside, cards, buttons). It exists on the page; it is **not**
  available inside the drawing set.

### Named Rules

**The Flat Sheet Rule.** Nothing in the drawing set casts a shadow. A surface that needs to come
forward is filled with sheet ground or bounded by a structural rule — never lifted.

## Shapes

Right angles only. Zero border-radius is the world's form language: frame, cells, filters, media
boxes, and the closing block's buttons, which explicitly override the site's legacy 40px pill. Two
exceptions, both functional: the 2px radius on the global focus ring, and the 7px accent dot marking
current work.

Form is made of rules, not fills. The recurring silhouettes are the bounded rectangle with a labelled
grid inside it (title blocks), the hairline-divided cell row, the axis-with-ticks, and the 9px square
registration mark. Schematics repeat those same primitives at drawing scale — plain rects, `7 5`
dashed paths for internal divisions, and 10px arrowheads.

The most load-bearing shape rule is stroke weight: `--ds-rule` (1.5px) is used for every CSS border in
the section, is mirrored as `stroke-width: 1.5` with `vector-effect: non-scaling-stroke` in every SVG,
and is even the thickness of the two bars in the +/− expand mark.

### Named Rules

**The One Weight Rule.** 1.5px, everywhere, at every scale. A schematic scaled down keeps its stroke
via `non-scaling-stroke`. No hairline is thinner and no emphasis line is thicker; emphasis is a colour
change, never a weight change.

**The Square Corner Rule.** Radius is zero inside the drawing set. The only permitted curves are the
focus ring (2px) and the 7px current-work dot.

## Components

### Sheet Frame (`.ds-frame`)
The document boundary. Structural 1.5px border with registration marks at all four corners (9px
squares, page-ground filled, offset −5px). Contains the set block and, below it, the register.

### Set Title Block (`.ds-set` / `.ds-cell`)
The set's own header, sheet-ground filled, sitting directly under the frame edge. Four `dl` cells —
`Drawing set`, `Sheets`, `Period`, `Discipline` — each an uppercase label over a 16px value with an
optional 12px sub-note. Hairline dividers between cells, none after the last.

### Legend and Filters (`.ds-bar`, `.ds-legend`, `.ds-filter`, `.ds-count`)
- **Legend:** two entries, each a 26px specimen line before its uppercase label — solid for
  *Source published*, dashed for *Interior only*. The legend teaches the frame-edge encoding.
- **Filter chips:** square 1.5px-outlined buttons, uppercase 11px, transparent fill, 5px/10px padding.
  Unpressed is Secondary Ink on a hairline border; hover raises text to Ink and border to structural;
  `aria-pressed="true"` is Signal Ink text on an accent border. Never filled.
- **Count:** an uppercase `role="status"` line reading "N of 8 sheets", updated on every filter click.

### Register Row (`.ds-row`)
A real `<button>`, full width, transparent, no border except a 1.5px structural **left edge** — solid
when the source is published, dashed when `data-source="nda"`. Grid: number / designation / stack /
mark. Hover fills with sheet ground and turns the number and mark to accent. `aria-expanded` mirrors
open state; `aria-controls` points at the sheet body.

### Expand Mark (`.ds-mark`)
A 13px plus built from two 1.5px bars. On open the vertical bar collapses (`scaleY(0)`) over 0.32s
`cubic-bezier(0.16, 1, 0.3, 1)`, leaving a minus. Decorative and `aria-hidden`; the button's
`aria-expanded` carries the meaning.

### Opened Sheet (`.ds-body`, `.ds-sheet-inner`)
Two columns, `1.15fr / 1fr`, sheet-ground filled, with the same structural left edge (dashed under
NDA) continuing from its row. Reveals with the `ds-reveal` keyframe — 8px downward slide plus fade,
0.42s, same easing — suppressed entirely under `prefers-reduced-motion: reduce`.

### Drawing Area (`.ds-draw`, `.ds-dwgbox`, `.ds-dwg`, `.ds-media`)
18px padded, hairline right border. Holds either an authored SVG schematic or a 16:9 media box
(hairline-bordered, page-ground backed; the `--fit` variant adds a 45° 7px hatch behind letterboxed
stills). Below it, a 12px caption. Schematics inherit `currentColor` for strokes, use `.dash` (`7 5`)
for internal divisions and `.sig` for accent flow strokes, and label at 11px uppercase (10px in
Secondary Ink for secondary labels).

### Sheet Title Block (`.ds-block`)
Bottom-aligned stack of two-column `dl` rows (`6.5rem` label column, `5.5rem` at 767px), each row
closed by a hairline, the last row unruled. Fields: `Shows` (15px/500 lede), `Role`, `Period`,
`Stack`, `Source`. Links inside are Signal Ink with a 1.5px `currentColor` underline at 3px offset.

### Closing Block (`.ds-close`)
The two exits, as a two-cell framed grid at the end of the set: CV downloads and contact. Square
outlined buttons (1.5px structural border, transparent, uppercase 13px at `0.09em`, 11px/22px
padding) that on hover shift border and text to accent, with the legacy pill's scale and shadow
explicitly zeroed.

### Navigation (site-wide, legacy)
The 270px fixed aside with the Clicker Script wordmark and a vertical link list; below 1199px it
collapses behind a hamburger. **Legacy — not part of the drawing set's system.**

## Do's and Don'ts

### Do:
- **Do** draw every rule, border, SVG stroke and mark at `--ds-rule` (1.5px), with
  `vector-effect: non-scaling-stroke` on anything that scales.
- **Do** use exactly two line colours: Secondary Ink for structure, Hairline for subdivision.
- **Do** encode source availability in the left frame edge — solid for published, dashed for NDA — and
  always ship the legend that explains it.
- **Do** set accent *text* from `--ds-signal-ink` and accent *fills and strokes* from `--ds-signal`.
- **Do** label every field in uppercase 11px, 600, tracked `0.13em`, in Secondary Ink.
- **Do** keep `font-variant-numeric: tabular-nums` on everything inside the register.
- **Do** build expand and filter controls as real `<button>` elements carrying `aria-expanded` /
  `aria-controls` / `aria-pressed`, and make any horizontally scrolling drawing box focusable
  (`tabindex="0"`, `role="region"`, an `aria-label`) with a visible scroll note at 767px.
- **Do** give every schematic a `<title>` and `<desc>` referenced by `aria-labelledby`.
- **Do** guard every animation behind `prefers-reduced-motion: reduce`.
- **Do** keep all five accents at AA contrast for white text before adding a sixth.

### Don't:
- **Don't** introduce a second stroke weight to signal emphasis. Emphasis is colour.
- **Don't** round a corner inside the drawing set; radius is 0 except the 2px focus ring.
- **Don't** apply `.shadow-dark` or any box-shadow to a drawing-set surface.
- **Don't** colour anything with the accent unless it reports state (current, hover, open, pressed,
  focus, or flow direction).
- **Don't** open a sheet in a modal, an overlay or a separate route; sheets expand in place.
- **Don't** leave a year band on the axis when a filter has emptied it, or leave a filtered-out sheet
  expanded behind the filter.
- **Don't** add a second type family. Differentiate with Archivo's weight and width axes.
- **Don't** show an employer's product interface; NDA sheets carry an architecture schematic and say
  so in the caption and in the `Source` field.
- **Don't** carry the legacy sections' patterns — the pill button with its hover scale, the double
  accent bar under the section title, the Font Awesome glyph icons, the percentage skill bars — into
  the drawing set or into any new surface.

### Open, not decided
The drawing set sits directly on the incumbent page ground (`--bg-black-900`, a lavender-tinted
near-white inherited from the template) rather than on a paper ground of its own. This is an **open
decision the user has been asked about**, recorded here as the shipped state — not as a chosen system
rule. If a dedicated paper ground is adopted later, it replaces the page ground *inside* `.portfolio`
only.
