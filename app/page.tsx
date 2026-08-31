import type { Metadata } from "next"
import HomeClient from "./home-client"
import SeoSchema from "@/components/seo-schema"
import {
  generateSeoMetadata,
  generateFAQSchema,
  generatePersonSchema,
} from "@/lib/seo-utils"

export const metadata: Metadata = generateSeoMetadata({
  title: "Simmon Chang Chess Club | CFC-Rated Chess Tournaments for Cancer Research",
  description:
    "The Dr. Interested Simmon Chang Chess (Against Cancer) Club runs CFC-rated chess tournaments to raise funds for the Pediatric Cancer Research Foundation. Play competitive chess in honour of Simmon Chang and support pediatric cancer research.",
  path: "/",
})

const faqs = [
  {
    question: "What is the Simmon Chang Chess Club?",
    answer:
      "The Dr. Interested Simmon Chang Chess (Against Cancer) Club is a youth-led initiative that runs CFC-rated chess tournaments to raise money for the Pediatric Cancer Research Foundation (PCRF). It is a branch of Dr. Interested, a youth-led global pre-med community. The club is named in honour of Simmon Chang, a passionate young chess player who passed away from osteosarcoma shortly after registering for our first tournament.",
  },
  {
    question: "Who was Simmon Chang?",
    answer:
      "Simmon Chang was an extraordinarily passionate chess player and a courageous fighter who passed away from osteosarcoma. His dream was to encourage children facing similar battles and to inspire people to work hard and never give up. With his family's permission, the club was renamed in his honour. His motto was: “Be your own kings and queens.”",
  },
  {
    question: "Where do the tournament proceeds go?",
    answer:
      "100% of tournament entry fees and donations are given to the Pediatric Cancer Research Foundation through the Dr. Interested fundraiser page. PCRF funds pediatric cancer research and provides scholarships and support for cancer patients and their families.",
  },
  {
    question: "Are the tournaments CFC-rated?",
    answer:
      "Yes. Our rated events are submitted to the Chess Federation of Canada for rating. You will need a CFC ID to have your games rated; players from anywhere are welcome to take part.",
  },
  {
    question: "How do I register for a tournament?",
    answer:
      "Complete the online registration form linked on our Tournaments page, then send the entry fee by Interac e-transfer including your Lichess username, name, and CFC ID. Full instructions are on the Tournaments page.",
  },
]

export default function HomePage() {
  return (
    <>
      <SeoSchema
        id="home-schema"
        schema={[generateFAQSchema(faqs), generatePersonSchema()]}
      />
      <HomeClient />
    </>
  )
}
