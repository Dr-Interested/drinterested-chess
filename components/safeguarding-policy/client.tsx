"use client"

import Link from "next/link"
import { FileText } from "lucide-react"
import ScrollToTop from "@/components/scroll-to-top"

export default function SafeguardingPolicyClientPage() {
  return (
    <div className="container py-16 max-w-4xl">
      <ScrollToTop />
      <div className="bg-[#405862] text-white p-6 rounded-lg mb-8 shadow-md">
        <h1 className="text-3xl font-bold mb-2 text-center">Safeguarding Policy</h1>
        <p className="text-center mb-0">
          Our commitment to the safety and wellbeing of the young people in our chess community.
        </p>
      </div>

      <div className="space-y-8 bg-white p-8 rounded-lg shadow-md">
        <section>
          <h2 className="text-xl font-semibold mb-3 text-[#405862]">1. Our Commitment</h2>
          <p className="text-slate-600">
            The Dr. Interested Simmon Chang Chess (Against Cancer) Club is a youth-led initiative, and many of the
            players who take part in our tournaments, events, and community are minors. We are committed to creating a
            safe, respectful environment for every young person we work with, and to responding seriously and promptly
            to any concern raised about their wellbeing. This policy sits alongside the wider{" "}
            <a
              href="https://www.drinterested.org/safeguarding-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#405862] font-medium underline hover:text-[#4ecdc4]"
            >
              Dr. Interested Safeguarding Policy
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-[#405862]">2. Who This Applies To</h2>
          <p className="text-slate-600">
            This policy applies to everyone who represents the club in any capacity — organizers, tournament
            directors, arbiters, coordinators, volunteers, and coaches — in all interactions with players, whether at
            in-person events, online (Lichess, Discord, social media), or over email.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-[#405862]">3. Code of Conduct</h2>
          <p className="text-slate-600">Everyone representing the club is expected to:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1 text-slate-600">
            <li>Treat every player with respect, patience, and professionalism</li>
            <li>
              Keep communication with players on official, monitorable channels (our Discord, official email) rather
              than personal accounts, where practical
            </li>
            <li>Avoid one-on-one, unsupervised, private contact with a minor outside a tournament's normal structure</li>
            <li>Never request or share inappropriate images, messages, or personal information with a minor</li>
            <li>Never provide alcohol, drugs, or other age-restricted substances to a minor</li>
            <li>
              Follow our{" "}
              <Link href="/ai-policy" className="text-[#405862] font-medium underline hover:text-[#4ecdc4]">
                AI Policy
              </Link>
              , our{" "}
              <Link href="/privacy-policy" className="text-[#405862] font-medium underline hover:text-[#4ecdc4]">
                Privacy Policy
              </Link>
              , and any media consent requirements when photographing or filming players
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-[#405862]">4. Fair Play</h2>
          <p className="text-slate-600">
            All tournaments are played under standard fair-play rules. Engine assistance, outside help, and result
            manipulation are prohibited. Where an event is CFC-rated, Chess Federation of Canada rules and its fair-play
            procedures also apply. Suspected violations are reviewed by the tournament director and may result in
            removal from the event and forfeiture of the entry fee (which is still donated to the Pediatric Cancer
            Research Foundation).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-[#405862]">5. Media, Consent, and Minors</h2>
          <p className="text-slate-600">
            Where we photograph, film, or record players at our events, we seek consent in advance — for minors, from a
            parent or legal guardian — before using that media publicly. See our{" "}
            <Link href="/media-consent" className="text-[#405862] font-medium underline hover:text-[#4ecdc4]">
              Media Consent and Release
            </Link>{" "}
            page for details on how that consent works.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-[#405862]">6. Reporting a Concern</h2>
          <p className="text-slate-600">
            If you have a concern about the safety or wellbeing of a young person involved with the club — or about the
            conduct of anyone representing us — please report it as soon as possible to{" "}
            <a href="mailto:hr@drinterested.org" className="text-[#405862] font-medium underline hover:text-[#4ecdc4]">
              hr@drinterested.org
            </a>
            . Reports are taken seriously and handled as confidentially as circumstances allow. If a young person is in
            immediate danger, please contact local emergency services first.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-[#405862]">7. Response to Concerns</h2>
          <p className="text-slate-600">
            Where a concern is raised about someone representing the club, we will review the situation and may suspend
            or remove that person's access, role, or involvement while the matter is looked into, consistent with our{" "}
            <Link href="/terms" className="text-[#405862] font-medium underline hover:text-[#4ecdc4]">
              Terms and Conditions
            </Link>
            . Where a concern involves suspected abuse, harm, or illegal conduct, we will refer the matter to the
            appropriate authorities.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-[#405862]">8. Ongoing Review</h2>
          <p className="text-slate-600">
            This policy is reviewed periodically as the club and its programs grow, and updated as needed to reflect
            current practice.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-[#405862]">9. Contact Us</h2>
          <p className="text-slate-600">
            Questions about this Safeguarding Policy can be directed to{" "}
            <a href="mailto:hr@drinterested.org" className="text-[#405862] font-medium underline hover:text-[#4ecdc4]">
              hr@drinterested.org
            </a>
            .
          </p>
        </section>
      </div>

      <div className="mt-8 text-center">
        <Link href="/" className="inline-flex items-center text-[#405862] hover:text-[#4ecdc4] transition-colors">
          <FileText className="h-4 w-4 mr-2" />
          Return Home
        </Link>
      </div>
    </div>
  )
}
