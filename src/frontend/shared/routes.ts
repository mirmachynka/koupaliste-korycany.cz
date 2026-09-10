import { hasOwn } from "@trebired/utils";

import { DEFAULT_LANGUAGE } from "./language/policy";
import type { SiteLanguage } from "./language/policy";

type RouteMeta = {
  description: string;
  title: string;
};

const ROUTES: Record<string, Record<SiteLanguage, RouteMeta>> = {
  "/": {
    cs: {
      title: "Koupaliště Koryčany, letní koupání a relaxace",
      description:
      "Koupaliště Koryčany nabízí padesátimetrový bazén, dětské brouzdaliště, " +
        "sportovní hřiště a občerstvení. Ideální místo pro letní rodinnou zábavu.",
    },
    en: {
      title: "Koryčany open air pool, summer swimming and relaxation",
      description:
      "Koupaliště Koryčany has a fifty metre pool, a paddling pool for children, " +
        "sports courts and refreshments. A place to spend a summer day with the family.",
    },
  },
};

function canonicalPath(path: string): string {
  const normalized = String(path || "/");
  const trimmed = normalized.length > 1 ? normalized.replace(/\/+$/u, "") : normalized;
  return trimmed || "/";
}

function matchLanguage(input: unknown): SiteLanguage {
  return input === "en" || input === "cs" ? input : DEFAULT_LANGUAGE;
}

function routeExists(path: string): boolean {
  return hasOwn(ROUTES, canonicalPath(path));
}

function allRoutePaths(): string[] {
  return Object.keys(ROUTES);
}

function metaFor(path: string, language: unknown = DEFAULT_LANGUAGE): RouteMeta {
  const lang = matchLanguage(language);
  return ROUTES[canonicalPath(path)]?.[lang] ?? ROUTES["/"][lang];
}

export { allRoutePaths, canonicalPath, matchLanguage, metaFor, routeExists };
export type { RouteMeta };
