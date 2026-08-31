import type { Metadata } from "next"
import TournamentsClient from "./tournaments-client"
import SeoSchema from "@/components/seo-schema"
import {
  SITE_URL,
  generateSeoMetadata,
  generateBreadcrumbSchema,
  generateSportsEventSchema,
} from "@/lib/seo-utils"

export const metadata: Metadata = generateSeoMetadata({
  title: "Chess Tournaments",
  description:
    "Join the Dr. Interested Simmon Chang Chess Club's CFC-rated chess tournaments. Play competitive rapid chess online while 100% of your entry fee supports the Pediatric Cancer Research Foundation.",
  path: "/tournaments",
  keywords: ["CFC rated tournament", "online chess tournament", "rapid chess tournament", "charity chess event", "Weiss Open"],
})

export default function TournamentsPage() {
  return (
    <>
      <SeoSchema
        id="tournaments-schema"
        schema={[
          generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Tournaments", url: "/tournaments" },
          ]),
          generateSportsEventSchema({
            name: "Weiss Open (CFC Rated)",
            description:
              "A CFC-rated rapid (10+5) Swiss chess tournament over 5 rounds. $15 entry fee, with 100% of proceeds donated to the Pediatric Cancer Research Foundation.",
            startDate: "2025-12-28",
            onlineUrl: `${SITE_URL}/tournaments`,
            url: `${SITE_URL}/tournaments`,
            registrationUrl:
              "https://docs.google.com/forms/d/e/1FAIpQLSfav0IgNIVgBY1IGU4VhrQEsC0-UkRDA_GXYgdsmqJw93ku4Q/viewform",
            price: "15",
            priceCurrency: "CAD",
          }),
        ]}
      />
      <TournamentsClient />
    </>
  )
}
