import { useEffect, useState } from "react";
import { slideLabel, slides } from "../content/slides";
import { SlideView } from "../slides/layouts";
import { Rich } from "../slides/Rich";
import { Scaled } from "./Scaled";
import { handleNavKey, useDeck } from "./useDeck";

const total = slides.length;
const TARGET_MIN = 22; // 20–25 minute slot

function fmt(sec: number) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
}

/**
 * Presenter view (open with P). Stays in sync with the main deck window, so you
 * can share the deck window on a call and keep this one private.
 */
export function Presenter() {
  const nav = useDeck(total);
  const { index } = nav;
  const [start, setStart] = useState(() => Date.now());
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const t = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(t);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      if (e.key.toLowerCase() === "r") return setStart(Date.now());
      if (handleNavKey(e, nav, total)) e.preventDefault();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [nav]);

  const elapsed = Math.floor((now - start) / 1000);
  const over = elapsed > TARGET_MIN * 60;
  const slide = slides[index];
  const next = slides[index + 1];

  return (
    <div className="h-full bg-london-5 text-london-95 grid grid-cols-[1.6fr_1fr] grid-rows-[auto_1fr_auto] gap-5 p-5">
      <header className="col-span-2 flex items-center justify-between text-[14px] text-london-70">
        <span>
          <span className="text-london-100 font-semibold">{slideLabel(index)}</span> · {slide.title}
        </span>
        <span className="flex items-center gap-4">
          <span className={`tabular-nums text-[26px] ${over ? "text-econ-red-60" : "text-london-100"}`}>{fmt(elapsed)}</span>
          <span>target {TARGET_MIN} min</span>
          <button className="underline cursor-pointer" onClick={() => setStart(Date.now())}>
            reset (R)
          </button>
        </span>
      </header>

      <Scaled className="min-h-0">
        <SlideView slide={slide} index={index} total={total} />
      </Scaled>

      <div className="flex flex-col gap-4 min-h-0">
        <p className="text-[12px] uppercase tracking-[0.08em] text-london-70">Next</p>
        {next ? (
          <Scaled className="aspect-video w-full opacity-80">
            <SlideView slide={next} index={index + 1} total={total} />
          </Scaled>
        ) : (
          <div className="aspect-video w-full border border-london-20 flex items-center justify-center text-london-70">
            End of deck: questions
          </div>
        )}
        <div className="flex gap-2">
          <button onClick={nav.prev} className="flex-1 bg-london-10 hover:bg-london-20 py-3 cursor-pointer">
            ← Previous
          </button>
          <button onClick={nav.next} className="flex-1 bg-london-10 hover:bg-london-20 py-3 cursor-pointer">
            Next →
          </button>
        </div>
      </div>

      <div className="col-span-2 bg-london-10 px-8 py-5 max-h-[34vh] overflow-y-auto">
        <ul className="space-y-2 text-[clamp(16px,1.5vw,22px)] leading-[1.45] list-disc pl-6 marker:text-econ-red">
          {slide.notes.map((n, i) => (
            <li key={i}>
              <Rich text={n} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
