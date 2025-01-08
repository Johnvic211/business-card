/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#23252C",
        secondary: "#1A1B21",
        tertiary: "#161619",
      },
    },
  },
  plugins: [],
}
