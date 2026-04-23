// components/Footer.tsx
import Link from "next/link";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

type FooterLink = {
  label: string;
  href: string;
};

type FooterSection = {
  title: string;
  links: FooterLink[];
};

const footerSections: FooterSection[] = [
  {
    title: "Product",
    links: [
      { label: "Gown", href: "/gown" },
      { label: "Fabric", href: "/fabric" },
      { label: "Co-Ord Sets", href: "/cordset" },
      { label: "Sarees", href: "/saree" },
      { label: "Kurti Sets", href: "/kurti-set" },
      { label: "Skirt", href: "/skirt" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Talk to Designers", href: "/designers" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Order Tracking",
    links: [
      { label: "Order History", href: "/orders/history" },
      { label: "Track Order", href: "/orders/track" },
      { label: "Shipping Policies", href: "/policies/shipping" },
      { label: "Return Policies", href: "/policies/return" },
      { label: "Refund Policies", href: "/policies/refund" },
    ],
  },
  {
    title: "Social",
    links: [
      { label: "Twitter", href: "https://twitter.com/yourhandle" },
      { label: "Facebook", href: "https://facebook.com/yourhandle" },
      { label: "Instagram", href: "https://instagram.com/yourhandle" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms", href: "/terms" },
      { label: "Privacy", href: "/privacy" },
      { label: "Cookies", href: "/cookies" },
      { label: "Licenses", href: "/licenses" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-50">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 py-16">
        {/* Top area */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:w-64 shrink-0">
            <h2 className="font-serif text-2xl font-bold text-gray-50 mb-3">
              Chihili
            </h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              Join the Odia Fashion Heritage. Celebrating the rich tradition of Indian ethnic wear.
            </p>
          </div>

          {/* Links grid */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="text-sm font-semibold text-gray-50 mb-4 tracking-wide">
                  {section.title}
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-gray-300 hover:text-gray-50 transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700/50 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-400">
              © 2024 Chihili. All rights reserved.
            </p>

            {/* Support + Social icons */}
            <div className="flex items-center gap-4">
              <Link
                href="/support"
                className="text-xs text-gray-400 hover:text-gray-200 transition-colors"
              >
                Support
              </Link>

              <Link
                href="/contact"
                className="text-xs text-gray-400 hover:text-gray-200 transition-colors"
              >
                Contact Us
              </Link>

              {/* Social icons */}
              <div className="flex items-center gap-3 ml-4">
                <Link
                  href="https://twitter.com/yourhandle"
                  className="text-gray-400 hover:text-gray-200 transition-colors"
                  target="_blank"
                  aria-label="Twitter"
                >
                  <FaTwitter size={16} />
                </Link>
                <Link
                  href="https://facebook.com/yourhandle"
                  className="text-gray-400 hover:text-gray-200 transition-colors"
                  target="_blank"
                  aria-label="Facebook"
                >
                  <FaFacebookF size={16} />
                </Link>
                <Link
                  href="https://instagram.com/yourhandle"
                  className="text-gray-400 hover:text-gray-200 transition-colors"
                  target="_blank"
                  aria-label="Instagram"
                >
                  <FaInstagram size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
