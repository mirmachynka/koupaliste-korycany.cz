import { defineMessages } from "@trebired/i18n";

export default defineMessages({
    columns: { evening: "After 4 pm", full: "All day", group: "Admission" },
    eyebrow: "Admission prices",
    lead: "Reduced admission applies after 4 pm. Children under 3 get in free.",
    notes: {
      evening: "Reduced evening admission",
      seniors: "Discount for seniors and disabled visitors",
      toddlers: "Children under 3 free",
    },
    notice: {
      body: "We do not accept payment cards or any other cashless payment at the entrance.",
      title: "Cash only",
    },
    rows: {
      adults: { evening: "70 CZK", full: "100 CZK", group: "Adults" },
      kids: { evening: "20 CZK", full: "30 CZK", group: "Children 4 – 6" },
      toddlers: { evening: "free", full: "free", group: "Children under 3" },
      youth: { evening: "50 CZK", full: "70 CZK", group: "Young people 7 – 18, seniors 65+, disabled visitors with a companion" },
    },
    title: "Fair prices for the whole family",
});
