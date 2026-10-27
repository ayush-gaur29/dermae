/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: '#FCFAF5',
          50: '#FFFFFF',
          100: '#FCFAF5',
          200: '#F7F3EB',
          300: '#EFE7DA',
        },
        emerald: {
          DEFAULT: '#185844',
          600: '#1E6B53',
          700: '#185844',
          800: '#13463A',
        },
        gold: {
          DEFAULT: '#B08A4F',
          light: '#C9A874',
        },
        sage: {
          DEFAULT: '#78947E',
          light: '#A9BBA9',
          pale: '#DCE3D6',
        },
        forest: {
          DEFAULT: '#102F27',
        },
        ink: {
          DEFAULT: '#6F6B60',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '1.75rem',
        panel: '2.25rem',
      },
      maxWidth: {
        shell: '84rem',
      },
      transitionTimingFunction: {
        lux: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
