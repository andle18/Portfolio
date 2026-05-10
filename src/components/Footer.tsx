export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-ink px-8 py-7">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
        <span className="font-serif text-sm font-bold text-white">
          Andres <em className="italic text-gold">Gomes</em>
        </span>

        <p className="font-mono text-[0.72rem] text-white/30">
          © {new Date().getFullYear()} — Built with TypeScript
        </p>

        <div className="flex gap-5">
          <a
            href="https://github.com/andle18"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[0.72rem] uppercase tracking-[0.1em] text-white/35 transition-colors duration-300 hover:text-gold"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/andres-gomes-7426723a9/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[0.72rem] uppercase tracking-[0.1em] text-white/35 transition-colors duration-300 hover:text-gold"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
