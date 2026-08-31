import Script from "next/script"

interface SeoSchemaProps {
  schema?: object | object[]
  /**
   * Required and must be unique per page: next/script dedupes inline scripts by `id`, so any
   * two <SeoSchema> instances that share an id on the same page silently drop one of them.
   */
  id: string
}

export default function SeoSchema({ schema, id }: SeoSchemaProps) {
  if (!schema) return null

  return (
    <Script
      id={id}
      type="application/ld+json"
      // Safe injection for a JSON-LD payload: the content is `JSON.stringify` output
      // (never user HTML), and unicode-escaping the "<" character prevents a script-tag
      // breakout. This is the pattern Next.js documents for structured data; an HTML
      // sanitiser such as DOMPurify would corrupt the JSON and needs a DOM at runtime.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  )
}
