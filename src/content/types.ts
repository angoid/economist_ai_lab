/**
 * Slide content types. Each slide picks a `layout`; the fields for that layout
 * are checked by TypeScript, so a typo in slides.ts shows up as an error.
 *
 * Inline formatting in any text field:
 *   **bold**        → emphasis
 *   [square text]   → highlighted placeholder (something to confirm or replace)
 */

/** Labels a slide (or block) as established evidence, hypothesis or recommendation. */
export type Status = "evidence" | "hypothesis" | "recommendation" | "direction";

interface Base {
  id: string;
  kicker: string;
  title: string;
  standfirst?: string;
  status?: Status;
  /** Appendix slides come after the main deck and are labelled A1, A2… */
  appendix?: boolean;
  /** Presenter notes: one talking point per string. */
  notes: string[];
}

export interface CoverSlide extends Base {
  layout: "cover";
  presenter: string;
  /** Optional: omit both for a plain title slide. */
  contrast?: { label: string; heading: string; text: string }[];
  recommendation?: string;
  /** Optional short principles listed under the recommendation. */
  principles?: string[];
}

export interface JobsSlide extends Base {
  layout: "jobs";
  jobs: { title: string; text: string }[];
  example: { label: string; title: string; steps: string[] };
  caveat: string;
}

export interface EvidenceSlide extends Base {
  layout: "evidence";
  signals: {
    figure: string;
    label: string;
    source: string;
    caveat: string;
    ref: number;
    /** Optional bar ladder (values are percentages). */
    ladder?: { label: string; value: number }[];
  }[];
  conclusion?: { enough: string; notEnough: string };
  /** Optional one-line summary, a lighter alternative to the conclusion boxes. */
  takeaway?: string;
  sources: string[];
  /** Optional caveat line under the sources. */
  footnote?: string;
}

export interface ExperimentsSlide extends Base {
  layout: "experiments";
  columns: [string, string, string];
  rows: { question: string; cells: [string, string, string] }[];
  mock: {
    label: string;
    context: string;
    question: string;
    answer: string[];
    citations: string[];
    asOf: string;
    disclaimer: string;
  };
}

export interface TrustSlide extends Base {
  layout: "trust";
  tiers: { label: string; who: string; rule: string }[];
  principles: { title: string; text: string }[];
  principle: string;
}

export interface ArchitectureSlide extends Base {
  layout: "architecture";
  layers: { name: string; detail: string; decision?: "Build" | "Buy" | "Integrate"; label?: string }[];
  columns: { title: string; items: string[] }[];
  footnote: string;
}

export interface PlanSlide extends Base {
  layout: "plan";
  phases: { weeks: string; span: number; title: string; activities: string[]; metrics: string[]; gate: string }[];
  team: string[];
  decisions: { invest: string; pivot: string; stop: string };
}

export interface ClosingSlide extends Base {
  layout: "closing";
  opportunities: { title: string; items: string[] }[];
  foundation: { title: string; items: string[] };
  principle: string;
  caveat: string;
}

// ── Appendix layouts ───────────────────────────────────────────────────────

export interface SynthesisSlide extends Base {
  layout: "synthesis";
  bottomLine: string[];
  constraints: { title: string; items: string[] };
  footnote: string;
}

/** Evidence strength, used to colour the scorecard marker. */
export type Strength = "strong" | "moderate" | "weak" | "risk" | "unknown";

export interface ScorecardSlide extends Base {
  layout: "scorecard";
  rows: {
    id: string;
    hypothesis: string;
    rating: string;
    strength: Strength;
    evidence: string;
    direction: string;
    /** Rating changed since the original record. */
    revised?: boolean;
  }[];
  footnote: string;
}

export interface ColumnsSlide extends Base {
  layout: "columns";
  columns: { title: string; items: string[]; numbered?: boolean }[];
  footnote?: string;
}

export interface ToolsSlide extends Base {
  layout: "tools";
  tools: { name: string; role: string; uses: string[] }[];
  mine: { title: string; items: string[] };
}

export interface ExcerptsSlide extends Base {
  layout: "excerpts";
  excerpts: { tool: string; context: string; prompt: string; outcome: string }[];
  footnote: string;
}

export interface JourneySlide extends Base {
  layout: "journey";
  journeyLabel: string;
  journey: string[];
  points: { title: string; text: string }[];
  /** Optional mock-up panel; omit for a full-width slide. */
  mock?: {
    label: string;
    context: string;
    question: string;
    answer: string[];
    citations: string[];
    asOf: string;
    disclaimer: string;
    followUps?: string[];
  };
}

export type Slide =
  | JourneySlide
  | ToolsSlide
  | ExcerptsSlide
  | SynthesisSlide
  | ScorecardSlide
  | ColumnsSlide
  | CoverSlide
  | JobsSlide
  | EvidenceSlide
  | ExperimentsSlide
  | TrustSlide
  | ArchitectureSlide
  | PlanSlide
  | ClosingSlide;
