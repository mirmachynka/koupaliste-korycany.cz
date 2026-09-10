import { ExpandableImage } from "@trebired/frontend/react";
import { createLocalTranslator } from "@trebired/i18n";

import { NEWS_POSTER } from "#l3ocne4j9vkv";
import { useLanguage } from "#4az1cnv8k047";

const FACTS = ["music", "entry"] as const;

function News() {
  const { language } = useLanguage();
  const translate = createLocalTranslator(import.meta.url, language);

  return (
    <section className="section" id="aktuality">
    <div className="section__inner news">
    <div className="news__copy">
    <span className="section__eyebrow">{translate("eyebrow")}</span>
    <h2 className="section__title">{translate("title")}</h2>
    <p className="section__lead news__lead">{translate("lead")}</p>

    <div className="news__facts">
    {FACTS.map((fact) => (
          <div className="news__fact" key={fact}>
          <span className="news__fact-label">{translate(`${fact}.label`)}</span>
          <p className="news__fact-value">{translate(`${fact}.value`)}</p>
          </div>
    ))}
    </div>

    <ul className="news__notes">
    <li>{translate("note")}</li>
    </ul>
    </div>

    <div className="news__poster">
    <ExpandableImage alt={translate("posterAlt")} className="news__poster-image" src={NEWS_POSTER} />
    </div>
    </div>
    </section>
  );
}

export { News };
