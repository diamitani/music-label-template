import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CTABanner } from "@/components/cta-banner"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Tv, Music, Radio, Users, Globe, Podcast, Play, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Artist Services | We Up Music Group",
  description:
    "Comprehensive music industry services including video placements, editorial playlisting, radio promotion, and artist management.",
}

const services = [
  {
    icon: Tv,
    title: "Music Video Promotion",
    description:
      "Get your music videos featured on the biggest networks and platforms in the industry. We specialize in strategic placements that maximize your visibility and reach.",
    platforms: [
      "MTV (MTV U, MTV Live, MTV Spankin' New, MTV Yo, MTV Biggest Pop, MTV News)",
      "BET (BET Soul, BET HER, BET Gospel)",
      "VeVo Music",
      "Music Choice",
    ],
  },
  {
    icon: Music,
    title: "Editorial Playlisting",
    description:
      "Secure coveted spots on editorial playlists across major streaming platforms. Our relationships with playlist curators help your music reach new audiences.",
    platforms: [
      "Apple Music editorial playlisting",
      "Spotify editorial playlisting",
      "Pandora editorial playlisting",
      "SoundCloud editorial playlisting",
    ],
  },
  {
    icon: Radio,
    title: "Radio Placement & Interviews",
    description:
      "Strategic radio promotion and interview placements on major U.S. and international stations. Build your presence across terrestrial and satellite radio.",
    platforms: [
      "SiriusXM radio promo & interviews (The Heat, Shade45, Heart & Soul)",
      "iHeart Radio interviews & podcasts",
      "Hot 97 promo & interviews",
      "Apple Radio",
    ],
  },
  {
    icon: Globe,
    title: "International Radio",
    description:
      "Expand your reach globally with our extensive network of international radio contacts, particularly in African markets where we have deep relationships.",
    platforms: [
      "Metro FM (South Africa)",
      "YFM",
      "Radio 2000",
      "5FM",
      "Channel O Africa",
      "Trace TV Africa",
      "MTV Base Africa",
    ],
  },
  {
    icon: Podcast,
    title: "Podcast & Media Features",
    description:
      "Get featured on popular podcasts and media outlets to share your story and connect with engaged audiences.",
    platforms: ["Fat Joe & Jadakiss Podcast (Jada Podcast)", "Additional media appearances & interviews"],
  },
  {
    icon: Play,
    title: "Performance Platforms",
    description:
      "Showcase your talent on trending performance platforms that can catapult your career to the next level.",
    platforms: ["On The Radar performance", "Bar 4 Bar performance"],
  },
  {
    icon: Users,
    title: "Artist Management",
    description:
      "Full-service artist management designed to develop your career strategically and position you for long-term success in the industry.",
    platforms: [
      "Career strategy & development",
      "Branding & image development",
      "Editorial playlist pitching",
      "Press & media coordination",
      "Radio & interview placements",
      "Performance bookings",
    ],
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-primary font-medium uppercase tracking-wider mb-4">Artist Services</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Everything You Need to Elevate Your Career
            </h1>
            <p className="text-muted-foreground text-xl leading-relaxed">
              We provide comprehensive music industry services designed to grow your presence, secure major placements,
              and build lasting success in the entertainment industry.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="space-y-12">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-card border-border overflow-hidden"
                id={service.title.toLowerCase().replace(/\s+/g, "-")}
              >
                <div className="flex flex-col lg:grid lg:grid-cols-5 gap-0">
                  <CardHeader className="lg:col-span-2 bg-background p-6 md:p-8 flex flex-col justify-center">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 md:mb-6">
                      <service.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                    </div>
                    <CardTitle className="text-xl md:text-2xl text-foreground mb-3 md:mb-4">{service.title}</CardTitle>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{service.description}</p>
                  </CardHeader>
                  <CardContent className="lg:col-span-3 p-6 md:p-8 border-t lg:border-t-0 lg:border-l border-border flex flex-col justify-center">
                    <h4 className="text-xs md:text-sm font-semibold uppercase tracking-wider text-primary mb-4 md:mb-6">
                      Platforms & Services
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                      {service.platforms.map((platform, platformIndex) => (
                        <li key={platformIndex} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span className="text-sm md:text-base text-muted-foreground leading-relaxed">{platform}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Management CTA */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-8">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Looking for Artist Management?</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Our management team provides personalized career development, strategic planning, and industry connections
              to help you reach your full potential.
            </p>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/contact?service=management">
                Submit Management Inquiry
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Independent Artists Gallery Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-primary font-medium uppercase tracking-wider mb-4">We Work With Everyone</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
              From Emerging Talent to Established Stars
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Whether you're an independent artist ready to break through or an established act looking to expand your
              reach, we have the tools and connections to elevate your career.
            </p>
          </div>

          {/* Scrolling Artist Gallery */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll gap-8">
              {/* First set of images */}
              <div className="flex gap-8 shrink-0">
                <div className="relative w-80 h-96 rounded-2xl overflow-hidden group">
                  <Image
                    src="/images/artist-1.png"
                    alt="Independent artist"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                </div>
                <div className="relative w-80 h-96 rounded-2xl overflow-hidden group">
                  <Image
                    src="/images/artist-2.png"
                    alt="Independent artist"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                </div>
                <div className="relative w-80 h-96 rounded-2xl overflow-hidden group">
                  <Image
                    src="/images/artist-3.png"
                    alt="Independent artist"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                </div>
              </div>
              {/* Duplicate set for seamless loop */}
              <div className="flex gap-8 shrink-0">
                <div className="relative w-80 h-96 rounded-2xl overflow-hidden group">
                  <Image
                    src="/images/artist-1.png"
                    alt="Independent artist"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                </div>
                <div className="relative w-80 h-96 rounded-2xl overflow-hidden group">
                  <Image
                    src="/images/artist-2.png"
                    alt="Independent artist"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                </div>
                <div className="relative w-80 h-96 rounded-2xl overflow-hidden group">
                  <Image
                    src="/images/artist-3.png"
                    alt="Independent artist"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                </div>
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
