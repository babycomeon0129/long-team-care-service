
<template>
	<TheHeader />
    <TheHome />
	<TheFooter />
</template>

<script setup>
import TheHome from '@view/TheHome.vue';
import TheHeader from '@components/TheHeader.vue';
import TheFooter from '@components/TheFooter.vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
	duration: 1000,
});
</script>

