import type { ReactNode } from "react";
import type { Status } from "../content/types";
import { deck, mainCount, slideLabel } from "../content/slides";
import { Rich } from "./Rich";

export const SLIDE_W = 1920;
export const SLIDE_H = 1080;

const statusStyles: Record<Status, { label: string; className: string }> = {
  evidence: { label: "Evidence", className: "bg-chicago-30 text-london-100" },
  hypothesis: { label: "Hypothesis", className: "border-2 border-chicago-30 text-chicago-30" },
  recommendation: { label: "Recommendation", className: "bg-econ-red text-london-100" },
  direction: { label: "Possible direction", className: "border-2 border-london-35 text-london-35" },
};

export function StatusBadge({ status }: { status: Status }) {
  const s = statusStyles[status];
  return (
    <span
      className={`inline-flex items-center h-[38px] px-4 rounded-[3px] text-[18px] font-semibold tracking-[0.06em] uppercase ${s.className}`}
    >
      {s.label}
    </span>
  );
}

interface FrameProps {
  index: number;
  total: number;
  kicker: string;
  title: string;
  standfirst?: string;
  status?: Status;
  children: ReactNode;
}

/** The fixed 1920×1080 canvas every slide is drawn on. */
export function Frame({ index, total, kicker, title, standfirst, status, children }: FrameProps) {
  return (
    <div
      className="relative flex flex-col bg-los-angeles-95 text-london-10 font-sans px-[120px] pt-[84px] pb-[48px]"
      style={{ width: SLIDE_W, height: SLIDE_H }}
    >
      {/* Red flag, as used at the top-left of Economist charts and modules */}
      <div className="absolute left-[120px] top-0 w-[72px] h-[14px] bg-econ-red" />

      <header className="mb-[44px]">
        <div className="flex items-center gap-6">
          <p className="text-econ-red font-semibold text-[26px] leading-none">{kicker}</p>
          {status && <StatusBadge status={status} />}
        </div>
        <h1 className="font-serif text-[74px] leading-[1.06] tracking-[-0.012em] mt-5 max-w-[1560px] text-london-5">
          {title}
        </h1>
        {standfirst && (
          <p className="text-[32px] leading-[1.3] text-london-35 mt-5 max-w-[1420px]">
            <Rich text={standfirst} />
          </p>
        )}
      </header>

      <main className="flex-1 min-h-0">{children}</main>

      <Footer index={index} total={total} />
    </div>
  );
}

/** Footer with deck name, progress through the main deck, and slide number. */
export function Footer({ index }: { index: number; total?: number }) {
  const inAppendix = index >= mainCount;
  return (
    <footer className="mt-8 pt-5 border-t flex items-center justify-between text-[19px] border-london-85 text-london-35">
      <span>{inAppendix ? `${deck.title} · Appendix` : deck.footer}</span>
      <div className="flex gap-[6px]" aria-hidden>
        {Array.from({ length: mainCount }, (_, i) => (
          <span
            key={i}
            className={`h-[4px] w-[36px] ${i === index ? "bg-econ-red" : i < index ? "bg-london-35" : "bg-london-85"}`}
          />
        ))}
      </div>
      <span className="tabular-nums">{inAppendix ? slideLabel(index) : `${index + 1} / ${mainCount}`}</span>
    </footer>
  );
}
