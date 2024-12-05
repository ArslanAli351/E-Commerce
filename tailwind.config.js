/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        dark:"var(--dark)",
      },
      screens: {
        qs: { max: "530px" },

        xs: "320px",
        mm: "375px",
      },
    

    },
  },
  plugins: [],
};
