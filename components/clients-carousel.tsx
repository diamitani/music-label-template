"use client"

import { Card, CardContent } from "@/components/ui/card"

const pastClients = [
  "Jack Harlow",
  "Lil Baby",
  "T.I.",
  "Benny The Butcher",
  "DreamDoll",
  "Young Dolph",
  "Maino",
  "Bobby Valentino",
  "OJ Da Juiceman",
  "Young Chop",
  "41 (The Group)",
  "Kai Ca$h",
  "Connie Diamond",
  "Eastside Jody",
]

export function ClientsCarousel() {
  return (
    <section className="py-24 bg-card overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary font-medium uppercase tracking-wider mb-4">Past Clients</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Artists We{"'"}ve Worked With</h2>
          <p className="text-muted-foreground text-lg">
            We{"'"}ve helped emerging and established artists achieve major placements and grow their careers.
          </p>
        </div>
      </div>

      {/* Scrolling Clients */}
      <div className="relative">
        <div className="flex gap-4 animate-scroll">
          {[...pastClients, ...pastClients].map((client, index) => (
            <Card
              key={index}
              className="bg-background border-border flex-shrink-0 hover:border-primary/50 transition-colors"
            >
              <CardContent className="p-6">
                <p className="text-lg font-semibold text-foreground whitespace-nowrap">{client}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Static Grid for Mobile */}
      <div className="container mx-auto px-6 mt-8 md:hidden">
        <div className="grid grid-cols-2 gap-4">
          {pastClients.slice(0, 8).map((client, index) => (
            <Card key={index} className="bg-background border-border">
              <CardContent className="p-4">
                <p className="text-sm font-semibold text-foreground text-center">{client}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
