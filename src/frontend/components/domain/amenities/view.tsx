import { Icon } from "@trebired/frontend/react";
import { createLocalTranslator } from "@trebired/i18n";

import {
  ICON_KIDS,
  ICON_RESTAURANT,
  ICON_SPORT,
  ICON_TABLE,
  ICON_TREES,
  ICON_UMBRELLA,
  ICON_WATER,
  ICON_WIFI,
} from "#ax5z6rnbca47";
import { useLanguage } from "#4az1cnv8k047";

const AMENITIES = [
  { icon: ICON_WATER, key: "pool" },
  { icon: ICON_KIDS, key: "kids" },
  { icon: ICON_SPORT, key: "beach" },
  { icon: ICON_TREES, key: "lawn" },
  { icon: ICON_TABLE, key: "games" },
  { icon: ICON_RESTAURANT, key: "food" },
  { icon: ICON_UMBRELLA, key: "rental" },
  { icon: ICON_WIFI, key: "wifi" },
];

function Amenities() {
  const { language } = useLanguage();
  const translate = createLocalTranslator(import.meta.url, language);

  return (
    <section className="section" id="nabidka">
    <div className="section__inner amenities">
    <div className="section__head">
    <span className="section__eyebrow">{translate("eyebrow")}</span>
    <h2 className="section__title">{translate("title")}</h2>
    <p className="section__lead">{translate("lead")}</p>
    </div>

    <div className="amenities__grid">
    {AMENITIES.map((item) => (
          <div className="amenity" key={item.key}>
          <span className="amenity__icon"><Icon aria-hidden="true" spec={item.icon} /></span>
          <h3 className="amenity__title">{translate(`items.${item.key}.title`)}</h3>
          <p className="amenity__desc">{translate(`items.${item.key}.desc`)}</p>
          </div>
    ))}
    </div>
    </div>
    </section>
  );
}

export { Amenities };
