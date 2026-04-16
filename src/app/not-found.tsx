import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-8xl sm:text-9xl font-bold text-cyan-400/20 font-mono">
            404
          </h1>
        </div>

        <h2 className="text-2xl font-semibold mb-3">Page Not Found</h2>
        <p className="text-muted mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist, or it&apos;s been
          moved somewhere else.
        </p>

        <div className="flex items-center justify-center gap-4">
          <a
            href="/"
            className="px-6 py-2.5 bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 rounded-lg text-sm font-medium hover:bg-cyan-500/20 transition-all"
          >
            ← Back to Home
          </a>
          <a
            href="#contact"
            className="px-6 py-2.5 text-muted text-sm hover:text-cyan-400 transition-colors"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}
