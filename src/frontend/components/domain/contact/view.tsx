import { Icon } from "@trebired/frontend/react";
import { createLocalTranslator } from "@trebired/i18n";
import type { I18nTranslator } from "@trebired/i18n";

import { ADDRESS_CITY, ADDRESS_LINE, ADDRESS_MAPS_QUERY, CONTACT_PHONES, mapsHref } from "#uvvfpl0fiu08";
import { ICON_EXTERNAL, ICON_MAIL, ICON_MAP_PIN, ICON_PHONE } from "#ax5z6rnbca47";
import { contactEmail, contactHref } from "#90jtdmye9evq";
import { useLanguage } from "#4az1cnv8k047";

function PhoneCard({ translate }: { translate: I18nTranslator }) {
  return (
    <div className="contact-card">
    <span className="contact-card__icon"><Icon aria-hidden="true" spec={ICON_PHONE} /></span>
    <span className="contact-card__label">{translate("phone")}</span>
    <div className="contact-card__values">
    {CONTACT_PHONES.map((phone) => (
          <a className="contact-card__value" href={phone.href} key={phone.href}>{phone.value}</a>
    ))}
    </div>
    </div>
  );
}

function LinkCards({ translate }: { translate: I18nTranslator }) {
  return (
    <>
    <a className="contact-card" href={contactHref}>
    <span className="contact-card__icon"><Icon aria-hidden="true" spec={ICON_MAIL} /></span>
    <span className="contact-card__label">{translate("email")}</span>
    <span className="contact-card__value">{contactEmail}</span>
    </a>
    <a className="contact-card" href={mapsHref(ADDRESS_MAPS_QUERY)} rel="noopener noreferrer" target="_blank">
    <span className="contact-card__icon"><Icon aria-hidden="true" spec={ICON_MAP_PIN} /></span>
    <span className="contact-card__label">{translate("address")}</span>
    <span className="contact-card__value">
    {ADDRESS_LINE}, {ADDRESS_CITY}
    <Icon aria-hidden="true" spec={ICON_EXTERNAL} />
    </span>
    </a>
    </>
  );
}

function Contact() {
  const { language } = useLanguage();
  const translate = createLocalTranslator(import.meta.url, language);

  return (
    <section className="section" id="kontakt">
    <div className="section__inner contact">
    <div className="section__head">
    <span className="section__eyebrow">{translate("eyebrow")}</span>
    <h2 className="section__title section__title--strong">{translate("title")}</h2>
    <p className="section__lead">{translate("lead")}</p>
    </div>

    <div className="contact__grid">
    <PhoneCard translate={translate} />
    <LinkCards translate={translate} />
    </div>
    </div>
    </section>
  );
}

export { Contact };
