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

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-card border-b border-white/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <div className="bg-white/95 backdrop-blur-sm rounded-lg px-3 py-1.5 shadow-sm group-hover:bg-white transition-colors duration-200">
            <Image
              src="/nb-logo.svg"
              alt="NationsBenefits"
              width={148}
              height={22}
              className="h-[22px] w-auto"
              priority
            />
          </div>
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
          className="md:hidden text-white/80 hover:text-white transition-colors"
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

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/10 bg-[#002843]/95 backdrop-blur-xl"
          >
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-white/80 hover:text-white font-medium py-2 border-b border-white/10 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#cta"
                className="mt-2 text-center bg-[#00497A] text-white font-semibold px-4 py-3 rounded-lg"
                onClick={() => setMobileOpen(false)}
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
