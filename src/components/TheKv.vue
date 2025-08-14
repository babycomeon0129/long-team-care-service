<template>
	<section class="kv">
		<div
			v-if="!isMobile"
			class="kv__title"
			data-aos="fade-up"
			data-aos-delay="50"
		>
			<img src="@img/title.png" class="rwdimg" />
			<img
				src="@img/title-point.png"
				class="kv__title-point"
				data-aos="fade-right"
				data-aos-delay="150"
			/>
		</div>
		<div
			v-else
			class="kv__title"
			data-aos="fade-up"
		>
			<img src="@img/title-mobile.png" class="rwdimg" />
			<img
				src="@img/title-point-mobile.png"
				class="kv__title-point"
				data-aos="fade-right"
			/>
		</div>
		<img src="@img/icon--scroll.png" class="kv__scroll for-pc" />
	</section>
</template>

<script setup lang="ts">
import { useMediaQuery } from '@vueuse/core'

const isMobile = useMediaQuery('(max-width: 767px)')
</script>

<style lang="scss" scoped>
.kv {
	position: relative;
	width: 100%;
	height: 100vh;
	background-image: url(@img/KV.png);
	background-position: bottom;
	background-size: cover;
	background-repeat: no-repeat;

	@media (max-width: 767px) {
		background-image: url(@img/KV-mobile.png);
	}
}

.kv__title {
	position: absolute;
	top: 235px;
	right: 6%;
	width: 594px;

	@media (max-width: 1280px) {
		right: 2%;
		width: 50%;
	}

	@media (max-width: 767px) {
		top: auto;
		bottom: 64px;
		right: 24px;
		width: calc(100% - 48px);
	}
}

.kv__title-point {
	position: absolute;
	top: 97px;
	left: 30px;

	@media (max-width: 1280px) {
		top: 42%;
        left: 5%;
		width: 50%;
	}

	@media (max-width: 767px) {
		top: 51%;
        left: 6%;
		width: 72%;
	}
}

.kv__scroll {
	position: absolute;
	bottom: 80px;
	left: 15.2%;
	animation: pokeDown 2s infinite;
	cursor: pointer;

	&:hover {
		animation: none;
	}
}

@keyframes pokeDown {
    0%   { transform: translateY(0); }
    20%  { transform: translateY(16px); }
    30%  { transform: translateY(0); }
    50%  { transform: translateY(10px); }
    60%  { transform: translateY(0); }
    100% { transform: translateY(0); }
}
</style>