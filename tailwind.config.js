/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Nunito"', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#fff9eb',
          100: '#F2D0A7',
          200: '#F2B66D',
          300: '#F2B66D',
          500: '#F2B705',
          600: '#BF622C',
          900: '#9e4e20',
        },
        surface: '#FFFFFF',
        background: '#FCFAFC',
      },
      boxShadow: {
        'apple': '0px 5px 15px rgba(191, 98, 44, 0.08)',
        'apple-lg': '0px 5px 15px rgba(191, 98, 44, 0.08)',
        'apple-hover': '0 20px 60px rgba(191, 98, 44, 0.12)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scroll-y-15': 'scrollY 15s linear infinite',
        'scroll-y-17': 'scrollY 17s linear infinite',
        'scroll-y-19': 'scrollY 19s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        scrollY: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
