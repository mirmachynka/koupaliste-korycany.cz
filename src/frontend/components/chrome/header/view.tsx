import { Icon, SiteHeader } from "@trebired/frontend/react";
import { createLocalTranslator } from "@trebired/i18n";

import { Button } from "#j30p61e0n8i9";
import { ICON_CLOSE, ICON_MENU } from "#ax5z6rnbca47";
import { LanguageMenu } from "#nj5fd1gvlmpi";
import { NAV_HREFS, NAV_SECTIONS } from "#2dbjwp66wjhs";
import { useLanguage } from "#4az1cnv8k047";

function Header() {
  const { language } = useLanguage();
  const translate = createLocalTranslator(import.meta.url, language);

  return (
    <SiteHeader
    actions={(
        <>
        <LanguageMenu />
        <Button href="#otviraci-doba">{translate("cta")}</Button>
        </>
    )}
    brand={translate("brand")}
    brandHref="#top"
    closeIcon={<Icon aria-hidden="true" spec={ICON_CLOSE} />}
    labels={{ closeMenu: translate("menuClose"), navigation: translate("navLabel"), openMenu: translate("menuOpen") }}
    links={NAV_SECTIONS.map((section) => ({ href: NAV_HREFS[section], key: section, label: translate(`nav.${section}`) }))}
    menuIcon={<Icon aria-hidden="true" spec={ICON_MENU} />}
    />
  );
}

export { Header };
