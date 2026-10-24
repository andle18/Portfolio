import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { contactDetails } from "../data/contact";

export default function DownloadCV() {
  return (
    <a
      href={contactDetails.cvUrl}
      download={contactDetails.cvFilename}
      className="inline-flex items-center justify-center gap-2 rounded-sm border border-gold/50 px-6 py-3 font-mono text-[0.75rem] uppercase tracking-[0.1em] text-gold transition-colors duration-300 hover:border-gold hover:bg-gold/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
    >
      <ArrowDownTrayIcon className="h-4 w-4 shrink-0" aria-hidden="true" />
      Download CV (PDF)
    </a>
  );
}
