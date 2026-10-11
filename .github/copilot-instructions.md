# Copilot Instructions for `fabiobosio.com`

## Build, test, and lint

No build/test/lint tooling is configured in the repository.

- **Build:** none
- **Test (full suite):** none
- **Test (single test):** not applicable (no test runner configured)
- **Lint:** none

## High-level architecture

- The site is bilingual: `it/` (Italian) and `en/` (English) each contain `home.html`, `about.html`, `services.html`, `portfolio.html` and `contact.html`, fully translated.
- `index.html` is the splash/entry page. It renders `#splash` and loads `assets/js/splash.js`, which redirects on `animationend` to `it/home.html` or `en/home.html` (saved choice, then browser language, then English).
- The root `home.html`, `about.html`, `services.html`, `portfolio.html` and `contact.html` are redirect stubs to `it/…`. Do not add content there.
- `assets/js/main.js` handles theme toggle (light/dark, stored in localStorage), mobile menu, sticky header and scroll reveal. `assets/js/lang.js` stores the language choice from the switcher.
- Shared presentation is centralized in `assets/css/styles.css`.
- Static assets live under `assets/` at the root and are shared by both languages.
- Deployment is handled by `.github/workflows/static.yml`: on push to `main`, GitHub Pages publishes the **repository root** (no build artifact generation step).

## Key repository conventions

- Every content page exists in both `it/` and `en/` with the same file name. Never add a page in only one language.
- Keep the content pages structurally aligned: same header block, same nav item order (Home, About Me / Chi sono, Services / Servizi, Portfolio, Contact / Contatti), same footer format.
- In nav markup, exactly one link per page should carry `class="active"`.
- Each page needs `<html lang>`, a self-referencing canonical, three hreflang links (`it`, `en`, `x-default`) with absolute `https://fabiobosio.com/…` URLs, and the IT | EN switcher pointing to its twin page with `aria-current="true"` on the current language.
- Reference shared assets with `../assets/…` from inside `it/` or `en/` (stylesheet `../assets/css/styles.css`, logo `../assets/images/logo.png`). Nav links stay relative to the same folder.
- `404.html` and the sitemap use root paths / absolute URLs; add new pages to `sitemap.xml`.
- Preserve the splash flow when editing entry behavior: `index.html` uses `#splash`, redirect is triggered by `animationend` in `assets/js/splash.js`.
- Keep deploy assumptions compatible with `.github/workflows/static.yml`, which uploads `path: '.'` (repository root) to GitHub Pages.

## Source alignment

These instructions are grounded in the current source files: `index.html`, `it/*.html`, `en/*.html`, `assets/css/styles.css`, `assets/js/splash.js`, `assets/js/lang.js`, and `.github/workflows/static.yml`.
