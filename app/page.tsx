import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { ServicesOverview } from "@/components/services-overview"
import { PlacementsSection } from "@/components/placements-section"
import { ClientsCarousel } from "@/components/clients-carousel"
import { CTABanner } from "@/components/cta-banner"

import source from "@/docs/sid-mali-sports/content.json"

const sportsPhotos = [
  { file: "2-sid-sports-batch-1-image-00.jpg", alt: "Sid Mali seated at a sporting event" },
  { file: "3-sid-sports-batch-2-image-13.jpg", alt: "A group at a stadium event" },
  { file: "4-sid-sports-batch-2-image-14.jpg", alt: "Sid Mali in a stadium" },
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ServicesOverview />
      <PlacementsSection />
      <ClientsCarousel />
      <section id="sports" aria-labelledby="sports-heading" className="scroll-mt-24 border-y border-border bg-card py-24">
        <div className="container mx-auto px-6">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="mb-4 font-medium uppercase tracking-wider text-primary">{source.brand.name}</p>
              <h2 id="sports-heading" className="text-3xl font-bold leading-tight text-balance md:text-5xl">{source.brand.tagline}</h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{source.brand.locationLine}</p>
              <h3 className="mt-8 text-xl font-semibold">{source.about.headline}</h3>
              <div className="mt-5 space-y-4 leading-relaxed text-muted-foreground">
                {source.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </div>
            <img src="/1-sid-sports-batch-2-image-11.jpg" alt="Portrait of Sid Mali" width="711" height="684" loading="lazy" className="mx-auto w-full max-w-lg rounded-xl border border-border" />
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {["Sports management", "Talent connections", "Brand relationships", "Cross-cultural partnerships"].map((area) => (
              <div key={area} className="rounded-xl border border-border bg-background p-6"><h3 className="text-lg font-semibold">{area}</h3></div>
            ))}
          </div>
          <p className="mt-8 text-xl font-semibold text-primary">{source.about.closing}</p>
          <div className="mt-10 grid items-start gap-5 sm:grid-cols-3">
            {sportsPhotos.map((photo) => <img key={photo.file} src={"/" + photo.file} alt={photo.alt} loading="lazy" className="h-auto w-full rounded-xl border border-border" />)}
          </div>
          <p className="mt-10 max-w-3xl text-xl leading-relaxed text-muted-foreground">{source.closingLine}</p>
        </div>
      </section>
      <CTABanner />
      <Footer />
    </main>
  )
}
