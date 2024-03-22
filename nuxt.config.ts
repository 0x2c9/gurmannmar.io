export default defineNuxtConfig({
	app: {
		head: {
			htmlAttrs: {
				lang: 'en',
			},
			bodyAttrs: {
				class: 'animate font-spectral overflow-x-hidden bg-white text-black antialiased',
			},
			charset: 'utf-8',
			viewport: 'width=device-width, initial-scale=1',
			title: 'mario gurmann - frontend developer',
			meta: [
				{
					name: 'description',
					content: 'mario gurmann',
				},
			],
			link: [
				{
					rel: 'icon',
					type: 'image/svg+xml',
					href: '/favicon.svg',
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
			theme: 'nord',
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
	modules: ['@nuxtjs/fontaine', '@nuxt/content', '@nuxtjs/sitemap'],
	postcss: {
		plugins: {
			tailwindcss: {},
		},
	},
	site: {
		url: 'https://gurmannmar.io',
	},
	sitemap: {
		sources: [
			'/api/sitemap/urls',
		],
	},
	runtimeConfig: {
		public: {
			url: 'https://gurmannmar.io/',
		},
	},
	typescript: {
		strict: true,
	},
})
