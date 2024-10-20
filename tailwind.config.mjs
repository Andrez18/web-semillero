/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#371B70',
				seconder:'#2D2187',
				accent: '',
				dark: '#131120'
			}
		},
	},
	plugins: [],
}
