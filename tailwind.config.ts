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
		'./nuxt.config.ts',
	],
	theme: {
		colors: {
			'blue': '#494dcb',
			'dark-blue': '#191b58',
			'darker-blue': '#00023b',
			'orange': '#F6522E',
			'black': '#1C1818',
			'white': '#D8D8D8'
		},
		fontFamily: {
			spectral: ['spectral', 'spectral fallback', ...fontFamily.serif],
			nkv: ['nkv', 'nkv fallback', ...fontFamily.sans],
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
