type ContactPhone = {
  href: string;
  value: string;
};

const CONTACT_PHONES: ContactPhone[] = [
  { href: "tel:+420604239804", value: "+420 604 239 804" },
  { href: "tel:+420702993217", value: "+420 702 993 217" },
];

const ADDRESS_LINE = "Masarykova 936";
const ADDRESS_CITY = "76805 Koryčany, Česko";
const ADDRESS_MAPS_QUERY = "Masarykova 936, 76805 Koryčany, Česko";

const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61560908927164";
const INSTAGRAM_URL = "https://www.instagram.com/koupalistekorycany/";
const RESTAURANT_URL = "https://restaurace-strilky.cz/";

function mapsHref(query: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export {
  ADDRESS_CITY,
  ADDRESS_LINE,
  ADDRESS_MAPS_QUERY,
  CONTACT_PHONES,
  FACEBOOK_URL,
  INSTAGRAM_URL,
  RESTAURANT_URL,
  mapsHref,
};
export type { ContactPhone };
