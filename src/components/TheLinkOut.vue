<template>
	<section class="link-out">
		<div class="link-out__container container">
			<TheTitle
				preTitle="5分鐘一看就懂"
				title="長照2.0"
				subTitle="LTCS Knowledge"
			/>
			<div class="link-out__wrapper">
				<div class="link-out__card-list">
					<div class="link-out__card">
						<div class="link-out__card-img">
							<img
								src="@img/link-out-img-1.png"
								class="rwdimg"
								alt="服務對象"
								loading="lazy"
							/>
							<div class="link-out__card-img-border" />
						</div>
						<h3>服務對象</h3>
						<p>經各縣市長期照顧管理中心評估，符合長照需要等級2級以上者，並符合下列之一，65歲以上老人、55歲以上原住民、50歲以上失智症者、失能身心障礙者。</p>
					</div>
					<div class="link-out__card">
						<div class="link-out__card-img">
							<img
								src="@img/link-out-img-2.png"
								class="rwdimg"
								alt="申請流程"
								loading="lazy"
							/>
							<div class="link-out__card-img-border" />
						</div>
						<h3>申請流程</h3>
						<ol class="link-out__card-content-list">
							<li>直接撥打<b>長照專線1966</b></li>
							<li>聯絡當地長期照顧管理中心</li>
							<li>住院期間聯絡出院準備銜接長照服務小組或是線上申請</li>
						</ol>
					</div>
					<div class="link-out__card">
						<div class="link-out__card-img">
							<img
								src="@img/link-out-img-3.png"
								class="rwdimg"
								alt="服務內容"
								loading="lazy"
							/>
							<div class="link-out__card-img-border" />
						</div>
						<h3>服務內容</h3>
						<p>依據個案管理員擬訂照顧計畫，提供照顧及專業服務、交通接送、輔具及居家無障礙環境改善與喘息服務，四大類給付。</p>
					</div>
				</div>
				<div class="link-out__more">
					<img src="@img/line.png" class="link-out__line for-pc" />
					<ButtonMore text="了解更多長照2.0" @click="clickBtn" />
				</div>
			</div>
			<img
				src="@img/bg-round.png"
				class="link-out__bg"
				alt="bg"
				loading="lazy"
			/>
		</div>
	</section>
</template>

<script setup lang="ts">
import ButtonMore from './common/ButtonMore.vue';
import TheTitle from './common/TheTitle.vue';

const clickBtn = () => window.open('https://event.cw.com.tw/2023mohw/Infographic.pdf', '_blank', 'noopener,noreferrer')
</script>

<style lang="scss" scoped>
@use '@style/link-out';
</style>