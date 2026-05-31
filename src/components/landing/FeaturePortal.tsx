"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const portalFeatures = [
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M3 10l7-7 7 7M5 8v7h4v-4h2v4h4V8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Revenue & Settlements",
    desc: "Real-time revenue tracking with automatic settlement reports.",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="2" y="4" width="16" height="12" rx="2" />
        <path d="M7 8h6M7 12h4" strokeLinecap="round" />
      </svg>
    ),
    title: "Transaction History",
    desc: "Full audit trail of every transaction, filtered by cashier or store.",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M2 14l5-5 3 3 4-6 4 2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Sales Analytics",
    desc: "Identify trends, peak hours, and top-selling benefit items.",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="10" cy="7" r="3" />
        <path d="M4 17c0-3.314 2.686-6 6-6s6 2.686 6 6" strokeLinecap="round" />
      </svg>
    ),
    title: "Cashier Management",
    desc: "Add, remove, and monitor cashiers across multiple locations.",
  },
];

export default function FeaturePortal() {
  return (
    <section id="portal" className="section-py bg-[#002843] overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#00497A]/10 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#00A99D]/5 blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative order-2 lg:order-1"
          >
            {/* Glow */}
            <div className="absolute -inset-4 bg-[#00497A]/20 blur-3xl rounded-3xl" />

            <div className="relative rounded-2xl overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.5)] border border-white/10">
              <Image
                src="/dashboard.png"
                alt="BPOS Retailer Portal Dashboard"
                width={640}
                height={420}
                className="w-full object-cover"
              />
              {/* Overlay shimmer */}
              <div className="absolute inset-0 shimmer-bg" />
            </div>

            {/* Floating metric card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -bottom-6 -right-4 glass-card rounded-2xl p-4 shadow-2xl border border-white/10 animate-float"
              style={{ animationDelay: "2s" }}
            >
              <div className="text-xs text-white/50 font-medium mb-1">Monthly Revenue</div>
              <div className="text-2xl font-black text-white">$24,381</div>
              <div className="flex items-center gap-1 mt-1">
                <svg className="w-3 h-3 text-emerald-400" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M2 9l3-3 2 2 3-4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-xs text-emerald-400 font-medium">+18.4% vs last month</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-8 order-1 lg:order-2"
          >
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 text-white/70 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
                <div className="w-1.5 h-1.5 rounded-full bg-[#60b8ff]" />
                Retailer Portal
              </div>
              <h2 className="heading-xl text-4xl sm:text-5xl text-white mb-4">
                A portal built
                <br />
                <span className="gradient-text">for growth.</span>
              </h2>
              <p className="text-lg text-white/60 leading-relaxed max-w-md">
                Manage your store's performance from anywhere. See revenue, settlements, and trends in one clean dashboard.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              {portalFeatures.map((feat, i) => (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                  className="glass-card rounded-2xl p-4 hover:bg-white/[0.08] transition-colors duration-200"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#00497A]/30 text-[#60b8ff] flex items-center justify-center mb-3">
                    {feat.icon}
                  </div>
                  <div className="text-sm font-semibold text-white mb-1">{feat.title}</div>
                  <div className="text-xs text-white/50 leading-relaxed">{feat.desc}</div>
                </motion.div>
              ))}
            </div>

            <a
              href="#cta"
              className="inline-flex items-center gap-2 text-[#60b8ff] font-semibold text-sm hover:gap-3 transition-all duration-200"
            >
              Explore the portal
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
