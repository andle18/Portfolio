import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-primary/90 backdrop-blur-md">
      <nav className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
        {/* Brand */}
        <Link to="/" className="text-lg font-bold text-white tracking-tight">
          Andres Gomes
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="relative text-sm font-medium text-white/80 hover:text-white transition"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-accent transition-all group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Mobile button */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="md:hidden text-white"
        >
          <Bars3Icon className="h-6 w-6" />
        </button>
      </nav>

      {/* Mobile menu */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="md:hidden"
      >
        <DialogPanel className="fixed inset-y-0 right-0 w-full bg-white px-6 py-8">
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-primary">Andres Gomes</span>
            <button onClick={() => setMobileMenuOpen(false)}>
              <XMarkIcon className="h-6 w-6 text-primary" />
            </button>
          </div>

          <div className="mt-10 space-y-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-lg font-semibold text-gray-700 hover:text-accent transition"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
