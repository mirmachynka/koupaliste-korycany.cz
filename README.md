<div align="center">

**The website of Koupaliště Koryčany: a bilingual, prerendered page for the town's open air pool, with what the grounds offer, admission prices, the season's opening hours, current events and how to get in touch.**

[![License](https://img.shields.io/badge/license-MIT-blue)](LICENSE)
[![Runtime](https://img.shields.io/badge/runtime-Bun%201%2B-black)](#install)
[![Output](https://img.shields.io/badge/output-static%20site-black)](#runtime)

</div>

---

This repository owns what is specific to this site: the copy and its Czech and English translations, the eight sections, the season's dates and prices, and the design values in `.trebired/`. The `@trebired/*` packages own everything generic: the build, the browser runtime, locale routing, the slideshow, the gallery lightbox, SEO artifacts and logging. The pool's Facebook page owns the day-to-day opening status, which the page points to rather than repeats. The operator owns the Netlify site and the DNS record. This repository does not own a server, a database, ticketing or payments.

The output is static files. There is no backend, no contact form, no accounts and no analytics.

Koupaliště Koryčany is a Trebired product, licensed under the MIT License. See [LICENSE](LICENSE).

## Contents

- [Install](#install)
- [Quick Start](#quick-start)
- [Concepts](#concepts)
- [Configuration](#configuration)
- [Runtime](#runtime)
- [Contributing](#contributing)
- [What It Does Not Do](#what-it-does-not-do)

## Install

Runtime support: Bun 1+.

```sh
bun i
```

## Quick Start

```sh
bun run dev
```

The dev server runs behind the Code Discipline gate and serves on port 3000. `bun run build` writes the client and one prerendered document per route, carrying every language, into `dist`, the directory Netlify publishes. `bun run verify` runs the discipline check, the typecheck and the build.

## Concepts

### One page, every language, prerendered, then hydrated

`src/frontend/pages/home.tsx` composes seven sections: the hero, what the grounds offer, the gallery, prices, opening hours, food nearby and contact. At build time `src/frontend/ssr/entry.tsx` renders them once per locale inside `LocaleProvider`, and `src/bin/frontend/ssr.ts` hands the renders to `createLocaleDocumentBody()` from `@trebired/frontend`: Czech becomes the live markup and English an inert template in the same document. In the browser the header and footer hydrate as their own roots and the page body hydrates as a live island.

### One URL, language switched in place

Visitors stay at `/`. A boot script in the head reads the saved choice or the `ui_lang` cookie, and when it names the other language that template is swapped in while the document is still parsing, so a reload shows it before the application bundle runs. Switching language re-renders every root in place and updates `<html lang>`, the title and the description, with no reload and no change to the URL.

For search engines, `localeStrategy: "prefix"` in `.trebired/seo/config.ts` also writes `/en`, rendered in English with its own canonical URL and `hreflang` links, so both languages are indexed. Nothing on the site links or redirects to it. Set the strategy to `"none"` to serve one page per route instead.

### Seasonal content

The season's dates are copy, so they live in the translation files: the badge in the hero and the schedule in opening hours. Prices live in the pricing translations. [CONTRIBUTING.md](CONTRIBUTING.md#seasonal-updates) lists the exact files to edit each season.

### The slideshow

The hero uses the `@trebired/frontend` `Carousel` with its controls along the bottom. It advances every five seconds, pauses while the pointer or keyboard focus is on it, and holds still for visitors who ask for reduced motion.

## Configuration

Package behaviour is configured under `.trebired/`:

| File | Owns |
| --- | --- |
| `.trebired/frontend/config.ts` | Palette, fonts, static icon specs, enabled systems, and the button, popover and lightbox tokens in `components/` |
| `.trebired/bundler/config.ts` | Frontend directory, build output directory, public path |
| `.trebired/seo/config.ts` | Site URL, locales, locale strategy, robots policy, sitemap defaults |
| `.trebired/i18n/config.ts` | Supported languages, fallback language, checker root |
| `.trebired/startup/config.ts` | Dev server port requirement and shutdown timeout |
| `.trebired/code-discipline/config.ts` | Version, preset and banned patterns |

The site is light only. Product and organization identity live in `package.json#config` and are injected as build-time defines. The contact e-mail is derived from the product domain and is never written as a literal. Contact details and external links live once in `src/frontend/shared/content.ts`.

## Runtime

The build emits an ES module client bundle, two stylesheets, the self hosted Inter and Poppins files, `robots.txt`, `sitemap.xml` and two prerendered documents: `/` in Czech and `/en` in English, each carrying the other language as a switchable template. Icons resolve from a build-generated static cache, so the page makes no icon requests. Netlify builds the site with the command and publish directory declared in `netlify.toml`.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

## What It Does Not Do

This application does not:

- Sell tickets or take payments. Admission is paid in cash at the entrance.
- Report whether the pool is open today. The Facebook page does, and the page links to it.
- Run a server, a database or any scheduled work. Every document is prerendered at build time.
- Collect anything. There is no contact form; visitors call or e-mail.
- Set analytics, advertising or tracking cookies.
- Ship a test suite. Verification is `bun run verify`.
