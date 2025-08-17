<template>
	<section class="kv" :style="{'--vh': `${vh}px`}">
		<div
			v-if="!isMobile"
			class="kv__title"
			data-aos="fade-up"
			data-aos-delay="50"
		>
			<img src="@img/title.png" class="rwdimg" alt="四個照顧現場故事，看見你的問題解方" />
			<img
				src="@img/title-point.png"
				class="kv__title-point"
				alt="讓專業的來"
				data-aos="fade-right"
				data-aos-delay="150"
			/>
		</div>
		<div
			v-else
			class="kv__title"
			data-aos="fade-up"
			data-aos-offset="0"
		>
			<img
				src="@img/title-mobile.png"
				class="rwdimg"
				alt="四個照顧現場故事，看見你的問題解方"
			/>
			<img
				src="@img/title-point-mobile.png"
				class="kv__title-point"
				alt="讓專業的來"
				data-aos="fade-right"
				data-aos-offset="0"
			/>
		</div>
		<img
			src="@img/icon--scroll.png"
			alt="scroll"
			@click="scrollToBlock('preface')"
			class="kv__scroll for-pc"
		/>
	</section>
</template>

<script setup lang="ts">
import { inject, onMounted, ref } from 'vue';
import { scrollToBlock } from '@utils/common';

const isMobile = inject('isMobile', false);
const vh = ref(0);

const setVh = () => {
	vh.value = (window.visualViewport?.height ?? window.innerHeight) * 0.01;
}

onMounted(() => {
	setVh();
});
</script>

<style lang="scss" scoped>
.kv {
	position: relative;
	width: 100%;
	height: calc(var(--vh, 1vh) * 100);
	background-image: url(@img/KV.png);
	background-position: bottom;
	background-size: cover;
	background-repeat: no-repeat;

	@include mobile {
		background-image: url(@img/KV-mobile.png);
	}
}

.kv__title {
	position: absolute;
	top: 235px;
	right: 6%;
	width: 594px;

	@include pc-small {
		right: 2%;
		width: 50%;
	}

	@include mobile {
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

	@include pc-small {
		top: 42%;
        left: 5%;
		width: 50%;
	}

	@include mobile {
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