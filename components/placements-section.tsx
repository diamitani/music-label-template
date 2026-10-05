import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const placementCategories = [
  {
    title: "Editorial Playlisting",
    platforms: [
      "Apple Music",
      "Apple Radio",
      "Spotify",
      "Pandora Radio",
      "VeVo Music",
      "Music Choice",
      "SiriusXM (The Heat, Shade45, Heart & Soul)",
      "SoundCloud",
    ],
  },
  {
    title: "International Radio",
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
    title: "TV & Additional Outlets",
    platforms: [
      "BET Soul",
      "BET HER",
      "BET Gospel",
      "MTV U",
      "MTV Spankin New",
      "MTV Biggest Pop",
      "MTV Yo",
      "MTV News",
      "MTV Live",
    ],
  },
]

export function PlacementsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary font-medium uppercase tracking-wider mb-4">Music Video Placements</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Where Your Music Gets Heard</h2>
          <p className="text-muted-foreground text-lg">
            We connect artists with the most influential platforms in the industry, ensuring maximum visibility and
            reach.
          </p>
        </div>

        {/* Placements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {placementCategories.map((category, index) => (
            <Card key={index} className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-xl text-primary">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {category.platforms.map((platform, platformIndex) => (
                    <li key={platformIndex} className="flex items-center gap-3 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {platform}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
