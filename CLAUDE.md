# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static personal website for Fabio Bosio (IT Developer Consultant), deployed to GitHub Pages via GitHub Actions. No build step, package manager, or framework — plain HTML, CSS and a little vanilla JS.

## Deployment

Pushing to `main` automatically deploys to GitHub Pages via `.github/workflows/static.yml`. The entire repository root is served as the site. Work on feature branches and merge to `main` only when ready to publish.

`.github/workflows/preview.yml` deploys `main` at the root plus the `redesign/ui-theme` branch under `/preview/` (requires that branch to be allowed in the `github-pages` environment). A later push to `main` removes `/preview/` until the preview workflow runs again.

## Structure

- `index.html` — Splash screen (logo animation), redirects to `home.html` via `assets/js/splash.js`
- `home.html` — Home: hero, at-a-glance stats, services preview, selected work, process, CTA
- `about.html` — Bio, career timeline (from CV), skills, education
- `services.html` — Services, AI + dashboards spotlight, process, sectors
- `portfolio.html` — Project cards; full case studies to be added (template in an HTML comment)
- `contact.html` — Contact details and engagement types (no form)
- `assets/css/styles.css` — Design system: tokens, light/dark themes, components
- `assets/js/main.js` — Theme toggle, mobile menu, sticky header, scroll reveal, footer year
- `assets/images/` — Logo and SVG illustrations (`project-*.svg`, `ai-business.svg`, `dashboard-analytics.svg`)

## Conventions

- Every content page shares the same header, nav and footer. Nav order: Home, About Me, Services, Portfolio, Contact (Contact uses `nav-cta`).
- Exactly one nav link per page carries `class="active"` (plus `aria-current="page"`).
- Each page's `<head>` includes Google Fonts (Space Grotesk, Inter, JetBrains Mono), `styles.css`, and the inline theme script that reads `localStorage.theme` before paint.
- Light theme is the default for everyone; dark mode only applies after the visitor uses the toggle.
- The splash animation in `index.html` must match the original: logo grows from 0 to `75vmin` in 3s on a white background, then redirects to `home.html`.
- Brand colors come from the logo: blue `#018CCF`, slate `#39464E`. Use CSS variables (`--brand`, `--text`, `--surface`, …), never hard-coded colors in pages, so dark mode keeps working.
- Reuse existing component classes (`card`, `bento`, `timeline`, `steps`, `cta-band`, `tags`, `btn`, …) before adding new CSS. Add `reveal` to blocks for scroll animation.
- Do not publish phone number, home address or date of birth.
