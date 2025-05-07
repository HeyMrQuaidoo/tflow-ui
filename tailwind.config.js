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
        mainBg: "#F6F8FA",
        strokeSoft: "#E1E4EA",
        textMuted: "#525866",
        errorLight: "#FFC0C5",
        errorDark: "#681219",
        successLight: "#C2F5DA",
        successDark: "#0B4627",
      }
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /^text-(red|green|blue|indigo|primary|gray|yellow|purple|orange)-(100|200|300|400|500|600|700|800|900)$/,
    },
  ],
}