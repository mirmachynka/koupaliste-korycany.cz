import { Icon } from "@trebired/frontend/react";
import { createLocalTranslator } from "@trebired/i18n";
import type { I18nTranslator } from "@trebired/i18n";

import { ICON_CASH, ICON_CHECK } from "#ax5z6rnbca47";
import { useLanguage } from "#4az1cnv8k047";

const ROWS = [
  { free: true, key: "toddlers" },
  { free: false, key: "kids" },
  { free: false, key: "youth" },
  { free: false, key: "adults" },
];

const NOTES = ["evening", "toddlers", "seniors"];

function PriceTable({ translate }: { translate: I18nTranslator }) {
  return (
    <table className="pricing__table">
    <thead>
    <tr>
    <th scope="col">{translate("columns.group")}</th>
    <th scope="col">{translate("columns.full")}</th>
    <th scope="col">{translate("columns.evening")}</th>
    </tr>
    </thead>
    <tbody>
    {ROWS.map((row) => (
          <tr className={row.free ? "is-free" : undefined} key={row.key}>
          <th scope="row">{translate(`rows.${row.key}.group`)}</th>
          <td>{translate(`rows.${row.key}.full`)}</td>
          <td className="pricing__evening">{translate(`rows.${row.key}.evening`)}</td>
          </tr>
    ))}
    </tbody>
    </table>
  );
}

function Pricing() {
  const { language } = useLanguage();
  const translate = createLocalTranslator(import.meta.url, language);

  return (
    <section className="section" id="cenik">
    <div className="section__inner pricing">
    <div className="section__head">
    <h2 className="section__title">{translate("title")}</h2>
    <p className="section__lead">{translate("lead")}</p>
    </div>

    <div className="pricing__notice">
    <span className="pricing__notice-icon"><Icon aria-hidden="true" spec={ICON_CASH} /></span>
    <div>
    <p className="pricing__notice-title">{translate("notice.title")}</p>
    <p className="pricing__notice-body">{translate("notice.body")}</p>
    </div>
    </div>

    <div className="pricing__frame"><PriceTable translate={translate} /></div>

    <ul className="pricing__notes">
    {NOTES.map((note) => (
          <li className="pricing__note" key={note}>
          <Icon aria-hidden="true" spec={ICON_CHECK} />
          {translate(`notes.${note}`)}
          </li>
    ))}
    </ul>
    </div>
    </section>
  );
}

export { Pricing };
