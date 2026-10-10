# Copilot Instructions for `fabiobosio.com`

## Build, test, and lint

No build/test/lint tooling is configured in the repository.

- **Build:** none
- **Test (full suite):** none
- **Test (single test):** not applicable (no test runner configured)
- **Lint:** none

## High-level architecture

- `index.html` is the splash/entry page. It renders `#splash` and loads `assets/js/splash.js`.
- `assets/js/splash.js` listens for the splash logo `animationend` and redirects to `home.html`.
- `home.html`, `about.html`, `services.html`, `portfolio.html`, and `contact.html` are the actual content pages.
- `assets/js/main.js` handles theme toggle (light/dark, stored in localStorage), mobile menu, sticky header and scroll reveal.
- Shared presentation is centralized in `assets/css/styles.css`:
  - base layout and typography
  - shared header/nav/footer styles
  - page-specific styles for the services hero/cards section
- Static assets live under `assets/images/` and are referenced via relative paths from root-level HTML files.
- Deployment is handled by `.github/workflows/static.yml`: on push to `main`, GitHub Pages publishes the **repository root** (no build artifact generation step).

## Key repository conventions

- Keep the top-level content pages (`home.html`, `about.html`, `services.html`, `portfolio.html`, `contact.html`) structurally aligned:
  - same header block (logo, headline, subtitle)
  - same nav item order (Home, About Me, Services, Portfolio, Contact)
  - same footer format
- In nav markup, exactly one link per page should carry `class="active"` to indicate the current page.
- Keep link targets consistent with current routing:
  - `index.html` is splash only
  - navigation points to `home.html`, not `index.html`
- Use the current relative path pattern for shared assets:
  - stylesheet: `assets/css/styles.css`
  - logo: `assets/images/logo.png`
- Preserve the splash flow when editing entry behavior:
  - `index.html` uses `#splash`
  - redirect to `home.html` is triggered by `animationend` in `assets/js/splash.js`
- Keep deploy assumptions compatible with `.github/workflows/static.yml`, which uploads `path: '.'` (repository root) to GitHub Pages.

## Source alignment

These instructions are grounded in the current source files: `index.html`, `home.html`, `about.html`, `services.html`, `contact.html`, `assets/css/styles.css`, `assets/js/splash.js`, and `.github/workflows/static.yml`.
