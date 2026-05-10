import { useState, useEffect } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";

const navigation = [
  { name: "About", href: "#about", external: false },
  { name: "Skills", href: "#skills", external: false },
  { name: "Projects", href: "/projects", external: true },
  { name: "Contact", href: "#contact", external: false },
];

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      setTimeout(() => scrollToSection(id), 100);
    }
  }, [location]);

  function handleAnchorClick(
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) {
    e.preventDefault();
    setMobileMenuOpen(false);
    const id = href.replace("#", "");
    // Pequeño delay para que el drawer cierre antes del scroll
    setTimeout(() => scrollToSection(id), 50);
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/[0.06] bg-ink/70 backdrop-blur-2xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-8">
        {/* Brand */}
        <Link
          to="/"
          className="font-serif text-base font-bold tracking-tight text-white"
        >
          Andres <span className="italic text-gold">Gomes</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-10 md:flex">
          {navigation.map((item) =>
            item.external ? (
              <Link
                key={item.name}
                to={item.href}
                className="font-mono text-xs uppercase tracking-[0.14em] text-white/50 transition-colors duration-300 hover:text-white"
              >
                {item.name}
              </Link>
            ) : (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleAnchorClick(e, item.href)}
                className="font-mono text-xs uppercase tracking-[0.14em] text-white/50 transition-colors duration-300 hover:text-white"
              >
                {item.name}
              </a>
            ),
          )}
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="text-white/70 transition-colors hover:text-white md:hidden"
          aria-label="Open menu"
        >
          <Bars3Icon className="h-5 w-5" />
        </button>
      </nav>

      {/* Mobile drawer */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="relative z-[100] md:hidden"
      >
        {/* Overlay */}
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          aria-hidden="true"
        />

        {/* Panel */}
        <DialogPanel className="fixed inset-y-0 right-0 w-72 border-l border-white/[0.07] bg-[#090909] px-8 py-8">
          {/* Header */}
          <div className="flex items-center justify-between">
            <span className="font-serif font-bold text-white">
              Andres <span className="italic text-gold">Gomes</span>
            </span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-white/50 hover:text-white"
              aria-label="Close menu"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          </div>

          {/* Nav links */}
          <div className="mt-12 flex flex-col gap-8">
            {navigation.map((item) =>
              item.external ? (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-mono text-sm uppercase tracking-[0.18em] text-white/50 transition-colors hover:text-gold"
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleAnchorClick(e, item.href)}
                  className="font-mono text-sm uppercase tracking-[0.18em] text-white/50 transition-colors hover:text-gold"
                >
                  {item.name}
                </a>
              ),
            )}
          </div>

          {/* Footer del drawer */}
          <div className="absolute bottom-8 left-8 right-8">
            <div className="h-px bg-white/[0.06]" />
            <p className="mt-6 font-mono text-[0.62rem] uppercase tracking-[0.15em] text-white/25">
              Available for work
            </p>
            <div className="mt-2 flex items-center gap-2">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-sage" />
              <span className="font-mono text-[0.60rem] text-sage/70">
                andresgomes18@gmail.com
              </span>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
