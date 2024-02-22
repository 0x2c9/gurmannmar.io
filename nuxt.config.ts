export default defineNuxtConfig({
	app: {
		head: {
			htmlAttrs: {
				lang: 'en',
			},
			bodyAttrs: {
				class: 'animate font-spectral overflow-x-hidden bg-sand text-green antialiased',
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
		markdown: {
			remarkPlugins: ['remark-reading-time'],
		},
		highlight: {
			theme: 'dark-plus',
		},
	},
	css: [
		'@/assets/styles.css',
	],
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
	runtimeConfig: {
		public: {
			url: 'https://gurmannmar.io/',
		},
	},
	typescript: {
		shim: false, // https://vuejs.org/guide/typescript/overview.html#volar-takeover-mode
	},
	experimental: {
		payloadExtraction: true,
	},
	nitro: {
		prerender: {
			routes: ['/sitemap.xml', '/rss.xml'],
		},
	},
})
