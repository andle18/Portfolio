const projects = [
  {
    title: "Portfolio Website",
    description: "Personal portfolio built with React and Tailwind CSS.",
    link: "https://your-portfolio.vercel.app",
  },
  {
    title: "Todo App",
    description: "Task management app built with React and TypeScript.",
    link: "https://your-todo.netlify.app",
  },
  {
    title: "Weather App",
    description: "Weather application consuming a public API.",
    link: "https://your-weather.vercel.app",
  },
  {
    title: "Auth App",
    description: "Authentication app using Firebase.",
    link: "#",
  },
];

export default function ProjectsPages() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6">
        <h1 className="text-4xl font-bold text-secondary text-center">
          All Projects
        </h1>

        <p className="mt-4 text-center text-gray-600 max-w-xl mx-auto">
          A complete list of my frontend projects, including demos and source
          code.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-xl bg-white p-6 shadow-md transition hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-secondary">
                {project.title}
              </h3>

              <p className="mt-3 text-gray-600">{project.description}</p>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block font-semibold text-accent hover:underline"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
