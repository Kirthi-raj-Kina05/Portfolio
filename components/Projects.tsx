import { projects } from "@/data/portfolio";
import ProjectCard, { ProjectCompact } from "./ProjectCard";
import Reveal from "./Reveal";
import { Section, SectionHeading } from "./Section";

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const more = projects.filter((p) => !p.featured);

  return (
    <Section id="projects">
      <SectionHeading
        id="projects"
        eyebrow="04 — Projects"
        title="Selected Projects"
        intro="Selected work showcasing production experience, practical development and problem-solving."
      />
      <div className="flex flex-col gap-8">
        {featured.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.06}>
            <ProjectCard project={p} index={i} />
          </Reveal>
        ))}
      </div>

      {more.length > 0 ? (
        <div className="mt-20">
          <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-primary">More projects</h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {more.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.06} className="h-full">
                <ProjectCompact project={p} />
              </Reveal>
            ))}
          </div>
        </div>
      ) : null}
    </Section>
  );
}
