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

        {/* SVG animated traveling-light arcs — traces the cyan lines in the image */}
        <motion.svg
          style={{ y: bgY }}
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-[-8%] w-[116%] h-[116%] pointer-events-none"
          viewBox="0 0 2612 1632"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden
        >
          {/* Traveling lights that orbit the background's circular forms.
              Circles are the equal-radius rings of the bpos logo baked into
              hero-bg-blue.png (mapped 1:1 to this 2612×1632 viewBox). */}
          {[
            { cx: 1242, cy: 536, r: 881, dur: 7, delay: 0 },
            { cx: 1410, cy: 728, r: 881, dur: 9, delay: 2.2 },
            { cx: 1050, cy: 968, r: 881, dur: 8, delay: 1.1 },
          ].map((ring) => (
            <g key={`${ring.cx}-${ring.cy}`}>
              {/* Soft glow halo */}
              <motion.circle
                cx={ring.cx}
                cy={ring.cy}
                r={ring.r}
                pathLength={1}
                fill="none"
                stroke="#58A1FF"
                strokeWidth="14"
                strokeOpacity="0.22"
                strokeLinecap="round"
                strokeDasharray="0.13 0.87"
                animate={{ strokeDashoffset: [0, -1] }}
                transition={{ duration: ring.dur, repeat: Infinity, ease: "linear", delay: ring.delay }}
              />
              {/* Thin bright line */}
              <motion.circle
                cx={ring.cx}
                cy={ring.cy}
                r={ring.r}
                pathLength={1}
                fill="none"
                stroke="#CDEBFF"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="0.13 0.87"
                animate={{ strokeDashoffset: [0, -1] }}
                transition={{ duration: ring.dur, repeat: Infinity, ease: "linear", delay: ring.delay }}
              />
            </g>
          ))}

          {/* Rounded-rectangle frame (left + bottom edge of the logo frame) */}
          <motion.path
            d="M 360,150 C 150,150 150,300 150,470 L 150,1180 C 150,1360 150,1500 360,1500 L 1500,1500"
            fill="none"
            stroke="#58A1FF"
            strokeWidth="13"
            strokeOpacity="0.2"
            strokeLinecap="round"
            pathLength={1}
            strokeDasharray="0.16 0.84"
            animate={{ strokeDashoffset: [0, -1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear", delay: 0.6 }}
          />
          <motion.path
            d="M 360,150 C 150,150 150,300 150,470 L 150,1180 C 150,1360 150,1500 360,1500 L 1500,1500"
            fill="none"
            stroke="#CDEBFF"
            strokeWidth="3"
            strokeLinecap="round"
            pathLength={1}
            strokeDasharray="0.16 0.84"
            animate={{ strokeDashoffset: [0, -1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear", delay: 0.6 }}
          />
        </motion.svg>

        {/* Left-side text overlay for legibility */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, #001829e0 0%, #00182980 45%, transparent 75%)" }}
        />

        {/* Subtle grid */}
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
              <h1 className="heading-display text-5xl sm:text-6xl lg:text-7xl text-white">
                A Modern Fintech Solution
                <br />
                <span className="text-white">for Retailers</span>
              </h1>
            </motion.div>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-lg text-white/60 max-w-md leading-relaxed"
            >
              Analyze baskets instantly, identify eligible products, apply benefits automatically, and complete payments in seconds. Manage sales, settlements, and store performance from one powerful platform.
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

          {/* Right column – Terminal video animation */}
          <div className="relative flex justify-center lg:justify-end items-center">
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
                  width={406}
                  height={686}
                  className="w-[330px] h-auto drop-shadow-[0_40px_80px_rgba(0,0,0,0.5)]"
                >
                  <source src="/hero-animation.webm" type="video/webm" />
                </video>
              </motion.div>
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
