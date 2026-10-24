import { FaGithub } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import { MdOutlineCameraFront } from "react-icons/md";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { isEmailConfigured, sendContactMessage } from "../lib/email";
import type { ContactMessage } from "../lib/email";
import { contactDetails } from "../data/contact";
import DownloadCV from "./DownloadCV";

type FormState = ContactMessage;

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
  const [slowSend, setSlowSend] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const sending = useRef(false);

  useEffect(() => {
    if (!loading) return;
    const timer = window.setTimeout(() => setSlowSend(true), 15000);
    return () => window.clearTimeout(timer);
  }, [loading]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
    setSuccess(false);
    setSubmitError(null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (sending.current || !isEmailConfigured) return;
    // A honeypot filters simple automated submissions without emailing them.
    if (new FormData(e.currentTarget).get("website")) return;

    const message: FormState = {
      firstName: form.firstName.trim(),
      lastName: form.lastName.trim(),
      email: form.email.trim(),
      message: form.message.trim(),
    };
    const newErrors: Partial<FormState> = {};
    if (!message.firstName) newErrors.firstName = "First name is required";
    else if (message.firstName.length > 80) newErrors.firstName = "Use 80 characters or fewer";
    if (!message.lastName) newErrors.lastName = "Last name is required";
    else if (message.lastName.length > 80) newErrors.lastName = "Use 80 characters or fewer";
    if (!message.email) newErrors.email = "Email is required";
    else if (message.email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(message.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!message.message) newErrors.message = "Message is required";
    else if (message.message.length > 5000) newErrors.message = "Use 5,000 characters or fewer";
    setSuccess(false);
    setSubmitError(null);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      const field = Object.keys(newErrors)[0];
      e.currentTarget.querySelector<HTMLElement>(`[name="${field}"]`)?.focus();
      return;
    }

    setErrors({});
    sending.current = true;
    setSlowSend(false);
    setLoading(true);
    try {
      await sendContactMessage(message);
      setSuccess(true);
      setForm({ firstName: "", lastName: "", email: "", message: "" });
    } catch (error) {
      const status = error && typeof error === "object" && "status" in error
        ? error.status
        : undefined;
      setSubmitError(
        status === 429
          ? "Please wait a moment before trying again, or email me directly."
          : "We couldn’t confirm delivery. Your message is still here; you can also email me directly.",
      );
    } finally {
      sending.current = false;
      setLoading(false);
      setSlowSend(false);
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
            Open to positions, freelance projects, and interesting
            collaborations. If you have an idea, let's talk.
          </p>

          {/* Direct contact */}
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
            <div className="mt-4 border-t border-white/[0.07] pt-4">
              <p className="mb-1 font-mono text-[0.62rem] uppercase tracking-[0.15em] text-white/50">
                Phone
              </p>
              <a
                href={contactDetails.phoneHref}
                className="text-sm text-white/70 transition-colors hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
              >
                {contactDetails.phone}
              </a>
            </div>
          </div>

          <div className="mt-6">
            <DownloadCV />
          </div>

          {/* Social icons */}
          <div className="mt-10 flex gap-4">
            {socials.map((s) => (
              <a
                key={s.platform}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.platform}
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
            noValidate
            aria-busy={loading}
            className="grid grid-cols-1 gap-5 sm:grid-cols-2"
          >
            <div className="hidden" aria-hidden="true">
              <label htmlFor="contact-website">Leave this field empty</label>
              <input id="contact-website" name="website" tabIndex={-1} autoComplete="off" />
            </div>
            {/* First name */}
            <div>
              <label htmlFor="contact-first-name" className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-white/50">
                First name
              </label>
              <input
                id="contact-first-name"
                name="firstName"
                autoComplete="given-name"
                maxLength={80}
                required
                disabled={loading}
                aria-invalid={Boolean(errors.firstName)}
                aria-describedby={errors.firstName ? "contact-first-name-error" : undefined}
                value={form.firstName}
                onChange={handleChange}
                className={inputClass}
              />
              {errors.firstName && (
                <p id="contact-first-name-error" className="mt-1.5 font-mono text-xs text-red-300">
                  {errors.firstName}
                </p>
              )}
            </div>

            {/* Last name */}
            <div>
              <label htmlFor="contact-last-name" className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-white/50">
                Last name
              </label>
              <input
                id="contact-last-name"
                name="lastName"
                autoComplete="family-name"
                maxLength={80}
                required
                disabled={loading}
                aria-invalid={Boolean(errors.lastName)}
                aria-describedby={errors.lastName ? "contact-last-name-error" : undefined}
                value={form.lastName}
                onChange={handleChange}
                className={inputClass}
              />
              {errors.lastName && (
                <p id="contact-last-name-error" className="mt-1.5 font-mono text-xs text-red-300">
                  {errors.lastName}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="sm:col-span-2">
              <label htmlFor="contact-email" className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-white/50">
                Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                maxLength={254}
                required
                disabled={loading}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "contact-email-error" : undefined}
                value={form.email}
                onChange={handleChange}
                className={inputClass}
              />
              {errors.email && (
                <p id="contact-email-error" className="mt-1.5 font-mono text-xs text-red-300">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Message */}
            <div className="sm:col-span-2">
              <label htmlFor="contact-message" className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-white/50">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                maxLength={5000}
                required
                disabled={loading}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "contact-message-error" : undefined}
                value={form.message}
                onChange={handleChange}
                className={inputClass}
                style={{ resize: "none" }}
              />
              {errors.message && (
                <p id="contact-message-error" className="mt-1.5 font-mono text-xs text-red-300">
                  {errors.message}
                </p>
              )}
            </div>

            <div className="sm:col-span-2" aria-live="polite" aria-atomic="true">
              {!isEmailConfigured && (
                <p className="text-sm leading-relaxed text-white/70">
                  The contact form is temporarily unavailable. Please{" "}
                  <a href="mailto:andresgomes18@gmail.com" className="text-gold underline">
                    email me directly
                  </a>.
                </p>
              )}
              {success && (
                <p className="text-sm text-sage">Message sent. Thank you for getting in touch.</p>
              )}
              {submitError && (
                <p role="alert" className="text-sm leading-relaxed text-red-300">{submitError}</p>
              )}
              {slowSend && (
                <p className="text-sm leading-relaxed text-white/70">
                  Still waiting for confirmation. Please keep this page open to avoid sending twice.
                </p>
              )}
            </div>

            {/* Submit */}
            <div className="flex justify-end sm:col-span-2">
              <button
                type="submit"
                disabled={loading || !isEmailConfigured}
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
