import Link from "next/link"
import Image from "next/image"
import { Instagram, Linkedin, Mail, ExternalLink } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#405862] text-white" role="contentinfo">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <div className="relative w-12 h-12 overflow-hidden rounded-full transition-transform duration-300 group-hover:scale-110">
                <Image
                  src="/logo.png"
                  alt="Dr. Interested Simmon Chang Chess Club logo"
                  fill
                  className="rounded-full object-cover"
                  sizes="48px"
                />
              </div>
              <div className="font-bold text-xl">
                <span className="text-white">The Dr.</span> <span className="text-[#4ecdc4]">Interested</span>
                <div className="text-xs font-semibold text-[#4ecdc4] leading-tight">Simmon Chang Chess Club</div>
              </div>
            </Link>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              The Dr. Interested Simmon Chang Chess (Against Cancer) Club conducts CFC-rated chess tournaments to raise
              funds for the Pediatric Cancer Research Foundation. Named in honour of Simmon Chang, whose legacy inspires
              us to fight childhood cancer through chess.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="https://discord.gg/pzbGRgsGXY"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#4ecdc4] transition-colors hover:scale-110 duration-200"
                aria-label="Join the Dr. Interested Discord community"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="9" cy="12" r="1" />
                  <circle cx="15" cy="12" r="1" />
                  <path d="M7.5 7.2c.3-.1.6-.2.8-.2h7.4c.2 0 .5.1.8.2M7.5 16.8c.3.1.6.2.8.2h7.4c.2 0 .5-.1.8-.2" />
                  <path d="M16 3h-2a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2H4a2 2 0 0 0-2 2v3a8 8 0 0 0 4 7v3a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3a8 8 0 0 0 4-7V5a2 2 0 0 0-2-2z" />
                </svg>
              </Link>
              <Link
                href="https://www.instagram.com/dr.interested/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#4ecdc4] transition-colors hover:scale-110 duration-200"
                aria-label="Follow Dr. Interested on Instagram"
              >
                <Instagram className="h-6 w-6" aria-hidden="true" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/dr-interested"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#4ecdc4] transition-colors hover:scale-110 duration-200"
                aria-label="Connect with Dr. Interested on LinkedIn"
              >
                <Linkedin className="h-6 w-6" aria-hidden="true" />
              </Link>
              <Link
                href="mailto:admin@drinterested.org"
                className="text-gray-300 hover:text-[#4ecdc4] transition-colors hover:scale-110 duration-200"
                aria-label="Email Dr. Interested"
              >
                <Mail className="h-6 w-6" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Chess Club Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-[#4ecdc4]">Chess Club</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/tournaments" className="text-gray-300 hover:text-white transition-colors">
                  Tournaments
                </Link>
              </li>
              <li>
                <Link href="/impact" className="text-gray-300 hover:text-white transition-colors">
                  Impact &amp; Donate
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.drinterested.org"
                  className="text-gray-300 hover:text-white transition-colors inline-flex items-center gap-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Dr. Interested <ExternalLink className="h-3 w-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-[#4ecdc4]">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-white transition-colors">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link href="/ai-policy" className="text-gray-300 hover:text-white transition-colors">
                  AI Policy
                </Link>
              </li>
              <li>
                <Link href="/safeguarding-policy" className="text-gray-300 hover:text-white transition-colors">
                  Safeguarding Policy
                </Link>
              </li>
              <li>
                <Link href="/media-consent" className="text-gray-300 hover:text-white transition-colors">
                  Media Consent
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-600 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-300 text-sm">
              <p>© {currentYear} The Dr. Interested Simmon Chang Chess Club. All rights reserved.</p>
              <p className="mt-1">CFC-rated chess tournaments supporting the Pediatric Cancer Research Foundation.</p>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-300 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
