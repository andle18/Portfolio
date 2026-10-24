import { motion } from "framer-motion";

const stats = [
  { num: "React", label: "Frontend development" },
  { num: "TypeScript", label: "Typed interfaces" },
  { num: "Spanish", label: "Native" },
  { num: "English", label: "Intermediate" },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative border-t border-white/[0.06] bg-ink py-36"
    >
      {/* Subtle ambient blob */}
      <div
        className="pointer-events-none absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-gold opacity-[0.04]"
        style={{ filter: "blur(130px)" }}
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-20 px-8 lg:grid-cols-2 lg:gap-32">
        {/* LEFT */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-3 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-gold"
          >
            01 — About
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif font-bold leading-[1.1] tracking-[-0.02em] text-white"
            style={{ fontSize: "clamp(2.2rem, 4vw, 3.8rem)" }}
          >
            Focused on <em className="italic text-gold">real</em>
            <br />
            user experience.
          </motion.h2>

          {/* Stats grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-12 grid grid-cols-2 border border-white/[0.06]"
          >
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="p-3 transition-colors duration-300 hover:bg-white/[0.03] sm:p-6"
                style={{
                  borderRight:
                    i % 2 === 0 ? "1px solid rgba(255,255,255,0.06)" : "none",
                  borderBottom:
                    i < 2 ? "1px solid rgba(255,255,255,0.06)" : "none",
                }}
              >
                <div className="font-serif text-lg font-black leading-none text-gold sm:text-2xl">
                  {s.num}
                </div>
                <div className="mt-1.5 font-mono text-[0.68rem] uppercase tracking-[0.1em] text-white/40">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <p className="text-[0.95rem] leading-[1.95] text-white/50">
            I’m a frontend developer based in Spain with a degree in Computer
            Engineering from Universidad Rafael Belloso Chacín. My background
            includes product development and frontend consulting, building and
            maintaining applications with React and TypeScript.
          </p>
          <p className="mt-5 text-[0.95rem] leading-[1.95] text-white/50">
            I’ve worked on reusable components, API integration, and application
            state management. My experience also includes automated testing with
            Jest and Cypress, code reviews, and collaborating on releases.
          </p>
          <p className="mt-5 text-[0.95rem] leading-[1.95] text-white/50">
            I’m currently looking for my next frontend opportunity. My projects
            show how I approach interfaces, data, and integrations, including
            applications built with React, Next.js, and Firebase. I speak native
            Spanish and intermediate English.
          </p>

          {/* Code card */}
          <div
            className="relative mt-10 overflow-hidden rounded-sm border border-white/[0.06] p-6 font-mono text-[0.78rem] leading-[1.9] text-white/45"
            style={{ background: "rgba(255,255,255,0.025)" }}
          >
            {/* Top accent bar */}
            <div
              className="absolute inset-x-0 top-0 h-[2px]"
              style={{ background: "linear-gradient(90deg, #C8A96E, #7EB8A4)" }}
            />
            {/* Traffic dots */}
            <div className="mb-5 flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-gold/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-sage/70" />
            </div>

            {/* Code lines */}
            {[
              <>
                <span className="text-gold">const</span>
                {" developer = {"}
              </>,
              <>
                &nbsp;&nbsp;<span className="text-sage">name</span>
                {": "}
                <span className="text-accent/80">"Andres Gomes"</span>,
              </>,
              <>
                &nbsp;&nbsp;<span className="text-sage">role</span>
                {": "}
                <span className="text-accent/80">"Frontend Dev"</span>,
              </>,
              <>
                &nbsp;&nbsp;<span className="text-sage">stack</span>
                {": ["}
                <span className="text-accent/80">"React"</span>
                {", "}
                <span className="text-accent/80">"TypeScript"</span>
                {", "}
                <span className="text-accent/80">"Tailwind CSS"</span>
                {"],"},
              </>,
              <>
                &nbsp;&nbsp;<span className="text-sage">available</span>
                {": "}
                <span className="text-gold">true</span>,
              </>,
              <>
                &nbsp;&nbsp;<span className="text-sage">focus</span>
                {": "}
                <span className="text-accent/80">"UX + Performance"</span>
              </>,
              <>{"};"},</>,
            ].map((line, i) => (
              <div key={i} className="flex gap-4">
                <span className="min-w-[18px] select-none text-right text-white/15">
                  {i + 1}
                </span>
                <span>{line}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
