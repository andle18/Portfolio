import { useState, useEffect } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const navigation = [
  { name: "About", href: "/#about", external: false },
  { name: "Skills", href: "/#skills", external: false },
  { name: "Projects", href: "/projects", external: true },
  { name: "Contact", href: "/#contact", external: false },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/[0.06] bg-ink/70 backdrop-blur-2xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
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
                className="font-mono text-xs uppercase tracking-[0.14em] text-white/50 transition-colors duration-300 hover:text-white"
              >
                {item.name}
              </a>
            ),
          )}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="text-white/70 transition-colors hover:text-white md:hidden"
        >
          <Bars3Icon className="h-5 w-5" />
        </button>
      </nav>

      {/* Mobile drawer */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="md:hidden"
      >
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
        <DialogPanel className="fixed inset-y-0 right-0 w-72 border-l border-white/[0.07] bg-ink px-8 py-8">
          <div className="flex items-center justify-between">
            <span className="font-serif font-bold text-white">
              Andres <span className="italic text-gold">Gomes</span>
            </span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-white/50 hover:text-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          </div>

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
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-mono text-sm uppercase tracking-[0.18em] text-white/50 transition-colors hover:text-gold"
                >
                  {item.name}
                </a>
              ),
            )}
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
