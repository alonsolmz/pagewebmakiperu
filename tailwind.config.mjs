/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'maqui-dark': '#0B132B',
        'maqui-gold': '#F2B705',
      },
    },
  },
  plugins: [],
}