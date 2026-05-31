"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  { name: "Naproxen Sodium 220mg", price: "$8.00", eligible: true, category: "OTC" },
  { name: "Tylenol Extra Strength", price: "$12.00", eligible: true, category: "OTC" },
  { name: "Advil Liqui-Gels 200mg", price: "$10.00", eligible: true, category: "OTC" },
  { name: "Vitamin D3 2000IU", price: "$9.00", eligible: true, category: "Supplement" },
  { name: "Coca-Cola 12oz", price: "$2.50", eligible: false, category: "Beverage" },
  { name: "Doritos Chips 2oz", price: "$1.99", eligible: false, category: "Snack" },
  { name: "Ibuprofen Famotidine", price: "$5.00", eligible: true, category: "OTC" },
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
  const eligible = items.filter((i) => i.eligible);
  const total = items.reduce((s, i) => s + parseFloat(i.price.replace("$", "")), 0);
  const covered = eligible.reduce((s, i) => s + parseFloat(i.price.replace("$", "")), 0);

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
              {/* Card header */}
              <div className="px-6 py-4 border-b border-[#DEE8EC] bg-white flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold text-[#222B2F]">New Sale</div>
                  <div className="text-xs text-[#646F7D]">K&M Drugs · Clewiston, FL</div>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs text-[#646F7D] font-medium">Live</span>
                </div>
              </div>

              {/* Basket items */}
              <div className="px-6 py-4 bg-white max-h-72 overflow-y-auto">
                <AnimatePresence>
                  {items.map((item, i) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.08, duration: 0.3 }}
                      onMouseEnter={() => setHighlighted(i)}
                      onMouseLeave={() => setHighlighted(null)}
                      className={`flex items-center justify-between py-3 border-b border-[#DEE8EC]/60 last:border-0 rounded-lg px-3 -mx-3 cursor-pointer transition-colors duration-200 ${
                        highlighted === i ? "bg-[#EEF4F6]" : ""
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`w-2 h-2 rounded-full shrink-0 ${
                            item.eligible ? "bg-emerald-400" : "bg-[#DEE8EC]"
                          }`}
                        />
                        <div>
                          <div className="text-sm font-medium text-[#222B2F]">{item.name}</div>
                          <div className="text-xs text-[#646F7D]">{item.category}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-[#222B2F]">{item.price}</span>
                        {item.eligible ? (
                          <span className="text-xs bg-emerald-50 text-emerald-600 border border-emerald-100 px-2 py-0.5 rounded-full font-medium">
                            ✓
                          </span>
                        ) : (
                          <span className="text-xs bg-[#F8FAFB] text-[#646F7D] border border-[#DEE8EC] px-2 py-0.5 rounded-full font-medium">
                            —
                          </span>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Summary footer */}
              <div className="px-6 py-5 bg-[#EEF4F6] border-t border-[#DEE8EC]">
                <div className="flex justify-between text-sm text-[#646F7D] mb-2">
                  <span>Subtotal ({items.length} items)</span>
                  <span className="font-medium text-[#222B2F]">${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm mb-3">
                  <span className="text-[#646F7D]">Benefits covered ({eligible.length} items)</span>
                  <span className="font-semibold text-emerald-600">-${covered.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-base font-bold text-[#002843] pt-3 border-t border-[#DEE8EC]">
                  <span>Customer pays</span>
                  <span>${(total - covered).toFixed(2)}</span>
                </div>
                <button className="mt-4 w-full bg-[#002843] hover:bg-[#00497A] text-white font-semibold py-3 rounded-xl text-sm transition-colors duration-200">
                  Confirm Basket
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
