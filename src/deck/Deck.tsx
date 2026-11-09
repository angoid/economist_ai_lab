import { useCallback, useEffect, useRef, useState } from "react";
import { mainCount, slideLabel, slides } from "../content/slides";
import { SlideView } from "../slides/layouts";
import { Rich } from "../slides/Rich";
import { Scaled } from "./Scaled";
import { handleNavKey, useDeck } from "./useDeck";

const total = slides.length;

function useFullscreen() {
  const [isFs, setIsFs] = useState(!!document.fullscreenElement);
  useEffect(() => {
    const on = () => setIsFs(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", on);
    return () => document.removeEventListener("fullscreenchange", on);
  }, []);
  const toggle = useCallback(() => {
    if (document.fullscreenElement) document.exitFullscreen();
    else document.documentElement.requestFullscreen?.();
  }, []);
  return { isFs, toggle };
}

/** Shows controls and cursor on mouse movement; hides them after a pause. */
function useIdle(ms = 2200) {
  const [active, setActive] = useState(true);
  const t = useRef<number | undefined>(undefined);
  useEffect(() => {
    const wake = () => {
      setActive(true);
      window.clearTimeout(t.current);
      t.current = window.setTimeout(() => setActive(false), ms);
    };
    wake();
    window.addEventListener("mousemove", wake);
    return () => {
      window.removeEventListener("mousemove", wake);
      window.clearTimeout(t.current);
    };
  }, [ms]);
  return active;
}

export function openPresenter(index: number) {
  window.open(`${location.pathname}?presenter#/${index + 1}`, "mte-presenter", "width=1400,height=860");
}

const shortcuts: [string, string][] = [
  ["→  Space  Click", "Next"],
  ["←  Shift+Space  Shift+Click", "Previous"],
  ["1–8  Home  End", "Jump to slide"],
  ["F", "Full screen"],
  ["N", "Presenter notes"],
  ["O", "Overview"],
  ["P", "Presenter window (notes, next slide, timer)"],
  ["?", "This help"],
  ["Esc", "Close overlay / exit full screen"],
];

export function Deck() {
  const nav = useDeck(total);
  const { index, setIndex } = nav;
  const [notes, setNotes] = useState(false);
  const [overview, setOverview] = useState(false);
  const [help, setHelp] = useState(false);
  const fs = useFullscreen();
  const active = useIdle();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const k = e.key.toLowerCase();

      if (overview || help) {
        if (k === "escape" || k === "enter" || k === "o" || k === "?") {
          setOverview(false);
          setHelp(false);
          e.preventDefault();
          return;
        }
      }
      if (k === "f") return fs.toggle();
      if (k === "n") return setNotes((v) => !v);
      if (k === "o" || k === "g") return setOverview((v) => !v);
      if (k === "p") return openPresenter(index);
      if (k === "?" || k === "h") return setHelp((v) => !v);
      if (handleNavKey(e, nav, total)) e.preventDefault();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [nav, index, overview, help, fs]);

  const onStageClick = (e: React.MouseEvent) => {
    if (window.getSelection()?.toString()) return;
    if (e.shiftKey) nav.prev();
    else nav.next();
  };

  const slide = slides[index];

  return (
    <div className={`h-full w-full flex flex-col bg-london-5 select-none ${fs.isFs && !active ? "hide-cursor" : ""}`}>
      <Scaled className="flex-1 min-h-0">
        <div onClick={onStageClick} onContextMenu={(e) => (e.preventDefault(), nav.prev())}>
          <SlideView slide={slide} index={index} total={total} />
        </div>
      </Scaled>

      {notes && (
        <div className="h-[30vh] shrink-0 bg-london-10 text-london-95 border-t border-london-20 px-10 py-6 overflow-y-auto select-text">
          <div className="flex items-baseline justify-between text-[14px] uppercase tracking-[0.08em] text-london-70 mb-3">
            <span>
              Notes · {slideLabel(index)} · {slide.title}
            </span>
            {index < total - 1 && <span>Next: {slides[index + 1].title}</span>}
          </div>
          <ul className="space-y-2 text-[clamp(16px,1.6vw,22px)] leading-[1.45] list-disc pl-6 marker:text-econ-red">
            {slide.notes.map((n, i) => (
              <li key={i}>
                <Rich text={n} />
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Controls */}
      <div
        className={`fixed bottom-4 right-4 flex items-center gap-1 bg-london-10/90 text-london-95 text-[13px] rounded-[4px] px-2 py-1 transition-opacity duration-300 ${
          active && !overview ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <Btn onClick={nav.prev} label="Previous (←)">‹</Btn>
        <span className="tabular-nums px-2 text-london-70">
          {index < mainCount ? `${index + 1} / ${mainCount}` : slideLabel(index)}
        </span>
        <Btn onClick={nav.next} label="Next (→)">›</Btn>
        <Sep />
        <Btn onClick={() => setNotes((v) => !v)} label="Notes (N)" on={notes}>Notes</Btn>
        <Btn onClick={() => setOverview(true)} label="Overview (O)">Overview</Btn>
        <Btn onClick={() => openPresenter(index)} label="Presenter window (P)">Presenter</Btn>
        <Btn onClick={fs.toggle} label="Full screen (F)">{fs.isFs ? "Exit full screen" : "Full screen"}</Btn>
        <Btn onClick={() => setHelp(true)} label="Shortcuts (?)">?</Btn>
      </div>

      {overview && (
        <div className="fixed inset-0 bg-london-5/95 z-10 overflow-y-auto p-[4vw]" onClick={() => setOverview(false)}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-[2vw] max-w-[1800px] mx-auto">
            {slides.map((s, i) => (
              <button
                key={s.id}
                onClick={(e) => {
                  e.stopPropagation();
                  setIndex(i);
                  setOverview(false);
                }}
                className="text-left group cursor-pointer"
              >
                <Scaled
                  className={`aspect-video w-full outline-offset-4 ${
                    i === index ? "outline-[3px] outline outline-econ-red" : "group-hover:outline outline-2 outline-london-35"
                  }`}
                >
                  <SlideView slide={s} index={i} total={total} />
                </Scaled>
                <p className="text-london-70 text-[14px] mt-2">
                  <span className="text-london-100 font-semibold mr-2">{slideLabel(i)}</span>
                  {s.title}
                </p>
              </button>
            ))}
          </div>
        </div>
      )}

      {help && (
        <div className="fixed inset-0 z-20 bg-london-5/80 flex items-center justify-center" onClick={() => setHelp(false)}>
          <div className="bg-los-angeles-95 text-london-10 p-8 min-w-[440px] border-t-[6px] border-econ-red">
            <p className="font-serif text-[28px] mb-4">Keyboard shortcuts</p>
            <table className="text-[15px]">
              <tbody>
                {shortcuts.map(([k, d]) => (
                  <tr key={k}>
                    <td className="pr-8 py-1 font-semibold whitespace-pre">{k}</td>
                    <td className="py-1 text-london-35">{d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

function Btn({ onClick, label, on, children }: { onClick: () => void; label: string; on?: boolean; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      title={label}
      aria-label={label}
      className={`px-2 py-1 rounded-[3px] hover:bg-london-20 cursor-pointer ${on ? "text-econ-red-60" : ""}`}
    >
      {children}
    </button>
  );
}

const Sep = () => <span className="w-px h-4 bg-london-35 mx-1" />;
