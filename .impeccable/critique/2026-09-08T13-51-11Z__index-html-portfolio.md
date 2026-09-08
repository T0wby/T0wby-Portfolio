---
target: portfolio
total_score: 13
max_score: 32
na_heuristics: 7,10
p0_count: 2
p1_count: 3
timestamp: 2026-09-08T13-51-11Z
slug: index-html-portfolio
---
**Method:** dual-agent (A: design review, isolated · B: detector + browser evidence, isolated)

Target: `index.html` §`#portfolio` (lines 322-473) · `css/style.css` · inspected at 1440x900 and 375x812, light and dark, accents 1/3/5. Mode: Experience.

## Detector integrity note

`detect.mjs` initially returned `[]` / exit 0 while running degraded — `htmlparser2`, `css-select`, `css-tree`, `domutils` were missing from the plugin install, so it fell back to regex matching. With those installed the same command returns **47 findings, exit 2**. `doctor.mjs` reports "no drift" and does not catch this. Deps were installed into the plugin cache `node_modules` (outside the repo); a plugin update will wipe them.

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | Nav active state clear; tiles have zero hover/focus/active feedback; eager iframes render as blank white boxes while loading |
| 2 | Match System / Real World | 2 | "My Last Projects :" false and mispunctuated; "Vulkan Engine/Applikation" German on an English page; "Showcase"/"Trailer"/"Gameplay" are YouTube's words |
| 3 | User Control and Freedom | 2 | All 7 outbound links open in same tab; JS-only nav writes no history, so Back exits the site |
| 4 | Consistency and Standards | 1 | Two projects both titled "Showcase"; 5 of 12 tiles inert yet all carry `cursor: pointer`; four aspect ratios in one grid; `h3.title` styled in About, unstyled here |
| 5 | Error Prevention | 2 | No forms, but five designed-in dead clicks and same-tab exits that end a one-session visit |
| 6 | Recognition Rather Than Recall | 1 | "Gameplay" belongs to a project two tiles back in a different row - memory bridge |
| 7 | Flexibility and Efficiency | n/a | Static body of work, one-session visit; no expert path exists |
| 8 | Aesthetic and Minimalist Design | 2 | Screenshots read well; frame has two holes, ragged rows, renders in Times New Roman |
| 9 | Error Recovery | 1 | Blocked iframe renders as empty bordered rectangle, no poster, no link; empty alt means a failed image renders as nothing |
| 10 | Help and Documentation | n/a | No task to document on a static gallery |
| **Total** | | **13/32 (41%)** | **Poor - major UX overhaul required** |

n/a heuristics: 7, 10. Applicable maximum: 32.

## Design Specificity Verdict

**Category-interchangeable.** An unedited free portfolio template with one person's screenshots dropped in. Template DNA still in the shipped file: `index.html:296-321` carries five commented-out "Services" cards containing lorem ipsum placeholder Latin. The fake-Bootstrap `.row`/`.padd-15` grid, double-dash section underline, `shadow-dark` card, Typed.js rotator, "Hire Me" button and five-swatch skin switcher are the standard kit in default order.

The five accent colors change nothing inside this section — switching to color-3/color-5 moved only the nav active state and the underline under "Portfolio". Twelve tiles, zero accent.

**Deterministic scan: 47 findings / 6 rules**, counted per element not per defect. Six real declarations produce all 47: `justified-text` x25 (`style.css:571`), `dark-glow` x15 (`style.css:159`), `low-contrast` x3, `gpt-thin-border-wide-shadow` x2, `tight-leading` x1, `skipped-heading` x1. In-scope for the portfolio the CLI found exactly one thing: `dark-glow` x12. Browser overlay added `heading-rhythm` x11 and `line-length` x1 that the CLI missed.

**False positives:** `low-contrast` evaluated `#f021b2` from `color-5.css`, which ships disabled; the real active-skin figure is 4.42:1 on the CV buttons and nav, not here. `tight-leading` matches nothing in the live DOM — likely pairs declarations from the commented-out `#services` CSS surviving at `style.css:592-637`.

The detector has no rule for the two worst problems: the portfolio contradicting the positioning, and an invalid `font-family` list.

## Overall Impression

The evidence is genuinely good and the container cannot hold it. A Vulkan renderer, an MR thesis with real Oculus SDK work, and a diploma game with real art direction are poured into a grid that cannot fit a portrait poster without blowing the row to 510px, cannot fit 16:9 video because the iframe is hardcoded 330x315, cannot express that three tiles are one project — rendered in the browser's default serif.

Biggest opportunity is not visual: the tab named "Portfolio" contains zero .NET work, and PRODUCT.md commits to the crossover being the product.

## What's Working

1. **Evidence is real, linkable, honestly presented.** Seven outbound links to GitHub/itch.io/YouTube, four playable embeds, zero fabricated testimonials or metrics. PRODUCT.md's "absences that must never be fabricated" list is fully respected.
2. **Screenshots well-chosen and legible at 333px.** MR Shooter frame shows an actual playtest scene with diegetic UI; Vulkan render shows a real shader result on real geometry.
3. **In-page playable video is the right affordance for game work.** Mechanism correct; only labeling and sizing wrong.

## Priority Issues

### [P0] The Portfolio section contains zero .NET work
Twelve tiles, eight projects, all games/engine experiments 2022-2024. .NET, C#, WPF, UWP, Blazor, EF Core, SQL Server appear zero times, while the About timeline documents two years of exactly that. Primary audience clicks "Portfolio" expecting evidence for the Home copy and finds a games graduate whose last shown work predates the job. Makes the Home copy look inflated.
**Fix:** First row of professional work above the games, both groups labeled. NDAs likely block werusys screenshots — use a redacted WPF-MVVM component, the Blazor breakpoint architecture as a diagram, an EF Core query pattern, the Avalonia MVVM work from MSA. If nothing can be shown, say so in a lead paragraph.
**Command:** `/impeccable shape portfolio`

### [P0] Dark mode erases every project title
No CSS rule targets `.portfolio-item .title`; the rule at `style.css:497` is scoped `.about .about-content h3.title`. The h3 falls back to UA-default black. Measured: black on #151515 = **1.15:1** (AA needs 4.5:1; fails even 3.0:1 large-text). Section heading stays white via `--text-black-900`, proving theming works — this selector was never written.
**Fix:** `.portfolio .portfolio-item .title { color: var(--text-black-900); font-size: 18px; font-weight: 600; margin-bottom: 12px; }`
**Command:** `/impeccable audit portfolio`

### [P1] Eleven unnamed tab stops, no focus indicator anywhere
All 8 images have empty alt, all 4 iframes no title, all 7 links wrap only an image with `h3.title` outside the anchor. Verified live: all 11 focusable elements have zero accessible name. `style.css:28` sets `outline: none` on the universal selector; the only `:focus` rule (line 749) targets a contact form absent from the markup.
**Fix:** Descriptive alt per image, title on every iframe, `a:focus-visible, iframe:focus-visible { outline: 2px solid var(--skin-color); outline-offset: 3px; }` plus matching hover.
**Command:** `/impeccable audit portfolio`

### [P1] Three orphaned media tiles turn 8 projects into 12 unidentifiable things
"Showcase", "Trailer(German)", "Gameplay", second "Showcase" are bare iframes titled by media format. "Gameplay" belongs to "Diploma Project" but sits in the next row with a Vulkan tile between. Two projects both called "Showcase". Cognitive load: one decision point, 12 visible options — deep in the 8+ abandon band on a surface whose guidance is one decision per screen.
**Fix:** Collapse each project to one tile with media inside — poster frame plus labeled links beneath the title. Eight tiles, eight projects.
**Command:** `/impeccable distill portfolio`

### [P1] One missing comma renders the entire site in Times New Roman
`css/style.css:22` reads `font-family: 'Poppins' sans-serif;` — no comma, invalid list, declaration dropped. The `@import` works (Clicker Script renders in the logo), so Poppins downloads every load and is never applied. Compounding: two empty `portfolio-item` divs (`index.html:358-359`, `432-433`) render as 375x362 holes, one beside the flagship thesis; tile inner heights run 171 / 199 / 280 / 482 / 334px so rows pad to the tallest, leaving ~230px dead air beside the Vulkan tile.
**Fix:** One comma. Delete both fillers. `.portfolio-img { aspect-ratio: 16/9 }` with `object-fit: cover`; replace iframe 330x315 with `width:100%; height:100%`.
**Command:** `/impeccable layout portfolio`

## Persona Red Flags

**Katrin - .NET hiring manager, Cologne (primary):** Six minutes, a stack of applications. Finds no line-of-business artifact she can evaluate. Reads "My Last Projects" literally, concludes last real project was 2024, before the werusys job. Notices "Applikation" misspelled in German on an English page.

**Marcus - tech lead, games studio (secondary):** B.Sc. thesis at identical visual weight to a 48-hour Christmas jam. No dates, engine tags, role, team size, or scope. Cannot tell what was solo, coursework, or shipped. Clicks the Vulkan repo in the same tab and is gone.

**Sam (accessibility-dependent):** Eleven consecutive tab stops announced as bare "link"/"frame", no name on any, no visible focus ring anywhere. Dark-mode toggle drops all twelve titles to 1.15:1. Unusable in both modalities at once.

**Casey (distracted mobile):** 4209px scroll, 5.2 screens, no progress cue. At 375px all four `.portfolio-item-inner` overflow (scrollWidth 330 vs clientWidth 303) — 27px of every YouTube embed silently clipped by `overflow: hidden`; no CSS rule in the project targets iframes. Hamburger pushes content 270px right instead of overlaying. All four sections are `position: fixed` and always in the DOM, so she downloads 5.8 MB of eager PNGs (incl. `tower_defense.png` at 1020 KB for a tile that is not clickable) before opening this tab.

**Jordan (first-timer):** "Showcase" is the second thing on screen — of what? Clicks Tower Defense because `cursor: pointer` says so; nothing happens. Clicks Spring in Space, lands on itch.io in the same tab, hits Back, and the JS-only nav wrote no history entry, so Back leaves the site.

## Minor Observations

- "My Last Projects :" — French space before colon; "Last" is a Germanism for "latest"; and it is not true. "Selected work" is accurate.
- `2D Jump'n Run'` stray trailing apostrophe. Missing spaces before parens: `Diploma Project(In Development)`, `Spring in Space(GameJam)`, `Trailer(German)`.
- Tower Defense has no link though PRODUCT.md lists the repo. The Genocide poster links to a YouTube channel, not anything specific.
- "Portfolio" and "My Last Projects :" are both h2 siblings. Overlay flagged `heading-rhythm` x11 page-wide — 0px above vs 12-40px below, so headings read as bound to the block above.
- Every project is undated, hiding a clean arc: degree finishes 2024, professional .NET starts immediately after.
- `images/portfolio/Chimney.jpg` (988 KB) unreferenced; only the .png is used.
- Dead script at `index.html:467-472` sets volume on `.custom-video` elements that no longer exist.
- No `loading="lazy"` anywhere; 1s `slideSection` animation is ~4x modern norms and unskippable.
- Zero console errors, all 30 requests 200.

## Questions to Consider

1. If a .NET hiring manager only ever opened this one tab, what would they conclude you do for a living?
2. PRODUCT.md says the crossover must be shown, not claimed. Where on this screen do the two halves touch?
3. Eight projects are presented as twelve tiles and two holes. What would three tiles look like?
4. The last thing a visitor sees is a school platformer and an empty column. PRODUCT.md says the CV and contact are the two exits and the point of the site; neither is near the bottom of this 4200px scroll.
