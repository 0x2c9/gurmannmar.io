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
			green: '#4F54DD',
			sand: '#D8D8D8',
			orange: '#F6522E',
		},
		fontFamily: {
			spectral: ['spectral', 'spectral fallback', ...fontFamily.serif],
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
