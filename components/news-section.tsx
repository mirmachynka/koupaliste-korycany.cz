export function NewsSection() {
  return (
    <section id="aktuality" className="scroll-mt-20 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">Aktuality</span>
            <h2 className="mt-3 font-heading text-3xl font-700 text-balance text-foreground md:text-4xl">
              Letní večer na koupališti
            </h2>
            <p className="mt-4 max-w-lg leading-relaxed text-muted-foreground text-pretty">
              Ve čtvrtek 24. 7. 2026 od 20.00 hodin vás zveme na letní party na koupališti Koryčany. Čeká vás
              večer plný hudby a živé letní atmosféry.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card p-5">
                <span className="text-xs font-semibold uppercase tracking-wide text-primary">Hudba</span>
                <p className="mt-2 font-heading text-xl font-700 text-foreground">DJ Jara Hofírek</p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-5">
                <span className="text-xs font-semibold uppercase tracking-wide text-primary">Vstupné</span>
                <p className="mt-2 font-heading text-xl font-700 text-foreground">100 Kč</p>
              </div>
            </div>

            <ul className="mt-6 space-y-2 text-sm leading-relaxed text-muted-foreground">
              <li>Po celý večer budou k dispozici chlazené nápoje i občerstvení.</li>
            </ul>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img
              src="/image5.png"
              alt="Aktuální plakát k akci na koupališti Koryčany"
              className="w-full max-w-sm rounded-2xl border border-border object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
