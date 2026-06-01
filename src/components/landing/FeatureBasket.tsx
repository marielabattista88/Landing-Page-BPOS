"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  { name: "Acetaminophen Plus Aspirin & Caffeine", barcode: "123456789", unit: "Count", price: "$3.00",  tax: "0.80 %", eligible: true,  setPrice: false, inactive: false },
  { name: "Antibiotic ointment",                  barcode: "12345906980", unit: "Count", price: "$12.00", tax: "0.80 %", eligible: true,  setPrice: false, inactive: false },
  { name: "Apple",                                barcode: "12345",       unit: "KL",    price: null,     tax: null,      eligible: true,  setPrice: true,  inactive: false },
  { name: "Alka-Seltzer (Inactive)",              barcode: "1234567",    unit: "Count", price: "$15.30", tax: "0.80 %", eligible: false, setPrice: false, inactive: true  },
  { name: "Banana",                               barcode: "12345",       unit: "Count", price: null,     tax: null,      eligible: true,  setPrice: true,  inactive: false },
  { name: "Benadryl",                             barcode: "123456789",  unit: "Count", price: "$8.75",  tax: "0.80 %", eligible: true,  setPrice: false, inactive: false },
  { name: "Claritin",                             barcode: "123456789",  unit: "Count", price: "$6.90",  tax: "0.80 %", eligible: true,  setPrice: false, inactive: false },
];

function FeatureItem({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="flex gap-3">
      <div className="w-9 h-9 rounded-lg bg-[#EEF4F6] flex items-center justify-center shrink-0 mt-0.5">
        {icon}
      </div>
      <div>
        <div className="text-sm font-semibold text-[#222B2F]">{title}</div>
        <div className="text-sm text-[#646F7D] mt-0.5 leading-relaxed">{desc}</div>
      </div>
    </div>
  );
}

export default function FeatureBasket() {
  const [highlighted, setHighlighted] = useState<number | null>(null);

  return (
    <section id="features" className="section-py bg-[#F8FAFB]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 bg-[#00497A]/10 text-[#00497A] text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
                <div className="w-1.5 h-1.5 rounded-full bg-[#00497A]" />
                Smart Basket Analysis
              </div>
              <h2 className="heading-xl text-4xl sm:text-5xl text-[#002843] mb-4">
                Analyze every basket
                <br />
                <span className="text-[#00497A]">in real time.</span>
              </h2>
              <p className="text-lg text-[#646F7D] leading-relaxed max-w-md">
                BPOS instantly scans every product, identifies eligible benefit items, and separates them from non-eligible ones — automatically.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <FeatureItem
                icon={
                  <svg className="w-4 h-4 text-[#00497A]" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M8 2a6 6 0 100 12A6 6 0 008 2z" />
                    <path d="M8 5v3l2 2" strokeLinecap="round" />
                  </svg>
                }
                title="Instant eligibility detection"
                desc="Each product is cross-referenced with benefit catalogs in under 100ms."
              />
              <FeatureItem
                icon={
                  <svg className="w-4 h-4 text-[#00497A]" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M2 4h12M2 8h8M2 12h10" strokeLinecap="round" />
                  </svg>
                }
                title="Automatic split tender"
                desc="Eligible items paid via benefit balance, remainder charged to customer."
              />
              <FeatureItem
                icon={
                  <svg className="w-4 h-4 text-[#00497A]" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 3h10v10H3z" strokeLinejoin="round" />
                    <path d="M6 6l4 4M10 6l-4 4" strokeLinecap="round" />
                  </svg>
                }
                title="Zero manual input"
                desc="No cashier configuration needed. The system handles all benefit logic."
              />
            </div>

            <a
              href="#cta"
              className="inline-flex items-center gap-2 text-[#00497A] font-semibold text-sm hover:gap-3 transition-all duration-200"
            >
              See how it works
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </a>
          </motion.div>

          {/* Right: Interactive basket card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-[#00497A]/5 blur-3xl rounded-3xl" />

            <div className="relative glass-card-light rounded-3xl shadow-[0_20px_80px_rgba(0,40,67,0.12)] overflow-hidden border border-[#DEE8EC]">
              {/* Screen header */}
              <div className="px-4 pt-3 pb-0 bg-white border-b border-[#DEE8EC]">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#222B2F]" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M10 13L5 8l5-5"/></svg>
                    <div>
                      <div className="text-base font-bold text-[#222B2F] leading-tight">Items</div>
                      <div className="text-[11px] text-[#646F7D]">John&#39;s Doe Store</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-[#646F7D]" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 4h12M4 8h8M6 12h4" strokeLinecap="round"/></svg>
                    <svg className="w-4 h-4 text-[#646F7D]" viewBox="0 0 16 16" fill="currentColor"><circle cx="8" cy="3" r="1.2"/><circle cx="8" cy="8" r="1.2"/><circle cx="8" cy="13" r="1.2"/></svg>
                  </div>
                </div>
                {/* Search bar */}
                <div className="flex items-center gap-2 bg-[#FAFAFA] border border-[#EEF0F1] rounded-full px-3 py-1.5 mb-3">
                  <svg className="w-3.5 h-3.5 text-[#B1B9C1] shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="7" cy="7" r="4.5"/><path d="M10.5 10.5l2.5 2.5" strokeLinecap="round"/></svg>
                  <span className="text-xs text-[#B1B9C1]">Search</span>
                </div>
                {/* Filter chips */}
                <div className="flex gap-2 pb-3">
                  <span className="bg-[#00497A] text-white text-xs font-semibold px-4 py-1 rounded-full">All</span>
                  <span className="border border-[#D9E4E9] text-[#00497A] text-xs font-semibold px-4 py-1 rounded-full">Barcode</span>
                  <span className="border border-[#D9E4E9] text-[#00497A] text-xs font-semibold px-4 py-1 rounded-full">PLUs</span>
                </div>
              </div>

              {/* Item rows */}
              <div className="bg-white max-h-72 overflow-y-auto">
                <AnimatePresence>
                  {items.map((item, i) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.07, duration: 0.3 }}
                      onMouseEnter={() => setHighlighted(i)}
                      onMouseLeave={() => setHighlighted(null)}
                      className={`flex items-center justify-between px-4 py-2.5 border-b border-[#D9E4E9]/60 last:border-0 cursor-pointer transition-colors duration-150 ${
                        highlighted === i ? "bg-[#EEF4F6]" : ""
                      } ${item.inactive ? "opacity-50" : ""}`}
                    >
                      <div className="flex flex-col gap-0.5 flex-1 min-w-0 pr-3">
                        <span className={`text-[13px] font-semibold truncate leading-tight ${item.inactive ? "text-[#B1B1B1]" : "text-[#222B2F]"}`}>
                          {item.name}
                        </span>
                        <div className="flex items-center gap-1.5">
                          <span className={`text-[11px] ${item.inactive ? "text-[#B1B1B1]" : "text-[#646F7D]"}`}>{item.barcode}</span>
                          {item.eligible && !item.inactive && (
                            <svg className="w-3 h-3 text-[#00497A] shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="8" cy="8" r="6"/><path d="M5 8l2.5 2.5L11 6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          )}
                          {item.inactive && (
                            <svg className="w-3 h-3 text-[#B1B1B1] shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="8" cy="8" r="6"/><path d="M5 8l2.5 2.5L11 6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          )}
                        </div>
                        <span className={`text-[11px] ${item.inactive ? "text-[#B1B1B1]" : "text-[#B1B1B1]"}`}>{item.unit}</span>
                      </div>
                      <div className="flex flex-col items-end shrink-0">
                        {item.setPrice ? (
                          <span className="text-[13px] font-semibold text-[#F25D4A] underline">Set Price</span>
                        ) : (
                          <>
                            <span className={`text-[13px] font-semibold leading-tight ${item.inactive ? "text-[#B1B1B1]" : "text-[#00497A]"}`}>{item.price}</span>
                            <span className="text-[10px] text-[#B1B1B1]">Tax {item.tax}</span>
                          </>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
