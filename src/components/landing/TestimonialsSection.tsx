"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "We used to turn away benefit members because we didn't know how to handle it. Now it's our best revenue stream. BPOS paid for itself in the first week.",
    name: "Carlos M.",
    role: "Owner, Mi Tienda Bodega",
    location: "Bronx, NY",
    initials: "CM",
    color: "bg-[#00497A]",
    metric: "+34% revenue",
  },
  {
    quote:
      "The terminal scans everything instantly. My cashiers don't have to think about it — the screen tells them exactly what's covered and what isn't.",
    name: "Sandra R.",
    role: "Manager, Familia Pharmacy",
    location: "Miami, FL",
    initials: "SR",
    color: "bg-emerald-600",
    metric: "2.4s avg checkout",
  },
  {
    quote:
      "I manage 3 locations from the portal. Sales, cashiers, transactions — all in one place. I used to drive store to store just to check numbers.",
    name: "David T.",
    role: "Owner, Key Foods Group",
    location: "Brooklyn, NY",
    initials: "DT",
    color: "bg-[#005fa3]",
    metric: "3 stores, 1 dashboard",
  },
  {
    quote:
      "Our customers with benefits keep coming back because they know we accept them. Foot traffic is up 40% since we installed BPOS.",
    name: "Rosa G.",
    role: "Owner, Gonzalez Market",
    location: "Houston, TX",
    initials: "RG",
    color: "bg-[#002843]",
    metric: "+40% foot traffic",
  },
  {
    quote:
      "Setup literally took 4 minutes. They shipped it pre-configured. I plugged it in, ran a test transaction, and was processing real payments by lunch.",
    name: "Mike A.",
    role: "Owner, Western Market",
    location: "Los Angeles, CA",
    initials: "MA",
    color: "bg-[#00497A]",
    metric: "4 min setup",
  },
  {
    quote:
      "The portal looks like something from a big corporation — not what I expected for a small pharmacy like mine. The reports help me make smarter ordering decisions.",
    name: "Priya N.",
    role: "Pharmacist-Owner, Sunrise RX",
    location: "Queens, NY",
    initials: "PN",
    color: "bg-emerald-700",
    metric: "20% better margins",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="section-py bg-[#F8FAFB]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#00497A]/10 text-[#00497A] text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-[#00497A]" />
            Retailer Stories
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="heading-xl text-4xl sm:text-5xl text-[#002843]">
              We keep our promise.
            </h2>
            <p className="text-[#646F7D] max-w-sm text-sm leading-relaxed">
              Real results from real retailers across the country.
            </p>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white border border-[#DEE8EC] rounded-3xl p-6 flex flex-col gap-5 hover:border-[#00497A]/30 hover:shadow-[0_8px_40px_rgba(0,73,122,0.08)] transition-all duration-300"
            >
              {/* Metric badge */}
              <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-xs font-bold px-2.5 py-1 rounded-full border border-emerald-100 w-fit">
                <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M2 9l2.5-2.5L6 8l2-3 2 1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {t.metric}
              </div>

              {/* Quote */}
              <blockquote className="text-sm text-[#222B2F] leading-relaxed flex-1">
                "{t.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#DEE8EC]">
                <div
                  className={`w-9 h-9 rounded-full ${t.color} flex items-center justify-center text-white text-xs font-bold shrink-0`}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#222B2F]">{t.name}</div>
                  <div className="text-xs text-[#646F7D]">
                    {t.role} · {t.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Star rating strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 p-6 bg-white border border-[#DEE8EC] rounded-2xl"
        >
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.368-2.448a1 1 0 00-1.175 0l-3.368 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.065 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
              </svg>
            ))}
          </div>
          <div className="text-sm font-semibold text-[#222B2F]">4.9 / 5.0</div>
          <div className="text-sm text-[#646F7D]">from 2,000+ independent retailers nationwide</div>
        </motion.div>
      </div>
    </section>
  );
}
