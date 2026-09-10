import { ExpandableImage, Icon } from "@trebired/frontend/react";
import { createLocalTranslator } from "@trebired/i18n";

import { Button } from "#j30p61e0n8i9";
import { ICON_EXTERNAL, ICON_MAP_PIN } from "#ax5z6rnbca47";
import { RESTAURANT_PHOTO } from "#l3ocne4j9vkv";
import { RESTAURANT_URL } from "#uvvfpl0fiu08";
import { useLanguage } from "#4az1cnv8k047";

function Food() {
  const { language } = useLanguage();
  const translate = createLocalTranslator(import.meta.url, language);

  return (
    <section className="section" id="jidlo">
    <div className="section__inner food">
    <ExpandableImage alt={translate("imageAlt")} className="food__image" src={RESTAURANT_PHOTO} />

    <div className="food__copy">
    <h2 className="section__title food__title">{translate("title")}</h2>
    <p className="section__lead">{translate("lead")}</p>

    <div className="food__actions">
    <Button href={RESTAURANT_URL} rel="noopener noreferrer" size="lg" target="_blank">
    <Icon aria-hidden="true" spec={ICON_EXTERNAL} />
    {translate("cta")}
    </Button>
    <span className="food__location">
    <Icon aria-hidden="true" spec={ICON_MAP_PIN} />
    {translate("location")}
    </span>
    </div>
    </div>
    </div>
    </section>
  );
}

export { Food };
