import { Icon } from "@trebired/frontend/react";
import { createLocalTranslator } from "@trebired/i18n";
import { useState } from "react";

import { Button } from "#j30p61e0n8i9";
import { ICON_CLOSE, ICON_MENU } from "#ax5z6rnbca47";
import { LanguageMenu } from "#nj5fd1gvlmpi";
import { NAV_HREFS, NAV_SECTIONS } from "#2dbjwp66wjhs";
import { useLanguage } from "#4az1cnv8k047";

function HeaderContent() {
  const { language } = useLanguage();
  const translate = createLocalTranslator(import.meta.url, language);
  const [open, setOpen] = useState(false);

  return (
    <div className="site-bar">
    <div className="site-bar__row">
    <a className="site-bar__brand" href="#top">{translate("brand")}</a>

    <nav aria-label={translate("navLabel")} className="site-bar__nav">
    {NAV_SECTIONS.map((section) => (
          <a className="site-bar__link" href={NAV_HREFS[section]} key={section}>
          {translate(`nav.${section}`)}
          </a>
    ))}
    </nav>

    <div className="site-bar__actions">
    <LanguageMenu />
    <Button href="#otviraci-doba">{translate("cta")}</Button>
    </div>

    <button
    aria-expanded={open}
    aria-label={open ? translate("menuClose") : translate("menuOpen")}
    className="site-bar__toggle"
    onClick={() => setOpen((value) => !value)}
    type="button"
    >
    <Icon aria-hidden="true" spec={open ? ICON_CLOSE : ICON_MENU} />
    </button>
    </div>

    <div className={`site-bar__drawer${open ? " is-open" : ""}`}>
    <nav aria-hidden={!open} className="site-bar__drawer-inner">
    {NAV_SECTIONS.map((section) => (
          <a
          className="site-bar__drawer-link"
          href={NAV_HREFS[section]}
          key={section}
          onClick={() => setOpen(false)}
          >
          {translate(`nav.${section}`)}
          </a>
    ))}
    <Button className="site-bar__drawer-cta" href="#otviraci-doba" onClick={() => setOpen(false)}>
    {translate("cta")}
    </Button>
    </nav>
    </div>
    </div>
  );
}

function Header() {
  return (
    <header className="site-header">
    <HeaderContent />
    </header>
  );
}

export { Header, HeaderContent };
