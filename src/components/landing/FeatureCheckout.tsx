"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Scan item",
    description: "Cashier scans product barcode with the built-in scanner.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 9V5h4M21 9V5h-4M3 15v4h4M21 15v4h-4M7 4v16M12 4v16M17 4v16" strokeLinecap="round" />
      </svg>
    ),
    color: "bg-[#00497A]",
    lightColor: "bg-[#E8F4FF]",
    textColor: "text-[#00497A]",
  },
  {
    number: "02",
    title: "Analyze basket",
    description: "Every item is checked against benefit catalogs in milliseconds.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 8v4l3 3" strokeLinecap="round" />
      </svg>
    ),
    color: "bg-[#005fa3]",
    lightColor: "bg-[#E0F0FF]",
    textColor: "text-[#005fa3]",
  },
  {
    number: "03",
    title: "Apply benefits",
    description: "Eligible items are automatically split and benefit balance applied.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M9 12l2.5 2.5L16 9" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 3a9 9 0 100 18A9 9 0 0012 3z" />
      </svg>
    ),
    color: "bg-emerald-600",
    lightColor: "bg-emerald-50",
    textColor: "text-emerald-600",
  },
  {
    number: "04",
    title: "Complete payment",
    description: "Remaining balance charged. Transaction receipt printed in seconds.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M5 7h14M5 12h8M5 17h10" strokeLinecap="round" />
        <path d="M17 14l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    color: "bg-[#002843]",
    lightColor: "bg-[#E8F0F5]",
    textColor: "text-[#002843]",
  },
];

export default function FeatureCheckout() {
  return (
    <section className="section-py bg-white" id="checkout">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-[#EEF4F6] text-[#00497A] text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-[#00497A]" />
            Blazing Fast Checkout
          </div>
          <h2 className="heading-xl text-4xl sm:text-5xl text-[#002843] mb-4">
            Checkout that takes{" "}
            <span className="text-[#00497A]">seconds.</span>
          </h2>
          <p className="text-lg text-[#646F7D] leading-relaxed">
            From first scan to printed receipt — the entire transaction happens in under 3 seconds, every time.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-10 left-[calc(12.5%-20px)] right-[calc(12.5%-20px)] h-px bg-[#DEE8EC] z-0">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-r from-[#00497A] to-emerald-500 origin-left"
            />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex flex-col gap-5"
              >
                {/* Icon circle */}
                <div className={`relative z-10 w-20 h-20 rounded-2xl ${step.lightColor} flex items-center justify-center mx-auto lg:mx-0 shadow-sm`}>
                  <div className={step.textColor}>{step.icon}</div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white border border-[#DEE8EC] flex items-center justify-center shadow-sm">
                    <span className="text-[9px] font-bold text-[#646F7D]">{step.number}</span>
                  </div>
                </div>

                <div className="text-center lg:text-left">
                  <h3 className="text-lg font-bold text-[#002843] mb-2">{step.title}</h3>
                  <p className="text-sm text-[#646F7D] leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Time callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 p-8 bg-[#002843] rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div>
            <div className="text-4xl font-black text-white">
              {"< "}3{" "}
              <span className="text-2xl font-semibold text-white/50">seconds</span>
            </div>
            <div className="text-sm text-white/50 mt-1">Average transaction time</div>
          </div>
          <div className="h-px sm:h-12 sm:w-px w-full bg-white/10" />
          <div className="text-center sm:text-left">
            <div className="text-2xl font-bold text-white">95%</div>
            <div className="text-sm text-white/50 mt-1">Faster than manual entry</div>
          </div>
          <div className="h-px sm:h-12 sm:w-px w-full bg-white/10" />
          <div className="text-center sm:text-left">
            <div className="text-2xl font-bold text-white">Zero</div>
            <div className="text-sm text-white/50 mt-1">Cashier training needed</div>
          </div>
          <a
            href="#cta"
            className="shrink-0 bg-white text-[#002843] font-semibold px-6 py-3 rounded-xl text-sm hover:bg-[#EEF4F6] transition-colors duration-200"
          >
            Get the terminal
          </a>
        </motion.div>
      </div>
    </section>
  );
}
