import { experience } from "@/data/portfolio";
import { Section, SectionHeading } from "./Section";

export default function Experience() {
  const e = experience;
  return (
    <Section id="experience">
      <SectionHeading id="experience" eyebrow="03 — Experience" title="Experience" />
      <div className="relative border-l border-border pl-6 sm:pl-10">
        <span
          aria-hidden="true"
          className="absolute -left-[7px] top-2 h-3.5 w-3.5 rounded-full border-2 border-primary bg-background"
        />
        <article className="rounded-xl border border-border bg-surface p-6 sm:p-8">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="text-xl font-semibold tracking-tight">{e.role}</h3>
            {e.dates ? <p className="font-mono text-sm text-primary">{e.dates}</p> : null}
          </div>
          <p className="mt-1 text-muted">
            {e.company} · {e.location}
          </p>
          <ul className="mt-6 space-y-3 text-base leading-relaxed text-muted">
            {e.bullets.map((b) => (
              <li key={b} className="flex gap-3">
                <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
          {!e.dates && process.env.NODE_ENV === "development" ? (
            <p className="mt-6 rounded-md border border-dashed border-primary/50 px-3 py-2 font-mono text-xs text-primary">
              DEV NOTE: employment dates are hidden until confirmed (data/portfolio.ts → experience.dates).
            </p>
          ) : null}
        </article>
      </div>
    </Section>
  );
}
