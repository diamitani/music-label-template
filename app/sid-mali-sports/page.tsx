import type { Metadata } from "next"
import Link from "next/link"
import source from "@/docs/sid-mali-sports/content.json"

export const metadata: Metadata = {
  title: "Sid Mali Sports | African Talent, American Opportunities, Global Brands",
  description: source.brand.tagline + ". " + source.brand.locationLine,
  openGraph: { title: source.brand.name, description: source.brand.tagline, type: "website" },
}

const photos = [
  { file: "2-sid-sports-batch-1-image-00.jpg", alt: "Sid Mali seated at a sporting event" },
  { file: "3-sid-sports-batch-2-image-13.jpg", alt: "A group at a stadium event" },
  { file: "4-sid-sports-batch-2-image-14.jpg", alt: "Sid Mali in a stadium" },
]

export default function SidMaliSportsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border">
        <nav aria-label="Sports navigation" className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-5">
          <Link href="/sid-mali-sports" className="text-xl font-bold tracking-tight">SID MALI <span className="text-primary">SPORTS</span></Link>
          <div className="flex flex-wrap gap-5 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-foreground">About</a>
            <a href="#approach" className="hover:text-foreground">Our approach</a>
            <a href="#gallery" className="hover:text-foreground">Gallery</a>
            <Link href="/" className="hover:text-foreground">We Up Music</Link>
          </div>
        </nav>
      </header>
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
        <div>
          <p className="mb-5 text-sm font-semibold uppercase tracking-widest text-primary">{source.brand.name}</p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">{source.brand.tagline}</h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">{source.brand.locationLine}</p>
          <a href="#about" className="mt-8 inline-flex min-h-11 items-center rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground">Meet Sid Mali</a>
        </div>
        <img src="/1-sid-sports-batch-2-image-11.jpg" alt="Portrait of Sid Mali" width="711" height="684" className="w-full rounded-xl border border-border" />
      </section>
      <section id="about" className="scroll-mt-8 border-y border-border bg-card">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">About Sid Mali</p>
          <h2 className="max-w-3xl text-3xl font-bold leading-tight md:text-4xl">{source.about.headline}</h2>
          <div className="mt-8 grid gap-6 text-lg leading-relaxed text-muted-foreground md:grid-cols-3">
            {source.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
      </section>
      <section id="approach" className="mx-auto max-w-6xl scroll-mt-8 px-6 py-16">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">Our approach</p>
        <h2 className="max-w-3xl text-3xl font-bold leading-tight">{source.about.closing}</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {["Sports management", "Talent connections", "Brand relationships", "Cross-cultural partnerships"].map((area) => (
            <div key={area} className="rounded-xl border border-border bg-card p-6"><h3 className="text-lg font-semibold">{area}</h3></div>
          ))}
        </div>
      </section>
      <section id="gallery" className="mx-auto max-w-6xl scroll-mt-8 px-6 pb-16">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">Sport &amp; culture</p>
        <h2 className="text-3xl font-bold">In the sporting world</h2>
        <div className="mt-8 grid items-start gap-5 sm:grid-cols-3">
          {photos.map((photo) => <img key={photo.file} src={"/" + photo.file} alt={photo.alt} loading="lazy" className="h-auto w-full rounded-xl border border-border" />)}
        </div>
      </section>
      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="max-w-3xl text-2xl font-semibold leading-relaxed text-primary">{source.closingLine}</p>
        </div>
      </section>
      <footer className="mx-auto flex max-w-6xl flex-wrap justify-between gap-4 px-6 py-8 text-sm text-muted-foreground">
        <p>{source.brand.name}</p><Link href="/" className="hover:text-foreground">Back to We Up Music Group</Link>
      </footer>
    </main>
  )
}
