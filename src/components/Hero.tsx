import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import DownloadCV from "./DownloadCV";

export default function Hero() {
  return (
    <section className="relative overflow-x-hidden bg-ink pb-32 pt-36">
      <div
        className="pointer-events-none absolute left-1/4 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary opacity-[0.07] lg:h-[600px] lg:w-[600px]"
        style={{ filter: "blur(140px)" }}
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-gold opacity-[0.04] lg:h-[400px] lg:w-[400px]"
        style={{ filter: "blur(120px)" }}
      />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        <div className="max-w-3xl">
          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-5 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-gold"
            >
              Based in Spain · Open to frontend opportunities
            </motion.p>

            <h1
              className="font-serif font-bold leading-[1.05] tracking-[-0.02em] text-white"
              style={{ fontSize: "clamp(2.4rem, 8vw, 5rem)" }}
            >
              Andres <em className="italic text-gold">Gomes</em>
            </h1>

            <p className="mt-4 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-white/35">
              Frontend Developer · React &amp; TypeScript
            </p>

            <p className="mt-8 max-w-md text-[0.93rem] leading-[1.9] text-white/55">
              I build and maintain web applications with React and TypeScript.
              My experience includes reusable components, API integration, and
              automated testing. I’m looking for my next frontend role.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="rounded-sm bg-gold px-6 py-3 font-mono text-[0.75rem] font-medium uppercase tracking-[0.1em] text-ink transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
              >
                View Projects →
              </Link>
              <DownloadCV />
              <a
                href="#contact"
                className="rounded-sm border border-white/[0.08] px-6 py-3 font-mono text-[0.75rem] uppercase tracking-[0.1em] text-white/50 transition-all duration-300 hover:border-gold/50 hover:text-gold"
              >
                Contact
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
