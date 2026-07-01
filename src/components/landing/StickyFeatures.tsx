"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

// ─── Scale constant (Figma 360px → PhoneFrame 218px, 20% smaller) ────────
const SCALE = 218 / 360;

// ─── Shared: Phone Frame ──────────────────────────────────────────────────
function PhoneFrame({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`relative bg-white rounded-[24px] shadow-[0_32px_80px_-12px_rgba(0,0,0,0.18)] overflow-hidden border border-gray-100/80 ${className}`}
      style={{ width: 218, height: 462 }}
    >
      {children}
    </div>
  );
}

// ─── Shared: Scale wrapper ─────────────────────────────────────────────────
function FigmaScaled({ children }: { children: React.ReactNode }) {
  return (
    <PhoneFrame>
      <div style={{ position: "absolute", top: 0, left: 0, width: 360, height: 760, transform: `scale(${SCALE})`, transformOrigin: "top left" }}>
        {children}
      </div>
    </PhoneFrame>
  );
}

// ─── Shared: Status Bar (pure CSS/SVG) ────────────────────────────────────
function StatusBar() {
  return (
    <div className="bg-white flex h-[40px] items-center justify-between px-[16px] shrink-0 w-[360px]">
      <p className="text-[13px] text-black font-medium" style={{ fontFamily: "Roboto, sans-serif" }}>16:17</p>
      <div className="flex items-center gap-[5px]">
        {/* WiFi */}
        <svg width="17" height="14" viewBox="0 0 17 14" fill="black">
          <path d="M8.5 11.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm0-3.5c1.6 0 3 .65 4.05 1.7l1.4-1.4A8.24 8.24 0 0 0 8.5 6a8.24 8.24 0 0 0-5.45 2.3l1.4 1.4A5.77 5.77 0 0 1 8.5 8zm0-4C11 4 13.3 5 15 6.7l1.4-1.4A10.7 10.7 0 0 0 8.5 2 10.7 10.7 0 0 0 1.6 5.3L3 6.7A9.2 9.2 0 0 1 8.5 4z"/>
        </svg>
        {/* Cellular */}
        <svg width="16" height="14" viewBox="0 0 16 14" fill="black">
          <rect x="0"  y="9"  width="3" height="5" rx="0.5"/>
          <rect x="4"  y="6"  width="3" height="8" rx="0.5"/>
          <rect x="8"  y="3"  width="3" height="11" rx="0.5"/>
          <rect x="12" y="0"  width="3" height="14" rx="0.5" opacity="0.3"/>
        </svg>
        {/* Battery */}
        <svg width="22" height="12" viewBox="0 0 22 12" fill="black">
          <rect x="0.5" y="0.5" width="18" height="11" rx="2.5" stroke="black" strokeWidth="1.2" fill="none" opacity="0.35"/>
          <rect x="2" y="2" width="14" height="8" rx="1.5"/>
          <rect x="19.5" y="3.5" width="2" height="5" rx="1"/>
        </svg>
      </div>
    </div>
  );
}

// ─── Shared: NB Debit Card (exact Figma art baked as image; live balance text) ─
function NBCard({ label = "Current Available Balance" }: { label?: string }) {
  return (
    <div style={{
      position: "relative", width: "100%", aspectRatio: "328 / 190", borderRadius: 16,
      overflow: "hidden",
    }}>
      {/* Exact card artwork (incl. masked number + n logo) exported from Figma */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/nb-card.png" alt="" aria-hidden
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
      {/* Live balance text — overlays the Figma placeholder (Title / $00.00) */}
      <div style={{ position: "absolute", top: 16, left: 16, right: 16 }}>
        <p style={{ color: "#fff", fontSize: 14, lineHeight: "16px", letterSpacing: "0.2px", margin: 0, fontFamily: "'Proxima Nova', sans-serif" }}>
          {label}
        </p>
        <p style={{ color: "#fff", fontWeight: 700, fontSize: 28, lineHeight: "normal", letterSpacing: "0.3px", margin: "4px 0 0", whiteSpace: "nowrap", fontFamily: "'Proxima Nova', sans-serif" }}>
          $200.00
        </p>
      </div>
    </div>
  );
}

// ─── Shared: Spinner Ring (CSS/SVG — used by screens 1, 5, 6) ─────────────
function SpinnerRing({ spinning = false, showCheck = false }: { spinning?: boolean; showCheck?: boolean }) {
  if (spinning) {
    return (
      <div style={{ position: "relative", width: 196, height: 196 }}>
        <div
          className="animate-spin"
          style={{ position: "absolute", inset: 0, transformOrigin: "center", animationDuration: "1.6s" }}
        >
          <svg viewBox="0 0 196 196" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
            <circle cx="98" cy="98" r="88" fill="none" stroke="#e8f0f5" strokeWidth="10" />
            <circle cx="98" cy="98" r="88" fill="none" stroke="#00A99D" strokeWidth="10"
              strokeDasharray="165 388" strokeLinecap="round" transform="rotate(-90 98 98)" />
            <circle cx="186" cy="98" r="7" fill="#3b82f6" />
          </svg>
        </div>
      </div>
    );
  }

  if (showCheck) {
    return (
      <div style={{ position: "relative", width: 196, height: 196 }}>
        <svg viewBox="0 0 196 196" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
          {/* Track */}
          <circle cx="98" cy="98" r="88" fill="none" stroke="#e8f0f5" strokeWidth="10" />
          {/* Ring draws in */}
          <motion.circle
            cx="98" cy="98" r="88"
            fill="none" stroke="#10b981" strokeWidth="10" strokeLinecap="round"
            transform="rotate(-90 98 98)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          />
          {/* Checkmark draws in after ring */}
          <motion.path
            d="M62 98 L87 123 L134 76"
            stroke="#10b981" strokeWidth="9" fill="none"
            strokeLinecap="round" strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.38, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          />
        </svg>
      </div>
    );
  }

  return null;
}

// ─── Shared: Benefits Mastercard Prepaid Card (mini, CSS recreation) ──────
function PrepaidCardMini() {
  return (
    <div style={{
      position: "relative", width: 150, height: 95, borderRadius: 8,
      background: "white", overflow: "hidden", boxShadow: "0 6px 16px rgba(0,0,0,0.22)",
    }}>
      {/* faint wavy line pattern */}
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
        viewBox="0 0 150 95" preserveAspectRatio="none" fill="none" stroke="#E7ECEF" strokeWidth="0.8">
        <path d="M-10 38 C 28 22, 64 54, 100 34 S 166 30, 196 46" />
        <path d="M-10 50 C 28 34, 64 66, 100 46 S 166 42, 196 58" />
        <path d="M-10 62 C 28 46, 64 78, 100 58 S 166 54, 196 70" />
        <path d="M-10 74 C 28 58, 64 90, 100 70 S 166 66, 196 82" />
      </svg>
      <div style={{ position: "relative", height: "100%", padding: 9, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        {/* top: LOGO + nations benefits */}
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 3, color: "#9AA6AE" }}>
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
              <rect x="0.5" y="0.5" width="10" height="10" rx="1.5" stroke="#C5CDD3" />
              <path d="M3 8L6 3M5 8L8 3" stroke="#C5CDD3" strokeWidth="1" />
            </svg>
            <span style={{ fontSize: 7, fontWeight: 500, letterSpacing: "0.04em" }}>LOGO</span>
          </div>
          <div style={{ textAlign: "right", lineHeight: 0.95, color: "#1B2A36" }}>
            <div style={{ fontSize: 7, fontWeight: 300 }}>nations</div>
            <div style={{ fontSize: 7, fontWeight: 700 }}>benefits</div>
          </div>
        </div>
        {/* debit */}
        <div style={{ textAlign: "right", fontSize: 7, fontWeight: 500, color: "#5B6770" }}>debit</div>
        {/* bottom: label + mastercard */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
          <div style={{ color: "#1B2A36" }}>
            <div style={{ fontSize: 6.5, fontWeight: 600, lineHeight: 1.15 }}>[Benefits Mastercard&reg;<br />Prepaid Card]</div>
            <div style={{ fontSize: 5.5, color: "#7A858D", marginTop: 2 }}>Limited Use Card</div>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <span style={{ width: 15, height: 15, borderRadius: "50%", background: "#EB001B" }} />
            <span style={{ width: 15, height: 15, borderRadius: "50%", background: "#F79E1B", marginLeft: -6, mixBlendMode: "multiply" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Screen 0: Verification Methods ───────────────────────────────────────
function VerificationMethodsScreen() {
  const methods = [
    {
      label: "Enter PAN",
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#15293B" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="11" width="32" height="20" rx="3" />
          <rect x="8" y="16" width="6" height="4.5" rx="1" fill="#15293B" stroke="none" />
          <path d="M8 26h4M15 26h4M22 26h4M29 26h3" />
        </svg>
      ),
    },
    {
      label: "Scan QR",
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="#15293B">
          <path fillRule="evenodd" d="M5 5h13v13H5V5Zm3 3v7h7V8H8Z" />
          <rect x="10" y="10" width="3" height="3" />
          <path fillRule="evenodd" d="M22 5h13v13H22V5Zm3 3v7h7V8h-7Z" />
          <rect x="27" y="10" width="3" height="3" />
          <path fillRule="evenodd" d="M5 22h13v13H5V22Zm3 3v7h7v-7H8Z" />
          <rect x="10" y="27" width="3" height="3" />
          <rect x="22" y="22" width="4" height="4" />
          <rect x="31" y="22" width="4" height="4" />
          <rect x="26.5" y="26.5" width="4" height="4" />
          <rect x="22" y="31" width="4" height="4" />
          <rect x="31" y="31" width="4" height="4" />
        </svg>
      ),
    },
    {
      label: "Enter PAN",
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#15293B" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
          {/* scan corner brackets */}
          <path d="M5 11V7a2 2 0 0 1 2-2h4" />
          <path d="M29 5h4a2 2 0 0 1 2 2v4" />
          <path d="M35 29v4a2 2 0 0 1-2 2h-4" />
          <path d="M11 35H7a2 2 0 0 1-2-2v-4" />
          {/* inner card */}
          <rect x="11" y="14" width="18" height="12" rx="2" />
          <rect x="14" y="17" width="4" height="3" rx="0.7" fill="#15293B" stroke="none" />
          <path d="M14 22.5h3M19 22.5h3M24 22.5h2" />
        </svg>
      ),
    },
  ];
  return (
    <FigmaScaled>
      <div style={{ display: "flex", flexDirection: "column", width: 360, height: 760, background: "white" }}>
        <StatusBar />
        {/* Close button top-right */}
        <div style={{ display: "flex", justifyContent: "flex-end", padding: "6px 16px 0" }}>
          <div style={{ background: "#E8F0F5", borderRadius: "50%", width: 44, height: 44, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M2 2l14 14M16 2L2 16" stroke="#15293B" strokeWidth="2.2" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
        {/* Navy circle with prepaid card */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: 30 }}>
          <div style={{ width: 226, height: 226, borderRadius: "50%", background: "#0A2A45", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <PrepaidCardMini />
          </div>
        </div>
        {/* Title */}
        <p style={{ fontFamily: "'Proxima Nova', sans-serif", fontWeight: 700, fontSize: 30, color: "#15293B", textAlign: "center", margin: "34px 0 0" }}>
          Verification Methods
        </p>
        {/* Methods */}
        <div style={{ display: "flex", gap: 14, padding: "34px 16px 0" }}>
          {methods.map(({ label, icon }, i) => (
            <div key={i} style={{
              flex: 1, display: "flex", flexDirection: "column", alignItems: "center",
              gap: 12, background: "#F8FAFB", borderRadius: 16, padding: "24px 6px",
              boxShadow: "0 3px 12px rgba(15,41,59,0.05)",
            }}>
              {icon}
              <p style={{ fontFamily: "'Proxima Nova', sans-serif", fontSize: 15, color: "#15293B", margin: 0 }}>{label}</p>
            </div>
          ))}
        </div>
      </div>
    </FigmaScaled>
  );
}

// ─── Screen 1: Card Verified ──────────────────────────────────────────────
function VerifiedScreen() {
  const [phase, setPhase] = useState<"loading" | "verified">("loading");
  useEffect(() => {
    const t = setTimeout(() => setPhase("verified"), 1400);
    return () => clearTimeout(t);
  }, []);
  return (
    <FigmaScaled>
      <div style={{ display: "flex", flexDirection: "column", width: 360, height: 760, background: "white" }}>
        <StatusBar />
        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 48 }}>
          <AnimatePresence mode="wait" initial={false}>
            {phase === "loading" ? (
              <motion.div key="spinner"
                initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }} transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}>
                <SpinnerRing spinning />
              </motion.div>
            ) : (
              <motion.div key="check"
                initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}>
                <SpinnerRing showCheck />
              </motion.div>
            )}
          </AnimatePresence>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "center", padding: "0 16px", width: "100%" }}>
            <AnimatePresence mode="wait" initial={false}>
              <motion.p key={phase}
                initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.22, ease: "easeOut" }}
                style={{ fontFamily: "'Proxima Nova', sans-serif", fontWeight: 700, fontSize: 32, color: "#222b2f", margin: 0, textAlign: "center" }}>
                {phase === "loading" ? "Verifying..." : "Verified"}
              </motion.p>
            </AnimatePresence>
            <p style={{ fontFamily: "'Proxima Nova', sans-serif", fontSize: 20, color: "#222b2f", margin: 0, textAlign: "center" }}>Please wait...</p>
          </div>
        </div>
      </div>
    </FigmaScaled>
  );
}

// ─── Screen 2: Balance Inquiry ─────────────────────────────────────────────
function BalanceScreen() {
  const balances = [
    { label: "Grocery Balance",  amount: "$50.04", sub: "Balance available for food items" },
    { label: "OTC Balance",      amount: "$30.35", sub: "Balance available for OTC Products" },
    { label: "Other Balances",   amount: "$25.00", sub: "Balance can be used for Grocery & OTC!" },
    { label: "Rewards",          amount: "$15.00", sub: "Reward points balance" },
  ];
  return (
    <FigmaScaled>
      <div style={{ display: "flex", flexDirection: "column", width: 360, height: 760, background: "white" }}>
        <StatusBar />
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            {/* Green checkmark */}
            <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#10b981", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 7l3 3 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p style={{ fontFamily: "'Proxima Nova', sans-serif", fontWeight: 700, fontSize: 22, color: "#222b2f", margin: 0 }}>Balance Inquiry</p>
          </div>
          {/* Close X */}
          <div style={{ background: "#eef4f6", borderRadius: "50%", width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M1 1l10 10M11 1L1 11" stroke="#646f7d" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
        {/* NB Card */}
        <div style={{ padding: "0 16px 12px" }}>
          <NBCard />
        </div>
        {/* Balance rows */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
          {balances.map((b, i) => (
            <motion.div key={b.label}
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.09, ease: [0.16, 1, 0.3, 1] }}
              style={{ padding: "10px 16px", borderBottom: "1px solid #dee8ec" }}>
              <p style={{ fontFamily: "'Proxima Nova', sans-serif", fontWeight: 600, fontSize: 16, color: "#222b2f", margin: 0 }}>{b.label}</p>
              <p style={{ fontFamily: "'Proxima Nova', sans-serif", fontWeight: 700, fontSize: 22, color: "#002843", margin: "2px 0" }}>{b.amount}</p>
              <p style={{ fontFamily: "'Proxima Nova', sans-serif", fontSize: 13, color: "#646f7d", margin: 0 }}>{b.sub}</p>
            </motion.div>
          ))}
        </div>
        {/* Footer */}
        <div style={{ display: "flex", gap: 12, padding: "12px 16px", boxShadow: "0 -2px 8px rgba(45,45,46,0.12)" }}>
          <button style={{ flex: 1, height: 44, border: "1.5px solid #dee8ec", borderRadius: 8, background: "white", display: "flex", alignItems: "center", justifyContent: "center", gap: 6, cursor: "pointer" }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <rect x="2" y="6" width="12" height="8" rx="1.5" stroke="#00497a" strokeWidth="1.5" fill="none"/>
              <path d="M4 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" stroke="#00497a" strokeWidth="1.5" fill="none"/>
              <rect x="5" y="10" width="6" height="2" rx="0.5" fill="#00497a"/>
            </svg>
            <span style={{ fontFamily: "'Proxima Nova', sans-serif", fontWeight: 600, fontSize: 16, color: "#00497a" }}>Print</span>
          </button>
          <button style={{ flex: 1, height: 44, borderRadius: 8, background: "#002843", border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
            <span style={{ fontFamily: "'Proxima Nova', sans-serif", fontWeight: 600, fontSize: 16, color: "white" }}>New Sale</span>
          </button>
        </div>
      </div>
    </FigmaScaled>
  );
}

// ─── Screen 3: New Sale ────────────────────────────────────────────────────
function NewSaleScreen() {
  const items = [
    { name: "Naproxen Sodium, 220 mg",      price: "$8.00",  barcode: "12345678" },
    { name: "Acetaminophen Plus Aspirin...", price: "$15.00", barcode: "12345678" },
    { name: "Tylenol Extra Strength...",     price: "$12.00", barcode: "12345678" },
    { name: "Advil Liqui-Gels, 200 mg",     price: "$10.00", barcode: "12345678" },
    { name: "Ibuprofen Famotidine",          price: "$5.00",  barcode: "12345678" },
  ];
  return (
    <FigmaScaled>
      <div style={{ display: "flex", flexDirection: "column", width: 360, height: 760, background: "white" }}>
        <StatusBar />
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 16px" }}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M11 14L6 9l5-5" stroke="#222b2f" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <p style={{ fontFamily: "'Proxima Nova', sans-serif", fontWeight: 700, fontSize: 22, color: "#222b2f", margin: 0 }}>New Sale</p>
        </div>
        {/* Search bar */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, background: "#f0f4f5", margin: "0 16px 8px", padding: "10px 12px", borderRadius: 8 }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="6.5" cy="6.5" r="5" stroke="#9aa5ad" strokeWidth="1.6"/>
            <path d="M11 11l3 3" stroke="#9aa5ad" strokeWidth="1.6" strokeLinecap="round"/>
          </svg>
          <p style={{ fontFamily: "'Proxima Nova', sans-serif", fontSize: 14, color: "#9aa5ad", margin: 0 }}>Enter Barcode Manually</p>
        </div>
        {/* Subtotal */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 16px", borderBottom: "1px solid #dee8ec" }}>
          <p style={{ fontFamily: "'Proxima Nova', sans-serif", fontWeight: 700, fontSize: 17, color: "#222b2f", margin: 0 }}>
            Subtotal <span style={{ fontWeight: 400, fontSize: 14, color: "#646f7d" }}>Items (15)</span>
          </p>
          <p style={{ fontFamily: "'Proxima Nova', sans-serif", fontWeight: 700, fontSize: 20, color: "#222b2f", margin: 0 }}>$76.23</p>
        </div>
        {/* Item list */}
        <div style={{ flex: 1, overflow: "hidden" }}>
          {items.map((item) => (
            <div key={item.name} style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", padding: "10px 16px", borderBottom: "1px solid #f0f4f5" }}>
              <div style={{ flex: 1, minWidth: 0, paddingRight: 8 }}>
                <p style={{ fontFamily: "'Proxima Nova', sans-serif", fontSize: 12, color: "#9aa5ad", margin: 0 }}>{item.barcode}</p>
                <p style={{ fontFamily: "'Proxima Nova', sans-serif", fontWeight: 500, fontSize: 14, color: "#222b2f", margin: "2px 0", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{item.name}</p>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <p style={{ fontFamily: "'Proxima Nova', sans-serif", fontWeight: 700, fontSize: 14, color: "#002843", margin: 0 }}>{item.price}</p>
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <path d="M8.5 1.5l3 3-7 7-3.5.5.5-3.5 7-7z" stroke="#9aa5ad" strokeWidth="1.3" fill="none"/>
                  </svg>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
                <div style={{ border: "1.5px solid #dee8ec", borderRadius: "50%", width: 24, height: 24, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ color: "#646f7d", fontSize: 14, lineHeight: 1 }}>&#8722;</span>
                </div>
                <span style={{ fontFamily: "'Proxima Nova', sans-serif", fontSize: 14, fontWeight: 500, width: 16, textAlign: "center", color: "#222b2f" }}>1</span>
                <div style={{ background: "#002843", borderRadius: "50%", width: 24, height: 24, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ color: "white", fontSize: 14, lineHeight: 1 }}>+</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* CTA */}
        <div style={{ padding: "12px 16px" }}>
          <button style={{ width: "100%", height: 48, background: "#002843", border: "none", borderRadius: 8, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontFamily: "'Proxima Nova', sans-serif", fontWeight: 600, fontSize: 16, color: "white" }}>Confirm Sale</span>
          </button>
        </div>
      </div>
    </FigmaScaled>
  );
}

// ─── Screen 4: Coverage Verified ──────────────────────────────────────────
function CoverageVerifiedScreen() {
  return (
    <FigmaScaled>
      <div style={{ display: "flex", flexDirection: "column", width: 360, height: 760, background: "white" }}>
        <StatusBar />
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#10b981", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 7l3 3 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p style={{ fontFamily: "'Proxima Nova', sans-serif", fontWeight: 700, fontSize: 20, color: "#222b2f", margin: 0 }}>Coverage Verified</p>
          </div>
          <button style={{ display: "flex", alignItems: "center", gap: 4, background: "none", border: "none", cursor: "pointer" }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M9 1.5l3 3-7 7-3.5.5.5-3.5 7-7z" stroke="#00497a" strokeWidth="1.4" fill="none"/>
            </svg>
            <span style={{ fontFamily: "'Proxima Nova', sans-serif", fontWeight: 600, fontSize: 14, color: "#00497a", textDecoration: "underline" }}>Edit</span>
          </button>
        </div>
        {/* Total row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", padding: "0 16px 10px" }}>
          <div>
            <p style={{ fontFamily: "'Proxima Nova', sans-serif", fontWeight: 600, fontSize: 16, color: "#00497a", margin: 0 }}>Total Sale</p>
            <p style={{ fontFamily: "'Proxima Nova', sans-serif", fontWeight: 400, fontSize: 13, color: "#222b2f", margin: "2px 0 0" }}>Items (15)</p>
          </div>
          <p style={{ fontFamily: "'Proxima Nova', sans-serif", fontWeight: 700, fontSize: 22, color: "#222b2f", margin: 0 }}>$162.07</p>
        </div>
        {/* NB Card */}
        <div style={{ padding: "0 16px 12px" }}>
          <NBCard label="Current Balance" />
        </div>
        {/* Approved section */}
        <div style={{ flex: 1, overflow: "hidden" }}>
          <div style={{ background: "#f8fafb", padding: "8px 16px" }}>
            <p style={{ fontFamily: "'Proxima Nova', sans-serif", fontWeight: 400, fontSize: 14, color: "#222b2f", margin: 0 }}>Approved (6)</p>
          </div>
          <div style={{ padding: "0 16px" }}>
            {[
              { name: "Tylenol Extra Strength, 500 mg", price: "$10.00", foot: "Full Approved Amount" },
              { name: "Tylenol Extra Strength, 500 mg", price: "$10.00", foot: "Full Approved Amount" },
              { name: "Advil Liqui-Gels, 200 mg",       price: "$4.80",  foot: "Full Amount Deductible" },
              { name: "Tylenol substitute adults",      price: "$12.00", foot: "Full Approved Amount" },
            ].map((item, i) => (
              <div key={`${item.name}-${i}`} style={{ padding: "12px 0", borderBottom: "1px solid #eef0f1" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <p style={{ fontFamily: "'Proxima Nova', sans-serif", fontWeight: 600, fontSize: 14, color: "#222b2f", margin: 0 }}>{item.name}</p>
                  <p style={{ fontFamily: "'Proxima Nova', sans-serif", fontWeight: 700, fontSize: 14, color: "#00497a", margin: 0 }}>{item.price}</p>
                </div>
                <p style={{ fontFamily: "'Proxima Nova', sans-serif", fontSize: 12, color: "#646f7d", margin: "4px 0 0" }}>1 COUNT</p>
                <p style={{ fontFamily: "'Proxima Nova', sans-serif", fontSize: 12, color: "#646f7d", margin: "4px 0 0" }}>{item.foot}</p>
              </div>
            ))}
          </div>
        </div>
        {/* CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 16px", borderTop: "1px solid #eef0f1" }}>
          <button style={{ width: 48, height: 48, borderRadius: "50%", background: "white", border: "1.5px solid #00497a", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 2l10 10M12 2L2 12" stroke="#00497a" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
          <button style={{ flex: 1, height: 48, background: "#00497a", border: "none", borderRadius: 8, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontFamily: "'Proxima Nova', sans-serif", fontWeight: 600, fontSize: 16, color: "white" }}>Confirm Sale</span>
          </button>
        </div>
      </div>
    </FigmaScaled>
  );
}

// ─── Screen 5: Analyzing Basket ────────────────────────────────────────────
function AnalyzingScreen() {
  return (
    <FigmaScaled>
      <div style={{ display: "flex", flexDirection: "column", width: 360, height: 760, background: "white" }}>
        <StatusBar />
        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 48 }}>
          <SpinnerRing spinning />
          <p style={{ fontFamily: "'Proxima Nova', sans-serif", fontWeight: 700, fontSize: 32, color: "#222b2f", margin: 0, textAlign: "center" }}>
            Analyzing Basket..
          </p>
        </div>
      </div>
    </FigmaScaled>
  );
}

// ─── Screen 6: Approved ────────────────────────────────────────────────────
function ApprovedScreen() {
  return (
    <FigmaScaled>
      <div style={{ display: "flex", flexDirection: "column", width: 360, height: 760, background: "white" }}>
        <StatusBar />
        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 48 }}>
          <SpinnerRing showCheck />
          <div style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "center", padding: "0 16px" }}>
            <p style={{ fontFamily: "'Proxima Nova', sans-serif", fontWeight: 700, fontSize: 32, color: "#222b2f", margin: 0, textAlign: "center" }}>Approved</p>
            <p style={{ fontFamily: "'Proxima Nova', sans-serif", fontSize: 20, color: "#222b2f", margin: 0, textAlign: "center" }}>Please wait...</p>
          </div>
        </div>
      </div>
    </FigmaScaled>
  );
}

// ─── Screen 7: Transaction Successful ─────────────────────────────────────
function TransactionSuccessScreen() {
  const rows = [
    { label: "Card Last 4",          value: "*1234" },
    { label: "Authorized Amount",    value: "$56.07" },
    { label: "Tax Collected",        value: "$6.07" },
    { label: "Out-of-Pocket Amount", value: "$63.62", hasInfo: true },
  ];
  return (
    <FigmaScaled>
      <div style={{ display: "flex", flexDirection: "column", width: 360, height: 760, background: "white" }}>
        <StatusBar />
        {/* Close button top-right */}
        <div style={{ display: "flex", justifyContent: "flex-end", padding: "4px 16px 0" }}>
          <div style={{ background: "#f8fafb", padding: 4, borderRadius: 24, display: "flex" }}>
            <div style={{ background: "#e8f3f7", borderRadius: "50%", width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                <path d="M1 1l9 9M10 1L1 10" stroke="#646f7d" strokeWidth="1.7" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
        </div>
        {/* Content */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", padding: "16px 16px 0", gap: 12 }}>
          {/* Success icon — scales in on mount */}
          <motion.div
            initial={{ scale: 0.4, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{ background: "#ecf3ed", borderRadius: 72, width: 88, height: 88, display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            <div style={{ background: "#0a9773", borderRadius: 56, width: 64, height: 64, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <motion.svg
                width="28" height="28" viewBox="0 0 28 28" fill="none"
              >
                <motion.path
                  d="M5 14l6.5 6.5L23 8"
                  stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                />
              </motion.svg>
            </div>
          </motion.div>
          <p style={{ fontFamily: "'Proxima Nova', sans-serif", fontWeight: 600, fontSize: 20, color: "#222b2f", margin: 0, textAlign: "center" }}>Transaction Successful</p>
          <p style={{ fontFamily: "'Proxima Nova', sans-serif", fontWeight: 600, fontSize: 40, color: "#222b2f", margin: 0, textAlign: "center" }}>$162.07</p>
          <p style={{ fontFamily: "'Proxima Nova', sans-serif", fontSize: 14, color: "#646f7d", margin: 0, textAlign: "center" }}>Processed via card ****1234</p>
          {/* Receipt table */}
          <div style={{ background: "#f8fafb", borderRadius: 8, width: 328, display: "flex", flexDirection: "column" }}>
            {rows.map((row, i) => (
              <div key={row.label} style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "10px 16px",
                borderBottom: i < rows.length - 1 ? "1px solid #dee8ec" : "none",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                  <p style={{ fontFamily: "'Proxima Nova', sans-serif", fontSize: 14, color: "#222b2f", margin: 0 }}>{row.label}</p>
                  {row.hasInfo && (
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                      <circle cx="7.5" cy="7.5" r="6.5" stroke="#9aa5ad" strokeWidth="1.2"/>
                      <line x1="7.5" y1="5.5" x2="7.5" y2="10.5" stroke="#9aa5ad" strokeWidth="1.2" strokeLinecap="round"/>
                      <circle cx="7.5" cy="3.8" r="0.9" fill="#9aa5ad"/>
                    </svg>
                  )}
                </div>
                <p style={{ fontFamily: "'Proxima Nova', sans-serif", fontWeight: 600, fontSize: 14, color: "#222b2f", margin: 0 }}>{row.value}</p>
              </div>
            ))}
            {/* View receipt link */}
            <div style={{ display: "flex", alignItems: "center", padding: "12px 16px" }}>
              <p style={{ fontFamily: "'Proxima Nova', sans-serif", fontWeight: 600, fontSize: 14, color: "#00497a", margin: 0, textDecoration: "underline" }}>View Receipt</p>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ marginLeft: 4 }}>
                <path d="M4 7h7M8 4l3 3-3 3" stroke="#00497a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
        {/* Share button */}
        <div style={{ padding: "12px 16px" }}>
          <button style={{ width: "100%", height: 40, background: "#00497a", border: "none", borderRadius: 8, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontFamily: "'Proxima Nova', sans-serif", fontWeight: 600, fontSize: 16, color: "white" }}>Share</span>
          </button>
        </div>
      </div>
    </FigmaScaled>
  );
}

// ─── Data ──────────────────────────────────────────────────────────────────
const SCREENS = [
  VerificationMethodsScreen,
  VerifiedScreen,
  BalanceScreen,
  NewSaleScreen,
  CoverageVerifiedScreen,
  AnalyzingScreen,
  ApprovedScreen,
  TransactionSuccessScreen,
];

// Screens grouped by section
const SECTION_SCREENS = [
  [0, 1, 2],  // Section 01: Member Verification
  [3, 4],     // Section 02: Smart Basket
  [5, 6, 7],  // Section 03: Smart Checkout
];

// Dot labels per screen (shown under the progress dots)
const SCREEN_LABELS = [
  "Verification", "Verifying", "Balance",
  "Scanning Items", "Coverage Check",
  "Processing", "Approved", "Complete",
];

// Auto-cycle duration per screen (ms), indexed by global screen index.
// Loading/animated screens keep ~2.8s so their internal motion can play out;
// static info screens are shorter so they don't feel like they're stuck.
const SCREEN_DURATIONS = [
  2400, // 0 Verification Methods (static)
  2800, // 1 Verifying → Verified (spinner + check animation)
  2600, // 2 Balance (static list, staggered reveal)
  2800, // 3 New Sale (static list)
  2800, // 4 Coverage Verified (static list)
  1900, // 5 Analyzing (spinner only)
  2000, // 6 Approved (check animation)
  3000, // 7 Transaction Successful (final summary, more to read)
];

const SECTIONS = [
  {
    eyebrow: "Member Verification",
    title: ["No More Guessing", "What's Covered."],
    description:
      "BPOS instantly verifies member benefits and tells your cashier exactly what qualifies before checkout begins.",
    features: [
      "Instant member validation",
      "Real-time balance lookup",
      "Coverage verification in seconds",
      "No manual checks required",
    ],
    metrics: [
      { value: "< 100ms", label: "Verification time" },
      { value: "100%", label: "Digital, no paper" },
    ],
    cta: "Verify in seconds →",
    step: "01",
  },
  {
    eyebrow: "Smart Basket Analysis",
    title: ["Know Exactly What Qualifies", "Before Checkout."],
    description:
      "BPOS automatically identifies covered items, separates non-covered products, and reduces cashier errors.",
    features: [
      "Real-time eligibility detection",
      "Automatic covered item identification",
      "Instant basket analysis",
      "Zero manual configuration",
    ],
    metrics: [
      { value: "15 items", label: "Scanned in 92ms" },
      { value: "12 / 3", label: "Covered / Declined" },
    ],
    cta: "See basket intelligence →",
    step: "02",
  },
  {
    eyebrow: "Smart Checkout",
    title: ["Faster Checkouts.", "Happier Customers."],
    description:
      "Automatically apply benefits, calculate remaining balances, and complete transactions in seconds.",
    features: [
      "Automatic benefit application",
      "Split tender support",
      "Instant payment confirmation",
      "Digital receipt delivery",
    ],
    metrics: [
      { value: "$117.07", label: "Benefits applied" },
      { value: "2.3s", label: "Transaction time" },
    ],
    cta: "Complete checkout →",
    step: "03",
  },
];

// ─── Main Component ────────────────────────────────────────────────────────
export default function StickyFeatures() {
  const ref = useRef<HTMLDivElement>(null);
  const [sectionIndex, setSectionIndex] = useState(0);
  const [screenInSection, setScreenInSection] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Scroll only advances sections (01 → 02 → 03)
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const newSection = Math.min(Math.floor(v * SECTIONS.length), SECTIONS.length - 1);
    setSectionIndex(newSection);
  });

  // Restart at the first screen whenever the section changes
  useEffect(() => {
    setScreenInSection(0);
  }, [sectionIndex]);

  // Auto-cycle screens within the active section — each screen waits its own
  // duration, then schedules the next one.
  useEffect(() => {
    const screens = SECTION_SCREENS[sectionIndex];
    const safeIdx = Math.min(screenInSection, screens.length - 1);
    const globalIdx = screens[safeIdx];
    const id = setTimeout(() => {
      setScreenInSection((prev) => (prev + 1) % screens.length);
    }, SCREEN_DURATIONS[globalIdx]);
    return () => clearTimeout(id);
  }, [sectionIndex, screenInSection]);

  // Clamp screenInSection so it never goes out of bounds during section transitions
  const safeScreenInSection = Math.min(screenInSection, SECTION_SCREENS[sectionIndex].length - 1);
  const screenIndex = SECTION_SCREENS[sectionIndex][safeScreenInSection];
  const activeSection = SECTIONS[sectionIndex];
  const ScreenComponent = SCREENS[screenIndex];

  return (
    <div ref={ref} style={{ height: `${SECTIONS.length * 100}svh` }} id="features">
      {/* Sticky viewport */}
      <div className="sticky top-0 h-svh overflow-hidden bg-[#F8FAFB] flex items-stretch">

        {/* Left: section step indicator bar */}
        <div className="hidden desk:flex flex-col justify-center items-center w-16 shrink-0 gap-4 pl-4">
          {SECTIONS.map((s, i) => (
            <button
              key={s.step}
              onClick={() => {
                const el = ref.current;
                if (el) {
                  const startFrac = i / SECTIONS.length;
                  const scrollTop = el.offsetTop + startFrac * el.offsetHeight;
                  window.scrollTo({ top: scrollTop, behavior: "smooth" });
                }
              }}
              className="flex flex-col items-center gap-1 group"
            >
              <motion.div
                animate={{
                  width: sectionIndex === i ? 3 : 2,
                  height: sectionIndex === i ? 36 : 20,
                  backgroundColor: sectionIndex === i ? "#00497A" : "#cbd5e1",
                }}
                transition={{ duration: 0.3 }}
                className="rounded-full"
              />
              <span className={`text-[9px] font-bold tracking-widest ${sectionIndex === i ? "text-[#00497A]" : "text-slate-400"}`}>
                {s.step}
              </span>
            </button>
          ))}
        </div>

        {/* Main content */}
        <div className="flex-1 flex items-center justify-center max-w-7xl mx-auto w-full px-6 desk:px-12 py-6 desk:py-20">
          <div className="grid desk:grid-cols-2 gap-5 desk:gap-20 items-center w-full">

            {/* ── Left: Text ── */}
            <div className="flex flex-col gap-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={sectionIndex}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
                  className="flex flex-col gap-6 items-center text-center desk:items-start desk:text-left"
                >
                  {/* Eyebrow */}
                  <div className="inline-flex items-center gap-2 w-fit">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00A99D]" />
                    <span className="text-sm font-semibold text-[#00A99D] tracking-wide uppercase">
                      {activeSection.eyebrow}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-4xl tabport:text-[2.7rem] desk:text-[44px] font-black text-[#002843] leading-[1.12] tracking-tight">
                    {activeSection.title[0]}
                    <br />
                    <span className="text-[#00497A]">{activeSection.title[1]}</span>
                  </h2>

                  {/* Description */}
                  <p className="text-[16px] tabport:text-[1.2rem] text-[#646F7D] leading-relaxed max-w-lg mx-auto desk:mx-0">
                    {activeSection.description}
                  </p>

                  {/* Features */}
                  <ul className="hidden desk:block space-y-2.5">
                    {activeSection.features.map((f) => (
                      <li key={f} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                          <svg className="w-3 h-3 text-emerald-600" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M2 6l2.5 2.5L10 3"/></svg>
                        </div>
                        <span className="text-[14px] text-[#222B2F] font-medium">{f}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Metrics */}
                  <div className="hidden desk:flex gap-6">
                    {activeSection.metrics.map((m) => (
                      <div key={m.label} className="bg-white rounded-2xl px-5 py-3.5 shadow-sm border border-[#DEE8EC]">
                        <div className="text-[22px] font-black text-[#002843]">{m.value}</div>
                        <div className="text-[11px] text-[#646F7D] mt-0.5">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <button className="w-fit text-[14px] font-bold text-[#00497A] hover:text-[#002843] transition-colors hidden desk:flex items-center gap-1">
                    {activeSection.cta}
                  </button>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* ── Right: Phone ── */}
            <div className="flex flex-col items-center justify-center gap-4 zoom-[0.72] tabport:zoom-[1.2] desk:zoom-[1] desk:gap-6">
              {/* Phone */}
              <div className="relative" style={{ width: 218, height: 462 }}>
                {/* Ambient glow */}
                <div className="absolute inset-[-40px] bg-[#00497A]/6 rounded-full blur-3xl pointer-events-none" />

                <AnimatePresence mode="sync" initial={false}>
                  <motion.div
                    key={screenIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    style={{ position: "absolute", top: 0, left: 0, willChange: "opacity" }}
                  >
                    <ScreenComponent />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Screen progress dots with timing bar */}
              <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-2">
                  {SECTION_SCREENS[sectionIndex].map((globalIdx, dotIdx) => {
                    const isActive = dotIdx === screenInSection;
                    return (
                      <button
                        key={globalIdx}
                        onClick={() => setScreenInSection(dotIdx)}
                        className="relative overflow-hidden rounded-full"
                      >
                        <motion.div
                          animate={{
                            width: isActive ? 28 : 6,
                            backgroundColor: isActive ? "#00497A" : "#cbd5e1",
                          }}
                          className="h-1.5 rounded-full"
                          transition={{ duration: 0.25 }}
                        />
                        {/* Timing progress fill on active dot */}
                        {isActive && (
                          <motion.div
                            key={`${sectionIndex}-${dotIdx}`}
                            className="absolute inset-y-0 left-0 rounded-full bg-[#00A99D]/60"
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: SCREEN_DURATIONS[screenIndex] / 1000, ease: "linear" }}
                          />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Current screen label */}
                <AnimatePresence mode="wait">
                  <motion.p
                    key={screenIndex}
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -8 }}
                    transition={{ duration: 0.25 }}
                    className="text-[11px] font-semibold text-[#646F7D] uppercase tracking-widest"
                  >
                    {SCREEN_LABELS[screenIndex]}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint — shown only when at the very start */}
        {sectionIndex === 0 && screenInSection === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden desk:flex flex-col items-center gap-2 pointer-events-none"
          >
            <span className="text-[10px] text-[#646F7D] uppercase tracking-widest font-medium">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.4, repeat: Infinity }}
              className="w-px h-8 bg-gradient-to-b from-[#00497A]/40 to-transparent"
            />
          </motion.div>
        )}
      </div>
    </div>
  );
}
