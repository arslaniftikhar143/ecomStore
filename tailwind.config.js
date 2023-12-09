/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "shadow-white": "0 0 20px rgba(255, 255, 255, 0.25)",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/vector-2.png')",
        "footer-texture": "url('/src/assets/vector-2.png')",
      },

      screens: {
        menu: "950px",
        smp: "700px",
      },
    },
  },
  plugins: [],
};
