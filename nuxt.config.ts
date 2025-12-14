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
			title: "Udan Jayanith",
			htmlAttrs: {
				lang: "en",
			},
			meta: [
				{
					name: "description",
					content:
						"Udan is someone who enjoys building application software and diving into ideas that genuinely interest him. He likes experimenting, learning along the way, and turning concepts into practical, meaningful creations",
				},

				{
					name: "keywords",
					content: "udan-jayanith, Udan, Udan Jayanith, udan jayanith",
				},
				{ name: "author", content: "Udan Jayanith" },
			],
			link: [
				{ rel: "preconnect", href: "https://fonts.googleapis.com" },
				{ rel: "preconnect", href: "https://fonts.gstatic.com" },
				{
					rel: "stylesheet",
					href: "https://fonts.googleapis.com/css2?family=Balthazar&family=Merriweather:ital,opsz,wght@0,18..144,300..900;1,18..144,300..900&display=swap",
				},
			],
		},
	},

	css: [
		// CSS file in the project
		"./app/assest/styles.css",
	],

	modules: ["@nuxt/image"],
});
