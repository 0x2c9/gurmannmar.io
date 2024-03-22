<script setup>
if (import.meta.client) {
	console.log('%c╭∩╮(°ʖ͡°)╭∩╮', 'font-size: 48px;')
}
</script>

<template>
	<div class="tf-u-looking-at size-full">
		<main class="flex min-h-full flex-col px-6 py-12 xl:px-0 xl:py-28">
			<NuxtPage />
		</main>

		<div class="pointer-events-none fixed inset-x-0 bottom-0 hidden h-20 bg-gradient-to-t from-white md:block"></div>
	</div>
</template>
