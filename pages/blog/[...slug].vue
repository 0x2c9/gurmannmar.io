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
		prose-headings:text-black
		prose-h1:text-4xl
		prose-h2:text-3xl
		prose-h3:text-2xl
		prose-h4:text-xl
		prose-p:text-black
		prose-a:break-words
		prose-a:text-black
		prose-a:no-underline
		prose-blockquote:border-l-black
		prose-strong:text-black
		prose-li:text-black
		prose-li:marker:text-black
		prose-hr:border-black
	"
	>
		<header class="mb-4">
			<NuxtLink
				class="z-50 -ml-2 inline-block rounded-full p-2 text-black hover:bg-black/5"
				aria-label="Back to top"
				to="/"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="1.2em"
					width="1.2em"
					viewBox="0 0 24 24"
				><path fill="currentColor" d="m7.85 13l2.85 2.85q.3.3.288.7t-.288.7q-.3.3-.712.313t-.713-.288L4.7 12.7q-.3-.3-.3-.7t.3-.7l4.575-4.575q.3-.3.713-.287t.712.312q.275.3.288.7t-.288.7L7.85 11H19q.425 0 .713.288T20 12q0 .425-.288.713T19 13H7.85Z" /></svg>
			</NuxtLink>
		</header>
		<ContentDoc />

		<button
			class="fixed bottom-4 right-4 z-50 rounded-full p-2 text-black hover:bg-black/5 md:bottom-6 md:right-6"
			aria-label="Back to top"
			@click="scrollToTop"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="32"
				height="32"
				viewBox="0 0 24 24"
			><path fill="currentColor" d="m11 8.8l-2.9 2.9q-.275.275-.7.275t-.7-.275q-.275-.275-.275-.7t.275-.7l4.6-4.6q.3-.3.7-.3t.7.3l4.6 4.6q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275L13 8.8V17q0 .425-.288.713T12 18q-.425 0-.713-.288T11 17V8.8Z" /></svg>
		</button>
	</article>
</template>
