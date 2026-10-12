import Image from "next/image";
import { ExternalLink } from "lucide-react";
import type { Project } from "@/data/portfolio";
import { GitHubIcon } from "./icons";

const TagList = ({ tech }: { tech: string[] }) => (
  <ul className="flex flex-wrap gap-2" aria-label="Technologies">
    {tech.map((t) => (
      <li key={t} className="rounded-full border border-border bg-surface-raised px-3 py-1 font-mono text-xs text-muted">
        {t}
      </li>
    ))}
  </ul>
);

const linkClass =
  "inline-flex items-center gap-2 rounded-full border border-border px-4 py-2.5 text-sm font-medium transition-colors hover:border-primary/60 hover:text-primary";

function Links({ project }: { project: Project }) {
  if (!project.liveUrl && !project.repoUrl) return null;
  return (
    <div className="flex flex-wrap gap-3">
      {project.liveUrl ? (
        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
          Live Demo <ExternalLink className="h-4 w-4" aria-hidden="true" />
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      ) : null}
      {project.repoUrl ? (
        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
          <GitHubIcon className="h-4 w-4" /> Source
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      ) : null}
    </div>
  );
}

function CaseStudy({ project }: { project: Project }) {
  const c = project.caseStudy;
  if (!c) return null;
  const rows: [string, string | undefined][] = [
    ["Problem", c.problem],
    ["Users", c.users],
    ["My responsibilities", c.responsibilities],
    ["Approach", c.approach],
    ["Technical challenge", c.challenge],
    ["Solution", c.solution],
    ["Testing & quality", c.quality],
    ["Outcome", c.outcome],
  ];
  return (
    <details className="group rounded-lg border border-border bg-surface-raised p-4">
      <summary className="cursor-pointer font-mono text-sm text-primary">Read the case study</summary>
      <dl className="mt-4 space-y-3 text-sm leading-relaxed">
        {rows
          .filter(([, v]) => Boolean(v))
          .map(([k, v]) => (
            <div key={k}>
              <dt className="font-mono text-xs uppercase tracking-wider text-muted">{k}</dt>
              <dd className="mt-1 text-foreground">{v}</dd>
            </div>
          ))}
      </dl>
    </details>
  );
}

function Visual({ project }: { project: Project }) {
  if (project.image) {
    return (
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg border border-border bg-surface-raised">
        <Image
          src={project.image}
          alt={project.imageAlt ?? `Screenshot of ${project.title}`}
          fill
          sizes="(min-width: 1024px) 520px, 100vw"
          className="object-cover object-top"
        />
      </div>
    );
  }
  // Neutral placeholder — deliberately NOT a fake UI screenshot.
  return (
    <div
      aria-hidden="true"
      className="relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden rounded-lg border border-dashed border-border bg-surface-raised"
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <span className="relative font-mono text-4xl font-semibold tracking-tight text-primary/70">
        {"</>"}
      </span>
      {process.env.NODE_ENV === "development" ? (
        <span className="absolute bottom-3 left-3 rounded bg-background/80 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-primary">
          placeholder — add real screenshot
        </span>
      ) : null}
    </div>
  );
}

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const reverse = index % 2 === 1;
  return (
    <article className="rounded-2xl border border-border bg-surface p-5 transition-[border-color,box-shadow] duration-200 hover:border-primary/40 hover:shadow-glow sm:p-8">
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <div className={`flex flex-col gap-5 ${reverse ? "lg:order-2" : ""}`}>
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-primary">{project.category}</p>
          <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">{project.title}</h3>
          <p className="text-base leading-relaxed text-muted">{project.description}</p>
          {project.contribution ? (
            <p className="text-base leading-relaxed text-muted">
              <span className="font-mono text-xs uppercase tracking-wider text-foreground">My contribution — </span>
              {project.contribution}
            </p>
          ) : null}
          <TagList tech={project.tech} />
          <Links project={project} />
          <CaseStudy project={project} />
        </div>
        <div className={reverse ? "lg:order-1" : ""}>
          <Visual project={project} />
        </div>
      </div>
    </article>
  );
}

export function ProjectCompact({ project }: { project: Project }) {
  return (
    <article className="flex h-full flex-col gap-4 rounded-xl border border-border bg-surface p-6 transition-[border-color,box-shadow] duration-200 hover:border-primary/40 hover:shadow-glow">
      <p className="font-mono text-xs uppercase tracking-[0.16em] text-primary">{project.category}</p>
      <h3 className="text-lg font-semibold leading-snug tracking-tight">{project.title}</h3>
      <p className="text-sm leading-relaxed text-muted">{project.description}</p>
      <div className="mt-auto flex flex-col gap-4">
        <TagList tech={project.tech} />
        <Links project={project} />
      </div>
    </article>
  );
}
