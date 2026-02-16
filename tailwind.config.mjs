/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'lol-dark': '#010A13',
				'lol-indigo': '#1E2328',
				'lol-gold': '#C8AA6E',
				'lol-blue': '#0AC8B9',
				'lol-purple': '#785A28',
			},
			fontFamily: {
				'riot': ['Cinzel', 'serif'],
				'body': ['Inter', 'sans-serif'],
			},
		},
	},
	plugins: [],
}