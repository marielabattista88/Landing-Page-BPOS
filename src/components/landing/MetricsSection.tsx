"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { revealViewport, staggerDelay } from "@/lib/reveal";

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
  const inView = useInView(ref, revealViewport);
  const { count, start } = useCountUp(value, 2200, decimals);

  useEffect(() => {
    if (inView) start();
  }, [inView]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: staggerDelay(index), ease: [0.16, 1, 0.3, 1] }}
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

// Animated SVG line chart
function LineChart() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const inView = useInView(wrapRef, revealViewport);

  // Monthly revenue data ($ thousands) — growth trend Jan → Dec
  const data = [14.2, 15.8, 15.1, 17.4, 16.9, 19.6, 21.3, 19.0, 23.1, 21.8, 25.4, 24.38];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const W = 760;
  const H = 180;
  const padT = 24;
  const padB = 8;
  const chartH = H - padT - padB;
  const min = Math.min(...data) - 3;
  const max = Math.max(...data) + 3;

  const xOf = (i: number) => (i / (data.length - 1)) * W;
  const yOf = (v: number) => padT + (1 - (v - min) / (max - min)) * chartH;

  const points = data.map((v, i) => ({ x: xOf(i), y: yOf(v) }));

  // Smooth cubic bezier path through all points
  let linePath = `M ${points[0].x.toFixed(2)} ${points[0].y.toFixed(2)}`;
  for (let i = 1; i < points.length; i++) {
    const prev = points[i - 1];
    const curr = points[i];
    const dx = (curr.x - prev.x) * 0.38;
    linePath += ` C ${(prev.x + dx).toFixed(2)} ${prev.y.toFixed(2)}, ${(curr.x - dx).toFixed(2)} ${curr.y.toFixed(2)}, ${curr.x.toFixed(2)} ${curr.y.toFixed(2)}`;
  }

  const areaPath =
    linePath +
    ` L ${points[points.length - 1].x} ${H} L ${points[0].x} ${H} Z`;

  // Horizontal grid lines (3 evenly spaced)
  const gridValues = [min + (max - min) * 0.25, min + (max - min) * 0.5, min + (max - min) * 0.75];

  return (
    <div ref={wrapRef} className="w-full">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        width="100%"
        height="auto"
        className="overflow-visible"
        style={{ display: "block" }}
      >
        <defs>
          <linearGradient id="lineAreaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#00497A" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#00497A" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Horizontal grid lines */}
        {gridValues.map((v, i) => (
          <line
            key={i}
            x1={0}
            y1={yOf(v)}
            x2={W}
            y2={yOf(v)}
            stroke="#DEE8EC"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
        ))}

        {/* Area fill — fades in after line draws */}
        <motion.path
          d={areaPath}
          fill="url(#lineAreaGrad)"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1.0, delay: 0.7 }}
        />

        {/* Animated line — draws left to right */}
        <motion.path
          d={linePath}
          fill="none"
          stroke="#00497A"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : {}}
          transition={{ duration: 1.9, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Data point dots — pop in sequentially */}
        {points.map((p, i) => (
          <motion.circle
            key={i}
            cx={p.x}
            cy={p.y}
            r="5"
            fill="white"
            stroke="#00497A"
            strokeWidth="2.2"
            initial={{ scale: 0, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.35, delay: 1.3 + i * 0.08, ease: "backOut" }}
          />
        ))}

        {/* Highlight last point */}
        <motion.circle
          cx={points[points.length - 1].x}
          cy={points[points.length - 1].y}
          r="7"
          fill="#00497A"
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 2.25, ease: "backOut" }}
        />
      </svg>

      {/* X-axis month labels */}
      <div className="flex justify-between mt-2 px-0">
        {months.map((m) => (
          <span key={m} className="text-[11px] text-[#9aabb5] w-[63px] text-center">
            {m}
          </span>
        ))}
      </div>
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
          viewport={revealViewport}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#00497A]/10 text-[#00497A] text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-[#00497A]" />
            Business Impact
          </div>
          <h2 className="heading-xl text-4xl tabport:text-[2.7rem] desk:text-5xl text-[#002843] mb-4">
            Turn benefit members into{" "}
            <span className="text-[#00497A]">loyal customers.</span>
          </h2>
          <p className="text-lg tabport:text-[1.35rem] text-[#646F7D] leading-relaxed">
            Retailers who add BPOS see immediate improvements in transaction volume, basket size, and customer loyalty.
          </p>
        </motion.div>

        {/* Metric cards */}
        <div className="grid desk:grid-cols-4 gap-6 mb-16">
          {metrics.map((m, i) => (
            <MetricCard key={m.label} {...m} index={i} />
          ))}
        </div>

        {/* Revenue chart card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={revealViewport}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-3xl border border-[#DEE8EC] p-8 shadow-sm"
        >
          <div className="flex flex-col desk:flex-row desk:items-center justify-between gap-6 mb-8">
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
          <LineChart />
        </motion.div>
      </div>
    </section>
  );
}
