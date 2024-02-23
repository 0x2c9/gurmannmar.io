<script setup>
if (import.meta.client) {
	console.log('%c╭∩╮(°ʖ͡°)╭∩╮', 'font-size: 48px;')
}
</script>

<template>
	<div class="tf-u-looking-at size-full">
		<PageHeader />

		<main class="flex min-h-full flex-col px-6 py-28 md:px-0">
			<NuxtPage />
		</main>

		<div class="pointer-events-none fixed inset-x-0 bottom-0 hidden h-20 bg-gradient-to-t from-sand md:block"></div>
	</div>
</template>
