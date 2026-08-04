import { siFacebook, siInstagram } from "simple-icons"

export const instagramHref = "https://www.instagram.com/koupalistekorycany/"
export const facebookHref = "https://www.facebook.com/profile.php?id=61560908927164"

export const socialLinks = [
  {
    label: "Instagram",
    href: instagramHref,
    iconPath: siInstagram.path,
  },
  {
    label: "Facebook",
    href: facebookHref,
    iconPath: siFacebook.path,
  },
] as const
