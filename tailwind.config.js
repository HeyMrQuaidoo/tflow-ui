/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "1792px",
        "4xl": "2048px",
      },
      colors: {
        strokeSoft: "#E1E4EA",
        textMuted: "#525866",
      }
    },
  },
  plugins: [],
}
