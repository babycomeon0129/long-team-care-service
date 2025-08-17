<template>
	<footer>
		Copyright © 2023 天下數位發展部及整合傳播部企劃製作 <br class="for-mobile" />All rights reserved. <br class="for-pc"/>
		版權所有，禁止擅自轉貼節錄<br/>
		<a>隱私權政策</a>
	</footer>
</template>

<style lang="scss" scoped>
footer {
	padding: 24px 0 16px 0;
	border-top: 1px solid var(--color-green) ;
	font-size: 1.3rem;
	line-height: 1.5;
	text-align: center;
	color: #707070;
	background-color: #fff;

	@include mobile {
		padding: 15px 15px 35px 15px;
	}

	> a {
		text-decoration: underline;
		color: #707070;
	}
}
</style>