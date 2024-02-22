<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'

const query: QueryBuilderParams = { path: '/blog', sort: [{ date: -1 }] }
</script>

<template>
	<article class="pt-12">
		<section class="mx-auto flex max-w-[80ch] flex-col space-y-8 pt-12">
			<ContentList
				v-slot="{ list }"
				path="/blog"
				:query="query"
			>
				<NuxtLink
					v-for="(article, index) in list"
					:key="article._path"
					:to="article._path"
					:style="{ animationDelay: `${((index) / 10)}s` }"
					class="animate-fade-up transition-colors"
				>
					<div class="flex items-end justify-between gap-x-4">
						<h2 class="relative inline-flex text-2xl font-medium italic">
							{{ article.title }}
						</h2>
						<span class="text-sm"> {{ article.readingTime.text }}</span>
					</div>
					<span class="text-sm"> {{ article.dateDisplay }}</span>
				</NuxtLink>
			</ContentList>
		</section>
	</article>
</template>
