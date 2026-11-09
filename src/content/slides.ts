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
    title: "Readers want to ask. They trust people to answer",
    signals: [
      {
        figure: "49%",
        label: "of people who use AI for news use it to ask **follow-up questions**: the top use, ahead of the latest news (46%)",
        source: "Demand",
        caveat: "Also 42% across 45 markets, the top use in 33 of them²",
        ref: 1,
      },
      {
        figure: "67%",
        label: "are comfortable with news made entirely by **human journalists**, vs 12% entirely by AI",
        source: "Trust",
        caveat: "Opinion is the genre least accepted from AI (22%). Human-only comfort rising: 58% → 64% in six countries since 2024",
        ref: 1,
      },
      {
        figure: "53% → 19%",
        label: "Comfort falls as AI moves from **transforming** journalism to **authoring and presenting** it",
        source: "Format",
        caveat: "With some human oversight. Audio and video asked together",
        ref: 3,
        ladder: [
          { label: "Translation", value: 53 },
          { label: "Article into audio or video", value: 39 },
          { label: "Writing the article", value: 33 },
          { label: "Artificial presenter or author", value: 19 },
        ],
      },
    ],
    conclusion: {
      enough: "Readers want to **ask questions**, and they trust **people**",
      notEnough: "They resist AI **presenting or authoring** the news",
    },
    sources: [
      "Reuters Institute, Generative AI & News Report 2026. 9 countries incl. US and UK, ~2,000 each, YouGov, Aug–Sep 2026",
      "Reuters Institute, Digital News Report 2026",
      "Reuters Institute, Generative AI & News Report 2025, Fig. 32. 6 countries incl. US and UK, ~12,000, YouGov, Jun–Jul 2025. Stable since 2024 (51%, 38%, 20%)",
    ],
    footnote:
      "Online surveys of the general public: what people say, not what they do, and not Economist subscribers.",
    notes: [
      "Three points: demand, trust, format.",
      "The ladder is the key chart: comfort falls as AI moves from transforming journalism to authoring and presenting it. It's The Economist's own 'transform, don't author' line, in readers' words.",
      "If asked why writing (33%) beats presenter (19%): a synthetic person is the step too far, which supports third person over impersonation.",
      "Insider, as a question: 'You'll know better than me, but Insider suggests subscribers value real editors. That's the need this builds on.'",
      "Backup: CHI 2024 (Hoque et al.): readers sent factual questions to a chatbot; two-thirds of challenges to an article were aimed at the human author. Small sample (124, US, MTurk).",
    ],
  },

  // 5 ── The tension ─────────────────────────────────────────────────────────
  {
    id: "tension",
    layout: "synthesis",
    kicker: "The tension",
    title: "Do we need to imitate the editor?",
    bottomLine: [
      "Readers value an editor's view. But they come to The Economist for **human** journalism.",
      "Insider exists to **showcase humans**. A synthetic editor would undo exactly that.",
    ],
    constraints: {
      title: "In The Economist's own words",
      items: [
        "“People produce The Economist's journalism, not machines.” [The Economist, How we handle AI-generated content, 9 Jul 2026](https://myaccount.economist.com/s/article/How-we-handle-AI-generated-content)",
        "“Nobody wants to read an AI-written Economist.” Josh Muncke, VP generative AI, [Digiday, 18 May 2026](https://digiday.com/media/the-economist-prepares-for-a-two-track-internet-one-for-humans-and-one-for-ai-agents/)",
        "Insider was launched “because it showcases humans”, which matters “as AI encroaches more and more.” Andrew Palmer, executive editor, [Press Gazette](https://pressgazette.co.uk/publishers/broadcast/economist-video-strategy/)",
        "Audio Briefings use “AI-generated personae”: “not a replacement for the wide range of podcasts we make with real journalists.” [The Economist, How we make AI Audio Briefings, 9 Jul 2026](https://myaccount.economist.com/s/article/How-we-make-AI-Audio-briefings)",
      ],
    },
    footnote: "",
    notes: [
      "The turning point. The need is real, but imitating the editor fights house policy and reader expectations.",
      "The Economist already draws the line: invented personae for generated audio; real journalists' cloned voices only to translate their own words.",
      "Liv Moloney, head of video (Digiday, Sara Guaglione, 1 Jul 2026): showing the humans is “proof of life”, and “everything is still done as a collective”. A synthetic editor turns proof of life into its opposite. Collective supports collective-by-default, with editors as cited voices.",
      "And a hallucination attributed to a named editor is unacceptable. Elsewhere, failures cluster on quotes and opinion: LA Times Insights, the Washington Post AI podcast, Apple's BBC summaries.",
      "Backup quote: Play exists to “showcase the human intelligence that makes The Economist unique” (Luke Bradley-Jones, company release, 1 Jul 2026).",
    ],
  },

  // 6 ── The answer ──────────────────────────────────────────────────────────
  {
    id: "answer",
    layout: "journey",
    kicker: "My answer",
    title: "Meet the Editors: start with a text conversation",
    standfirst: "Explore an editor's published analysis, ask follow-up questions and trace every answer to its source.",
    status: "recommendation",
    journeyLabel: "One journey",
    journey: [
      "Choose **Henry Curr**",
      "Ask about the **AI investment boom**",
      "Get a useful, **sourced** answer",
      "**Follow up**",
    ],
    points: [
      {
        title: "Boundary",
        text: "Answers represent **published analysis**, clearly labelled as AI. They don't invent the editor's current views.",
      },
      {
        title: "Hypothesis",
        text: "Does the **named editor** make this more valuable than a publication-wide answer?",
      },
      {
        title: "Formats",
        text: "**Text first.** Audio within existing rules: a house AI voice, or the editor's own published words in their cloned voice, with consent. **Video: test the reaction before building anything.**",
      },
      {
        title: "Next",
        text: "When the archive can't answer, **put the question to the editor**.",
      },
    ],
    notes: [
      "This is the concept, narrowed: a real conversation with an editor's published analysis.",
      "More than search: it shows how his reasoning developed over time, in his own words, not a list of links.",
      "Third person only. 'Henry argued', never 'I think'. If it can't support a claim, it says we haven't covered that.",
      "Voice and video aren't the problem. Synthetic editors are.",
      "Audio follows existing precedent: Audio Briefings use invented AI voices; journalists' cloned voices are only used to translate their own words, with consent. Never the editor's voice saying new sentences. Plus his real recorded clips from Insider and podcasts.",
      "Video: weakest evidence (most opposed format, costly, live Insider dropped). So show testers a mock-up clip in research sessions: cheap, and it gives us subscribers' reaction rather than general-public surveys.",
      "Personas: no; we surface dissent we've actually published. Group debates: compare what editors have published. Adapting to expertise changes depth, not position, and comes later.",
      "The human loop: the most-asked questions go to editors; their real answers join the bank. Scale the editors, don't simulate them.",
    ],
  },

  // 7 ── How we'd find out ───────────────────────────────────────────────────
  {
    id: "method",
    layout: "plan",
    kicker: "Validation",
    title: "How we'd find out",
    standfirst: "Fast, overlapping steps, each ending in a decision. Timings are indicative.",
    phases: [
      {
        weeks: "Weeks 1–3",
        span: 3,
        title: "Discover and sketch",
        activities: [
          "A rough prototype in week one",
          "Can we tell who wrote what, and when?",
          "What do subscribers ask?",
          "Find an editor who wants in",
        ],
        metrics: ["Questions asked"],
        gate: "Enough to work with, and an editor on board",
      },
      {
        weeks: "Weeks 2–6",
        span: 4,
        title: "Make it trustworthy",
        activities: ["One editor, text only", "Build the test set with them", "Try hard to break it"],
        metrics: ["Accuracy", "Knows when to say no"],
        gate: "The editor would put their name to it",
      },
      {
        weeks: "Weeks 5–12",
        span: 5,
        title: "Find out if it's valued",
        activities: ["Staff, then testers, then a small A/B test", "Named editor vs publication-wide answer", "Show testers a mock video clip"],
        metrics: ["Preference", "Return visits", "Clicks to the journalism"],
        gate: "Readers prefer it, and come back",
      },
    ],
    team: ["Lab product, design and tech leads", "AI engineers", "Lab editors ×2", "The featured editor", "Data and research (shared)"],
    decisions: {
      invest: "More editors; audio within existing rules; video only if testers want it",
      pivot: "Publication-wide answers, plus editors' recorded answers",
      stop: "We can't make it trustworthy, or readers don't value it",
    },
    notes: [
      "Each step: a hypothesis, the smallest test that could disprove it, a measure agreed in advance, then go, change course or stop.",
      "Overlapping, not sequential: with AI-assisted building, a prototype exists in week one, and discovery runs alongside it.",
      "Trust before demand: if the editor won't put their name to it, nothing else matters.",
      "This mirrors how The Economist already works: small pods with editorial embedded, sandbox before release, pilots, and stopping things that don't work (the event companions).",
      "Question for the panel: what tester groups do you already have?",
      "Clicks to the journalism is a guardrail: this must not reduce engagement with the human work.",
      "[Adjust to Lab capacity and existing work, learned in week one.]",
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
      { title: "Reuse the Lab's work", items: ["Audio Briefings pipeline", "Article Q&A prototype", "House-voice fine-tuning"] },
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
      { title: "Then, if it earns it", items: ["Audio, within existing rules", "Agents", "Video, only if testers want it"] },
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

  // Attribution modes (moved from main deck) ───────────────────────────────────
  {
    id: "appendix-attribution",
    layout: "columns",
    appendix: true,
    kicker: "Appendix · Attribution",
    title: "How answers refer to an editor",
    columns: [
      { title: "Collective", items: ["The Economist's published position", "Cited and dated", "**Default**"] },
      { title: "Curate", items: ["“Henry has covered this here and here”", "Links only", "**Test first**"] },
      { title: "Report", items: ["“Henry wrote: ‘…’”", "Verbatim quotes only", "**Test first**"] },
      { title: "Impersonate", items: ["“I think…” in his voice", "Highest risk: misattribution", "**Later, if ever**"] },
    ],
    notes: ["Use in Q&A on attribution design. Curate vs report is an A/B test in the prototype."],
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
