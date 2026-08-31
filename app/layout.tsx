import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import SeoSchema from "@/components/seo-schema"
import DonationPopup from "@/components/donation-popup"
import {
  SITE_URL,
  DEFAULT_OG_IMAGE,
  generateChessOrganizationSchema,
  generateWebSiteSchema,
} from "@/lib/seo-utils"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Simmon Chang Chess Club | CFC-Rated Chess Tournaments for Cancer Research",
    template: "%s | Simmon Chang Chess Club",
  },
  description:
    "The Dr. Interested Simmon Chang Chess (Against Cancer) Club runs CFC-rated chess tournaments that raise funds for the Pediatric Cancer Research Foundation. Named after Simmon Chang, a young chess player who passed away from osteosarcoma. Play competitive chess and support pediatric cancer research.",
  applicationName: "Simmon Chang Chess Club",
  keywords: [
    "chess club",
    "CFC rated tournaments",
    "chess tournaments",
    "chess against cancer",
    "cancer research fundraiser",
    "pediatric cancer research",
    "PCRF",
    "Pediatric Cancer Research Foundation",
    "Simmon Chang",
    "Simmon Chang Chess Club",
    "chess community",
    "Dr. Interested",
    "charity chess tournament",
    "youth chess",
    "Lichess tournament",
  ],
  authors: [{ name: "Dr. Interested", url: "https://www.drinterested.org" }],
  creator: "Dr. Interested Simmon Chang Chess Club",
  publisher: "Dr. Interested",
  category: "Games & Recreation",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title: "Simmon Chang Chess Club — CFC-Rated Chess Tournaments for Cancer Research",
    description:
      "Play CFC-rated chess tournaments and support the Pediatric Cancer Research Foundation. A Dr. Interested initiative in honour of Simmon Chang.",
    siteName: "Dr. Interested Simmon Chang Chess Club",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Dr. Interested Simmon Chang Chess Club",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Simmon Chang Chess Club — Chess Tournaments for Cancer Research",
    description: "Play CFC-rated chess, support pediatric cancer research. A Dr. Interested initiative.",
    images: [DEFAULT_OG_IMAGE],
    creator: "@DrInterested",
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: [
    { rel: "icon", url: "/favicon.ico" },
    { rel: "icon", type: "image/png", sizes: "16x16", url: "/favicon-16x16.png" },
    { rel: "icon", type: "image/png", sizes: "32x32", url: "/favicon-32x32.png" },
    { rel: "apple-touch-icon", sizes: "180x180", url: "/apple-touch-icon.png" },
  ],
  // Add the Google Search Console token here once the chess.drinterested.org property is
  // verified, e.g. verification: { google: "<token>" }.
  generator: "Next.js",
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#405862" },
    { media: "(prefers-color-scheme: dark)", color: "#4ecdc4" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <SeoSchema
            id="site-schema"
            schema={[generateChessOrganizationSchema(), generateWebSiteSchema()]}
          />
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1" role="main">
              {children}
            </main>
            <Footer />
            <DonationPopup />
            <Toaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
