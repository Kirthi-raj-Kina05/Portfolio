import Image from "next/image";
import { about } from "@/data/portfolio";
import { Section, SectionHeading } from "./Section";

export default function About() {
  return (
    <Section id="about">
      <SectionHeading id="about" eyebrow="01 — About" title="About Me" />
      <div className="grid items-start gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div>
          <div className="space-y-5 text-base leading-relaxed text-muted sm:text-lg">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <dl className="mt-8 overflow-hidden rounded-xl border border-border bg-surface font-mono text-sm">
            {about.meta.map((m) => (
              <div
                key={m.label}
                className="flex flex-col gap-1 border-b border-border px-4 py-3 last:border-b-0 sm:flex-row sm:gap-6"
              >
                <dt className="w-28 shrink-0 text-primary">{m.label}</dt>
                <dd className="text-foreground">{m.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <figure className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div
            aria-hidden="true"
            className="absolute -inset-4 -z-10 rounded-[1.75rem] bg-primary/10 blur-2xl"
          />
          <div className="overflow-hidden rounded-2xl border border-border bg-surface">
            <Image
              src="/images/avatar.webp"
              alt="Illustrated portrait of Keerthana C N, smiling, with long dark curly hair and clear-framed glasses"
              width={720}
              height={894}
              sizes="(min-width: 1024px) 420px, (min-width: 640px) 384px, 90vw"
              className="h-auto w-full"
            />
          </div>
          <figcaption className="mt-3 font-mono text-xs text-muted">// illustrated portrait</figcaption>
        </figure>
      </div>
    </Section>
  );
}
