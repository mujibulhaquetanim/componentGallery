/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/projects/*.html", "./src/custom.css"],
  darkMode: "media",
  theme: {
    extend: {
      keyframes: {
        typing: {
          '0%': { width: '0' },
          '100%': { width: '1000px' },
        },
        blink: {
          '50%': { borderColor: 'transparent' },
        },
      },
      animation: {
        typing: 'typing 10s steps(74) infinite',
        blink: 'blink 0.5s step-end infinite alternate',
      },
    },
  },
  plugins: [],
}