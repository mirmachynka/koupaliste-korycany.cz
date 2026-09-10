import { Icon, TextLink } from "@trebired/frontend/react";
import { createLocalTranslator } from "@trebired/i18n";

import { FACEBOOK_URL, INSTAGRAM_URL } from "#uvvfpl0fiu08";
import { ICON_FACEBOOK, ICON_INSTAGRAM } from "#ax5z6rnbca47";
import { NAV_HREFS, NAV_SECTIONS } from "#2dbjwp66wjhs";
import { productDisplayName } from "#90jtdmye9evq";
import { useLanguage } from "#4az1cnv8k047";

const COPYRIGHT_YEAR = 2026;

const SOCIAL_LINKS = [
  { href: INSTAGRAM_URL, icon: ICON_INSTAGRAM, key: "instagram" },
  { href: FACEBOOK_URL, icon: ICON_FACEBOOK, key: "facebook" },
];

function FooterContent() {
  const { language } = useLanguage();
  const translate = createLocalTranslator(import.meta.url, language);

  return (
    <div className="site-foot">
    <span className="site-foot__name">{productDisplayName}</span>

    <nav aria-label={translate("navLabel")} className="site-foot__nav">
    {NAV_SECTIONS.map((section) => (
          <a className="site-foot__link" href={NAV_HREFS[section]} key={section}>
          {translate(`nav.${section}`)}
          </a>
    ))}
    </nav>

    <div className="site-foot__end">
    <div className="site-foot__social">
    {SOCIAL_LINKS.map((social) => (
          <TextLink
          aria-label={translate(`social.${social.key}`)}
          className="site-foot__social-link"
          external
          href={social.href}
          key={social.key}
          >
          <Icon aria-hidden="true" spec={social.icon} />
          </TextLink>
    ))}
    </div>
    <p className="site-foot__meta">&copy; {COPYRIGHT_YEAR} {productDisplayName}</p>
    </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
    <FooterContent />
    </footer>
  );
}

export { Footer, FooterContent };
