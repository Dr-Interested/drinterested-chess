import type { Metadata } from "next"
import MediaConsentClientPage from "@/components/media-consent/client"
import SeoSchema from "@/components/seo-schema"
import { generateSeoMetadata, generateBreadcrumbSchema } from "@/lib/seo-utils"

export const metadata: Metadata = generateSeoMetadata({
  title: "Media Consent and Release",
  description:
    "What you're agreeing to if you or your child are photographed or filmed at a Dr. Interested Simmon Chang Chess Club event.",
  path: "/media-consent",
  keywords: ["media consent", "photo release form", "youth media consent", "chess event photography"],
})

export default function MediaConsentPage() {
  return (
    <>
      <SeoSchema
        id="breadcrumb-media-consent"
        schema={generateBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Media Consent and Release", url: "/media-consent" },
        ])}
      />
      <MediaConsentClientPage />
    </>
  )
}
