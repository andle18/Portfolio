import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import { FaReact, FaJsSquare, FaHtml5 } from "react-icons/fa";
import {
  SiCss3,
  SiTypescript,
  SiTailwindcss,
  SiFirebase,
  SiNextdotjs,
  SiZod,
  SiGithub,
} from "react-icons/si";
import { TbRoute } from "react-icons/tb";

type Skill = {
  name: string;
  icon: IconType;
};

const skills: Skill[] = [
  { name: "React", icon: FaReact },
  { name: "TypeScript", icon: SiTypescript },
  { name: "JavaScript", icon: FaJsSquare },
  { name: "HTML", icon: FaHtml5 },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Zustand", icon: FaReact },
  { name: "React Router", icon: TbRoute },
  { name: "Firebase", icon: SiFirebase },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "CSS3", icon: SiCss3 },
  { name: "Zod", icon: SiZod },
  { name: "GitHub", icon: SiGithub },
];

export default function Skills() {
  const middleIndex = Math.ceil(skills.length / 2);

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-4xl font-bold text-secondary">Skills</h2>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-10 justify-items-center">
          {skills.map((skill, index) => {
            const fromLeft = index < middleIndex;

            return (
              <motion.div
                key={skill.name}
                initial={{
                  opacity: 0,
                  x: fromLeft ? -60 : 60,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                }}
                className="flex flex-col items-center gap-3"
              >
                <div className="w-20 h-20 rounded-full bg-support/20 flex items-center justify-center shadow-sm">
                  <skill.icon className="text-2xl text-support" />
                </div>

                <span className="text-sm font-medium text-gray-900">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
