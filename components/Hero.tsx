import { existsSync } from "node:fs";
import { join } from "node:path";
import { ArrowDown, ArrowRight, Mail } from "lucide-react";
import { hero, profile } from "@/data/portfolio";
import { GitHubIcon, LinkedInIcon } from "./icons";
import TerminalCard from "./TerminalCard";

const iconLink =
  "inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-primary/60 hover:text-primary";

export default function Hero() {
  // The resume button only exists when a real PDF has been placed in /public.
  const hasResume = existsSync(join(process.cwd(), "public", "resume.pdf"));

  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-0 h-[28rem] w-[28rem] rounded-full bg-primary/[0.06] blur-3xl"
      />
      <div className="mx-auto grid w-full max-w-[1200px] items-center gap-14 px-5 pb-20 pt-14 sm:px-8 sm:pt-20 lg:min-h-[calc(100svh-4rem)] lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:py-16">
        <div>
          <p className="animate-rise font-mono text-xs uppercase tracking-[0.18em] text-primary">
            {hero.label}
          </p>
          <h1
            id="hero-title"
            className="animate-rise mt-5 text-4xl font-semibold leading-[1.06] tracking-[-0.03em] [animation-delay:80ms] sm:text-5xl lg:text-6xl"
          >
            {hero.heading}
            <span
              aria-hidden="true"
              className="ml-1 inline-block h-[0.85em] w-[0.1em] translate-y-[0.1em] animate-blink bg-primary align-baseline"
            />
          </h1>
          <p className="animate-rise mt-6 max-w-xl text-base leading-relaxed text-muted [animation-delay:160ms] sm:text-lg">
            {hero.summary}
          </p>

          <div className="animate-rise mt-8 flex flex-col gap-3 [animation-delay:240ms] sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-black transition-colors hover:bg-primary-dark hover:text-white"
            >
              View Projects <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            {hasResume ? (
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-semibold transition-colors hover:border-primary/60 hover:text-primary"
              >
                Download Resume <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </a>
            ) : null}
          </div>

          <ul className="animate-rise mt-8 flex flex-wrap gap-2 [animation-delay:320ms]" aria-label="Core technologies">
            {hero.pills.map((p) => (
              <li
                key={p}
                className="rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-muted"
              >
                {p}
              </li>
            ))}
          </ul>

          <div className="animate-rise mt-8 flex items-center gap-3 [animation-delay:400ms]">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile (opens in a new tab)" className={iconLink}>
              <GitHubIcon className="h-5 w-5" />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile (opens in a new tab)" className={iconLink}>
              <LinkedInIcon className="h-5 w-5" />
            </a>
            <a href={`mailto:${profile.email}`} aria-label={`Email ${profile.email}`} className={iconLink}>
              <Mail className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="animate-rise [animation-delay:200ms]">
          <TerminalCard />
        </div>
      </div>
    </section>
  );
}
