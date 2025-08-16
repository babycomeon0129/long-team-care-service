<template>
	<button class="button-more">
		<span>{{ text }}</span>
		<div class="button-more__arrow" />
	</button>
</template>

<script setup>
const { text } = defineProps(['text'])
</script>

<style lang="scss" scoped>
.button-more {
	position: relative;
	width: 330px;
	height: 64px;
	overflow: hidden;
	border: none;
	border-radius: 60px;
	text-align: left;
	font-size: 2rem;
	font-weight: bold;
	line-height: 1;
	letter-spacing: .2rem;
	color: #FFF;
	background-color: var(--color-deep-green);
	cursor: pointer;

	@include mobile {
		width: 269px;
		height: 48px;
		font-size: 1.6rem;
		letter-spacing: .16rem;
	}

	&:hover {
		&::before {
			left: calc(100% - 64px);
			transition: left .3s linear;

			@include mobile {
				left: calc(100% - 48px);
			}
		}

		.button-more__arrow {
			background: url("@img/button-arrow-hover.png") no-repeat center;
			background-size: contain;
			transition: background .1s linear .3s;
		}
	}

	&::before,
	&::after {
		content: '';
		position: absolute;
		top: 0;
		display: block;
		width: 64px;
		height: 64px;
		border-radius: 50%;

		@include mobile {
			width: 48px;
			height: 48px;
		}
	}

	&::before {
		left: - 64px;
		z-index: 1;
		background-color: var(--color-orange);
		transform: translateX(0);
		transition: left .3s linear;

		@include mobile {
			left: -48px;
		}
	}

	&::after {
		right: 0px;
		background-color: var(--color-green);
	}

	span {
		position: absolute;
		top: 50%;
		left: 40px;
		z-index: 1;
		transform: translateY(-50%);

		@include mobile {
			left: 32px;
		}
	}
}

.button-more__arrow {
	position: absolute;
	top: 0;
	right: 0;
	z-index: 2;
	display: inline-block;
	width: 32px;
	height: 32px;
	background: url("@img/button-arrow.png") no-repeat center;
	background-size: contain;
	transform: translateX(-50%) translateY(50%);
	transition: background .3s linear;

	@include mobile {
		width: 24px;
		height: 24px;
	}
}
</style>