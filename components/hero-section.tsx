import { useState, useEffect, useCallback } from "react"
import { Sun, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { heroSlides } from "@/lib/site-images"
import { socialLinks } from "@/lib/social-links"

export function HeroSection() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => setCurrent((c) => (c + 1) % heroSlides.length), [])
  const prev = useCallback(() => setCurrent((c) => (c - 1 + heroSlides.length) % heroSlides.length), [])

  useEffect(() => {
    const id = setInterval(next, 5000)
    return () => clearInterval(id)
  }, [next])

  return (
    <section className="overflow-hidden bg-[#486584] text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <span className="mb-5 inline-flex w-fit items-center gap-2 rounded-full bg-emerald-400/95 px-4 py-1.5 text-sm font-medium text-[#ffffff]">
              <Sun className="h-4 w-4" />
              Letní sezóna 2026 je v plném proudu
            </span>

            <h1 className="max-w-2xl font-heading text-4xl font-800 leading-tight text-balance sm:text-5xl md:text-6xl">
              Koupaliště Koryčany
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-relaxed text-pretty text-white/84">
              Ideální místo pro letní rodinnou zábavu i sportovní relaxaci. Přijďte si zaplavat, zrelaxovat na
              slunci a užít si pravou letní atmosféru.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button
                size="lg"
                nativeButton={false}
                className="bg-white text-slate-900 hover:bg-slate-100"
                render={<a href="#otviraci-doba">Otevírací doba a ceník</a>}
              />
              <Button
                size="lg"
                variant="outline"
                nativeButton={false}
                className="border-white/20 bg-transparent text-white hover:border-white/30 hover:bg-white/10 hover:text-white"
                render={<a href="#nabidka">Co u nás najdete</a>}
              />
            </div>

            <div className="mt-5 flex items-center gap-3">
              <span className="text-sm font-medium text-white/72">Sledujte nás</span>
              <div className="flex items-center gap-2">
                {socialLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    title={link.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/18 bg-white/10 text-white transition-colors hover:border-white/35 hover:bg-white/18"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="h-5 w-5 fill-current"
                    >
                      <path d={link.iconPath} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-10 flex items-center gap-2 text-sm text-white/72">
              <img
                src="/logo.png"
                alt="Logo Koupaliště Koryčany"
                className="h-5 w-5 rounded-sm object-contain"
              />
              Koryčany · provozováno s příspěvkem města Koryčany
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-white/12 bg-[#3d5671]/30">
            <div className="relative aspect-[4/3] sm:aspect-[5/4]">
              {heroSlides.map((slide, i) => (
                <img
                  key={slide.src}
                  src={slide.src}
                  alt={slide.alt}
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
                    i === current ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2f4257]/42 via-[#2f4257]/10 to-transparent" />
            </div>

            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 p-4">
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Předchozí snímek"
                  className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-white/16 text-white backdrop-blur-md transition-colors hover:bg-white/26"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Další snímek"
                  className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-white/16 text-white backdrop-blur-md transition-colors hover:bg-white/26"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              <div className="flex gap-2">
                {heroSlides.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setCurrent(i)}
                    aria-label={`Snímek ${i + 1}`}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      i === current ? "w-7 bg-white" : "w-2.5 bg-white/45 hover:bg-white/65"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
