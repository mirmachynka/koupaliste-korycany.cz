# Changelog

All notable changes to `koupaliste-korycany-cz` will be documented here.

This project follows semantic versioning once published.

## 1.0.3

- Removed the news section, "A summer evening at the pool", with its event poster and its "News" link in the header and footer. The event it announced has passed.
- Removed the "The 2026 summer season is in full swing" badge from the hero. The season it announced is over.
- Removed the small uppercase labels above the section titles ("Ready for you", "The grounds", "Admission prices", "Opening hours", "Contact"). They repeated the title below them.
- Fixed the header navigation's accessible label. It read the "News" link text instead of naming the navigation; it is now "Sections".

## 1.0.2

- Translated the names left in Czech on the English page. The header, footer, logo description and English page title read Koryčany Open-Air Pool, the image descriptions no longer name the pool in Czech, and the section about Střílky names Střílky Restaurant, the Community Centre Restaurant and Gól Pub. The footer and its copyright line previously printed the Czech product name from `package.json` in every language; they now take the name from the footer's translation files.

## 1.0.1

- Removed the favicon and the README logo. The brand mark added in 1.0.0 was drawn for the rebuild, not taken from the business, so the site now ships no favicon and no logo, and `.trebired/frontend/config.ts` declares no favicon source.

## 1.0.0

- Migrated the 0.1.0 site from Vite, Tailwind CSS, shadcn/ui and `@base-ui/react` to the Trebired application layout: `.trebired/*` package configs, `src/frontend`, `src/bin`, `src/types`, built by `@trebired/bundler` and rendered with `@trebired/frontend`.
- Kept the site's own look. Buttons, the language menu and popovers use the original rounded, sentence-case styling through the button and overlay tokens in `.trebired/frontend/components/`, and the gallery lightbox takes its round controls, rounded image, blurred backdrop and caption from `components.media`. The header call to action is the same primary button as the rest of the page.
- Added English. Switching re-renders the page in place without a reload or a change of URL, and the saved language is shown before the application bundle runs. English also has its own `/en` page so search engines index it; visitors are never sent there.
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
- Built on `@trebired/frontend` 13.1.2, `@trebired/bundler` 5.13, `@trebired/seo` 0.4, `@trebired/i18n` 0.6, `@trebired/startup` 0.7 and `@trebired/code-discipline` 7.2.1. Every `.trebired/*` config calls its package's `defineConfig()` and declares `forVersion` as its first key.
- Removed `package-lock.json`, the empty `app/` directory, and a `hono` override with no `hono` usage.
- Added `netlify.toml` declaring `bun run build` and `dist`, replacing the Apache `.htaccess` rewrite the host never used.
- Added `LICENSE`, `CONTRIBUTING.md` and this changelog.
