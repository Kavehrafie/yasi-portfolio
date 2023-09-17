/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        p: ['Supreme', ...defaultTheme.fontFamily.sans],
        h: ['Bespoke Stencil', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [require('@tailwindcss/container-queries'), require('@tailwindcss/typography')],
}
