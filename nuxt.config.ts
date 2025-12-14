// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	devtools: { enabled: false },
	ssr: true,
	experimental: {
		componentIslands: true,
	},
	app: {
		head: {
			titleTemplate: "Udan Jayanith",
		},
	},
	css: [
		// CSS file in the project
		"./app/assest/styles.css",
	],
});
