import { Clock, CalendarDays } from "lucide-react"

const schedule = [
  { dates: "21. – 22. 6. 2026", time: "10:00 – 19:00" },
  { dates: "23. – 27. 6. 2026", time: "14:00 – 19:00" },
  { dates: "28. 6. – 31. 8. 2026", time: "9:00 – 19:00", highlight: true },
]

export function HoursSection() {
  return (
    <section id="otviraci-doba" className="scroll-mt-20 bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-primary">
              <Clock className="h-4 w-4" />
              Otevírací doba
            </span>
            <h2 className="mt-3 font-heading text-3xl font-700 text-balance text-foreground md:text-4xl">
              Přijďte, kdy se vám to hodí
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-muted-foreground text-pretty">
              V hlavní sezóně máme otevřeno každý den. Sledujte sekci aktuálně pro případné změny provozní doby a
              plánované akce.
            </p>
          </div>

          <div className="space-y-3">
            {schedule.map((item) => (
              <div
                key={item.dates}
                className={`flex items-center justify-between gap-4 rounded-2xl border px-6 py-5 ${
                  item.highlight
                    ? "border-slate-700 bg-slate-700 text-white"
                    : "border-border bg-white text-foreground"
                }`}
              >
                <span className="flex items-center gap-3">
                  <CalendarDays
                    className={`h-5 w-5 ${item.highlight ? "text-white" : "text-muted-foreground"}`}
                  />
                  <span className="font-medium">{item.dates}</span>
                </span>
                <span
                  className={`font-heading text-lg font-700 ${item.highlight ? "text-white" : "text-foreground"}`}
                >
                  {item.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
