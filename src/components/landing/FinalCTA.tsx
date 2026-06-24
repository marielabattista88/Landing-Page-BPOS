"use client";

import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section id="cta" className="section-py bg-[#F8FAFB] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative gradient-cta rounded-3xl px-8 py-20 text-center overflow-hidden"
        >
          {/* Glow orbs */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#00497A]/30 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-[#00A99D]/10 blur-[80px] rounded-full pointer-events-none" />
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />

          {/* Content */}
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-white/10 text-white/60 text-xs font-semibold px-3 py-1.5 rounded-full mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Now accepting applications
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="heading-display text-4xl lg:text-6xl text-white mb-5"
            >
              Turn Benefit Members
              <br />
              <span className="gradient-text">Into Loyal Customers.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-lg text-white/55 mb-10 max-w-xl mx-auto leading-relaxed"
            >
              Join thousands of retailers already growing their business with BPOS.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-col lg:flex-row gap-4 justify-center"
            >
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 bg-white text-[#002843] font-bold px-8 py-4 rounded-xl text-sm hover:bg-[#EEF4F6] transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Create Account
                <svg
                  className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 glass-card text-white/80 hover:text-white font-semibold px-8 py-4 rounded-xl text-sm hover:bg-white/10 transition-all duration-200"
              >
                Talk to Sales
              </a>
            </motion.div>

            {/* Trust line */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-8 text-xs text-white/30"
            >
              No setup fees · No contracts · Ships in 2 business days
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
