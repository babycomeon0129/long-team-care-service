<template>
	<div class="title">
		<h1><span>{{ preTitle }}</span><br />{{ title }}</h1>
		<h2>{{ subTitle }}</h2>
	</div>
</template>

<script setup>
const { preTitle, title, subTitle} = defineProps(['preTitle', 'title', 'subTitle']);
</script>

<style lang="scss" scoped>

.title {
	position: relative;
	margin-bottom: 32px;
	margin-left: 180px;
	color: var(--color-deep-green);

	@include pc-small {
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
		letter-spacing: .2em;

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
		top: 46px;
		left: -82px;
		margin: 0;
		font-family: 'Lato';
		font-size: 1.4rem;
		font-weight: 700;
		line-height: 1;
		letter-spacing: .22em;
		white-space: nowrap;
		transform: rotate(90deg);

		@include mobile {
			position: static;
			margin: 0 0 24px 0;
			font-size: 1.2rem;
			transform: rotate(0);
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
