/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/projects/*.html", "./src/custom.css"],
  darkMode: "media",
  theme: {
    extend: {
      keyframes: {
        typing: {
          '0%': { width: '0' },
          '100%': { width: '285px' },
        },
        blink: {
          '50%': { borderColor: 'transparent' },
        },
      },
      animation: {
        typing: 'typing 4s steps(22) infinite',
        blink: 'blink .5s step-end infinite alternate',
      },
    },
  },
  plugins: [],
}