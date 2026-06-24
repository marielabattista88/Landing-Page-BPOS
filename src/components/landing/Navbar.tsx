"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Terminal", href: "#hardware" },
  { label: "Portal", href: "#portal" },
  { label: "Features", href: "#features" },
  { label: "Security", href: "#security" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock background scroll while the mobile menu is open (html + body)
  useEffect(() => {
    const { documentElement: html, body } = document;
    if (mobileOpen) {
      html.style.overflow = "hidden";
      body.style.overflow = "hidden";
    } else {
      html.style.overflow = "";
      body.style.overflow = "";
    }
    return () => {
      html.style.overflow = "";
      body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#001829]/80 backdrop-blur-md py-5"
    >
      <nav className="relative z-10 max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <Image
            src="/nations-benefits-logo.svg"
            alt="NationsBenefits"
            width={146}
            height={22}
            className="h-[22px] w-auto opacity-95 group-hover:opacity-100 transition-opacity duration-200"
            priority
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-white/70 hover:text-white transition-colors duration-200 font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="text-sm text-white/70 hover:text-white transition-colors duration-200 font-medium"
          >
            Sign in
          </a>
          <a
            href="#cta"
            className="text-sm bg-[#00497A] hover:bg-[#005fa3] text-white font-semibold px-4 py-2 rounded-lg transition-all duration-200 hover:shadow-[0_0_20px_rgba(0,73,122,0.5)]"
          >
            Get Started
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className={`md:hidden p-2 rounded-lg transition-colors ${
            mobileOpen ? "bg-white/10 text-white" : "text-white/80 hover:text-white hover:bg-white/5"
          }`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>
    </motion.header>

      {/* Mobile menu — sibling of header so `fixed` maps to the viewport */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden fixed inset-0 z-[60] bg-[#002843] flex flex-col p-6 overflow-hidden"
          >
            {/* Top bar: logo + close */}
            <div className="flex items-center justify-between shrink-0">
              <Image src="/nations-benefits-logo.svg" alt="NationsBenefits" width={146} height={22} className="h-[22px] w-auto opacity-95" />
              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/15 transition-colors"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Link list */}
            <div className="flex-1 min-h-0 overflow-y-auto pt-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex items-center justify-between py-5 border-b border-dashed border-white/15 text-white text-lg font-semibold hover:text-white/70 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                  <svg className="w-4 h-4 text-[#60b8ff]" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 4l4 4-4 4" />
                  </svg>
                </a>
              ))}
              <a
                href="#contact"
                className="flex items-center py-5 border-b border-dashed border-white/15 text-white text-lg font-semibold hover:text-white/70 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Sign in
              </a>
            </div>

            {/* Bottom CTAs */}
            <div className="flex gap-3 pt-4 shrink-0">
              <a
                href="#cta"
                className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#00497A] hover:bg-[#005fa3] text-white font-semibold px-4 py-3.5 rounded-xl transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Get Started
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 4l4 4-4 4" />
                </svg>
              </a>
              <a
                href="#contact"
                className="flex-1 inline-flex items-center justify-center border border-white/20 hover:bg-white/5 text-white font-semibold px-4 py-3.5 rounded-xl transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Contact sales
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
