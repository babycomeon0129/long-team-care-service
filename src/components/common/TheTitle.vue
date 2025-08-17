<template>
	<div class="title">
		<h1><span>{{ preTitle }}</span><br />{{ title }}</h1>
		<h2>{{ subTitle }}</h2>
	</div>
</template>

<script setup>
const { preTitle, title, subTitle } = defineProps(['preTitle', 'title', 'subTitle']);
</script>

<style lang="scss" scoped>

.title {
	position: relative;
	max-width: 1440px;
	margin-bottom: 32px;
	margin-left: 267px;
	color: var(--color-deep-green);

	@include pc-small {
		margin-bottom: 33px;
		margin-left: 130px;
	}

	@include mobile {
		margin-left: 0;
	}

	> h1 {
		margin: 0;
		font-size: 4rem;
		font-weight: bold;
		line-height: 1.3;
		letter-spacing: .8rem;

		@include mobile {
			margin-bottom: 16px;
			font-size: 3.2rem;
		}

		span {
			color: #333;
		}
	}

	> h2 {
		position: absolute;
		top: 0;
		left: 0;
		margin: 0;
		font-family: 'Lato';
		font-size: 1.4rem;
		font-weight: 700;
		line-height: 1;
		letter-spacing: .42rem;
		white-space: nowrap;
		transform: translate(-24px, 8px) rotate(90deg);
		transform-origin: top left;

		@include mobile {
			position: static;
			font-size: 1.2rem;
			transform: translate(0, 0) rotate(0);
		}

		&::before {
			content: '';
			position: absolute;
			bottom: -8px;
			left: 0;
			display: block;
			width: 11px;
			height: 1px;
			background-color: var(--color-orange);
		}

		&::after {
			content: '';
			position: absolute;
			bottom: -8px;
			left: 15px;
			display: block;
			width: 4px;
			height: 1px;
			background-color: var(--color-orange);
		}
	}
}
</style>
