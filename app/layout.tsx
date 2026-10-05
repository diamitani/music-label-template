import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "We Up Music Group | Music Video Promotion & Artist Development",
  description:
    "Professional music video placement services, editorial playlisting, radio promotion, and artist management. Over 15 years of global entertainment industry experience.",
  keywords: [
    "music video promotion",
    "artist management",
    "editorial playlisting",
    "radio promotion",
    "music placement",
    "entertainment consulting",
  ],
  openGraph: {
    title: "We Up Music Group",
    description: "Music Video Promotion, Media Placement & Artist Development",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
