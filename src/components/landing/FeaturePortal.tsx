"use client";

import { motion } from "framer-motion";
import FlowLines from "./FlowLines";

const kpis = [
  { label: "Total Revenue", value: "$708.54", delta: "+5%" },
  { label: "Net Profit", value: "$112.43K", delta: "+9%" },
  { label: "Transactions", value: "2.3M", delta: "+16%" },
  { label: "Avg / Retailer", value: "$4,214", delta: "+5.2%" },
];

// Revenue trend — 12 points, viewBox 300×100 (lower y = higher value)
const trendPoints = "10,62 35,54 61,58 86,44 112,49 137,37 163,41 188,29 214,35 239,23 265,27 290,15";
const trendArea = `M10,62 L35,54 L61,58 L86,44 L112,49 L137,37 L163,41 L188,29 L214,35 L239,23 L265,27 L290,15 L290,100 L10,100 Z`;
const miniBars = [38, 52, 44, 64, 58, 78, 70, 90];

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
    <section id="portal" className="section-py bg-night relative">
      {/* Background decoration — overflow-hidden only here to clip blurs without clipping floating cards */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-150 h-150 rounded-full bg-navy/10 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-teal/5 blur-[80px]" />
        <FlowLines opacity={0.6} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 xl:gap-32 items-center">

          {/* LEFT: Native glass dashboard mock */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative order-2 lg:order-1 lg:pr-10 lg:py-8"
          >
            {/* Ambient glows */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-teal/20 blur-[60px] rounded-full pointer-events-none" />
            <div className="absolute -top-8 left-1/4 w-1/2 h-32 bg-[#60b8ff]/25 blur-[80px] rounded-full pointer-events-none" />

            {/* Main glass panel — floats gently */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
              className="relative rounded-2xl border border-white/10 bg-white/4 backdrop-blur-2xl p-5 shadow-[0_32px_64px_rgba(0,0,0,0.6),0_8px_24px_rgba(0,73,122,0.35)] overflow-hidden"
            >
              {/* Top sheen */}
              <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/30 to-transparent" />
              <div className="absolute -top-px left-1/4 w-1/2 h-24 bg-[#60b8ff]/10 blur-3xl pointer-events-none" />

              {/* Header */}
              <div className="flex items-center justify-between mb-5">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-white/35">Dashboard</div>
                  <div className="text-sm font-semibold text-white">Overview</div>
                </div>
                <div className="inline-flex items-center gap-1.5 bg-teal/15 text-teal text-[10px] font-semibold px-2.5 py-1 rounded-full">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-teal animate-ping opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-teal" />
                  </span>
                  Live
                </div>
              </div>

              {/* KPI tiles */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
                {kpis.map((k) => (
                  <div key={k.label} className="rounded-xl border border-white/8 bg-white/3 px-3 py-2.5">
                    <div className="text-[9px] text-white/40 truncate">{k.label}</div>
                    <div className="text-sm font-bold text-white tabular-nums mt-0.5">{k.value}</div>
                    <div className="inline-flex items-center gap-0.5 text-[9px] font-semibold text-teal mt-1">
                      <svg className="w-2.5 h-2.5" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M5 8V2M5 2L2.5 4.5M5 2l2.5 2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {k.delta}
                    </div>
                  </div>
                ))}
              </div>

              {/* Area chart */}
              <div className="rounded-xl border border-white/8 bg-white/2 p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-xs font-semibold text-white/80">Revenue Trend</div>
                  <div className="text-[10px] text-white/30">2026</div>
                </div>
                <svg viewBox="0 0 300 100" className="w-full h-28" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="portalArea" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#60b8ff" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#60b8ff" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="portalStroke" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#00A99D" />
                      <stop offset="100%" stopColor="#60b8ff" />
                    </linearGradient>
                  </defs>
                  {[20, 40, 60, 80].map((y) => (
                    <line key={y} x1="0" y1={y} x2="300" y2={y} stroke="white" strokeOpacity="0.05" strokeWidth="0.5" />
                  ))}
                  <path d={trendArea} fill="url(#portalArea)" />
                  <polyline
                    points={trendPoints}
                    fill="none"
                    stroke="url(#portalStroke)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ filter: "drop-shadow(0 0 6px rgba(96,184,255,0.5))" }}
                  />
                  <circle cx="290" cy="15" r="3" fill="#60b8ff" style={{ filter: "drop-shadow(0 0 6px rgba(96,184,255,0.9))" }} />
                </svg>
              </div>
            </motion.div>

            {/* Floating card — mini bar chart (top-right) */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 7, ease: "easeInOut", repeat: Infinity, delay: 0.5 }}
              className="absolute -top-6 -right-2 sm:-right-6 lg:-right-10 w-40 rounded-2xl border border-white/10 bg-white/6 backdrop-blur-2xl p-3.5 shadow-[0_16px_40px_rgba(0,0,0,0.5)]"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] text-white/50">Sales This Year</span>
                <span className="text-[10px] font-semibold text-teal tabular-nums">$2.3M</span>
              </div>
              <div className="flex items-end gap-1 h-12">
                {miniBars.map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm bg-linear-to-t from-[#60b8ff]/30 to-[#60b8ff]"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Floating card — success rate (bottom-right) */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 8, ease: "easeInOut", repeat: Infinity, delay: 1 }}
              className="absolute -bottom-7 right-0 sm:-right-4 lg:-right-8 rounded-2xl border border-white/10 bg-white/6 backdrop-blur-2xl px-4 py-3 shadow-[0_16px_40px_rgba(0,0,0,0.5)]"
            >
              <div className="text-[10px] text-white/50">Success Rate</div>
              <div className="flex items-baseline gap-1.5 mt-0.5">
                <span className="text-2xl font-black text-teal tabular-nums">98.7%</span>
              </div>
              <div className="text-[9px] text-white/35 mt-0.5">12,843 completed</div>
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
                Manage Every Store
                <br />
                <span className="gradient-text">From One Dashboard.</span>
              </h2>
              <p className="text-lg text-white/60 leading-relaxed max-w-md">
                Track revenue, settlements, transactions, stores, and cashiers from a single dashboard built for growing retailers.
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
                  className="glass-card rounded-2xl p-4 hover:bg-white/8 transition-colors duration-200"
                >
                  <div className="w-9 h-9 rounded-lg bg-navy/30 text-[#60b8ff] flex items-center justify-center mb-3">
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
