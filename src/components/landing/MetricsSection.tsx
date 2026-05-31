"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function useCountUp(end: number, duration = 2000, decimals = 0) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started) return;
    const step = (end / (duration / 16));
    let current = 0;
    const timer = setInterval(() => {
      current = Math.min(current + step, end);
      setCount(parseFloat(current.toFixed(decimals)));
      if (current >= end) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [started, end, duration, decimals]);

  return { count, start: () => setStarted(true) };
}

const metrics = [
  {
    value: 2000,
    prefix: "",
    suffix: "+",
    label: "Retailers enrolled",
    desc: "Independent stores across the US",
    decimals: 0,
  },
  {
    value: 50,
    prefix: "$",
    suffix: "M+",
    label: "Benefits processed",
    desc: "Monthly benefit dollars flowing through BPOS",
    decimals: 0,
  },
  {
    value: 18,
    prefix: "+",
    suffix: "%",
    label: "Revenue increase",
    desc: "Average increase in sales per retailer",
    decimals: 0,
  },
  {
    value: 2.8,
    prefix: "",
    suffix: "s",
    label: "Avg. transaction",
    desc: "From first scan to receipt print",
    decimals: 1,
  },
];

function MetricCard({
  value,
  prefix,
  suffix,
  label,
  desc,
  decimals,
  index,
}: {
  value: number;
  prefix: string;
  suffix: string;
  label: string;
  desc: string;
  decimals: number;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { count, start } = useCountUp(value, 2200, decimals);

  useEffect(() => {
    if (inView) start();
  }, [inView]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="text-center p-8 rounded-3xl bg-white border border-[#DEE8EC] hover:border-[#00497A]/30 hover:shadow-[0_8px_40px_rgba(0,73,122,0.1)] transition-all duration-300"
    >
      <div className="text-5xl font-black text-[#002843] mb-2">
        <span className="text-[#00497A] text-3xl font-bold">{prefix}</span>
        {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
        <span className="text-[#00497A]">{suffix}</span>
      </div>
      <div className="text-base font-semibold text-[#222B2F] mb-1">{label}</div>
      <div className="text-sm text-[#646F7D] leading-relaxed">{desc}</div>
    </motion.div>
  );
}

// Mini bar chart
function BarChart() {
  const data = [40, 55, 48, 70, 65, 80, 90, 75, 95, 88, 100, 94];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="flex items-end gap-2 h-32">
      {data.map((h, i) => (
        <div key={i} className="flex flex-col items-center gap-1 flex-1">
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            style={{ height: `${h}%` }}
            className={`w-full rounded-t-sm origin-bottom ${
              i === data.length - 1 || i === data.length - 2
                ? "bg-[#00497A]"
                : "bg-[#DEE8EC]"
            }`}
          />
          <span className="text-[8px] text-[#646F7D]">{months[i]}</span>
        </div>
      ))}
    </div>
  );
}

export default function MetricsSection() {
  return (
    <section className="section-py bg-[#EEF4F6]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#00497A]/10 text-[#00497A] text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-[#00497A]" />
            Business Impact
          </div>
          <h2 className="heading-xl text-4xl sm:text-5xl text-[#002843] mb-4">
            Turn benefit members into{" "}
            <span className="text-[#00497A]">loyal customers.</span>
          </h2>
          <p className="text-lg text-[#646F7D] leading-relaxed">
            Retailers who add BPOS see immediate improvements in transaction volume, basket size, and customer loyalty.
          </p>
        </motion.div>

        {/* Metric cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((m, i) => (
            <MetricCard key={m.label} {...m} index={i} />
          ))}
        </div>

        {/* Revenue chart card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-3xl border border-[#DEE8EC] p-8 shadow-sm"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-8">
            <div>
              <h3 className="text-xl font-bold text-[#002843]">Avg. retailer revenue growth</h3>
              <p className="text-sm text-[#646F7D] mt-1">After 12 months on Benefits POS</p>
            </div>
            <div className="flex items-center gap-6">
              <div>
                <div className="text-2xl font-black text-[#002843]">$24,381</div>
                <div className="text-xs text-emerald-500 font-semibold mt-0.5">↑ +18.4% YoY</div>
              </div>
              <span className="flex items-center gap-1.5 bg-emerald-50 text-emerald-600 text-xs font-semibold px-3 py-1.5 rounded-full border border-emerald-100">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Live data
              </span>
            </div>
          </div>
          <BarChart />
        </motion.div>
      </div>
    </section>
  );
}
