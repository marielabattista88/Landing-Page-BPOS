"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "2,000+", label: "RETAILERS" },
  { value: "$50M+", label: "BENEFITS PROCESSED" },
  { value: "< 3s", label: "AVG CHECKOUT" },
  { value: "+18%", label: "REVENUE INCREASE" },
  { value: "99.9%", label: "UPTIME" },
  { value: "0", label: "DATA BREACHES" },
  { value: "2K+", label: "RETAILERS" },
  { value: "$50M+", label: "BENEFITS PROCESSED" },
  { value: "< 3s", label: "AVG CHECKOUT" },
  { value: "+18%", label: "REVENUE INCREASE" },
  { value: "99.9%", label: "UPTIME" },
  { value: "0", label: "DATA BREACHES" },
];

export default function StatsMarquee() {
  return (
    <section className="bg-[#002843] border-y border-white/10 py-5 overflow-hidden">
      <div className="relative">
        {/* Edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#002843] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#002843] to-transparent z-10 pointer-events-none" />

        <div className="flex animate-scroll-x" style={{ width: "max-content" }}>
          {stats.map((stat, i) => (
            <div
              key={`${stat.label}-${i}`}
              className="flex items-center gap-8 px-8 shrink-0"
            >
              <div className="flex items-baseline gap-3">
                <span className="text-2xl font-black text-white tracking-tight">
                  {stat.value}
                </span>
                <span className="text-xs font-bold text-white/30 tracking-[0.2em]">
                  {stat.label}
                </span>
              </div>
              <div className="w-1 h-1 rounded-full bg-[#00497A]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
