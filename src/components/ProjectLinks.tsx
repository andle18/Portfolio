import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import type { Project } from "../data/projects";

export default function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="relative z-10 mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.07] pt-4 font-mono text-[0.68rem] uppercase tracking-[0.1em]">
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${project.title} demo (opens in a new tab)`}
        className="inline-flex min-h-11 items-center gap-2 rounded-sm text-gold transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-4"
      >
        View project <FiArrowUpRight size={17} aria-hidden="true" />
      </a>
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${project.title} source code on GitHub (opens in a new tab)`}
        className="inline-flex min-h-11 items-center gap-2 rounded-sm border border-white/15 px-3 text-white/70 transition-colors hover:border-gold/50 hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-4"
      >
        <FiGithub size={17} aria-hidden="true" /> GitHub
      </a>
    </div>
  );
}
