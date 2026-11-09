import { Fragment } from "react";

/** Renders **bold**, *italic* and [placeholder] markup inside slide text. */
export function Rich({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\])/g).filter(Boolean);
  return (
    <>
      {parts.map((p, i) => {
        if (p.startsWith("**") && p.endsWith("**")) {
          return (
            <strong key={i} className="font-semibold text-london-5">
              {p.slice(2, -2)}
            </strong>
          );
        }
        if (p.length > 2 && p.startsWith("*") && p.endsWith("*")) {
          return <em key={i}>{p.slice(1, -1)}</em>;
        }
        if (p.startsWith("[") && p.endsWith("]")) {
          return (
            <mark
              key={i}
              className="bg-new-york-90 text-london-20 px-[0.2em] rounded-[2px] [box-decoration-break:clone]"
              title="Placeholder: confirm or replace"
            >
              {p}
            </mark>
          );
        }
        return <Fragment key={i}>{p}</Fragment>;
      })}
    </>
  );
}
