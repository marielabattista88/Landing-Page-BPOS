"use client";

import { motion } from "framer-motion";

/* ── Basket data (from Figma "Coverage Verified" screen) ───────────────── */
type Row = {
  name: string;
  price: string;
  priceColor: string;
  deductible?: string;
  foot: string;
  footColor: string;
  footInfo?: boolean;
  footValue?: string;
};

const groups: { title: string; removeAll?: boolean; items: Row[] }[] = [
  {
    title: "Declined (2)",
    removeAll: true,
    items: [
      { name: "Ibuprofen Famotidine", price: "$7.00", priceColor: "text-[#C73740]", foot: "Out-of-pocket", footColor: "text-[#C73740]", footInfo: true },
      { name: "Naproxen Sodium, 220 mg", price: "$3.00", priceColor: "text-[#C73740]", foot: "Out-of-pocket", footColor: "text-[#C73740]", footInfo: true },
    ],
  },
  {
    title: "Partially Covered (2)",
    items: [
      { name: "Bayer® Aspirin, 325 mg", price: "$12.00", priceColor: "text-[#00497A]", deductible: "$5.00", foot: "Out-of-pocket", footColor: "text-[#C73740]", footInfo: true, footValue: "$7.00" },
      { name: "Naproxen Sodium, 220 mg", price: "$8.00", priceColor: "text-[#00497A]", deductible: "$3.50", foot: "Out-of-pocket", footColor: "text-[#C73740]", footInfo: true, footValue: "$4.50" },
    ],
  },
  {
    title: "Approved (6)",
    items: [
      { name: "Tylenol Extra Strength, 500 mg", price: "$10.00", priceColor: "text-[#00497A]", foot: "Full Approved Amount", footColor: "text-[#646F7D]" },
      { name: "Tylenol Extra Strength, 500 mg", price: "$10.00", priceColor: "text-[#00497A]", foot: "Full Approved Amount", footColor: "text-[#646F7D]" },
      { name: "Advil Liqui-Gels, 200 mg", price: "$4.80", priceColor: "text-[#00497A]", foot: "Full Amount Deductible", footColor: "text-[#646F7D]" },
      { name: "Tylenol substitute adults", price: "$12.00", priceColor: "text-[#00497A]", foot: "Full Approved Amount", footColor: "text-[#646F7D]" },
    ],
  },
];

/* Flatten for staggered entrance delays */
const flatCount = groups.reduce((n, g) => n + g.items.length, 0);

function InfoIcon() {
  return (
    <svg className="w-3 h-3 shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="8" cy="8" r="6.25" />
      <path d="M8 7.2v3.2M8 5.2v.02" strokeLinecap="round" />
    </svg>
  );
}

function ProductRow({ item, delay }: { item: Row; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="py-3 border-b border-[#D9E4E9] last:border-0"
    >
      <div className="flex items-center justify-between gap-2">
        <span className="text-[14px] font-semibold text-[#222B2F] truncate">{item.name}</span>
        <span className={`text-[14px] font-bold shrink-0 ${item.priceColor}`}>{item.price}</span>
      </div>
      <div className="text-[11px] text-[#646F7D] mt-1">1 COUNT</div>
      {item.deductible && (
        <div className="flex items-center justify-between mt-1 text-[11px]">
          <span className="text-[#646F7D]">Amount Deductible to Card</span>
          <span className="text-[#808285]">{item.deductible}</span>
        </div>
      )}
      <div className="flex items-center justify-between mt-1">
        <span className={`flex items-center gap-1 text-[11px] ${item.footColor}`}>
          {item.foot}
          {item.footInfo && <InfoIcon />}
        </span>
        {item.footValue && <span className="text-[11px] text-[#C73740]">{item.footValue}</span>}
      </div>
    </motion.div>
  );
}

function FeatureItem({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="flex gap-3">
      <div className="w-9 h-9 rounded-lg bg-[#EEF4F6] flex items-center justify-center shrink-0 mt-0.5">{icon}</div>
      <div>
        <div className="text-sm font-semibold text-[#222B2F]">{title}</div>
        <div className="text-sm text-[#646F7D] mt-0.5 leading-relaxed">{desc}</div>
      </div>
    </div>
  );
}

export default function FeatureBasket() {
  return (
    <section id="features" className="section-py bg-[#F8FAFB]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* ── Left: Text ─────────────────────────────────────────────── */}
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

            <a href="#cta" className="inline-flex items-center gap-2 text-[#00497A] font-semibold text-sm hover:gap-3 transition-all duration-200">
              See how it works
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </a>
          </motion.div>

          {/* ── Right: Phone mockup + floating cards ───────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex justify-center"
          >
            {/* Soft glow */}
            <div className="absolute inset-0 bg-[#00497A]/5 blur-3xl rounded-[40px]" />

            {/* Phone wrapper (relative anchor for floating cards) */}
            <div className="relative w-[340px]">
              <div className="animate-float">
                {/* Phone frame */}
                <div className="relative bg-white rounded-[30px] shadow-[0_24px_70px_rgba(0,40,67,0.18)] border border-[#E6EDF0] overflow-hidden">
                  {/* Status bar */}
                  <div className="flex items-center justify-between px-5 pt-3 pb-1">
                    <span className="text-[13px] font-medium text-[#222B2F]">16:17</span>
                    <div className="flex items-center gap-1.5 text-[#222B2F]">
                      <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="currentColor"><path d="M8 3.5c2.2 0 4.2.86 5.66 2.26l-1.06 1.06A6.5 6.5 0 008 5a6.5 6.5 0 00-4.6 1.82L2.34 5.76A8 8 0 018 3.5zm0 3a5 5 0 013.54 1.46l-1.06 1.06A3.5 3.5 0 008 8a3.5 3.5 0 00-2.48 1.02L4.46 7.96A5 5 0 018 6.5zm0 3a2 2 0 011.41.58L8 11.5 6.59 10.08A2 2 0 018 9.5z"/></svg>
                      <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="currentColor"><path d="M1 11h2v2H1zM4.5 8.5h2V13h-2zM8 6h2v7H8zM11.5 3h2v10h-2z"/></svg>
                      <svg className="w-5 h-3.5" viewBox="0 0 24 16" fill="none" stroke="currentColor" strokeWidth="1.2"><rect x="1" y="3" width="19" height="10" rx="2.5"/><rect x="3" y="5" width="13" height="6" rx="1" fill="currentColor"/><path d="M22 6v4" strokeLinecap="round"/></svg>
                    </div>
                  </div>

                  {/* Header: Coverage Verified */}
                  <div className="flex items-center gap-2 px-4 pt-1 pb-4">
                    <span className="w-6 h-6 rounded-full bg-[#0A9773] flex items-center justify-center shrink-0">
                      <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M3.5 8.5l3 3 6-6.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                    <span className="flex-1 text-[20px] font-bold text-[#222B2F] tracking-tight">Coverage Verified</span>
                    <span className="flex items-center gap-1 text-[#00497A] text-[13px] font-semibold">
                      <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M11 2.5l2.5 2.5L6 12.5 3 13l.5-3L11 2.5z" strokeLinejoin="round"/></svg>
                      <span className="underline">Edit</span>
                    </span>
                  </div>

                  {/* Total Sale */}
                  <div className="flex items-end justify-between px-4 pb-3">
                    <div>
                      <div className="text-[15px] font-semibold text-[#00497A]">Total Sale</div>
                      <div className="text-[12px] text-[#222B2F]">Items (15)</div>
                    </div>
                    <div className="text-[22px] font-bold text-[#222B2F]">$162.07</div>
                  </div>

                  {/* Debit Card Balance */}
                  <div className="px-4 pb-3">
                    <div
                      className="relative h-[148px] rounded-2xl p-4 overflow-hidden flex flex-col justify-between"
                      style={{ background: "radial-gradient(130% 120% at 78% 18%, #0A4775 0%, #002843 52%, #001825 100%)" }}
                    >
                      {/* Cyan arc accent */}
                      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 300 148" fill="none" preserveAspectRatio="xMidYMid slice" aria-hidden>
                        <path d="M-20 150 C 60 120 90 40 200 20 C 270 8 320 30 360 70" stroke="#E8704F" strokeOpacity="0.45" strokeWidth="1.5" fill="none" />
                        <ellipse cx="250" cy="60" rx="120" ry="120" fill="#2DD3FF" fillOpacity="0.05" />
                      </svg>
                      <div className="relative flex items-start justify-between">
                        <div>
                          <div className="text-[13px] text-white/80">Current Balance</div>
                          <div className="text-[26px] font-bold text-white leading-tight mt-0.5">$200.00</div>
                        </div>
                        <span className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shrink-0">
                          <span className="text-[#00497A] font-extrabold text-lg leading-none">n</span>
                        </span>
                      </div>
                      <div className="relative flex items-center gap-2 text-white">
                        <span className="font-bold tracking-[0.15em] text-lg leading-none">···· ···· ····</span>
                        <span className="text-[15px]">0886</span>
                      </div>
                    </div>
                  </div>

                  {/* Grouped item list (clipped with bottom fade) */}
                  <div className="relative">
                    <div className="max-h-[252px] overflow-hidden">
                      {(() => {
                        let idx = 0;
                        return groups.map((g) => (
                          <div key={g.title}>
                            <div className="flex items-center justify-between bg-[#F8FAFB] px-4 py-2">
                              <span className="text-[13px] text-[#222B2F]">{g.title}</span>
                              {g.removeAll && (
                                <span className="flex items-center gap-1 bg-[#FEE9E8] text-[#C73740] text-[12px] font-medium px-3 py-1 rounded-full">
                                  <svg className="w-3 h-3" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 4.5h10M6.5 4V3h3v1M4.5 4.5l.5 8h6l.5-8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                  Remove All
                                </span>
                              )}
                            </div>
                            <div className="px-4">
                              {g.items.map((item) => {
                                const delay = 0.25 + (idx++ / flatCount) * 0.5;
                                return <ProductRow key={`${g.title}-${item.name}-${idx}`} item={item} delay={delay} />;
                              })}
                            </div>
                          </div>
                        ));
                      })()}
                    </div>
                    {/* bottom fade */}
                    <div className="pointer-events-none absolute bottom-0 inset-x-0 h-12 bg-gradient-to-t from-white to-transparent" />
                  </div>

                  {/* Footer */}
                  <div className="flex items-center gap-3 p-4 border-t border-[#EEF0F1] shadow-[0_-2px_8px_rgba(45,45,46,0.06)]">
                    <button className="w-10 h-10 rounded-full border-[1.5px] border-[#00497A] flex items-center justify-center text-[#00497A] shrink-0">
                      <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4l8 8M12 4l-8 8" strokeLinecap="round"/></svg>
                    </button>
                    <button className="flex-1 bg-[#00497A] text-white font-semibold text-[15px] rounded-lg py-2.5">Confirm Sale</button>
                  </div>
                </div>
              </div>

              {/* Floating card A — speed / eligibility (top-left, overlapping) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.88, y: 12 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -left-8 top-[92px] z-20"
              >
                <div className="animate-float-slow bg-white rounded-2xl shadow-[0_12px_40px_rgba(0,40,67,0.16)] border border-[#E6EDF0] px-3.5 py-2.5 flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-full bg-[#0A9773]/12 flex items-center justify-center shrink-0">
                    <svg className="w-3.5 h-3.5 text-[#0A9773]" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M3.5 8.5l3 3 6-6.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                  <div>
                    <div className="text-[12px] font-bold text-[#222B2F] leading-tight">Eligibility checked</div>
                    <div className="text-[11px] text-[#646F7D]">15 items · 92ms</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating card B — split tender (bottom-right, overlapping) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.88, y: 12 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -right-6 bottom-[120px] z-20"
              >
                <div className="animate-float bg-white rounded-2xl shadow-[0_12px_40px_rgba(0,40,67,0.16)] border border-[#E6EDF0] px-3.5 py-2.5" style={{ animationDelay: "1.2s" }}>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-6 h-6 rounded-lg bg-[#00497A]/10 flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3 text-[#00497A]" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 4h12M2 8h8M2 12h10" strokeLinecap="round"/></svg>
                    </span>
                    <span className="text-[12px] font-bold text-[#222B2F]">Split tender applied</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="text-[10px] text-[#646F7D] uppercase tracking-wide">Benefits</div>
                      <div className="text-[13px] font-bold text-[#0A9773]">$117.07</div>
                    </div>
                    <div className="w-px h-6 bg-[#E6EDF0]" />
                    <div>
                      <div className="text-[10px] text-[#646F7D] uppercase tracking-wide">Card</div>
                      <div className="text-[13px] font-bold text-[#00497A]">$45.00</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
