import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CTABanner } from "@/components/cta-banner"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Award, Globe, Mic, Music, ArrowRight, MapPin, GraduationCap, Briefcase } from "lucide-react"

export const metadata = {
  title: "About Sid Mali | We Up Music Group",
  description:
    "Learn about Sid Mali, founder of We Up Music Group with 15+ years in the global entertainment industry working with G-Unit Records, Interscope, Universal, and Def Jam.",
}

const highlights = [
  {
    icon: Award,
    title: "15+ Years Experience",
    description: "Over a decade and a half of expertise in the global entertainment industry.",
  },
  {
    icon: Music,
    title: "Major Label Work",
    description: "Collaborated with G-Unit Records, Interscope, Universal Music, and Def Jam.",
  },
  {
    icon: Mic,
    title: "Media Correspondent",
    description: "Correspondent for Metro FM, SABC's LiveAmp, and ETV's Club 808.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Cultural bridge connecting U.S. and African entertainment industries.",
  },
]

const timeline = [
  {
    year: "Early Years",
    title: "South African Roots",
    description: "Born and raised in South Africa, developing a deep appreciation for diverse musical cultures.",
  },
  {
    year: "Age 17",
    title: "Move to the United States",
    description:
      "Relocated to the U.S. for the final year of High School, beginning the journey in American entertainment.",
  },
  {
    year: "Education",
    title: "Academic Foundation",
    description:
      "Bachelor of Arts in International Studies from University of Iowa. Graduate Diploma in Project Management from Boston University.",
  },
  {
    year: "Career Launch",
    title: "Founded Amaza Show Live LLC",
    description: "Established first entertainment consulting company, working with emerging and established talent.",
  },
  {
    year: "Major Labels",
    title: "Industry Partnerships",
    description:
      "Built relationships with G-Unit Records, Interscope, Universal Music, and Def Jam, providing PR, branding, and placement services.",
  },
  {
    year: "Media Work",
    title: "South African Media Correspondent",
    description: "Served as correspondent for Metro FM, SABC's LiveAmp, and ETV's Club 808.",
  },
  {
    year: "Present",
    title: "We Up Music Group",
    description:
      "Leading comprehensive music placement and artist development services from New York, connecting artists globally.",
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-card relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary font-medium uppercase tracking-wider mb-4">About the Founder</p>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Sid Mali</h1>
              <p className="text-muted-foreground text-xl leading-relaxed mb-4">
                Entertainment Consultant & Media Correspondent
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <MapPin size={16} className="text-primary" />
                  New York, NY
                </span>
                <span className="flex items-center gap-2">
                  <GraduationCap size={16} className="text-primary" />
                  University of Iowa
                </span>
                <span className="flex items-center gap-2">
                  <Briefcase size={16} className="text-primary" />
                  15+ Years Experience
                </span>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-border">
                <img
                  src="/images/sid-mali.jpg"
                  alt="Sid Mali - Entertainment Consultant"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-4 shadow-xl">
                <p className="text-3xl font-bold text-primary">15+</p>
                <p className="text-sm text-muted-foreground">Years in Entertainment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Professional Biography</h2>
            <div className="prose prose-lg prose-invert max-w-none space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Sid Mali is a seasoned entertainment consultant, media correspondent, and cultural advocate with over 15
                years of experience in the global entertainment industry. He was born and raised in South Africa and
                moved to the US at 17 for his last year of High School. He holds a Bachelor of Arts in International
                Studies from the University of Iowa and a Graduate Diploma in Project Management from Boston University.
                Based in New York, Sid has established himself as a key figure in connecting artists, media, and brands
                across diverse platforms.
              </p>
              <p>
                As the founder of Amaza Show Live LLC, Sid has worked with major record labels such as G-Unit Records,
                Interscope, Universal Music, and Def Jam, providing expertise in public relations, branding, music
                placement, and artist bookings. His career highlights include producing and hosting video interviews
                with leading musicians and public figures, offering a platform for emerging and established talent.
              </p>
              <p>
                In addition to his work in the U.S., Sid has served as a correspondent for several high-profile South
                African media outlets, including Metro FM, SABC{"'"}s LiveAmp, and ETV{"'"}s Club 808. His international
                experience has positioned him as a cultural bridge, promoting African talent on the global stage and
                facilitating meaningful exchanges between the U.S. and African entertainment industries.
              </p>
              <p>
                Passionate about storytelling, Sid is committed to showcasing diverse narratives that uplift Black and
                African cultures. His work is driven by a desire to empower communities, promote positive cultural
                representation, and mentor the next generation of artists and creatives. Sid{"'"}s extensive experience,
                coupled with his dedication to cultural advocacy, makes him a respected voice in entertainment and
                media.
              </p>
              <p>
                Sid continues to leverage his platform to drive positive change in the entertainment industry, believing
                in the power of media and music to inspire, connect, and foster global understanding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Grid */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-primary font-medium uppercase tracking-wider mb-4">Career Highlights</p>
            <h2 className="text-3xl md:text-4xl font-bold text-balance">What Sets Sid Apart</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="bg-background border-border">
                <CardContent className="p-8 text-center">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <highlight.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{highlight.title}</h3>
                  <p className="text-muted-foreground text-sm">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-primary font-medium uppercase tracking-wider mb-4">Journey</p>
            <h2 className="text-3xl md:text-4xl font-bold text-balance">Career Timeline</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-primary flex-shrink-0" />
                    {index < timeline.length - 1 && <div className="w-0.5 h-full bg-border mt-2" />}
                  </div>
                  <div className="pb-8">
                    <p className="text-sm text-primary font-medium mb-1">{item.year}</p>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-primary font-medium uppercase tracking-wider mb-4">Gallery</p>
            <h2 className="text-3xl md:text-4xl font-bold text-balance">In the Industry</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            <div className="aspect-square rounded-xl overflow-hidden border border-border">
              <img
                src="/images/9.png"
                alt="Sid Mali with 50 Cent"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square rounded-xl overflow-hidden border border-border">
              <img
                src="/images/8.png"
                alt="Sid Mali with DJ Khaled"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square rounded-xl overflow-hidden border border-border">
              <img
                src="/images/7.png"
                alt="Sid Mali with T.I."
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square rounded-xl overflow-hidden border border-border">
              <img
                src="/images/1.png"
                alt="Sid Mali with Charlamagne Tha God"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square rounded-xl overflow-hidden border border-border">
              <img
                src="/images/19.png"
                alt="Sid Mali with Wiz Khalifa"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square rounded-xl overflow-hidden border border-border">
              <img
                src="/images/20.png"
                alt="Sid Mali with Common"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square rounded-xl overflow-hidden border border-border">
              <img
                src="/images/12.png"
                alt="Sid Mali with Swizz Beatz"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square rounded-xl overflow-hidden border border-border">
              <img
                src="/images/10.png"
                alt="Sid Mali with Toni Braxton"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square rounded-xl overflow-hidden border border-border col-span-2 md:col-span-1">
              <img
                src="/images/13.png"
                alt="Sid Mali with Steve Aoki at SiriusXM"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square rounded-xl overflow-hidden border border-border col-span-2 md:col-span-1">
              <img
                src="/images/11.png"
                alt="Sid Mali with Adrian Grenier"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Connect CTA */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Connect with Sid</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Ready to work with an industry veteran? Get in touch to discuss how We Up Music Group can help elevate
              your music career.
            </p>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/contact">
                Contact Sid
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </main>
  )
}
