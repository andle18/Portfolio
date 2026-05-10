import { motion } from "framer-motion";
import { trackEvent } from "../lib/firebase";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink pt-36 pb-32">
      {/* Ambient blobs */}
      <div
        className="pointer-events-none absolute left-1/4 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary opacity-[0.07]"
        style={{ filter: "blur(140px)" }}
      />
      <div
        className="pointer-events-none absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-gold opacity-[0.04]"
        style={{ filter: "blur(120px)" }}
      />

      <div className="relative mx-auto max-w-7xl px-8 grid lg:grid-cols-2 gap-16 items-center">
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
            Available for work
          </motion.p>

          <h1
            className="font-serif font-bold leading-[1.05] tracking-[-0.02em] text-white"
            style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)" }}
          >
            Andres <em className="italic text-gold">Gomes</em>
          </h1>

          <p className="mt-4 font-mono text-[0.78rem] uppercase tracking-[0.18em] text-white/35">
            Junior Frontend Developer
          </p>

          <p className="mt-8 max-w-md text-[0.95rem] leading-[1.9] text-white/45">
            I build clean, accessible, and responsive user interfaces using
            React, TypeScript, and Tailwind CSS. Focused on real user
            experience, not just visuals.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/projects"
              className="rounded-sm bg-gold px-7 py-3.5 font-mono text-[0.78rem] font-medium uppercase tracking-[0.1em] text-ink transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
            >
              View Projects →
            </a>

            <a
              href="#contact"
              onClick={() =>
                void trackEvent("contact_cta_click", { source: "hero" })
              }
              className="rounded-sm border border-white/[0.08] px-7 py-3.5 font-mono text-[0.78rem] uppercase tracking-[0.1em] text-white/50 transition-all duration-300 hover:border-gold/50 hover:text-gold"
            >
              Contact
            </a>
          </div>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">
            <div className="absolute -inset-[1px] rounded-sm bg-gradient-to-br from-gold/30 via-transparent to-gold/10" />
            <img
              src="/profile.jpg"
              alt="Andres Gomes"
              className="relative w-72 h-72 lg:w-[22rem] lg:h-[22rem] rounded-sm object-cover opacity-90"
            />

            <div className="absolute -bottom-4 left-0 right-0 flex justify-center">
              <span className="rounded-sm border border-white/[0.07] bg-ink/80 px-4 py-1.5 font-mono text-[0.62rem] uppercase tracking-[0.15em] text-white/30 backdrop-blur-sm">
                Andres Gomes — Frontend Dev
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
