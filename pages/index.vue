<template>
	<article class="m-auto inline-flex">
		<section id="intro" class="space-y-4 text-center text-[28px] font-medium italic md:space-y-2">
			<p class="animate-fade-up transition-colors">
				Pushing pixels on the frontend at Alturos
			</p>
			<p class="animate-fade-up transition-colors" style="animation-delay: 0.2s">
				Creating polished web interfaces with Nuxt
			</p>
			<p class="animate-fade-up transition-colors" style="animation-delay: 0.4s">
				Learning and exploring Rust on the backend
			</p>
		</section>
	</article>
</template>

<style>
#intro:has(a:hover) p {
	@apply text-green/50
}

#intro:has(a:hover) a > svg {
	@apply opacity-50 transition-opacity
}

#intro a:hover {
	@apply text-green before:scale-x-100
}

#intro a {
	@apply relative inline-flex before:absolute before:bottom-0 before:h-[2px] before:w-full before:rounded-full before:bg-green before:transform before:origin-left before:scale-x-0 before:transition-transform
}

#intro a:hover > svg {
	opacity: 1 !important;
}
</style>
