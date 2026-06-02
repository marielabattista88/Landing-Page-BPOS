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
 * Reusable "traveling light" ring field — echoes the hero's animated arcs.
 * The strokes orbit large circles that nod to the looped "b" / "p" of the
 * BPOS logo, so the same circular motif recurs down the page and ties the
 * sections together. Drop in as an absolutely-positioned background layer.
 */
const RINGS = [
  { cx: 250, cy: 420, r: 540, dur: 11, delay: 0 },
  { cx: 1180, cy: 220, r: 430, dur: 14, delay: 1.8 },
  { cx: 980, cy: 760, r: 620, dur: 17, delay: 3.4 },
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
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
      style={{ opacity }}
    >
      <defs>
        {/* Keep the strokes in the outer edges / corners and fade them out
            across the central band where the text and cards live. */}
        <radialGradient id="flowEdgeFade" gradientUnits="userSpaceOnUse" cx="720" cy="400" r="760">
          <stop offset="0%" stopColor="black" />
          <stop offset="62%" stopColor="black" />
          <stop offset="100%" stopColor="white" />
        </radialGradient>
        <mask id="flowEdgeMask">
          <rect x="0" y="0" width="1440" height="800" fill="url(#flowEdgeFade)" />
        </mask>
      </defs>
      <g mask="url(#flowEdgeMask)">
      {RINGS.map((ring, i) => (
        <g key={i}>
          {/* Dim full ring */}
          <circle
            cx={ring.cx}
            cy={ring.cy}
            r={ring.r}
            fill="none"
            stroke={color}
            strokeWidth={1.5}
            strokeOpacity={0.14}
          />
          {/* Bright segment traveling around the ring */}
          <motion.circle
            cx={ring.cx}
            cy={ring.cy}
            r={ring.r}
            fill="none"
            stroke={highlight}
            strokeWidth={2}
            strokeLinecap="round"
            pathLength={1}
            strokeDasharray="0.13 0.87"
            animate={{ strokeDashoffset: [0, -1] }}
            transition={{ duration: ring.dur, repeat: Infinity, ease: "linear", delay: ring.delay }}
            style={{ filter: `drop-shadow(0 0 6px ${highlight})` }}
          />
        </g>
      ))}
      </g>
    </svg>
  );
}
