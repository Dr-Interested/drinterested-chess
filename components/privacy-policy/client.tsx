"use client"

import Link from "next/link"
import { FileText } from "lucide-react"
import ScrollToTop from "@/components/scroll-to-top"

export default function PrivacyPolicyClientPage() {
  return (
    <div className="container py-16 max-w-4xl">
      <ScrollToTop />
      <div className="bg-[#405862] text-white p-6 rounded-lg mb-8 shadow-md">
        <h1 className="text-3xl font-bold mb-2 text-center">Privacy Policy</h1>
        <p className="text-center mb-0">Last updated: August 30, 2026</p>
      </div>

      <div className="space-y-8 bg-white p-8 rounded-lg shadow-md">
        <section>
          <h2 className="text-xl font-semibold mb-3 text-[#405862]">1. Introduction</h2>
          <p className="text-slate-600">
            The Dr. Interested Simmon Chang Chess (Against Cancer) Club ("we," "our," or "us") is an initiative of Dr.
            Interested and is committed to protecting your privacy. This Privacy Policy explains how we collect, use,
            disclose, and safeguard your information when you visit this website or take part in our chess events. If
            you do not agree with the terms of this Privacy Policy, please do not access the site.
          </p>
          <p className="text-slate-600 mt-3">
            Dr. Interested is not a registered business, corporation, nonprofit, charity, or other legal entity — see
            our{" "}
            <Link href="/terms" className="text-[#405862] font-medium underline hover:text-[#4ecdc4]">
              Terms and Conditions
            </Link>{" "}
            for details. It is run by its volunteer organizers, who are collectively responsible for the information
            described in this Privacy Policy. The wider{" "}
            <a
              href="https://www.drinterested.org/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#405862] font-medium underline hover:text-[#4ecdc4]"
            >
              Dr. Interested Privacy Policy
            </a>{" "}
            also applies.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-[#405862]">2. Information We Collect</h2>
          <p className="text-slate-600">
            We may collect personal information that you voluntarily provide to us when you:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1 text-slate-600">
            <li>Register for a tournament or chess event</li>
            <li>Send an entry-fee payment (e.g. by Interac e-transfer)</li>
            <li>Contact us with inquiries</li>
            <li>Join our Discord community</li>
          </ul>
          <p className="text-slate-600 mt-4">
            The personal information we may collect includes names, email addresses, Lichess or Chess.com usernames,
            Chess Federation of Canada (CFC) IDs and ratings, and any details you include with a payment. Where you or
            your parent or guardian sign a Media Consent and Release for an in-person event, we also collect and use
            the photos, video, and identifying details described in that form, in accordance with it.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-[#405862]">3. How We Use Your Information</h2>
          <p className="text-slate-600">We may use the information we collect for various purposes, including:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1 text-slate-600">
            <li>Running tournaments — pairings, standings, and CFC rating submissions</li>
            <li>Confirming entry-fee payments and issuing donation records</li>
            <li>Responding to your comments, questions, and requests</li>
            <li>Sharing event recaps and results</li>
            <li>Protecting against unauthorized access, cheating, and legal liability</li>
            <li>Reporting fundraising impact through aggregate figures</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-[#405862]">4. AI Tools and Your Information</h2>
          <p className="text-slate-600">
            We do not use the personal information you provide us to train third-party AI models. Where an AI tool is
            used as part of how our website or internal systems function, that use is limited and described in our{" "}
            <Link href="/ai-policy" className="text-[#405862] font-medium underline hover:text-[#4ecdc4]">
              AI Policy
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-[#405862]">5. CFC Rating Submissions</h2>
          <p className="text-slate-600">
            For CFC-rated events, we submit players' names, CFC IDs, and game results to the Chess Federation of Canada
            so the event can be rated. That submission is governed by the CFC's own policies.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-[#405862]">6. Third-Party Service Providers</h2>
          <p className="text-slate-600">
            We may share your information with third-party service providers who perform services on our behalf, such
            as hosting, form collection, email delivery, and the platforms used to play and rate games (for example
            Lichess and the Chess Federation of Canada). These providers have access to your information only to
            perform tasks on our behalf.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-[#405862]">7. Donations</h2>
          <p className="text-slate-600">
            Tournament proceeds and direct donations are made to the Pediatric Cancer Research Foundation (PCRF)
            through the Dr. Interested fundraiser page. Payment and donation details you enter on PCRF's platform are
            handled under PCRF's own privacy policy.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-[#405862]">8. Cookies and Tracking Technologies</h2>
          <p className="text-slate-600">
            We may use cookies and similar technologies to understand how this website is used. You can instruct your
            browser to refuse all cookies or to indicate when a cookie is being sent.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-[#405862]">9. Data Retention</h2>
          <p className="text-slate-600">
            We retain personal information for as long as reasonably necessary for the purposes described in this
            Privacy Policy, or as needed to comply with our legal obligations, resolve disputes, and enforce our
            agreements. You may request that we delete your information at any time.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-[#405862]">10. Data Security</h2>
          <p className="text-slate-600">
            We have implemented appropriate technical and organizational measures designed to protect the information
            we process. However, no method of transmission over the internet is 100% secure.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-[#405862]">11. Children's Privacy</h2>
          <p className="text-slate-600">
            Many participants in our tournaments are minors. Where we photograph, film, or record a participant under
            18 for public use, we require signed parental or guardian consent beforehand — see our{" "}
            <Link href="/media-consent" className="text-[#405862] font-medium underline hover:text-[#4ecdc4]">
              Media Consent and Release
            </Link>{" "}
            page, and our{" "}
            <Link href="/safeguarding-policy" className="text-[#405862] font-medium underline hover:text-[#4ecdc4]">
              Safeguarding Policy
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-[#405862]">12. International Data Transfers</h2>
          <p className="text-slate-600">
            Our volunteers and players are located worldwide. Your information may be stored or processed in a country
            other than your own, including Canada, where our service providers' infrastructure is located. By using
            our services, you consent to this transfer.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-[#405862]">13. Your Rights</h2>
          <p className="text-slate-600">
            Depending on your location, you may have certain rights regarding your personal information, such as the
            right to access, correct, or delete it. To exercise these rights, please contact us using the information
            below.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-[#405862]">14. Changes to This Privacy Policy</h2>
          <p className="text-slate-600">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new
            Privacy Policy on this page and updating the "Last updated" date.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-[#405862]">15. Contact Us</h2>
          <p className="text-slate-600">
            If you have any questions about this Privacy Policy, please contact us at{" "}
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
