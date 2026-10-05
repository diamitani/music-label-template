import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">
              <span className="text-foreground">WE UP</span>
              <span className="text-primary"> MUSIC GROUP</span>
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Professional music video placement services for the entertainment industry. Over 15 years of global
              experience.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Artist Services
              </Link>
              <Link href="/roster" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Featured Clients
              </Link>
              <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                About Sid Mali
              </Link>
              <Link href="/faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                FAQ
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary">Services</h4>
            <nav className="flex flex-col gap-2">
              <span className="text-sm text-muted-foreground">Music Video Placements</span>
              <span className="text-sm text-muted-foreground">Editorial Playlisting</span>
              <span className="text-sm text-muted-foreground">Radio Promotion</span>
              <span className="text-sm text-muted-foreground">Artist Management</span>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary">Contact</h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:sidmali2@gmail.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail size={16} />
                sidmali2@gmail.com
              </a>
              <a
                href="tel:917-449-5219"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone size={16} />
                917-449-5219
              </a>
              <span className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin size={16} />
                New York, NY
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} We Up Music Group. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Founded by <span className="text-primary">Sid Mali</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
