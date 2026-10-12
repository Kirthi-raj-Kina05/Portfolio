import { ExternalLink, Star } from "lucide-react";
import { profile } from "@/data/portfolio";
import { GitHubIcon } from "./icons";
import { Section, SectionHeading } from "./Section";

type Repo = {
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  fork: boolean;
  archived: boolean;
};

/** Real public repos from the GitHub API. Returns [] on any failure, so no fake cards ever appear. */
async function getRepos(): Promise<Repo[]> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${profile.githubUser}/repos?sort=pushed&per_page=30`,
      { headers: { Accept: "application/vnd.github+json" }, next: { revalidate: 3600 } },
    );
    if (!res.ok) return [];
    const data = (await res.json()) as Repo[];
    return data.filter((r) => !r.fork && !r.archived).slice(0, 4);
  } catch {
    return [];
  }
}

export default async function GitHubActivity() {
  const repos = await getRepos();

  return (
    <Section id="code">
      <SectionHeading
        id="code"
        eyebrow="07 — Code"
        title="Code & Development"
        intro="The best way to evaluate how I write code is to read it. My public repositories are on GitHub."
      />
      {repos.length > 0 ? (
        <ul className="mb-8 grid gap-4 sm:grid-cols-2">
          {repos.map((r) => (
            <li key={r.name}>
              <a
                href={r.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-full flex-col gap-3 rounded-xl border border-border bg-surface p-5 transition-[border-color,box-shadow] duration-200 hover:border-primary/40 hover:shadow-glow"
              >
                <span className="flex items-center justify-between gap-3">
                  <span className="font-mono text-sm text-primary">{r.name}</span>
                  <ExternalLink className="h-4 w-4 text-muted" aria-hidden="true" />
                </span>
                {r.description ? <span className="text-sm leading-relaxed text-muted">{r.description}</span> : null}
                <span className="mt-auto flex items-center gap-4 font-mono text-xs text-muted">
                  {r.language ? <span>{r.language}</span> : null}
                  {r.stargazers_count > 0 ? (
                    <span className="inline-flex items-center gap-1">
                      <Star className="h-3.5 w-3.5" aria-hidden="true" /> {r.stargazers_count}
                    </span>
                  ) : null}
                </span>
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>
      ) : null}
      <a
        href={profile.github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold transition-colors hover:border-primary/60 hover:text-primary"
      >
        <GitHubIcon className="h-4 w-4" /> View GitHub Profile
        <span className="sr-only">(opens in a new tab)</span>
      </a>
    </Section>
  );
}
