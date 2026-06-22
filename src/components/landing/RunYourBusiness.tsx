"use client";

import { motion } from "framer-motion";

const capabilities = [
  {
    title: "Revenue",
    desc: "See total sales across every location in real time.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M2 14l5-5 3 3 4-6 4 2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Settlements",
    desc: "Track same-day payouts and automatic reconciliation.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="10" cy="10" r="8" />
        <path d="M10 5v10M7.5 7.5h3a1.5 1.5 0 010 3h-1a1.5 1.5 0 000 3h3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Transactions",
    desc: "Full, searchable history by store or cashier.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="2" y="4" width="16" height="12" rx="2" />
        <path d="M6 8h8M6 12h5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Stores",
    desc: "Monitor performance for each of your locations.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M3 8l1-4h12l1 4M3 8v8h14V8M3 8h14" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Cashiers",
    desc: "Manage staff access and activity across stores.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="10" cy="7" r="3" />
        <path d="M4 17c0-3.314 2.686-6 6-6s6 2.686 6 6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Terminals",
    desc: "View device status and health at a glance.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="5" y="2" width="10" height="16" rx="2" />
        <path d="M8 15h4" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function RunYourBusiness() {
  return (
    <section className="section-py bg-[#EEF4F6]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#00497A]/10 text-[#00497A] text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-[#00497A]" />
            One Platform
          </div>
          <h2 className="heading-xl text-4xl sm:text-5xl text-[#002843] mb-4">
            Everything You Need{" "}
            <span className="text-[#00497A]">To Run Your Stores.</span>
          </h2>
          <p className="text-lg text-[#646F7D] leading-relaxed">
            Monitor performance, manage operations, and track revenue from one centralized platform.
          </p>
        </motion.div>

        {/* Capability cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 rounded-2xl bg-white border border-[#DEE8EC] hover:border-[#00497A]/30 hover:shadow-[0_8px_40px_rgba(0,73,122,0.1)] transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-11 h-11 rounded-xl bg-[#00497A]/10 text-[#00497A] flex items-center justify-center shrink-0">
                  {c.icon}
                </div>
                <h3 className="text-base font-bold text-[#002843]">{c.title}</h3>
              </div>
              <p className="text-sm text-[#646F7D] leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
