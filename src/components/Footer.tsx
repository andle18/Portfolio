export default function Footer() {
  return (
    <footer className="bg-primary py-8">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <p className="text-sm text-white/70">
          © {new Date().getFullYear()} Andres Gomes. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
