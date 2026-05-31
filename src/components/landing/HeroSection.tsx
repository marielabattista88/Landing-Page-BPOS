"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

function BasketItem({
  name,
  price,
  eligible,
  delay,
}: {
  name: string;
  price: string;
  eligible: boolean;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.4, ease: "easeOut" }}
      className="flex items-center justify-between py-3 border-b border-white/10 last:border-0"
    >
      <div className="flex items-center gap-3">
        <div
          className={`w-2 h-2 rounded-full ${
            eligible ? "bg-emerald-400" : "bg-white/30"
          }`}
        />
        <span className="text-sm text-white/80 font-medium">{name}</span>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-sm text-white/60">{price}</span>
        {eligible && (
          <span className="text-xs bg-emerald-400/20 text-emerald-400 px-2 py-0.5 rounded-full font-medium">
            Eligible
          </span>
        )}
      </div>
    </motion.div>
  );
}

const basketItems = [
  { name: "Naproxen Sodium 220mg", price: "$8.00", eligible: true },
  { name: "Tylenol Extra Strength", price: "$12.00", eligible: true },
  { name: "Advil Liqui-Gels 200mg", price: "$10.00", eligible: true },
  { name: "Coca-Cola 12oz", price: "$2.50", eligible: false },
  { name: "Acetaminophen Plus", price: "$15.00", eligible: true },
];

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const deviceY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col overflow-hidden gradient-hero"
    >
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#00497A]/20 blur-[120px] animate-pulse-glow" />
        <div
          className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-[#00A99D]/10 blur-[100px] animate-pulse-glow"
          style={{ animationDelay: "1.5s" }}
        />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 rounded-full bg-[#00497A]/15 blur-[80px]" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Main content */}
      <motion.div
        style={{ opacity: heroOpacity }}
        className="relative z-10 flex-1 flex items-center max-w-7xl mx-auto w-full px-6 pt-28 pb-16"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full">
          {/* Left column */}
          <div className="flex flex-col gap-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-2 w-fit"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-white/70 font-medium tracking-wide">
                Trusted by 2,000+ independent retailers
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="heading-display text-5xl sm:text-6xl lg:text-7xl text-white">
                Benefit payments
                <br />
                <span className="gradient-text">made effortless.</span>
              </h1>
            </motion.div>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-lg text-white/60 max-w-md leading-relaxed"
            >
              Analyze baskets, apply eligible benefits, and complete transactions
              in seconds — with zero manual work.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#cta"
                className="group inline-flex items-center gap-2 bg-[#00497A] hover:bg-[#005fa3] text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,73,122,0.6)] text-sm"
              >
                Get Started
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
                href="#features"
                className="inline-flex items-center gap-2 glass-card hover:bg-white/10 text-white/80 hover:text-white font-medium px-6 py-3.5 rounded-xl transition-all duration-200 text-sm"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <path d="M8 2a6 6 0 100 12A6 6 0 008 2zM6.5 5.5l4 2.5-4 2.5V5.5z" />
                </svg>
                Watch Demo
              </a>
            </motion.div>

            {/* Social proof stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex gap-8 pt-4 border-t border-white/10"
            >
              {[
                { value: "2K+", label: "Retailers" },
                { value: "$50M+", label: "Benefits processed" },
                { value: "< 3s", label: "Avg. checkout" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-white/50 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right column – Animated device + floating cards */}
          <div className="relative flex justify-center lg:justify-end items-center">
            {/* Glow behind device */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-72 h-72 rounded-full bg-[#00497A]/30 blur-[80px] animate-pulse-glow" />
            </div>

            {/* Device */}
            <motion.div
              style={{ y: deviceY }}
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 animate-float"
            >
              <Image
                src="/device.png"
                alt="Benefits POS Terminal"
                width={280}
                height={500}
                className="drop-shadow-2xl"
                priority
              />
            </motion.div>

            {/* Floating basket card */}
            <motion.div
              initial={{ opacity: 0, x: 40, y: -10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="absolute -left-4 top-8 lg:-left-16 glass-card rounded-2xl p-4 w-64 shadow-2xl animate-float-slow"
              style={{ animationDelay: "1s" }}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-white/50 font-medium uppercase tracking-wider">
                  Current Basket
                </span>
                <span className="text-xs text-emerald-400 font-semibold">
                  4 eligible
                </span>
              </div>
              {basketItems.map((item, i) => (
                <BasketItem key={item.name} {...item} delay={1.1 + i * 0.1} />
              ))}
              <div className="mt-3 pt-3 border-t border-white/10 flex justify-between items-center">
                <span className="text-sm text-white/70">Benefits applied</span>
                <span className="text-sm font-bold text-emerald-400">-$45.00</span>
              </div>
            </motion.div>

            {/* Floating success badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              className="absolute -right-4 bottom-24 lg:-right-8 glass-card rounded-2xl p-3.5 shadow-xl"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-emerald-400/20 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-emerald-400"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M3 8l3.5 3.5L13 4.5" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Transaction Approved</div>
                  <div className="text-xs text-white/50">$162.07 in 2.3s</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="relative z-10 flex flex-col items-center pb-10 gap-2"
      >
        <span className="text-xs text-white/30 font-medium tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent" />
      </motion.div>
    </section>
  );
}
