import { Award, ExternalLink } from "lucide-react";
import { certifications } from "@/data/portfolio";
import { Section, SectionHeading } from "./Section";

export default function Certifications() {
  return (
    <Section id="certifications">
      <SectionHeading id="certifications" eyebrow="06 — Certifications" title="Certifications" />
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((c) => (
          <li
            key={c.title}
            className="flex gap-4 rounded-xl border border-border bg-surface p-5 transition-[border-color,box-shadow] duration-200 hover:border-primary/40 hover:shadow-glow"
          >
            <Award className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
            <div>
              <h3 className="font-semibold leading-snug">{c.title}</h3>
              <p className="mt-1 text-sm text-muted">{c.issuer}</p>
              {c.date ? <p className="mt-2 font-mono text-xs text-muted">{c.date}</p> : null}
              {c.url ? (
                <a
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
                >
                  View credential <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
