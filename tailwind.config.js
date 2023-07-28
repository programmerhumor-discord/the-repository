/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}"
	],
	daisyui: {
		themes: [
			{
				theme: {
					"primary": "rgb(0, 119, 255)",
					"secondary": "#d926a9",
					"accent": "#FF5700",
					"neutral": "#213e63",
					"base-100": "#0e1218",
					"info": "#3abff8",
					"success": "#36d399",
					"warning": "#fbbd23",
					"error": "#f87272"
				}
			}
		]
	},
	theme: {
		extend: {
			width: {
				68: "17rem",
				69: "17.25rem",
				70: "17.5rem"
			},
			fontFamily: {
				sans: "'Inter', 'Roboto', sans-serif"
			}
		}
	},
	plugins: [require("daisyui")]
};
