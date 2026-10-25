import { featuredProjects } from "../data/projects";
import ProjectLinks from "./ProjectLinks";
import ProjectImage from "./ProjectImage";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ProjectsPreview() {
  return (
    <section
      id="projects"
      className="relative border-t border-white/[0.06] bg-ink py-36"
    >
      <div className="mx-auto max-w-7xl px-8">
        {/* Header */}
        <div className="mb-20 flex items-end justify-between">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-3 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-gold"
            >
              03 — Work
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif font-bold tracking-[-0.02em] text-white"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              Selected projects.
            </motion.h2>
          </div>

          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden font-serif text-[5rem] font-black leading-none text-gold/10 lg:block"
          >
            04
          </motion.span>
        </div>

        {/* Project rows */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {featuredProjects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group relative flex flex-col gap-5 overflow-hidden rounded-sm border border-white/[0.07] bg-white/[0.02] p-5 transition-colors duration-300 hover:border-gold/40 focus-within:border-gold/40"
            >
              {/* Hover fill */}
              <div className="absolute inset-0 w-0 bg-white/[0.025] transition-all duration-500 group-hover:w-full" />

              <ProjectImage project={project} />

              {/* Number */}
              <span className="relative font-serif text-[0.75rem] italic text-white/30">
                {String(i + 1).padStart(2, "0")} /
              </span>

              {/* Info */}
              <div>
                <h3
                  className="font-serif font-bold leading-tight tracking-[-0.02em] text-white transition-colors duration-300 group-hover:text-gold"
                  style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}
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
                  <span className="ml-3 font-serif text-[0.65em] italic text-white/30">
                    — {project.subtitle}
                  </span>
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/40">
                  {project.description}
                </p>
              </div>

              {/* Tags */}
              <div className="relative mt-auto flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-sm border border-white/[0.07] bg-white/[0.03] px-2.5 py-1 font-mono text-[0.62rem] uppercase tracking-[0.1em] text-white/40"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <ProjectLinks project={project} />
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 flex justify-center"
        >
          <Link
            to="/projects"
            className="rounded-sm border border-white/[0.08] px-8 py-3.5 font-mono text-[0.78rem] uppercase tracking-[0.1em] text-white/50 transition-all duration-300 hover:border-gold/50 hover:text-gold"
          >
            View all projects →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
