import { useState } from "react";
import type { Project } from "../data/projects";

export default function ProjectImage({ project }: { project: Project }) {
  const [selected, setSelected] = useState(0);
  const screenshot = project.screenshots?.[selected];

  return (
    <div className="relative z-10">
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${project.title} demo (opens in a new tab)`}
        className="block aspect-video overflow-hidden rounded-sm bg-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
      >
        <img
          src={screenshot?.image ?? project.image}
          alt={`${project.title} — ${screenshot?.label ?? "application preview"}`}
          loading="lazy"
          width={1440}
          height={810}
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      </a>
      {project.screenshots && (
        <div className="flex flex-wrap gap-2 px-1 pt-3" role="group" aria-label={`${project.title} screenshots`}>
          {project.screenshots.map((item, index) => (
            <button
              key={item.image}
              type="button"
              onClick={() => setSelected(index)}
              aria-pressed={selected === index}
              className={`min-h-11 rounded-sm border px-3 font-mono text-[0.6rem] uppercase tracking-[0.08em] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2 ${
                selected === index
                  ? "border-gold/50 bg-gold/10 text-gold"
                  : "border-white/10 text-white/60 hover:border-gold/40 hover:text-gold"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
