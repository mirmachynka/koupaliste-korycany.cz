import { Waves, Baby, Volleyball, Trees, TableProperties, UtensilsCrossed, Wifi, Umbrella } from "lucide-react"

const amenities = [
  {
    icon: Waves,
    title: "Plavecký bazén",
    desc: "50 × 21 m s hloubkou 1,3 m, dostatek prostoru pro plavání i osvěžení.",
  },
  {
    icon: Baby,
    title: "Dětský bazének",
    desc: "8 × 12 m, bezpečné a mělké koupání pro ty nejmenší.",
  },
  {
    icon: Volleyball,
    title: "Beachvolejbal",
    desc: "Tři hřiště s kvalitním pískem a tribunou pro diváky.",
  },
  {
    icon: Trees,
    title: "Travnatá plocha",
    desc: "12 000 m² zeleně na opalování a odpočinek pod sluncem.",
  },
  {
    icon: TableProperties,
    title: "Hry a sport",
    desc: "Dětské hřiště, dvě trampolíny a stůl na stolní tenis.",
  },
  {
    icon: UtensilsCrossed,
    title: "Kryté občerstvení",
    desc: "Nabídka jídel a nápojů, ať vydržíte celý den.",
  },
  {
    icon: Umbrella,
    title: "Půjčovna vybavení",
    desc: "Lehátka, slunečníky a sportovní vybavení pro děti i dospělé.",
  },
  {
    icon: Wifi,
    title: "Wi-Fi zdarma",
    desc: "Připojení k internetu po celém areálu bez poplatku.",
  },
]

export function AmenitiesSection() {
  return (
    <section id="nabidka" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-semibold uppercase tracking-wide text-primary">Máme pro vás nachystáno</span>
        <h2 className="mt-3 font-heading text-3xl font-700 text-balance text-foreground md:text-4xl">
          Vše pro dokonalý letní den
        </h2>
        <p className="mt-4 text-muted-foreground leading-relaxed text-pretty">
          Od plavání a sportu až po odpočinek na trávě, u nás si užije každý člen rodiny.
        </p>
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {amenities.map((item) => (
          <div
            key={item.title}
            className="group rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/20 hover:bg-white"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/14">
              <item.icon className="h-6 w-6" />
            </span>
            <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">{item.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
