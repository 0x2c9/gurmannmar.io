<script setup lang="ts">

</script>

<template>
	<header class="fixed inset-x-0 mx-auto w-full max-w-2xl bg-sand pl-4 pr-6 pt-6 md:px-0">
		<nav
			class=" flex items-center justify-between text-xl font-medium italic	text-blue"
			style="animation-delay: 0.4s;"
		>
			<NuxtLink to="/" aria-label="Back to homepage">
				<div class="logo animate-fade-in relative flex size-10 items-center justify-center">
					<div class="ball to-transparent size-5 rounded-full bg-gradient-to-b from-blue via-blue"></div>
					<div class="absolute inset-x-0 bottom-0 h-5 bg-sand/0 backdrop-blur-sm"></div>
				</div>
			</NuxtLink>

			<div class="flex gap-x-12">
				<NuxtLink to="/">/ home</NuxtLink>
				<NuxtLink to="/blog">/ blog</NuxtLink>
			</div>
		</nav>
	</header>
	<div class="pointer-events-none fixed inset-x-0 top-16 h-12 bg-gradient-to-b from-sand"></div>
</template>
