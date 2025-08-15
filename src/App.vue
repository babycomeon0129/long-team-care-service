
<template>
	<TheHeader />
    <TheHome />
	<TheFooter />
</template>

<script setup>
import { provide } from 'vue';
import TheHome from '@view/TheHome.vue';
import TheHeader from '@components/TheHeader.vue';
import TheFooter from '@components/TheFooter.vue';
import { useMediaQuery } from '@vueuse/core';
import AOS from 'aos';
import 'aos/dist/aos.css';

const isMobile = useMediaQuery('(max-width: 767px)');
provide('isMobile', isMobile);

AOS.init({
	duration: 1000,
});
</script>

