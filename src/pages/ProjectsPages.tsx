import { motion } from "framer-motion";

const projects = [
  {
    num: "01",
    title: "Crypto Tracker",
    subtitle: "React + TypeScript",
    description:
      "A modern cryptocurrency tracking app built with React and TypeScript, using Zustand for state management and Zod for robust data validation.",
    image: "/crypto-tracker.png",
    link: "https://cryptotraker-react-zod-typescript.netlify.app/",
    tags: ["React", "TypeScript", "Zustand", "Zod"],
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
      "Web app that integrates a public API and AI to suggest cocktails based on user input and preferences.",
    image: "/Cocktail.jpg",
    link: "https://drinks-ai-react.vercel.app/",
    tags: ["React", "TypeScript", "API", "AI"],
  },
  {
    num: "04",
    title: "Calorie Tracker",
    subtitle: "Nutrition App",
    description:
      "A responsive calorie tracking app that allows users to log meals, view daily totals, and manage nutrition data with a clean interface.",
    image: "/calorie-tracker.png",
    link: "https://calorie-traker.netlify.app/",
    tags: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    num: "05",
    title: "Expense Tracker",
    subtitle: "Budget Planner",
    description:
      "A responsive expense tracking app that lets users record, categorize, and monitor expenses with clear summaries and a clean UI.",
    image: "/budget-planner.png",
    link: "https://expense-tracker-gomes.netlify.app/",
    tags: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    num: "06",
    title: "Weather Forecast",
    subtitle: "Public API",
    description:
      "A responsive weather forecast app that lets users view current conditions and forecasts for different cities worldwide.",
    image: "/weather.png",
    link: "https://euphonious-licorice-2c760b.netlify.app/",
    tags: ["React", "TypeScript", "API"],
  },
  {
    num: "07",
    title: "Interactive Ordering Menu",
    subtitle: "Next.js",
    description:
      "Web application UI for browsing and customizing food and drink orders, with clear category navigation and responsive interaction design.",
    image: "/Menu.jpg",
    link: "https://kioskly-orcin.vercel.app/order/cafe",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
];

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
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              className="group relative flex flex-col bg-ink transition-colors duration-300 hover:bg-white/[0.025]"
            >
              {/* Top accent line on hover */}
              <div className="absolute inset-x-0 top-0 h-[1px] bg-gold scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />

              {/* Image */}
              <div className="overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover opacity-70 transition-all duration-700 group-hover:opacity-100 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <span className="font-serif text-[0.72rem] italic text-white/20">
                  {project.num} /
                </span>

                <h3
                  className="mt-1 font-serif font-bold leading-tight tracking-[-0.02em] text-white transition-colors duration-300 group-hover:text-gold"
                  style={{ fontSize: "clamp(1.1rem, 2vw, 1.35rem)" }}
                >
                  {project.title}
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

                {/* Link label */}
                <div className="mt-5 flex items-center gap-1.5 font-mono text-[0.68rem] uppercase tracking-[0.1em] text-gold opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  View project
                  <span className="text-base">→</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Back link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 flex justify-center"
        >
          <a
            href="/"
            className="rounded-sm border border-white/[0.08] px-8 py-3.5 font-mono text-[0.78rem] uppercase tracking-[0.1em] text-white/50 transition-all duration-300 hover:border-gold/50 hover:text-gold"
          >
            ← Back to home
          </a>
        </motion.div>
      </div>
    </section>
  );
}
