/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3D5E26", // verde oscuro /text-primary
        accent: "#CC4017", // naranja /text-accent
        secondary: "#540C29", // borgoña /bg-secondary
        support: "#688F2D", // verde claro /bg-support
      },
    },
  },
  plugins: [],
};
