import type { Slide } from "./types";

/**
 * ALL SLIDE CONTENT LIVES HERE.
 *
 * Holding text: draft copy for iteration. Anything in [square brackets] renders
 * as a yellow placeholder: a fact, source or internal detail still to confirm.
 * Use **double asterisks** for emphasis.
 */

export const deck = {
  title: "Meet the Editors",
  footer: "Meet the Editors · Case study",
};

export const slides: Slide[] = [
  // 1 ─────────────────────────────────────────────────────────────────────────
  {
    id: "cover",
    layout: "cover",
    kicker: "AI Lab case study",
    title: "Meet the Editors",
    standfirst:
      "What if our subscribers could talk to virtual versions of The Economist’s editors by text, voice or video, in real time, about the stories they cover?",
    presenter: "Angus Keith · 10/11/2026",
    status: "recommendation",
    contrast: [
      {
        label: "The opportunity",
        heading: "Make Economist expertise more interactive",
        text: "Help subscribers question, explore and follow the reasoning behind the journalism.",
      },
      {
        label: "The proposed implementation",
        heading: "Synthetic avatars of named editors",
        text: "Text, voice and video representations of real journalists. Demand is unproven and the editorial risk is real.",
      },
    ],
    recommendation:
      "A focused, time-boxed exploration. Avatars stay possible, but they have to **earn their place through evidence**.",
    notes: [
      "Separate the opportunity from the implementation early. I'm enthusiastic about the first and sceptical about starting with the second.",
      "This is provisional: a few hours of outside-in research, explicitly subject to internal discovery.",
      "Three things to leave with: the vision, what I'd test first, and what would make me invest, change course or stop.",
    ],
  },

  // 2 ─────────────────────────────────────────────────────────────────────────
  {
    id: "problem",
    layout: "jobs",
    kicker: "The subscriber problem",
    title: "What would subscribers hire this for?",
    standfirst: "Four candidate jobs. Each one is a hypothesis to test, not a finding.",
    status: "hypothesis",
    jobs: [
      { title: "Understand", text: "Make sense of a complex development quickly, at the depth I choose." },
      { title: "Challenge", text: "Test an argument. Ask what would have to be true for it to be wrong." },
      { title: "Access reasoning", text: "Get to an editor's published reasoning and the evidence behind it." },
      { title: "Follow", text: "Track a developing story and see what has changed since I last read." },
    ],
    example: {
      label: "Illustrative example",
      title: "A subscriber reading Henry Curr's analysis of the AI investment boom",
      steps: [
        "Asks: “What would turn this boom into a bust?”",
        "Gets an answer grounded in published pieces, with citations and dates",
        "Follows up: “What has changed since this was written?”",
        "Chooses to be told when the argument moves",
      ],
    },
    caveat: "Hypotheses about subscriber needs. [Validate against internal research and subscriber interviews.]",
    notes: [
      "Start with the job rather than the technology. Subscribers don't want an avatar, they want to understand something.",
      "Walk through the AI-boom example. Note it uses only published work, and the editor's view stays theirs.",
      "Ask the room which of these jobs existing research already supports. [Insert any internal evidence I learn about.]",
    ],
  },

  // 3 ─────────────────────────────────────────────────────────────────────────
  {
    id: "signals",
    layout: "evidence",
    kicker: "The evidence so far",
    title: "Promising signals, unproven economics",
    status: "evidence",
    signals: [
      {
        figure: "42%",
        label: "of AI-chatbot news users ask follow-up questions",
        source: "Reuters Institute",
        caveat: "Self-reported survey behaviour",
        ref: 1,
      },
      {
        figure: "139%",
        label: "more likely to return, spending roughly twice as long on site (reported)",
        source: "TIME AI",
        caveat: "Observational association, not causal evidence",
        ref: 2,
      },
      {
        figure: "Ask FT",
        label: "Conversational journalism already deployed to subscribers",
        source: "Financial Times",
        caveat: "Qualitative evidence of utility, little public evidence of commercial impact",
        ref: 3,
      },
      {
        figure: "Insider",
        label: "Reported engagement with access to human editors",
        source: "The Economist",
        caveat: "Does not show demand for synthetic representations",
        ref: 4,
      },
    ],
    conclusion: {
      enough: "Enough evidence to justify **experimentation**",
      notEnough: "Not enough to justify a **major product commitment**",
    },
    sources: [
      "Reuters Institute, [report title, year and page reference to confirm]",
      "TIME, [announcement or interview source and date to confirm]",
      "Financial Times, Ask FT [public statements and date to confirm]",
      "The Economist, Economist Insider [reported engagement source to confirm]",
    ],
    notes: [
      "Be explicit about the quality of each signal. None of them is causal evidence of retention.",
      "TIME's figure is an association, and heavy users self-select into new features.",
      "Insider shows people value access to *human* editors. That's an argument for the opportunity, not the avatar.",
      "Conclusion: fund experiments, not a platform.",
    ],
  },

  // 4 ─────────────────────────────────────────────────────────────────────────
  {
    id: "experiments",
    layout: "experiments",
    kicker: "What I would test first",
    title: "From hypotheses to experiments",
    standfirst: "Three questions, each tested against what The Economist already offers.",
    columns: ["Smallest prototype", "Compare against", "Signal we need"],
    rows: [
      {
        question: "Does conversational access add value beyond existing experiences?",
        cells: [
          "Grounded Q&A over a narrow slice of the archive",
          "Search, article pages, newsletters [existing tools to confirm]",
          "Higher task success and comprehension",
        ],
      },
      {
        question: "Does a named editor's perspective add value beyond the collective voice?",
        cells: [
          "Identical answers, attributed to an editor or to the house voice",
          "Unattributed “Economist” answer",
          "Trust, preference and repeat use",
        ],
      },
      {
        question: "Do voice or video justify their cost and editorial risk?",
        cells: [
          "Voice on the best text variant; video as a clickable mock-up only",
          "Best-performing text variant",
          "Preference that survives cost, latency and trust",
        ],
      },
    ],
    mock: {
      label: "What a subscriber sees (prototype)",
      context: "Reading: [Article on the AI investment boom]",
      question: "What would turn this boom into a bust?",
      answer: [
        "Our coverage points to [two or three conditions drawn from published articles]¹ ²",
        "Henry Curr argued in [month, year] that [summary of published reasoning]³",
      ],
      citations: ["[Article title], [date]", "[Article title], [date]", "[Article title], [date]"],
      asOf: "Based on journalism published up to [date]",
      disclaimer: "A summary of published journalism, not a new view from the editor.",
    },
    notes: [
      "This is the heart of the plan. Each question isolates one variable.",
      "Q1 tests the conversation itself. If it doesn't beat search and a good article page, nothing else matters.",
      "Q2 is the real ‘Meet the Editors’ question: does the named person add anything beyond the institution?",
      "Q3 is last because it's the most expensive and the most risky. Only test it on a text experience that already works.",
      "Methods: moderated sessions with [n] subscribers, then an unmoderated comparative test. [Confirm research capacity.]",
    ],
  },

  // 5 ─────────────────────────────────────────────────────────────────────────
  {
    id: "trust",
    layout: "trust",
    kicker: "Editorial integrity",
    title: "Editorial trust is a product requirement",
    standfirst: "The product must never blur three different kinds of voice.",
    tiers: [
      {
        label: "The Economist's position",
        who: "Institutional, unsigned, collectively agreed",
        rule: "Can be summarised and cited as the paper's view",
      },
      {
        label: "An editor's published view",
        who: "Attributable, dated, in context",
        rule: "Can be quoted with attribution and date, with the editor's consent",
      },
      {
        label: "New AI-generated opinion",
        who: "Written and approved by no one",
        rule: "Must never be presented as anyone's view",
      },
    ],
    principles: [
      { title: "Grounding", text: "Answers come from published work" },
      { title: "Citations", text: "Every claim links to its source" },
      { title: "Temporal context", text: "Show when a view was held" },
      { title: "Consent", text: "Editors opt in and can opt out" },
      { title: "Oversight", text: "Editorial owns the policy" },
      { title: "Calibrated refusal", text: "Say “we haven't covered that”" },
      { title: "Adversarial evals", text: "Red-team before every release" },
    ],
    principle:
      "Trust has to be designed into the product and its operating processes. It can't be delegated to a system prompt.",
    notes: [
      "Synthetic editors put the hardest problem first: putting words in a real journalist's mouth.",
      "The refusal behaviour is a feature: ‘we haven't written about that’ is a trustworthy answer.",
      "Operating process matters as much as the model: who signs off policy, who reviews failures, how fast we correct.",
    ],
  },

  // 6 ─────────────────────────────────────────────────────────────────────────
  {
    id: "architecture",
    layout: "architecture",
    kicker: "Technical design",
    title: "Build the differentiation, buy the commodities",
    layers: [
      { name: "Content & metadata", detail: "Archive, authorship, dates, rights, entitlements", decision: "Integrate" },
      { name: "Retrieval & grounding", detail: "Hybrid search, reranking, provenance on every passage", decision: "Build" },
      { name: "Orchestration", detail: "Conversation state, query planning, model routing", decision: "Build" },
      { name: "Editorial controls & evals", detail: "Policies, eval sets, red-teaming, human review", decision: "Build" },
      { name: "Interfaces", detail: "Text first. Voice and video through providers", decision: "Buy" },
    ],
    columns: [
      {
        title: "Buy",
        items: [
          "Frontier models, behind a provider-neutral interface",
          "Speech-to-text, text-to-speech, video",
          "Vector and search infrastructure",
          "Tracing and observability tooling",
        ],
      },
      {
        title: "Build",
        items: [
          "Grounding tuned to the Economist corpus",
          "Attribution and provenance model",
          "Editorial eval harness and golden sets",
          "The subscriber experience",
        ],
      },
      {
        title: "Measure from day one",
        items: [
          "Accuracy and attribution, measured by evals",
          "Latency: p95 to first token [target TBC]",
          "Cost per conversation",
          "A trace for every answer",
        ],
      },
      {
        title: "Prototype vs production",
        items: [
          "**Weeks:** narrow corpus, offline evals, internal users",
          "**Production:** rights, entitlements, scale",
          "**Production:** monitoring, incident and correction process",
        ],
      },
    ],
    footnote:
      "Assumes nothing about The Economist's internal architecture. Integration points get mapped in weeks 1–3.",
    notes: [
      "Differentiation is the corpus, the provenance and the editorial controls, not the model.",
      "Keep models swappable: the frontier moves every quarter, and evals are what make swapping safe.",
      "Rights: confirm which archive content can be used for retrieval, and whether contributor terms differ. [Discover]",
      "A prototype is weeks of work. Production quality is mostly about entitlements, monitoring and correction.",
    ],
  },

  // 7 ─────────────────────────────────────────────────────────────────────────
  {
    id: "plan",
    layout: "plan",
    kicker: "Leading the team",
    title: "The first 12 weeks: ship, learn, decide",
    phases: [
      {
        weeks: "Weeks 1–3",
        span: 3,
        title: "Understand",
        activities: [
          "Review existing work and systems",
          "Talk to subscribers and editors",
          "Agree editorial constraints",
          "Prototype one narrow use case",
        ],
        metrics: ["Task success", "Comprehension"],
        gate: "Is there a narrow job worth testing?",
      },
      {
        weeks: "Weeks 4–7",
        span: 4,
        title: "Compare",
        activities: [
          "Run comparative tests against existing experiences",
          "Evaluate quality, usefulness and trust",
          "Iterate weekly",
        ],
        metrics: ["Editorial accuracy", "Attribution", "Trust"],
        gate: "Does conversation beat what exists?",
      },
      {
        weeks: "Weeks 8–12",
        span: 5,
        title: "Pilot",
        activities: [
          "Explore voice, and video only if justified",
          "Run a controlled pilot",
          "Make the investment decision",
        ],
        metrics: ["Latency and cost", "Repeat engagement", "Incremental subscriber outcomes"],
        gate: "Invest, pivot or stop",
      },
    ],
    team: [
      "Product lead",
      "AI engineers ×2",
      "Full-stack engineer",
      "Designer / researcher",
      "Editorial partner",
      "Data scientist (shared)",
    ],
    decisions: {
      invest: "Clear uplift over existing experiences at acceptable cost and trust",
      pivot: "Real value, but in a different job, format or audience",
      stop: "No incremental value, or trust can't be maintained",
    },
    notes: [
      "Small team, editorial in the room from day one, not as reviewers at the end.",
      "Metrics mature with the work: from task success early to incremental subscriber outcomes at the end.",
      "Stopping is a legitimate, successful outcome if the evidence says so.",
      "[Team size and composition to adjust once I understand existing AI Lab capacity.]",
    ],
  },

  // 8 ─────────────────────────────────────────────────────────────────────────
  {
    id: "beyond",
    layout: "closing",
    kicker: "A longer-term view",
    title: "Beyond avatars: The Economist as an intelligence service",
    status: "direction",
    opportunities: [
      {
        title: "Richer owned experiences",
        items: ["Personalisation", "Conversational exploration", "Proactive monitoring", "Event-driven updates"],
      },
      {
        title: "Economist intelligence, anywhere",
        items: [
          "Authenticated access from subscribers' own agents",
          "Entitlement-aware by design",
          "Attribution that travels with the content",
        ],
      },
    ],
    foundation: {
      title: "Shared foundation",
      items: ["Content", "Grounding", "Provenance", "Entitlements"],
    },
    principle: "Own the subscriber relationship, but don't depend on owning every interface.",
    caveat: "A possible longer-term direction, not a committed strategy or roadmap.",
    notes: [
      "Zoom out: the same capabilities serve the app and the agents subscribers will increasingly use.",
      "The shared foundation is the durable asset. Interfaces will keep changing.",
      "Close on humility: this is a direction to test, not a roadmap. Then open for questions.",
    ],
  },

  // ═══ APPENDIX ═══════════════════════════════════════════════════════════════
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
        context: "Structuring the preparation",
        prompt: "[Paste excerpt]",
        outcome: "[What it produced, e.g. the staged plan or the hypothesis scorecard]",
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
