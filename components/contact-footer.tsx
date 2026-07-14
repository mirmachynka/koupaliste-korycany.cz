import { socialLinks } from "@/lib/social-links"

export function ContactFooter() {
  return (
    <footer className="bg-[#486584] py-10">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <span className="font-heading text-base font-semibold text-white">
            Koupaliště Koryčany
          </span>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {[
              { href: "#aktuality", label: "Aktuality" },
              { href: "#nabidka", label: "Nabídka" },
              { href: "#cenik", label: "Ceník" },
              { href: "#otviraci-doba", label: "Otevírací doba" },
              { href: "#kontakt", label: "Kontakt" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/60 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col items-center gap-3 sm:items-end">
            <div className="flex items-center gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  title={link.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/14 bg-white/8 text-white/72 transition-colors hover:border-white/28 hover:bg-white/14 hover:text-white"
                >
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-4.5 w-4.5 fill-current"
                  >
                    <path d={link.iconPath} />
                  </svg>
                </a>
              ))}
            </div>
            <p className="text-sm text-white/40">
              © {new Date().getFullYear()} Koupaliště Koryčany
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
