import type { Slide } from "./types";

/**
 * ALL SLIDE CONTENT LIVES HERE.
 *
 * v2 narrative: question → evidence → tension → answer → how we'd prove it
 * → how we'd build it → beyond → recommendation.
 * [Square brackets] render as yellow placeholders. **Double asterisks** = emphasis.
 */

export const deck = {
  title: "Meet the Editors",
  footer: "Meet the Editors · Case study",
};

export const slides: Slide[] = [
  // 1 ── Title ───────────────────────────────────────────────────────────────
  {
    id: "title",
    layout: "cover",
    kicker: "AI Lab case study",
    title: "Meet the Editors",
    standfirst: "A new conversational experience for The Economist",
    presenter: "Angus Keith · 10 November 2026",
    notes: ["Welcome. Twenty minutes, then questions."],
  },

  // 2 ── The brief, and my approach ──────────────────────────────────────────
  {
    id: "brief",
    layout: "columns",
    kicker: "The brief",
    title: "What if subscribers could talk to our editors?",
    standfirst: "By text, voice or video, in real time, about the stories they cover.",
    columns: [
      {
        title: "The concept",
        items: [
          "Virtual versions of named editors",
          "Personas: sceptical, optimistic, provocative",
          "Adapting to the reader's expertise",
          "Group discussions, with each other or with readers' agents",
        ],
      },
      {
        title: "How I treated it",
        items: ["As a hypothesis, not a plan", "Started from the reader, not the technology", "Tested it against the evidence and house policy"],
      },
      {
        title: "Where I focused",
        items: ["**Deep:** who it's for, editorial risk, validation", "**Light:** delivery plan and stack, which depend on what's already in place"],
      },
    ],
    notes: [
      "Quick recap so we share the starting point.",
      "The brief invites us to narrow, reshape or recommend against. I'll show how I got to an answer, not just the answer.",
      "I've gone light on delivery planning deliberately: it depends on capacity and existing work I'd learn about in week one.",
    ],
  },

  // 3 ── Who and why ─────────────────────────────────────────────────────────
  {
    id: "who",
    layout: "jobs",
    kicker: "The reader",
    title: "Who would use this, and why?",
    status: "hypothesis",
    jobs: [
      {
        title: "Engaged subscribers",
        text: "Already follow editors: **75%** engage with Insider. News lovers are also the heaviest AI news users. **Primary.**",
      },
      {
        title: "Professionals at work",
        text: "Prepping meetings and reports; want an expert view. The Ask FT pattern.",
      },
      {
        title: "Younger readers",
        text: "Under-35s use AI for news most, and are most comfortable with it. An acquisition route, later.",
      },
    ],
    example: {
      label: "Why",
      title: "Three different needs",
      steps: [
        "**Dig deeper:** explain, follow up. The top use of AI for news. Any good Q&A tool can do this.",
        "**Know where The Economist stands:** our published view, summarised and cited.",
        "**Hear from a specific editor:** the reason to “meet the editors”, and the one readers want **from the person**.",
      ],
    },
    caveat: "Segments are hypotheses to sharpen with the Lab's own data.",
    notes: [
      "1.3m subscribers (Jul 2026). Insider: 75% engaged, dormant subscribers returned, 80% of use in app (Press Gazette, self-reported).",
      "AI chatbot news users skew to 'news lovers': 38% vs 22% overall, and are more open to individual journalists (Reuters DNR 2026).",
      "Ask FT users: finance, consulting, legal. Uses: meeting and report prep, expert perspectives (FT Strategies).",
      "Under-35s: 16% use AI chatbots for news weekly; 18–24s far more comfortable with AI-made news (22% vs 7% of 55+).",
      "CHI 2024: readers send factual questions to bots; two-thirds of integrity challenges were aimed at the human author. Journalists want opinion routed to them.",
      "For The Economist: retention, differentiation from chatbots, a signal of what readers want explained.",
    ],
  },

  // 4 ── Evidence ────────────────────────────────────────────────────────────
  {
    id: "evidence",
    layout: "evidence",
    kicker: "The evidence",
    title: "Strong demand, clear warnings",
    signals: [
      {
        figure: "42–49%",
        label: "of AI news users ask follow-up questions",
        source: "[Reuters Institute; to confirm]",
        caveat: "Self-reported",
        ref: 1,
      },
      {
        figure: "20%",
        label: "trust AI news answers, vs 37% who trust news",
        source: "[Reuters Institute; to confirm]",
        caveat: "Favours a trusted, cited source",
        ref: 2,
      },
      {
        figure: "75%",
        label: "of subscribers engage with Insider, editors on camera",
        source: "The Economist, via Press Gazette",
        caveat: "Self-reported",
        ref: 3,
      },
      {
        figure: "22%",
        label: "accept AI-written opinion, the least-accepted genre",
        source: "[Source to confirm]",
        caveat: "Synthetic video is the most opposed format",
        ref: 4,
      },
    ],
    conclusion: {
      enough: "Readers **want to ask**, and they value **real editors**",
      notEnough: "They don't want **AI opinion** or **synthetic presenters**",
    },
    sources: [
      "[Follow-up questions source, to confirm]",
      "[Trust in AI news answers source, to confirm]",
      "Press Gazette, Economist Insider retention, 18 Jun 2026",
      "[AI genre acceptance source, to confirm]",
    ],
    notes: [
      "Elsewhere, failures cluster on quotes and opinion: LA Times Insights, the Washington Post's AI podcast, Apple's BBC summaries.",
      "NYT Cooking: subscribers rejected AI that felt like dilution, even when it was accurate.",
      "No publisher has independent outcome data. We'd need our own.",
    ],
  },

  // 5 ── The tension ─────────────────────────────────────────────────────────
  {
    id: "tension",
    layout: "synthesis",
    kicker: "The tension",
    title: "Do we need to imitate the editor?",
    bottomLine: [
      "Readers value getting an editor's view. But they come to The Economist for **human** journalism.",
      "A synthetic editor risks **devaluing the very thing** that makes the view worth having.",
      "And a hallucination attributed to a named editor is unacceptable.",
    ],
    constraints: {
      title: "What The Economist has already decided",
      items: [
        "People produce the journalism; AI **transforms** it, it doesn't author it",
        "Always transparent about AI",
        "Audio Briefings use **invented** personae, not journalists",
        "Visible human editors (Insider) are a deliberate bet",
      ],
    },
    footnote: "The Economist, How we handle AI-generated content, 9 Jul 2026.",
    notes: [
      "This is the turning point. The value is real, but the proposed form fights house policy and reader expectations.",
      "The line between fact, analysis and opinion is nuanced. Hard to police when a model speaks as a person.",
    ],
  },

  // 6 ── The answer ──────────────────────────────────────────────────────────
  {
    id: "answer",
    layout: "experiments",
    kicker: "My answer",
    title: "Ask The Economist, through an editor's lens",
    standfirst: "The AI is the guide. The editor stays the author.",
    status: "recommendation",
    columns: ["Example", "Rule", "When"],
    rows: [
      { question: "**Collective**", cells: ["The Economist's position", "Cited and dated", "Default"] },
      { question: "**Curate**", cells: ["“Henry has covered this here and here”", "Links only", "Test first"] },
      { question: "**Report**", cells: ["“Henry wrote: ‘…’”", "Verbatim quotes only", "Test first"] },
      { question: "**Impersonate**", cells: ["“I think…”", "Not without evidence", "Later, if ever"] },
    ],
    mock: {
      label: "Prototype",
      context: "Reading: [Henry Curr on the AI investment boom] · Editor lens",
      question: "What would turn this boom into a bust?",
      answer: ["Henry Curr has written about this three times this year.¹ ² ³", "In [month] he wrote: “[verbatim quote]”³"],
      citations: ["[Article], [date]", "[Article], [date]", "[Article], [date]"],
      asOf: "Based on his published work to [date]",
      disclaimer: "AI summary of published journalism, not a new view from the editor.",
    },
    notes: [
      "New compared with what the Lab has: perspective. Who holds a view, since when, and a route to the real person.",
      "Personas: no. Tilting sceptical or optimistic colours a position that should be clear. For challenge, surface dissent we've published.",
      "Group discussions: same problem. Compare what editors have published instead.",
      "Adapting to expertise changes depth, not position. A later test.",
      "Safeguards: claim-level citation checks, fact/opinion tags, dated views, 'not covered' refusals, editor opt-in, red-teaming. (Appendix A1.)",
      "Guardrail: it mustn't reduce engagement with human journalism.",
    ],
  },

  // 7 ── How we'd find out ───────────────────────────────────────────────────
  {
    id: "method",
    layout: "plan",
    kicker: "Validation",
    title: "How we'd find out",
    standfirst: "Each part is tested on its own. Timings are indicative.",
    phases: [
      {
        weeks: "~2–3 weeks",
        span: 3,
        title: "Discover",
        activities: ["Is the corpus attributable?", "What do subscribers ask?", "Will an editor take part?"],
        metrics: ["Corpus coverage"],
        gate: "Viable corpus, willing editor",
      },
      {
        weeks: "~3–4 weeks",
        span: 4,
        title: "Prove integrity",
        activities: ["One editor, text only", "Evals built with the editor", "Red-team"],
        metrics: ["Faithfulness", "Refusal rate"],
        gate: "Editor signs off",
      },
      {
        weeks: "~3–4 weeks",
        span: 4,
        title: "Prove value",
        activities: ["Editor lens vs collective", "Curate vs report"],
        metrics: ["Preference", "Return use"],
        gate: "Beats the collective answer",
      },
    ],
    team: ["Product", "Engineers ×2", "Design", "Editorial partner", "Data (shared)"],
    decisions: {
      invest: "Next step up: more editors, voice, agents",
      pivot: "Collective Q&A plus recorded editor answers",
      stop: "Integrity can't be met",
    },
    notes: [
      "Each step: hypothesis, smallest test that could disprove it, metric agreed in advance, then go, reshape or stop.",
      "Integrity before demand: if editors won't put their name to it, nothing else matters.",
      "A small pod, the model they already use (CarPlay). Editorial is a member, not a reviewer at the end.",
      "Video only after every earlier gate passes.",
    ],
  },

  // 8 ── How we'd build it ───────────────────────────────────────────────────
  {
    id: "build",
    layout: "architecture",
    kicker: "Technology",
    title: "How we'd build it",
    standfirst: "Generation is a commodity. Attribution and verification are the hard part.",
    layers: [
      { name: "Analyse & route", detail: "What kind of question? Whose lens?", decision: "Build" },
      { name: "Look up", detail: "The editor's work, with author and date", decision: "Integrate" },
      { name: "Answer", detail: "Quote-first, third person", decision: "Integrate" },
      { name: "Validate", detail: "Check every claim; fall back to links", decision: "Build" },
      { name: "Render", detail: "Text first; voice later", decision: "Buy" },
      { name: "Evaluate", detail: "Scored with editors", decision: "Build" },
    ],
    columns: [
      { title: "Buy", items: ["Models", "Voice and video", "Observability"] },
      { title: "Build", items: ["Attribution", "Verification", "Editorial evals"] },
      { title: "Reuse", items: ["Audio Briefings pipeline", "Article Q&A prototype"] },
    ],
    footnote: "Assumes nothing about the current stack. Vendor choices follow an audit.",
    notes: [
      "First question is the corpus, not the model: most articles are unsigned.",
      "In real time there's no human edit per answer, so validation is automated. If it fails, regenerate once, then fall back to links.",
      "Off-the-shelf to learn; review open source for production cost.",
      "My background: gen-AI audio pipelines with script generation, fact-checking and ElevenLabs. Close to Audio Briefings.",
    ],
  },

  // 9 ── Beyond the app ──────────────────────────────────────────────────────
  {
    id: "agents",
    layout: "closing",
    kicker: "Agents",
    title: "Beyond the app",
    standfirst: "Readers increasingly arrive through AI agents. The same core can serve them.",
    opportunities: [
      { title: "Our app and site", items: ["The full experience", "The subscriber relationship"] },
      { title: "Readers' own agents", items: ["Through MCP, entitled by subscription", "Cited answers that link back"] },
    ],
    foundation: { title: "One core", items: ["Retrieval", "Attribution", "Checks", "Entitlements"] },
    principle: "Attribution keeps The Economist visible inside someone else's interface.",
    caveat: "How far to go with agents is a strategy call. This just needs to be ready.",
    notes: [
      "Search referrals are falling; agent traffic is replacing human traffic.",
      "The Economist already experiments: the Graphs ChatGPT app. [How did it do?]",
      "Platforms are immature, so keep bets small and reversible.",
    ],
  },

  // 10 ── Recommendation ─────────────────────────────────────────────────────
  {
    id: "close",
    layout: "columns",
    kicker: "Recommendation",
    title: "Start with the lens. Let evidence decide the rest",
    columns: [
      { title: "Build", items: ["Ask The Economist, with an editor lens", "Editors quoted, never imitated"] },
      { title: "Test first", numbered: true, items: ["Is the corpus attributable?", "Can we stay faithful?", "Do readers value it?"] },
      { title: "Then, if it earns it", items: ["Voice", "Agents", "Video, last"] },
    ],
    notes: ["Thank you. Questions."],
  },

  // ═══ APPENDIX ═══════════════════════════════════════════════════════════════

  // Editorial safeguards (moved from main deck) ────────────────────────────────
  {
    id: "appendix-safeguards",
    layout: "trust",
    appendix: true,
    kicker: "Appendix · Editorial safeguards",
    title: "Three voices, never blurred",
    tiers: [
      { label: "The Economist's position", who: "Institutional, unsigned", rule: "Summarise and cite" },
      { label: "An editor's published view", who: "Attributable, dated", rule: "Quote verbatim, with consent" },
      { label: "New AI-generated opinion", who: "Approved by no one", rule: "Never presented as anyone's view" },
    ],
    principles: [
      { title: "Third person", text: "Never “I think”" },
      { title: "Quote", text: "Claim-level citation checks" },
      { title: "Tag", text: "Fact, analysis or opinion" },
      { title: "Date", text: "Show when a view changed" },
      { title: "Refuse", text: "“We haven't covered that”" },
      { title: "Consent", text: "Editors opt in" },
      { title: "Red-team", text: "Before every release" },
    ],
    principle: "Editorial co-owns the evals and the sign-off.",
    notes: ["Use in Q&A on editorial risk.", "Review tiered by risk, as with curated vs personalised Audio Briefings."],
  },
  // Source: research-synthesis.md (8 Nov 2026, revised 9 Nov). Evidence IDs
  // (S1, CJ1…) refer to research.md. Reference material for Q&A.

  // A1 ────────────────────────────────────────────────────────────────────────
  {
    id: "appendix-synthesis",
    layout: "synthesis",
    appendix: true,
    kicker: "Appendix · Research synthesis",
    title: "The evidence supports the problem, not the avatar",
    status: "evidence",
    bottomLine: [
      "The evidence supports the **problem** and the **conversational** core. It supports appetite for **named editors**, but for the real humans, not synthetic ones.",
      "It is weakest on **video avatars**, and it contradicts **persona modes**.",
      "The Economist's own policy, products and strategy point the same way: AI may *transform* its journalism (summaries, audio, translation, grounded briefings) but not *author* it.",
      "No publisher has independent outcome data, so the value case must be **tested, not assumed**.",
    ],
    constraints: {
      title: "What The Economist has already decided",
      items: [
        "**Policy (9 Jul 2026):** people produce the journalism; AI extends reach in new formats; always transparent; privacy and copyright first.",
        "**Strategy:** visible human editors (Insider, Play) are the bet against AI; no licensing to commercial chatbots; controlled presence in agents.",
        "**The Lab already ships or prototypes** grounded audio (Audio Briefings) and article Q&A. Any proposal must build on these, not duplicate them.",
        "**The Lab is building capability** towards persona and voice work (job advertisement).",
      ],
    },
    footnote:
      "Research synthesis, 8 Nov 2026 (revised 9 Nov). Directional, not decided. Evidence IDs refer to the accompanying research log.",
    notes: [
      "Use in Q&A if asked what the recommendation rests on.",
      "Transform, not author: this is The Economist's own line, so the recommendation is aligned with house policy, not imposed on it.",
      "The Lab is building persona and voice capability. Some of the panel may be invested in that direction, so acknowledge it rather than dismiss it.",
    ],
  },

  // A2 ────────────────────────────────────────────────────────────────────────
  {
    id: "appendix-scorecard-value",
    layout: "scorecard",
    appendix: true,
    kicker: "Appendix · Hypothesis scorecard",
    title: "Conversation is promising; video is weakest",
    rows: [
      {
        id: "P",
        hypothesis: "A reason to ask The Economist, not a general assistant, on owned surfaces or through agents",
        rating: "Strong",
        strength: "strong",
        revised: true,
        evidence:
          "Trust in AI news answers 20% vs 37% for news (S1); search referrals −33% (S1); people pay for unique content (S1); The Economist withholds content from chatbots (E7)",
        direction: "Holds",
      },
      {
        id: "H1",
        hypothesis: "Conversation adds value",
        rating: "Promising; unvalidated for Economist subscribers",
        strength: "moderate",
        revised: true,
        evidence:
          "Follow-up questions are the top AI news use: 42% (CJ1), 49% (CJ3); human “ask the journalist” formats widespread (H-1–H-6); no causal outcome data anywhere (U5); AI companions at events paused (E4)",
        direction: "Build, instrumented",
      },
      {
        id: "H2",
        hypothesis: "A named editor's view adds value",
        rating: "Strong for humans; synthetic is high-risk, not disproven",
        strength: "moderate",
        revised: true,
        evidence:
          "Insider: 75% engaged, retention up (E14, self-reported); readers send opinion to humans, facts to bots (CJ9); opinion is the least-accepted AI genre, 22% (F-4); artificial presenter 19% (F-3); collective ethos; Audio Briefings uses AI personae, not journalists (P-AB)",
        direction: "Editors as cited sources in their own words; synthetic editor speech deferred",
      },
      {
        id: "H3",
        hypothesis: "Video adds value",
        rating: "Weakest",
        strength: "weak",
        evidence:
          "Realistic synthetic video most opposed, even when disclosed (F-5); format conversion a niche use (CJ1, CJ3); owned-site video falling (S1); Insider live dropped (E15); Channel 4 AI presenter a stunt (F-9); avatars ~$0.10–0.37/min (T-1)",
        direction: "Defer; consent-gated experiment only",
      },
      {
        id: "H4",
        hypothesis: "Voice adds value",
        rating: "Moderate (indirect)",
        strength: "moderate",
        evidence:
          "Synthetic voices pass blind tests (F-6, non-news); the Lab ships audio (P-AB); Insider added audio mode (E15); natural-language interactivity a draw, 56% (CJ4)",
        direction: "Test",
      },
      {
        id: "H5",
        hypothesis: "Repeat use: subscribers know what to ask",
        rating: "Weak",
        strength: "weak",
        evidence: "Suggested questions ~6× the open box (U1, vendor); TIME +139% return (S2, self-reported, self-selected)",
        direction: "Test with suggested questions",
      },
    ],
    footnote: "† Rating revised 9 Nov after review. Evidence IDs refer to the accompanying research log.",
    notes: [
      "H1 is promising but unvalidated for our subscribers. Demand signals are strong, and outcome data doesn't exist anywhere.",
      "H2 is the crux: strong appetite for the real editors; synthetic editor speech is high-risk, though not disproven.",
      "H3 video has the weakest case and the strongest opposition, even when disclosed.",
    ],
  },

  // A3 ────────────────────────────────────────────────────────────────────────
  {
    id: "appendix-scorecard-feasibility",
    layout: "scorecard",
    appendix: true,
    kicker: "Appendix · Hypothesis scorecard",
    title: "Feasibility and viability: two go/no-go gates",
    rows: [
      {
        id: "F1",
        hypothesis: "Faithful; says “I don't know”",
        rating: "Feasible if quoting; hard if simulating",
        strength: "moderate",
        evidence:
          "Own-content-only is industry practice (#30); LLMs simulating real people fall well below a human baseline (EV2); over-refusal is real (C1)",
        direction: "**Go/no-go gate**",
      },
      {
        id: "F2",
        hypothesis: "Conversational latency",
        rating: "Feasible",
        strength: "strong",
        evidence: "~0.8–1.8s speech-to-speech; ~1s cascade (T-2); FT chose trust over speed (S3)",
        direction: "Cascade architecture",
      },
      {
        id: "F3",
        hypothesis: "Accuracy to Economist standard",
        rating: "Risk evident",
        strength: "risk",
        evidence:
          "~Half of general-assistant news answers had a significant issue (EV1); grounding plus checks is the house pattern (EV4)",
        direction: "Measure (EBU-style rubric)",
      },
      {
        id: "F4",
        hypothesis: "Enough attributable editor material",
        rating: "Assumed",
        strength: "unknown",
        evidence: "Insider, podcasts, special reports exist (E12, E19)",
        direction: "Week-1 discovery",
      },
      {
        id: "F5",
        hypothesis: "Resists misuse",
        rating: "Risk evident",
        strength: "risk",
        evidence: "LA Times Insights pulled (C7); Meta replicas harmful (R-3); Apple/BBC (C8)",
        direction: "**Go/no-go gate**; red-team",
      },
      {
        id: "V1",
        hypothesis: "Cost",
        rating: "Fine for text and voice; material for video",
        strength: "moderate",
        evidence: "T-1, T-2; illustrative ~$6/month for a heavy avatar user vs a ~£23 subscription",
        direction: "Cap any video pilot",
      },
      {
        id: "V2",
        hypothesis: "Editorial acceptance",
        rating: "Conditional",
        strength: "moderate",
        evidence: "Policy allows transformation, rules out authorship (P1–P4); journalists want opinion routed to them (CJ9)",
        direction: "Design to policy",
      },
      {
        id: "V3",
        hypothesis: "Agents",
        rating: "Clear pattern",
        strength: "strong",
        evidence: "Controlled, entitled MCP access (A1, E9); agents want structured text (E10)",
        direction: "Same cited core, agent front end",
      },
      {
        id: "V4",
        hypothesis: "Newsroom effort",
        rating: "Unknown",
        strength: "unknown",
        evidence: "Audio Briefings' curated vs personalised tiers (P-AB)",
        direction: "Test in pilot",
      },
      {
        id: "V5",
        hypothesis: "Cannibalisation",
        rating: "Unknown",
        strength: "unknown",
        evidence: "Insider didn't cannibalise podcasts (E14)",
        direction: "Measure",
      },
      {
        id: "V6",
        hypothesis: "Legal",
        rating: "Unresolved; needs legal and editorial review",
        strength: "unknown",
        revised: true,
        evidence: "EU AI Act Art. 50: AI disclosure, deepfake labelling of real-person avatars (L1–L3); UK not researched",
        direction: "Labelling as the floor",
      },
    ],
    footnote: "† Rating revised 9 Nov after review. Evidence IDs refer to the accompanying research log.",
    notes: [
      "F1 and F5 are the go/no-go gates: faithfulness and resistance to misuse.",
      "Latency and text/voice cost are solved problems. Video cost is material but not prohibitive.",
      "Legal is unresolved: EU AI Act labelling is the floor, and the UK position hasn't been researched yet.",
    ],
  },

  // A4 ────────────────────────────────────────────────────────────────────────
  {
    id: "appendix-open",
    layout: "columns",
    appendix: true,
    kicker: "Appendix · Open questions",
    title: "Tensions, discovery questions and caveats",
    columns: [
      {
        title: "Tensions to resolve",
        numbered: true,
        items: [
          "**Strengthen vs diminish the human editor.** Leading candidate: AI answers facts from editors' attributable work, with citations; opinion is routed to the real editor or answered only in their own recorded words.",
          "**Collective vs named voice.** “Ask The Economist” with editors as cited voices, or editor-specific entry points.",
          "**Faithfulness vs usefulness.** The refusal rate on fresh news.",
          "**Answering the brief's ambition.** Build towards real-time video editors in stages, gated on evidence.",
        ],
      },
      {
        title: "Discovery questions",
        items: [
          "What is the status of the Lab's article Q&A prototype?",
          "What do Economist subscribers actually ask? What are Insider Q&A volumes?",
          "What is the audience market mix? (UK attitudes to AI are the most negative on several measures.)",
          "What is the UK position on likeness and voice rights?",
          "To the best of our knowledge, no study has tested a *named-journalist* avatar specifically.",
        ],
      },
      {
        title: "Handle with care",
        items: [
          "**Self-reported:** TIME +139% (S2); Insider 75% and retention (E14).",
          "**Vendor sources:** Taboola (U1); avatar pricing (T-1); Cartesia (T-2); HeyGen (G7).",
          "**Single paywalled source:** Meta “fell flat” (R-1); no engagement data exists.",
          "**Not independently verified:** The Economist's AI policy and Audio Briefings pages.",
          "**Hypothetical or small samples:** CHI 2024 (CJ9, n=124, MTurk); RJI (F-8, n=46).",
        ],
      },
    ],
    notes: [
      "The tensions are where I'd most want the panel's view.",
      "Discovery questions are framed as questions, not assumptions: things I'd answer in weeks 1–3.",
      "Be upfront about evidence quality. Several headline figures are self-reported or vendor-sourced.",
    ],
  },

  // A5 ────────────────────────────────────────────────────────────────────────
  {
    id: "appendix-ai-use",
    layout: "tools",
    appendix: true,
    kicker: "Appendix · How I used AI",
    title: "Different tools for different jobs",
    standfirst: "AI gave me breadth and speed. The judgement and the positions are mine.",
    tools: [
      {
        name: "Gemini",
        role: "Research and questions",
        uses: ["Finding and summarising external sources", "Answering factual questions as they came up"],
      },
      {
        name: "ChatGPT",
        role: "Freeform, open thinking",
        uses: [
          "Thinking out loud before committing to a position",
          "Challenging my research synthesis: its review led me to soften four ratings",
        ],
      },
      {
        name: "Claude",
        role: "Structured preparation",
        uses: [
          "Staging the work: research, then synthesis, then answers",
          "Research questions, evidence log and assumptions log",
          "The hypothesis scorecard (A2–A3)",
        ],
      },
      {
        name: "Claude Code",
        role: "Building this presentation",
        uses: [
          "A Keynote-style React deck, built from a written brief",
          "The Economist design system's published colour and type tokens",
          "All content in one editable file, so the words stay mine",
        ],
      },
    ],
    mine: {
      title: "What stays mine",
      items: [
        "The recommendation and the positions behind it",
        "Which evidence to trust, and how much",
        "Checking sources before they're cited",
        "The final wording on every slide",
      ],
    },
    notes: [
      "The brief encourages AI use that showcases original thinking. This is how I split the work.",
      "Using one model to challenge another's output was the most useful habit: the ChatGPT review made the synthesis more honest.",
      "Claude Code built the deck itself. That's the same build-fast, judge-carefully approach I'd bring to the Lab.",
      "Transcripts are ready to share (next slide).",
    ],
  },

  // A6 ────────────────────────────────────────────────────────────────────────
  {
    id: "appendix-ai-examples",
    layout: "excerpts",
    appendix: true,
    kicker: "Appendix · How I used AI",
    title: "Examples from the transcripts",
    excerpts: [
      {
        tool: "Claude Code",
        context: "Starting this presentation",
        prompt:
          "I want a simple website which works like a presentation. It must be able to go fullscreen and I need to be able to click through - it should work like keynote. And it should use the Economist style guide.",
        outcome:
          "A working deck in one session, with colours and type taken from the Economist design system's published stylesheet. I then edited the content.",
      },
      {
        tool: "ChatGPT",
        context: "Reviewing the research synthesis, 9 Nov",
        prompt: "[Paste excerpt from the review conversation]",
        outcome:
          "Four ratings softened: conversation became “promising, unvalidated”; synthetic editors “high-risk, not disproven”; legal “unresolved”; the problem made channel-agnostic.",
      },
      {
        tool: "Gemini",
        context: "[Research question]",
        prompt: "[Paste excerpt]",
        outcome: "[What it found, and what I did with it]",
      },
      {
        tool: "Claude",
        context: "Shaping the concept, 9 Nov",
        prompt:
          "One thing to consider with editors - is it better to editorially deliver the info to users in a different way, ie \"Henry Curr said X\" or \"Henry Curr has covered this here and here\" etc rather than pretending to be Henry Curr",
        outcome:
          "My pushback became the core design choice: third-person attribution (curate, report) instead of impersonation. I also rejected personas and reframed Claude's \"views with receipts\" idea into the editor lens.",
      },
    ],
    footnote: "Excerpts lightly trimmed. Full transcripts available on request.",
    notes: [
      "Have the full transcripts open in browser tabs, ready to show.",
      "The ChatGPT example is the strongest: it shows AI used to challenge my own conclusions, not just to produce them.",
      "[Choose excerpts that show a question I asked, a pushback I gave, or a decision I made differently from the AI's suggestion.]",
    ],
  },
];

/** Number of main-deck slides (appendix excluded). */
export const mainCount = slides.filter((s) => !s.appendix).length;

/** Display label for a slide: "3" in the main deck, "A2" in the appendix. */
export function slideLabel(index: number): string {
  return index < mainCount ? String(index + 1) : `A${index - mainCount + 1}`;
}
