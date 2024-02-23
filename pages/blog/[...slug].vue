<script setup lang="ts">
function scrollToTop() {
	window.scrollTo({ top: 0, behavior: 'smooth' })
}

definePageMeta({
	pageTransition: {
		name: 'slow-fade',
		mode: 'out-in',
	},
})
</script>

<template>
	<article
		class="
		prose
		prose-xl
		prose-slate
		mx-auto
		w-full
		max-w-2xl
		prose-headings:scroll-mt-24
		prose-headings:text-darker-blue
		prose-h1:text-4xl
		prose-h2:text-3xl
		prose-h3:text-2xl
		prose-h4:text-xl
		prose-p:text-dark-blue
		prose-a:break-words
		prose-a:text-darker-blue
		prose-blockquote:border-l-blue
		prose-strong:text-dark-blue
		prose-li:text-dark-blue
		prose-li:marker:text-dark-blue
		prose-hr:border-darker-blue
	"
	>
		<ContentDoc />

		<button
			class="fixed bottom-4 right-4 z-50 rounded-full p-2 text-blue hover:bg-blue/20 md:bottom-6 md:right-6"
			aria-label="Back to top"
			@click="scrollToTop"
		>
			<svg
				viewBox="0 0 24 24"
				display="inline-block"
				height="1.2em"
				width="1.2em"
				vertical-align="text-bottom"
				xmlns="http://www.w3.org/2000/svg"
			><path fill="currentColor" d="M13 7.828V20h-2V7.828l-5.364 5.364l-1.414-1.414L12 4l7.778 7.778l-1.414 1.414z" /></svg>
		</button>
	</article>
</template>
