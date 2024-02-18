import type { Config } from 'tailwindcss'

export default {
	content: [
		'./components/**/*.vue',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./app.vue',
		'./error.vue',
	],
	theme: {
		colors: {
			'green': '#143730',
			'sand': '#F8F4EE',
			'white': '#ffffff',
			'greenish-white': '#fdfffd',
		},
		fontFamily: {
			inter: ['spectral', 'sans-serif'],
		},

		animation: {
			'fade-up': 'fade-up 1s ease forwards',
			'rotate-in': 'rotate-in 1s ease forwards',
		},
		keyframes: {
			'fade-up': {
				from: { opacity: '0', transform: 'translateY(10px)' },
				to: { opacity: '1', transform: 'translateY(0)' },
			},
			'rotate-in': {
				from: { opacity: '0', transform: 'translateY(10px) rotate(4deg)' },
				to: { opacity: '1', transform: 'translateY(0) rotate(0deg)' },
			},
		},
	},
	corePlugins: {
		textOpacity: false,
		backgroundOpacity: false,
		borderOpacity: false,
	},
} satisfies Partial<Config>
