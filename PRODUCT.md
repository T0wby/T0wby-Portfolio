# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primary — recruiters and hiring managers screening for C#/.NET roles.** German and EU, arriving from a link Tobias handed out (LinkedIn, an application, a GitHub profile). They are mid-screen, under time pressure, and deciding one thing: is this person worth a call. They want competence confirmed quickly and a CV in hand.

**Secondary — games-industry contacts and studios.** Real traffic, evaluating the Unity / Unreal / C++ / Vulkan work on its own terms. Not the audience the site is optimised for, but never the audience it insults.

Traffic is mixed and the site serves both from one page. When the two conflict, the .NET audience wins.

## Product Purpose

A personal portfolio for Tobias Nühlen that presents his professional profile and project work in one place, and hands the visitor a CV or a way to make contact.

Success is a visitor who leaves with an accurate picture of what he does and takes one of exactly two exits: downloads a CV, or reaches out.

## Positioning

**The crossover is the product.** Games-engine rigor applied to industrial line-of-business software — a developer who owns the UI layer of real industrial C#/.NET applications *and* has shipped engine-level work in C++, Vulkan, Unity and Unreal. Neither half leads alone; the combination is what a neighbouring portfolio cannot truthfully copy.

The claim must be demonstrated by the artifacts on the page, not asserted in copy.

## Operating Context

- Visitors arrive by a link, not by search. Attention is short and the visit is usually one session.
- The site is the bridge between a LinkedIn profile / application and a real conversation.
- Two exit paths exist and both are terminal: the CV PDF, and the contact details.
- Deployment is GitHub Pages, legacy build from `main` at repo root, published to https://t0wby.github.io/T0wby-Portfolio/. There is no workflow file and no CNAME — a push *is* the deploy.

## Capabilities and Constraints

**Fixed — future work must preserve these:**

- **EN and DE CV downloads as a primary action on the home screen.** Both, side by side, immediately reachable.
- **Section-tab navigation.** The four sections are swapped fixed panels, not scroll targets on a long page. The architecture stays.

**Incumbent, but not binding.** These are how the site is built today; the user did not mark them as constraints, so future work may change or remove them provided deployment stays a push to `main`:

- Hand-written static HTML + CSS + JS at repo root, no build step, no package manager, no framework. A build step is permitted.
- The theme switcher (five accent colors via `css/skins/color-1..5.css` plus a dark-mode toggle). Neither choice persists across reloads today.
- CDN-only external dependencies (Typed.js, Font Awesome).

**Other product facts:**

- No backend and no form handling. Contact is display-only — phone, email and social handles are rendered as plain text, currently not even as links.
- Contact details are duplicated between the About and Contact sections and must be changed in both.
- CV links are hardcoded filenames; renaming a PDF silently breaks a download button.
- Terminology: **Towby** is the online handle (logo, GitHub, X, itch.io); **Tobias Nühlen** is the professional name. Both are in use and both are correct in their own context.

**Open decisions — record, do not invent:**

- **German-language site copy is wanted but does not exist.** The site is English-only while the CVs are EN and DE. The user wants this to become bilingual; the mechanism, scope and trigger are undecided. Do not assume a specific i18n approach.
- The listed contact email is `tobiasnuehlen@gmx.de`; the git-authoring address is a different one. Which is canonical for the site has not been confirmed.

## Brand Commitments

Existing identity facts, not aesthetic direction:

- Professional name **Tobias Nühlen**; handle **Towby**, rendered in the logo as `T` + `owby`.
- A real personal photograph is used (`images/Tobi.jpg`) — this is a portfolio of a named person, not an anonymous product.
- No wordmark, logotype, brand palette or type commitment has been established.

## Evidence on Hand

**Real, on disk:**

- `cv/Lebenslauf_Tobias_Nuehlen_EN.pdf`, `_GER.pdf`, `_GER_ausfuehrlich.pdf`, `_GER_mitFoto.pdf`, `cv/Resume_Tobias_Nuehlen_US.pdf` — five CV variants, sources in `cv/source/*.docx`. Only the first two are linked from the site.
- `images/Tobi.jpg` — portrait.
- `images/portfolio/` — project stills.

**Real, linked externally:**

- Mixed Reality Roguelike Shooter (B.Sc. thesis, Oculus SDK) — YouTube showcase.
- Vulkan engine/application — `github.com/T0wby/SAE_Vulkan_Project`.
- *Genocide for Future* (diploma project, in development) — YouTube channel, trailer and gameplay video.
- 3D simulation project — `github.com/T0wby/SAE_Semester2Projekt`.
- Game jam entries *Spring in Space* and *Through Chimney to Your Home* — itch.io.
- Tower Defense and 2D Jump'n'Run — `github.com/T0wby/SAE_2dJumpNRun`.
- LinkedIn `in/tobias-nuehlen/`, GitHub `T0wby`, X `notTowby`.

**Verified employment and education history** is in the About timeline and matches the CVs: werusys Industrieinformatik (09.2024–present, promoted from Junior 09.2026), MSA GmbH C# trainee, G-Loot (Player Success Agent, League Operations), B.Sc. Games Programming and SAE Advanced Diploma from SAE Institute Cologne.

**Absences that must never be fabricated:** there are no testimonials, no client names, no case studies, no press coverage, no metrics or benchmarks, and no third-party endorsements. The percentage figures on the skill bars are self-assessments, not measurements.

## Product Principles

1. **Two audiences, one page, .NET first.** Everything must read correctly to a recruiter who has never heard of Unreal, without diminishing the games work for someone who has.
2. **Show the crossover, do not claim it.** The combination is the position, so the page has to make it visible through real artifacts side by side — not through a sentence saying the two are connected.
3. **The CV is the conversion.** Every screen keeps a downloadable CV and a way to make contact within reach; those two exits are the point of the site.
4. **Linkable artifacts beat self-ratings.** Prefer a video, a repo, a shipped build. Unfalsifiable numbers are the weakest evidence on a page that already has strong evidence.
5. **Stay bilingual-ready.** Copy and layout decisions should not bake in an assumption that English is the only language this site will ever carry.
