<script setup lang="ts">

</script>

<template>
	<section>
		<h2 class="animate-fade-up text-2xl" :style="{ animationDelay: `1.8s` }">Blog</h2>
		<div class="mt-6 flex flex-col space-y-8">
			<ContentList v-slot="{ list }" path="/blog">
				<NuxtLink
					v-for="(article, index) in list"
					:key="article._path"
					:to="article._path"
					:style="{ animationDelay: `${1.5 + ((index + 4) / 10)}s` }"
					class="animate-fade-up transition-colors"
				>
					<h2 class="relative inline-flex text-xl italic before:absolute before:bottom-0 before:h-[2px] before:w-full before:origin-left before:scale-x-0 before:transform before:rounded-full before:bg-green before:transition-transform">
						{{ article.title }}
					</h2>
					<p class="mt-2 text-lg">{{ article.description }}</p>
				</NuxtLink>
			</ContentList>
		</div>
	</section>
</template>

<style>
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
