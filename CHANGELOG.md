# Changelog

All notable changes to `koupaliste-korycany-cz` will be documented here.

This project follows semantic versioning once published.

## 1.0.0

- Migrated the site from Vite, Tailwind CSS, shadcn/ui and `@base-ui/react` to the Trebired application layout: `.trebired/*` package configs, `src/frontend`, `src/bin`, `src/types`, built by `@trebired/bundler` and rendered with `@trebired/frontend`.
- Added English. Czech is served at `/` and English under `/en`, each as its own prerendered document with its own `<html lang>`, title, description, canonical URL and `hreflang` set.
- Added `@trebired/seo` for canonical URLs, `hreflang` alternates, Open Graph and Twitter tags, JSON-LD, `robots.txt` and `sitemap.xml`, replacing the hand-written head in `index.html`.
- Replaced the hand-written `@font-face` blocks with `@trebired/frontend` font assets: Inter for text and Poppins for headings.
- Replaced the hero slideshow with the `@trebired/frontend` `Carousel`, which pauses on hover and focus and holds still under `prefers-reduced-motion`. The previous slideshow advanced every five seconds regardless.
- Replaced the local lightbox with the `@trebired/frontend` media system, which renders through a portal, traps and restores focus, and reference counts the body scroll lock.
- Replaced the pricing grid with a real table.
- Gave the gallery and slideshow images real alt text. They were empty, so the lightbox announced "Zvětšit fotografii:" with nothing after it and showed an empty caption.
- Replaced `lucide-react` and `simple-icons` with `@trebired/frontend` Remix icons rendered from a build-time static cache.
- Moved every string into colocated `i18n/cs.ts` and `i18n/en.ts` files, and the navigation list that was duplicated between the header and the footer into `src/frontend/shared/navigation.ts`.
- Added the brand mark in `src/brand/favicon.svg`; `@trebired/frontend` rasterizes it into the ICO and PNG sizes at build time. The site had no favicon before.
- Added `@trebired/code-discipline` with the `@trebired/configs` preset and the `dev` gate.
- Removed `package-lock.json`, the empty `app/` directory, and a `hono` override with no `hono` usage.
- Added `netlify.toml` declaring `bun run build` and `dist`, replacing the Apache `.htaccess` rewrite the host never used.
- Added `LICENSE`, `CONTRIBUTING.md` and this changelog.
