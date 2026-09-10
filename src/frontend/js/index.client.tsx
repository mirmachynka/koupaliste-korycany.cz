import {
  bindFrontendRuntime,
  bootPageLoadProgress,
  configureLocaleRouting,
  configureSpa,
  currentLocale,
  parseLocalePathname,
} from "@trebired/frontend";
import "@trebired/frontend/static-icons";
import { LocaleProvider } from "@trebired/frontend/react";
import { createBrowserLog } from "@trebired/logger/browser";
import { LogErrorBoundary, LogProvider } from "@trebired/logger/browser/react";
import type { ReactElement } from "react";

import { FooterContent } from "#cqf4qma7ddc9";
import { HeaderContent } from "#03xd57vgw05e";
import { LANGUAGE_ROUTING } from "#fwwb6s6610u5";
import { hydrateChromeRoots } from "#s289ssz56580";
import { metaFor } from "#ji6pz0psckkq";
import { mountContentIsland } from "#nj61lcbyqhg7";
import { productDomain } from "#90jtdmye9evq";

const log = createBrowserLog({
    group: "frontend.app",
    source: productDomain,
});

configureLocaleRouting(LANGUAGE_ROUTING);

function observed(node: ReactElement) {
  return (
    <LogProvider log={log}>
    <LocaleProvider locale={currentLocale()}>
    <LogErrorBoundary group="frontend.chrome">{node}</LogErrorBoundary>
    </LocaleProvider>
    </LogProvider>
  );
}

function applyDocumentTitle() {
  const { locale, pathname } = parseLocalePathname(window.location.pathname, LANGUAGE_ROUTING);
  document.title = metaFor(pathname, locale).title;
}

bootPageLoadProgress({ minVisibleMs: 320 });
configureSpa({});
applyDocumentTitle();

void hydrateChromeRoots([
    [document.querySelector("header"), observed(<HeaderContent />)],
    [document.querySelector("footer"), observed(<FooterContent />)],
]).then(() => {
    bindFrontendRuntime(document, { icons: { mode: "static" } });
    mountContentIsland("live_content");
});
