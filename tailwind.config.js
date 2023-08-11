/** @type {import('tailwindcss').Config} */
export default {
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
        'light grey': '#E5ECF4',
        'snow': '#F2F5F9',
        'light-yellow': '#FFF4DF',
        'dark-grey': '#333A44',
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
        '2xl': '1536px',
      }
    },
    theme: {
      screens: {
        'sm': '640px',
        'md': '768px',
        '2md': '820px',
        'lg': '1024px',
        'xl': '1206px',
        '2xl': '1536px',
      }
    }
  },
  plugins: [],
}