// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	devtools: { enabled: false },
	ssr: true,

	experimental: {
		componentIslands: false,
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
						"I enjoy working on ideas that interest me and i'm looking toward into backend engineering and systems programming.",
				},

				{
					name: "keywords",
					content: "udan-jayanith, Udan, Udan Jayanith, udan jayanith",
				},
				{ name: "author", content: "Udan Jayanith" },
				{
					name: "google-site-verification",
					content: "H38MTeEzj4NwDjK77K6_F1_JwYjmysZOuB1vx_If0H8",
				},
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
