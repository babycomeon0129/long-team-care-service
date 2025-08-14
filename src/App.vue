
<template>
    <TheHome />
</template>

<script setup>
import TheHome from './view/TheHome.vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
	duration: 1000,
});
</script>

