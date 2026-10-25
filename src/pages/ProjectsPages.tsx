import { projects } from "../data/projects";
import ProjectLinks from "../components/ProjectLinks";
import ProjectImage from "../components/ProjectImage";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ProjectsPages() {
  return (
    <section className="relative min-h-screen bg-ink pt-36 pb-32">
      {/* Subtle background glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-64 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary opacity-[0.05]"
        style={{ filter: "blur(140px)" }}
      />

      <div className="relative mx-auto max-w-7xl px-8">
        {/* Header */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-3 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-gold"
        >
          All Work
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif font-bold tracking-[-0.02em] text-white"
          style={{ fontSize: "clamp(2.2rem, 4vw, 3.8rem)" }}
        >
          All projects.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-4 max-w-lg text-[0.95rem] leading-relaxed text-white/40"
        >
          A complete collection of my frontend projects — demos, source code,
          and the technologies behind each one.
        </motion.p>

        {/* Grid */}
        <div className="mt-20 grid grid-cols-1 gap-px bg-white/[0.06] border border-white/[0.06] md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              className="group relative flex flex-col bg-ink transition-colors duration-300 hover:bg-white/[0.025]"
            >
              {/* Top accent line on hover */}
              <div className="absolute inset-x-0 top-0 h-[1px] bg-gold scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />

              {/* Image */}
              <ProjectImage project={project} />

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <span className="font-serif text-[0.72rem] italic text-white/20">
                  {String(i + 1).padStart(2, "0")} /
                </span>

                <h3
                  className="mt-1 font-serif font-bold leading-tight tracking-[-0.02em] text-white transition-colors duration-300 group-hover:text-gold"
                  style={{ fontSize: "clamp(1.1rem, 2vw, 1.35rem)" }}
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="after:absolute after:inset-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
                    aria-label={`Open ${project.title} demo (opens in a new tab)`}
                  >
                    {project.title}
                  </a>
                  <span className="ml-2 font-serif text-[0.65em] italic text-white/30">
                    — {project.subtitle}
                  </span>
                </h3>

                <p className="mt-3 flex-1 text-[0.84rem] leading-relaxed text-white/40">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-sm border border-white/[0.07] bg-white/[0.03] px-2.5 py-1 font-mono text-[0.60rem] uppercase tracking-[0.1em] text-white/35"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <ProjectLinks project={project} />
              </div>
            </motion.article>
          ))}
        </div>

        {/* Back link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 flex justify-center"
        >
          <Link
            to="/"
            className="rounded-sm border border-white/[0.08] px-8 py-3.5 font-mono text-[0.78rem] uppercase tracking-[0.1em] text-white/50 transition-all duration-300 hover:border-gold/50 hover:text-gold"
          >
            ← Back to home
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
