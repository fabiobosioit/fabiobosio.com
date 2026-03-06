# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static personal website for Fabio Bosio (Developer Consultant), deployed to GitHub Pages via GitHub Actions. There is no build step, package manager, or framework — it is plain HTML/CSS.

## Deployment

Pushing to `main` automatically deploys to GitHub Pages via `.github/workflows/static.yml`. The entire repository root is served as the site.

## Structure

- `index.html` — Home page
- `about.html` — Biography and skills (contains placeholder content to be filled in)
- `services.html` — Services offered
- `contact.html` — Contact information
- `assets/css/styles.css` — Shared stylesheet (referenced by most pages)
- `assets/images/` — Logo and image assets

## Conventions

- All pages share the same nav structure: Home, About Me, Services, Contact
- Most pages link `assets/css/styles.css` and use `assets/images/logo.png` in the header
- `about.html` currently lacks the nav, logo, and stylesheet — it should be brought in line with the other pages when updated
