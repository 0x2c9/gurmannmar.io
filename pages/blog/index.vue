<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'

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
	<article>
		<section class="mx-auto flex w-full max-w-2xl flex-col">
			<ContentList
				v-slot="{ list }"
				path="/blog"
				:query="query"
			>
				<NuxtLink
					v-for="(article, index) in list"
					:key="article._path"
					:to="article._path"
					:style="{ animationDelay: `${((index + 1) / 10)}s` }"
					class="animate-fade-up py-6 transition-colors"
				>
					<div class="flex flex-col justify-between gap-x-4 md:flex-row md:items-end">
						<h2 class="relative inline-flex text-2xl font-medium italic">
							{{ article.title }}
						</h2>
						<span class="text-sm"> {{ article.readingTime.text }}</span>
					</div>
					<span class="text-sm"> {{ formatDate(article.date) }}</span>
				</NuxtLink>
			</ContentList>
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
