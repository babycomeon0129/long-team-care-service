<template>
	<section class="preface">
		<div class="preface__container container">
			<div v-if="!isMobile" class="preface__image" data-aos="fade-right">
				<img src="@img/directions.png" class="rwdimg" alt="長照2.0，讓照顧的路上有專業"/>
			</div>
			<div class="preface__content" :data-aos="isMobile ? 'fade-up' : 'fade-left'">
				<img
					v-if="!isMobile"
					src="@img/sub-title.png"
					class="preface__subtitle"
					alt="long term care services"
					loading="lazy"
				/>
				<h1>長照2.0，<br />讓照顧的路上有專業</h1>
				<img
					v-if="isMobile"
					src="@img/sub-title-mobile.png"
					class="preface__subtitle--mobile"
					alt="long term care services"
					loading="lazy"
				/>
				<p>台灣走向超高齡社會，速度比想像中還要快又急，隨著人口老化加速，未來需要照顧年長父母的青壯人口，只會增加，不會減少。
				老年人壽命的延長，也表示照顧的時間會愈來愈長；甚至是在自己退休之後，仍須持續照顧長輩。
				「上有高堂，下有嗷嗷待哺」，三明治世代所面臨的困境，才是最需要協助的一群人。<br /><br />
				面對長照，經濟協助外，對「照顧者」提供專業協助更是關鍵！</p>
				<div class="preface__line" />
			</div>
		</div>
	</section>
</template>

<script setup>
import { inject } from 'vue';

const isMobile = inject('isMobile', false);
</script>

<style lang="scss" scoped>
.preface {
	padding: 120px 0 56px 0;

	@include mobile {
		padding: 56px 0 96px 0;
	}
}
.preface__container {
	display: grid;
	grid-template-columns: 406px 430px;
	column-gap: 130px;
	padding: 0 300px 0 175px;

	@include pc-small {
		grid-template-columns: 1fr 1.2fr;
		column-gap: 100px;
		padding: 0 5%;
	}

	@include mobile {
		grid-template-columns: 1fr;
		padding: 0 24px;
	}
}

.preface__content {
	position: relative;
	margin-top: 40px;
	font-size: 1.6rem;
	font-weight: 500;
	line-height: 1.9;
	letter-spacing: .16rem;
	color: #3F3F3F;

	@include mobile {
		margin-top: 0;
	}

	> h1 {
		margin: 0;
		font-size: 3.2rem;
		font-weight: bold;
		line-height: 1.4;
		letter-spacing: .64rem;
		color: var(--color-deep-green);

		@include mobile {
			font-size: 2.4rem;
			letter-spacing: .24rem;
		}
	}

	p {
		margin: 16px 0 0 0;

		@include mobile {
			margin: 0;
		}
	}
}

.preface__subtitle {
	position: absolute;
	top: 0;
	left: -55px;

	&--mobile {
		margin: 16px 0;
	}
}

.preface__line {
	position: absolute;
	bottom: -56px;
	right: 0;
	width: 215px;
	height: 2px;
	border-radius: 10px;
	background-color: var(--color-green);

	@include mobile {
		bottom: -38px;
	}

	&::before {
		content: '';
		position: absolute;
		bottom: 0;
		right: 26px;
		display: block;
		width: 7px;
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
		width: 20px;
		height: 2px;
		border-radius: 10px;
		background-color: var(--color-orange);
	}
}

</style>