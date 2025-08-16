<template>
	<header>
		<img src="@img/logo.png" class="header__logo" />
		<SvgIcon
				name="icon--burger"
				class="header__burger for-mobile"
				@click="showNav = true"
		/>
		<nav class="header__nav" :class="{'show': showNav}">
			<SvgIcon
				name="icon--burger-close"
				class="header__burger header__burger--close for-mobile"
				@click="showNav = false"
			/>
			<ul class="header__list" @click="closeMobileNav">
				<li @click="scrollToBlock('kv')">首頁<span /></li>
				<li @click="scrollToBlock('advertorial')">照顧現場<span /></li>
				<li @click="scrollToBlock('link-out')">一看就懂常照2.0<span /></li>
				<li>長照地圖<span /></li>
			</ul>
		</nav>
	</header>
</template>

<script setup>
import { ref, inject } from 'vue';
import SvgIcon from './common/SvgIcon.vue';
import { scrollToBlock } from '@utils/common';

const isMobile = inject('isMobile', false);
const showNav = ref(false);

const closeMobileNav = () => {
	if (isMobile) {
		showNav.value = false;
	}
}
</script>

<style lang="scss" scoped>
header {
	position: fixed;
	top: 0;
	left: 0;
	z-index: 10;
	display: flex;
	justify-content: space-between;
	width: 100%;
	padding: 16px 40px;
	font-size: 1.6rem;
	background-color: rgba($color: #fff, $alpha: .8);

	@include tablet {
		padding: 16px 12px;
	}

	@include mobile {
		padding: 12px;
	}
}

.header__logo {
	width: 282px;
	height: auto;

	@include mobile {
		width: 212px;
	}
}

.header__nav {
	display: flex;
	align-items: center;

	@include mobile {
		position: fixed;
		top: 0;
		left: 0;
		justify-content: center;
		width: 100%;
		height: 100vh;
		background-color: #fff;

		/* 關閉狀態：常駐 DOM，用透明+不可點擊隱藏 */
		opacity: 0;
		visibility: hidden;
		pointer-events: none;

		/* 雙向都能過渡 */
		transition: opacity .3s ease, visibility 0s linear .3s;

		&.show {
			opacity: 1;
			visibility: visible;
			pointer-events: auto;

			/* 顯示時 visibility 立即生效 */
			transition-delay: 0s, 0s;
		}
	}
}

.header__burger {
	width: 24px;
	height: 24px;
	cursor: pointer;

	&--close {
		position: absolute;
		top: 15px;
		right: 16px;
	}
}

.header__list {
	> li {
		position: relative;
		display: inline;
		padding: 0 24px;
		font-weight: 500;
		color: #333;
		transition: .3s color;
		cursor: pointer;

		@include mobile {
			display: list-item;
			width: 243px;
			padding: 24px 0;
			font-size: 24px;
			text-align: center;
		}

		&:hover {
			color: var(--color-orange);

			span {
				transform: scaleX(1);

				@include mobile {
					transform: scaleX(0);
				}
			}
		}

		&:last-child {
			padding: 0 0 0 24px;

			@include mobile {
				padding: 24px 0;
			}

			span {
				width: calc(100% - 24px);
			}
		}

		&:not(:last-child)::after  {
			content: '';
			position: absolute;
			top: calc((100% - 12px) /2);
			right: 0;
			display: block;
			width: 1px;
			height: 12px;
			background-color: #E4E4E4;

			@include mobile {
				top: auto;
				bottom: 0;
				width: 100%;
				height: 1px;
			}
		}

		span {
			position: absolute;
			bottom: -6px;
			left: 24px;
			width: calc(100% - 48px);
			height: 2px;
			border-radius: 10px;
			background-color: var(--color-green);
			transform: scaleX(0);
			transform-origin: left center;
			transition: transform .3s ease; /* 只動 transform，順暢 */

			&::before {
				content: '';
				position: absolute;
				bottom: 0;
				right: 10px;
				display: block;
				width: 3px;
				height: 2px;
				border-radius: 10px;
				background-color: var(--color-orange);
			}

			&::after {
				content: '';
				position: absolute;
				bottom: 0;
				right: 0;
				display: block;
				width: 8px;
				height: 2px;
				border-radius: 10px;
				background-color: var(--color-orange);
			}
		}
	}

	&.show {
		display: block;
	}
}

</style>