"use client";

import { motion } from "framer-motion";

type FlowLinesProps = {
  /** Base (dim) stroke color */
  color?: string;
  /** Bright traveling-light color */
  highlight?: string;
  /** Overall opacity of the whole field */
  opacity?: number;
  className?: string;
};

/**
 * Reusable "traveling light" flow field — echoes the hero's animated arcs.
 * Drop into any dark section as an absolutely-positioned background layer.
 * Smooth bezier curves stretch edge-to-edge; a bright dash travels along each,
 * tying the page's sections together with one recurring motion motif.
 */
const PATHS = [
  { d: "M-40,170 C 360,90 760,330 1480,150", dur: 9 },
  { d: "M-40,400 C 460,500 880,250 1480,440", dur: 12, delay: 1.4 },
  { d: "M-40,640 C 320,540 980,760 1480,580", dur: 10.5, delay: 2.6 },
];

export default function FlowLines({
  color = "#58A1FF",
  highlight = "#CDEBFF",
  opacity = 1,
  className = "",
}: FlowLinesProps) {
  return (
    <svg
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      viewBox="0 0 1440 800"
      preserveAspectRatio="none"
      aria-hidden
      style={{ opacity }}
    >
      {PATHS.map((p, i) => (
        <g key={i}>
          {/* Dim base line */}
          <path d={p.d} fill="none" stroke={color} strokeWidth={1.5} strokeOpacity={0.16} />
          {/* Bright traveling segment */}
          <motion.path
            d={p.d}
            fill="none"
            stroke={highlight}
            strokeWidth={2}
            strokeLinecap="round"
            pathLength={1}
            strokeDasharray="0.14 0.86"
            animate={{ strokeDashoffset: [0, -1] }}
            transition={{ duration: p.dur, repeat: Infinity, ease: "linear", delay: p.delay ?? 0 }}
            style={{ filter: `drop-shadow(0 0 6px ${highlight})` }}
          />
        </g>
      ))}
    </svg>
  );
}
