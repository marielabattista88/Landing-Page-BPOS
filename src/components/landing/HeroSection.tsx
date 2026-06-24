"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, []);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const deviceY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col overflow-hidden gradient-hero"
    >
      {/* Hero background — blue PNG + animated SVG arc lights */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        {/* Base image with breathing scale + scroll parallax */}
        <motion.div
          style={{ y: bgY }}
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-[-8%] w-[116%] h-[116%]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/hero-bg-blue.png"
            alt=""
            aria-hidden
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </motion.div>

        {/* Left-side text overlay for legibility */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, #001829e0 0%, #00182980 45%, transparent 75%)" }}
        />

      </div>

      {/* Main content */}
      <motion.div
        style={{ opacity: heroOpacity }}
        className="relative z-10 flex-1 flex items-center max-w-7xl mx-auto w-full px-6 pt-28 pb-16"
      >
        <div className="grid desk:grid-cols-[1.25fr_0.75fr] gap-12 desk:gap-8 items-center w-full">
          {/* Left column */}
          <div className="flex flex-col gap-8 items-center text-center desk:items-start desk:text-left">
            {/* Badge */}
            {/* App Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="w-fit"
            >
              <div
                style={{
                  width: "70px",
                  height: "68px",
                  borderRadius: "15.24px",
                  padding: "2px",
                  background:
                    "linear-gradient(138deg, rgba(45,211,255,0.74) 0%, rgba(0,73,122,0.18) 43.2%, rgba(0,73,122,1) 80.2%, rgba(0,240,255,0.2) 100%)",
                }}
              >
                <div
                  className="w-full h-full overflow-hidden"
                  style={{ borderRadius: "13.24px" }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/bpos-icon.svg"
                    alt="Benefits POS"
                    className="block w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="heading-display text-[clamp(1.25rem,8vw,2.25rem)] desk:text-6xl text-white">
                <span className="whitespace-nowrap">Turn Benefit Members</span>
                <br />
                <span className="whitespace-nowrap text-white">Into Loyal Customers.</span>
              </h1>
            </motion.div>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-lg text-white/60 max-w-md leading-relaxed mx-auto desk:mx-0"
            >
              Everything you need to grow your store — in one simple platform.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4 justify-center desk:justify-start"
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
              className="flex gap-8 pt-4 border-t border-white/10 justify-center desk:justify-start"
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

          {/* Right column – Terminal video animation */}
          <div className="relative flex justify-center desk:justify-end items-center">
            <motion.div
              style={{ y: deviceY }}
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 animate-float"
            >
              {/* Gentle float + very slow rotation to complement video's own 3D motion */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              >
                <video
                  ref={videoRef}
                  autoPlay
                  muted
                  loop
                  playsInline
                  width={941}
                  height={685}
                  className="w-[400px] max-w-full desk:w-[640px] desk:max-w-none h-auto drop-shadow-[0_40px_80px_rgba(0,0,0,0.5)] translate-x-[17%] desk:translate-x-[130px] desk:translate-y-[50px]"
                >
                  <source src="/terminal-3d-loop-v2.webm" type="video/webm" />
                </video>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator — pinned to the bottom so it peeks at the fold */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-white/30 font-medium tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent" />
      </motion.div>
    </section>
  );
}
