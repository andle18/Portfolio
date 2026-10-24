import emailjs from "@emailjs/browser";

export type ContactMessage = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

const config = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID?.trim() ?? "",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID?.trim() ?? "",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.trim() ?? "",
};

export const isEmailConfigured = Object.values(config).every(Boolean);

export function sendContactMessage(message: ContactMessage) {
  if (!isEmailConfigured) {
    throw new Error("EmailJS configuration is incomplete.");
  }

  return emailjs.send(
    config.serviceId,
    config.templateId,
    { ...message },
    {
      publicKey: config.publicKey,
      limitRate: { id: "portfolio-contact", throttle: 10000 },
    },
  );
}
