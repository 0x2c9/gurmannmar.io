<script setup lang="ts">
const MARIO = 'mario'.split('')
const GURMANN = 'gurmann'.split('')
</script>

<template>
	<section id="intro" class="italic">
		<h1 class="mb-8 text-6xl">
			<span
				v-for="(letter, index) in MARIO"
				:key="`${letter}-${index}`"
				:style="{ animationDelay: `${(index + 2) / 10}s` }"
				class="inline-block animate-rotate-in opacity-0"
			>
				{{ letter }}
			</span>
			<br>
			<span
				v-for="(letter, index) in GURMANN"
				:key="`${letter}-${index}`"
				:style="{ animationDelay: `${(index + 4) / 10}s` }"
				class="inline-block animate-rotate-in opacity-0"
			>
				{{ letter }}
			</span>
		</h1>
		<div class="space-y-2">
			<p class="translate-y-3 animate-fade-up text-xl opacity-0" :style="{ animationDelay: '1.1s' }">
				pushing pixels on the frontend at <BrandedAlturosLink />
			</p>
			<p class="translate-y-3 animate-fade-up text-xl opacity-0" :style="{ animationDelay: '1.2s' }">
				passionate about creating fast and beautiful web experiences with <BrandedNuxtLink />
			</p>
			<p class="translate-y-3 animate-fade-up text-xl opacity-0" :style="{ animationDelay: '1.3s' }">
				learning and mastering <BrandedGoLink /> as my prefered backend language
			</p>
		</div>
	</section>
</template>

<style>
#intro:has(a:hover) p {
	@apply text-green/50 transition-colors
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
