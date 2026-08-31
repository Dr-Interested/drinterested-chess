import type { Metadata } from "next"
import ImpactClient from "./impact-client"
import SeoSchema from "@/components/seo-schema"
import {
  generateSeoMetadata,
  generateBreadcrumbSchema,
  generateDonateActionSchema,
} from "@/lib/seo-utils"

export const metadata: Metadata = generateSeoMetadata({
  title: "Our Impact & Donate",
  description:
    "Every Dr. Interested Simmon Chang Chess Club tournament sends 100% of proceeds to the Pediatric Cancer Research Foundation. Learn what PCRF does and donate directly to support pediatric cancer research.",
  path: "/impact",
  keywords: ["donate to cancer research", "PCRF donation", "pediatric cancer research foundation", "chess fundraiser impact"],
})

export default function ImpactPage() {
  return (
    <>
      <SeoSchema
        id="impact-schema"
        schema={[
          generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Impact", url: "/impact" },
          ]),
          generateDonateActionSchema(),
        ]}
      />
      <ImpactClient />
    </>
  )
}
