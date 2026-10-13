import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { ServicesOverview } from "@/components/services-overview"
import { PlacementsSection } from "@/components/placements-section"
import { ClientsCarousel } from "@/components/clients-carousel"
import { CTABanner } from "@/components/cta-banner"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ServicesOverview />
      <PlacementsSection />
      <ClientsCarousel />
      <CTABanner />
      <Footer />
    </main>
  )
}
