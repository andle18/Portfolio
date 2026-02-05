import { FaGithub } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../lib/firebase";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

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
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

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
      const savePromise = addDoc(collection(db, "contacts"), {
        ...form,
        createdAt: serverTimestamp(),
      });
      const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Request timed out")), 10000),
      );

      await Promise.race([savePromise, timeoutPromise]);

      setSuccess(true);
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });

      setTimeout(() => setSuccess(false), 4000);
    } catch (error) {
      console.error("Error sending message:", error);
      setSubmitError(
        "No se pudo enviar. Revisa tus reglas de Firestore o tu conexión.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative bg-gradient-to-b from-secondary via-secondary to-secondary py-28"
    >
      {/* TOAST */}
      {success && (
        <div className="fixed top-6 right-6 z-50 rounded-lg bg-green-600 px-6 py-4 text-white shadow-lg">
          ✅ Message sent successfully
        </div>
      )}
      {submitError && (
        <div className="fixed top-6 right-6 z-50 rounded-lg bg-red-600 px-6 py-4 text-white shadow-lg">
          {submitError}
        </div>
      )}

      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        {/* LEFT */}
        <div className="px-6 pt-24 pb-20 lg:px-8 lg:py-48">
          <h2 className="text-4xl font-semibold sm:text-5xl">
            Let’s build something meaningful
          </h2>

          <p className="mt-6 text-lg text-white/70">
            I’m a frontend developer focused on clean UI, accessibility and
            smooth user experiences. If you have an idea or a project, let’s
            talk.
          </p>

          {/* TAGS */}
          <div className="mt-12 rounded-2xl bg-gradient-to-br from-primary/40 via-accent/20 to-support/30 p-6 ring-1 ring-white/10">
            <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
              {["Email me directly: andresgomes18@gmail.com"].map((item) => (
                <span
                  key={item}
                  className="animate-float rounded-lg bg-secondary px-4 py-2 text-xs sm:text-sm text-white"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* ICONS */}
          <div className="mt-10 flex gap-6">
            <a
              href="https://github.com/andle18"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white"
            >
              <FaGithub className="text-3xl" />
            </a>

            <a
              href="https://www.linkedin.com/in/andres-gomes-7426723a9/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white"
            >
              <SiLinkedin className="text-3xl" />
            </a>
          </div>
        </div>

        {/* FORM */}
        <div className="px-6 pt-16 pb-24 lg:px-8 lg:py-32">
          <form
            onSubmit={handleSubmit}
            className="mx-auto max-w-xl grid grid-cols-1 gap-6 sm:grid-cols-2"
          >
            {/* FIRST NAME */}
            <div>
              <label className="text-slate-200 font-semibold">First name</label>
              <input
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                className="mt-2 w-full rounded-md bg-secondary/70 px-3 py-2 text-white outline outline-1 outline-white/10 focus:outline-2 focus:outline-support"
              />
              {errors.firstName && (
                <p className="mt-1 text-sm text-red-400">{errors.firstName}</p>
              )}
            </div>

            {/* LAST NAME */}
            <div>
              <label className="text-slate-200 font-semibold">Last name</label>
              <input
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                className="mt-2 w-full rounded-md bg-secondary/70 px-3 py-2 text-white outline outline-1 outline-white/10 focus:outline-2 focus:outline-support"
              />
              {errors.lastName && (
                <p className="mt-1 text-sm text-red-400">{errors.lastName}</p>
              )}
            </div>

            {/* EMAIL */}
            <div className="sm:col-span-2">
              <label className="text-slate-200 font-semibold">Email</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="mt-2 w-full rounded-md bg-secondary/70 px-3 py-2 text-white outline outline-1 outline-white/10 focus:outline-2 focus:outline-support"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-400">{errors.email}</p>
              )}
            </div>

            {/* MESSAGE */}
            <div className="sm:col-span-2">
              <label className="text-slate-200 font-semibold">Message</label>
              <textarea
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                className="mt-2 w-full rounded-md bg-secondary/70 px-3 py-2 text-white outline outline-1 outline-white/10 focus:outline-2 focus:outline-support"
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-400">{errors.message}</p>
              )}
            </div>

            <div className="sm:col-span-2 flex justify-end">
              <button
                type="submit"
                onClick={handleSubmit}
                disabled={loading}
                className="rounded-md bg-accent px-6 py-2.5 font-semibold text-white hover:bg-accent/90 focus:outline-2 focus:outline-offset-2 focus:outline-accent disabled:opacity-50"
              >
                {loading ? "Sending..." : "Let’s work together"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
