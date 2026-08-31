import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/seo-utils"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Wildcard fallback, first so it is unambiguous.
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      // Major search engines
      {
        userAgent: [
          "Googlebot",
          "Googlebot-Image",
          "Bingbot",
          "DuckDuckBot",
          "YandexBot",
          "Slurp", // Yahoo
          "Baiduspider",
          "Applebot",
        ],
        allow: "/",
      },
      // AI answer engines and assistant crawlers
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "OAI-SearchBot",
          "ClaudeBot",
          "Claude-SearchBot",
          "Claude-User",
          "PerplexityBot",
          "Perplexity-User",
          "Google-Extended",
          "Applebot-Extended",
          "meta-externalagent",
        ],
        allow: "/",
      },
      // Social + link-preview crawlers (needed for rich unfurls)
      {
        userAgent: [
          "facebookexternalhit",
          "Facebot",
          "LinkedInBot",
          "Twitterbot",
          "Discordbot",
          "Slackbot-LinkExpanding",
          "TelegramBot",
          "Pinterestbot",
          "WhatsApp",
        ],
        allow: "/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
