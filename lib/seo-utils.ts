// SEO utilities: metadata + JSON-LD structured data for the
// Dr. Interested Simmon Chang Chess (Against Cancer) Club.
import type { Metadata } from "next"

export const SITE_URL = "https://chess.drinterested.org"
export const SITE_NAME = "Dr. Interested Simmon Chang Chess Club"
export const DEFAULT_OG_IMAGE = `${SITE_URL}/opengraph-image`

type SeoProps = {
  title: string
  description: string
  /** Path (e.g. "/tournaments") or absolute URL. Used for canonical + og:url. */
  path?: string
  keywords?: string[]
  ogImage?: string
  type?: "website" | "article"
  publishedTime?: string
  modifiedTime?: string
  noindex?: boolean
}

const BASE_KEYWORDS = [
  "chess club",
  "chess tournaments",
  "CFC rated tournaments",
  "chess against cancer",
  "chess fundraiser",
  "cancer research fundraiser",
  "pediatric cancer research",
  "PCRF",
  "Pediatric Cancer Research Foundation",
  "Simmon Chang",
  "Simmon Chang Chess Club",
  "Dr. Interested",
  "Dr Interested chess",
  "charity chess tournament",
  "online chess tournament",
  "youth chess",
  "Lichess tournament",
  "rapid chess",
]

export function absoluteUrl(path = "/"): string {
  if (path.startsWith("http")) return path
  return `${SITE_URL}${path.startsWith("/") ? "" : "/"}${path}`
}

export function generateSeoMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  ogImage = DEFAULT_OG_IMAGE,
  type = "website",
  publishedTime,
  modifiedTime,
  noindex = false,
}: SeoProps): Metadata {
  const url = absoluteUrl(path)

  return {
    title,
    description,
    keywords: [...BASE_KEYWORDS, ...keywords],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type,
      locale: "en_US",
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      ...(type === "article" ? { publishedTime, modifiedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
      creator: "@DrInterested",
    },
    robots: noindex
      ? { index: false, follow: false }
      : {
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
  }
}

/**
 * The club as a SportsOrganization that is a sub-organization of Dr. Interested and
 * whose fundraising benefits the Pediatric Cancer Research Foundation.
 */
export function generateChessOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["SportsOrganization", "NGO"],
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    alternateName: [
      "Simmon Chang Chess Club",
      "Simmon Chang Chess (Against Cancer) Club",
      "Dr. Interested Chess Club",
      "Chess Against Cancer",
    ],
    sport: "Chess",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    image: DEFAULT_OG_IMAGE,
    foundingDate: "2025",
    description:
      "The Dr. Interested Simmon Chang Chess (Against Cancer) Club runs CFC-rated chess tournaments to raise funds for the Pediatric Cancer Research Foundation. Named in honour of Simmon Chang, a young chess player who passed away from osteosarcoma.",
    slogan: "Be your own kings and queens.",
    parentOrganization: {
      "@type": "Organization",
      name: "Dr. Interested",
      url: "https://www.drinterested.org",
    },
    sameAs: [
      "https://www.instagram.com/dr.interested/",
      "https://www.linkedin.com/company/dr-interested",
      "https://discord.gg/pzbGRgsGXY",
      "https://www.drinterested.org",
    ],
    knowsAbout: [
      "Chess",
      "CFC-rated chess tournaments",
      "Pediatric cancer research",
      "Charity fundraising",
      "Youth chess",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "General Inquiry",
      email: "admin@drinterested.org",
    },
    funding: {
      "@type": "Grant",
      funder: { "@type": "Organization", name: SITE_NAME },
      fundedItem: {
        "@type": "Organization",
        name: "Pediatric Cancer Research Foundation",
        url: "https://pcrf-kids.org",
      },
    },
    areaServed: { "@type": "Place", name: "Worldwide" },
    audience: { "@type": "Audience", audienceType: "Chess players" },
  }
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    alternateName: "Simmon Chang Chess Club",
    url: SITE_URL,
    description:
      "CFC-rated chess tournaments raising funds for the Pediatric Cancer Research Foundation, in honour of Simmon Chang.",
    inLanguage: "en",
    publisher: { "@id": `${SITE_URL}/#organization` },
    isPartOf: {
      "@type": "WebSite",
      name: "Dr. Interested",
      url: "https://www.drinterested.org",
    },
  }
}

/** Simmon Chang — the person the club is named after. */
export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#simmon-chang`,
    name: "Simmon Chang",
    description:
      "A passionate young chess player who inspired the Dr. Interested Chess Club. Simmon passed away from osteosarcoma shortly after registering for the club's first tournament; the club was renamed in his honour with his family's permission.",
    knowsAbout: "Chess",
    subjectOf: {
      "@type": "SportsOrganization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  }
}

export function generateSportsEventSchema(event: {
  name: string
  description: string
  startDate: string
  endDate?: string
  /** Physical venue name, or omit for an online event. */
  location?: string
  /** Online play URL (e.g. Lichess). */
  onlineUrl?: string
  url: string
  image?: string
  registrationUrl?: string
  price?: string
  priceCurrency?: string
  status?: "scheduled" | "cancelled" | "postponed"
}) {
  const isOnline = !event.location
  return {
    "@context": "https://schema.org",
    "@type": "SportsEvent",
    name: event.name,
    description: event.description,
    sport: "Chess",
    startDate: event.startDate,
    ...(event.endDate && { endDate: event.endDate }),
    eventAttendanceMode: isOnline
      ? "https://schema.org/OnlineEventAttendanceMode"
      : "https://schema.org/OfflineEventAttendanceMode",
    eventStatus:
      event.status === "cancelled"
        ? "https://schema.org/EventCancelled"
        : event.status === "postponed"
          ? "https://schema.org/EventPostponed"
          : "https://schema.org/EventScheduled",
    location: isOnline
      ? {
          "@type": "VirtualLocation",
          url: event.onlineUrl || event.url,
        }
      : {
          "@type": "Place",
          name: event.location,
        },
    image: event.image || DEFAULT_OG_IMAGE,
    url: event.url,
    organizer: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    ...(event.registrationUrl && {
      offers: {
        "@type": "Offer",
        name: "Tournament entry",
        price: event.price ?? "0",
        priceCurrency: event.priceCurrency ?? "CAD",
        url: event.registrationUrl,
        availability: "https://schema.org/InStock",
        category: "Charitable donation",
      },
    }),
  }
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.url),
    })),
  }
}

export function generateFAQSchema(questions: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  }
}

/** Donation call-to-action as a schema.org DonateAction, for the Impact page. */
export function generateDonateActionSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "DonateAction",
    name: "Donate to the Pediatric Cancer Research Foundation",
    recipient: {
      "@type": "Organization",
      name: "Pediatric Cancer Research Foundation",
      url: "https://pcrf-kids.org",
    },
    agent: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://cure.pcrf-kids.org/DrInterested",
    },
  }
}
