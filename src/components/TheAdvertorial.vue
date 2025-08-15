<template>
	<section class="advertorial">
		<div class="advertorial__container container" data-aos="fade-up">
			<div class="advertorial__title">
				<h1><span>照顧現場</span><br />預見安心變老</h1>
				<h2>LTCS LIVE</h2>
			</div>
			<div class="advertorial__slide">
				<swiper
					:modules="modules"
					:slidesPerView="1.08"
					:breakpoints="{
						767: {
							slidesPerView: 1.4
						}
					}"
					:autoplay="{
						disableOnInteraction: false,
					}"
					navigation
					pagination
					class="advertorial__slide-wiper"
				>
					<swiper-slide
						v-for="slide in slideList"
						:key="slide.id"
						v-slot="{ isActive }"
					>
						<a
							:href="slide.link"
							target="_blank"
							class="advertorial__slide-wrapper"
							rel="noopener noreferrer"
						>
							<div class="advertorial__slide-image">
								<img
									:src="imgSrc(slide.image)"
									:alt="slide.title"
									class="rwdimg"
									loading="lazy"
								/>
							</div>
							<div class="advertorial__slide-content" :class="{'opacity': !isActive}">
								<h3 v-html="slide.title" />
								<p>{{ slide.subtitle }}</p>
								<img src="@img/slide-line.png" class="advertorial__slide-line" />
							</div>
						</a>
					</swiper-slide>
				</swiper>
			</div>
		</div>
	</section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const modules = [Navigation, Pagination, Autoplay];

const slideList = [
	{
		id:'slide-1',
		image: 'advertorial-img-1.jpg',
		title: '面對照顧問題壓力大？張曼娟：<br class="for-pc" />記得提醒自己，這一切會過去的',
		subtitle: '各位照顧者又要展開新的一年，每天闖關又常感到孤單的日子。',
		link: 'https://www.cw.com.tw/article/5125049'
	},
	{
		id:'slide-2',
		image: 'advertorial-img-2.jpg',
		title: '小六生可能已是照顧者<br class="for-pc" />日本小學生與失智者共開店',
		subtitle: '當我們擔心學童與失智者接觸的安危，日本小學已納入課程...',
		link: 'https://www.cw.com.tw/article/5124631'
	},
	{
		id:'slide-3',
		image: 'advertorial-img-3.jpg',
		title: '不想活得又老又窮<br class="for-pc" />避開50歲最後悔的5個財務決定',
		subtitle: '「早知道會活那麼久，當初就……」',
		link: 'https://www.cw.com.tw/aging/article/5125789'
	}
]

const imgSrc = (imgName) => {
	return new URL(`../assets/images/${imgName}`, import.meta.url).href;
};

</script>

<style lang="scss" scoped>
.advertorial__container {
	padding: 120px 0 0 40px;

	@include mobile {
		padding: 56px 0 56px 24px;
	}
}

.advertorial__title {
	position: relative;
	margin-left: 180px;
	color: var(--color-deep-green);

	@include pc-small {
		margin-left: 130px;
	}

	@include mobile {
		margin-left: 0;
	}

	> h1 {
		margin: 0 0 16px 0;
		font-size: 4rem;
		font-weight: bold;
		line-height: 1.3;
		letter-spacing: .2em;

		@include mobile {
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

.advertorial__slide-wrapper {
	position: relative;
	color: #FFF;

	@include mobile {
		color: #222;
	}
}

.advertorial__slide-content {
	position: absolute;
	bottom: 107px;
	left: 180px;
	width: 492px;
	opacity: 1;
	transition: .3s opacity;

	@include pc-small {
		bottom: 15%;
		left: 10%;
	}

	@include mobile {
		position: static;
		width: 100%;
		margin-top: 16px;
	}

	> h3 {
		margin: 0;
		font-size: 3.2rem;
		font-weight: bold;
		line-height: 1.4;

		@include pc-small {
			font-size: 2rem;
		}
	}

	> p {
		margin: 8px 0 23px 0;
		font-size: 1.6rem;
		line-height: 1.6;
		letter-spacing: .1em;
		white-space: nowrap;

		@include mobile {
			min-height: 44.78px;
			font-size: 1.4rem;
			white-space: wrap;
		}
	}

	&.opacity {
		opacity: 0;
	}
}

.advertorial__slide-line {
	@include mobile {
		width: 210px;
		height: 17px;
	}
}

.advertorial__slide-wiper {
	border-radius: 40px 0 0 0;

	@include mobile {
		padding-bottom: 16px;
		border-radius: 16px 0 0 0;
	}
}

:deep(.swiper-pagination-bullets) {
	bottom: 59px;
	left: 180px;
	width: auto;

	@include pc-small {
		bottom: 10%;
		left: 7%;
	}

	@include mobile {
		bottom: 0;
		left: 0;
	}
}

:deep(.swiper-pagination-bullet) {
	border: 1px solid var(--color-green);
}

:deep(.swiper-pagination-bullet-active) {
	border: 1px solid var(--color-orange);
	background-color: var(--color-orange);
}

:deep(.swiper-button-prev) {
	display: none;
}

:deep(.swiper-button-next) {
	right: 21.4%;
	width: 64px;
	height: 64px;
	background-image: url(@img/icon--arrow.png);
	background-size: contain;

	@include mobile {
		top: calc(50% - 70px);
		right: 40px;
		width: 32px;
		height: 32px;
	}

	&::after {
		content: none;
	}
}

</style>