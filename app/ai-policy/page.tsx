import type { Metadata } from "next"
import AiPolicyClientPage from "@/components/ai-policy/client"
import SeoSchema from "@/components/seo-schema"
import { generateSeoMetadata, generateBreadcrumbSchema } from "@/lib/seo-utils"

export const metadata: Metadata = generateSeoMetadata({
  title: "AI Policy",
  description:
    "How the Dr. Interested Simmon Chang Chess Club uses artificial intelligence tools in producing content and running our operations, and the limits we place on that use.",
  path: "/ai-policy",
  keywords: ["AI policy", "artificial intelligence disclosure", "AI-assisted content"],
})

export default function AiPolicyPage() {
  return (
    <>
      <SeoSchema
        id="breadcrumb-ai-policy"
        schema={generateBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "AI Policy", url: "/ai-policy" },
        ])}
      />
      <AiPolicyClientPage />
    </>
  )
}
