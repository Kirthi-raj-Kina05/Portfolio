/**
 * Purely decorative illustration — not a working terminal or application.
 * Exposed to assistive tech as a single labelled image.
 */
export default function TerminalCard() {
  const str = "text-[hsl(142_55%_72%)]";
  return (
    <div
      role="img"
      aria-label="Decorative code snippet describing Keerthana as a Junior Software Developer working with Next.js, React and Tailwind CSS"
      className="relative lg:animate-float"
    >
      <div
        aria-hidden="true"
        className="absolute -inset-6 -z-10 rounded-[2rem] bg-primary/10 blur-3xl"
      />
      <div className="overflow-hidden rounded-xl border border-border bg-surface shadow-glow">
        <div className="flex items-center gap-2 border-b border-border bg-surface-raised px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          <span className="ml-3 font-mono text-xs text-muted">developer.ts</span>
          <span className="ml-auto font-mono text-[10px] uppercase tracking-widest text-muted">
            illustration
          </span>
        </div>
        <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-7 sm:text-sm">
          <code>
            <span className="text-muted">{"// building useful software"}</span>
            {"\n"}
            <span className="text-primary">const</span>{" "}
            <span className="text-foreground">developer</span>
            {" = {\n  "}
            <span className="text-foreground">role</span>
            {": "}
            <span className={str}>{'"Junior Software Developer"'}</span>
            {",\n  "}
            <span className="text-foreground">stack</span>
            {": ["}
            <span className={str}>{'"Next.js"'}</span>
            {", "}
            <span className={str}>{'"React"'}</span>
            {", "}
            <span className={str}>{'"Tailwind CSS"'}</span>
            {"],\n  "}
            <span className="text-foreground">focus</span>
            {": "}
            <span className={str}>{'"Responsive web applications"'}</span>
            {",\n};"}
          </code>
        </pre>
      </div>
    </div>
  );
}
