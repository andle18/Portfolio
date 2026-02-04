const projects = [
  {
    title: "Crypto Tracker",
    description:
      "A modern cryptocurrency tracking application built with React and TypeScript, using Zustand for state management and Zod for robust data validation. Focused on clean architecture and scalable frontend patterns.",
    image: "/crypto-tracker.png",
    link: "https://cryptotraker-react-zod-typescript.netlify.app/",
  },
  {
    title: "Task Manager with Auth & React Query",
    description:
      "Full-stack task management app with user authentication, backend API, and efficient data fetching using React Query.",
    image: "/Task.jpg",
    link: "https://uptask-frontend-lyart.vercel.app/auth/login",
  },
  {
    title: "Calorie Tracker App",
    image: "calorie-tracker.png",
    description:
      "A responsive calorie tracking app that allows users to log meals, view daily totals, and manage nutrition data with a clean, intuitive interface.",
    link: "https://calorie-traker.netlify.app/",
  },
  {
    title: "Expense Tracker App",
    image: "budget-planner.png",
    description:
      "A responsive expense tracking app that lets users record, categorize, and monitor expenses with clear summaries and a clean user interface.",
    link: "https://expense-tracker-gomes.netlify.app/",
  },
  {
    title: "Weather Forecast App",
    image: "weather.png",
    description:
      "A responsive weather forecast web application that lets users view current weather conditions and forecasts for different cities, with a clean, easy-to-use interface.",
    link: "https://euphonious-licorice-2c760b.netlify.app/",
  },
  {
    title: "Interactive Ordering Menu",
    image: "Menu.jpg",
    description:
      "Web application UI for browsing and customizing food and drink orders, highlighting clear category navigation and responsive interaction design.",
    link: "https://kioskly-orcin.vercel.app/order/cafe",
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
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="mt-4 rounded-lg"
                  />
                )}
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
