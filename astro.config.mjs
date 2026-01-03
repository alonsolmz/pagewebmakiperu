/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'azul-principal': '#0B132B',
        'amarillo-acento': '#F2B705',
      }
    },
  },
  plugins: [],
}