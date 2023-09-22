/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        'white': '#FFFFFF',
        'black': '#000000',
        'darker-yellow': '#FCB72B',
        'dark-navy': '#495567',
        'dim-grey': '#939CAA',
        'darker-grey': '#88939E',
        'light-grey': '#E5ECF4',
        'snow': '#F2F5F9',
        'light-yellow': '#FFF4DF',
        'dark-grey': '#333A44',
        'tailwind-dark': '#1E293B',
        'tailwind-dark-second': '#374151',
      }
    },
    container: {
      center: true,
      padding: '40px',
      screens: {
        'sm': '640px',
        'md': '768px',
        '2md': '820px',
        'lg': '1024px',
        'xl': '1206px',
      }
    },
    theme: {
      screens: {
        'sm': '640px',
        'md': '768px',
        '2md': '820px',
        'lg': '1024px',
        'xl': '1206px',
      }
    }
  },
  plugins: [],
}