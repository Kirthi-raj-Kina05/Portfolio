import { ArrowRight } from "lucide-react";
import { contact, profile } from "@/data/portfolio";
import { GitHubIcon, LinkedInIcon } from "./icons";
import { Section } from "./Section";

const secondary =
  "inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-semibold transition-colors hover:border-primary/60 hover:text-primary";

export default function Contact() {
  return (
    <Section id="contact" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-[40rem] max-w-full -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-2xl text-center">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">08 — Contact</p>
        <h2 id="contact-title" className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
          Let’s Build Something<span className="text-primary">.</span>
        </h2>
        <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">{contact.copy}</p>

        <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-black transition-colors hover:bg-primary-dark hover:text-white"
          >
            Start a Conversation <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className={secondary}>
            <GitHubIcon className="h-4 w-4" /> GitHub
            <span className="sr-only">(opens in a new tab)</span>
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={secondary}>
            <LinkedInIcon className="h-4 w-4" /> LinkedIn
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </div>
        <p className="mt-6 font-mono text-sm text-muted">{profile.email}</p>
      </div>
    </Section>
  );
}
