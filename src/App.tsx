import { AmenitiesSection } from "@/components/amenities-section"
import { ContactFooter } from "@/components/contact-footer"
import { ContactSection } from "@/components/contact-section"
import { FoodSection } from "@/components/food-section"
import { GallerySection } from "@/components/gallery-section"
import { HeroSection } from "@/components/hero-section"
import { HoursSection } from "@/components/hours-section"
import { NewsSection } from "@/components/news-section"
import { PricingSection } from "@/components/pricing-section"
import { SiteHeader } from "@/components/site-header"

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <div className="flex flex-col gap-20 md:gap-28">
        <main className="flex flex-col gap-20 md:gap-28">
          <HeroSection />
          <NewsSection />
          <AmenitiesSection />
          <GallerySection />
          <PricingSection />
          <HoursSection />
          <FoodSection />
          <ContactSection />
        </main>
        <ContactFooter />
      </div>
    </div>
  )
}
