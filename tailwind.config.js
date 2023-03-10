/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js}'],
	theme: {
		extend: {
			colors: {
				darkcyan: 'hsl(158, 36%, 37%)',
				cream: 'hsl(30, 38%, 92%)',
				verydarkblue: 'hsl(212, 21%, 14%)',
				darkgrayblue: 'hsl(228, 12%, 48%)',
			},
			backgroundImage: {
				mobile: "url('/src/public/images/image-product-mobile.jpg')",
				desktop: "url('/src/public/images/image-product-desktop.jpg')",
			},
			fontFamily: {
				montserrat: ['Montserrat'],
				fraunces: ['Fraunces'],
			},
		},
	},
	plugins: [],
};
