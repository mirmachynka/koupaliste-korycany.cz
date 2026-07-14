import { galleryImages } from "@/lib/site-images"

export function GallerySection() {
  return (
    <section className="bg-[#486584] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
          <div className="order-2 grid grid-cols-2 gap-4 lg:order-1">
            <img
              src={galleryImages[0].src}
              alt={galleryImages[0].alt}
              className="col-span-2 h-56 w-full rounded-2xl object-cover sm:h-72"
            />
            <img
              src={galleryImages[1].src}
              alt={galleryImages[1].alt}
              className="h-40 w-full rounded-2xl object-cover sm:h-48"
            />
            <img
              src={galleryImages[2].src}
              alt={galleryImages[2].alt}
              className="h-40 w-full rounded-2xl object-cover sm:h-48"
            />
          </div>

          <div className="order-1 lg:order-2 lg:pl-6">
            <span className="text-sm font-semibold uppercase tracking-wide text-white/72">
              Areál
            </span>
            <h2 className="mt-3 font-heading text-3xl font-700 text-balance text-white md:text-4xl">
              Léto v Koryčanech začíná u vody
            </h2>
            <p className="mt-4 leading-relaxed text-pretty text-white/84">
              Ať už si přijdete zaplavat, zahrát beachvolejbal nebo se jen opalovat na rozlehlé travnaté ploše,
              čeká vás příjemně upravený areál s občerstvením a zázemím pro celou rodinu. Sledujte provozní dobu
              a plánované akce a přijďte si užít letní atmosféru.
            </p>
            <dl className="mt-8 grid grid-cols-3 gap-4">
              {[
                { value: "50 × 21 m", label: "Plavecký bazén" },
                { value: "12 000 m²", label: "Travnatá plocha" },
                { value: "3", label: "Beach kurty" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="grid h-full grid-rows-[1fr_auto] rounded-xl border border-white/12 bg-white/5 p-4 text-center"
                >
                  <dt
                    className={`flex items-center justify-center font-heading leading-tight text-white ${
                      stat.value === "3"
                        ? "text-5xl font-500 leading-none tracking-tight md:text-4xl md:font-700"
                        : "text-xl font-700 md:text-2xl"
                    }`}
                  >
                    {stat.value}
                  </dt>
                  <dd className="flex min-h-[2.5rem] items-center justify-center text-xs text-white/72">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
