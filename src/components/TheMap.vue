<template>
	<section class="map">
		<div class="map__container container">
			<TheTitle
				pre-title="長照地圖"
				title="厝邊好朋友"
				sub-title="LTCS MAP"
				class="map__title"
			/>
			<div class="map__wrapper">
				<Transition name="fade">
					<div v-if="!showMap" class="map__wrapper-content">
						<div class="map__card-list">
							<div class="map__card">
								<div class="map__card-img">
									<img
										src="@img/map-img-1.png"
										class="rwdimg" alt="透過左上角篩選功能，找到適合的服務機構"
										loading="lazy"
									/>
									<SvgIcon name="map-img-1-finger" class="swing" />
								</div>
								<div class="map__card-tips">TIPS 1</div>
								<div>透過左上角篩選功能，找到適合的服務機構</div>
							</div>
							<div class="map__card">
								<div class="map__card-img">
									<img
										src="@img/map-img-2.png"
										class="rwdimg"
										alt="直接點擊地圖，定位篩選出範圍內的相關服務機構"
										loading="lazy"
									/>
								</div>
								<div class="map__card-tips">TIPS 2</div>
								<div>直接點擊地圖，定位篩選出範圍內的相關服務機構</div>
							</div>
							<div class="map__card">
								<div class="map__card-img">
									<img
										src="@img/map-img-3.png"
										class="rwdimg"
										alt="點選下方篩選列表，觀看更詳細的聯絡資訊"
										loading="lazy"
									/>
								</div>
								<div class="map__card-tips">TIPS 3</div>
								<div>點選下方篩選列表，觀看更詳細的聯絡資訊</div>
							</div>
						</div>
						<ButtonMore text="尋找附近的長照服務" @click="showMap = !showMap" />
					</div>
				</Transition>
				<Transition name="fade">
					<div v-show="showMap" class="map__iframe">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d58856.734090249396!2d120.32334177145947!3d22.782228290945568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z6ZW354WnMi4w!5e0!3m2!1szh-TW!2stw!4v1755336312149!5m2!1szh-TW!2stw"
							class="rwdimg"
							referrerpolicy="no-referrer-when-downgrade"
							allowfullscreen
						/>
					</div>
				</Transition>
			</div>
		</div>
	</section>
</template>

<script setup>
import { ref } from 'vue';
import ButtonMore from './common/ButtonMore.vue';
import SvgIcon from './common/SvgIcon.vue';
import TheTitle from './common/TheTitle.vue';

const showMap = ref(false);
</script>

<style lang="scss" scoped>
.map {
	padding: 120px 0 160px 0;

	@include mobile {
		padding: 56px 0 80px 0;
	}
}

.map__container {
	padding: 0 40px;

	@include mobile {
		padding: 0;
	}
}

.map__title {
	@include mobile {
		margin-left: 24px;
	}
}

.map__wrapper {
	position: relative;
	background: url(@img/map.jpg) center;
	background-size: cover;
	padding: 30px;
	border: 4px solid var(--color-green);
	border-radius: 0 40px 0 40px;

	@include mobile {
		padding: 16px 16px 14.34px 16px;
		border-radius: 0 16px 0 16px;
	}
}

.map__wrapper-content {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 163px 0;
	background-color: #FFF;

	@include mobile {
		padding: 122px 0;
	}
}

.map__card-list {
	position: relative;
	z-index: 2;
	display: flex;
	justify-content: space-between;
	width: 100%;
	max-width: 840px;
	margin-bottom: 48px;

	@include mobile {
		flex-direction: column;
		align-items: center;

		> div {
			margin-bottom: 56px;
		}
	}

	> div {
		width: 230px;
	}
}

.map__card {
	font-size: 1.6rem;
	font-weight: 500;
	line-height: 1.6;
	letter-spacing: .16rem;

	&:nth-child(1) .map__card-img {
		margin: 0 19.5px 16px 19.5px;
	}

	&:nth-child(2) {
		margin-top: 41px;

		@include mobile {
			margin-top: 0;
		}

		.map__card-img {
			margin: 0 50px 16px 50px;
			animation-delay: 2s;
		}
	}

	&:nth-child(3) {
		margin-top: 103px;

		@include mobile {
			margin-top: 0;
		}

		.map__card-img {
			margin: 0 12.5px 16px 12.5px;
			animation-delay: 4s;
		}
	}
}

.map__card-img {
	position: relative;
	animation: pop 6s ease-in-out infinite;

	> svg {
		position: absolute;
		right: 0;
		bottom: 0;
		width: 47px;
		height: 60px;
	}
}

.map__card-tips {
	color: var(--color-orange);
}

.map__iframe {
	position: relative;
	width: 100%;
	padding-top: 56.25%;

	@include mobile {
		padding-top: 178%;
	}

	> iframe {
		position: absolute;
		top: 0;
		left: 0;
		border: none;
	}
}

.swing {
    display: inline-block;
    animation: swing 1s ease-in-out infinite;
}

@keyframes swing {
    0%   { transform: translateX(0); }
    25%  { transform: translateX(-5px); }
    50%  { transform: translateX(5px); }
    75%  { transform: translateX(-5px); }
    100% { transform: translateX(0); }
}

@keyframes pop {
	0%   { transform: scale(1);   filter: saturate(0.9); }
	10%  { transform: scale(1.2); filter: saturate(1.2); }
	25%  { transform: scale(1.2); filter: saturate(1.2); }
	40%  { transform: scale(1);   filter: saturate(0.9); }
	100% { transform: scale(1);   filter: saturate(0.9); }
}
</style>