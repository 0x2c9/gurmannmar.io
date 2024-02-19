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
	<section id="projects">
		<h2 class="animate-fade-up text-2xl" :style="{ animationDelay: `1.4s` }">Projects</h2>
		<div class="mt-6 grid grid-cols-3 gap-x-12 gap-y-8">
			<NuxtLink
				v-for="(project, index) of projects"
				:key="project.name"
				:style="{ animationDelay: `${1 + ((index + 5) / 10)}s` }"
				:href="project.url"
				target="_blank"
				class="animate-fade-up inline-block transition-colors"
			>
				<h2 class="relative inline-flex text-xl  before:absolute before:bottom-0 before:h-[2px] before:w-full before:origin-left before:scale-x-0 before:transform before:rounded-full before:bg-green before:transition-transform">
					{{ project.name }}
				</h2>

				<p class="mt-2 text-lg italic">{{ project.description }}</p>
			</NuxtLink>
		</div>
	</section>
</template>

<style scoped>
section:has(a:hover) a {
	@apply text-green/50
}

section a:hover {
	@apply !text-green
}

section a:hover h2 {
	@apply before:scale-x-100
}
</style>
