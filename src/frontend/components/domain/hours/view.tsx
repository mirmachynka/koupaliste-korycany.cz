import { Icon } from "@trebired/frontend/react";
import { createLocalTranslator } from "@trebired/i18n";

import { Button } from "#j30p61e0n8i9";
import { FACEBOOK_URL } from "#uvvfpl0fiu08";
import { ICON_CALENDAR, ICON_EXTERNAL } from "#ax5z6rnbca47";
import { useLanguage } from "#4az1cnv8k047";

const SCHEDULE = [
  { highlight: false, key: "opening" },
  { highlight: false, key: "preseason" },
  { highlight: true, key: "season" },
];

function Hours() {
  const { language } = useLanguage();
  const translate = createLocalTranslator(import.meta.url, language);

  return (
    <section className="section" id="otviraci-doba">
    <div className="section__inner hours">
    <div className="hours__copy">
    <h2 className="section__title">{translate("title")}</h2>
    <p className="section__lead hours__lead">{translate("lead")}</p>
    <div className="hours__action">
    <Button href={FACEBOOK_URL} rel="noopener noreferrer" target="_blank">
    {translate("cta")}
    <Icon aria-hidden="true" spec={ICON_EXTERNAL} />
    </Button>
    </div>
    </div>

    <div className="hours__list">
    {SCHEDULE.map((item) => (
          <div className={`hours__row${item.highlight ? " is-highlight" : ""}`} key={item.key}>
          <span className="hours__dates">
          <Icon aria-hidden="true" spec={ICON_CALENDAR} />
          {translate(`schedule.${item.key}.dates`)}
          </span>
          <span className="hours__time">{translate(`schedule.${item.key}.time`)}</span>
          </div>
    ))}
    </div>
    </div>
    </section>
  );
}

export { Hours };
