/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e8f5ed',
          100: '#c3e5d1',
          200: '#9dd4b4',
          300: '#77c397',
          400: '#51b27a',
          500: '#2ba15d',
          600: '#22804a',
          700: '#1a6038',
          800: '#114027', // Main primary color
          900: '#0a2016',
          DEFAULT: '#104927', // Main primary color
        },
        accent: {
          DEFAULT: '#00bf62', // Logo green for headers and accents
          light: '#57d29d', // Lighter variant if needed
        },
      },
    },
  },
  plugins: [],
}
