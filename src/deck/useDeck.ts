import { useCallback, useEffect, useRef, useState } from "react";

const CHANNEL = "meet-the-editors-deck";

function readHash(total: number): number {
  const n = parseInt(window.location.hash.replace(/^#\/?/, ""), 10);
  return Number.isFinite(n) ? Math.min(Math.max(n - 1, 0), total - 1) : 0;
}

/**
 * Current slide index, kept in the URL hash (#/3) so refreshes keep your place,
 * and synced across windows (main deck ↔ presenter view) via BroadcastChannel.
 */
export function useDeck(total: number) {
  const [index, setIndexState] = useState(() => readHash(total));
  const channel = useRef<BroadcastChannel | null>(null);
  const received = useRef<number | null>(null);

  const setIndex = useCallback(
    (next: number | ((i: number) => number)) => {
      setIndexState((cur) => {
        const v = typeof next === "function" ? next(cur) : next;
        return Math.min(Math.max(v, 0), total - 1);
      });
    },
    [total],
  );

  useEffect(() => {
    const bc = new BroadcastChannel(CHANNEL);
    channel.current = bc;
    bc.onmessage = (e) => {
      if (typeof e.data?.index === "number") {
        received.current = e.data.index;
        setIndexState(e.data.index);
      }
    };
    const onHash = () => setIndexState(readHash(total));
    window.addEventListener("hashchange", onHash);
    return () => {
      bc.close();
      window.removeEventListener("hashchange", onHash);
    };
  }, [total]);

  useEffect(() => {
    const hash = `#/${index + 1}`;
    if (window.location.hash !== hash) history.replaceState(null, "", hash);
    // Don't echo a change that arrived from the other window (avoids ping-pong on fast key presses).
    if (received.current === index) {
      received.current = null;
      return;
    }
    channel.current?.postMessage({ index });
  }, [index]);

  return {
    index,
    setIndex,
    next: () => setIndex((i) => i + 1),
    prev: () => setIndex((i) => i - 1),
  };
}

/** Shared keyboard map. Returns true if the key was handled. */
export function handleNavKey(
  e: KeyboardEvent,
  nav: { next: () => void; prev: () => void; setIndex: (i: number) => void },
  total: number,
): boolean {
  switch (e.key) {
    case "ArrowRight":
    case "ArrowDown":
    case "PageDown":
    case "Enter":
      nav.next();
      return true;
    case " ":
      if (e.shiftKey) nav.prev();
      else nav.next();
      return true;
    case "ArrowLeft":
    case "ArrowUp":
    case "PageUp":
    case "Backspace":
      nav.prev();
      return true;
    case "Home":
      nav.setIndex(0);
      return true;
    case "End":
      nav.setIndex(total - 1);
      return true;
  }
  if (/^[1-9]$/.test(e.key) && Number(e.key) <= total) {
    nav.setIndex(Number(e.key) - 1);
    return true;
  }
  return false;
}
