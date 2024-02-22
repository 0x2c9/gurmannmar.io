<script setup>
if (import.meta.client) {
	setTimeout(() => {
		// document.body.classList.remove('animate')
	}, 4000)
}
</script>

<template>
	<div class="tf-u-looking-at size-full">
		<!-- ╭∩╮(°ʖ͡°)╭∩╮ -->
		<div class="noise"></div>
		<div class="absolute left-1/2 top-6 -translate-x-1/2">
			<div class="logo relative flex size-[56px] items-center justify-center">
				<div class="ball to-transparent size-[17px] rounded-full bg-gradient-to-b from-green via-green"></div>
				<div class="absolute inset-x-0 bottom-0 h-[28px] bg-sand/[0.1] backdrop-blur-sm"></div>
			</div>
		</div>

		<div class="relative size-full">
			<main class="flex h-full flex-col overflow-y-auto px-6 pb-20 pt-12 md:px-0">
				<NuxtPage />
			</main>

			<nav class="absolute bottom-8 left-1/2 z-50 flex -translate-x-1/2 space-x-12 text-xl font-medium italic text-orange">
				<NuxtLink to="/">/ home</NuxtLink>
				<!-- <NuxtLink to="#">/ projects</NuxtLink> -->
				<NuxtLink to="/blog">/ blog</NuxtLink>
			</nav>
			<div class="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-sand"></div>
		</div>
	</div>
</template>

<style>
.noise {
  position: fixed;
  top: -50%;
  left: -50%;
  right: -50%;
  bottom: -50%;
  width: 200%;
  height: 200vh;
  background: transparent url('@/assets/noise-transparent.png') repeat 0 0;
  background-repeat: repeat;
  animation: bg-animation .2s infinite;
  opacity: .9;
  visibility: visible;
}

@keyframes bg-animation {
    0% { transform: translate(0,0) }
    10% { transform: translate(-5%,-5%) }
    20% { transform: translate(-10%,5%) }
    30% { transform: translate(5%,-10%) }
    40% { transform: translate(-5%,15%) }
    50% { transform: translate(-10%,5%) }
    60% { transform: translate(15%,0) }
    70% { transform: translate(0,10%) }
    80% { transform: translate(-15%,0) }
    90% { transform: translate(10%,5%) }
    100% { transform: translate(5%,0) }
}
</style>
