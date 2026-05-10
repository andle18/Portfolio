import { FaGithub } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import { MdOutlineCameraFront } from "react-icons/md";
import { useState } from "react";
import { motion } from "framer-motion";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db, trackEvent } from "../lib/firebase";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

// Shared input style — uses Tailwind classes only
const inputClass =
  "mt-2 w-full rounded-sm border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-white/25 outline-none transition-all duration-300 focus:border-gold/50 focus:bg-white/[0.06]";

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e?: React.SyntheticEvent) => {
    e?.preventDefault();
    const newErrors: Partial<FormState> = {};
    if (!form.firstName.trim()) newErrors.firstName = "First name is required";
    if (!form.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    if (!form.message.trim()) newErrors.message = "Message is required";
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setSubmitError(null);
    setLoading(true);
    try {
      await Promise.race([
        addDoc(collection(db, "contacts"), {
          ...form,
          createdAt: serverTimestamp(),
        }),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error("Timeout")), 10000),
        ),
      ]);
      setSuccess(true);
      setForm({ firstName: "", lastName: "", email: "", message: "" });
      void trackEvent("contact_form_submit", { status: "success" });
      setTimeout(() => setSuccess(false), 4000);
    } catch (error) {
      console.error("Error sending message:", error);
      void trackEvent("contact_form_submit", { status: "error" });
      setSubmitError(
        "Could not send. Check your Firestore rules or connection.",
      );
    } finally {
      setLoading(false);
    }
  };

  const socials = [
    {
      href: "https://github.com/andle18",
      icon: <FaGithub className="text-xl" />,
      platform: "github",
    },
    {
      href: "https://www.linkedin.com/in/andres-gomes-7426723a9/",
      icon: <SiLinkedin className="text-xl" />,
      platform: "linkedin",
    },
    {
      href: "https://personalphotography.vercel.app/",
      icon: <MdOutlineCameraFront className="text-xl" />,
      platform: "photography",
    },
  ];

  return (
    <section
      id="contact"
      className="relative border-t border-white/[0.06] bg-ink py-36"
    >
      {/* Ambient blob */}
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-gold opacity-[0.05]"
        style={{ filter: "blur(130px)" }}
      />

      {/* Toast: success */}
      {success && (
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed right-6 top-6 z-50 flex items-center gap-3 rounded-sm border border-sage/30 bg-sage/15 px-5 py-4 font-mono text-sm text-sage backdrop-blur-lg"
        >
          <span className="h-2 w-2 rounded-full bg-sage" />
          Message sent successfully
        </motion.div>
      )}
      {submitError && (
        <div className="fixed right-6 top-6 z-50 flex items-center gap-3 rounded-sm border border-accent/30 bg-accent/10 px-5 py-4 font-mono text-sm text-accent/80 backdrop-blur-lg">
          <span className="h-2 w-2 rounded-full bg-accent" />
          {submitError}
        </div>
      )}

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 px-8 lg:grid-cols-2 lg:gap-24">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-16 lg:py-0"
        >
          <p className="mb-4 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-gold">
            04 — Contact
          </p>

          <h2
            className="font-serif font-black leading-[0.95] tracking-[-0.03em] text-white"
            style={{ fontSize: "clamp(2.8rem, 6vw, 5.5rem)" }}
          >
            Let's work
            <br />
            <em className="italic text-gold">together.</em>
          </h2>

          <p className="mt-8 max-w-sm text-[0.95rem] leading-[1.85] text-white/45">
            Open to junior positions, freelance projects, and interesting
            collaborations. If you have an idea, let's talk.
          </p>

          {/* Email pill */}
          <div
            className="mt-10 inline-block rounded-sm border border-white/[0.07] px-5 py-3.5"
            style={{
              background: "rgba(255,255,255,0.04)",
              backdropFilter: "blur(10px)",
            }}
          >
            <p className="mb-1 font-mono text-[0.62rem] uppercase tracking-[0.15em] text-white/30">
              Email directly
            </p>
            <a
              href="mailto:andresgomes18@gmail.com"
              className="text-sm text-white/70 transition-colors hover:text-gold"
            >
              andresgomes18@gmail.com
            </a>
          </div>

          {/* Social icons */}
          <div className="mt-10 flex gap-4">
            {socials.map((s) => (
              <a
                key={s.platform}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  void trackEvent("social_click", {
                    platform: s.platform,
                    source: "contact_section",
                  })
                }
                className="flex h-10 w-10 items-center justify-center rounded-sm border border-white/[0.07] bg-white/[0.03] text-white/40 transition-all duration-300 hover:border-gold/40 hover:text-gold"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </motion.div>

        {/* FORM */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="py-16 lg:self-center lg:py-0"
        >
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-5 sm:grid-cols-2"
          >
            {/* First name */}
            <div>
              <label className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-white/50">
                First name
              </label>
              <input
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                className={inputClass}
              />
              {errors.firstName && (
                <p className="mt-1.5 font-mono text-xs text-accent/80">
                  {errors.firstName}
                </p>
              )}
            </div>

            {/* Last name */}
            <div>
              <label className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-white/50">
                Last name
              </label>
              <input
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                className={inputClass}
              />
              {errors.lastName && (
                <p className="mt-1.5 font-mono text-xs text-accent/80">
                  {errors.lastName}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="sm:col-span-2">
              <label className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-white/50">
                Email
              </label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className={inputClass}
              />
              {errors.email && (
                <p className="mt-1.5 font-mono text-xs text-accent/80">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Message */}
            <div className="sm:col-span-2">
              <label className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-white/50">
                Message
              </label>
              <textarea
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                className={inputClass}
                style={{ resize: "none" }}
              />
              {errors.message && (
                <p className="mt-1.5 font-mono text-xs text-accent/80">
                  {errors.message}
                </p>
              )}
            </div>

            {/* Submit */}
            <div className="flex justify-end sm:col-span-2">
              <button
                type="submit"
                disabled={loading}
                className="rounded-sm bg-gold px-7 py-3.5 font-mono text-[0.78rem] font-medium uppercase tracking-[0.1em] text-ink transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40"
              >
                {loading ? "Sending..." : "Let's work together →"}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
