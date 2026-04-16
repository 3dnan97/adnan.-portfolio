# Portfolio Site (Astro)

Personal portfolio built with Astro. This repository contains the site source, components, and localized pages (English, Arabic, German).

## Project Overview

- **Framework:** Astro (static site)
- **UI:** Astro components with some React components for interactive parts
- **Languages:** English (default), Arabic (`/ar`), German (`/de`)

## Project Structure

```text
/
├── public/
│   └── images/
├── src/
│   ├── components/
│   │   ├── astro/
│   │   │   ├── About.astro
│   │   │   ├── ContactShell.astro
│   │   │   ├── ExperienceShell.astro
│   │   │   ├── Hero.astro
│   │   │   ├── LanguageSwitcher.astro
│   │   │   ├── ProjectsShell.astro
│   │   │   └── SkillsShell.astro
│   │   │   ├── SkillIcon.astro
│   │   └── react/
│   │       ├── ContactForm.tsx
│   │       ├── ImpactMetricsPlayground.tsx
│   │       └── ProjectExplorer.tsx
│   ├── data/
│   │   └── portfolio.ts
│   ├── layouts/
│   │   └── BaseLayout.astro
│   └── pages/
│       ├── index.astro
│       ├── ar/
│       │   └── index.astro
│       └── de/
│           └── index.astro
└── package.json
```

Key areas:
- `src/components/astro`: presentational components used across pages.
- `src/components/react`: interactive widgets (contact form, project explorer).
- `src/data/portfolio.ts`: project and content data used to populate pages.
- `public/images`: static images used by the site (optimized during build).

## Features

- Multilingual pages (English, Arabic, German)
- Hybrid approach: Astro for static rendering + React for interactive bits
- Responsive layout and image optimization (handled by Astro during build)

## Commands

Run these from the project root:

```bash
npm install
npm run dev      # starts dev server (default: http://localhost:4321)
npm run build    # build static site to ./dist/
npm run preview  # preview the built site locally
```

You can also run `npm run astro -- --help` to access Astro CLI commands.

## Notes

- The site uses `src/layouts/BaseLayout.astro` as the top-level layout.
- Content and portfolio entries are defined in `src/data/portfolio.ts` and consumed by the pages/components.
- If you add fonts or new images, place them in `public/` and reference them from components.

