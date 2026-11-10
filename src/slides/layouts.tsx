import type {
  ArchitectureSlide,
  ClosingSlide,
  ColumnsSlide,
  CoverSlide,
  ExcerptsSlide,
  ToolsSlide,
  ScorecardSlide,
  Strength,
  SynthesisSlide,
  EvidenceSlide,
  ExperimentsSlide,
  JobsSlide,
  JourneySlide,
  PlanSlide,
  Slide,
  TrustSlide,
} from "../content/types";
import { Footer, Frame, SLIDE_H, SLIDE_W, StatusBadge } from "./Frame";
import { Rich } from "./Rich";

interface Pos {
  index: number;
  total: number;
}

/** Heavy black rule with a small heading: the Economist section-header pattern. */
function Section({ title, className = "", children }: { title: string; className?: string; children: React.ReactNode }) {
  return (
    <section className={`border-t-[4px] border-london-5 pt-4 ${className}`}>
      <h3 className="text-[22px] font-semibold text-london-5 mb-4">{title}</h3>
      {children}
    </section>
  );
}

// ── 1. Cover ────────────────────────────────────────────────────────────────
function Cover({ s, index, total }: { s: CoverSlide } & Pos) {
  return (
    <div
      className="relative flex flex-col bg-los-angeles-95 text-london-10 px-[120px] pt-[120px] pb-[48px]"
      style={{ width: SLIDE_W, height: SLIDE_H }}
    >
      <div className="absolute left-[120px] top-0 w-[120px] h-[22px] bg-econ-red" />
      <p className="text-econ-red font-semibold text-[30px]">{s.kicker}</p>
      <h1 className="font-serif text-[112px] leading-[1.02] tracking-[-0.015em] mt-6 max-w-[1500px] text-london-5">
        {s.title}
      </h1>
      <p className="text-[38px] leading-[1.3] text-london-35 mt-8 max-w-[1350px]">
        <Rich text={s.standfirst ?? ""} />
      </p>

      {s.contrast && s.recommendation ? (
      <div className="mt-auto grid grid-cols-[1fr_1fr_1.15fr] gap-[48px] items-stretch">
        {s.contrast.map((c, i) => (
          <div key={c.label} className={`border-t-[4px] pt-5 ${i === 0 ? "border-london-5" : "border-london-70"}`}>
            <p className="text-[20px] font-semibold uppercase tracking-[0.08em] text-london-35">{c.label}</p>
            <p className={`font-serif text-[36px] leading-[1.15] mt-3 ${i === 0 ? "text-london-5" : "text-london-35"}`}>
              {c.heading}
            </p>
            <p className="text-[23px] leading-[1.4] text-london-35 mt-3">
              <Rich text={c.text} />
            </p>
          </div>
        ))}
        <div className="bg-london-100 border-l-[6px] border-econ-red px-8 py-6 flex flex-col">
          {s.status && (
            <div>
              <StatusBadge status={s.status} />
            </div>
          )}
          <p className="text-[27px] leading-[1.38] text-london-10 mt-4">
            <Rich text={s.recommendation} />
          </p>
          {s.principles && (
            <ol className="mt-3 space-y-2">
              {s.principles.map((p, i) => (
                <li key={i} className="flex gap-3 text-[21px] leading-[1.35] text-london-20">
                  <span className="font-serif text-econ-red">{i + 1}</span>
                  <span>
                    <Rich text={p} />
                  </span>
                </li>
              ))}
            </ol>
          )}
        </div>
      </div>
      ) : (
        <div className="mt-auto" />
      )}

      <p className="text-[22px] text-london-35 mt-10">
        <Rich text={s.presenter} />
      </p>
      <Footer index={index} total={total} />
    </div>
  );
}

// ── 2. Jobs to be done ──────────────────────────────────────────────────────
function Jobs({ s, ...pos }: { s: JobsSlide } & Pos) {
  return (
    <Frame {...pos} {...s}>
      <div className="grid grid-cols-[1fr_640px] gap-[72px] h-full">
        <div className="grid grid-cols-2 gap-x-[48px] gap-y-[40px] content-start">
          {s.jobs.map((j, i) => (
            <div key={j.title} className="border-t-[4px] border-london-5 pt-5">
              <div className="flex items-baseline gap-4">
                <span className="font-serif text-[44px] text-econ-red leading-none">{i + 1}</span>
                <h3 className="font-serif text-[40px] leading-tight text-london-5">{j.title}</h3>
              </div>
              <p className="text-[26px] leading-[1.4] text-london-20 mt-3">
                <Rich text={j.text} />
              </p>
            </div>
          ))}
          <p className="col-span-2 text-[21px] text-london-35 italic self-end">
            <Rich text={s.caveat} />
          </p>
        </div>

        <aside className="bg-london-100 px-10 py-9 self-start">
          <p className="text-[19px] font-semibold uppercase tracking-[0.08em] text-chicago-30">{s.example.label}</p>
          <p className="font-serif text-[31px] leading-[1.2] mt-3 text-london-5">{s.example.title}</p>
          <ol className="mt-7 space-y-5">
            {s.example.steps.map((step, i) => (
              <li key={i} className="flex gap-5 text-[23px] leading-[1.4] text-london-20">
                <span className="shrink-0 w-[36px] h-[36px] rounded-full border-2 border-chicago-30 text-chicago-30 text-[18px] font-semibold flex items-center justify-center">
                  {i + 1}
                </span>
                <span>
                  <Rich text={step} />
                </span>
              </li>
            ))}
          </ol>
        </aside>
      </div>
    </Frame>
  );
}

// ── 3. Evidence ─────────────────────────────────────────────────────────────
function Evidence({ s, ...pos }: { s: EvidenceSlide } & Pos) {
  return (
    <Frame {...pos} {...s}>
      <div className="flex flex-col h-full">
        <div className="grid gap-[48px]" style={{ gridTemplateColumns: `repeat(${s.signals.length}, minmax(0, 1fr))` }}>
          {s.signals.map((sig, i) => (
            <div key={i} className="border-t-[4px] border-london-5 pt-5 flex flex-col">
              <p className="font-serif text-[80px] leading-none text-london-5 tracking-[-0.02em]">
                {sig.figure}
                <sup className="font-sans text-[22px] text-london-35 ml-1 align-super">{sig.ref}</sup>
              </p>
              <p className="text-[24px] leading-[1.35] text-london-20 mt-4">
                <Rich text={sig.label} />
              </p>
              {sig.ladder && (
                <ul className="mt-5 space-y-[10px]">
                  {sig.ladder.map((r) => (
                    <li key={r.label}>
                      <div className="flex justify-between text-[18px] leading-tight text-london-20">
                        <span>{r.label}</span>
                        <span className="font-semibold text-london-5">{r.value}%</span>
                      </div>
                      <div className="h-[10px] bg-london-85 mt-1">
                        <div className="h-full bg-chicago-30" style={{ width: `${r.value}%` }} />
                      </div>
                    </li>
                  ))}
                </ul>
              )}
              <p className="text-[19px] font-semibold text-london-5 mt-4">{sig.source}</p>
              <p className="text-[19px] leading-[1.4] text-tokyo-45 mt-2">
                <span className="font-semibold">Caveat: </span>
                <Rich text={sig.caveat} />
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-[40px] mt-[44px]">
          <div className="bg-chicago-30 text-london-100 px-8 py-6 flex items-center gap-6">
            <span className="text-[44px] leading-none">✓</span>
            <p className="text-[30px] leading-tight [&_strong]:text-london-100">
              <Rich text={s.conclusion.enough} />
            </p>
          </div>
          <div className="border-2 border-london-35 px-8 py-6 flex items-center gap-6">
            <span className="text-[44px] leading-none text-london-35">✕</span>
            <p className="text-[30px] leading-tight text-london-20">
              <Rich text={s.conclusion.notEnough} />
            </p>
          </div>
        </div>

        <div className="mt-auto">
          <ol className="grid grid-cols-1 gap-y-1 text-[16px] text-london-35 leading-[1.5]">
            {s.sources.map((src, i) => (
              <li key={i}>
                <span className="font-semibold">{i + 1}.</span> <Rich text={src} />
              </li>
            ))}
          </ol>
          {s.footnote && (
            <p className="text-[16px] italic text-london-35 mt-2">
              <Rich text={s.footnote} />
            </p>
          )}
        </div>
      </div>
    </Frame>
  );
}

// ── 4. Experiments ──────────────────────────────────────────────────────────
function Experiments({ s, ...pos }: { s: ExperimentsSlide } & Pos) {
  return (
    <Frame {...pos} {...s}>
      <div className="grid grid-cols-[1fr_560px] gap-[56px] h-full">
        <table className="w-full border-collapse self-start text-left">
          <thead>
            <tr className="border-b-[4px] border-london-5">
              <th className="w-[34%] pb-3 text-[19px] font-semibold uppercase tracking-[0.06em] text-london-35">Question</th>
              {s.columns.map((c) => (
                <th key={c} className="pb-3 pl-6 text-[19px] font-semibold uppercase tracking-[0.06em] text-london-35">
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {s.rows.map((r, i) => (
              <tr key={i} className="border-b border-london-85 align-top">
                <td className="py-6 pr-4">
                  <div className="flex gap-4">
                    <span className="font-serif text-[40px] leading-none text-econ-red">{i + 1}</span>
                    <span className="font-serif text-[26px] leading-[1.25] text-london-5">
                      <Rich text={r.question} />
                    </span>
                  </div>
                </td>
                {r.cells.map((c, j) => (
                  <td
                    key={j}
                    className={`py-6 pl-6 text-[21px] leading-[1.4] ${j === 2 ? "text-chicago-30 font-semibold" : "text-london-20"}`}
                  >
                    <Rich text={c} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        {/* Prototype mock-up */}
        <aside className="self-start">
          <p className="text-[19px] font-semibold uppercase tracking-[0.08em] text-chicago-30 mb-3">{s.mock.label}</p>
          <div className="bg-london-100 border border-london-85 shadow-[0_2px_0_rgba(0,0,0,0.04)]">
            <div className="px-6 py-3 border-b border-london-85 text-[17px] text-london-35 flex items-center gap-3">
              <span className="w-[10px] h-[10px] bg-econ-red" />
              <Rich text={s.mock.context} />
            </div>
            <div className="px-6 py-5 space-y-4">
              <div className="ml-auto max-w-[85%] bg-london-95 px-5 py-3 text-[20px] text-london-10 w-fit">
                {s.mock.question}
              </div>
              <div className="text-[19px] leading-[1.5] text-london-20 space-y-2">
                {s.mock.answer.map((a, i) => (
                  <p key={i}>
                    <Rich text={a} />
                  </p>
                ))}
              </div>
              <div className="inline-block bg-chicago-95 text-chicago-30 text-[15px] font-semibold px-3 py-1">
                <Rich text={s.mock.asOf} />
              </div>
              <ol className="border-t border-london-85 pt-3 text-[15px] text-london-35 space-y-1">
                {s.mock.citations.map((c, i) => (
                  <li key={i}>
                    {i + 1}. <Rich text={c} />
                  </li>
                ))}
              </ol>
              <p className="text-[15px] italic text-london-35">{s.mock.disclaimer}</p>
            </div>
          </div>
        </aside>
      </div>
    </Frame>
  );
}

// ── 5. Trust ────────────────────────────────────────────────────────────────
function Trust({ s, ...pos }: { s: TrustSlide } & Pos) {
  const tierStyles = [
    "bg-chicago-30 text-london-100",
    "bg-chicago-90 text-chicago-20",
    "bg-london-100 text-london-10 border-2 border-dashed border-tokyo-45",
  ];
  return (
    <Frame {...pos} {...s}>
      <div className="flex flex-col h-full">
        <div className="grid grid-cols-3 gap-[24px]">
          {s.tiers.map((t, i) => (
            <div key={t.label} className={`px-8 py-6 ${tierStyles[i]}`}>
              <p className="font-serif text-[34px] leading-tight">{t.label}</p>
              <p className="text-[21px] mt-2 opacity-80">{t.who}</p>
              <p className={`text-[22px] mt-4 font-semibold leading-snug ${i === 2 ? "text-tokyo-45" : ""}`}>{t.rule}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-between text-[17px] text-london-35 mt-3 px-1">
          <span>← Can be cited</span>
          <span>Must not be attributed →</span>
        </div>

        <Section title="Designed in, not bolted on" className="mt-8">
          <div className="grid grid-cols-7 gap-[20px]">
            {s.principles.map((p) => (
              <div key={p.title}>
                <p className="text-[22px] font-semibold text-london-5 leading-tight">{p.title}</p>
                <p className="text-[19px] text-london-35 leading-[1.35] mt-2">
                  <Rich text={p.text} />
                </p>
              </div>
            ))}
          </div>
        </Section>

        <p className="mt-auto font-serif text-[38px] leading-[1.25] text-london-5 border-l-[6px] border-econ-red pl-8 max-w-[1500px]">
          <Rich text={s.principle} />
        </p>
      </div>
    </Frame>
  );
}

// ── 6. Architecture ─────────────────────────────────────────────────────────
const decisionStyles = {
  Build: "bg-econ-red text-london-100",
  Buy: "bg-london-35 text-london-100",
  Integrate: "bg-chicago-30 text-london-100",
} as const;

function Architecture({ s, ...pos }: { s: ArchitectureSlide } & Pos) {
  return (
    <Frame {...pos} {...s}>
      <div className="flex flex-col h-full">
        <div className="flex items-stretch">
          {s.layers.map((l, i) => (
            <div key={l.name} className="flex items-stretch flex-1">
              <div className="flex-1 bg-london-100 border border-london-85 px-5 py-5 flex flex-col">
                {l.decision ? (
                  <span
                    className={`self-start text-[15px] font-semibold uppercase tracking-[0.08em] px-2 py-[2px] ${decisionStyles[l.decision]}`}
                  >
                    {l.decision}
                  </span>
                ) : (
                  l.label && (
                    <span className="self-start text-[15px] font-semibold uppercase tracking-[0.08em] text-chicago-30">
                      {l.label}
                    </span>
                  )
                )}
                <p className="font-serif text-[27px] leading-[1.15] text-london-5 mt-3">{l.name}</p>
                <p className="text-[18px] leading-[1.4] text-london-35 mt-2">
                  <Rich text={l.detail} />
                </p>
              </div>
              {i < s.layers.length - 1 && (
                <div className="w-[36px] flex items-center justify-center text-[30px] text-london-35">→</div>
              )}
            </div>
          ))}
        </div>

        <div className="grid gap-[40px] mt-[44px]" style={{ gridTemplateColumns: `repeat(${s.columns.length}, minmax(0, 1fr))` }}>
          {s.columns.map((c) => (
            <Section key={c.title} title={c.title}>
              <ul className="space-y-3">
                {c.items.map((it, i) => (
                  <li key={i} className="text-[20px] leading-[1.4] text-london-20 pl-5 relative">
                    <span className="absolute left-0 top-[0.6em] w-[7px] h-[7px] bg-econ-red" />
                    <Rich text={it} />
                  </li>
                ))}
              </ul>
            </Section>
          ))}
        </div>

        <p className="mt-auto text-[18px] italic text-london-35">
          <Rich text={s.footnote} />
        </p>
      </div>
    </Frame>
  );
}

// ── 7. Plan ─────────────────────────────────────────────────────────────────
function Plan({ s, ...pos }: { s: PlanSlide } & Pos) {
  const cols = s.phases.map((p) => `${p.span}fr`).join(" ");
  return (
    <Frame {...pos} {...s}>
      <div className="flex flex-col h-full">
        {/* Timeline bar, proportional to weeks */}
        <div className="grid gap-[6px]" style={{ gridTemplateColumns: cols }}>
          {s.phases.map((p, i) => (
            <div key={p.weeks} className={`h-[10px] ${i === 2 ? "bg-econ-red" : i === 1 ? "bg-chicago-45" : "bg-chicago-30"}`} />
          ))}
        </div>

        <div className="grid gap-[40px] mt-5" style={{ gridTemplateColumns: cols }}>
          {s.phases.map((p) => (
            <div key={p.weeks} className="flex flex-col">
              <p className="text-[19px] font-semibold uppercase tracking-[0.08em] text-london-35">{p.weeks}</p>
              <p className="font-serif text-[38px] leading-tight text-london-5 mt-1">{p.title}</p>
              <ul className="mt-3 space-y-[6px]">
                {p.activities.map((a, i) => (
                  <li key={i} className="text-[20px] leading-[1.35] text-london-20 pl-5 relative">
                    <span className="absolute left-0 top-[0.55em] w-[7px] h-[7px] bg-london-35" />
                    <Rich text={a} />
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                {p.metrics.map((m) => (
                  <span key={m} className="text-[16px] bg-chicago-95 text-chicago-30 font-semibold px-3 py-1">
                    {m}
                  </span>
                ))}
              </div>
              <div className="mt-auto pt-4 flex items-center gap-3 text-[20px] text-london-5 font-semibold">
                <span className="w-[16px] h-[16px] rotate-45 bg-econ-red shrink-0" />
                Gate: {p.gate}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-[1fr_1.6fr] gap-[48px] mt-8">
          <Section title="Small cross-functional team">
            <div className="flex flex-wrap gap-2">
              {s.team.map((t) => (
                <span key={t} className="text-[18px] border border-london-70 px-3 py-1 text-london-20 bg-london-100">
                  {t}
                </span>
              ))}
            </div>
          </Section>
          <Section title="Week 12 decision">
            <div className="grid grid-cols-3 gap-[20px]">
              {(
                [
                  ["Invest", s.decisions.invest, "border-chicago-30 text-chicago-30"],
                  ["Pivot", s.decisions.pivot, "border-london-35 text-london-35"],
                  ["Stop", s.decisions.stop, "border-econ-red text-econ-red"],
                ] as const
              ).map(([label, text, cls]) => (
                <div key={label} className={`border-l-[5px] pl-4 ${cls}`}>
                  <p className="text-[22px] font-semibold">{label}</p>
                  <p className="text-[18px] leading-[1.35] text-london-20 mt-1">
                    <Rich text={text} />
                  </p>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </div>
    </Frame>
  );
}

// ── 8. Closing ──────────────────────────────────────────────────────────────
function Closing({ s, ...pos }: { s: ClosingSlide } & Pos) {
  return (
    <Frame {...pos} {...s}>
      <div className="flex flex-col h-full">
        <div className="grid grid-cols-2 gap-[40px]">
          {s.opportunities.map((o) => (
            <div key={o.title} className="bg-london-100 px-9 py-7">
              <p className="font-serif text-[36px] text-london-5">{o.title}</p>
              <ul className={`mt-4 grid gap-x-6 gap-y-3 ${o.items.length % 2 === 0 ? "grid-cols-2" : "grid-cols-1"}`}>
                {o.items.map((it) => (
                  <li key={it} className="text-[21px] leading-[1.35] text-london-20 pl-5 relative">
                    <span className="absolute left-0 top-[0.55em] w-[7px] h-[7px] bg-econ-red" />
                    <Rich text={it} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-[40px]" aria-hidden>
          <div className="h-[28px] mx-auto w-[3px] bg-london-70" />
          <div className="h-[28px] mx-auto w-[3px] bg-london-70" />
        </div>
        <div className="bg-chicago-30 text-london-100 px-9 py-5 flex items-center gap-10">
          <p className="text-[19px] font-semibold uppercase tracking-[0.08em] opacity-80">{s.foundation.title}</p>
          <div className="flex gap-10 text-[26px] font-serif">
            {s.foundation.items.map((f) => (
              <span key={f}>{f}</span>
            ))}
          </div>
        </div>

        <p className="mt-auto font-serif text-[50px] leading-[1.18] text-london-5 border-l-[6px] border-econ-red pl-8 max-w-[1500px]">
          {s.principle}
        </p>
        <p className="text-[20px] italic text-london-35 mt-5 pl-[38px]">
          <Rich text={s.caveat} />
        </p>
      </div>
    </Frame>
  );
}

// ── Appendix: synthesis ─────────────────────────────────────────────────────
function Synthesis({ s, ...pos }: { s: SynthesisSlide } & Pos) {
  return (
    <Frame {...pos} {...s}>
      <div className="flex flex-col h-full">
        <div className="grid grid-cols-[1fr_760px] gap-[72px]">
          <div className="space-y-6">
            {s.bottomLine.map((p, i) => (
              <p
                key={i}
                className={`font-serif leading-[1.3] text-london-10 ${i === 0 ? "text-[38px]" : "text-[32px] text-london-20"}`}
              >
                <Rich text={p} />
              </p>
            ))}
          </div>
          <Section title={s.constraints.title}>
            <ul className="space-y-5">
              {s.constraints.items.map((it, i) => (
                <li key={i} className="text-[22px] leading-[1.42] text-london-20 pl-5 relative">
                  <span className="absolute left-0 top-[0.6em] w-[7px] h-[7px] bg-econ-red" />
                  <Rich text={it} />
                </li>
              ))}
            </ul>
          </Section>
        </div>
        <p className="mt-auto text-[17px] italic text-london-35">
          <Rich text={s.footnote} />
        </p>
      </div>
    </Frame>
  );
}

// ── Appendix: hypothesis scorecard ──────────────────────────────────────────
const strengthStyles: Record<Strength, { dot: string; label: string }> = {
  strong: { dot: "bg-chicago-30", label: "Strong" },
  moderate: { dot: "bg-chicago-45 opacity-60", label: "Moderate / conditional" },
  weak: { dot: "bg-london-100 border-2 border-london-35", label: "Weak" },
  risk: { dot: "bg-econ-red", label: "Risk evident" },
  unknown: { dot: "bg-london-100 border-2 border-dashed border-london-35", label: "Unknown / unresolved" },
};

function Scorecard({ s, ...pos }: { s: ScorecardSlide } & Pos) {
  const dense = s.rows.length > 7;
  const text = dense ? "text-[16.5px] leading-[1.32]" : "text-[18px] leading-[1.36]";
  const pad = dense ? "py-[9px]" : "py-[12px]";
  return (
    <Frame {...pos} {...s}>
      <div className="flex flex-col h-full">
        <table className="w-full border-collapse text-left table-fixed">
          <colgroup>
            <col className="w-[64px]" />
            <col className="w-[330px]" />
            <col className="w-[300px]" />
            <col />
            <col className="w-[300px]" />
          </colgroup>
          <thead>
            <tr className="border-b-[4px] border-london-5 text-[16px] font-semibold uppercase tracking-[0.06em] text-london-35">
              <th className="pb-2" />
              <th className="pb-2">Hypothesis</th>
              <th className="pb-2 pl-5">Evidence</th>
              <th className="pb-2 pl-5">Key evidence</th>
              <th className="pb-2 pl-5">Direction</th>
            </tr>
          </thead>
          <tbody>
            {s.rows.map((r) => (
              <tr key={r.id} className="border-b border-london-85 align-top">
                <td className={`${pad} font-serif text-[24px] leading-none text-econ-red`}>{r.id}</td>
                <td className={`${pad} ${text} font-semibold text-london-5 pr-3`}>
                  <Rich text={r.hypothesis} />
                </td>
                <td className={`${pad} pl-5 ${text}`}>
                  <span className="flex gap-3">
                    <span className={`shrink-0 mt-[0.3em] w-[13px] h-[13px] rounded-full ${strengthStyles[r.strength].dot}`} />
                    <span className="text-london-10">
                      {r.rating}
                      {r.revised && <span className="text-econ-red font-semibold"> †</span>}
                    </span>
                  </span>
                </td>
                <td className={`${pad} pl-5 ${text} text-london-35`}>
                  <Rich text={r.evidence} />
                </td>
                <td className={`${pad} pl-5 ${text} text-chicago-30`}>
                  <Rich text={r.direction} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-auto pt-4 flex items-center gap-7 text-[16px] text-london-35">
          {(Object.keys(strengthStyles) as Strength[]).map((k) => (
            <span key={k} className="flex items-center gap-2">
              <span className={`w-[12px] h-[12px] rounded-full ${strengthStyles[k].dot}`} />
              {strengthStyles[k].label}
            </span>
          ))}
          <span className="ml-auto italic">
            <Rich text={s.footnote} />
          </span>
        </div>
      </div>
    </Frame>
  );
}

// ── Appendix: columns ───────────────────────────────────────────────────────
function Columns({ s, ...pos }: { s: ColumnsSlide } & Pos) {
  return (
    <Frame {...pos} {...s}>
      <div className="flex flex-col h-full">
      <div className="grid gap-[48px]" style={{ gridTemplateColumns: `repeat(${s.columns.length}, 1fr)` }}>
        {s.columns.map((c) => (
          <Section key={c.title} title={c.title}>
            <ul className="space-y-6">
              {c.items.map((it, i) => (
                <li key={i} className="text-[24px] leading-[1.42] text-london-20 flex gap-4">
                  {c.numbered ? (
                    <span className="font-serif text-[26px] leading-none text-econ-red w-[20px] shrink-0">{i + 1}</span>
                  ) : (
                    <span className="mt-[0.6em] w-[7px] h-[7px] bg-econ-red shrink-0" />
                  )}
                  <span>
                    <Rich text={it} />
                  </span>
                </li>
              ))}
            </ul>
          </Section>
        ))}
      </div>
      {s.footnote && (
        <p className="mt-auto text-[18px] italic text-london-35">
          <Rich text={s.footnote} />
        </p>
      )}
      </div>
    </Frame>
  );
}

// ── Journey: the proposed experience ───────────────────────────────────────
function Journey({ s, ...pos }: { s: JourneySlide } & Pos) {
  return (
    <Frame {...pos} {...s}>
      <div className={`grid gap-[64px] h-full ${s.mock ? "grid-cols-[1fr_620px]" : "grid-cols-1"}`}>
        <div className="flex flex-col">
          <p className="text-[19px] font-semibold uppercase tracking-[0.08em] text-chicago-30">{s.journeyLabel}</p>
          <ol className="mt-4 grid gap-[16px]" style={{ gridTemplateColumns: `repeat(${s.journey.length}, minmax(0, 1fr))` }}>
            {s.journey.map((step, i) => (
              <li key={i} className="border-t-[4px] border-chicago-30 pt-3">
                <span className="font-serif text-[36px] leading-none text-econ-red">{i + 1}</span>
                <p className="text-[23px] leading-[1.3] text-london-10 mt-2">
                  <Rich text={step} />
                </p>
              </li>
            ))}
          </ol>
          <div className="mt-auto space-y-6">
            {s.points.map((p) => (
              <div key={p.title} className="border-l-[5px] border-london-5 pl-6">
                <p className="text-[22px] font-semibold text-london-5">{p.title}</p>
                <p className="text-[24px] leading-[1.38] text-london-20 mt-1">
                  <Rich text={p.text} />
                </p>
              </div>
            ))}
          </div>
        </div>

        {s.mock && (
        <aside className="self-start">
          <p className="text-[19px] font-semibold uppercase tracking-[0.08em] text-chicago-30 mb-3">{s.mock.label}</p>
          <div className="bg-london-100 border border-london-85">
            <div className="px-6 py-3 border-b border-london-85 text-[17px] text-london-35 flex items-center gap-3">
              <span className="w-[10px] h-[10px] bg-econ-red" />
              <Rich text={s.mock.context} />
            </div>
            <div className="px-6 py-5 space-y-4">
              <div className="ml-auto max-w-[85%] bg-london-95 px-5 py-3 text-[20px] text-london-10 w-fit">
                {s.mock.question}
              </div>
              <div className="text-[19px] leading-[1.5] text-london-20 space-y-2">
                {s.mock.answer.map((a, i) => (
                  <p key={i}>
                    <Rich text={a} />
                  </p>
                ))}
              </div>
              <div className="inline-block bg-chicago-95 text-chicago-30 text-[15px] font-semibold px-3 py-1">
                <Rich text={s.mock.asOf} />
              </div>
              <ol className="border-t border-london-85 pt-3 text-[15px] text-london-35 space-y-1">
                {s.mock.citations.map((c, i) => (
                  <li key={i}>
                    {i + 1}. <Rich text={c} />
                  </li>
                ))}
              </ol>
              {s.mock.followUps && (
                <div className="flex flex-wrap gap-2">
                  {s.mock.followUps.map((f) => (
                    <span key={f} className="text-[16px] border border-chicago-30 text-chicago-30 px-3 py-1">
                      {f}
                    </span>
                  ))}
                </div>
              )}
              <p className="text-[15px] italic text-london-35">{s.mock.disclaimer}</p>
            </div>
          </div>
        </aside>
        )}
      </div>
    </Frame>
  );
}

// ── Appendix: how I used AI ─────────────────────────────────────────────────
function Tools({ s, ...pos }: { s: ToolsSlide } & Pos) {
  return (
    <Frame {...pos} {...s}>
      <div className="flex flex-col h-full">
        <div className="grid grid-cols-4 gap-[40px]">
          {s.tools.map((t) => (
            <div key={t.name} className="border-t-[4px] border-london-5 pt-5">
              <p className="text-[21px] font-semibold text-econ-red">{t.role}</p>
              <p className="font-serif text-[44px] leading-tight text-london-5 mt-1">{t.name}</p>
              <ul className="mt-5 space-y-4">
                {t.uses.map((u, i) => (
                  <li key={i} className="text-[22px] leading-[1.4] text-london-20 pl-5 relative">
                    <span className="absolute left-0 top-[0.6em] w-[7px] h-[7px] bg-london-35" />
                    <Rich text={u} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-auto bg-london-100 border-l-[6px] border-econ-red px-9 py-7">
          <p className="text-[19px] font-semibold uppercase tracking-[0.08em] text-london-35">{s.mine.title}</p>
          <div className="grid grid-cols-4 gap-[40px] mt-3">
            {s.mine.items.map((m) => (
              <p key={m} className="font-serif text-[27px] leading-[1.25] text-london-5">
                <Rich text={m} />
              </p>
            ))}
          </div>
        </div>
      </div>
    </Frame>
  );
}

function Excerpts({ s, ...pos }: { s: ExcerptsSlide } & Pos) {
  return (
    <Frame {...pos} {...s}>
      <div className="flex flex-col h-full">
        <div className="grid grid-cols-2 gap-x-[40px] gap-y-[28px]">
          {s.excerpts.map((x) => (
            <div key={x.tool} className="bg-london-100 px-8 py-6 flex flex-col">
              <div className="flex items-baseline gap-4">
                <p className="font-serif text-[30px] text-london-5">{x.tool}</p>
                <p className="text-[18px] text-london-35">
                  <Rich text={x.context} />
                </p>
              </div>
              <blockquote className="mt-3 border-l-[3px] border-london-70 pl-5 font-serif italic text-[21px] leading-[1.4] text-london-20">
                <Rich text={x.prompt.startsWith("[") ? x.prompt : `“${x.prompt}”`} />
              </blockquote>
              <p className="mt-4 text-[19px] leading-[1.4] text-london-20">
                <span className="font-semibold text-chicago-30">Outcome → </span>
                <Rich text={x.outcome} />
              </p>
            </div>
          ))}
        </div>
        <p className="mt-auto text-[17px] italic text-london-35">
          <Rich text={s.footnote} />
        </p>
      </div>
    </Frame>
  );
}

/** Picks the layout component for a slide. */
export function SlideView({ slide, index, total }: { slide: Slide } & Pos) {
  const pos = { index, total };
  switch (slide.layout) {
    case "cover":
      return <Cover s={slide} {...pos} />;
    case "jobs":
      return <Jobs s={slide} {...pos} />;
    case "evidence":
      return <Evidence s={slide} {...pos} />;
    case "experiments":
      return <Experiments s={slide} {...pos} />;
    case "trust":
      return <Trust s={slide} {...pos} />;
    case "architecture":
      return <Architecture s={slide} {...pos} />;
    case "plan":
      return <Plan s={slide} {...pos} />;
    case "closing":
      return <Closing s={slide} {...pos} />;
    case "synthesis":
      return <Synthesis s={slide} {...pos} />;
    case "scorecard":
      return <Scorecard s={slide} {...pos} />;
    case "columns":
      return <Columns s={slide} {...pos} />;
    case "tools":
      return <Tools s={slide} {...pos} />;
    case "excerpts":
      return <Excerpts s={slide} {...pos} />;
    case "journey":
      return <Journey s={slide} {...pos} />;
  }
}
