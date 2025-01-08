/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#23252C",   // Custom primary color (blue)
        secondary: "#1A1B21",  // Custom secondary color (purple)
        linkedIn: "#0077B5",
        footer: "#161619",
      },
    },
  },
  plugins: [],
}
