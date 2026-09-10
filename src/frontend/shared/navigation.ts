const NAV_SECTIONS = ["news", "offer", "pricing", "hours", "contact"] as const;

type NavSection = (typeof NAV_SECTIONS)[number];

const NAV_HREFS: Record<NavSection, string> = {
  contact: "#kontakt",
  hours: "#otviraci-doba",
  news: "#aktuality",
  offer: "#nabidka",
  pricing: "#cenik",
};

export { NAV_HREFS, NAV_SECTIONS };
export type { NavSection };
