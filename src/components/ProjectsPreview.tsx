import { motion } from "framer-motion";

const projects = [
  {
    num: "01",
    title: "Order Management App",
    subtitle: "Next.js",
    description:
      "Next.js application that allows users to place orders and manage dynamic pricing through an interactive UI.",
    image: "/Menu.jpg",
    link: "https://kioskly-orcin.vercel.app/order/cafe",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    num: "02",
    title: "Task Manager",
    subtitle: "Auth & React Query",
    description:
      "Full-stack task management app with user authentication, backend API, and efficient data fetching using React Query.",
    image: "/Task.jpg",
    link: "https://uptask-frontend-lyart.vercel.app/auth/login",
    tags: ["React", "React Query", "Firebase"],
  },
  {
    num: "03",
    title: "AI Cocktail Recommender",
    subtitle: "Public API + AI",
    description:
      "Web app that integrates a public API and AI to suggest cocktails based on user input.",
    image: "/Cocktail.jpg",
    link: "https://drinks-ai-react.vercel.app/",
    tags: ["React", "TypeScript", "API"],
  },
];

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
            03
          </motion.span>
        </div>

        {/* Project rows */}
        <div className="flex flex-col divide-y divide-white/[0.06] border-t border-white/[0.06]">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group relative grid grid-cols-1 gap-6 py-10 transition-all duration-500 hover:pl-6 lg:grid-cols-[80px_1fr_auto] lg:items-center lg:gap-12 lg:py-8"
            >
              {/* Hover fill */}
              <div className="absolute inset-0 w-0 bg-white/[0.025] transition-all duration-500 group-hover:w-full" />

              {/* Number */}
              <span className="relative font-serif text-[0.75rem] italic text-white/30">
                {project.num} /
              </span>

              {/* Info */}
              <div className="relative">
                <h3
                  className="font-serif font-bold leading-tight tracking-[-0.02em] text-white transition-colors duration-300 group-hover:text-gold"
                  style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}
                >
                  {project.title}
                  <span className="ml-3 font-serif text-[0.65em] italic text-white/30">
                    — {project.subtitle}
                  </span>
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/40">
                  {project.description}
                </p>
              </div>

              {/* Tags */}
              <div className="relative hidden flex-wrap justify-end gap-2 lg:flex">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-sm border border-white/[0.07] bg-white/[0.03] px-2.5 py-1 font-mono text-[0.62rem] uppercase tracking-[0.1em] text-white/40"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Arrow */}
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-lg text-gold opacity-0 transition-all duration-300 group-hover:opacity-100">
                →
              </span>
            </motion.a>
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
          <a
            href="/projects"
            className="rounded-sm border border-white/[0.08] px-8 py-3.5 font-mono text-[0.78rem] uppercase tracking-[0.1em] text-white/50 transition-all duration-300 hover:border-gold/50 hover:text-gold"
          >
            View all projects →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
