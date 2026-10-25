import { ticketnova } from "./ticketnova";

export interface Project {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  link: string;
  github: string;
  tags: string[];
  screenshots?: { image: string; label: string }[];
}

export const projects: Project[] = [
  ticketnova,
  {
    title: "Crypto Tracker",
    github: "https://github.com/andle18/crypto-price-tracker-react",
    subtitle: "React + TypeScript",
    description:
      "A modern cryptocurrency tracking app built with React and TypeScript, using Zustand for state management and Zod for robust data validation.",
    image: "/crypto-tracker.png",
    link: "https://cryptotraker-react-zod-typescript.netlify.app/",
    tags: ["React", "TypeScript", "Zustand", "Zod"],
  },
  {
    title: "NexoBoard",
    subtitle: "Projects & Kanban",
    description:
      "Full-stack project management app with a Kanban board, team collaboration, Firebase authentication, and a visitor demo to explore without an account.",
    image: "/nexoboard-kanban.jpg",
    link: "https://uptaskfrontend-sage.vercel.app/auth/login",
    github: "https://github.com/andle18/NexoBoard",
    tags: ["React", "TypeScript", "React Query", "Firebase"],
    screenshots: [
      { image: "/nexoboard-kanban.jpg", label: "Kanban board" },
      { image: "/nexoboard-projects.jpg", label: "Projects" },
      { image: "/nexoboard-login.jpg", label: "Sign in" },
    ],
  },
  {
    title: "AI Cocktail Recommender",
    github: "https://github.com/andle18/drinks-ai-react",
    subtitle: "Public API + AI",
    description:
      "Web app that integrates a public API and AI to suggest cocktails based on user input and preferences.",
    image: "/Cocktail.jpg",
    link: "https://drinks-ai-react.vercel.app/",
    tags: ["React", "TypeScript", "API", "AI"],
  },
  {
    title: "Calorie Tracker",
    github: "https://github.com/andle18/calorie-tracker-react",
    subtitle: "Nutrition App",
    description:
      "A responsive calorie tracking app that allows users to log meals, view daily totals, and manage nutrition data with a clean interface.",
    image: "/calorie-tracker.png",
    link: "https://calorie-traker.netlify.app/",
    tags: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Expense Tracker",
    github: "https://github.com/andle18/Expense-Tracker",
    subtitle: "Budget Planner",
    description:
      "A responsive expense tracking app that lets users record, categorize, and monitor expenses with clear summaries and a clean UI.",
    image: "/budget-planner.png",
    link: "https://expense-tracker-gomes.netlify.app/",
    tags: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Weather Forecast",
    github: "https://github.com/andle18/Weather_page",
    subtitle: "Public API",
    description:
      "A responsive weather forecast app that lets users view current conditions and forecasts for different cities worldwide.",
    image: "/weather.png",
    link: "https://euphonious-licorice-2c760b.netlify.app/",
    tags: ["React", "TypeScript", "API"],
  },
  {
    title: "Order Management App",
    github: "https://github.com/andle18/kiosk-next-app",
    subtitle: "Next.js",
    description:
      "Web application UI for browsing and customizing food and drink orders, with clear category navigation and responsive interaction design.",
    image: "/Menu.jpg",
    link: "https://kioskly-orcin.vercel.app/order/coffee",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
];

export const featuredProjects = [projects[0], projects[7], projects[2], projects[3]];
