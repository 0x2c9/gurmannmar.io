<script setup lang="ts">
function scrollToTop() {
	window.scrollTo({ top: 0, behavior: 'smooth' })
}
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
		prose-h1:text-4xl
		prose-h2:text-3xl
		prose-h3:text-2xl
		prose-h4:text-xl
	"
	>
		<ContentDoc />

		<button class="fixed bottom-6 right-6 z-50 rounded-full p-2 text-green hover:bg-green/20" @click="scrollToTop">
			<svg
				viewBox="0 0 24 24"
				display="inline-block"
				height="1.2em"
				width="1.2em"
				vertical-align="text-bottom"
				xmlns="http://www.w3.org/2000/svg"
			><path fill="currentColor" d="M13 7.828V20h-2V7.828l-5.364 5.364l-1.414-1.414L12 4l7.778 7.778l-1.414 1.414z" /></svg>
		</button>

		<footer>
		</footer>
	</article>
</template>
