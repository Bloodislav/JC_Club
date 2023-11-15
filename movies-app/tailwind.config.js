/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    screens: {
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1440px',
      // медия запро необходимый для адаптивной верстки сайта
      // @media (max-width: theme('screens.desktop)) {}
    },
  },
  plugins: [],
}

