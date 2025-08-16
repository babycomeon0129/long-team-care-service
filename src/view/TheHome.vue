<template>
    <main class="p-home">
		<TheKv />
		<ThePreface />
		<TheAdvertorial />
		<TheLinkOut />
		<TheMap />
    </main>
</template>

<script setup>
import TheKv from '@components/TheKv.vue';
import ThePreface from '@components/ThePreface.vue';
import TheAdvertorial from '@components/TheAdvertorial.vue';
import TheLinkOut from '@components/TheLinkOut.vue';
import TheMap from '@components/TheMap.vue';
</script>

<style lang="scss" scoped>
main {
	overflow-x: hidden;
}
</style>
