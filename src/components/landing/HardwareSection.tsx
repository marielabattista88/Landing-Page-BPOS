"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const appFeatures = [
  {
    title: "Verify Member",
    desc: "Balance Inquiry & New Sale in seconds",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="1" y="5" width="15" height="10" rx="2" stroke="white" strokeWidth="1.6" fill="none" opacity="0.7"/>
        <rect x="1" y="8" width="15" height="2.5" fill="white" opacity="0.2"/>
        <circle cx="18" cy="7" r="4" fill="#00A99D"/>
        <path d="M15.8 7l1.5 1.5 2.5-2.5" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Checkout",
    desc: "Scan items and process benefits instantly",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="1" y="1" width="5" height="5" rx="0.8" stroke="white" strokeWidth="1.5" fill="none" opacity="0.7"/>
        <rect x="16" y="1" width="5" height="5" rx="0.8" stroke="white" strokeWidth="1.5" fill="none" opacity="0.7"/>
        <rect x="1" y="16" width="5" height="5" rx="0.8" stroke="white" strokeWidth="1.5" fill="none" opacity="0.7"/>
        <line x1="9" y1="2" x2="9" y2="20" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.9"/>
        <line x1="12" y1="2" x2="12" y2="20" stroke="white" strokeWidth="1.2" strokeLinecap="round" opacity="0.5"/>
      </svg>
    ),
  },
  {
    title: "Today's Activity",
    desc: "Live sales dashboard and trend tracking",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="2" y="14" width="4" height="7" rx="1" fill="white" opacity="0.5"/>
        <rect x="7" y="9" width="4" height="12" rx="1" fill="white" opacity="0.7"/>
        <rect x="12" y="5" width="4" height="16" rx="1" fill="white"/>
        <rect x="17" y="2" width="4" height="19" rx="1" fill="#00A99D"/>
      </svg>
    ),
  },
];

const bullets = [
  "No upfront hardware cost — pay per transaction",
  "Ships pre-configured and ready to use",
  "24/7 support included",
];

export default function HardwareSection() {
  return (
    <section id="hardware" className="overflow-hidden bg-[#002843]">
      <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-28 items-center">

          {/* ── Left: device image with circles ── */}
          <motion.div
            initial={{ opacity: 0, x: -48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative flex items-center justify-center">
              {/* Background circles */}
              <div className="absolute w-[500px] h-[500px] rounded-full bg-[#EEF4F6]/10" />
              <div className="absolute w-[380px] h-[380px] rounded-full bg-[#DEE8EC]/[0.08]" />

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                <Image
                  src="/device-home.png"
                  alt="Benefits POS Terminal"
                  width={290}
                  height={450}
                  className="object-contain drop-shadow-[0_32px_64px_rgba(0,0,0,0.45)] max-h-[520px] w-auto"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>

          {/* ── Right: content ── */}
          <motion.div
            initial={{ opacity: 0, x: 48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-8"
          >
            {/* Label + heading */}
            <div className="flex flex-col gap-4">
              <span className="inline-flex w-fit items-center gap-2 bg-white/10 text-[#00A99D] text-xs font-semibold px-3 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00A99D]" />
                Benefits POS Terminal
              </span>
              <h2 className="text-4xl sm:text-5xl font-black text-white leading-[1.1] tracking-tight">
                Built for the floor.<br />
                <span className="text-[#00A99D]">Not the office.</span>
              </h2>
              <p className="text-lg text-white/60 leading-relaxed max-w-md">
                A rugged Android terminal engineered for high-volume retail — fast scanning, instant approvals, built-in printer.
              </p>
            </div>

            {/* Feature rows */}
            <div className="flex flex-col gap-2">
              {appFeatures.map((feat, i) => (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center gap-4 bg-white/[0.06] hover:bg-white/[0.1] border border-white/10 rounded-2xl px-5 py-4 transition-all duration-200 cursor-default group"
                >
                  <div className="shrink-0 w-11 h-11 rounded-xl bg-[#00497A] flex items-center justify-center group-hover:bg-[#005fa3] transition-colors duration-200">
                    {feat.icon}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">{feat.title}</p>
                    <p className="text-xs text-white/50 mt-0.5">{feat.desc}</p>
                  </div>
                  <svg className="ml-auto shrink-0 w-4 h-4 text-white/20 group-hover:text-white/50 transition-colors" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 3l5 5-5 5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.div>
              ))}
            </div>

            {/* Bullets */}
            <div className="flex flex-col gap-2.5">
              {bullets.map((b) => (
                <div key={b} className="flex items-center gap-3 text-sm text-white/55">
                  <svg className="w-4 h-4 text-[#00A99D] shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 8l3 3 7-6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {b}
                </div>
              ))}
            </div>

            {/* CTA */}
            <div>
              <a
                href="#cta"
                className="inline-flex items-center justify-center gap-2 bg-[#00A99D] hover:bg-[#009488] text-white font-semibold px-6 py-3.5 rounded-xl text-sm transition-all duration-200 hover:shadow-[0_4px_20px_rgba(0,169,157,0.35)]"
              >
                Request a terminal
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 8h10M9 4l4 4-4 4"/>
                </svg>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
