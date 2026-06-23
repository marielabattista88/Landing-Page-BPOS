import Link from "next/link";

/* ─── Colors specific to this screen ─────────────────────── */
const NAVY_CIRCLE = "#0A2A45";
const INK = "#15293B"; // heading / icon ink
const CARD_BG = "#F8FAFB";

/* ─── Method icons (navy outline) ────────────────────────── */
function EnterPanIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" stroke={INK} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="8" width="26" height="18" rx="3" />
      <rect x="8" y="12.5" width="5" height="4" rx="1" fill={INK} stroke="none" />
      <path d="M8 21h3M14 21h3M20 21h3M26 21h0.5" />
    </svg>
  );
}

function ScanQrIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill={INK}>
      {/* top-left finder */}
      <path fillRule="evenodd" d="M4 4h11v11H4V4Zm2.5 2.5v6h6v-6h-6Z" />
      <rect x="8" y="8" width="3" height="3" />
      {/* top-right finder */}
      <path fillRule="evenodd" d="M19 4h11v11H19V4Zm2.5 2.5v6h6v-6h-6Z" />
      <rect x="23" y="8" width="3" height="3" />
      {/* bottom-left finder */}
      <path fillRule="evenodd" d="M4 19h11v11H4V19Zm2.5 2.5v6h6v-6h-6Z" />
      <rect x="8" y="23" width="3" height="3" />
      {/* bottom-right modules */}
      <rect x="19" y="19" width="3.5" height="3.5" />
      <rect x="26.5" y="19" width="3.5" height="3.5" />
      <rect x="22.5" y="22.5" width="3.5" height="3.5" />
      <rect x="19" y="26" width="3.5" height="3.5" />
      <rect x="26.5" y="26" width="3.5" height="3.5" />
    </svg>
  );
}

function ScanCardIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" stroke={INK} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {/* corner scan brackets */}
      <path d="M4 9V6a2 2 0 0 1 2-2h3" />
      <path d="M25 4h3a2 2 0 0 1 2 2v3" />
      <path d="M30 25v3a2 2 0 0 1-2 2h-3" />
      <path d="M9 30H6a2 2 0 0 1-2-2v-3" />
      {/* inner card */}
      <rect x="9" y="11.5" width="16" height="11" rx="2" />
      <rect x="11.5" y="14" width="3.5" height="2.8" rx="0.6" fill={INK} stroke="none" />
      <path d="M11.5 19.5h2.5M16 19.5h2.5M20.5 19.5h2" />
    </svg>
  );
}

const METHODS = [
  { label: "Enter PAN", Icon: EnterPanIcon },
  { label: "Scan QR", Icon: ScanQrIcon },
  { label: "Enter PAN", Icon: ScanCardIcon },
];

/* ─── Mastercard prepaid card mockup ─────────────────────── */
function PrepaidCard() {
  return (
    <div className="relative aspect-[1.586/1] w-[64%] overflow-hidden rounded-[10px] bg-white shadow-[0_6px_20px_rgba(0,0,0,0.18)]">
      {/* faint wavy line pattern */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 158 100" preserveAspectRatio="xMidYMid slice" fill="none" stroke="#E7ECEF" strokeWidth="0.8">
        <path d="M-10 40 C 30 22, 70 58, 110 36 S 180 30, 210 48" />
        <path d="M-10 52 C 30 34, 70 70, 110 48 S 180 42, 210 60" />
        <path d="M-10 64 C 30 46, 70 82, 110 60 S 180 54, 210 72" />
        <path d="M-10 76 C 30 58, 70 94, 110 72 S 180 66, 210 84" />
      </svg>

      <div className="relative flex h-full flex-col justify-between p-[7%]">
        {/* top row: LOGO + nations benefits */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-[3px] text-[#9AA6AE]">
            <span className="grid h-[11px] w-[11px] place-items-center rounded-[2px] border border-[#C5CDD3] text-[6px]">▚</span>
            <span className="text-[7px] font-medium tracking-wide">LOGO</span>
          </div>
          <div className="leading-[0.95] text-right text-[#1B2A36]">
            <div className="text-[6.5px] font-light">nations</div>
            <div className="text-[6.5px] font-bold">benefits</div>
          </div>
        </div>

        {/* debit label */}
        <div className="text-right text-[7px] font-medium text-[#5B6770]">debit</div>

        {/* bottom row */}
        <div className="flex items-end justify-between">
          <div className="text-[#1B2A36]">
            <div className="text-[6.5px] font-semibold leading-tight">
              [Benefits Mastercard®
              <br />
              Prepaid Card]
            </div>
            <div className="mt-[2px] text-[5.5px] text-[#7A858D]">Limited Use Card</div>
          </div>
          {/* mastercard mark */}
          <div className="flex items-center">
            <span className="h-[15px] w-[15px] rounded-full bg-[#EB001B]" />
            <span className="-ml-[6px] h-[15px] w-[15px] rounded-full bg-[#F79E1B] mix-blend-multiply" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Screen ─────────────────────────────────────────────── */
export default function VerificationMethodsPage() {
  return (
    <main className="flex min-h-screen w-full justify-center bg-white">
      <div className="relative flex w-full max-w-[430px] flex-col px-6 pt-6">
        {/* close button */}
        <div className="flex justify-end">
          <Link
            href="/"
            aria-label="Close"
            className="grid h-[52px] w-[52px] place-items-center rounded-full bg-[#E8F0F5] text-[#15293B] transition-colors hover:bg-[#dbe7ef]"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </Link>
        </div>

        {/* hero circle with card */}
        <div className="mt-6 flex justify-center">
          <div
            className="grid aspect-square w-[64%] place-items-center rounded-full"
            style={{ backgroundColor: NAVY_CIRCLE }}
          >
            <PrepaidCard />
          </div>
        </div>

        {/* heading */}
        <h1 className="mt-10 text-center text-[30px] font-extrabold tracking-tight text-[#15293B]">
          Verification Methods
        </h1>

        {/* methods */}
        <div className="mt-9 grid grid-cols-3 gap-4">
          {METHODS.map(({ label, Icon }, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-3 rounded-2xl px-2 py-7 shadow-[0_2px_14px_rgba(15,41,59,0.05)]"
              style={{ backgroundColor: CARD_BG }}
            >
              <Icon />
              <span className="text-[15px] font-medium text-[#15293B]">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
