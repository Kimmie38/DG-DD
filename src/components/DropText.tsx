import type { CSSProperties } from "react";

/** Splits a heading into words that drop into place one after another. */
export function DropText({ text, delay = 0 }: { text: string; delay?: number }) {
  const words = text.split(" ");
  return (
    <>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="drop-word" style={{ "--i": i, "--delay": `${delay}ms` } as CSSProperties}>
          {word}
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </>
  );
}
