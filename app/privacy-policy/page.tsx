import type { Metadata } from "next"
import PrivacyPolicyClientPage from "@/components/privacy-policy/client"
import SeoSchema from "@/components/seo-schema"
import { generateSeoMetadata, generateBreadcrumbSchema } from "@/lib/seo-utils"

export const metadata: Metadata = generateSeoMetadata({
  title: "Privacy Policy",
  description:
    "How the Dr. Interested Simmon Chang Chess Club collects, uses, and protects your information when you register for tournaments or use this website.",
  path: "/privacy-policy",
  keywords: ["privacy policy", "data protection", "chess tournament registration privacy"],
})

export default function PrivacyPolicyPage() {
  return (
    <>
      <SeoSchema
        id="breadcrumb-privacy-policy"
        schema={generateBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Privacy Policy", url: "/privacy-policy" },
        ])}
      />
      <PrivacyPolicyClientPage />
    </>
  )
}
