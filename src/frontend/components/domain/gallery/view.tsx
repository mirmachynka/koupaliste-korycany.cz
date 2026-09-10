import { ExpandableImage } from "@trebired/frontend/react";
import { createLocalTranslator } from "@trebired/i18n";
import type { I18nTranslator } from "@trebired/i18n";

import { GALLERY_IMAGES, GALLERY_SOURCES } from "#l3ocne4j9vkv";
import { useLanguage } from "#4az1cnv8k047";

const STATS = [
  { emphasis: false, key: "pool" },
  { emphasis: false, key: "lawn" },
  { emphasis: true, key: "courts" },
];

function GalleryStats({ translate }: { translate: I18nTranslator }) {
  return (
    <dl className="gallery__stats">
    {STATS.map((stat) => (
          <div className="gallery__stat" key={stat.key}>
          <dt className={`gallery__stat-value${stat.emphasis ? " gallery__stat-value--emphasis" : ""}`}>
          {translate(`stats.${stat.key}.value`)}
          </dt>
          <dd className="gallery__stat-label">{translate(`stats.${stat.key}.label`)}</dd>
          </div>
    ))}
    </dl>
  );
}

function Gallery() {
  const { language } = useLanguage();
  const translate = createLocalTranslator(import.meta.url, language);

  return (
    <section className="section section--band">
    <div className="section__inner gallery">
    <div className="gallery__images">
    {GALLERY_IMAGES.map((image, index) => (
          <ExpandableImage
          alt={translate(`images.${image.id}`)}
          className={`gallery__image${index === 0 ? " gallery__image--wide" : ""}`}
          images={GALLERY_SOURCES}
          index={index}
          key={image.id}
          src={image.src}
          />
    ))}
    </div>

    <div className="gallery__copy">
    <h2 className="section__title section__title--light">{translate("title")}</h2>
    <p className="section__lead section__lead--light">{translate("lead")}</p>
    <GalleryStats translate={translate} />
    </div>
    </div>
    </section>
  );
}

export { Gallery };
