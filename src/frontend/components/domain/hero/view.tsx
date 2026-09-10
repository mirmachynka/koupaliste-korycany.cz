import { Carousel, Icon } from "@trebired/frontend/react";
import { createLocalTranslator } from "@trebired/i18n";
import type { I18nTranslator } from "@trebired/i18n";

import { Button } from "#j30p61e0n8i9";
import { HERO_SLIDES } from "#l3ocne4j9vkv";
import { ICON_SUN } from "#ax5z6rnbca47";
import { useLanguage } from "#4az1cnv8k047";

const SLIDE_INTERVAL_MS = 5000;

function HeroCopy({ translate }: { translate: I18nTranslator }) {
  return (
    <div className="hero__copy">
    <span className="hero__badge">
    <Icon aria-hidden="true" spec={ICON_SUN} />
    {translate("badge")}
    </span>
    <h1 className="hero__title">{translate("title")}</h1>
    <p className="hero__lead">{translate("lead")}</p>

    <div className="hero__actions">
    <Button href="#otviraci-doba" size="lg" variant="white">{translate("cta.hours")}</Button>
    <Button href="#nabidka" size="lg" variant="outline">{translate("cta.offer")}</Button>
    </div>

    <div className="hero__attribution">
    <img alt={translate("logoAlt")} className="hero__logo" height={20} src="/logo.png" width={20} />
    {translate("attribution")}
    </div>
    </div>
  );
}

function Hero() {
  const { language } = useLanguage();
  const translate = createLocalTranslator(import.meta.url, language);
  const slides = HERO_SLIDES.map((slide) => ({ alt: translate(`slides.${slide.id}`), src: slide.src }));

  return (
    <section className="section section--hero" id="top">
    <div className="section__inner hero">
    <HeroCopy translate={translate} />
    <div className="hero__media">
    <Carousel className="hero__carousel" intervalMs={SLIDE_INTERVAL_MS} slides={slides} />
    </div>
    </div>
    </section>
  );
}

export { Hero };
