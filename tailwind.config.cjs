/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'tangerine': ['Tangerine', 'cursive'],
				'oswald': ['Oswald', 'bold'],
			}
		},
	},
	plugins: [],
}
