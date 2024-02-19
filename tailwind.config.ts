import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'
import typography from '@tailwindcss/typography'

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
			'd-black': '#100F0F',
			'd-white': '#FFFCF0',
			'd-green': '#24837B',
		},
		fontFamily: {
			inter: ['spectral', 'spectral fallback', ...fontFamily.serif],
		},
	},
	corePlugins: {
		textOpacity: false,
		backgroundOpacity: false,
		borderOpacity: false,
	},
	plugins: [
		typography,
	],
} satisfies Partial<Config>
