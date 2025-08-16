import { fileURLToPath, URL } from 'node:url';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';

// https://vite.dev/config/
export default defineConfig({
	base: '/long-term-care-service/',
	plugins: [
		vue(),
		vueDevTools(),
		createSvgIconsPlugin({
			iconDirs: [fileURLToPath(new URL('./src/assets/images/svg', import.meta.url))],
			symbolId: 'icon-[name]',
		}),
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
			'@img': fileURLToPath(new URL('./src/assets/images', import.meta.url)),
			'@style': fileURLToPath(new URL('./src/styles', import.meta.url)),
			'@utils': fileURLToPath(new URL('./src/utils', import.meta.url)),
			'@components': fileURLToPath(new URL('./src/components', import.meta.url)),
			'@view': fileURLToPath(new URL('./src/view', import.meta.url)),
		},
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: "@use '@style/base/mixins' as *;",
			},
		},
	},
});
