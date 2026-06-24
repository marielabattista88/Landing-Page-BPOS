"use client";

import Link from "next/link";

const footerLinks = {
  Product: [
    { label: "Benefits POS Terminal", href: "#hardware" },
    { label: "Retailer Portal", href: "#portal" },
    { label: "Basket Analysis", href: "#features" },
    { label: "Fast Checkout", href: "#checkout" },
    { label: "Security", href: "#security" },
  ],
  Company: [
    { label: "About NationsBenefits", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
    { label: "Contact", href: "#contact" },
  ],
  Support: [
    { label: "Help Center", href: "#" },
    { label: "Status", href: "#" },
    { label: "Documentation", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#002843] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/bpos-icon.svg"
                  alt="Benefits POS"
                  className="block w-full h-full object-cover"
                />
              </div>
              <span className="text-white font-semibold text-base">
                Benefits<span className="text-[#60b8ff]">POS</span>
              </span>
            </div>
            <p className="text-sm text-white/40 leading-relaxed max-w-xs mb-6">
              The smart POS platform built for independent retailers, pharmacies, and bodegas accepting benefit payments.
            </p>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-white/40">All systems operational</span>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs font-bold text-white/30 uppercase tracking-[0.15em] mb-4">
                {title}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col lg:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © 2026 NationsBenefits. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-white/20">PCI-DSS · HIPAA · SOC 2</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
