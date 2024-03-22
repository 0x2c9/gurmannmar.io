<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'

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
		name: 'echo',
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

const query: QueryBuilderParams = { path: '/blog', sort: [{ date: -1 }] }

function formatDate(date: string) {
	const options: Intl.DateTimeFormatOptions = {
		year: 'numeric',
		month: 'short',
		day: 'numeric',
	}

	return new Date(date).toLocaleDateString('en', options)
}
</script>

<template>
	<article class="auto-rows-min grid-cols-7 font-nkv xl:grid">
		<h1 class="col-span-full col-start-2 mb-4 font-black uppercase xl:mb-8 xl:text-8xl">
			mario gurmann
		</h1>
		<section id="intro" class="col-span-5 col-start-3 row-start-2 mb-12 w-full space-y-2 font-bold xl:mb-32 xl:space-y-1 xl:text-2xl">
			<p class="inline xl:block">
				Frontend developer with a passion for all things web-related,
			</p>
			<p class="inline xl:block">
				from crafting beautiful Nuxt applications to delving into the
			</p>
			<p class="inline xl:block">
				world of lower-level languages like Rust. Excited to explore the
			</p>
			<p class="inline xl:block">
				intersection of creativity and performance in web development.
			</p>
		</section>
		<h2 class="col-span-1 col-start-2 row-start-3 mb-4 text-sm font-black uppercase tracking-[0.3em] opacity-50 xl:mb-0 xl:text-base">projects</h2>
		<section class="col-span-3 col-start-3 row-start-3 mb-12 grid gap-y-8 xl:mb-32 xl:grid-cols-3 xl:gap-y-16">
			<NuxtLink
				v-for="project of projects"
				:key="project.name"
				:href="project.url"
				target="_blank"
				class=""
			>
				<h2 class="font-bold xl:text-2xl">
					{{ project.name }}
				</h2>

				<p class="mt-2 font-semibold xl:max-w-64 xl:text-lg">{{ project.description }}</p>
			</NuxtLink>
		</section>
		<h2 class="col-span-1 col-start-2 row-start-4 mb-4 font-black uppercase tracking-[0.3em] opacity-50 xl:mb-0">blog posts</h2>
		<section class="col-span-3 col-start-3 row-start-4 flex flex-col xl:mb-32">
			<ContentList
				v-slot="{ list }"
				path="/blog"
				:query="query"
			>
				<NuxtLink
					v-for="(article, index) in list"
					:key="article._path"
					:to="article._path"

					class="py-4 transition-colors xl:py-6"
					:class="{ 'pt-0': index === 0 }"
				>
					<div class="flex flex-col justify-between gap-x-4 xl:flex-row xl:items-end">
						<h2 class="relative inline-flex font-bold xl:text-2xl">
							{{ article.title }}
						</h2>
						<span class="text-sm font-medium xl:text-base"> {{ article.readingTime.text }}</span>
					</div>
					<span class="text-sm font-medium xl:text-base"> {{ formatDate(article.date) }}</span>
				</NuxtLink>
			</ContentList>
		</section>
	</article>
</template>

<style scoped>
section a {
	@apply transition-opacity
}

section:has(a:hover) a {
	@apply opacity-50
}

a:hover {
	@apply !opacity-100
}
</style>
