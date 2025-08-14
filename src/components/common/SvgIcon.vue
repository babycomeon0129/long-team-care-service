<template>
	<svg aria-hidden="true">
		<use :xlink:href="symbolId" :fill="color" />
	</svg>
</template>

<script setup>
import { computed } from 'vue'

// props 定義
const props = defineProps({
	prefix: {
		type: String,
		default: 'icon',
	},
	name: {
		type: String,
		required: true,
	},
	color: {
		type: String,
		default: '#333',
	},
})

// 計算 symbolId
const symbolId = computed(() => `#${props.prefix}-${props.name}`)
</script>
