import { AmenitiesSection } from "@/components/amenities-section"
import { ContactFooter } from "@/components/contact-footer"
import { ContactSection } from "@/components/contact-section"
import { GallerySection } from "@/components/gallery-section"
import { HeroSection } from "@/components/hero-section"
import { HoursSection } from "@/components/hours-section"
import { PricingSection } from "@/components/pricing-section"
import { SiteHeader } from "@/components/site-header"

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <HeroSection />
        <AmenitiesSection />
        <GallerySection />
        <PricingSection />
        <HoursSection />
        <ContactSection />
      </main>
      <ContactFooter />
    </div>
  )
}
