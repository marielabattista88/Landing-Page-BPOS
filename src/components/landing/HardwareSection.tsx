"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const specs = [
  { label: "Display", value: "5.5\" HD Touch" },
  { label: "Scanner", value: "1D/2D Barcode + QR" },
  { label: "Printer", value: "Built-in thermal" },
  { label: "Payment", value: "Tap, Swipe, Chip" },
  { label: "Connectivity", value: "4G LTE + WiFi" },
  { label: "Battery", value: "12h continuous use" },
  { label: "OS", value: "Android 11" },
  { label: "Security", value: "PCI-DSS Certified" },
];

export default function HardwareSection() {
  return (
    <section id="hardware" className="section-py bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-[#EEF4F6] text-[#00497A] text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#00497A]" />
            Benefits POS Terminal
          </div>
          <h2 className="heading-xl text-4xl sm:text-5xl text-[#002843] max-w-2xl mx-auto">
            Built for the floor.{" "}
            <span className="text-[#00497A]">Not the office.</span>
          </h2>
          <p className="mt-4 text-lg text-[#646F7D] max-w-xl mx-auto leading-relaxed">
            A rugged Android terminal engineered for high-volume retail — fast scanning, instant approvals, built-in printer.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Device image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex items-center justify-center"
          >
            {/* Background circle */}
            <div className="absolute w-[380px] h-[380px] rounded-full bg-[#EEF4F6]" />
            <div className="absolute w-[280px] h-[280px] rounded-full bg-[#DEE8EC]/60" />

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
            >
              <Image
                src="/device.png"
                alt="Benefits POS Terminal hardware"
                width={260}
                height={460}
                className="drop-shadow-[0_30px_60px_rgba(0,40,67,0.25)]"
              />
            </motion.div>

            {/* Floating spec badges */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute top-8 left-0 bg-white border border-[#DEE8EC] rounded-2xl px-4 py-3 shadow-lg"
            >
              <div className="text-xs text-[#646F7D] font-medium">Tap to Pay</div>
              <div className="text-sm font-bold text-[#002843] mt-0.5">NFC Enabled</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.65 }}
              className="absolute bottom-16 right-0 bg-white border border-[#DEE8EC] rounded-2xl px-4 py-3 shadow-lg"
            >
              <div className="text-xs text-[#646F7D] font-medium">Setup time</div>
              <div className="text-sm font-bold text-[#002843] mt-0.5">Under 5 min</div>
            </motion.div>
          </motion.div>

          {/* Right: Specs grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-[#002843] mb-2">Everything included.</h3>
              <p className="text-[#646F7D]">
                Plug in, connect, and start accepting benefit payments. No integration, no IT team required.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {specs.map((spec, i) => (
                <motion.div
                  key={spec.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.06, duration: 0.4 }}
                  className="border border-[#DEE8EC] rounded-xl p-4 hover:border-[#00497A]/30 hover:bg-[#F8FAFB] transition-all duration-200"
                >
                  <div className="text-xs text-[#646F7D] font-medium mb-1">{spec.label}</div>
                  <div className="text-sm font-semibold text-[#002843]">{spec.value}</div>
                </motion.div>
              ))}
            </div>

            <div className="pt-2 flex flex-col gap-3">
              <div className="flex items-center gap-3 text-sm text-[#646F7D]">
                <svg className="w-5 h-5 text-emerald-500 shrink-0" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 10l3.5 3.5L15 7" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="10" cy="10" r="8" />
                </svg>
                No upfront hardware cost — pay per transaction
              </div>
              <div className="flex items-center gap-3 text-sm text-[#646F7D]">
                <svg className="w-5 h-5 text-emerald-500 shrink-0" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 10l3.5 3.5L15 7" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="10" cy="10" r="8" />
                </svg>
                Ships pre-configured and ready to use
              </div>
              <div className="flex items-center gap-3 text-sm text-[#646F7D]">
                <svg className="w-5 h-5 text-emerald-500 shrink-0" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 10l3.5 3.5L15 7" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="10" cy="10" r="8" />
                </svg>
                24/7 support included
              </div>
            </div>

            <a
              href="#cta"
              className="inline-flex items-center justify-center gap-2 bg-[#002843] hover:bg-[#00497A] text-white font-semibold px-6 py-3.5 rounded-xl text-sm transition-all duration-200 hover:shadow-[0_4px_20px_rgba(0,73,122,0.3)]"
            >
              Request a terminal
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
