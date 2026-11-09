import { useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { SLIDE_H, SLIDE_W } from "../slides/Frame";

/**
 * Fits the fixed 1920×1080 slide canvas into whatever box it is given,
 * letterboxing as needed, so slides look identical at any resolution.
 */
export function Scaled({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => {
      const r = el.getBoundingClientRect();
      setScale(Math.min(r.width / SLIDE_W, r.height / SLIDE_H));
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <div
        className="absolute left-1/2 top-1/2 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]"
        style={{
          width: SLIDE_W,
          height: SLIDE_H,
          transform: `translate(-50%, -50%) scale(${scale})`,
          visibility: scale ? "visible" : "hidden",
        }}
      >
        {children}
      </div>
    </div>
  );
}
