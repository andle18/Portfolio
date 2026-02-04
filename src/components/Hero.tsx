import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-support/10 to-white pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-5xl font-bold text-primary">Andres Gomes</h1>

          <p className="mt-4 text-xl font-semibold text-gray-700">
            Junior Frontend Developer
          </p>

          <p className="mt-6 max-w-xl text-gray-600 leading-relaxed">
            I build clean, accessible, and responsive user interfaces using
            React, TypeScript, and Tailwind CSS. I focus on real user
            experience, not just visuals.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="/src/pages/ProjectsPages.tsx"
              className="rounded-md bg-accent px-6 py-3 text-white font-semibold hover:opacity-90 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-md border border-primary px-6 py-3 font-semibold text-primary hover:bg-primary hover:text-white transition"
            >
              Contact
            </a>
          </div>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex justify-center"
        >
          <img
            src="/profile.jpg"
            alt="Andres Gomes"
            className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl object-cover shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
