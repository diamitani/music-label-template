import { Music, Radio, Mic2, Users, Tv, Globe } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Tv,
    title: "Music Video Placements",
    description: "Get your music videos featured on MTV, BET, VeVo, and major networks worldwide.",
  },
  {
    icon: Music,
    title: "Editorial Playlisting",
    description: "Secure placements on Apple Music, Spotify, Pandora, and SoundCloud editorial playlists.",
  },
  {
    icon: Radio,
    title: "Radio Campaigns",
    description: "Strategic radio promotion on SiriusXM, iHeart, Hot 97, and international stations.",
  },
  {
    icon: Users,
    title: "Artist Management",
    description: "Full-service career development, branding, and strategic artist management.",
  },
  {
    icon: Mic2,
    title: "Press & Media Interviews",
    description: "Coordinate interviews and features with major media outlets and podcasts.",
  },
  {
    icon: Globe,
    title: "International Reach",
    description: "Expand your presence across African and international markets through our global network.",
  },
]

export function ServicesOverview() {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary font-medium uppercase tracking-wider mb-4">What We Offer</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Comprehensive Music Industry Services</h2>
          <p className="text-muted-foreground text-lg">
            We provide professional music video placement services for the entertainment industry. We have worked with
            hundreds of emerging and superstar talent to grow their presence on major networks, platforms, and brands.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="bg-background border-border hover:border-primary/50 transition-colors group">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
