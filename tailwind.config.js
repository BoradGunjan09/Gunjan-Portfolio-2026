/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        card: "var(--card)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        text: "var(--text)",
        border: "var(--border)",
      },
    },
  },
  plugins: [],
}