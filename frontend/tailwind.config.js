/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}', // Asegúrate de incluir los archivos de tu proyecto
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['"Segoe UI"', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
