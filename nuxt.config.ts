export default defineNuxtConfig({
	app: {
		head: {
			htmlAttrs: {
				lang: 'en',
			},
			bodyAttrs: {
				class: 'animate',
			},
			charset: 'utf-8',
			viewport: 'width=device-width, initial-scale=1',
			title: 'mario gurmann - frontend developer',
			meta: [
				{
					name: 'description',
					content: 'mario gurmann - frontend developer',
				},
			],
			link: [
				{
					rel: 'icon',
					type: 'image/svg+xml',
					href: './favicon.svg',
				},
			],
		},

		pageTransition: {
			name: 'page',
			mode: 'out-in',
		},
	},
	content: {
		highlight: {
			theme: 'dark-plus',
		},
	},
	css: [
		'@/assets/styles.css',
	],
	devtools: { enabled: true },
	fontMetrics: {
		fonts: [
			{
				fallbackName: 'spectral fallback',
				family: 'spectral',
				fallbacks: ['Times New Roman', 'serif'],
			},
		],
	},
	modules: ['@nuxtjs/fontaine', '@nuxt/content'],
	postcss: {
		plugins: {
			tailwindcss: {},
		},
	},
	typescript: {
		shim: false, // https://vuejs.org/guide/typescript/overview.html#volar-takeover-mode
	},
	experimental: {
		payloadExtraction: true,
	},
})
