import { Waves } from "lucide-react"

export function ContactFooter() {
  return (
    <footer className="bg-slate-700 py-10">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Waves className="h-5 w-5" />
            </span>
            <span className="font-heading text-base font-semibold text-white">
              Koupaliště Koryčany
            </span>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {[
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

          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} Koupaliště Koryčany
          </p>
        </div>
      </div>
    </footer>
  )
}
