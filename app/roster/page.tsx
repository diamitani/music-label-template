import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CTABanner } from "@/components/cta-banner"
import { Card, CardContent } from "@/components/ui/card"

export const metadata = {
  title: "Featured Clients | We Up Music Group",
  description:
    "Explore some of the artists we've worked with including Jack Harlow, Lil Baby, T.I., Benny The Butcher, and more.",
}

const pastClients = [
  { name: "Jack Harlow", category: "Hip-Hop" },
  { name: "Lil Baby", category: "Hip-Hop" },
  { name: "T.I.", category: "Hip-Hop" },
  { name: "Benny The Butcher", category: "Hip-Hop" },
  { name: "DreamDoll", category: "Hip-Hop" },
  { name: "Young Dolph", category: "Hip-Hop" },
  { name: "Maino", category: "Hip-Hop" },
  { name: "Bobby Valentino", category: "R&B" },
  { name: "OJ Da Juiceman", category: "Hip-Hop" },
  { name: "Young Chop", category: "Producer" },
  { name: "41 (The Group)", category: "Hip-Hop" },
  { name: "Kai Ca$h", category: "Hip-Hop" },
  { name: "Connie Diamond", category: "Hip-Hop" },
  { name: "Eastside Jody", category: "Hip-Hop" },
]

export default function RosterPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-primary font-medium uppercase tracking-wider mb-4">Featured Clients</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Artists We{"'"}ve Elevated</h1>
            <p className="text-muted-foreground text-xl leading-relaxed">
              We{"'"}ve had the privilege of working with some of the most talented artists in the industry, helping
              them secure major placements and grow their careers.
            </p>
          </div>
        </div>
      </section>

      {/* Clients Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-primary font-medium uppercase tracking-wider mb-4">Industry Recognition</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Some of Our Clients</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From established artists ready to expand their reach to emerging stars breaking through to the next
              level—we work with talent at every stage of their journey.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {pastClients.map((client, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary/50 transition-colors">
                <CardContent className="p-5 text-center">
                  <p className="font-semibold text-foreground mb-1">{client.name}</p>
                  <p className="text-xs text-primary">{client.category}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-primary font-medium uppercase tracking-wider mb-4">Visual Gallery</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Behind the Scenes</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Moments from our work with artists across the industry.
            </p>
          </div>

          {/* Mosaic Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            <div className="col-span-2 row-span-2">
              <div className="aspect-square bg-card rounded-xl overflow-hidden border border-border">
                <img
                  src="/music-industry-executive-meeting-with-hip-hop-arti.jpg"
                  alt="Industry meeting"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="aspect-square bg-card rounded-xl overflow-hidden border border-border">
              <img
                src="/professional-music-interview-setup-with-microphone.jpg"
                alt="Interview setup"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square bg-card rounded-xl overflow-hidden border border-border">
              <img
                src="/hip-hop-artist-performing-on-stage-with-gold-light.jpg"
                alt="Artist performance"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square bg-card rounded-xl overflow-hidden border border-border">
              <img
                src="/music-video-production-set-with-professional-camer.jpg"
                alt="Video production"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square bg-card rounded-xl overflow-hidden border border-border">
              <img
                src="/radio-station-interview-with-hip-hop-artist.jpg"
                alt="Radio interview"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-span-2">
              <div className="aspect-[2/1] bg-card rounded-xl overflow-hidden border border-border">
                <img
                  src="/music-industry-conference-panel-discussion-enterta.jpg"
                  alt="Industry conference"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </main>
  )
}
