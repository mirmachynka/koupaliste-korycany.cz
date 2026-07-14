import { Check } from "lucide-react"

const rows = [
  { group: "Děti do 3 let", full: "zdarma", evening: "zdarma", free: true },
  { group: "Děti 4 – 6 let", full: "30 Kč", evening: "20 Kč" },
  { group: "Mládež 7 – 18 let, senioři 65+, ZTP + průvodce", full: "70 Kč", evening: "50 Kč" },
  { group: "Dospělí", full: "100 Kč", evening: "70 Kč" },
]

export function PricingSection() {
  return (
    <section id="cenik" className="scroll-mt-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-primary">Ceník vstupného</span>
          <h2 className="mt-3 font-heading text-3xl font-700 text-balance text-foreground md:text-4xl">
            Férové ceny pro celou rodinu
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed text-pretty">
            Zvýhodněné vstupné platí po 16:00 hodině. Děti do 3 let mají vstup zdarma.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-2xl border border-border bg-card">
          <div className="grid grid-cols-[1.6fr_1fr_1fr] gap-2 border-b border-border bg-primary px-5 py-4 text-primary-foreground md:px-8">
            <span className="text-sm font-600">Vstupné</span>
            <span className="text-right text-sm font-600">Celodenní</span>
            <span className="text-right text-sm font-600">Po 16:00</span>
          </div>
          {rows.map((row) => (
            <div
              key={row.group}
              className="grid grid-cols-[1.6fr_1fr_1fr] items-center gap-2 border-b border-border px-5 py-4 last:border-0 md:px-8"
            >
              <span className="text-sm leading-snug text-card-foreground">{row.group}</span>
              <span
                className={`text-right text-sm font-medium ${row.free ? "text-primary" : "text-card-foreground"}`}
              >
                {row.full}
              </span>
              <span
                className={`text-right text-sm font-medium ${row.free ? "text-primary" : "text-muted-foreground"}`}
              >
                {row.evening}
              </span>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-6 flex max-w-3xl flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          {["Zvýhodněné večerní vstupné", "Děti do 3 let zdarma", "Sleva pro seniory a ZTP"].map((note) => (
            <span key={note} className="inline-flex items-center gap-1.5">
              <Check className="h-4 w-4 text-primary" />
              {note}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
