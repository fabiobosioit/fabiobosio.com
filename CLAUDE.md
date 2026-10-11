# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static personal website for Fabio Bosio (IT Developer Consultant), deployed to GitHub Pages via GitHub Actions. No build step, package manager, or framework — plain HTML, CSS and a little vanilla JS.

## Deployment

Pushing to `main` automatically deploys to GitHub Pages via `.github/workflows/static.yml`. The entire repository root is served as the site. Work on feature branches and merge to `main` only when ready to publish.

`.github/workflows/preview.yml` deploys `main` at the root plus the `redesign/ui-theme` branch under `/preview/` (requires that branch to be allowed in the `github-pages` environment). A later push to `main` removes `/preview/` until the preview workflow runs again.

## Structure

The site is bilingual (Italian and English): one folder per language, fully translated static pages, same file names in both.

- `index.html` — Splash screen (logo animation); `assets/js/splash.js` redirects to `it/home.html` or `en/home.html` (saved choice in `localStorage.lang`, then browser language: Italian → `it`, anything else → `en`). Also the hreflang `x-default`.
- `it/` and `en/` — The five content pages, one copy per language: `home.html`, `about.html`, `services.html`, `portfolio.html`, `contact.html`.
  - Home: hero, at-a-glance stats, services preview, selected work, process, CTA
  - About: bio, career timeline (from CV), skills, education
  - Services: services, AI + dashboards spotlight, process, sectors
  - Portfolio: project cards; full case studies to be added (template in an HTML comment)
  - Contact: contact details and engagement types (no form)
- `home.html`, `about.html`, `services.html`, `portfolio.html`, `contact.html` (root) — Redirect stubs to `it/…` so old links keep working. Do not put content here.
- `404.html` — Bilingual not-found page (root-absolute paths, because GitHub Pages serves it at any URL).
- `sitemap.xml`, `robots.txt` — List all 10 content pages (5 × 2 languages). Update the sitemap when a page is added.
- `assets/css/styles.css` — Design system: tokens, light/dark themes, components, language switcher
- `assets/js/main.js` — Theme toggle, mobile menu, sticky header, scroll reveal, footer year
- `assets/js/lang.js` — Saves the visitor's choice when the IT | EN switcher is clicked
- `assets/images/` — Logo and SVG illustrations (shared by both languages)

## Conventions

- Every content page shares the same header, nav and footer. Nav order: Home, About Me, Services, Portfolio, Contact (Contact uses `nav-cta`). Italian labels: Home, Chi sono, Servizi, Portfolio, Contatti.
- Exactly one nav link per page carries `class="active"` (plus `aria-current="page"`).
- Each page's `<head>` includes Google Fonts (Space Grotesk, Inter, JetBrains Mono), `styles.css`, and the inline theme script that reads `localStorage.theme` before paint.
- Light theme is the default for everyone; dark mode only applies after the visitor uses the toggle.
- The splash animation in `index.html` must match the original: logo grows from 0 to `75vmin` in 3s on a white background, then redirects to the language home page.
- Brand colors come from the logo: blue `#018CCF`, slate `#39464E`. Use CSS variables (`--brand`, `--text`, `--surface`, …), never hard-coded colors in pages, so dark mode keeps working.
- Reuse existing component classes (`card`, `bento`, `timeline`, `steps`, `cta-band`, `tags`, `btn`, …) before adding new CSS. Add `reveal` to blocks for scroll animation.
- Do not publish phone number, home address or date of birth.

### Multilanguage rules

- Every content page exists in both `it/` and `en/` with the same file name. Never add or change a page in only one language.
- Each page has `<html lang>`, a self-referencing canonical, three hreflang links (`it`, `en`, `x-default` → `https://fabiobosio.com/`) with absolute URLs, and a translated `<title>` and meta description.
- The IT | EN switcher (`.lang-switch`, first item in `.header-actions`) links to the same page in the other language; the current language carries `aria-current="true"`.
- Assets are referenced with `../assets/…` from inside a language folder. Nav and footer links stay relative to the same folder.
- Write visible text in the page's language only (titles, alt text, aria-labels, footer, meta description). Technology names stay as they are.
