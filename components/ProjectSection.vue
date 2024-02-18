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
		description: 'Track your weight loss and fitness journey with ease.',
		url: 'https://better-bl5.pages.dev/',
	},
	{
		name: 'echo',
		description: 'minimalistic note taking app build upon TipTap.',
		url: 'https://github.com/0x2c9/echo',
		stale: true,
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
	<section id="projects" class="">
		<h2 class="animate-fade-up text-2xl opacity-0" :style="{ animationDelay: `1.4s` }">Projects</h2>
		<div class="mt-6 flex gap-12">
			<NuxtLink
				v-for="(project, index) of projects"
				:key="project.name"
				:style="{ animationDelay: `${1 + ((index + 8) / 10)}s` }"
				:href="project.url"
				target="_blank"
				class="inline-block animate-fade-up opacity-0"
			>
				<h2 class="text-xl italic">
					{{ project.name }}
				</h2>

				<p class="mt-2 text-sm italic">{{ project.description }}</p>
			</NuxtLink>
		</div>
	</section>
</template>

<style scoped>
section:has(a:hover) a {
	@apply text-green/50 transition-colors
}

section a:hover {
	@apply !text-green
}
</style>
