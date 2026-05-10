/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // ── Tu paleta original (sin tocar) ──────────────────────
        primary: "#3D5E26", // verde oscuro
        accent: "#CC4017", // naranja
        secondary: "#540C29", // borgoña
        support: "#688F2D", // verde claro

        // ── Extensiones para el nuevo diseño ────────────────────
        ink: "#090909", // fondo base (casi negro, neutro)
        gold: "#C8A96E", // dorado cálido — acentos tipográficos
        sage: "#7EB8A4", // verde-agua — acentos secundarios / badges
      },
      fontFamily: {
        serif: ['"Playfair Display"', "Georgia", "serif"],
        mono: ['"DM Mono"', "monospace"],
      },
      // Animación float que ya tienes en index.css — la dejamos ahí
    },
  },
  plugins: [],
};
