import { ExternalLink, MapPin } from "lucide-react"

import { ExpandableImage } from "@/components/expandable-image"
import { Button } from "@/components/ui/button"

export function FoodSection() {
  return (
    <section id="jidlo" className="scroll-mt-20 bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 md:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <ExpandableImage
          src="/restaurace-kulturni-dum.jpg"
          alt="Hlavní sál Restaurace Kulturní dům ve Střílkách"
          className="aspect-[16/10] w-full"
        />

        <div>
          <h2 className="font-heading text-3xl font-700 text-balance text-foreground md:text-4xl">
            Jídlo, hospoda i ubytování ve Střílkách
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-pretty text-muted-foreground">
            Po dni na koupališti můžete pokračovat ve Střílkách: přes den na oběd do Restaurace Kulturní dům,
            večer na pivo do Hospody Gól a při delším výletu využít i ubytování u Hospody Gól.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              size="lg"
              nativeButton={false}
              render={
                <a href="https://restaurace-strilky.cz/" target="_blank" rel="noopener noreferrer">
                  Restaurace Střílky
                </a>
              }
            >
              <ExternalLink className="h-5 w-5" />
            </Button>
            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              Střílky, pár minut od Koryčan
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
