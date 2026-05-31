"use client";

import { motion } from "framer-motion";

const logos = [
  { name: "CVS Pharmacy", abbr: "CVS" },
  { name: "Walgreens", abbr: "WGS" },
  { name: "Rite Aid", abbr: "RAD" },
  { name: "Key Food", abbr: "KF" },
  { name: "Compare Foods", abbr: "CF" },
  { name: "C-Town Supermarkets", abbr: "CTN" },
  { name: "Western Beef", abbr: "WB" },
  { name: "Associated Supermarkets", abbr: "ASC" },
  { name: "Met Fresh", abbr: "MF" },
  { name: "Bravo Supermarkets", abbr: "BRV" },
  { name: "Western Union", abbr: "WU" },
  { name: "Family Dollar", abbr: "FD" },
];

// Duplicate for seamless loop
const allLogos = [...logos, ...logos];

function LogoItem({ name, abbr }: { name: string; abbr: string }) {
  return (
    <div className="flex items-center gap-2.5 px-8 shrink-0 opacity-50 hover:opacity-80 transition-opacity duration-300 cursor-default">
      <div className="w-9 h-9 rounded-lg bg-[#00497A]/20 border border-[#DEE8EC]/30 flex items-center justify-center">
        <span className="text-[9px] font-bold text-[#00497A] tracking-wider">{abbr}</span>
      </div>
      <span className="text-sm font-semibold text-[#222B2F] whitespace-nowrap">{name}</span>
    </div>
  );
}

export default function TrustedBy() {
  return (
    <section className="bg-white border-y border-[#DEE8EC] py-14 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-semibold text-[#646F7D] uppercase tracking-[0.2em]"
        >
          Trusted by leading retailers across the country
        </motion.p>
      </div>

      {/* Scroll strip */}
      <div className="relative">
        {/* Edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex animate-scroll-x" style={{ width: "max-content" }}>
          {allLogos.map((logo, i) => (
            <LogoItem key={`${logo.name}-${i}`} {...logo} />
          ))}
        </div>
      </div>
    </section>
  );
}
