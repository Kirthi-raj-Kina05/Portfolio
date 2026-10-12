import { GraduationCap } from "lucide-react";
import { education } from "@/data/portfolio";
import { Section, SectionHeading } from "./Section";

export default function Education() {
  return (
    <Section id="education">
      <SectionHeading id="education" eyebrow="05 — Education" title="Education" />
      <div className="grid gap-4 md:grid-cols-2">
        {education.map((e) => (
          <article
            key={e.degree}
            className="rounded-xl border border-border bg-surface p-6 transition-[border-color,box-shadow] duration-200 hover:border-primary/40 hover:shadow-glow"
          >
            <GraduationCap className="h-6 w-6 text-primary" aria-hidden="true" />
            <h3 className="mt-4 text-lg font-semibold tracking-tight">{e.degree}</h3>
            <p className="mt-1 text-muted">{e.school}</p>
            <p className="mt-4 font-mono text-sm text-foreground">
              CGPA {e.cgpa} <span className="text-muted">·</span> {e.year}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
