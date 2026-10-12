import { profile } from "@/data/portfolio";

const link = "text-muted transition-colors hover:text-primary";

export default function Footer() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-6 px-5 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold">{profile.name}</p>
          <p className="mt-1 text-sm text-muted">
            {profile.title} · © {new Date().getFullYear()}
          </p>
        </div>
        <nav aria-label="Footer" className="flex gap-6 text-sm">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className={link}>
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={link}>
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className={link}>
            Email
          </a>
        </nav>
      </div>
    </footer>
  );
}
