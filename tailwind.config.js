/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['Michroma', 'sans-serif'],
        sans: ['Outfit', 'sans-serif'], // Define Outfit como a fonte principal/padrão
      },
    },
  },
  plugins: [],
}