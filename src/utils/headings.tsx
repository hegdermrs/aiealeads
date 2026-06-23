/** Split text at fullstops, last word of each sentence in emerald. Line breaks between sentences. */
export function RenderHeading({ text }: { text: string }) {
  const sentences = text.split(".").filter(Boolean).map((s) => s.trim());
  return sentences.map((sentence, i) => {
    const words = sentence.split(/\s+/);
    const last = words.pop() || "";
    const period = i < sentences.length - 1 || text.endsWith(".") ? "." : "";
    return (
      <span key={i}>
        {words.join(" ")}{words.length > 0 ? " " : ""}
        <span className="text-emerald-300/90">{last}{period}</span>
        {i < sentences.length - 1 && <br />}
      </span>
    );
  });
}

/** Renders text with the last word styled in emerald accent. */
export function RenderQuote({ text }: { text: string }) {
  const trimmed = text.trim();
  const lastSpace = trimmed.lastIndexOf(" ");
  if (lastSpace === -1) return <>{trimmed}</>;
  return (
    <>
      {trimmed.slice(0, lastSpace)}{" "}
      <span className="text-emerald-300/90">{trimmed.slice(lastSpace + 1)}</span>
    </>
  );
}
