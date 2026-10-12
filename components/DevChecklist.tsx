import { missingContent } from "@/data/portfolio";

/** Visible only in `npm run dev`. Never rendered in production builds. */
export default function DevChecklist() {
  if (process.env.NODE_ENV !== "development") return null;
  return (
    <details className="fixed bottom-4 left-4 z-[60] max-w-sm rounded-lg border border-primary/50 bg-surface p-3 font-mono text-xs shadow-glow">
      <summary className="cursor-pointer text-primary">Dev checklist ({missingContent.length} to fill in)</summary>
      <ul className="mt-3 list-disc space-y-1.5 pl-4 text-muted">
        {missingContent.map((m) => (
          <li key={m}>{m}</li>
        ))}
      </ul>
    </details>
  );
}
