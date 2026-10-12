import { skills } from "@/data/portfolio";
import { Section, SectionHeading } from "./Section";

export default function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        id="skills"
        eyebrow="02 — Skills"
        title="The Stack"
        intro="Tools and technologies I use to build responsive interfaces and develop my software engineering skills."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => (
          <article
            key={group.title}
            className="rounded-xl border border-border bg-surface p-6 transition-[border-color,box-shadow] duration-200 hover:border-primary/40 hover:shadow-glow"
          >
            <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-primary">{group.title}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item.name}
                  className="rounded-md border border-border bg-surface-raised px-3 py-1.5 text-sm text-foreground"
                >
                  {item.name}
                  {item.note ? <span className="ml-1.5 font-mono text-xs text-muted">· {item.note}</span> : null}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
