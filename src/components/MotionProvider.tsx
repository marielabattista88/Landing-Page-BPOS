"use client";

import { MotionConfig } from "framer-motion";

/**
 * Honors the OS "Reduce motion" setting for every framer-motion component:
 * transform/layout animations are skipped (opacity still fades), so the page
 * stays calm for users who ask for it without us touching each component.
 */
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
