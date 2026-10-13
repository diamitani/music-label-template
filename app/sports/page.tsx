import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CTABanner } from "@/components/cta-banner"

import source from "@/docs/sid-mali-sports/content.json"

export const metadata: Metadata = {
  title: "We Up Sports | Connecting African Athletes, American Opportunities and Global Brands",
  description: source.brand.tagline,
}

const areas = ["Sports management", "Talent connections", "Brand partnerships", "Cross-cultural partnerships"]

const gallery = [
  { file: "15-court-seat", alt: "Courtside at an arena game" },
  { file: "16-nba-interview", alt: "On the floor at a live sports broadcast" },
  { file: "17-arena-courtside", alt: "Seated courtside at an arena" },
  { file: "18-athlete-1", alt: "Meeting a player at a sports event" },
  { file: "19-athlete-2", alt: "With a former player at an event" },
  { file: "20-athlete-3", alt: "With a player at a sports event" },
  { file: "21-arena-friends", alt: "Friends in the arena seats" },
  { file: "22-arena-seats", alt: "Seated on the arena floor" },
  { file: "23-world-cup-1", alt: "In the stands at a FIFA World Cup 2026 match" },
  { file: "24-world-cup-2", alt: "A group at a stadium event" },
  { file: "25-event-court", alt: "On the court at a sports event" },
  { file: "26-studio-set", alt: "On set at a media studio" },
]

export default function SportsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section aria-labelledby="sports-heading" className="relative overflow-hidden bg-card pt-32 pb-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        <div className="container relative z-10 mx-auto px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-4 font-medium uppercase tracking-wider text-primary">We Up Sports</p>
              <h1 id="sports-heading" className="text-4xl font-bold leading-tight text-balance md:text-6xl">
                {source.brand.tagline}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{source.brand.locationLine}</p>
            </div>
            <img
              src="/sports/14-portrait.jpg"
              alt="Sid Mali, founder of We Up Sports"
              width="711"
              height="684"
              className="mx-auto w-full max-w-lg rounded-xl border border-border"
            />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-balance md:text-4xl">{source.about.headline}</h2>
            <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
              {source.about.paragraphs.map((p) => (
                <p key={p}>{p.replace("Through Sid Mali Sports,", "Through We Up Sports,")}</p>
              ))}
            </div>
            <p className="mt-8 text-xl font-semibold text-primary">{source.about.closing}</p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {areas.map((area) => (
              <div key={area} className="rounded-xl border border-border bg-card p-6">
                <h3 className="text-lg font-semibold">{area}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-card py-20">
        <div className="container mx-auto px-6">
          <p className="mb-4 font-medium uppercase tracking-wider text-primary">Gallery</p>
          <h2 className="mb-10 text-3xl font-bold text-balance md:text-4xl">In the Arena</h2>
          <div className="columns-2 gap-4 md:columns-3 lg:columns-4 [&>*]:mb-4">
            {gallery.map((photo) => (
              <img
                key={photo.file}
                src={`/sports/${photo.file}.jpg`}
                alt={photo.alt}
                loading="lazy"
                className="w-full break-inside-avoid rounded-xl border border-border"
              />
            ))}
          </div>
          <p className="mt-10 max-w-3xl text-xl leading-relaxed text-muted-foreground">{source.closingLine.replace("across sport,", "across sports,")}</p>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </main>
  )
}
