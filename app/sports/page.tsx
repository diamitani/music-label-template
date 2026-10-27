import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

import source from "@/docs/sid-mali-sports/content.json"

export const metadata: Metadata = {
  title: "We Up Sports | Connecting African Athletes, American Opportunities and Global Brands",
  description: source.brand.tagline,
}

const services = [
  {
    title: "Athlete management",
    body: "Representation and career guidance for athletes, on and off the field, built on long-term relationships.",
  },
  {
    title: "Talent identification",
    body: "Finding promising athletes early, with a focus on talent across Africa ready for the next level.",
  },
  {
    title: "Scouting",
    body: "Evaluation and scouting connections for clubs, colleges and programmes looking for verified talent.",
  },
  {
    title: "College recruitment",
    body: "Guiding athletes and their families through the US college recruitment process, from first contact to commitment.",
  },
  {
    title: "Scholarship opportunities",
    body: "Identifying and pursuing athletic scholarship opportunities at US colleges and universities.",
  },
  {
    title: "Brand partnerships",
    body: "Connecting athletes and sporting properties with brands for partnerships that fit both sides.",
  },
  {
    title: "Sports marketing",
    body: "Promotion, media and storytelling that raise the profile of athletes, events and partners.",
  },
]

const usSteps = [
  {
    step: "1",
    title: "Get in touch",
    body: "An athlete, parent or academy reaches out through our enquiry form and shares their goals.",
  },
  {
    step: "2",
    title: "Assessment",
    body: "We review the athlete's profile, footage and ambitions, and agree on the right path together.",
  },
  {
    step: "3",
    title: "Connections",
    body: "We introduce matched athletes to US colleges, universities, scouts and professional networks in our corridor.",
  },
  {
    step: "4",
    title: "Ongoing support",
    body: "We stay involved through recruitment, placement and beyond, so no one navigates the process alone.",
  },
]

const audiences = [
  {
    title: "Athletes",
    body: "Looking for opportunities in the US or beyond? Tell us about your game and your goals.",
    cta: "Enquire as an athlete",
    href: "/contact?service=sports-athlete",
  },
  {
    title: "Academies & clubs",
    body: "Interested in partnering on talent development and pathways? We would like to hear from you.",
    cta: "Partner with us",
    href: "/contact?service=sports-academy",
  },
  {
    title: "Sponsors & brands",
    body: "Want to collaborate with athletes and sporting stories that reach across continents?",
    cta: "Discuss sponsorship",
    href: "/contact?service=sports-sponsor",
  },
  {
    title: "Institutions",
    body: "Sporting bodies, government departments and institutions working in sports development.",
    cta: "Engage with us",
    href: "/contact?service=sports-institution",
  },
]

const gallery = Array.from({ length: 24 }, (_, i) => i + 1)
  .filter((photoNumber) => ![17, 18, 19].includes(photoNumber))
  .map((photoNumber) => ({
    file: `${photoNumber}-all-${String(photoNumber).padStart(2, "0")}`,
    alt: `We Up Sports photo ${photoNumber}`,
  }))

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
        </div>
      </section>

      <section aria-labelledby="what-we-do" className="bg-card py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="mb-4 font-medium uppercase tracking-wider text-primary">What we do</p>
            <h2 id="what-we-do" className="text-3xl font-bold text-balance md:text-4xl">
              Sports management and talent development, built on real relationships
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              We Up Sports is the sports division of We Up Music Group. We serve athletes chasing opportunities,
              academies and clubs developing talent, and brands and institutions investing in sport. What sets us apart
              is a relationship-driven approach: direct, trusted connections across sporting ecosystems in Africa and
              the United States, not a database or a marketplace.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="rounded-xl border border-border bg-background p-6">
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="us-connection" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="mb-4 font-medium uppercase tracking-wider text-primary">The US connection</p>
            <h2 id="us-connection" className="text-3xl font-bold text-balance md:text-4xl">
              From Africa to the United States
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              We Up Sports connects African athletes with US colleges, universities, scouts and professional sporting
              networks. Based in New York and rooted in South Africa, we work both sides of the corridor: we understand
              where athletes come from, and we know the people and programmes they are trying to reach.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {usSteps.map((item) => (
              <div key={item.step} className="rounded-xl border border-border bg-card p-6">
                <p className="text-2xl font-bold text-primary">{item.step}</p>
                <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
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

      <section aria-labelledby="partners" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="mb-4 font-medium uppercase tracking-wider text-primary">Partnerships</p>
            <h2 id="partners" className="text-3xl font-bold text-balance md:text-4xl">Partner with We Up Sports</h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              We work with football academies, sporting bodies, corporate sponsors, government departments and other
              institutions invested in sports development. Every partnership starts with a conversation about shared
              goals and what each side brings.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              We clearly distinguish confirmed partnerships from prospective conversations. Confirmed partnerships are
              announced on this page as they are formalised.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="welfare" className="bg-card py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="mb-4 font-medium uppercase tracking-wider text-primary">Youth development</p>
            <h2 id="welfare" className="text-3xl font-bold text-balance md:text-4xl">
              Athlete welfare and safeguarding
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Much of our work involves young talent, and we take that responsibility seriously. Parents and guardians
              are involved wherever an athlete is a minor. Personal information is handled with care and never
              published without consent. Every engagement begins with clear, transparent terms before any commitment
              is made.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="get-started" className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="mb-4 font-medium uppercase tracking-wider text-primary">Get started</p>
            <h2 id="get-started" className="text-3xl font-bold text-balance md:text-4xl">Start the conversation</h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              However you want to engage with We Up Sports, there is a clear first step. Choose the path that fits you
              and send us a short enquiry. We respond to every message personally.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {audiences.map((audience) => (
              <div key={audience.title} className="rounded-xl border border-border bg-card p-6">
                <h3 className="text-lg font-semibold">{audience.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{audience.body}</p>
                <Button asChild className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href={audience.href}>
                    {audience.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
