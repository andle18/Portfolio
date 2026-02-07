const projects = [
  {
    title: "Order Management App (Next.js)",
    description:
      "Next.js application that allows users to place orders and manage dynamic pricing through an interactive UI.",
    image: "/Menu.jpg",
    link: "https://kioskly-orcin.vercel.app/order/cafe",
  },
  {
    title: "Task Manager with Auth & React Query",
    description:
      "Full-stack task management app with user authentication, backend API, and efficient data fetching using React Query.",
    image: "/Task.jpg",
    link: "https://uptask-frontend-lyart.vercel.app/auth/login",
  },
  {
    title: "AI Cocktail Recommendation App",
    description:
      "Web app that integrates a public API and AI to suggest cocktails based on user input.",
    image: "/Cocktail.jpg",
    link: "https://drinks-ai-react.vercel.app/",
  },
];
export default function ProjectsPreview() {
  return (
    <section className="bg-secondary/5 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-4xl font-bold text-secondary">
          Featured Projects
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-center text-gray-600">
          A selection of projects that showcase my frontend skills and
          experience.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-secondary">
                  {project.title}
                </h3>

                <p className="mt-3 text-gray-600">{project.description}</p>

                <span className="mt-4 inline-block font-semibold text-accent">
                  View Project →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
