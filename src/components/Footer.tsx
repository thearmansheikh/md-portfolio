import { SOCIAL_LINKS } from "@/data";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--card-border)] py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-muted text-sm">
          &copy; {new Date().getFullYear()} Arman Sheikh. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-cyan-400 transition-colors text-sm"
              aria-label={link.label}
            >
              {link.label}
            </a>
          ))}
        </div>

        <p className="text-muted text-xs font-mono">
          Built with Next.js &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
