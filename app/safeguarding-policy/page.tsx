import type { Metadata } from "next"
import SafeguardingPolicyClientPage from "@/components/safeguarding-policy/client"
import SeoSchema from "@/components/seo-schema"
import { generateSeoMetadata, generateBreadcrumbSchema } from "@/lib/seo-utils"

export const metadata: Metadata = generateSeoMetadata({
  title: "Safeguarding Policy",
  description:
    "The Dr. Interested Simmon Chang Chess Club's commitment to the safety and wellbeing of the young players in our community, our fair-play rules, and how to report a concern.",
  path: "/safeguarding-policy",
  keywords: ["chess safeguarding policy", "youth chess protection", "chess fair play", "tournament conduct"],
})

export default function SafeguardingPolicyPage() {
  return (
    <>
      <SeoSchema
        id="breadcrumb-safeguarding"
        schema={generateBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Safeguarding Policy", url: "/safeguarding-policy" },
        ])}
      />
      <SafeguardingPolicyClientPage />
    </>
  )
}
