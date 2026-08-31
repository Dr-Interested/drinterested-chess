import type { Metadata } from "next"
import TermsClient from "@/components/terms/terms-client"
import SeoSchema from "@/components/seo-schema"
import { generateSeoMetadata, generateBreadcrumbSchema } from "@/lib/seo-utils"

export const metadata: Metadata = generateSeoMetadata({
  title: "Terms and Conditions",
  description:
    "The terms governing your use of the Dr. Interested Simmon Chang Chess Club website, tournament registration, entry fees, fair play, and donations.",
  path: "/terms",
  keywords: ["terms and conditions", "terms of service", "tournament rules", "chess fair play", "entry fee policy"],
})

export default function TermsPage() {
  return (
    <>
      <SeoSchema
        id="breadcrumb-terms"
        schema={generateBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Terms and Conditions", url: "/terms" },
        ])}
      />
      <TermsClient />
    </>
  )
}
