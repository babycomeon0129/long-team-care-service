<template>
	<section class="advertorial">
		<div class="advertorial__container container">
			<TheTitle
				preTitle="照顧現場"
				title="預見安心變老"
				subTitle="LTCS LIVE"
			/>
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
								<img
									src="@img/slide-line.png" class="advertorial__slide-line"
									alt="line"
									loading="lazy"
								/>
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
import TheTitle from './common/TheTitle.vue';
import { imgSrc } from '@utils/common';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const modules = [Navigation, Pagination];
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

</script>

<style lang="scss" scoped>

.advertorial {
	padding-top: 120px;

	@include mobile {
		padding: 56px 0;
	}
}

.advertorial__container {
	padding-left: 40px;

	@include mobile {
		padding-left: 24px;
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
		letter-spacing: .16rem;
		white-space: nowrap;

		@include mobile {
			min-height: 44.78px;
			font-size: 1.4rem;
			letter-spacing: .14rem;
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

.advertorial__slide-image {
	line-height: 0;
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
	background-color: transparent;
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
	background-image: url(@img/swiper-arrow.png);
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
