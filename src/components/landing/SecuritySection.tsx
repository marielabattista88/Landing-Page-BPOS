"use client";

import { motion } from "framer-motion";
import FlowLines from "./FlowLines";

const pillars = [
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    title: "PCI-DSS Certified",
    desc: "All card and benefit transactions meet the highest payment security standards.",
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0110 0v4" />
      </svg>
    ),
    title: "AES-256 Encryption",
    desc: "Every piece of member and transaction data is encrypted end-to-end.",
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "99.9% Uptime",
    desc: "Redundant infrastructure ensures your terminal is always online.",
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "HIPAA Compliant",
    desc: "Member health benefit data handled with strict regulatory compliance.",
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" strokeLinecap="round" />
      </svg>
    ),
    title: "Same-Day Settlements",
    desc: "Your benefit payments settled the same day — no waiting, no surprises.",
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: "24/7 Support",
    desc: "Dedicated support team available around the clock for every retailer.",
  },
];

export default function SecuritySection() {
  return (
    <section id="security" className="section-py bg-[#002843] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#00497A]/15 blur-[120px] rounded-full" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <FlowLines opacity={0.45} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 text-white/60 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
            Security & Reliability
          </div>
          <h2 className="heading-xl text-4xl desk:text-5xl text-white mb-4">
            Enterprise Security. Retail Simplicity.
          </h2>
          <p className="text-lg text-white/50 leading-relaxed">
            Security, compliance, and reliability built into every transaction.
          </p>
        </motion.div>

        {/* Pillars grid */}
        <div className="grid desk:grid-cols-3 gap-5 mb-16">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card rounded-2xl p-6 hover:bg-white/[0.08] transition-colors duration-200"
            >
              <div className="w-12 h-12 rounded-xl bg-[#00497A]/30 text-[#60b8ff] flex items-center justify-center mb-4">
                {p.icon}
              </div>
              <h3 className="text-base font-bold text-white mb-2">{p.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Trust bar — inspired by deeddelivery numbers strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border border-white/10 rounded-3xl p-8 flex flex-wrap gap-8 items-center justify-around"
        >
          {[
            { value: "100%", label: "PCI Audit success rate" },
            { value: "0", label: "Data breaches to date" },
            { value: "< 1s", label: "Authorization latency" },
            { value: "SOC 2", label: "Type II certified" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div className="text-3xl font-black text-white">{item.value}</div>
              <div className="text-xs text-white/40 mt-1 font-medium">{item.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
