import { FaGithub } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-secondary/80  via-secondary to-secondary py-15"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        {/* LEFT SIDE */}
        <div className="relative px-6 pt-24 pb-20 sm:pt-32 lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mx-0">
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Let’s build something meaningful
            </h2>

            <p className="mt-6 text-lg text-white/70">
              I’m a frontend developer focused on clean UI, accessibility and
              smooth user experiences. If you have an idea or a project, let’s
              talk.
            </p>

            {/* VISUAL BLOCK */}
            <div className="relative mt-12 h-64 overflow-hidden rounded-2xl bg-gradient-to-br from-primary/40 via-support/30 to-accent/20 p-6">
              <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10" />

              <div className="relative flex flex-wrap gap-4">
                {[
                  "React",
                  "TypeScript",
                  "Tailwind",
                  "UX-first",
                  "JavaScript",
                  "React Router",
                  "Firebase",
                  "Next.js",
                  "CSS3",
                  "HTML5",
                ].map((item) => (
                  <div
                    key={item}
                    className="animate-float rounded-xl bg-secondary/80 px-10 py-2 text-sm font-medium text-white shadow backdrop-blur"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* LINKS */}
            <div className="mt-10 flex items-center gap-6 ">
              <a
                href="https://github.com/andle18"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-white/60 hover:text-support transition"
              >
                <FaGithub className="text-3xl" />
              </a>

              <a
                href="https://www.indeed.com/cv/tu-cv"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Indeed"
                className="text-white/60 hover:text-support transition"
              >
                <SiIndeed className="text-3xl" />
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE – FORM */}
        <div className="px-6 pt-16 pb-24 sm:pb-32 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-xl lg:mr-0">
            <form className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-semibold">
                  First name
                </label>
                <input
                  type="text"
                  className="mt-2 block w-full rounded-md bg-secondary/70 px-3.5 py-2 text-white outline outline-1 outline-white/10 focus:outline-2 focus:outline-support"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold">Last name</label>
                <input
                  type="text"
                  className="mt-2 block w-full rounded-md bg-secondary/70 px-3.5 py-2 text-white outline outline-1 outline-white/10 focus:outline-2 focus:outline-support"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold">Email</label>
                <input
                  type="email"
                  className="mt-2 block w-full rounded-md bg-secondary/70 px-3.5 py-2 text-white outline outline-1 outline-white/10 focus:outline-2 focus:outline-support"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold">Message</label>
                <textarea
                  rows={4}
                  className="mt-2 block w-full rounded-md bg-secondary/70 px-3.5 py-2 text-white outline outline-1 outline-white/10 focus:outline-2 focus:outline-support"
                />
              </div>

              <div className="sm:col-span-2 flex justify-end">
                <button
                  type="submit"
                  className="rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-accent/90 focus:outline-2 focus:outline-offset-2 focus:outline-accent"
                >
                  Let’s work together
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
