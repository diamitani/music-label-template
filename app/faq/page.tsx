import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CTABanner } from "@/components/cta-banner"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: "FAQ | We Up Music Group",
  description:
    "Frequently asked questions about music video placements, editorial playlisting, artist management, and our services.",
}

const faqs = [
  {
    question: "What services do you provide?",
    answer:
      "We provide comprehensive music industry services including music video placements on MTV, BET, and major networks; editorial playlisting on Spotify, Apple Music, and Pandora; radio promotion on SiriusXM, iHeart, and Hot 97; podcast and media features; performance platform placements; and full-service artist management.",
  },
  {
    question: "How do music video placements work?",
    answer:
      "Our music video placement process begins with a review of your content to ensure it meets broadcast standards. Once approved, we leverage our relationships with network programmers and playlist curators to secure placements on platforms like MTV, BET, VeVo, and more. We handle all the logistics and keep you updated on placement status and airdates.",
  },
  {
    question: "What platforms can you secure editorial playlisting on?",
    answer:
      "We have relationships with curators at Apple Music, Spotify, Pandora, SoundCloud, VeVo Music, Music Choice, and SiriusXM. We also work with international platforms including Channel O Africa, Trace TV Africa, and MTV Base Africa. Each platform has its own criteria, and we work to match your music with the most relevant playlists.",
  },
  {
    question: "Do you accept new artists for management?",
    answer:
      "Yes, we selectively accept new artists for management. We look for artists who are committed to their career, have quality music ready for promotion, and align with our vision and approach. To apply, submit an inquiry through our contact form with links to your music and a brief description of your goals.",
  },
  {
    question: "How fast can campaigns start?",
    answer:
      "Campaign timelines vary depending on the services you need and current placement opportunities. Editorial playlisting campaigns typically begin within 1-2 weeks of approval. Music video placements may take 2-4 weeks depending on network schedules. Radio campaigns are usually scheduled 2-3 weeks out. We'll provide a detailed timeline during your consultation.",
  },
  {
    question: "What genres do you specialize in?",
    answer:
      "While we have the strongest track record in Hip-Hop and R&B, we work with artists across multiple genres including Pop, Afrobeats, Gospel, and more. Our past clients include artists like Jack Harlow, Lil Baby, T.I., Bobby Valentino, and DreamDoll, representing a range of styles within urban and contemporary music.",
  },
  {
    question: "What are your pricing options?",
    answer:
      "Our pricing varies based on the services you need and the scope of your campaign. We offer individual service packages as well as comprehensive campaign bundles. Contact us for a free consultation where we'll discuss your goals and provide a customized quote tailored to your needs and budget.",
  },
  {
    question: "Do you work with independent artists or only signed artists?",
    answer:
      "We work with both independent and signed artists. Many of our clients are independent artists looking to gain exposure and build their careers. We also work with artists signed to major and independent labels. The quality of your music and your commitment to promotion are more important than your label status.",
  },
  {
    question: "What makes We Up Music Group different from other promotion services?",
    answer:
      "With over 15 years of experience, We Up Music Group brings genuine industry relationships and a proven track record. Our founder, Sid Mali, has worked with major labels including G-Unit Records, Interscope, Universal Music, and Def Jam. We're not just a promotion service – we're industry insiders who understand how to position artists for success.",
  },
  {
    question: "How do I get started?",
    answer:
      "Getting started is easy. Simply fill out our contact form or reach out via email at sidmali2@gmail.com. We'll schedule a free consultation to discuss your music, goals, and how we can help. From there, we'll create a customized plan and get your campaign started.",
  },
]

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-primary font-medium uppercase tracking-wider mb-4">FAQ</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Frequently Asked Questions</h1>
            <p className="text-muted-foreground text-xl leading-relaxed">
              Find answers to common questions about our services, process, and how we can help elevate your music
              career.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/50"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary py-6 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Still Have Questions?</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Can{"'"}t find what you{"'"}re looking for? Reach out to us directly and we{"'"}ll be happy to help.
            </p>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/contact">
                Contact Us
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
