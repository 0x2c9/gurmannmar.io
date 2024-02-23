<script setup lang="ts">
type Project = {
	name: string
	description: string
	url: string
	stale?: boolean
}

const projects: Project[] = [
	{
		name: 'better',
		description: 'mobile pwa to track your weight loss and workout progress.',
		url: 'https://better-bl5.pages.dev/',
	},
	{
		name: 'nuxt-fable',
		description: 'A Nuxt 3 module if Storybook is too much.',
		url: 'https://github.com/0x2c9/nuxt-fable',
	},
	{
		name: 'portfolio',
		description: 'This very website you are looking at.',
		url: 'https://gurmannmar.io',
	},
]
</script>

<template>
	<article class="mx-auto flex w-full max-w-2xl ">
		<section class="-mx-12 mt-6 grid md:grid-cols-2">
			<NuxtLink
				v-for="(project, index) of projects"
				:key="project.name"
				:style="{ animationDelay: `${((index + 1) / 10)}s` }"
				:href="project.url"
				target="_blank"
				class="animate-fade-up inline-block p-12"
			>
				<h2 class="text-xl font-medium italic">
					{{ project.name }}
				</h2>

				<p class="mt-2 text-lg">{{ project.description }}</p>
			</NuxtLink>
		</section>
	</article>
</template>

<style scoped>
section:has(a:hover) a {
	@apply text-blue/50
}

section a:hover {
	@apply !text-blue
}
</style>
