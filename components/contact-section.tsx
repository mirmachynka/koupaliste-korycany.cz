import { Phone, Mail, MapPin, ExternalLink } from "lucide-react"

const contactItems = [
  {
    icon: Phone,
    label: "Telefon",
    values: [
      {
        value: "+420 604 239 804",
        href: "tel:+420604239804",
      },
      {
        value: "+420 702 993 217",
        href: "tel:+420702993217",
      },
    ],
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "kontakt@koupaliste-korycany.cz",
    href: "mailto:kontakt@koupaliste-korycany.cz",
  },
  {
    icon: MapPin,
    label: "Adresa",
    value: "Masarykova 936, 76805 Koryčany, Česko",
    href: "https://www.google.com/maps/search/?api=1&query=Masarykova+936%2C+76805+Kory%C4%8Dany%2C+%C4%8Cesko",
    external: true,
  },
]

export function ContactSection() {
  return (
    <section id="kontakt" className="scroll-mt-20 bg-white border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-primary">Kontakt</span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-balance text-foreground md:text-4xl">
            Napište nebo zavolejte
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">
            Máte dotaz ohledně provozu, rezervace hřiště nebo jiné záležitosti? Neváhejte se na nás obrátit.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {contactItems.map((item) =>
            "values" in item ? (
              <div
                key={item.label}
                className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card px-6 py-8 text-center transition-colors hover:border-primary/20 hover:bg-white"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <item.icon className="h-6 w-6" />
                </span>
                <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  {item.label}
                </span>
                <div className="flex flex-col items-center gap-2">
                  {item.values.map((phone) => (
                    <a
                      key={phone.href}
                      href={phone.href}
                      className="font-heading font-semibold leading-snug text-foreground transition-colors hover:text-primary"
                    >
                      {phone.value}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a
                key={item.label}
                href={item.href}
                {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-card px-6 py-8 text-center transition-colors hover:border-primary/20 hover:bg-white"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/14">
                  <item.icon className="h-6 w-6" />
                </span>
                <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  {item.label}
                </span>
                <span className="font-heading font-semibold text-foreground leading-snug flex items-center gap-1">
                  {item.value}
                  {item.external && <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />}
                </span>
              </a>
            ),
          )}
        </div>
      </div>
    </section>
  )
}
