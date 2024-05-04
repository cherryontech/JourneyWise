/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {

      letterSpacing: {
        '-1.68': '-1.68px',
        '2': '2px'
      },
    },
  },
  plugins: [],
}
