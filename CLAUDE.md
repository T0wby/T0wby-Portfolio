# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Tobias Nühlen's personal portfolio — a hand-written static site. No build step, no package manager, no tests, no framework. Everything is `index.html` + `css/` + `js/` + assets.

## Running and deploying

Open `index.html` in a browser, or serve the root to avoid `file://` quirks:

```bash
python -m http.server 8000
```

Deployment is GitHub Pages, legacy build from `main` at repo root — pushing to `main` publishes to https://t0wby.github.io/T0wby-Portfolio/. There is no workflow file and no CNAME; a push *is* the deploy.

## Architecture

**Sections are tabs, not scroll targets.** All four sections (`#home`, `#about`, `#portfolio`, `#contact`) live in `index.html` simultaneously, `position: fixed` and stacked. `js/script.js` shows exactly one by toggling `.active`; `href="#target"` on nav links is parsed with `.split("#")[1]`, never used for actual anchor scrolling. The `.back-section` class is a z-index trick that keeps the outgoing section visible underneath during the transition.

Adding a section means: a `<section class="... section" id="x">` block, a matching `<li><a href="#x">` in `.nav`, and section-specific CSS. `script.js` wires it up automatically from those two lists (`allSection` / `navList`) — but note the two are index-matched, so their order must stay in sync.

**Theming is two independent switches**, both in `js/style-switcher.js`, each persisted to `localStorage` (`skin` / `theme`) and reapplied on load:
- *Accent color* — `css/skins/color-1..5.css` each set only `--skin-color`. All five are `<link ... disabled>`; `setActiveStyle(name)` enables one by matching the link's `title` attribute. `index.html` also loads `color-1.css` unconditionally as the default.
- *Dark mode* — toggles `.dark` on `<body>`; `css/style.css` redefines the `--bg-black-*` / `--text-black-*` vars under `body.dark`.

Storage access is wrapped in `remember()` / `recall()` so a private-mode throw can't take the switcher down with it.

**Layout is a hand-rolled flexbox grid**, not Bootstrap despite the naming: `.row` (flex-wrap, `-15px` side margins) wraps children carrying `.padd-15` (15px side padding), and each child gets an explicit `flex: 0 0 <pct>` in `style.css`. Breakpoints: 1199px (aside collapses to a hamburger, `.open` toggles on aside *and every section*), 991px, 767px.

**External deps are CDN `<script>`/`<link>` tags only** — Typed.js 2.0.12 (drives the `.typing` rotator, strings configured at the top of `js/script.js`) and Font Awesome 5.15.4.

## Content conventions and gotchas

- **Contact details are duplicated** between the About section's `.personal-info` and the Contact section. Change both.
- **No CV PDFs are published.** The five variants were removed from `cv/` because they carry a home address and phone number, and GitHub Pages serves that folder at a guessable URL whether or not anything links to it. The Home section now ends after its intro paragraph, and the portfolio back page links `#contact` ("Request the CV") instead. Sources stay local — `cv/source/` is gitignored and was never committed.
- **Empty `<div class="portfolio-item padd-15">` blocks are deliberate spacers** keeping the 3-column grid aligned. They're commented as "portfolio filler" — don't delete them as dead markup.
- **`data-section-index="1"` on the Hire Me button is the index of the section being *left*** (about = 1 in the live DOM, since `#services` is commented out), not the destination. It only feeds the `.back-section` transition.
- **Only the active section is `visibility: visible`** — `.section` is hidden by default, so inactive sections stay out of the tab order and the accessibility tree. `visibility` (not `display`) is deliberate: the collapsed drawing sheets still need a layout box for `syncBoxes()` to measure. `.back-section` borrows a `holdBackSection` keyframe to stay on screen for the 1s slide, then falls back to hidden.
- **Brand icons need `fab`, not `fa`** — Font Awesome 5 aliases `fa` to `fas` (solid), so `fa fa-github` silently renders nothing.
- `.gitattributes` routes `*.mp4` through Git LFS (leftover from when portfolio videos were committed directly).
