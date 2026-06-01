"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

// ─── Shared: Status Bar ────────────────────────────────────────────────────
function StatusBar({ dark = false }: { dark?: boolean }) {
  const c = dark ? "text-white" : "text-[#1a1a1a]";
  return (
    <div className={`flex justify-between items-center px-5 pt-3 pb-1 ${c}`}>
      <span className="text-[12px] font-semibold">16:17</span>
      <div className="flex items-center gap-1">
        <svg className="w-3.5 h-2.5" viewBox="0 0 18 13" fill="currentColor">
          <path d="M9 2C5.8 2 2.9 3.3 0.8 5.5l1.7 1.7C4 5.6 6.4 4.5 9 4.5s5 1.1 6.5 2.7l1.7-1.7C15.1 3.3 12.2 2 9 2zm0 4c-2 0-3.8.8-5.1 2.1l1.7 1.7C6.5 8.7 7.7 8.2 9 8.2s2.5.5 3.4 1.6l1.7-1.7C12.8 6.8 11 6 9 6zm0 4a2.2 2.2 0 100 4.4A2.2 2.2 0 009 10z" />
        </svg>
        <svg className="w-3 h-3" viewBox="0 0 14 13" fill="currentColor">
          <rect x="0" y="9" width="2.5" height="4" rx="0.5" />
          <rect x="3.8" y="6" width="2.5" height="7" rx="0.5" />
          <rect x="7.6" y="3" width="2.5" height="10" rx="0.5" />
          <rect x="11.4" y="0" width="2.5" height="13" rx="0.5" opacity="0.35" />
        </svg>
        <svg className="w-4.5 h-3" viewBox="0 0 20 13" fill="currentColor">
          <rect x="0.5" y="0.5" width="16" height="12" rx="3" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.4" />
          <rect x="1.5" y="1.5" width="13" height="10" rx="2" />
          <rect x="17" y="4" width="2.5" height="5" rx="1.25" />
        </svg>
      </div>
    </div>
  );
}

// ─── Shared: Phone Frame ───────────────────────────────────────────────────
function PhoneFrame({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`relative bg-white rounded-[38px] shadow-[0_32px_80px_-12px_rgba(0,0,0,0.18)] overflow-hidden border border-gray-100/80 ${className}`}
      style={{ width: 272, height: 578 }}
    >
      {children}
    </div>
  );
}

// ─── Screen 0: Swipe Flex Card ─────────────────────────────────────────────
function SwipeCardScreen() {
  return (
    <PhoneFrame>
      <StatusBar />
      {/* Close */}
      <button className="absolute top-10 right-4 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
        <span className="text-gray-500 text-sm font-bold">×</span>
      </button>
      {/* Hero illustration */}
      <div className="mx-auto mt-6 w-[160px] h-[160px] rounded-full bg-[#002843] flex items-center justify-center overflow-hidden relative">
        {/* Credit card */}
        <div className="absolute -rotate-12 -top-1 left-4 w-[105px] h-[66px] rounded-xl bg-gradient-to-br from-[#e8e8e8] to-[#c8c8c8] shadow-lg border border-white/40">
          <div className="absolute top-3 left-3">
            <div className="w-5 h-3.5 rounded bg-amber-400/80" />
          </div>
          <div className="absolute bottom-2.5 left-3 text-[6px] text-gray-500 font-mono">**** **** **** 0886</div>
        </div>
        {/* Phone/terminal */}
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-3 right-3 w-[58px] h-[80px] rounded-xl bg-[#0a0a0a] shadow-xl border border-white/10 flex flex-col items-center justify-end pb-2"
        >
          <div className="w-8 h-0.5 bg-white/20 rounded mb-1" />
          <div className="text-[5px] text-white/60 font-medium">Swipe Flex Card</div>
        </motion.div>
        {/* Arrow */}
        <motion.div
          animate={{ x: [0, 8, 0] }}
          transition={{ duration: 1.0, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[26px] top-[58px]"
        >
          <svg className="w-4 h-4 text-white" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M3 8h10M9 4l4 4-4 4" />
          </svg>
        </motion.div>
      </div>
      {/* Text */}
      <div className="px-5 mt-5 text-center">
        <h3 className="text-[18px] font-bold text-[#1a1a1a]">Swipe Flex Card</h3>
        <p className="text-[12px] text-gray-500 mt-1.5 leading-[1.5]">
          Swipe the member's Flex Card through the card reader at the top of the Terminal.
        </p>
      </div>
      {/* Other Methods */}
      <div className="px-5 mt-5">
        <p className="text-[12px] font-bold text-[#1a1a1a] mb-3">Other Methods</p>
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: "Enter PAN", icon: "💳" },
            { label: "Scan QR", icon: "⬛" },
            { label: "Scan Card", icon: "📷" },
          ].map(({ label, icon }) => (
            <div key={label} className="border border-gray-200 rounded-xl p-2.5 flex flex-col items-center gap-1.5">
              <span className="text-lg">{icon}</span>
              <span className="text-[10px] text-gray-600 text-center">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </PhoneFrame>
  );
}

// ─── Screen 1: Verified ────────────────────────────────────────────────────
function VerifiedScreen() {
  const r = 68; const circ = 2 * Math.PI * r;
  return (
    <PhoneFrame>
      <StatusBar />
      <div className="flex flex-col items-center justify-center h-[500px]">
        <div className="relative w-[172px] h-[172px]">
          <svg width="172" height="172" className="absolute inset-0">
            <circle cx="86" cy="86" r={r} fill="none" stroke="#e5e7eb" strokeWidth="7" />
            <motion.circle
              cx="86" cy="86" r={r} fill="none" stroke="#10b981" strokeWidth="7"
              strokeDasharray={circ} strokeDashoffset={circ}
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              transform="rotate(-90 86 86)" strokeLinecap="round"
            />
            {/* Small blue progress dot */}
            <circle cx={86 + r} cy="86" r="4" fill="#3b82f6" opacity="0.8" />
          </svg>
          {/* Checkmark */}
          <motion.svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 172 172"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.4, type: "spring" }}
          >
            <path d="M56 86l20 20 40-40" stroke="#10b981" strokeWidth="7" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </motion.svg>
        </div>
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-[22px] font-bold text-[#1a1a1a] mt-6"
        >
          Verified
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
          className="text-[13px] text-gray-400 mt-2"
        >
          Please wait...
        </motion.p>
      </div>
    </PhoneFrame>
  );
}

// ─── Screen 2: Balance Inquiry ─────────────────────────────────────────────
function BalanceScreen() {
  const balances = [
    { label: "Grocery Balance", amount: "$50.04", sub: "Balance available for food items" },
    { label: "OTC Balance", amount: "$30.35", sub: "Balance available for OTC Products" },
    { label: "Other Balances", amount: "$25.00", sub: "Balance can be used for Grocery & OTC!" },
    { label: "Rewards", amount: "$15.00", sub: "Reward points balance" },
  ];
  return (
    <PhoneFrame>
      <StatusBar />
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center">
            <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 6l2.5 2.5L10 3" strokeLinecap="round"/></svg>
          </div>
          <span className="text-[14px] font-bold text-[#1a1a1a]">Balance Inquiry</span>
        </div>
        <button className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 text-sm">×</button>
      </div>
      {/* Balance card */}
      <div className="mx-4 rounded-2xl bg-[#002843] p-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/5 -translate-y-8 translate-x-8" />
        <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-[#00A99D]/10 translate-y-8 -translate-x-8" />
        <div className="flex justify-between items-start relative z-10">
          <div>
            <p className="text-[10px] text-white/60">Current Available Balance</p>
            <p className="text-[24px] font-bold text-white mt-0.5">$200.00</p>
          </div>
          <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
            <span className="text-white text-[11px] font-bold">n</span>
          </div>
        </div>
        <p className="text-[10px] text-white/40 mt-3 relative z-10 font-mono">**** **** **** 0886</p>
      </div>
      {/* Balance rows */}
      <div className="px-4 mt-3 space-y-0 overflow-y-auto" style={{ maxHeight: 230 }}>
        {balances.map((b, i) => (
          <motion.div
            key={b.label}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * i, duration: 0.3 }}
            className="py-2.5 border-b border-gray-100 last:border-0"
          >
            <div className="flex justify-between items-baseline">
              <span className="text-[12px] font-semibold text-[#1a1a1a]">{b.label}</span>
              <span className="text-[13px] font-bold text-[#002843]">{b.amount}</span>
            </div>
            <p className="text-[10px] text-gray-400 mt-0.5">{b.sub}</p>
          </motion.div>
        ))}
      </div>
      {/* Buttons */}
      <div className="absolute bottom-0 left-0 right-0 flex gap-2 px-4 pb-4 pt-3 bg-white border-t border-gray-100">
        <button className="flex-1 border border-gray-200 rounded-xl py-2.5 text-[12px] font-semibold text-[#1a1a1a]">🖨 Print</button>
        <button className="flex-1 bg-[#002843] rounded-xl py-2.5 text-[12px] font-semibold text-white">New Sale</button>
      </div>
    </PhoneFrame>
  );
}

// ─── Screen 3: New Sale ────────────────────────────────────────────────────
function NewSaleScreen() {
  const items = [
    { barcode: "12345678", name: "Naproxen Sodium, 220 mg", price: "$8.00" },
    { barcode: "12345678", name: "Acetaminophen Plus Aspir...", price: "$15.00" },
    { barcode: "12345678", name: "Tylenol Extra Strength, 50...", price: "$12.00" },
    { barcode: "12345678", name: "Advil Liqui-Gels, 200 mg", price: "$10.00" },
    { barcode: "12345678", name: "Ibuprofen Famotidine", price: "$5.00" },
  ];
  return (
    <PhoneFrame>
      <StatusBar />
      {/* Header */}
      <div className="flex items-center gap-2 px-4 py-2">
        <svg className="w-4 h-4 text-[#1a1a1a]" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M10 13L5 8l5-5"/></svg>
        <span className="text-[15px] font-bold text-[#1a1a1a]">New Sale</span>
      </div>
      {/* Search */}
      <div className="mx-4 mb-2 flex items-center gap-2 bg-gray-100 rounded-xl px-3 py-2">
        <svg className="w-3.5 h-3.5 text-gray-400 shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="7" cy="7" r="4.5"/><path d="M10.5 10.5l2.5 2.5" strokeLinecap="round"/></svg>
        <span className="text-[11px] text-gray-400">Enter Barcode Manually</span>
      </div>
      {/* Subtotal */}
      <div className="flex justify-between items-baseline px-4 py-1.5 border-b border-gray-100">
        <div>
          <span className="text-[13px] font-bold text-[#002843]">Subtotal</span>
          <span className="text-[10px] text-gray-400 ml-1.5">Items (15)</span>
        </div>
        <span className="text-[15px] font-bold text-[#1a1a1a]">$76.23</span>
      </div>
      {/* Item list */}
      <div className="overflow-y-hidden">
        {items.map((item, i) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.05 * i }}
            className="px-4 py-2 border-b border-gray-50"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1 min-w-0 pr-2">
                <p className="text-[10px] text-gray-400">{item.barcode}</p>
                <p className="text-[11.5px] font-medium text-[#1a1a1a] truncate">{item.name}</p>
                <p className="text-[12px] font-bold text-[#002843] mt-0.5">{item.price} <span className="text-[10px] font-normal text-gray-400 ml-1">✏</span></p>
              </div>
              <div className="flex items-center gap-1.5 shrink-0 mt-1">
                <button className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 text-[11px]">−</button>
                <span className="text-[11px] font-medium w-4 text-center">1</span>
                <button className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 text-[11px]">+</button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      {/* CTA */}
      <div className="absolute bottom-0 left-0 right-0 px-4 pb-4 pt-2 bg-white border-t border-gray-100">
        <button className="w-full bg-[#002843] text-white rounded-xl py-3 text-[13px] font-semibold">Confirm Sale</button>
      </div>
    </PhoneFrame>
  );
}

// ─── Screen 4: Coverage Verified ──────────────────────────────────────────
function CoverageVerifiedScreen() {
  return (
    <PhoneFrame>
      <StatusBar />
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-1.5">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center">
            <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 6l2.5 2.5L10 3" strokeLinecap="round"/></svg>
          </div>
          <span className="text-[13px] font-bold text-[#1a1a1a]">Coverage Verified</span>
        </div>
        <span className="text-[11px] text-[#002843] font-semibold">✏ Edit</span>
      </div>
      {/* Total */}
      <div className="flex justify-between items-baseline px-4 pb-1.5">
        <div>
          <span className="text-[11px] font-semibold text-[#002843]">Total Sale</span>
          <span className="text-[9px] text-gray-400 ml-1.5">Items (15)</span>
        </div>
        <span className="text-[16px] font-bold text-[#1a1a1a]">$162.07</span>
      </div>
      {/* Balance card */}
      <div className="mx-4 rounded-xl bg-[#002843] p-3 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-white/5 -translate-y-6 translate-x-6" />
        <div className="flex justify-between items-start">
          <div>
            <p className="text-[9px] text-white/60">Current Balance</p>
            <p className="text-[20px] font-bold text-white">$200.00</p>
          </div>
          <div className="w-7 h-7 bg-white/10 rounded-lg flex items-center justify-center">
            <span className="text-white text-[10px] font-bold">n</span>
          </div>
        </div>
        <p className="text-[9px] text-white/40 mt-1.5 font-mono">**** **** **** 0886</p>
      </div>
      {/* Declined */}
      <div className="px-4 mt-2">
        <div className="flex justify-between items-center mb-1.5">
          <span className="text-[11px] font-semibold text-gray-700">Declined (2)</span>
          <span className="text-[10px] text-red-400 font-medium">🗑 Remove All</span>
        </div>
        {[
          { name: "Ibuprofen Famotidine", price: "$7.00" },
          { name: "Naproxen Sodium, 220 mg", price: "$3.00" },
        ].map((item) => (
          <div key={item.name} className="py-1.5 border-b border-gray-100">
            <div className="flex justify-between">
              <span className="text-[11px] font-medium text-[#1a1a1a]">{item.name}</span>
              <span className="text-[11px] font-bold text-red-500">{item.price}</span>
            </div>
            <p className="text-[9px] text-gray-400">1 COUNT</p>
            <p className="text-[9px] text-red-400">Out-of-pocket ⓘ</p>
          </div>
        ))}
        <p className="text-[11px] font-semibold text-gray-700 mt-1.5 mb-1">Partially Covered (2)</p>
        <div className="py-1.5 border-b border-gray-100">
          <div className="flex justify-between">
            <span className="text-[11px] font-medium text-[#1a1a1a]">Bayer® Aspirin, 325 mg</span>
            <span className="text-[11px] font-bold text-[#1a1a1a]">$12.00</span>
          </div>
          <p className="text-[9px] text-gray-400">1 COUNT</p>
        </div>
      </div>
      {/* CTA */}
      <div className="absolute bottom-0 left-0 right-0 px-4 pb-4 pt-2 bg-white border-t border-gray-100">
        <button className="w-full bg-[#002843] text-white rounded-xl py-3 text-[12px] font-semibold">Confirm Basket</button>
      </div>
    </PhoneFrame>
  );
}

// ─── Screen 5: Analyzing Basket ────────────────────────────────────────────
function AnalyzingScreen() {
  const r = 72; const circ = 2 * Math.PI * r;
  return (
    <PhoneFrame>
      <StatusBar />
      <div className="flex flex-col items-center justify-center h-[510px]">
        <div className="relative w-[184px] h-[184px]">
          <svg width="184" height="184" className="absolute inset-0">
            <circle cx="92" cy="92" r={r} fill="none" stroke="#e5e7eb" strokeWidth="7" />
            <motion.circle
              cx="92" cy="92" r={r} fill="none" stroke="#3b82f6" strokeWidth="7"
              strokeDasharray={`${circ * 0.15} ${circ * 0.85}`}
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: "92px 92px" }}
              strokeLinecap="round"
            />
          </svg>
        </div>
        <motion.p
          animate={{ opacity: [1, 0.4, 1] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="text-[18px] font-bold text-[#1a1a1a] mt-6"
        >
          Analyzing Basket..
        </motion.p>
      </div>
    </PhoneFrame>
  );
}

// ─── Screen 6: Approved ────────────────────────────────────────────────────
function ApprovedScreen() {
  const r = 68; const circ = 2 * Math.PI * r;
  return (
    <PhoneFrame>
      <StatusBar />
      <div className="flex flex-col items-center justify-center h-[500px]">
        <div className="relative w-[172px] h-[172px]">
          <svg width="172" height="172" className="absolute inset-0">
            <circle cx="86" cy="86" r={r} fill="none" stroke="#e5e7eb" strokeWidth="7" />
            <motion.circle
              cx="86" cy="86" r={r} fill="none" stroke="#10b981" strokeWidth="7"
              strokeDasharray={circ} strokeDashoffset={circ}
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              transform="rotate(-90 86 86)" strokeLinecap="round"
            />
            <circle cx={86 + r} cy="86" r="4" fill="#3b82f6" opacity="0.8" />
          </svg>
          <motion.svg
            className="absolute inset-0 w-full h-full" viewBox="0 0 172 172"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.4, type: "spring" }}
          >
            <path d="M56 86l20 20 40-40" stroke="#10b981" strokeWidth="7" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </motion.svg>
        </div>
        <motion.h3
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
          className="text-[22px] font-bold text-[#1a1a1a] mt-6"
        >
          Approved
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }}
          className="text-[13px] text-gray-400 mt-2"
        >
          Please wait...
        </motion.p>
      </div>
    </PhoneFrame>
  );
}

// ─── Screen 7: Transaction Successful ─────────────────────────────────────
function TransactionSuccessScreen() {
  const rows = [
    { label: "Card Last 4", value: "*1234" },
    { label: "Authorized Amount", value: "$56.07" },
    { label: "Tax Collected", value: "$6.07" },
    { label: "Out-of-Pocket Amount ⓘ", value: "$63.62" },
  ];
  return (
    <PhoneFrame>
      <StatusBar />
      <button className="absolute top-10 right-4 w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 text-sm">×</button>
      <div className="flex flex-col items-center px-5 pt-3">
        {/* Success icon */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 16 }}
          className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center"
        >
          <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center">
            <svg className="w-5 h-5 text-white" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M3 8l3.5 3.5L13 4.5"/></svg>
          </div>
        </motion.div>
        <motion.h3 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="text-[16px] font-bold text-[#1a1a1a] mt-3"
        >Transaction Successful</motion.h3>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
          className="text-[28px] font-bold text-[#1a1a1a] mt-1"
        >$162.07</motion.p>
        <p className="text-[10px] text-gray-400 mt-0.5">Processed via card ****1234</p>
        {/* Details */}
        <motion.div
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
          className="w-full mt-4 bg-gray-50 rounded-xl p-3 space-y-2"
        >
          {rows.map((row) => (
            <div key={row.label} className="flex justify-between items-center">
              <span className="text-[10px] text-gray-500">{row.label}</span>
              <span className="text-[11px] font-semibold text-[#1a1a1a]">{row.value}</span>
            </div>
          ))}
        </motion.div>
        <button className="mt-3 text-[11px] font-semibold text-[#002843] underline">View Receipt &rsaquo;</button>
      </div>
      {/* Bottom button */}
      <div className="absolute bottom-0 left-0 right-0 px-4 pb-4 pt-2 bg-white border-t border-gray-100">
        <button className="w-full bg-[#002843] text-white rounded-xl py-3 text-[12px] font-semibold">Share</button>
      </div>
    </PhoneFrame>
  );
}

// ─── Data ──────────────────────────────────────────────────────────────────
const SCREENS = [
  SwipeCardScreen,
  VerifiedScreen,
  BalanceScreen,
  NewSaleScreen,
  CoverageVerifiedScreen,
  AnalyzingScreen,
  ApprovedScreen,
  TransactionSuccessScreen,
];

// Which section each screen belongs to
const SECTION_MAP = [0, 0, 0, 1, 1, 2, 2, 2];

// Dot labels per screen (shown under the progress dots)
const SCREEN_LABELS = [
  "Swipe Card", "Verifying", "Balance",
  "Scanning Items", "Coverage Check",
  "Processing", "Approved", "Complete",
];

const SECTIONS = [
  {
    eyebrow: "Member Verification",
    title: ["Verify eligibility", "with a single swipe."],
    description:
      "The retailer simply swipes or taps the NationsBenefits card. BPOS instantly verifies member eligibility, retrieves available balances, and confirms coverage before checkout begins.",
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
    title: ["Analyze every basket", "in real time."],
    description:
      "As products are scanned, BPOS automatically identifies eligible items, applies benefit rules, and separates covered and non-covered products — without cashier intervention.",
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
    title: ["Complete payments", "without the complexity."],
    description:
      "BPOS automatically applies available benefits, calculates any remaining balance, and processes split-tender payments — creating a faster experience for retailers and members.",
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
  const [screenIndex, setScreenIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(Math.floor(v * SCREENS.length), SCREENS.length - 1);
    setScreenIndex(idx);
  });

  const activeSectionIndex = SECTION_MAP[screenIndex];
  const activeSection = SECTIONS[activeSectionIndex];
  const ScreenComponent = SCREENS[screenIndex];

  // Sub-progress within current section (for progress bar)
  const sectionScreens = SCREENS.filter((_, i) => SECTION_MAP[i] === activeSectionIndex);
  const screenWithinSection = screenIndex - SECTION_MAP.indexOf(activeSectionIndex);

  return (
    <div ref={ref} style={{ height: `${SCREENS.length * 100}vh` }} id="features">
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen overflow-hidden bg-[#F8FAFB] flex items-stretch">

        {/* Left: section step indicator bar */}
        <div className="hidden lg:flex flex-col justify-center items-center w-16 shrink-0 gap-4 pl-4">
          {SECTIONS.map((s, i) => (
            <button
              key={s.step}
              onClick={() => {
                // Scroll to the start of this section
                const el = ref.current;
                if (el) {
                  const startFrac = SECTION_MAP.indexOf(i) / SCREENS.length;
                  const scrollTop = el.offsetTop + startFrac * el.offsetHeight;
                  window.scrollTo({ top: scrollTop, behavior: "smooth" });
                }
              }}
              className="flex flex-col items-center gap-1 group"
            >
              <motion.div
                animate={{
                  width: activeSectionIndex === i ? 3 : 2,
                  height: activeSectionIndex === i ? 36 : 20,
                  backgroundColor: activeSectionIndex === i ? "#00497A" : "#cbd5e1",
                }}
                transition={{ duration: 0.3 }}
                className="rounded-full"
              />
              <span className={`text-[9px] font-bold tracking-widest ${activeSectionIndex === i ? "text-[#00497A]" : "text-slate-400"}`}>
                {s.step}
              </span>
            </button>
          ))}
        </div>

        {/* Main content */}
        <div className="flex-1 flex items-center justify-center max-w-7xl mx-auto w-full px-6 lg:px-12 py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">

            {/* ── Left: Text ── */}
            <div className="flex flex-col gap-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSectionIndex}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col gap-6"
                >
                  {/* Eyebrow */}
                  <div className="inline-flex items-center gap-2 w-fit">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00A99D]" />
                    <span className="text-sm font-semibold text-[#00A99D] tracking-wide uppercase">
                      {activeSection.eyebrow}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-4xl lg:text-[44px] font-black text-[#002843] leading-[1.12] tracking-tight">
                    {activeSection.title[0]}
                    <br />
                    <span className="text-[#00497A]">{activeSection.title[1]}</span>
                  </h2>

                  {/* Description */}
                  <p className="text-[16px] text-[#646F7D] leading-relaxed max-w-lg">
                    {activeSection.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2.5">
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
                  <div className="flex gap-6">
                    {activeSection.metrics.map((m) => (
                      <div key={m.label} className="bg-white rounded-2xl px-5 py-3.5 shadow-sm border border-[#DEE8EC]">
                        <div className="text-[22px] font-black text-[#002843]">{m.value}</div>
                        <div className="text-[11px] text-[#646F7D] mt-0.5">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <button className="w-fit text-[14px] font-bold text-[#00497A] hover:text-[#002843] transition-colors flex items-center gap-1">
                    {activeSection.cta}
                  </button>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* ── Right: Phone ── */}
            <div className="flex flex-col items-center justify-center gap-6">
              {/* Phone */}
              <div className="relative">
                {/* Ambient glow */}
                <div className="absolute inset-[-40px] bg-[#00497A]/6 rounded-full blur-3xl pointer-events-none" />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={screenIndex}
                    initial={{ opacity: 0, y: 20, scale: 0.97, filter: "blur(3px)" }}
                    animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -16, scale: 0.97, filter: "blur(3px)" }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <ScreenComponent />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Screen progress dots */}
              <div className="flex items-center gap-2">
                {SCREENS.map((_, i) => {
                  const sameSection = SECTION_MAP[i] === activeSectionIndex;
                  const isActive = i === screenIndex;
                  if (!sameSection) return null;
                  return (
                    <motion.div
                      key={i}
                      animate={{
                        width: isActive ? 20 : 6,
                        backgroundColor: isActive ? "#00497A" : "#cbd5e1",
                        opacity: 1,
                      }}
                      className="h-1.5 rounded-full"
                      transition={{ duration: 0.25 }}
                    />
                  );
                })}
              </div>

              {/* Current screen label */}
              <AnimatePresence mode="wait">
                <motion.p
                  key={screenIndex}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  className="text-[11px] font-semibold text-[#646F7D] uppercase tracking-widest"
                >
                  {SCREEN_LABELS[screenIndex]}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Scroll hint — shown only when at the very start */}
        {screenIndex === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
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
