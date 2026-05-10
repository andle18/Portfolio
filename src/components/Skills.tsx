import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import { FaReact, FaJsSquare, FaHtml5, FaNodeJs } from "react-icons/fa";
import {
  SiCss3,
  SiTypescript,
  SiTailwindcss,
  SiFirebase,
  SiNextdotjs,
  SiZod,
  SiGithub,
  SiReactquery,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiGit,
} from "react-icons/si";
import { TbRoute, TbApi, TbForms } from "react-icons/tb";

type Skill = { name: string; icon: IconType };

const categories: { label: string; skills: Skill[] }[] = [
  {
    label: "Core Languages",
    skills: [
      { name: "JavaScript", icon: FaJsSquare },
      { name: "TypeScript", icon: SiTypescript },
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: SiCss3 },
    ],
  },
  {
    label: "Frameworks & UI",
    skills: [
      { name: "React", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    label: "State & Data",
    skills: [
      { name: "Zustand", icon: FaReact },
      { name: "React Query", icon: SiReactquery },
      { name: "React Hook Form", icon: TbForms },
      { name: "Zod", icon: SiZod },
      { name: "React Router", icon: TbRoute },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express", icon: SiExpress },
      { name: "REST APIs", icon: TbApi },
    ],
  },
  {
    label: "Databases",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Prisma", icon: SiPrisma },
    ],
  },
  {
    label: "Tools",
    skills: [
      { name: "Firebase", icon: SiFirebase },
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
    ],
  },
];

function SkillPill({ skill, delay }: { skill: Skill; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="group flex cursor-default items-center gap-8 rounded-sm border border-white/[0.07] bg-white/[0.03] px-4 py-2.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/40 hover:bg-gold/[0.05]"
    >
      <skill.icon className="text-base text-white/40 transition-colors duration-300 group-hover:text-gold" />
      <span className="text-[0.82rem] text-white/70 transition-colors duration-300 group-hover:text-white">
        {skill.name}
      </span>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative border-t border-white/[0.06] bg-ink py-36"
    >
      {/* Subtle center blob */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary opacity-[0.06]"
        style={{ filter: "blur(120px)" }}
      />

      <div className="relative mx-auto max-w-7xl px-8">
        {/* Header */}
        <div className="mb-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-3 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-gold"
          >
            02 — Expertise
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif font-bold tracking-[-0.02em] text-white"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            What I build with.
          </motion.h2>
        </div>

        {/* Category rows */}
        <div className="flex flex-col divide-y divide-white/[0.06] border-t border-white/[0.06]">
          {categories.map((cat, ci) => (
            <div
              key={cat.label}
              className="grid grid-cols-1 gap-6 py-10 lg:grid-cols-[200px_1fr] lg:gap-16 lg:py-12"
            >
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: ci * 0.06 }}
                className="pt-1 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-white/35"
              >
                {cat.label}
              </motion.p>

              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill, si) => (
                  <SkillPill
                    key={skill.name}
                    skill={skill}
                    delay={ci * 0.06 + si * 0.07}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
