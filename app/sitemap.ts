import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/seo-utils"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  const ogImage = `${SITE_URL}/opengraph-image`

  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
      images: [ogImage],
    },
    {
      url: `${SITE_URL}/tournaments`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
      images: [ogImage],
    },
    {
      url: `${SITE_URL}/impact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/safeguarding-policy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${SITE_URL}/ai-policy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/media-consent`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/privacy-policy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${SITE_URL}/terms`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ]
}
