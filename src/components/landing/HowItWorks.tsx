"use client";

import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Request a Terminal",
    desc: "Ships pre-configured and ready to use.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="6" y="2" width="12" height="20" rx="2.5" />
        <path d="M10 18h4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Receive & Activate",
    desc: "No technical setup or POS integration required.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 7l9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="3" y="5" width="18" height="14" rx="2" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Start Accepting Benefits",
    desc: "Begin processing transactions immediately.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 12l5 5 11-11" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-py bg-[#002843] relative overflow-hidden border-y border-white/10">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#00497A]/15 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 text-[#60b8ff] text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-[#60b8ff]" />
            How It Works
          </div>
          <h2 className="heading-xl text-4xl tabport:text-[2.7rem] desk:text-5xl text-white">
            Start Accepting Benefits in{" "}
            <span className="gradient-text">3 Simple Steps</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid desk:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="relative glass-card rounded-3xl p-8 hover:bg-white/[0.08] transition-colors duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#00497A]/30 text-[#60b8ff] flex items-center justify-center">
                  {s.icon}
                </div>
                <span className="text-4xl font-black text-white/10">{s.step}</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
