"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react"
import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"

const services = [
  { value: "video-placement", label: "Music Video Placement" },
  { value: "playlisting", label: "Editorial Playlisting" },
  { value: "radio", label: "Radio Promotion" },
  { value: "management", label: "Artist Management" },
  { value: "press", label: "Press & Media" },
  { value: "other", label: "Other" },
]

export default function ContactPage() {
  const searchParams = useSearchParams()
  const [submitted, setSubmitted] = useState(false)
  const [selectedService, setSelectedService] = useState("")

  useEffect(() => {
    const service = searchParams.get("service")
    if (service) {
      setSelectedService(service)
    }
  }, [searchParams])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission would be handled here
    setSubmitted(true)
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-primary font-medium uppercase tracking-wider mb-4">Contact Us</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Let{"'"}s Work Together</h1>
            <p className="text-muted-foreground text-xl leading-relaxed">
              Get in touch with us for a free consultation. We{"'"}ll discuss your goals and see how we can help elevate
              your music career.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                <p className="text-muted-foreground mb-8">
                  Ready to take your music career to the next level? Contact us today and let{"'"}s discuss how We Up
                  Music Group can help you achieve your goals.
                </p>
              </div>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email</h3>
                      <a
                        href="mailto:sidmali2@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        sidmali2@gmail.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                      <a href="tel:917-449-5219" className="text-muted-foreground hover:text-primary transition-colors">
                        917-449-5219
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Location</h3>
                      <p className="text-muted-foreground">New York, NY</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  {submitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4">Message Sent!</h3>
                      <p className="text-muted-foreground max-w-md mx-auto">
                        Thank you for reaching out. We{"'"}ll get back to you within 24-48 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Name *</Label>
                          <Input
                            id="name"
                            placeholder="Your full name"
                            required
                            className="bg-background border-border"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="your@email.com"
                            required
                            className="bg-background border-border"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone</Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="Your phone number"
                            className="bg-background border-border"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="artist">Artist Name</Label>
                          <Input
                            id="artist"
                            placeholder="Artist or group name"
                            className="bg-background border-border"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="service">Service Interested In *</Label>
                        <Select value={selectedService} onValueChange={setSelectedService} required>
                          <SelectTrigger className="bg-background border-border">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service.value} value={service.value}>
                                {service.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          placeholder="Tell us about your project, goals, and how we can help..."
                          rows={6}
                          required
                          className="bg-background border-border resize-none"
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                      >
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
