/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "risk-low": "#22c55e",
        "risk-medium": "#eab308",
        "risk-high": "#ef4444",
        "risk-extreme": "#991b1b"
      },
    },
  },
  plugins: [],
}
