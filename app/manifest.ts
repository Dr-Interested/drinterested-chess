import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: "Dr. Interested Simmon Chang Chess Club",
    short_name: "SC Chess Club",
    description:
      "CFC-rated chess tournaments that raise funds for the Pediatric Cancer Research Foundation, in honour of Simmon Chang. A Dr. Interested initiative.",
    start_url: "/",
    display: "standalone",
    background_color: "#f5f1eb",
    theme_color: "#405862",
    orientation: "portrait-primary",
    scope: "/",
    lang: "en-US",
    dir: "ltr",
    categories: ["games", "education", "nonprofit"],
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
  }
}
