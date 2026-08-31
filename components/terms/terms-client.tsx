"use client"

import Link from "next/link"
import { FileText } from "lucide-react"
import ScrollToTop from "@/components/scroll-to-top"

export default function TermsClient() {
  return (
    <div className="container py-16 max-w-4xl">
      <ScrollToTop />
      <div className="bg-[#405862] text-white p-6 rounded-lg mb-8 shadow-md">
        <h1 className="text-3xl font-bold mb-2 text-center">Terms and Conditions</h1>
        <p className="text-center mb-0">
          Please read these terms carefully before accessing or using any of our services.
        </p>
      </div>

      <div className="space-y-8 bg-white p-8 rounded-lg shadow-md">
        <section>
          <h2 className="text-xl font-semibold mb-3 text-[#405862]">1. Legal Status</h2>
          <p className="text-slate-600">
            The Dr. Interested Simmon Chang Chess (Against Cancer) Club is a youth-led initiative of Dr. Interested. Dr.
            Interested is not a registered business, corporation, nonprofit, charity, or other legal entity in any
            jurisdiction. It is an informal, volunteer-run initiative. All activities, content, events, and
            communications are provided on a voluntary, non-commercial basis by its organizers and volunteers.
          </p>
          <p className="text-slate-600 mt-3">
            References in these Terms to "the club," "Dr. Interested," "we," "us," or "our" mean the individual
            organizers, directors, and volunteers who run it collectively, acting in that capacity and not in their
            personal capacity.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-[#405862]">2. Acceptance of Terms</h2>
          <p className="text-slate-600">
            By accessing or using our website or services, or by registering for a tournament, you agree to be legally
            bound by these Terms and Conditions. If you do not agree with any part of these Terms, you must refrain
            from using our website or services. If you are under the age of majority in your jurisdiction, you confirm
            that a parent or legal guardian has reviewed and agreed to these Terms on your behalf.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-[#405862]">3. Tournaments, Entry Fees, and Donations</h2>
          <p className="text-slate-600">
            Tournament entry fees are treated as contributions toward our fundraiser: 100% of proceeds are donated to
            the Pediatric Cancer Research Foundation (PCRF). Entry fees are non-refundable, including where a player is
            disqualified for a fair-play or conduct violation. Where an event is described as "CFC-rated," rating is
            subject to acceptance by the Chess Federation of Canada and its rules. We may change the schedule, format,
            time control, or pairings of an event where reasonably necessary.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-[#405862]">4. Fair Play</h2>
          <p className="text-slate-600">
            All games must be played without engine assistance, outside help, or result manipulation. We may review
            games, request evidence, and remove players from an event or from future events where we reasonably believe
            a fair-play rule has been broken. Our approach to conduct is set out in our{" "}
            <Link href="/safeguarding-policy" className="text-[#405862] font-medium underline hover:text-[#4ecdc4]">
              Safeguarding Policy
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-[#405862]">5. Educational and Informational Purpose Only</h2>
          <p className="text-slate-600">
            All content published by the club — including anything produced with the assistance of AI tools (see our{" "}
            <Link href="/ai-policy" className="text-[#405862] font-medium underline hover:text-[#4ecdc4]">
              AI Policy
            </Link>
            ) — is for informational purposes only. Nothing we publish is intended as professional medical, legal,
            financial, or career advice.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-[#405862]">6. No Warranty</h2>
          <p className="text-slate-600">
            Our website, content, and services are provided "as is" and "as available," without warranties of any kind,
            whether express or implied. We do not guarantee that our website or services will be uninterrupted, timely,
            secure, or error-free.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-[#405862]">7. No Liability</h2>
          <p className="text-slate-600">
            To the fullest extent permitted by applicable law, the club and its organizers, directors, coordinators,
            volunteers, arbiters, and affiliates (each a "Representative") disclaim all liability for any damages of any
            kind — direct, indirect, incidental, consequential, or punitive — arising from or related to your use of,
            or inability to use, our website, content, or services, or your participation in any event, program, or
            activity. Because Dr. Interested is not a registered legal entity, this limitation extends individually to
            each Representative acting in that capacity.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-[#405862]">8. Assumption of Risk (Events and Activities)</h2>
          <p className="text-slate-600">
            Participation in any club event is voluntary. You acknowledge that such participation carries inherent
            risks, and you voluntarily assume all such risks. Where an event requires a separate waiver, release, or
            consent form (including a Media Consent and Release for attendees under 18), completing that form is a
            condition of participation.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-[#405862]">9. Indemnification</h2>
          <p className="text-slate-600">
            You agree to indemnify, defend, and hold harmless the club and its Representatives from and against any
            claims, liabilities, damages, losses, and expenses (including reasonable legal fees) arising out of or
            related to: (a) your use of our website, content, or services; (b) your participation in any event; (c)
            your violation of these Terms; or (d) your violation of any rights of a third party.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-[#405862]">10. User Responsibilities</h2>
          <p className="text-slate-600">When engaging with our services, you agree not to:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1 text-slate-600">
            <li>Violate any local, national, or international laws or regulations</li>
            <li>Cheat, collude, or manipulate results in any event</li>
            <li>Upload or transmit any harmful, misleading, or unlawful content</li>
            <li>Impersonate any individual or misrepresent your affiliation, rating, or identity</li>
            <li>Exploit or misuse our resources for commercial purposes</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-[#405862]">11. Minors and Parental Consent</h2>
          <p className="text-slate-600">
            Many participants in our tournaments are minors. Where we photograph, film, or record a participant under
            18 for use on our website, social media, or newsletters, we require a parent or legal guardian's signed
            consent beforehand — see our{" "}
            <Link href="/media-consent" className="text-[#405862] font-medium underline hover:text-[#4ecdc4]">
              Media Consent and Release
            </Link>{" "}
            page. Our approach to the safety and wellbeing of the youth we work with is set out in our{" "}
            <Link href="/safeguarding-policy" className="text-[#405862] font-medium underline hover:text-[#4ecdc4]">
              Safeguarding Policy
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-[#405862]">12. Privacy</h2>
          <p className="text-slate-600">
            Our{" "}
            <Link href="/privacy-policy" className="text-[#405862] font-medium underline hover:text-[#4ecdc4]">
              Privacy Policy
            </Link>{" "}
            outlines how personal data is collected, stored, and used. By using our services, you consent to the
            collection and use of information as outlined in it.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-[#405862]">13. Intellectual Property</h2>
          <p className="text-slate-600">
            All content made available through this website, including but not limited to text, graphics, and logos,
            remains the intellectual property of the creators of Dr. Interested. The name "Simmon Chang Chess Club" is
            used with the permission of Simmon Chang's family. No content may be copied, reproduced, or distributed
            without explicit written consent.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-[#405862]">14. Severability</h2>
          <p className="text-slate-600">
            If any provision of these Terms is found to be unenforceable or invalid under applicable law, that
            provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will
            remain in full force and effect.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-[#405862]">15. Modifications</h2>
          <p className="text-slate-600">
            We reserve the right to amend or modify these Terms at any time without prior notice. Continued use of the
            website or services constitutes acceptance of any changes.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-[#405862]">16. Governing Law</h2>
          <p className="text-slate-600">
            These Terms and any disputes arising under them shall be governed by and interpreted in accordance with the
            laws of the Province of Ontario, Canada, and the applicable laws of Canada, without regard to conflict of
            laws principles.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-[#405862]">17. Contact Information</h2>
          <p className="text-slate-600">
            For questions or concerns regarding these Terms and Conditions, please contact us at:{" "}
            <a
              href="mailto:admin@drinterested.org"
              className="text-[#405862] font-medium underline hover:text-[#4ecdc4]"
            >
              admin@drinterested.org
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
